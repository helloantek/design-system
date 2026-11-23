import { RiArrowLeftSLine, RiArrowRightSLine, RiCornerDownLeftLine } from '@remixicon/react';
import { useId, useState, type HTMLAttributes, type KeyboardEvent, type ReactNode, type Ref } from 'react';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Input } from '../Input';
import { Kbd } from '../Kbd';

// Styles live in @helloantek/ds-css (classes ds-decision*); this component only renders the markup.

/** One numbered answer. */
export interface DecisionOption {
  label: ReactNode;
  description?: ReactNode;
  /** Marks the agent's pick with a "Recommended" badge; the card starts on it. */
  recommended?: boolean;
}

/** One preview tile of a pick. */
export interface DecisionTile {
  label: ReactNode;
  /** The picture (an `<img>` with `alt=""`, or any element). */
  preview?: ReactNode;
  /** The card starts on it. */
  recommended?: boolean;
}

/** What was answered: the number of an option or tile (0-based), or your own words. */
export type DecisionAnswer = { index: number } | { text: string };

export interface DecisionCardProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  ref?: Ref<HTMLElement>;
  /** The question: "Which plan should the new team start on?" */
  question: ReactNode;
  /** What it is about, after "Needs you": "Onboarding". */
  context?: ReactNode;
  /** What goes out, as name–value rows (one line each), for an approval. */
  details?: [ReactNode, ReactNode][];
  /** Numbered answers (Approve / Decline for an approval). */
  options?: DecisionOption[];
  /** Preview tiles for a pick, numbered before the options. */
  tiles?: DecisionTile[];
  /** A last row for your own words (default true); `otherPlaceholder` defaults to "Something else…". */
  allowOther?: boolean;
  otherPlaceholder?: string;
  /** Text the last row starts with, e.g. a saved draft. */
  defaultOtherText?: string;
  /** Called with the chosen answer: a click, its number key, or Send / Enter in the last row. */
  onAnswer?: (answer: DecisionAnswer) => void;
  /** Several questions in one card: this one's place (1-based) and how many, with ‹ › to move (round the ends). */
  page?: number;
  pageCount?: number;
  onPageChange?: (page: number) => void;
  /** Later: folds the card to one line above the composer. */
  onLater?: () => void;
  /** `later` shows the one line ("2 questions waiting", the question, Answer). */
  folded?: boolean;
  /** Answer on the folded line opens the card again. */
  onOpen?: () => void;
  /** Texts, for other languages. */
  labels?: Partial<{
    needsYou: string;
    later: string;
    recommended: string;
    send: string;
    answer: string;
    previous: string;
    next: string;
    of: (page: number, count: number) => string;
    waiting: (count: number) => string;
  }>;
}

/** An agent's question right above the composer: numbered answers, preview tiles, or your own words. */
export function DecisionCard({
  question,
  context,
  details,
  options = [],
  tiles = [],
  allowOther = true,
  otherPlaceholder = 'Something else…',
  defaultOtherText = '',
  onAnswer,
  page = 1,
  pageCount = 1,
  onPageChange,
  onLater,
  folded = false,
  onOpen,
  labels = {},
  className,
  onKeyDown,
  ...rest
}: DecisionCardProps) {
  const id = useId();
  const t = {
    needsYou: 'Needs you',
    later: 'Later',
    recommended: 'Recommended',
    send: 'Send',
    answer: 'Answer',
    previous: 'Previous question',
    next: 'Next question',
    of: (p: number, n: number) => `${p} of ${n}`,
    waiting: (n: number) => `${n} ${n === 1 ? 'question' : 'questions'} waiting`,
    ...labels,
  };
  // Tiles come first, then the options, then your own words: one numbering for all.
  const recommended = [...tiles, ...options].findIndex((x) => x.recommended);
  const [active, setActive] = useState<number | null>(recommended >= 0 ? recommended : null);
  const [text, setText] = useState(defaultOtherText);
  const count = tiles.length + options.length;
  const otherNumber = count + 1;

  if (folded) {
    return (
      <section {...rest} aria-labelledby={`${id}-title ${id}-peek`} className={['ds-decision', 'ds-decision--later', className].filter(Boolean).join(' ')}>
        <div className="ds-decision__later">
          <span className="ds-decision__ring" aria-hidden />
          <p className="ds-decision__title" id={`${id}-title`}>
            {t.waiting(pageCount)}
          </p>
          <span className="ds-decision__peek" id={`${id}-peek`}>
            {question}
          </span>
          <Button variant="outline" size="xs" onClick={onOpen}>
            {t.answer}
          </Button>
        </div>
      </section>
    );
  }

  const send = () => {
    const value = text.trim();
    if (!value) return;
    onAnswer?.({ text: value });
    setText('');
  };

  // A number answers while focus is in the card (but not while typing in the last row).
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    onKeyDown?.(event);
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return;
    const target = event.target as HTMLElement;
    if (target.closest('input, textarea, [contenteditable="true"]')) return;
    const n = Number(event.key);
    if (!Number.isInteger(n) || n < 1) return;
    if (n <= count) {
      event.preventDefault();
      onAnswer?.({ index: n - 1 });
    } else if (n === otherNumber && allowOther) {
      event.preventDefault();
      (event.currentTarget.querySelector('.ds-decision__other input') as HTMLInputElement | null)?.focus();
    }
  };

  return (
    <section
      {...rest}
      aria-labelledby={`${id}-question`}
      // A click anywhere in the card focuses it, so the numbers answer; Tab still goes to its controls only.
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      className={['ds-decision', className].filter(Boolean).join(' ')}
    >
      <div className="ds-decision__header">
        <span className="ds-decision__status">
          <span className="ds-decision__ring" aria-hidden />
          {t.needsYou}
        </span>
        {context !== undefined ? <span className="ds-decision__context">{context}</span> : <span className="ds-decision__context" aria-hidden />}
        {pageCount > 1 && (
          <div className="ds-decision__pager">
            <Button variant="ghost" size="xs" icon={<RiArrowLeftSLine />} aria-label={t.previous} onClick={() => onPageChange?.(page <= 1 ? pageCount : page - 1)} />
            <span>{t.of(page, pageCount)}</span>
            <Button variant="ghost" size="xs" icon={<RiArrowRightSLine />} aria-label={t.next} onClick={() => onPageChange?.(page >= pageCount ? 1 : page + 1)} />
          </div>
        )}
        {onLater && (
          <Button variant="ghost" size="xs" onClick={onLater}>
            {t.later}
          </Button>
        )}
      </div>
      <h3 className="ds-decision__question" id={`${id}-question`}>
        {question}
      </h3>
      {details && details.length > 0 && (
        <dl className="ds-decision__details">
          {details.map(([name, value], i) => (
            <div key={i}>
              <dt>{name}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      )}
      {tiles.length > 0 && (
        <div className="ds-decision__tiles" role="group" aria-labelledby={`${id}-question`}>
          {tiles.map((tile, i) => (
            <button
              key={i}
              type="button"
              className={['ds-decision__tile', active === i && 'ds-decision__tile--active'].filter(Boolean).join(' ')}
              aria-keyshortcuts={String(i + 1)}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => onAnswer?.({ index: i })}
            >
              <span className="ds-decision__preview">{tile.preview}</span>
              <span className="ds-decision__caption">
                <Kbd size="sm">{i + 1}</Kbd>
                {tile.label}
              </span>
            </button>
          ))}
        </div>
      )}
      <div className="ds-decision__answers" role="group" aria-labelledby={`${id}-question`}>
        {options.map((option, i) => {
          const n = tiles.length + i;
          return (
            <button
              key={i}
              type="button"
              className={['ds-decision__option', active === n && 'ds-decision__option--active'].filter(Boolean).join(' ')}
              aria-keyshortcuts={String(n + 1)}
              onMouseEnter={() => setActive(n)}
              onFocus={() => setActive(n)}
              onClick={() => onAnswer?.({ index: n })}
            >
              <Kbd size="sm">{n + 1}</Kbd>
              <span className="ds-decision__text">
                <span className="ds-decision__label">{option.label}</span>
                {option.description !== undefined && <span className="ds-decision__description">{option.description}</span>}
              </span>
              {option.recommended && (
                <Badge variant="tint" color="green">
                  {t.recommended}
                </Badge>
              )}
            </button>
          );
        })}
        {allowOther && (
          <div className="ds-decision__other">
            <Kbd size="sm">{otherNumber}</Kbd>
            <Input
              aria-label={otherPlaceholder.replace(/…$/, '')}
              aria-keyshortcuts={String(otherNumber)}
              placeholder={otherPlaceholder}
              value={text}
              onChange={(event) => setText(event.currentTarget.value)}
              onFocus={() => setActive(null)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                  send();
                }
              }}
            />
            {text.trim() !== '' && (
              <Button size="xs" trailingIcon={<Kbd size="sm" variant="inverted" icon={<RiCornerDownLeftLine />} label="Enter" />} onClick={send}>
                {t.send}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
