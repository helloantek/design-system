import { ChangeDetectionStrategy, Component, DestroyRef, Directive, booleanAttribute, computed, contentChild, contentChildren, inject, input, model, output, signal } from '@angular/core';
import { DsButton } from '../button/button';
import { DsIcon, DsLeadingIcon } from '../slots/slots';
import { DsSpinner } from '../spinner/spinner';
import { uniqueId } from '../internal/ids';
import { riArrowDownSLine, riArrowRightSLine, riCheckLine, riCheckLineHidden, riCheckLineIcon, riCheckLineLead, riCloseLine, riCloseLineHidden, riFileCopyLineIcon, riFileCopyLineLead, riRefreshLineLead } from '../internal/remix';

// Styles live in @helloantek/ds-css (classes ds-tool-call*); these components render ds-react's ToolCall and
// ToolCallGroup markup and behaviour.

/** Where the call stands. */
export type ToolCallStatus = 'running' | 'done' | 'error';

/** The 16 px icon of a tool: `<svg dsToolCallIcon …>`. */
@Directive({ selector: '[dsToolCallIcon]' })
export class DsToolCallIcon {}

type Labels = { arguments: string; result: string; error: string; waiting: string; retry: string; copy: string; copyError: string; copied: string; running: string; done: string; failed: string };

/**
 * Figma pattern "Tool Call Card" on a native `<div>`: one tool call, a line that opens to its arguments and result.
 *
 *     <div dsToolCall name="search_web" summary="Searching the web…" status="running" duration="1.4 s" [args]="json">
 *       <svg dsToolCallIcon …></svg>
 *     </div>
 *
 * `[(open)]`; a failed call starts open, with the error, Retry (`retryable`, `(retry)`) and Copy error.
 */
@Component({
  selector: 'div[dsToolCall]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DsButton, DsSpinner, DsIcon, DsLeadingIcon],
  host: {
    '[class]': 'classes()',
    '[attr.name]': 'null',
    '[attr.summary]': 'null',
    '[attr.status]': 'null',
    '[attr.duration]': 'null',
    '[attr.args]': 'null',
    '[attr.result]': 'null',
    '[attr.error]': 'null',
    '[attr.retryable]': 'null',
    '[attr.open]': 'null',
  },
  template: `
    <button type="button" class="ds-tool-call__trigger" [attr.aria-expanded]="isOpen()" [attr.aria-controls]="id + '-details'" (click)="toggle()">
      @if (icon()) {
        <span class="ds-tool-call__icon" aria-hidden="true"><ng-content select="[dsToolCallIcon]" /></span>
      }
      <code class="ds-tool-call__name">{{ name() }}</code>
      @if (summary() !== undefined) {
        <span class="ds-tool-call__summary">{{ summary() }}</span>
      } @else {
        <span class="ds-tool-call__summary"></span>
      }
      <span [class]="'ds-tool-call__status ds-tool-call__status--' + status()" role="img" [attr.aria-label]="statusText()">
        @switch (status()) {
          @case ('running') {
            <span dsSpinner size="sm" decorative></span>
          }
          @case ('error') {
            ${riCloseLineHidden}
          }
          @default {
            ${riCheckLineHidden}
          }
        }
      </span>
      @if (duration() !== undefined) {
        <span class="ds-tool-call__time">{{ duration() }}</span>
      }
      <span class="ds-tool-call__chevron" aria-hidden="true">
        @if (isOpen()) {
          ${riArrowDownSLine}
        } @else {
          ${riArrowRightSLine}
        }
      </span>
    </button>
    <div class="ds-tool-call__details" [id]="id + '-details'" [hidden]="!isOpen()">
      @if (args() !== undefined) {
        <div role="group" class="ds-tool-call__section" [attr.aria-labelledby]="id + '-args'">
          <div class="ds-tool-call__label">
            <h4 [id]="id + '-args'">{{ t().arguments }}</h4>
            @if (copied() === 'args') {
              <button dsButton variant="ghost" size="xs" [attr.aria-label]="t().copied" (click)="copy('args', args()!)">${riCheckLineIcon}</button>
            } @else {
              <button dsButton variant="ghost" size="xs" [attr.aria-label]="t().copy + ' ' + t().arguments.toLowerCase()" (click)="copy('args', args()!)">${riFileCopyLineIcon}</button>
            }
          </div>
          <pre class="ds-tool-call__code">{{ args() }}</pre>
        </div>
      }
      @if (error() !== undefined) {
        <div role="group" class="ds-tool-call__section" [attr.aria-labelledby]="id + '-error'">
          <div class="ds-tool-call__label">
            <h4 [id]="id + '-error'">{{ t().error }}</h4>
          </div>
          <pre class="ds-tool-call__code ds-tool-call__code--error">{{ error() }}</pre>
        </div>
        <div class="ds-tool-call__actions">
          @if (retryable()) {
            <button dsButton variant="outline" size="xs" (click)="retry.emit()">${riRefreshLineLead}{{ t().retry }}</button>
          }
          @if (copied() === 'error') {
            <button dsButton variant="ghost" size="xs" (click)="copy('error', error()!)">${riCheckLineLead}{{ t().copied }}</button>
          } @else {
            <button dsButton variant="ghost" size="xs" (click)="copy('error', error()!)">${riFileCopyLineLead}{{ t().copyError }}</button>
          }
        </div>
      } @else if (result() !== undefined || status() === 'running') {
        <div role="group" class="ds-tool-call__section" [attr.aria-labelledby]="id + '-result'">
          <div class="ds-tool-call__label">
            <h4 [id]="id + '-result'">{{ t().result }}</h4>
            @if (result() !== undefined) {
              @if (copied() === 'result') {
              <button dsButton variant="ghost" size="xs" [attr.aria-label]="t().copied" (click)="copy('result', result()!)">${riCheckLineIcon}</button>
            } @else {
              <button dsButton variant="ghost" size="xs" [attr.aria-label]="t().copy + ' ' + t().result.toLowerCase()" (click)="copy('result', result()!)">${riFileCopyLineIcon}</button>
            }
            }
          </div>
          @if (result() !== undefined) {
            <pre class="ds-tool-call__code">{{ result() }}</pre>
          } @else {
            <div class="ds-tool-call__code ds-tool-call__waiting" role="status"><span dsSpinner size="sm" decorative></span>{{ t().waiting }}</div>
          }
        </div>
      }
    </div>
  `,
})
export class DsToolCall {
  /** The tool's name, shown in Mono: "search_web". */
  readonly name = input.required<string>();
  /** What it does or did: "12 open deals · €184k". */
  readonly summary = input<string>();
  /** Defaults to `done`. */
  readonly status = input<ToolCallStatus>('done');
  /** How long it has run or took: "1.4 s". */
  readonly duration = input<string>();
  /** The arguments (usually JSON), with Copy. */
  readonly args = input<string>();
  /** The result, with Copy; while running, "Waiting for the result…". */
  readonly result = input<string>();
  /** The error, in red, with Retry (when `retryable`) and Copy error. */
  readonly error = input<string>();
  /** Shows Retry next to the error (it emits `retry`). */
  readonly retryable = input(false, { transform: booleanAttribute });
  /** Open state, two-way with `[(open)]`; a failed call starts open. */
  readonly open = model<boolean | undefined>(undefined);
  /** Texts, for other languages. */
  readonly labels = input<Partial<Labels>>({});
  readonly retry = output<void>();

  protected readonly id = uniqueId('ds-tool-call');
  protected readonly icon = contentChild(DsToolCallIcon, { descendants: false });
  protected readonly copied = signal<'args' | 'result' | 'error' | null>(null);
  private timer: ReturnType<typeof setTimeout> | undefined;
  protected readonly t = computed<Labels>(() => ({
    arguments: 'Arguments',
    result: 'Result',
    error: 'Error',
    waiting: 'Waiting for the result…',
    retry: 'Retry',
    copy: 'Copy',
    copyError: 'Copy error',
    copied: 'Copied',
    running: 'running',
    done: 'done',
    failed: 'failed',
    ...this.labels(),
  }));
  protected readonly isOpen = computed(() => this.open() ?? this.status() === 'error');
  protected readonly statusText = computed(() => (this.status() === 'running' ? this.t().running : this.status() === 'error' ? this.t().failed : this.t().done));
  protected readonly classes = computed(() => ['ds-tool-call', this.status() === 'error' && 'ds-tool-call--error', this.isOpen() && 'ds-tool-call--open'].filter(Boolean).join(' '));

  constructor() {
    inject(DestroyRef).onDestroy(() => clearTimeout(this.timer));
  }

  protected toggle() {
    this.open.set(!this.isOpen());
  }

  // Copies the text and says so for a moment; a blocked clipboard leaves the button as it is.
  protected async copy(which: 'args' | 'result' | 'error', text: string) {
    try {
      await navigator.clipboard.writeText(text);
      this.copied.set(which);
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.copied.set(null), 1500);
    } catch {}
  }
}

type GroupLabels = { running: string; calls: (n: number) => string; used: (n: number) => string; failed: (n: number) => string };

/**
 * The tool calls of one turn on a native `<div>`: while `running` a line ("Using tools…") over the calls as cards;
 * then a card that sums them up ("4 tool calls · 2.4 s · 1 failed") and folds to one line ("Used 4 tools").
 *
 *     <div dsToolCallGroup duration="2.4 s" [failed]="1"><div dsToolCall …></div>…</div>
 */
@Component({
  selector: 'div[dsToolCallGroup]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    '[attr.status]': 'null',
    '[attr.duration]': 'null',
    '[attr.failed]': 'null',
    '[attr.open]': 'null',
  },
  template: `
    <button type="button" class="ds-tool-call-group__trigger" [attr.aria-expanded]="isOpen()" [attr.aria-controls]="id + '-calls'" (click)="open.set(!isOpen())">
      @if (running() && icon()) {
        <span class="ds-tool-call__icon" aria-hidden="true"><ng-content select="[dsToolCallIcon]" /></span>
      }
      @if (!running() && !isOpen()) {
        <span [class]="'ds-tool-call__status ds-tool-call__status--' + (failed() > 0 ? 'error' : 'done')" aria-hidden="true">
          @if (failed() > 0) {
            ${riCloseLine}
          } @else {
            ${riCheckLine}
          }
        </span>
      }
      <span class="ds-tool-call-group__title">{{ title() }}</span>
      <span class="ds-tool-call-group__meta">
        @for (m of meta(); track $index) {
          <span>· {{ m }} </span>
        }
      </span>
      <span class="ds-tool-call__chevron" aria-hidden="true">
        @if (isOpen()) {
          ${riArrowDownSLine}
        } @else {
          ${riArrowRightSLine}
        }
      </span>
    </button>
    <div class="ds-tool-call-group__calls" [id]="id + '-calls'" [hidden]="!isOpen()"><ng-content /></div>
  `,
})
export class DsToolCallGroup {
  /** `running` shows a plain line over the calls as cards; `done` and `error` a card that sums them up. */
  readonly status = input<ToolCallStatus>('done');
  /** How long they took together: "2.4 s". */
  readonly duration = input<string>();
  /** How many failed; shown as "· 1 failed". */
  readonly failed = input(0);
  /** Open state, two-way with `[(open)]`. A finished group starts folded to one line. */
  readonly open = model<boolean | undefined>(undefined);
  /** Texts, for other languages. */
  readonly labels = input<Partial<GroupLabels>>({});

  protected readonly id = uniqueId('ds-tool-call-group');
  protected readonly icon = contentChild(DsToolCallIcon, { descendants: false });
  private readonly calls = contentChildren(DsToolCall);
  protected readonly running = computed(() => this.status() === 'running');
  protected readonly isOpen = computed(() => this.open() ?? this.running());
  private readonly t = computed<GroupLabels>(() => ({
    running: 'Using tools…',
    calls: (n) => `${n} tool ${n === 1 ? 'call' : 'calls'}`,
    used: (n) => `Used ${n} ${n === 1 ? 'tool' : 'tools'}`,
    failed: (n) => `${n} failed`,
    ...this.labels(),
  }));
  protected readonly title = computed(() => {
    const n = this.calls().length;
    return this.running() ? this.t().running : this.isOpen() ? this.t().calls(n) : this.t().used(n);
  });
  protected readonly meta = computed(() => [this.duration(), this.failed() > 0 ? this.t().failed(this.failed()) : undefined].filter((m): m is string => m !== undefined));
  protected readonly classes = computed(() =>
    ['ds-tool-call-group', this.isOpen() && 'ds-tool-call-group--open', this.running() && 'ds-tool-call-group--running'].filter(Boolean).join(' '),
  );
}
