import { ChangeDetectionStrategy, Component, InjectionToken, type Signal, booleanAttribute, computed, contentChild, inject, input, model } from '@angular/core';
import { DsIcon, DsLeadingIcon, DsTrailingIcon } from '../slots/slots';

// Styles live in @helloantek/ds-css (classes ds-toggle*); this component renders a button with aria-pressed, as
// ds-react's Toggle does.

/** Figma "Variant". */
export type ToggleVariant = 'default' | 'outline';
/** Figma "Size". */
export type ToggleSize = 'sm' | 'default' | 'lg';

/** What a Toggle Group shares with its items (ds-react's ToggleGroup context). */
export interface ToggleGroupContext {
  isOn(value: string): boolean;
  flip(value: string): void;
  variant: Signal<ToggleVariant>;
  size: Signal<ToggleSize>;
  disabled: Signal<boolean>;
  tabValue: Signal<string | undefined>;
}
export const DS_TOGGLE_GROUP = new InjectionToken<ToggleGroupContext>('DS_TOGGLE_GROUP');

/**
 * Figma "Toggle" on a native `<button>`: a button that is on or off.
 *
 *     <button dsToggle [(pressed)]="bold">Bold</button>
 *     <button dsToggle size="sm" aria-label="Grid"><svg dsIcon …></svg></button>        (Show Label off: name it)
 *
 * Inside a Toggle Group (`<div dsToggleGroup>`), give each one a `value`: the group then owns `pressed`, `variant`,
 * `size` and `disabled`.
 */
@Component({
  selector: 'button[dsToggle]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    type: 'button',
    '[class]': 'classes()',
    '[attr.aria-pressed]': 'isPressed()',
    '[attr.tabindex]': 'group ? (group.tabValue() === undefined || group.tabValue() === value() ? 0 : -1) : null',
    '[attr.data-value]': 'group ? value() : null',
    '[disabled]': 'isDisabled()',
    '[attr.variant]': 'null',
    '[attr.size]': 'null',
    '[attr.value]': 'null',
    '[attr.pressed]': 'null',
    '(click)': 'toggle()',
  },
  template: `
    @if (icon()) {
      <span class="ds-toggle__icon" aria-hidden="true"><ng-content select="[dsIcon]" /></span>
    } @else {
      @if (leadingIcon()) {
        <span class="ds-toggle__icon" aria-hidden="true"><ng-content select="[dsLeadingIcon]" /></span>
      }
      <span class="ds-toggle__label"><ng-content /></span>
      @if (trailingIcon()) {
        <span class="ds-toggle__icon" aria-hidden="true"><ng-content select="[dsTrailingIcon]" /></span>
      }
    }
  `,
})
export class DsToggle {
  /** Figma Variant (default `default`). */
  readonly variant = input<ToggleVariant>('default');
  /** Figma Size (default `default`). */
  readonly size = input<ToggleSize>('default');
  /** Figma Pressed; two-way with `[(pressed)]`. */
  readonly pressed = model(false);
  /** The value this toggle stands for in a Toggle Group. */
  readonly value = input<string>('');
  readonly disabled = input(false, { transform: booleanAttribute });

  protected readonly group = inject(DS_TOGGLE_GROUP, { optional: true });
  protected readonly icon = contentChild(DsIcon);
  protected readonly leadingIcon = contentChild(DsLeadingIcon);
  protected readonly trailingIcon = contentChild(DsTrailingIcon);
  protected readonly isPressed = computed(() => (this.group ? this.group.isOn(this.value()) : this.pressed()));
  protected readonly isDisabled = computed(() => (this.group?.disabled() ?? false) || this.disabled());
  protected readonly classes = computed(() => {
    const variant = this.group ? this.group.variant() : this.variant();
    const size = this.group ? this.group.size() : this.size();
    return ['ds-toggle', variant === 'outline' && 'ds-toggle--outline', size !== 'default' && `ds-toggle--size-${size}`, this.icon() && 'ds-toggle--icon-only'].filter(Boolean).join(' ');
  });

  protected toggle() {
    if (this.group) this.group.flip(this.value());
    else this.pressed.set(!this.pressed());
  }
}
