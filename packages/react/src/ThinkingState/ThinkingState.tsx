import { RiAlertFill, RiArrowDownSLine, RiArrowRightSLine, RiCheckLine } from '@remixicon/react';
import { useId, useState, type HTMLAttributes, type LiHTMLAttributes, type ReactNode, type Ref } from 'react';
import { Spinner } from '../Spinner';

// Styles live in @helloantek/ds-css (classes ds-thinking-state*, ds-thinking-step*); these components only render
// the markup.

export interface ThinkingStateProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  ref?: Ref<HTMLDivElement>;
  /** `working` shows the steps as they happen; `done` folds them into one line that opens back. */
  status?: 'working' | 'done';
  /** Done, the line's words: "Thought for 14 s". */
  title?: ReactNode;
  /** Done, after the words: "6 sources · 4 steps". */
  summary?: ReactNode;
  /** Done, open state (controlled); it starts folded. */
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** The `ThinkingStep`s, in order. */
  children: ReactNode;
  /** Texts, for other languages. */
  labels?: Partial<{ steps: string }>;
}

/** The AI at work, step by step, where the answer will appear; when the answer starts it folds into one line. */
export function ThinkingState({ status = 'working', title, summary, open: openProp, defaultOpen = false, onOpenChange, children, labels = {}, className, ...rest }: ThinkingStateProps) {
  const id = useId();
  const [own, setOwn] = useState(defaultOpen);
  const done = status === 'done';
  const open = done ? (openProp ?? own) : true;
  const toggle = () => {
    if (openProp === undefined) setOwn(!open);
    onOpenChange?.(!open);
  };
  return (
    <div {...rest} className={['ds-thinking-state', done && 'ds-thinking-state--done', done && open && 'ds-thinking-state--open', className].filter(Boolean).join(' ')}>
      {done && (
        <button type="button" className="ds-thinking-state__head" aria-expanded={open} aria-controls={`${id}-steps`} onClick={toggle}>
          <RiCheckLine aria-hidden />
          <span className="ds-thinking-state__title">{title}</span>
          {summary !== undefined && <span className="ds-thinking-state__meta">· {summary}</span>}
          {open ? <RiArrowDownSLine aria-hidden /> : <RiArrowRightSLine aria-hidden />}
        </button>
      )}
      <ol className="ds-thinking-state__steps" id={`${id}-steps`} aria-label={labels.steps ?? 'Steps'} aria-live={done ? undefined : 'polite'} hidden={!open}>
        {children}
      </ol>
    </div>
  );
}

export interface ThinkingStepProps extends Omit<LiHTMLAttributes<HTMLLIElement>, 'title'> {
  ref?: Ref<HTMLLIElement>;
  /** `running` shows the spinner and the words in the text colour. */
  status?: 'done' | 'running';
  /** The step's 16 px icon (done steps). */
  icon?: ReactNode;
  /** What it does or did: "Searching", "Read the refund policy". */
  label: ReactNode;
  /** After the words: "3 matches". */
  detail?: ReactNode;
  /** How long it took, or the live time while running: "2 s", "0:04". */
  time?: ReactNode;
  /** Under the line: `ThinkingSources`, `ThinkingNote`. */
  children?: ReactNode;
}

/** One step: its icon (a spinner while it runs), what it did and how long, with what it found under it. */
export function ThinkingStep({ status = 'done', icon, label, detail, time, children, className, ...rest }: ThinkingStepProps) {
  return (
    <li {...rest} className={['ds-thinking-step', status === 'running' && 'ds-thinking-step--running', className].filter(Boolean).join(' ')}>
      <div className="ds-thinking-step__line">
        {status === 'running' ? <Spinner decorative /> : icon}
        <span className="ds-thinking-step__label">{label}</span>
        {detail !== undefined && <span className="ds-thinking-step__detail">{detail}</span>}
        {time !== undefined && <span className="ds-thinking-step__time">{time}</span>}
      </div>
      {children}
    </li>
  );
}

/** A source it searched: a chip with its logo, a link when it has an `href`. */
export interface ThinkingSource {
  label: ReactNode;
  icon?: ReactNode;
  href?: string;
}

export interface ThinkingSourcesProps extends HTMLAttributes<HTMLUListElement> {
  ref?: Ref<HTMLUListElement>;
  sources: ThinkingSource[];
  /** How many more it searched: "+3 more". */
  more?: number;
  /** Texts, for other languages. */
  labels?: Partial<{ sources: string; more: (count: number) => string }>;
}

/** The sources a step searched, as chips that wrap. */
export function ThinkingSources({ sources, more = 0, labels = {}, className, ...rest }: ThinkingSourcesProps) {
  return (
    <ul {...rest} aria-label={labels.sources ?? 'Sources'} className={['ds-thinking-state__sources', className].filter(Boolean).join(' ')}>
      {sources.map((s, i) => (
        <li key={i}>
          {s.href ? (
            <a className="ds-thinking-state__source" href={s.href}>
              {s.icon}
              {s.label}
            </a>
          ) : (
            <span className="ds-thinking-state__source">
              {s.icon}
              {s.label}
            </span>
          )}
        </li>
      ))}
      {more > 0 && (
        <li>
          <span className="ds-thinking-state__source">{labels.more ? labels.more(more) : `+${more} more`}</span>
        </li>
      )}
    </ul>
  );
}

/** Something that went wrong on the way and how it went on, in amber: "Couldn’t open GitHub – went on without it". */
export function ThinkingNote({ children, className, ...rest }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p {...rest} className={['ds-thinking-state__note', className].filter(Boolean).join(' ')}>
      <RiAlertFill aria-hidden />
      {children}
    </p>
  );
}
