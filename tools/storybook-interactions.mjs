// Keyboard and mouse behaviour of interactive components, run against the static Storybook build.
// Usage: npm run build-storybook && npm run test:storybook (runs after storybook-smoke.mjs)
import { createServer } from 'node:http';
import { readFileSync, existsSync } from 'node:fs';
import { join, extname } from 'node:path';
import assert from 'node:assert/strict';
import { chromium } from 'playwright';

const dir = join(import.meta.dirname, '../apps/storybook/storybook-static');
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.woff2': 'font/woff2', '.svg': 'image/svg+xml' };
const server = createServer((req, res) => {
  const path = join(dir, decodeURIComponent(new URL(req.url, 'http://x').pathname));
  const file = existsSync(path) && !path.endsWith('/') ? path : join(path, 'index.html');
  if (!existsSync(file)) return res.writeHead(404).end();
  res.writeHead(200, { 'content-type': types[extname(file)] ?? 'application/octet-stream' }).end(readFileSync(file));
}).listen(6008);

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const page = await (await browser.newContext()).newPage();
const open = async (id, args = '') => {
  await page.goto(`http://localhost:6008/iframe.html?id=${id}&viewMode=story${args ? `&args=${args}` : ''}`);
  await page.waitForSelector('#storybook-root [role="combobox"]');
};

// Select (WAI-ARIA select-only combobox): what the combobox exposes after each step.
const combobox = page.locator('[role="combobox"]').first();
const listbox = page.locator('[role="listbox"]').first();
const state = async () => ({
  expanded: await combobox.getAttribute('aria-expanded'),
  active: await combobox.evaluate((el) => {
    const id = el.getAttribute('aria-activedescendant');
    return id ? document.getElementById(id)?.querySelector('.ds-select__label')?.textContent : null;
  }),
  value: await combobox.locator('.ds-select__value').textContent(),
  focused: await combobox.evaluate((el) => document.activeElement === el),
});

const tests = {
  'select: keyboard opens, moves, selects and keeps focus': async () => {
    await open('components-select--playground');
    await page.keyboard.press('Tab');
    assert.deepEqual(await state(), { expanded: 'false', active: null, value: 'Select a user', focused: true });
    await page.keyboard.press('ArrowDown');
    assert.equal(await listbox.isVisible(), true);
    assert.equal((await state()).active, 'Alex Jhonson');
    await page.keyboard.press('ArrowDown');
    assert.equal((await state()).active, 'Simon Alt');
    await page.keyboard.press('End');
    assert.equal((await state()).active, 'Lily Chen');
    await page.keyboard.press('ArrowDown');
    assert.equal((await state()).active, 'Lily Chen', 'ArrowDown stops at the last option');
    await page.keyboard.press('Home');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    assert.deepEqual(await state(), { expanded: 'false', active: null, value: 'Simon Alt', focused: true });
    assert.equal(await listbox.isVisible(), false);
    await page.keyboard.press('Space');
    assert.equal((await state()).active, 'Simon Alt', 'reopening starts at the selected option');
    assert.equal(await page.locator('[role="option"][aria-selected="true"]').textContent(), 'Simon Alt');
  },
  'select: type-ahead, Escape and Tab': async () => {
    await open('components-select--playground');
    await page.keyboard.press('Tab');
    await page.keyboard.type('e');
    assert.equal((await state()).active, 'Emma Thompson');
    await page.keyboard.press('Escape');
    assert.deepEqual(await state(), { expanded: 'false', active: null, value: 'Select a user', focused: true });
    await page.keyboard.type('ky', { delay: 50 });
    assert.equal((await state()).active, 'Kate Roberts', 'characters typed quickly form one search');
    await page.keyboard.press('Tab');
    assert.equal((await state()).value, 'Kate Roberts', 'Tab selects the highlighted option');
    assert.equal((await state()).focused, false);
    assert.equal(await listbox.isVisible(), false);
  },
  'select: mouse opens without highlight, picks an option, label focuses': async () => {
    await open('components-select--playground');
    await combobox.click();
    assert.deepEqual(await state(), { expanded: 'true', active: null, value: 'Select a user', focused: true });
    await page.locator('[role="option"]', { hasText: 'Ryan Parker' }).click();
    assert.deepEqual(await state(), { expanded: 'false', active: null, value: 'Ryan Parker', focused: true });
    await page.locator('body').click({ position: { x: 600, y: 5 } });
    await page.locator('.ds-field__label').click();
    assert.equal((await state()).focused, true);
  },
  'select: disabled options are skipped and cannot be picked; groups and caption from Playground controls': async () => {
    await open('components-select--playground', 'disabledItem:!true;groups:!true;menuCaption:Pick+the+owner');
    await page.keyboard.press('Tab');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    assert.equal((await state()).active, 'Emma Thompson');
    await page.keyboard.press('ArrowDown');
    assert.equal((await state()).active, 'Kate Roberts', 'skips the disabled Michael Davis');
    await page.locator('[role="option"]', { hasText: 'Michael Davis' }).click({ force: true });
    assert.equal((await state()).expanded, 'true');
    assert.equal((await state()).value, 'Select a user');
    const groups = page.locator('[role="group"]');
    assert.equal(await groups.count(), 2);
    assert.equal(await page.locator(`[id="${await groups.first().getAttribute('aria-labelledby')}"]`).textContent(), 'Design3');
    assert.equal(await page.locator(`[id="${await listbox.getAttribute('aria-describedby')}"]`).textContent(), 'Pick the owner');
  },
  'select: MenuItem story follows the Figma item properties': async () => {
    await open('components-select--menu-item', 'type:Default+Large;selectType:Checkbox;active:!true;state:Disabled');
    const item = page.locator('[role="option"]').nth(1);
    assert.equal(await item.getAttribute('aria-selected'), 'true');
    assert.equal(await item.getAttribute('aria-disabled'), 'true');
    assert.equal(await item.locator('.ds-select__description').textContent(), 'The quick brown fox jumps over a lazy dog.');
    assert.equal(await item.locator('.ds-select__box--checkbox').count(), 1);
  },
  'select: disabled select is not focusable and does not open': async () => {
    await open('components-select--playground', 'disabled:!true');
    assert.equal(await combobox.getAttribute('tabindex'), null);
    assert.equal(await combobox.getAttribute('aria-disabled'), 'true');
    await combobox.click({ force: true });
    assert.equal((await state()).expanded, 'false');
  },
  'select multiple: options toggle, menu stays open, trigger lists labels': async () => {
    await open('components-select--playground', 'multiple:!true');
    await page.keyboard.press('Tab');
    await page.keyboard.press('ArrowDown');
    assert.equal(await listbox.getAttribute('aria-multiselectable'), 'true');
    await page.keyboard.press('Enter');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press(' ');
    assert.equal((await state()).expanded, 'true', 'the menu stays open while picking');
    assert.equal((await state()).value, 'Alex Jhonson, Emma Thompson');
    await page.getByRole('option', { name: 'Simon Alt' }).click();
    assert.equal((await state()).value, 'Alex Jhonson, Simon Alt, Emma Thompson', 'labels follow the option order');
    await page.keyboard.press('Home');
    await page.keyboard.press('Enter');
    assert.equal((await state()).value, 'Simon Alt, Emma Thompson', 'picking a selected option removes it');
    assert.deepEqual(await page.locator('[role="option"][aria-selected="true"]').allTextContents(), ['Simon Alt', 'Emma Thompson']);
    await page.keyboard.press('Tab');
    assert.equal(await listbox.isVisible(), false);
    assert.equal((await state()).value, 'Simon Alt, Emma Thompson', 'Tab closes without changing the selection');
  },
  'select menu item types: boxes, flags, large options and a caption that describes the menu': async () => {
    await open('components-select--menu-item-types');
    const menus = page.getByRole('listbox');
    assert.equal(await menus.count(), 4);
    const [checkbox, radio, country, large] = [0, 1, 2, 3].map((i) => menus.nth(i));
    assert.equal(await checkbox.locator('.ds-select__box--checkbox').count(), 7, 'every option shows a checkbox');
    assert.deepEqual(await checkbox.locator('[aria-selected="true"]').allTextContents(), ['Simon Alt', 'Emma Thompson']);
    assert.equal(await radio.locator('.ds-select__box--radio').count(), 7);
    assert.equal(await country.locator('.ds-select__media svg').count(), 3);
    // Large options read as label + description; the caption is the listbox description, not an option.
    assert.equal(await large.getByRole('option').count(), 3);
    assert.equal(await large.getByRole('option', { name: 'Team Up to 20 people Popular' }).getAttribute('aria-selected'), 'true');
    const describedBy = await large.getAttribute('aria-describedby');
    assert.equal(await page.locator(`[id="${describedBy}"]`).textContent(), 'Billed yearly. You can change the plan at any time.');
  },
  'select tags: badges show the values; × and Backspace remove them without nested buttons': async () => {
    await open('components-select--playground', 'multiple:!true;tags:!true');
    const tags = () => page.locator('.ds-select__tags .ds-badge__label').allTextContents();
    await page.keyboard.press('Tab');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await page.keyboard.press('Escape');
    assert.deepEqual(await tags(), ['Alex Jhonson', 'Simon Alt', 'Emma Thompson']);
    assert.equal(await combobox.locator('button, [tabindex]').count(), 0, 'no focusable element inside the combobox');
    // × removes that value and leaves the menu closed and the focus on the combobox.
    await page.locator('.ds-select__tags .ds-badge', { hasText: 'Simon Alt' }).locator('.ds-badge__remove').click();
    assert.deepEqual(await tags(), ['Alex Jhonson', 'Emma Thompson']);
    assert.equal(await combobox.getAttribute('aria-expanded'), 'false', '× does not open the menu');
    assert.equal(await page.locator('.ds-select__status').textContent(), 'Simon Alt removed', 'the removal is announced');
    // Backspace removes the last value, open or closed.
    await combobox.focus();
    await page.keyboard.press('Backspace');
    assert.deepEqual(await tags(), ['Alex Jhonson']);
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Backspace');
    assert.equal(await page.locator('.ds-select__tags').count(), 0);
    assert.equal((await state()).value, 'Select a user', 'the placeholder returns');
    // Disabled: no × at all.
    await open('components-select--tags');
    const disabled = page.locator('.ds-select').nth(2);
    assert.equal(await disabled.locator('.ds-badge').count(), 2);
    assert.equal(await disabled.locator('.ds-badge__remove').count(), 0, 'a disabled select has no ×');
  },
  'badge: the close icon is a named button that removes the badge': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-badge--playground&viewMode=story&args=closeIcon:!true;label:Design');
    const remove = page.getByRole('button', { name: 'Remove Design' });
    await remove.waitFor();
    await page.keyboard.press('Tab');
    assert.equal(await remove.evaluate((el) => document.activeElement === el), true, 'reachable with Tab');
    await page.keyboard.press('Enter');
    assert.equal(await page.locator('.ds-badge').count(), 0);
  },
  'avatar: badges and ring sit where Figma puts them; names and fallback': async () => {
    // Figma: badge size and position per Size and Shape (x, y relative to the avatar), ring 2 px outside.
    const figma = [
      ['md', 'circular', 12, 22, -2, 22],
      ['sm', 'rounded', 12, 16, -4, 16],
      ['2xl', 'circular', 18, 39, -1, 39],
      ['3xl', 'rounded', 20, 52, -8, 52],
    ];
    for (const [size, shape, badge, x, top, bottom] of figma) {
      await page.goto(`http://localhost:6008/iframe.html?id=components-avatar--playground&viewMode=story&args=size:${size};shape:${shape};ring:!true;topBadge:!true;bottomBadge:!true`);
      const avatar = page.locator('.ds-avatar');
      await avatar.waitFor();
      const a = await avatar.boundingBox();
      const t = await page.locator('.ds-avatar__badge--top').boundingBox();
      const b = await page.locator('.ds-avatar__badge--bottom').boundingBox();
      const got = [t.width, t.x - a.x, t.y - a.y, b.y - a.y].map((v) => Math.round(v * 100) / 100);
      assert.deepEqual(got, [badge, x, top, bottom], `${size} ${shape}: badge size, x, top y, bottom y`);
      const ring = await avatar.evaluate((el) => { const s = getComputedStyle(el, '::before'); return [s.inset, s.backgroundColor]; });
      assert.deepEqual(ring, ['-2px', 'rgb(255, 255, 255)'], 'ring: 2 px in the page colour');
    }
    await page.goto('http://localhost:6008/iframe.html?id=components-avatar--playground&viewMode=story&args=bottomBadge:!true');
    await page.getByRole('img', { name: 'Sam Rivera' }).waitFor();
    assert.equal(await page.getByRole('img', { name: 'Online' }).count(), 1, 'the status badge is named');
    await page.goto('http://localhost:6008/iframe.html?id=components-avatar--playground&viewMode=story&args=variant:Initials;initials:SR');
    assert.equal(await page.getByRole('img', { name: 'Sam Rivera' }).textContent(), 'SR', 'initials carry the name');
    // A picture that fails to load falls back to Empty.
    await page.goto('http://localhost:6008/iframe.html?id=components-avatar--group&viewMode=story');
    await page.locator('.ds-avatar').first().waitFor();
    await page.locator('.ds-avatar img').evaluate((img) => { img.src = 'data:image/png;base64,broken'; });
    await page.waitForFunction(() => document.querySelectorAll('.ds-avatar img').length === 0);
    assert.equal(await page.getByRole('img', { name: 'Sam Rivera' }).locator('.ds-avatar__placeholder').count(), 1);
  },
  'playground form: validation, submitted data and reset': async () => {
    await open('playground-form--sign-up');
    const submitted = page.getByTestId('submitted');
    await page.getByRole('button', { name: 'Create account' }).click();
    assert.equal(await page.locator('.ds-field__caption--error').count(), 3);
    await page.getByLabel('Name').fill('Jane Doe');
    await page.getByLabel('Email').fill('jane@example.com');
    await page.getByRole('combobox', { name: 'Role' }).click();
    await page.getByRole('option', { name: 'Engineer' }).click();
    await page.getByRole('button', { name: 'Create account' }).click();
    await page.getByRole('combobox', { name: 'Teams' }).click();
    await page.getByRole('option', { name: 'Web' }).click();
    await page.getByRole('option', { name: 'Design' }).click();
    await page.keyboard.press('Escape');
    await page.getByRole('button', { name: 'Create account' }).click();
    assert.deepEqual(JSON.parse(await submitted.textContent()), { name: 'Jane Doe', email: 'jane@example.com', role: 'engineer', plan: 'free', teams: ['web', 'design'] });
    await page.getByRole('button', { name: 'Reset' }).click();
    assert.equal(await page.getByRole('combobox', { name: 'Role' }).textContent(), 'Select a role', 'form reset clears the Select');
    assert.equal(await page.getByRole('combobox', { name: 'Plan' }).textContent(), 'Free', 'and restores its defaultValue');
    assert.equal(await page.getByRole('combobox', { name: 'Teams' }).textContent(), 'Select teams');
    assert.equal(await submitted.count(), 0);
  },
};

let failed = 0;
for (const [name, run] of Object.entries(tests)) {
  try {
    await run();
    console.log(`ok   ${name}`);
  } catch (error) {
    failed++;
    console.log(`FAIL ${name}\n     ${error.message.split('\n').join('\n     ')}`);
  }
}
await browser.close();
server.close();
process.exit(failed ? 1 : 0);
