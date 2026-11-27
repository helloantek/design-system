import { ChangeDetectionStrategy, Component, booleanAttribute, computed, input, model, output } from '@angular/core';
import { DsBadge, type BadgeColor } from '../badge/badge';
import { DsButton } from '../button/button';
import { DsInput } from '../input/input';
import { DsKbd, DsKbdGroup } from '../kbd/kbd';
import { DsLeadingIcon, DsTrailingIcon } from '../slots/slots';
import { uniqueId } from '../internal/ids';
import { riAddLineLead, riCommandLine, riCornerDownLeftLine, riFileCopyLineLead, riFileSearchLineLead } from '../internal/remix';

// Styles live in @helloantek/ds-css (classes ds-prompt-library*); this component renders ds-react's PromptLibrary
// markup and behaviour.

/** A saved prompt. Its `text` marks the gaps with braces: "Write a {tone} reply to {customer}." */
export interface PromptTemplate {
  id: string;
  name: string;
  text: string;
  /** Shown as a tint Badge after the name. */
  category?: string;
  categoryColor?: BadgeColor;
}

export type PromptValues = Record<string, string>;

export interface PromptLibraryLabels {
  heading: string;
  search: string;
  preview: string;
  copy: string;
  use: string;
  newPrompt: string;
  noMatch: (query: string) => string;
  filled: (filled: number, total: number) => string;
  tokens: (count: number) => string;
  left: (count: number) => string;
  ready: string;
}

const LABELS: PromptLibraryLabels = {
  heading: 'Prompts',
  search: 'Search templates',
  preview: 'Preview',
  copy: 'Copy',
  use: 'Use prompt',
  newPrompt: 'New prompt',
  noMatch: (query) => `No prompts match “${query}”`,
  filled: (filled, total) => `${filled} of ${total} filled`,
  tokens: (count) => `~${count} tokens`,
  left: (count) => `${count} left to fill`,
  ready: 'ready',
};

type Part = string | { name: string };

/** Splits a template's text into words and gaps; a gap is a name in braces. */
export function promptParts(text: string): Part[] {
  return text
    .split(/(\{[^{}]+\})/)
    .filter(Boolean)
    .map((part) => (/^\{[^{}]+\}$/.test(part) ? { name: part.slice(1, -1) } : part));
}

/** The names of a template's gaps, each once, in order. */
export function promptGaps(text: string): string[] {
  return [...new Set(promptParts(text).flatMap((part) => (typeof part === 'string' ? [] : [part.name])))];
}

/** The prompt with its filled gaps put in; gaps not yet filled stay as {name}. */
export function fillPrompt(text: string, values: PromptValues): string {
  return promptParts(text)
    .map((part) => (typeof part === 'string' ? part : values[part.name]?.trim() || `{${part.name}}`))
    .join('');
}

/** A rough token count: about four characters to a token. */
export const estimateTokens = (text: string) => Math.max(1, Math.round(text.length / 4));

/**
 * Figma pattern "Prompt Library" on a native `<section>`: saved prompt templates with variables. Pick one from the list
 * (search, categories), type straight into the gaps in its sentence, and watch the prompt assemble below with its
 * token count. Use prompt (also ⌘↵) turns on once every gap is filled.
 *
 *     <section dsPromptLibrary [templates]="templates" (use)="send($event.prompt)" (copy)="copy($event)"></section>
 */
@Component({
  selector: 'section[dsPromptLibrary]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DsBadge, DsButton, DsInput, DsKbd, DsKbdGroup, DsLeadingIcon, DsTrailingIcon],
  host: {
    class: 'ds-prompt-library',
    '[attr.aria-labelledby]': 'ariaLabel() === undefined ? headingId : null',
    '[attr.aria-label]': 'ariaLabel() ?? null',
    '[attr.templates]': 'null',
    '[attr.selected]': 'null',
    '[attr.values]': 'null',
    '[attr.query]': 'null',
    '[attr.newable]': 'null',
    '[attr.labels]': 'null',
    '(keydown)': 'onKeyDown($event)',
  },
  template: `
    <div class="ds-prompt-library__main">
      <div class="ds-prompt-library__templates">
        <h3 class="ds-prompt-library__heading" [id]="headingId">{{ t().heading }}<span class="ds-prompt-library__count">{{ templates().length }}</span></h3>
        <ds-input type="search" [placeholder]="t().search" aria-label="{{ t().search }}" [value]="query()" (valueChange)="query.set($event)">${riFileSearchLineLead}</ds-input>
        @if (shown().length > 0) {
          <ul class="ds-prompt-library__list" [attr.aria-labelledby]="headingId">
            @for (item of shown(); track item.id) {
              <li>
                <button type="button" class="ds-prompt-library__item" [attr.aria-current]="item.id === template().id || null" (click)="choose(item)">
                  <span>{{ item.name }}</span>
                  @if (item.category !== undefined) {
                    <span dsBadge variant="tint" [color]="item.categoryColor ?? 'neutral'">{{ item.category }}</span>
                  }
                </button>
              </li>
            }
          </ul>
        } @else {
          <div class="ds-prompt-library__empty" role="status">
            <p>{{ t().noMatch(query().trim()) }}</p>
            @if (newable()) {
              <button dsButton variant="outline" size="sm" (click)="newPrompt.emit(query().trim())">${riAddLineLead}{{ t().newPrompt }}</button>
            }
          </div>
        }
      </div>
      @if (template(); as tpl) {
        <div class="ds-prompt-library__template" role="group" [attr.aria-labelledby]="nameId">
          <div class="ds-prompt-library__title">
            <h4 class="ds-prompt-library__name" [id]="nameId">{{ tpl.name }}</h4>
            @if (tpl.category !== undefined) {
              <span dsBadge variant="tint" [color]="tpl.categoryColor ?? 'neutral'">{{ tpl.category }}</span>
            }
            @if (gaps().length > 0) {
              <span class="ds-prompt-library__progress">
                <span class="ds-prompt-library__dots" aria-hidden="true">
                  @for (name of gaps(); track name) {
                    <i [class.ds-prompt-library__dot--filled]="isFilled(name)"></i>
                  }
                </span>
                {{ t().filled(filled(), gaps().length) }}
              </span>
            }
          </div>
          <p class="ds-prompt-library__sentence">@for (part of parts(); track $index) {@if (isWords(part)) {{{ part }}} @else {<input [class]="isFilled(part.name) ? 'ds-prompt-library__gap ds-prompt-library__gap--filled' : 'ds-prompt-library__gap'" [attr.aria-label]="part.name" [placeholder]="part.name" [value]="values()[part.name] ?? ''" (input)="fill(part.name, $event)" />}}</p>
          <div class="ds-prompt-library__preview">
            <p class="ds-prompt-library__preview-label">{{ t().preview }}</p>
            <p class="ds-prompt-library__prompt">@for (part of parts(); track $index) {@if (isWords(part)) {{{ part }}} @else if (isFilled(part.name)) {{{ values()[part.name].trim() }}} @else {<span class="ds-prompt-library__missing">{{ '{' + part.name + '}' }}</span>}}</p>
          </div>
        </div>
      }
    </div>
    <footer class="ds-prompt-library__footer">
      <span class="ds-prompt-library__tokens" aria-live="polite">{{ template() ? t().tokens(countTokens()(prompt())) + ' · ' + (left() > 0 ? t().left(left()) : t().ready) : '' }}</span>
      <button dsButton variant="outline" size="sm" [disabled]="!template()" (click)="copy.emit(prompt())">${riFileCopyLineLead}{{ t().copy }}</button>
      <button dsButton size="sm" [disabled]="!ready()" aria-keyshortcuts="Meta+Enter Control+Enter" (click)="useIt()">
        {{ t().use }}<kbd dsKbdGroup dsTrailingIcon><kbd dsKbd size="sm" variant="inverted" label="Command">${riCommandLine}</kbd><kbd dsKbd size="sm" variant="inverted" label="Enter">${riCornerDownLeftLine}</kbd></kbd>
      </button>
    </footer>
  `,
})
export class DsPromptLibrary {
  readonly templates = input.required<PromptTemplate[]>();
  /** The chosen template's id, two-way with `[(selected)]`; the first by default. */
  readonly selected = model<string>('');
  /** What is typed into the gaps, by gap name; two-way with `[(values)]`. It clears when another template is chosen. */
  readonly values = model<PromptValues>({});
  /** The search text, two-way with `[(query)]`. */
  readonly query = model('');
  /** When nothing matches, offers New prompt (it emits `newPrompt` with the search). */
  readonly newable = input(false, { transform: booleanAttribute });
  /** Counts the prompt's tokens; about four characters to a token by default. */
  readonly countTokens = input<(prompt: string) => number>(estimateTokens);
  readonly ariaLabel = input<string | undefined>(undefined, { alias: 'aria-label' });
  /** Texts, for other languages. */
  readonly labels = input<Partial<PromptLibraryLabels>>({});

  /** Copy the prompt as it stands. */
  readonly copy = output<string>();
  /** Use the prompt, once every gap is filled (also ⌘↵ / Ctrl+↵). */
  readonly use = output<{ prompt: string; template: PromptTemplate }>();
  readonly newPrompt = output<string>();

  private readonly id = uniqueId('ds-prompt-library');
  protected readonly headingId = `${this.id}-heading`;
  protected readonly nameId = `${this.id}-name`;
  protected readonly t = computed<PromptLibraryLabels>(() => ({ ...LABELS, ...this.labels() }));
  protected readonly template = computed(() => this.templates().find((item) => item.id === this.selected()) ?? this.templates()[0]);
  protected readonly shown = computed(() => {
    const search = this.query().trim().toLowerCase();
    return search ? this.templates().filter((item) => item.name.toLowerCase().includes(search) || item.category?.toLowerCase().includes(search)) : this.templates();
  });
  protected readonly parts = computed(() => (this.template() ? promptParts(this.template()!.text) : []));
  protected readonly gaps = computed(() => (this.template() ? promptGaps(this.template()!.text) : []));
  protected readonly filled = computed(() => this.gaps().filter((name) => this.isFilled(name)).length);
  protected readonly left = computed(() => this.gaps().length - this.filled());
  protected readonly prompt = computed(() => (this.template() ? fillPrompt(this.template()!.text, this.values()) : ''));
  protected readonly ready = computed(() => this.template() !== undefined && this.left() === 0);

  protected isWords(part: Part): part is string {
    return typeof part === 'string';
  }

  protected isFilled(name: string) {
    return (this.values()[name] ?? '').trim() !== '';
  }

  protected fill(name: string, event: Event) {
    this.values.set({ ...this.values(), [name]: (event.target as HTMLInputElement).value });
  }

  protected choose(next: PromptTemplate) {
    if (next.id === this.template().id) return;
    this.selected.set(next.id);
    this.values.set({});
  }

  protected useIt() {
    const template = this.template();
    if (this.ready() && template) this.use.emit({ prompt: this.prompt(), template });
  }

  protected onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.metaKey || event.ctrlKey) && !event.altKey && !event.shiftKey) {
      event.preventDefault();
      this.useIt();
    }
  }
}
