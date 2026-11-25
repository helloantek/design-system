import { ChangeDetectionStrategy, Component, booleanAttribute, computed, input } from '@angular/core';

// Styles live in @helloantek/ds-css (classes ds-spinner*); this component only renders the markup, as ds-react's
// Spinner does.

/** Figma "Variant": the Lucide loader arc in the text colour, or a ring fading from foreground 50 % to 5 %. */
export type SpinnerVariant = 'default' | 'gradient';
/** Figma "Size": 12, 16, 20 or 24 px. */
export type SpinnerSize = 'sm' | 'default' | 'lg' | 'xl';

/**
 * Figma "Spinner" on a native `<span>`: a turning indicator for work in progress.
 *
 *     <span dsSpinner></span>                          (role="status", named "Loading")
 *     <span dsSpinner size="sm" decorative></span>     (hidden from screen readers: the text next to it says it)
 */
@Component({
  selector: 'span[dsSpinner]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    '[attr.role]': 'decorative() ? null : "status"',
    '[attr.aria-label]': 'decorative() ? null : label()',
    '[attr.aria-hidden]': 'decorative() ? "true" : null',
    '[attr.variant]': 'null',
    '[attr.size]': 'null',
    '[attr.label]': 'null',
    '[attr.decorative]': 'null',
  },
  template: `
    @if (variant() === 'default') {
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M21 12a9 9 0 1 1-6.22-8.56" /></svg>
    }
  `,
})
export class DsSpinner {
  /** Figma Variant. */
  readonly variant = input<SpinnerVariant>('default');
  /** Figma Size. */
  readonly size = input<SpinnerSize>('default');
  /** What screen readers hear (`role="status"`). Default "Loading". */
  readonly label = input('Loading');
  /** Visual only: hidden from screen readers, when the text next to it already says what is happening. */
  readonly decorative = input(false, { transform: booleanAttribute });

  protected readonly classes = computed(() =>
    ['ds-spinner', this.variant() === 'gradient' && 'ds-spinner--gradient', this.size() !== 'default' && `ds-spinner--${this.size()}`].filter(Boolean).join(' '),
  );
}
