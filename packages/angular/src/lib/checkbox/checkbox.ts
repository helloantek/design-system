import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, booleanAttribute, computed, forwardRef, input, model, output, signal } from '@angular/core';
import { NG_VALUE_ACCESSOR, type ControlValueAccessor } from '@angular/forms';
import type { FormCheckboxControl } from '@angular/forms/signals';
import { uniqueId } from '../internal/ids';

// Styles live in @helloantek/ds-css (ds-checkbox*, ds-field*); this component renders ds-react's Checkbox markup.

/**
 * Figma "Checkbox" on a native `<input type="checkbox">`, with Figma "Field" Orientation=Horizontal when it has a
 * `label`:
 *
 *     <ds-checkbox label="Subscription renewal emails" caption="Send receipts" [(checked)]="renewals" />
 *     <ds-checkbox aria-label="Select row" [formField]="form.selected" />      (Signal Forms)
 *     <ds-checkbox label="Accept the terms" formControlName="terms" />          (Reactive Forms, ngModel)
 *
 * The element itself takes no space (`display: contents`); what it renders is the same as the React Checkbox.
 * Figma Checked = `checked`; State: Disabled = `disabled`, Invalid = `invalid` or `error`; `indeterminate` draws the
 * minus of Figma's demos and clears when the box is clicked. Without `label`, `aria-label` is required.
 */
@Component({
  selector: 'ds-checkbox',
  imports: [NgTemplateOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DsCheckbox), multi: true }],
  host: {
    style: 'display: contents',
    // Inputs given as plain attributes would stay on this element; they belong to the native input.
    '[attr.aria-label]': 'null',
    '[attr.aria-controls]': 'null',
    '[attr.label]': 'null',
    '[attr.caption]': 'null',
    '[attr.error]': 'null',
    '[attr.control]': 'null',
    '[attr.card]': 'null',
    '[attr.invalid]': 'null',
    '[attr.disabled]': 'null',
    '[attr.required]': 'null',
    '[attr.name]': 'null',
    '[attr.id]': 'null',
  },
  template: `
    <ng-template #box>
      <span class="ds-checkbox">
        <input
          [id]="inputId()"
          type="checkbox"
          class="ds-checkbox__input"
          [checked]="checked()"
          [indeterminate]="indeterminate()"
          [disabled]="isDisabled()"
          [required]="required()"
          [attr.name]="name() || null"
          [attr.aria-label]="ariaLabel() ?? null"
          [attr.aria-controls]="ariaControls() ?? null"
          [attr.aria-invalid]="isInvalid() || null"
          [attr.aria-describedby]="help() !== undefined ? captionId() : null"
          (change)="toggle($event)"
          (blur)="blurred()"
        />
        <svg class="ds-checkbox__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.14" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
        <svg class="ds-checkbox__minus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.14" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14" /></svg>
      </span>
    </ng-template>
    @if (label() !== undefined) {
      <div class="ds-field ds-field--horizontal" [class.ds-field--control-end]="control() === 'end'" [class.ds-field--card]="card()">
        <span class="ds-field__control"><ng-container [ngTemplateOutlet]="box" /></span>
        <div class="ds-field__content">
          <label class="ds-field__label" [for]="inputId()">{{ label() }}</label>
          @if (help() !== undefined) {
            <p [id]="captionId()" class="ds-field__caption" [class.ds-field__caption--error]="hasError()">{{ help() }}</p>
          }
        </div>
      </div>
    } @else {
      <ng-container [ngTemplateOutlet]="box" />
    }
  `,
})
export class DsCheckbox implements FormCheckboxControl, ControlValueAccessor {
  /** Figma Checked. Two-way: `[(checked)]`; also the value for Signal Forms (`[formField]`). */
  readonly checked = model(false);
  /** Neither checked nor unchecked, e.g. a "select all" over some rows; drawn with a minus. Clicking clears it. */
  readonly indeterminate = model(false);
  /** Figma "Field Label". Without it the checkbox is bare and needs `aria-label`. */
  readonly label = input<string>();
  /** Figma Field "Description". */
  readonly caption = input<string>();
  /** Figma Field State=Invalid ("Error"): the message replaces the description and marks the checkbox invalid. */
  readonly error = input<string>();
  /** Figma Field "Control": the checkbox before (`start`, default) or after (`end`) the label. */
  readonly control = input<'start' | 'end'>('start');
  /** Figma's "Choice cards" demo: the field in a bordered card, filled when checked; a click anywhere toggles it. */
  readonly card = input(false, { transform: booleanAttribute });
  /** Figma State=Invalid without a message. */
  readonly invalid = input(false, { transform: booleanAttribute });
  /** Figma State=Disabled. */
  readonly disabled = input(false, { transform: booleanAttribute });
  readonly required = input(false, { transform: booleanAttribute });
  readonly name = input<string>('');
  readonly id = input<string>();
  readonly ariaLabel = input<string | undefined>(undefined, { alias: 'aria-label' });
  readonly ariaControls = input<string | undefined>(undefined, { alias: 'aria-controls' });

  private readonly autoId = uniqueId('ds-checkbox');
  /** Signal Forms: marks the field touched when focus leaves the control. */
  readonly touch = output<void>();
  private readonly formDisabled = signal(false);
  private onChange: (value: boolean) => void = () => {};
  private onTouched: () => void = () => {};

  protected readonly inputId = computed(() => this.id() ?? this.autoId);
  protected readonly captionId = computed(() => `${this.inputId()}-caption`);
  protected readonly hasError = computed(() => !!this.error());
  protected readonly help = computed(() => (this.hasError() ? this.error() : this.caption()));
  protected readonly isInvalid = computed(() => this.invalid() || this.hasError());
  protected readonly isDisabled = computed(() => this.disabled() || this.formDisabled());

  protected toggle(event: Event) {
    const value = (event.target as HTMLInputElement).checked;
    this.indeterminate.set(false);
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

/**
 * Figma "Field Group": related checkboxes under a legend, 12 px apart, on a native `<fieldset>`:
 *
 *     <fieldset dsCheckboxGroup label="Import from Tunely" caption="Choose what to bring over.">
 *       <ds-checkbox label="Playlists" /> …
 *     </fieldset>
 *
 * `error` replaces the description; the native `disabled` disables every checkbox in it.
 */
@Component({
  selector: 'fieldset[dsCheckboxGroup]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'ds-fieldset',
    '[attr.aria-describedby]': "help() !== undefined ? captionId : null",
    '[attr.label]': 'null',
    '[attr.caption]': 'null',
    '[attr.error]': 'null',
  },
  template: `
    <legend class="ds-fieldset__legend">{{ label() }}</legend>
    @if (help() !== undefined) {
      <p [id]="captionId" class="ds-field__caption" [class.ds-field__caption--error]="!!error()">{{ help() }}</p>
    }
    <div class="ds-fieldset__fields"><ng-content /></div>
  `,
})
export class DsCheckboxGroup {
  /** Figma "Field Label" over the group: the legend. */
  readonly label = input.required<string>();
  /** Figma Field "Description" under the legend. */
  readonly caption = input<string>();
  /** A message for the whole group (e.g. "Pick at least one"); replaces the description. */
  readonly error = input<string>();
  protected readonly captionId = `${uniqueId('ds-checkbox-group')}-caption`;
  protected readonly help = computed(() => this.error() || this.caption());
}
