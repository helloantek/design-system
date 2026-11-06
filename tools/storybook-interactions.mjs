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
    // tagsOverflow="count": one row, the rest in "+N", named for screen readers; removing makes room.
    await open('components-select--tags');
    const counted = page.locator('.ds-select').nth(2);
    const more = counted.locator('.ds-select__more');
    // The fit is re-measured when the web font arrives, so wait for it and read the tags and the counter together.
    await page.evaluate(() => document.fonts.ready);
    const { visible, counter, hiddenText } = await counted.evaluate((el) => ({
      visible: [...el.querySelectorAll('.ds-select__tags > .ds-badge:not(.ds-select__more) .ds-badge__label')].map((l) => l.textContent),
      counter: el.querySelector('.ds-select__more [aria-hidden]')?.textContent,
      hiddenText: el.querySelector('.ds-select__more .ds-select__hidden')?.textContent,
    }));
    assert.ok(visible.length >= 1 && visible.length < 5, `some tags fit (${visible.length})`);
    assert.equal(counter, `+${5 - visible.length}`);
    const names = ['Alex Jhonson', 'Simon Alt', 'Emma Thompson', 'Michael Davis', 'Kate Roberts'];
    assert.equal(hiddenText, `and ${5 - visible.length} more: ${names.slice(visible.length).join(', ')}`);
    // One row, and the counter ends inside the row's padding box (nothing clipped).
    const row = await counted.locator('.ds-select__tags').evaluate((el) => {
      const r = el.getBoundingClientRect(), m = el.querySelector('.ds-select__more').getBoundingClientRect();
      return [r.height, m.right <= r.right - parseFloat(getComputedStyle(el).paddingRight) + 0.5];
    });
    assert.deepEqual(row, [20, true], 'one row, nothing clipped');
    await counted.locator('.ds-select__tags .ds-badge__remove').first().click();
    assert.equal(await counted.locator('.ds-select__tags > .ds-badge:not(.ds-select__more)').count() + Number((await more.count()) ? (await more.locator('[aria-hidden]').textContent()).slice(1) : 0), 4, 'shown + counted = values left');
    // Disabled: no × at all.
    const disabled = page.locator('.ds-select').nth(3);
    assert.equal(await disabled.locator('.ds-badge').count(), 2);
    assert.equal(await disabled.locator('.ds-badge__remove').count(), 0, 'a disabled select has no ×');
  },
  'select avatar: the field shows the selected option\'s avatar instead of the lead icon': async () => {
    await open('components-select--with-avatars');
    const owner = page.locator('.ds-select').first();
    const lead = () => owner.locator('.ds-select__main > :first-child').getAttribute('class');
    assert.equal(await lead(), 'ds-select__media');
    assert.equal(await owner.locator('.ds-select__main .ds-avatar img').count(), 1, 'Simon Alt has a picture');
    await owner.getByRole('combobox').click();
    await owner.getByRole('option', { name: 'Kate Roberts' }).click();
    assert.equal(await owner.locator('.ds-select__main .ds-avatar__initials').textContent(), 'K');
    assert.equal(await owner.locator('.ds-select__value').textContent(), 'Kate Roberts');
    // Empty field: the lead icon; the menu still shows avatars.
    const empty = page.locator('.ds-select').nth(1);
    assert.equal(await empty.locator('.ds-select__main > :first-child').getAttribute('class'), 'ds-select__icon');
    await empty.getByRole('combobox').click();
    assert.equal(await empty.locator('[role="option"] .ds-avatar').count(), 7);
    // A multiple select keeps its lead icon.
    await open('components-select--playground', 'multiple:!true;itemType:Avatar');
    await page.keyboard.press('Tab');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    assert.equal(await page.locator('.ds-select__main > :first-child').first().getAttribute('class'), 'ds-select__icon');
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
    // Status Badges: size and position per size and shape (x, y relative to the avatar), as in Sort UI 1.3; ring 2 px outside.
    const figma = [
      ['default', 'round', 12, 22, -2, 22],
      ['sm', 'square', 12, 16, -4, 16],
      ['lg', 'round', 16, 26, -2, 26],
      ['xl', 'square', 16, 38, -6, 38],
    ];
    for (const [size, shape, badge, x, top, bottom] of figma) {
      await page.goto(`http://localhost:6008/iframe.html?id=components-avatar--playground&viewMode=story&args=size:${size};shape:${shape};ring:!true;topBadge:!true;badge:status`);
      const avatar = page.locator('.ds-avatar');
      await avatar.waitFor();
      const a = await avatar.boundingBox();
      const t = await page.locator('.ds-avatar__badge--top').boundingBox();
      const b = await page.locator('.ds-avatar__badge--bottom').boundingBox();
      const got = [t.width, t.x - a.x, t.y - a.y, b.y - a.y].map((v) => Math.round(v * 100) / 100);
      assert.deepEqual(got, [badge, x, top, bottom], `${size} ${shape}: badge size, x, top y, bottom y`);
      const ring = await avatar.evaluate((el) => { const s = getComputedStyle(el, '::before'); return [s.inset, s.backgroundColor]; });
      assert.deepEqual(ring, ['-2px', 'rgb(252, 252, 252)'], 'ring: 2 px in the page colour');
    }
    // Figma Avatar Badge: inside the bottom right corner, 8 / 10 / 12 px (Figma x = y = size − badge).
    for (const [size, dot] of [['xs', 8], ['default', 10], ['xl', 12]]) {
      await page.goto(`http://localhost:6008/iframe.html?id=components-avatar--playground&viewMode=story&args=size:${size};badge:avatar`);
      const a = await page.locator('.ds-avatar').boundingBox();
      const d = await page.getByRole('img', { name: 'Online' }).boundingBox();
      assert.deepEqual([d.width, d.x - a.x, d.y - a.y], [dot, a.width - dot, a.height - dot], `${size}: Avatar Badge size and position`);
    }
    await page.goto('http://localhost:6008/iframe.html?id=components-avatar--playground&viewMode=story&args=badge:status');
    await page.getByRole('img', { name: 'Sam Rivera' }).waitFor();
    assert.equal(await page.getByRole('img', { name: 'Online' }).count(), 1, 'the status badge is named');
    await page.goto('http://localhost:6008/iframe.html?id=components-avatar--playground&viewMode=story&args=variant:fallback;initials:SR');
    assert.equal(await page.getByRole('img', { name: 'Sam Rivera' }).textContent(), 'SR', 'initials carry the name');
    // A picture that fails to load falls back to the icon.
    await page.goto('http://localhost:6008/iframe.html?id=components-avatar--playground&viewMode=story');
    await page.locator('.ds-avatar img').waitFor();
    await page.locator('.ds-avatar img').evaluate((img) => { img.src = 'data:image/png;base64,broken'; });
    await page.waitForFunction(() => document.querySelectorAll('.ds-avatar img').length === 0);
    assert.equal(await page.getByRole('img', { name: 'Sam Rivera' }).locator('.ds-avatar__icon').count(), 1);
    // Avatar Group: max 3 shows three avatars with the ring, overlapping by 8 px, and a named "+3".
    await page.goto('http://localhost:6008/iframe.html?id=components-avatar--group&viewMode=story');
    const group = page.getByRole('group', { name: 'Reviewers' }).nth(2);
    await group.waitFor();
    const boxes = await group.locator('.ds-avatar').evaluateAll((els) => els.map((el) => el.getBoundingClientRect().x));
    assert.equal(boxes.length, 3);
    assert.equal(Math.round(boxes[1] - boxes[0]), 24, 'default: 32 px avatars overlap by 8 px');
    assert.equal(await group.getByRole('img', { name: 'and 3 more' }).textContent(), '+3');
  },
  'playground form: validation, submitted data (with the start date, the invite code and the reminder slider) and reset': async () => {
    await open('playground-form--sign-up');
    const submitted = page.getByTestId('submitted');
    await page.getByRole('button', { name: 'Create account' }).click();
    assert.equal(await page.locator('.ds-field__caption--error').count(), 4);
    assert.equal(await page.getByText('Fix 4 fields to continue').count(), 1, 'an Alert sums up the errors');
    await page.getByLabel('Name').fill('Jane Doe');
    await page.getByLabel('I accept the terms of service').check();
    await page.getByLabel('Email').fill('jane@example.com');
    await page.getByRole('combobox', { name: 'Role' }).click();
    await page.getByRole('option', { name: 'Engineer' }).click();
    await page.getByRole('button', { name: 'Create account' }).click();
    await page.getByRole('combobox', { name: 'Teams' }).click();
    await page.getByRole('option', { name: 'Web' }).click();
    await page.getByRole('option', { name: 'Design' }).click();
    await page.keyboard.press('Escape');
    await page.getByRole('button', { name: 'Create account' }).click();
    assert.deepEqual(JSON.parse(await submitted.textContent()), { name: 'Jane Doe', email: 'jane@example.com', role: 'engineer', timezone: '', start: '', invite: '', plan: 'free', billing: 'monthly', bio: '', reminder: '15', terms: 'on', teams: ['web', 'design'] });
    await page.getByRole('region', { name: 'Notifications' }).getByText('Account created').first().waitFor();
    await page.getByRole('combobox', { name: 'Timezone' }).fill('war');
    await page.getByRole('option', { name: '(GMT+1) Warsaw' }).click();
    await page.getByRole('button', { name: /^Start date/ }).click();
    await page.getByRole('dialog', { name: 'Choose a date' }).getByRole('button').filter({ hasText: /^15$/ }).first().click();
    await page.getByRole('textbox', { name: 'Invite code' }).focus();
    await page.keyboard.type('314159');
    await page.getByRole('radio', { name: /Yearly/ }).check();
    await page.getByLabel('About you').fill('Design systems');
    await page.getByLabel('Product updates').check();
    const start15 = await page.locator('input[type=hidden][name=start]').inputValue();
    assert.match(start15, /^\d{4}-\d{2}-15$/, 'the start date is submitted as YYYY-MM-DD');
    await page.getByRole('slider', { name: 'Remind me before events' }).focus();
    await page.keyboard.press('ArrowRight');
    await page.getByText('20 min', { exact: true }).waitFor();
    await page.getByRole('button', { name: 'Create account' }).click();
    assert.deepEqual(JSON.parse(await submitted.textContent()), { name: 'Jane Doe', email: 'jane@example.com', role: 'engineer', timezone: 'warsaw', start: start15, invite: '314159', plan: 'free', billing: 'yearly', bio: 'Design systems', updates: 'on', reminder: '20', terms: 'on', teams: ['web', 'design'] });
    await page.getByRole('button', { name: 'Reset' }).click();
    assert.equal(await page.getByRole('combobox', { name: 'Role' }).textContent(), 'Select a role', 'form reset clears the Select');
    assert.equal(await page.getByRole('combobox', { name: 'Plan' }).textContent(), 'Free', 'and restores its defaultValue');
    assert.equal(await page.getByRole('combobox', { name: 'Teams' }).textContent(), 'Select teams');
    assert.equal(await page.getByRole('slider', { name: 'Remind me before events' }).getAttribute('aria-valuenow'), '15', 'reset restores the slider');
    assert.equal(await page.getByRole('textbox', { name: 'Invite code' }).inputValue(), '', 'and clears the invite code');
    assert.equal(await page.locator('input[type=hidden][name=start]').inputValue(), '', 'and the start date');
    assert.equal(await page.getByRole('combobox', { name: 'Timezone' }).inputValue(), '', 'form reset clears the Combobox');
    await page.getByRole('combobox', { name: 'Timezone' }).fill('tok');
    await page.getByRole('button', { name: 'Reset' }).click();
    assert.equal(await page.getByRole('combobox', { name: 'Timezone' }).inputValue(), '', 'and its typed text');
    assert.equal(await page.getByRole('combobox', { name: 'Timezone' }).getAttribute('aria-expanded'), 'false', 'and closes its list');
    assert.equal(await submitted.count(), 0);
  },
  'aspect ratio: keeps the ratio at any width; the picture fills it, cropped from the middle; rounded is 12 px': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-aspect-ratio--ratios&viewMode=story');
    await page.locator('.ds-aspect-ratio').first().waitFor();
    const boxes = await page.locator('.ds-aspect-ratio').evaluateAll((els) => els.map((el) => Math.round((el.offsetHeight / el.offsetWidth) * 1000) / 1000));
    const expected = [1, 3 / 4, 2 / 3, 9 / 16, 9 / 21, 3 / 2, 4 / 3, 16 / 9];
    boxes.forEach((r, i) => assert.ok(Math.abs(r - expected[i]) < 0.01, `ratio ${i}: ${r} ≠ ${expected[i]}`));
    assert.deepEqual(await page.locator('.ds-aspect-ratio img').first().evaluate((el) => { const cs = getComputedStyle(el); return [cs.objectFit, el.offsetWidth, el.offsetHeight]; }), ['cover', 120, 120], 'the picture fills the box, cropped');
    await page.goto('http://localhost:6008/iframe.html?id=components-aspect-ratio--demo&viewMode=story');
    const demo = page.locator('.ds-aspect-ratio');
    await demo.waitFor();
    assert.deepEqual(await demo.evaluate((el) => [el.offsetWidth, el.offsetHeight, getComputedStyle(el).borderTopLeftRadius]), [320, 180, '12px']);
  },
  'progress: a named progressbar with its value as text; dashed steps; indeterminate has no value; the circle fills from 12 o\'clock': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-progress--demo&viewMode=story');
    const copying = page.getByRole('progressbar', { name: 'Copying', description: '2.5GB of 5GB' });
    await copying.waitFor();
    assert.deepEqual(await copying.evaluate((el) => [el.getAttribute('aria-valuenow'), el.getAttribute('aria-valuemax'), el.getAttribute('aria-valuetext')]), ['54', '100', '54%']);
    assert.equal(await copying.locator('.ds-progress__indicator').evaluate((el) => Math.round((el.getBoundingClientRect().width / el.parentElement.getBoundingClientRect().width) * 100)), 54, 'the indicator covers 54 % of the track');
    assert.equal(await page.getByRole('progressbar', { name: 'Storage' }).getAttribute('aria-valuetext'), 'Used: 70GB of 100GB');
    const steps = page.getByRole('progressbar', { name: 'Steps' });
    assert.equal(await steps.locator('.ds-progress__step').count(), 10, 'one segment per step');
    assert.equal(await steps.locator('.ds-progress__step--done').count(), 3);
    await page.goto('http://localhost:6008/iframe.html?id=components-progress--controlled&viewMode=story');
    const checklist = page.getByRole('progressbar', { name: 'Launch checklist' });
    await checklist.waitFor();
    await page.getByLabel('Schedule nightly backups').check();
    assert.equal(await checklist.getAttribute('aria-valuetext'), '3 of 5 done', 'the bar follows the checklist');
    await page.goto('http://localhost:6008/iframe.html?id=components-progress--indeterminate&viewMode=story');
    const exportBar = page.getByRole('progressbar', { name: 'Preparing your export' });
    await exportBar.waitFor();
    assert.equal(await exportBar.getAttribute('aria-valuenow'), null, 'indeterminate: no value');
    await page.goto('http://localhost:6008/iframe.html?id=components-progress--circle&viewMode=story');
    const js = page.getByRole('progressbar', { name: 'JavaScript' });
    await js.waitFor();
    assert.deepEqual(await js.evaluate((el) => [el.getAttribute('aria-valuetext'), el.offsetWidth, getComputedStyle(el.querySelector('.ds-progress-circle__indicator')).strokeDasharray]), ['25%', 96, '25px, 100px'], 'the circle: its label as the value, 96 px, a quarter of the ring');
  },
  'empty: a heading with its description; the icon tile is decorative; actions side by side; a search field spans the width': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-empty--trips&viewMode=story');
    await page.getByRole('heading', { name: 'No trips yet', level: 3 }).waitFor();
    assert.equal(await page.locator('.ds-empty__media--icon').getAttribute('aria-hidden'), 'true');
    assert.deepEqual(await page.locator('.ds-empty__media--icon').evaluate((el) => { const cs = getComputedStyle(el); return [el.offsetWidth, cs.borderTopLeftRadius, cs.backgroundColor]; }), [32, '8px', 'rgba(115, 115, 115, 0.08)'], 'Media: a 32 px fill-2 tile, 8 px radius');
    const [a, b] = await page.locator('.ds-empty__actions .ds-button').evaluateAll((els) => els.map((el) => el.getBoundingClientRect()));
    assert.equal(Math.round(b.left - a.right), 8, 'buttons 8 px apart on one row');
    assert.equal(a.top, b.top);
    await page.goto('http://localhost:6008/iframe.html?id=components-empty--in-a-card&viewMode=story');
    await page.getByRole('heading', { name: 'No deployments yet', level: 2 }).waitFor();
    await page.goto('http://localhost:6008/iframe.html?id=components-empty--no-results&viewMode=story');
    const search = page.getByRole('textbox', { name: 'Search restaurants' });
    await search.waitFor();
    assert.equal(await page.locator('.ds-empty__content > .ds-field').evaluate((el) => el.getBoundingClientRect().width), await page.locator('.ds-empty__content').evaluate((el) => el.getBoundingClientRect().width), 'the search field spans the content');
    await page.getByRole('button', { name: 'Clear filters' }).click();
    assert.equal(await search.inputValue(), '');
  },
  'field: wires label, description and error to Input, Select and native controls; disabled and required pass down; Field Set and Separator': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-field--states&viewMode=story');
    const inputs = page.getByRole('textbox', { name: 'Label' });
    await inputs.first().waitFor();
    assert.equal(await inputs.count(), 3, 'the Field label names each Input');
    assert.equal(await page.getByRole('textbox', { name: 'Label', description: 'Description This field is required.' }).getAttribute('aria-invalid'), 'true', 'Invalid: described by the description and the error, marked invalid');
    assert.equal(await page.locator('.ds-field--invalid > .ds-field__label').evaluate((el) => getComputedStyle(el).color), 'rgb(193, 0, 7)', 'and the label turns red');
    assert.equal(await inputs.nth(2).isDisabled(), true, 'Disabled: the Input is disabled');
    assert.equal(await page.locator('.ds-field--disabled > .ds-field__label').evaluate((el) => getComputedStyle(el).opacity), '0.5');
    await page.goto('http://localhost:6008/iframe.html?id=components-field--new-project&viewMode=story');
    const region = page.getByRole('combobox', { name: 'Region' });
    await region.waitFor();
    await page.getByText('Region', { exact: true }).click();
    assert.equal(await page.evaluate(() => document.activeElement?.getAttribute('aria-labelledby') && document.getElementById(document.activeElement.getAttribute('aria-labelledby'))?.textContent), 'Region', 'a click on the label focuses the Select it names');
    assert.equal(await page.getByRole('textbox', { name: 'Project name' }).getAttribute('aria-describedby') !== null, true);
    await page.goto('http://localhost:6008/iframe.html?id=components-field--validation&viewMode=story');
    const username = page.getByRole('textbox', { name: 'Username' });
    await username.waitFor();
    assert.equal(await username.getAttribute('required'), '', 'Required: the control is required');
    assert.equal(await page.locator('.ds-field__required').getAttribute('aria-hidden'), 'true', 'the asterisk is not read');
    assert.equal(await username.getAttribute('aria-invalid'), 'true');
    await username.fill('ada.lovelace');
    assert.equal(await username.getAttribute('aria-invalid'), null, 'a valid value clears the error');
    assert.equal(await page.locator('.ds-field__caption--error').count(), 0);
    await page.goto('http://localhost:6008/iframe.html?id=components-field--date-input&viewMode=story');
    await page.locator('.ds-input input[type=date]').waitFor();
    assert.equal(await page.getByLabel('Birthday').getAttribute('aria-describedby') !== null, true, 'a date Input takes the label and the description');
    await page.goto('http://localhost:6008/iframe.html?id=components-field--native-element&viewMode=story');
    const quality = page.getByRole('combobox', { name: 'Audio quality', description: 'A plain <select>, drawn by the browser.' });
    await quality.waitFor();
    assert.equal(await quality.evaluate((el) => el.tagName), 'SELECT', 'a native element gets the id and the description as attributes');
    await page.goto('http://localhost:6008/iframe.html?id=components-field--orientation&viewMode=story');
    await page.getByRole('group', { name: 'Vertical' }).waitFor();
    assert.equal(await page.getByRole('group', { name: 'Vertical' }).evaluate((el) => getComputedStyle(el.querySelector('legend')).fontSize), '16px', 'Field Set legend: 16 px');
    assert.equal(await page.locator('.ds-field-separator').first().getAttribute('role'), 'none');
    const crossfade = page.locator('.ds-field--responsive');
    assert.equal(await crossfade.evaluate((el) => getComputedStyle(el).flexWrap), 'wrap', 'responsive: beside, wrapping when narrow');
  },
  'kbd: keys are <kbd>s (a group is a <kbd> of <kbd>s, 2 px apart); symbols carry spoken names; sizes and Inverted colours': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-kbd--shortcuts&viewMode=story');
    const groups = page.locator('kbd.ds-kbd-group');
    await groups.first().waitFor();
    assert.equal(await groups.count(), 3);
    assert.deepEqual(await groups.first().locator('kbd.ds-kbd').evaluateAll((els) => els.map((el) => el.tagName)), ['KBD', 'KBD'], 'a combination is a <kbd> of <kbd>s');
    assert.equal(await groups.first().evaluate((el) => getComputedStyle(el).columnGap), '2px');
    const next = page.locator('dd').nth(1);
    assert.equal(await next.locator('.ds-kbd__label').first().textContent(), 'Command');
    assert.equal(await next.locator('.ds-kbd [aria-hidden]').first().textContent(), '⌘', 'the symbol is hidden from screen readers');
    assert.equal(await next.locator('.ds-kbd__label').first().evaluate((el) => el.getBoundingClientRect().width), 1, 'the spoken name takes no space');
    const space = page.locator('dd').first().locator('.ds-kbd');
    assert.deepEqual(await space.evaluate((el) => { const cs = getComputedStyle(el); return [el.offsetHeight, cs.paddingLeft, cs.fontSize, cs.fontWeight, cs.color, cs.backgroundColor]; }), [20, '4px', '12px', '500', 'rgb(98, 98, 98)', 'rgba(115, 115, 115, 0.08)'], 'Default: 20 px, 4 px padding, 12 px medium, muted on fill-2');
    await page.goto('http://localhost:6008/iframe.html?id=components-kbd--variants-and-sizes&viewMode=story');
    await page.locator('.ds-kbd').first().waitFor();
    assert.deepEqual(await page.locator('.ds-kbd--sm').first().evaluate((el) => [el.offsetHeight, el.offsetWidth, getComputedStyle(el).paddingLeft]), [16, 16, '2px'], 'sm: 16 px, 2 px padding');
    assert.deepEqual(await page.locator('.ds-kbd--inverted').first().evaluate((el) => { const cs = getComputedStyle(el); return [cs.color, cs.backgroundColor]; }), ['rgb(252, 252, 252)', 'rgba(252, 252, 252, 0.2)'], 'Inverted: background-coloured key on a 20 % background tint');
    assert.equal(await page.locator('.ds-kbd svg').first().evaluate((el) => el.getBoundingClientRect().width), 12, 'Icon: 12 px');
    await page.goto('http://localhost:6008/iframe.html?id=components-kbd--in-an-input&viewMode=story');
    await page.getByRole('textbox', { name: 'Search' }).waitFor();
    assert.equal(await page.getByRole('textbox', { name: 'Search' }).getAttribute('aria-keyshortcuts'), 'Meta+K');
    assert.equal(await page.getByRole('textbox', { name: 'Message' }).getAttribute('aria-keyshortcuts'), '↵');
  },
  'spinner: a named status that turns (slower with reduced motion); decorative in buttons; sizes and a 1.25 px arc at every size': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-spinner--variants-and-sizes&viewMode=story');
    const spinners = page.getByRole('status');
    await spinners.first().waitFor();
    assert.equal(await spinners.count(), 8);
    assert.equal(await page.getByRole('status', { name: 'Loading (default, sm)' }).count(), 1);
    const sizes = await page.locator('.ds-spinner').evaluateAll((els) => els.map((el) => el.offsetWidth));
    assert.deepEqual(sizes.slice(0, 4).map(Math.round), [12, 16, 20, 24], 'Figma Size: 12, 16, 20 and 24 px (the box turns, so it is read unturned)');
    const anim = await page.locator('.ds-spinner').evaluateAll((els) => els.map((el) => { const cs = getComputedStyle(el); return [cs.animationName, cs.animationDuration, cs.animationIterationCount, cs.animationDirection]; }));
    assert.deepEqual(anim[0], ['ds-spinner-turn', '1s', 'infinite', 'normal']);
    assert.equal(anim[4][3], 'reverse', 'the gradient turns the other way, so its dark end leads');
    assert.deepEqual(await page.locator('.ds-spinner:not(.ds-spinner--gradient) svg path').evaluateAll((els) => els.map((el) => getComputedStyle(el).strokeWidth)), ['1.25px', '1.25px', '1.25px', '1.25px']);
    assert.deepEqual(await page.locator('.ds-spinner:not(.ds-spinner--gradient) svg path').evaluateAll((els) => els.map((el) => getComputedStyle(el).vectorEffect)), Array(4).fill('non-scaling-stroke'), 'the stroke does not scale with the size');
    await page.emulateMedia({ reducedMotion: 'reduce' });
    assert.equal(await page.locator('.ds-spinner').first().evaluate((el) => getComputedStyle(el).animationDuration), '3s', 'reduced motion: three times slower, still turning');
    await page.emulateMedia({ reducedMotion: 'no-preference' });
    await page.goto('http://localhost:6008/iframe.html?id=components-spinner--in-buttons&viewMode=story');
    await page.locator('.ds-spinner').first().waitFor();
    assert.equal(await page.getByRole('status').count(), 0, 'decorative spinners are hidden; the button label says it');
    assert.deepEqual(await page.locator('.ds-spinner').evaluateAll((els) => els.map((el) => getComputedStyle(el.querySelector('path')).stroke === getComputedStyle(el.closest('button')).color)), [true, true, true], 'the arc takes the button label colour');
  },
  'separator: decorative by default, role separator on request; across fills the width, upright takes the row height': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-separator--profile&viewMode=story');
    const lines = page.locator('.ds-separator');
    await lines.first().waitFor();
    assert.equal(await lines.count(), 3);
    assert.deepEqual(await lines.evaluateAll((els) => els.map((el) => el.getAttribute('role'))), ['none', 'none', 'none'], 'decorative: hidden from screen readers');
    const [across, upright] = await lines.evaluateAll((els) => els.slice(0, 2).map((el) => { const r = el.getBoundingClientRect(); return [r.width, r.height]; }));
    assert.deepEqual(across, [320, 1], 'horizontal: the container width, 1 px');
    assert.deepEqual(upright, [1, 20], 'vertical: 1 px, the height of the stats row');
    assert.equal(await lines.first().evaluate((el) => getComputedStyle(el).borderTopColor), 'rgba(10, 10, 10, 0.1)', 'the border token (Light)');
    await page.goto('http://localhost:6008/iframe.html?id=components-separator--vertical&viewMode=story');
    await page.locator('.ds-separator').first().waitFor();
    assert.equal(await page.locator('.ds-separator').last().evaluate((el) => el.getBoundingClientRect().height), 16, 'a set height wins over the row (16 px between icon buttons)');
    await page.goto('http://localhost:6008/iframe.html?id=components-separator--semantic&viewMode=story');
    await page.getByRole('separator').waitFor();
    assert.equal(await page.getByRole('separator').getAttribute('aria-orientation'), null, 'horizontal is the default orientation');
    await page.goto('http://localhost:6008/iframe.html?id=components-separator--playground&viewMode=story&args=orientation:vertical;decorative:!false');
    await page.getByRole('separator').waitFor();
    assert.equal(await page.getByRole('separator').getAttribute('aria-orientation'), 'vertical');
  },
  'playground team: the invite link popover, the team settings dialog, the activity sheet, the add-seats drawer, the owner hover card, the compact-list toggle, the sort toggle group, the usage tabs, the offsite calendar, filters, search, role from the row menu, remove from the context menu with a confirmation': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=playground-team--members&viewMode=story');
    const rows = page.getByRole('list', { name: 'Members' }).getByRole('listitem');
    await rows.first().waitFor();
    await page.getByRole('button', { name: 'Invite link' }).click();
    const invite = page.getByRole('dialog', { name: 'Invite link' });
    await invite.waitFor();
    await invite.getByRole('button', { name: 'Copy invite link' }).click();
    await page.getByRole('region', { name: 'Notifications' }).getByText('Invite link copied').first().waitFor();
    await invite.getByRole('button', { name: 'Reset link' }).click();
    assert.equal(await invite.isVisible(), false, 'Reset link closes the popover');
    await page.getByRole('button', { name: 'Team settings' }).click();
    const settings = page.getByRole('dialog', { name: 'Team settings' });
    await settings.waitFor();
    await settings.getByRole('textbox', { name: 'Team name' }).fill('Nova');
    await settings.getByRole('button', { name: 'Save' }).click();
    assert.equal(await settings.isVisible(), false, 'Save closes the dialog');
    await page.getByRole('heading', { name: 'Nova members' }).waitFor();
    await page.getByRole('button', { name: 'View all' }).click();
    const log = page.getByRole('dialog', { name: 'Activity log' });
    await log.waitFor();
    assert.match(await log.textContent(), /Everything that happened in Nova/, 'the sheet shows the activity');
    await log.getByRole('button', { name: 'Done' }).click();
    assert.equal(await log.isVisible(), false, 'Done closes the sheet');
    await page.getByRole('button', { name: 'Add seats' }).click();
    const seats = page.getByRole('dialog', { name: 'Add seats' });
    await seats.waitFor();
    await seats.getByRole('button', { name: 'More seats' }).click();
    await seats.getByRole('button', { name: 'Add 6 seats' }).click();
    assert.equal(await seats.isVisible(), false, 'the drawer closes');
    await page.getByText('5 of 16', { exact: true }).waitFor();
    const usage = page.getByRole('tablist', { name: 'Usage' });
    await usage.getByRole('tab', { name: 'Storage' }).click();
    await page.getByText('38 of 100 GB', { exact: true }).waitFor();
    assert.equal(await page.getByText('5 of 16', { exact: true }).count(), 0, 'the usage tabs switch panels');
    await usage.getByRole('tab', { name: /Seats/ }).click();
    const sortBy = page.getByRole('group', { name: 'Sort by' });
    await sortBy.getByRole('button', { name: 'Name' }).click();
    assert.equal(await rows.first().textContent().then((t) => t.includes('Aiko Tanaka')), true, 'sorted by name');
    await sortBy.getByRole('button', { name: 'Joined' }).click();
    const compact = page.getByRole('button', { name: 'Compact list' });
    await compact.click();
    assert.equal(await compact.getAttribute('aria-pressed'), 'true');
    assert.equal(await page.getByText('mira@orbit.dev', { exact: true }).count(), 0, 'the compact list hides emails');
    await compact.click();
    await page.getByRole('button', { name: 'Next offsite: May 14, 2026' }).click();
    const offsite = page.getByRole('group', { name: 'Offsite date' });
    await offsite.waitFor();
    assert.equal(await offsite.getByRole('button', { name: 'Saturday, May 16, 2026' }).isDisabled(), true, 'weekends are off');
    await offsite.getByRole('button', { name: 'Thursday, May 21, 2026' }).click();
    await page.getByRole('region', { name: 'Notifications' }).getByText('Offsite moved to May 21').first().waitFor();
    await page.getByRole('button', { name: 'Next offsite: May 21, 2026' }).waitFor();
    await page.keyboard.press('Escape');
    await page.getByRole('link', { name: 'Mira Okafor' }).hover();
    await page.getByText('Created the workspace and manages billing.', { exact: false }).waitFor();
    await page.mouse.move(0, 0);
    assert.equal(await rows.count(), 5);
    await page.getByRole('button', { name: 'Pending', exact: true }).click();
    assert.equal(await rows.count(), 2);
    await page.getByRole('button', { name: 'All', exact: true }).click();
    await page.getByRole('button', { name: 'Search in: Name' }).click();
    await page.getByRole('menuitem', { name: 'Email' }).click();
    await page.getByLabel('Search members').fill('priya@');
    assert.equal(await rows.count(), 1);
    await page.getByLabel('Search members').fill('');
    await page.getByRole('button', { name: 'More actions for Priya Raman' }).click();
    await page.getByRole('menuitemradio', { name: 'Admin' }).click();
    assert.equal(await rows.nth(2).locator('.ds-badge').last().textContent(), 'Admin');
    await page.getByRole('region', { name: 'Notifications' }).getByText('Priya Raman is now Admin').first().waitFor();
    await rows.nth(1).locator('div[tabindex]').first().click({ button: 'right', position: { x: 200, y: 10 } });
    await page.getByRole('menuitem', { name: 'Remove from team' }).click();
    const dialog = page.getByRole('alertdialog', { name: 'Remove Jonas Lindqvist?' });
    await dialog.waitFor();
    assert.equal(await page.evaluate(() => document.activeElement?.textContent), 'Cancel', 'focus starts on Cancel');
    await dialog.getByRole('button', { name: 'Remove' }).click();
    await dialog.waitFor({ state: 'hidden' });
    assert.equal(await rows.count(), 4);
    assert.equal(await page.getByText('Jonas Lindqvist was removed').count() >= 1, true, 'logged in the activity and as a toast');
  },
};

// Dropdown Menu (WAI-ARIA menu button): the stories open the menu on first render, so tests close it first.
const menuButton = async (id, name) => {
  await page.goto(`http://localhost:6008/iframe.html?id=${id}&viewMode=story`);
  const trigger = page.getByRole('button', { name, exact: true });
  await trigger.click();
  assert.equal(await trigger.getAttribute('aria-expanded'), 'false', 'a click on the open menu button closes it');
  return trigger;
};
const focusedItem = () => page.evaluate(() => document.activeElement?.querySelector('.ds-dropdown__text')?.textContent ?? document.activeElement?.tagName);
const rootMenu = page.locator('#storybook-root [role="menu"]').first();

Object.assign(tests, {
  'dropdown-menu: keyboard opens, moves, picks and returns focus': async () => {
    const trigger = await menuButton('components-dropdown-menu--default', 'Open');
    await trigger.focus();
    await page.keyboard.press('Enter');
    assert.equal(await trigger.getAttribute('aria-expanded'), 'true');
    assert.equal(await focusedItem(), 'Profile', 'Enter focuses the first item');
    await page.keyboard.press('ArrowDown');
    assert.equal(await focusedItem(), 'Billing');
    await page.keyboard.press('ArrowUp');
    await page.keyboard.press('ArrowUp');
    assert.equal(await focusedItem(), 'Support', 'ArrowUp wraps and skips the disabled API item');
    await page.keyboard.press('Home');
    assert.equal(await focusedItem(), 'Profile');
    await page.keyboard.press('c');
    assert.equal(await focusedItem(), 'Changelog', 'type-ahead');
    await page.keyboard.press('Escape');
    assert.equal(await rootMenu.isVisible(), false);
    assert.equal(await page.evaluate(() => document.activeElement?.textContent), 'Open', 'Escape returns focus to the trigger');
    await page.keyboard.press('ArrowUp');
    assert.equal(await focusedItem(), 'Support', 'ArrowUp opens on the last item');
    await page.keyboard.press('Enter');
    assert.equal(await trigger.getAttribute('aria-expanded'), 'false', 'picking an item closes the menu');
    assert.equal(await page.evaluate(() => document.activeElement?.textContent), 'Open');
    await trigger.click();
    assert.equal(await page.evaluate(() => document.activeElement?.getAttribute('role')), 'menu', 'a click focuses the menu, not an item');
    await page.keyboard.press('ArrowDown');
    assert.equal(await focusedItem(), 'Profile');
    await page.keyboard.press('Tab');
    assert.equal(await rootMenu.isVisible(), false, 'Tab closes the menu');
  },
  'dropdown-menu: submenus open with → or hover and close with ←, Escape or another item': async () => {
    const trigger = await menuButton('components-dropdown-menu--submenus', 'Menu');
    const widgets = page.getByRole('menuitem', { name: 'Widgets', exact: true });
    const development = page.getByRole('menuitem', { name: 'Development', exact: true });
    await trigger.focus();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('w');
    assert.equal(await focusedItem(), 'Widgets');
    await page.keyboard.press('ArrowRight');
    assert.equal(await widgets.getAttribute('aria-expanded'), 'true');
    assert.equal(await focusedItem(), 'Development', '→ opens the submenu on its first item');
    await page.keyboard.press('Enter');
    assert.equal(await focusedItem(), 'New widget', 'Enter on a sub trigger opens it too');
    await page.keyboard.press('ArrowLeft');
    assert.equal(await focusedItem(), 'Development', '← closes the submenu');
    assert.equal(await development.getAttribute('aria-expanded'), 'false');
    await page.keyboard.press('Escape');
    assert.equal(await focusedItem(), 'Widgets', 'Escape closes only the submenu');
    assert.equal(await widgets.getAttribute('aria-expanded'), 'false');
    await page.keyboard.press('Escape');
    assert.equal(await rootMenu.isVisible(), false);

    await trigger.click();
    await widgets.hover();
    assert.equal(await development.isVisible(), true, 'hover opens the submenu');
    // The submenu starts 4 px right of the menu (Figma); the pointer crosses that gap on its way in.
    const [menuBox, subBox] = await Promise.all([rootMenu.boundingBox(), page.locator('#storybook-root [role="menu"]').nth(1).boundingBox()]);
    assert.equal(Math.round(subBox.x - (menuBox.x + menuBox.width)), 4, 'a 4 px gap between the menus');
    assert.equal(Math.round(subBox.y - (await widgets.boundingBox()).y), -4, 'the first sub item is level with the trigger');
    const target = await development.boundingBox();
    await page.mouse.move(target.x + target.width / 2, target.y + target.height / 2, { steps: 12 });
    assert.equal(await focusedItem(), 'Development', 'crossing the gap keeps the submenu open');
    await page.getByRole('menuitem', { name: 'Manage widgets' }).hover();
    assert.equal(await focusedItem(), 'Manage widgets');
    await page.mouse.move(5, 5);
    assert.equal(await development.isVisible(), true, 'leaving the submenu keeps it open');
    await page.getByRole('menuitem', { name: 'Cursor chat' }).hover();
    assert.equal(await development.isVisible(), false, 'another item of the parent menu closes it');
    await page.mouse.click(5, 5);
    assert.equal(await rootMenu.isVisible(), false, 'a click outside closes the menu');
    assert.equal(await trigger.getAttribute('aria-expanded'), 'false');
  },
  'dropdown-menu: checkbox and radio items toggle and keep the menu open': async () => {
    await menuButton('components-dropdown-menu--checkboxes', 'Notifications');
    await page.getByRole('button', { name: 'Notifications', exact: true }).click();
    const email = page.getByRole('menuitemcheckbox', { name: 'Email' });
    assert.equal(await email.getAttribute('aria-checked'), 'false');
    await email.click();
    assert.equal(await email.getAttribute('aria-checked'), 'true');
    assert.equal(await rootMenu.isVisible(), true, 'checking keeps the menu open');
    const sms = page.getByRole('menuitemcheckbox', { name: 'SMS' });
    await sms.hover();
    await page.keyboard.press(' ');
    assert.equal(await sms.getAttribute('aria-checked'), 'false', 'Space toggles a controlled item');

    await menuButton('components-dropdown-menu--radio', 'Panel');
    await page.getByRole('button', { name: 'Panel', exact: true }).click();
    await page.getByRole('menuitemradio', { name: 'Left' }).click();
    assert.equal(await page.getByRole('menuitemradio', { name: 'Left' }).getAttribute('aria-checked'), 'true');
    assert.equal(await page.getByRole('menuitemradio', { name: 'Bottom' }).getAttribute('aria-checked'), 'false');
  },
});

Object.assign(tests, {
  'checkbox: label click and Space toggle; disabled does not; error is described': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-checkbox--with-descriptions&viewMode=story');
    const onboarding = page.getByRole('checkbox', { name: 'User onboarding emails' });
    assert.equal(await onboarding.isChecked(), false);
    await page.getByText('User onboarding emails').click();
    assert.equal(await onboarding.isChecked(), true, 'the label toggles the checkbox');
    await page.keyboard.press('Space');
    assert.equal(await onboarding.isChecked(), false, 'Space toggles it');
    assert.match(await onboarding.getAttribute('aria-describedby'), /caption/, 'the description describes it');
    const disabled = page.getByRole('checkbox', { name: 'Product update notifications' });
    await page.getByText('Product update notifications').click({ force: true });
    assert.equal(await disabled.isChecked(), false, 'a disabled checkbox ignores its label');
    await page.goto('http://localhost:6008/iframe.html?id=components-checkbox--themes&viewMode=story');
    const terms = page.getByRole('checkbox', { name: 'Accept the terms' }).first();
    assert.equal(await terms.getAttribute('aria-invalid'), 'true');
    assert.equal(await page.locator(`#${await terms.getAttribute('aria-describedby')}`).textContent(), 'This field is required.');
  },
  'checkbox: a click anywhere on a choice card toggles it': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-checkbox--choice-cards&viewMode=story');
    const storage = page.getByRole('checkbox', { name: 'Extra storage' });
    const card = page.locator('.ds-field--card').first();
    const box = await card.boundingBox();
    await page.mouse.click(box.x + box.width - 12, box.y + box.height - 8);
    assert.equal(await storage.isChecked(), true, 'the card corner toggles it');
    await page.mouse.move(0, 0);
    assert.equal(await card.evaluate((el) => getComputedStyle(el).backgroundColor), 'rgba(115, 115, 115, 0.05)', 'a checked card is filled');
    assert.match(await storage.getAttribute('aria-describedby'), /caption/, 'the name is the title; the description describes it');
  },
  'checkbox: nested parent is indeterminate and sets its children': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-checkbox--nested&viewMode=story');
    const parent = page.getByRole('checkbox', { name: 'Push notifications' });
    const mixed = () => parent.evaluate((el) => el.indeterminate);
    assert.equal(await mixed(), true, 'one child of three checked');
    await parent.click();
    assert.equal(await mixed(), false);
    assert.equal(await parent.isChecked(), true);
    for (const name of ['Direct messages', 'Mentions', 'Comments on your posts']) assert.equal(await page.getByRole('checkbox', { name }).isChecked(), true);
    await page.getByRole('checkbox', { name: 'Mentions' }).click();
    assert.equal(await mixed(), true, 'unchecking a child makes the parent mixed again');
  },
});

Object.assign(tests, {
  'hover: Input, Select, Textarea and choice cards get a dark 1.5 px stroke, not when disabled': async () => {
    const stroke = (locator) => locator.evaluate((el) => getComputedStyle(el).boxShadow.match(/(rgba?\([^)]+\)) 0px 0px 0px ([\d.]+px) inset/)?.slice(1).join(' '));
    const dark = 'rgb(98, 98, 98) 1.5px';
    const check = async (id, selector) => {
      await page.goto(`http://localhost:6008/iframe.html?id=${id}&viewMode=story`);
      const el = page.locator(selector).first();
      await page.mouse.move(0, 0);
      assert.notEqual(await stroke(el), dark, `${selector} at rest`);
      await el.hover();
      assert.equal(await stroke(el), dark, `${selector} on hover`);
    };
    await check('components-input--playground', '.ds-input');
    await check('components-select--playground', '.ds-select__trigger');
    await check('components-checkbox--choice-cards', '.ds-field--card');
    await check('components-textarea--playground', '.ds-textarea');
    await page.goto('http://localhost:6008/iframe.html?id=components-select--all-states&viewMode=story');
    const disabled = page.locator('.ds-select__trigger--disabled').first();
    const rest = await stroke(disabled);
    await disabled.hover({ force: true });
    assert.equal(await stroke(disabled), rest, 'a disabled select does not react');
  },
});

Object.assign(tests, {
  'radio: arrows move the choice within the group; labels select; disabled is skipped': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-radio--list&viewMode=story');
    const radio = (name) => page.getByRole('radio', { name, exact: true });
    await page.waitForSelector('.ds-radio__input');
    await page.keyboard.press('Tab');
    assert.equal(await page.evaluate(() => document.activeElement?.value), 'Normal · 160 kbps', 'Tab reaches the checked radio');
    await page.keyboard.press('ArrowDown');
    assert.equal(await radio('High · 320 kbps').isChecked(), true, 'ArrowDown checks the next radio');
    await page.keyboard.press('ArrowDown');
    assert.equal(await radio('Automatic').isChecked(), true, 'the disabled Lossless is skipped and the arrows wrap');
    await page.getByText('Low · 96 kbps').click();
    assert.equal(await radio('Low · 96 kbps').isChecked(), true, 'the label selects');
    assert.equal(await radio('Automatic').isChecked(), false, 'one choice at a time');
    assert.equal(await page.locator('input[type="radio"]:not([disabled])').evaluateAll((els) => new Set(els.map((e) => e.name)).size), 1, 'the radios share one name');
  },
  'radio: choice cards select on click and show focus on the card; errors describe every radio': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-radio--choice-cards&viewMode=story');
    const card = page.locator('.ds-field--card').first();
    const box = await card.boundingBox();
    await page.mouse.click(box.x + 20, box.y + box.height - 10);
    assert.equal(await page.getByRole('radio', { name: 'Monthly' }).isChecked(), true, 'a click on the card selects it');
    await page.keyboard.press('ArrowDown');
    const focused = page.locator('.ds-field--card').nth(1);
    assert.match(await focused.evaluate((el) => getComputedStyle(el).boxShadow), /rgb\(161, 161, 161\) 0px 0px 0px 1px inset/, 'keyboard focus puts the ring stroke on the card');
    assert.equal(await page.locator('.ds-field--card .ds-radio__input').nth(1).evaluate((el) => getComputedStyle(el).boxShadow.startsWith('rgba(0, 0, 0, 0)')), true, 'not on the radio');
    await page.goto('http://localhost:6008/iframe.html?id=components-radio--invalid&viewMode=story');
    const group = page.locator('fieldset').nth(1);
    const first = group.getByRole('radio', { name: 'Everyone' });
    assert.equal(await first.getAttribute('aria-invalid'), 'true');
    assert.equal(await first.getAttribute('required'), '', 'a required group makes its radios required');
    const ids = (await first.getAttribute('aria-describedby')).split(' ');
    assert.equal(await page.locator(`#${ids[ids.length - 1]}`).textContent(), 'Pick one to finish setting up your profile.', 'the error describes each radio');
  },
  'context-menu: a right-click opens it at the pointer; arrows move; Escape closes and returns focus': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-context-menu--photo&viewMode=story');
    const area = page.getByText('Right-click the photo');
    await area.waitFor();
    const menu = page.getByRole('menu', { name: 'Photo' });
    assert.equal(await menu.isVisible(), false, 'closed at first');
    const box = await area.boundingBox();
    await page.mouse.click(box.x + 40, box.y + 30, { button: 'right' });
    assert.equal(await menu.isVisible(), true, 'a right-click opens it');
    const at = await menu.boundingBox();
    assert.deepEqual([Math.round(at.x), Math.round(at.y)], [Math.round(box.x + 40), Math.round(box.y + 30)], 'at the pointer');
    assert.equal(await menu.evaluate((el) => el === document.activeElement), true, 'focus moves onto the menu');
    await page.keyboard.press('ArrowDown');
    assert.equal(await page.evaluate(() => document.activeElement?.textContent), 'Copy image⌘C', 'ArrowDown reaches the first item');
    await page.keyboard.press('Escape');
    assert.equal(await menu.isVisible(), false, 'Escape closes it');
    assert.equal(await area.evaluate((el) => el === document.activeElement), true, 'focus goes back to the area');
    await page.mouse.click(box.x + box.width - 4, box.y + box.height - 4, { button: 'right' });
    await page.mouse.click(box.x + 4, box.y + box.height + 120);
    assert.equal(await menu.isVisible(), false, 'a click outside closes it');
  },
  'context-menu: Shift+F10 opens it with the first item focused; an item runs and closes it; it stays in the viewport': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-context-menu--chat-message&viewMode=story');
    const area = page.getByText('Right-click the message');
    await area.waitFor();
    await area.focus();
    await page.keyboard.press('Shift+F10');
    const menu = page.getByRole('menu', { name: 'Message' });
    assert.equal(await menu.isVisible(), true, 'Shift+F10 opens it');
    assert.equal(await page.evaluate(() => document.activeElement?.getAttribute('aria-label')), 'Smile', 'the first item takes focus');
    assert.equal(await page.getByRole('group', { name: 'Reactions' }).getByRole('menuitem').count(), 6);
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    assert.equal(await menu.isVisible(), false, 'picking an item closes the menu');
    assert.equal(await page.getByText('Reaction: 😴').count(), 1, 'the item ran');
    const viewport = page.viewportSize();
    // A narrow viewport leaves less than the menu's width right of the area.
    await page.setViewportSize({ width: 600, height: viewport.height });
    // Resizing closes an open menu; let the resize event pass before opening it again.
    await page.waitForFunction(() => window.innerWidth === 600);
    await page.evaluate(() => new Promise((r) => setTimeout(r, 100)));
    const box = await area.boundingBox();
    await page.mouse.click(box.x + box.width - 2, box.y + 10, { button: 'right' });
    const at = await menu.boundingBox();
    assert.equal(at.x + at.width <= 600, true, 'near the right edge it opens to the left of the pointer');
    await page.setViewportSize(viewport);
  },
  'switch: role switch; label click and Space toggle; disabled does not; error describes it': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-switch--with-description&viewMode=story');
    const onboarding = page.getByRole('switch', { name: 'User onboarding emails' });
    await onboarding.waitFor();
    assert.equal(await onboarding.isChecked(), true);
    await page.getByText('User onboarding emails').click();
    assert.equal(await onboarding.isChecked(), false, 'the label toggles it');
    await onboarding.focus();
    await page.keyboard.press('Space');
    assert.equal(await onboarding.isChecked(), true, 'Space toggles it');
    const thumb = page.locator('.ds-switch__thumb').first();
    assert.notEqual(await thumb.evaluate((el) => getComputedStyle(el).translate), 'none', 'the thumb moves to the end when on');
    const disabled = page.getByRole('switch', { name: 'Product update notifications' });
    await page.getByText('Product update notifications').click({ force: true });
    assert.equal(await disabled.isChecked(), false, 'a disabled switch does not toggle');
    const disabledField = page.locator('.ds-field').filter({ has: disabled });
    assert.equal(await disabledField.locator('.ds-field__label').evaluate((el) => getComputedStyle(el).opacity), '0.5', 'the disabled label fades');
    assert.equal(await disabledField.locator('.ds-field__caption').evaluate((el) => getComputedStyle(el).opacity), '0.5', 'and so does its description');
    await page.goto('http://localhost:6008/iframe.html?id=components-switch--invalid&viewMode=story');
    const twoFactor = page.getByRole('switch', { name: 'Two-factor authentication' });
    assert.equal(await twoFactor.getAttribute('aria-invalid'), 'true');
    assert.equal(await page.locator(`#${await twoFactor.getAttribute('aria-describedby')}`).textContent(), 'Required for admins — turn it on to keep the role.');
  },
  'switch: a click anywhere on a choice card toggles it; focus rings the card, not the switch': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-switch--choice-cards&viewMode=story');
    const shuffle = page.getByRole('switch', { name: 'Smart shuffle' });
    await shuffle.waitFor();
    const card = page.locator('.ds-field--card').first();
    const box = await card.boundingBox();
    await page.mouse.click(box.x + box.width / 2, box.y + box.height - 6);
    assert.equal(await shuffle.isChecked(), true, 'a click on the card toggles it');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Shift+Tab');
    assert.match(await card.evaluate((el) => getComputedStyle(el).boxShadow), /0px 0px 0px 3px/, 'the card shows the ring');
    assert.equal(await shuffle.evaluate((el) => getComputedStyle(el).boxShadow.includes('0px 0px 0px 3px')), false, 'not the switch');
  },
  'tooltip: describes its trigger; Tab shows it at once, Escape hides it; hover shows it after the delay and keeps it over the tooltip': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-tooltip--default&viewMode=story');
    const button = page.getByRole('button', { name: 'Refund' });
    await button.waitFor();
    const tip = page.getByRole('tooltip', { includeHidden: true });
    assert.equal(await tip.isVisible(), false, 'hidden at first');
    assert.equal(await button.getAttribute('aria-describedby'), await tip.getAttribute('id'), 'the tooltip describes the button');
    await page.keyboard.press('Tab');
    assert.equal(await tip.isVisible(), true, 'keyboard focus shows it at once');
    assert.equal(await tip.textContent(), 'Refund this payment');
    await page.keyboard.press('Escape');
    assert.equal(await tip.isVisible(), false, 'Escape hides it');
    await button.blur();
    // Start the pointer away from the button: an earlier test may have left it where the button now is.
    await page.mouse.move(0, 0);
    await button.hover();
    assert.equal(await tip.isVisible(), false, 'not before the delay');
    await tip.waitFor({ state: 'visible', timeout: 2000 });
    const box = await tip.boundingBox();
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2, { steps: 4 });
    assert.equal(await tip.isVisible(), true, 'it stays while the pointer is over it');
    await page.mouse.move(0, 0);
    assert.equal(await tip.isVisible(), false, 'leaving hides it');
    await button.click();
    await page.mouse.move(0, 0);
    assert.equal(await tip.isVisible(), false, 'a click does not show it');
  },
  'card: the title is a heading; the muted footer is a fill-1 band 20 px under the content; media is rounded with the card': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-card--with-action&viewMode=story');
    await page.waitForSelector('.ds-card');
    assert.equal(await page.getByRole('heading', { level: 3, name: 'Upcoming bills' }).count(), 1, 'the title is an h3 by default');
    const footer = page.locator('.ds-card__footer--muted');
    const style = await footer.evaluate((el) => ({ margin: getComputedStyle(el).marginTop, radius: getComputedStyle(el).borderBottomLeftRadius }));
    assert.deepEqual(style, { margin: '20px', radius: '20px' });
    await page.goto('http://localhost:6008/iframe.html?id=components-card--with-image&viewMode=story');
    await page.waitForSelector('.ds-card__media');
    const media = await page.locator('.ds-card__media').evaluate((el) => ({ radius: getComputedStyle(el).borderTopLeftRadius, ratio: (el.getBoundingClientRect().width / el.getBoundingClientRect().height).toFixed(2) }));
    assert.deepEqual(media, { radius: '20px', ratio: (16 / 9).toFixed(2) }, 'a 16:9 picture rounded with the card');
  },
  'sonner: a toast shows in a polite live region, closes after its duration and waits while the pointer is over it': async () => {
    await page.mouse.move(0, 0);
    await page.goto('http://localhost:6008/iframe.html?id=components-sonner--playground&viewMode=story&args=duration:1000;action:!false');
    const show = page.getByRole('button', { name: 'Show toast' });
    await show.waitFor();
    const region = page.getByRole('region', { name: 'Notifications' });
    assert.equal(await region.getAttribute('aria-keyshortcuts'), 'Alt+T');
    assert.equal(await region.locator('ol').getAttribute('aria-live'), 'polite', 'the list is a live region before any toast');
    await show.click();
    const item = region.locator('li', { hasText: 'Table booked for 4' });
    await item.waitFor();
    await page.waitForTimeout(1500);
    assert.equal(await item.count(), 0, 'it closes after 1 s');
    await show.click();
    await item.waitFor();
    await item.hover();
    await page.waitForTimeout(1500);
    assert.equal(await item.count(), 1, 'it waits while the pointer is over it');
    await page.mouse.move(0, 0);
    await page.waitForTimeout(1500);
    assert.equal(await item.count(), 0, 'and closes after the pointer leaves');
  },
  'sonner: action and cancel close it; Alt+T moves focus to the toasts and Escape back; promise turns loading into success; close button': async () => {
    await page.mouse.move(0, 0);
    await page.goto('http://localhost:6008/iframe.html?id=components-sonner--toasts&viewMode=story');
    const trigger = page.getByRole('button', { name: 'Action and cancel' });
    await trigger.waitFor();
    await trigger.click();
    const region = page.getByRole('region', { name: 'Notifications' });
    const invite = region.locator('li', { hasText: 'Maya invited you to a trip' });
    await invite.waitFor();
    await page.keyboard.press('Alt+t');
    assert.equal(await page.evaluate(() => document.activeElement.getAttribute('aria-label')), 'Notifications', 'Alt+T focuses the region');
    await page.keyboard.press('Tab');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Decline');
    await page.keyboard.press('Escape');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Action and cancel', 'Escape returns focus');
    await invite.getByRole('button', { name: 'Join' }).click();
    await region.locator('li', { hasText: "You've joined Weekend in Porto" }).waitFor();
    await page.waitForTimeout(300);
    assert.equal(await invite.count(), 0, 'the action closes it');
    await page.getByRole('button', { name: 'Promise' }).click();
    const upload = region.locator('li.ds-toast--loading', { hasText: 'Uploading 12 photos…' });
    await upload.waitFor();
    await region.locator('li.ds-toast--success', { hasText: '12 photos uploaded' }).waitFor({ timeout: 4000 });
    await page.goto('http://localhost:6008/iframe.html?id=components-sonner--with-close-button&viewMode=story');
    await page.getByRole('button', { name: 'Show toast' }).click();
    const driver = page.locator('li', { hasText: 'Your driver is 3 minutes away' });
    await driver.getByRole('button', { name: 'Close notification' }).click();
    await page.waitForTimeout(300);
    assert.equal(await driver.count(), 0, 'the close button closes it');
  },
  'sonner: stacked piles toasts behind the newest (14 px out, smaller, its height) and hover or focus spreads them out': async () => {
    await page.mouse.move(0, 0);
    await page.goto('http://localhost:6008/iframe.html?id=components-sonner--stacked&viewMode=story');
    const three = page.getByRole('button', { name: 'Show three' });
    await three.waitFor();
    await three.click();
    await page.mouse.move(0, 0);
    const items = page.locator('.ds-toaster li');
    await page.waitForFunction(() => document.querySelectorAll('.ds-toaster li').length === 3);
    await page.waitForTimeout(500);
    const boxes = () => items.evaluateAll((els) => els.map((el) => ({ top: el.getBoundingClientRect().top, bottom: el.getBoundingClientRect().bottom, h: el.offsetHeight, front: el.hasAttribute('data-front') })));
    const piled = await boxes();
    const front = piled.find((b) => b.front);
    assert.equal(piled.indexOf(front), 2, 'the newest is in front');
    assert.deepEqual(piled.map((b) => b.h), [front.h, front.h, front.h], 'the ones behind take its height');
    assert.ok(Math.abs(front.bottom - piled[1].bottom - 14) < 2 && Math.abs(piled[1].bottom - piled[0].bottom - 14) < 2, 'each peeks 14 px out (bottom edges 14 px apart)');
    await items.nth(2).hover();
    await page.waitForTimeout(500);
    const spread = await boxes();
    assert.ok(spread[0].bottom <= spread[1].top - 13 && spread[1].bottom <= spread[2].top - 13, 'hover spreads them 14 px apart');
    assert.equal(spread[1].h, 52, 'each takes its own height again (the warning has no description)');
    await page.mouse.move(0, 0);
    await page.waitForTimeout(500);
    await page.keyboard.press('Alt+t');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(500);
    const focused = await boxes();
    assert.ok(focused[0].bottom <= focused[1].top - 13, 'focus inside spreads them too');
  },
  'input group: a dropdown in the T slot opens over the page and sets its label; blocks name and describe the input; stepper, clear and loading': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-input--input-group-dropdown&viewMode=story');
    const currency = page.getByRole('button', { name: 'Currency: USD' });
    await currency.waitFor();
    await currency.click();
    assert.equal(await currency.getAttribute('aria-expanded'), 'true');
    const eur = page.getByRole('menuitem', { name: 'EUR' });
    const box = await eur.boundingBox();
    assert.equal(await page.evaluate(({ x, y }) => document.elementFromPoint(x, y)?.closest('[role="menuitem"]')?.textContent, { x: box.x + box.width / 2, y: box.y + box.height / 2 }), 'EUR', 'the menu is not clipped by the input');
    await eur.click();
    assert.equal(await page.getByRole('button', { name: 'Currency: EUR' }).textContent(), 'EUR');
    await page.goto('http://localhost:6008/iframe.html?id=components-input--input-group-alignment&viewMode=story');
    const client = page.getByRole('textbox', { name: 'Client' });
    await client.waitFor();
    assert.equal(await client.inputValue(), 'Northlight Studio', 'Block start names the input');
    const project = page.getByRole('textbox', { name: 'Project' });
    assert.equal(await page.evaluate((id) => document.getElementById(id).textContent, (await project.getAttribute('aria-describedby')).split(' ')[0]), 'Shown on the invoice PDF', 'Block end describes it');
    await page.getByText('Shown on the invoice PDF').click();
    assert.equal(await page.evaluate(() => document.activeElement.getAttribute('aria-label')), 'Project', 'a click on a block focuses the input');
    await page.goto('http://localhost:6008/iframe.html?id=components-input--input-group-buttons&viewMode=story');
    const quantity = page.getByRole('textbox', { name: 'Quantity' });
    await quantity.waitFor();
    await page.getByRole('button', { name: 'Increase' }).click();
    await page.getByRole('button', { name: 'Increase' }).click();
    await page.getByRole('button', { name: 'Decrease' }).click();
    assert.equal(await quantity.inputValue(), '1');
    await page.goto('http://localhost:6008/iframe.html?id=components-input--input-group-status&viewMode=story');
    const workspace = page.getByRole('textbox', { name: 'Workspace' });
    await workspace.waitFor();
    assert.equal(await workspace.getAttribute('aria-busy'), 'true', 'loading marks the input busy');
    assert.notEqual(await page.locator('.ds-input__icon--spin svg').first().evaluate((el) => getComputedStyle(el).animationName), 'none');
    const name = page.getByRole('textbox', { name: 'Display name' });
    await page.getByRole('button', { name: 'Clear' }).click();
    assert.equal(await name.inputValue(), '');
    assert.equal(await page.getByRole('button', { name: 'Clear' }).count(), 0, 'the clear button goes with the text');
  },
  'marker: separator centres the text between equal rules; border sits 8 px under; loading spins (not with reduced motion); links stay reachable': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-marker--variants&viewMode=story');
    const separator = page.locator('.ds-marker--separator');
    await separator.waitFor();
    const rules = await separator.evaluate((el) => ['::before', '::after'].map((p) => parseFloat(getComputedStyle(el, p).width)));
    assert.ok(Math.abs(rules[0] - rules[1]) < 0.5 && rules[0] > 100, `equal rules either side (${rules})`);
    const border = await page.locator('.ds-marker--border').evaluate((el) => ({ pad: getComputedStyle(el).paddingBottom, h: el.offsetHeight }));
    assert.deepEqual(border, { pad: '8px', h: 28 });
    await page.goto('http://localhost:6008/iframe.html?id=components-marker--loading&viewMode=story');
    const spin = page.locator('.ds-marker__icon--spin svg');
    await spin.waitFor();
    assert.notEqual(await spin.evaluate((el) => getComputedStyle(el).animationName), 'none', 'the spinner turns');
    assert.equal(await page.locator('[aria-current="step"]').textContent(), 'Comparing guest reviews…');
    await page.emulateMedia({ reducedMotion: 'reduce' });
    assert.equal(await spin.evaluate((el) => getComputedStyle(el).animationName), 'none', 'reduced motion stops it');
    await page.emulateMedia({ reducedMotion: null });
    await page.goto('http://localhost:6008/iframe.html?id=components-marker--chat&viewMode=story');
    const link = page.getByRole('link', { name: 'View receipt' });
    await link.waitFor();
    await link.focus();
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'View receipt', 'the receipt link takes focus');
  },
  'field styles: Combobox and Textarea draw default, shadow and soft exactly as Input and Select': async () => {
    const look = (selector) => page.locator(selector).evaluateAll((els) => els.map((el) => ({ bg: getComputedStyle(el).backgroundColor, shadow: getComputedStyle(el).boxShadow })));
    await page.goto('http://localhost:6008/iframe.html?id=components-input--styles&viewMode=story');
    await page.waitForSelector('.ds-input');
    const input = await look('.ds-input');
    await page.goto('http://localhost:6008/iframe.html?id=components-select--all-states&viewMode=story');
    await page.waitForSelector('.ds-select__trigger');
    const select = await look('.ds-field:first-of-type .ds-select__trigger, .ds-select__trigger--shadow, .ds-select__trigger--soft');
    for (const [id, selector] of [['components-combobox--styles', '.ds-combobox__field'], ['components-textarea--styles', '.ds-textarea']]) {
      await page.goto(`http://localhost:6008/iframe.html?id=${id}&viewMode=story`);
      await page.waitForSelector(selector);
      const styles = await look(selector);
      assert.deepEqual(styles.map((s) => s.bg), input.map((s) => s.bg), `${id}: the same fills as Input (default, shadow, soft)`);
      assert.deepEqual(styles.map((s) => s.shadow), input.map((s) => s.shadow), `${id}: the same stroke and shadow as Input`);
    }
    assert.ok(select.some((s) => s.bg === input[2].bg), 'Select soft has the same fill too');
  },
  'combobox: typing filters and announces the count; arrows and Enter pick; Escape closes then clears; no results; an emptied field clears': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-combobox--single-selection&viewMode=story');
    const input = page.getByRole('combobox', { name: 'Framework' });
    await input.waitFor();
    assert.equal(await input.inputValue(), 'Next.js', 'the selection shows in the field');
    await input.click();
    assert.equal(await input.getAttribute('aria-expanded'), 'true', 'a click opens the list');
    assert.equal(await page.getByRole('option').count(), 6, 'every option shows before typing');
    await input.fill('nu');
    assert.deepEqual(await page.getByRole('option').allTextContents(), ['Nuxt.js'], 'typing filters');
    await page.locator('.ds-combobox__status', { hasText: '1 result' }).waitFor({ timeout: 2000 }).catch(() => {}); // set in an effect after the render
    assert.equal(await page.locator('.ds-combobox__status').textContent(), '1 result', 'the count is read out');
    await page.keyboard.press('ArrowDown');
    assert.equal(await input.getAttribute('aria-activedescendant'), await page.getByRole('option', { name: 'Nuxt.js' }).getAttribute('id'));
    await page.keyboard.press('Enter');
    assert.equal(await input.inputValue(), 'Nuxt.js');
    assert.equal(await input.getAttribute('aria-expanded'), 'false', 'Enter picks and closes');
    await input.fill('zz');
    assert.equal(await page.locator('.ds-combobox__empty').textContent(), 'No results.');
    await page.keyboard.press('Escape');
    assert.equal(await input.getAttribute('aria-expanded'), 'false', 'Escape closes the list');
    await page.keyboard.press('Escape');
    assert.equal(await input.inputValue(), '', 'Escape on a closed list clears the text');
    await page.keyboard.type('re');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    assert.equal(await input.inputValue(), 'React');
    await input.fill('');
    await page.keyboard.press('Tab');
    assert.equal(await input.inputValue(), '', 'an emptied field clears the value on blur');
    await page.goto('http://localhost:6008/iframe.html?id=components-combobox--groups&viewMode=story');
    const zone = page.getByRole('combobox', { name: 'Timezone' });
    await zone.waitFor();
    await zone.fill('pa');
    assert.deepEqual(await page.getByRole('group').evaluateAll((els) => els.map((el) => el.textContent)), ['Americas(GMT-3) São Paulo', 'Europe(GMT+1) Paris'], 'empty groups go');
    assert.equal(await page.locator('.ds-select__separator').count(), 1, 'one separator between what is left');
  },
  'combobox: multiple keeps the list open and adds chips; × and Backspace remove them and say so': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-combobox--multiple-selection&viewMode=story');
    const input = page.getByRole('combobox', { name: 'Frameworks' });
    await input.waitFor();
    const chips = page.locator('.ds-combobox__chip-label');
    assert.deepEqual(await chips.allTextContents(), ['SvelteKit', 'Next.js']);
    await input.click();
    assert.equal(await page.getByRole('listbox').getAttribute('aria-multiselectable'), 'true');
    await page.getByRole('option', { name: 'Remix' }).click();
    assert.deepEqual(await chips.allTextContents(), ['SvelteKit', 'Next.js', 'Remix'], 'a click adds a chip');
    assert.equal(await input.getAttribute('aria-expanded'), 'true', 'the list stays open');
    await page.locator('.ds-combobox__status', { hasText: 'Remix added' }).waitFor({ timeout: 2000 }).catch(() => {}); // set in an effect after the render
    assert.equal(await page.locator('.ds-combobox__status').textContent(), 'Remix added');
    await page.getByRole('button', { name: 'Remove SvelteKit' }).click();
    assert.deepEqual(await chips.allTextContents(), ['Next.js', 'Remix'], '× removes a chip');
    assert.equal(await page.evaluate(() => document.activeElement.getAttribute('role')), 'combobox', 'focus stays in the field');
    await page.keyboard.press('Backspace');
    assert.deepEqual(await chips.allTextContents(), ['Next.js'], 'Backspace removes the last chip');
    await page.locator('.ds-combobox__status', { hasText: 'Remix removed' }).waitFor({ timeout: 2000 }).catch(() => {}); // set in an effect after the render
    assert.equal(await page.locator('.ds-combobox__status').textContent(), 'Remix removed');
  },
  'alert dialog: opens modal and named, focus on Cancel; the backdrop does not close it; Escape and Cancel close it and focus returns; the action runs': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-alert-dialog--demos&viewMode=story');
    const trigger = page.getByRole('button', { name: 'Delete account' });
    await trigger.waitFor();
    assert.equal(await trigger.getAttribute('aria-haspopup'), 'dialog');
    await trigger.click();
    const dialog = page.getByRole('alertdialog', { name: 'Delete your account?' });
    await dialog.waitFor();
    assert.equal(await dialog.evaluate((el) => el.matches(':modal')), true, 'a modal dialog');
    assert.match(await dialog.evaluate((el) => document.getElementById(el.getAttribute('aria-describedby')).textContent), /permanently deletes/, 'the description describes it');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Cancel', 'focus starts on the safe answer');
    await page.mouse.click(5, 5);
    assert.equal(await dialog.isVisible(), true, 'a click on the backdrop does not close it');
    assert.equal(await page.evaluate(() => getComputedStyle(document.documentElement).overflow), 'hidden', 'the page does not scroll');
    await page.keyboard.press('Escape');
    assert.equal(await dialog.isVisible(), false, 'Escape closes it');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Delete account', 'focus returns to the trigger');
    await page.getByRole('button', { name: 'Small', exact: true }).click();
    const small = page.getByRole('alertdialog', { name: 'Allow notifications?' });
    await small.waitFor();
    const widths = await small.locator('.ds-alert-dialog__footer button').evaluateAll((els) => els.map((el) => el.offsetWidth));
    assert.equal(widths[0], widths[1], 'sm buttons share the width');
    await small.getByRole('button', { name: "Don't allow" }).click();
    assert.equal(await small.isVisible(), false, 'Cancel closes it');
    await page.getByRole('button', { name: 'Media', exact: true }).click();
    await page.getByRole('alertdialog', { name: 'Share your location?' }).getByRole('button', { name: 'Share location' }).click();
    assert.equal(await page.getByRole('status').textContent(), 'Location shared', 'the action runs and closes it');
    assert.equal(await page.getByRole('alertdialog').count(), 0);
  },
  'popover: the trigger controls a named non-modal dialog; focus moves in; Escape returns focus; a click outside and PopoverClose close it; placement': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-popover--share-playlist&viewMode=story');
    const trigger = page.getByRole('button', { name: 'Share' });
    await trigger.waitFor();
    assert.equal(await trigger.getAttribute('aria-haspopup'), 'dialog');
    assert.equal(await trigger.getAttribute('aria-expanded'), 'false');
    assert.equal(await page.getByRole('dialog').count(), 0, 'closed at first');
    await trigger.click();
    const dialog = page.getByRole('dialog', { name: 'Share this playlist' });
    await dialog.waitFor();
    assert.equal(await trigger.getAttribute('aria-expanded'), 'true');
    assert.equal(await trigger.getAttribute('aria-controls'), await dialog.getAttribute('id'), 'the trigger controls the panel');
    assert.equal(await dialog.evaluate((el) => el.matches(':modal')), false, 'not modal');
    assert.match(await dialog.evaluate((el) => document.getElementById(el.getAttribute('aria-describedby')).textContent), /Anyone with the link/, 'the description describes it');
    assert.equal(await page.evaluate(() => document.activeElement.getAttribute('aria-label')), 'Playlist link', 'focus moves to the first control');
    const [t, d] = await Promise.all([trigger.boundingBox(), dialog.boundingBox()]);
    assert.equal(Math.round(d.y - (t.y + t.height)), 4, '4 px under the trigger');
    assert.equal(Math.round(d.x), Math.round(t.x), 'align start lines up with the trigger');
    assert.equal(Math.round(d.width), 288, '288 px wide');
    await page.keyboard.press('Escape');
    assert.equal(await dialog.isVisible(), false, 'Escape closes it');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Share', 'focus returns to the trigger');
    await trigger.click();
    await dialog.waitFor();
    await page.mouse.click(700, 500);
    assert.equal(await dialog.isVisible(), false, 'a click outside closes it');
    await trigger.click();
    await dialog.waitFor();
    await trigger.click();
    assert.equal(await dialog.isVisible(), false, 'the trigger toggles it');
    await page.goto('http://localhost:6008/iframe.html?id=components-popover--with-form&viewMode=story');
    await page.getByRole('button', { name: 'Price alert' }).click();
    const form = page.getByRole('dialog', { name: 'Price alert' });
    await form.waitFor();
    await form.getByRole('button', { name: 'Save alert' }).click();
    assert.equal(await form.isVisible(), false, 'PopoverClose closes it');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Price alert', 'and focus returns to the trigger');
    await page.goto('http://localhost:6008/iframe.html?id=components-popover--notifications&viewMode=story');
    const bell = page.getByRole('button', { name: 'Notifications' });
    await bell.click();
    const list = page.getByRole('dialog', { name: 'Notifications' });
    await list.waitFor();
    const [b, l] = await Promise.all([bell.boundingBox(), list.boundingBox()]);
    assert.equal(Math.round(l.x + l.width), Math.round(b.x + b.width), 'align end lines up with the trigger end');
    assert.equal(Math.round(l.width), 320, 'width sets the panel width');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Mark all as read', 'focus moves to the first button');
    await page.keyboard.press('Shift+Tab');
    assert.equal(await list.isVisible(), true, 'focus on the trigger keeps it open');
    await page.evaluate(() => document.body.appendChild(Object.assign(document.createElement('button'), { textContent: 'Outside' })).focus());
    assert.equal(await list.isVisible(), false, 'focus leaving the trigger and the panel closes it');
  },
  'dialog: opens modal and named; focus moves in and stays; Escape, Close, the backdrop and DialogClose close it and focus returns; the body scrolls, the footer stays; a form inside validates': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-dialog--demos&viewMode=story');
    const trigger = page.getByRole('button', { name: 'Edit profile' });
    await trigger.waitFor();
    assert.equal(await trigger.getAttribute('aria-haspopup'), 'dialog');
    await trigger.click();
    const dialog = page.getByRole('dialog', { name: 'Edit profile' });
    await dialog.waitFor();
    assert.equal(await dialog.evaluate((el) => el.matches(':modal')), true, 'a modal dialog');
    assert.match(await dialog.evaluate((el) => document.getElementById(el.getAttribute('aria-describedby')).textContent), /Make changes/, 'the description describes it');
    assert.equal(await page.evaluate(() => document.activeElement.closest('dialog') !== null), true, 'focus moves inside');
    assert.equal(await page.evaluate(() => getComputedStyle(document.documentElement).overflow), 'hidden', 'the page does not scroll');
    await dialog.evaluate((el) => Promise.all(el.getAnimations().map((a) => a.finished)));
    assert.equal(Math.round((await dialog.boundingBox()).width), 448, '448 px wide once it has scaled in');
    await page.keyboard.press('Escape');
    assert.equal(await dialog.isVisible(), false, 'Escape closes it');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Edit profile', 'focus returns to the trigger');
    await trigger.click();
    await dialog.getByRole('button', { name: 'Close' }).click();
    assert.equal(await dialog.isVisible(), false, 'the Close button closes it');
    await trigger.click();
    await dialog.waitFor();
    await page.mouse.click(5, 5);
    assert.equal(await dialog.isVisible(), false, 'a click on the backdrop closes it');
    await trigger.click();
    await dialog.getByRole('textbox', { name: 'Name', exact: true }).click();
    assert.equal(await dialog.isVisible(), true, 'a click inside keeps it open');
    await dialog.getByRole('button', { name: 'Save changes' }).click();
    assert.equal(await dialog.isVisible(), false, 'DialogClose closes it');
    assert.equal(await page.getByRole('status').textContent(), 'Profile saved', 'and the action runs');

    await page.getByRole('button', { name: 'Sticky footer' }).click();
    const terms = page.getByRole('dialog', { name: 'Terms of service' });
    await terms.waitFor();
    await terms.evaluate((el) => Promise.all(el.getAnimations().map((a) => a.finished)));
    const body = terms.locator('.ds-dialog__body');
    assert.equal(await body.evaluate((el) => el.scrollHeight > el.clientHeight), true, 'the body scrolls');
    const footerBefore = await terms.locator('.ds-dialog__footer').boundingBox();
    await body.evaluate((el) => el.scrollTo(0, el.scrollHeight));
    assert.deepEqual(await terms.locator('.ds-dialog__footer').boundingBox(), footerBefore, 'the footer stays');
    await terms.getByRole('button', { name: 'Accept' }).click();
    assert.equal(await page.getByRole('status').textContent(), 'Terms accepted');

    await page.getByRole('button', { name: 'In a form' }).click();
    const card = page.getByRole('dialog', { name: 'Add a payment card' });
    await card.waitFor();
    await card.getByRole('button', { name: 'Add card' }).click();
    assert.equal(await card.isVisible(), true, 'an invalid form keeps it open');
    assert.match(await card.getByRole('textbox', { name: 'Card number' }).getAttribute('aria-invalid'), /true/);
    await card.getByRole('textbox', { name: 'Card number' }).fill('4242 4242 4242 4242');
    await card.getByRole('button', { name: 'Add card' }).click();
    assert.equal(await card.isVisible(), false, 'submitting closes it');
    assert.equal(await page.getByRole('status').textContent(), 'Card ending 4242 added');

    await page.getByRole('button', { name: 'No close button' }).click();
    const privacy = page.getByRole('dialog', { name: 'We value your privacy' });
    await privacy.waitFor();
    assert.equal(await privacy.getByRole('button', { name: 'Close' }).count(), 0, 'no Close button');
    const header = await privacy.locator('.ds-dialog__header').evaluate((el) => getComputedStyle(el).paddingRight);
    assert.equal(header, '24px', '24 px on the right without the button');
    await page.keyboard.press('Escape');
  },
  'sheet: a modal panel on its side (right and left full-height, bottom full-width); focus inside; Escape, Close, the backdrop and SheetClose close it and focus returns; the footer stacks full-width buttons': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-sheet--demos&viewMode=story');
    const vw = await page.evaluate(() => innerWidth);
    const vh = await page.evaluate(() => innerHeight);
    const settle = (loc) => loc.evaluate((el) => Promise.all(el.getAnimations().map((a) => a.finished)));
    const trigger = page.getByRole('button', { name: 'Edit profile' });
    await trigger.waitFor();
    assert.equal(await trigger.getAttribute('aria-haspopup'), 'dialog');
    await trigger.click();
    const sheet = page.getByRole('dialog', { name: 'Edit profile' });
    await sheet.waitFor();
    await settle(sheet);
    assert.equal(await sheet.evaluate((el) => el.matches(':modal')), true, 'a modal dialog');
    const box = await sheet.boundingBox();
    assert.deepEqual([Math.round(box.x + box.width), Math.round(box.y), Math.round(box.width), Math.round(box.height)], [vw, 0, 384, vh], 'right: 384 px wide, full height, on the right edge');
    assert.equal(await page.evaluate(() => document.activeElement.closest('dialog') !== null), true, 'focus moves inside');
    const buttons = await sheet.locator('.ds-sheet__footer button').evaluateAll((els) => els.map((el) => [el.textContent, el.offsetWidth]));
    assert.deepEqual(buttons, [['Save changes', 336], ['Cancel', 336]], 'the footer stacks full-width buttons, the main action first');
    await page.keyboard.press('Escape');
    assert.equal(await sheet.isVisible(), false, 'Escape closes it');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Edit profile', 'focus returns to the trigger');
    await trigger.click();
    await settle(sheet);
    await sheet.getByRole('button', { name: 'Close' }).click();
    assert.equal(await sheet.isVisible(), false, 'Close closes it');
    await trigger.click();
    await settle(sheet);
    await page.mouse.click(20, vh / 2);
    assert.equal(await sheet.isVisible(), false, 'a click on the backdrop closes it');
    await trigger.click();
    await settle(sheet);
    await sheet.getByRole('button', { name: 'Save changes' }).click();
    assert.equal(await sheet.isVisible(), false, 'SheetClose closes it');
    assert.equal(await page.getByRole('status').textContent(), 'Profile saved');

    await page.getByRole('button', { name: 'Delivery time' }).click();
    const bottom = page.getByRole('dialog', { name: 'Delivery time' });
    await settle(bottom);
    const b = await bottom.boundingBox();
    assert.deepEqual([Math.round(b.x), Math.round(b.y + b.height), Math.round(b.width)], [0, vh, vw], 'bottom: full width on the bottom edge');
    assert.ok(b.height < vh / 2, 'as tall as its content');
    await bottom.getByRole('button', { name: '7–8 PM' }).click();
    await bottom.getByRole('button', { name: 'Confirm 7–8 PM' }).click();
    assert.equal(await page.getByRole('status').textContent(), 'Delivery at 7–8 PM');

    await page.getByRole('button', { name: 'Comments' }).click();
    const left = page.getByRole('dialog', { name: 'Comments' });
    await settle(left);
    const l = await left.boundingBox();
    assert.deepEqual([Math.round(l.x), Math.round(l.height)], [0, vh], 'left: full height on the left edge');
    await page.keyboard.press('Escape');

    await page.getByRole('button', { name: 'Keyboard shortcuts' }).click();
    const keys = page.getByRole('dialog', { name: 'Keyboard shortcuts' });
    await settle(keys);
    const body = keys.locator('.ds-sheet__body');
    assert.equal(await body.evaluate((el) => el.scrollHeight > el.clientHeight || el.clientHeight > 0), true);
    await keys.getByRole('textbox', { name: 'Search shortcuts' }).fill('archive');
    assert.equal(await keys.getByText('Archive', { exact: true }).isVisible(), true, 'the search filters the list');
    assert.equal(await keys.getByText('Compose', { exact: true }).count(), 0);
    await page.keyboard.press('Escape');
  },
  'drawer: a floating modal panel (down at the bottom, side on the end edge, up at the top); a long swipe on the handle closes it, a short one springs back; Escape, the backdrop and DrawerClose close it and focus returns': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-drawer--demos&viewMode=story');
    const vw = await page.evaluate(() => innerWidth);
    const vh = await page.evaluate(() => innerHeight);
    const settle = (loc) => loc.evaluate((el) => Promise.all(el.getAnimations().map((a) => a.finished)));
    const trigger = page.getByRole('button', { name: 'Step goal' });
    await trigger.waitFor();
    await trigger.click();
    const drawer = page.getByRole('dialog', { name: 'Daily step goal' });
    await settle(drawer);
    assert.equal(await drawer.evaluate((el) => el.matches(':modal')), true, 'a modal dialog');
    const box = await drawer.boundingBox();
    assert.deepEqual([Math.round(box.width), Math.round(vh - (box.y + box.height)), Math.round(box.x + box.width / 2)], [384, 8, Math.round(vw / 2)], 'down: 8 px above the bottom, centred');
    assert.equal(await drawer.locator('.ds-drawer__title').evaluate((el) => getComputedStyle(el).textAlign), 'center', 'the heading is centred');
    assert.equal(await page.evaluate(() => document.activeElement.closest('dialog') !== null), true, 'focus moves inside');
    const handle = drawer.locator('.ds-drawer__handle');
    assert.equal(await handle.getAttribute('aria-hidden'), 'true');
    const h = await handle.boundingBox();
    await page.mouse.move(h.x + h.width / 2, h.y + h.height / 2);
    await page.mouse.down();
    await page.mouse.move(h.x + h.width / 2, h.y + 30, { steps: 5 });
    await page.mouse.up();
    await page.waitForTimeout(400);
    assert.equal(await drawer.isVisible(), true, 'a short swipe springs back');
    assert.equal(await drawer.evaluate((el) => el.style.translate), '', 'and the panel returns to its place');
    await page.mouse.move(h.x + h.width / 2, h.y + h.height / 2);
    await page.mouse.down();
    await page.mouse.move(h.x + h.width / 2, h.y + box.height / 2, { steps: 10 });
    await page.mouse.up();
    assert.equal(await drawer.isVisible(), false, 'a long swipe down closes it');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Step goal', 'focus returns to the trigger');
    await trigger.click();
    await settle(drawer);
    await drawer.getByRole('button', { name: 'More steps' }).click();
    await drawer.getByRole('button', { name: 'Save goal' }).click();
    assert.equal(await drawer.isVisible(), false, 'DrawerClose closes it');
    assert.equal(await page.getByRole('status').textContent(), 'Goal set to 8,500 steps');

    await page.getByRole('button', { name: 'Notifications' }).click();
    const side = page.getByRole('dialog', { name: 'Updates' });
    await settle(side);
    const s = await side.boundingBox();
    assert.deepEqual([Math.round(s.width), Math.round(vw - (s.x + s.width)), Math.round(s.y), Math.round(s.height)], [384, 8, 8, vh - 16], 'side: 384 px wide, 8 px from the end edge, full height');
    assert.equal(await side.locator('.ds-drawer__handle').count(), 0, 'no handle on the side');
    await side.getByRole('button', { name: 'Mentions' }).click();
    assert.equal(await side.getByRole('list', { name: 'Recent' }).getByRole('listitem').count(), 2);
    await page.mouse.click(20, vh / 2);
    assert.equal(await side.isVisible(), false, 'a click on the backdrop closes it');

    await page.getByRole('button', { name: 'From the top' }).click();
    const top = page.getByRole('dialog', { name: "You're offline" });
    await settle(top);
    const t = await top.boundingBox();
    assert.equal(Math.round(t.y), 8, 'up: 8 px below the top');
    const th = await top.locator('.ds-drawer__handle').boundingBox();
    assert.ok(th.y > t.y + t.height - 20, 'the handle sits at the bottom');
    await page.keyboard.press('Escape');
    assert.equal(await top.isVisible(), false, 'Escape closes it');
  },
  'hover card: opens after resting on the link, not on a quick pass; stays while moving onto the card; closes after leaving; keyboard focus opens it, Tab into it keeps it, Escape closes it': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-hover-card--profile&viewMode=story');
    const trigger = page.getByRole('link', { name: '@maya.travels' });
    await trigger.waitFor();
    const card = page.locator('.ds-hover-card__content');
    assert.equal(await card.isVisible(), false, 'closed at first');
    await trigger.hover();
    await page.waitForTimeout(300);
    await page.mouse.move(5, 5);
    await page.waitForTimeout(600);
    assert.equal(await card.isVisible(), false, 'a quick pass does not open it');
    await trigger.hover();
    await page.waitForTimeout(800);
    assert.equal(await card.isVisible(), true, 'resting on the link opens it');
    const [t, c] = await Promise.all([trigger.boundingBox(), card.boundingBox()]);
    assert.equal(Math.round(c.y - (t.y + t.height)), 4, '4 px under the link');
    assert.equal(Math.round(c.x), Math.round(t.x), 'align start');
    assert.equal(Math.round(c.width), 288, '288 px wide');
    await page.mouse.move(c.x + 40, c.y + 40, { steps: 4 });
    await page.waitForTimeout(400);
    assert.equal(await card.isVisible(), true, 'moving onto the card keeps it open');
    await page.mouse.move(c.x + c.width + 120, c.y + c.height + 80);
    await page.waitForTimeout(450);
    assert.equal(await card.isVisible(), false, 'leaving closes it after the delay');

    await page.goto('http://localhost:6008/iframe.html?id=components-hover-card--avatar-trigger&viewMode=story');
    await page.getByRole('link', { name: 'Leo Park' }).waitFor();
    await page.keyboard.press('Tab');
    const leo = page.locator('.ds-hover-card__content');
    assert.equal(await leo.isVisible(), true, 'keyboard focus opens it at once');
    await page.keyboard.press('Tab');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Follow', 'Tab moves into the card');
    assert.equal(await leo.isVisible(), true, 'and keeps it open');
    await page.keyboard.press('Escape');
    assert.equal(await leo.isVisible(), false, 'Escape closes it');
    await page.keyboard.press('Shift+Tab');
    await page.evaluate(() => document.body.appendChild(Object.assign(document.createElement('button'), { textContent: 'Outside' })).focus());
    assert.equal(await leo.isVisible(), false, 'focus leaving closes it');
  },
  'toggle: a button with aria-pressed that flips on click, Space and Enter; disabled does not flip; icon-only is named by its label': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-toggle--variants&viewMode=story');
    const art = page.getByRole('button', { name: 'Art' });
    await art.waitFor();
    assert.equal(await art.getAttribute('aria-pressed'), 'true');
    assert.equal(await art.getAttribute('type'), 'button');
    await art.click();
    assert.equal(await art.getAttribute('aria-pressed'), 'false', 'a click turns it off');
    const work = page.getByRole('button', { name: 'Work', exact: true });
    await work.focus();
    await page.keyboard.press('Space');
    assert.equal(await work.getAttribute('aria-pressed'), 'true', 'Space turns it on');
    await page.keyboard.press('Enter');
    assert.equal(await work.getAttribute('aria-pressed'), 'false', 'Enter turns it off');
    assert.equal(await work.evaluate((el) => getComputedStyle(el).boxShadow.includes('rgba(161, 161, 161, 0.3)')), true, 'keyboard focus draws the 3 px ring');
    const pressedBg = await page.getByRole('button', { name: 'Drawings' }).evaluate((el) => getComputedStyle(el).backgroundColor);
    assert.equal(pressedBg, 'rgba(115, 115, 115, 0.08)', 'pressed is fill-2');

    await page.goto('http://localhost:6008/iframe.html?id=components-toggle--states&viewMode=story');
    const disabled = page.getByRole('button', { name: 'Disabled' }).first();
    await disabled.waitFor();
    assert.equal(await disabled.isDisabled(), true);
    assert.equal(await disabled.evaluate((el) => getComputedStyle(el).opacity), '0.5');

    await page.goto('http://localhost:6008/iframe.html?id=components-toggle--product-page&viewMode=story');
    const desktop = page.getByRole('button', { name: 'Desktop preview' });
    const mobile = page.getByRole('button', { name: 'Mobile preview' });
    await desktop.waitFor();
    assert.equal(await desktop.getAttribute('aria-pressed'), 'true');
    await mobile.click();
    assert.equal(await mobile.getAttribute('aria-pressed'), 'true', 'a controlled toggle follows its state');
    assert.equal(await desktop.getAttribute('aria-pressed'), 'false');
    const box = await mobile.boundingBox();
    assert.deepEqual([Math.round(box.width), Math.round(box.height)], [32, 32], 'icon only is a 32 px square');
    await page.getByRole('button', { name: 'Sold out' }).click();
    assert.equal(await page.getByRole('button', { name: 'Sold out' }).last().isDisabled(), true, 'the preview follows the toggle');
  },
  'toggle group: a named group with one Tab stop; arrows, Home and End move; single keeps at most one on, multiple any; disabled items are skipped': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-toggle-group--variants&viewMode=story');
    const group = page.getByRole('group', { name: 'Platform (default)' });
    await group.waitFor();
    const items = group.getByRole('button');
    assert.deepEqual(await items.evaluateAll((els) => els.map((el) => [el.textContent, el.getAttribute('aria-pressed'), el.tabIndex])), [['Web', 'false', -1], ['iOS', 'true', 0], ['Android', 'false', -1]], 'one Tab stop, on the pressed item');
    await page.keyboard.press('Tab');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'iOS', 'Tab lands on the pressed item');
    await page.keyboard.press('ArrowRight');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Android', 'ArrowRight moves on');
    await page.keyboard.press('ArrowRight');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Web', 'and wraps');
    await page.keyboard.press('End');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Android', 'End goes to the last');
    await page.keyboard.press('Space');
    assert.deepEqual(await items.evaluateAll((els) => els.map((el) => el.getAttribute('aria-pressed'))), ['false', 'false', 'true'], 'single: pressing one turns the other off');
    await page.keyboard.press('Space');
    assert.deepEqual(await items.evaluateAll((els) => els.map((el) => el.getAttribute('aria-pressed'))), ['false', 'false', 'false'], 'pressing it again turns it off');
    await page.keyboard.press('Tab');
    assert.notEqual(await page.evaluate(() => document.activeElement.closest('[role=group]')?.getAttribute('aria-label')), 'Platform (default)', 'Tab leaves the group');

    await page.goto('http://localhost:6008/iframe.html?id=components-toggle-group--formatting&viewMode=story');
    const fmt = page.getByRole('group', { name: 'Text formatting' });
    await fmt.waitFor();
    await fmt.getByRole('button', { name: 'Italic' }).click();
    assert.deepEqual(await fmt.getByRole('button').evaluateAll((els) => els.map((el) => el.getAttribute('aria-pressed'))), ['true', 'true', 'false'], 'multiple: several can be on');

    await page.goto('http://localhost:6008/iframe.html?id=components-toggle-group--disabled&viewMode=story');
    const target = page.getByRole('group', { name: 'Target' });
    await target.waitFor();
    await target.getByRole('button', { name: 'iOS' }).focus();
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Web', 'arrows skip the disabled item');
    assert.equal(await page.getByRole('group', { name: 'Format' }).getByRole('button', { name: 'CSS' }).isDisabled(), true, 'a disabled group disables its items');

    await page.goto('http://localhost:6008/iframe.html?id=components-toggle-group--orientation&viewMode=story');
    const device = page.getByRole('group', { name: 'Device' });
    await device.waitFor();
    assert.equal(await device.getAttribute('data-orientation'), 'vertical');
    assert.equal(await device.evaluate((el) => getComputedStyle(el).borderRadius), '16px', 'a joined vertical group is a 16 px box');
    await device.getByRole('button', { name: 'Tablet' }).focus();
    await page.keyboard.press('ArrowDown');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Desktop', 'ArrowDown moves in a vertical group');
  },
  'tabs: a tablist with one Tab stop; arrows, Home and End move and select, skipping disabled tabs; panels are labelled by their tab; vertical lists use Up and Down': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-tabs--order&viewMode=story');
    const list = page.getByRole('tablist', { name: 'Order' });
    await list.waitFor();
    const tabs = list.getByRole('tab');
    assert.deepEqual(await tabs.evaluateAll((els) => els.map((el) => [el.textContent, el.getAttribute('aria-selected'), el.tabIndex])), [['Overview', 'true', 0], ['Tracking', 'false', -1], ['Invoice', 'false', -1], ['Address', 'false', -1]], 'one Tab stop, on the selected tab');
    const panel = page.getByRole('tabpanel', { name: 'Overview' });
    assert.equal(await panel.isVisible(), true, 'the panel is named by its tab');
    assert.equal(await list.evaluate((el) => getComputedStyle(el).backgroundColor), 'rgba(115, 115, 115, 0.08)', 'Default draws a fill-2 track');
    await page.keyboard.press('Tab');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Overview', 'Tab lands on the selected tab');
    await page.keyboard.press('ArrowRight');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Tracking', 'ArrowRight moves on');
    assert.equal(await page.getByRole('tab', { name: 'Tracking' }).getAttribute('aria-selected'), 'true', 'and selects (automatic activation)');
    assert.equal(await page.getByRole('tabpanel', { name: 'Tracking' }).isVisible(), true, 'showing its panel');
    assert.equal(await page.getByRole('tabpanel', { includeHidden: true, name: 'Overview' }).isHidden(), true, 'and hiding the other');
    await page.keyboard.press('End');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Address', 'End goes to the last');
    await page.keyboard.press('ArrowRight');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Overview', 'and wraps');
    await page.keyboard.press('Tab');
    assert.equal(await page.evaluate(() => document.activeElement.getAttribute('role')), 'tabpanel', 'Tab moves to the panel');
    await page.getByRole('tab', { name: 'Invoice' }).click();
    assert.equal(await page.getByRole('tabpanel', { name: 'Invoice' }).isVisible(), true, 'a click selects');

    await page.goto('http://localhost:6008/iframe.html?id=components-tabs--disabled&viewMode=story');
    const report = page.getByRole('tablist', { name: 'Report' });
    await report.waitFor();
    await report.getByRole('tab', { name: 'Activity' }).focus();
    await page.keyboard.press('ArrowRight');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Settings', 'arrows skip the disabled tab');
    assert.equal(await report.getByRole('tab', { name: 'Analytics' }).isDisabled(), true);

    await page.goto('http://localhost:6008/iframe.html?id=components-tabs--vertical&viewMode=story');
    const settings = page.getByRole('tablist', { name: 'Settings' });
    await settings.waitFor();
    assert.equal(await settings.getAttribute('aria-orientation'), 'vertical');
    await settings.getByRole('tab', { name: 'Notifications' }).focus();
    await page.keyboard.press('ArrowDown');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Billing', 'ArrowDown moves in a vertical list');
    await page.keyboard.press('ArrowRight');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Billing', 'ArrowRight does nothing there');
    const bar = await page.getByRole('tab', { name: 'Billing' }).evaluate((el) => { const s = getComputedStyle(el, '::after'); return [s.width, s.height]; });
    assert.deepEqual(bar, ['2px', '20px'], 'Line Vertical draws a 2 × 20 bar');

    await page.goto('http://localhost:6008/iframe.html?id=components-tabs--full-width&viewMode=story');
    const account = page.getByRole('tablist', { name: 'Account' });
    await account.waitFor();
    const widths = await account.getByRole('tab').evaluateAll((els) => els.map((el) => Math.round(el.getBoundingClientRect().width)));
    assert.equal(widths[0], widths[1], 'full width: the tabs share the width');
    await account.getByRole('tab', { name: 'Create account' }).click();
    assert.equal(await page.getByRole('textbox', { name: 'Work email' }).isVisible(), true, 'the controlled tabs switch the form');
  },
  'slider: each thumb is a named role=slider; arrows, Page Up/Down, Home and End move it; a click or drag on the track moves the nearest thumb; range thumbs cannot cross; disabled ignores input; block marks and the scrubber; a form gets the value': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-slider--default&viewMode=story');
    const stagger = page.getByRole('slider', { name: 'Stagger' });
    await stagger.waitFor();
    assert.deepEqual(await stagger.evaluate((el) => [el.getAttribute('aria-valuenow'), el.getAttribute('aria-valuemin'), el.getAttribute('aria-valuemax'), el.getAttribute('aria-valuetext'), el.getAttribute('aria-orientation')]), ['80', '0', '160', '80 ms', 'horizontal']);
    await page.keyboard.press('Tab');
    assert.equal(await page.evaluate(() => document.activeElement.getAttribute('role')), 'slider', 'Tab reaches the thumb');
    await page.keyboard.press('ArrowRight');
    assert.equal(await stagger.getAttribute('aria-valuenow'), '85', 'ArrowRight adds a step (5)');
    await page.keyboard.press('PageDown');
    assert.equal(await stagger.getAttribute('aria-valuenow'), '35', 'Page Down takes ten steps');
    await page.keyboard.press('End');
    assert.equal(await stagger.getAttribute('aria-valuenow'), '160', 'End goes to max');
    await page.getByText('160 ms', { exact: true }).waitFor();
    await page.keyboard.press('Home');
    assert.equal(await stagger.getAttribute('aria-valuenow'), '0', 'Home goes to min');
    assert.equal(await stagger.evaluate((el) => getComputedStyle(el).boxShadow.includes('4px')), true, 'a focused thumb draws the 4 px ring');
    const track = page.locator('.ds-slider__track').first();
    const box = await track.boundingBox();
    await page.mouse.click(box.x + 8 + (box.width - 16) * 0.75, box.y + box.height / 2);
    assert.equal(await stagger.getAttribute('aria-valuenow'), '120', 'a click on the track moves the thumb there');
    await page.mouse.move(box.x + 8 + (box.width - 16) * 0.75, box.y + box.height / 2);
    await page.mouse.down();
    await page.mouse.move(box.x + 8 + (box.width - 16) * 0.25, box.y + box.height / 2, { steps: 5 });
    assert.equal(await stagger.getAttribute('data-dragging'), '', 'the dragged thumb is marked');
    await page.mouse.up();
    assert.equal(await stagger.getAttribute('aria-valuenow'), '40', 'a drag moves it');

    await page.goto('http://localhost:6008/iframe.html?id=components-slider--range&viewMode=story');
    const low = page.getByRole('slider', { name: 'Shortest delay' });
    const high = page.getByRole('slider', { name: 'Longest delay' });
    await low.waitFor();
    assert.equal(await low.getAttribute('aria-valuetext'), '40 ms');
    assert.equal(await low.getAttribute('aria-valuemax'), '120', 'the low thumb stops at the high one');
    await high.focus();
    await page.keyboard.press('Home');
    assert.equal(await high.getAttribute('aria-valuenow'), '40', 'the high thumb cannot pass the low one');
    await page.keyboard.press('End');
    const rbox = await page.locator('.ds-slider__track').first().boundingBox();
    await page.mouse.click(rbox.x + rbox.width - 10, rbox.y + rbox.height / 2);
    assert.equal(await high.getAttribute('aria-valuenow'), '160', 'a click moves the nearer thumb');
    await page.mouse.click(rbox.x + 10, rbox.y + rbox.height / 2);
    assert.equal(await low.getAttribute('aria-valuenow'), '0');

    await page.goto('http://localhost:6008/iframe.html?id=components-slider--vertical&viewMode=story');
    const bass = page.getByRole('slider', { name: 'Bass' });
    await bass.waitFor();
    assert.equal(await bass.getAttribute('aria-orientation'), 'vertical');
    await bass.focus();
    await page.keyboard.press('ArrowUp');
    assert.equal(await bass.getAttribute('aria-valuenow'), '46', 'ArrowUp raises a vertical slider');

    await page.goto('http://localhost:6008/iframe.html?id=components-slider--disabled&viewMode=story');
    const locked = page.getByRole('slider', { name: 'Locked volume' });
    await locked.waitFor();
    assert.equal(await locked.getAttribute('aria-disabled'), 'true');
    assert.equal(await locked.getAttribute('tabindex'), null, 'a disabled thumb is not a Tab stop');
    const dbox = await page.locator('.ds-slider__track').first().boundingBox();
    await page.mouse.click(dbox.x + 10, dbox.y + dbox.height / 2);
    assert.equal(await locked.getAttribute('aria-valuenow'), '50', 'clicks do nothing');

    await page.goto('http://localhost:6008/iframe.html?id=components-slider--scrubber&viewMode=story');
    const brightness = page.getByRole('slider', { name: 'Brightness' });
    await brightness.waitFor();
    await page.keyboard.press('Tab');
    await page.keyboard.press('ArrowRight');
    await page.getByText('51%', { exact: true }).waitFor();
    // The ring fades in over 200 ms.
    await page.waitForFunction(() => getComputedStyle(document.querySelector('.ds-slider--scrubber .ds-slider__track')).boxShadow.includes(' 3px'), null, { timeout: 2000 });

    await page.goto('http://localhost:6008/iframe.html?id=components-slider--effort-slider&viewMode=story');
    const effort = page.getByRole('slider', { name: 'Effort' });
    await effort.waitFor();
    assert.equal(await page.locator('.ds-slider__mark').count(), 6, 'block marks: a dot per step');
    assert.equal(await page.locator('.ds-slider__mark--emphasis').count(), 1, 'the recommended step is a bar');
    assert.deepEqual(await effort.evaluate((el) => [el.offsetWidth, el.offsetHeight]), [20, 24], 'block thumbs are 20 × 24');
    await effort.focus();
    await page.keyboard.press('ArrowLeft');
    assert.equal(await effort.getAttribute('aria-valuetext'), 'Medium (recommended)');

    await page.goto('http://localhost:6008/iframe.html?id=components-slider--in-a-form&viewMode=story');
    await page.getByRole('slider', { name: 'Minimum budget' }).waitFor();
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByText('budget=200&budget=800', { exact: true }).waitFor();
  },
  'input otp: one named one-time-code input; typing fills the slots and moves the active slot; letters are dropped; Backspace clears; paste fills; a Field error makes it invalid': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-input-otp--digits-only&viewMode=story');
    const input = page.getByRole('textbox', { name: 'Verification code' });
    await input.waitFor();
    assert.deepEqual(await input.evaluate((el) => [el.autocomplete, el.inputMode]), ['one-time-code', 'numeric']);
    const slots = page.locator('.ds-input-otp__slot');
    const continueButton = page.getByRole('button', { name: 'Continue' });
    assert.equal(await continueButton.isDisabled(), true);
    await page.keyboard.press('Tab');
    assert.equal(await page.locator('.ds-input-otp__slot--active').getAttribute('data-index'), '0', 'focus makes the first slot active');
    assert.equal(await page.locator('.ds-input-otp__caret').count(), 1, 'with a caret');
    await page.keyboard.type('12a3');
    assert.deepEqual(await slots.allTextContents(), ['1', '2', '3', '', '', ''], 'letters are dropped');
    assert.equal(await page.locator('.ds-input-otp__slot--active').getAttribute('data-index'), '3', 'the next slot is active');
    await page.keyboard.press('Backspace');
    assert.deepEqual(await slots.allTextContents(), ['1', '2', '', '', '', ''], 'Backspace clears the last character');
    await page.keyboard.type('3456');
    assert.equal(await input.inputValue(), '123456');
    assert.equal(await continueButton.isDisabled(), false, 'a full code enables Continue');
    await page.keyboard.type('7');
    assert.equal(await input.inputValue(), '123456', 'no seventh character');
    await page.keyboard.press('Tab');
    assert.equal(await page.locator('.ds-input-otp__slot--active').count(), 0, 'no active slot without focus');

    await page.goto('http://localhost:6008/iframe.html?id=components-input-otp--separator&viewMode=story');
    const code = page.getByRole('textbox', { name: 'Verification code' });
    await code.waitFor();
    assert.equal(await page.locator('.ds-input-otp__group').count(), 2, 'two groups');
    assert.equal(await page.locator('.ds-input-otp__separator').count(), 1, 'with one separator');
    await code.focus();
    // insertText delivers the whole string at once, as a paste does.
    await page.keyboard.insertText('98 76-54');
    assert.equal(await code.inputValue(), '987654', 'a pasted code keeps its digits');

    await page.goto('http://localhost:6008/iframe.html?id=components-input-otp--with-field&viewMode=story');
    const recovery = page.getByRole('textbox', { name: 'Recovery code' });
    await recovery.waitFor();
    await recovery.focus();
    await page.keyboard.type('111111');
    assert.equal(await recovery.getAttribute('aria-invalid'), 'true', 'a Field error makes it invalid');
    assert.equal(await page.locator('.ds-input-otp--invalid').count(), 1);
    assert.equal(await recovery.evaluate((el) => document.getElementById(el.getAttribute('aria-describedby').split(' ').pop()).textContent), 'That code is not right. Check the email and try again.');
  },
  'calendar: a named grid with one Tab stop; arrows, Home/End and Page Up/Down move focus across months; Enter picks; a range takes two clicks; disabled days cannot be picked; dropdowns change the month': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-calendar--single&viewMode=story');
    const grid = page.getByRole('grid', { name: 'March 2026' });
    await grid.waitFor();
    assert.equal(await grid.locator('button[tabindex="0"]').count(), 1, 'one Tab stop');
    assert.equal(await grid.locator('button[tabindex="0"]').textContent(), '27', 'on the selected day');
    const selected = page.getByRole('button', { name: 'Friday, March 27, 2026' });
    assert.equal(await selected.getAttribute('aria-pressed'), 'true');
    assert.equal(await page.getByRole('button', { name: 'Tuesday, March 17, 2026' }).getAttribute('aria-current'), 'date', 'today is marked');
    await page.getByRole('button', { name: 'Next month' }).focus();
    await page.keyboard.press('Tab');
    assert.equal(await page.evaluate(() => document.activeElement.getAttribute('aria-label')), 'Friday, March 27, 2026', 'Tab enters the grid on the selected day');
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowDown');
    assert.equal(await page.evaluate(() => document.activeElement.getAttribute('aria-label')), 'Saturday, April 4, 2026', 'arrows cross into the next month');
    await page.getByRole('grid', { name: 'April 2026' }).waitFor();
    await page.keyboard.press('Home');
    assert.equal(await page.evaluate(() => document.activeElement.getAttribute('aria-label')), 'Sunday, March 29, 2026', 'Home goes to the start of the week');
    await page.keyboard.press('PageDown');
    assert.equal(await page.evaluate(() => document.activeElement.getAttribute('aria-label')), 'Wednesday, April 29, 2026', 'Page Down moves a month');
    await page.keyboard.press('Shift+PageUp');
    assert.equal(await page.evaluate(() => document.activeElement.getAttribute('aria-label')), 'Tuesday, April 29, 2025', 'Shift+Page Up moves a year');
    await page.keyboard.press('Enter');
    await page.getByText('Selected: Apr 29, 2025').waitFor();
    assert.equal(await page.getByRole('button', { name: 'Tuesday, April 29, 2025' }).getAttribute('aria-pressed'), 'true', 'Enter picks the day');

    await page.goto('http://localhost:6008/iframe.html?id=components-calendar--range&viewMode=story');
    await page.getByRole('grid', { name: 'March 2026' }).waitFor();
    assert.equal(await page.getByRole('grid').count(), 2, 'two months');
    await page.getByRole('button', { name: 'Monday, March 2, 2026' }).click();
    await page.getByText('Mar 2, 2026 – …').waitFor();
    await page.getByRole('button', { name: 'Friday, March 6, 2026' }).click();
    await page.getByText('Mar 2, 2026 – Mar 6, 2026').waitFor();
    const band = await page.getByRole('grid', { name: 'March 2026' }).locator('.ds-calendar__cell--range-middle:not(:has([data-outside]))').count();
    assert.equal(band, 3, 'the days between are the range');
    await page.getByRole('button', { name: 'Previous month' }).click();
    await page.getByRole('grid', { name: 'February 2026' }).waitFor();

    await page.goto('http://localhost:6008/iframe.html?id=components-calendar--disabled-days&viewMode=story');
    await page.getByRole('grid', { name: 'March 2026' }).waitFor();
    assert.equal(await page.getByRole('button', { name: 'Monday, March 16, 2026' }).isDisabled(), true, 'days before min are disabled');
    assert.equal(await page.getByRole('button', { name: 'Saturday, March 21, 2026' }).isDisabled(), true, 'and weekends');
    assert.equal(await page.getByRole('button', { name: 'Previous month' }).isDisabled(), true, 'no going back before min');

    await page.goto('http://localhost:6008/iframe.html?id=components-calendar--month-and-year-selector&viewMode=story');
    await page.getByRole('combobox', { name: 'Month' }).waitFor();
    await page.getByRole('combobox', { name: 'Month' }).selectOption('6');
    await page.getByRole('combobox', { name: 'Year' }).selectOption('2028');
    await page.getByRole('grid', { name: 'July 2028' }).waitFor();
  },
  'date picker: the trigger opens a calendar dialog with focus on the day; picking closes it and returns focus; Escape and outside clicks close it; a range closes after the second date; the input parses typed dates; forms get YYYY-MM-DD': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-date-picker--default&viewMode=story');
    await page.getByRole('button', { name: 'Review due Mar 27, 2026' }).waitFor();
    const trigger = page.getByRole('button', { name: /^Review due/ });
    assert.deepEqual(await trigger.evaluate((el) => [el.getAttribute('aria-haspopup'), el.getAttribute('aria-expanded')]), ['dialog', 'false'], 'the Field label and the date name the trigger');
    await trigger.click();
    const dialog = page.getByRole('dialog', { name: 'Choose a date' });
    await dialog.waitFor();
    assert.equal(await trigger.getAttribute('aria-expanded'), 'true');
    assert.equal(await page.evaluate(() => document.activeElement.getAttribute('aria-label')), 'Friday, March 27, 2026', 'focus moves to the picked day');
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('Enter');
    assert.equal(await dialog.isVisible(), false, 'picking closes it');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Mar 28, 2026', 'focus returns to the trigger, which shows the new date');
    await page.keyboard.press('Enter');
    await dialog.waitFor();
    await page.keyboard.press('Escape');
    assert.equal(await dialog.isVisible(), false, 'Escape closes it');
    assert.equal(await page.evaluate(() => document.activeElement.getAttribute('aria-haspopup')), 'dialog', 'and returns focus');
    await trigger.click();
    await dialog.waitFor();
    await page.mouse.click(600, 30);
    assert.equal(await dialog.isVisible(), false, 'a click outside closes it');

    await page.goto('http://localhost:6008/iframe.html?id=components-date-picker--range-picker&viewMode=story');
    const range = page.getByRole('button', { name: /Trip dates/ });
    await range.waitFor();
    await range.click();
    const rdialog = page.getByRole('dialog', { name: 'Choose dates' });
    await rdialog.waitFor();
    assert.equal(await rdialog.getByRole('grid').count(), 2, 'two months side by side');
    const [a, b] = await rdialog.getByRole('grid').evaluateAll((els) => els.map((el) => el.getBoundingClientRect().top));
    assert.equal(a, b, 'on one row');
    await rdialog.getByRole('button', { name: 'Monday, March 2, 2026' }).click();
    assert.equal(await rdialog.isVisible(), true, 'the first date keeps it open');
    await rdialog.getByRole('button', { name: 'Thursday, March 5, 2026' }).click();
    assert.equal(await rdialog.isVisible(), false, 'the second closes it');
    await page.getByRole('button', { name: 'Trip dates, Mar 2, 2026 - Mar 5, 2026' }).waitFor();

    await page.goto('http://localhost:6008/iframe.html?id=components-date-picker--input&viewMode=story');
    const input = page.getByRole('textbox', { name: 'Subscription date' });
    await input.waitFor();
    assert.equal(await input.inputValue(), 'September 20, 2026');
    await input.fill('2026-10-05');
    await page.keyboard.press('Enter');
    await page.getByText('Value: Mon Oct 05 2026').waitFor();
    assert.equal(await input.inputValue(), 'October 5, 2026', 'a typed date is read and written back in the format');
    await input.fill('not a date');
    await page.keyboard.press('Tab');
    assert.equal(await input.inputValue(), 'October 5, 2026', 'text that is not a date is dropped');
    await page.getByRole('button', { name: 'Choose a date, October 5, 2026' }).click();
    await page.getByRole('dialog', { name: 'Choose a date' }).waitFor();
    await page.getByRole('button', { name: 'Tuesday, October 13, 2026' }).click();
    assert.equal(await input.inputValue(), 'October 13, 2026');

    await page.goto('http://localhost:6008/iframe.html?id=components-date-picker--states&viewMode=story');
    const deadline = page.getByRole('button', { name: /Deadline/ });
    await deadline.waitFor();
    assert.equal(await deadline.getAttribute('aria-invalid'), 'true', 'a Field error makes it invalid');
    assert.equal(await page.getByRole('button', { name: /Locked/ }).isDisabled(), true, 'a disabled Field disables it');

    await page.goto('http://localhost:6008/iframe.html?id=components-date-picker--in-a-form&viewMode=story');
    await page.getByRole('button', { name: 'Book' }).click();
    await page.getByText('stay=2026-03-20&stay=2026-03-23', { exact: true }).waitFor();
  },
  'collapsible: the trigger is a button with aria-expanded and aria-controls; click, Enter and Space toggle the hidden content; asChild buttons work the same; disabled does nothing': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-collapsible--default&viewMode=story');
    const trigger = page.getByRole('button', { name: 'Hide replies' });
    await trigger.waitFor();
    const contentId = await trigger.getAttribute('aria-controls');
    const content = page.locator(`[id="${contentId}"]`);
    assert.equal(await trigger.getAttribute('aria-expanded'), 'true');
    assert.equal(await content.isVisible(), true, 'open shows the content');
    await trigger.click();
    const show = page.getByRole('button', { name: 'Show replies' });
    assert.equal(await show.getAttribute('aria-expanded'), 'false');
    await content.waitFor({ state: 'hidden' });
    assert.deepEqual(await content.evaluate((el) => [el.getBoundingClientRect().height, getComputedStyle(el).visibility]), [0, 'hidden'], 'closed collapses the content to 0 px, then hides it');
    assert.equal(await page.locator('.ds-collapsible').first().evaluate((el) => el.getBoundingClientRect().height), 20, 'and the gap closes with it (Figma State=Closed is 20 px)');
    await show.focus();
    await page.keyboard.press('Enter');
    const heights = [];
    for (let i = 0; i < 4; i++) {
      heights.push(await content.evaluate((el) => el.getBoundingClientRect().height));
      await page.waitForTimeout(40);
    }
    await page.waitForTimeout(250);
    assert.equal(await content.isVisible(), true, 'Enter opens it');
    const full = await content.evaluate((el) => el.getBoundingClientRect().height);
    assert.ok(heights.some((h) => h > 0 && h < full), `the content grows to ${full} px instead of jumping (${heights.join(', ')})`);
    await page.keyboard.press('Space');
    await content.waitFor({ state: 'hidden' });
    const gap = await page.evaluate(() => {
      const root = document.querySelector('.ds-collapsible');
      return getComputedStyle(root).rowGap;
    });
    assert.equal(gap, '16px', 'the content sits 16 px below the trigger');

    await page.goto('http://localhost:6008/iframe.html?id=components-collapsible--flight-details&viewMode=story');
    const details = page.getByRole('button', { name: 'Hide details' });
    await details.waitFor();
    await details.click();
    await page.getByRole('button', { name: 'Show details', expanded: false }).waitFor();
    // an asChild Button toggles the content
    await page.getByText('Layover in Frankfurt · 1h 45m').waitFor({ state: 'hidden' });

    await page.goto('http://localhost:6008/iframe.html?id=components-collapsible--disabled&viewMode=story');
    const disabled = page.getByRole('button', { name: 'Show replies' });
    await disabled.waitFor();
    assert.equal(await disabled.isDisabled(), true);
    await disabled.click({ force: true });
    assert.equal(await disabled.getAttribute('aria-expanded'), 'false', 'disabled does not open');
  },
  'accordion: headings hold buttons with aria-expanded; panels are labelled regions; single closes the others, multiple keeps them; Up/Down/Home/End move between triggers; disabled items are skipped': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-accordion--card&viewMode=story');
    const first = page.getByRole('button', { name: 'When will my order arrive?' });
    await first.waitFor();
    assert.equal(await first.evaluate((el) => el.parentElement.tagName), 'H3', 'the trigger sits in a heading');
    assert.equal(await first.evaluate((el) => getComputedStyle(el).webkitTapHighlightColor), 'rgba(0, 0, 0, 0)', 'no grey tap flash on phones');
    assert.equal(await first.getAttribute('aria-expanded'), 'true');
    const region = page.getByRole('region', { name: 'When will my order arrive?' });
    assert.equal(await region.isVisible(), true, 'the open panel is a region named by its trigger');
    const second = page.getByRole('button', { name: 'Can I change my delivery address?' });
    await second.click();
    assert.equal(await second.getAttribute('aria-expanded'), 'true');
    assert.equal(await first.getAttribute('aria-expanded'), 'false', 'single: opening one closes the other');
    await region.waitFor({ state: 'hidden' });
    const collapsed = await page.locator('.ds-accordion__panel').first().evaluate((el) => [el.getBoundingClientRect().height, getComputedStyle(el).visibility]);
    assert.deepEqual(collapsed, [0, 'hidden'], 'and collapses its panel to 0 px, then hides it');
    await second.click();
    assert.equal(await second.getAttribute('aria-expanded'), 'false', 'collapsible: the open item closes');
    await first.focus();
    await page.keyboard.press('ArrowDown');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Can I change my delivery address?', 'Down moves to the next trigger');
    await page.keyboard.press('End');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'How do returns work?', 'End moves to the last');
    await page.keyboard.press('ArrowDown');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'When will my order arrive?', 'Down wraps to the first');
    await page.keyboard.press('Enter');
    assert.equal(await first.getAttribute('aria-expanded'), 'true', 'Enter opens it');
    const heights = [];
    for (let i = 0; i < 4; i++) {
      heights.push(await page.locator('.ds-accordion__panel').first().evaluate((el) => el.getBoundingClientRect().height));
      await page.waitForTimeout(40);
    }
    await page.waitForTimeout(250);
    const full = await page.locator('.ds-accordion__panel').first().evaluate((el) => el.getBoundingClientRect().height);
    assert.ok(heights[0] < full && heights.some((h) => h > 0 && h < full), `the panel grows to ${full} px instead of jumping (${heights.join(', ')})`);
    const dividers = await page.locator('.ds-accordion__item').evaluateAll((els) => els.map((el) => getComputedStyle(el).boxShadow !== 'none'));
    assert.deepEqual(dividers, [true, true, false], 'a divider under every item but the last');

    await page.goto('http://localhost:6008/iframe.html?id=components-accordion--states&viewMode=story');
    const closed = page.getByRole('button', { name: 'Closed' });
    await closed.waitFor();
    assert.equal(await page.getByRole('button', { name: 'Disabled' }).isDisabled(), true);
    await closed.focus();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Closed', 'Down skips the disabled item and wraps');
    await closed.click();
    assert.equal(await page.getByRole('button', { name: 'Open', exact: true }).getAttribute('aria-expanded'), 'true', 'multiple: other items stay open');

    await page.goto('http://localhost:6008/iframe.html?id=components-accordion--controlled&viewMode=story');
    await page.getByRole('button', { name: 'Next: Invite your team' }).click();
    assert.equal(await page.getByRole('button', { name: 'Invite your team', exact: true }).getAttribute('aria-expanded'), 'true', 'value / onValueChange open the next step');
    assert.equal(await page.getByRole('button', { name: 'Your trial ends in 3 days' }).getAttribute('aria-expanded'), 'false');
  },
  'mobile: components turn off the grey tap highlight (inherited by their parts)': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-tabs--order&viewMode=story');
    await page.locator('.ds-tabs__trigger').first().waitFor();
    const colours = await page.evaluate(() =>
      ['.ds-tabs', '.ds-tabs__trigger', '.ds-tabs__trigger > *'].map((sel) => getComputedStyle(document.querySelector(sel)).webkitTapHighlightColor),
    );
    assert.deepEqual(colours, ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)']);
    assert.notEqual(await page.evaluate(() => getComputedStyle(document.body).webkitTapHighlightColor), 'rgba(0, 0, 0, 0)', 'the page outside the components keeps the browser default');
  },
  'breadcrumb: a named nav with an ordered list; separators are hidden from assistive technology; the current page has aria-current; the ellipsis and a dropdown item open menus': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-breadcrumb--default&viewMode=story');
    const nav = page.getByRole('navigation', { name: 'Breadcrumb' });
    await nav.waitFor();
    assert.deepEqual(await nav.getByRole('listitem').allTextContents(), ['Home', 'Projects', 'Onboarding flow'], 'separators are not list items for assistive technology');
    assert.equal(await nav.locator('ol > li').count(), 5, 'items and separators share the ordered list');
    assert.equal(await nav.locator('[aria-current="page"]').textContent(), 'Onboarding flow');
    assert.equal(await nav.getByRole('link').count(), 2, 'the current page is not a link');
    const link = nav.getByRole('link', { name: 'Home' });
    const muted = await link.evaluate((el) => getComputedStyle(el).color);
    await link.hover();
    await page.waitForTimeout(200);
    assert.notEqual(await link.evaluate((el) => getComputedStyle(el).color), muted, 'hover turns a link foreground');
    const gap = await nav.locator('ol').evaluate((el) => getComputedStyle(el).columnGap);
    assert.equal(gap, '8px');

    await page.goto('http://localhost:6008/iframe.html?id=components-breadcrumb--collapsed&viewMode=story');
    const more = page.getByRole('button', { name: 'Show more pages' });
    await more.waitFor();
    await more.click();
    await page.getByRole('menuitem', { name: 'Themes' }).waitFor();
    await page.keyboard.press('Escape');
    assert.equal(await page.getByRole('menu').isVisible(), false, 'Escape closes the menu');
    assert.equal(await page.evaluate(() => document.activeElement.getAttribute('aria-label')), 'Show more pages', 'and returns focus to the ellipsis');

    await page.goto('http://localhost:6008/iframe.html?id=components-breadcrumb--dropdown&viewMode=story');
    const projects = page.getByRole('button', { name: 'Projects' });
    await projects.waitFor();
    assert.equal(await projects.getAttribute('aria-haspopup'), 'menu');
    await projects.focus();
    await page.keyboard.press('ArrowDown');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Projects', 'ArrowDown opens the menu on its first item');
    assert.equal(await page.getByRole('menu', { name: 'Switch section' }).isVisible(), true);

    await page.goto('http://localhost:6008/iframe.html?id=components-breadcrumb--separators&viewMode=story');
    await page.locator('.ds-breadcrumb').first().waitFor();
    assert.deepEqual(
      await page.locator('.ds-breadcrumb__separator').evaluateAll((els) => [els[0], els[2], els[4]].map((el) => [el.getAttribute('aria-hidden'), el.textContent, Math.round(el.getBoundingClientRect().width * 100) / 100])),
      [['true', '', 17.33], ['true', '/', 16], ['true', '', 17.33]],
      'chevron and dot are 17.33 px icons, slash a "/" in 16 px',
    );
  },
  'pagination: a named nav; the current page has aria-current; pages follow Figma (1 2 3 … 12); Previous / Next move and are disabled at the ends; links with getHref; icons only adds First / Last': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-pagination--default&viewMode=story');
    const nav = page.getByRole('navigation', { name: 'Pagination' });
    await nav.waitFor();
    const labels = () => nav.locator('li').evaluateAll((els) => els.map((el) => (el.querySelector('.ds-pagination__ellipsis') ? '…' : el.textContent.trim())));
    assert.deepEqual(await labels(), ['Previous', '1', '2', '3', '…', '12', 'Next'], 'Figma sample: page 2 of 12');
    assert.equal(await nav.locator('[aria-current="page"]').getAttribute('aria-label'), 'Page 2');
    assert.equal(await nav.locator('.ds-pagination__ellipsis').getAttribute('aria-hidden'), 'true');
    await nav.getByRole('button', { name: 'Next' }).click();
    assert.deepEqual(await labels(), ['Previous', '1', '2', '3', '4', '…', '12', 'Next'], 'Next moves to page 3');
    await nav.getByRole('button', { name: 'Page 12' }).click();
    assert.equal(await nav.getByRole('button', { name: 'Next' }).isDisabled(), true, 'Next is disabled on the last page');
    assert.deepEqual(await labels(), ['Previous', '1', '…', '11', '12', 'Next']);
    await nav.getByRole('button', { name: 'Page 1', exact: true }).click();
    assert.equal(await nav.getByRole('button', { name: 'Previous' }).isDisabled(), true, 'Previous is disabled on the first page');
    const sizes = await nav.locator('.ds-pagination__page').evaluateAll((els) => els.map((el) => [Math.round(el.getBoundingClientRect().width), Math.round(el.getBoundingClientRect().height)]));
    assert.ok(sizes.every(([w, h]) => w === 32 && h === 32), `page links are 32 px squares (${JSON.stringify(sizes)})`);
    assert.equal(await nav.locator('ul').evaluate((el) => getComputedStyle(el).columnGap), '4px');

    await page.goto('http://localhost:6008/iframe.html?id=components-pagination--links&viewMode=story');
    const links = page.getByRole('navigation', { name: 'Search results pages' });
    await links.waitFor();
    assert.equal(await links.getByRole('link', { name: 'Page 6' }).getAttribute('href'), '?page=6');
    assert.equal(await links.getByRole('link', { name: 'Previous' }).getAttribute('href'), '?page=4');
    assert.equal(await links.getByRole('link', { name: 'Page 5' }).getAttribute('aria-current'), 'page');

    await page.goto('http://localhost:6008/iframe.html?id=components-pagination--icons-only&viewMode=story');
    const icons = page.getByRole('navigation', { name: 'Pagination' });
    await icons.waitFor();
    assert.deepEqual(await icons.locator('li .ds-button--icon-only').evaluateAll((els) => els.map((el) => el.getAttribute('aria-label'))), ['First', 'Previous', 'Next', 'Last']);
    await icons.getByRole('button', { name: 'Last' }).click();
    assert.equal(await icons.locator('[aria-current="page"]').textContent(), '5');
    assert.equal(await icons.getByRole('button', { name: 'Last' }).isDisabled(), true);
  },
  'item: groups are lists of rows; link rows take hover and the focus ring, rows with their own buttons do not; label rows toggle their switch; joined groups clip into one block; sizes follow Figma': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-item--default&viewMode=story');
    const group = page.getByRole('list', { name: 'Backups' });
    await group.waitFor();
    assert.equal(await group.getByRole('listitem').count(), 3, 'a list of three rows');
    assert.equal(await group.locator('.ds-item').first().evaluate((el) => el.tagName), 'DIV', 'a row with its own button stays a div');
    const link = group.getByRole('link', { name: /Open the audit log/ });
    const muted = await link.evaluate((el) => getComputedStyle(el).backgroundColor);
    await link.hover();
    await page.waitForTimeout(250);
    assert.notEqual(await link.evaluate((el) => getComputedStyle(el).backgroundColor), muted, 'Muted hover turns fill-2');
    await page.mouse.move(0, 0);
    await link.focus();
    await page.keyboard.press('Shift+Tab');
    await page.keyboard.press('Tab');
    assert.match(await link.evaluate((el) => getComputedStyle(el).boxShadow), /inset/, 'focus draws the ring stroke inside');
    assert.equal(await group.locator('.ds-item__header').first().textContent(), 'Backup2 hours ago');

    await page.goto('http://localhost:6008/iframe.html?id=components-item--sizes&viewMode=story');
    await page.locator('.ds-item').first().waitFor();
    assert.deepEqual(
      await page.locator('.ds-item').evaluateAll((els) => els.map((el) => { const cs = getComputedStyle(el); return [cs.paddingTop, cs.paddingLeft, cs.rowGap, Math.round(el.getBoundingClientRect().height)]; })),
      [['14px', '16px', '14px', 72], ['12px', '14px', '14px', 68], ['8px', '12px', '8px', 60]],
      'Size=default, sm and xs padding, gap and height',
    );

    await page.goto('http://localhost:6008/iframe.html?id=components-item--with-switch&viewMode=story');
    const sw = page.getByRole('switch', { name: 'Error alerts' });
    await sw.waitFor();
    assert.equal(await sw.isChecked(), false);
    await page.getByText('Page me when the error rate passes 1%.').click();
    assert.equal(await sw.isChecked(), true, 'a click anywhere on the label row toggles the switch');

    await page.goto('http://localhost:6008/iframe.html?id=components-item--navigation&viewMode=story');
    const nav = page.getByRole('navigation', { name: 'Settings' });
    await nav.waitFor();
    assert.equal(await nav.getByRole('link').count(), 4);
    assert.deepEqual(await nav.locator('ul').evaluate((el) => [getComputedStyle(el).overflow, getComputedStyle(el).borderTopLeftRadius, getComputedStyle(el).rowGap]), ['hidden', '16px', '0px'], 'one clipped block');
    assert.equal(await nav.locator('.ds-item').first().evaluate((el) => getComputedStyle(el).borderTopLeftRadius), '0px', 'square rows inside');
  },
  'table: a named table with column headers; rows are 36 px (header 40) with lines between; a checkbox selects a row; sort buttons set aria-sort; expand buttons open a details row; the card draws its body box': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-table--default&viewMode=story');
    const table = page.getByRole('table', { name: /Web adoption/ });
    await table.waitFor();
    assert.equal(await table.getByRole('columnheader').count(), 3, 'three column headers');
    assert.deepEqual(
      await table.locator('tr').evaluateAll((rows) => rows.map((r) => Math.round(r.getBoundingClientRect().height))),
      [40, 36, 36, 36, 36],
      'header 40 px, body and footer rows 36 px',
    );
    const body = table.locator('tbody tr');
    assert.match(await body.first().locator('td').first().evaluate((el) => getComputedStyle(el).boxShadow), /inset/, 'a line under a body row');
    assert.equal(await body.last().locator('td').first().evaluate((el) => getComputedStyle(el).boxShadow), 'none', 'none under the last one');
    const before = await body.first().evaluate((el) => getComputedStyle(el).backgroundColor);
    await body.first().hover();
    assert.notEqual(await body.first().evaluate((el) => getComputedStyle(el).backgroundColor), before, 'hover tints the row');
    await page.mouse.move(0, 0);
    assert.equal(await table.locator('tfoot td').first().evaluate((el) => getComputedStyle(el).fontWeight), '500', 'footer text is Medium');
    assert.equal(await table.locator('td.ds-table__cell--right').first().evaluate((el) => getComputedStyle(el).textAlign), 'end', 'numbers align right');

    await page.goto('http://localhost:6008/iframe.html?id=components-table--selection&viewMode=story');
    const members = page.getByRole('table', { name: 'Members' });
    await members.waitFor();
    const all = members.getByRole('checkbox', { name: 'Select all' });
    assert.equal(await all.evaluate((el) => el.indeterminate), true, 'one picked row makes Select all indeterminate');
    const ada = members.getByRole('row', { name: /Ada Lovelace/ });
    assert.equal(await ada.getAttribute('data-state'), null);
    await members.getByRole('checkbox', { name: 'Select Ada Lovelace' }).check();
    assert.equal(await ada.getAttribute('data-state'), 'selected', 'a checked row is selected');
    await all.check();
    assert.equal(await members.locator('tbody tr[data-state="selected"]').count(), 6, 'Select all selects every row');
    const radius = await members.locator('tbody tr').first().locator('td').first().evaluate((el) => getComputedStyle(el).borderTopLeftRadius);
    assert.equal(radius, '16px', 'the card rounds the body corners');
    assert.match(await members.locator('tbody').evaluate((el) => getComputedStyle(el, '::before').boxShadow), /rgba?\(/, 'the card body has its border and shadow');

    await page.goto('http://localhost:6008/iframe.html?id=components-table--sorting&viewMode=story');
    const files = page.getByRole('table', { name: 'Files' });
    await files.waitFor();
    const modified = files.getByRole('columnheader', { name: /Modified/ });
    assert.equal(await modified.getAttribute('aria-sort'), 'descending');
    assert.equal(await files.getByRole('columnheader', { name: 'Owner' }).getAttribute('aria-sort'), null, 'a column that cannot sort has no aria-sort');
    await files.getByRole('button', { name: /Name/ }).click();
    assert.equal(await files.getByRole('columnheader', { name: /Name/ }).getAttribute('aria-sort'), 'ascending', 'pressing a header sorts by it');
    assert.equal(await modified.getAttribute('aria-sort'), 'none');
    assert.equal(await files.locator('tbody tr td').first().textContent(), 'Brand guidelines.fig', 'rows follow the sort');

    await page.goto('http://localhost:6008/iframe.html?id=components-table--expandable-rows&viewMode=story');
    const deploys = page.getByRole('table', { name: 'Deployments' });
    await deploys.waitFor();
    const toggle = deploys.getByRole('button', { name: 'Details of docs' });
    assert.equal(await toggle.getAttribute('aria-expanded'), 'false');
    await toggle.click();
    assert.equal(await toggle.getAttribute('aria-expanded'), 'true');
    assert.equal(await page.locator('#details-docs').isVisible(), true, 'the details row opens under its row');
    assert.equal(await page.locator('#details-api-gateway').count(), 0, 'and the other closes');
  },
  'navigation menu: a named nav with triggers (aria-expanded) and links; click, Arrow Down and resting the mouse open a panel, one at a time; Escape, Tab out and a click outside close it; Arrow Left / Right move between items': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-navigation-menu--default&viewMode=story');
    const nav = page.getByRole('navigation', { name: 'Main' });
    await nav.waitFor();
    const product = nav.getByRole('button', { name: 'Product' });
    const solutions = nav.getByRole('button', { name: 'Solutions' });
    assert.equal(await product.getAttribute('aria-expanded'), 'true', 'Product starts open');
    const productPanel = nav.locator('.ds-navigation-menu__content').first();
    assert.equal(await productPanel.isVisible(), true);
    assert.equal(await productPanel.getByRole('link').count(), 4, 'the panel holds four links');
    await page.waitForTimeout(300); // the panel slides 4 px in when it opens
    const [tb, pb] = [await product.boundingBox(), await productPanel.boundingBox()];
    assert.equal(Math.round(pb.y - (tb.y + tb.height)), 8, 'the panel opens 8 px under its trigger');
    assert.equal(Math.round(pb.width), 288, '288 px wide');
    assert.equal(Math.round(tb.height), 32, 'triggers are 32 px');

    await solutions.click();
    assert.equal(await solutions.getAttribute('aria-expanded'), 'true', 'a click opens another panel');
    assert.equal(await product.getAttribute('aria-expanded'), 'false', 'and closes the first');
    await page.keyboard.press('Escape');
    assert.equal(await solutions.getAttribute('aria-expanded'), 'false', 'Escape closes it');
    assert.equal(await solutions.evaluate((el) => el === document.activeElement), true, 'and focus is on the trigger');

    await page.keyboard.press('ArrowRight');
    const resources = nav.getByRole('button', { name: 'Resources' });
    assert.equal(await resources.evaluate((el) => el === document.activeElement), true, 'Arrow Right moves to the next item');
    await page.keyboard.press('ArrowDown');
    assert.equal(await resources.getAttribute('aria-expanded'), 'true', 'Arrow Down opens the panel');
    await page.waitForFunction(() => document.activeElement?.classList.contains('ds-navigation-menu__link'));
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Documentation', 'and focuses the first link');
    for (let i = 0; i < 6; i++) await page.keyboard.press('Tab');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Pricing', 'Tab past the last link reaches the next item');
    assert.equal(await resources.getAttribute('aria-expanded'), 'false', 'and closes the panel');
    assert.equal(await nav.getByRole('link', { name: 'Pricing' }).getAttribute('aria-expanded'), null, 'a top-level link has no panel');

    await product.hover();
    await page.waitForTimeout(400);
    assert.equal(await product.getAttribute('aria-expanded'), 'true', 'resting the mouse opens a panel');
    await product.click();
    assert.equal(await product.getAttribute('aria-expanded'), 'true', 'the click right after hovering keeps it open');
    await page.mouse.click(700, 400);
    assert.equal(await product.getAttribute('aria-expanded'), 'false', 'a click outside closes it');

    await page.goto('http://localhost:6008/iframe.html?id=components-navigation-menu--states&viewMode=story');
    const states = page.getByRole('navigation', { name: 'States' });
    await states.waitFor();
    assert.equal(await states.getByRole('button', { name: 'Disabled' }).isDisabled(), true);
    assert.equal(await states.getByRole('link', { name: 'Current', exact: true }).getAttribute('aria-current'), 'page', 'the current page link');
    assert.equal(await states.getByRole('link', { name: 'Disabled link' }).getAttribute('aria-disabled'), 'true');
  },
  'menubar: a named menubar with one Tab stop; Arrow Left / Right move between triggers; Enter and Arrow Down open a menu on its first item; with a menu open, Arrow Left / Right and the pointer switch menus; Escape and a click outside close it': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-menubar--default&viewMode=story');
    const bar = page.getByRole('menubar', { name: 'Browser' });
    await bar.waitFor();
    const triggers = bar.locator('.ds-menubar__trigger');
    assert.equal(await triggers.count(), 4, 'four triggers');
    assert.deepEqual(await triggers.evaluateAll((els) => els.map((el) => [el.getAttribute('role'), el.tabIndex])), [['menuitem', 0], ['menuitem', -1], ['menuitem', -1], ['menuitem', -1]], 'menu items with one Tab stop');
    const file = bar.getByRole('menuitem', { name: 'File', exact: true });
    assert.equal(await file.getAttribute('aria-expanded'), 'true', 'File starts open');
    const fileMenu = page.getByRole('menu', { name: 'File' });
    const [tb, mb] = [await file.boundingBox(), await fileMenu.boundingBox()];
    assert.equal(Math.round(mb.y - (tb.y + tb.height)), 8, 'the menu opens 8 px under its trigger');
    assert.equal(Math.round(tb.height), 26, 'triggers are 26 px');
    assert.equal(Math.round((await bar.boundingBox()).height), 32, 'the bar is 32 px');

    await page.getByRole('menuitem', { name: /New Tab/ }).focus();
    await page.keyboard.press('Escape');
    assert.equal(await file.getAttribute('aria-expanded'), 'false', 'Escape closes the menu');
    assert.equal(await file.evaluate((el) => el === document.activeElement), true, 'and focus is on its trigger');
    await page.keyboard.press('ArrowRight');
    const edit = bar.getByRole('menuitem', { name: 'Edit', exact: true });
    assert.equal(await edit.evaluate((el) => el === document.activeElement), true, 'Arrow Right moves to the next trigger');
    assert.equal(await edit.evaluate((el) => el.tabIndex), 0, 'which takes the Tab stop');
    assert.equal(await edit.getAttribute('aria-expanded'), 'false', 'without opening it while no menu is open');
    await page.keyboard.press('Enter');
    await page.waitForFunction(() => document.activeElement?.textContent?.startsWith('Undo'));
    assert.equal(await edit.getAttribute('aria-expanded'), 'true', 'Enter opens the menu on its first item');
    await page.keyboard.press('ArrowRight');
    const view = bar.getByRole('menuitem', { name: 'View', exact: true });
    await page.waitForFunction(() => document.activeElement?.textContent?.startsWith('Always Show Bookmarks'));
    assert.equal(await view.getAttribute('aria-expanded'), 'true', 'Arrow Right in an open menu opens the next one');
    assert.equal(await edit.getAttribute('aria-expanded'), 'false', 'and closes this one');
    await page.keyboard.press('ArrowLeft');
    await page.waitForFunction(() => document.activeElement?.textContent?.startsWith('Undo'));
    assert.equal(await edit.getAttribute('aria-expanded'), 'true', 'Arrow Left goes back');
    await page.keyboard.press('Escape');
    await page.keyboard.press('End');
    assert.equal(await bar.getByRole('menuitem', { name: 'Profiles', exact: true }).evaluate((el) => el === document.activeElement), true, 'End moves to the last trigger');
    await page.keyboard.press('ArrowRight');
    assert.equal(await file.evaluate((el) => el === document.activeElement), true, 'and Arrow Right wraps to the first');

    await view.click();
    assert.equal(await view.getAttribute('aria-expanded'), 'true');
    await bar.getByRole('menuitem', { name: 'Profiles', exact: true }).hover();
    assert.equal(await bar.getByRole('menuitem', { name: 'Profiles', exact: true }).getAttribute('aria-expanded'), 'true', 'pointing at another trigger switches menus');
    assert.equal(await view.getAttribute('aria-expanded'), 'false');
    const luis = page.getByRole('menuitemradio', { name: 'Luis' });
    await luis.click();
    assert.equal(await luis.getAttribute('aria-checked'), 'true', 'a radio item picks the profile (the menu stays open)');
    await page.mouse.click(700, 380);
    assert.equal(await bar.getByRole('menuitem', { name: 'Profiles', exact: true }).getAttribute('aria-expanded'), 'false', 'a click outside closes the menu');
  },
  'command: the search field is a combobox over a listbox; arrows move the selection (skipping disabled items, wrapping); typing filters by text and keywords, hiding empty groups and separators; Enter and clicks run items; the dialog opens on a key and closes on Escape': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-command--default&viewMode=story');
    const input = page.getByRole('combobox', { name: 'Commands' });
    await input.waitFor();
    const list = page.getByRole('listbox', { name: 'Commands' });
    assert.equal(await input.getAttribute('aria-controls'), await list.getAttribute('id'), 'the field controls the list');
    const selected = async () => page.evaluate(() => document.getElementById(document.querySelector('[role="combobox"]').getAttribute('aria-activedescendant'))?.textContent ?? null);
    assert.equal(await selected(), 'Calendar', 'the first item starts selected');
    assert.equal(await list.getByRole('option', { name: 'Calendar' }).getAttribute('aria-selected'), 'true');
    await input.focus();
    await page.keyboard.press('ArrowDown');
    assert.equal(await selected(), 'Search Emoji');
    await page.keyboard.press('ArrowDown');
    assert.equal(await selected(), 'ProfileP', 'Arrow Down skips the disabled Calculator');
    await page.keyboard.press('End');
    assert.equal(await selected(), 'Settings/', 'End goes to the last item');
    await page.keyboard.press('ArrowDown');
    assert.equal(await selected(), 'Calendar', 'and Arrow Down wraps to the first');
    assert.equal(await list.getByRole('option', { name: 'Calculator' }).getAttribute('aria-disabled'), 'true');
    assert.equal(Math.round((await list.getByRole('option', { name: 'Calendar' }).boundingBox()).height), 32, 'items are 32 px');

    await input.fill('bil');
    assert.deepEqual(await list.getByRole('option').evaluateAll((els) => els.filter((e) => !e.hidden).map((e) => e.textContent)), ['BillingB'], 'typing filters the items');
    assert.equal(await list.getByRole('group', { name: 'Suggestions' }).isVisible(), false, 'a group with no match is hidden');
    assert.equal(await page.locator('.ds-command__separator').isVisible(), false, 'separators hide while filtering');
    assert.equal(await selected(), 'BillingB', 'the first match is selected');
    await input.fill('prefer');
    assert.equal(await selected(), 'Settings/', 'keywords match too');
    await input.fill('zzz');
    assert.equal(await page.getByText('No results found.').isVisible(), true, 'the empty state shows when nothing matches');
    await input.fill('');
    assert.equal(await page.getByText('No results found.').isVisible(), false);
    await list.getByRole('option', { name: 'Billing' }).hover();
    assert.equal(await selected(), 'BillingB', 'the pointer selects what it is over');

    await page.goto('http://localhost:6008/iframe.html?id=components-command--nested-pages&viewMode=story');
    const nested = page.getByRole('combobox', { name: 'Commands' });
    await nested.waitFor();
    await nested.fill('theme');
    await page.keyboard.press('Enter');
    const themes = page.getByRole('combobox', { name: 'Themes' });
    await themes.waitFor();
    assert.equal(await themes.getAttribute('placeholder'), 'Pick a theme…', 'Enter runs the selected item (a page of themes)');
    assert.equal(await themes.inputValue(), '', 'with a fresh search');
    await page.getByRole('option', { name: 'Dark' }).click();
    assert.equal(await page.getByRole('option', { name: 'Dark' }).getAttribute('aria-checked'), 'true', 'a click runs an item');
    await themes.focus();
    await page.keyboard.press('Backspace');
    await page.getByRole('combobox', { name: 'Commands' }).waitFor();

    await page.goto('http://localhost:6008/iframe.html?id=components-command--dialog&viewMode=story');
    const open = page.getByRole('button', { name: /Search workspace/ });
    await open.waitFor();
    await open.click();
    const dialog = page.getByRole('dialog', { name: 'Search workspace' });
    await dialog.waitFor();
    assert.equal(await page.evaluate(() => document.activeElement?.getAttribute('role')), 'combobox', 'the search field takes focus');
    await page.keyboard.press('Escape');
    await dialog.waitFor({ state: 'hidden' });
    assert.equal(await open.evaluate((el) => el === document.activeElement), true, 'Escape closes it and focus returns');
    await page.keyboard.press('/');
    await dialog.waitFor();
    await page.keyboard.type('team');
    await page.keyboard.press('Enter');
    await dialog.waitFor({ state: 'hidden' });

    await page.goto('http://localhost:6008/iframe.html?id=components-command--in-a-popover&viewMode=story');
    const trigger = page.getByRole('button', { name: /Adam Miller/ });
    await trigger.waitFor();
    await trigger.click();
    await page.getByRole('combobox', { name: 'People' }).fill('mira');
    await page.keyboard.press('Enter');
    await page.getByRole('button', { name: /Mira Bloom/ }).waitFor();
    assert.equal(await page.getByRole('combobox', { name: 'People' }).isVisible(), false, 'picking a person closes the popover');
  },
  'sidebar: a named sidebar of links (the current page marked); the trigger collapses it to a 48 px rail and back, keeping the names; sub menus and collapsible groups open and close; actions open their menu; narrow screens start collapsed and the open sidebar lies over the content': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-sidebar--default&viewMode=story');
    const sidebar = page.getByRole('complementary', { name: 'Workspace', exact: true });
    await sidebar.waitFor();
    const layout = page.locator('.ds-sidebar-layout').first();
    assert.equal(await sidebar.getByRole('link', { name: /Home/ }).getAttribute('aria-current'), 'page', 'the current page is marked');
    assert.equal(Math.round((await sidebar.boundingBox()).width), 260, 'the sidebar is 260 px');
    assert.equal(Math.round((await sidebar.getByRole('link', { name: /Search/ }).boundingBox()).height), 32, 'items are 32 px');
    const trigger = layout.getByRole('button', { name: 'Toggle sidebar' });
    assert.equal(await trigger.getAttribute('aria-expanded'), 'true');
    assert.equal(await trigger.getAttribute('aria-controls'), await sidebar.getAttribute('id'), 'the trigger controls the sidebar');
    await trigger.click();
    assert.equal(await layout.getAttribute('data-state'), 'collapsed');
    await page.waitForTimeout(300);
    assert.equal(Math.round((await sidebar.boundingBox()).width), 48, 'collapsed to the 48 px rail');
    const home = sidebar.getByRole('link', { name: 'Home' });
    assert.equal(await home.getAttribute('title'), 'Home', 'a rail item keeps its name and shows it as a tooltip');
    assert.deepEqual(await home.evaluate((el) => { const r = el.getBoundingClientRect(); return [Math.round(r.width), Math.round(r.height)]; }), [32, 32], 'rail items are 32 px squares');
    assert.equal(await sidebar.getByText('Workspace', { exact: true }).isVisible(), false, 'group labels hide in the rail');
    await trigger.click();
    assert.equal(await layout.getAttribute('data-state'), 'expanded', 'the trigger expands it again');

    await page.goto('http://localhost:6008/iframe.html?id=components-sidebar--items&viewMode=story');
    await page.locator('.ds-sidebar__label').first().waitFor();
    assert.match(await page.locator('.ds-sidebar__label').first().evaluate((el) => getComputedStyle(el).fontFamily), /^Inter/, 'a group on its own (outside a Sidebar) still uses the sans font');

    await page.goto('http://localhost:6008/iframe.html?id=components-sidebar--sub-menus&viewMode=story');
    const library = page.getByRole('complementary', { name: 'Library' });
    await library.waitFor();
    const components = library.getByRole('button', { name: 'Components' });
    assert.equal(await components.getAttribute('aria-expanded'), 'true');
    assert.equal(await library.getByRole('link', { name: 'Input' }).getAttribute('aria-current'), 'page');
    await components.click();
    assert.equal(await components.getAttribute('aria-expanded'), 'false', 'a parent item closes its sub menu');
    await library.getByRole('button', { name: 'Overlays' }).or(library.getByRole('link', { name: 'Overlays' })).waitFor({ state: 'hidden' });
    const archive = library.getByRole('button', { name: 'Archive' });
    assert.equal(await archive.getAttribute('aria-expanded'), 'false', 'a collapsible group starts closed');
    assert.equal(await library.getByRole('link', { name: '2025' }).isVisible(), false);
    await archive.click();
    await library.getByRole('link', { name: '2025' }).waitFor();
    assert.equal(await archive.getAttribute('aria-expanded'), 'true', 'its label opens it');

    await page.goto('http://localhost:6008/iframe.html?id=components-sidebar--menu-actions&viewMode=story');
    const projects = page.getByRole('complementary', { name: 'Projects' });
    await projects.waitFor();
    await projects.getByRole('button', { name: 'Actions for Mobile app' }).click();
    await page.getByRole('menu', { name: 'Actions for Mobile app' }).waitFor();
    await page.keyboard.press('Escape');

    const viewport = page.viewportSize();
    await page.setViewportSize({ width: 480, height: viewport.height });
    await page.goto('http://localhost:6008/iframe.html?id=components-sidebar--menu-actions&viewMode=story');
    const narrow = page.locator('.ds-sidebar-layout');
    await narrow.waitFor();
    await page.waitForFunction(() => document.querySelector('.ds-sidebar-layout')?.getAttribute('data-state') === 'collapsed');
    await narrow.getByRole('button', { name: 'Toggle sidebar' }).click();
    assert.equal(await narrow.getAttribute('data-state'), 'expanded');
    assert.equal(await page.locator('.ds-sidebar').evaluate((el) => getComputedStyle(el).position), 'absolute', 'on a narrow screen the open sidebar lies over the content');
    const box = await narrow.boundingBox();
    await page.mouse.click(box.x + box.width - 10, box.y + box.height - 10);
    assert.equal(await narrow.getAttribute('data-state'), 'collapsed', 'a click on the dimmed content closes it');
    await narrow.getByRole('button', { name: 'Toggle sidebar' }).click();
    await page.keyboard.press('Escape');
    assert.equal(await narrow.getAttribute('data-state'), 'collapsed', 'and so does Escape');
    await page.setViewportSize(viewport);
  },
  'carousel: a named carousel region of "n of total" slides; Previous / Next (disabled at the ends), the arrow keys, Home and End on the viewport, indicators and outside controls move it; slides out of view are hidden and inert; overlay controls are white over near-black pictures and dark over grey and light ones': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-carousel--demo&viewMode=story');
    const region = page.getByRole('region', { name: 'Destinations' });
    await region.waitFor();
    assert.equal(await region.getAttribute('aria-roledescription'), 'carousel');
    const previous = region.getByRole('button', { name: 'Previous slide' });
    const next = region.getByRole('button', { name: 'Next slide' });
    assert.ok(await previous.isDisabled(), 'Previous starts disabled');
    const slide = (n) => region.locator('.ds-carousel__slide').nth(n);
    assert.equal(await slide(0).getAttribute('aria-label'), '1 of 3');
    assert.equal(await slide(1).getAttribute('aria-hidden'), 'true', 'slides out of view are hidden');
    assert.equal(await slide(1).evaluate((el) => el.inert), true, 'and inert');
    await next.click();
    assert.equal(await slide(1).getAttribute('aria-hidden'), null);
    assert.equal(await slide(0).getAttribute('aria-hidden'), 'true');
    assert.ok(!(await previous.isDisabled()));
    await page.waitForTimeout(400);
    const viewport = region.locator('.ds-carousel__viewport');
    const [vb, sb] = [await viewport.boundingBox(), await slide(1).boundingBox()];
    assert.ok(Math.abs(vb.x - sb.x) < 1, 'the second slide moved into the viewport');
    await next.click();
    assert.ok(await next.isDisabled(), 'Next is disabled on the last slide');
    await viewport.focus();
    await page.keyboard.press('ArrowLeft');
    assert.equal(await slide(1).getAttribute('aria-hidden'), null, 'Arrow Left goes back');
    await page.keyboard.press('Home');
    assert.equal(await slide(0).getAttribute('aria-hidden'), null);
    await page.keyboard.press('End');
    assert.equal(await slide(2).getAttribute('aria-hidden'), null);

    await page.goto('http://localhost:6008/iframe.html?id=components-carousel--multiple-items&viewMode=story');
    const albums = page.getByRole('region', { name: 'New albums' });
    await albums.waitFor();
    assert.equal(await albums.locator('.ds-carousel__slide:not([aria-hidden])').count(), 3, 'three slides in view');
    await albums.getByRole('button', { name: 'Next slide' }).click();
    await albums.getByRole('button', { name: 'Next slide' }).click();
    assert.ok(await albums.getByRole('button', { name: 'Next slide' }).isDisabled(), 'it stops when the last slide is in view');

    await page.goto('http://localhost:6008/iframe.html?id=components-carousel--with-indicators&viewMode=story');
    const steps = page.getByRole('region', { name: 'Getting started' });
    await steps.waitFor();
    await steps.getByRole('button', { name: 'Slide 3 of 3' }).click();
    assert.equal(await steps.getByRole('button', { name: 'Slide 3 of 3' }).getAttribute('aria-current'), 'true');
    assert.equal(await steps.locator('.ds-carousel__slide').nth(2).getAttribute('aria-hidden'), null, 'a dot moves to its slide');

    await page.goto('http://localhost:6008/iframe.html?id=components-carousel--in-a-card&viewMode=story');
    const reviews = page.getByRole('region', { name: 'Reviews' });
    await reviews.waitFor();
    assert.equal(await reviews.getByRole('button').count(), 0, 'controls="none" renders no buttons');
    await page.getByRole('button', { name: 'Next review' }).click();
    assert.equal(await reviews.locator('.ds-carousel__slide').nth(1).getAttribute('aria-hidden'), null, 'buttons outside drive it through index');

    await page.goto('http://localhost:6008/iframe.html?id=components-carousel--adaptive-controls&viewMode=story');
    const pictures = page.getByRole('region', { name: 'Pictures' });
    await pictures.waitFor();
    const nextPicture = pictures.getByRole('button', { name: 'Next slide' });
    const isLight = (el) => el.evaluate((node) => node.classList.contains('ds-carousel__control--light'));
    await page.waitForFunction(() => document.querySelector('.ds-carousel__next')?.classList.contains('ds-carousel__control--light'));
    assert.ok(await isLight(nextPicture), 'over the night picture the control is light');
    await nextPicture.click();
    await page.waitForFunction(() => !document.querySelector('.ds-carousel__next')?.classList.contains('ds-carousel__control--light'));
    assert.ok(!(await isLight(nextPicture)), 'over the snow picture it turns dark');
    assert.ok(!(await pictures.locator('.ds-carousel__indicators').evaluate((n) => n.classList.contains('ds-carousel__indicators--light'))), 'and so does the dot pill');
    await nextPicture.click();
    await nextPicture.click();
    await page.waitForTimeout(450);
    assert.ok(!(await isLight(pictures.getByRole('button', { name: 'Previous slide' }))), 'over the grey picture it stays dark');
  },
  'chart: a named plot shows the hovered category in a tooltip (band highlight on bars, cursor and dot on lines) and hides it when the pointer leaves; arrows, Home, End and Escape do the same from the keyboard; every chart carries its data as a table; pies and rings are named images': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-chart--revenue&viewMode=story');
    const plot = page.getByRole('group', { name: 'Revenue from subscriptions' });
    await plot.waitFor();
    const tooltip = plot.getByRole('status');
    assert.match(await tooltip.innerText(), /July[\s\S]*\$4,170/, 'July starts highlighted, as in Figma');
    assert.equal(await plot.locator('.ds-chart__band--active').count(), 1);
    const box = await plot.boundingBox();
    await page.mouse.move(box.x + box.width * (1.5 / 12), box.y + box.height - 4);
    assert.match(await tooltip.innerText(), /February[\s\S]*\$5,840/, 'hovering a band shows its month');
    assert.equal(await plot.getAttribute('aria-describedby'), await tooltip.getAttribute('id'), 'the tooltip describes the plot');
    await page.mouse.move(0, 0);
    await tooltip.waitFor({ state: 'detached' });
    await plot.focus();
    await page.keyboard.press('ArrowRight');
    assert.match(await tooltip.innerText(), /January/, 'Arrow Right from nothing starts at the first month');
    await page.keyboard.press('End');
    assert.match(await tooltip.innerText(), /December/);
    await page.keyboard.press('ArrowLeft');
    assert.match(await tooltip.innerText(), /November/);
    await page.keyboard.press('Escape');
    await tooltip.waitFor({ state: 'detached' });
    const table = page.locator('figure.ds-chart table').first();
    assert.equal(await table.locator('tbody tr').count(), 12, 'the data is in a table for screen readers');
    assert.equal(await table.locator('caption').innerText(), 'Revenue from subscriptions');

    await page.goto('http://localhost:6008/iframe.html?id=components-chart--active-users&viewMode=story');
    const users = page.getByRole('group', { name: 'Active users' });
    await users.waitFor();
    assert.match(await users.getByRole('status').innerText(), /Mar 16[\s\S]*4,260/);
    const ub = await users.boundingBox();
    await page.mouse.move(ub.x + 1, ub.y + ub.height / 2);
    assert.match(await users.getByRole('status').innerText(), /Jan 5/, 'the nearest point follows the pointer');
    assert.equal(await users.locator('.ds-chart__cursor').count(), 1, 'a line chart draws a cursor');
    await page.mouse.move(0, 0);

    await page.goto('http://localhost:6008/iframe.html?id=components-chart--top-destinations&viewMode=story');
    const trips = page.getByRole('group', { name: 'Top destinations' });
    await trips.waitFor();
    await trips.focus();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    assert.match(await trips.getByRole('status').innerText(), /Lisbon[\s\S]*1,210/, 'horizontal bars move with Arrow Down');

    await page.goto('http://localhost:6008/iframe.html?id=components-chart--daily-goal&viewMode=story');
    await page.getByRole('img', { name: '7,240 of 10,000 steps' }).waitFor();
  },
  'usage-bar: a named group whose segments share the bar by value and are read by their labels; hovering or focusing a focusable segment highlights it (and the readout names it); a segment tooltip shows on hover and keyboard focus; the axis spreads its ticks evenly': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-usage-bar--variants-and-an-axis&viewMode=story');
    const bar = page.getByRole('group', { name: 'Database storage' });
    await bar.waitFor();
    const segments = bar.getByRole('img');
    assert.equal(await segments.count(), 5);
    const widths = await segments.evaluateAll((els) => els.map((el) => el.getBoundingClientRect().width));
    const total = widths.reduce((a, b) => a + b, 0);
    [18, 7, 9, 11, 5].forEach((gb, i) => assert.ok(Math.abs(widths[i] / total - gb / 50) < 0.005, `segment ${i} takes its share`));
    const tables = bar.getByRole('img', { name: 'Tables, 18 GB' });
    const tint = () => tables.evaluate((el) => getComputedStyle(el, '::after').content);
    assert.equal(await tint(), 'none');
    await tables.hover();
    assert.notEqual(await tint(), 'none', 'hover draws the active overlay');
    await page.getByText('Tables · 18 GB').waitFor();
    await page.mouse.move(0, 0);
    await page.getByText('Hover a segment').waitFor();
    await page.keyboard.press('Tab');
    assert.equal(await page.evaluate(() => document.activeElement?.getAttribute('aria-label')), 'Tables, 18 GB');
    await page.getByText('Tables · 18 GB').waitFor();
    await page.keyboard.press('Tab');
    await page.getByText('Indexes · 7 GB').waitFor();
    const ticks = await bar.locator('.ds-usage-bar-tick').evaluateAll((els) => els.map((el) => el.getBoundingClientRect().left));
    const gaps = ticks.slice(1).map((x, i) => x - ticks[i]);
    assert.ok(gaps.every((g) => Math.abs(g - gaps[0]) < 0.5), 'ticks are evenly spaced');

    await page.goto('http://localhost:6008/iframe.html?id=components-usage-bar--with-tooltips&viewMode=story');
    const phone = page.getByRole('group', { name: 'Phone storage' });
    await phone.waitFor();
    const photosTip = page.getByRole('tooltip', { name: 'Photos · 42 GB' });
    await photosTip.waitFor();
    await page.keyboard.press('Escape');
    await photosTip.waitFor({ state: 'hidden' });
    await phone.getByRole('img', { name: 'Apps, 31 GB' }).hover();
    await page.getByRole('tooltip', { name: 'Apps · 31 GB' }).waitFor();
    await page.mouse.move(0, 0);
    await page.getByRole('tooltip', { name: 'Apps · 31 GB' }).waitFor({ state: 'hidden' });
    await page.keyboard.press('Tab');
    await page.getByRole('tooltip', { name: 'Photos · 42 GB' }).waitFor();
    assert.ok((await phone.getByRole('img', { name: 'Photos, 42 GB' }).getAttribute('aria-describedby'))?.length, 'the tooltip describes its segment');
  },
  'alert: a live region (status, alert when destructive) that appears on action; its action takes focus; title only is 48 px': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-alert--live&viewMode=story');
    const save = page.getByRole('button', { name: 'Save changes' });
    await save.waitFor();
    assert.equal(await page.getByRole('status').count(), 0, 'no alert before saving');
    await save.click();
    const status = page.getByRole('status');
    assert.match(await status.textContent(), /Your changes have been saved\./);
    await page.keyboard.press('Tab');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Dismiss', 'the action is the next stop');
    await page.keyboard.press('Enter');
    assert.equal(await status.count(), 0, 'the action dismisses it');
    await page.goto('http://localhost:6008/iframe.html?id=components-alert--with-list&viewMode=story');
    const alert = page.getByRole('alert');
    await alert.waitFor();
    assert.equal(await alert.locator('li').count(), 3, 'destructive alerts are assertive; the list sits in the description');
    await page.goto('http://localhost:6008/iframe.html?id=components-alert--title-only&viewMode=story');
    await page.waitForSelector('.ds-alert');
    assert.deepEqual(await page.locator('.ds-alert').evaluateAll((els) => els.map((el) => el.getBoundingClientRect().height)), [48, 48]);
  },
  'textarea: the label names it; the count follows typing and maxLength stops it': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-textarea--character-limit&viewMode=story');
    const post = page.getByRole('textbox', { name: 'Post' });
    const count = page.locator('.ds-textarea__count').first();
    assert.equal(await count.locator('[aria-hidden]').first().textContent(), '195', '280 − 85 characters left');
    assert.match(await page.locator(`#${(await post.getAttribute('aria-describedby')).split(' ').pop()}`).textContent(), /195 of 280 characters left/, 'the count describes the textarea');
    await post.focus();
    await page.keyboard.press('End');
    await page.keyboard.type('!!');
    assert.equal(await count.locator('[aria-hidden]').first().textContent(), '193');
    await post.fill('x'.repeat(300));
    assert.equal((await post.inputValue()).length, 280, 'maxLength stops at the limit');
    assert.equal(await count.locator('[aria-hidden]').first().textContent(), '0');
  },
  'textarea: a soft limit goes negative and marks it invalid; focus draws the ring; it grows with its text': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-textarea--character-limit&viewMode=story');
    const tagline = page.getByRole('textbox', { name: 'Tagline' });
    assert.equal(await tagline.getAttribute('aria-invalid'), 'true', 'over the soft limit');
    assert.equal(await page.locator('.ds-textarea__count--over [aria-hidden]').first().textContent(), '-6');
    await tagline.fill('Ship small.');
    assert.equal(await tagline.getAttribute('aria-invalid'), null, 'back under the limit');
    await page.goto('http://localhost:6008/iframe.html?id=components-textarea--field&viewMode=story');
    const summary = page.getByRole('textbox', { name: 'Summary' });
    await summary.waitFor();
    await page.keyboard.press('Tab');
    assert.equal(await summary.evaluate((el) => el === document.activeElement), true, 'Tab reaches the textarea');
    assert.match(await summary.evaluate((el) => getComputedStyle(el).boxShadow), /0px 0px 0px 2px/, 'focus ring');
    const before = (await summary.boundingBox()).height;
    assert.equal(before, 64, 'at least 64 px tall');
    await summary.fill('One\nTwo\nThree\nFour\nFive');
    assert.equal((await summary.boundingBox()).height > before, true, 'grows with its text');
  },
  'button-group: a named group; outer corners only; the focused item rises above its neighbours': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-button-group--toolbar&viewMode=story');
    await page.waitForSelector('.ds-button-group');
    const review = page.getByRole('group', { name: 'Review' });
    assert.equal(await page.getByRole('group', { name: 'Toolbar' }).count(), 1, 'the outer group has role group and a name');
    const radii = await review.locator('.ds-button').evaluateAll((els) => els.map((e) => getComputedStyle(e).borderRadius));
    assert.deepEqual(radii, ['8px 0px 0px 8px', '0px 8px 8px 0px'], 'the group rounds only its outer corners');
    const gap = await page.locator('.ds-button-group').first().evaluate((el) => getComputedStyle(el).columnGap);
    assert.equal(gap, '8px', 'a group of groups spaces them 8 px apart');
    await review.getByRole('button', { name: 'Preview' }).focus();
    await page.keyboard.press('Tab');
    const share = review.getByRole('button', { name: 'Share' });
    assert.equal(await share.evaluate((el) => el === document.activeElement), true);
    assert.equal(await share.evaluate((el) => getComputedStyle(el).zIndex), '1', 'the focused item draws its ring over its neighbours');
  },
  'button-group: the dropdown trigger joins the group and opens its menu': async () => {
    await page.goto('http://localhost:6008/iframe.html?id=components-button-group--with-dropdown-menu&viewMode=story');
    const trigger = page.getByRole('button', { name: 'More follow options' });
    assert.equal(await trigger.evaluate((el) => getComputedStyle(el).borderRadius), '0px 8px 8px 0px', 'the trigger takes the end corners');
    await trigger.click();
    assert.equal(await trigger.getAttribute('aria-expanded'), 'true');
    await page.getByRole('menuitem', { name: 'Copy link' }).waitFor();
    await page.keyboard.press('Escape');
    assert.equal(await trigger.getAttribute('aria-expanded'), 'false');
  },
});

let failed = 0;
for (const [name, run] of Object.entries(tests)) {
  try {
    // Each test starts with the pointer in the corner, so where the previous one left it cannot hover anything.
    await page.mouse.move(0, 0);
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
