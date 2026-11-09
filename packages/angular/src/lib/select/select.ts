import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, afterNextRender, afterRenderEffect, booleanAttribute, computed, contentChild, forwardRef, inject, input, model, output, signal, untracked, viewChild, type TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, type ControlValueAccessor } from '@angular/forms';
import type { FormValueControl } from '@angular/forms/signals';
import { firstEnabled, lastEnabled, moveEnabled, pageEnabled, revealInList, Typeahead } from '@helloantek/ds-core';
import { DsBadge } from '../badge/badge';
import { DsLeadingIcon, DsTrailingIcon } from '../slots/slots';
import { uniqueId } from '../internal/ids';
import { popupPlacement } from '../internal/placement';

// Styles live in @helloantek/ds-css (ds-field*, ds-select*); this component renders ds-react's Select markup and the
// WAI-ARIA select-only combobox behaviour (https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/),
// with list navigation and type-ahead from ds-core, as React does.

/** Sort UI 2.0 has one field style (`default`); `shadow` adds Shadow/xs, `soft` is a borderless tinted field. */
export type SelectVariant = 'default' | 'shadow' | 'soft';
/** Figma "Size": 40, 36, 32 and 28 px tall, like Button's and Input's sizes of the same name. */
export type SelectSize = 'xl' | 'lg' | 'default' | 'sm';
/** The mark of selected options: the Select Item check mark, or the Checkbox / Radio component. */
export type SelectIndicator = 'check' | 'checkbox' | 'radio';

/**
 * Figma "Select Item". Pictures are templates, rendered with the option as context:
 * `<ng-template #avatar let-option>…{{ option.label[0] }}…</ng-template>`.
 */
export interface SelectOption {
  value: string;
  /** Figma "Label". Also shown in the trigger when selected and used for type-ahead. */
  label: string;
  /** Muted text after the label. */
  caption?: string;
  /** Figma "Leading icon" (`currentColor`). */
  icon?: TemplateRef<{ $implicit: SelectOption }>;
  /** A Badge (Size=sm, Color=Neutral, Style=Soft, Border=True). */
  badge?: string;
  /** A 20 px picture before the label (a flag, an avatar); a single select also shows it in the trigger. */
  media?: TemplateRef<{ $implicit: SelectOption }>;
  /** Figma Select Item "Description": a second line under the label. */
  description?: string;
  disabled?: boolean;
}

/** Figma "Select Label", followed by its options. */
export interface SelectGroup {
  label: string;
  /** Muted text on the right of the group label. */
  caption?: string;
  options: SelectOption[];
}

/** Figma "Select Separator". */
export interface SelectSeparator {
  type: 'separator';
}

/** A note in the menu, read out as the menu's description. */
export interface SelectCaption {
  type: 'caption';
  label: string;
}

export type SelectItem = SelectOption | SelectGroup | SelectSeparator | SelectCaption;

const isSeparator = (item: SelectItem): item is SelectSeparator => 'type' in item && item.type === 'separator';
const isGroup = (item: SelectItem): item is SelectGroup => 'options' in item;
const isCaption = (item: SelectItem): item is SelectCaption => 'type' in item && item.type === 'caption';
const isOption = (item: SelectItem): item is SelectOption => 'value' in item;
const toList = (value: string | string[] | null | undefined) => (value == null ? [] : Array.isArray(value) ? value : [value]);

type Entry = { option: SelectOption; index: number };
type Row =
  | { kind: 'option'; key: string; entry: Entry }
  | { kind: 'separator'; key: string }
  | { kind: 'note'; key: string; id: string; label: string }
  | { kind: 'group'; key: string; id: string; label: string; caption?: string; entries: Entry[] };

/**
 * Figma "Select" with its menu (Select Content, Item, Label, Separator):
 *
 *     <ds-select label="Owner" placeholder="Select a user" [options]="users" [(value)]="owner">
 *       <svg dsLeadingIcon …></svg>
 *     </ds-select>
 *     <ds-select label="Reviewers" [options]="users" multiple tags [formField]="form.reviewers" />
 *
 * `value` is the selected value (`null` for none), or a list with `multiple`; it works with Signal Forms
 * (`[formField]`), Reactive Forms and `ngModel`. `dsLeadingIcon` / `dsTrailingIcon` mark the field's icons. The element
 * itself takes no space (`display: contents`); what it renders is the same as the React Select. Keyboard: arrows,
 * Home/End, PageUp/PageDown, Enter/Space, Escape, Tab and type-ahead.
 */
@Component({
  selector: 'ds-select',
  imports: [NgTemplateOutlet, DsBadge],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DsSelect), multi: true }],
  host: {
    style: 'display: contents',
    '[attr.aria-label]': 'null',
    '[attr.aria-describedby]': 'null',
    '[attr.label]': 'null',
    '[attr.caption]': 'null',
    '[attr.error]': 'null',
    '[attr.placeholder]': 'null',
    '[attr.variant]': 'null',
    '[attr.size]': 'null',
    '[attr.indicator]': 'null',
    '[attr.multiple]': 'null',
    '[attr.tags]': 'null',
    '[attr.tagsOverflow]': 'null',
    '[attr.disabled]': 'null',
    '[attr.required]': 'null',
    '[attr.invalid]': 'null',
    '[attr.touched]': 'null',
    '[attr.name]': 'null',
    '[attr.id]': 'null',
    '[attr.open]': 'null',
  },
  template: `
    <div [class]="'ds-field ds-field--' + size() + ' ds-select'">
      @if (label() !== undefined) {
        <!-- A <label> cannot point at a non-form element, so it names the combobox through aria-labelledby and focuses it on click. -->
        <label class="ds-field__label" [id]="labelId()" (click)="focusTrigger()">{{ label() }}</label>
      }
      <div class="ds-select__anchor">
        <div
          #trigger
          [id]="selectId()"
          role="combobox"
          [attr.tabindex]="isDisabled() ? null : 0"
          [class]="triggerClasses()"
          aria-haspopup="listbox"
          [attr.aria-expanded]="open()"
          [attr.aria-controls]="menuId()"
          [attr.aria-labelledby]="label() !== undefined ? labelId() : null"
          [attr.aria-label]="label() === undefined ? (ariaLabel() ?? null) : null"
          [attr.aria-describedby]="describedBy()"
          [attr.aria-activedescendant]="open() && highlighted() >= 0 ? optionId(highlighted()) : null"
          [attr.aria-invalid]="isInvalid() || null"
          [attr.aria-disabled]="isDisabled() || null"
          [attr.aria-required]="required() || null"
          (click)="clicked($event)"
          (keydown)="keydown($event)"
          (blur)="blurred()"
        >
          <span class="ds-select__main">
            @if (leadMedia(); as option) {
              <span class="ds-select__media" aria-hidden="true"><ng-container [ngTemplateOutlet]="option.media!" [ngTemplateOutletContext]="{ $implicit: option }" /></span>
            } @else if (leadingIcon()) {
              <span class="ds-select__icon" aria-hidden="true"><ng-content select="[dsLeadingIcon]" /></span>
            }
            @if (tags() && selected().length) {
              <span #row [class]="counting() ? 'ds-select__tags ds-select__tags--count' : 'ds-select__tags'">
                @for (option of shown(); track option.value) {
                  <ng-container [ngTemplateOutlet]="tag" [ngTemplateOutletContext]="{ $implicit: option, remove: !isDisabled() }" />
                }
                @if (hiddenOptions().length > 0) {
                  <span dsBadge border class="ds-select__more" [title]="hiddenLabels()"
                    ><span aria-hidden="true">+{{ hiddenOptions().length }}</span><span class="ds-select__hidden">and {{ hiddenOptions().length }} more: {{ hiddenLabels() }}</span></span
                  >
                }
                @if (counting()) {
                  <span #measure class="ds-select__measure" aria-hidden="true">
                    @for (option of selected(); track option.value) {
                      <ng-container [ngTemplateOutlet]="tag" [ngTemplateOutletContext]="{ $implicit: option, remove: !isDisabled(), copy: true }" />
                    }
                    <span dsBadge border>+{{ selected().length }}</span>
                  </span>
                }
              </span>
            } @else {
              <span [class]="selected().length ? 'ds-select__value' : 'ds-select__value ds-select__value--placeholder'">{{ selected().length ? selectedLabels() : placeholder() }}</span>
            }
          </span>
          @if (trailingIcon()) {
            <span class="ds-select__icon ds-select__icon--tail" aria-hidden="true"><ng-content select="[dsTrailingIcon]" /></span>
          }
          <span class="ds-select__icon" aria-hidden="true">
            <svg viewBox="0.9 0.9 22.2 22.2" fill="none" stroke="currentColor" stroke-width="1.736" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
          </span>
        </div>
        <div
          #menu
          [id]="menuId()"
          role="listbox"
          [class]="placed() === 'top' ? 'ds-select__menu ds-select__menu--top' : 'ds-select__menu'"
          [attr.aria-labelledby]="label() !== undefined ? labelId() : null"
          [attr.aria-label]="label() === undefined ? (ariaLabel() ?? null) : null"
          [attr.aria-multiselectable]="multiple() || null"
          [attr.aria-describedby]="noteIds()"
          tabindex="-1"
          [hidden]="!open()"
          (mousedown)="$event.preventDefault()"
          (mouseleave)="highlighted.set(-1)"
        >
          @for (row of rows(); track row.key) {
            @switch (row.kind) {
              @case ('separator') {
                <!-- A listbox may only own options and groups, so the divider is decoration hidden from assistive technology. -->
                <div class="ds-select__separator" aria-hidden="true"></div>
              }
              @case ('note') {
                <!-- Hidden too; the listbox's aria-describedby still reads it. -->
                @if (row.kind === 'note') {
                  <div [id]="row.id" class="ds-select__note" aria-hidden="true"><span>{{ row.label }}</span></div>
                }
              }
              @case ('group') {
                @if (row.kind === 'group') {
                  <div role="group" [attr.aria-labelledby]="row.id">
                    <div class="ds-select__group-label" [id]="row.id" role="presentation">
                      <span>{{ row.label }}</span>
                      @if (row.caption !== undefined) {
                        <span class="ds-select__group-caption">{{ row.caption }}</span>
                      }
                    </div>
                    @for (entry of row.entries; track entry.option.value) {
                      <ng-container [ngTemplateOutlet]="item" [ngTemplateOutletContext]="{ $implicit: entry }" />
                    }
                  </div>
                }
              }
              @default {
                @if (row.kind === 'option') {
                  <ng-container [ngTemplateOutlet]="item" [ngTemplateOutletContext]="{ $implicit: row.entry }" />
                }
              }
            }
          }
        </div>
      </div>
      @if (name()) {
        <!-- One input carries the form reset listener even with nothing selected; a multiple select adds one per value. -->
        <input #hiddenInput type="hidden" [attr.name]="multiple() ? null : name()" [value]="values()[0] ?? ''" [disabled]="isDisabled()" />
        @if (multiple()) {
          @for (v of values(); track v) {
            <input type="hidden" [attr.name]="name()" [value]="v" [disabled]="isDisabled()" />
          }
        }
      }
      @if (tags()) {
        <span class="ds-select__status" aria-live="polite">{{ status() }}</span>
      }
      @if (help() !== undefined) {
        <p [id]="captionId()" [class]="hasError() ? 'ds-field__caption ds-field__caption--error' : 'ds-field__caption'">{{ help() }}</p>
      }
    </div>

    <!-- A tag: Badge Border=True with its Close Icon as a pointer target (no nested button; the keyboard removes values with Backspace). -->
    <ng-template #tag let-option let-remove="remove" let-copy="copy">
      <span class="ds-badge ds-badge--sm ds-badge--neutral ds-badge--soft ds-badge--border"
        ><span class="ds-badge__label">{{ option.label }}</span>
        @if (remove) {
          <span class="ds-badge__remove" aria-hidden="true" (click)="$event.stopPropagation(); copy || removeValue(option)">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="remixicon">
              <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z" />
            </svg>
          </span>
        }
      </span>
    </ng-template>

    <ng-template #item let-entry>
      <div
        [id]="optionId(entry.index)"
        role="option"
        [class]="entry.option.description !== undefined ? 'ds-select__option ds-select__option--large' : 'ds-select__option'"
        [attr.aria-selected]="isSelected(entry.option)"
        [attr.aria-disabled]="entry.option.disabled || null"
        [attr.data-highlighted]="entry.index === highlighted() || null"
        (mousemove)="hover(entry.index)"
        (click)="choose(entry.index)"
      >
        @if (entry.option.description === undefined) {
          <span class="ds-select__check" aria-hidden="true"><ng-container [ngTemplateOutlet]="mark" [ngTemplateOutletContext]="{ $implicit: isSelected(entry.option) }" /></span>
        }
        <span class="ds-select__content">
          @if (entry.option.icon) {
            <span class="ds-select__icon" aria-hidden="true"><ng-container [ngTemplateOutlet]="entry.option.icon" [ngTemplateOutletContext]="{ $implicit: entry.option }" /></span>
          }
          @if (entry.option.media) {
            <span class="ds-select__media" aria-hidden="true"><ng-container [ngTemplateOutlet]="entry.option.media" [ngTemplateOutletContext]="{ $implicit: entry.option }" /></span>
          }
          @if (entry.option.description !== undefined) {
            <span class="ds-select__text"><span class="ds-select__label">{{ entry.option.label }}</span><span class="ds-select__description">{{ entry.option.description }}</span></span>
          } @else {
            <span class="ds-select__label">{{ entry.option.label }}</span>
          }
          @if (entry.option.caption !== undefined) {
            <span class="ds-select__caption">{{ entry.option.caption }}</span>
          }
          <!-- An item with a description shows the mark on the right, before the badge. -->
          @if (entry.option.description !== undefined && (isSelected(entry.option) || indicator() !== 'check')) {
            <span class="ds-select__check" aria-hidden="true"><ng-container [ngTemplateOutlet]="mark" [ngTemplateOutletContext]="{ $implicit: isSelected(entry.option) }" /></span>
          }
          @if (entry.option.badge !== undefined) {
            <span dsBadge border>{{ entry.option.badge }}</span>
          }
        </span>
      </div>
    </ng-template>

    <ng-template #mark let-checked>
      @switch (indicator()) {
        @case ('checkbox') {
          <span class="ds-checkbox" aria-hidden="true">
            <input class="ds-checkbox__input" type="checkbox" [checked]="checked" readonly tabindex="-1" inert />
            <svg class="ds-checkbox__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.14" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
          </span>
        }
        @case ('radio') {
          <span class="ds-radio" aria-hidden="true">
            <input class="ds-radio__input" type="radio" [checked]="checked" readonly tabindex="-1" inert />
            <span class="ds-radio__dot" aria-hidden="true"></span>
          </span>
        }
        @default {
          @if (checked) {
            <svg viewBox="0.9 0.9 22.2 22.2" fill="none" stroke="currentColor" stroke-width="1.736" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
          }
        }
      }
    </ng-template>
  `,
})
export class DsSelect implements FormValueControl<string | string[] | null>, ControlValueAccessor {
  /** The selected value (`null`: the placeholder), or the list of values with `multiple`. Two-way: `[(value)]`. */
  readonly value = model<string | string[] | null>(null);
  readonly options = input<SelectItem[]>([]);
  /** Figma "Placeholder". */
  readonly placeholder = input<string>();
  /** Figma "Field Label": names the combobox and the listbox. */
  readonly label = input<string>();
  /** Accessible name when there is no visible label. */
  readonly ariaLabel = input<string | undefined>(undefined, { alias: 'aria-label' });
  /** More descriptions of the combobox (ids). */
  readonly ariaDescribedby = input<string | undefined>(undefined, { alias: 'aria-describedby' });
  /** Figma Field "Description": help text under the field. */
  readonly caption = input<string>();
  /** Figma State=Invalid (Field "Error"): the message replaces the caption and marks the select invalid. */
  readonly error = input<string>();
  readonly variant = input<SelectVariant>('default');
  readonly size = input<SelectSize>('default');
  /** Check mark (Figma Select Item), Checkbox or Radio. */
  readonly indicator = input<SelectIndicator>('check');
  /** Several values: options toggle and the menu stays open; the trigger lists the labels. */
  readonly multiple = input(false, { transform: booleanAttribute });
  /** With `multiple`: each value is a removable badge (× with the mouse, Backspace removes the last one). */
  readonly tags = input(false, { transform: booleanAttribute });
  /** Tags that do not fit: `wrap` onto more rows (default), or keep one row and `count` the rest in a "+N" badge. */
  readonly tagsOverflow = input<'wrap' | 'count'>('wrap');
  /** Figma State=Invalid without a message. */
  readonly invalid = input(false, { transform: booleanAttribute });
  /** Whether the user has left the field (Signal Forms binds it, so a form's `invalid` waits until then). */
  readonly touched = input<boolean, unknown>(true, { transform: (value: unknown) => value !== false });
  /** Figma State=Disabled. */
  readonly disabled = input(false, { transform: booleanAttribute });
  readonly required = input(false, { transform: booleanAttribute });
  /** Form field name: the value is submitted through a hidden input (one per value with `multiple`). */
  readonly name = input('');
  readonly id = input<string>();
  /** Whether the menu is open; `[open]="true"` opens it on first render. */
  readonly open = model(false);
  /** Signal Forms: marks the field touched when focus leaves the control. */
  readonly touch = output<void>();

  private readonly autoId = uniqueId('ds-select');
  private readonly formDisabled = signal(false);
  private onChange: (value: string | string[] | null) => void = () => {};
  private onTouched: () => void = () => {};
  private readonly typeahead = new Typeahead();
  private readonly destroyRef = inject(DestroyRef);
  private initial: string | string[] | null = null;

  protected readonly trigger = viewChild.required<ElementRef<HTMLElement>>('trigger');
  private readonly menu = viewChild.required<ElementRef<HTMLElement>>('menu');
  private readonly row = viewChild<ElementRef<HTMLElement>>('row');
  private readonly measure = viewChild<ElementRef<HTMLElement>>('measure');
  private readonly hiddenInput = viewChild<ElementRef<HTMLInputElement>>('hiddenInput');
  protected readonly leadingIcon = contentChild(DsLeadingIcon);
  protected readonly trailingIcon = contentChild(DsTrailingIcon);
  /** Index into `flat` of the option with visual focus, or -1 (opening with the mouse highlights nothing). */
  protected readonly highlighted = signal(-1);
  /** Tags: what was removed, announced through a live region. */
  protected readonly status = signal('');
  private readonly fit = signal(Infinity);

  protected readonly selectId = computed(() => this.id() ?? this.autoId);
  protected readonly labelId = computed(() => `${this.selectId()}-label`);
  protected readonly menuId = computed(() => `${this.selectId()}-menu`);
  protected readonly captionId = computed(() => `${this.selectId()}-caption`);
  protected optionId(index: number) {
    return `${this.selectId()}-option-${index}`;
  }

  protected readonly values = computed(() => toList(this.value()));
  private readonly flat = computed(() => this.options().flatMap((item) => (isGroup(item) ? item.options : isOption(item) ? [item] : [])));
  protected readonly selected = computed(() => this.flat().filter((o) => this.values().includes(o.value)));
  private readonly selectedIndex = computed(() => this.flat().findIndex((o) => this.values().includes(o.value)));
  protected readonly selectedLabels = computed(() => this.selected().map((o) => o.label).join(', '));
  protected readonly hasError = computed(() => !!this.error());
  protected readonly isInvalid = computed(() => this.hasError() || (this.invalid() && this.touched()));
  readonly isDisabled = computed(() => this.disabled() || this.formDisabled());
  protected readonly help = computed(() => (this.hasError() ? this.error() : this.caption()));
  protected readonly describedBy = computed(() => [this.help() !== undefined ? this.captionId() : null, this.ariaDescribedby()].filter(Boolean).join(' ') || null);
  protected readonly counting = computed(() => this.tags() && this.tagsOverflow() === 'count');
  protected readonly shown = computed(() => (this.counting() ? this.selected().slice(0, this.fit()) : this.selected()));
  protected readonly hiddenOptions = computed(() => (this.counting() ? this.selected().slice(this.fit()) : []));
  protected readonly hiddenLabels = computed(() => this.hiddenOptions().map((o) => o.label).join(', '));
  /** A single select shows the selected option's picture instead of the lead icon. */
  protected readonly leadMedia = computed(() => (this.multiple() || !this.selected()[0]?.media ? undefined : this.selected()[0]));
  protected readonly triggerClasses = computed(() =>
    ['ds-select__trigger', `ds-select__trigger--${this.variant()}`, this.isInvalid() && 'ds-select__trigger--invalid', this.isDisabled() && 'ds-select__trigger--disabled'].filter(Boolean).join(' '),
  );
  protected readonly noteIds = computed(() => this.options().map((item, i) => (isCaption(item) ? `${this.selectId()}-note-${i}` : null)).filter(Boolean).join(' ') || null);
  protected readonly rows = computed<Row[]>(() => {
    let index = -1;
    const entry = (option: SelectOption) => ({ option, index: ++index });
    return this.options().map((item, i): Row => {
      if (isSeparator(item)) return { kind: 'separator', key: `separator-${i}` };
      if (isCaption(item)) return { kind: 'note', key: `note-${i}`, id: `${this.selectId()}-note-${i}`, label: item.label };
      if (isGroup(item)) return { kind: 'group', key: `group-${i}`, id: `${this.selectId()}-group-${i}`, label: item.label, caption: item.caption, entries: item.options.map(entry) };
      return { kind: 'option', key: `option-${item.value}`, entry: entry(item) };
    });
  });
  protected readonly placed = popupPlacement(() => this.menu()?.nativeElement, () => this.open(), () => 'bottom', { constrain: true });

  constructor() {
    afterNextRender(() => {
      this.initial = this.value();
      if (this.isDisabled() && this.open()) this.open.set(false);
      // Like a native <select>, the value goes back to its first value when the form is reset.
      const form = this.hiddenInput()?.nativeElement.form;
      if (!form) return;
      const reset = () => this.value.set(this.initial);
      form.addEventListener('reset', reset);
      this.destroyRef.onDestroy(() => form.removeEventListener('reset', reset));
    });
    // Keep the highlighted option in view.
    afterRenderEffect(() => {
      const index = this.highlighted();
      if (!this.open() || index < 0) return;
      revealInList(document.getElementById(this.optionId(index)));
    });
    // Tags with tagsOverflow="count": how many badges fit on one row next to the "+N" badge, measured on an invisible
    // copy of every badge (and of the widest counter) whenever the values or the row's width change.
    let observer: ResizeObserver | undefined;
    afterRenderEffect(() => {
      observer?.disconnect();
      observer = undefined;
      const row = this.row()?.nativeElement, measure = this.measure()?.nativeElement;
      this.selected();
      if (!untracked(this.counting) || !row || !measure) return;
      const compute = () => {
        const style = getComputedStyle(row);
        const room = row.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
        const gap = parseFloat(style.columnGap) || 0;
        const [counter, ...badges] = Array.from(measure.children).map((el) => el.getBoundingClientRect().width).reverse();
        badges.reverse();
        let used = 0, count = 0;
        for (; count < badges.length; count++) {
          const next = used + (count ? gap : 0) + badges[count];
          const rest = count < badges.length - 1 ? gap + counter : 0;
          if (next + rest > room) break;
          used = next;
        }
        if (count !== untracked(this.fit)) this.fit.set(count);
      };
      compute();
      observer = new ResizeObserver(compute);
      observer.observe(row);
      observer.observe(measure);
    });
    this.destroyRef.onDestroy(() => observer?.disconnect());
  }

  protected focusTrigger() {
    this.trigger().nativeElement.focus();
  }

  protected isSelected(option: SelectOption) {
    return this.values().includes(option.value);
  }

  private enabled = (i: number) => i >= 0 && i < this.flat().length && !this.flat()[i].disabled;
  // List navigation from ds-core: the next enabled option in a direction, the first and the last.
  private move(from: number, step: 1 | -1) {
    return moveEnabled(this.flat().length, this.enabled, from, step);
  }
  private first() {
    return firstEnabled(this.flat().length, this.enabled);
  }
  private last() {
    return lastEnabled(this.flat().length, this.enabled);
  }

  private openMenu(index: number) {
    this.open.set(true);
    this.highlighted.set(index);
  }
  private close() {
    this.open.set(false);
    this.highlighted.set(-1);
  }
  private update(next: string[]) {
    if (this.multiple()) {
      this.value.set(next);
      this.onChange(next);
    } else if (next[0] !== this.values()[0]) {
      this.value.set(next[0] ?? null);
      this.onChange(next[0] ?? null);
    }
  }
  protected removeValue(option: SelectOption) {
    this.update(this.values().filter((v) => v !== option.value));
    this.status.set(`${option.label} removed`);
  }
  // Single: select and close. Multiple: toggle and keep the menu open.
  protected choose(index: number) {
    if (!this.enabled(index)) return;
    const value = this.flat()[index].value;
    if (!this.multiple()) {
      this.update([value]);
      this.close();
      return;
    }
    const values = this.values();
    this.update(values.includes(value) ? values.filter((v) => v !== value) : this.flat().filter((o) => o.value === value || values.includes(o.value)).map((o) => o.value));
    this.highlighted.set(index);
  }
  protected hover(index: number) {
    if (index !== this.highlighted()) this.highlighted.set(this.enabled(index) ? index : -1);
  }

  // Type-ahead (ds-core): characters typed within 500 ms form one search; repeating one letter cycles through matches.
  private search(char: string) {
    const match = this.typeahead.find(char, this.flat().map((o) => o.label), this.enabled, this.open() ? this.highlighted() : this.selectedIndex());
    if (match >= 0) this.openMenu(match);
  }

  protected clicked(event: MouseEvent) {
    if (this.isDisabled() || event.defaultPrevented) return;
    if (this.open()) this.close();
    else this.openMenu(-1);
  }

  protected blurred() {
    this.close();
    this.onTouched();
    this.touch.emit();
  }

  protected keydown(event: KeyboardEvent) {
    if (this.isDisabled() || event.defaultPrevented) return;
    const { key, altKey } = event;
    const highlighted = this.highlighted();
    const selectedIndex = this.selectedIndex();
    const current = highlighted >= 0 ? highlighted : selectedIndex;
    const printable = key.length === 1 && !event.ctrlKey && !event.metaKey && !altKey;
    const length = this.flat().length;
    const selected = this.selected();
    if (!printable) this.typeahead.reset();
    let handled = true;
    if (this.tags() && (key === 'Backspace' || key === 'Delete') && selected.length) this.removeValue(selected[selected.length - 1]);
    else if (!this.open()) {
      if (key === 'ArrowDown' || key === 'ArrowUp' || key === 'Enter' || key === ' ') this.openMenu(this.enabled(selectedIndex) ? selectedIndex : this.first());
      else if (key === 'Home') this.openMenu(this.first());
      else if (key === 'End') this.openMenu(this.last());
      else if (printable) this.search(key);
      else handled = false;
    } else if (altKey && key === 'ArrowUp') this.multiple() ? this.close() : this.choose(current);
    else if (key === 'ArrowDown') this.highlighted.set(current < 0 ? this.first() : this.move(current, 1));
    else if (key === 'ArrowUp') this.highlighted.set(current < 0 ? this.last() : this.move(current, -1));
    else if (key === 'Home') this.highlighted.set(this.first());
    else if (key === 'End') this.highlighted.set(this.last());
    else if (key === 'PageDown') this.highlighted.set(pageEnabled(length, this.enabled, current, 1));
    else if (key === 'PageUp') this.highlighted.set(pageEnabled(length, this.enabled, current, -1));
    else if (key === 'Enter' || key === ' ') highlighted >= 0 ? this.choose(highlighted) : this.close();
    else if (key === 'Escape') this.close();
    // Tab picks the highlighted option of a single select (as the APG example does); a multiple select just closes.
    else if (key === 'Tab') {
      if (highlighted >= 0 && !this.multiple()) this.choose(highlighted);
      else this.close();
      handled = false;
    } else if (printable) this.search(key);
    else handled = false;
    if (handled) event.preventDefault();
  }

  writeValue(value: unknown) {
    this.value.set(value == null ? (this.multiple() ? [] : null) : Array.isArray(value) ? value.map(String) : String(value));
  }
  registerOnChange(fn: (value: string | string[] | null) => void) {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }
  setDisabledState(disabled: boolean) {
    this.formDisabled.set(disabled);
  }
}
