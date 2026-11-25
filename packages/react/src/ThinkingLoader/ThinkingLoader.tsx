import { RiCheckLine, RiTimeLine } from '@remixicon/react';
import type { HTMLAttributes, ReactNode, Ref } from 'react';
import { Button } from '../Button';
import { Spinner } from '../Spinner';

// Styles live in @helloantek/ds-css (classes ds-thinking*); this component only renders the markup.

/** Where the reply stands: working, taking longer than usual (with Stop), done, or stopped. */
export type ThinkingLoaderStatus = 'thinking' | 'slow' | 'done' | 'stopped';

export interface ThinkingLoaderProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
  /** Defaults to `thinking`. */
  status?: ThinkingLoaderStatus;
  /**
   * What it is doing or did: "Reading 4 files…", "Thought for 10 s", "Stopped after 52 s". Read out when it changes.
   * Defaults to "Taking longer than usual" when `slow`.
   */
  children?: ReactNode;
  /** How long it has run, after the words when `slow`: "0:48". */
  elapsed?: ReactNode;
  /** Stop, shown when `slow`. */
  onStop?: () => void;
  /** Texts, for other languages. */
  labels?: Partial<{ slow: string; stop: string }>;
}

/** The small pill an AI reply shows before its first word: a spinner and what it is doing, then how long it thought. */
export function ThinkingLoader({ status = 'thinking', children, elapsed, onStop, labels = {}, className, ...rest }: ThinkingLoaderProps) {
  const t = { slow: 'Taking longer than usual', stop: 'Stop', ...labels };
  const working = status === 'thinking' || status === 'slow';
  return (
    <div {...rest} className={['ds-thinking', `ds-thinking--${status}`, className].filter(Boolean).join(' ')}>
      {working ? <Spinner size="sm" decorative /> : status === 'done' ? <RiCheckLine aria-hidden /> : <RiTimeLine aria-hidden />}
      <span className="ds-thinking__label" role="status">
        {children ?? (status === 'slow' ? t.slow : null)}
      </span>
      {status === 'slow' && elapsed !== undefined && <span className="ds-thinking__time">· {elapsed}</span>}
      {status === 'slow' && onStop && (
        <Button variant="secondary" size="xs" onClick={onStop}>
          {t.stop}
        </Button>
      )}
    </div>
  );
}
