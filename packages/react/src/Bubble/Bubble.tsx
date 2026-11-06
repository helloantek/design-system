import { createContext, useContext, useId, useLayoutEffect, useRef, useState, type CSSProperties, type HTMLAttributes, type ReactNode, type Ref } from 'react';

// Styles live in @helloantek/ds-css (classes ds-bubble*); these components only render the markup.

const GroupAlign = createContext<'start' | 'end' | undefined>(undefined);

const cx = (...names: (string | false | undefined)[]) => names.filter(Boolean).join(' ');

/** Figma "Variant". */
export type BubbleVariant = 'default' | 'muted' | 'ghost' | 'destructive';
/** Which corner the reactions sit on. */
export type BubbleReactionsPlacement = 'bottom-end' | 'bottom-start' | 'top-start' | 'top-end';

export interface BubbleProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  ref?: Ref<HTMLDivElement>;
  /** Figma "Text": the message. */
  children: ReactNode;
  /** Figma Variant (default `default`: yours, on the card; `muted` for theirs, `ghost` for plain text, `destructive`). */
  variant?: BubbleVariant;
  /** `start` (theirs) or `end` (yours); defaults to the group's alignment. */
  align?: 'start' | 'end';
  /** Figma "Reactions": emoji or a short reply shown in a pill on a corner of the bubble. */
  reactions?: ReactNode;
  /** The corner for the reactions (default bottom-end, or bottom-start for an end-aligned bubble, as in Figma). */
  reactionsPlacement?: BubbleReactionsPlacement;
  /** Show only the first lines of a long message with a "Show more" toggle (`true` is 8 lines, as in Figma). */
  collapsible?: boolean | number;
  /** Labels of the toggle (default "Show more" / "Show less"). */
  moreLabel?: ReactNode;
  lessLabel?: ReactNode;
}

const chevron = (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="m4 6 4 4 4-4" />
  </svg>
);

/** Figma "Bubble": a chat message. Put a run of messages from one sender in a `BubbleGroup`. */
export function Bubble({ children, variant = 'default', align: alignProp, reactions, reactionsPlacement, collapsible, moreLabel = 'Show more', lessLabel = 'Show less', className, style, ...rest }: BubbleProps) {
  const groupAlign = useContext(GroupAlign);
  const align = alignProp ?? groupAlign;
  const textId = useId();
  const textRef = useRef<HTMLDivElement>(null);
  const lines = collapsible === true ? 8 : typeof collapsible === 'number' ? collapsible : 0;
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);

  // The toggle only shows when the clamped text is actually cut.
  useLayoutEffect(() => {
    const el = textRef.current;
    if (!lines || !el) return;
    const check = () => {
      if (!expanded) setOverflows(el.scrollHeight > el.clientHeight + 1);
    };
    check();
    const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(check);
    observer?.observe(el);
    return () => observer?.disconnect();
  }, [lines, expanded, children]);

  const placement = reactionsPlacement ?? (align === 'end' ? 'bottom-start' : 'bottom-end');
  return (
    <div
      {...rest}
      className={cx('ds-bubble', variant !== 'default' && `ds-bubble--${variant}`, alignProp && `ds-bubble--${alignProp}`, reactions !== undefined && `ds-bubble--reactions-${placement}`, className)}
      style={style}
    >
      <div className="ds-bubble__content">
        <div ref={textRef} id={textId} className={cx('ds-bubble__text', lines > 0 && !expanded && 'ds-bubble__text--clamped')} style={lines ? ({ '--bubble-lines': lines } as CSSProperties) : undefined}>
          {children}
        </div>
        {lines > 0 && (overflows || expanded) && (
          <button type="button" className="ds-bubble__more" aria-expanded={expanded} aria-controls={textId} onClick={() => setExpanded(!expanded)}>
            {expanded ? lessLabel : moreLabel}
            {chevron}
          </button>
        )}
      </div>
      {reactions !== undefined && <div className="ds-bubble__reactions">{reactions}</div>}
    </div>
  );
}

export interface BubbleGroupProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
  /** `start` (default, theirs) or `end` (yours). */
  align?: 'start' | 'end';
  /** A meta line under the group, e.g. "Sent 9:51 AM · Read by Mira". */
  footer?: ReactNode;
  children: ReactNode;
}

/** A run of bubbles from one sender, 8 px apart, aligned to the start or the end, with an optional meta line. */
export function BubbleGroup({ align = 'start', footer, className, children, ...rest }: BubbleGroupProps) {
  return (
    <div {...rest} className={cx('ds-bubble-group', align === 'end' && 'ds-bubble-group--end', className)}>
      <GroupAlign.Provider value={align}>{children}</GroupAlign.Provider>
      {footer !== undefined && <p className="ds-bubble-group__footer">{footer}</p>}
    </div>
  );
}
