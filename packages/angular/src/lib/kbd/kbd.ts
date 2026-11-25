import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, Directive, computed, input } from '@angular/core';

// Styles live in @helloantek/ds-css (classes ds-kbd*); these components only render the markup, as ds-react's Kbd
// and KbdGroup do.

/** Figma "Variant": a muted key, or a light key for dark surfaces such as a Tooltip. */
export type KbdVariant = 'default' | 'inverted';
/** Figma "Size": 20 or 16 px. */
export type KbdSize = 'default' | 'sm';

/**
 * Figma "Kbd" on a native `<kbd>`: one keyboard key.
 *
 *     <kbd dsKbd>K</kbd>
 *     <kbd dsKbd size="sm" variant="inverted">A</kbd>
 *     <kbd dsKbd label="Enter"><svg …></svg></kbd>      (a symbol with a spoken name)
 *
 * The key text and an optional 12 px icon are the content. `label` is what screen readers say for a symbol ("Command"
 * for ⌘); the symbol is then hidden from them.
 */
@Component({
  selector: 'kbd[dsKbd]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet],
  host: {
    '[class]': 'classes()',
    '[attr.variant]': 'null',
    '[attr.size]': 'null',
    '[attr.label]': 'null',
  },
  template: `
    <ng-template #key><ng-content /></ng-template>
    @if (label() === undefined) {
      <ng-container [ngTemplateOutlet]="key" />
    } @else {
      <span aria-hidden="true" style="display: contents;"><ng-container [ngTemplateOutlet]="key" /></span>
      <span class="ds-kbd__label">{{ label() }}</span>
    }
  `,
})
export class DsKbd {
  /** Figma Variant. */
  readonly variant = input<KbdVariant>('default');
  /** Figma Size. */
  readonly size = input<KbdSize>('default');
  /** What screen readers say for a symbol, e.g. "Command" for ⌘. */
  readonly label = input<string>();

  protected readonly classes = computed(() => ['ds-kbd', this.variant() === 'inverted' && 'ds-kbd--inverted', this.size() === 'sm' && 'ds-kbd--sm'].filter(Boolean).join(' '));
}

/** Figma "Kbd Group": the keys of one shortcut, 2 px apart (`<kbd dsKbdGroup><kbd dsKbd>⌘</kbd><kbd dsKbd>K</kbd></kbd>`). */
@Directive({
  selector: 'kbd[dsKbdGroup]',
  host: { class: 'ds-kbd-group' },
})
export class DsKbdGroup {}
