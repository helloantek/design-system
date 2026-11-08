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
};
