import { ChangeDetectionStrategy, Component, Directive, computed, input, model } from '@angular/core';
import { DsSpinner } from '../spinner/spinner';
import { uniqueId } from '../internal/ids';
import { riAlertFillHidden, riArrowDownSLineHidden, riArrowRightSLineHidden, riCheckLineHidden } from '../internal/remix';

// Styles live in @helloantek/ds-css (classes ds-thinking-state*, ds-thinking-step*); these components render ds-react's
// ThinkingState, ThinkingStep, ThinkingSources and ThinkingNote markup.

/**
 * Figma pattern "Thinking State" on a native `<div>`: the AI at work, step by step, where the answer will appear;
 * when the answer starts it folds (`status="done"`) into one line that opens back (`[(open)]`).
 *
 *     <div dsThinkingState status="done" title="Thought for 14 s" summary="6 sources · 4 steps">
 *       <li dsThinkingStep label="Read the refund policy" detail="3 matches" time="3 s"><svg dsThinkingStepIcon …></svg></li>
 *     </div>
 */
@Component({
  selector: 'div[dsThinkingState]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class]': 'classes()', '[attr.status]': 'null', '[attr.title]': 'null', '[attr.summary]': 'null', '[attr.open]': 'null', '[attr.labels]': 'null' },
  template: `
    @if (done()) {
      <button type="button" class="ds-thinking-state__head" [attr.aria-expanded]="isOpen()" [attr.aria-controls]="id + '-steps'" (click)="open.set(!isOpen())">
        ${riCheckLineHidden}
        <span class="ds-thinking-state__title">{{ title() }}</span>
        @if (summary() !== undefined) {
          <span class="ds-thinking-state__meta">· {{ summary() }}</span>
        }
        @if (isOpen()) {
          ${riArrowDownSLineHidden}
        } @else {
          ${riArrowRightSLineHidden}
        }
      </button>
    }
    <ol class="ds-thinking-state__steps" [id]="id + '-steps'" [attr.aria-label]="labels().steps ?? 'Steps'" [attr.aria-live]="done() ? null : 'polite'" [hidden]="!isOpen()">
      <ng-content />
    </ol>
  `,
})
export class DsThinkingState {
  /** `working` shows the steps as they happen; `done` folds them into one line that opens back. */
  readonly status = input<'working' | 'done'>('working');
  /** Done, the line's words: "Thought for 14 s". */
  readonly title = input<string>();
  /** Done, after the words: "6 sources · 4 steps". */
  readonly summary = input<string>();
  /** Done, open state, two-way with `[(open)]`; it starts folded. */
  readonly open = model(false);
  /** Texts, for other languages. */
  readonly labels = input<Partial<{ steps: string }>>({});

  protected readonly id = uniqueId('ds-thinking-state');
  protected readonly done = computed(() => this.status() === 'done');
  protected readonly isOpen = computed(() => !this.done() || this.open());
  protected readonly classes = computed(() =>
    ['ds-thinking-state', this.done() && 'ds-thinking-state--done', this.done() && this.open() && 'ds-thinking-state--open'].filter(Boolean).join(' '),
  );
}

/** A done step's 16 px icon: `<svg dsThinkingStepIcon …>`. */
@Directive({ selector: '[dsThinkingStepIcon]' })
export class DsThinkingStepIcon {}

/**
 * One step on a native `<li>`: its icon (a spinner while it runs), what it did and how long, with what it found under
 * it (`ul[dsThinkingSources]`, `p[dsThinkingNote]`).
 */
@Component({
  selector: 'li[dsThinkingStep]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DsSpinner],
  host: { '[class]': 'classes()', '[attr.status]': 'null', '[attr.label]': 'null', '[attr.detail]': 'null', '[attr.time]': 'null' },
  template: `
    <div class="ds-thinking-step__line">
      @if (status() === 'running') {
        <span dsSpinner decorative></span>
      } @else {
        <ng-content select="[dsThinkingStepIcon]" />
      }
      <span class="ds-thinking-step__label">{{ label() }}</span>
      @if (detail() !== undefined) {
        <span class="ds-thinking-step__detail">{{ detail() }}</span>
      }
      @if (time() !== undefined) {
        <span class="ds-thinking-step__time">{{ time() }}</span>
      }
    </div>
    <ng-content />
  `,
})
export class DsThinkingStep {
  /** `running` shows the spinner and the words in the text colour. */
  readonly status = input<'done' | 'running'>('done');
  /** What it does or did: "Searching", "Read the refund policy". */
  readonly label = input.required<string>();
  /** After the words: "3 matches". */
  readonly detail = input<string>();
  /** How long it took, or the live time while running: "2 s", "0:04". */
  readonly time = input<string>();

  protected readonly classes = computed(() => (this.status() === 'running' ? 'ds-thinking-step ds-thinking-step--running' : 'ds-thinking-step'));
}

/**
 * The sources a step searched, as chips that wrap, on a native `<ul>`; each `<li>` holds an `a[dsThinkingSource]` (or a
 * `span`) with the source's logo and name. `[more]` adds "+3 more".
 */
@Component({
  selector: 'ul[dsThinkingSources]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'ds-thinking-state__sources', '[attr.aria-label]': 'labels().sources ?? "Sources"', '[attr.more]': 'null', '[attr.labels]': 'null' },
  template: `
    <ng-content />
    @if (more() > 0) {
      <li>
        <span class="ds-thinking-state__source">{{ labels().more ? labels().more!(more()) : '+' + more() + ' more' }}</span>
      </li>
    }
  `,
})
export class DsThinkingSources {
  /** How many more it searched: "+3 more". */
  readonly more = input(0);
  /** Texts, for other languages. */
  readonly labels = input<Partial<{ sources: string; more: (count: number) => string }>>({});
}

/** A source chip: `<a dsThinkingSource href="…">` (or a `<span>` without a link), its logo then its name. */
@Directive({ selector: 'a[dsThinkingSource], span[dsThinkingSource]', host: { class: 'ds-thinking-state__source' } })
export class DsThinkingSource {}

/** Something that went wrong on the way and how it went on, in amber: `<p dsThinkingNote>Couldn’t open GitHub…</p>`. */
@Component({
  selector: 'p[dsThinkingNote]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'ds-thinking-state__note' },
  template: `${riAlertFillHidden}<ng-content />`,
})
export class DsThinkingNote {}
