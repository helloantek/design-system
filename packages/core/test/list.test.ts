import { test } from 'node:test';
import assert from 'node:assert/strict';
import { firstEnabled, lastEnabled, moveEnabled, pageEnabled, Typeahead } from '../src/index.ts';

// Items 0–29; 2, 3 and 29 are disabled.
const count = 30;
const enabled = (i: number) => ![2, 3, 29].includes(i);

test('moving skips disabled items and stops at the ends', () => {
  assert.equal(moveEnabled(count, enabled, 1, 1), 4);
  assert.equal(moveEnabled(count, enabled, 4, -1), 1);
  assert.equal(moveEnabled(count, enabled, 28, 1), 28, 'no enabled item after: stays');
  assert.equal(firstEnabled(count, enabled), 0);
  assert.equal(lastEnabled(count, enabled), 28);
  assert.equal(firstEnabled(2, () => false), -1);
});

test('paging moves a page: to the enabled item just inside current ± 10', () => {
  assert.equal(pageEnabled(count, enabled, 0, 1), 9);
  assert.equal(pageEnabled(count, enabled, 25, 1), 28, 'clamped to the last enabled item');
  assert.equal(pageEnabled(count, enabled, 12, -1), 4, 'item 2 is disabled: the next enabled one after it');
});

test('type-ahead: a search across keystrokes, cycling on one letter, a pause starts over', () => {
  const labels = ['Apple', 'Apricot', 'Banana', 'Blueberry', 'Cherry', 'Bean'];
  const all = () => true;
  const t = new Typeahead();
  assert.equal(t.find('b', labels, all, -1, 1000), 2);
  assert.equal(t.find('l', labels, all, 2, 1100), 3, '"bl" within 500 ms');
  assert.equal(t.find('b', labels, all, 3, 2000), 5, 'after a pause, "b" again: the next B after Blueberry');
  assert.equal(t.find('b', labels, all, 5, 2100), 2, '"bb" cycles through B items, wrapping');
  t.reset();
  assert.equal(t.find('a', labels, (i) => i !== 0, -1, 2200), 1, 'disabled items are skipped');
  assert.equal(t.find('z', labels, all, 1, 3000), -1);
});
