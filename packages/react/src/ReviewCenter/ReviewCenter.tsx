import { RiArrowGoBackLine, RiCheckLine, RiFileTextLine } from '@remixicon/react';
import { useEffect, useId, useRef, useState, type ButtonHTMLAttributes, type HTMLAttributes, type KeyboardEvent, type ReactNode, type Ref } from 'react';
import { Button } from '../Button';
import { Kbd } from '../Kbd';

// Styles live in @helloantek/ds-css (classes ds-review*); these components only render the markup.

/** A filter over the queue: "High risk 1". */
export interface ReviewCenterFilter {
  label: ReactNode;
  count?: number;
}

export interface ReviewCenterProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  ref?: Ref<HTMLElement>;
  /** How many are reviewed, of how many: the bar and "26 of 33 reviewed". */
  reviewed: number;
  total: number;
  /** After the count: "oldest 14m". */
  meta?: ReactNode;
  /** The last decision, with Undo (Z): "Approved with edits · Split customers.name". */
  lastDecision?: ReactNode;
  onUndo?: () => void;
  /** The filters over the queue; `filter` is the chosen one's index. */
  filters?: ReviewCenterFilter[];
  filter?: number;
  onFilterChange?: (index: number) => void;
  /** The queue: `ReviewCenterQueueItem`s. */
  queue: ReactNode;
  /** The item to decide: a `ReviewCenterItem`. */
  children?: ReactNode;
  /** Texts, for other languages. */
  labels?: Partial<{
    title: string;
    reviewed: (reviewed: number, total: number) => string;
    undo: string;
    filters: string;
    queue: string;
  }>;
}

/**
 * One place to review what the agents want to do: progress and the last decision with Undo on top, the queue on the
 * left, the item to decide on the right. A key named by a button (`aria-keyshortcuts`: A, R, E, S, Z, 1–4, Esc)
 * presses it from anywhere in the center, except while typing.
 */
export function ReviewCenter({
  reviewed,
  total,
  meta,
  lastDecision,
  onUndo,
  filters = [],
  filter = 0,
  onFilterChange,
  queue,
  children,
  labels = {},
  className,
  onKeyDown,
  ...rest
}: ReviewCenterProps) {
  const id = useId();
  const t = {
    title: 'Review center',
    reviewed: (r: number, n: number) => `${r} of ${n} reviewed`,
    undo: 'Undo',
    filters: 'Show',
    queue: 'Queue',
    ...labels,
  };
  const share = total > 0 ? Math.min(1, reviewed / total) : 0;

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    onKeyDown?.(event);
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return;
    if ((event.target as HTMLElement).closest('input, textarea, select, [contenteditable="true"]')) return;
    const key = event.key.length === 1 ? event.key.toUpperCase() : event.key;
    if (key === 'Enter' || key === ' ' || key === 'Tab') return;
    const button = [...event.currentTarget.querySelectorAll<HTMLButtonElement>('button[aria-keyshortcuts]')].find(
      (b) => !b.disabled && b.getAttribute('aria-keyshortcuts')!.split(' ').some((k) => k.toUpperCase() === key.toUpperCase()),
    );
    if (!button) return;
    event.preventDefault();
    button.click();
  };

  return (
    <section
      {...rest}
      // A name given with aria-label (several centers on one page) replaces the title as the section's name.
      aria-labelledby={rest['aria-label'] ? undefined : `${id}-title`}
      // A click anywhere focuses the center, so the keys work; Tab still goes to its controls only.
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      className={['ds-review', className].filter(Boolean).join(' ')}
    >
      <div className="ds-review__bar">
        <RiCheckLine aria-hidden />
        <h2 className="ds-review__title" id={`${id}-title`}>
          {t.title}
        </h2>
        <div className="ds-review__progress" role="progressbar" aria-labelledby={`${id}-count`} aria-valuemin={0} aria-valuemax={total} aria-valuenow={reviewed}>
          <span style={{ width: `${share * 100}%` }} />
        </div>
        <span className="ds-review__count" id={`${id}-count`}>
          {t.reviewed(reviewed, total)}
          {meta !== undefined && <> · {meta}</>}
        </span>
        <div className="ds-review__last" role="status">
          {lastDecision !== undefined && (
            <>
              <RiCheckLine aria-hidden />
              <span>{lastDecision}</span>
            </>
          )}
        </div>
        {lastDecision !== undefined && onUndo && (
          <Button variant="ghost" size="xs" leadingIcon={<RiArrowGoBackLine />} trailingIcon={<Kbd size="sm">Z</Kbd>} aria-keyshortcuts="Z" onClick={onUndo}>
            {t.undo}
          </Button>
        )}
      </div>
      <div className="ds-review__main">
        <div className="ds-review__queue">
          {filters.length > 0 && (
            <div className="ds-review__filters" role="group" aria-label={t.filters}>
              {filters.map((f, i) => (
                <button key={i} type="button" className="ds-review__filter" aria-pressed={i === filter} onClick={() => onFilterChange?.(i)}>
                  {f.label}
                  {f.count !== undefined && <span>{f.count}</span>}
                </button>
              ))}
            </div>
          )}
          <ul className="ds-review__items" aria-label={t.queue}>
            {queue}
          </ul>
        </div>
        {children}
      </div>
    </section>
  );
}

export interface ReviewCenterQueueItemProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'title'> {
  ref?: Ref<HTMLButtonElement>;
  /** The agent's mark (an icon). */
  icon?: ReactNode;
  /** What it wants to do: "Pay INV-2207 from Acme Logistics". */
  title: ReactNode;
  /** Kind and agent: "Invoice · Finance agent". */
  meta?: ReactNode;
  /** How long it waits: "14m". */
  time?: ReactNode;
  /** The item shown on the right. */
  selected?: boolean;
}

/** One proposal in the queue; a click shows it on the right. */
export function ReviewCenterQueueItem({ icon, title, meta, time, selected = false, className, ...rest }: ReviewCenterQueueItemProps) {
  return (
    <li>
      <button type="button" {...rest} aria-current={selected || undefined} className={['ds-review__entry', className].filter(Boolean).join(' ')}>
        <span className="ds-review__mark" aria-hidden>
          {icon}
        </span>
        <span className="ds-review__entry-text">
          <span className="ds-review__entry-title">{title}</span>
          {meta !== undefined && <span className="ds-review__entry-meta">{meta}</span>}
        </span>
        {time !== undefined && <span className="ds-review__time">{time}</span>}
      </button>
    </li>
  );
}

/** A field that matters: "Amount $12,480.00". `changed` marks an unusual value, with a `note`. */
export interface ReviewCenterField {
  label: ReactNode;
  value: ReactNode;
  changed?: boolean;
  note?: ReactNode;
}

/** An attachment: a file or a link. */
export interface ReviewCenterAttachment {
  label: ReactNode;
  icon?: ReactNode;
  href?: string;
}

export interface ReviewCenterItemProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  ref?: Ref<HTMLElement>;
  /** Who asks: "Finance agent", its mark and model ("Gemini Pro"), and a risk badge. */
  agent: ReactNode;
  agentIcon?: ReactNode;
  model?: ReactNode;
  risk?: ReactNode;
  /** What it wants to do. */
  title: ReactNode;
  /** Why, after a bold "Why". */
  why?: ReactNode;
  fields?: ReviewCenterField[];
  attachments?: ReviewCenterAttachment[];
  /** Approve (A), Edit (E), Skip (S). Each shows only with its handler. */
  onApprove?: () => void;
  onEdit?: () => void;
  onSkip?: () => void;
  /** Reject (R). With `reasons`, Reject asks why first – a number per reason, Esc cancels – and passes the reason's index. */
  onReject?: (reason?: number) => void;
  reasons?: ReactNode[];
  /** Starts with the reasons showing. */
  defaultRejecting?: boolean;
  /** Texts, for other languages. */
  labels?: Partial<{ why: string; approve: string; reject: string; edit: string; skip: string; whyReject: string; cancel: string }>;
}

/** The item to decide: who asks, what and why, the fields that matter, its attachments and the actions. */
export function ReviewCenterItem({
  agent,
  agentIcon,
  model,
  risk,
  title,
  why,
  fields = [],
  attachments = [],
  onApprove,
  onEdit,
  onSkip,
  onReject,
  reasons = [],
  defaultRejecting = false,
  labels = {},
  className,
  ...rest
}: ReviewCenterItemProps) {
  const id = useId();
  const t = { why: 'Why', approve: 'Approve', reject: 'Reject', edit: 'Edit', skip: 'Skip', whyReject: 'Why?', cancel: 'Cancel', ...labels };
  const [rejecting, setRejecting] = useState(defaultRejecting);
  const actions = useRef<HTMLDivElement>(null);
  const changed = useRef(false);

  // The pressed button goes with the row: focus the first reason, or Reject again after Cancel.
  useEffect(() => {
    if (!changed.current) return;
    changed.current = false;
    const lost = !document.activeElement || document.activeElement === document.body;
    if (lost) actions.current?.querySelector<HTMLButtonElement>(rejecting ? 'button' : 'button[aria-keyshortcuts="R"]')?.focus();
  }, [rejecting]);

  const setReject = (value: boolean) => {
    changed.current = true;
    setRejecting(value);
  };

  return (
    <article {...rest} aria-labelledby={id} className={['ds-review__detail', className].filter(Boolean).join(' ')}>
      <div className="ds-review__body">
        <div className="ds-review__who">
          <span className="ds-review__mark" aria-hidden>
            {agentIcon}
          </span>
          <div>
            <p className="ds-review__agent">
              {agent}
              {risk}
            </p>
            {model !== undefined && <p className="ds-review__model">{model}</p>}
          </div>
        </div>
        <h3 className="ds-review__heading" id={id}>
          {title}
        </h3>
        {why !== undefined && (
          <p className="ds-review__why">
            <strong>{t.why}</strong>
            {why}
          </p>
        )}
        {fields.length > 0 && (
          <dl className="ds-review__fields">
            {fields.map((f, i) => (
              <div key={i} className={f.changed ? 'ds-review__field--changed' : undefined}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
                {f.note !== undefined && <dd>{f.note}</dd>}
              </div>
            ))}
          </dl>
        )}
        {attachments.length > 0 && (
          <ul className="ds-review__attachments">
            {attachments.map((a, i) => {
              const content = (
                <>
                  {a.icon ?? <RiFileTextLine aria-hidden />}
                  {a.label}
                </>
              );
              return <li key={i}>{a.href ? <a href={a.href}>{content}</a> : content}</li>;
            })}
          </ul>
        )}
      </div>
      {rejecting ? (
        <div className="ds-review__actions ds-review__actions--reasons" ref={actions} role="group" aria-labelledby={`${id}-why`}>
          <span id={`${id}-why`}>{t.whyReject}</span>
          {reasons.map((reason, i) => (
            <Button key={i} variant="outline" size="xs" trailingIcon={<Kbd size="sm">{i + 1}</Kbd>} aria-keyshortcuts={String(i + 1)} onClick={() => onReject?.(i)}>
              {reason}
            </Button>
          ))}
          <Button variant="ghost" size="xs" trailingIcon={<Kbd size="sm">Esc</Kbd>} aria-keyshortcuts="Escape" onClick={() => setReject(false)}>
            {t.cancel}
          </Button>
        </div>
      ) : (
        <div className="ds-review__actions" ref={actions}>
          {onSkip && (
            <Button variant="ghost" size="sm" trailingIcon={<Kbd size="sm">S</Kbd>} aria-keyshortcuts="S" onClick={onSkip}>
              {t.skip}
            </Button>
          )}
          {onReject && (
            <Button variant="outline" size="sm" trailingIcon={<Kbd size="sm">R</Kbd>} aria-keyshortcuts="R" onClick={() => (reasons.length > 0 ? setReject(true) : onReject())}>
              {t.reject}
            </Button>
          )}
          {onEdit && (
            <Button variant="outline" size="sm" trailingIcon={<Kbd size="sm">E</Kbd>} aria-keyshortcuts="E" onClick={onEdit}>
              {t.edit}
            </Button>
          )}
          {onApprove && (
            <Button size="sm" trailingIcon={<Kbd size="sm" variant="inverted">A</Kbd>} aria-keyshortcuts="A" onClick={onApprove}>
              {t.approve}
            </Button>
          )}
        </div>
      )}
    </article>
  );
}

export interface ReviewCenterDoneProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  ref?: Ref<HTMLElement>;
  /** "Nothing left to review". */
  title?: ReactNode;
  /** "29 approved · 3 rejected · 1 skipped". */
  description?: ReactNode;
  /** Undo last (Z). */
  onUndo?: () => void;
  labels?: Partial<{ undo: string }>;
}

/** All reviewed: what was decided, with Undo last. */
export function ReviewCenterDone({ title = 'Nothing left to review', description, onUndo, labels = {}, className, onKeyDown, ...rest }: ReviewCenterDoneProps) {
  const id = useId();
  const t = { undo: 'Undo last', ...labels };
  return (
    <section
      {...rest}
      aria-labelledby={rest['aria-label'] ? undefined : id}
      tabIndex={-1}
      onKeyDown={(event) => {
        onKeyDown?.(event);
        if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || !onUndo) return;
        if (event.key.toUpperCase() === 'Z') {
          event.preventDefault();
          onUndo();
        }
      }}
      className={['ds-review', 'ds-review--done', className].filter(Boolean).join(' ')}
    >
      <div className="ds-review__done">
        <span className="ds-review__status" aria-hidden>
          <RiCheckLine />
        </span>
        <div role="status">
          <p id={id}>{title}</p>
          {description !== undefined && <p>{description}</p>}
        </div>
        {onUndo && (
          <Button variant="ghost" size="xs" leadingIcon={<RiArrowGoBackLine />} trailingIcon={<Kbd size="sm">Z</Kbd>} aria-keyshortcuts="Z" onClick={onUndo}>
            {t.undo}
          </Button>
        )}
      </div>
    </section>
  );
}
