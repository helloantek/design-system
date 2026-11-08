// Interaction tests every adapter must pass: the React Storybook runs them in storybook-interactions.mjs, the Angular
// one in adapter-parity.mjs. Each test gets the Playwright page and the Storybook's base URL; story ids and args are
// the same in both Storybooks (ADR 0002).
import assert from 'node:assert/strict';

export const sharedTests = {
  'badge: the close icon is a named button that removes the badge': async (page, base) => {
    await page.goto(`${base}/iframe.html?id=components-badge--playground&viewMode=story&args=closeIcon:!true;label:Design`);
    const remove = page.getByRole('button', { name: 'Remove Design' });
    await remove.waitFor();
    await page.keyboard.press('Tab');
    assert.equal(await remove.evaluate((el) => document.activeElement === el), true, 'reachable with Tab');
    await page.keyboard.press('Enter');
    await page.getByRole('button', { name: 'Show the badge again' }).waitFor();
    assert.equal(await page.locator('.ds-badge').count(), 0);
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
};
