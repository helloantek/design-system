import { useEffect, useRef, useState, type CSSProperties, type FocusEvent, type ReactElement, type ReactNode } from 'react';

// Styles live in @helloantek/ds-css (classes ds-hover-card*). A hover card previews what is behind a link for sighted
// pointer and keyboard users: it opens after the pointer rests on the trigger (or at once on keyboard focus), stays
// while the pointer or focus is on the trigger or the card, and Escape closes it. The link itself must make sense
// without it — the card adds nothing a screen reader needs.

/** Where the card opens, 4 px from the trigger. */
export type HoverCardSide = 'bottom' | 'top' | 'left' | 'right';
/** How the card lines up with the trigger along that side. */
export type HoverCardAlign = 'center' | 'start' | 'end';

export interface HoverCardProps {
  /** The element the card previews, usually a link; it should take focus. */
  trigger: ReactElement;
  /** Figma "content": a person, a page, an event… */
  children: ReactNode;
  /** Default `bottom`. */
  side?: HoverCardSide;
  /** Default `center`. */
  align?: HoverCardAlign;
  /** Card width (any CSS length; default 288 px, as in Figma). */
  width?: string;
  /** Milliseconds the pointer rests on the trigger before the card opens (default 700). */
  openDelay?: number;
  /** Milliseconds after the pointer leaves before the card closes (default 300), time to move onto the card. */
  closeDelay?: number;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

/** Figma "Hover Card". */
export function HoverCard({ trigger, children, side = 'bottom', align = 'center', width, openDelay = 700, closeDelay = 300, open: openProp, defaultOpen = false, onOpenChange, className }: HoverCardProps) {
  const [uncontrolled, setUncontrolled] = useState(defaultOpen);
  const open = openProp ?? uncontrolled;
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const setOpen = (next: boolean) => {
    clearTimeout(timer.current);
    if (next === open) return;
    if (openProp === undefined) setUncontrolled(next);
    onOpenChange?.(next);
  };
  const later = (next: boolean, ms: number) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(next), ms);
  };
  useEffect(() => () => clearTimeout(timer.current), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  });

  return (
    <span
      className="ds-hover-card"
      onMouseEnter={() => (open ? clearTimeout(timer.current) : later(true, openDelay))}
      onMouseLeave={() => (open ? later(false, closeDelay) : clearTimeout(timer.current))}
      onFocus={(event: FocusEvent<HTMLElement>) => {
        // Keyboard focus only; a click focuses the link too and then navigates.
        if (event.target.matches(':focus-visible')) setOpen(true);
      }}
      onBlur={(event: FocusEvent<HTMLElement>) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      {trigger}
      <div
        hidden={!open}
        className={['ds-hover-card__content', side !== 'bottom' && `ds-hover-card__content--${side}`, align !== 'center' && `ds-hover-card__content--${align}`, className].filter(Boolean).join(' ')}
        style={width !== undefined ? ({ '--hover-card-width': width } as CSSProperties) : undefined}
      >
        {children}
      </div>
    </span>
  );
}
