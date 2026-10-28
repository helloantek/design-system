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
