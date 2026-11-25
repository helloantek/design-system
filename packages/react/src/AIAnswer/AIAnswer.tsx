import { RiAlertFill, RiArrowRightSLine, RiPauseLine, RiRefreshLine, RiSparkling2Fill } from '@remixicon/react';
import { useId, type HTMLAttributes, type ReactNode, type Ref } from 'react';
import { Badge } from '../Badge';
import { Button } from '../Button';

// Styles live in @helloantek/ds-css (classes ds-ai-answer*); these components only render the markup.

/** Where the answer stands. */
export type AIAnswerStatus = 'streaming' | 'done' | 'stopped';

/** One source the answer used, shown as a small card with its number. */
export interface AIAnswerSource {
  /** Where it is from: "Notion". */
  name: ReactNode;
  /** What it is: "Refund policy – timelines". */
  title: ReactNode;
  /** Its logo, 12 px, in `currentColor`. */
  icon?: ReactNode;
  /** Opens the source. */
  href?: string;
}

export interface AIAnswerLabels {
  sources: string;
  /** The card after the sources: "+3" over "more". */
  more: string;
  searching: string;
  answer: string;
  related: string;
  stop: string;
  continue: string;
  stopped: string;
}

const LABELS: AIAnswerLabels = {
  sources: 'Sources',
  more: 'more',
  searching: 'Searching…',
  answer: 'Answer',
  related: 'Related',
  stop: 'Stop',
  continue: 'Continue',
  stopped: 'Stopped – the answer may be incomplete',
};

export interface AIAnswerProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  ref?: Ref<HTMLElement>;
  /** The question, as the card's heading. */
  question: ReactNode;
  /** The sources it used, numbered in order. */
  sources?: AIAnswerSource[];
  /** How many more sources it used: the "+3 more" card. */
  moreSources?: number;
  /** Opens the rest of the sources. */
  onMoreSources?: () => void;
  /** While the sources still load: this many "Searching…" cards in their place. */
  searching?: number;
  /** Default `done`. `streaming` shows Stop; `stopped` says so and offers Continue. */
  status?: AIAnswerStatus;
  /** The answer: paragraphs, `AIAnswerPoints`, `AIAnswerCitation` after each claim, `AIAnswerCaret` at the end while streaming. */
  children?: ReactNode;
  /** Questions to go on with. */
  related?: ReactNode[];
  onRelated?: (index: number) => void;
  /** The actions on the left of the footer, usually `MessageActions`. */
  actions?: ReactNode;
  /** On the right of the footer when done: "Answered in 3.4 s". */
  meta?: ReactNode;
  onStop?: () => void;
  onContinue?: () => void;
  /** Texts, for other languages. */
  labels?: Partial<AIAnswerLabels>;
}

/**
 * An answer with its sources: the question, the sources it used as small cards with their numbers, the answer with its
 * key words in bold and a citation chip after each claim, related questions to go on with, and the actions with how
 * long it took. It streams in word by word; stopped early, it says so.
 */
export function AIAnswer({
  question,
  sources = [],
  moreSources = 0,
  onMoreSources,
  searching = 0,
  status = 'done',
  children,
  related = [],
  onRelated,
  actions,
  meta,
  onStop,
  onContinue,
  labels = {},
  className,
  ...rest
}: AIAnswerProps) {
  const t = { ...LABELS, ...labels };
  const id = useId();
  const more = (
    <>
      <span className="ds-ai-answer__more-count">+{moreSources}</span>
      <span className="ds-ai-answer__more-label">{t.more}</span>
    </>
  );

  return (
    <article {...rest} aria-labelledby={`${id}-question`} aria-busy={status === 'streaming' || undefined} className={['ds-ai-answer', className].filter(Boolean).join(' ')}>
      <h3 id={`${id}-question`} className="ds-ai-answer__question">
        {question}
      </h3>
      {(sources.length > 0 || searching > 0) && (
        <ol className="ds-ai-answer__sources" aria-label={t.sources}>
          {sources.map((source, index) => {
            const body = (
              <>
                <span className="ds-ai-answer__source-name">
                  {source.icon !== undefined && (
                    <span className="ds-ai-answer__source-icon" aria-hidden>
                      {source.icon}
                    </span>
                  )}
                  <span className="ds-ai-answer__source-from">{source.name}</span>
                  <span className="ds-ai-answer__source-number">{index + 1}</span>
                </span>
                <span className="ds-ai-answer__source-title">{source.title}</span>
              </>
            );
            return (
              <li key={index}>
                {source.href !== undefined ? (
                  <a className="ds-ai-answer__source" href={source.href}>
                    {body}
                  </a>
                ) : (
                  <span className="ds-ai-answer__source">{body}</span>
                )}
              </li>
            );
          })}
          {Array.from({ length: searching }, (_, index) => (
            <li key={`searching-${index}`}>
              <span className="ds-ai-answer__source ds-ai-answer__source--searching">
                <span className="ds-ai-answer__source-name">
                  <span className="ds-ai-answer__source-from">{t.searching}</span>
                </span>
              </span>
            </li>
          ))}
          {moreSources > 0 && (
            <li>
              {onMoreSources ? (
                <button type="button" className="ds-ai-answer__source ds-ai-answer__more" onClick={onMoreSources}>
                  {more}
                </button>
              ) : (
                <span className="ds-ai-answer__source ds-ai-answer__more">{more}</span>
              )}
            </li>
          )}
        </ol>
      )}
      <div className="ds-ai-answer__answer">
        <p className="ds-ai-answer__label">
          <RiSparkling2Fill aria-hidden />
          {t.answer}
        </p>
        {children}
        {status === 'stopped' && (
          <p className="ds-ai-answer__stopped">
            <RiAlertFill aria-hidden />
            {t.stopped}
          </p>
        )}
      </div>
      {related.length > 0 && status === 'done' && (
        <div className="ds-ai-answer__related" role="group" aria-labelledby={`${id}-related`}>
          <h4 id={`${id}-related`} className="ds-ai-answer__related-title">
            {t.related}
          </h4>
          <ul>
            {related.map((item, index) => (
              <li key={index}>
                <button type="button" className="ds-ai-answer__related-item" onClick={() => onRelated?.(index)}>
                  <span>{item}</span>
                  <RiArrowRightSLine aria-hidden />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <footer className="ds-ai-answer__footer">
        {actions}
        {status === 'streaming' && onStop && (
          <Button variant="outline" size="xs" leadingIcon={<RiPauseLine />} onClick={onStop}>
            {t.stop}
          </Button>
        )}
        {status === 'stopped' && onContinue && (
          <Button variant="outline" size="xs" leadingIcon={<RiRefreshLine />} onClick={onContinue}>
            {t.continue}
          </Button>
        )}
        {status === 'done' && meta !== undefined && <span className="ds-ai-answer__meta">{meta}</span>}
      </footer>
    </article>
  );
}

/** A citation chip after a claim: "Notion +1". */
export function AIAnswerCitation({ children, className }: { children?: ReactNode; className?: string }) {
  return (
    <Badge variant="tint" className={['ds-ai-answer__citation', className].filter(Boolean).join(' ')}>
      {children}
    </Badge>
  );
}

/** The answer's points, each with a dot. */
export function AIAnswerPoints({ className, ...rest }: HTMLAttributes<HTMLUListElement>) {
  return <ul {...rest} className={['ds-ai-answer__points', className].filter(Boolean).join(' ')} />;
}

export interface AIAnswerPointProps extends HTMLAttributes<HTMLLIElement> {
  /** The point's key words, in bold: "Sent the same day:". */
  lead?: ReactNode;
  /** Its citation: "Help center". */
  cite?: ReactNode;
}

/** One point: its key words in bold, the claim, its citation. */
export function AIAnswerPoint({ lead, cite, children, className, ...rest }: AIAnswerPointProps) {
  return (
    <li {...rest} className={['ds-ai-answer__point', className].filter(Boolean).join(' ')}>
      {lead !== undefined && <strong>{lead}</strong>} {children}
      {cite !== undefined && (
        <>
          {' '}
          <AIAnswerCitation>{cite}</AIAnswerCitation>
        </>
      )}
    </li>
  );
}

/** The caret at the end of the words while the answer streams in. */
export function AIAnswerCaret({ className, ...rest }: HTMLAttributes<HTMLSpanElement>) {
  return <span {...rest} aria-hidden className={['ds-ai-answer__caret', className].filter(Boolean).join(' ')} />;
}
