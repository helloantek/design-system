import { useRef, type MouseEvent, type PointerEvent, type ReactElement } from 'react';
import { ModalClose, ModalPanel, useModalClose, type ModalPanelProps } from '../Dialog/ModalPanel';

// Styles live in @helloantek/ds-css (classes ds-drawer*). The behaviour (a native modal <dialog>) is shared with
// Dialog and Sheet in ModalPanel; the Drawer adds the swipe handle, which closes it when dragged far enough.

/** Figma "Direction": `down` sits at the bottom (it is swiped down to close), `up` at the top, `side` on the side. */
export type DrawerDirection = 'down' | 'up' | 'side';

export interface DrawerProps extends Omit<ModalPanelProps, 'closeButton'> {
  /** Figma Direction (default `down`). */
  direction?: DrawerDirection;
  /** Figma "Swipe handle" (default `true`; down and up only): drag it towards the edge to close the drawer. */
  swipeHandle?: boolean;
  /** A Close button in the header's corner (default `false`; Figma's Drawer has none). */
  closeButton?: boolean;
}

// Dragging the handle moves the panel with the pointer; letting go past a quarter of its height (or after a quick
// flick) closes it, otherwise it springs back.
function SwipeHandle({ direction }: { direction: 'down' | 'up' }) {
  const close = useModalClose();
  const drag = useRef<{ y: number; t: number; panel: HTMLElement } | null>(null);
  const sign = direction === 'down' ? 1 : -1;
  const offset = (event: PointerEvent) => Math.max(0, (event.clientY - (drag.current?.y ?? event.clientY)) * sign);

  return (
    <div
      className="ds-drawer__handle"
      aria-hidden
      onPointerDown={(event) => {
        const panel = event.currentTarget.closest('dialog');
        if (!panel) return;
        event.currentTarget.setPointerCapture(event.pointerId);
        drag.current = { y: event.clientY, t: event.timeStamp, panel };
        panel.classList.add('ds-drawer--dragging');
      }}
      onPointerMove={(event) => {
        if (drag.current) drag.current.panel.style.translate = `0 ${offset(event) * sign}px`;
      }}
      onPointerUp={(event) => {
        const d = drag.current;
        if (!d) return;
        const distance = offset(event);
        const speed = distance / Math.max(1, event.timeStamp - d.t);
        d.panel.classList.remove('ds-drawer--dragging');
        d.panel.style.translate = '';
        drag.current = null;
        if (distance > d.panel.offsetHeight / 4 || (distance > 24 && speed > 0.5)) close();
      }}
      onPointerCancel={() => {
        if (!drag.current) return;
        drag.current.panel.classList.remove('ds-drawer--dragging');
        drag.current.panel.style.translate = '';
        drag.current = null;
      }}
    >
      <span className="ds-drawer__bar" />
    </div>
  );
}

/** Figma "Drawer": a rounded modal panel that comes in from the bottom, the top or the side, with a swipe handle. */
export function Drawer({ direction = 'down', swipeHandle = true, closeButton = false, ...props }: DrawerProps) {
  const handle = swipeHandle && direction !== 'side' ? <SwipeHandle direction={direction} /> : undefined;
  return (
    <ModalPanel
      {...props}
      closeButton={closeButton}
      block="ds-drawer"
      modifiers={[`ds-drawer--${direction}`]}
      before={direction === 'down' ? handle : undefined}
      after={direction === 'up' ? handle : undefined}
    />
  );
}

/** Wraps a button that closes the drawer after its own click (unless it calls `event.preventDefault()`). */
export function DrawerClose(props: { children: ReactElement<{ onClick?: (event: MouseEvent<HTMLElement>) => void }> }) {
  return <ModalClose {...props} />;
}
