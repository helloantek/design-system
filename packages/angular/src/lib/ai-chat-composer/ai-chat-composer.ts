import { ChangeDetectionStrategy, Component, Directive, ElementRef, afterNextRender, afterRenderEffect, booleanAttribute, computed, contentChild, input, model, output, signal, viewChild } from '@angular/core';
import { DsButton } from '../button/button';
import { DsIcon } from '../slots/slots';
import { DsSpinner } from '../spinner/spinner';
import { uniqueId } from '../internal/ids';
import { riArrowUpLineIcon, riCloseLineIcon, riCollapseDiagonalLineIcon, riExpandDiagonalLineIcon, riStopLineIcon, riVoiceprintLineIcon } from '../internal/remix';

// Styles live in @helloantek/ds-css (classes ds-ai-composer*); this component renders ds-react's AIChatComposer markup,
// sizes the prompt to its text, highlights /commands and switches from a row to a column when the text no longer fits
// on one line.

/** Figma "Layout": one line (`row`), a text area above the actions (`column`), or `auto` (row until the text wraps). */
export type AIChatComposerLayout = 'auto' | 'row' | 'column';
/** Figma "State": typing, dictating (`recording`) or turning speech into text (`transcribing`). */
export type AIChatComposerState = 'default' | 'recording' | 'transcribing';

/** Figma's sample waveform: quiet at the edges, voiced in the middle (levels 0–1). */
const SAMPLE_LEVELS = [...Array(28).fill(0), 1 / 7, ...[3, 3, 3, 6, 7, 6, 4, 4, 4, 6, 4, 7, 4, 4, 4, 4].map((h) => h / 7), 1 / 7, ...Array(19).fill(0)];

const TOKENS = /(?<=^|\s)\/[\w.-]+/g;

/** Figma "header" (Header=True): attachments above the text; mark it `dsComposerHeader`. It turns the composer into a column. */
@Directive({ selector: '[dsComposerHeader]' })
export class DsComposerHeader {}
/** The leading button, usually a ghost sm `+`: mark it `dsComposerLeading`. */
@Directive({ selector: '[dsComposerLeading]' })
export class DsComposerLeading {}
/** Figma Bar Type=Badges: tool badges after the leading button, marked `dsComposerBadges`; they turn the composer into a column. */
@Directive({ selector: '[dsComposerBadges]' })
export class DsComposerBadges {}
/** The model picker, usually a ghost sm button or `ds-model-picker`: mark it `dsComposerModel`. */
@Directive({ selector: '[dsComposerModel]' })
export class DsComposerModel {}

/**
 * Figma "AI Chat Composer" on a native `<div>`: the prompt box of an AI chat. Enter sends (`(submit)`), Shift+Enter adds
 * a line; `[(value)]`; the leading button, badges, model and header are content marked `dsComposerLeading`,
 * `dsComposerBadges`, `dsComposerModel` and `dsComposerHeader`. `state` dictating (`recording`) or `transcribing`.
 */
@Component({
  selector: 'div[dsAIChatComposer]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DsButton, DsIcon, DsSpinner],
  host: {
    '[class]': 'classes()',
    '[attr.aria-disabled]': 'disabled() || null',
    '[attr.value]': 'null',
    '[attr.placeholder]': 'null',
    '[attr.inputLabel]': 'null',
    '[attr.layout]': 'null',
    '[attr.state]': 'null',
    '[attr.dictate]': 'null',
    '[attr.levels]': 'null',
    '[attr.transcribingLabel]': 'null',
    '[attr.maximize]': 'null',
    '[attr.tokens]': 'null',
    '[attr.submitDisabled]': 'null',
    '[attr.disabled]': 'null',
    '[attr.labels]': 'null',
  },
  template: `
    @if (column() && header()) {
      <div class="ds-ai-composer__header"><ng-content select="[dsComposerHeader]" /></div>
    }
    <div class="ds-ai-composer__field">
      <div #backdrop class="ds-ai-composer__backdrop" aria-hidden="true">@for (part of parts(); track $index) {@if (part.token) {<mark class="ds-ai-composer-token">{{ part.text }}</mark>} @else {{{ part.text }}}}{{ value().endsWith('\\n') ? ' ' : '' }}</div>
      <textarea
        #input
        class="ds-ai-composer__input"
        rows="1"
        [value]="value()"
        [placeholder]="placeholder()"
        [attr.aria-label]="inputLabel()"
        [disabled]="disabled()"
        (input)="value.set($any($event.target).value)"
        (keydown)="onKeyDown($event)"
        (scroll)="syncScroll()"
      ></textarea>
    </div>
    @if (showExpand()) {
      <span class="ds-ai-composer__expand">
        <button dsButton variant="ghost" size="sm" [attr.aria-label]="expanded() ? t().collapse : t().expand" [attr.aria-pressed]="expanded()" (click)="expanded.set(!expanded())">
          @if (expanded()) {
            ${riCollapseDiagonalLineIcon}
          } @else {
            ${riExpandDiagonalLineIcon}
          }
        </button>
      </span>
    }
    <span class="ds-ai-composer__leading">
      @if (recording() || transcribing()) {
        <button dsButton variant="secondary" size="sm" [attr.aria-label]="t().cancelRecording" (click)="cancelRecording.emit()">${riCloseLineIcon}</button>
      } @else {
        <ng-content select="[dsComposerLeading]" />
      }
    </span>
    @if (recording()) {
      <span class="ds-ai-composer__waveform" aria-hidden="true">
        @for (level of levels(); track $index) {
          <i [style.--level]="clamp(level)" [attr.data-voiced]="level > 0.2 ? '' : null"></i>
        }
      </span>
    }
    @if (transcribing()) {
      <span class="ds-ai-composer__status" [id]="statusId" role="status">{{ transcribingLabel() }}</span>
    }
    @if (!recording() && !transcribing() && badges()) {
      <span class="ds-ai-composer__badges"><ng-content select="[dsComposerBadges]" /></span>
    }
    <span class="ds-ai-composer__trailing">
      @if (recording()) {
        <button dsButton variant="secondary" size="sm" [attr.aria-label]="t().stopRecording" (click)="stopRecording.emit()">${riStopLineIcon}</button>
      } @else if (transcribing()) {
        <span class="ds-ai-composer__busy"><span dsSpinner size="sm" decorative></span></span>
      } @else {
        <ng-content select="[dsComposerModel]" />
        @if (dictate()) {
          <button dsButton variant="ghost" size="sm" [attr.aria-label]="t().dictate" [disabled]="disabled()" (click)="dictateStart.emit()">${riVoiceprintLineIcon}</button>
        }
      }
      <button dsButton size="sm" [attr.aria-label]="t().send" [disabled]="!canSubmit()" (click)="send()">${riArrowUpLineIcon}</button>
    </span>
  `,
})
export class DsAIChatComposer {
  /** The prompt, two-way with `[(value)]`. */
  readonly value = model('');
  /** Figma Bar "Placeholder". */
  readonly placeholder = input('Ask about anything…');
  /** Names the prompt for assistive technology. */
  readonly inputLabel = input('Message');
  /** Figma Layout (default `auto`). */
  readonly layout = input<AIChatComposerLayout>('auto');
  /** Figma State (default `default`). */
  readonly state = input<AIChatComposerState>('default');
  /** Figma "Dictate" (default true): the dictate button; it emits `dictate`. */
  readonly dictate = input(true, { transform: booleanAttribute });
  /** Recording: the waveform's levels, 0–1 (default: Figma's sample). */
  readonly levels = input<number[]>(SAMPLE_LEVELS);
  /** Transcribing: the status line. */
  readonly transcribingLabel = input('Transcribing…');
  /** Figma Maximize: `auto` (default) shows the expand button once the text needs scrolling; `false` never. */
  readonly maximize = input<'auto' | boolean>('auto');
  /** Tints /commands in the prompt; `false` turns it off. */
  readonly tokens = input<RegExp | false>(TOKENS);
  /** Disables sending (by default it is disabled while the prompt is empty and there is no header). */
  readonly submitDisabled = input<boolean | undefined>(undefined);
  readonly disabled = input(false, { transform: booleanAttribute });
  /** Button names, for other languages. */
  readonly labels = input<Partial<{ send: string; dictate: string; cancelRecording: string; stopRecording: string; expand: string; collapse: string }>>({});

  /** The prompt on Enter or the send button. */
  readonly submit = output<string>();
  readonly dictateStart = output<void>({ alias: 'dictate' });
  readonly cancelRecording = output<void>();
  readonly stopRecording = output<void>();

  protected readonly t = computed(() => ({ send: 'Send', dictate: 'Dictate', cancelRecording: 'Cancel recording', stopRecording: 'Stop recording', expand: 'Expand', collapse: 'Collapse', ...this.labels() }));
  protected readonly statusId = uniqueId('ds-ai-composer-status');
  protected readonly header = contentChild(DsComposerHeader);
  protected readonly badges = contentChild(DsComposerBadges);
  private readonly textarea = viewChild.required<ElementRef<HTMLTextAreaElement>>('input');
  private readonly backdrop = viewChild.required<ElementRef<HTMLElement>>('backdrop');
  private readonly wraps = signal(false);
  private readonly overflows = signal(false);
  protected readonly expanded = signal(false);
  protected readonly recording = computed(() => this.state() === 'recording');
  protected readonly transcribing = computed(() => this.state() === 'transcribing');
  protected readonly column = computed(() => this.layout() === 'column' || (this.layout() === 'auto' && (!!this.header() || !!this.badges() || this.value().includes('\n') || this.wraps())));
  protected readonly canSubmit = computed(() => !this.disabled() && !(this.submitDisabled() ?? (this.value().trim() === '' && !this.header())));
  protected readonly showExpand = computed(() => this.column() && this.maximize() !== false && (this.maximize() === true || this.overflows() || this.expanded()));
  protected readonly classes = computed(() =>
    ['ds-ai-composer', this.column() && 'ds-ai-composer--column', this.state() !== 'default' && `ds-ai-composer--${this.state()}`, this.expanded() && 'ds-ai-composer--expanded'].filter(Boolean).join(' '),
  );
  /** The prompt in pieces, the /commands marked. */
  protected readonly parts = computed(() => {
    const text = this.value();
    const pattern = this.tokens();
    if (!pattern || !text) return text ? [{ text, token: false }] : [];
    const re = new RegExp(pattern.source, pattern.flags.includes('g') ? pattern.flags : pattern.flags + 'g');
    const out: { text: string; token: boolean }[] = [];
    let last = 0;
    for (const m of text.matchAll(re)) {
      if (!m[0]) continue;
      const i = m.index ?? 0;
      if (i > last) out.push({ text: text.slice(last, i), token: false });
      out.push({ text: m[0], token: true });
      last = i + m[0].length;
    }
    out.push({ text: text.slice(last), token: false });
    return out;
  });

  constructor() {
    // The first value is also the textarea's text content (its default value), as React renders it.
    afterNextRender(() => {
      this.textarea().nativeElement.defaultValue = this.value();
    });
    // Size the prompt to its text (up to 8 lines, 24 expanded) and notice when a row's text wraps.
    afterRenderEffect(() => {
      const value = this.value();
      const column = this.column();
      this.expanded();
      const el = this.textarea().nativeElement;
      el.style.height = 'auto';
      const line = parseFloat(getComputedStyle(el).lineHeight) || 20;
      if (!column && el.scrollHeight > line * 1.5) this.wraps.set(true);
      if (value === '') this.wraps.set(false);
      el.style.height = `${el.scrollHeight}px`;
      this.overflows.set(el.scrollHeight > el.clientHeight + 1);
      this.backdrop().nativeElement.scrollTop = el.scrollTop;
    });
  }

  protected clamp(level: number) {
    return Math.max(0, Math.min(1, level));
  }

  protected syncScroll() {
    this.backdrop().nativeElement.scrollTop = this.textarea().nativeElement.scrollTop;
  }

  protected send() {
    if (this.canSubmit()) this.submit.emit(this.value());
  }

  protected onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey && !event.isComposing) {
      event.preventDefault();
      this.send();
    }
  }
}

/** Figma "AI Chat Composer Token": a /command, e.g. in a sent message: `<mark dsAIChatComposerToken>/summarize</mark>`. */
@Directive({ selector: 'mark[dsAIChatComposerToken]', host: { class: 'ds-ai-composer-token' } })
export class DsAIChatComposerToken {}
