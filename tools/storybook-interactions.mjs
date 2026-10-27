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
  'hover: Input, Select and choice cards get a dark 1.5 px stroke, not when disabled': async () => {
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
    await page.goto('http://localhost:6008/iframe.html?id=components-select--all-states&viewMode=story');
    const disabled = page.locator('.ds-select__trigger--disabled').first();
    const rest = await stroke(disabled);
    await disabled.hover({ force: true });
    assert.equal(await stroke(disabled), rest, 'a disabled select does not react');
  },
});

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
