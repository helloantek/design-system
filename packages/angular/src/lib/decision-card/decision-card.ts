import { ChangeDetectionStrategy, Component, ElementRef, booleanAttribute, computed, inject, input, linkedSignal, output, signal } from '@angular/core';
import { DsBadge } from '../badge/badge';
import { DsButton } from '../button/button';
import { DsInput } from '../input/input';
import { DsKbd } from '../kbd/kbd';
import { DsIcon, DsTrailingIcon } from '../slots/slots';
import { uniqueId } from '../internal/ids';
import { riArrowLeftSLineIcon, riArrowRightSLineIcon, riCornerDownLeftLine } from '../internal/remix';

// Styles live in @helloantek/ds-css (classes ds-decision*); this component renders ds-react's DecisionCard markup
// and behaviour.

/** One numbered answer. */
export interface DecisionOption {
  label: string;
  description?: string;
  /** Marks the agent's pick with a "Recommended" badge; the card starts on it. */
  recommended?: boolean;
}

/** One preview tile of a pick. */
export interface DecisionTile {
  label: string;
  /** The picture's URL (drawn as a decorative `<img>`). */
  preview?: string;
  /** The card starts on it. */
  recommended?: boolean;
}

/** What was answered: the number of an option or tile (0-based), or your own words. */
export type DecisionAnswer = { index: number } | { text: string };

type Labels = {
  needsYou: string;
  later: string;
  recommended: string;
  send: string;
  answer: string;
  previous: string;
  next: string;
  of: (page: number, count: number) => string;
  waiting: (count: number) => string;
};

/**
 * Figma pattern "Decision Card" on a native `<section>`: an agent's question right above the composer, with numbered
 * answers, preview tiles, or your own words.
 *
 *     <section dsDecisionCard question="Which plan should the new team start on?" context="Onboarding"
 *              [options]="plans" (answer)="pick($event)" laterable (later)="fold()"></section>
 *
 * A click or the answer's number answers (`(answer)`); in the last row Enter or Send does. Several questions share
 * one card with a pager (`page`, `pageCount`, `(pageChange)`); `folded` shows one line with Answer (`(open)`).
 */
@Component({
  selector: 'section[dsDecisionCard]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DsBadge, DsButton, DsInput, DsKbd, DsIcon, DsTrailingIcon],
  host: {
    '[class]': 'folded() ? "ds-decision ds-decision--later" : "ds-decision"',
    '[attr.aria-labelledby]': 'folded() ? id + "-title " + id + "-peek" : id + "-question"',
    '[attr.tabindex]': 'folded() ? null : -1',
    '[attr.question]': 'null',
    '[attr.context]': 'null',
    '[attr.details]': 'null',
    '[attr.options]': 'null',
    '[attr.tiles]': 'null',
    '[attr.allowOther]': 'null',
    '[attr.otherPlaceholder]': 'null',
    '[attr.page]': 'null',
    '[attr.pageCount]': 'null',
    '[attr.laterable]': 'null',
    '[attr.folded]': 'null',
    '(keydown)': 'key($event)',
  },
  template: `
    @if (folded()) {
      <div class="ds-decision__later">
        <span class="ds-decision__ring" aria-hidden="true"></span>
        <p class="ds-decision__title" [id]="id + '-title'">{{ t().waiting(pageCount()) }}</p>
        <span class="ds-decision__peek" [id]="id + '-peek'">{{ question() }}</span>
        <button dsButton variant="outline" size="xs" (click)="open.emit()">{{ t().answer }}</button>
      </div>
    } @else {
      <div class="ds-decision__header">
        <span class="ds-decision__status"><span class="ds-decision__ring" aria-hidden="true"></span>{{ t().needsYou }}</span>
        @if (context() !== undefined) {
          <span class="ds-decision__context">{{ context() }}</span>
        } @else {
          <span class="ds-decision__context" aria-hidden="true"></span>
        }
        @if (pageCount() > 1) {
          <div class="ds-decision__pager">
            <button dsButton variant="ghost" size="xs" [attr.aria-label]="t().previous" (click)="pageChange.emit(page() <= 1 ? pageCount() : page() - 1)">${riArrowLeftSLineIcon}</button>
            <span>{{ t().of(page(), pageCount()) }}</span>
            <button dsButton variant="ghost" size="xs" [attr.aria-label]="t().next" (click)="pageChange.emit(page() >= pageCount() ? 1 : page() + 1)">${riArrowRightSLineIcon}</button>
          </div>
        }
        @if (laterable()) {
          <button dsButton variant="ghost" size="xs" (click)="later.emit()">{{ t().later }}</button>
        }
      </div>
      <h3 class="ds-decision__question" [id]="id + '-question'">{{ question() }}</h3>
      @if (details().length > 0) {
        <dl class="ds-decision__details">
          @for (row of details(); track $index) {
            <div>
              <dt>{{ row[0] }}</dt>
              <dd>{{ row[1] }}</dd>
            </div>
          }
        </dl>
      }
      @if (tiles().length > 0) {
        <div class="ds-decision__tiles" role="group" [attr.aria-labelledby]="id + '-question'">
          @for (tile of tiles(); track $index; let i = $index) {
            <button type="button" [class]="active() === i ? 'ds-decision__tile ds-decision__tile--active' : 'ds-decision__tile'" [attr.aria-keyshortcuts]="i + 1" (mouseenter)="active.set(i)" (focus)="active.set(i)" (click)="answer.emit({ index: i })">
              <span class="ds-decision__preview">
                @if (tile.preview) {
                  <img [src]="tile.preview" alt="" />
                }
              </span>
              <span class="ds-decision__caption"><kbd dsKbd size="sm">{{ i + 1 }}</kbd>{{ tile.label }}</span>
            </button>
          }
        </div>
      }
      <div class="ds-decision__answers" role="group" [attr.aria-labelledby]="id + '-question'">
        @for (option of options(); track $index; let i = $index) {
          <button type="button" [class]="active() === tiles().length + i ? 'ds-decision__option ds-decision__option--active' : 'ds-decision__option'" [attr.aria-keyshortcuts]="tiles().length + i + 1" (mouseenter)="active.set(tiles().length + i)" (focus)="active.set(tiles().length + i)" (click)="answer.emit({ index: tiles().length + i })">
            <kbd dsKbd size="sm">{{ tiles().length + i + 1 }}</kbd>
            <span class="ds-decision__text">
              <span class="ds-decision__label">{{ option.label }}</span>
              @if (option.description !== undefined) {
                <span class="ds-decision__description">{{ option.description }}</span>
              }
            </span>
            @if (option.recommended) {
              <span dsBadge variant="tint" color="green">{{ t().recommended }}</span>
            }
          </button>
        }
        @if (allowOther()) {
          <div class="ds-decision__other">
            <kbd dsKbd size="sm">{{ otherNumber() }}</kbd>
            <ds-input [aria-label]="otherName()" [aria-keyshortcuts]="'' + otherNumber()" [placeholder]="otherPlaceholder()" [(value)]="text" (focusin)="active.set(null)" (keydown.enter)="$event.preventDefault(); send()" />
            @if (text().trim() !== '') {
              <button dsButton size="xs" (click)="send()">{{ t().send }}<kbd dsKbd dsTrailingIcon size="sm" variant="inverted" label="Enter">${riCornerDownLeftLine}</kbd></button>
            }
          </div>
        }
      </div>
    }
  `,
})
export class DsDecisionCard {
  /** The question: "Which plan should the new team start on?" */
  readonly question = input.required<string>();
  /** What it is about, after "Needs you": "Onboarding". */
  readonly context = input<string>();
  /** What goes out, as name–value rows, for an approval. */
  readonly details = input<[string, string][]>([]);
  /** Numbered answers (Approve / Decline for an approval). */
  readonly options = input<DecisionOption[]>([]);
  /** Preview tiles for a pick, numbered before the options. */
  readonly tiles = input<DecisionTile[]>([]);
  /** A last row for your own words (default true). */
  readonly allowOther = input(true, { transform: booleanAttribute });
  readonly otherPlaceholder = input('Something else…');
  /** Several questions in one card: this one's place (1-based) and how many, with ‹ › to move (round the ends). */
  readonly page = input(1);
  readonly pageCount = input(1);
  /** Shows Later (it emits `later`), which folds the card to one line above the composer. */
  readonly laterable = input(false, { transform: booleanAttribute });
  /** The one line: "2 questions waiting", the question, Answer (it emits `open`). */
  readonly folded = input(false, { transform: booleanAttribute });
  /** Texts, for other languages. */
  readonly labels = input<Partial<Labels>>({});
  /** The chosen answer: a click, its number key, or Send / Enter in the last row. */
  readonly answer = output<DecisionAnswer>();
  readonly pageChange = output<number>();
  readonly later = output<void>();
  readonly open = output<void>();

  protected readonly id = uniqueId('ds-decision');
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  protected readonly t = computed<Labels>(() => ({
    needsYou: 'Needs you',
    later: 'Later',
    recommended: 'Recommended',
    send: 'Send',
    answer: 'Answer',
    previous: 'Previous question',
    next: 'Next question',
    of: (p, n) => `${p} of ${n}`,
    waiting: (n) => `${n} ${n === 1 ? 'question' : 'questions'} waiting`,
    ...this.labels(),
  }));
  // Tiles come first, then the options, then your own words: one numbering for all.
  private readonly count = computed(() => this.tiles().length + this.options().length);
  protected readonly otherNumber = computed(() => this.count() + 1);
  protected readonly otherName = computed(() => this.otherPlaceholder().replace(/…$/, ''));
  /** The highlighted answer: the recommended one until the pointer or focus moves. */
  protected readonly active = linkedSignal<number | null>(() => {
    const recommended = [...this.tiles(), ...this.options()].findIndex((x) => x.recommended);
    return recommended >= 0 ? recommended : null;
  });
  protected readonly text = signal('');

  protected send() {
    const value = this.text().trim();
    if (!value) return;
    this.answer.emit({ text: value });
    this.text.set('');
  }

  // A number answers while focus is in the card (but not while typing in the last row).
  protected key(event: KeyboardEvent) {
    if (this.folded() || event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return;
    if ((event.target as HTMLElement).closest('input, textarea, [contenteditable="true"]')) return;
    const n = Number(event.key);
    if (!Number.isInteger(n) || n < 1) return;
    if (n <= this.count()) {
      event.preventDefault();
      this.answer.emit({ index: n - 1 });
    } else if (n === this.otherNumber() && this.allowOther()) {
      event.preventDefault();
      this.host.querySelector<HTMLInputElement>('.ds-decision__other input')?.focus();
    }
  }
}
