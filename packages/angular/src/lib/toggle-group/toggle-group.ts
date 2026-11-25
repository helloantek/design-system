import { Directive, booleanAttribute, computed, contentChildren, forwardRef, input, model } from '@angular/core';
import { DS_TOGGLE_GROUP, DsToggle, type ToggleGroupContext, type ToggleSize, type ToggleVariant } from '../toggle/toggle';

// Styles live in @helloantek/ds-css (classes ds-toggle-group*); this directive renders the group ds-react's
// ToggleGroup does: role="group", one Tab stop and the arrow keys between its toggles.

/** Figma "Spacing": 2 (8 px), 1 (4 px) or 0 (joined). */
export type ToggleGroupSpacing = 0 | 1 | 2;
/** Figma "Orientation". */
export type ToggleGroupOrientation = 'horizontal' | 'vertical';

/**
 * Figma "Toggle Group" on a native `<div>`, with `<button dsToggle value="…">` items:
 *
 *     <div dsToggleGroup type="single" [(value)]="view" aria-label="View">
 *       <button dsToggle value="grid">Grid</button><button dsToggle value="list">List</button>
 *     </div>
 *
 * `type="single"`: `value` is one value ('' for none); `type="multiple"`: an array. One Tab stop (the first pressed
 * item, else the first enabled one); the arrow keys, Home and End move between the items.
 */
@Directive({
  selector: 'div[dsToggleGroup]',
  providers: [{ provide: DS_TOGGLE_GROUP, useExisting: forwardRef(() => DsToggleGroup) }],
  host: {
    role: 'group',
    '[attr.data-orientation]': 'orientation()',
    '[class]': 'classes()',
    '[attr.type]': 'null',
    '[attr.variant]': 'null',
    '[attr.size]': 'null',
    '[attr.spacing]': 'null',
    '[attr.orientation]': 'null',
    '[attr.disabled]': 'null',
    '[attr.value]': 'null',
    '(keydown)': 'key($event)',
  },
})
export class DsToggleGroup implements ToggleGroupContext {
  readonly type = input<'single' | 'multiple'>('single');
  /** The pressed value(s); two-way with `[(value)]`. */
  readonly value = model<string | string[]>('');
  readonly variant = input<ToggleVariant>('default');
  readonly size = input<ToggleSize>('default');
  readonly spacing = input<ToggleGroupSpacing>(2);
  readonly orientation = input<ToggleGroupOrientation>('horizontal');
  readonly disabled = input(false, { transform: booleanAttribute });
  /** The item with the Tab stop: the first pressed one, else the first enabled one. */
  readonly tabValue = computed(() => this.values()[0] ?? this.items().find((item) => !item.disabled())?.value());

  private readonly values = computed(() => {
    const v = this.value();
    return Array.isArray(v) ? v : v === '' ? [] : [v];
  });
  private readonly items = contentChildren(DsToggle);
  protected readonly classes = computed(() =>
    [
      'ds-toggle-group',
      this.orientation() === 'vertical' && 'ds-toggle-group--vertical',
      this.spacing() !== 2 && `ds-toggle-group--spacing-${this.spacing()}`,
      this.variant() === 'outline' && 'ds-toggle-group--outline',
    ]
      .filter(Boolean)
      .join(' '),
  );

  isOn(value: string) {
    return this.values().includes(value);
  }

  flip(value: string) {
    const values = this.values();
    const next = this.type() === 'single' ? (values.includes(value) ? [] : [value]) : values.includes(value) ? values.filter((x) => x !== value) : [...values, value];
    this.value.set(this.type() === 'single' ? (next[0] ?? '') : next);
  }

  protected key(event: KeyboardEvent) {
    const keys = this.orientation() === 'vertical' ? ['ArrowUp', 'ArrowDown'] : ['ArrowLeft', 'ArrowRight'];
    if (![...keys, 'Home', 'End'].includes(event.key)) return;
    const host = event.currentTarget as HTMLElement;
    const items = [...host.querySelectorAll<HTMLButtonElement>(':scope > .ds-toggle:not(:disabled)')];
    const at = items.indexOf(document.activeElement as HTMLButtonElement);
    if (at < 0 || !items.length) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1 : (at + (event.key === keys[1] ? 1 : -1) + items.length) % items.length;
    items.forEach((el, i) => (el.tabIndex = i === next ? 0 : -1));
    items[next].focus();
  }
}
