// The Angular adapter against the React one (ADR 0002), on the two static Storybook builds:
// - every Angular story has a React story with the same id, renders without errors, and renders the same markup
//   (elements, classes, attributes and text; Angular's host wrapper, ng-version and the ds* selector and slot
//   attributes aside). Same markup + the same ds-css = the same pixels, so the Figma visual check of the React
//   components covers the Angular ones;
// - the interaction tests every adapter shares (shared-interactions.mjs) pass.
// Usage: npm run build-storybook && npm run test:angular
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFileSync, existsSync } from 'node:fs';
import { join, extname } from 'node:path';
import { chromium } from 'playwright';
import { settles, sharedTests } from './shared-interactions.mjs';

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
// - Angular component hosts (<ds-checkbox>, <ds-input>: `display: contents`, no box of their own) are transparent;
// - a form control's state is compared by its properties (`:value`, `:checked`, `:indeterminate`), not its value /
//   checked attributes, which React and Angular set differently;
// - generated ids (React's useId, the adapter's own) become #1, #2… in order of appearance, in `id` and in every
//   attribute that refers to one, so a label, a description or aria-controls still has to point at the same element.
const canonical = () => {
  const skip = (name) => name === 'ng-version' || /^ds[a-z]*$/i.test(name) || name.startsWith('_ng');
  const refs = new Set(['id', 'for', 'aria-describedby', 'aria-labelledby', 'aria-controls', 'aria-owns', 'aria-activedescendant', 'list', 'form', 'headers']);
  const ids = new Map();
  const id = (value) => value.split(/\s+/).filter(Boolean).map((v) => (ids.has(v) ? ids.get(v) : (ids.set(v, `#${ids.size + 1}`), ids.get(v)))).join(' ');
  const tidy = (html) => html.replace(/\s+/g, ' ').replace(/ ?(<[^>]+>) ?/g, '$1').trim();
  const isControl = (node) => node.localName === 'input' || node.localName === 'textarea' || node.localName === 'select';
  const walk = (node) => {
    if (node.nodeType === 3) return node.textContent.replace(/\s+/g, ' ');
    if (node.nodeType !== 1) return '';
    const kids = () => [...node.childNodes].map(walk).join('');
    if (node.localName.startsWith('ds-') && getComputedStyle(node).display === 'contents') return kids();
    const attrs = [...node.attributes]
      .filter((a) => !skip(a.name) && !(isControl(node) && (a.name === 'value' || a.name === 'checked')))
      .sort((a, b) => (a.name < b.name ? -1 : 1))
      .map((a) => (a.name === 'class' ? `class="${a.value.split(/\s+/).filter(Boolean).sort().join(' ')}"` : refs.has(a.name) ? `${a.name}="${id(a.value)}"` : `${a.name}="${a.value}"`));
    if (isControl(node)) {
      attrs.push(`:value="${node.value}"`);
      if (node.type === 'checkbox' || node.type === 'radio') attrs.push(`:checked="${node.checked}"`, `:indeterminate="${node.indeterminate}"`);
    }
    attrs.sort();
    return `<${node.localName}${attrs.length ? ` ${attrs.join(' ')}` : ''}>${tidy(kids())}</${node.localName}>`;
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
  // Angular-only stories (e.g. form bindings) have no React counterpart: they must render, and are tested below.
  if (story.tags?.includes('angular-only')) {
    const angular = await render(ANGULAR, story.id);
    if (angular.errors.length) failed++;
    console.log(angular.errors.length ? `FAIL ${story.id}: ${angular.errors.join(' | ')}` : `ok   ${story.id.padEnd(40)} renders (Angular only)`);
    continue;
  }
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

// Angular only: Signal Forms, Reactive Forms and ngModel move values both ways through Input, Checkbox and Select.
const angularTests = {
  'angular forms: [formField], formControlName and ngModel bind Input, Checkbox and Select both ways; an invalid value shows once the field is touched; disabled follows': async () => {
    await page.goto(`${ANGULAR}/iframe.html?id=components-input--forms-angular&viewMode=story`);
    const value = (form) => page.locator(`[data-form="${form}"] output`).textContent().then((t) => JSON.parse(t));
    const signalEmail = page.getByRole('textbox', { name: 'Email (signal)' });
    await signalEmail.waitFor();
    assert.equal(await signalEmail.inputValue(), 'ada@example.com', 'the model fills the input');
    assert.equal(await page.getByRole('checkbox', { name: 'Newsletter (signal)' }).isChecked(), true);
    const signalRole = page.getByRole('combobox', { name: 'Role (signal)' });
    assert.equal(await signalRole.textContent(), 'Engineer', 'the model fills the select');
    await signalEmail.fill('not an email');
    await settles(() => page.locator('[data-form="signal"]').textContent().then((t) => /Email valid: false/.test(t)), true, 'the email validator runs');
    assert.equal(await signalEmail.getAttribute('aria-invalid'), null, 'while typing, an invalid value is not flagged yet');
    await page.keyboard.press('Tab');
    await settles(() => signalEmail.getAttribute('aria-invalid'), 'true', 'leaving the field (touched) flags it');
    assert.match(await signalEmail.locator('xpath=ancestor::div[contains(@class,"ds-input ")]').getAttribute('class'), /ds-input--invalid/);
    await page.getByRole('checkbox', { name: 'Newsletter (signal)' }).click();
    await signalRole.click();
    await page.getByRole('option', { name: 'Researcher' }).click();
    await settles(() => value('signal'), { email: 'not an email', role: 'researcher', newsletter: false }, 'typing, picking and ticking update the model');
    const reactiveEmail = page.getByRole('textbox', { name: 'Email (reactive)' });
    assert.equal(await reactiveEmail.inputValue(), 'grace@example.com');
    await reactiveEmail.fill('grace@hopper.dev');
    await page.getByText('Newsletter (reactive)').click();
    const reactiveRole = page.getByRole('combobox', { name: 'Role (reactive)' });
    await reactiveRole.focus();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await settles(() => value('reactive'), { email: 'grace@hopper.dev', role: 'designer', newsletter: true });
    await page.getByRole('button', { name: 'Disable the reactive form' }).click();
    await settles(() => reactiveEmail.isDisabled(), true, 'disabling the form control disables the input');
    await settles(() => page.getByRole('checkbox', { name: 'Newsletter (reactive)' }).isDisabled(), true);
    await settles(() => reactiveRole.getAttribute('aria-disabled'), 'true', 'and the select');
    const plainEmail = page.getByRole('textbox', { name: 'Email (ngModel)' });
    await plainEmail.fill('alan@turing.dev');
    await page.getByRole('checkbox', { name: 'Newsletter (ngModel)' }).click();
    const plainRole = page.getByRole('combobox', { name: 'Role (ngModel)' });
    await settles(() => plainRole.textContent(), 'Designer', 'ngModel fills the select');
    await plainRole.focus();
    await page.keyboard.type('e');
    await page.keyboard.press('Enter');
    await settles(() => value('ngmodel'), { email: 'alan@turing.dev', role: 'engineer', newsletter: false });
  },
};
for (const [name, run] of Object.entries(angularTests)) {
  try {
    await page.mouse.move(0, 0);
    await run();
    console.log(`ok   ${name}`);
  } catch (error) {
    failed++;
    console.log(`FAIL ${name}\n     ${error.message.split('\n').join('\n     ')}`);
  }
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
