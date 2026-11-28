import { ChangeDetectionStrategy, Component, DestroyRef, Directive, ElementRef, afterRenderEffect, booleanAttribute, computed, effect, inject, input, model, output, signal, untracked } from '@angular/core';
import { DsBadge } from '../badge/badge';
import { DsButton } from '../button/button';
import { DsKbd, DsKbdGroup } from '../kbd/kbd';
import { DsSelect, type SelectOption } from '../select/select';
import { DsIcon, DsLeadingIcon, DsTrailingIcon } from '../slots/slots';
import { DsSpinner } from '../spinner/spinner';
import { DsToggle } from '../toggle/toggle';
import { DsToggleGroup } from '../toggle-group/toggle-group';
import { uniqueId } from '../internal/ids';
import {
  riArrowGoBackLineLead,
  riCheckLine,
  riClipboardLineHidden,
  riCloseLineHidden,
  riCommandLine,
  riCornerDownLeftLine,
  riDeleteBinLine,
  riPencilLineIcon,
  riRobotLineHidden,
} from '../internal/remix';

// Styles live in @helloantek/ds-css (classes ds-email-draft*); this component renders ds-react's EmailDraft markup and
// behaviour.

/** Where the draft is: to review, sent (Undo for a few seconds) or discarded (Restore). */
export type EmailDraftOutcome = 'draft' | 'sent' | 'discarded';

export interface EmailDraftTone {
  value: string;
  label: string;
}

export interface EmailDraftLabels {
  to: string;
  tone: string;
  edit: string;
  send: string;
  discard: string;
  undo: string;
  restore: string;
  ready: string;
  rewriting: string;
  discarded: string;
  remove: (name: string) => string;
  sent: (recipient: string) => string;
  undoFor: (seconds: number) => string;
}

const LABELS: EmailDraftLabels = {
  to: 'To',
  tone: 'Tone',
  edit: 'Edit the text',
  send: 'Send email',
  discard: 'Discard',
  undo: 'Undo',
  restore: 'Restore',
  ready: 'Ready for review',
  rewriting: 'Rewriting',
  discarded: 'Draft discarded',
  remove: (name) => `Remove ${name}`,
  sent: (recipient) => `Sent to ${recipient}`,
  undoFor: (seconds) => `Undo for ${seconds} s`,
};

const DEFAULT_TONES: EmailDraftTone[] = [
  { value: 'friendly', label: 'Friendly' },
  { value: 'short', label: 'Short' },
  { value: 'formal', label: 'Formal' },
];

/** A badge after the title, e.g. `<span dsBadge dsEmailDraftStatus variant="tint" color="amber">Overdue 12 days</span>`. */
@Directive({ selector: '[dsEmailDraftStatus]' })
export class DsEmailDraftStatus {}

/** Replaces the robot before the agent's name: `<svg dsEmailDraftAgentIcon …>`. */
@Directive({ selector: '[dsEmailDraftAgentIcon]' })
export class DsEmailDraftAgentIcon {}

/**
 * Figma pattern "Email Draft" on a native `<section>`: an email an agent wrote, for you to check before it goes. What
 * it is about (`title`, a `dsEmailDraftStatus` badge, `subtitle`, `amount`), who it goes to (`recipients`,
 * `[(recipient)]`), the attachment, the text (the content, or `text`) to edit in place (`[(text)]`, `[(editing)]`) and
 * its tone (`[(tone)]`). While the agent rewrites it, `rewriting`. Send (⌘↵ in the card) or Discard; `[(outcome)]` folds
 * it to one line with Undo for `undoSeconds`, or with Restore.
 */
@Component({
  selector: 'section[dsEmailDraft]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DsBadge, DsButton, DsKbd, DsKbdGroup, DsSelect, DsIcon, DsLeadingIcon, DsTrailingIcon, DsSpinner, DsToggle, DsToggleGroup],
  host: {
    '[class]': 'classes()',
    '[attr.aria-label]': 'ariaLabel() ?? null',
    '[attr.aria-labelledby]': 'ariaLabel() === undefined ? titleId : null',
    '[attr.title]': 'null',
    '[attr.subtitle]': 'null',
    '[attr.amount]': 'null',
    '[attr.recipients]': 'null',
    '[attr.recipient]': 'null',
    '[attr.attachment]': 'null',
    '[attr.removable]': 'null',
    '[attr.text]': 'null',
    '[attr.editing]': 'null',
    '[attr.tones]': 'null',
    '[attr.tone]': 'null',
    '[attr.rewriting]': 'null',
    '[attr.agent]': 'null',
    '[attr.subject]': 'null',
    '[attr.discardedNote]': 'null',
    '[attr.outcome]': 'null',
    '[attr.undoSeconds]': 'null',
    '[attr.labels]': 'null',
    '(keydown)': 'onKeyDown($event)',
  },
  template: `
    @if (outcome() !== 'draft') {
      <div class="ds-email-draft__line" role="status">
        <span [class]="'ds-email-draft__mark ds-email-draft__mark--' + (outcome() === 'sent' ? 'sent' : 'discarded')" aria-hidden="true">
          @if (outcome() === 'sent') {
            ${riCheckLine}
          } @else {
            ${riDeleteBinLine}
          }
        </span>
        <span class="ds-email-draft__summary">
          <span class="ds-email-draft__title" [id]="titleId">{{ outcome() === 'sent' ? t().sent(name()) : t().discarded }}</span>
          @if (outcome() === 'sent') {
            @if (subject() !== undefined || canUndo()) {
              <span class="ds-email-draft__subtitle">{{ subject() ?? '' }}{{ subject() !== undefined && canUndo() ? ' · ' : '' }}{{ canUndo() ? t().undoFor(left()) : '' }}</span>
            }
          } @else if (discardedNote() !== undefined) {
            <span class="ds-email-draft__subtitle">{{ discardedNote() }}</span>
          }
        </span>
        @if (canUndo()) {
          <button dsButton variant="outline" size="xs" (click)="go('draft', 'undo')">${riArrowGoBackLineLead}{{ t().undo }}</button>
        }
        @if (outcome() === 'discarded') {
          <button dsButton variant="ghost" size="xs" (click)="go('draft', 'restore')">{{ t().restore }}</button>
        }
      </div>
    } @else {
      <header class="ds-email-draft__header">
        <span class="ds-email-draft__about">
          <span class="ds-email-draft__heading">
            <h3 class="ds-email-draft__title" [id]="titleId">{{ title() }}</h3>
            <ng-content select="[dsEmailDraftStatus]" />
          </span>
          @if (subtitle() !== undefined) {
            <span class="ds-email-draft__subtitle">{{ subtitle() }}</span>
          }
        </span>
        @if (amount() !== undefined) {
          <span class="ds-email-draft__amount">{{ amount() }}</span>
        }
      </header>
      <div class="ds-email-draft__to">
        <span class="ds-email-draft__to-label" [id]="toId">{{ t().to }}</span>
        <span class="ds-email-draft__recipient">
          <ds-select size="sm" [options]="recipients()" [value]="currentRecipient()" (valueChange)="recipient.set($any($event))" aria-labelledby="{{ toId }}" />
        </span>
        @if (attachment() !== undefined) {
          <span class="ds-email-draft__attachment">
            ${riClipboardLineHidden}{{ attachment() }}
            @if (removable()) {
              <button type="button" class="ds-email-draft__remove" [attr.aria-label]="t().remove(attachment()!)" (click)="removeAttachment.emit()">${riCloseLineHidden}</button>
            }
          </span>
        }
      </div>
      <div class="ds-email-draft__body" [attr.aria-busy]="rewriting() !== undefined || null">
        @if (rewriting() !== undefined) {
          <p class="ds-email-draft__rewriting" role="status"><span dsSpinner size="sm" decorative></span>{{ rewriting() }}</p>
        }
        @if (editing()) {
          <textarea class="ds-email-draft__editor" [attr.aria-label]="t().edit" [value]="text()" (input)="text.set($any($event.target).value)" (keydown)="onEditorKeyDown($event)">{{ text() }}</textarea>
        } @else {
          <div class="ds-email-draft__text"><ng-content>{{ text() }}</ng-content></div>
        }
        <div class="ds-email-draft__tone">
          <div dsToggleGroup type="single" [spacing]="2" [attr.aria-label]="t().tone" [value]="currentTone()" (valueChange)="setTone($event)">
            @for (option of tones(); track option.value) {
              <button dsToggle [value]="option.value">{{ option.label }}</button>
            }
          </div>
          @if (text() !== undefined && editable()) {
            <button dsButton variant="ghost" size="xs" [attr.aria-label]="t().edit" [attr.aria-pressed]="editing()" (click)="toggleEditing()">${riPencilLineIcon}</button>
          }
        </div>
      </div>
      <footer class="ds-email-draft__footer">
        @if (agent() !== undefined) {
          <ng-content select="[dsEmailDraftAgentIcon]">${riRobotLineHidden}</ng-content>
          <span class="ds-email-draft__agent">{{ agent() }}</span>
        }
        <span dsBadge variant="tint" [color]="rewriting() !== undefined ? 'blue' : 'green'">{{ rewriting() !== undefined ? t().rewriting : t().ready }}</span>
        <button dsButton class="ds-email-draft__discard" variant="ghost" size="sm" (click)="go('discarded', 'discard')">{{ t().discard }}</button>
        <button dsButton size="sm" aria-keyshortcuts="Meta+Enter Control+Enter" (click)="send()">
          {{ t().send }}<kbd dsKbdGroup dsTrailingIcon><kbd dsKbd size="sm" variant="inverted" label="Command">${riCommandLine}</kbd><kbd dsKbd size="sm" variant="inverted" label="Enter">${riCornerDownLeftLine}</kbd></kbd>
        </button>
      </footer>
    }
  `,
})
export class DsEmailDraft {
  /** What it is about: "INV-3021". */
  readonly title = input.required<string>();
  /** Under the title: "Brightline Studio". */
  readonly subtitle = input<string>();
  /** On the right: "€2,400". */
  readonly amount = input<string>();
  /** Who it can go to: `label` is the name, `description` the address. */
  readonly recipients = input.required<SelectOption[]>();
  /** The chosen recipient's value, two-way with `[(recipient)]`; the first by default. */
  readonly recipient = model('');
  /** The attached file's name. */
  readonly attachment = input<string>();
  /** The attachment gets a remove button (it emits `removeAttachment`). */
  readonly removable = input(false, { transform: booleanAttribute });
  /** The text to edit in place, two-way with `[(text)]`; the Edit button shows when there is one (and `editable`). */
  readonly text = model<string | undefined>(undefined);
  /** Offers Edit (the pencil) when there is a `text`. */
  readonly editable = input(true, { transform: booleanAttribute });
  /** Editing in place, two-way with `[(editing)]`. */
  readonly editing = model(false);
  /** Tones to switch between; Friendly, Short and Formal by default. */
  readonly tones = input<EmailDraftTone[]>(DEFAULT_TONES);
  /** The tone, two-way with `[(tone)]`; the first by default. */
  readonly tone = model('');
  /** While the agent rewrites it: what it does, "Rewriting it shorter…". */
  readonly rewriting = input<string>();
  /** Who wrote it: "Billing agent". */
  readonly agent = input<string>();
  /** In the folded line under "Sent to …": "Invoice reminder". */
  readonly subject = input<string>();
  /** Under "Draft discarded". */
  readonly discardedNote = input<string>();
  /** Sent, discarded or not yet; two-way with `[(outcome)]`. */
  readonly outcome = model<EmailDraftOutcome>('draft');
  /** How long Undo stays, in seconds. */
  readonly undoSeconds = input(5);
  readonly ariaLabel = input<string | undefined>(undefined, { alias: 'aria-label' });
  /** Texts, for other languages. */
  readonly labels = input<Partial<EmailDraftLabels>>({});

  readonly sendEmail = output<void>({ alias: 'send' });
  readonly discard = output<void>();
  readonly undo = output<void>();
  readonly restore = output<void>();
  /** Undo ran out: the email goes for good. */
  readonly undoExpire = output<void>();
  readonly removeAttachment = output<void>();

  protected readonly t = computed<EmailDraftLabels>(() => ({ ...LABELS, ...this.labels() }));
  private readonly id = uniqueId('ds-email-draft');
  protected readonly titleId = `${this.id}-title`;
  protected readonly toId = `${this.id}-to`;
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  protected readonly left = signal(5);
  private readonly focusNext = signal<'send' | 'action' | 'editor' | null>(null);
  protected readonly currentRecipient = computed(() => this.recipient() || this.recipients()[0]?.value || '');
  protected readonly currentTone = computed(() => this.tone() || this.tones()[0]?.value || '');
  protected readonly name = computed(() => this.recipients().find((option) => option.value === this.currentRecipient())?.label ?? '');
  protected readonly canUndo = computed(() => this.outcome() === 'sent' && this.left() > 0);
  protected readonly classes = computed(() =>
    this.outcome() !== 'draft'
      ? 'ds-email-draft ds-email-draft--done'
      : ['ds-email-draft', this.rewriting() !== undefined && 'ds-email-draft--rewriting', this.editing() && 'ds-email-draft--editing'].filter(Boolean).join(' '),
  );

  constructor() {
    // Undo counts down once sent; when it runs out the email is gone for good.
    let timer: ReturnType<typeof setInterval> | undefined;
    effect(() => {
      const sent = this.outcome() === 'sent';
      const seconds = this.undoSeconds();
      clearInterval(timer);
      if (!sent) return;
      untracked(() => this.left.set(seconds));
      let n = seconds;
      timer = setInterval(() => {
        n -= 1;
        this.left.set(n);
        if (n <= 0) {
          clearInterval(timer);
          this.undoExpire.emit();
        }
      }, 1000);
    });
    inject(DestroyRef).onDestroy(() => clearInterval(timer));
    // Focus follows the card as it folds and unfolds, and into the field when editing starts.
    afterRenderEffect(() => {
      const next = this.focusNext();
      if (!next) return;
      const el =
        next === 'send'
          ? this.host.querySelector<HTMLElement>('.ds-email-draft__footer > .ds-button:last-child')
          : next === 'action'
            ? this.host.querySelector<HTMLElement>('.ds-email-draft__line .ds-button')
            : this.host.querySelector<HTMLElement>('.ds-email-draft__editor');
      el?.focus();
      this.focusNext.set(null);
    });
  }

  protected setTone(value: string | string[]) {
    if (typeof value === 'string' && value) this.tone.set(value);
  }

  protected toggleEditing() {
    const next = !this.editing();
    this.editing.set(next);
    if (next) this.focusNext.set('editor');
  }

  protected go(next: EmailDraftOutcome, emit: 'send' | 'discard' | 'undo' | 'restore') {
    if (next !== 'draft') this.editing.set(false);
    this.outcome.set(next);
    this.focusNext.set(next === 'draft' ? 'send' : 'action');
    if (emit === 'send') this.sendEmail.emit();
    else if (emit === 'discard') this.discard.emit();
    else if (emit === 'undo') this.undo.emit();
    else this.restore.emit();
  }

  protected send() {
    this.go('sent', 'send');
  }

  protected onKeyDown(event: KeyboardEvent) {
    // ⌘↵ (Ctrl+↵ elsewhere) sends from anywhere in the card.
    if (this.outcome() === 'draft' && event.key === 'Enter' && (event.metaKey || event.ctrlKey) && !event.altKey && !event.shiftKey) {
      event.preventDefault();
      this.send();
    }
  }

  protected onEditorKeyDown(event: KeyboardEvent) {
    // Escape leaves the field and goes back to the text as it reads.
    if (event.key === 'Escape') {
      event.preventDefault();
      this.editing.set(false);
    }
  }
}
