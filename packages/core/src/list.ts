// List navigation shared by listboxes and menus: moving between enabled items, the first and last enabled item,
// paging, and type-ahead (typing selects the next item whose label starts with the typed text).

/** How many items Page Up / Page Down move. */
export const PAGE_SIZE = 10;

/** The next enabled index from `from` in direction `step` (1 or -1); `from` itself when there is none, or -1. */
export function moveEnabled(count: number, isEnabled: (index: number) => boolean, from: number, step: 1 | -1): number {
  const enabled = (i: number) => i >= 0 && i < count && isEnabled(i);
  for (let i = from + step; i >= 0 && i < count; i += step) if (enabled(i)) return i;
  return enabled(from) ? from : -1;
}

export const firstEnabled = (count: number, isEnabled: (index: number) => boolean) => moveEnabled(count, isEnabled, -1, 1);
export const lastEnabled = (count: number, isEnabled: (index: number) => boolean) => moveEnabled(count, isEnabled, count, -1);

/**
 * Page Down (`step` 1) or Page Up (-1) from `current`: the nearest enabled item inside `current ± PAGE_SIZE`, searching
 * back towards `current` (from 0, Page Down lands on 9 when it is enabled).
 */
export function pageEnabled(count: number, isEnabled: (index: number) => boolean, current: number, step: 1 | -1): number {
  return step === 1 ? moveEnabled(count, isEnabled, Math.min(current + PAGE_SIZE, count), -1) : moveEnabled(count, isEnabled, Math.max(current - PAGE_SIZE, -1), 1);
}

/**
 * Type-ahead state: characters typed within `delay` ms form one search; any other key (`reset`) starts a new one;
 * repeating one letter cycles through the items that start with it.
 */
export class Typeahead {
  private text = '';
  private at = 0;
  private readonly delay: number;

  constructor(delay = 500) {
    this.delay = delay;
  }

  reset() {
    this.text = '';
  }

  /**
   * Adds `char` and returns the index of the next enabled item after `start` (wrapping) whose label starts with the
   * search, or -1.
   */
  find(char: string, labels: readonly string[], isEnabled: (index: number) => boolean, start: number, now = Date.now()): number {
    this.text = now - this.at > this.delay ? char : this.text + char;
    this.at = now;
    const query = this.text.toLowerCase();
    const cycling = query.split('').every((c) => c === query[0]);
    const prefix = cycling ? query[0] : query;
    for (let n = 0; n < labels.length; n++) {
      const i = (start + 1 + n) % labels.length;
      if (isEnabled(i) && labels[i].toLowerCase().startsWith(prefix)) return i;
    }
    return -1;
  }
}
