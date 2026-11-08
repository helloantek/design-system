import { useId, useState, type AnchorHTMLAttributes, type HTMLAttributes, type MouseEvent, type ReactNode, type Ref } from 'react';
import { RiArrowDownSLine, RiArrowRightSLine } from '@remixicon/react';

// Styles live in @helloantek/ds-css (classes ds-trace*); these components render the markup: a column of steps, each a
// line (a link or a button when it acts), and collapsible steps whose trigger opens what the step returned.

const cx = (...names: (string | false | undefined)[]) => names.filter(Boolean).join(' ');

/** Figma "Status". */
export type TraceStatus = 'done' | 'running' | 'error' | 'pending';

const STATUS_LABELS: Record<TraceStatus, string | undefined> = { done: undefined, running: 'In progress', error: 'Failed', pending: 'Not started' };

export interface TraceProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
  /** Figma "items": TraceLine and TraceCollapsible. */
  children: ReactNode;
}

/** Figma "Trace": the steps an AI agent took, 8 px apart. */
export function Trace({ className, ...rest }: TraceProps) {
  return <div {...rest} className={cx('ds-trace', className)} />;
}

interface LineParts {
  /** Figma "Status" (default `done`): `running` sweeps a light over the title, `error` is red, `pending` is faded. */
  status?: TraceStatus;
  /** Figma "Icon swap": a 16 px icon that uses `currentColor`. */
  icon?: ReactNode;
  /** Figma "Description text": a short muted detail after the title (a count, a duration, a domain). */
  description?: ReactNode;
  /** Figma "Trailing icon swap": e.g. an arrow on a link. */
  trailingIcon?: ReactNode;
  /** Read out after the title for running, failed and pending steps (defaults "In progress", "Failed", "Not started"). */
  statusLabel?: string;
}

function lineContent({ status = 'done', icon, description, trailingIcon, statusLabel }: LineParts, title: ReactNode, chevron?: ReactNode) {
  const label = statusLabel ?? STATUS_LABELS[status];
  return (
    <>
      <span className="ds-trace-line__line">
        {icon != null && (
          <span className="ds-trace-line__icon" aria-hidden>
            {icon}
          </span>
        )}
        <span className="ds-trace-line__title">
          <span className="ds-trace-line__text">{title}</span>
          {description != null && <span className="ds-trace-line__description">{description}</span>}
          {trailingIcon != null && (
            <span className="ds-trace-line__trailing" aria-hidden>
              {trailingIcon}
            </span>
          )}
        </span>
      </span>
      {label && <span className="ds-trace-line__status">, {label}</span>}
      {chevron != null && (
        <span className="ds-trace-line__chevron" aria-hidden>
          {chevron}
        </span>
      )}
    </>
  );
}

const lineClass = (status: TraceStatus = 'done', className?: string) => cx('ds-trace-line', `ds-trace-line--${status}`, className);

export interface TraceLineProps extends LineParts, Omit<HTMLAttributes<HTMLElement>, 'title'> {
  ref?: Ref<HTMLElement>;
  /** Figma "Title": what the step did. */
  children: ReactNode;
  /** Makes the line a link (with `target`, `rel`). */
  href?: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
  rel?: string;
}

/** Figma "Trace Line" Type=Line: one step. With `href` it is a link, with `onClick` a button. */
export function TraceLine({ status, icon, description, trailingIcon, statusLabel, href, target, rel, children, className, onClick, ref, ...rest }: TraceLineProps) {
  const content = lineContent({ status, icon, description, trailingIcon, statusLabel }, children);
  const cls = lineClass(status, className);
  if (href != null)
    return (
      <a {...rest} ref={ref as Ref<HTMLAnchorElement>} href={href} target={target} rel={rel ?? (target === '_blank' ? 'noreferrer' : undefined)} className={cls} onClick={onClick}>
        {content}
      </a>
    );
  if (onClick)
    return (
      <button {...rest} ref={ref as Ref<HTMLButtonElement>} type="button" className={cls} onClick={onClick}>
        {content}
      </button>
    );
  return (
    <div {...rest} ref={ref as Ref<HTMLDivElement>} className={cls}>
      {content}
    </div>
  );
}

export interface TraceCollapsibleProps extends LineParts, Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  ref?: Ref<HTMLDivElement>;
  /** Figma "Title" of the trigger. */
  title: ReactNode;
  /** Figma Type=Trigger open (controlled). */
  open?: boolean;
  /** Open at first (uncontrolled). */
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Figma "Trace Content": what the step returned, shown while open. */
  children?: ReactNode;
}

/** Figma "Trace Line" Type=Trigger / Trigger open with its "Trace Content": a step that opens to show what it returned. */
export function TraceCollapsible({ title, status, icon, description, trailingIcon, statusLabel, open: openProp, defaultOpen = false, onOpenChange, children, className, ...rest }: TraceCollapsibleProps) {
  const [uncontrolled, setUncontrolled] = useState(defaultOpen);
  const open = openProp ?? uncontrolled;
  const contentId = `${useId()}-content`;
  const toggle = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (openProp === undefined) setUncontrolled(!open);
    onOpenChange?.(!open);
  };
  return (
    <div {...rest} className={cx('ds-trace-collapsible', className)}>
      <button type="button" className={lineClass(status)} aria-expanded={open} aria-controls={contentId} onClick={toggle}>
        {lineContent({ status, icon, description, trailingIcon, statusLabel }, title, open ? <RiArrowDownSLine /> : <RiArrowRightSLine />)}
      </button>
      <TraceContent id={contentId} hidden={!open}>
        {children}
      </TraceContent>
    </div>
  );
}

export interface TraceContentProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
}

/** Figma "Trace Content": what a step returned, 24 px in with a rule under the step's icon. */
export function TraceContent({ className, children, ...rest }: TraceContentProps) {
  return (
    <div {...rest} className={cx('ds-trace-content', className)}>
      <div className="ds-trace-content__body">{children}</div>
    </div>
  );
}

/** The demos' command output in a Trace Content: 12/16 Geist Mono on fill-1. */
export function TraceCode({ className, ...rest }: HTMLAttributes<HTMLPreElement>) {
  return <pre {...rest} className={cx('ds-trace-code', className)} />;
}
