// Compares every component variant with its Figma reference render and fails when it drifts.
//   npm run test:visual                 all components in references/
//   npm run test:visual -- button       one component
// Writes tools/figma-visual/out/{results.json,report.html,diff/*.png}.
// CHROMIUM_PATH points Playwright at a preinstalled Chromium instead of its own download.
import { mkdirSync, readFileSync, readdirSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { preview } from 'vite';
import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import { existsSync } from 'node:fs';
import { compareInPage, layersFor } from './spec-check.mjs';

const here = import.meta.dirname;
const out = join(here, 'out');
rmSync(out, { recursive: true, force: true });
mkdirSync(join(out, 'diff'), { recursive: true });

const PAD = 8; // capture margin around the element, enough for shadows and focus rings
const SEARCH = 3; // +/- px alignment search between reference and capture

const only = process.argv[2];
const components = readdirSync(join(here, 'references')).filter((c) => !only || c === only);
if (!components.length) throw new Error(`No references for "${only}"`);

// Composite a (possibly transparent) PNG over white.
function onWhite(png) {
  const o = new PNG({ width: png.width, height: png.height });
  for (let i = 0; i < png.data.length; i += 4) {
    const a = png.data[i + 3] / 255;
    for (let c = 0; c < 3; c++) o.data[i + c] = Math.round(png.data[i + c] * a + 255 * (1 - a));
    o.data[i + 3] = 255;
  }
  return o;
}

function crop(png, x, y, w, h) {
  const o = new PNG({ width: w, height: h });
  for (let row = 0; row < h; row++) {
    for (let col = 0; col < w; col++) {
      const sx = x + col, sy = y + row, di = (row * w + col) * 4;
      if (sx < 0 || sy < 0 || sx >= png.width || sy >= png.height) o.data.set([255, 255, 255, 255], di);
      else o.data.set(png.data.subarray((sy * png.width + sx) * 4, (sy * png.width + sx) * 4 + 4), di);
    }
  }
  return o;
}

// Squared YIQ distance between two RGB pixels, as pixelmatch measures it (0 … 35215).
function delta(a, i, b, j) {
  const dr = a[i] - b[j], dg = a[i + 1] - b[j + 1], db = a[i + 2] - b[j + 2];
  const y = dr * 0.29889531 + dg * 0.58662247 + db * 0.11448223;
  const iq = dr * 0.59597799 - dg * 0.2741761 - db * 0.32180189;
  const q = dr * 0.21147017 - dg * 0.52261711 + db * 0.31114694;
  return 0.5053 * y * y + 0.299 * iq * iq + 0.1957 * q * q;
}

// A pixel differs when its colour lies outside the colour range of the other image's 3×3 neighbourhood (per channel),
// in both directions. Glyph anti-aliasing and sub-pixel text advances (which differ between machines, e.g. CI vs
// local) only blend neighbouring colours, so they no longer count; a wrong or missing fill, border, icon or text
// still does. Exact geometry (padding, gaps, sizes, font) is the spec check's job, not the pixels'.
function differs(a, b, w, h, threshold) {
  const max = 35215 * threshold * threshold;
  const c = [0, 0, 0];
  const outside = (src, dst, x, y) => {
    const i = (y * w + x) * 4;
    for (let k = 0; k < 3; k++) {
      let lo = 255, hi = 0;
      for (let ny = Math.max(0, y - 1); ny <= Math.min(h - 1, y + 1); ny++)
        for (let nx = Math.max(0, x - 1); nx <= Math.min(w - 1, x + 1); nx++) {
          const v = dst[(ny * w + nx) * 4 + k];
          if (v < lo) lo = v;
          if (v > hi) hi = v;
        }
      c[k] = Math.min(hi, Math.max(lo, src[i + k]));
    }
    return delta(src, i, c, 0) > max;
  };
  const out = new Uint8Array(w * h);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) out[y * w + x] = outside(a, b, x, y) || outside(b, a, x, y) ? 1 : 0;
  return out;
}

// Align the reference inside the capture (centred on the element, then +/- SEARCH px) and keep the best match.
// Two metrics at the best alignment, both 1 px tolerant (see differs()):
//   mismatch — threshold 0.1: structure (text, icons, borders).
//   tint     — threshold 0.03: also catches subtle fills (e.g. a 6% background) that 0.1 ignores.
function compare(ref, capture, box) {
  const { width: w, height: h } = ref;
  const cx = PAD + box.width / 2 - w / 2, cy = PAD + box.height / 2 - h / 2;
  let best = null;
  for (let dy = -SEARCH; dy <= SEARCH; dy++) {
    for (let dx = -SEARCH; dx <= SEARCH; dx++) {
      const cand = crop(capture, Math.round(cx + dx), Math.round(cy + dy), w, h);
      const n = pixelmatch(ref.data, cand.data, null, w, h, { threshold: 0.1, includeAA: false });
      // Faint content (a translucent fill on a light page) matches at every offset at 0.1, so ties go to the finer
      // threshold, then to the offset nearest the centre.
      const fine = pixelmatch(ref.data, cand.data, null, w, h, { threshold: 0.03, includeAA: false });
      const off = Math.abs(dx) + Math.abs(dy);
      if (!best || n < best.n || (n === best.n && (fine < best.fine || (fine === best.fine && off < best.off)))) best = { n, fine, off, cand };
    }
  }
  const strong = differs(ref.data, best.cand.data, w, h, 0.1);
  const subtle = differs(ref.data, best.cand.data, w, h, 0.03);
  // Diff image: red = mismatch, orange = tint only, faded reference elsewhere.
  const diff = new PNG({ width: w, height: h });
  for (let p = 0; p < w * h; p++) {
    const g = 255 - (255 - (ref.data[p * 4] * 0.3 + ref.data[p * 4 + 1] * 0.59 + ref.data[p * 4 + 2] * 0.11)) * 0.1;
    diff.data.set(strong[p] ? [255, 0, 0, 255] : subtle[p] ? [255, 160, 0, 255] : [g, g, g, 255], p * 4);
  }
  const count = (m) => m.reduce((s, v) => s + v, 0) / (w * h);
  return { mismatch: count(strong), tint: count(subtle), diff, cand: best.cand };
}

function sideBySide(...pngs) {
  const w = pngs.reduce((s, p) => s + p.width + 4, -4), h = Math.max(...pngs.map((p) => p.height));
  const o = new PNG({ width: w, height: h });
  o.data.fill(255);
  let x = 0;
  for (const p of pngs) {
    PNG.bitblt(p, o, 0, 0, p.width, p.height, x, 0);
    x += p.width + 4;
  }
  return o;
}

const server = await preview({ configFile: join(here, 'vite.config.ts'), preview: { port: 4179, strictPort: true } });
// Without --font-render-hinting=none, some Chromium builds (e.g. the headless shell on CI) snap glyph advances to
// whole pixels, so labels render ~1 px narrower than Figma and on other machines. Fractional advances match Figma.
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined, args: ['--font-render-hinting=none'] });
const page = await (await browser.newContext({ deviceScaleFactor: 1, viewport: { width: 600, height: 300 } })).newPage();

// Environment fingerprint: text rendering differs between browser builds and machines, so print what this run used.
{
  await page.goto(`http://localhost:4179/?${new URLSearchParams({ component: 'button', props: JSON.stringify({ Variant: 'Default', Size: 'default', State: 'Default', 'Icon only': 'False' }) })}`);
  await page.waitForSelector('body[data-ready]');
  const cdp = await page.context().newCDPSession(page);
  await cdp.send('DOM.enable');
  await cdp.send('CSS.enable');
  const { root } = await cdp.send('DOM.getDocument', { depth: -1 });
  const { nodeId } = await cdp.send('DOM.querySelector', { nodeId: root.nodeId, selector: '.ds-button__label' });
  const fonts = (await cdp.send('CSS.getPlatformFontsForNode', { nodeId })).fonts.map((f) => `${f.familyName} (${f.isCustomFont ? 'web font' : 'system'})`);
  const width = await page.evaluate(() => document.querySelector('.ds-button__label').getBoundingClientRect().width);
  // References and thresholds are calibrated on this build (see REFERENCE_CHROMIUM_* in .github/workflows/ci.yml).
  const REFERENCE_CHROMIUM = '141.0.7390.37';
  if (browser.version() !== REFERENCE_CHROMIUM) console.warn(`Warning: Chromium ${browser.version()} is not the reference build ${REFERENCE_CHROMIUM}; expect ~1 point higher mismatch. Set CHROMIUM_PATH to the reference build.`);
  console.log(`Environment: ${browser.version()} · label font ${fonts.join(', ')} · "Button" label box ${width.toFixed(2)} px (Figma: 46)`);
  // Inter Medium 13px "Button" (−0.5 % tracking) + 4px padding is 44.33px with fractional advances; whole pixels mean hinting is on.
  if (Number.isInteger(Math.round(width * 100) / 100)) throw new Error('Text is laid out on whole pixels (font hinting is on); comparisons with Figma would be off by ~1px.');
  await cdp.detach();
}

const results = [];
for (const component of components) {
  const manifest = JSON.parse(readFileSync(join(here, 'references', component, 'manifest.json')));
  const { maxMismatch, maxTint, maxSizeDelta } = manifest.thresholds;
  const specFile = join(here, 'references', component, 'spec.json');
  const spec = existsSync(specFile) ? JSON.parse(readFileSync(specFile)) : null;
  const layerMap = spec ? JSON.parse(readFileSync(join(here, 'references', component, 'layer-map.json'))).layers : null;
  if (!spec) console.warn(`Warning: ${component} has no spec.json; only pixels are compared.`);
  for (const entry of manifest.entries) {
    const params = new URLSearchParams({ component, brand: manifest.brand, scheme: manifest.scheme, props: JSON.stringify(entry.props) });
    await page.goto(`http://localhost:4179/?${params}`);
    await page.waitForSelector('body[data-ready]');
    // An entry may compare a part of the render (e.g. one menu option) instead of the whole #target.
    const target = entry.target ?? '#target';
    const el = page.locator(target).first();
    const box = await el.boundingBox();
    const state = entry.props.State;
    if (state === 'Hover') await el.hover();
    if (state === 'Press') {
      await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
      await page.mouse.down();
    }
    if (state === 'Focus' || state === 'Active') {
      await page.keyboard.press('Tab');
      // Fail loudly instead of silently comparing an unfocused render.
      await page.waitForFunction(() => document.activeElement && document.activeElement !== document.body);
      // Tab selects a filled input's text, which Figma does not draw; the caret is hidden by the screenshot.
      await page.evaluate(() => {
        const el = document.activeElement;
        if (el instanceof HTMLInputElement && el.value && el.selectionStart !== null) el.setSelectionRange(el.value.length, el.value.length);
      });
    }
    // Let the browser repaint after the interaction before taking the screenshot.
    await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
    const shot = await page.screenshot({
      clip: { x: box.x - PAD, y: box.y - PAD, width: box.width + PAD * 2, height: box.height + PAD * 2 },
      animations: 'disabled',
    });
    // Exact values (while Hover/Press/Focus is still active).
    const expected = spec && layersFor(spec, entry.nodeId);
    const specIssues = expected ? await page.evaluate(compareInPage, { map: layerMap, layers: expected, target }) : spec ? [`no spec for ${entry.nodeId}`] : [];
    if (state === 'Press') await page.mouse.up();
    await page.mouse.move(0, 0);

    const ref = onWhite(PNG.sync.read(readFileSync(join(here, 'references', component, `${entry.slug}.png`))));
    const r = compare(ref, PNG.sync.read(shot), box);
    const diffFile = `${component}--${entry.slug}.png`;
    writeFileSync(join(out, 'diff', diffFile), PNG.sync.write(sideBySide(ref, r.cand, r.diff)));
    const sizeDelta = Math.max(Math.abs(box.width - entry.nodeW), Math.abs(box.height - entry.nodeH));
    // `pixels: false` (with a `$why` in the manifest) leaves a variant to the size and spec checks.
    const pixelsOk = entry.pixels === false || (r.mismatch <= maxMismatch && r.tint <= maxTint);
    const pass = pixelsOk && sizeDelta <= maxSizeDelta && specIssues.length === 0;
    results.push({ component, slug: entry.slug, nodeId: entry.nodeId, mismatch: r.mismatch, tint: r.tint, specIssues, size: [box.width, box.height], figmaSize: [entry.nodeW, entry.nodeH], sizeDelta, pass, diffFile });
    const pct = (v) => `${(v * 100).toFixed(1).padStart(5)}%`;
    console.log(`${pass ? 'ok  ' : 'FAIL'} ${component}/${entry.slug.padEnd(42)} mismatch ${pct(r.mismatch)}  tint ${pct(r.tint)}${entry.pixels === false ? ' (not gated)' : ''}  Δsize ${sizeDelta.toFixed(1)}px  spec ${specIssues.length ? `${specIssues.length} off` : 'exact'}`);
    for (const issue of specIssues.slice(0, 4)) console.log(`       ${issue}`);
  }
}
await browser.close();
server.httpServer.close();

const failed = results.filter((r) => !r.pass);
writeFileSync(join(out, 'results.json'), JSON.stringify(results, null, 1));
const rows = results
  .sort((a, b) => b.mismatch - a.mismatch)
  .map((r) => `<tr class="${r.pass ? '' : 'fail'}"><td>${r.component}/${r.slug}</td><td>${(r.mismatch * 100).toFixed(1)}%</td><td>${(r.tint * 100).toFixed(1)}%</td><td>${r.specIssues.length ? r.specIssues.join('<br>') : 'exact'}</td><td>${r.size.map((v) => v.toFixed(1)).join('×')} / ${r.figmaSize.join('×')}</td><td><img src="diff/${r.diffFile}"></td></tr>`)
  .join('\n');
writeFileSync(
  join(out, 'report.html'),
  `<!doctype html><meta charset="utf-8"><title>Figma visual check</title>
<style>body{font:14px system-ui;margin:24px}td{padding:6px 12px;border-bottom:1px solid #eee}img{image-rendering:pixelated;height:60px}.fail{background:#fee}</style>
<h1>Figma visual check</h1><p>${results.length - failed.length}/${results.length} pass. Columns in each image: Figma · code · diff.</p>
<table><tr><th>Variant</th><th>Mismatch</th><th>Tint</th><th>Figma values</th><th>Size (code / Figma)</th><th>Figma · code · diff</th></tr>${rows}</table>`,
);
console.log(`\n${results.length - failed.length}/${results.length} variants within thresholds. Report: tools/figma-visual/out/report.html`);
process.exit(failed.length ? 1 : 0);
