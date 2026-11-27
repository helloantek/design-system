import { ChangeDetectionStrategy, Component, DestroyRef, booleanAttribute, computed, inject, input, model, output, signal } from '@angular/core';
import { DsButton } from '../button/button';
import { DsPopover, DsPopoverClose, DsPopoverTrigger } from '../popover/popover';
import { DsIcon } from '../slots/slots';
import { DsToggle } from '../toggle/toggle';
import {
  riArrowLeftSLineIcon,
  riArrowRightSLineIcon,
  riCheckLineIcon,
  riFileCopyLineIcon,
  riPauseLineIcon,
  riRefreshLineIcon,
  riThumbDownLineIcon,
  riThumbUpLineIcon,
  riVolumeUpLineIcon,
} from '../internal/remix';

// Styles live in @helloantek/ds-css (classes ds-message-actions*); this component renders ds-react's MessageActions
// markup and behaviour.

/** How the reader rated the answer. */
export type MessageRating = 'up' | 'down' | null;

export interface MessageActionsLabels {
  group: string;
  copy: string;
  copied: string;
  regenerate: string;
  previous: string;
  next: string;
  /** "2 / 3". */
  version: (current: number, total: number) => string;
  /** Read by screen readers for the version: "Version 2 of 3". */
  versionName: (current: number, total: number) => string;
  good: string;
  bad: string;
  whatWasWrong: string;
  readAloud: string;
}

const LABELS: MessageActionsLabels = {
  group: 'Message actions',
  copy: 'Copy',
  copied: 'Copied',
  regenerate: 'Regenerate',
  previous: 'Previous version',
  next: 'Next version',
  version: (current, total) => `${current} / ${total}`,
  versionName: (current, total) => `Version ${current} of ${total}`,
  good: 'Good response',
  bad: 'Bad response',
  whatWasWrong: 'What was wrong?',
  readAloud: 'Read aloud',
};

/** The reasons thumbs down offers by default. */
export const MESSAGE_FEEDBACK_REASONS = ['Not true', 'Not helpful', 'Too long', 'Other…'];

/**
 * Figma pattern "Message Actions" on a native `<div>`: the quiet bar under an AI message.
 *
 *     <div dsMessageActions [copyText]="answer" regenerable (regenerate)="again()" [version]="2" [versions]="3"
 *          (versionChange)="show($event)" [(rating)]="rating" (reason)="tell($event)" readAloud [(reading)]="reading"></div>
 *
 * Copy turns into a check for 2 s; thumbs down asks what was wrong in a Popover (`reasons`); reading aloud shows a
 * wave, `readTime` and Pause. Other actions (Ghost Buttons, size sm, icon only) go in the content, at the end.
 */
@Component({
  selector: 'div[dsMessageActions]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DsButton, DsIcon, DsToggle, DsPopover, DsPopoverTrigger, DsPopoverClose],
  host: {
    class: 'ds-message-actions',
    role: 'group',
    '[attr.aria-label]': 'ariaLabel() ?? t().group',
    '[attr.copyText]': 'null',
    '[attr.regenerable]': 'null',
    '[attr.version]': 'null',
    '[attr.versions]': 'null',
    '[attr.rating]': 'null',
    '[attr.reasons]': 'null',
    '[attr.readAloud]': 'null',
    '[attr.reading]': 'null',
    '[attr.readTime]': 'null',
    '[attr.labels]': 'null',
  },
  template: `
    <button dsButton variant="ghost" size="sm" [class.ds-message-actions__copied]="copied()" [attr.aria-label]="copied() ? t().copied : t().copy" (click)="copy()">
      @if (copied()) {
        ${riCheckLineIcon}
      } @else {
        ${riFileCopyLineIcon}
      }
    </button>
    @if (regenerable()) {
      <button dsButton variant="ghost" size="sm" [attr.aria-label]="t().regenerate" (click)="regenerate.emit()">${riRefreshLineIcon}</button>
    }
    @if (showVersions()) {
      <span class="ds-message-actions__versions" role="group" [attr.aria-label]="t().versionName(version()!, versions()!)">
        <button dsButton variant="ghost" size="sm" [attr.aria-label]="t().previous" [disabled]="version()! <= 1" (click)="versionChange.emit(version()! - 1)">${riArrowLeftSLineIcon}</button>
        <span class="ds-message-actions__version" aria-hidden="true">{{ t().version(version()!, versions()!) }}</span>
        <button dsButton variant="ghost" size="sm" [attr.aria-label]="t().next" [disabled]="version()! >= versions()!" (click)="versionChange.emit(version()! + 1)">${riArrowRightSLineIcon}</button>
      </span>
    }
    <button dsToggle size="sm" [attr.aria-label]="t().good" [pressed]="rating() === 'up'" (pressedChange)="rate($event ? 'up' : null)">${riThumbUpLineIcon}</button>
    @if (reasons().length > 0) {
      <div dsPopover [title]="t().whatWasWrong" align="start" [open]="asking()" (openChange)="!$event && asking.set(false)">
        <button dsToggle dsPopoverTrigger size="sm" [attr.aria-label]="t().bad" [pressed]="rating() === 'down'" (click)="$event.preventDefault()" (pressedChange)="rate($event ? 'down' : null)">${riThumbDownLineIcon}</button>
        <div class="ds-message-actions__reasons">
          @for (item of reasons(); track item) {
            <button dsButton variant="outline" size="sm" dsPopoverClose (click)="reason.emit(item)">{{ item }}</button>
          }
        </div>
      </div>
    } @else {
      <button dsToggle size="sm" [attr.aria-label]="t().bad" [pressed]="rating() === 'down'" (pressedChange)="rate($event ? 'down' : null)">${riThumbDownLineIcon}</button>
    }
    @if (readAloud()) {
      <button dsToggle size="sm" [class.ds-message-actions__reading]="reading()" [attr.aria-label]="t().readAloud" [pressed]="reading()" (pressedChange)="reading.set($event)">
        @if (reading()) {
          ${riPauseLineIcon}
        } @else {
          ${riVolumeUpLineIcon}
        }
      </button>
      @if (reading()) {
        <span class="ds-message-actions__wave" aria-hidden="true">
          @for (bar of wave; track $index) {
            <span></span>
          }
        </span>
        @if (readTime() !== undefined) {
          <span class="ds-message-actions__time">{{ readTime() }}</span>
        }
      }
    }
    <ng-content />
    <span class="ds-message-actions__status" role="status">{{ copied() ? t().copied : '' }}</span>
  `,
})
export class DsMessageActions {
  /** The text Copy puts on the clipboard. */
  readonly copyText = input<string>();
  /** Shows Regenerate (it emits `regenerate`). */
  readonly regenerable = input(false, { transform: booleanAttribute });
  /** With more than one version: ‹ 2 / 3 › between them (1-based). */
  readonly version = input<number>();
  readonly versions = input<number>();
  /** Thumbs up or down, two-way with `[(rating)]`. Pressing the pressed one again takes the rating back. */
  readonly rating = model<MessageRating>(null);
  /** Thumbs down asks what was wrong with these; `[]` asks nothing. */
  readonly reasons = input<string[]>(MESSAGE_FEEDBACK_REASONS);
  /** Shows Read aloud. */
  readonly readAloud = input(false, { transform: booleanAttribute });
  /** While it reads: a wave, `readTime` and Pause; two-way with `[(reading)]`. */
  readonly reading = model(false);
  /** How far it has read: "0:07". */
  readonly readTime = input<string>();
  /** The group's name; "Message actions" by default. */
  readonly ariaLabel = input<string | undefined>(undefined, { alias: 'aria-label' });
  /** Texts, for other languages. */
  readonly labels = input<Partial<MessageActionsLabels>>({});

  /** Copy was pressed (after `copyText` is written, if given). */
  readonly copied$ = output<void>({ alias: 'copy' });
  readonly regenerate = output<void>();
  readonly versionChange = output<number>();
  /** The reason picked after thumbs down. */
  readonly reason = output<string>();

  protected readonly t = computed<MessageActionsLabels>(() => ({ ...LABELS, ...this.labels() }));
  protected readonly showVersions = computed(() => this.version() !== undefined && this.versions() !== undefined && this.versions()! > 1);
  protected readonly copied = signal(false);
  protected readonly asking = signal(false);
  protected readonly wave = Array.from({ length: 8 });
  private timer: ReturnType<typeof setTimeout> | undefined;

  constructor() {
    inject(DestroyRef).onDestroy(() => clearTimeout(this.timer));
  }

  protected rate(next: MessageRating) {
    this.rating.set(next);
    this.asking.set(next === 'down' && this.reasons().length > 0);
  }

  protected copy() {
    // The check shows at once: the clipboard can answer late, never (no permission yet) or with a refusal.
    const text = this.copyText();
    if (text !== undefined) navigator.clipboard?.writeText(text).catch(() => {});
    this.copied$.emit();
    this.copied.set(true);
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.copied.set(false), 2000);
  }
}
