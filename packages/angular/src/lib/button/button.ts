import { ChangeDetectionStrategy, Component, ElementRef, computed, contentChild, inject, input } from '@angular/core';
import { DsIcon, DsLeadingIcon, DsTrailingIcon } from '../slots/slots';

// Styles live in @helloantek/ds-css (classes ds-button*); this component only renders the markup, as ds-react's
// Button does.

/** Figma "Variant" property (Sort UI 2.0). */
export type ButtonVariant = 'default' | 'outline' | 'secondary' | 'ghost' | 'destructive';
/** Figma "Size" property (Sort UI 2.0): 40, 36, 32, 28 and 24 px tall. */
export type ButtonSize = 'xl' | 'lg' | 'default' | 'sm' | 'xs';

/**
 * Figma "Button" on a native `<button>` or `<a>`:
 *
 *     <button dsButton variant="outline"><svg dsLeadingIcon …></svg>Share</button>
 *     <button dsButton size="sm" aria-label="Settings"><svg dsIcon …></svg></button>   (Icon only: name it)
 *
 * The label is the content; `dsLeadingIcon`, `dsTrailingIcon` and `dsIcon` mark the icon slots (icons use
 * `currentColor`); `badge` is Figma "Badge". A `<button>` gets `type="button"` unless `type` says otherwise.
 */
@Component({
  selector: 'button[dsButton], a[dsButton]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    '[attr.type]': 'isButton ? type() : null',
    // Inputs written as plain attributes (badge="2") would stay in the DOM; the markup matches React's without them.
    '[attr.variant]': 'null',
    '[attr.size]': 'null',
    '[attr.badge]': 'null',
  },
  template: `
    @if (icon()) {
      <span class="ds-button__icon" aria-hidden="true"><ng-content select="[dsIcon]" /></span>
    } @else {
      @if (leadingIcon()) {
        <span class="ds-button__icon" aria-hidden="true"><ng-content select="[dsLeadingIcon]" /></span>
      }
      <span class="ds-button__label"><ng-content /></span>
      @if (badge() !== undefined) {
        <span class="ds-button__badge">{{ badge() }}</span>
      }
      @if (trailingIcon()) {
        <span class="ds-button__icon" aria-hidden="true"><ng-content select="[dsTrailingIcon]" /></span>
      }
    }
  `,
})
export class DsButton {
  readonly variant = input<ButtonVariant>('default');
  readonly size = input<ButtonSize>('default');
  /** Figma "Badge", e.g. a count. */
  readonly badge = input<string | number>();
  /** The native `type` of a `<button>` (default `button`, so it never submits a form by accident). */
  readonly type = input<'button' | 'submit' | 'reset'>('button');

  protected readonly isButton = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement.tagName === 'BUTTON';
  protected readonly icon = contentChild(DsIcon);
  protected readonly leadingIcon = contentChild(DsLeadingIcon);
  protected readonly trailingIcon = contentChild(DsTrailingIcon);
  protected readonly classes = computed(() => ['ds-button', `ds-button--${this.variant()}`, `ds-button--size-${this.size()}`, this.icon() && 'ds-button--icon-only'].filter(Boolean).join(' '));
}
