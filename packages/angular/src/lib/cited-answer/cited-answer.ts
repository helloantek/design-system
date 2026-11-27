import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, Directive, TemplateRef, booleanAttribute, computed, contentChildren, inject, input, model, output, signal } from '@angular/core';
import { DsButton } from '../button/button';
import { DsTrailingIcon } from '../slots/slots';
import { uniqueId } from '../internal/ids';
import { riArrowRightLineTrail } from '../internal/remix';

// Styles live in @helloantek/ds-css (classes ds-cited-answer*); this component renders ds-react's CitedAnswer markup
// and behaviour.

/** A piece of a quoted passage: plain words, or the words the answer uses, in bold. */
export type CitedAnswerQuotePart = string | { strong: string };

/** One source, cited by its number (its place in `sources`, from 1). Its logo: `<ng-template dsCitedAnswerIcon="name">`. */
export interface CitedAnswerSource {
  /** Where it is from: "Help center". */
  name: string;
  /** The page or document: "Refunds and returns". */
  title?: string;
  /** The passage it quotes, shown when the source is opened; the words the answer uses as `{ strong }`. */
  quote?: CitedAnswerQuotePart[];
}

/** A piece of a paragraph: plain words, or a claim that ends in the citation of a source (1-based). */
export type CitedAnswerPart = string | { text: string; cite: number };

export interface CitedAnswerLabels {
  hint: string;
  followUp: string;
  sources: string;
  citation: (number: number, name: string) => string;
  citedIn: (count: number) => string;
}

const LABELS: CitedAnswerLabels = {
  hint: 'Ask about any sentence',
  followUp: 'Follow up',
  sources: 'Sources',
  citation: (number, name) => `Source ${number}, ${name}`,
  citedIn: (count) => `· cited in ${count} ${count === 1 ? 'sentence' : 'sentences'}`,
};

/** A source's logo, in `currentColor`: `<ng-template dsCitedAnswerIcon="Help center"><svg …></svg></ng-template>`. */
@Directive({ selector: 'ng-template[dsCitedAnswerIcon]' })
export class DsCitedAnswerIcon {
  /** The `name` of the source it belongs to. */
  readonly source = input.required<string>({ alias: 'dsCitedAnswerIcon' });
  readonly template = inject(TemplateRef);
}

/**
 * Figma pattern "Cited Answer" on a native `<article>`: an answer wired to its sources. Each claim ends in a numbered
 * citation; point at one and its sentences and source light up while the rest fades; click a citation or a source for
 * the passage it quotes (`[(open)]`), and Follow up (`followable`, `(followUp)`).
 */
@Component({
  selector: 'article[dsCitedAnswer]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet, DsButton, DsTrailingIcon],
  host: {
    '[class]': "focus() !== null ? 'ds-cited-answer ds-cited-answer--focused' : 'ds-cited-answer'",
    '[attr.sources]': 'null',
    '[attr.paragraphs]': 'null',
    '[attr.meta]': 'null',
    '[attr.open]': 'null',
    '[attr.followable]': 'null',
    '[attr.labels]': 'null',
  },
  template: `
    <header class="ds-cited-answer__header">
      <span class="ds-cited-answer__marks" aria-hidden="true">
        @for (source of sources(); track $index) {
          <span class="ds-cited-answer__mark">
            @if (icons().get(source.name); as icon) {
              <ng-container [ngTemplateOutlet]="icon" />
            }
          </span>
        }
      </span>
      @if (meta() !== undefined) {
        <span class="ds-cited-answer__meta">{{ meta() }}</span>
      }
    </header>
    <div class="ds-cited-answer__answer">
      @for (paragraph of paragraphs(); track $index) {
        <p class="ds-cited-answer__paragraph">
          @for (part of paragraph; track $index) {
            @if (isClaim(part)) {
              <span class="ds-cited-answer__claim" [attr.data-lit]="focus() === part.cite || null">{{ part.text }}</span>
              <button
                type="button"
                class="ds-cited-answer__cite"
                [attr.data-active]="focus() === part.cite || null"
                [attr.aria-label]="t().citation(part.cite, sources()[part.cite - 1]?.name ?? '')"
                [attr.aria-expanded]="open() === part.cite"
                [attr.aria-controls]="open() === part.cite ? id + '-passage' : null"
                (click)="toggle(part.cite)"
                (mouseenter)="pointed.set(part.cite)"
                (mouseleave)="pointed.set(null)"
                (focus)="pointed.set(part.cite)"
                (blur)="pointed.set(null)"
              >{{ part.cite }}</button>
            } @else {
              {{ part }}
            }
          }
        </p>
      }
      @if (opened(); as source) {
        @if (source.quote !== undefined) {
          <figure [id]="id + '-passage'" class="ds-cited-answer__passage">
            <figcaption class="ds-cited-answer__from">
              @if (icons().get(source.name); as icon) {
                <span class="ds-cited-answer__from-icon" aria-hidden="true"><ng-container [ngTemplateOutlet]="icon" /></span>
              }
              <span>{{ source.name }}{{ source.title !== undefined ? ' · ' + source.title : '' }}</span>
            </figcaption>
            <blockquote class="ds-cited-answer__quote">“@for (piece of source.quote; track $index) {@if (isStrong(piece)) {<strong>{{ piece.strong }}</strong>} @else {{{ piece }}}}”</blockquote>
          </figure>
        }
      }
      <ul class="ds-cited-answer__sources" [attr.aria-label]="t().sources">
        @for (source of sources(); track $index; let n = $index) {
          <li>
            <button
              type="button"
              class="ds-cited-answer__source"
              [attr.data-active]="focus() === n + 1 || null"
              [attr.aria-pressed]="open() === n + 1"
              (click)="toggle(n + 1)"
              (mouseenter)="pointed.set(n + 1)"
              (mouseleave)="pointed.set(null)"
              (focus)="pointed.set(n + 1)"
              (blur)="pointed.set(null)"
            >
              @if (icons().get(source.name); as icon) {
                <span class="ds-cited-answer__source-icon" aria-hidden="true"><ng-container [ngTemplateOutlet]="icon" /></span>
              }
              <span class="ds-cited-answer__source-name">{{ source.name }}</span>
              <span class="ds-cited-answer__source-number">{{ n + 1 }}</span>
            </button>
          </li>
        }
      </ul>
    </div>
    <footer class="ds-cited-answer__footer">
      <span class="ds-cited-answer__status">
        @if (focused(); as source) {
          <strong>{{ source.name }}</strong> {{ t().citedIn(counts().get(focus()!) ?? 0) }}
        } @else {
          {{ t().hint }}
        }
      </span>
      @if (followable()) {
        <button dsButton variant="outline" size="xs" (click)="followUp.emit(open())">{{ t().followUp }}${riArrowRightLineTrail}</button>
      }
    </footer>
  `,
})
export class DsCitedAnswer {
  readonly sources = input.required<CitedAnswerSource[]>();
  /** The answer: paragraphs of parts. */
  readonly paragraphs = input.required<CitedAnswerPart[][]>();
  /** After the marks in the header: "3 sources · 12 pages read". */
  readonly meta = input<string>();
  /** The opened source (1-based) or `null`; two-way with `[(open)]`. */
  readonly open = model<number | null>(null);
  /** Offers Follow up (it emits `followUp` with the source in view, or `null`). */
  readonly followable = input(false, { transform: booleanAttribute });
  /** Texts, for other languages. */
  readonly labels = input<Partial<CitedAnswerLabels>>({});
  readonly followUp = output<number | null>();

  protected readonly id = uniqueId('ds-cited-answer');
  protected readonly t = computed<CitedAnswerLabels>(() => ({ ...LABELS, ...this.labels() }));
  private readonly iconTemplates = contentChildren(DsCitedAnswerIcon);
  protected readonly icons = computed(() => new Map(this.iconTemplates().map((icon) => [icon.source(), icon.template])));
  protected readonly pointed = signal<number | null>(null);
  protected readonly focus = computed(() => this.pointed() ?? this.open());
  protected readonly opened = computed(() => (this.open() !== null ? this.sources()[this.open()! - 1] : undefined));
  protected readonly focused = computed(() => (this.focus() !== null ? this.sources()[this.focus()! - 1] : undefined));
  protected readonly counts = computed(() => {
    const counts = new Map<number, number>();
    for (const paragraph of this.paragraphs()) for (const part of paragraph) if (typeof part !== 'string') counts.set(part.cite, (counts.get(part.cite) ?? 0) + 1);
    return counts;
  });

  protected isClaim(part: CitedAnswerPart): part is { text: string; cite: number } {
    return typeof part !== 'string';
  }

  protected isStrong(piece: CitedAnswerQuotePart): piece is { strong: string } {
    return typeof piece !== 'string';
  }

  protected toggle(n: number) {
    this.open.set(this.open() === n ? null : n);
  }
}
