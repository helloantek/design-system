import { RiArrowGoBackLine, RiArrowLeftSLine, RiArrowRightSLine, RiCommandLine, RiSparkling2Fill } from '@remixicon/react';
import { Fragment, useEffect, useRef, useState, type HTMLAttributes, type KeyboardEvent, type ReactNode, type Ref } from 'react';
import { Button } from '../Button';
import { Kbd, KbdGroup } from '../Kbd';

// Styles live in @helloantek/ds-css (classes ds-inline-diff*); this component only renders the markup.

/** One suggested edit: the words it takes out, the words it puts in, or both. */
export interface InlineDiffEdit {
  id: string;
  removed?: string;
  added?: string;
}

/** A piece of the text: plain words, or an edit. */
export type InlineDiffSegment = string | InlineDiffEdit;

export type InlineDiffDecision = 'accepted' | 'rejected';

export interface InlineDiffLabels {
  accept: string;
  reject: string;
  acceptAll: string;
  rejectAll: string;
  previous: string;
  next: string;
  undo: string;
  /** "suggestions" after the count. */
  suggestions: (count: number) => string;
  /** An edit's name: "Edit 1 of 3". */
  edit: (index: number, count: number) => string;
  /** The summary once all are decided: "3 edits accepted · 1 rejected". */
  summary: (accepted: number, rejected: number) => string;
}

const LABELS: InlineDiffLabels = {
  accept: 'Accept',
  reject: 'Reject',
  acceptAll: 'Accept all',
  rejectAll: 'Reject all',
  previous: 'Previous edit',
  next: 'Next edit',
  undo: 'Undo',
  suggestions: (count) => (count === 1 ? 'suggestion' : 'suggestions'),
  edit: (index, count) => `Edit ${index} of ${count}`,
  summary: (accepted, rejected) =>
    [accepted > 0 && `${accepted} ${accepted === 1 ? 'edit' : 'edits'} accepted`, rejected > 0 && `${rejected} rejected`].filter(Boolean).join(' · '),
};

export interface InlineDiffProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  ref?: Ref<HTMLElement>;
  /** The text with its edits, in order. */
  segments: InlineDiffSegment[];
  /** In the header while reviewing: "Suggested by AI · Make it shorter". */
  label?: ReactNode;
  /** What was decided, by edit id; leave out for uncontrolled. */
  decisions?: Record<string, InlineDiffDecision>;
  defaultDecisions?: Record<string, InlineDiffDecision>;
  onDecisionsChange?: (decisions: Record<string, InlineDiffDecision>) => void;
  /** Texts, for other languages. */
  labels?: Partial<InlineDiffLabels>;
}

const isEdit = (segment: InlineDiffSegment): segment is InlineDiffEdit => typeof segment !== 'string';

/**
 * AI edits to prose, shown in place: struck words in red, new words in green. The focused edit carries a small popover,
 * Accept (Y) or Reject (N); ‹ › and Tab move between edits; Reject all and Accept all close it out, and decided edits
 * leave plain text with Undo.
 */
export function InlineDiff({ segments, label, decisions: decisionsProp, defaultDecisions = {}, onDecisionsChange, labels = {}, className, ...rest }: InlineDiffProps) {
  const t = { ...LABELS, ...labels };
  const [uncontrolled, setUncontrolled] = useState<Record<string, InlineDiffDecision>>(defaultDecisions);
  const decisions = decisionsProp ?? uncontrolled;
  const history = useRef<Record<string, InlineDiffDecision>[]>([]);
  const edits = segments.filter(isEdit);
  const pending = edits.filter((edit) => decisions[edit.id] === undefined);
  const [current, setCurrent] = useState<string | null>(null);
  const focused = pending.find((edit) => edit.id === current) ?? pending[0];
  const editRefs = useRef(new Map<string, HTMLElement>());
  const wantFocus = useRef(false);

  // After a decision made from the keyboard or the popover, focus follows to the next edit.
  useEffect(() => {
    if (!wantFocus.current) return;
    wantFocus.current = false;
    if (focused) editRefs.current.get(focused.id)?.focus();
  });

  const commit = (next: Record<string, InlineDiffDecision>) => {
    history.current.push(decisions);
    if (decisionsProp === undefined) setUncontrolled(next);
    onDecisionsChange?.(next);
  };
  const decide = (edit: InlineDiffEdit, decision: InlineDiffDecision, refocus: boolean) => {
    const at = pending.indexOf(edit);
    const after = pending[at + 1] ?? pending[at - 1];
    setCurrent(after?.id ?? null);
    wantFocus.current = refocus;
    commit({ ...decisions, [edit.id]: decision });
  };
  const decideAll = (decision: InlineDiffDecision) => commit({ ...decisions, ...Object.fromEntries(pending.map((edit) => [edit.id, decision])) });
  const undo = () => {
    // Back one step; decisions given from the start go back to none.
    const previous = history.current.pop() ?? {};
    if (decisionsProp === undefined) setUncontrolled(previous);
    onDecisionsChange?.(previous);
  };
  const move = (by: number) => {
    if (!focused) return;
    const next = pending[(pending.indexOf(focused) + by + pending.length) % pending.length];
    setCurrent(next.id);
    editRefs.current.get(next.id)?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLElement>, edit: InlineDiffEdit) => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    const key = event.key.toLowerCase();
    if (key === 'y' || key === 'n') {
      event.preventDefault();
      decide(edit, key === 'y' ? 'accepted' : 'rejected', true);
    }
  };

  const accepted = edits.filter((edit) => decisions[edit.id] === 'accepted').length;
  const rejected = edits.filter((edit) => decisions[edit.id] === 'rejected').length;
  const done = pending.length === 0;

  return (
    <section {...rest} className={['ds-inline-diff', done && 'ds-inline-diff--done', className].filter(Boolean).join(' ')}>
      <header className="ds-inline-diff__header">
        <RiSparkling2Fill aria-hidden />
        <span className="ds-inline-diff__label" role="status">
          {done ? t.summary(accepted, rejected) : label}
        </span>
      </header>
      <p className="ds-inline-diff__text">
        {segments.map((segment, i) => {
          if (!isEdit(segment)) return <Fragment key={i}>{segment}</Fragment>;
          const decision = decisions[segment.id];
          if (decision === 'accepted') return <Fragment key={segment.id}>{segment.added ?? ''}</Fragment>;
          if (decision === 'rejected') return <Fragment key={segment.id}>{segment.removed ?? ''}</Fragment>;
          const isFocused = segment === focused;
          return (
            <span
              key={segment.id}
              ref={(node) => {
                if (node) editRefs.current.set(segment.id, node);
                else editRefs.current.delete(segment.id);
              }}
              className={['ds-inline-diff__edit', isFocused && 'ds-inline-diff__edit--focused'].filter(Boolean).join(' ')}
              role="group"
              aria-roledescription="suggested edit"
              aria-label={t.edit(pending.indexOf(segment) + 1, pending.length)}
              aria-keyshortcuts="Y N"
              tabIndex={0}
              onFocus={() => setCurrent(segment.id)}
              onKeyDown={(event) => onKeyDown(event, segment)}
            >
              {segment.removed !== undefined && <del>{segment.removed}</del>}
              {segment.removed !== undefined && segment.added !== undefined && ' '}
              {segment.added !== undefined && <ins>{segment.added}</ins>}
              {isFocused && (
                <span className="ds-inline-diff__popover">
                  <Button variant="ghost" size="xs" trailingIcon={<Kbd size="sm">N</Kbd>} tabIndex={-1} onClick={() => decide(segment, 'rejected', true)}>
                    {t.reject}
                  </Button>
                  <Button size="xs" trailingIcon={<Kbd size="sm" variant="inverted">Y</Kbd>} tabIndex={-1} onClick={() => decide(segment, 'accepted', true)}>
                    {t.accept}
                  </Button>
                </span>
              )}
            </span>
          );
        })}
      </p>
      <footer className="ds-inline-diff__footer">
        {done ? (
          <Button
            variant="ghost"
            size="sm"
            leadingIcon={<RiArrowGoBackLine />}
            trailingIcon={
              <KbdGroup>
                <Kbd size="sm" icon={<RiCommandLine />} label="Command" />
                <Kbd size="sm">Z</Kbd>
              </KbdGroup>
            }
            onClick={undo}
          >
            {t.undo}
          </Button>
        ) : (
          <>
            <span className="ds-inline-diff__count">{pending.length}</span>
            <span className="ds-inline-diff__count-label">{t.suggestions(pending.length)}</span>
            <Button variant="ghost" size="xs" icon={<RiArrowLeftSLine />} aria-label={t.previous} disabled={pending.length < 2} onClick={() => move(-1)} />
            <Button variant="ghost" size="xs" icon={<RiArrowRightSLine />} aria-label={t.next} disabled={pending.length < 2} onClick={() => move(1)} />
            <Button variant="outline" size="sm" onClick={() => decideAll('rejected')}>
              {t.rejectAll}
            </Button>
            <Button size="sm" onClick={() => decideAll('accepted')}>
              {t.acceptAll}
            </Button>
          </>
        )}
      </footer>
    </section>
  );
}
