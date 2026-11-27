import { ChangeDetectionStrategy, Component, DestroyRef, Directive, ElementRef, computed, effect, inject, input, model, viewChild } from '@angular/core';
import { uniqueId } from '../internal/ids';
import { popupPlacement } from '../internal/placement';

// Styles live in @helloantek/ds-css (classes ds-popover*); these components render ds-react's Popover markup and
// behaviour.

/** Where the panel opens, 4 px from the trigger. */
export type PopoverSide = 'bottom' | 'top' | 'left' | 'right';
/** How the panel lines up with the trigger along that side. */
export type PopoverAlign = 'center' | 'start' | 'end';

const FOCUSABLE = 'button:not([disabled]), [href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Figma "Popover" on a native `<div>`: a non-modal panel (`role="dialog"`) that opens from its trigger (marked
 * `dsPopoverTrigger`). Focus moves into it; Escape closes it and returns focus to the trigger; a click outside or
 * focus leaving it closes it too. The rest of the content is the panel's body.
 *
 *     <div dsPopover title="Dimensions" description="Set the dimensions for the layer." [(open)]="open">
 *       <button dsButton variant="outline" dsPopoverTrigger>Open popover</button>
 *       …fields…
 *       <div dsPopoverActions><button dsButton dsPopoverClose>Done</button></div>
 *     </div>
 */
@Component({
  selector: 'div[dsPopover]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'ds-popover',
    '[attr.title]': 'null',
    '[attr.description]': 'null',
    '[attr.open]': 'null',
    '[attr.side]': 'null',
    '[attr.align]': 'null',
    '[attr.width]': 'null',
    '[attr.aria-label]': 'null',
    '[attr.panelClass]': 'null',
  },
  template: `
    <ng-content select="[dsPopoverTrigger]" />
    <div
      #panel
      [id]="panelId"
      role="dialog"
      tabindex="-1"
      [attr.aria-labelledby]="title() !== undefined ? id + '-title' : null"
      [attr.aria-label]="title() === undefined ? (ariaLabel() ?? null) : null"
      [attr.aria-describedby]="description() !== undefined ? id + '-description' : null"
      [hidden]="!open()"
      [class]="panelClasses()"
      [style.--popover-width]="width() ?? null"
      (keydown)="onKeyDown($event)"
    >
      @if (title() !== undefined || description() !== undefined) {
        <div class="ds-popover__header">
          @if (title() !== undefined) {
            <h2 [id]="id + '-title'" class="ds-popover__title">{{ title() }}</h2>
          }
          @if (description() !== undefined) {
            <p [id]="id + '-description'" class="ds-popover__description">{{ description() }}</p>
          }
        </div>
      }
      <div class="ds-popover__body"><ng-content /></div>
    </div>
  `,
})
export class DsPopover {
  /** Figma "header" Title: names the panel. Without it, give `aria-label`. */
  readonly title = input<string>();
  /** Figma "header" Description. */
  readonly description = input<string>();
  /** Open state, two-way with `[(open)]`. */
  readonly open = model(false);
  /** Default `bottom`. */
  readonly side = input<PopoverSide>('bottom');
  /** Default `center`. */
  readonly align = input<PopoverAlign>('center');
  /** Panel width (any CSS length; default 288 px, as in Figma). */
  readonly width = input<string>();
  /** The panel's name when there is no `title`. */
  readonly ariaLabel = input<string | undefined>(undefined, { alias: 'aria-label' });
  /** Classes for the panel. */
  readonly panelClass = input<string>();

  protected readonly id = uniqueId('ds-popover');
  readonly panelId = `${this.id}-panel`;
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly panel = viewChild.required<ElementRef<HTMLElement>>('panel');
  private trigger: HTMLElement | null = null;
  private readonly placed = popupPlacement(() => this.panel().nativeElement, () => this.open(), () => this.side());
  protected readonly panelClasses = computed(() =>
    ['ds-popover__content', this.placed() !== 'bottom' && `ds-popover__content--${this.placed()}`, this.align() !== 'center' && `ds-popover__content--${this.align()}`, this.panelClass()]
      .filter(Boolean)
      .join(' '),
  );

  constructor() {
    // Focus moves into the panel when it opens (not when it starts open).
    let first = true;
    effect(() => {
      const open = this.open();
      if (open && !first) {
        const panel = this.panel().nativeElement;
        requestAnimationFrame(() => (panel.querySelector<HTMLElement>(FOCUSABLE) ?? panel).focus());
      }
      first = false;
    });
    // A click outside or focus leaving the trigger and the panel closes it.
    const outside = (event: Event) => {
      if (this.open() && !this.host.contains(event.target as Node)) this.open.set(false);
    };
    document.addEventListener('pointerdown', outside);
    document.addEventListener('focusin', outside);
    inject(DestroyRef).onDestroy(() => {
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('focusin', outside);
    });
  }

  /** @internal The trigger registers itself, to get focus back. */
  register(trigger: HTMLElement) {
    this.trigger = trigger;
  }

  /** Closes the panel; `focusTrigger` returns focus to the trigger. */
  close(focusTrigger = true) {
    this.open.set(false);
    if (focusTrigger) this.trigger?.focus();
  }

  protected onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      event.stopPropagation();
      this.close(true);
    }
  }
}

/** The element that opens and closes the panel (a Button): it gets `aria-expanded` and `aria-controls`. */
@Directive({
  selector: '[dsPopoverTrigger]',
  host: {
    'aria-haspopup': 'dialog',
    '[attr.aria-expanded]': 'popover.open()',
    '[attr.aria-controls]': 'popover.open() ? popover.panelId : null',
    '(click)': 'onClick($event)',
  },
})
export class DsPopoverTrigger {
  protected readonly popover = inject(DsPopover);

  constructor() {
    this.popover.register(inject<ElementRef<HTMLElement>>(ElementRef).nativeElement);
  }

  protected onClick(event: MouseEvent) {
    // After the element's own click handlers, which can prevent it.
    queueMicrotask(() => {
      if (!event.defaultPrevented) this.popover.open.set(!this.popover.open());
    });
  }
}

/** A button that closes the popover (and returns focus to the trigger) after its own click. */
@Directive({ selector: '[dsPopoverClose]', host: { '(click)': 'onClick($event)' } })
export class DsPopoverClose {
  private readonly popover = inject(DsPopover);

  protected onClick(event: MouseEvent) {
    queueMicrotask(() => {
      if (!event.defaultPrevented) this.popover.close(true);
    });
  }
}

/** Figma "Actions": buttons side by side, 8 px apart, at the end of the content. */
@Directive({ selector: 'div[dsPopoverActions]', host: { class: 'ds-popover__actions' } })
export class DsPopoverActions {}
