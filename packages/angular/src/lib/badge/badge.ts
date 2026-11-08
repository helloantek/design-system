import { ChangeDetectionStrategy, Component, ElementRef, booleanAttribute, computed, contentChild, inject, input, output } from '@angular/core';
import { DsIcon, DsImage } from '../slots/slots';

// Styles live in @helloantek/ds-css (classes ds-badge*); this component only renders the markup, as ds-react's
// Badge does.

/** Figma "Style" property (Figma spells it "Srong"). */
export type BadgeVariant = 'soft' | 'strong';
/** Figma "Size" property. */
export type BadgeSize = 'sm' | 'lg';
/** Figma "Color" property. */
export type BadgeColor = 'neutral' | 'red' | 'orange' | 'lime' | 'green' | 'cyan' | 'blue' | 'violet' | 'fuchsia' | 'pink';
/** Figma "Shape" property. */
export type BadgeShape = 'rounded' | 'pill';

/**
 * Figma "Badge" on a native `<span>`:
 *
 *     <span dsBadge color="blue">New</span>
 *     <span dsBadge variant="strong" color="green" dot>Online</span>
 *     <span dsBadge removable (remove)="drop(tag)">{{ tag }}</span>
 *
 * The label is the content; `dsIcon` marks Figma Variant=Icon and `dsImage` Variant=Image; `dot` is Variant=Dot. `removable` shows Figma
 * "Close Icon" as a button named "Remove <label>" (or `removeLabel`) that emits `remove`.
 */
@Component({
  selector: 'span[dsBadge]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    // Inputs written as plain attributes (color="blue", dot) would stay in the DOM; the markup matches React's without them.
    '[attr.variant]': 'null',
    '[attr.size]': 'null',
    '[attr.color]': 'null',
    '[attr.shape]': 'null',
    '[attr.border]': 'null',
    '[attr.dot]': 'null',
    '[attr.removable]': 'null',
    '[attr.removeLabel]': 'null',
  },
  template: `
    @if (icon()) {
      <span class="ds-badge__lead" aria-hidden="true"><ng-content select="[dsIcon]" /></span>
    } @else if (dot()) {
      <span class="ds-badge__lead" aria-hidden="true"><span class="ds-badge__dot"></span></span>
    } @else if (image()) {
      <span class="ds-badge__lead ds-badge__lead--image"><span class="ds-badge__image"><ng-content select="[dsImage]" /></span></span>
    }
    <span class="ds-badge__label"><ng-content /></span>
    @if (removable()) {
      <button type="button" class="ds-badge__remove" [attr.aria-label]="removeName()" (click)="remove.emit()">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="remixicon" aria-hidden="true">
          <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z" />
        </svg>
      </button>
    }
  `,
})
export class DsBadge {
  readonly variant = input<BadgeVariant>('soft');
  readonly size = input<BadgeSize>('sm');
  readonly color = input<BadgeColor>('neutral');
  readonly shape = input<BadgeShape>('rounded');
  /** Figma "Border": a stroke on Soft badges. */
  readonly border = input(false, { transform: booleanAttribute });
  /** Figma Variant=Dot. */
  readonly dot = input(false, { transform: booleanAttribute });
  /** Figma "Close Icon": a remove button that emits `remove`. */
  readonly removable = input(false, { transform: booleanAttribute });
  /** Accessible name of the remove button (default "Remove <label>"). */
  readonly removeLabel = input<string>();
  readonly remove = output<void>();

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  protected readonly icon = contentChild(DsIcon);
  protected readonly image = contentChild(DsImage);
  protected readonly classes = computed(() =>
    ['ds-badge', `ds-badge--${this.size()}`, `ds-badge--${this.color()}`, `ds-badge--${this.variant()}`, this.border() && 'ds-badge--border', this.shape() === 'pill' && 'ds-badge--pill']
      .filter(Boolean)
      .join(' '),
  );
  protected removeName() {
    const label = this.host.querySelector('.ds-badge__label')?.textContent?.trim();
    return this.removeLabel() ?? (label ? `Remove ${label}` : 'Remove');
  }
}
