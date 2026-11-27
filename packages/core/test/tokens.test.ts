import assert from 'node:assert/strict';
import { test } from 'node:test';
import { contextCells, formatTokens } from '../src/tokens.ts';

test('formatTokens writes K and M with one decimal, none when whole', () => {
  assert.equal(formatTokens(136400), '136.4K');
  assert.equal(formatTokens(200000), '200K');
  assert.equal(formatTokens(1250000), '1.3M');
  assert.equal(formatTokens(512), '512');
});

test('contextCells splits the cells in proportion, the rest to what is free, by the largest remainder', () => {
  assert.deepEqual(contextCells([50, 50], 200, 8), [2, 2, 4]);
  const counts = contextCells([136400, 3000], 200000, 200);
  assert.equal(counts.reduce((a, b) => a + b, 0), 200, 'every cell is given out');
  assert.deepEqual(counts, [136, 3, 61]);
  assert.deepEqual(contextCells([1, 1, 1], 3, 2), [1, 1, 0, 0], 'ties go to the first; nothing is free');
});
