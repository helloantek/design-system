// Opens every story from the static Storybook build, fails on render/console errors and reports axe violations.
// Usage: npm run build-storybook && npm run test:storybook
import { createServer } from 'node:http';
import { readFileSync, existsSync } from 'node:fs';
import { join, extname } from 'node:path';
import { chromium } from 'playwright';
import { AxeBuilder } from '@axe-core/playwright';

const dir = join(import.meta.dirname, '../apps/storybook/storybook-static');
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.woff2': 'font/woff2', '.svg': 'image/svg+xml' };
const server = createServer((req, res) => {
  const path = join(dir, decodeURIComponent(new URL(req.url, 'http://x').pathname));
  const file = existsSync(path) && !path.endsWith('/') ? path : join(path, 'index.html');
  if (!existsSync(file)) return res.writeHead(404).end();
  res.writeHead(200, { 'content-type': types[extname(file)] ?? 'application/octet-stream' }).end(readFileSync(file));
}).listen(6007);

const { entries } = JSON.parse(readFileSync(join(dir, 'index.json')));
const stories = Object.values(entries).filter((e) => e.type === 'story');
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const context = await browser.newContext();
const page = await context.newPage();
let failed = 0;
for (const story of stories) {
  const errors = [];
  page.removeAllListeners('console');
  page.removeAllListeners('pageerror');
  // The browser's automatic /favicon.ico request is not part of any story.
  page.on('console', (m) => m.type() === 'error' && !m.location().url.endsWith('/favicon.ico') && errors.push(`${m.text()} [${m.location().url}]`));
  page.on('pageerror', (e) => errors.push(e.message));
  page.removeAllListeners('response');
  page.on('response', (r) => r.status() >= 400 && errors.push(`${r.status()} ${r.url()}`));
  await page.goto(`http://localhost:6007/iframe.html?id=${story.id}&viewMode=story`);
  await page.waitForSelector('#storybook-root > *', { timeout: 10000 });
  const buttons = await page.locator('#storybook-root button').count();
  // Storybook's a11y addon runs axe in the preview after each render; wait for it rather than failing on the overlap.
  let axe;
  for (let attempt = 1; ; attempt++) {
    try {
      axe = await new AxeBuilder({ page }).include('#storybook-root').analyze();
      break;
    } catch (error) {
      if (attempt === 20 || !String(error.message).includes('Axe is already running')) throw error;
      await page.waitForTimeout(250);
    }
  }
  const violations = axe.violations.map((v) => `${v.id}(${v.nodes.length})`);
  // Render and console errors fail the run; axe findings are reported (some come from the Figma palette itself).
  if (errors.length) failed++;
  console.log(story.id.padEnd(36), `buttons=${buttons}`, errors.length ? `ERRORS ${errors.join(' | ')}` : 'no errors', violations.length ? `axe: ${violations.join(', ')}` : 'axe: clean');
}
await browser.close();
server.close();
process.exit(failed ? 1 : 0);
