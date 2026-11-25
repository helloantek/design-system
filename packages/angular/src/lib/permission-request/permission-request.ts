import { ChangeDetectionStrategy, Component, Directive, booleanAttribute, computed, contentChild, input, model, output } from '@angular/core';
import { DsBadge } from '../badge/badge';
import { DsButton } from '../button/button';
import { DsKbd } from '../kbd/kbd';
import { DsTrailingIcon } from '../slots/slots';
import { DsToggle } from '../toggle/toggle';
import { DsToggleGroup } from '../toggle-group/toggle-group';
import { uniqueId } from '../internal/ids';
import { riCheckLine, riCheckLineHidden, riCloseLine, riCloseLineHidden, riCornerDownLeftLine, riFileTextLineHidden, riRobotLine, riTimeLine } from '../internal/remix';

// Styles live in @helloantek/ds-css (classes ds-permission*); these components render ds-react's PermissionRequest
// markup and behaviour.

/** How long the right lasts. */
export type PermissionDuration = 'once' | 'hour' | 'always';
/** Where the request stands: `pending` asks; the rest fold it to one line. */
export type PermissionRequestState = 'pending' | 'allowed' | 'denied' | 'expired';

type Labels = {
  wantsTo: string;
  destructive: string;
  forHowLong: string;
  onceOnly: string;
  deny: string;
  durations: Partial<Record<PermissionDuration, string>>;
  allow: Partial<Record<PermissionDuration, string>>;
  allowed: string;
  denied: string;
  expired: string;
  revoke: string;
  change: string;
  askAgain: string;
};

/** The agent's 16 px icon (a robot by default): `<svg dsPermissionIcon …>`. */
@Directive({ selector: '[dsPermissionIcon]' })
export class DsPermissionIcon {}

/** The tool's 12 px logo, before the tool's name: `<svg dsPermissionToolIcon …>`. */
@Directive({ selector: '[dsPermissionToolIcon]' })
export class DsPermissionToolIcon {}

/**
 * What the right covers: "It can" with green checks, "It cannot" with muted crosses.
 *
 *     <div dsPermissionScope [can]="['Read messages in #billing']" [cannot]="['Post messages']"></div>
 */
@Component({
  selector: 'div[dsPermissionScope]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'ds-permission__section', '[attr.can]': 'null', '[attr.cannot]': 'null' },
  template: `
    @if (can().length > 0) {
      <div class="ds-permission__list">
        <p class="ds-permission__heading">{{ labels().can ?? 'It can' }}</p>
        <ul [attr.aria-label]="labels().can ?? 'It can'">
          @for (item of can(); track $index) {
            <li class="ds-permission__item ds-permission__item--can">${riCheckLineHidden}{{ item }}</li>
          }
        </ul>
      </div>
    }
    @if (cannot().length > 0) {
      <div class="ds-permission__list">
        <p class="ds-permission__heading">{{ labels().cannot ?? 'It cannot' }}</p>
        <ul [attr.aria-label]="labels().cannot ?? 'It cannot'">
          @for (item of cannot(); track $index) {
            <li class="ds-permission__item ds-permission__item--cannot">${riCloseLineHidden}{{ item }}</li>
          }
        </ul>
      </div>
    }
  `,
})
export class DsPermissionScope {
  /** What the agent will be able to do. */
  readonly can = input<string[]>([]);
  /** What it will not be able to do. */
  readonly cannot = input<string[]>([]);
  readonly labels = input<Partial<{ can: string; cannot: string }>>({});
}

/**
 * The files the right touches: the count, the first few with their size, and "N more".
 *
 *     <div dsPermissionFiles [files]="[{ name: 'invoice.pdf', size: '84 KB' }]" [total]="14"></div>
 */
@Component({
  selector: 'div[dsPermissionFiles]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DsBadge],
  host: { class: 'ds-permission__section ds-permission__section--files', '[attr.files]': 'null', '[attr.total]': 'null' },
  template: `
    <p class="ds-permission__heading">{{ heading() }}<span dsBadge variant="tint">{{ all() }}</span></p>
    <ul class="ds-permission__files" [attr.aria-label]="heading()">
      @for (file of files(); track $index) {
        <li class="ds-permission__file">
          ${riFileTextLineHidden}<span>{{ file.name }}</span>
          @if (file.size !== undefined) {
            <span class="ds-permission__size">{{ file.size }}</span>
          }
        </li>
      }
    </ul>
    @if (all() - files().length > 0) {
      <p class="ds-permission__more">{{ labels().more ? labels().more!(all() - files().length) : all() - files().length + ' more' }}</p>
    }
  `,
})
export class DsPermissionFiles {
  /** The first files: name and size. */
  readonly files = input.required<{ name: string; size?: string }[]>();
  /** How many files in all; the rest show as "N more". */
  readonly total = input<number>();
  readonly labels = input<Partial<{ files: string; more: (n: number) => string }>>({});

  protected readonly all = computed(() => this.total() ?? this.files().length);
  protected readonly heading = computed(() => this.labels().files ?? 'Files');
}

/**
 * Figma pattern "Permission Request" on a native `<article>`: an agent asks for one specific right, for a set time;
 * once answered it folds to one line.
 *
 *     <article dsPermissionRequest agent="Support agent" action="read #billing" tool="Slack · Acme workspace"
 *              reason="…" [(duration)]="duration" (allow)="grant($event)" (deny)="refuse()">
 *       <svg dsPermissionToolIcon …></svg>
 *       <div dsPermissionScope [can]="…" [cannot]="…"></div>
 *     </article>
 *
 * Esc denies and Enter allows while focus is in the card. `destructive`: a red badge, Allow in red, and "Just once" the
 * only choice. Answered (`state`), the line offers Revoke (`revocable`), Change (`changeable`) or Ask again
 * (`reaskable`).
 */
@Component({
  selector: 'article[dsPermissionRequest]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DsBadge, DsButton, DsKbd, DsTrailingIcon, DsToggle, DsToggleGroup],
  host: {
    '[class]': 'classes()',
    '[attr.aria-labelledby]': 'id + "-title"',
    '[attr.tabindex]': 'state() === "pending" ? -1 : null',
    '[attr.agent]': 'null',
    '[attr.action]': 'null',
    '[attr.tool]': 'null',
    '[attr.reason]': 'null',
    '[attr.destructive]': 'null',
    '[attr.durations]': 'null',
    '[attr.duration]': 'null',
    '[attr.state]': 'null',
    '[attr.outcomeTitle]': 'null',
    '[attr.outcome]': 'null',
    '[attr.revocable]': 'null',
    '[attr.changeable]': 'null',
    '[attr.reaskable]': 'null',
    '(keydown)': 'key($event)',
  },
  template: `
    @if (state() !== 'pending') {
      <div class="ds-permission__answered" role="status">
        <span [class]="'ds-permission__status ds-permission__status--' + state()" aria-hidden="true">
          @switch (state()) {
            @case ('allowed') {
              ${riCheckLine}
            }
            @case ('denied') {
              ${riCloseLine}
            }
            @default {
              ${riTimeLine}
            }
          }
        </span>
        <div class="ds-permission__who">
          <p class="ds-permission__title" [id]="id + '-title'">{{ outcomeTitle() ?? verb() + ' · ' + action() }}</p>
          @if (outcome() !== undefined) {
            <p class="ds-permission__tool">{{ outcome() }}</p>
          }
        </div>
        @if (state() === 'allowed' && revocable()) {
          <button dsButton variant="outline" size="xs" (click)="revoke.emit()">{{ t().revoke }}</button>
        }
        @if (state() === 'denied' && changeable()) {
          <button dsButton variant="ghost" size="xs" (click)="change.emit()">{{ t().change }}</button>
        }
        @if (state() === 'expired' && reaskable()) {
          <button dsButton variant="ghost" size="xs" (click)="askAgain.emit()">{{ t().askAgain }}</button>
        }
      </div>
    } @else {
      <div class="ds-permission__header">
        <span class="ds-permission__icon" aria-hidden="true">
          @if (icon()) {
            <ng-content select="[dsPermissionIcon]" />
          } @else {
            ${riRobotLine}
          }
        </span>
        <div class="ds-permission__who">
          <h3 class="ds-permission__title" [id]="id + '-title'"><strong>{{ agent() }}</strong> {{ t().wantsTo }} <strong>{{ action() }}</strong></h3>
          @if (tool() !== undefined) {
            <p class="ds-permission__tool"><ng-content select="[dsPermissionToolIcon]" />{{ tool() }}</p>
          }
        </div>
        @if (destructive()) {
          <span dsBadge variant="tint" color="red">{{ t().destructive }}</span>
        }
      </div>
      @if (reason() !== undefined) {
        <blockquote class="ds-permission__reason"><p>{{ reason() }}</p></blockquote>
      }
      <ng-content />
      <div class="ds-permission__duration">
        <p class="ds-permission__heading" [id]="id + '-duration'">{{ t().forHowLong }}</p>
        <div dsToggleGroup type="single" size="sm" [spacing]="1" [allowEmpty]="false" [value]="current()" (valueChange)="choose($event)" [attr.aria-labelledby]="id + '-duration'">
          @for (d of durations(); track d) {
            <button dsToggle [value]="d" [disabled]="destructive() && d !== 'once'">{{ t().durations[d] }}</button>
          }
        </div>
        @if (destructive()) {
          <p class="ds-permission__note">{{ t().onceOnly }}</p>
        }
      </div>
      <div class="ds-permission__footer">
        <button dsButton variant="ghost" size="sm" aria-keyshortcuts="Escape" (click)="deny.emit()">{{ t().deny }}<kbd dsKbd dsTrailingIcon size="sm">Esc</kbd></button>
        <button dsButton [variant]="destructive() ? 'destructive' : 'default'" size="sm" aria-keyshortcuts="Enter" (click)="allow.emit(current())">
          {{ t().allow[current()] }}<kbd dsKbd dsTrailingIcon size="sm" [variant]="destructive() ? 'default' : 'inverted'" label="Enter">${riCornerDownLeftLine}</kbd>
        </button>
      </div>
    }
  `,
})
export class DsPermissionRequest {
  /** Who asks: "Support agent". */
  readonly agent = input.required<string>();
  /** The right, short: "read #billing". */
  readonly action = input.required<string>();
  /** The tool and where: "Slack · Acme workspace". */
  readonly tool = input<string>();
  /** Why the agent needs it, in its words. */
  readonly reason = input<string>();
  /** A destructive right: a red badge, Allow in red, and "Just once" the only choice. */
  readonly destructive = input(false, { transform: booleanAttribute });
  /** The choices for how long (default once, hour, always). */
  readonly durations = input<PermissionDuration[]>(['once', 'hour', 'always']);
  /** How long, two-way with `[(duration)]`; defaults to `hour` (or `once` when destructive). */
  readonly duration = model<PermissionDuration | undefined>(undefined);
  /** Defaults to `pending`. */
  readonly state = input<PermissionRequestState>('pending');
  /** Once answered, the line's title; built from the state and `action` if left out. */
  readonly outcomeTitle = input<string>();
  /** Once answered, the second line: "Support agent · 52 min left". */
  readonly outcome = input<string>();
  /** Revoke on an allowed line (it emits `revoke`), Change on a denied one (`change`), Ask again on an expired one (`askAgain`). */
  readonly revocable = input(false, { transform: booleanAttribute });
  readonly changeable = input(false, { transform: booleanAttribute });
  readonly reaskable = input(false, { transform: booleanAttribute });
  /** Texts, for other languages. */
  readonly labels = input<Partial<Labels>>({});
  /** Allow with the chosen duration (Enter in the card). */
  readonly allow = output<PermissionDuration>();
  /** Deny (Esc in the card). */
  readonly deny = output<void>();
  readonly revoke = output<void>();
  readonly change = output<void>();
  readonly askAgain = output<void>();

  protected readonly id = uniqueId('ds-permission');
  protected readonly icon = contentChild(DsPermissionIcon);
  protected readonly t = computed(() => {
    const labels = this.labels();
    return {
      wantsTo: 'wants to',
      destructive: 'Destructive',
      forHowLong: 'For how long',
      onceOnly: 'A destructive action is allowed once at most.',
      deny: 'Deny',
      allowed: 'Allowed',
      denied: 'Denied',
      expired: 'Expired',
      revoke: 'Revoke',
      change: 'Change',
      askAgain: 'Ask again',
      ...labels,
      durations: { once: 'Just once', hour: '1 hour', always: 'Always', ...labels.durations } as Record<PermissionDuration, string>,
      allow: { once: 'Allow once', hour: 'Allow for 1 hour', always: 'Allow always', ...labels.allow } as Record<PermissionDuration, string>,
    };
  });
  protected readonly current = computed<PermissionDuration>(() => {
    if (this.destructive()) return 'once';
    return this.duration() ?? (this.durations().includes('hour') ? 'hour' : this.durations()[0]);
  });
  protected readonly verb = computed(() => {
    const state = this.state();
    if (state === 'allowed') return `${this.t().allowed}${this.current() === 'once' ? ' once' : this.current() === 'hour' ? ' for 1 hour' : ' always'}`;
    return state === 'denied' ? this.t().denied : this.t().expired;
  });
  protected readonly classes = computed(() =>
    this.state() !== 'pending' ? 'ds-permission ds-permission--answered' : ['ds-permission', this.destructive() && 'ds-permission--destructive'].filter(Boolean).join(' '),
  );

  // A single Toggle Group lets the pressed item go; the duration always has a value.
  protected choose(value: string | string[]) {
    if (typeof value === 'string' && value) this.duration.set(value as PermissionDuration);
  }

  // Esc denies and Enter allows while focus is in the card, except where those keys already mean something.
  protected key(event: KeyboardEvent) {
    if (this.state() !== 'pending' || event.defaultPrevented) return;
    const target = event.target as HTMLElement;
    if (event.key === 'Escape') {
      event.preventDefault();
      this.deny.emit();
    } else if (event.key === 'Enter' && !target.closest('button, a, input, textarea, select, [contenteditable="true"]')) {
      event.preventDefault();
      this.allow.emit(this.current());
    }
  }
}
