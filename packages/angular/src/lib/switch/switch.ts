import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, booleanAttribute, computed, forwardRef, input, model, output, signal } from '@angular/core';
import { NG_VALUE_ACCESSOR, type ControlValueAccessor } from '@angular/forms';
import type { FormCheckboxControl } from '@angular/forms/signals';
import { uniqueId } from '../internal/ids';

// Styles live in @helloantek/ds-css (ds-switch*, ds-field*); this component renders ds-react's Switch markup.

/** Figma "Size": 32 × 20 (default) or 24 × 16 (sm). */
export type SwitchSize = 'default' | 'sm';

/**
 * Figma "Switch" on a native `<input type="checkbox" role="switch">`, with Figma "Field" Orientation=Horizontal when
 * it has a `label` (the switch at the end, as in every Switch demo):
 *
 *     <ds-switch label="Airplane mode" [(checked)]="airplane" />
 *     <ds-switch size="sm" aria-labelledby="use-memory" [(checked)]="on" />
 *     <ds-switch label="Marketing emails" formControlName="marketing" />     (Reactive Forms, ngModel; Signal Forms)
 *
 * It turns a setting on or off at once (use a Checkbox for choices sent with a form). The element itself takes no
 * space (`display: contents`). Without `label`, `aria-label` or `aria-labelledby` is required.
 */
@Component({
  selector: 'ds-switch',
  imports: [NgTemplateOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DsSwitch), multi: true }],
  host: {
    style: 'display: contents',
    '[attr.aria-label]': 'null',
    '[attr.aria-labelledby]': 'null',
    '[attr.label]': 'null',
    '[attr.caption]': 'null',
    '[attr.error]': 'null',
    '[attr.control]': 'null',
    '[attr.card]': 'null',
    '[attr.size]': 'null',
    '[attr.invalid]': 'null',
    '[attr.touched]': 'null',
    '[attr.disabled]': 'null',
    '[attr.required]': 'null',
    '[attr.name]': 'null',
    '[attr.id]': 'null',
  },
  template: `
    <ng-template #track>
      <span class="ds-switch" [class.ds-switch--sm]="size() === 'sm'">
        <input
          [id]="inputId()"
          type="checkbox"
          role="switch"
          class="ds-switch__input"
          [checked]="checked()"
          [disabled]="isDisabled()"
          [required]="required()"
          [attr.name]="name() || null"
          [attr.aria-label]="ariaLabel() ?? null"
          [attr.aria-labelledby]="ariaLabelledby() ?? null"
          [attr.aria-invalid]="isInvalid() || null"
          [attr.aria-describedby]="help() !== undefined ? captionId() : null"
          (change)="toggle($event)"
          (blur)="blurred()"
        />
        <span class="ds-switch__thumb" aria-hidden="true"></span>
      </span>
    </ng-template>
    @if (label() !== undefined) {
      <div class="ds-field ds-field--horizontal" [class.ds-field--control-end]="control() === 'end'" [class.ds-field--card]="card()">
        <span class="ds-field__control"><ng-container [ngTemplateOutlet]="track" /></span>
        <div class="ds-field__content">
          <label class="ds-field__label" [for]="inputId()">{{ label() }}</label>
          @if (help() !== undefined) {
            <p [id]="captionId()" class="ds-field__caption" [class.ds-field__caption--error]="hasError()">{{ help() }}</p>
          }
        </div>
      </div>
    } @else {
      <ng-container [ngTemplateOutlet]="track" />
    }
  `,
})
export class DsSwitch implements FormCheckboxControl, ControlValueAccessor {
  /** Figma Checked. Two-way: `[(checked)]`; also the value for Signal Forms (`[formField]`). */
  readonly checked = model(false);
  /** Figma "Field Label". Without it the switch is bare and needs `aria-label` or `aria-labelledby`. */
  readonly label = input<string>();
  /** Figma Field "Description". */
  readonly caption = input<string>();
  /** Figma Field State=Invalid ("Error"): the message replaces the description and marks the switch invalid. */
  readonly error = input<string>();
  /** Figma Field "Control": the switch before (`start`) or after (`end`, default) the label. */
  readonly control = input<'start' | 'end'>('end');
  /** Figma's "Choice cards" demo: the field in a bordered card, filled when on; a click anywhere toggles it. */
  readonly card = input(false, { transform: booleanAttribute });
  /** Figma Size. */
  readonly size = input<SwitchSize>('default');
  /** Figma State=Invalid without a message. */
  readonly invalid = input(false, { transform: booleanAttribute });
  /** Whether the user has left the field (Signal Forms binds it); without a form, `invalid` shows at once. */
  readonly touched = input<boolean, unknown>(true, { transform: (value: unknown) => value !== false });
  /** Figma State=Disabled. */
  readonly disabled = input(false, { transform: booleanAttribute });
  readonly required = input(false, { transform: booleanAttribute });
  readonly name = input<string>('');
  readonly id = input<string>();
  readonly ariaLabel = input<string | undefined>(undefined, { alias: 'aria-label' });
  readonly ariaLabelledby = input<string | undefined>(undefined, { alias: 'aria-labelledby' });

  private readonly autoId = uniqueId('ds-switch');
  /** Signal Forms: marks the field touched when focus leaves the control. */
  readonly touch = output<void>();
  private readonly formDisabled = signal(false);
  private onChange: (value: boolean) => void = () => {};
  private onTouched: () => void = () => {};

  protected readonly inputId = computed(() => this.id() ?? this.autoId);
  protected readonly captionId = computed(() => `${this.inputId()}-caption`);
  protected readonly hasError = computed(() => !!this.error());
  protected readonly help = computed(() => (this.hasError() ? this.error() : this.caption()));
  protected readonly isInvalid = computed(() => this.hasError() || (this.invalid() && this.touched()));
  protected readonly isDisabled = computed(() => this.disabled() || this.formDisabled());

  protected toggle(event: Event) {
    const value = (event.target as HTMLInputElement).checked;
    this.checked.set(value);
    this.onChange(value);
  }

  protected blurred() {
    this.onTouched();
    this.touch.emit();
  }

  writeValue(value: unknown) {
    this.checked.set(!!value);
  }
  registerOnChange(fn: (value: boolean) => void) {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }
  setDisabledState(disabled: boolean) {
    this.formDisabled.set(disabled);
  }
}
