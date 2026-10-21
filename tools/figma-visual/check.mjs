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

// Align the reference inside the capture (centred on the element, then +/- SEARCH px) and keep the best match.
function compare(ref, capture, box) {
  const { width: w, height: h } = ref;
  const cx = PAD + box.width / 2 - w / 2, cy = PAD + box.height / 2 - h / 2;
  let best = null;
  for (let dy = -SEARCH; dy <= SEARCH; dy++) {
    for (let dx = -SEARCH; dx <= SEARCH; dx++) {
      const cand = crop(capture, Math.round(cx + dx), Math.round(cy + dy), w, h);
      const diff = new PNG({ width: w, height: h });
      const n = pixelmatch(ref.data, cand.data, diff.data, w, h, { threshold: 0.1, includeAA: false });
      if (!best || n < best.n) best = { n, diff, cand };
    }
  }
  return { mismatch: best.n / (w * h), diff: best.diff, cand: best.cand };
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
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const page = await (await browser.newContext({ deviceScaleFactor: 1, viewport: { width: 600, height: 300 } })).newPage();

const results = [];
for (const component of components) {
  const manifest = JSON.parse(readFileSync(join(here, 'references', component, 'manifest.json')));
  const { maxMismatch, maxSizeDelta } = manifest.thresholds;
  for (const entry of manifest.entries) {
    const params = new URLSearchParams({ component, brand: manifest.brand, scheme: manifest.scheme, props: JSON.stringify(entry.props) });
    await page.goto(`http://localhost:4179/?${params}`);
    await page.waitForSelector('body[data-ready]');
    const el = page.locator('#target');
    const box = await el.boundingBox();
    const state = entry.props.State;
    if (state === 'Hover') await el.hover();
    if (state === 'Press') {
      await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
      await page.mouse.down();
    }
    if (state === 'Focus') await page.keyboard.press('Tab');
    const shot = await page.screenshot({
      clip: { x: box.x - PAD, y: box.y - PAD, width: box.width + PAD * 2, height: box.height + PAD * 2 },
      animations: 'disabled',
    });
    if (state === 'Press') await page.mouse.up();
    await page.mouse.move(0, 0);

    const ref = onWhite(PNG.sync.read(readFileSync(join(here, 'references', component, `${entry.slug}.png`))));
    const r = compare(ref, PNG.sync.read(shot), box);
    const diffFile = `${component}--${entry.slug}.png`;
    writeFileSync(join(out, 'diff', diffFile), PNG.sync.write(sideBySide(ref, r.cand, r.diff)));
    const sizeDelta = Math.max(Math.abs(box.width - entry.nodeW), Math.abs(box.height - entry.nodeH));
    const pass = r.mismatch <= maxMismatch && sizeDelta <= maxSizeDelta;
    results.push({ component, slug: entry.slug, nodeId: entry.nodeId, mismatch: r.mismatch, size: [box.width, box.height], figmaSize: [entry.nodeW, entry.nodeH], sizeDelta, pass, diffFile });
    console.log(`${pass ? 'ok  ' : 'FAIL'} ${component}/${entry.slug.padEnd(42)} ${(r.mismatch * 100).toFixed(1).padStart(5)}%  Δsize ${sizeDelta.toFixed(1)}px`);
  }
}
await browser.close();
server.httpServer.close();

const failed = results.filter((r) => !r.pass);
writeFileSync(join(out, 'results.json'), JSON.stringify(results, null, 1));
const rows = results
  .sort((a, b) => b.mismatch - a.mismatch)
  .map((r) => `<tr class="${r.pass ? '' : 'fail'}"><td>${r.component}/${r.slug}</td><td>${(r.mismatch * 100).toFixed(1)}%</td><td>${r.size.map((v) => v.toFixed(1)).join('×')} / ${r.figmaSize.join('×')}</td><td><img src="diff/${r.diffFile}"></td></tr>`)
  .join('\n');
writeFileSync(
  join(out, 'report.html'),
  `<!doctype html><meta charset="utf-8"><title>Figma visual check</title>
<style>body{font:14px system-ui;margin:24px}td{padding:6px 12px;border-bottom:1px solid #eee}img{image-rendering:pixelated;height:60px}.fail{background:#fee}</style>
<h1>Figma visual check</h1><p>${results.length - failed.length}/${results.length} pass. Columns in each image: Figma · code · diff.</p>
<table><tr><th>Variant</th><th>Pixel mismatch</th><th>Size (code / Figma)</th><th>Figma · code · diff</th></tr>${rows}</table>`,
);
console.log(`\n${results.length - failed.length}/${results.length} variants within thresholds. Report: tools/figma-visual/out/report.html`);
process.exit(failed.length ? 1 : 0);
