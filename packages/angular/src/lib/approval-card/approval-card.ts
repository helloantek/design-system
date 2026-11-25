import { ChangeDetectionStrategy, Component, Directive, computed, contentChild, input, model, output } from '@angular/core';
import { DsAvatar, DsAvatarGroup } from '../avatar/avatar';
import { DsBadge, type BadgeColor } from '../badge/badge';
import { DsButton } from '../button/button';
import { DsCheckbox } from '../checkbox/checkbox';
import { DsKbd } from '../kbd/kbd';
import { DsLeadingIcon, DsTrailingIcon } from '../slots/slots';
import { DsSpinner } from '../spinner/spinner';
import { uniqueId } from '../internal/ids';
import { riArrowGoBackLineLead, riCheckLine, riCloseLine, riCornerDownLeftLine, riTimeLine, riTimeLineHidden } from '../internal/remix';

// Styles live in @helloantek/ds-css (classes ds-approval-card*); these components render ds-react's ApprovalCard
// markup and behaviour.

/** How risky the action is: the badge in the header. */
export type ApprovalCardRisk = 'low' | 'medium' | 'high';
/** Where the request stands; `approving` keeps the card busy while the action runs, the rest fold it to one line. */
export type ApprovalCardState = 'pending' | 'approving' | 'approved' | 'denied' | 'expired';

const riskColor: Record<ApprovalCardRisk, BadgeColor> = { low: 'green', medium: 'amber', high: 'red' };
const riskText: Record<ApprovalCardRisk, string> = { low: 'Low risk', medium: 'Medium risk', high: 'High risk' };

/** The facts of the action as name–value rows: `<dl dsApprovalCardDetails [items]="[['Subject', '…']]"></dl>`. */
@Component({
  selector: 'dl[dsApprovalCardDetails]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'ds-approval-card__details', '[attr.items]': 'null' },
  template: `
    @for (row of items(); track $index) {
      <div>
        <dt>{{ row[0] }}</dt>
        <dd>{{ row[1] }}</dd>
      </div>
    }
  `,
})
export class DsApprovalCardDetails {
  readonly items = input.required<[string, string][]>();
}

/** A sentence about the action: `<p dsApprovalCardSummary>…</p>`. */
@Directive({ selector: 'p[dsApprovalCardSummary]', host: { class: 'ds-approval-card__summary' } })
export class DsApprovalCardSummary {}

/** What will change, in a monospace box (a command, files, a diff): `<pre dsApprovalCardPreview>…</pre>`. */
@Directive({ selector: 'pre[dsApprovalCardPreview]', host: { class: 'ds-approval-card__preview' } })
export class DsApprovalCardPreview {}

/** The 16 px icon for the kind of action, shown in a tile: `<svg dsApprovalCardIcon …>`. */
@Directive({ selector: '[dsApprovalCardIcon]' })
export class DsApprovalCardIconMarker {}

/** Any other content of the card's body: mark it `dsApprovalCardContent`. */
@Directive({ selector: '[dsApprovalCardContent]' })
export class DsApprovalCardContent {}

/**
 * Who the action reaches: overlapping avatars (up to four), the first names and "+N more".
 *
 *     <div dsApprovalCardRecipients [people]="[{ name: 'Ana' }, { name: 'Jonas' }]" [total]="412"></div>
 */
@Component({
  selector: 'div[dsApprovalCardRecipients]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DsAvatar, DsAvatarGroup],
  host: { class: 'ds-approval-card__recipients', '[attr.people]': 'null', '[attr.total]': 'null', '[attr.moreLabel]': 'null' },
  template: `
    <span dsAvatarGroup size="xs" aria-hidden="true">
      @for (p of people().slice(0, 4); track p.name) {
        <span dsAvatar [name]="p.name" [src]="p.src" [initials]="p.name.charAt(0)"></span>
      }
    </span>
    <span>{{ names() }}</span>
    @if (more() > 0) {
      <span class="ds-approval-card__more">{{ moreLabel()(more()) }}</span>
    }
  `,
})
export class DsApprovalCardRecipients {
  /** The first people, by name; `src` for a picture, otherwise the first letter. */
  readonly people = input.required<{ name: string; src?: string }[]>();
  /** Everyone the action reaches; the rest show as "+N more". */
  readonly total = input<number>();
  /** The "+N more" text, for other languages. */
  readonly moreLabel = input<(count: number) => string>((n) => `+${n} more`);

  protected readonly names = computed(() => this.people().map((p) => p.name).join(', '));
  protected readonly more = computed(() => (this.total() ?? this.people().length) - this.people().length);
}

/**
 * Figma pattern "Approval Card" on a native `<article>`: an agent asks before it acts. Deny (Esc) or Approve (Enter),
 * then one line with the outcome.
 *
 *     <article dsApprovalCard title="Send the October newsletter" description="Newsletter · Marketing agent" risk="medium"
 *              [(alwaysAllow)]="allow" (approve)="send()" (deny)="cancel()">
 *       <svg dsApprovalCardIcon …></svg>
 *       <div dsApprovalCardRecipients …></div><dl dsApprovalCardDetails …></dl>
 *     </article>
 *
 * The body holds the parts (`dsApprovalCardDetails`, `dsApprovalCardSummary`, `dsApprovalCardPreview`,
 * `dsApprovalCardRecipients`) or content marked `dsApprovalCardContent`. Esc denies and Enter approves while focus is
 * in the card. `alwaysAllow` shows "Always allow this action" once bound; `countdown` replaces it.
 */
@Component({
  selector: 'article[dsApprovalCard]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DsBadge, DsButton, DsCheckbox, DsKbd, DsSpinner, DsLeadingIcon, DsTrailingIcon],
  host: {
    '[class]': 'decided() ? "ds-approval-card ds-approval-card--decided" : "ds-approval-card"',
    '[attr.aria-labelledby]': 'titleId',
    '[attr.aria-busy]': 'busy() || null',
    '[attr.tabindex]': 'decided() ? null : -1',
    '[attr.title]': 'null',
    '[attr.description]': 'null',
    '[attr.risk]': 'null',
    '[attr.riskLabel]': 'null',
    '[attr.state]': 'null',
    '[attr.countdown]': 'null',
    '[attr.outcome]': 'null',
    '[attr.undoable]': 'null',
    '(keydown)': 'key($event)',
  },
  template: `
    @if (decided()) {
      <div class="ds-approval-card__decided" role="status">
        <span [class]="'ds-approval-card__status ds-approval-card__status--' + state()" aria-hidden="true">
          @switch (state()) {
            @case ('approved') {
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
        <div class="ds-approval-card__heading">
          <p class="ds-approval-card__title" [id]="titleId">{{ verdict() }} · {{ title() }}</p>
          @if (outcome() !== undefined) {
            <p class="ds-approval-card__description">{{ outcome() }}</p>
          }
        </div>
        @if (undoable()) {
          <button dsButton variant="ghost" size="xs" (click)="undo.emit()">${riArrowGoBackLineLead}{{ labels().undo ?? 'Undo' }}</button>
        }
      </div>
    } @else {
      <div class="ds-approval-card__header">
        @if (icon()) {
          <span class="ds-approval-card__icon" aria-hidden="true"><ng-content select="[dsApprovalCardIcon]" /></span>
        }
        <div class="ds-approval-card__heading">
          <h3 class="ds-approval-card__title" [id]="titleId">{{ title() }}</h3>
          @if (description() !== undefined) {
            <p class="ds-approval-card__description">{{ description() }}</p>
          }
        </div>
        @if (risk(); as r) {
          <span dsBadge variant="tint" [color]="color(r)">{{ riskLabel() ?? riskName(r) }}</span>
        }
      </div>
      @if (hasBody()) {
        <div class="ds-approval-card__body"><ng-content /></div>
      }
      <div class="ds-approval-card__footer">
        @if (countdown() !== undefined) {
          <span class="ds-approval-card__countdown" role="timer">${riTimeLineHidden}{{ countdown() }}</span>
        } @else if (alwaysAllow() !== undefined) {
          <ds-checkbox fieldClass="ds-approval-card__always" [label]="labels().alwaysAllow ?? 'Always allow this action'" [checked]="!!alwaysAllow()" (checkedChange)="alwaysAllow.set($event)" />
        }
        <div class="ds-approval-card__actions">
          <button dsButton variant="ghost" size="sm" aria-keyshortcuts="Escape" (click)="busy() || deny.emit()">
            {{ labels().deny ?? 'Deny' }}<kbd dsKbd dsTrailingIcon size="sm">Esc</kbd>
          </button>
          <button dsButton size="sm" aria-keyshortcuts="Enter" (click)="busy() || approve.emit()">
            {{ busy() ? (labels().approving ?? 'Approving') : (labels().approve ?? 'Approve') }}
            @if (busy()) {
              <span dsSpinner dsTrailingIcon size="sm" decorative></span>
            } @else {
              <kbd dsKbd dsTrailingIcon size="sm" variant="inverted" label="Enter">${riCornerDownLeftLine}</kbd>
            }
          </button>
        </div>
      </div>
    }
  `,
})
export class DsApprovalCard {
  /** What the agent will do, e.g. "Send the October newsletter". */
  readonly title = input.required<string>();
  /** Where and who: "Newsletter · Marketing agent". */
  readonly description = input<string>();
  /** The risk badge; leave it out for none. */
  readonly risk = input<ApprovalCardRisk>();
  /** The badge text; defaults to "Low risk", "Medium risk" or "High risk". */
  readonly riskLabel = input<string>();
  /** Defaults to `pending`. */
  readonly state = input<ApprovalCardState>('pending');
  /** "Always allow this action": shown once bound, two-way with `[(alwaysAllow)]`. */
  readonly alwaysAllow = model<boolean | undefined>(undefined);
  /** Replaces "Always allow this action" with a countdown, e.g. "Denies itself in 0:45". The app counts. */
  readonly countdown = input<string>();
  /** Once decided, the second line: "By you at 9:02 · sending to 412 people". */
  readonly outcome = input<string>();
  /** Shows Undo on the decided line (it emits `undo`). */
  readonly undoable = input(false);
  /** Labels, for other languages. */
  readonly labels = input<Partial<{ approve: string; approving: string; deny: string; alwaysAllow: string; undo: string; approved: string; denied: string; expired: string }>>({});
  readonly approve = output<void>();
  readonly deny = output<void>();
  readonly undo = output<void>();

  protected readonly titleId = uniqueId('ds-approval-card-title');
  protected readonly icon = contentChild(DsApprovalCardIconMarker);
  private readonly details = contentChild(DsApprovalCardDetails);
  private readonly summary = contentChild(DsApprovalCardSummary);
  private readonly preview = contentChild(DsApprovalCardPreview);
  private readonly recipients = contentChild(DsApprovalCardRecipients);
  private readonly content = contentChild(DsApprovalCardContent);
  protected readonly hasBody = computed(() => !!(this.details() || this.summary() || this.preview() || this.recipients() || this.content()));
  protected readonly busy = computed(() => this.state() === 'approving');
  protected readonly decided = computed(() => ['approved', 'denied', 'expired'].includes(this.state()));
  protected readonly verdict = computed(() => {
    const state = this.state() as 'approved' | 'denied' | 'expired';
    return this.labels()[state] ?? { approved: 'Approved', denied: 'Denied', expired: 'Denied itself' }[state];
  });

  protected color(risk: ApprovalCardRisk) {
    return riskColor[risk];
  }
  protected riskName(risk: ApprovalCardRisk) {
    return riskText[risk];
  }

  // Esc denies and Enter approves while focus is in the card, except where those keys already mean something.
  protected key(event: KeyboardEvent) {
    if (this.decided() || event.defaultPrevented || this.busy()) return;
    const target = event.target as HTMLElement;
    if (event.key === 'Escape') {
      event.preventDefault();
      this.deny.emit();
    } else if (event.key === 'Enter' && !target.closest('button, a, input:not([type="checkbox"]), textarea, select, [contenteditable="true"]')) {
      event.preventDefault();
      this.approve.emit();
    }
  }
}

