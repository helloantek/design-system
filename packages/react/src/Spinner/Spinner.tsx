import type { HTMLAttributes, Ref } from 'react';

// Styles live in @helloantek/ds-css (classes ds-spinner*); this component only renders the markup.

/** Figma "Variant": the Lucide loader arc in the text colour, or a ring fading from foreground 50 % to 5 %. */
export type SpinnerVariant = 'default' | 'gradient';

/** Figma "Size": 12, 16, 20 or 24 px. */
export type SpinnerSize = 'sm' | 'default' | 'lg' | 'xl';

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  ref?: Ref<HTMLSpanElement>;
  /** Figma Variant. */
  variant?: SpinnerVariant;
  /** Figma Size. */
  size?: SpinnerSize;
  /** What screen readers hear (`role="status"`). Default "Loading". */
  label?: string;
  /**
   * Visual only: hidden from screen readers. Use it when the text next to it already says what is happening, as in a
   * "Please wait" button or a "Processing payment…" row.
   */
  decorative?: boolean;
}

/** Figma "Spinner": a turning indicator for work in progress. */
export function Spinner({ variant = 'default', size = 'default', label = 'Loading', decorative = false, className, ...rest }: SpinnerProps) {
  const semantics = decorative ? { 'aria-hidden': true } : { role: 'status', 'aria-label': label };
  return (
    <span {...semantics} {...rest} className={['ds-spinner', variant === 'gradient' && 'ds-spinner--gradient', size !== 'default' && `ds-spinner--${size}`, className].filter(Boolean).join(' ')}>
      {variant === 'default' && (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
          <path d="M21 12a9 9 0 1 1-6.22-8.56" />
        </svg>
      )}
    </span>
  );
}
