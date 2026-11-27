import { ChangeDetectionStrategy, Component, Directive, booleanAttribute, computed, contentChild, input, output, signal } from '@angular/core';
import { contextCells, formatTokens } from '@helloantek/ds-core';
import { DsBadge } from '../badge/badge';
import { DsButton } from '../button/button';
import { DsSpinner } from '../spinner/spinner';
import { DsIcon, DsLeadingIcon, DsTrailingIcon } from '../slots/slots';
import { uniqueId } from '../internal/ids';
import { riArrowDownSLineHidden, riArrowRightLineTrail, riArrowRightSLineHidden, riArrowUpDownLineLead, riCloseLineIcon, riFileTextLine } from '../internal/remix';

// Styles live in @helloantek/ds-css (classes ds-context-window*); this component renders ds-react's ContextWindow
// markup and behaviour.

/** One thing in a part that can be taken out of the context, e.g. a file. */
export interface ContextWindowItem {
  id: string;
  label: string;
  tokens: number;
}

/** One part of what fills the context: the system prompt, tools, files, the conversation, memory… */
export interface ContextWindowPart {
  id: string;
  label: string;
  tokens: number;
  /** Its colour in the grid and the swatch (any CSS colour). Default: the next of foreground, muted foreground, blue, light blue, green. */
  color?: string;
  /** What is in it, to remove from (`(removeItem)`); the part opens into this list. */
  items?: ContextWindowItem[];
  /** Offers Compact (it emits `compact` with the part's id): squeezes this part (the conversation) into a summary. */
  compactable?: boolean;
  /** While it is being compacted. */
  compacting?: boolean;
}

export interface ContextWindowLabels {
  title: string;
  of: (total: string) => string;
  left: (left: string) => string;
  nearlyFull: string;
  newChat: string;
  compact: string;
  compacting: string;
  remove: (label: string) => string;
  parts: string;
}

const LABELS: ContextWindowLabels = {
  title: 'Context window',
  of: (total) => `of ${total} tokens`,
  left: (left) => `${left} left`,
  nearlyFull: 'it will start forgetting soon',
  newChat: 'New chat',
  compact: 'Compact',
  compacting: 'Compacting…',
  remove: (label) => `Remove ${label}`,
  parts: 'What fills the context',
};

const COLORS = ['var(--ds-foreground)', 'var(--ds-muted-foreground)', 'var(--ds-palette-blue-solid)', 'var(--ds-palette-blue-tint-strong)', 'var(--ds-palette-green-solid)'];

/** The model's logo in the header's Badge: `<svg dsContextWindowModelIcon …>`. */
@Directive({ selector: '[dsContextWindowModelIcon]' })
export class DsContextWindowModelIcon {}

/**
 * Figma pattern "Context Window" on a native `<section>`: what fills the model's context. How much is used of how much,
 * a grid where every cell is a slice of the window coloured by what fills it, and each part with its size. A part with
 * items (files) opens into a list to remove from (`removable`, `(removeItem)`); Compact squeezes the conversation
 * (`compactable` parts, `(compact)`); close to full it turns amber and offers a new chat (`newChattable`, `(newChat)`).
 *
 *     <section dsContextWindow [total]="200000" [parts]="parts" model="sonnet-4-5" newChattable (newChat)="fresh()"></section>
 */
@Component({
  selector: 'section[dsContextWindow]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DsBadge, DsButton, DsSpinner, DsIcon, DsLeadingIcon, DsTrailingIcon],
  host: {
    '[class]': "full() ? 'ds-context-window ds-context-window--full' : 'ds-context-window'",
    '[attr.aria-label]': 'ariaLabel() ?? null',
    '[attr.aria-labelledby]': 'ariaLabel() === undefined ? (ariaLabelledby() ?? id + "-title") : null',
    '[attr.total]': 'null',
    '[attr.parts]': 'null',
    '[attr.model]': 'null',
    '[attr.warnAt]': 'null',
    '[attr.newChattable]': 'null',
    '[attr.removable]': 'null',
    '[attr.cells]': 'null',
    '[attr.labels]': 'null',
  },
  template: `
    <header class="ds-context-window__header">
      <h3 [id]="id + '-title'" class="ds-context-window__title">{{ t().title }}</h3>
      @if (model() !== undefined) {
        <span class="ds-badge ds-badge--sm ds-badge--neutral ds-badge--tint">
          @if (modelIcon()) {
            <span class="ds-badge__lead" aria-hidden="true"><ng-content select="[dsContextWindowModelIcon]" /></span>
          }
          <span class="ds-badge__label">{{ model() }}</span>
        </span>
      }
    </header>
    <p class="ds-context-window__used">
      <span class="ds-context-window__amount">{{ format()(used()) }}</span>
      <span class="ds-context-window__of">{{ t().of(format()(total())) }}</span>
      <span dsBadge variant="tint" [color]="full() ? 'amber' : 'neutral'" class="ds-context-window__share">{{ percent() }}</span>
    </p>
    <div class="ds-context-window__grid" aria-hidden="true">
      @for (cell of grid(); track $index) {
        @if (cell === null) {
          <span class="ds-context-window__cell ds-context-window__cell--free"></span>
        } @else {
          <span class="ds-context-window__cell" [style.--context-color]="cell"></span>
        }
      }
    </div>
    <ul class="ds-context-window__parts" [attr.aria-label]="t().parts">
      @for (part of parts(); track part.id; let index = $index) {
        <li class="ds-context-window__part" [style.--context-color]="colorOf(part, index)">
          <div class="ds-context-window__row">
            <span class="ds-context-window__swatch" aria-hidden="true"></span>
            @if (part.items && part.items.length > 0) {
              <button type="button" class="ds-context-window__toggle" [attr.aria-expanded]="!!open()[part.id]" [attr.aria-controls]="id + '-' + part.id + '-items'" (click)="toggle(part.id)">
                <span class="ds-context-window__label">{{ part.label }}</span>
                @if (open()[part.id]) {
                  ${riArrowDownSLineHidden}
                } @else {
                  ${riArrowRightSLineHidden}
                }
              </button>
            } @else {
              <span class="ds-context-window__label">{{ part.label }}</span>
            }
            @if (part.compacting) {
              <span class="ds-context-window__compacting" role="status"><span dsSpinner size="sm" decorative></span>{{ t().compacting }}</span>
            } @else if (part.compactable) {
              <button dsButton variant="ghost" size="xs" (click)="compact.emit(part.id)">${riArrowUpDownLineLead}{{ t().compact }}</button>
            }
            <span class="ds-context-window__size">{{ format()(part.tokens) }}</span>
          </div>
          @if (part.items && part.items.length > 0) {
            <ul [id]="id + '-' + part.id + '-items'" class="ds-context-window__items" [hidden]="!open()[part.id]">
              @for (item of part.items; track item.id) {
                <li class="ds-context-window__item">
                  <span class="ds-context-window__item-icon" aria-hidden="true">${riFileTextLine}</span>
                  <span class="ds-context-window__item-label">{{ item.label }}</span>
                  <span class="ds-context-window__item-size">{{ format()(item.tokens) }}</span>
                  @if (removable()) {
                    <button dsButton variant="ghost" size="xs" [attr.aria-label]="t().remove(item.label)" (click)="removeItem.emit({ partId: part.id, itemId: item.id })">${riCloseLineIcon}</button>
                  }
                </li>
              }
            </ul>
          }
        </li>
      }
    </ul>
    <footer class="ds-context-window__footer">
      <span class="ds-context-window__left">{{ t().left(format()(left())) }}{{ full() ? ' · ' + t().nearlyFull : '' }}</span>
      @if (newChattable()) {
        <button dsButton [variant]="full() ? 'default' : 'outline'" size="xs" (click)="newChat.emit()">{{ t().newChat }}${riArrowRightLineTrail}</button>
      }
    </footer>
  `,
})
export class DsContextWindow {
  /** The size of the window in tokens, e.g. 200000. */
  readonly total = input.required<number>();
  /** What fills it, in order. */
  readonly parts = input.required<ContextWindowPart[]>();
  /** The model, as a Badge in the header, e.g. "sonnet-4-5" (its logo: `dsContextWindowModelIcon`). */
  readonly model = input<string>();
  /** From this share of the window used (0–1) it turns amber and New chat comes first. Default 0.85. */
  readonly warnAt = input(0.85);
  /** Offers New chat at the bottom (it emits `newChat`). */
  readonly newChattable = input(false, { transform: booleanAttribute });
  /** Items get a remove button (it emits `removeItem`). */
  readonly removable = input(false, { transform: booleanAttribute });
  /** The cells of the grid, each one an equal slice of the window. Default 200. */
  readonly cells = input(200);
  /** How token counts are written. Default ds-core's `formatTokens`: "136.4K". */
  readonly format = input<(tokens: number) => string>(formatTokens);
  readonly ariaLabel = input<string | undefined>(undefined, { alias: 'aria-label' });
  readonly ariaLabelledby = input<string | undefined>(undefined, { alias: 'aria-labelledby' });
  /** Texts, for other languages. */
  readonly labels = input<Partial<ContextWindowLabels>>({});

  readonly newChat = output<void>();
  /** The part to compact, by id. */
  readonly compact = output<string>();
  /** The part and the item to remove. */
  readonly removeItem = output<{ partId: string; itemId: string }>();

  protected readonly id = uniqueId('ds-context-window');
  protected readonly t = computed<ContextWindowLabels>(() => ({ ...LABELS, ...this.labels() }));
  protected readonly modelIcon = contentChild(DsContextWindowModelIcon);
  protected readonly open = signal<Record<string, boolean>>({});
  protected readonly used = computed(() => this.parts().reduce((sum, part) => sum + part.tokens, 0));
  protected readonly left = computed(() => Math.max(0, this.total() - this.used()));
  private readonly share = computed(() => (this.total() > 0 ? this.used() / this.total() : 0));
  protected readonly percent = computed(() => `${Math.round(this.share() * 100)}%`);
  protected readonly full = computed(() => this.share() >= this.warnAt());
  /** Each cell's colour, or null for a free one. */
  protected readonly grid = computed(() => {
    const parts = this.parts();
    const counts = contextCells(
      parts.map((part) => part.tokens),
      this.total(),
      this.cells(),
    );
    return counts.flatMap((count, index) => Array.from({ length: count }, () => (index < parts.length ? this.colorOf(parts[index], index) : null)));
  });

  protected colorOf(part: ContextWindowPart, index: number) {
    return part.color ?? COLORS[index % COLORS.length];
  }

  protected toggle(id: string) {
    this.open.update((open) => ({ ...open, [id]: !open[id] }));
  }
}
