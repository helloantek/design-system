import { RiArrowDownSLine, RiArrowRightSLine, RiCheckLine, RiCloseLine, RiCornerDownLeftLine, RiLockLine } from '@remixicon/react';
import { useId, useState, type HTMLAttributes, type KeyboardEvent, type LiHTMLAttributes, type ReactNode, type Ref } from 'react';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Kbd } from '../Kbd';

// Styles live in @helloantek/ds-css (classes ds-gates*, ds-gate*); these components only render the markup.

/** Where the run stands, in the summary's badge. */
export type ApprovalGatesStatus = 'waiting' | 'stopped' | 'running';
/** How a gate was decided. `stopped` is a rejection that stopped the run. */
export type ApprovalGateOutcome = 'approved' | 'rejected' | 'stopped';

const statusBadge = { waiting: ['amber', 'Waiting on you'], stopped: ['red', 'Stopped'], running: ['blue', 'Running'] } as const;

export interface ApprovalGatesProps extends HTMLAttributes<HTMLElement> {
  ref?: Ref<HTMLElement>;
  /** What the run is for: "Launch the new pricing page". */
  run: ReactNode;
  /** Defaults to `waiting`. */
  status?: ApprovalGatesStatus;
  /** How many gates wait on you. */
  waiting: number;
  /** How many are decided, of how many. */
  decided: number;
  total: number;
  /** Where the run is: "Paused at step 4". Shown in red when the run stopped. */
  progress: ReactNode;
  /** The gate (`ApprovalGate`), `ApprovalGatesStopped` or `ApprovalGatesDone`, then `ApprovalGatesDecided`. */
  children?: ReactNode;
  /** Texts, for other languages. */
  labels?: Partial<{ title: string; waiting: string; decided: string; run: string; status: Partial<Record<ApprovalGatesStatus, string>> }>;
}

/** The approvals of one agent run: a summary, the gate to decide now on top, and what is decided. */
export function ApprovalGates({ run, status = 'waiting', waiting, decided, total, progress, children, labels = {}, className, ...rest }: ApprovalGatesProps) {
  const id = useId();
  const [color, text] = statusBadge[status];
  return (
    <section {...rest} aria-labelledby={`${id}-title ${id}-run`} className={['ds-gates', className].filter(Boolean).join(' ')}>
      <div className="ds-gates__summary">
        <div className="ds-gates__head">
          <RiLockLine aria-hidden />
          <h3 className="ds-gates__title" id={`${id}-title`}>
            {labels.title ?? 'Approvals'}
          </h3>
          <span className="ds-gates__run" id={`${id}-run`}>
            {run}
          </span>
          <Badge variant="tint" color={color}>
            {labels.status?.[status] ?? text}
          </Badge>
        </div>
        <dl className="ds-gates__stats">
          <div>
            <dt>{labels.waiting ?? 'Waiting on you'}</dt>
            <dd className={waiting > 0 ? 'ds-gates__waiting' : 'ds-gates__waiting ds-gates__waiting--none'}>{waiting}</dd>
          </div>
          <div>
            <dt>{labels.decided ?? 'Decided'}</dt>
            <dd>
              {decided} / {total}
            </dd>
          </div>
          <div>
            <dt>{labels.run ?? 'Run'}</dt>
            <dd className={status === 'stopped' ? 'ds-gates__stopped-at' : undefined}>{progress}</dd>
          </div>
        </dl>
      </div>
      {children}
    </section>
  );
}

/** "Edited: --tag latest → next": the first words that differ between the old and the new arguments. */
function describeEdit(before: string, after: string) {
  const a = before.split(/\s+/);
  const b = after.split(/\s+/);
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i++;
  if (i === a.length && i === b.length) return null;
  let j = 0;
  while (j < a.length - i && j < b.length - i && a[a.length - 1 - j] === b[b.length - 1 - j]) j++;
  const from = a.slice(i, a.length - j).join(' ');
  const to = b.slice(i, b.length - j).join(' ');
  const context = i > 0 && a[i - 1].startsWith('-') ? `${a[i - 1]} ` : '';
  return `${context}${from || '…'} → ${to || '…'}`;
}

export interface ApprovalGateProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  ref?: Ref<HTMLElement>;
  /** Who asks: "Release agent". */
  agent: ReactNode;
  /** The agent's 16 px icon. */
  agentIcon?: ReactNode;
  /** Where it is and why it asks: "Step 4 of 7 · asks because it cannot be undone". */
  meta?: ReactNode;
  /** A risk badge, e.g. `<Badge variant="tint" color="amber">Medium risk</Badge>`. */
  risk?: ReactNode;
  /** What it will do: "Publish 2.4.0 to npm". */
  title: ReactNode;
  /** Why, after a "Why" lead-in. */
  why?: ReactNode;
  /** The arguments it will run with (Mono); Change it edits them. */
  args?: string;
  /** How many gates wait behind this one (up to 2 peek out). */
  behind?: number;
  onApprove?: () => void;
  onReject?: () => void;
  /** Approve with the edited arguments; without it there is no Change it. */
  onApproveWithChanges?: (args: string) => void;
  /** Start with the arguments open for editing, and with this text in them (e.g. a saved draft). */
  defaultEditing?: boolean;
  defaultDraft?: string;
  /** Texts, for other languages. */
  labels?: Partial<{ why: string; change: string; reject: string; approve: string; cancel: string; approveWithChanges: string; edited: string; args: string }>;
}

/** The gate to decide now: who asks, what and why, the arguments; R rejects, A approves, Change it edits first. */
export function ApprovalGate({
  agent,
  agentIcon,
  meta,
  risk,
  title,
  why,
  args,
  behind = 0,
  onApprove,
  onReject,
  onApproveWithChanges,
  defaultEditing = false,
  defaultDraft,
  labels = {},
  className,
  onKeyDown,
  ...rest
}: ApprovalGateProps) {
  const id = useId();
  const [editing, setEditing] = useState(defaultEditing);
  // Focus the field when Change it opens it, not when the gate starts open for editing.
  const [focusField, setFocusField] = useState(false);
  const [draft, setDraft] = useState(defaultDraft ?? args ?? '');
  const t = { why: 'Why', change: 'Change it', reject: 'Reject', approve: 'Approve', cancel: 'Cancel', approveWithChanges: 'Approve with changes', edited: 'Edited', args: 'Arguments', ...labels };
  const edit = editing && args !== undefined ? describeEdit(args, draft) : null;

  const cancel = () => {
    setDraft(args ?? '');
    setEditing(false);
  };
  const approveChanged = () => {
    onApproveWithChanges?.(draft);
    setEditing(false);
  };

  // R rejects and A approves while focus is in the gate (not while typing); Esc cancels an edit.
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    onKeyDown?.(event);
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return;
    if (editing) {
      if (event.key === 'Escape') {
        event.preventDefault();
        cancel();
      }
      return;
    }
    if ((event.target as HTMLElement).closest('input, textarea, [contenteditable="true"]')) return;
    const key = event.key.toLowerCase();
    if (key === 'r' && onReject) {
      event.preventDefault();
      onReject();
    } else if (key === 'a' && onApprove) {
      event.preventDefault();
      onApprove();
    }
  };

  return (
    <div className="ds-gates__stack">
      <article
        {...rest}
        aria-labelledby={`${id}-title`}
        // A click anywhere in the gate focuses it, so R and A answer it; Tab still goes to its controls only.
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        className={['ds-gate', editing && 'ds-gate--editing', className].filter(Boolean).join(' ')}
      >
        <div className="ds-gate__who">
          {agentIcon && (
            <span className="ds-gate__mark" aria-hidden>
              {agentIcon}
            </span>
          )}
          <div>
            <p className="ds-gate__agent">{agent}</p>
            {meta !== undefined && <p className="ds-gate__meta">{meta}</p>}
          </div>
          {risk}
        </div>
        <div className="ds-gate__what">
          <div className="ds-gate__lead">
            <h4 className="ds-gate__title" id={`${id}-title`}>
              {title}
            </h4>
            {why !== undefined && (
              <p className="ds-gate__why">
                <strong>{t.why}</strong>
                {why}
              </p>
            )}
          </div>
          {args !== undefined &&
            (editing ? (
              <textarea
                className="ds-gate__args ds-gate__args--edit"
                aria-label={t.args}
                value={draft}
                rows={draft.split('\n').length}
                spellCheck={false}
                autoFocus={focusField}
                onChange={(event) => setDraft(event.currentTarget.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' && !event.shiftKey) {
                    event.preventDefault();
                    approveChanged();
                  }
                }}
              />
            ) : (
              <pre className="ds-gate__args" aria-label={t.args}>
                {args}
              </pre>
            ))}
        </div>
        <div className="ds-gate__actions">
          {editing ? (
            <>
              <span className="ds-gate__edited" aria-live="polite">
                {edit && `${t.edited}: ${edit}`}
              </span>
              <Button variant="ghost" size="sm" trailingIcon={<Kbd size="sm">Esc</Kbd>} aria-keyshortcuts="Escape" onClick={cancel}>
                {t.cancel}
              </Button>
              <Button size="sm" trailingIcon={<Kbd size="sm" variant="inverted" icon={<RiCornerDownLeftLine />} label="Enter" />} aria-keyshortcuts="Enter" onClick={approveChanged}>
                {t.approveWithChanges}
              </Button>
            </>
          ) : (
            <>
              {onApproveWithChanges && args !== undefined && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setFocusField(true);
                    setEditing(true);
                  }}
                >
                  {t.change}
                </Button>
              )}
              <Button variant="outline" size="sm" trailingIcon={<Kbd size="sm">R</Kbd>} aria-keyshortcuts="R" onClick={onReject}>
                {t.reject}
              </Button>
              <Button size="sm" trailingIcon={<Kbd size="sm" variant="inverted">A</Kbd>} aria-keyshortcuts="A" onClick={onApprove}>
                {t.approve}
              </Button>
            </>
          )}
        </div>
      </article>
      {Array.from({ length: Math.min(2, Math.max(0, behind)) }, (_, i) => (
        <span key={i} className="ds-gates__behind" aria-hidden />
      ))}
    </div>
  );
}

export interface ApprovalGatesStoppedProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  ref?: Ref<HTMLDivElement>;
  /** "The run stopped". */
  title?: ReactNode;
  /** What stopped it: "“Start a browser agent” was rejected – nothing after it runs". */
  description?: ReactNode;
}

/** A rejected gate stopped the run: nothing behind it runs. */
export function ApprovalGatesStopped({ title = 'The run stopped', description, className, ...rest }: ApprovalGatesStoppedProps) {
  return (
    <div {...rest} role="status" className={['ds-gates__stopped', className].filter(Boolean).join(' ')}>
      <span className="ds-gates__status ds-gates__status--stopped" aria-hidden>
        <RiCloseLine />
      </span>
      <p>{title}</p>
      {description !== undefined && <p>{description}</p>}
    </div>
  );
}

export interface ApprovalGatesDoneProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  ref?: Ref<HTMLDivElement>;
  /** "All 5 gates decided". */
  title: ReactNode;
  /** "4 approved · 1 rejected · the run resumed at 12:04". */
  description?: ReactNode;
}

/** Every gate decided: the run goes on and the gates fold away. */
export function ApprovalGatesDone({ title, description, className, ...rest }: ApprovalGatesDoneProps) {
  return (
    <div {...rest} role="status" className={['ds-gates__done', className].filter(Boolean).join(' ')}>
      <span className="ds-gates__status ds-gates__status--approved" aria-hidden>
        <RiCheckLine />
      </span>
      <div>
        <p>{title}</p>
        {description !== undefined && <p>{description}</p>}
      </div>
    </div>
  );
}

export interface ApprovalGatesDecidedProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
  /** `ApprovalGatesDecidedItem`s, newest first. */
  children: ReactNode;
  /** The heading; defaults to "Decided". */
  heading?: ReactNode;
}

/** The gates already decided, as a list. */
export function ApprovalGatesDecided({ children, heading = 'Decided', className, ...rest }: ApprovalGatesDecidedProps) {
  const id = useId();
  return (
    <div {...rest} className={['ds-gates__decided', className].filter(Boolean).join(' ')}>
      <h4 className="ds-gates__heading" id={id}>
        {heading}
      </h4>
      <ul aria-labelledby={id}>{children}</ul>
    </div>
  );
}

const outcomeText: Record<ApprovalGateOutcome, string> = { approved: 'Approved', rejected: 'Rejected', stopped: 'Stopped the run' };

export interface ApprovalGatesDecidedItemProps extends Omit<LiHTMLAttributes<HTMLLIElement>, 'title'> {
  ref?: Ref<HTMLLIElement>;
  /** What the gate was: "Tag v2.4.0". */
  title: ReactNode;
  outcome: ApprovalGateOutcome;
  /** The outcome's words, e.g. "Approved with changes"; defaults to Approved, Rejected or Stopped the run. */
  outcomeLabel?: ReactNode;
  /** Who asked. */
  agent?: ReactNode;
  /** When: "12:01", "just now". */
  time?: ReactNode;
  /** Why it was decided so; the row opens to show it. */
  reason?: ReactNode;
  defaultOpen?: boolean;
}

/** One decided gate: its outcome, who asked and when; it opens to the reason. */
export function ApprovalGatesDecidedItem({ title, outcome, outcomeLabel, agent, time, reason, defaultOpen = false, className, ...rest }: ApprovalGatesDecidedItemProps) {
  const id = useId();
  const [open, setOpen] = useState(defaultOpen);
  const expandable = reason !== undefined && reason !== null;
  const content = (
    <>
      <span className={`ds-gates__status ds-gates__status--${outcome}`} aria-hidden>
        {outcome === 'approved' ? <RiCheckLine /> : <RiCloseLine />}
      </span>
      <span className="ds-gates__name">{title}</span>
      {agent !== undefined && <span className="ds-gates__by">{agent}</span>}
      <span className={['ds-gates__outcome', outcome !== 'approved' && 'ds-gates__outcome--bad'].filter(Boolean).join(' ')}>{outcomeLabel ?? outcomeText[outcome]}</span>
      {time !== undefined && <span className="ds-gates__time">{time}</span>}
      {expandable && (open ? <RiArrowDownSLine aria-hidden /> : <RiArrowRightSLine aria-hidden />)}
    </>
  );
  return (
    <li {...rest} className={['ds-gates__item', open && 'ds-gates__item--open', className].filter(Boolean).join(' ')}>
      {expandable ? (
        <button type="button" className="ds-gates__row" aria-expanded={open} aria-controls={`${id}-reason`} onClick={() => setOpen(!open)}>
          {content}
        </button>
      ) : (
        <div className="ds-gates__row">{content}</div>
      )}
      {expandable && (
        <p className="ds-gates__reason" id={`${id}-reason`} hidden={!open}>
          {reason}
        </p>
      )}
    </li>
  );
}
