import type { HTMLAttributes, ReactNode, Ref } from 'react';

// Styles live in @helloantek/ds-css (classes ds-marker*); this component only renders the markup.

/** Figma "Variant": a plain line, centred between two rules (e.g. a date), or with a rule underneath. */
export type MarkerVariant = 'default' | 'separator' | 'border';

export interface MarkerProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
  /** Figma Variant. */
  variant?: MarkerVariant;
  /** Figma "Icon": a 16 px icon before the text, using `currentColor`; decorative. */
  icon?: ReactNode;
  /** Figma "Trailing icon": a 16 px icon after the text. */
  trailingIcon?: ReactNode;
  /** The "Loading" demo: a spinner in place of the icon, for the step in progress. */
  loading?: boolean;
  /** Figma "Text"; links inside stay muted and underlined. */
  children: ReactNode;
}

// The Sort UI 2.0 Spinner's arc (Lucide loader-circle, 16 px, 1.25 px stroke).
const spinner = (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.875} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M21 12a9 9 0 1 1-6.22-8.56" />
  </svg>
);

/** Figma "Marker": a quiet line in a feed or a chat (an event, a date, a step). */
export function Marker({ variant = 'default', icon, trailingIcon, loading = false, className, children, ...rest }: MarkerProps) {
  const lead = loading ? spinner : icon;
  return (
    <div {...rest} className={['ds-marker', variant !== 'default' && `ds-marker--${variant}`, className].filter(Boolean).join(' ')}>
      {lead && (
        <span className={loading ? 'ds-marker__icon ds-marker__icon--spin' : 'ds-marker__icon'} aria-hidden>
          {lead}
        </span>
      )}
      <span className="ds-marker__content">{children}</span>
      {trailingIcon && (
        <span className="ds-marker__icon" aria-hidden>
          {trailingIcon}
        </span>
      )}
    </div>
  );
}
