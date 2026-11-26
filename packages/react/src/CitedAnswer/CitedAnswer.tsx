import { RiArrowRightLine } from '@remixicon/react';
import { Fragment, useId, useState, type HTMLAttributes, type ReactNode, type Ref } from 'react';
import { Button } from '../Button';

// Styles live in @helloantek/ds-css (classes ds-cited-answer*); this component only renders the markup.

/** One source, cited by its number (its place in `sources`, from 1). */
export interface CitedAnswerSource {
  /** Where it is from: "Help center". */
  name: string;
  /** Its logo, in `currentColor`. */
  icon?: ReactNode;
  /** The page or document: "Refunds and returns". */
  title?: ReactNode;
  /** The passage it quotes, shown when the source is opened; the words the answer uses in `<strong>`. */
  quote?: ReactNode;
}

/** A piece of a paragraph: plain words, or a claim that ends in the citation of a source (1-based). */
export type CitedAnswerPart = ReactNode | { text: ReactNode; cite: number };

export interface CitedAnswerLabels {
  /** The footer at rest. */
  hint: string;
  followUp: string;
  /** The sources list's name. */
  sources: string;
  /** A citation's name: "Source 2, Refund policy". */
  citation: (number: number, name: string) => string;
  /** "· cited in 2 sentences". */
  citedIn: (count: number) => string;
}

const LABELS: CitedAnswerLabels = {
  hint: 'Ask about any sentence',
  followUp: 'Follow up',
  sources: 'Sources',
  citation: (number, name) => `Source ${number}, ${name}`,
  citedIn: (count) => `· cited in ${count} ${count === 1 ? 'sentence' : 'sentences'}`,
};

export interface CitedAnswerProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  ref?: Ref<HTMLElement>;
  sources: CitedAnswerSource[];
  /** The answer: paragraphs of parts. */
  paragraphs: CitedAnswerPart[][];
  /** After the marks in the header: "3 sources · 12 pages read". */
  meta?: ReactNode;
  /** The opened source (1-based); leave out for uncontrolled. `null` for none. */
  open?: number | null;
  defaultOpen?: number | null;
  onOpenChange?: (source: number | null) => void;
  /** Follow up, with the source in view (1-based) or `null`. */
  onFollowUp?: (source: number | null) => void;
  /** Texts, for other languages. */
  labels?: Partial<CitedAnswerLabels>;
}

const isClaim = (part: CitedAnswerPart): part is { text: ReactNode; cite: number } => typeof part === 'object' && part !== null && 'cite' in (part as object) && 'text' in (part as object);

/**
 * An answer wired to its sources: each claim ends in a numbered citation; point at one and its sentences and source
 * light up while the rest fades; click a citation or a source for the passage it quotes, and Follow up.
 */
export function CitedAnswer({ sources, paragraphs, meta, open: openProp, defaultOpen = null, onOpenChange, onFollowUp, labels = {}, className, ...rest }: CitedAnswerProps) {
  const t = { ...LABELS, ...labels };
  const id = useId();
  const [uncontrolled, setUncontrolled] = useState<number | null>(defaultOpen);
  const open = openProp === undefined ? uncontrolled : openProp;
  const [pointed, setPointed] = useState<number | null>(null);
  const focus = pointed ?? open;
  const counts = new Map<number, number>();
  for (const paragraph of paragraphs) for (const part of paragraph) if (isClaim(part)) counts.set(part.cite, (counts.get(part.cite) ?? 0) + 1);

  const setOpen = (next: number | null) => {
    if (openProp === undefined) setUncontrolled(next);
    onOpenChange?.(next);
  };
  const toggle = (n: number) => setOpen(open === n ? null : n);
  const point = (n: number | null) => ({
    onMouseEnter: () => setPointed(n),
    onMouseLeave: () => setPointed(null),
    onFocus: () => setPointed(n),
    onBlur: () => setPointed(null),
  });
  const opened = open !== null ? sources[open - 1] : undefined;
  const focused = focus !== null ? sources[focus - 1] : undefined;

  return (
    <article {...rest} className={['ds-cited-answer', focus !== null && 'ds-cited-answer--focused', className].filter(Boolean).join(' ')}>
      <header className="ds-cited-answer__header">
        <span className="ds-cited-answer__marks" aria-hidden>
          {sources.map((source, index) => (
            <span key={index} className="ds-cited-answer__mark">
              {source.icon}
            </span>
          ))}
        </span>
        {meta !== undefined && <span className="ds-cited-answer__meta">{meta}</span>}
      </header>
      <div className="ds-cited-answer__answer">
        {paragraphs.map((paragraph, p) => (
          <p key={p} className="ds-cited-answer__paragraph">
            {paragraph.map((part, i) =>
              isClaim(part) ? (
                <Fragment key={i}>
                  <span className="ds-cited-answer__claim" data-lit={focus === part.cite || undefined}>
                    {part.text}
                  </span>
                  <button
                    type="button"
                    className="ds-cited-answer__cite"
                    data-active={focus === part.cite || undefined}
                    aria-label={t.citation(part.cite, sources[part.cite - 1]?.name ?? '')}
                    aria-expanded={open === part.cite}
                    aria-controls={open === part.cite ? `${id}-passage` : undefined}
                    onClick={() => toggle(part.cite)}
                    {...point(part.cite)}
                  >
                    {part.cite}
                  </button>
                </Fragment>
              ) : (
                <Fragment key={i}>{part}</Fragment>
              ),
            )}
          </p>
        ))}
        {opened && opened.quote !== undefined && (
          <figure id={`${id}-passage`} className="ds-cited-answer__passage">
            <figcaption className="ds-cited-answer__from">
              {opened.icon !== undefined && (
                <span className="ds-cited-answer__from-icon" aria-hidden>
                  {opened.icon}
                </span>
              )}
              <span>
                {opened.name}
                {opened.title !== undefined && <> · {opened.title}</>}
              </span>
            </figcaption>
            <blockquote className="ds-cited-answer__quote">“{opened.quote}”</blockquote>
          </figure>
        )}
        <ul className="ds-cited-answer__sources" aria-label={t.sources}>
          {sources.map((source, index) => {
            const n = index + 1;
            return (
              <li key={index}>
                <button type="button" className="ds-cited-answer__source" data-active={focus === n || undefined} aria-pressed={open === n} onClick={() => toggle(n)} {...point(n)}>
                  {source.icon !== undefined && (
                    <span className="ds-cited-answer__source-icon" aria-hidden>
                      {source.icon}
                    </span>
                  )}
                  <span className="ds-cited-answer__source-name">{source.name}</span>
                  <span className="ds-cited-answer__source-number">{n}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <footer className="ds-cited-answer__footer">
        <span className="ds-cited-answer__status">
          {focused ? (
            <>
              <strong>{focused.name}</strong> {t.citedIn(counts.get(focus!) ?? 0)}
            </>
          ) : (
            t.hint
          )}
        </span>
        {onFollowUp && (
          <Button variant="outline" size="xs" trailingIcon={<RiArrowRightLine />} onClick={() => onFollowUp(open)}>
            {t.followUp}
          </Button>
        )}
      </footer>
    </article>
  );
}
