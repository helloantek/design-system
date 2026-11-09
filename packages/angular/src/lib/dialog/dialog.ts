import { ChangeDetectionStrategy, Component, Directive, ElementRef, afterNextRender, contentChild, effect, inject, input, model, signal, viewChild } from '@angular/core';
import { DsButton } from '../button/button';
import { DsIcon } from '../slots/slots';
import { uniqueId } from '../internal/ids';

// Styles live in @helloantek/ds-css (ds-dialog*); this component renders ds-react's Dialog markup. A native <dialog>
// opened with showModal() (https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/): focus moves inside and stays
// there, the page behind is inert, Escape, the Close button or a click on the backdrop closes it, and focus goes back
// to what opened it.

/** Figma "footer": `<ng-container dsDialogFooter>` around the dialog's actions. */
@Directive({ selector: '[dsDialogFooter]' })
export class DsDialogFooter {}

/**
 * Figma "Dialog": a modal window with a header, any content and a footer of actions.
 *
 *     <ds-dialog title="Edit profile" description="Make changes to your profile.">
 *       <button dsButton dsDialogTrigger variant="outline">Edit profile</button>
 *       <p>…content…</p>
 *       <ng-container dsDialogFooter>
 *         <button dsButton dsDialogClose variant="outline">Cancel</button>
 *         <button dsButton (click)="save()">Save</button>
 *       </ng-container>
 *     </ds-dialog>
 *
 * `dsDialogTrigger` marks the element that opens it (or use `[(open)]`); the rest of the content is Figma "content";
 * `dsDialogFooter` marks Figma "footer", and `dsDialogClose` a button that closes the dialog after its own click
 * (unless that calls `event.preventDefault()`). Without `title`, give the dialog an `aria-label`.
 */
@Component({
  selector: 'ds-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DsButton, DsIcon],
  host: {
    style: 'display: contents',
    '[attr.title]': 'null',
    '[attr.description]': 'null',
    '[attr.aria-label]': 'null',
    '[attr.width]': 'null',
  },
  template: `
    <ng-content select="[dsDialogTrigger]" />
    <dialog
      #dialog
      class="ds-dialog"
      [attr.aria-labelledby]="title() !== undefined ? titleId : null"
      [attr.aria-describedby]="description() !== undefined ? descriptionId : null"
      [attr.aria-label]="ariaLabel() ?? null"
      [style.--dialog-width]="width() ?? null"
      (click)="backdrop($event)"
      (close)="closed()"
    >
      @if (title() !== undefined || description() !== undefined || closeButton()) {
        <div class="ds-dialog__header">
          <div class="ds-dialog__heading">
            @if (title() !== undefined) {
              @switch (titleAs()) {
                @case ('h3') {
                  <h3 [id]="titleId" class="ds-dialog__title">{{ title() }}</h3>
                }
                @case ('p') {
                  <p [id]="titleId" class="ds-dialog__title">{{ title() }}</p>
                }
                @default {
                  <h2 [id]="titleId" class="ds-dialog__title">{{ title() }}</h2>
                }
              }
            }
            @if (description() !== undefined) {
              <p [id]="descriptionId" class="ds-dialog__description">{{ description() }}</p>
            }
          </div>
          @if (closeButton()) {
            <button dsButton variant="ghost" size="sm" class="ds-dialog__close" [attr.aria-label]="closeLabel()" (click)="setOpen(false)">
              <svg dsIcon viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          }
        </div>
      }
      <div #body [class]="bodyPadding() === 'flush' ? 'ds-dialog__body ds-dialog__body--flush' : 'ds-dialog__body'" [hidden]="!hasBody()"><ng-content /></div>
      @if (footer()) {
        <div [class]="footerVariant() === 'muted' ? 'ds-dialog__footer ds-dialog__footer--muted' : 'ds-dialog__footer'"><ng-content select="[dsDialogFooter]" /></div>
      }
    </dialog>
  `,
})
export class DsDialog {
  /** Open state; two-way with `[(open)]`, or let `dsDialogTrigger` open it. */
  readonly open = model(false);
  /** Figma "Title" (16/24 medium); it names the dialog. */
  readonly title = input<string>();
  /** The title's element (`h2` by default). */
  readonly titleAs = input<'h2' | 'h3' | 'p'>('h2');
  /** Figma "Description" (14/20 muted); it describes the dialog. */
  readonly description = input<string>();
  /** Figma "Close button" (default `true`): a Ghost sm button with an x in the header's corner. */
  readonly closeButton = input(true);
  /** The Close button's accessible name. Default "Close". */
  readonly closeLabel = input('Close');
  /** `flush` drops the content's 24 px side padding (media or a layout of its own). */
  readonly bodyPadding = input<'default' | 'flush'>('default');
  /** `muted` puts the footer on the muted fill (the "Sticky footer" demo). */
  readonly footerVariant = input<'default' | 'muted'>('default');
  /** Width (any CSS length; 448 px by default, as in Figma). */
  readonly width = input<string>();
  /** The dialog's name when it has no title. */
  readonly ariaLabel = input<string | undefined>(undefined, { alias: 'aria-label' });

  protected readonly titleId = uniqueId('ds-dialog-title');
  protected readonly descriptionId = uniqueId('ds-dialog-description');
  protected readonly footer = contentChild(DsDialogFooter);
  protected readonly hasBody = signal(true);
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');
  private readonly body = viewChild.required<ElementRef<HTMLElement>>('body');
  private returnFocus: HTMLElement | null = null;

  constructor() {
    // Figma "content" is optional (a confirmation is a title, a description and the actions): like React, no empty body.
    afterNextRender(() => {
      const nodes = Array.from(this.body().nativeElement.childNodes);
      this.hasBody.set(nodes.some((node) => node.nodeType === Node.ELEMENT_NODE || (node.nodeType === Node.TEXT_NODE && node.textContent?.trim())));
    });
    effect(() => {
      const el = this.dialog().nativeElement;
      if (this.open() && !el.open) {
        this.returnFocus = document.activeElement as HTMLElement | null;
        // The browser focuses the first focusable element (or one with autofocus).
        el.showModal();
      } else if (!this.open() && el.open) {
        el.close();
      }
    });
  }

  setOpen(next: boolean) {
    if (next !== this.open()) this.open.set(next);
  }

  // A click on the backdrop lands on the <dialog> itself, outside its box.
  protected backdrop(event: MouseEvent) {
    const el = this.dialog().nativeElement;
    if (event.target !== el || event.defaultPrevented) return;
    const r = el.getBoundingClientRect();
    const inside = event.clientX >= r.left && event.clientX <= r.right && event.clientY >= r.top && event.clientY <= r.bottom;
    if (!inside) this.setOpen(false);
  }

  // Escape, a form with method="dialog" or close(): keep the state in step and give focus back.
  protected closed() {
    this.setOpen(false);
    this.returnFocus?.focus();
    this.returnFocus = null;
  }
}

/** Marks the element that opens the dialog, e.g. `<button dsButton dsDialogTrigger>`; it gets `aria-haspopup`. */
@Directive({
  selector: '[dsDialogTrigger]',
  host: { 'aria-haspopup': 'dialog', '(click)': 'click($event)' },
})
export class DsDialogTrigger {
  private readonly dialog = inject(DsDialog);
  protected click(event: Event) {
    if (!event.defaultPrevented) this.dialog.setOpen(true);
  }
}

/** A button that closes the dialog after its own click (unless that calls `event.preventDefault()`). */
@Directive({
  selector: '[dsDialogClose]',
  host: { '(click)': 'click($event)' },
})
export class DsDialogClose {
  private readonly dialog = inject(DsDialog);
  protected click(event: Event) {
    // After the button's own (click) handlers, which Angular runs first for bindings on the element itself.
    queueMicrotask(() => {
      if (!event.defaultPrevented) this.dialog.setOpen(false);
    });
  }
}
