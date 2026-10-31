import type { MouseEvent, ReactElement } from 'react';
import { ModalClose, ModalPanel, type ModalPanelProps } from '../Dialog/ModalPanel';

// Styles live in @helloantek/ds-css (classes ds-sheet*). The behaviour (a native modal <dialog>) is shared with
// Dialog in ModalPanel.

/** Figma "Side": the edge the panel slides in from. */
export type SheetSide = 'right' | 'left' | 'top' | 'bottom';

export interface SheetProps extends ModalPanelProps {
  /** Figma Side (default `right`). Left and right are full-height and 384 px wide; top and bottom full-width. */
  side?: SheetSide;
}

/** Figma "Sheet": a modal panel along an edge of the screen, with a header, any content and a footer of actions. */
export function Sheet({ side = 'right', ...props }: SheetProps) {
  return <ModalPanel {...props} block="ds-sheet" modifiers={[`ds-sheet--${side}`]} />;
}

/** Wraps a button that closes the sheet after its own click (unless it calls `event.preventDefault()`). */
export function SheetClose(props: { children: ReactElement<{ onClick?: (event: MouseEvent<HTMLElement>) => void }> }) {
  return <ModalClose {...props} />;
}
