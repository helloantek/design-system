import type { MouseEvent, ReactElement } from 'react';
import { ModalClose, ModalPanel, type ModalPanelProps } from './ModalPanel';

// Styles live in @helloantek/ds-css (classes ds-dialog*). The behaviour (a native modal <dialog>) is shared with
// Sheet in ModalPanel.

export type DialogProps = ModalPanelProps;

/** Figma "Dialog": a modal window with a header, any content and a footer of actions. */
export function Dialog(props: DialogProps) {
  return <ModalPanel {...props} block="ds-dialog" />;
}

/** Wraps a button that closes the dialog after its own click (unless it calls `event.preventDefault()`). */
export function DialogClose(props: { children: ReactElement<{ onClick?: (event: MouseEvent<HTMLElement>) => void }> }) {
  return <ModalClose {...props} />;
}
