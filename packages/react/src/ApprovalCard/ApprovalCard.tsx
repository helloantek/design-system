import { RiArrowGoBackLine, RiCheckLine, RiCloseLine, RiCornerDownLeftLine, RiTimeLine } from '@remixicon/react';
import { useId, type HTMLAttributes, type KeyboardEvent, type ReactNode, type Ref } from 'react';
import { Avatar, AvatarGroup } from '../Avatar';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { Kbd } from '../Kbd';
import { Spinner } from '../Spinner';

// Styles live in @helloantek/ds-css (classes ds-approval-card*); this component only renders the markup.

/** How risky the action is: the badge in the header. */
export type ApprovalCardRisk = 'low' | 'medium' | 'high';
/**
 * Where the request stands. `approving` keeps the card (busy, the Approve button holding a spinner, Deny and Approve
 * ignoring clicks and keys) while the action runs; the rest fold it to one line.
 */
export type ApprovalCardState = 'pending' | 'approving' | 'approved' | 'denied' | 'expired';

const riskColor = { low: 'green', medium: 'amber', high: 'red' } as const;
const riskText = { low: 'Low risk', medium: 'Medium risk', high: 'High risk' };
const verdict = { approved: 'Approved', denied: 'Denied', expired: 'Denied itself' };

export interface ApprovalCardProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  ref?: Ref<HTMLElement>;
  /** What the agent will do, e.g. "Send the October newsletter". */
  title: ReactNode;
  /** Where and who: "Newsletter · Marketing agent". */
  description?: ReactNode;
  /** A 16 px icon for the kind of action, shown in a tile. */
  icon?: ReactNode;
  /** The risk badge; leave it out for none. */
  risk?: ApprovalCardRisk;
  /** The badge text; defaults to "Low risk", "Medium risk" or "High risk". */
  riskLabel?: ReactNode;
  /** The details: `ApprovalCardDetails`, `ApprovalCardSummary`, `ApprovalCardPreview` or your own content. */
  children?: ReactNode;
  /** Defaults to `pending`. */
  state?: ApprovalCardState;
  onApprove?: () => void;
  onDeny?: () => void;
  /** Shows "Always allow this action" when given. */
  alwaysAllow?: boolean;
  onAlwaysAllowChange?: (checked: boolean) => void;
  /** Replaces "Always allow this action" with a countdown, e.g. "Denies itself in 0:45". The app counts. */
  countdown?: ReactNode;
  /** Once decided, the second line: "By you at 9:02 · sending to 412 people". */
  outcome?: ReactNode;
  /** Shows Undo on the decided line. */
  onUndo?: () => void;
  /** Labels, for other languages. */
  labels?: Partial<{ approve: string; approving: string; deny: string; alwaysAllow: string; undo: string; approved: string; denied: string; expired: string }>;
}

/** An agent asks before it acts: Deny (Esc) or Approve (Enter, ↵), then one line with the outcome. */
export function ApprovalCard({
  title,
  description,
  icon,
  risk,
  riskLabel,
  children,
  state = 'pending',
  onApprove,
  onDeny,
  alwaysAllow,
  onAlwaysAllowChange,
  countdown,
  outcome,
  onUndo,
  labels = {},
  className,
  onKeyDown,
  ...rest
}: ApprovalCardProps) {
  const id = useId();
  const titleId = `${id}-title`;
  const busy = state === 'approving';

  if (state === 'approved' || state === 'denied' || state === 'expired') {
    return (
      <article {...rest} aria-labelledby={titleId} className={['ds-approval-card', 'ds-approval-card--decided', className].filter(Boolean).join(' ')}>
        <div className="ds-approval-card__decided" role="status">
          <span className={`ds-approval-card__status ds-approval-card__status--${state}`} aria-hidden>
            {state === 'approved' ? <RiCheckLine /> : state === 'denied' ? <RiCloseLine /> : <RiTimeLine />}
          </span>
          <div className="ds-approval-card__heading">
            <p className="ds-approval-card__title" id={titleId}>
              {labels[state] ?? verdict[state]} · {title}
            </p>
            {outcome !== undefined && <p className="ds-approval-card__description">{outcome}</p>}
          </div>
          {onUndo && (
            <Button variant="ghost" size="xs" leadingIcon={<RiArrowGoBackLine />} onClick={onUndo}>
              {labels.undo ?? 'Undo'}
            </Button>
          )}
        </div>
      </article>
    );
  }

  // Esc denies and Enter approves while focus is in the card, except where those keys already mean something.
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    onKeyDown?.(event);
    if (event.defaultPrevented || busy) return;
    const target = event.target as HTMLElement;
    if (event.key === 'Escape' && onDeny) {
      event.preventDefault();
      onDeny();
    } else if (event.key === 'Enter' && onApprove && !target.closest('button, a, input:not([type="checkbox"]), textarea, select, [contenteditable="true"]')) {
      event.preventDefault();
      onApprove();
    }
  };

  return (
    <article {...rest} aria-labelledby={titleId} aria-busy={busy || undefined} onKeyDown={handleKeyDown} className={['ds-approval-card', className].filter(Boolean).join(' ')}>
      <div className="ds-approval-card__header">
        {icon && (
          <span className="ds-approval-card__icon" aria-hidden>
            {icon}
          </span>
        )}
        <div className="ds-approval-card__heading">
          <h3 className="ds-approval-card__title" id={titleId}>
            {title}
          </h3>
          {description !== undefined && <p className="ds-approval-card__description">{description}</p>}
        </div>
        {risk && (
          <Badge variant="tint" color={riskColor[risk]}>
            {riskLabel ?? riskText[risk]}
          </Badge>
        )}
      </div>
      {children !== undefined && children !== null && <div className="ds-approval-card__body">{children}</div>}
      <div className="ds-approval-card__footer">
        {countdown !== undefined ? (
          <span className="ds-approval-card__countdown" role="timer">
            <RiTimeLine aria-hidden />
            {countdown}
          </span>
        ) : (
          alwaysAllow !== undefined && (
            <Checkbox
              className="ds-approval-card__always"
              label={labels.alwaysAllow ?? 'Always allow this action'}
              checked={alwaysAllow}
              onCheckedChange={onAlwaysAllowChange}
            />
          )
        )}
        <div className="ds-approval-card__actions">
          <Button variant="ghost" size="sm" trailingIcon={<Kbd size="sm">Esc</Kbd>} aria-keyshortcuts="Escape" onClick={busy ? undefined : onDeny}>
            {labels.deny ?? 'Deny'}
          </Button>
          <Button
            size="sm"
            trailingIcon={busy ? <Spinner size="sm" decorative /> : <Kbd size="sm" variant="inverted" icon={<RiCornerDownLeftLine />} label="Enter" />}
            aria-keyshortcuts="Enter"
            onClick={busy ? undefined : onApprove}
          >
            {busy ? (labels.approving ?? 'Approving') : (labels.approve ?? 'Approve')}
          </Button>
        </div>
      </div>
    </article>
  );
}

export interface ApprovalCardDetailsProps extends HTMLAttributes<HTMLDListElement> {
  ref?: Ref<HTMLDListElement>;
  /** Name → value rows, e.g. `[['Subject', 'What’s new in October'], ['Sends', 'Today, 9:00']]`. */
  items: [ReactNode, ReactNode][];
}

/** The facts of the action as name–value rows. */
export function ApprovalCardDetails({ items, className, ...rest }: ApprovalCardDetailsProps) {
  return (
    <dl {...rest} className={['ds-approval-card__details', className].filter(Boolean).join(' ')}>
      {items.map(([name, value], i) => (
        <div key={i}>
          <dt>{name}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** A sentence about the action. */
export function ApprovalCardSummary({ className, ...rest }: HTMLAttributes<HTMLParagraphElement>) {
  return <p {...rest} className={['ds-approval-card__summary', className].filter(Boolean).join(' ')} />;
}

/** What will change, in a monospace box (a command, files, a diff). */
export function ApprovalCardPreview({ className, ...rest }: HTMLAttributes<HTMLPreElement>) {
  return <pre {...rest} className={['ds-approval-card__preview', className].filter(Boolean).join(' ')} />;
}

export interface ApprovalCardRecipientsProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
  /** The first people, by name (up to four get an avatar); `src` for a picture, otherwise the first letter. */
  people: { name: string; src?: string }[];
  /** Everyone the action reaches; the rest show as "+N more". */
  total?: number;
  /** The "+N more" text, for other languages. */
  moreLabel?: (count: number) => ReactNode;
}

/** Who the action reaches: overlapping avatars, the first names and "+N more". */
export function ApprovalCardRecipients({ people, total, moreLabel = (n) => `+${n} more`, className, ...rest }: ApprovalCardRecipientsProps) {
  const more = (total ?? people.length) - people.length;
  return (
    <div {...rest} className={['ds-approval-card__recipients', className].filter(Boolean).join(' ')}>
      <AvatarGroup size="xs" aria-hidden>
        {people.slice(0, 4).map((p) => (
          <Avatar key={p.name} name={p.name} src={p.src} initials={p.name.charAt(0)} />
        ))}
      </AvatarGroup>
      <span>{people.map((p) => p.name).join(', ')}</span>
      {more > 0 && <span className="ds-approval-card__more">{moreLabel(more)}</span>}
    </div>
  );
}
