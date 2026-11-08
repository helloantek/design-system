import { useEffect, useLayoutEffect, useRef, useState, type RefObject } from 'react';

// Keeps an open popup (a menu, a panel, a card, a tooltip) inside the viewport. The popup hangs from its positioned
// wrapper with CSS (`top: calc(100% + gap)` and so on); this measures it once it is laid out, before it is painted:
// - it flips to the opposite side when the preferred one has no room and the other has more;
// - it shifts along the side by `--popup-shift-x` / `--popup-shift-y` (the CSS adds them to `transform`) so it stays
//   8 px from the viewport's edges;
// - with `constrain`, it sets `--popup-max-block-size` when neither side fits its height (a list then scrolls).
// It measures again when the page scrolls or resizes while the popup is open.

export type PopupSide = 'top' | 'bottom' | 'left' | 'right';

const MARGIN = 8;
const OPPOSITE: Record<PopupSide, PopupSide> = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' };
const vertical = (side: PopupSide) => side === 'top' || side === 'bottom';

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
    const vw = document.documentElement.clientWidth;
    const vh = document.documentElement.clientHeight;
    const a = anchor.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    const room: Record<PopupSide, number> = { top: a.top - MARGIN, bottom: vh - a.bottom - MARGIN, left: a.left - MARGIN, right: vw - a.right - MARGIN };
    const gap = Math.max(0, side === 'bottom' ? r.top - a.bottom : side === 'top' ? a.top - r.bottom : side === 'right' ? r.left - a.right : a.left - r.right);
    const size = vertical(preferred) ? r.height : r.width;

    if (flip) {
      const other = OPPOSITE[preferred];
      const fits = (s: PopupSide) => size + gap <= room[s];
      const best = fits(preferred) ? preferred : fits(other) || room[other] > room[preferred] ? other : preferred;
      if (best !== side) {
        setSide(best);
        return;
      }
    }

    if (vertical(side)) {
      const dx = r.right > vw - MARGIN ? Math.max(MARGIN - r.left, vw - MARGIN - r.right) : r.left < MARGIN ? MARGIN - r.left : 0;
      if (dx) el.style.setProperty('--popup-shift-x', `${Math.round(dx)}px`);
      if (constrain && r.height + gap > room[side]) el.style.setProperty('--popup-max-block-size', `${Math.max(96, Math.floor(room[side] - gap))}px`);
    } else {
      const dy = r.bottom > vh - MARGIN ? Math.max(MARGIN - r.top, vh - MARGIN - r.bottom) : r.top < MARGIN ? MARGIN - r.top : 0;
      if (dy) el.style.setProperty('--popup-shift-y', `${Math.round(dy)}px`);
    }
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
