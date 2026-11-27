import { ChangeDetectionStrategy, Component, ElementRef, afterRenderEffect, computed, inject, input, model, signal } from '@angular/core';
import { DsButton } from '../button/button';
import { DsKbd, DsKbdGroup } from '../kbd/kbd';
import { DsIcon, DsLeadingIcon, DsTrailingIcon } from '../slots/slots';
import { riArrowGoBackLineLead, riArrowLeftSLineIcon, riArrowRightSLineIcon, riCommandLine, riSparkling2FillHidden } from '../internal/remix';

// Styles live in @helloantek/ds-css (classes ds-inline-diff*); this component renders ds-react's InlineDiff markup and
// behaviour.

/** One suggested edit: the words it takes out, the words it puts in, or both. */
export interface InlineDiffEdit {
  id: string;
  removed?: string;
  added?: string;
}

/** A piece of the text: plain words, or an edit. */
export type InlineDiffSegment = string | InlineDiffEdit;

export type InlineDiffDecision = 'accepted' | 'rejected';

export interface InlineDiffLabels {
  accept: string;
  reject: string;
  acceptAll: string;
  rejectAll: string;
  previous: string;
  next: string;
  undo: string;
  suggestions: (count: number) => string;
  edit: (index: number, count: number) => string;
  summary: (accepted: number, rejected: number) => string;
}

const LABELS: InlineDiffLabels = {
  accept: 'Accept',
  reject: 'Reject',
  acceptAll: 'Accept all',
  rejectAll: 'Reject all',
  previous: 'Previous edit',
  next: 'Next edit',
  undo: 'Undo',
  suggestions: (count) => (count === 1 ? 'suggestion' : 'suggestions'),
  edit: (index, count) => `Edit ${index} of ${count}`,
  summary: (accepted, rejected) =>
    [accepted > 0 && `${accepted} ${accepted === 1 ? 'edit' : 'edits'} accepted`, rejected > 0 && `${rejected} rejected`].filter(Boolean).join(' · '),
};

/**
 * Figma pattern "Inline Diff" on a native `<section>`: AI edits to prose, shown in place. Struck words in red, new
 * words in green; the focused edit carries a small popover, Accept (Y) or Reject (N); ‹ › and Tab move between edits;
 * Reject all and Accept all close it out, and decided edits leave plain text with Undo. `[(decisions)]` by edit id.
 *
 *     <section dsInlineDiff [segments]="segments" label="Suggested by AI · Make it shorter" [(decisions)]="decisions"></section>
 */
@Component({
  selector: 'section[dsInlineDiff]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DsButton, DsKbd, DsKbdGroup, DsIcon, DsLeadingIcon, DsTrailingIcon],
  host: {
    '[class]': "done() ? 'ds-inline-diff ds-inline-diff--done' : 'ds-inline-diff'",
    '[attr.segments]': 'null',
    '[attr.label]': 'null',
    '[attr.decisions]': 'null',
    '[attr.labels]': 'null',
  },
  template: `
    <header class="ds-inline-diff__header">
      ${riSparkling2FillHidden}
      <span class="ds-inline-diff__label" role="status">{{ done() ? t().summary(accepted(), rejected()) : label() }}</span>
    </header>
    <p class="ds-inline-diff__text">
      @for (segment of segments(); track $index) {
        @if (!isEdit(segment)) {
          {{ segment }}
        } @else if (decisions()[segment.id] === 'accepted') {
          {{ segment.added ?? '' }}
        } @else if (decisions()[segment.id] === 'rejected') {
          {{ segment.removed ?? '' }}
        } @else {
          <span
            [class]="segment === focused() ? 'ds-inline-diff__edit ds-inline-diff__edit--focused' : 'ds-inline-diff__edit'"
            role="group"
            aria-roledescription="suggested edit"
            [attr.aria-label]="t().edit(pending().indexOf(segment) + 1, pending().length)"
            aria-keyshortcuts="Y N"
            tabindex="0"
            (focus)="current.set(segment.id)"
            (keydown)="onKeyDown($event, segment)"
          >
            @if (segment.removed !== undefined) {
              <del>{{ segment.removed }}</del>
            }
            @if (segment.removed !== undefined && segment.added !== undefined) {
              {{ ' ' }}
            }
            @if (segment.added !== undefined) {
              <ins>{{ segment.added }}</ins>
            }
            @if (segment === focused()) {
              <span class="ds-inline-diff__popover">
                <button dsButton variant="ghost" size="xs" tabindex="-1" (click)="decide(segment, 'rejected', true)">{{ t().reject }}<kbd dsKbd dsTrailingIcon size="sm">N</kbd></button>
                <button dsButton size="xs" tabindex="-1" (click)="decide(segment, 'accepted', true)">{{ t().accept }}<kbd dsKbd dsTrailingIcon size="sm" variant="inverted">Y</kbd></button>
              </span>
            }
          </span>
        }
      }
    </p>
    <footer class="ds-inline-diff__footer">
      @if (done()) {
        <button dsButton variant="ghost" size="sm" (click)="undo()">
          ${riArrowGoBackLineLead}{{ t().undo }}<kbd dsKbdGroup dsTrailingIcon><kbd dsKbd size="sm" label="Command">${riCommandLine}</kbd><kbd dsKbd size="sm">Z</kbd></kbd>
        </button>
      } @else {
        <span class="ds-inline-diff__count">{{ pending().length }}</span>
        <span class="ds-inline-diff__count-label">{{ t().suggestions(pending().length) }}</span>
        <button dsButton variant="ghost" size="xs" [attr.aria-label]="t().previous" [disabled]="pending().length < 2" (click)="move(-1)">${riArrowLeftSLineIcon}</button>
        <button dsButton variant="ghost" size="xs" [attr.aria-label]="t().next" [disabled]="pending().length < 2" (click)="move(1)">${riArrowRightSLineIcon}</button>
        <button dsButton variant="outline" size="sm" (click)="decideAll('rejected')">{{ t().rejectAll }}</button>
        <button dsButton size="sm" (click)="decideAll('accepted')">{{ t().acceptAll }}</button>
      }
    </footer>
  `,
})
export class DsInlineDiff {
  /** The text with its edits, in order. */
  readonly segments = input.required<InlineDiffSegment[]>();
  /** In the header while reviewing: "Suggested by AI · Make it shorter". */
  readonly label = input<string>();
  /** What was decided, by edit id; two-way with `[(decisions)]`. */
  readonly decisions = model<Record<string, InlineDiffDecision>>({});
  /** Texts, for other languages. */
  readonly labels = input<Partial<InlineDiffLabels>>({});

  protected readonly t = computed<InlineDiffLabels>(() => ({ ...LABELS, ...this.labels() }));
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private history: Record<string, InlineDiffDecision>[] = [];
  protected readonly current = signal<string | null>(null);
  private readonly wantFocus = signal(0);
  protected readonly edits = computed(() => this.segments().filter((s): s is InlineDiffEdit => typeof s !== 'string'));
  protected readonly pending = computed(() => this.edits().filter((edit) => this.decisions()[edit.id] === undefined));
  protected readonly focused = computed(() => this.pending().find((edit) => edit.id === this.current()) ?? this.pending()[0]);
  protected readonly accepted = computed(() => this.edits().filter((edit) => this.decisions()[edit.id] === 'accepted').length);
  protected readonly rejected = computed(() => this.edits().filter((edit) => this.decisions()[edit.id] === 'rejected').length);
  protected readonly done = computed(() => this.pending().length === 0);

  constructor() {
    // After a decision made from the keyboard or the popover, or a move, focus follows to the focused edit.
    let handled = 0;
    afterRenderEffect(() => {
      const wanted = this.wantFocus();
      if (wanted === handled) return;
      handled = wanted;
      this.host.querySelector<HTMLElement>('.ds-inline-diff__edit--focused')?.focus();
    });
  }

  protected isEdit(segment: InlineDiffSegment): segment is InlineDiffEdit {
    return typeof segment !== 'string';
  }

  private commit(next: Record<string, InlineDiffDecision>) {
    this.history.push(this.decisions());
    this.decisions.set(next);
  }

  protected decide(edit: InlineDiffEdit, decision: InlineDiffDecision, refocus: boolean) {
    const pending = this.pending();
    const at = pending.indexOf(edit);
    const after = pending[at + 1] ?? pending[at - 1];
    this.current.set(after?.id ?? null);
    this.commit({ ...this.decisions(), [edit.id]: decision });
    if (refocus) this.wantFocus.update((n) => n + 1);
  }

  protected decideAll(decision: InlineDiffDecision) {
    this.commit({ ...this.decisions(), ...Object.fromEntries(this.pending().map((edit) => [edit.id, decision])) });
  }

  protected undo() {
    // Back one step; decisions given from the start go back to none.
    this.decisions.set(this.history.pop() ?? {});
  }

  protected move(by: number) {
    const focused = this.focused();
    if (!focused) return;
    const pending = this.pending();
    const next = pending[(pending.indexOf(focused) + by + pending.length) % pending.length];
    this.current.set(next.id);
    this.wantFocus.update((n) => n + 1);
  }

  protected onKeyDown(event: KeyboardEvent, edit: InlineDiffEdit) {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    const key = event.key.toLowerCase();
    if (key === 'y' || key === 'n') {
      event.preventDefault();
      this.decide(edit, key === 'y' ? 'accepted' : 'rejected', true);
    }
  }
}
