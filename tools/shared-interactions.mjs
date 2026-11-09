// Interaction tests every adapter must pass: the React Storybook runs them in storybook-interactions.mjs, the Angular
// one in adapter-parity.mjs. Each test gets the Playwright page and the Storybook's base URL; story ids and args are
// the same in both Storybooks (ADR 0002).
import assert from 'node:assert/strict';

// React updates the DOM during the event; Angular (zoneless) on the next tick. After an action, wait for the state
// rather than read it at once: `settles(read, expected)` retries `read` for up to 2 s, then asserts.
export async function settles(read, expected, message) {
  let actual;
  for (const end = Date.now() + 2000; Date.now() < end; await new Promise((r) => setTimeout(r, 50))) {
    actual = await read();
    try {
      assert.deepEqual(actual, expected);
      return;
    } catch {}
  }
  assert.deepEqual(actual, expected, message);
}

// Select (WAI-ARIA select-only combobox): open a story and read what the combobox exposes after each step. `press`,
// `type` and `tick` let the adapter render after an action (Angular renders on the next frame).
const selectHelpers = (page, base) => {
  const tick = () => page.evaluate(() => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  const combobox = page.locator('[role="combobox"]').first();
  return {
    tick,
    combobox,
    listbox: page.locator('[role="listbox"]').first(),
    open: async (id, args = '') => {
      await page.goto(`${base}/iframe.html?id=${id}&viewMode=story${args ? `&args=${args}` : ''}`);
      await page.waitForSelector('#storybook-root [role="combobox"]');
      await tick();
    },
    press: async (key) => {
      await page.keyboard.press(key);
      await tick();
    },
    type: async (text, options) => {
      await page.keyboard.type(text, options);
      await tick();
    },
    state: async () => ({
      expanded: await combobox.getAttribute('aria-expanded'),
      active: await combobox.evaluate((el) => {
        const id = el.getAttribute('aria-activedescendant');
        return id ? document.getElementById(id)?.querySelector('.ds-select__label')?.textContent : null;
      }),
      value: await combobox.locator('.ds-select__value').textContent(),
      focused: await combobox.evaluate((el) => document.activeElement === el),
    }),
  };
};

export const sharedTests = {
  'badge: the close icon is a named button that removes the badge': async (page, base) => {
    await page.goto(`${base}/iframe.html?id=components-badge--playground&viewMode=story&args=closeIcon:!true;label:Design`);
    const remove = page.getByRole('button', { name: 'Remove Design' });
    await remove.waitFor();
    await page.keyboard.press('Tab');
    assert.equal(await remove.evaluate((el) => document.activeElement === el), true, 'reachable with Tab');
    await page.keyboard.press('Enter');
    await page.getByRole('button', { name: 'Show the badge again' }).waitFor();
    await settles(() => page.locator('.ds-badge').count(), 0);
  },
  'button: a native button of type "button"; disabled is native; an icon-only button is named by aria-label': async (page, base) => {
    await page.goto(`${base}/iframe.html?id=components-button--playground&viewMode=story&args=label:Save;badge:`);
    const save = page.getByRole('button', { name: 'Save' });
    await save.waitFor();
    assert.equal(await save.getAttribute('type'), 'button', 'never submits a form by accident');
    assert.equal(await save.locator('.ds-button__badge').count(), 0, 'an empty badge is not drawn');
    await page.goto(`${base}/iframe.html?id=components-button--playground&viewMode=story&args=disabled:!true`);
    await page.locator('.ds-button').waitFor();
    assert.equal(await page.locator('.ds-button').isDisabled(), true);
    await page.goto(`${base}/iframe.html?id=components-button--icon-only&viewMode=story`);
    const icon = page.getByRole('button', { name: 'Button' });
    await icon.waitFor();
    assert.match(await icon.getAttribute('class'), /ds-button--icon-only/);
    assert.equal(await icon.locator('.ds-button__label').count(), 0);
  },
  'checkbox: label click and Space toggle; disabled does not; error is described': async (page, base) => {
    await page.goto(`${base}/iframe.html?id=components-checkbox--with-descriptions&viewMode=story`);
    const onboarding = page.getByRole('checkbox', { name: 'User onboarding emails' });
    assert.equal(await onboarding.isChecked(), false);
    await page.getByText('User onboarding emails').click();
    await settles(() => onboarding.isChecked(), true, 'the label toggles the checkbox');
    await page.keyboard.press('Space');
    await settles(() => onboarding.isChecked(), false, 'Space toggles it');
    assert.match(await onboarding.getAttribute('aria-describedby'), /caption/, 'the description describes it');
    const disabled = page.getByRole('checkbox', { name: 'Product update notifications' });
    await page.getByText('Product update notifications').click({ force: true });
    assert.equal(await disabled.isChecked(), false, 'a disabled checkbox ignores its label');
    await page.goto(`${base}/iframe.html?id=components-checkbox--themes&viewMode=story`);
    const terms = page.getByRole('checkbox', { name: 'Accept the terms' }).first();
    assert.equal(await terms.getAttribute('aria-invalid'), 'true');
    assert.equal(await page.locator(`#${await terms.getAttribute('aria-describedby')}`).textContent(), 'This field is required.');
  },
  'checkbox: a click anywhere on a choice card toggles it': async (page, base) => {
    await page.goto(`${base}/iframe.html?id=components-checkbox--choice-cards&viewMode=story`);
    const storage = page.getByRole('checkbox', { name: 'Extra storage' });
    const card = page.locator('.ds-field--card').first();
    const box = await card.boundingBox();
    await page.mouse.click(box.x + box.width - 12, box.y + box.height - 8);
    await settles(() => storage.isChecked(), true, 'the card corner toggles it');
    await page.mouse.move(0, 0);
    await settles(() => card.evaluate((el) => getComputedStyle(el).backgroundColor), 'rgba(115, 115, 115, 0.05)', 'a checked card is filled');
    assert.match(await storage.getAttribute('aria-describedby'), /caption/, 'the name is the title; the description describes it');
  },
  'checkbox: nested parent is indeterminate and sets its children': async (page, base) => {
    await page.goto(`${base}/iframe.html?id=components-checkbox--nested&viewMode=story`);
    const parent = page.getByRole('checkbox', { name: 'Push notifications' });
    const mixed = () => parent.evaluate((el) => el.indeterminate);
    assert.equal(await mixed(), true, 'one child of three checked');
    await parent.click();
    await settles(mixed, false);
    await settles(() => parent.isChecked(), true);
    for (const name of ['Direct messages', 'Mentions', 'Comments on your posts']) await settles(() => page.getByRole('checkbox', { name }).isChecked(), true);
    await page.getByRole('checkbox', { name: 'Mentions' }).click();
    await settles(mixed, true, 'unchecking a child makes the parent mixed again');
  },
  'input: the label and the blocks name and describe it; a click in the box focuses it; loading is busy; the character count and Clear follow the value': async (page, base) => {
    await page.goto(`${base}/iframe.html?id=components-input--input-group-alignment&viewMode=story`);
    const client = page.getByRole('textbox', { name: 'Client' });
    await client.waitFor();
    const project = page.getByRole('textbox', { name: 'Project' });
    assert.equal(await page.locator(`[id="${await project.getAttribute('aria-describedby')}"]`).textContent(), 'Shown on the invoice PDF', 'Block end describes it');
    const box = page.locator('.ds-input').nth(2);
    const rect = await box.boundingBox();
    await page.mouse.click(rect.x + rect.width - 4, rect.y + rect.height - 4);
    assert.equal(await client.evaluate((el) => document.activeElement === el), true, 'a click on the box padding focuses the input');
    await page.goto(`${base}/iframe.html?id=components-input--input-group-status&viewMode=story`);
    const workspace = page.getByRole('textbox', { name: 'Workspace' });
    await workspace.waitFor();
    assert.equal(await workspace.getAttribute('aria-busy'), 'true');
    const name = page.getByRole('textbox', { name: 'Display name' });
    assert.equal(await page.locator(`[id="${await name.getAttribute('aria-describedby')}"]`).textContent(), 'Shown on your profile and comments.');
    await name.fill('Ada');
    await settles(() => page.locator('.ds-input__affix--end').last().textContent(), '3/24', 'the count follows the value');
    await page.getByRole('button', { name: 'Clear' }).click();
    await settles(() => name.inputValue(), '');
    await settles(() => page.getByRole('button', { name: 'Clear' }).count(), 0, 'Clear goes with the text');
    await page.goto(`${base}/iframe.html?id=components-input--playground&viewMode=story&args=error:Wrong;disabled:!true`);
    const field = page.getByRole('textbox', { name: 'Label' });
    await field.waitFor();
    assert.equal(await field.getAttribute('aria-invalid'), 'true');
    assert.equal(await field.isDisabled(), true);
  },
  'tooltip: describes its trigger; Tab shows it at once, Escape hides it; hover shows it after the delay and keeps it over the tooltip': async (page, base) => {
    await page.goto(`${base}/iframe.html?id=components-tooltip--default&viewMode=story`);
    const button = page.getByRole('button', { name: 'Refund' });
    await button.waitFor();
    const tip = page.getByRole('tooltip', { includeHidden: true });
    assert.equal(await tip.isVisible(), false, 'hidden at first');
    await settles(async () => (await button.getAttribute('aria-describedby')) === (await tip.getAttribute('id')), true, 'the tooltip describes the button');
    await page.keyboard.press('Tab');
    await settles(() => tip.isVisible(), true, 'keyboard focus shows it at once');
    assert.equal((await tip.textContent()).trim(), 'Refund this payment');
    await page.keyboard.press('Escape');
    await settles(() => tip.isVisible(), false, 'Escape hides it');
    await button.blur();
    // Start the pointer away from the button: an earlier test may have left it where the button now is.
    await page.mouse.move(0, 0);
    await button.hover();
    assert.equal(await tip.isVisible(), false, 'not before the delay');
    await tip.waitFor({ state: 'visible', timeout: 2000 });
    const box = await tip.boundingBox();
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2, { steps: 4 });
    await page.waitForTimeout(100);
    assert.equal(await tip.isVisible(), true, 'it stays while the pointer is over it');
    await page.mouse.move(0, 0);
    await settles(() => tip.isVisible(), false, 'leaving hides it');
    await button.click();
    await page.mouse.move(0, 0);
    await page.waitForTimeout(100);
    assert.equal(await tip.isVisible(), false, 'a click does not show it');
  },
  'dialog: the trigger opens a named, described modal with focus inside; Escape, the Close button, a footer button and the backdrop close it; focus returns': async (page, base) => {
    await page.goto(`${base}/iframe.html?id=components-dialog--playground&viewMode=story`);
    const trigger = page.getByRole('button', { name: 'Open dialog' });
    await trigger.waitFor();
    assert.equal(await trigger.getAttribute('aria-haspopup'), 'dialog');
    assert.equal(await page.getByRole('dialog').count(), 0, 'closed at first');
    const dialog = page.getByRole('dialog', { name: 'Dialog title' });
    const open = async () => {
      await trigger.click();
      await dialog.waitFor();
    };
    const closesWith = async (how, message) => {
      await open();
      await how();
      await dialog.waitFor({ state: 'hidden' });
      await settles(() => trigger.evaluate((el) => el === document.activeElement), true, `${message}: focus returns to the trigger`);
    };
    await open();
    assert.equal(await dialog.evaluate((el) => el.matches(':modal')), true, 'a modal dialog');
    assert.match(await dialog.evaluate((el) => document.getElementById(el.getAttribute('aria-describedby')).textContent), /what this dialog does/, 'the description describes it');
    assert.equal(await dialog.evaluate((el) => el.contains(document.activeElement)), true, 'focus moves inside');
    assert.equal(await dialog.evaluate((el) => el.offsetWidth), 448, 'Figma width');
    await page.keyboard.press('Escape');
    await dialog.waitFor({ state: 'hidden' });
    await settles(() => trigger.evaluate((el) => el === document.activeElement), true, 'Escape: focus returns to the trigger');
    await closesWith(() => dialog.getByRole('button', { name: 'Close' }).click(), 'Close');
    await closesWith(() => dialog.getByRole('button', { name: 'Cancel' }).click(), 'Cancel');
    await closesWith(() => page.mouse.click(5, 5), 'the backdrop');
    await open();
    await dialog.getByText('Dialog content').click();
    await page.waitForTimeout(100);
    assert.equal(await dialog.isVisible(), true, 'a click inside keeps it open');
    await page.keyboard.press('Escape');
    await dialog.waitFor({ state: 'hidden' });
  },
  'select: keyboard opens, moves, selects and keeps focus': async (page, base) => {
    const { open, combobox, listbox, state, press, type, tick } = selectHelpers(page, base);
    await open('components-select--playground');
    await press('Tab');
    assert.deepEqual(await state(), { expanded: 'false', active: null, value: 'Select a user', focused: true });
    await press('ArrowDown');
    assert.equal(await listbox.isVisible(), true);
    assert.equal((await state()).active, 'Alex Jhonson');
    await press('ArrowDown');
    assert.equal((await state()).active, 'Simon Alt');
    await press('End');
    assert.equal((await state()).active, 'Lily Chen');
    await press('ArrowDown');
    assert.equal((await state()).active, 'Lily Chen', 'ArrowDown stops at the last option');
    await press('Home');
    await press('ArrowDown');
    await press('Enter');
    assert.deepEqual(await state(), { expanded: 'false', active: null, value: 'Simon Alt', focused: true });
    assert.equal(await listbox.isVisible(), false);
    await press('Space');
    assert.equal((await state()).active, 'Simon Alt', 'reopening starts at the selected option');
    assert.equal(await page.locator('[role="option"][aria-selected="true"]').textContent(), 'Simon Alt');
  },
  'select: type-ahead, Escape and Tab': async (page, base) => {
    const { open, combobox, listbox, state, press, type, tick } = selectHelpers(page, base);
    await open('components-select--playground');
    await press('Tab');
    await type('e');
    assert.equal((await state()).active, 'Emma Thompson');
    await press('Escape');
    assert.deepEqual(await state(), { expanded: 'false', active: null, value: 'Select a user', focused: true });
    await type('ky', { delay: 50 });
    assert.equal((await state()).active, 'Kate Roberts', 'characters typed quickly form one search');
    await press('Tab');
    assert.equal((await state()).value, 'Kate Roberts', 'Tab selects the highlighted option');
    assert.equal((await state()).focused, false);
    assert.equal(await listbox.isVisible(), false);
  },
  'select: mouse opens without highlight, picks an option, label focuses': async (page, base) => {
    const { open, combobox, listbox, state, press, type, tick } = selectHelpers(page, base);
    await open('components-select--playground');
    await combobox.click();
    await tick();
    assert.deepEqual(await state(), { expanded: 'true', active: null, value: 'Select a user', focused: true });
    await page.locator('[role="option"]', { hasText: 'Ryan Parker' }).click();
    await tick();
    assert.deepEqual(await state(), { expanded: 'false', active: null, value: 'Ryan Parker', focused: true });
    await page.locator('body').click({ position: { x: 600, y: 5 } });
    await tick();
    await page.locator('.ds-field__label').click();
    await tick();
    assert.equal((await state()).focused, true);
  },
  'select: disabled options are skipped and cannot be picked; groups and caption from Playground controls': async (page, base) => {
    const { open, combobox, listbox, state, press, type, tick } = selectHelpers(page, base);
    await open('components-select--playground', 'disabledItem:!true;groups:!true;menuCaption:Pick+the+owner');
    await press('Tab');
    await press('ArrowDown');
    await press('ArrowDown');
    await press('ArrowDown');
    assert.equal((await state()).active, 'Emma Thompson');
    await press('ArrowDown');
    assert.equal((await state()).active, 'Kate Roberts', 'skips the disabled Michael Davis');
    await page.locator('[role="option"]', { hasText: 'Michael Davis' }).click({ force: true });
    await tick();
    assert.equal((await state()).expanded, 'true');
    assert.equal((await state()).value, 'Select a user');
    const groups = page.locator('[role="group"]');
    assert.equal(await groups.count(), 2);
    assert.equal(await page.locator(`[id="${await groups.first().getAttribute('aria-labelledby')}"]`).textContent(), 'Design3');
    assert.equal(await page.locator(`[id="${await listbox.getAttribute('aria-describedby')}"]`).textContent(), 'Pick the owner');
  },
  'select: MenuItem story follows the Figma item properties': async (page, base) => {
    const { open, combobox, listbox, state, press, type, tick } = selectHelpers(page, base);
    await open('components-select--menu-item', 'type:Default+Large;selectType:Checkbox;active:!true;state:Disabled');
    const item = page.locator('[role="option"]').nth(1);
    assert.equal(await item.getAttribute('aria-selected'), 'true');
    assert.equal(await item.getAttribute('aria-disabled'), 'true');
    assert.equal(await item.locator('.ds-select__description').textContent(), 'The quick brown fox jumps over a lazy dog.');
    assert.equal(await item.locator('.ds-checkbox .ds-checkbox__input:checked').count(), 1, 'the selected option draws a checked Checkbox');
  },
  'select indicators: a click on the Checkbox or the Radio picks the option, and focus stays on the select': async (page, base) => {
    const { open, combobox, listbox, state, press, type, tick } = selectHelpers(page, base);
    await open('components-select--playground', 'multiple:!true;indicator:checkbox');
    await combobox.click();
    await tick();
    const simon = page.getByRole('option', { name: 'Simon Alt' });
    await simon.locator('.ds-checkbox').click({ force: true }); // at the box's place; the box lets the click through to the option
    await tick();
    assert.equal(await simon.getAttribute('aria-selected'), 'true');
    assert.equal(await simon.locator('.ds-checkbox__input').isChecked(), true);
    assert.equal(await page.evaluate(() => document.activeElement?.getAttribute('role')), 'combobox', 'the box never takes focus');
    await simon.locator('.ds-checkbox').click({ force: true });
    await tick();
    assert.equal(await simon.getAttribute('aria-selected'), 'false');
    assert.equal(await simon.locator('.ds-checkbox__input').isChecked(), false);
    await open('components-select--playground', 'indicator:radio');
    await combobox.click();
    await tick();
    await page.getByRole('option', { name: 'Emma Thompson' }).locator('.ds-radio').click({ force: true });
    await tick();
    assert.equal((await state()).value, 'Emma Thompson');
    await combobox.click();
    await tick();
    assert.equal(await page.getByRole('option', { name: 'Emma Thompson' }).locator('.ds-radio__input').isChecked(), true);
  },
  'select: disabled select is not focusable and does not open': async (page, base) => {
    const { open, combobox, listbox, state, press, type, tick } = selectHelpers(page, base);
    await open('components-select--playground', 'disabled:!true');
    assert.equal(await combobox.getAttribute('tabindex'), null);
    assert.equal(await combobox.getAttribute('aria-disabled'), 'true');
    await combobox.click({ force: true });
    await tick();
    assert.equal((await state()).expanded, 'false');
  },
  'select multiple: options toggle, menu stays open, trigger lists labels': async (page, base) => {
    const { open, combobox, listbox, state, press, type, tick } = selectHelpers(page, base);
    await open('components-select--playground', 'multiple:!true');
    await press('Tab');
    await press('ArrowDown');
    assert.equal(await listbox.getAttribute('aria-multiselectable'), 'true');
    await press('Enter');
    await press('ArrowDown');
    await press('ArrowDown');
    await press(' ');
    assert.equal((await state()).expanded, 'true', 'the menu stays open while picking');
    assert.equal((await state()).value, 'Alex Jhonson, Emma Thompson');
    await page.getByRole('option', { name: 'Simon Alt' }).click();
    await tick();
    assert.equal((await state()).value, 'Alex Jhonson, Simon Alt, Emma Thompson', 'labels follow the option order');
    await press('Home');
    await press('Enter');
    assert.equal((await state()).value, 'Simon Alt, Emma Thompson', 'picking a selected option removes it');
    assert.deepEqual(await page.locator('[role="option"][aria-selected="true"]').allTextContents(), ['Simon Alt', 'Emma Thompson']);
    await press('Tab');
    assert.equal(await listbox.isVisible(), false);
    assert.equal((await state()).value, 'Simon Alt, Emma Thompson', 'Tab closes without changing the selection');
  },
  'select menu item types: boxes, flags, large options and a caption that describes the menu': async (page, base) => {
    const { open, combobox, listbox, state, press, type, tick } = selectHelpers(page, base);
    await open('components-select--menu-item-types');
    const menus = page.getByRole('listbox');
    assert.equal(await menus.count(), 4);
    const [checkbox, radio, country, large] = [0, 1, 2, 3].map((i) => menus.nth(i));
    assert.equal(await checkbox.locator('.ds-checkbox').count(), 7, 'every option shows a Checkbox');
    assert.deepEqual(await checkbox.locator('[aria-selected="true"]').allTextContents(), ['Simon Alt', 'Emma Thompson']);
    assert.equal(await checkbox.locator('.ds-checkbox__input:checked').count(), 2, 'the Checkbox follows the selection');
    assert.equal(await radio.locator('.ds-radio').count(), 7);
    assert.equal(await radio.locator('.ds-radio__input:checked').count(), await radio.locator('[aria-selected="true"]').count(), 'the Radio follows the selection');
    // The boxes are pictures: inert, out of the tab order, unnamed, inside an aria-hidden slot.
    for (const input of await page.locator('[role="listbox"] :is(.ds-checkbox__input, .ds-radio__input)').all()) {
      assert.deepEqual(await input.evaluate((el) => [el.inert, el.tabIndex, el.name, !!el.closest('[aria-hidden="true"]')]), [true, -1, '', true]);
    }
    assert.equal(await country.locator('.ds-select__media svg').count(), 3);
    // Large options read as label + description; the caption is the listbox description, not an option.
    assert.equal(await large.getByRole('option').count(), 3);
    assert.equal(await large.getByRole('option', { name: 'Team Up to 20 people Popular' }).getAttribute('aria-selected'), 'true');
    const describedBy = await large.getAttribute('aria-describedby');
    assert.equal(await page.locator(`[id="${describedBy}"]`).textContent(), 'Billed yearly. You can change the plan at any time.');
  },
  'select tags: badges show the values; × and Backspace remove them without nested buttons': async (page, base) => {
    const { open, combobox, listbox, state, press, type, tick } = selectHelpers(page, base);
    await open('components-select--playground', 'multiple:!true;tags:!true');
    const tags = () => page.locator('.ds-select__tags .ds-badge__label').allTextContents();
    await press('Tab');
    await press('ArrowDown');
    await press('Enter');
    await press('ArrowDown');
    await press('Enter');
    await press('ArrowDown');
    await press('Enter');
    await press('Escape');
    assert.deepEqual(await tags(), ['Alex Jhonson', 'Simon Alt', 'Emma Thompson']);
    assert.equal(await combobox.locator('button, [tabindex]').count(), 0, 'no focusable element inside the combobox');
    // × removes that value and leaves the menu closed and the focus on the combobox.
    await page.locator('.ds-select__tags .ds-badge', { hasText: 'Simon Alt' }).locator('.ds-badge__remove').click();
    await tick();
    assert.deepEqual(await tags(), ['Alex Jhonson', 'Emma Thompson']);
    assert.equal(await combobox.getAttribute('aria-expanded'), 'false', '× does not open the menu');
    assert.equal(await page.locator('.ds-select__status').textContent(), 'Simon Alt removed', 'the removal is announced');
    // Backspace removes the last value, open or closed.
    await combobox.focus();
    await press('Backspace');
    assert.deepEqual(await tags(), ['Alex Jhonson']);
    await press('ArrowDown');
    await press('Backspace');
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
    await tick();
    assert.equal(await counted.locator('.ds-select__tags > .ds-badge:not(.ds-select__more)').count() + Number((await more.count()) ? (await more.locator('[aria-hidden]').textContent()).slice(1) : 0), 4, 'shown + counted = values left');
    // Disabled: no × at all.
    const disabled = page.locator('.ds-select').nth(3);
    assert.equal(await disabled.locator('.ds-badge').count(), 2);
    assert.equal(await disabled.locator('.ds-badge__remove').count(), 0, 'a disabled select has no ×');
  },
  'select avatar: the field shows the selected option\'s avatar instead of the lead icon': async (page, base) => {
    const { open, combobox, listbox, state, press, type, tick } = selectHelpers(page, base);
    await open('components-select--with-avatars');
    const owner = page.locator('.ds-select').first();
    const lead = () => owner.locator('.ds-select__main > :first-child').getAttribute('class');
    assert.equal(await lead(), 'ds-select__media');
    assert.equal(await owner.locator('.ds-select__main .ds-avatar img').count(), 1, 'Simon Alt has a picture');
    await owner.getByRole('combobox').click();
    await tick();
    await owner.getByRole('option', { name: 'Kate Roberts' }).click();
    await tick();
    assert.equal(await owner.locator('.ds-select__main .ds-avatar__initials').textContent(), 'K');
    assert.equal(await owner.locator('.ds-select__value').textContent(), 'Kate Roberts');
    // Empty field: the lead icon; the menu still shows avatars.
    const empty = page.locator('.ds-select').nth(1);
    assert.equal(await empty.locator('.ds-select__main > :first-child').getAttribute('class'), 'ds-select__icon');
    await empty.getByRole('combobox').click();
    await tick();
    assert.equal(await empty.locator('[role="option"] .ds-avatar').count(), 7);
    // A multiple select keeps its lead icon.
    await open('components-select--playground', 'multiple:!true;itemType:Avatar');
    await press('Tab');
    await press('ArrowDown');
    await press('Enter');
    assert.equal(await page.locator('.ds-select__main > :first-child').first().getAttribute('class'), 'ds-select__icon');
  },
};
