import { RiCloseLine, RiCornerDownLeftLine, RiFileCopyLine, RiPauseLine, RiSparkling2Fill } from '@remixicon/react';
import { useId, useRef, type HTMLAttributes, type KeyboardEvent, type ReactNode, type Ref } from 'react';
import { Button } from '../Button';
import { Kbd } from '../Kbd';

// Styles live in @helloantek/ds-css (classes ds-writing-assistant*); this component only renders the markup.

/** Where the reply stands: none yet, streaming in, or ready to use. */
export type WritingAssistantStatus = 'idle' | 'streaming' | 'ready';

export interface WritingAssistantLabels {
  title: string;
  description: string;
  close: string;
  selection: string;
  prompt: string;
  suggestions: string;
  stop: string;
  replace: string;
  insertBelow: string;
  copy: string;
}

const LABELS: WritingAssistantLabels = {
  title: 'Writing assistant',
  description: 'Works on the text you selected',
  close: 'Close',
  selection: 'Selected text',
  prompt: 'What should I do with it?',
  suggestions: 'Suggestions',
  stop: 'Stop',
  replace: 'Replace',
  insertBelow: 'Insert below',
  copy: 'Copy',
};

export interface WritingAssistantProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  ref?: Ref<HTMLElement>;
  /** The text the person selected, quoted at the top while there is no reply yet. */
  selection?: ReactNode;
  /** Where to start, as Outline xs buttons under "What should I do with it?". */
  suggestions?: string[];
  onSuggestion?: (suggestion: string) => void;
  /** What they asked, as a bubble on the right. */
  ask?: ReactNode;
  /** The reply: streaming in, then ready. */
  reply?: ReactNode;
  /** Default `idle`. */
  status?: WritingAssistantStatus;
  onStop?: () => void;
  /** Replace the selection with the reply (also Enter while the reply is ready). */
  onReplace?: () => void;
  onInsertBelow?: () => void;
  onCopy?: () => void;
  /** Closes the panel. */
  onClose?: () => void;
  /** The composer at the bottom, usually `<AIChatComposer layout="column" />`. */
  composer?: ReactNode;
  /** Texts, for other languages. */
  labels?: Partial<WritingAssistantLabels>;
}

/**
 * An AI panel for writing next to your text: the text you selected, suggestions to start from, and a composer you can
 * also dictate into. The reply streams in with Stop, then lands with Replace, Insert below and Copy.
 */
export function WritingAssistant({
  selection,
  suggestions = [],
  onSuggestion,
  ask,
  reply,
  status = 'idle',
  onStop,
  onReplace,
  onInsertBelow,
  onCopy,
  onClose,
  composer,
  labels = {},
  className,
  onKeyDown,
  ...rest
}: WritingAssistantProps) {
  const t = { ...LABELS, ...labels };
  const id = useId();
  const ready = status === 'ready' && reply !== undefined;
  const conversation = useRef<HTMLDivElement>(null);

  return (
    <section
      {...rest}
      aria-labelledby={rest['aria-label'] === undefined ? (rest['aria-labelledby'] ?? `${id}-title`) : undefined}
      aria-describedby={`${id}-description`}
      className={['ds-writing-assistant', className].filter(Boolean).join(' ')}
      onKeyDown={(event: KeyboardEvent<HTMLElement>) => {
        onKeyDown?.(event);
        // Enter takes the reply, unless it is typed into the composer or presses a button.
        const target = event.target as HTMLElement;
        if (!event.defaultPrevented && ready && onReplace && event.key === 'Enter' && !target.closest('textarea, input, button, a, [contenteditable]')) {
          event.preventDefault();
          onReplace();
        }
      }}
    >
      <header className="ds-writing-assistant__header">
        <span className="ds-writing-assistant__mark" aria-hidden>
          <RiSparkling2Fill />
        </span>
        <span className="ds-writing-assistant__heading">
          <h2 id={`${id}-title`} className="ds-writing-assistant__title">
            {t.title}
          </h2>
          <p id={`${id}-description`} className="ds-writing-assistant__description">
            {t.description}
          </p>
        </span>
        {onClose && <Button variant="ghost" size="xs" icon={<RiCloseLine />} aria-label={t.close} onClick={onClose} />}
      </header>
      <div ref={conversation} className="ds-writing-assistant__conversation" tabIndex={-1} aria-live="polite" aria-busy={status === 'streaming' || undefined}>
        {selection !== undefined && !ready && (
          <blockquote className="ds-writing-assistant__selection" aria-label={t.selection}>
            {selection}
          </blockquote>
        )}
        {status === 'idle' && suggestions.length > 0 && (
          <div className="ds-writing-assistant__suggestions">
            <p id={`${id}-prompt`} className="ds-writing-assistant__prompt">
              {t.prompt}
            </p>
            <div className="ds-writing-assistant__chips" role="group" aria-labelledby={`${id}-prompt`}>
              {suggestions.map((suggestion) => (
                <Button
                  key={suggestion}
                  variant="outline"
                  size="xs"
                  onClick={() => {
                    // The suggestions go once it starts: focus stays in the panel, where Enter will take the reply.
                    conversation.current?.focus();
                    onSuggestion?.(suggestion);
                  }}
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          </div>
        )}
        {ask !== undefined && status !== 'idle' && <p className="ds-writing-assistant__ask">{ask}</p>}
        {status === 'streaming' && (
          <>
            <p className="ds-writing-assistant__streaming">
              {reply}
              <span className="ds-writing-assistant__caret" aria-hidden />
            </p>
            {onStop && (
              <div className="ds-writing-assistant__stop">
                <Button variant="outline" size="xs" leadingIcon={<RiPauseLine />} onClick={onStop}>
                  {t.stop}
                </Button>
              </div>
            )}
          </>
        )}
        {ready && (
          <div className="ds-writing-assistant__result">
            <p className="ds-writing-assistant__reply">{reply}</p>
            <div className="ds-writing-assistant__actions">
              {onReplace && (
                <Button size="xs" trailingIcon={<Kbd size="sm" variant="inverted" icon={<RiCornerDownLeftLine />} label="Enter" />} aria-keyshortcuts="Enter" onClick={onReplace}>
                  {t.replace}
                </Button>
              )}
              {onInsertBelow && (
                <Button variant="outline" size="xs" onClick={onInsertBelow}>
                  {t.insertBelow}
                </Button>
              )}
              {onCopy && <Button variant="ghost" size="xs" icon={<RiFileCopyLine />} aria-label={t.copy} onClick={onCopy} />}
            </div>
          </div>
        )}
      </div>
      {composer !== undefined && <div className="ds-writing-assistant__composer">{composer}</div>}
    </section>
  );
}
