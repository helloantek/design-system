import type { HTMLAttributes, Ref } from 'react';

// Styles live in @helloantek/ds-css (classes ds-separator*); this component only renders the markup.

/** Figma "Orientation". */
export type SeparatorOrientation = 'horizontal' | 'vertical';

export interface SeparatorProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
  /** Figma Orientation: across its container, or upright between items in a row (the row's height). */
  orientation?: SeparatorOrientation;
  /**
   * Visual only (default): hidden from screen readers, like the lines between stats or receipt rows. Pass `false` when
   * the line divides sections that a screen reader should hear as separate (`role="separator"`).
   */
  decorative?: boolean;
}

/** Figma "Separator": a 1 px line between groups of content. */
export function Separator({ orientation = 'horizontal', decorative = true, className, ...rest }: SeparatorProps) {
  const semantics = decorative ? { role: 'none' } : { role: 'separator', 'aria-orientation': orientation === 'vertical' ? ('vertical' as const) : undefined };
  return <div {...semantics} {...rest} className={['ds-separator', orientation === 'vertical' && 'ds-separator--vertical', className].filter(Boolean).join(' ')} />;
}
