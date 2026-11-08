// The Angular adapter against the React one (ADR 0002), on the two static Storybook builds:
// - every Angular story has a React story with the same id, renders without errors, and renders the same markup
//   (elements, classes, attributes and text; Angular's host wrapper, ng-version and the ds* selector and slot
//   attributes aside). Same markup + the same ds-css = the same pixels, so the Figma visual check of the React
//   components covers the Angular ones;
// - the interaction tests every adapter shares (shared-interactions.mjs) pass.
// Usage: npm run build-storybook && npm run test:angular
import { createServer } from 'node:http';
import { readFileSync, existsSync } from 'node:fs';
import { join, extname } from 'node:path';
import { chromium } from 'playwright';
import { sharedTests } from './shared-interactions.mjs';

const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.woff2': 'font/woff2', '.woff': 'font/woff', '.svg': 'image/svg+xml' };
const serve = (dir, port) =>
  createServer((req, res) => {
    const path = join(dir, decodeURIComponent(new URL(req.url, 'http://x').pathname));
    const file = existsSync(path) && !path.endsWith('/') ? path : join(path, 'index.html');
    if (!existsSync(file)) return res.writeHead(404).end();
    res.writeHead(200, { 'content-type': types[extname(file)] ?? 'application/octet-stream' }).end(readFileSync(file));
  }).listen(port);

const reactDir = join(import.meta.dirname, '../apps/storybook/storybook-static');
const angularDir = join(import.meta.dirname, '../apps/storybook-angular/storybook-static');
const servers = [serve(reactDir, 6013), serve(angularDir, 6014)];
const REACT = 'http://localhost:6013';
const ANGULAR = 'http://localhost:6014';
const storiesOf = (dir) => Object.values(JSON.parse(readFileSync(join(dir, 'index.json'))).entries).filter((e) => e.type === 'story');
const reactIds = new Set(storiesOf(reactDir).map((e) => e.id));
const angularStories = storiesOf(angularDir);

// Runs in the page: the story's markup in a canonical form.
const canonical = () => {
  const skip = (name) => name === 'ng-version' || /^ds[a-z]*$/i.test(name) || name.startsWith('_ng');
  const tidy = (html) => html.replace(/\s+/g, ' ').replace(/ ?(<[^>]+>) ?/g, '$1').trim();
  const walk = (node) => {
    if (node.nodeType === 3) return node.textContent.replace(/\s+/g, ' ');
    if (node.nodeType !== 1) return '';
    const attrs = [...node.attributes]
      .filter((a) => !skip(a.name))
      .map((a) => (a.name === 'class' ? `class="${a.value.split(/\s+/).filter(Boolean).sort().join(' ')}"` : `${a.name}="${a.value}"`))
      .sort();
    return `<${node.localName}${attrs.length ? ` ${attrs.join(' ')}` : ''}>${tidy([...node.childNodes].map(walk).join(''))}</${node.localName}>`;
  };
  let root = document.querySelector('#storybook-root');
  // Angular renders a story inside a host element named after it (<components-button--playground>).
  if (root.children.length === 1 && root.children[0].localName.includes('--')) root = root.children[0];
  return tidy([...root.childNodes].map(walk).join(''));
};

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const page = await (await browser.newContext({ viewport: { width: 1280, height: 720 } })).newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && !m.location().url.endsWith('/favicon.ico') && errors.push(m.text()));
const render = async (base, id) => {
  errors.length = 0;
  await page.goto(`${base}/iframe.html?id=${id}&viewMode=story`);
  await page.waitForSelector('#storybook-root > *', { timeout: 15000 });
  await page.waitForTimeout(300);
  return { markup: await page.evaluate(`(${canonical})()`), errors: [...errors] };
};

let failed = 0;
for (const story of angularStories) {
  if (!reactIds.has(story.id)) {
    failed++;
    console.log(`FAIL ${story.id}: no React story with this id`);
    continue;
  }
  const angular = await render(ANGULAR, story.id);
  const react = await render(REACT, story.id);
  if (angular.errors.length || angular.markup !== react.markup) failed++;
  if (angular.errors.length) console.log(`FAIL ${story.id}: ${angular.errors.join(' | ')}`);
  else if (angular.markup !== react.markup) {
    let i = 0;
    while (angular.markup[i] === react.markup[i]) i++;
    console.log(`FAIL ${story.id}: markup differs from React\n     React   …${react.markup.slice(Math.max(0, i - 80), i + 160)}\n     Angular …${angular.markup.slice(Math.max(0, i - 80), i + 160)}`);
  } else console.log(`ok   ${story.id.padEnd(40)} same markup as React`);
}

for (const [name, run] of Object.entries(sharedTests)) {
  try {
    await page.mouse.move(0, 0);
    await run(page, ANGULAR);
    console.log(`ok   ${name}`);
  } catch (error) {
    failed++;
    console.log(`FAIL ${name}\n     ${error.message.split('\n').join('\n     ')}`);
  }
}

await browser.close();
for (const server of servers) server.close();
process.exit(failed ? 1 : 0);
