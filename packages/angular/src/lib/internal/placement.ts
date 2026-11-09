import { DestroyRef, afterRenderEffect, effect, inject, signal, untracked, type Signal } from '@angular/core';
import { computePlacement, type PopupSide } from '@helloantek/ds-core';

/**
 * Keeps an open popup (menu, panel, card, tooltip) inside the viewport, as ds-react's usePlacement does, with
 * ds-core's computePlacement for the maths. The popup hangs from its positioned wrapper with CSS; after each render
 * while it is open this measures it: a flip lays it out on the other side and measures again, otherwise it sets
 * `--popup-shift-x` / `--popup-shift-y` and, with `constrain`, `--popup-max-block-size` (keeping a list's scroll).
 * It measures again when the page scrolls (not the popup itself) or the window resizes. Call in an injection context;
 * returns the side the popup is on.
 */
export function popupPlacement(
  popup: () => HTMLElement | undefined,
  open: () => boolean,
  preferred: () => PopupSide,
  { flip = true, constrain = false }: { flip?: boolean; constrain?: boolean } = {},
): Signal<PopupSide> {
  const side = signal<PopupSide>(untracked(preferred));
  const pass = signal(0);
  let scroll: number | null = null;

  // Back to the preferred side whenever the popup opens or the preference changes.
  effect(() => {
    const wanted = preferred();
    if (open()) side.set(wanted);
    else scroll = null;
  });

  afterRenderEffect(() => {
    pass();
    const current = side();
    const el = popup();
    const anchor = el?.offsetParent;
    if (!open() || !el || !anchor) return;
    scroll ??= el.scrollTop;
    el.style.removeProperty('--popup-shift-x');
    el.style.removeProperty('--popup-shift-y');
    el.style.removeProperty('--popup-max-block-size');
    const viewport = { width: document.documentElement.clientWidth, height: document.documentElement.clientHeight };
    const placed = computePlacement({ anchor: anchor.getBoundingClientRect(), popup: el.getBoundingClientRect(), viewport, side: current, preferred: untracked(preferred), flip, constrain });
    if (placed.flipTo) {
      side.set(placed.flipTo);
      return;
    }
    if (placed.x) el.style.setProperty('--popup-shift-x', `${placed.x}px`);
    if (placed.y) el.style.setProperty('--popup-shift-y', `${placed.y}px`);
    if (placed.maxBlockSize !== undefined) el.style.setProperty('--popup-max-block-size', `${placed.maxBlockSize}px`);
    if (scroll !== null && el.scrollTop !== scroll) el.scrollTop = scroll;
    scroll = null;
  });

  // Again when the page scrolls or the window resizes while it is open.
  let frame = 0;
  const again = (event: Event) => {
    if (!open() || (event.target instanceof Node && popup()?.contains(event.target))) return;
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      side.set(untracked(preferred));
      pass.update((n) => n + 1);
    });
  };
  window.addEventListener('resize', again);
  window.addEventListener('scroll', again, true);
  inject(DestroyRef).onDestroy(() => {
    cancelAnimationFrame(frame);
    window.removeEventListener('resize', again);
    window.removeEventListener('scroll', again, true);
  });

  return side.asReadonly();
}
