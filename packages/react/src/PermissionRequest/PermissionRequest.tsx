import { RiCheckLine, RiCloseLine, RiCornerDownLeftLine, RiFileTextLine, RiRobotLine, RiTimeLine } from '@remixicon/react';
import { useId, useState, type HTMLAttributes, type KeyboardEvent, type ReactNode, type Ref } from 'react';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Kbd } from '../Kbd';
import { ToggleGroup, ToggleGroupItem } from '../ToggleGroup';

// Styles live in @helloantek/ds-css (classes ds-permission*); these components only render the markup.

/** How long the right lasts. */
export type PermissionDuration = 'once' | 'hour' | 'always';
/** Where the request stands: `pending` asks; the rest fold it to one line. */
export type PermissionRequestState = 'pending' | 'allowed' | 'denied' | 'expired';

const durationText: Record<PermissionDuration, string> = { once: 'Just once', hour: '1 hour', always: 'Always' };
const allowText: Record<PermissionDuration, string> = { once: 'Allow once', hour: 'Allow for 1 hour', always: 'Allow always' };

export interface PermissionRequestProps extends Omit<HTMLAttributes<HTMLElement>, 'title' | 'onChange' | 'onDurationChange'> {
  ref?: Ref<HTMLElement>;
  /** Who asks: "Support agent". */
  agent: ReactNode;
  /** The right, short: "read #billing". */
  action: ReactNode;
  /** The agent's 16 px icon; a robot by default. */
  icon?: ReactNode;
  /** The tool and where: "Slack · Acme workspace". */
  tool?: ReactNode;
  /** The tool's 12 px logo. */
  toolIcon?: ReactNode;
  /** Why the agent needs it, in its words. */
  reason?: ReactNode;
  /** What it can and cannot do (`PermissionRequestScope`), the files it touches (`PermissionRequestFiles`) or your own. */
  children?: ReactNode;
  /** A destructive right: a red badge, Allow in red, and "Just once" the only choice. */
  destructive?: boolean;
  /** The choices for how long (default once, hour, always). */
  durations?: PermissionDuration[];
  /** How long (controlled); defaults to `hour` (or `once` when destructive). */
  duration?: PermissionDuration;
  defaultDuration?: PermissionDuration;
  onDurationChange?: (duration: PermissionDuration) => void;
  /** Allow with the chosen duration (Enter in the card). */
  onAllow?: (duration: PermissionDuration) => void;
  /** Deny (Esc in the card). */
  onDeny?: () => void;
  /** Defaults to `pending`. */
  state?: PermissionRequestState;
  /** Once answered, the line's title: "Allowed for 1 hour · read #billing". Built from the state and `action` if left out. */
  outcomeTitle?: ReactNode;
  /** Once answered, the second line: "Support agent · 52 min left". */
  outcome?: ReactNode;
  /** The answered line's action: Revoke (allowed, with a border), Change (denied) or Ask again (expired). */
  onRevoke?: () => void;
  onChange?: () => void;
  onAskAgain?: () => void;
  /** Texts, for other languages. */
  labels?: Partial<{
    wantsTo: string;
    destructive: string;
    forHowLong: string;
    onceOnly: string;
    deny: string;
    durations: Partial<Record<PermissionDuration, string>>;
    allow: Partial<Record<PermissionDuration, string>>;
    allowed: string;
    denied: string;
    expired: string;
    revoke: string;
    change: string;
    askAgain: string;
  }>;
}

/** An agent asks for one specific right, for a set time; once answered it folds to one line. */
export function PermissionRequest({
  agent,
  action,
  icon = <RiRobotLine />,
  tool,
  toolIcon,
  reason,
  children,
  destructive = false,
  durations = ['once', 'hour', 'always'],
  duration: durationProp,
  defaultDuration,
  onDurationChange,
  onAllow,
  onDeny,
  state = 'pending',
  outcomeTitle,
  outcome,
  onRevoke,
  onChange,
  onAskAgain,
  labels = {},
  className,
  onKeyDown,
  ...rest
}: PermissionRequestProps) {
  const id = useId();
  const [own, setOwn] = useState<PermissionDuration>(defaultDuration ?? (destructive ? 'once' : durations.includes('hour') ? 'hour' : durations[0]));
  const duration = destructive ? 'once' : (durationProp ?? own);
  const t = {
    wantsTo: 'wants to',
    destructive: 'Destructive',
    forHowLong: 'For how long',
    onceOnly: 'A destructive action is allowed once at most.',
    deny: 'Deny',
    allowed: 'Allowed',
    denied: 'Denied',
    expired: 'Expired',
    revoke: 'Revoke',
    change: 'Change',
    askAgain: 'Ask again',
    ...labels,
    durations: { ...durationText, ...labels.durations },
    allow: { ...allowText, ...labels.allow },
  };

  if (state !== 'pending') {
    const verb = state === 'allowed' ? `${t.allowed}${duration === 'once' ? ' once' : duration === 'hour' ? ' for 1 hour' : ' always'}` : state === 'denied' ? t.denied : t.expired;
    return (
      <article {...rest} aria-labelledby={`${id}-title`} className={['ds-permission', 'ds-permission--answered', className].filter(Boolean).join(' ')}>
        <div className="ds-permission__answered" role="status">
          <span className={`ds-permission__status ds-permission__status--${state}`} aria-hidden>
            {state === 'allowed' ? <RiCheckLine /> : state === 'denied' ? <RiCloseLine /> : <RiTimeLine />}
          </span>
          <div className="ds-permission__who">
            <p className="ds-permission__title" id={`${id}-title`}>
              {outcomeTitle ?? (
                <>
                  {verb} · {action}
                </>
              )}
            </p>
            {outcome !== undefined && <p className="ds-permission__tool">{outcome}</p>}
          </div>
          {state === 'allowed' && onRevoke && (
            <Button variant="outline" size="xs" onClick={onRevoke}>
              {t.revoke}
            </Button>
          )}
          {state === 'denied' && onChange && (
            <Button variant="ghost" size="xs" onClick={onChange}>
              {t.change}
            </Button>
          )}
          {state === 'expired' && onAskAgain && (
            <Button variant="ghost" size="xs" onClick={onAskAgain}>
              {t.askAgain}
            </Button>
          )}
        </div>
      </article>
    );
  }

  const choose = (value: string) => {
    if (!value) return; // a single Toggle Group lets the pressed item go; the duration always has a value
    const next = value as PermissionDuration;
    if (durationProp === undefined) setOwn(next);
    onDurationChange?.(next);
  };

  // Esc denies and Enter allows while focus is in the card, except where those keys already mean something.
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    onKeyDown?.(event);
    if (event.defaultPrevented) return;
    const target = event.target as HTMLElement;
    if (event.key === 'Escape' && onDeny) {
      event.preventDefault();
      onDeny();
    } else if (event.key === 'Enter' && onAllow && !target.closest('button, a, input, textarea, select, [contenteditable="true"]')) {
      event.preventDefault();
      onAllow(duration);
    }
  };

  return (
    <article
      {...rest}
      aria-labelledby={`${id}-title`}
      // A click anywhere in the card focuses it, so Esc and Enter answer it; Tab still goes to its controls only.
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      className={['ds-permission', destructive && 'ds-permission--destructive', className].filter(Boolean).join(' ')}
    >
      <div className="ds-permission__header">
        <span className="ds-permission__icon" aria-hidden>
          {icon}
        </span>
        <div className="ds-permission__who">
          <h3 className="ds-permission__title" id={`${id}-title`}>
            <strong>{agent}</strong> {t.wantsTo} <strong>{action}</strong>
          </h3>
          {tool !== undefined && (
            <p className="ds-permission__tool">
              {toolIcon}
              {tool}
            </p>
          )}
        </div>
        {destructive && (
          <Badge variant="tint" color="red">
            {t.destructive}
          </Badge>
        )}
      </div>
      {reason !== undefined && (
        <blockquote className="ds-permission__reason">
          <p>{reason}</p>
        </blockquote>
      )}
      {children}
      <div className="ds-permission__duration">
        <p className="ds-permission__heading" id={`${id}-duration`}>
          {t.forHowLong}
        </p>
        <ToggleGroup type="single" size="sm" spacing={1} value={duration} onValueChange={choose} aria-labelledby={`${id}-duration`}>
          {durations.map((d) => (
            <ToggleGroupItem key={d} value={d} disabled={destructive && d !== 'once'}>
              {t.durations[d]}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        {destructive && <p className="ds-permission__note">{t.onceOnly}</p>}
      </div>
      <div className="ds-permission__footer">
        <Button variant="ghost" size="sm" trailingIcon={<Kbd size="sm">Esc</Kbd>} aria-keyshortcuts="Escape" onClick={onDeny}>
          {t.deny}
        </Button>
        <Button
          variant={destructive ? 'destructive' : 'default'}
          size="sm"
          trailingIcon={<Kbd size="sm" variant={destructive ? 'default' : 'inverted'} icon={<RiCornerDownLeftLine />} label="Enter" />}
          aria-keyshortcuts="Enter"
          onClick={() => onAllow?.(duration)}
        >
          {t.allow[duration]}
        </Button>
      </div>
    </article>
  );
}

export interface PermissionRequestScopeProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
  /** What the agent will be able to do. */
  can?: ReactNode[];
  /** What it will not be able to do. */
  cannot?: ReactNode[];
  labels?: Partial<{ can: string; cannot: string }>;
}

/** What the right covers: "It can" with green checks, "It cannot" with muted crosses. */
export function PermissionRequestScope({ can = [], cannot = [], labels = {}, className, ...rest }: PermissionRequestScopeProps) {
  const list = (kind: 'can' | 'cannot', items: ReactNode[], heading: string) =>
    items.length > 0 && (
      <div className="ds-permission__list">
        <p className="ds-permission__heading">{heading}</p>
        <ul aria-label={heading}>
          {items.map((item, i) => (
            <li key={i} className={`ds-permission__item ds-permission__item--${kind}`}>
              {kind === 'can' ? <RiCheckLine aria-hidden /> : <RiCloseLine aria-hidden />}
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  return (
    <div {...rest} className={['ds-permission__section', className].filter(Boolean).join(' ')}>
      {list('can', can, labels.can ?? 'It can')}
      {list('cannot', cannot, labels.cannot ?? 'It cannot')}
    </div>
  );
}

export interface PermissionRequestFilesProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
  /** The first files: name and size. */
  files: { name: ReactNode; size?: ReactNode; icon?: ReactNode }[];
  /** How many files in all; the rest show as "N more". */
  total?: number;
  labels?: Partial<{ files: string; more: (n: number) => string }>;
}

/** The files the right touches: the count, the first few with their size, and "N more". */
export function PermissionRequestFiles({ files, total, labels = {}, className, ...rest }: PermissionRequestFilesProps) {
  const all = total ?? files.length;
  const more = all - files.length;
  const heading = labels.files ?? 'Files';
  return (
    <div {...rest} className={['ds-permission__section', 'ds-permission__section--files', className].filter(Boolean).join(' ')}>
      <p className="ds-permission__heading">
        {heading}
        <Badge variant="tint">{all}</Badge>
      </p>
      <ul className="ds-permission__files" aria-label={heading}>
        {files.map((file, i) => (
          <li key={i} className="ds-permission__file">
            {file.icon ?? <RiFileTextLine aria-hidden />}
            <span>{file.name}</span>
            {file.size !== undefined && <span className="ds-permission__size">{file.size}</span>}
          </li>
        ))}
      </ul>
      {more > 0 && <p className="ds-permission__more">{labels.more ? labels.more(more) : `${more} more`}</p>}
    </div>
  );
}
