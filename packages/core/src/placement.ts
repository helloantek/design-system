// Popup placement as pure maths: where an open popup (menu, list, panel, card, tooltip) goes so it stays inside the
// viewport. An adapter measures the anchor and the popup (with no shift or cap applied), calls computePlacement, and
// applies the result: a flip re-renders the popup on the other side and measures again; otherwise it sets the shift
// (`--popup-shift-x` / `--popup-shift-y`) and, for lists, the cap (`--popup-max-block-size`).

export type PopupSide = 'top' | 'bottom' | 'left' | 'right';

export interface Box {
  top: number;
  right: number;
  bottom: number;
  left: number;
  width: number;
  height: number;
}

export interface PlacementInput {
  /** The popup's positioned wrapper (its offsetParent), in viewport coordinates. */
  anchor: Box;
  /** The popup as laid out on `side`, without shift or cap. */
  popup: Box;
  /** The viewport's size (document.documentElement.clientWidth / clientHeight). */
  viewport: { width: number; height: number };
  /** The side the popup is laid out on now. */
  side: PopupSide;
  /** The side it prefers. */
  preferred: PopupSide;
  /** Flip to the opposite side when the preferred one has no room (default true). */
  flip?: boolean;
  /** Cap the popup's height to the room on its side (lists that scroll; default false). */
  constrain?: boolean;
}

export type PlacementResult =
  /** Lay the popup out on `side` and measure again. */
  | { flipTo: PopupSide }
  /** Keep the side; shift by `x` / `y` px and cap the height at `maxBlockSize` px (when set). */
  | { flipTo?: undefined; x: number; y: number; maxBlockSize?: number };

/** Distance kept from the viewport's edges. */
export const POPUP_MARGIN = 8;
/** A capped list is never shorter than this. */
export const POPUP_MIN_BLOCK_SIZE = 96;

export const OPPOSITE: Record<PopupSide, PopupSide> = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' };
export const isVertical = (side: PopupSide) => side === 'top' || side === 'bottom';

export function computePlacement({ anchor: a, popup: r, viewport, side, preferred, flip = true, constrain = false }: PlacementInput): PlacementResult {
  const { width: vw, height: vh } = viewport;
  const M = POPUP_MARGIN;
  const room: Record<PopupSide, number> = { top: a.top - M, bottom: vh - a.bottom - M, left: a.left - M, right: vw - a.right - M };
  const gap = Math.max(0, side === 'bottom' ? r.top - a.bottom : side === 'top' ? a.top - r.bottom : side === 'right' ? r.left - a.right : a.left - r.right);
  const size = isVertical(preferred) ? r.height : r.width;

  if (flip) {
    const other = OPPOSITE[preferred];
    const fits = (s: PopupSide) => size + gap <= room[s];
    const best = fits(preferred) ? preferred : fits(other) || room[other] > room[preferred] ? other : preferred;
    if (best !== side) return { flipTo: best };
  }

  if (isVertical(side)) {
    const dx = r.right > vw - M ? Math.max(M - r.left, vw - M - r.right) : r.left < M ? M - r.left : 0;
    const capped = constrain && r.height + gap > room[side];
    return { x: Math.round(dx), y: 0, ...(capped && { maxBlockSize: Math.max(POPUP_MIN_BLOCK_SIZE, Math.floor(room[side] - gap)) }) };
  }
  const dy = r.bottom > vh - M ? Math.max(M - r.top, vh - M - r.bottom) : r.top < M ? M - r.top : 0;
  return { x: 0, y: Math.round(dy) };
}
