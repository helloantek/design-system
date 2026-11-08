import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, Directive, ElementRef, booleanAttribute, computed, contentChild, forwardRef, inject, input, model, output, signal, viewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, type ControlValueAccessor } from '@angular/forms';
import type { FormValueControl } from '@angular/forms/signals';
import { DsLeadingIcon, DsTrailingIcon } from '../slots/slots';
import { uniqueId } from '../internal/ids';

// Styles live in @helloantek/ds-css (ds-field*, ds-input*); these components render ds-react's Input markup.

/** Sort UI 2.0 has one input style (`default`); `shadow` adds Shadow/xs, `soft` is a borderless tinted field. */
export type InputVariant = 'default' | 'shadow' | 'soft';
/** Figma "Size": 40, 36 and 32 px tall, like Button's sizes of the same name. */
export type InputSize = 'xl' | 'lg' | 'default';

/** Figma Input Group "L slot" content richer than text, e.g. a stepper's `<button dsInputAction>`. */
@Directive({ selector: '[dsPrefix]' })
export class DsPrefix {}

/** Figma Input Group "T slot" content richer than text. */
@Directive({ selector: '[dsSuffix]' })
export class DsSuffix {}

/**
 * Figma "Input", with "Input Group" (icons, inline text, add-ons, Kbd, blocks, a button) and "Field" (label,
 * description, error):
 *
 *     <ds-input label="Email" caption="We never share it." placeholder="mail@domain.com" [(value)]="email">
 *       <svg dsLeadingIcon …></svg>
 *       <button dsInputAction>Send</button>
 *     </ds-input>
 *     <ds-input label="Name" [formField]="form.name" />           (Signal Forms)
 *     <ds-input label="Name" formControlName="name" />            (Reactive Forms, ngModel)
 *
 * The element itself takes no space (`display: contents`); what it renders is the same as the React Input. Focus is
 * `:focus-within`, Invalid is `error` (or `invalid`), Disabled is `disabled`. Clicking the box's padding, icons,
 * affixes or blocks focuses the native input.
 */
@Component({
  selector: 'ds-input',
  imports: [NgTemplateOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DsInput), multi: true }],
  host: {
    style: 'display: contents',
    '[attr.aria-label]': 'null',
    '[attr.label]': 'null',
    '[attr.caption]': 'null',
    '[attr.error]': 'null',
    '[attr.variant]': 'null',
    '[attr.size]': 'null',
    '[attr.placeholder]': 'null',
    '[attr.type]': 'null',
    '[attr.name]': 'null',
    '[attr.autocomplete]': 'null',
    '[attr.inputmode]': 'null',
    '[attr.maxlength]': 'null',
    '[attr.disabled]': 'null',
    '[attr.readonly]': 'null',
    '[attr.required]': 'null',
    '[attr.invalid]': 'null',
    '[attr.shortcut]': 'null',
    '[attr.prefix]': 'null',
    '[attr.suffix]': 'null',
    '[attr.addonBefore]': 'null',
    '[attr.addonAfter]': 'null',
    '[attr.blockStart]': 'null',
    '[attr.blockEnd]': 'null',
    '[attr.blockDivider]': 'null',
    '[attr.loading]': 'null',
    '[attr.id]': 'null',
  },
  template: `
    <ng-template #spinner>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a9 9 0 1 1-6.22-8.56" /></svg>
    </ng-template>
    <ng-template #row>
      @if (addonBefore() !== undefined) {
        <span class="ds-input__addon">{{ addonBefore() }}</span>
      }
      <div class="ds-input__control">
        @if (prefixSlot()) {
          <span class="ds-input__affix"><ng-content select="[dsPrefix]" /></span>
        } @else if (prefix() !== undefined) {
          <span class="ds-input__affix">{{ prefix() }}</span>
        }
        <div class="ds-input__main">
          @if (loadingAt() === 'start') {
            <span class="ds-input__icon ds-input__icon--spin" aria-hidden="true"><ng-container [ngTemplateOutlet]="spinner" /></span>
          } @else if (leadingIcon()) {
            <span class="ds-input__icon" aria-hidden="true"><ng-content select="[dsLeadingIcon]" /></span>
          }
          <input
            #native
            [id]="inputId()"
            class="ds-input__native"
            [attr.type]="type() ?? null"
            [value]="value()"
            [disabled]="isDisabled()"
            [readOnly]="readonly()"
            [required]="required()"
            [attr.placeholder]="placeholder() ?? null"
            [attr.name]="name() || null"
            [attr.autocomplete]="autocomplete() ?? null"
            [attr.inputmode]="inputmode() ?? null"
            [attr.maxlength]="maxlength() ?? null"
            [attr.aria-label]="ariaLabel() ?? null"
            [attr.aria-invalid]="isInvalid() || null"
            [attr.aria-busy]="loadingAt() ? 'true' : null"
            [attr.aria-labelledby]="label() === undefined && blockStart() !== undefined && ariaLabel() === undefined ? blockStartId() : null"
            [attr.aria-describedby]="describedBy()"
            [attr.aria-keyshortcuts]="shortcut() ?? null"
            (input)="edit($event)"
            (blur)="blurred()"
          />
        </div>
        @if (suffixSlot()) {
          <span class="ds-input__affix ds-input__affix--end"><ng-content select="[dsSuffix]" /></span>
        } @else if (suffix() !== undefined) {
          <span class="ds-input__affix ds-input__affix--end">{{ suffix() }}</span>
        }
        @if (loadingAt() === 'end') {
          <span class="ds-input__icon ds-input__icon--tail ds-input__icon--spin" aria-hidden="true"><ng-container [ngTemplateOutlet]="spinner" /></span>
        } @else if (trailingIcon()) {
          <span class="ds-input__icon ds-input__icon--tail" aria-hidden="true"><ng-content select="[dsTrailingIcon]" /></span>
        }
        @if (shortcut() !== undefined) {
          <kbd class="ds-input__shortcut" aria-hidden="true">{{ shortcut() }}</kbd>
        }
      </div>
      @if (addonAfter() !== undefined) {
        <span class="ds-input__addon ds-input__addon--end">{{ addonAfter() }}</span>
      }
      <ng-content select="[dsInputAction]" />
    </ng-template>
    <div [class]="'ds-field ds-field--' + size()">
      @if (label() !== undefined) {
        <label class="ds-field__label" [for]="inputId()">{{ label() }}</label>
      }
      <div [class]="boxClasses()" (mousedown)="focusInput($event)">
        @if (blockStart() !== undefined) {
          <div [id]="blockStartId()" class="ds-input__block" [class.ds-input__block--divider]="blockDivider()">{{ blockStart() }}</div>
        }
        @if (hasBlock()) {
          <div class="ds-input__row"><ng-container [ngTemplateOutlet]="row" /></div>
        } @else {
          <ng-container [ngTemplateOutlet]="row" />
        }
        @if (blockEnd() !== undefined) {
          <div [id]="blockEndId()" class="ds-input__block ds-input__block--end" [class.ds-input__block--divider]="blockDivider()">{{ blockEnd() }}</div>
        }
      </div>
      @if (help() !== undefined) {
        <p [id]="captionId()" class="ds-field__caption" [class.ds-field__caption--error]="hasError()">{{ help() }}</p>
      }
    </div>
  `,
})
export class DsInput implements FormValueControl<string>, ControlValueAccessor {
  /** The input's text. Two-way: `[(value)]`; also the value for Signal Forms (`[formField]`). */
  readonly value = model('');
  /** Figma "Field Label": a `<label>` tied to the input. */
  readonly label = input<string>();
  /** Figma Field "Description": help text under the input. */
  readonly caption = input<string>();
  /** Figma State=Invalid (Field "Error"): the message replaces the description and marks the input invalid. */
  readonly error = input<string>();
  readonly variant = input<InputVariant>('default');
  readonly size = input<InputSize>('default');
  /** Figma "Kbd" in the T slot: a keyboard hint inside the input, also its aria-keyshortcuts. */
  readonly shortcut = input<string>();
  /** Figma Input Group "L slot" / "T slot" text before / after the value (or project `[dsPrefix]` / `[dsSuffix]`). */
  readonly prefix = input<string>();
  readonly suffix = input<string>();
  /** Segments joined to the input before / after it, split off by a line. */
  readonly addonBefore = input<string>();
  readonly addonAfter = input<string>();
  /** Figma Input Group "Block start": a row above the input in the same box; it names the input without a `label`. */
  readonly blockStart = input<string>();
  /** Figma Input Group "Block end": a row under the input in the same box; it describes the input. */
  readonly blockEnd = input<string>();
  /** The "Dividers" demo: a line between the blocks and the input. */
  readonly blockDivider = input(false, { transform: booleanAttribute });
  /** The "Loading" demo: a spinner in place of the leading icon (`true` / `start`) or the trailing one (`end`). */
  readonly loading = input<boolean | 'start' | 'end' | ''>(false);
  /** Figma State=Invalid without a message. */
  readonly invalid = input(false, { transform: booleanAttribute });
  readonly disabled = input(false, { transform: booleanAttribute });
  readonly readonly = input(false, { transform: booleanAttribute });
  readonly required = input(false, { transform: booleanAttribute });
  /** The native `type` (none, i.e. text, by default). */
  readonly type = input<string>();
  readonly placeholder = input<string>();
  readonly name = input<string>('');
  readonly autocomplete = input<string>();
  readonly inputmode = input<string>();
  readonly maxlength = input<number | undefined>(undefined);
  readonly id = input<string>();
  readonly ariaLabel = input<string | undefined>(undefined, { alias: 'aria-label' });

  private readonly autoId = uniqueId('ds-input');
  /** Signal Forms: marks the field touched when focus leaves the control. */
  readonly touch = output<void>();
  private readonly formDisabled = signal(false);
  private readonly native = viewChild.required<ElementRef<HTMLInputElement>>('native');
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  protected readonly leadingIcon = contentChild(DsLeadingIcon);
  protected readonly trailingIcon = contentChild(DsTrailingIcon);
  protected readonly prefixSlot = contentChild(DsPrefix);
  protected readonly suffixSlot = contentChild(DsSuffix);
  protected readonly inputId = computed(() => this.id() ?? this.autoId);
  protected readonly captionId = computed(() => `${this.inputId()}-caption`);
  protected readonly blockStartId = computed(() => `${this.inputId()}-block-start`);
  protected readonly blockEndId = computed(() => `${this.inputId()}-block-end`);
  protected readonly hasBlock = computed(() => this.blockStart() !== undefined || this.blockEnd() !== undefined);
  protected readonly loadingAt = computed(() => {
    const at = this.loading();
    return at === true || at === '' || at === 'start' ? 'start' : at === 'end' ? 'end' : null;
  });
  protected readonly hasError = computed(() => !!this.error());
  protected readonly help = computed(() => (this.hasError() ? this.error() : this.caption()));
  protected readonly isInvalid = computed(() => this.invalid() || this.hasError());
  /** Disabled by the `disabled` input or by the form; an InputAction inside follows it. */
  readonly isDisabled = computed(() => this.disabled() || this.formDisabled());
  protected readonly describedBy = computed(() => [this.blockEnd() !== undefined ? this.blockEndId() : null, this.help() !== undefined ? this.captionId() : null].filter(Boolean).join(' ') || null);
  protected readonly boxClasses = computed(() =>
    ['ds-input', `ds-input--${this.variant()}`, this.hasBlock() && 'ds-input--block', this.isInvalid() && 'ds-input--invalid', this.isDisabled() && 'ds-input--disabled'].filter(Boolean).join(' '),
  );

  protected edit(event: Event) {
    const text = (event.target as HTMLInputElement).value;
    this.value.set(text);
    this.onChange(text);
  }

  protected blurred() {
    this.onTouched();
    this.touch.emit();
  }

  // Clicking padding, icons, affixes or blocks focuses the input, as the whole box looks like one field.
  protected focusInput(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const native = this.native().nativeElement;
    if (this.isDisabled() || target === native || target.closest('button, a, input, .ds-dropdown')) return;
    event.preventDefault();
    native.focus();
  }

  writeValue(value: unknown) {
    this.value.set(value == null ? '' : String(value));
  }
  registerOnChange(fn: (value: string) => void) {
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
 * The button inside an Input (Figma Input Group T slot, Button Outline or Ghost xs): `<button dsInputAction>Send</button>`
 * projected into `<ds-input>`. An icon alone makes it 24 px square; give it an `aria-label`. Disabled with its Input.
 */
@Component({
  selector: 'button[dsInputAction]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': "variant() === 'ghost' ? 'ds-input__action ds-input__action--ghost' : 'ds-input__action'",
    '[attr.type]': 'type()',
    '[disabled]': 'disabled() || (input?.isDisabled() ?? false)',
    '[attr.variant]': 'null',
    '[attr.dsInputAction]': 'null',
  },
  template: '<ng-content />',
})
export class DsInputAction {
  /** Button Outline xs (default) or Ghost xs. */
  readonly variant = input<'outline' | 'ghost'>('outline');
  readonly type = input<'button' | 'submit' | 'reset'>('button');
  readonly disabled = input(false, { transform: booleanAttribute });
  protected readonly input = inject(DsInput, { optional: true });
}
