import { ChangeDetectionStrategy, Component, Directive, ElementRef, Injector, afterNextRender, booleanAttribute, computed, inject, input, model, output, viewChild } from '@angular/core';
import { DsButton } from '../button/button';
import { DsKbd } from '../kbd/kbd';
import { DsLeadingIcon, DsTrailingIcon } from '../slots/slots';
import { uniqueId } from '../internal/ids';
import { riArrowGoBackLineLead, riCheckLine, riCheckLineHidden, riFileTextLineHidden, riMailLineHidden } from '../internal/remix';

// Styles live in @helloantek/ds-css (classes ds-review*); these components render ds-react's ReviewCenter markup and
// behaviour.

/** A filter over the queue: "High risk 1". */
export interface ReviewCenterFilter {
  label: string;
  count?: number;
}

/** A field that matters: "Amount $12,480.00". `changed` marks an unusual value, with a `note`. */
export interface ReviewCenterField {
  label: string;
  value: string;
  changed?: boolean;
  note?: string;
}

/** An attachment: a file (default icon) or a mail, as a link when it has an `href`. */
export interface ReviewCenterAttachment {
  label: string;
  icon?: 'file' | 'mail';
  href?: string;
}

/** One of the item's actions. */
export type ReviewCenterAction = 'skip' | 'reject' | 'edit' | 'approve';

// A key named by a button (aria-keyshortcuts: A, R, E, S, Z, 1–4, Escape) presses it from anywhere inside `root`,
// except while typing.
function pressShortcut(root: HTMLElement, event: KeyboardEvent) {
  if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return;
  if ((event.target as HTMLElement).closest('input, textarea, select, [contenteditable="true"]')) return;
  const key = event.key.length === 1 ? event.key.toUpperCase() : event.key;
  if (key === 'Enter' || key === ' ' || key === 'Tab') return;
  const button = [...root.querySelectorAll<HTMLButtonElement>('button[aria-keyshortcuts]')].find(
    (b) => !b.disabled && b.getAttribute('aria-keyshortcuts')!.split(' ').some((k) => k.toUpperCase() === key.toUpperCase()),
  );
  if (!button) return;
  event.preventDefault();
  button.click();
}

/** The agent's mark in a queue row or on the item: `<svg dsReviewCenterMark …>`. */
@Directive({ selector: '[dsReviewCenterMark]' })
export class DsReviewCenterMark {}

/** The item's risk badge, after the agent: `<span dsBadge dsReviewCenterRisk variant="tint" color="red">High risk</span>`. */
@Directive({ selector: '[dsReviewCenterRisk]' })
export class DsReviewCenterRisk {}

type CenterLabels = { title: string; reviewed: (reviewed: number, total: number) => string; undo: string; filters: string; queue: string };

/**
 * Figma pattern "Review Center" on a native `<section>`: progress and the last decision with Undo on top, the queue on
 * the left, the item to decide on the right.
 *
 *     <section dsReviewCenter [reviewed]="26" [total]="33" meta="oldest 14m" lastDecision="Approved · …" undoable (undo)="…"
 *              [filters]="filters" [(filter)]="filter">
 *       <li dsReviewCenterQueueItem … [selected]="true"></li>…
 *       <article dsReviewCenterItem …></article>
 *     </section>
 *
 * A key named by a button (A, R, E, S, Z, 1–4, Esc) presses it from anywhere in the center, except while typing.
 */
@Component({
  selector: 'section[dsReviewCenter]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DsButton, DsKbd, DsLeadingIcon, DsTrailingIcon],
  host: {
    class: 'ds-review',
    tabindex: '-1',
    '[attr.aria-label]': 'ariaLabel() ?? null',
    // A name given with aria-label (several centers on one page) replaces the title as the section's name.
    '[attr.aria-labelledby]': 'ariaLabel() ? null : id + "-title"',
    '[attr.reviewed]': 'null',
    '[attr.total]': 'null',
    '[attr.meta]': 'null',
    '[attr.lastDecision]': 'null',
    '[attr.undoable]': 'null',
    '[attr.filters]': 'null',
    '[attr.filter]': 'null',
    '(keydown)': 'key($event)',
  },
  template: `
    <div class="ds-review__bar">
      ${riCheckLineHidden}
      <h2 class="ds-review__title" [id]="id + '-title'">{{ t().title }}</h2>
      <div class="ds-review__progress" role="progressbar" [attr.aria-labelledby]="id + '-count'" aria-valuemin="0" [attr.aria-valuemax]="total()" [attr.aria-valuenow]="reviewed()">
        <span [style.width]="share() * 100 + '%'"></span>
      </div>
      <span class="ds-review__count" [id]="id + '-count'">{{ t().reviewed(reviewed(), total()) }}{{ meta() !== undefined ? ' · ' + meta() : '' }}</span>
      <div class="ds-review__last" role="status">
        @if (lastDecision() !== undefined) {
          ${riCheckLineHidden}<span>{{ lastDecision() }}</span>
        }
      </div>
      @if (lastDecision() !== undefined && undoable()) {
        <button dsButton variant="ghost" size="xs" aria-keyshortcuts="Z" (click)="undo.emit()">${riArrowGoBackLineLead}{{ t().undo }}<kbd dsKbd dsTrailingIcon size="sm">Z</kbd></button>
      }
    </div>
    <div class="ds-review__main">
      <div class="ds-review__queue">
        @if (filters().length > 0) {
          <div class="ds-review__filters" role="group" [attr.aria-label]="t().filters">
            @for (f of filters(); track $index; let i = $index) {
              <button type="button" class="ds-review__filter" [attr.aria-pressed]="i === filter()" (click)="filter.set(i)">
                {{ f.label }}
                @if (f.count !== undefined) {
                  <span>{{ f.count }}</span>
                }
              </button>
            }
          </div>
        }
        <ul class="ds-review__items" [attr.aria-label]="t().queue"><ng-content select="[dsReviewCenterQueueItem]" /></ul>
      </div>
      <ng-content />
    </div>
  `,
})
export class DsReviewCenter {
  /** How many are reviewed, of how many: the bar and "26 of 33 reviewed". */
  readonly reviewed = input.required<number>();
  readonly total = input.required<number>();
  /** After the count: "oldest 14m". */
  readonly meta = input<string>();
  /** The last decision: "Approved with edits · Split customers.name". */
  readonly lastDecision = input<string>();
  /** Shows Undo (Z) next to the last decision (it emits `undo`). */
  readonly undoable = input(false, { transform: booleanAttribute });
  /** The filters over the queue; `[(filter)]` is the chosen one's index. */
  readonly filters = input<ReviewCenterFilter[]>([]);
  readonly filter = model(0);
  readonly ariaLabel = input<string | undefined>(undefined, { alias: 'aria-label' });
  /** Texts, for other languages. */
  readonly labels = input<Partial<CenterLabels>>({});
  readonly undo = output<void>();

  protected readonly id = uniqueId('ds-review');
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  protected readonly t = computed<CenterLabels>(() => ({ title: 'Review center', reviewed: (r, n) => `${r} of ${n} reviewed`, undo: 'Undo', filters: 'Show', queue: 'Queue', ...this.labels() }));
  protected readonly share = computed(() => (this.total() > 0 ? Math.min(1, this.reviewed() / this.total()) : 0));

  protected key(event: KeyboardEvent) {
    pressShortcut(this.host, event);
  }
}

/**
 * One proposal in the queue, on a native `<li>`; a click emits `choose`.
 *
 *     <li dsReviewCenterQueueItem title="Pay INV-2207 from Acme Logistics" meta="Invoice · Finance agent" time="now" [selected]="true">
 *       <svg dsReviewCenterMark …></svg>
 *     </li>
 */
@Component({
  selector: 'li[dsReviewCenterQueueItem]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[attr.title]': 'null', '[attr.meta]': 'null', '[attr.time]': 'null', '[attr.selected]': 'null' },
  template: `
    <button type="button" class="ds-review__entry" [attr.aria-current]="selected() || null" (click)="choose.emit()">
      <span class="ds-review__mark" aria-hidden="true"><ng-content select="[dsReviewCenterMark]" /></span>
      <span class="ds-review__entry-text">
        <span class="ds-review__entry-title">{{ title() }}</span>
        @if (meta() !== undefined) {
          <span class="ds-review__entry-meta">{{ meta() }}</span>
        }
      </span>
      @if (time() !== undefined) {
        <span class="ds-review__time">{{ time() }}</span>
      }
    </button>
  `,
})
export class DsReviewCenterQueueItem {
  /** What it wants to do: "Pay INV-2207 from Acme Logistics". */
  readonly title = input.required<string>();
  /** Kind and agent: "Invoice · Finance agent". */
  readonly meta = input<string>();
  /** How long it waits: "14m". */
  readonly time = input<string>();
  /** The item shown on the right. */
  readonly selected = input(false, { transform: booleanAttribute });
  readonly choose = output<void>();
}

type ItemLabels = { why: string; approve: string; reject: string; edit: string; skip: string; whyReject: string; cancel: string };

/**
 * The item to decide, on a native `<article>`: who asks, what and why, the fields that matter, its attachments and the
 * actions. With `reasons`, Reject asks why first – a number per reason, Esc cancels – and `reject` carries the reason's
 * index.
 *
 *     <article dsReviewCenterItem agent="Finance agent" model="Gemini Pro" title="Pay INV-2207" why="…" [fields]="fields"
 *              [attachments]="files" [reasons]="reasons" (approve)="…" (reject)="…" (edit)="…" (skip)="…">
 *       <svg dsReviewCenterMark …></svg><span dsBadge dsReviewCenterRisk variant="tint" color="red">High risk</span>
 *     </article>
 */
@Component({
  selector: 'article[dsReviewCenterItem]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DsButton, DsKbd, DsTrailingIcon],
  host: {
    class: 'ds-review__detail',
    '[attr.aria-labelledby]': 'id',
    '[attr.agent]': 'null',
    '[attr.model]': 'null',
    '[attr.title]': 'null',
    '[attr.why]': 'null',
    '[attr.fields]': 'null',
    '[attr.attachments]': 'null',
    '[attr.reasons]': 'null',
    '[attr.actions]': 'null',
    '[attr.rejecting]': 'null',
  },
  template: `
    <div class="ds-review__body">
      <div class="ds-review__who">
        <span class="ds-review__mark" aria-hidden="true"><ng-content select="[dsReviewCenterMark]" /></span>
        <div>
          <p class="ds-review__agent">{{ agent() }}<ng-content select="[dsReviewCenterRisk]" /></p>
          @if (model() !== undefined) {
            <p class="ds-review__model">{{ model() }}</p>
          }
        </div>
      </div>
      <h3 class="ds-review__heading" [id]="id">{{ title() }}</h3>
      @if (why() !== undefined) {
        <p class="ds-review__why"><strong>{{ t().why }}</strong>{{ why() }}</p>
      }
      @if (fields().length > 0) {
        <dl class="ds-review__fields">
          @for (f of fields(); track $index) {
            <div [attr.class]="f.changed ? 'ds-review__field--changed' : null">
              <dt>{{ f.label }}</dt>
              <dd>{{ f.value }}</dd>
              @if (f.note !== undefined) {
                <dd>{{ f.note }}</dd>
              }
            </div>
          }
        </dl>
      }
      @if (attachments().length > 0) {
        <ul class="ds-review__attachments">
          @for (a of attachments(); track $index) {
            <li>
              @if (a.href) {
                <a [href]="a.href">
                  @if (a.icon === 'mail') {
                    ${riMailLineHidden}
                  } @else {
                    ${riFileTextLineHidden}
                  }
                  {{ a.label }}
                </a>
              } @else {
                @if (a.icon === 'mail') {
                  ${riMailLineHidden}
                } @else {
                  ${riFileTextLineHidden}
                }
                {{ a.label }}
              }
            </li>
          }
        </ul>
      }
    </div>
    @if (rejecting()) {
      <div #actionRow class="ds-review__actions ds-review__actions--reasons" role="group" [attr.aria-labelledby]="id + '-why'">
        <span [id]="id + '-why'">{{ t().whyReject }}</span>
        @for (reason of reasons(); track $index; let i = $index) {
          <button dsButton variant="outline" size="xs" [attr.aria-keyshortcuts]="'' + (i + 1)" (click)="reject.emit(i)">{{ reason }}<kbd dsKbd dsTrailingIcon size="sm">{{ i + 1 }}</kbd></button>
        }
        <button dsButton variant="ghost" size="xs" aria-keyshortcuts="Escape" (click)="setRejecting(false)">{{ t().cancel }}<kbd dsKbd dsTrailingIcon size="sm">Esc</kbd></button>
      </div>
    } @else {
      <div #actionRow class="ds-review__actions">
        @if (has('skip')) {
          <button dsButton variant="ghost" size="sm" aria-keyshortcuts="S" (click)="skip.emit()">{{ t().skip }}<kbd dsKbd dsTrailingIcon size="sm">S</kbd></button>
        }
        @if (has('reject')) {
          <button dsButton variant="outline" size="sm" aria-keyshortcuts="R" (click)="reasons().length > 0 ? setRejecting(true) : reject.emit(undefined)">{{ t().reject }}<kbd dsKbd dsTrailingIcon size="sm">R</kbd></button>
        }
        @if (has('edit')) {
          <button dsButton variant="outline" size="sm" aria-keyshortcuts="E" (click)="edit.emit()">{{ t().edit }}<kbd dsKbd dsTrailingIcon size="sm">E</kbd></button>
        }
        @if (has('approve')) {
          <button dsButton size="sm" aria-keyshortcuts="A" (click)="approve.emit()">{{ t().approve }}<kbd dsKbd dsTrailingIcon size="sm" variant="inverted">A</kbd></button>
        }
      </div>
    }
  `,
})
export class DsReviewCenterItem {
  /** Who asks: "Finance agent", and its model ("Gemini Pro"). */
  readonly agent = input.required<string>();
  readonly model = input<string>();
  /** What it wants to do. */
  readonly title = input.required<string>();
  /** Why, after a bold "Why". */
  readonly why = input<string>();
  readonly fields = input<ReviewCenterField[]>([]);
  readonly attachments = input<ReviewCenterAttachment[]>([]);
  /** With reasons, Reject asks why first; `reject` then carries the reason's index. */
  readonly reasons = input<string[]>([]);
  /** The actions shown (default all four). */
  readonly actions = input<ReviewCenterAction[]>(['skip', 'reject', 'edit', 'approve']);
  /** Whether the reasons show; two-way with `[(rejecting)]`. */
  readonly rejecting = model(false);
  /** Texts, for other languages. */
  readonly labels = input<Partial<ItemLabels>>({});
  readonly approve = output<void>();
  readonly reject = output<number | undefined>();
  readonly edit = output<void>();
  readonly skip = output<void>();

  protected readonly id = uniqueId('ds-review-item');
  protected readonly t = computed<ItemLabels>(() => ({ why: 'Why', approve: 'Approve', reject: 'Reject', edit: 'Edit', skip: 'Skip', whyReject: 'Why?', cancel: 'Cancel', ...this.labels() }));
  private readonly actionRow = viewChild<ElementRef<HTMLElement>>('actionRow');
  private readonly injector = inject(Injector);

  protected has(action: ReviewCenterAction) {
    return this.actions().includes(action);
  }

  protected setRejecting(value: boolean) {
    this.rejecting.set(value);
    // The pressed button goes with the row: focus the first reason, or Reject again after Cancel.
    afterNextRender(
      () => {
        const lost = !document.activeElement || document.activeElement === document.body;
        if (lost) this.actionRow()?.nativeElement.querySelector<HTMLButtonElement>(value ? 'button' : 'button[aria-keyshortcuts="R"]')?.focus();
      },
      { injector: this.injector },
    );
  }
}

type DoneLabels = { undo: string };

/** All reviewed, on a native `<section>`: what was decided, with Undo last (Z). */
@Component({
  selector: 'section[dsReviewCenterDone]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DsButton, DsKbd, DsLeadingIcon, DsTrailingIcon],
  host: {
    class: 'ds-review ds-review--done',
    tabindex: '-1',
    '[attr.aria-label]': 'ariaLabel() ?? null',
    '[attr.aria-labelledby]': 'ariaLabel() ? null : id',
    '[attr.title]': 'null',
    '[attr.description]': 'null',
    '[attr.undoable]': 'null',
    '(keydown)': 'key($event)',
  },
  template: `
    <div class="ds-review__done">
      <span class="ds-review__status" aria-hidden="true">${riCheckLine}</span>
      <div role="status">
        <p [id]="id">{{ title() }}</p>
        @if (description() !== undefined) {
          <p>{{ description() }}</p>
        }
      </div>
      @if (undoable()) {
        <button dsButton variant="ghost" size="xs" aria-keyshortcuts="Z" (click)="undo.emit()">${riArrowGoBackLineLead}{{ t().undo }}<kbd dsKbd dsTrailingIcon size="sm">Z</kbd></button>
      }
    </div>
  `,
})
export class DsReviewCenterDone {
  readonly title = input('Nothing left to review');
  /** "29 approved · 3 rejected · 1 skipped". */
  readonly description = input<string>();
  /** Shows Undo last (Z; it emits `undo`). */
  readonly undoable = input(false, { transform: booleanAttribute });
  readonly ariaLabel = input<string | undefined>(undefined, { alias: 'aria-label' });
  readonly labels = input<Partial<DoneLabels>>({});
  readonly undo = output<void>();

  protected readonly id = uniqueId('ds-review-done');
  protected readonly t = computed<DoneLabels>(() => ({ undo: 'Undo last', ...this.labels() }));

  protected key(event: KeyboardEvent) {
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || !this.undoable()) return;
    if (event.key.toUpperCase() === 'Z') {
      event.preventDefault();
      this.undo.emit();
    }
  }
}
