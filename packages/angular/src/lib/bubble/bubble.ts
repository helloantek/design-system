import { ChangeDetectionStrategy, Component, DestroyRef, Directive, ElementRef, InjectionToken, afterRenderEffect, booleanAttribute, computed, contentChild, inject, input, signal, viewChild } from '@angular/core';
import { uniqueId } from '../internal/ids';

// Styles live in @helloantek/ds-css (classes ds-bubble*); these components render ds-react's Bubble and BubbleGroup
// markup.

/** Figma "Variant". */
export type BubbleVariant = 'default' | 'muted' | 'ghost' | 'destructive';
/** Which corner the reactions sit on. */
export type BubbleReactionsPlacement = 'bottom-end' | 'bottom-start' | 'top-start' | 'top-end';

const GROUP_ALIGN = new InjectionToken<() => 'start' | 'end'>('DsBubbleGroup align');

/**
 * A run of bubbles from one sender on a native `<div>`, 8 px apart, aligned to the start or the end, with an optional
 * meta line (`footer`): `<div dsBubbleGroup align="end" footer="Sent 9:51 AM"><div dsBubble>…</div></div>`.
 */
@Component({
  selector: 'div[dsBubbleGroup]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: GROUP_ALIGN, useFactory: () => { const group = inject(DsBubbleGroup); return () => group.align(); } }],
  host: { '[class]': "align() === 'end' ? 'ds-bubble-group ds-bubble-group--end' : 'ds-bubble-group'", '[attr.align]': 'null', '[attr.footer]': 'null' },
  template: `
    <ng-content />
    @if (footer() !== undefined) {
      <p class="ds-bubble-group__footer">{{ footer() }}</p>
    }
  `,
})
export class DsBubbleGroup {
  /** `start` (default, theirs) or `end` (yours). */
  readonly align = input<'start' | 'end'>('start');
  /** A meta line under the group, e.g. "Sent 9:51 AM · Read by Mira". */
  readonly footer = input<string>();
}

/** Figma "Reactions": emoji or a short reply in a pill on a corner of the bubble; mark it `dsBubbleReactions`. */
@Directive({ selector: '[dsBubbleReactions]' })
export class DsBubbleReactions {}

/**
 * Figma "Bubble" on a native `<div>`: a chat message (the content). Put a run of messages from one sender in a
 * `div[dsBubbleGroup]`. `collapsible` shows the first lines of a long message (8, or a number) with Show more.
 */
@Component({
  selector: 'div[dsBubble]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    '[attr.variant]': 'null',
    '[attr.align]': 'null',
    '[attr.reactionsPlacement]': 'null',
    '[attr.reactions]': 'null',
    '[attr.collapsible]': 'null',
    '[attr.moreLabel]': 'null',
    '[attr.lessLabel]': 'null',
  },
  template: `
    <div class="ds-bubble__content">
      <div #text [id]="textId" [class]="lines() > 0 && !expanded() ? 'ds-bubble__text ds-bubble__text--clamped' : 'ds-bubble__text'" [style.--bubble-lines]="lines() || null"><ng-content /></div>
      @if (lines() > 0 && (overflows() || expanded())) {
        <button type="button" class="ds-bubble__more" [attr.aria-expanded]="expanded()" [attr.aria-controls]="textId" (click)="expanded.set(!expanded())">
          {{ expanded() ? lessLabel() : moreLabel() }}<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m4 6 4 4 4-4"></path></svg>
        </button>
      }
    </div>
    @if (hasReactions()) {
      <div class="ds-bubble__reactions">@if (reactionsText() !== undefined) {{{ reactionsText() }}} @else {<ng-content select="[dsBubbleReactions]" />}</div>
    }
  `,
})
export class DsBubble {
  /** Figma Variant (default `default`: yours, on the card; `muted` for theirs, `ghost` for plain text, `destructive`). */
  readonly variant = input<BubbleVariant>('default');
  /** `start` (theirs) or `end` (yours); defaults to the group's alignment. */
  readonly align = input<'start' | 'end'>();
  /** The corner for the reactions (default bottom-end, or bottom-start for an end-aligned bubble, as in Figma). */
  readonly reactionsPlacement = input<BubbleReactionsPlacement>();
  /** Figma "Reactions" as text: emoji or a short reply ("Yes run it"); for anything richer, content marked `dsBubbleReactions`. */
  readonly reactionsText = input<string | undefined>(undefined, { alias: 'reactions' });
  /** Show only the first lines of a long message with a "Show more" toggle (`true` is 8 lines, as in Figma). */
  readonly collapsible = input<boolean | number, unknown>(false, { transform: (v: unknown) => (typeof v === 'number' ? v : typeof v === 'string' && v !== '' && !isNaN(Number(v)) ? Number(v) : booleanAttribute(v)) });
  readonly moreLabel = input('Show more');
  readonly lessLabel = input('Show less');

  private readonly groupAlign = inject(GROUP_ALIGN, { optional: true });
  protected readonly textId = uniqueId('ds-bubble-text');
  private readonly text = viewChild.required<ElementRef<HTMLElement>>('text');
  private readonly reactionsSlot = contentChild(DsBubbleReactions);
  protected readonly hasReactions = computed(() => this.reactionsText() !== undefined || !!this.reactionsSlot());
  protected readonly expanded = signal(false);
  protected readonly overflows = signal(false);
  protected readonly lines = computed(() => {
    const c = this.collapsible();
    return c === true ? 8 : typeof c === 'number' ? c : 0;
  });
  private readonly alignment = computed(() => this.align() ?? this.groupAlign?.());
  protected readonly classes = computed(() => {
    const placement = this.reactionsPlacement() ?? (this.alignment() === 'end' ? 'bottom-start' : 'bottom-end');
    return ['ds-bubble', this.variant() !== 'default' && `ds-bubble--${this.variant()}`, this.align() && `ds-bubble--${this.align()}`, this.hasReactions() && `ds-bubble--reactions-${placement}`].filter(Boolean).join(' ');
  });

  constructor() {
    // The toggle only shows when the clamped text is actually cut.
    let observer: ResizeObserver | null = null;
    afterRenderEffect(() => {
      const el = this.text().nativeElement;
      if (!this.lines()) return;
      const check = () => {
        if (!this.expanded()) this.overflows.set(el.scrollHeight > el.clientHeight + 1);
      };
      check();
      if (!observer && typeof ResizeObserver !== 'undefined') {
        observer = new ResizeObserver(check);
        observer.observe(el);
      }
    });
    inject(DestroyRef).onDestroy(() => observer?.disconnect());
  }
}
