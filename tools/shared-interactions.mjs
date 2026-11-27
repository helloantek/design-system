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
  'approval card: a named card; Esc denies and folds it to a status line with Undo, which brings it back; Enter approves; the approving card is busy': async (page, base) => {
    await page.goto(`${base}/iframe.html?id=patterns-approval-card--high-risk&viewMode=story`);
    const card = page.getByRole('article', { name: 'Delete 3 stale branches' });
    await card.waitFor();
    assert.equal(await card.getByRole('button', { name: /Deny/ }).getAttribute('aria-keyshortcuts'), 'Escape');
    assert.equal(await card.getByRole('timer').textContent(), 'Denies itself in 0:45');
    await card.getByText('All three were merged').click();
    await page.keyboard.press('Escape');
    const line = page.getByRole('status').filter({ hasText: 'Denied · Delete 3 stale branches' });
    await line.waitFor();
    await line.getByRole('button', { name: 'Undo' }).click();
    await card.getByRole('timer').waitFor();
    await card.getByText('All three were merged').click();
    await page.keyboard.press('Enter');
    await page.getByRole('status').filter({ hasText: 'Approved · Delete 3 stale branches' }).waitFor();
    await page.goto(`${base}/iframe.html?id=patterns-approval-card--approving&viewMode=story`);
    const busy = page.getByRole('article', { name: 'Send the October newsletter' });
    await busy.waitFor();
    assert.equal(await busy.getAttribute('aria-busy'), 'true');
    assert.equal(await busy.locator('.ds-approval-card__recipients [aria-hidden="true"] .ds-avatar').count(), 4, 'four avatars, hidden from screen readers');
  },
  'tool call: the line is a button that opens the arguments and result (aria-expanded); a failed call starts open with Retry; a group folds to one line and opens to its calls': async (page, base) => {
    await page.goto(`${base}/iframe.html?id=patterns-tool-call-card--done-open&viewMode=story`);
    const trigger = page.getByRole('button', { name: /query_deals/ });
    await trigger.waitFor();
    assert.equal(await trigger.getAttribute('aria-expanded'), 'true');
    assert.equal(await page.getByRole('heading', { name: 'Arguments' }).isVisible(), true);
    assert.equal(await page.getByRole('button', { name: 'Copy arguments' }).count(), 1, 'each section has a named Copy button');
    await trigger.focus();
    await page.keyboard.press('Enter');
    await settles(() => trigger.getAttribute('aria-expanded'), 'false', 'Enter closes it');
    assert.equal(await page.getByRole('heading', { name: 'Arguments' }).isVisible(), false);
    await page.keyboard.press('Space');
    await settles(() => trigger.getAttribute('aria-expanded'), 'true', 'Space opens it');
    await page.goto(`${base}/iframe.html?id=patterns-tool-call-card--failed&viewMode=story`);
    await page.getByRole('button', { name: 'Retry' }).waitFor();
    assert.equal(await page.getByRole('button', { name: /send_email/ }).getAttribute('aria-expanded'), 'true', 'a failed call starts open');
    assert.equal(await page.getByRole('img', { name: 'failed' }).count(), 1, 'the status is named');
    await page.goto(`${base}/iframe.html?id=patterns-tool-call-card--folded&viewMode=story`);
    const group = page.getByRole('button', { name: /Used 4 tools/ });
    await group.waitFor();
    assert.equal(await group.getAttribute('aria-expanded'), 'false');
    assert.equal(await page.getByRole('button', { name: /search_web/ }).isVisible(), false, 'folded: the calls are hidden');
    await group.click();
    await page.getByRole('button', { name: /4 tool calls/ }).waitFor();
    assert.equal(await page.getByRole('button', { name: /search_web/ }).isVisible(), true);
    await page.goto(`${base}/iframe.html?id=patterns-tool-call-card--group&viewMode=story`);
    await page.getByRole('button', { name: /4 tool calls · 2.4 s · 1 failed/ }).waitFor();
  },
  'permission request: a named card; the duration is a toggle group and names the Allow button; pressing the chosen duration keeps it; a destructive right allows only once; Esc denies, Enter allows; the answer is one status line with Revoke': async (page, base) => {
    await page.goto(`${base}/iframe.html?id=patterns-permission-request--request&viewMode=story`);
    const card = page.getByRole('article', { name: 'Support agent wants to read #billing' });
    await card.waitFor();
    const group = card.getByRole('group', { name: 'For how long' });
    assert.equal(await group.getByRole('button', { name: '1 hour' }).getAttribute('aria-pressed'), 'true', '1 hour by default');
    await group.getByRole('button', { name: 'Always' }).click();
    await card.getByRole('button', { name: /Allow always/ }).waitFor();
    await group.getByRole('button', { name: 'Always' }).click();
    await settles(() => group.getByRole('button', { name: 'Always' }).getAttribute('aria-pressed'), 'true', 'pressing the chosen duration keeps it');
    assert.equal(await card.getByRole('list', { name: 'It can', exact: true }).getByRole('listitem').count(), 2);
    await card.getByText('To answer Ana Silva').click();
    await page.keyboard.press('Enter');
    await page.getByRole('status').filter({ hasText: 'Allowed always · read #billing' }).waitFor();
    await page.getByRole('button', { name: 'Revoke' }).click();
    await page.getByRole('article', { name: 'Support agent wants to read #billing' }).getByRole('button', { name: /Deny/ }).focus();
    await page.keyboard.press('Escape');
    await page.getByRole('status').filter({ hasText: 'Denied · read #billing' }).waitFor();
    await page.goto(`${base}/iframe.html?id=patterns-permission-request--destructive&viewMode=story`);
    const destructive = page.getByRole('article', { name: 'Ops agent wants to delete 14 files' });
    await destructive.waitFor();
    assert.equal(await destructive.getByRole('button', { name: '1 hour' }).isDisabled(), true, 'only once for a destructive right');
    assert.equal(await destructive.getByRole('button', { name: /Allow once/ }).count(), 1);
    assert.equal(await destructive.getByRole('list', { name: 'Files' }).getByRole('listitem').count(), 3);
  },
  'decision card: the question names the card and its answers; the recommended one starts highlighted; a number key or a click answers; the last row sends your own words with Enter; the pager wraps round; Later folds it and Answer opens it': async (page, base) => {
    await page.goto(`${base}/iframe.html?id=patterns-decision-card--questions&viewMode=story`);
    const card = page.getByRole('region', { name: 'Which plan should the new team start on?' });
    await card.waitFor();
    const answers = card.getByRole('group', { name: 'Which plan should the new team start on?' });
    assert.equal(await answers.getByRole('button', { name: /Team/ }).getAttribute('aria-keyshortcuts'), '2');
    assert.match(await answers.getByRole('button', { name: /Team/ }).getAttribute('class'), /ds-decision__option--active/, 'the recommended answer starts highlighted');
    await card.getByText('Onboarding').click();
    await page.keyboard.press('3');
    await page.getByRole('status').filter({ hasText: 'Answered: Enterprise' }).waitFor();
    await answers.getByRole('button', { name: /Starter/ }).click();
    await page.getByRole('status').filter({ hasText: 'Answered: Starter' }).waitFor();
    const other = card.getByRole('textbox', { name: 'Something else' });
    assert.equal(await other.getAttribute('aria-keyshortcuts'), '4');
    await other.fill('Ask the team first');
    await page.keyboard.press('Enter');
    await page.getByRole('status').filter({ hasText: 'Answered: “Ask the team first”' }).waitFor();
    await settles(() => other.inputValue(), '', 'sending clears the row');
    await card.getByRole('button', { name: 'Previous question' }).click();
    await page.getByRole('region', { name: 'Who should own billing?' }).waitFor();
    await page.getByRole('region', { name: 'Who should own billing?' }).getByRole('button', { name: 'Later' }).click();
    const line = page.getByRole('region', { name: /2 questions waiting/ });
    await line.waitFor();
    await line.getByRole('button', { name: 'Answer' }).click();
    await page.getByRole('region', { name: 'Who should own billing?' }).waitFor();
  },
  'approval gates: a named run; A approves and R rejects the gate from inside it; Change it turns the arguments into a field, says what changed and Esc cancels; a decided gate opens to its reason': async (page, base) => {
    await page.goto(`${base}/iframe.html?id=patterns-approval-gates--waiting&viewMode=story`);
    const run = page.getByRole('region', { name: /Approvals Launch the new pricing page/ });
    await run.waitFor();
    const gate = run.getByRole('article', { name: 'Publish 2.4.0 to npm' });
    assert.equal(await gate.getByRole('button', { name: /Approve/ }).getAttribute('aria-keyshortcuts'), 'A');
    await gate.getByRole('button', { name: 'Change it' }).click();
    const field = gate.getByRole('textbox', { name: 'Arguments' });
    await settles(() => page.evaluate(() => document.activeElement?.tagName), 'TEXTAREA', 'Change it focuses the arguments');
    await field.fill('npm publish --tag next\npackage: @acme/ui@2.4.0');
    await settles(() => gate.locator('.ds-gate__edited').textContent(), 'Edited: --tag latest → next');
    await page.keyboard.press('Escape');
    await settles(() => gate.getByRole('textbox').count(), 0, 'Esc cancels the edit');
    await gate.getByText('All tests passed').click();
    await page.keyboard.press('a');
    const decided = run.getByRole('list', { name: 'Decided' });
    await settles(async () => /Publish 2.4.0 to npm.*Approved/.test(await decided.getByRole('listitem').first().textContent()), true, 'A approves; the gate drops into the decided list');
    const row = decided.getByRole('button', { name: /Tag v2.4.0/ });
    assert.equal(await row.getAttribute('aria-expanded'), 'false');
    await row.click();
    await settles(() => row.getAttribute('aria-expanded'), 'true', 'a decided gate opens to its reason');
    await page.goto(`${base}/iframe.html?id=patterns-approval-gates--rejected&viewMode=story`);
    await page.getByText('The run stopped').waitFor();
    assert.equal(await page.getByRole('status').filter({ hasText: 'The run stopped' }).count(), 1, 'the stopped run is a status');
  },
  'decision inbox: a named list of decisions; an answer confirms in place with focus on Undo; Undo brings it back; the row folds away; the folded line opens it': async (page, base) => {
    await page.goto(`${base}/iframe.html?id=patterns-decision-inbox--open&viewMode=story`);
    const inbox = page.getByRole('region', { name: '3 need your input' });
    await inbox.waitFor();
    assert.equal(await inbox.getByRole('listitem').count(), 3);
    const refund = inbox.getByRole('listitem', { name: 'Send the refund of €48 to Ana Silva?' });
    await refund.getByRole('group', { name: 'Send the refund of €48 to Ana Silva?' }).getByRole('button', { name: 'Send' }).focus();
    await page.keyboard.press('Enter');
    const done = page.getByRole('status').filter({ hasText: 'Sent · €48 to Ana Silva' });
    await done.waitFor();
    await page.getByRole('region', { name: '2 need your input' }).waitFor();
    await settles(() => page.evaluate(() => document.activeElement?.textContent?.trim()), 'Undo', 'focus moves to Undo, not to the page');
    await page.keyboard.press('Enter');
    await page.getByRole('listitem', { name: 'Send the refund of €48 to Ana Silva?' }).waitFor();
    await page.getByRole('listitem', { name: 'Renew Figma for the design team?' }).getByRole('button', { name: 'Renew' }).click();
    await page.mouse.move(0, 0);
    await page.locator('body').click({ position: { x: 2, y: 2 } });
    await page.getByText('Renewed · Figma, 12 seats').waitFor({ state: 'detached', timeout: 8000 });
    await settles(() => page.getByRole('region', { name: '2 need your input' }).getByRole('listitem').count(), 2, 'the answered row folds away');
    await page.goto(`${base}/iframe.html?id=patterns-decision-inbox--folded&viewMode=story`);
    const line = page.getByRole('button', { name: /3 need your input.*oldest 2 h ago/ });
    await line.click();
    await page.getByRole('region', { name: '3 need your input' }).getByRole('listitem').first().waitFor();
    await page.goto(`${base}/iframe.html?id=patterns-decision-inbox--nothing-open&viewMode=story`);
    await page.getByRole('status').filter({ hasText: 'Nothing needs you' }).waitFor();
  },
  'review center: a named queue and the item in focus; R asks why and a number rejects; Z undoes; a mouse Reject focuses the first reason and Esc returns to Reject; A approves; a click in the queue shows that item': async (page, base) => {
    await page.goto(`${base}/iframe.html?id=patterns-review-center--reviewing&viewMode=story`);
    const center = page.getByRole('region', { name: 'Review center' });
    await center.waitFor();
    const queue = center.getByRole('list', { name: 'Queue' });
    assert.equal(await queue.getByRole('listitem').count(), 6);
    assert.equal(await queue.getByRole('button', { name: /Pay INV-2207/ }).getAttribute('aria-current'), 'true');
    assert.equal(await center.getByRole('progressbar').getAttribute('aria-valuenow'), '26');
    const item = center.getByRole('article', { name: 'Pay INV-2207 from Acme Logistics' });
    assert.equal(await item.getByRole('button', { name: /Approve/ }).getAttribute('aria-keyshortcuts'), 'A');
    await item.getByText('Amount and line items').click();
    await page.keyboard.press('r');
    const reasons = item.getByRole('group', { name: 'Why?' });
    await reasons.waitFor();
    assert.equal(await reasons.getByRole('button', { name: /Too risky/ }).getAttribute('aria-keyshortcuts'), '2');
    await page.keyboard.press('2');
    await center.getByRole('status').filter({ hasText: 'Rejected (Too risky) · Pay INV-2207 from Acme Logistics' }).waitFor();
    await settles(() => queue.getByRole('listitem').count(), 5, 'the decided item leaves the queue');
    await page.keyboard.press('z');
    await item.waitFor();
    await settles(() => queue.getByRole('listitem').count(), 6, 'Z undoes the last decision');
    await item.getByRole('button', { name: /Reject/ }).click();
    await reasons.waitFor();
    await settles(async () => /^\s*Incorrect/.test(await page.evaluate(() => document.activeElement?.textContent ?? '')), true, 'the first reason takes the focus');
    await page.keyboard.press('Escape');
    await settles(() => reasons.count(), 0, 'Esc cancels');
    await settles(async () => /^\s*Reject/.test(await page.evaluate(() => document.activeElement?.textContent ?? '')), true, 'focus returns to Reject');
    await page.keyboard.press('a');
    await center.getByRole('status').filter({ hasText: 'Approved · Pay INV-2207 from Acme Logistics' }).waitFor();
    await queue.getByRole('button', { name: /Refund order #4821/ }).click();
    await center.getByRole('article', { name: 'Refund order #4821' }).waitFor();
    await settles(() => queue.getByRole('button', { name: /Refund order #4821/ }).getAttribute('aria-current'), 'true');
    await page.goto(`${base}/iframe.html?id=patterns-review-center--all-reviewed&viewMode=story`);
    await page.getByRole('status').filter({ hasText: 'Nothing left to review' }).waitFor();
  },
  'autonomy dial: a named agent with a three-stop dial; moving it moves actions between the lists and the dial never empties; locked actions always ask and their lock says why on focus': async (page, base) => {
    await page.goto(`${base}/iframe.html?id=patterns-autonomy-dial--if-risky&viewMode=story`);
    const dial = page.getByRole('region', { name: 'Support agent' });
    await dial.waitFor();
    const stops = dial.getByRole('group', { name: 'Autonomy' });
    assert.equal(await stops.getByRole('button', { name: 'If risky' }).getAttribute('aria-pressed'), 'true');
    const runs = dial.getByRole('list', { name: /^Runs on its own/ });
    const asks = dial.getByRole('list', { name: /^Asks you first/ });
    assert.equal(await runs.getByRole('listitem').count(), 3, 'everyday work runs on its own');
    assert.equal(await asks.getByRole('listitem').count(), 4, 'risky actions ask');
    await stops.getByRole('button', { name: 'Full auto' }).click();
    await settles(() => runs.getByRole('listitem').count(), 5, 'all but the locked move over');
    assert.deepEqual(await asks.locator('.ds-autonomy__label').allTextContents(), ['Give refunds', 'Delete customer data'], 'locked actions always ask');
    await stops.getByRole('button', { name: 'Full auto' }).click();
    await settles(() => stops.getByRole('button', { name: 'Full auto' }).getAttribute('aria-pressed'), 'true', 'pressing the current stop keeps it');
    const lock = asks.getByRole('button', { name: 'Locked' }).first();
    await stops.getByRole('button', { name: 'Full auto' }).focus();
    await page.keyboard.press('Tab');
    assert.equal(await lock.evaluate((el) => el === document.activeElement), true, 'Tab goes from the dial to the first lock');
    const tip = page.locator(`#${(await lock.getAttribute('aria-describedby')).split(' ').pop()}`);
    await tip.waitFor();
    assert.match(await tip.textContent(), /refunds always ask/, 'the lock says why');
    await stops.getByRole('button', { name: 'Always ask' }).click();
    await settles(() => runs.count(), 0);
    await dial.getByText('Nothing – it asks before every action.').waitFor();
    assert.equal(await asks.getByRole('listitem').count(), 7, 'everything waits for you');
  },
  'thinking loader: what it is doing is a status; done and stopped show a hidden icon; taking long it says so with the time and Stop, which stops it': async (page, base) => {
    await page.goto(`${base}/iframe.html?id=patterns-thinking-loader--phases&viewMode=story`);
    await page.getByRole('status').filter({ hasText: 'Reading 4 files…' }).waitFor();
    assert.equal(await page.locator('.ds-thinking .ds-spinner').first().getAttribute('aria-hidden'), 'true', 'the spinner is only a picture');
    await page.goto(`${base}/iframe.html?id=patterns-thinking-loader--ends&viewMode=story`);
    const slow = page.locator('.ds-thinking--slow');
    await slow.waitFor();
    assert.equal(await page.locator('.ds-thinking--done svg').getAttribute('aria-hidden'), 'true');
    assert.equal(await slow.getByRole('status').textContent(), 'Taking longer than usual');
    assert.equal(await slow.locator('.ds-thinking__time').textContent(), '· 0:48');
    await slow.getByRole('button', { name: 'Stop' }).click();
    await page.getByRole('status').filter({ hasText: 'Stopped after 48 s' }).waitFor();
    await settles(() => page.getByRole('button', { name: 'Stop' }).count(), 0, 'stopped, Stop goes');
  },
  'thinking state: the steps are a list that is announced as it grows; the running one has a spinner; sources are links; done folds to a button that opens the steps': async (page, base) => {
    await page.goto(`${base}/iframe.html?id=patterns-thinking-state--reading-and-writing&viewMode=story`);
    const steps = page.getByRole('list', { name: 'Steps' });
    await steps.waitFor();
    assert.equal(await steps.getAttribute('aria-live'), 'polite', 'new steps are read out');
    assert.equal(await steps.locator(':scope > li').count(), 4);
    assert.equal(await page.locator('.ds-thinking-step--running .ds-spinner').getAttribute('aria-hidden'), 'true');
    const sources = page.getByRole('list', { name: 'Sources' });
    assert.equal(await sources.getByRole('link').count(), 3, 'each source is a link');
    assert.equal((await sources.getByRole('listitem').last().textContent()).trim(), '+3 more');
    assert.match(await page.locator('.ds-thinking-state__note').textContent(), /Couldn’t open GitHub/);
    await page.goto(`${base}/iframe.html?id=patterns-thinking-state--done&viewMode=story`);
    const head = page.getByRole('button', { name: /Thought for 14 s · 6 sources · 4 steps/ });
    await head.waitFor();
    assert.equal(await head.getAttribute('aria-expanded'), 'false');
    assert.equal(await page.getByRole('list', { name: 'Steps' }).isVisible(), false, 'folded: the steps are hidden');
    await head.click();
    await settles(() => head.getAttribute('aria-expanded'), 'true');
    assert.equal(await page.getByRole('list', { name: 'Steps' }).locator(':scope > li').count(), 4, 'opened: every step');
    await page.keyboard.press('Enter');
    await settles(() => head.getAttribute('aria-expanded'), 'false', 'Enter folds it again');
  },
  'switch: role switch; label click and Space toggle; disabled does not; error describes it': async (page, base) => {
    await page.goto(`${base}/iframe.html?id=components-switch--with-description&viewMode=story`);
    const onboarding = page.getByRole('switch', { name: 'User onboarding emails' });
    await onboarding.waitFor();
    assert.equal(await onboarding.isChecked(), true);
    await page.getByText('User onboarding emails').click();
    await settles(() => onboarding.isChecked(), false, 'the label toggles it');
    await onboarding.focus();
    await page.keyboard.press('Space');
    await settles(() => onboarding.isChecked(), true, 'Space toggles it');
    const thumb = page.locator('.ds-switch__thumb').first();
    assert.notEqual(await thumb.evaluate((el) => getComputedStyle(el).translate), 'none', 'the thumb moves to the end when on');
    const disabled = page.getByRole('switch', { name: 'Product update notifications' });
    await page.getByText('Product update notifications').click({ force: true });
    assert.equal(await disabled.isChecked(), false, 'a disabled switch does not toggle');
    const disabledField = page.locator('.ds-field').filter({ has: disabled });
    assert.equal(await disabledField.locator('.ds-field__label').evaluate((el) => getComputedStyle(el).opacity), '0.5', 'the disabled label fades');
    assert.equal(await disabledField.locator('.ds-field__caption').evaluate((el) => getComputedStyle(el).opacity), '0.5', 'and so does its description');
    await page.goto(`${base}/iframe.html?id=components-switch--invalid&viewMode=story`);
    const twoFactor = page.getByRole('switch', { name: 'Two-factor authentication' });
    assert.equal(await twoFactor.getAttribute('aria-invalid'), 'true');
    assert.equal(await page.locator(`#${await twoFactor.getAttribute('aria-describedby')}`).textContent(), 'Required for admins — turn it on to keep the role.');
  },
  'popover: the trigger controls a named non-modal dialog; focus moves in; Escape returns focus; a click outside and a close button close it': async (page, base) => {
    await page.goto(`${base}/iframe.html?id=components-popover--filters&viewMode=story`);
    const trigger = page.getByRole('button', { name: 'Filters' });
    await trigger.waitFor();
    assert.equal(await trigger.getAttribute('aria-haspopup'), 'dialog');
    assert.equal(await trigger.getAttribute('aria-expanded'), 'false');
    assert.equal(await page.getByRole('dialog').count(), 0, 'closed at first');
    await trigger.click();
    const dialog = page.getByRole('dialog', { name: 'Filters' });
    await dialog.waitFor();
    assert.equal(await trigger.getAttribute('aria-expanded'), 'true');
    assert.equal(await trigger.getAttribute('aria-controls'), await dialog.getAttribute('id'), 'the trigger controls the panel');
    await settles(() => page.evaluate(() => document.activeElement?.getAttribute('type')), 'checkbox', 'focus moves to the first control');
    const [t, d] = await Promise.all([trigger.boundingBox(), dialog.boundingBox()]);
    assert.equal(Math.round(d.y - (t.y + t.height)), 4, '4 px under the trigger');
    assert.equal(Math.round(d.x), Math.round(t.x), 'align start lines up with the trigger');
    await page.keyboard.press('Escape');
    await settles(() => dialog.isVisible(), false, 'Escape closes it');
    await settles(() => page.evaluate(() => document.activeElement?.textContent.trim()), 'Filters', 'focus returns to the trigger');
    await trigger.click();
    await dialog.waitFor();
    await page.mouse.click(700, 500);
    await settles(() => dialog.isVisible(), false, 'a click outside closes it');
    await trigger.click();
    await dialog.waitFor();
    await dialog.getByRole('button', { name: 'Show 128 stays' }).click();
    await settles(() => dialog.isVisible(), false, 'a close button closes it');
    await settles(() => page.evaluate(() => document.activeElement?.textContent.trim()), 'Filters', 'and focus returns to the trigger');
  },
  'message actions: a named group; Copy turns into Copied; Regenerate adds a version to switch between; thumbs are pressed toggles, down asks what was wrong in a Popover; Read aloud is pressed while it reads': async (page, base) => {
    await page.goto(`${base}/iframe.html?id=patterns-message-actions--in-a-message&viewMode=story`);
    const bar = page.getByRole('group', { name: 'Message actions' });
    await bar.waitFor();
    await bar.getByRole('button', { name: 'Copy' }).click();
    await bar.getByRole('button', { name: 'Copied' }).waitFor();
    await settles(async () => (await bar.getByRole('status').textContent()).trim(), 'Copied', 'Copied is read out');
    await bar.getByRole('button', { name: 'Copy' }).waitFor({ timeout: 4000 });
    assert.equal(await bar.getByRole('group', { name: /^Version/ }).count(), 0, 'one version: no ‹ 1 / 1 ›');
    await bar.getByRole('button', { name: 'Regenerate' }).click();
    const versions = bar.getByRole('group', { name: 'Version 2 of 2' });
    await versions.waitFor();
    assert.equal(await versions.getByRole('button', { name: 'Next version' }).isDisabled(), true);
    await versions.getByRole('button', { name: 'Previous version' }).click();
    await bar.getByRole('group', { name: 'Version 1 of 2' }).waitFor();
    const good = bar.getByRole('button', { name: 'Good response' });
    const bad = bar.getByRole('button', { name: 'Bad response' });
    await good.click();
    await settles(() => good.getAttribute('aria-pressed'), 'true');
    await bad.click();
    await settles(() => good.getAttribute('aria-pressed'), 'false', 'one rating at a time');
    assert.equal(await bad.getAttribute('aria-pressed'), 'true');
    const dialog = page.getByRole('dialog', { name: 'What was wrong?' });
    await dialog.waitFor();
    assert.equal(await bad.getAttribute('aria-expanded'), 'true');
    await settles(() => page.evaluate(() => document.activeElement?.textContent.trim()), 'Not true', 'focus moves to the first reason');
    await dialog.getByRole('button', { name: 'Too long' }).click();
    await settles(() => dialog.isVisible(), false, 'a reason closes it');
    await settles(() => page.evaluate(() => document.activeElement?.getAttribute('aria-label')), 'Bad response', 'focus goes back to thumbs down');
    await bad.click();
    await settles(() => bad.getAttribute('aria-pressed'), 'false', 'pressed again takes the rating back');
    assert.equal(await dialog.isVisible(), false, 'and does not ask');
    const read = bar.getByRole('button', { name: 'Read aloud' });
    await read.click();
    await settles(() => read.getAttribute('aria-pressed'), 'true');
    await bar.locator('.ds-message-actions__wave').waitFor();
    assert.equal(await bar.locator('.ds-message-actions__wave').getAttribute('aria-hidden'), 'true');
    await read.click();
    await settles(() => bar.locator('.ds-message-actions__wave').count(), 0, 'Pause stops it');
    await page.goto(`${base}/iframe.html?id=patterns-message-actions--thumbs-down&viewMode=story`);
    await page.getByRole('button', { name: 'Bad response' }).click();
    await page.getByRole('dialog', { name: 'What was wrong?' }).waitFor();
    await settles(() => page.evaluate(() => document.activeElement?.textContent.trim()), 'Not true');
    await page.keyboard.press('Escape');
    await settles(() => page.getByRole('dialog', { name: 'What was wrong?' }).isVisible(), false, 'Escape closes it');
    assert.equal((await page.getByText(/^Rating:/).textContent()).trim(), 'Rating: down', 'the rating stays');
    await page.getByRole('button', { name: 'Good response' }).click();
    await settles(async () => (await page.getByText(/^Rating:/).textContent()).trim(), 'Rating: up');
  },
  'model picker: the trigger opens a named menu; arrows point at a model and show its speed, quality and cost; Enter chooses it; the thinking switch opens the effort and marks the trigger; Escape closes': async (page, base) => {
    await page.goto(`${base}/iframe.html?id=patterns-model-picker--alone&viewMode=story`);
    const trigger = page.getByRole('button', { name: 'Sonnet 4.5', exact: true });
    await trigger.waitFor();
    assert.equal(await trigger.getAttribute('aria-haspopup'), 'dialog');
    await trigger.click();
    const menu = page.getByRole('dialog', { name: 'Model' });
    await menu.waitFor();
    const list = menu.getByRole('listbox', { name: 'Models' });
    await settles(() => page.evaluate(() => document.activeElement?.getAttribute('role')), 'listbox', 'focus moves to the models');
    assert.equal(await list.getByRole('option', { selected: true }).getAttribute('id'), await list.getByRole('option', { name: 'Sonnet 4.5' }).getAttribute('id'), 'the chosen model is selected');
    await page.keyboard.press('ArrowDown');
    const sonnetId = await list.getByRole('option', { name: 'Sonnet 4.5' }).getAttribute('id');
    await settles(() => list.getAttribute('aria-activedescendant'), sonnetId, 'the first arrow points at the chosen model');
    await page.keyboard.press('ArrowDown');
    const opus = list.getByRole('option', { name: 'Opus 4.1' });
    const opusId = await opus.getAttribute('id');
    await settles(() => list.getAttribute('aria-activedescendant'), opusId);
    assert.equal(await opus.locator('dt').allTextContents().then((t) => t.join(',')), 'Speed,Quality,Cost', 'pointing shows the bars');
    assert.match(await opus.locator('dd').first().textContent(), /1 of 5/);
    assert.match(await menu.locator('.ds-model-picker__note').textContent(), /\$15/, 'the note follows the model pointed at');
    await page.keyboard.press('Enter');
    await settles(() => menu.isVisible(), false, 'Enter chooses and closes');
    const chosen = page.getByRole('button', { name: 'Opus 4.1', exact: true });
    await chosen.waitFor();
    await settles(() => page.evaluate(() => document.activeElement?.textContent.trim()), 'Opus 4.1', 'focus goes back to the trigger');
    await chosen.click();
    await menu.waitFor();
    const thinking = menu.getByRole('switch', { name: 'Extended thinking' });
    assert.equal(await menu.getByRole('group', { name: 'Effort' }).count(), 0, 'no effort while thinking is off');
    await thinking.click();
    await settles(() => thinking.isChecked(), true);
    const effort = menu.getByRole('group', { name: 'Effort' });
    await effort.waitFor();
    assert.equal(await effort.getByRole('button', { name: 'Medium' }).getAttribute('aria-pressed'), 'true');
    assert.match(await menu.locator('.ds-model-picker__note').textContent(), /\+ thinking$/);
    await page.getByRole('button', { name: 'Opus 4.1 · Thinking' }).waitFor();
    await page.keyboard.press('Escape');
    await settles(() => menu.isVisible(), false, 'Escape closes it');
    await page.getByRole('button', { name: 'Opus 4.1 · Thinking' }).click();
    await menu.getByRole('option', { name: 'Haiku 4.5' }).click();
    await page.getByRole('button', { name: 'Haiku 4.5 · Thinking' }).waitFor();
  },  'context window: a named region; the parts are a list with their sizes; Files opens into files to remove, which frees their room; Compact shows Compacting… and shrinks the conversation; nearly full turns amber': async (page, base) => {
    await page.goto(`${base}/iframe.html?id=patterns-context-window--in-use&viewMode=story`);
    const card = page.getByRole('region', { name: 'Context window' });
    await card.waitFor();
    assert.equal(await card.locator('.ds-context-window__amount').textContent(), '136.4K');
    assert.equal((await card.locator('.ds-context-window__share').textContent()).trim(), '68%');
    const parts = card.getByRole('list', { name: 'What fills the context' });
    assert.equal(await parts.locator(':scope > li').count(), 5);
    assert.equal(await card.locator('.ds-context-window__cell').count(), 200, 'every cell a slice of the window');
    assert.equal(await card.locator('.ds-context-window__cell:not(.ds-context-window__cell--free)').count(), 137, 'used cells follow the sizes');
    const files = card.getByRole('button', { name: 'Files' });
    assert.equal(await files.getAttribute('aria-expanded'), 'false');
    await files.click();
    await settles(() => files.getAttribute('aria-expanded'), 'true');
    const list = card.locator(`[id="${await files.getAttribute('aria-controls')}"]`);
    assert.equal(await list.locator('li').count(), 3);
    await card.getByRole('button', { name: 'Remove orders-2026.csv' }).click();
    await settles(() => list.locator('li').count(), 2, 'the file is gone');
    assert.equal(await card.locator('.ds-context-window__amount').textContent(), '94.8K', 'and its room is free');
    assert.equal(await card.locator('.ds-context-window__left').textContent(), '105.2K left');
    await card.getByRole('button', { name: 'Compact' }).click();
    await card.getByRole('status').filter({ hasText: 'Compacting…' }).waitFor();
    await card.getByRole('button', { name: 'Compact' }).waitFor({ timeout: 5000 });
    await settles(() => parts.locator(':scope > li').nth(3).locator('.ds-context-window__size').textContent(), '8.4K', 'the conversation is a summary now');
    await page.goto(`${base}/iframe.html?id=patterns-context-window--nearly-full&viewMode=story`);
    const full = page.getByRole('region', { name: 'Context window' });
    await full.waitFor();
    assert.equal(await full.locator('.ds-context-window__left').textContent(), '24.4K left · it will start forgetting soon');
    assert.match(await full.getByRole('button', { name: 'New chat' }).getAttribute('class'), /ds-button--default/, 'New chat comes first');
  },  'ai answer: an article named by its question; the sources a numbered list of links; related questions in a named group; streaming it is busy with Stop, stopped it says so with Continue, then it finishes': async (page, base) => {
    await page.goto(`${base}/iframe.html?id=patterns-ai-answer--answered&viewMode=story`);
    const answer = page.getByRole('article', { name: 'How long does a refund to a card take?' });
    await answer.waitFor();
    const sources = answer.getByRole('list', { name: 'Sources' });
    assert.equal(await sources.getByRole('link').count(), 3, 'each source is a link');
    assert.match((await sources.getByRole('link').first().textContent()).replace(/\s/g, ''), /^Notion1Refundpolicy/);
    assert.equal((await sources.getByRole('button').textContent()).replace(/\s/g, ''), '+3more');
    assert.equal(await answer.getByRole('group', { name: 'Related' }).getByRole('button').count(), 2);
    assert.equal(await answer.getByRole('group', { name: 'Message actions' }).count(), 1, 'the actions are Message Actions');
    assert.equal((await answer.locator('.ds-ai-answer__meta').textContent()).trim(), 'Answered in 3.4 s');
    await page.goto(`${base}/iframe.html?id=patterns-ai-answer--streaming&viewMode=story`);
    const live = page.getByRole('article', { name: 'How long does a refund to a card take?' });
    await live.waitFor();
    assert.equal(await live.getAttribute('aria-busy'), 'true', 'busy while it streams');
    assert.match(await live.getByRole('list', { name: 'Sources' }).textContent(), /Searching…/, 'the sources still load');
    await live.getByRole('button', { name: 'Stop' }).click();
    await live.getByText('Stopped – the answer may be incomplete').waitFor();
    await settles(() => live.getAttribute('aria-busy'), null);
    await live.getByRole('button', { name: 'Continue' }).click();
    await live.getByText('Answered in 3.4 s').waitFor({ timeout: 8000 });
    await settles(() => live.locator('.ds-ai-answer__caret').count(), 0, 'no caret once done');
  },  'cited answer: pointing at a citation lights its sentences and source and says where it is cited; a click opens the passage it quotes, the source chip shows it pressed and closes it again': async (page, base) => {
    await page.goto(`${base}/iframe.html?id=patterns-cited-answer--at-rest&viewMode=story`);
    const card = page.locator('.ds-cited-answer');
    await card.waitFor();
    const status = card.locator('.ds-cited-answer__status');
    assert.equal((await status.textContent()).trim(), 'Ask about any sentence');
    const cite2 = card.getByRole('button', { name: 'Source 2, Refund policy' }).first();
    await cite2.hover();
    await settles(async () => /ds-cited-answer--focused/.test(await card.getAttribute('class')), true, 'the rest fades');
    assert.equal(await card.locator('.ds-cited-answer__claim[data-lit]').count(), 2, 'both sentences citing source 2 light up');
    assert.equal((await status.textContent()).trim(), 'Refund policy · cited in 2 sentences');
    assert.equal((await card.locator('.ds-cited-answer__source[data-active]').textContent()).replace(/\s/g, ''), 'Refundpolicy2');
    await page.mouse.move(0, 0);
    await settles(async () => (await status.textContent()).trim(), 'Ask about any sentence', 'moving away puts it back');
    const cite1 = card.getByRole('button', { name: 'Source 1, Help center' });
    await cite1.click();
    await settles(() => cite1.getAttribute('aria-expanded'), 'true');
    const passage = card.locator(`[id="${await cite1.getAttribute('aria-controls')}"]`);
    assert.match(await passage.locator('figcaption').textContent(), /Help center · Refunds and returns/);
    assert.match(await passage.locator('blockquote').textContent(), /within 5–10 working days/);
    await page.mouse.move(0, 0);
    const chip = card.getByRole('list', { name: 'Sources' }).getByRole('button', { name: /Help center/ });
    assert.equal(await chip.getAttribute('aria-pressed'), 'true', 'its source shows it is open');
    await settles(async () => (await status.textContent()).trim(), 'Help center · cited in 1 sentence');
    await chip.click();
    await settles(() => card.locator('figure').count(), 0, 'pressing the source again closes the passage');
    // The passage closing moves the chips under the mouse; take the mouse away so only focus points.
    await page.mouse.move(0, 0);
    await page.evaluate(() => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))));
    await page.keyboard.press('Shift+Tab');
    assert.equal(await page.evaluate(() => document.activeElement?.getAttribute('aria-label')), 'Source 3, #support', 'the citations are reachable with Tab, the last one just before the sources');
    await settles(async () => (await status.textContent()).trim(), '#support · cited in 1 sentence', 'focus lights it as pointing does');
  },  'stepper: a named ordered list; the current step is aria-current="step"; done and failed steps say so; Next and Back move the current step': async (page, base) => {
    await page.goto(`${base}/iframe.html?id=components-stepper--in-a-form&viewMode=story`);
    const stepper = page.getByRole('list', { name: 'Create a workspace' });
    await stepper.waitFor();
    assert.equal(await stepper.evaluate((el) => el.localName), 'ol');
    const steps = stepper.getByRole('listitem');
    assert.equal(await steps.count(), 4);
    const current = () => stepper.locator('[aria-current="step"] .ds-stepper__label').textContent();
    assert.equal(await current(), 'Account');
    assert.equal(await page.getByRole('button', { name: 'Back' }).isDisabled(), true, 'Back is off on the first step');
    await page.getByRole('button', { name: 'Next' }).click();
    await settles(current, 'Workspace', 'Next moves the current step');
    assert.match(await steps.first().textContent(), /Account.*, completed/, 'a done step says so');
    assert.equal(await steps.first().locator('.ds-stepper__indicator').getAttribute('aria-hidden'), 'true', 'the check is only a picture');
    await page.getByRole('button', { name: 'Back' }).click();
    await settles(current, 'Account', 'Back moves it back');
    await page.goto(`${base}/iframe.html?id=components-stepper--with-error&viewMode=story`);
    const failed = page.getByRole('list', { name: 'Import' }).getByRole('listitem').nth(1);
    await failed.waitFor();
    assert.match(await failed.textContent(), /Check columns.*2 columns have no name.*, error/, 'a failed step says so');
    assert.equal(await page.getByRole('list', { name: 'Import' }).getByRole('listitem').nth(2).locator('.ds-stepper__indicator').textContent(), '3', 'steps are numbered by their place');
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
