import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, Directive, ElementRef, booleanAttribute, computed, contentChild, effect, input, linkedSignal, model, output, signal, viewChild } from '@angular/core';
import { DsBadge, type BadgeColor } from '../badge/badge';
import { DsButton } from '../button/button';
import { DsKbd } from '../kbd/kbd';
import { DsTrailingIcon } from '../slots/slots';
import { uniqueId } from '../internal/ids';
import { riArrowDownSLineHidden, riArrowRightSLineHidden, riCheckLine, riCloseLine, riCornerDownLeftLine, riLockLineHidden } from '../internal/remix';

// Styles live in @helloantek/ds-css (classes ds-gates*, ds-gate*); these components render ds-react's ApprovalGates
// markup and behaviour.

/** Where the run stands, in the summary's badge. */
export type ApprovalGatesStatus = 'waiting' | 'stopped' | 'running';
/** How a gate was decided. `stopped` is a rejection that stopped the run. */
export type ApprovalGateOutcome = 'approved' | 'rejected' | 'stopped';

const statusBadge: Record<ApprovalGatesStatus, [BadgeColor, string]> = { waiting: ['amber', 'Waiting on you'], stopped: ['red', 'Stopped'], running: ['blue', 'Running'] };

/**
 * Figma pattern "Approval Gates" on a native `<section>`: the approvals of one agent run – a summary, the gate to
 * decide now on top, and what is decided.
 *
 *     <section dsApprovalGates run="Launch the new pricing page" [waiting]="3" [decided]="2" [total]="5" progress="Paused at step 4">
 *       <div dsApprovalGate …></div>
 *       <div dsApprovalGatesDecided><li dsApprovalGatesDecidedItem …></li></div>
 *     </section>
 */
@Component({
  selector: 'section[dsApprovalGates]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DsBadge],
  host: {
    class: 'ds-gates',
    '[attr.aria-labelledby]': 'id + "-title " + id + "-run"',
    '[attr.run]': 'null',
    '[attr.status]': 'null',
    '[attr.waiting]': 'null',
    '[attr.decided]': 'null',
    '[attr.total]': 'null',
    '[attr.progress]': 'null',
  },
  template: `
    <div class="ds-gates__summary">
      <div class="ds-gates__head">
        ${riLockLineHidden}
        <h3 class="ds-gates__title" [id]="id + '-title'">{{ labels().title ?? 'Approvals' }}</h3>
        <span class="ds-gates__run" [id]="id + '-run'">{{ run() }}</span>
        <span dsBadge variant="tint" [color]="badge()[0]">{{ labels().status?.[status()] ?? badge()[1] }}</span>
      </div>
      <dl class="ds-gates__stats">
        <div>
          <dt>{{ labels().waiting ?? 'Waiting on you' }}</dt>
          <dd [class]="waiting() > 0 ? 'ds-gates__waiting' : 'ds-gates__waiting ds-gates__waiting--none'">{{ waiting() }}</dd>
        </div>
        <div>
          <dt>{{ labels().decided ?? 'Decided' }}</dt>
          <dd>{{ decided() }} / {{ total() }}</dd>
        </div>
        <div>
          <dt>{{ labels().run ?? 'Run' }}</dt>
          <dd [attr.class]="status() === 'stopped' ? 'ds-gates__stopped-at' : null">{{ progress() }}</dd>
        </div>
      </dl>
    </div>
    <ng-content />
  `,
})
export class DsApprovalGates {
  /** What the run is for: "Launch the new pricing page". */
  readonly run = input.required<string>();
  /** Defaults to `waiting`. */
  readonly status = input<ApprovalGatesStatus>('waiting');
  /** How many gates wait on you. */
  readonly waiting = input.required<number>();
  /** How many are decided, of how many. */
  readonly decided = input.required<number>();
  readonly total = input.required<number>();
  /** Where the run is: "Paused at step 4". Shown in red when the run stopped. */
  readonly progress = input.required<string>();
  /** Texts, for other languages. */
  readonly labels = input<Partial<{ title: string; waiting: string; decided: string; run: string; status: Partial<Record<ApprovalGatesStatus, string>> }>>({});

  protected readonly id = uniqueId('ds-gates');
  protected readonly badge = computed(() => statusBadge[this.status()]);
}

/** "Edited: --tag latest → next": the first words that differ between the old and the new arguments. */
function describeEdit(before: string, after: string) {
  const a = before.split(/\s+/);
  const b = after.split(/\s+/);
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i++;
  if (i === a.length && i === b.length) return null;
  let j = 0;
  while (j < a.length - i && j < b.length - i && a[a.length - 1 - j] === b[b.length - 1 - j]) j++;
  const from = a.slice(i, a.length - j).join(' ');
  const to = b.slice(i, b.length - j).join(' ');
  const context = i > 0 && a[i - 1].startsWith('-') ? `${a[i - 1]} ` : '';
  return `${context}${from || '…'} → ${to || '…'}`;
}

/** The agent's 16 px icon in a gate: `<svg dsApprovalGateIcon …>`. */
@Directive({ selector: '[dsApprovalGateIcon]' })
export class DsApprovalGateIcon {}

/** A gate's risk badge, after the agent: `<span dsBadge dsApprovalGateRisk variant="tint" color="amber">Medium risk</span>`. */
@Directive({ selector: '[dsApprovalGateRisk]' })
export class DsApprovalGateRisk {}

type GateLabels = { why: string; change: string; reject: string; approve: string; cancel: string; approveWithChanges: string; edited: string; args: string };

/**
 * The gate to decide now, on a native `<div>` (the stack): who asks, what and why, the arguments; R rejects,
 * A approves, Change it edits first.
 *
 *     <div dsApprovalGate agent="Release agent" meta="Step 4 of 7" title="Publish 2.4.0 to npm" why="…" [args]="args"
 *          [behind]="2" changeable (approve)="…" (reject)="…" (approveWithChanges)="publish($event)">
 *       <svg dsApprovalGateIcon …></svg><span dsBadge dsApprovalGateRisk variant="tint" color="amber">Medium risk</span>
 *     </div>
 */
@Component({
  selector: 'div[dsApprovalGate]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DsButton, DsKbd, DsTrailingIcon],
  host: {
    class: 'ds-gates__stack',
    '[attr.agent]': 'null',
    '[attr.meta]': 'null',
    '[attr.title]': 'null',
    '[attr.why]': 'null',
    '[attr.args]': 'null',
    '[attr.behind]': 'null',
    '[attr.changeable]': 'null',
    '[attr.editing]': 'null',
    '[attr.draft]': 'null',
  },
  template: `
    <article [attr.aria-labelledby]="id + '-title'" tabindex="-1" [class]="editing() ? 'ds-gate ds-gate--editing' : 'ds-gate'" (keydown)="key($event)">
      <div class="ds-gate__who">
        @if (icon()) {
          <span class="ds-gate__mark" aria-hidden="true"><ng-content select="[dsApprovalGateIcon]" /></span>
        }
        <div>
          <p class="ds-gate__agent">{{ agent() }}</p>
          @if (meta() !== undefined) {
            <p class="ds-gate__meta">{{ meta() }}</p>
          }
        </div>
        <ng-content select="[dsApprovalGateRisk]" />
      </div>
      <div class="ds-gate__what">
        <div class="ds-gate__lead">
          <h4 class="ds-gate__title" [id]="id + '-title'">{{ title() }}</h4>
          @if (why() !== undefined) {
            <p class="ds-gate__why"><strong>{{ t().why }}</strong>{{ why() }}</p>
          }
        </div>
        @if (args() !== undefined) {
          @if (editing()) {
            <textarea #field class="ds-gate__args ds-gate__args--edit" [attr.aria-label]="t().args" [defaultValue]="text()" [value]="text()" [rows]="text().split('\\n').length" spellcheck="false"
              (input)="text.set($any($event.target).value)" (keydown.enter)="enter($event)"></textarea>
          } @else {
            <pre class="ds-gate__args" [attr.aria-label]="t().args">{{ args() }}</pre>
          }
        }
      </div>
      <div class="ds-gate__actions">
        @if (editing()) {
          <span class="ds-gate__edited" aria-live="polite">{{ edit() ? t().edited + ': ' + edit() : '' }}</span>
          <button dsButton variant="ghost" size="sm" aria-keyshortcuts="Escape" (click)="cancel()">{{ t().cancel }}<kbd dsKbd dsTrailingIcon size="sm">Esc</kbd></button>
          <button dsButton size="sm" aria-keyshortcuts="Enter" (click)="approveChanged()">{{ t().approveWithChanges }}<kbd dsKbd dsTrailingIcon size="sm" variant="inverted" label="Enter">${riCornerDownLeftLine}</kbd></button>
        } @else {
          @if (changeable() && args() !== undefined) {
            <button dsButton variant="ghost" size="sm" (click)="startEditing()">{{ t().change }}</button>
          }
          <button dsButton variant="outline" size="sm" aria-keyshortcuts="R" (click)="reject.emit()">{{ t().reject }}<kbd dsKbd dsTrailingIcon size="sm">R</kbd></button>
          <button dsButton size="sm" aria-keyshortcuts="A" (click)="approve.emit()">{{ t().approve }}<kbd dsKbd dsTrailingIcon size="sm" variant="inverted">A</kbd></button>
        }
      </div>
    </article>
    @for (strip of strips(); track $index) {
      <span class="ds-gates__behind" aria-hidden="true"></span>
    }
  `,
})
export class DsApprovalGate {
  /** Who asks: "Release agent". */
  readonly agent = input.required<string>();
  /** Where it is and why it asks: "Step 4 of 7 · asks because it cannot be undone". */
  readonly meta = input<string>();
  /** What it will do: "Publish 2.4.0 to npm". */
  readonly title = input.required<string>();
  /** Why, after a "Why" lead-in. */
  readonly why = input<string>();
  /** The arguments it will run with (Mono); Change it edits them. */
  readonly args = input<string>();
  /** How many gates wait behind this one (up to 2 peek out). */
  readonly behind = input(0);
  /** Shows Change it, which makes the arguments a field (it ends in `approveWithChanges`). */
  readonly changeable = input(false, { transform: booleanAttribute });
  /** Whether the arguments are open for editing; two-way with `[(editing)]`. */
  readonly editing = model(false);
  /** The text the field starts with (e.g. a saved draft); defaults to `args`. */
  readonly draft = input<string>();
  /** Texts, for other languages. */
  readonly labels = input<Partial<GateLabels>>({});
  readonly approve = output<void>();
  readonly reject = output<void>();
  /** Approve with the edited arguments. */
  readonly approveWithChanges = output<string>();

  protected readonly id = uniqueId('ds-gate');
  protected readonly icon = contentChild(DsApprovalGateIcon);
  private readonly field = viewChild<ElementRef<HTMLTextAreaElement>>('field');
  protected readonly text = linkedSignal(() => this.draft() ?? this.args() ?? '');
  // Focus the field when Change it opens it, not when the gate starts open for editing.
  private readonly focusField = signal(false);
  protected readonly t = computed<GateLabels>(() => ({ why: 'Why', change: 'Change it', reject: 'Reject', approve: 'Approve', cancel: 'Cancel', approveWithChanges: 'Approve with changes', edited: 'Edited', args: 'Arguments', ...this.labels() }));
  protected readonly edit = computed(() => (this.editing() && this.args() !== undefined ? describeEdit(this.args()!, this.text()) : null));
  protected readonly strips = computed(() => Array.from({ length: Math.min(2, Math.max(0, this.behind())) }));

  constructor() {
    effect(() => {
      const field = this.field();
      if (field && this.focusField()) field.nativeElement.focus();
    });
  }

  protected startEditing() {
    this.focusField.set(true);
    this.editing.set(true);
  }

  protected cancel() {
    this.text.set(this.args() ?? '');
    this.editing.set(false);
  }

  protected approveChanged() {
    this.approveWithChanges.emit(this.text());
    this.editing.set(false);
  }

  protected enter(event: Event) {
    if ((event as KeyboardEvent).shiftKey) return;
    event.preventDefault();
    this.approveChanged();
  }

  // R rejects and A approves while focus is in the gate (not while typing); Esc cancels an edit.
  protected key(event: KeyboardEvent) {
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return;
    if (this.editing()) {
      if (event.key === 'Escape') {
        event.preventDefault();
        this.cancel();
      }
      return;
    }
    if ((event.target as HTMLElement).closest('input, textarea, [contenteditable="true"]')) return;
    const key = event.key.toLowerCase();
    if (key === 'r') {
      event.preventDefault();
      this.reject.emit();
    } else if (key === 'a') {
      event.preventDefault();
      this.approve.emit();
    }
  }
}

/** A rejected gate stopped the run, on a native `<div>`: `<div dsApprovalGatesStopped description="…"></div>`. */
@Component({
  selector: 'div[dsApprovalGatesStopped]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { role: 'status', class: 'ds-gates__stopped', '[attr.title]': 'null', '[attr.description]': 'null' },
  template: `
    <span class="ds-gates__status ds-gates__status--stopped" aria-hidden="true">${riCloseLine}</span>
    <p>{{ title() }}</p>
    @if (description() !== undefined) {
      <p>{{ description() }}</p>
    }
  `,
})
export class DsApprovalGatesStopped {
  readonly title = input('The run stopped');
  /** What stopped it: "“Start a browser agent” was rejected – nothing after it runs". */
  readonly description = input<string>();
}

/** Every gate decided, on a native `<div>`: `<div dsApprovalGatesDone title="All 5 gates decided" description="…"></div>`. */
@Component({
  selector: 'div[dsApprovalGatesDone]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { role: 'status', class: 'ds-gates__done', '[attr.title]': 'null', '[attr.description]': 'null' },
  template: `
    <span class="ds-gates__status ds-gates__status--approved" aria-hidden="true">${riCheckLine}</span>
    <div>
      <p>{{ title() }}</p>
      @if (description() !== undefined) {
        <p>{{ description() }}</p>
      }
    </div>
  `,
})
export class DsApprovalGatesDone {
  readonly title = input.required<string>();
  readonly description = input<string>();
}

/** The gates already decided, on a native `<div>`, with `<li dsApprovalGatesDecidedItem>` items, newest first. */
@Component({
  selector: 'div[dsApprovalGatesDecided]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'ds-gates__decided', '[attr.heading]': 'null' },
  template: `
    <h4 class="ds-gates__heading" [id]="id">{{ heading() }}</h4>
    <ul [attr.aria-labelledby]="id"><ng-content /></ul>
  `,
})
export class DsApprovalGatesDecided {
  readonly heading = input('Decided');
  protected readonly id = uniqueId('ds-gates-decided');
}

const outcomeText: Record<ApprovalGateOutcome, string> = { approved: 'Approved', rejected: 'Rejected', stopped: 'Stopped the run' };

/**
 * One decided gate, on a native `<li>`: its outcome, who asked and when; it opens to the reason.
 *
 *     <li dsApprovalGatesDecidedItem title="Tag v2.4.0" outcome="approved" agent="Release agent" time="12:01" reason="…"></li>
 */
@Component({
  selector: 'li[dsApprovalGatesDecidedItem]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'isOpen() ? "ds-gates__item ds-gates__item--open" : "ds-gates__item"',
    '[attr.title]': 'null',
    '[attr.outcome]': 'null',
    '[attr.outcomeLabel]': 'null',
    '[attr.agent]': 'null',
    '[attr.time]': 'null',
    '[attr.reason]': 'null',
    '[attr.open]': 'null',
  },
  template: `
    <ng-template #row>
      <span [class]="'ds-gates__status ds-gates__status--' + outcome()" aria-hidden="true">
        @if (outcome() === 'approved') {
          ${riCheckLine}
        } @else {
          ${riCloseLine}
        }
      </span>
      <span class="ds-gates__name">{{ title() }}</span>
      @if (agent() !== undefined) {
        <span class="ds-gates__by">{{ agent() }}</span>
      }
      <span [class]="outcome() !== 'approved' ? 'ds-gates__outcome ds-gates__outcome--bad' : 'ds-gates__outcome'">{{ outcomeLabel() ?? outcomeName() }}</span>
      @if (time() !== undefined) {
        <span class="ds-gates__time">{{ time() }}</span>
      }
      @if (reason() !== undefined) {
        @if (isOpen()) {
          ${riArrowDownSLineHidden}
        } @else {
          ${riArrowRightSLineHidden}
        }
      }
    </ng-template>
    @if (reason() !== undefined) {
      <button type="button" class="ds-gates__row" [attr.aria-expanded]="isOpen()" [attr.aria-controls]="id + '-reason'" (click)="open.set(!isOpen())">
        <ng-container [ngTemplateOutlet]="row" />
      </button>
      <p class="ds-gates__reason" [id]="id + '-reason'" [hidden]="!isOpen()">{{ reason() }}</p>
    } @else {
      <div class="ds-gates__row"><ng-container [ngTemplateOutlet]="row" /></div>
    }
  `,
  imports: [NgTemplateOutlet],
})
export class DsApprovalGatesDecidedItem {
  /** What the gate was: "Tag v2.4.0". */
  readonly title = input.required<string>();
  readonly outcome = input.required<ApprovalGateOutcome>();
  /** The outcome's words, e.g. "Approved with changes". */
  readonly outcomeLabel = input<string>();
  /** Who asked. */
  readonly agent = input<string>();
  /** When: "12:01", "just now". */
  readonly time = input<string>();
  /** Why it was decided so; the row opens to show it. */
  readonly reason = input<string>();
  /** Open state; two-way with `[(open)]`. */
  readonly open = model<boolean | undefined>(undefined);

  protected readonly id = uniqueId('ds-gates-item');
  protected readonly isOpen = computed(() => this.open() ?? false);
  protected readonly outcomeName = computed(() => outcomeText[this.outcome()]);
}
