import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, Directive, TemplateRef, booleanAttribute, computed, contentChildren, inject, input, output } from '@angular/core';
import { DsButton } from '../button/button';
import { DsLeadingIcon } from '../slots/slots';
import { uniqueId } from '../internal/ids';
import { riAlertFillHidden, riArrowRightSLineHidden, riPauseLineLead, riRefreshLineLead, riSparkling2FillHidden } from '../internal/remix';

// Styles live in @helloantek/ds-css (classes ds-ai-answer*); these components render ds-react's AIAnswer markup.

/** Where the answer stands. */
export type AIAnswerStatus = 'streaming' | 'done' | 'stopped';

/** One source the answer used, shown as a small card with its number. */
export interface AIAnswerSource {
  /** Where it is from: "Notion". Its logo: an `<ng-template dsAIAnswerSourceIcon="Notion">`. */
  name: string;
  /** What it is: "Refund policy – timelines". */
  title: string;
  /** Opens the source. */
  href?: string;
}

export interface AIAnswerLabels {
  sources: string;
  more: string;
  searching: string;
  answer: string;
  related: string;
  stop: string;
  continue: string;
  stopped: string;
}

const LABELS: AIAnswerLabels = {
  sources: 'Sources',
  more: 'more',
  searching: 'Searching…',
  answer: 'Answer',
  related: 'Related',
  stop: 'Stop',
  continue: 'Continue',
  stopped: 'Stopped – the answer may be incomplete',
};

/** A source's 12 px logo, in `currentColor`: `<ng-template dsAIAnswerSourceIcon="Notion"><svg …></svg></ng-template>`. */
@Directive({ selector: 'ng-template[dsAIAnswerSourceIcon]' })
export class DsAIAnswerSourceIcon {
  /** The `name` of the source it belongs to. */
  readonly source = input.required<string>({ alias: 'dsAIAnswerSourceIcon' });
  readonly template = inject(TemplateRef);
}

/** The actions on the left of the footer, usually Message Actions: mark them `dsAIAnswerActions`. */
@Directive({ selector: '[dsAIAnswerActions]' })
export class DsAIAnswerActions {}

/**
 * Figma pattern "AI Answer" on a native `<article>`: an answer with its sources. The question, the sources as small
 * numbered cards (`sources`, `moreSources`, `searching`), the answer (the content: paragraphs, `ul[dsAIAnswerPoints]`,
 * `span[dsAIAnswerCitation]`, `span[dsAIAnswerCaret]` while streaming), related questions, and the actions with how long
 * it took. Streaming it is busy with Stop (`stoppable`); stopped it says so with Continue (`continuable`).
 */
@Component({
  selector: 'article[dsAIAnswer]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet, DsButton, DsLeadingIcon],
  host: {
    class: 'ds-ai-answer',
    '[attr.aria-labelledby]': 'id + "-question"',
    '[attr.aria-busy]': 'status() === "streaming" || null',
    '[attr.question]': 'null',
    '[attr.sources]': 'null',
    '[attr.moreSources]': 'null',
    '[attr.moreOpens]': 'null',
    '[attr.searching]': 'null',
    '[attr.status]': 'null',
    '[attr.related]': 'null',
    '[attr.meta]': 'null',
    '[attr.stoppable]': 'null',
    '[attr.continuable]': 'null',
    '[attr.labels]': 'null',
  },
  template: `
    <ng-template #body let-source let-index="index">
      <span class="ds-ai-answer__source-name">
        @if (icons().get(source.name); as icon) {
          <span class="ds-ai-answer__source-icon" aria-hidden="true"><ng-container [ngTemplateOutlet]="icon" /></span>
        }
        <span class="ds-ai-answer__source-from">{{ source.name }}</span>
        <span class="ds-ai-answer__source-number">{{ index + 1 }}</span>
      </span>
      <span class="ds-ai-answer__source-title">{{ source.title }}</span>
    </ng-template>
    <ng-template #more>
      <span class="ds-ai-answer__more-count">+{{ moreSources() }}</span>
      <span class="ds-ai-answer__more-label">{{ t().more }}</span>
    </ng-template>
    <h3 [id]="id + '-question'" class="ds-ai-answer__question">{{ question() }}</h3>
    @if (sources().length > 0 || searching() > 0) {
      <ol class="ds-ai-answer__sources" [attr.aria-label]="t().sources">
        @for (source of sources(); track $index) {
          <li>
            @if (source.href !== undefined) {
              <a class="ds-ai-answer__source" [href]="source.href"><ng-container [ngTemplateOutlet]="body" [ngTemplateOutletContext]="{ $implicit: source, index: $index }" /></a>
            } @else {
              <span class="ds-ai-answer__source"><ng-container [ngTemplateOutlet]="body" [ngTemplateOutletContext]="{ $implicit: source, index: $index }" /></span>
            }
          </li>
        }
        @for (slot of searchingSlots(); track $index) {
          <li>
            <span class="ds-ai-answer__source ds-ai-answer__source--searching">
              <span class="ds-ai-answer__source-name"><span class="ds-ai-answer__source-from">{{ t().searching }}</span></span>
            </span>
          </li>
        }
        @if (moreSources() > 0) {
          <li>
            @if (moreOpens()) {
              <button type="button" class="ds-ai-answer__source ds-ai-answer__more" (click)="openMore.emit()"><ng-container [ngTemplateOutlet]="more" /></button>
            } @else {
              <span class="ds-ai-answer__source ds-ai-answer__more"><ng-container [ngTemplateOutlet]="more" /></span>
            }
          </li>
        }
      </ol>
    }
    <div class="ds-ai-answer__answer">
      <p class="ds-ai-answer__label">${riSparkling2FillHidden}{{ t().answer }}</p>
      <ng-content />
      @if (status() === 'stopped') {
        <p class="ds-ai-answer__stopped">${riAlertFillHidden}{{ t().stopped }}</p>
      }
    </div>
    @if (related().length > 0 && status() === 'done') {
      <div class="ds-ai-answer__related" role="group" [attr.aria-labelledby]="id + '-related'">
        <h4 [id]="id + '-related'" class="ds-ai-answer__related-title">{{ t().related }}</h4>
        <ul>
          @for (item of related(); track $index) {
            <li>
              <button type="button" class="ds-ai-answer__related-item" (click)="relatedChoose.emit($index)"><span>{{ item }}</span>${riArrowRightSLineHidden}</button>
            </li>
          }
        </ul>
      </div>
    }
    <footer class="ds-ai-answer__footer">
      <ng-content select="[dsAIAnswerActions]" />
      @if (status() === 'streaming' && stoppable()) {
        <button dsButton variant="outline" size="xs" (click)="stop.emit()">${riPauseLineLead}{{ t().stop }}</button>
      }
      @if (status() === 'stopped' && continuable()) {
        <button dsButton variant="outline" size="xs" (click)="continue.emit()">${riRefreshLineLead}{{ t().continue }}</button>
      }
      @if (status() === 'done' && meta() !== undefined) {
        <span class="ds-ai-answer__meta">{{ meta() }}</span>
      }
    </footer>
  `,
})
export class DsAIAnswer {
  /** The question, as the card's heading. */
  readonly question = input.required<string>();
  /** The sources it used, numbered in order. */
  readonly sources = input<AIAnswerSource[]>([]);
  /** How many more sources it used: the "+3 more" card. */
  readonly moreSources = input(0);
  /** The "+3 more" card is a button (it emits `openMore`). */
  readonly moreOpens = input(false, { transform: booleanAttribute });
  /** While the sources still load: this many "Searching…" cards in their place. */
  readonly searching = input(0);
  /** Default `done`. */
  readonly status = input<AIAnswerStatus>('done');
  /** Questions to go on with (a click emits `relatedChoose` with the index). */
  readonly related = input<string[]>([]);
  /** On the right of the footer when done: "Answered in 3.4 s". */
  readonly meta = input<string>();
  /** Streaming, it offers Stop (it emits `stop`). */
  readonly stoppable = input(false, { transform: booleanAttribute });
  /** Stopped, it offers Continue (it emits `continue`). */
  readonly continuable = input(false, { transform: booleanAttribute });
  /** Texts, for other languages. */
  readonly labels = input<Partial<AIAnswerLabels>>({});

  readonly openMore = output<void>();
  readonly relatedChoose = output<number>();
  readonly stop = output<void>();
  readonly continue = output<void>();

  protected readonly id = uniqueId('ds-ai-answer');
  protected readonly t = computed<AIAnswerLabels>(() => ({ ...LABELS, ...this.labels() }));
  private readonly iconTemplates = contentChildren(DsAIAnswerSourceIcon);
  protected readonly icons = computed(() => new Map(this.iconTemplates().map((icon) => [icon.source(), icon.template])));
  protected readonly searchingSlots = computed(() => Array.from({ length: this.searching() }));
}

/** A citation chip after a claim: `<span dsAIAnswerCitation>Notion +1</span>`. */
@Component({
  selector: 'span[dsAIAnswerCitation]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'ds-badge ds-badge--sm ds-badge--neutral ds-badge--tint ds-ai-answer__citation' },
  template: `<span class="ds-badge__label"><ng-content /></span>`,
})
export class DsAIAnswerCitation {}

/** The answer's points, each with a dot: `<ul dsAIAnswerPoints>`. */
@Directive({ selector: 'ul[dsAIAnswerPoints]', host: { class: 'ds-ai-answer__points' } })
export class DsAIAnswerPoints {}

/** One point: its key words in bold (`lead`), the claim (the content), its citation (`cite`). */
@Component({
  selector: 'li[dsAIAnswerPoint]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DsAIAnswerCitation],
  host: { class: 'ds-ai-answer__point', '[attr.lead]': 'null', '[attr.cite]': 'null' },
  template: `@if (lead() !== undefined) {<strong>{{ lead() }}</strong>} <ng-content />@if (cite() !== undefined) { <span dsAIAnswerCitation>{{ cite() }}</span>}`,
})
export class DsAIAnswerPoint {
  readonly lead = input<string>();
  readonly cite = input<string>();
}

/** The caret at the end of the words while the answer streams in: `<span dsAIAnswerCaret></span>`. */
@Directive({ selector: 'span[dsAIAnswerCaret]', host: { class: 'ds-ai-answer__caret', 'aria-hidden': 'true' } })
export class DsAIAnswerCaret {}
