import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, InjectionToken, afterNextRender, booleanAttribute, computed, inject, input, output, viewChild } from '@angular/core';
import { DsButton } from '../button/button';
import { DsLeadingIcon } from '../slots/slots';
import { uniqueId } from '../internal/ids';
import { riAlertFillHidden, riArrowGoBackLineLead, riArrowRightSLineHidden, riCheckLine } from '../internal/remix';

// Styles live in @helloantek/ds-css (classes ds-inbox*); these components render ds-react's DecisionInbox markup and
// behaviour.

// Set when an answer is chosen in this inbox, so the row that confirms it can take the focus the answer button had.
const ANSWERED_HERE = new InjectionToken<{ current: boolean }>('ANSWERED_HERE');

/**
 * Figma pattern "Decision Inbox" on a native `<section>`: the open decisions that wait on you, each with two quick
 * answers.
 *
 *     <section dsDecisionInbox [count]="3"><li dsDecisionInboxItem …></li>…</section>
 *     <section dsDecisionInbox [count]="3" folded meta="· oldest 2 h ago" (open)="expand()"></section>
 *     <section dsDecisionInbox [count]="0" emptyDescription="3 decided today"></section>
 */
@Component({
  selector: 'section[dsDecisionInbox]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ANSWERED_HERE, useFactory: () => ({ current: false }) }],
  host: {
    '[class]': 'folded() ? "ds-inbox ds-inbox--folded" : "ds-inbox"',
    '[attr.aria-label]': 'ariaLabel() ?? null',
    // A name given with aria-label (several inboxes on one page) replaces the title as the section's name.
    '[attr.aria-labelledby]': 'ariaLabel() ? null : id + "-title"',
    '[attr.count]': 'null',
    '[attr.folded]': 'null',
    '[attr.meta]': 'null',
    '[attr.emptyDescription]': 'null',
  },
  template: `
    @if (count() === 0 && !folded()) {
      <div class="ds-inbox__empty" role="status">
        <span class="ds-inbox__done" aria-hidden="true">${riCheckLine}</span>
        <div class="ds-inbox__text">
          <p class="ds-inbox__question" [id]="id + '-title'">{{ t().empty }}</p>
          @if (emptyDescription() !== undefined) {
            <p class="ds-inbox__context">{{ emptyDescription() }}</p>
          }
        </div>
      </div>
    } @else if (folded()) {
      <button type="button" class="ds-inbox__fold" aria-expanded="false" (click)="open.emit()">
        ${riAlertFillHidden}
        <span class="ds-inbox__title" [id]="id + '-title'">{{ count() === 0 ? t().empty : t().title(count()) }}</span>
        <span class="ds-inbox__meta">{{ meta() }}</span>
        ${riArrowRightSLineHidden}
      </button>
    } @else {
      <div class="ds-inbox__header">
        ${riAlertFillHidden}
        <h3 class="ds-inbox__title" [id]="id + '-title'">{{ t().title(count()) }}</h3>
      </div>
      <ul class="ds-inbox__list" (click)="answeredIn($event)"><ng-content /></ul>
    }
  `,
})
export class DsDecisionInbox {
  /** How many decisions are open; 0 shows "Nothing needs you". */
  readonly count = input.required<number>();
  /** One line in a sidebar ("3 need your input · oldest 2 h ago ›"); a click emits `open`. */
  readonly folded = input(false, { transform: booleanAttribute });
  /** After the count on the folded line: "· oldest 2 h ago". */
  readonly meta = input<string>();
  /** Under "Nothing needs you": "3 decided today · the agents go on by themselves". */
  readonly emptyDescription = input<string>();
  readonly ariaLabel = input<string | undefined>(undefined, { alias: 'aria-label' });
  /** Texts, for other languages. */
  readonly labels = input<Partial<{ title: (count: number) => string; empty: string }>>({});
  readonly open = output<void>();

  protected readonly id = uniqueId('ds-inbox');
  private readonly answeredHere = inject(ANSWERED_HERE);
  protected readonly t = computed(() => ({ title: (n: number) => `${n} ${n === 1 ? 'needs' : 'need'} your input`, empty: 'Nothing needs you', ...this.labels() }));

  protected answeredIn(event: Event) {
    if ((event.target as HTMLElement).closest('.ds-inbox__answers')) this.answeredHere.current = true;
  }
}

/**
 * An open decision on a native `<li>`: what to decide, why now and who asks, with its answers (the first is the main,
 * filled one); a click emits `answer` with the answer's index.
 *
 *     <li dsDecisionInboxItem question="Send the refund of €48 to Ana Silva?" context="… · Support agent" [answers]="['Send', 'Hold']"></li>
 */
@Component({
  selector: 'li[dsDecisionInboxItem]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DsButton],
  host: {
    class: 'ds-inbox__item',
    '[attr.aria-labelledby]': 'id',
    '[attr.question]': 'null',
    '[attr.context]': 'null',
    '[attr.answers]': 'null',
  },
  template: `
    <div class="ds-inbox__text">
      <p class="ds-inbox__question" [id]="id">{{ question() }}</p>
      @if (context() !== undefined) {
        <p class="ds-inbox__context">{{ context() }}</p>
      }
    </div>
    <div class="ds-inbox__answers" role="group" [attr.aria-labelledby]="id">
      @for (label of answers(); track $index; let i = $index) {
        <button dsButton size="xs" [variant]="i === 0 ? 'default' : 'outline'" (click)="answer.emit(i)">{{ label }}</button>
      }
    </div>
  `,
})
export class DsDecisionInboxItem {
  /** What to decide: "Send the refund of €48 to Ana Silva?" */
  readonly question = input.required<string>();
  /** Why now and the agent that asks. */
  readonly context = input<string>();
  /** The quick answers: the first is the main (filled) one, the rest are outline. */
  readonly answers = input.required<string[]>();
  readonly answer = output<number>();

  protected readonly id = uniqueId('ds-inbox-item');
}

/**
 * A just-answered decision on a native `<li>`: confirms in place with Undo (`undoable`, `(undo)`), then folds away
 * after `dismissAfter` ms (`(dismiss)`; paused while the pointer or focus is on it). When the answer was chosen in the
 * inbox, focus moves to Undo.
 */
@Component({
  selector: 'li[dsDecisionInboxAnswered]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DsButton, DsLeadingIcon],
  host: {
    class: 'ds-inbox__item ds-inbox__item--answered',
    '[attr.title]': 'null',
    '[attr.description]': 'null',
    '[attr.undoable]': 'null',
    '[attr.dismissAfter]': 'null',
    '(mouseenter)': 'stop()',
    '(mouseleave)': 'leave()',
    '(focusin)': 'stop()',
    '(focusout)': 'blur($event)',
  },
  template: `
    <div class="ds-inbox__answered" role="status">
      <span class="ds-inbox__done" aria-hidden="true">${riCheckLine}</span>
      <div class="ds-inbox__text">
        <p class="ds-inbox__question">{{ title() }}</p>
        @if (description() !== undefined) {
          <p class="ds-inbox__context">{{ description() }}</p>
        }
      </div>
    </div>
    @if (undoable()) {
      <button #undoButton dsButton variant="ghost" size="xs" (click)="undo.emit()">${riArrowGoBackLineLead}{{ labels().undo ?? 'Undo' }}</button>
    }
  `,
})
export class DsDecisionInboxAnswered {
  /** What happened: "Sent · €48 to Ana Silva". */
  readonly title = input.required<string>();
  /** What comes next: "Support agent goes on with the ticket". */
  readonly description = input<string>();
  /** Shows Undo (it emits `undo`). */
  readonly undoable = input(false, { transform: booleanAttribute });
  /** Folds the row away after this many milliseconds (it emits `dismiss`). */
  readonly dismissAfter = input<number>();
  readonly labels = input<Partial<{ undo: string }>>({});
  readonly undo = output<void>();
  readonly dismiss = output<void>();

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly answeredHere = inject(ANSWERED_HERE, { optional: true });
  private readonly undoButton = viewChild('undoButton', { read: ElementRef<HTMLButtonElement> });
  private timer: ReturnType<typeof setTimeout> | undefined;

  constructor() {
    afterNextRender(() => {
      // The answer button that had focus is gone with its row: keep focus in the inbox, on Undo.
      const lost = !document.activeElement || document.activeElement === document.body;
      const undo = this.undoButton()?.nativeElement;
      if (this.answeredHere?.current && lost && undo) undo.focus();
      else this.start();
      if (this.answeredHere) this.answeredHere.current = false;
    });
    inject(DestroyRef).onDestroy(() => this.stop());
  }

  protected stop() {
    clearTimeout(this.timer);
  }

  private start() {
    this.stop();
    const after = this.dismissAfter();
    if (after !== undefined) this.timer = setTimeout(() => this.dismiss.emit(), after);
  }

  protected leave() {
    if (!this.host.contains(document.activeElement)) this.start();
  }

  protected blur(event: FocusEvent) {
    if (!this.host.contains(event.relatedTarget as Node | null)) this.start();
  }
}
