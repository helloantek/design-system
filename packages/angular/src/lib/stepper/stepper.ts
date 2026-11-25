import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, InjectionToken, type Signal, computed, contentChildren, forwardRef, inject, input } from '@angular/core';
import { riCheckLineHidden, riCloseLineHidden } from '../internal/remix';

// Styles live in @helloantek/ds-css (classes ds-stepper*); these components render ds-react's Stepper markup.

/** Figma "Orientation". */
export type StepperOrientation = 'horizontal' | 'vertical';
/** Figma "Style": a round marker with a line to the next step, or a thin bar on top (horizontal only). */
export type StepperVariant = 'indicator' | 'bar';
/** Figma Stepper Item "State". */
export type StepperItemState = 'upcoming' | 'current' | 'complete' | 'error';

/** One step for the `steps` shorthand. */
export interface StepperStep {
  /** Figma "Label". */
  label: string;
  /** Figma "Caption" (with "Show caption"). */
  caption?: string;
  /** Marks this step as failed whatever `current` says. */
  error?: boolean;
}

interface StepperContext {
  variant: Signal<StepperVariant>;
  placeOf(item: DsStepperItem): number | undefined;
}
const DS_STEPPER = new InjectionToken<StepperContext>('DS_STEPPER');

const defaultStatus: Record<StepperItemState, string | undefined> = { upcoming: undefined, current: undefined, complete: 'completed', error: 'error' };

/**
 * Figma "Stepper Item" on a native `<li>`: one step, with its marker (Figma "Stepper Indicator") or bar, label and
 * caption. The current step is announced with `aria-current="step"`.
 *
 *     <li dsStepperItem state="complete" label="Upload" caption="contacts.csv"></li>
 */
@Component({
  selector: 'li[dsStepperItem]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    '[attr.aria-current]': 'state() === "current" ? "step" : null',
    '[attr.state]': 'null',
    '[attr.label]': 'null',
    '[attr.caption]': 'null',
    '[attr.number]': 'null',
    '[attr.showLine]': 'null',
    '[attr.statusLabel]': 'null',
  },
  template: `
    <ng-template #mark>
      @switch (state()) {
        @case ('complete') {
          ${riCheckLineHidden}
        }
        @case ('error') {
          ${riCloseLineHidden}
        }
        @default {<ng-container>{{ number() ?? place() }}</ng-container>}
      }
    </ng-template>
    <ng-template #text>
      <span class="ds-stepper__text">
        <span class="ds-stepper__label">{{ label() }}</span>
        @if (caption() !== undefined && caption() !== null) {
          <span class="ds-stepper__caption">{{ caption() }}</span>
        }
        @if (status()) {
          <span class="ds-stepper__status">, {{ status() }}</span>
        }
      </span>
    </ng-template>
    @if (stepper?.variant() === 'bar') {
      <span class="ds-stepper__bar"></span>
      <span class="ds-stepper__row">
        <span class="ds-stepper__mark" aria-hidden="true"><ng-container [ngTemplateOutlet]="mark" /></span>
        <ng-container [ngTemplateOutlet]="text" />
      </span>
    } @else {
      <span class="ds-stepper__track">
        <span class="ds-stepper__indicator" aria-hidden="true"><ng-container [ngTemplateOutlet]="mark" /></span>
        <span class="ds-stepper__line"></span>
      </span>
      <ng-container [ngTemplateOutlet]="text" />
    }
  `,
  imports: [NgTemplateOutlet],
})
export class DsStepperItem {
  /** Figma "State". */
  readonly state = input<StepperItemState>('upcoming');
  /** Figma "Label". */
  readonly label = input.required<string>();
  /** Figma "Caption" (with "Show caption"). */
  readonly caption = input<string | null>();
  /** Figma "Number"; defaults to the step's place in the Stepper. */
  readonly number = input<string | number>();
  /** Figma "Show line": the line to the next step. Defaults to every step but the last. Indicator style only. */
  readonly showLine = input<boolean>();
  /** Read after the label by screen readers; defaults to "completed" and "error"; `null` for none. */
  readonly statusLabel = input<string | null>();

  protected readonly stepper = inject(DS_STEPPER, { optional: true });
  protected readonly place = computed(() => this.stepper?.placeOf(this));
  protected readonly status = computed(() => (this.statusLabel() === undefined ? defaultStatus[this.state()] : this.statusLabel()));
  protected readonly classes = computed(() =>
    ['ds-stepper__item', `ds-stepper__item--${this.state()}`, this.showLine() === true && 'ds-stepper__item--line', this.showLine() === false && 'ds-stepper__item--no-line']
      .filter(Boolean)
      .join(' '),
  );
}

/**
 * Figma "Stepper" on a native `<ol>`: the steps of a flow in order. Name it with `aria-label`.
 *
 *     <ol dsStepper aria-label="Create a workspace" [steps]="steps" [current]="1"></ol>
 *     <ol dsStepper aria-label="Import"><li dsStepperItem state="complete" label="Upload"></li>…</ol>
 *
 * With `steps`, each step's state follows `current` (0-based; `steps.length` means all done); or give
 * `<li dsStepperItem>` children, numbered in order.
 */
@Component({
  selector: 'ol[dsStepper]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DsStepperItem],
  providers: [{ provide: DS_STEPPER, useExisting: forwardRef(() => DsStepper) }],
  host: {
    '[class]': 'classes()',
    '[attr.orientation]': 'null',
    '[attr.variant]': 'null',
    '[attr.steps]': 'null',
    '[attr.current]': 'null',
  },
  template: `
    @if (steps(); as list) {
      @for (step of list; track $index; let i = $index) {
        <li dsStepperItem [state]="stateFor(i, step)" [label]="step.label" [caption]="step.caption" [number]="i + 1"></li>
      }
    } @else {
      <ng-content />
    }
  `,
})
export class DsStepper implements StepperContext {
  /** Figma "Orientation". Style=Bar exists only horizontally. */
  readonly orientation = input<StepperOrientation>('horizontal');
  /** Figma "Style". */
  readonly variant = input<StepperVariant>('indicator');
  /** The steps as data; each one's state follows `current`. Or give `<li dsStepperItem>` children. */
  readonly steps = input<StepperStep[]>();
  /** With `steps`: the index of the current step (0-based). */
  readonly current = input(0);

  private readonly items = contentChildren(DsStepperItem);
  protected readonly classes = computed(() =>
    ['ds-stepper', this.orientation() === 'vertical' && 'ds-stepper--vertical', this.variant() === 'bar' && 'ds-stepper--bar'].filter(Boolean).join(' '),
  );

  placeOf(item: DsStepperItem) {
    const at = this.items().indexOf(item);
    return at < 0 ? undefined : at + 1;
  }

  protected stateFor(index: number, step: StepperStep): StepperItemState {
    return step.error ? 'error' : index < this.current() ? 'complete' : index === this.current() ? 'current' : 'upcoming';
  }
}
