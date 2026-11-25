import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, Directive, computed, contentChild, input, model } from '@angular/core';
import { DsBadge } from '../badge/badge';
import { DsToggle } from '../toggle/toggle';
import { DsToggleGroup } from '../toggle-group/toggle-group';
import { DsTooltip } from '../tooltip/tooltip';
import { uniqueId } from '../internal/ids';
import { riDatabase2LineHidden, riDriveFillHidden, riGoogleFillHidden, riLockLineHidden, riMailLineHidden, riNotionFillHidden, riRobotLine } from '../internal/remix';

// Styles live in @helloantek/ds-css (classes ds-autonomy*); this component renders ds-react's AutonomyDial markup and
// behaviour.

/** The dial's three stops. */
export type AutonomyLevel = 'ask' | 'risky' | 'auto';
/** How risky an action is: `safe` runs on its own from If risky, `risky` and `destructive` only at Full auto. */
export type AutonomyRisk = 'safe' | 'risky' | 'destructive';
/** The tool an action uses, drawn as its 16 px icon. */
export type AutonomyTool = 'notion' | 'database' | 'mail' | 'google' | 'drive';

/** One action the agent can take. */
export interface AutonomyAction {
  /** What it does: "Send replies". */
  label: string;
  /** The tool it uses. */
  tool?: AutonomyTool;
  risk?: AutonomyRisk;
  /** Always asks, whatever the dial says; the lock's tooltip gives this reason. */
  locked?: string;
}

/** Whether an action runs on its own at a stop of the dial. */
export function runsOnItsOwn(action: AutonomyAction, level: AutonomyLevel): boolean {
  if (action.locked !== undefined) return false;
  if (level === 'auto') return true;
  if (level === 'risky') return (action.risk ?? 'safe') === 'safe';
  return false;
}

/** The agent's mark (a robot by default): `<svg dsAutonomyIcon …>`. */
@Directive({ selector: '[dsAutonomyIcon]' })
export class DsAutonomyIcon {}

type Labels = {
  description: string;
  dial: string;
  ask: string;
  risky: string;
  auto: string;
  runs: string;
  asks: string;
  nothing: string;
  riskyBadge: string;
  destructiveBadge: string;
  locked: string;
};

/**
 * Figma pattern "Autonomy Dial" on a native `<section>`: how much one agent may do on its own – a three-stop dial, and
 * its actions split between "Runs on its own" and "Asks you first".
 *
 *     <section dsAutonomyDial agent="Support agent" [(value)]="level" [actions]="actions"></section>
 */
@Component({
  selector: 'section[dsAutonomyDial]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet, DsBadge, DsToggle, DsToggleGroup, DsTooltip],
  host: {
    class: 'ds-autonomy',
    '[attr.aria-label]': 'ariaLabel() ?? null',
    '[attr.aria-labelledby]': 'ariaLabel() ? null : id + "-agent"',
    '[attr.agent]': 'null',
    '[attr.description]': 'null',
    '[attr.value]': 'null',
    '[attr.actions]': 'null',
  },
  template: `
    <ng-template #row let-action>
      <li [class]="action.locked !== undefined ? 'ds-autonomy__action ds-autonomy__action--locked' : 'ds-autonomy__action'">
        @switch (action.tool) {
          @case ('notion') {
            ${riNotionFillHidden}
          }
          @case ('database') {
            ${riDatabase2LineHidden}
          }
          @case ('mail') {
            ${riMailLineHidden}
          }
          @case ('google') {
            ${riGoogleFillHidden}
          }
          @case ('drive') {
            ${riDriveFillHidden}
          }
        }
        <span class="ds-autonomy__label">{{ action.label }}</span>
        @if (action.risk === 'risky') {
          <span dsBadge variant="tint" color="amber">{{ t().riskyBadge }}</span>
        }
        @if (action.risk === 'destructive') {
          <span dsBadge variant="tint" color="red">{{ t().destructiveBadge }}</span>
        }
        @if (action.locked !== undefined) {
          <ds-tooltip [content]="action.locked" side="left">
            <button type="button" class="ds-autonomy__lock" [attr.aria-label]="t().locked">${riLockLineHidden}</button>
          </ds-tooltip>
        }
      </li>
    </ng-template>
    <div class="ds-autonomy__header">
      <div class="ds-autonomy__agent">
        <span class="ds-autonomy__mark" aria-hidden="true">
          @if (icon()) {
            <ng-content select="[dsAutonomyIcon]" />
          } @else {
            ${riRobotLine}
          }
        </span>
        <div>
          <p class="ds-autonomy__name" [id]="id + '-agent'">{{ agent() }}</p>
          <p class="ds-autonomy__description">{{ description() ?? t().description }}</p>
        </div>
      </div>
      <div dsToggleGroup type="single" [allowEmpty]="false" [value]="value()" (valueChange)="choose($event)" [attr.aria-label]="t().dial">
        <button dsToggle value="ask">{{ t().ask }}</button>
        <button dsToggle value="risky">{{ t().risky }}</button>
        <button dsToggle value="auto">{{ t().auto }}</button>
      </div>
    </div>
    <div class="ds-autonomy__lists">
      <div class="ds-autonomy__group">
        <h4 class="ds-autonomy__title" [id]="id + '-runs'">{{ t().runs }}<span dsBadge variant="tint" color="neutral">{{ alone().length }}</span></h4>
        @if (alone().length > 0) {
          <ul class="ds-autonomy__actions" [attr.aria-labelledby]="id + '-runs'">
            @for (action of alone(); track $index) {
              <ng-container [ngTemplateOutlet]="row" [ngTemplateOutletContext]="{ $implicit: action }" />
            }
          </ul>
        } @else {
          <p class="ds-autonomy__empty">{{ t().nothing }}</p>
        }
      </div>
      @if (asks().length > 0) {
        <div class="ds-autonomy__group">
          <h4 class="ds-autonomy__title" [id]="id + '-asks'">{{ t().asks }}<span dsBadge variant="tint" color="neutral">{{ asks().length }}</span></h4>
          <ul class="ds-autonomy__actions" [attr.aria-labelledby]="id + '-asks'">
            @for (action of asks(); track $index) {
              <ng-container [ngTemplateOutlet]="row" [ngTemplateOutletContext]="{ $implicit: action }" />
            }
          </ul>
        </div>
      }
    </div>
  `,
})
export class DsAutonomyDial {
  /** The agent: "Support agent". */
  readonly agent = input.required<string>();
  /** Under the agent (default "What it may do without asking you"). */
  readonly description = input<string>();
  /** The stop; two-way with `[(value)]` (default `risky`). */
  readonly value = model<AutonomyLevel>('risky');
  /** Every action it can take, in order; the dial splits them between the two lists. */
  readonly actions = input.required<AutonomyAction[]>();
  readonly ariaLabel = input<string | undefined>(undefined, { alias: 'aria-label' });
  /** Texts, for other languages. */
  readonly labels = input<Partial<Labels>>({});

  protected readonly id = uniqueId('ds-autonomy');
  protected readonly icon = contentChild(DsAutonomyIcon);
  protected readonly t = computed<Labels>(() => ({
    description: 'What it may do without asking you',
    dial: 'Autonomy',
    ask: 'Always ask',
    risky: 'If risky',
    auto: 'Full auto',
    runs: 'Runs on its own',
    asks: 'Asks you first',
    nothing: 'Nothing – it asks before every action.',
    riskyBadge: 'Risky',
    destructiveBadge: 'Destructive',
    locked: 'Locked',
    ...this.labels(),
  }));
  protected readonly alone = computed(() => this.actions().filter((a) => runsOnItsOwn(a, this.value())));
  protected readonly asks = computed(() => this.actions().filter((a) => !runsOnItsOwn(a, this.value())));

  // A dial always has a stop.
  protected choose(next: string | string[]) {
    if (next === 'ask' || next === 'risky' || next === 'auto') this.value.set(next);
  }
}
