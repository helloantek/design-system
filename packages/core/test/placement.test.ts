import { test } from 'node:test';
import assert from 'node:assert/strict';
import { computePlacement, type Box } from '../src/index.ts';

const box = (left: number, top: number, width: number, height: number): Box => ({ left, top, width, height, right: left + width, bottom: top + height });
const viewport = { width: 900, height: 600 };

test('a popup with room stays on its side, unshifted', () => {
  const anchor = box(100, 100, 120, 32);
  assert.deepEqual(computePlacement({ anchor, popup: box(100, 136, 200, 150), viewport, side: 'bottom', preferred: 'bottom' }), { x: 0, y: 0 });
});

test('a menu at the bottom flips to the top', () => {
  const anchor = box(100, 540, 120, 32);
  assert.deepEqual(computePlacement({ anchor, popup: box(100, 576, 200, 150), viewport, side: 'bottom', preferred: 'bottom' }), { flipTo: 'top' });
});

test('without flip it stays and only shifts', () => {
  const anchor = box(800, 540, 80, 32);
  assert.deepEqual(computePlacement({ anchor, popup: box(800, 576, 200, 150), viewport, side: 'bottom', preferred: 'bottom', flip: false }), { x: -108, y: 0 });
});

test('a popup over the right edge shifts left to stay 8 px inside', () => {
  const anchor = box(760, 100, 120, 32);
  assert.deepEqual(computePlacement({ anchor, popup: box(700, 136, 240, 100), viewport, side: 'bottom', preferred: 'bottom' }), { x: -48, y: 0 });
});

test('a list taller than either side is capped to the room on its side, never under 96 px', () => {
  const short = { width: 900, height: 300 };
  const anchor = box(16, 252, 200, 32);
  // Laid out on top (more room there), 4 px gap: room is 252 − 8 = 244, minus the gap.
  assert.deepEqual(computePlacement({ anchor, popup: box(16, -152, 200, 400), viewport: short, side: 'top', preferred: 'bottom', constrain: true }), { x: 0, y: 0, maxBlockSize: 240 });
  const tiny = { width: 900, height: 120 };
  const low = box(16, 40, 200, 32);
  assert.equal((computePlacement({ anchor: low, popup: box(16, 76, 200, 400), viewport: tiny, side: 'bottom', preferred: 'bottom', constrain: true }) as { maxBlockSize?: number }).maxBlockSize, 96);
});

test('a submenu at the right edge flips left; a side popup shifts vertically', () => {
  const anchor = box(800, 100, 90, 32);
  assert.deepEqual(computePlacement({ anchor, popup: box(894, 100, 180, 200), viewport, side: 'right', preferred: 'right' }), { flipTo: 'left' });
  const low = box(400, 560, 90, 32);
  assert.deepEqual(computePlacement({ anchor: low, popup: box(494, 560, 180, 100), viewport, side: 'right', preferred: 'right' }), { x: 0, y: -68 });
});
