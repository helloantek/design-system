import { RiAlertFill, RiArrowGoBackLine, RiArrowRightSLine, RiCheckLine } from '@remixicon/react';
import { createContext, useContext, useEffect, useId, useRef, type HTMLAttributes, type LiHTMLAttributes, type ReactNode, type Ref } from 'react';
import { Button } from '../Button';

// Styles live in @helloantek/ds-css (classes ds-inbox*); these components only render the markup.

// Set when an answer is chosen in this inbox, so the row that confirms it can take the focus the answer button had.
const AnsweredHere = createContext<{ current: boolean } | null>(null);

export interface DecisionInboxProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  ref?: Ref<HTMLElement>;
  /** How many decisions are open; 0 shows "Nothing needs you". */
  count: number;
  /** The rows: `DecisionInboxItem` and `DecisionInboxAnswered`. */
  children?: ReactNode;
  /** One line in a sidebar ("3 need your input · oldest 2 h ago ›"); a click calls `onOpen`. */
  folded?: boolean;
  onOpen?: () => void;
  /** After the count on the folded line: "· oldest 2 h ago". */
  meta?: ReactNode;
  /** Under "Nothing needs you": "3 decided today · the agents go on by themselves". */
  emptyDescription?: ReactNode;
  /** Texts, for other languages. */
  labels?: Partial<{
    title: (count: number) => string;
    empty: string;
  }>;
}

/** The open decisions that wait on you, each with two quick answers. */
export function DecisionInbox({ count, children, folded = false, onOpen, meta, emptyDescription, labels = {}, className, ...rest }: DecisionInboxProps) {
  const id = useId();
  const answeredHere = useRef(false);
  const t = {
    title: (n: number) => `${n} ${n === 1 ? 'needs' : 'need'} your input`,
    empty: 'Nothing needs you',
    ...labels,
  };
  // A name given with aria-label (several inboxes on one page) replaces the title as the section's name.
  const labelledBy = rest['aria-label'] ? undefined : `${id}-title`;
  const classes = ['ds-inbox', folded && 'ds-inbox--folded', className].filter(Boolean).join(' ');

  if (count === 0 && !folded) {
    return (
      <section {...rest} aria-labelledby={labelledBy} className={classes}>
        <div className="ds-inbox__empty" role="status">
          <span className="ds-inbox__done" aria-hidden>
            <RiCheckLine />
          </span>
          <div className="ds-inbox__text">
            <p className="ds-inbox__question" id={`${id}-title`}>
              {t.empty}
            </p>
            {emptyDescription !== undefined && <p className="ds-inbox__context">{emptyDescription}</p>}
          </div>
        </div>
      </section>
    );
  }

  if (folded) {
    return (
      <section {...rest} aria-labelledby={labelledBy} className={classes}>
        <button type="button" className="ds-inbox__fold" aria-expanded={false} onClick={onOpen}>
          <RiAlertFill aria-hidden />
          <span className="ds-inbox__title" id={`${id}-title`}>
            {count === 0 ? t.empty : t.title(count)}
          </span>
          <span className="ds-inbox__meta">{meta}</span>
          <RiArrowRightSLine aria-hidden />
        </button>
      </section>
    );
  }

  return (
    <section {...rest} aria-labelledby={labelledBy} className={classes}>
      <div className="ds-inbox__header">
        <RiAlertFill aria-hidden />
        <h3 className="ds-inbox__title" id={`${id}-title`}>
          {t.title(count)}
        </h3>
      </div>
      <ul
        className="ds-inbox__list"
        onClickCapture={(event) => {
          if ((event.target as HTMLElement).closest('.ds-inbox__answers')) answeredHere.current = true;
        }}
      >
        <AnsweredHere.Provider value={answeredHere}>{children}</AnsweredHere.Provider>
      </ul>
    </section>
  );
}

/** One quick answer; the first is the main one. */
export interface DecisionInboxAnswer {
  label: ReactNode;
  onSelect?: () => void;
}

export interface DecisionInboxItemProps extends Omit<LiHTMLAttributes<HTMLLIElement>, 'title'> {
  ref?: Ref<HTMLLIElement>;
  /** What to decide: "Send the refund of €48 to Ana Silva?" */
  question: ReactNode;
  /** Why now and the agent that asks: "Over the €40 limit agents may refund alone · Support agent". */
  context?: ReactNode;
  /** The two quick answers: the first is the main (filled) one, the rest are outline. */
  answers: DecisionInboxAnswer[];
}

/** An open decision: what to decide, why now and who asks, with its answers. */
export function DecisionInboxItem({ question, context, answers, className, ...rest }: DecisionInboxItemProps) {
  const id = useId();
  return (
    <li {...rest} aria-labelledby={id} className={['ds-inbox__item', className].filter(Boolean).join(' ')}>
      <div className="ds-inbox__text">
        <p className="ds-inbox__question" id={id}>
          {question}
        </p>
        {context !== undefined && <p className="ds-inbox__context">{context}</p>}
      </div>
      <div className="ds-inbox__answers" role="group" aria-labelledby={id}>
        {answers.map((answer, i) => (
          <Button key={i} size="xs" variant={i === 0 ? 'default' : 'outline'} onClick={answer.onSelect}>
            {answer.label}
          </Button>
        ))}
      </div>
    </li>
  );
}

export interface DecisionInboxAnsweredProps extends Omit<LiHTMLAttributes<HTMLLIElement>, 'title'> {
  ref?: Ref<HTMLLIElement>;
  /** What happened: "Sent · €48 to Ana Silva". */
  title: ReactNode;
  /** What comes next: "Support agent goes on with the ticket". */
  description?: ReactNode;
  /** Takes the answer back; the row then shows the question again. */
  onUndo?: () => void;
  /** Folds the row away after this many milliseconds (paused while the pointer or focus is on it). */
  dismissAfter?: number;
  onDismiss?: () => void;
  /** Texts, for other languages. */
  labels?: Partial<{ undo: string }>;
}

/** A just-answered decision: confirms in place with Undo, then folds away. */
export function DecisionInboxAnswered({ title, description, onUndo, dismissAfter, onDismiss, labels = {}, className, onMouseEnter, onMouseLeave, onFocus, onBlur, ...rest }: DecisionInboxAnsweredProps) {
  const t = { undo: 'Undo', ...labels };
  const undo = useRef<HTMLButtonElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const answeredHere = useContext(AnsweredHere);
  const dismiss = useRef(onDismiss);
  dismiss.current = onDismiss;

  const stop = () => clearTimeout(timer.current);
  const start = () => {
    stop();
    if (dismissAfter !== undefined) timer.current = setTimeout(() => dismiss.current?.(), dismissAfter);
  };

  useEffect(() => {
    // The answer button that had focus is gone with its row: keep focus in the inbox, on Undo.
    const lost = !document.activeElement || document.activeElement === document.body;
    if (answeredHere?.current && lost && undo.current) undo.current.focus();
    else start();
    if (answeredHere) answeredHere.current = false;
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dismissAfter]);

  return (
    <li
      {...rest}
      className={['ds-inbox__item', 'ds-inbox__item--answered', className].filter(Boolean).join(' ')}
      onMouseEnter={(event) => {
        stop();
        onMouseEnter?.(event);
      }}
      onMouseLeave={(event) => {
        if (!event.currentTarget.contains(document.activeElement)) start();
        onMouseLeave?.(event);
      }}
      onFocus={(event) => {
        stop();
        onFocus?.(event);
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) start();
        onBlur?.(event);
      }}
    >
      <div className="ds-inbox__answered" role="status">
        <span className="ds-inbox__done" aria-hidden>
          <RiCheckLine />
        </span>
        <div className="ds-inbox__text">
          <p className="ds-inbox__question">{title}</p>
          {description !== undefined && <p className="ds-inbox__context">{description}</p>}
        </div>
      </div>
      {onUndo && (
        <Button ref={undo} variant="ghost" size="xs" leadingIcon={<RiArrowGoBackLine />} onClick={onUndo}>
          {t.undo}
        </Button>
      )}
    </li>
  );
}
