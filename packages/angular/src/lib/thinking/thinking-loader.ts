import { ChangeDetectionStrategy, Component, booleanAttribute, computed, input, output } from '@angular/core';
import { DsButton } from '../button/button';
import { DsSpinner } from '../spinner/spinner';
import { riCheckLineHidden, riTimeLineHidden } from '../internal/remix';

// Styles live in @helloantek/ds-css (classes ds-thinking*); this component renders ds-react's ThinkingLoader markup.

/** Where the reply stands: working, taking longer than usual (with Stop), done, or stopped. */
export type ThinkingLoaderStatus = 'thinking' | 'slow' | 'done' | 'stopped';

/**
 * Figma pattern "Thinking Loader" on a native `<div>`: the small pill an AI reply shows before its first word.
 *
 *     <div dsThinkingLoader>Reading 4 files…</div>
 *     <div dsThinkingLoader status="slow" elapsed="0:48" (stop)="stop()"></div>     ("Taking longer than usual")
 *
 * What it is doing (the content) is read out when it changes. Slow, Stop shows unless `[stoppable]="false"`.
 */
@Component({
  selector: 'div[dsThinkingLoader]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DsButton, DsSpinner],
  host: { '[class]': 'classes()', '[attr.status]': 'null', '[attr.elapsed]': 'null', '[attr.stoppable]': 'null', '[attr.labels]': 'null' },
  template: `
    @switch (status()) {
      @case ('done') {
        ${riCheckLineHidden}
      }
      @case ('stopped') {
        ${riTimeLineHidden}
      }
      @default {
        <span dsSpinner size="sm" decorative></span>
      }
    }
    <span class="ds-thinking__label" role="status"
      ><ng-content
        >@if (status() === 'slow') {{{ t().slow }}}</ng-content
      ></span
    >
    @if (status() === 'slow' && elapsed() !== undefined) {
      <span class="ds-thinking__time">· {{ elapsed() }}</span>
    }
    @if (status() === 'slow' && stoppable()) {
      <button dsButton variant="secondary" size="xs" (click)="stop.emit()">{{ t().stop }}</button>
    }
  `,
})
export class DsThinkingLoader {
  /** Defaults to `thinking`. */
  readonly status = input<ThinkingLoaderStatus>('thinking');
  /** How long it has run, after the words when `slow`: "0:48". */
  readonly elapsed = input<string>();
  /** Slow, it offers Stop (`(stop)`); `false` to leave it out. */
  readonly stoppable = input(true, { transform: booleanAttribute });
  /** Texts, for other languages. */
  readonly labels = input<Partial<{ slow: string; stop: string }>>({});
  readonly stop = output<void>();

  protected readonly t = computed(() => ({ slow: 'Taking longer than usual', stop: 'Stop', ...this.labels() }));
  protected readonly classes = computed(() => `ds-thinking ds-thinking--${this.status()}`);
}
