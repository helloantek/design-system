import { ChangeDetectionStrategy, Component, Directive, ElementRef, booleanAttribute, computed, contentChild, input, output, viewChild } from '@angular/core';
import { DsButton } from '../button/button';
import { DsKbd } from '../kbd/kbd';
import { DsIcon, DsLeadingIcon, DsTrailingIcon } from '../slots/slots';
import { uniqueId } from '../internal/ids';
import { riCloseLineIcon, riCornerDownLeftLine, riFileCopyLineIcon, riPauseLineLead, riSparkling2Fill } from '../internal/remix';

// Styles live in @helloantek/ds-css (classes ds-writing-assistant*); this component renders ds-react's WritingAssistant
// markup and behaviour.

/** Where the reply stands. */
export type WritingAssistantStatus = 'idle' | 'streaming' | 'ready';

export interface WritingAssistantLabels {
  title: string;
  description: string;
  close: string;
  selection: string;
  prompt: string;
  suggestions: string;
  stop: string;
  replace: string;
  insertBelow: string;
  copy: string;
}

const LABELS: WritingAssistantLabels = {
  title: 'Writing assistant',
  description: 'Works on the text you selected',
  close: 'Close',
  selection: 'Selected text',
  prompt: 'What should I do with it?',
  suggestions: 'Suggestions',
  stop: 'Stop',
  replace: 'Replace',
  insertBelow: 'Insert below',
  copy: 'Copy',
};

/** The composer at the bottom, usually `<div dsAIChatComposer layout="column">`: mark it `dsWritingAssistantComposer`. */
@Directive({ selector: '[dsWritingAssistantComposer]' })
export class DsWritingAssistantComposer {}

/**
 * Figma pattern "Writing Assistant" on a native `<section>`: an AI panel for writing next to your text. The text you
 * selected (`selection`), suggestions to start from (`(suggestion)`), and a composer (content marked
 * `dsWritingAssistantComposer`). The reply streams in with Stop (`status="streaming"`, `stoppable`), then lands
 * (`status="ready"`) with Replace (also Enter in the panel), Insert below and Copy — each shown when its output is
 * wanted (`replaceable`, `insertable`, `copyable`); `closable` adds Close.
 */
@Component({
  selector: 'section[dsWritingAssistant]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DsButton, DsKbd, DsIcon, DsLeadingIcon, DsTrailingIcon],
  host: {
    class: 'ds-writing-assistant',
    '[attr.aria-label]': 'ariaLabel() ?? null',
    '[attr.aria-labelledby]': 'ariaLabel() === undefined ? id + "-title" : null',
    '[attr.aria-describedby]': 'id + "-description"',
    '[attr.selection]': 'null',
    '[attr.suggestions]': 'null',
    '[attr.ask]': 'null',
    '[attr.reply]': 'null',
    '[attr.status]': 'null',
    '[attr.stoppable]': 'null',
    '[attr.replaceable]': 'null',
    '[attr.insertable]': 'null',
    '[attr.copyable]': 'null',
    '[attr.closable]': 'null',
    '[attr.labels]': 'null',
    '(keydown)': 'onKeyDown($event)',
  },
  template: `
    <header class="ds-writing-assistant__header">
      <span class="ds-writing-assistant__mark" aria-hidden="true">${riSparkling2Fill}</span>
      <span class="ds-writing-assistant__heading">
        <h2 [id]="id + '-title'" class="ds-writing-assistant__title">{{ t().title }}</h2>
        <p [id]="id + '-description'" class="ds-writing-assistant__description">{{ t().description }}</p>
      </span>
      @if (closable()) {
        <button dsButton variant="ghost" size="xs" [attr.aria-label]="t().close" (click)="close.emit()">${riCloseLineIcon}</button>
      }
    </header>
    <div #conversation class="ds-writing-assistant__conversation" tabindex="-1" aria-live="polite" [attr.aria-busy]="status() === 'streaming' || null">
      @if (selection() !== undefined && !ready()) {
        <blockquote class="ds-writing-assistant__selection" [attr.aria-label]="t().selection">{{ selection() }}</blockquote>
      }
      @if (status() === 'idle' && suggestions().length > 0) {
        <div class="ds-writing-assistant__suggestions">
          <p [id]="id + '-prompt'" class="ds-writing-assistant__prompt">{{ t().prompt }}</p>
          <div class="ds-writing-assistant__chips" role="group" [attr.aria-labelledby]="id + '-prompt'">
            @for (item of suggestions(); track item) {
              <button dsButton variant="outline" size="xs" (click)="suggest(item)">{{ item }}</button>
            }
          </div>
        </div>
      }
      @if (ask() !== undefined && status() !== 'idle') {
        <p class="ds-writing-assistant__ask">{{ ask() }}</p>
      }
      @if (status() === 'streaming') {
        <p class="ds-writing-assistant__streaming">{{ reply() }}<span class="ds-writing-assistant__caret" aria-hidden="true"></span></p>
        @if (stoppable()) {
          <div class="ds-writing-assistant__stop">
            <button dsButton variant="outline" size="xs" (click)="stop.emit()">${riPauseLineLead}{{ t().stop }}</button>
          </div>
        }
      }
      @if (ready()) {
        <div class="ds-writing-assistant__result">
          <p class="ds-writing-assistant__reply">{{ reply() }}</p>
          <div class="ds-writing-assistant__actions">
            @if (replaceable()) {
              <button dsButton size="xs" aria-keyshortcuts="Enter" (click)="replace.emit()">{{ t().replace }}<kbd dsKbd dsTrailingIcon size="sm" variant="inverted" label="Enter">${riCornerDownLeftLine}</kbd></button>
            }
            @if (insertable()) {
              <button dsButton variant="outline" size="xs" (click)="insertBelow.emit()">{{ t().insertBelow }}</button>
            }
            @if (copyable()) {
              <button dsButton variant="ghost" size="xs" [attr.aria-label]="t().copy" (click)="copy.emit()">${riFileCopyLineIcon}</button>
            }
          </div>
        </div>
      }
    </div>
    @if (composer()) {
      <div class="ds-writing-assistant__composer"><ng-content select="[dsWritingAssistantComposer]" /></div>
    }
  `,
})
export class DsWritingAssistant {
  /** The text the person selected, quoted at the top while there is no reply yet. */
  readonly selection = input<string>();
  /** Where to start, as Outline xs buttons under "What should I do with it?" (a click emits `suggestion`). */
  readonly suggestions = input<string[]>([]);
  /** What they asked, as a bubble on the right. */
  readonly ask = input<string>();
  /** The reply: streaming in, then ready. */
  readonly reply = input<string>();
  /** Default `idle`. */
  readonly status = input<WritingAssistantStatus>('idle');
  readonly stoppable = input(false, { transform: booleanAttribute });
  readonly replaceable = input(false, { transform: booleanAttribute });
  readonly insertable = input(false, { transform: booleanAttribute });
  readonly copyable = input(false, { transform: booleanAttribute });
  readonly closable = input(false, { transform: booleanAttribute });
  readonly ariaLabel = input<string | undefined>(undefined, { alias: 'aria-label' });
  /** Texts, for other languages. */
  readonly labels = input<Partial<WritingAssistantLabels>>({});

  readonly suggestion = output<string>();
  readonly stop = output<void>();
  /** Replace the selection with the reply (also Enter while the reply is ready). */
  readonly replace = output<void>();
  readonly insertBelow = output<void>();
  readonly copy = output<void>();
  readonly close = output<void>();

  protected readonly id = uniqueId('ds-writing-assistant');
  protected readonly t = computed<WritingAssistantLabels>(() => ({ ...LABELS, ...this.labels() }));
  protected readonly composer = contentChild(DsWritingAssistantComposer);
  private readonly conversation = viewChild.required<ElementRef<HTMLElement>>('conversation');
  protected readonly ready = computed(() => this.status() === 'ready' && this.reply() !== undefined);

  protected suggest(item: string) {
    // The suggestions go once it starts: focus stays in the panel, where Enter will take the reply.
    this.conversation().nativeElement.focus();
    this.suggestion.emit(item);
  }

  protected onKeyDown(event: KeyboardEvent) {
    // Enter takes the reply, unless it is typed into the composer or presses a button.
    const target = event.target as HTMLElement;
    if (!event.defaultPrevented && this.ready() && this.replaceable() && event.key === 'Enter' && !target.closest('textarea, input, button, a, [contenteditable]')) {
      event.preventDefault();
      this.replace.emit();
    }
  }
}
