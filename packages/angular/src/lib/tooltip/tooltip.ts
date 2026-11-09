import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, afterNextRender, contentChild, effect, inject, input, model, viewChild } from '@angular/core';
import type { PopupSide } from '@helloantek/ds-core';
import { DsIcon } from '../slots/slots';
import { uniqueId } from '../internal/ids';
import { popupPlacement } from '../internal/placement';

// Styles live in @helloantek/ds-css (ds-tooltip*); this component renders ds-react's Tooltip markup and the WAI-ARIA
// tooltip behaviour (https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/): the trigger is described by the tooltip,
// which shows on hover (after a short delay) or keyboard focus, stays while the pointer is over it, and Escape hides it.

/** Figma "Side": where the tooltip sits around its trigger. */
export type TooltipSide = PopupSide;

/**
 * Figma "Tooltip" around its trigger:
 *
 *     <ds-tooltip content="Refund this payment"><button dsButton variant="outline">Refund</button></ds-tooltip>
 *     <ds-tooltip content="Search payments" [shortcut]="['⌘', 'K']" side="bottom">…</ds-tooltip>
 *
 * The trigger (the first projected element) must take focus; it keeps its own name and is described by the tooltip.
 * `dsIcon` marks Figma's Leading slot. The element itself takes no space (`display: contents`).
 */
@Component({
  selector: 'ds-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    style: 'display: contents',
    '[attr.content]': 'null',
    '[attr.side]': 'null',
    '[attr.delay]': 'null',
    '[attr.open]': 'null',
  },
  template: `
    <span #anchor class="ds-tooltip-anchor" (mouseenter)="hover()" (mouseleave)="setOpen(false)" (focusin)="focus($event)" (focusout)="setOpen(false)" (keydown)="key($event)">
      <ng-content />
      <span #tip [id]="tipId" role="tooltip" [class]="'ds-tooltip ds-tooltip--' + placed()" [hidden]="!open()">
        @if (icon()) {
          <span class="ds-tooltip__icon" aria-hidden="true"><ng-content select="[dsIcon]" /></span>
        }
        <span class="ds-tooltip__text">{{ content() }}</span>
        @if (shortcut()?.length) {
          <span class="ds-tooltip__keys">
            @for (key of shortcut(); track $index) {
              <kbd class="ds-tooltip__kbd">{{ key }}</kbd>
            }
          </span>
        }
      </span>
    </span>
  `,
})
export class DsTooltip {
  /** Figma "Label": short help for the trigger. */
  readonly content = input.required<string>();
  /** Figma Side (default `top`). */
  readonly side = input<TooltipSide>('top');
  /** Figma "Trailing slot" with a Kbd Group: the keys of the trigger's shortcut, e.g. `['⌘', 'K']`. */
  readonly shortcut = input<string[]>();
  /** Milliseconds the pointer rests on the trigger before the tooltip shows (keyboard focus shows it at once). */
  readonly delay = input(500);
  /** Open state; two-way with `[(open)]`, or set it for documentation. */
  readonly open = model(false);

  protected readonly tipId = uniqueId('ds-tooltip');
  protected readonly icon = contentChild(DsIcon, { descendants: false });
  private readonly anchor = viewChild.required<ElementRef<HTMLElement>>('anchor');
  private readonly tip = viewChild.required<ElementRef<HTMLElement>>('tip');
  protected readonly placed = popupPlacement(() => this.tip()?.nativeElement, () => this.open(), () => this.side());
  private timer: ReturnType<typeof setTimeout> | undefined;

  constructor() {
    // The trigger is described by the tooltip.
    afterNextRender(() => {
      const trigger = this.trigger();
      if (!trigger) return;
      const ids = (trigger.getAttribute('aria-describedby') ?? '').split(/\s+/).filter(Boolean);
      if (!ids.includes(this.tipId)) trigger.setAttribute('aria-describedby', [...ids, this.tipId].join(' '));
    });
    // Escape hides it wherever focus is, as the pointer may be resting on the trigger without focusing it.
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') this.setOpen(false);
    };
    effect((onCleanup) => {
      if (!this.open()) return;
      document.addEventListener('keydown', onKey);
      onCleanup(() => document.removeEventListener('keydown', onKey));
    });
    inject(DestroyRef).onDestroy(() => clearTimeout(this.timer));
  }

  private trigger() {
    const first = this.anchor().nativeElement.firstElementChild;
    return first && first !== this.tip().nativeElement ? (first as HTMLElement) : null;
  }

  protected setOpen(next: boolean) {
    clearTimeout(this.timer);
    if (next !== this.open()) this.open.set(next);
  }

  protected hover() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.setOpen(true), this.delay());
  }

  // Keyboard focus only: a click also focuses the button, and the tooltip would then cover the next step.
  protected focus(event: FocusEvent) {
    if ((event.target as HTMLElement).matches(':focus-visible')) this.setOpen(true);
  }

  // Escape on the trigger hides only the tooltip, not e.g. a dialog around it.
  protected key(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.open()) {
      event.stopPropagation();
      this.setOpen(false);
    }
  }
}
