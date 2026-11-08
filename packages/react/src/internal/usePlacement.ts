import { useEffect, useLayoutEffect, useRef, useState, type RefObject } from 'react';
import { computePlacement, type PopupSide } from '@helloantek/ds-core';

// Keeps an open popup (a menu, a panel, a card, a tooltip) inside the viewport. The popup hangs from its positioned
// wrapper with CSS (`top: calc(100% + gap)` and so on); this measures it once it is laid out, before it is painted:
// - it flips to the opposite side when the preferred one has no room and the other has more;
// - it shifts along the side by `--popup-shift-x` / `--popup-shift-y` (the CSS adds them to `transform`) so it stays
//   8 px from the viewport's edges;
// - with `constrain`, it sets `--popup-max-block-size` when neither side fits its height (a list then scrolls).
// It measures again when the page scrolls or resizes while the popup is open. The maths is ds-core's computePlacement.

export type { PopupSide };

export interface PlacementOptions {
  /** Flip to the opposite side when the preferred one has no room (default true). */
  flip?: boolean;
  /** Cap the popup's height to the room on its side (for lists that scroll; default false). */
  constrain?: boolean;
}

/** The side the popup should open on: `preferred`, or its opposite when that one has the room. */
export function usePlacement(popup: RefObject<HTMLElement | null>, open: boolean, preferred: PopupSide, { flip = true, constrain = false }: PlacementOptions = {}): PopupSide {
  const [side, setSide] = useState(preferred);
  const [pass, setPass] = useState(0);
  // The list's scroll when a measurement started; a flip re-renders mid-measurement, so it outlives one effect run.
  const scroll = useRef<number | null>(null);

  // Back to the preferred side whenever the popup opens or the preference changes.
  useLayoutEffect(() => {
    if (open) setSide(preferred);
    else scroll.current = null;
  }, [open, preferred]);

  useLayoutEffect(() => {
    const el = popup.current;
    const anchor = el?.offsetParent;
    if (!open || !el || !anchor) return;
    // Measuring uncaps a list for a moment, which resets its scroll; put it back once placed (before paint).
    scroll.current ??= el.scrollTop;
    const restore = () => {
      if (scroll.current !== null && el.scrollTop !== scroll.current) el.scrollTop = scroll.current;
      scroll.current = null;
    };
    el.style.removeProperty('--popup-shift-x');
    el.style.removeProperty('--popup-shift-y');
    el.style.removeProperty('--popup-max-block-size');
    const viewport = { width: document.documentElement.clientWidth, height: document.documentElement.clientHeight };
    const placed = computePlacement({ anchor: anchor.getBoundingClientRect(), popup: el.getBoundingClientRect(), viewport, side, preferred, flip, constrain });
    if (placed.flipTo) {
      setSide(placed.flipTo);
      return;
    }
    if (placed.x) el.style.setProperty('--popup-shift-x', `${placed.x}px`);
    if (placed.y) el.style.setProperty('--popup-shift-y', `${placed.y}px`);
    if (placed.maxBlockSize !== undefined) el.style.setProperty('--popup-max-block-size', `${placed.maxBlockSize}px`);
    restore();
  }, [open, side, preferred, flip, constrain, pass, popup]);

  // Again when the page scrolls (not the popup itself) or the window resizes while it is open.
  useEffect(() => {
    if (!open) return;
    let frame = 0;
    const again = (event: Event) => {
      if (event.target instanceof Node && popup.current?.contains(event.target)) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setSide(preferred);
        setPass((n) => n + 1);
      });
    };
    window.addEventListener('resize', again);
    window.addEventListener('scroll', again, true);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', again);
      window.removeEventListener('scroll', again, true);
    };
  }, [open, preferred, popup]);

  return side;
}
