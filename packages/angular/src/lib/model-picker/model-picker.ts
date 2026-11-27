import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, Directive, TemplateRef, booleanAttribute, computed, contentChildren, inject, input, model, signal, viewChild } from '@angular/core';
import { DsPopover, DsPopoverTrigger } from '../popover/popover';
import { DsSwitch } from '../switch/switch';
import { DsToggle } from '../toggle/toggle';
import { DsToggleGroup } from '../toggle-group/toggle-group';
import { uniqueId } from '../internal/ids';
import { riArrowDownSLine, riCheckLine } from '../internal/remix';

// Styles live in @helloantek/ds-css (classes ds-model-picker*); this component renders ds-react's ModelPicker markup
// and behaviour.

/** One model in the menu. */
export interface ModelPickerModel {
  value: string;
  /** "Opus 4.1". Also shown on the trigger when chosen. */
  label: string;
  /** What it is for: "Hard problems, long documents". */
  description?: string;
  /** Shown when pointed at: 1–5 each. */
  speed?: number;
  quality?: number;
  cost?: number;
  /** What the choice means, at the bottom: "First word in ~2 s · $15 per 1M tokens". */
  note?: string;
}

/** One level of extended thinking's effort. */
export interface ModelPickerEffort {
  value: string;
  label: string;
}

export interface ModelPickerLabels {
  menu: string;
  models: string;
  thinkingMark: string;
  thinking: string;
  thinkingDescription: string;
  effort: string;
  speed: string;
  quality: string;
  cost: string;
  thinkingNote: string;
  outOf: (value: number, max: number) => string;
}

const LABELS: ModelPickerLabels = {
  menu: 'Model',
  models: 'Models',
  thinkingMark: 'Thinking',
  thinking: 'Extended thinking',
  thinkingDescription: 'Thinks longer before it answers',
  effort: 'Effort',
  speed: 'Speed',
  quality: 'Quality',
  cost: 'Cost',
  thinkingNote: '+ thinking',
  outOf: (value, max) => `${value} of ${max}`,
};

const EFFORTS: ModelPickerEffort[] = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
];

const MAX = 5;

/** A model's 16 px logo, in `currentColor`: `<ng-template dsModelPickerIcon="opus"><svg …></svg></ng-template>`. */
@Directive({ selector: 'ng-template[dsModelPickerIcon]' })
export class DsModelPickerIcon {
  /** The `value` of the model it belongs to. */
  readonly model = input.required<string>({ alias: 'dsModelPickerIcon' });
  readonly template = inject(TemplateRef);
}

/**
 * Figma pattern "Model Picker" (`<ds-model-picker>`, which takes no space of its own): the model menu of an AI chat, opened from the composer. Each model
 * with its logo (`dsModelPickerIcon` templates) and what it is for; pointing at one shows its speed, quality and cost;
 * extended thinking with its effort (`thinkable`, `[(thinking)]`, `[(effort)]`); and what the choice means at the
 * bottom. The trigger is a Ghost sm Button, for the composer's model slot.
 *
 *     <ds-model-picker [models]="models" [(value)]="model" thinkable [(thinking)]="thinking">
 *       <ng-template dsModelPickerIcon="opus"><svg …></svg></ng-template>
 *     </ds-model-picker>
 */
@Component({
  selector: 'ds-model-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet, DsPopover, DsPopoverTrigger, DsSwitch, DsToggleGroup, DsToggle],
  host: {
    style: 'display: contents',
    '[attr.models]': 'null',
    '[attr.value]': 'null',
    '[attr.thinkable]': 'null',
    '[attr.thinking]': 'null',
    '[attr.effort]': 'null',
    '[attr.efforts]': 'null',
    '[attr.open]': 'null',
    '[attr.align]': 'null',
    '[attr.labels]': 'null',
  },
  template: `
    <ng-template #logo let-model>
      @if (icons().get(model.value); as icon) {
        <ng-container [ngTemplateOutlet]="icon" />
      }
    </ng-template>
    <div dsPopover #popover aria-label="{{ t().menu }}" [align]="align()" width="320px" panelClass="ds-model-picker" [open]="open()" (openChange)="setOpen($event)">
      <button type="button" dsPopoverTrigger class="ds-button ds-button--ghost ds-button--size-sm">
        @if (chosen() && icons().has(chosen().value)) {
          <span class="ds-button__icon" aria-hidden="true"><ng-container [ngTemplateOutlet]="logo" [ngTemplateOutletContext]="{ $implicit: chosen() }" /></span>
        }
        <span class="ds-button__label">{{ chosen().label }}{{ thinking() ? ' · ' + t().thinkingMark : '' }}</span>
        <span class="ds-button__icon" aria-hidden="true">${riArrowDownSLine}</span>
      </button>
      <div
        class="ds-model-picker__models"
        role="listbox"
        tabindex="0"
        [attr.aria-label]="t().models"
        [attr.aria-activedescendant]="pointed() !== null ? optionId(pointed()!) : null"
        (keydown)="onListKeyDown($event)"
        (mouseleave)="pointed.set(null)"
      >
        @for (item of models(); track item.value) {
          <div
            [id]="optionId(item.value)"
            role="option"
            [attr.aria-selected]="item.value === chosen().value"
            [class]="item.value === pointed() && hasBars(item) ? 'ds-model-picker__model ds-model-picker__model--open' : 'ds-model-picker__model'"
            [attr.data-highlighted]="item.value === pointed() || null"
            (mousemove)="pointed() !== item.value && pointed.set(item.value)"
            (click)="choose(item.value)"
          >
            <div class="ds-model-picker__item">
              @if (icons().has(item.value)) {
                <span class="ds-model-picker__icon" aria-hidden="true"><ng-container [ngTemplateOutlet]="logo" [ngTemplateOutletContext]="{ $implicit: item }" /></span>
              }
              <span class="ds-model-picker__text">
                <span class="ds-model-picker__label">{{ item.label }}</span>
                @if (item.description !== undefined) {
                  <span class="ds-model-picker__description">{{ item.description }}</span>
                }
              </span>
              <span class="ds-model-picker__check" aria-hidden="true">
                @if (item.value === chosen().value) {
                  ${riCheckLine}
                }
              </span>
            </div>
            @if (item.value === pointed() && hasBars(item)) {
              <dl class="ds-model-picker__bars">
                @for (bar of bars(item); track bar.label) {
                  <div class="ds-model-picker__bar">
                    <dt>{{ bar.label }}</dt>
                    <dd>
                      <span class="ds-model-picker__dashes" aria-hidden="true">
                        @for (dash of dashes; track $index) {
                          <span [class]="$index < bar.value ? 'ds-model-picker__dash ds-model-picker__dash--on' : 'ds-model-picker__dash'"></span>
                        }
                      </span>
                      <span class="ds-model-picker__hidden">{{ t().outOf(bar.value, max) }}</span>
                    </dd>
                  </div>
                }
              </dl>
            }
          </div>
        }
      </div>
      @if (thinkable()) {
        <div class="ds-model-picker__separator" aria-hidden="true"></div>
        <div class="ds-model-picker__thinking">
          <ds-switch size="sm" [label]="t().thinking" [caption]="t().thinkingDescription" [checked]="thinking()" (checkedChange)="thinking.set($event)" />
          @if (thinking() && efforts().length > 0) {
            <div dsToggleGroup type="single" [spacing]="2" [attr.aria-label]="t().effort" [value]="currentEffort()" (valueChange)="setEffort($event)">
              @for (level of efforts(); track level.value) {
                <button dsToggle [value]="level.value">{{ level.label }}</button>
              }
            </div>
          }
        </div>
      }
      @if (current().note !== undefined) {
        <p class="ds-model-picker__note">{{ current().note }}{{ thinking() ? ' ' + t().thinkingNote : '' }}</p>
      }
    </div>
  `,
})
export class DsModelPicker {
  readonly models = input.required<ModelPickerModel[]>();
  /** The chosen model's `value`, two-way with `[(value)]`; the first model by default. */
  readonly value = model<string>('');
  /** Shows the Extended thinking switch. */
  readonly thinkable = input(false, { transform: booleanAttribute });
  /** Extended thinking, two-way with `[(thinking)]`. */
  readonly thinking = model(false);
  /** The effort, shown while thinking is on; two-way with `[(effort)]`. Default the middle level. */
  readonly effort = model<string>('');
  /** The effort levels; `[]` shows none. Default Low, Medium, High. */
  readonly efforts = input<ModelPickerEffort[]>(EFFORTS);
  /** Open state, two-way with `[(open)]`. */
  readonly open = model(false);
  /** Where the menu lines up with the trigger. Default `end`. */
  readonly align = input<'start' | 'center' | 'end'>('end');
  /** Texts, for other languages. */
  readonly labels = input<Partial<ModelPickerLabels>>({});

  protected readonly t = computed<ModelPickerLabels>(() => ({ ...LABELS, ...this.labels() }));
  protected readonly max = MAX;
  protected readonly dashes = Array.from({ length: MAX });
  private readonly id = uniqueId('ds-model-picker');
  private readonly popover = viewChild.required<DsPopover>('popover');
  private readonly iconTemplates = contentChildren(DsModelPickerIcon);
  protected readonly icons = computed(() => new Map(this.iconTemplates().map((icon) => [icon.model(), icon.template])));
  /** The model pointed at (mouse or arrow keys): its bars show, and the note at the bottom follows it. */
  protected readonly pointed = signal<string | null>(null);
  protected readonly chosen = computed(() => this.models().find((m) => m.value === this.value()) ?? this.models()[0]);
  protected readonly current = computed(() => this.models().find((m) => m.value === this.pointed()) ?? this.chosen());
  protected readonly currentEffort = computed(() => this.effort() || this.efforts()[Math.floor(this.efforts().length / 2)]?.value || '');

  protected optionId(value: string) {
    return `${this.id}-option-${value}`;
  }

  protected hasBars(m: ModelPickerModel) {
    return m.speed !== undefined || m.quality !== undefined || m.cost !== undefined;
  }

  protected bars(m: ModelPickerModel) {
    const t = this.t();
    const clamp = (v: number) => Math.max(0, Math.min(MAX, Math.round(v)));
    return [
      m.speed !== undefined && { label: t.speed, value: clamp(m.speed) },
      m.quality !== undefined && { label: t.quality, value: clamp(m.quality) },
      m.cost !== undefined && { label: t.cost, value: clamp(m.cost) },
    ].filter((bar): bar is { label: string; value: number } => !!bar);
  }

  protected setOpen(next: boolean) {
    this.open.set(next);
    if (!next) this.pointed.set(null);
  }

  protected choose(next: string) {
    this.value.set(next);
    this.pointed.set(null);
    this.popover().close(true);
  }

  protected setEffort(next: string | string[]) {
    if (typeof next === 'string' && next) this.effort.set(next);
  }

  protected onListKeyDown(event: KeyboardEvent) {
    const models = this.models();
    const pointed = this.pointed();
    const at = models.findIndex((m) => m.value === (pointed ?? this.chosen().value));
    const move = (to: number) => {
      event.preventDefault();
      const next = models[(to + models.length) % models.length];
      this.pointed.set(next.value);
      document.getElementById(this.optionId(next.value))?.scrollIntoView?.({ block: 'nearest' });
    };
    if (event.key === 'ArrowDown') move(pointed === null ? at : at + 1);
    else if (event.key === 'ArrowUp') move(pointed === null ? at : at - 1);
    else if (event.key === 'Home') move(0);
    else if (event.key === 'End') move(models.length - 1);
    else if ((event.key === 'Enter' || event.key === ' ') && pointed !== null) {
      event.preventDefault();
      this.choose(pointed);
    }
  }
}
