import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, Directive, ElementRef, TemplateRef, afterRenderEffect, computed, contentChildren, inject, input, model, output, signal } from '@angular/core';
import { DsBadge } from '../badge/badge';
import { DsButton } from '../button/button';
import { DsInput } from '../input/input';
import { DsKbd } from '../kbd/kbd';
import { DsIcon, DsLeadingIcon, DsTrailingIcon } from '../slots/slots';
import { DsSwitch } from '../switch/switch';
import { uniqueId } from '../internal/ids';
import {
  riAddLineHidden,
  riArrowGoBackLineLead,
  riCornerDownLeftLine,
  riDeleteBinLineIcon,
  riFileSearchLineIcon,
  riFileSearchLineLead,
  riPauseLineIcon,
  riPencilLineIcon,
  riPlayLineIcon,
} from '../internal/remix';

// Styles live in @helloantek/ds-css (classes ds-memory-panel*); this component renders ds-react's MemoryPanel markup
// and behaviour.

/** One thing the assistant remembers. Its 12 px source mark: an `<ng-template dsMemoryPanelIcon="id">`. */
export interface Memory {
  id: string;
  text: string;
  /** Its category, e.g. "Preferences"; memories are grouped by it. */
  category: string;
  /** Where it came from and when: "From chat · Oct 12". */
  source?: string;
  /** Paused: kept, but not used. */
  paused?: boolean;
}

export interface MemoryPanelLabels {
  title: string;
  use: string;
  all: string;
  categories: string;
  search: string;
  edit: string;
  pause: string;
  resume: string;
  forget: string;
  cancel: string;
  save: string;
  undo: string;
  paused: string;
  newMemory: string;
  added: string;
  off: string;
  forgot: (text: string) => string;
  summary: (count: number, paused: number) => string;
  noMatch: (query: string) => string;
}

const LABELS: MemoryPanelLabels = {
  title: 'Memory',
  use: 'Use memory',
  all: 'All',
  categories: 'Categories',
  search: 'Search memories',
  edit: 'Edit',
  pause: 'Pause',
  resume: 'Resume',
  forget: 'Forget',
  cancel: 'Cancel',
  save: 'Save',
  undo: 'Undo',
  paused: 'Paused',
  newMemory: 'New memory',
  added: 'You added',
  off: 'Memory is off – it keeps what it knows but learns nothing new',
  forgot: (text) => `Forgot “${text}”`,
  summary: (count, paused) => [`${count} ${count === 1 ? 'memory' : 'memories'}`, paused > 0 && `${paused} paused`].filter(Boolean).join(' · '),
  noMatch: (query) => `Nothing matches “${query}”`,
};

const NEW = '\u0000new';

/** A memory's source mark: `<ng-template dsMemoryPanelIcon="inter"><svg …></svg></ng-template>`. */
@Directive({ selector: 'ng-template[dsMemoryPanelIcon]' })
export class DsMemoryPanelIcon {
  /** The `id` of the memory it belongs to. */
  readonly memory = input.required<string>({ alias: 'dsMemoryPanelIcon' });
  readonly template = inject(TemplateRef);
}

/**
 * Figma pattern "Memory Panel" on a native `<section>`: what the assistant remembers about you. A switch to use memory
 * at all (`[(enabled)]`), categories with counts (`[(category)]`), every memory with where it came from and when.
 * Point at one (or Tab to it) to edit it in place (Enter saves, Escape cancels), pause it or forget it, forgetting
 * with Undo; add one yourself. Off, it keeps what it knows but learns nothing new. `[(memories)]`; the list scrolls
 * past `listMaxHeight`.
 */
@Component({
  selector: 'section[dsMemoryPanel]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet, DsBadge, DsButton, DsInput, DsKbd, DsIcon, DsLeadingIcon, DsTrailingIcon, DsSwitch],
  host: {
    '[class]': "enabled() ? 'ds-memory-panel' : 'ds-memory-panel ds-memory-panel--off'",
    '[attr.aria-labelledby]': 'ariaLabel() === undefined ? titleId : null',
    '[attr.aria-label]': 'ariaLabel() ?? null',
    '[style.--memory-panel-list-max-height]': 'maxHeight()',
    '[attr.memories]': 'null',
    '[attr.categories]': 'null',
    '[attr.enabled]': 'null',
    '[attr.category]': 'null',
    '[attr.listMaxHeight]': 'null',
    '[attr.labels]': 'null',
  },
  template: `
    <ng-template #editor>
      <li class="ds-memory-panel__editing">
        <textarea class="ds-memory-panel__editor" [attr.aria-label]="t().edit" rows="1" [value]="draft()" (input)="draft.set($any($event.target).value)" (keydown)="onEditorKeyDown($event)"></textarea>
        <span class="ds-memory-panel__edit-actions">
          <button dsButton variant="ghost" size="xs" aria-keyshortcuts="Escape" (click)="cancel()">{{ t().cancel }}<kbd dsKbd dsTrailingIcon size="sm">Esc</kbd></button>
          <button dsButton size="xs" aria-keyshortcuts="Enter" (click)="save()">{{ t().save }}<kbd dsKbd dsTrailingIcon size="sm" variant="inverted" label="Enter">${riCornerDownLeftLine}</kbd></button>
        </span>
      </li>
    </ng-template>
    <header class="ds-memory-panel__header">
      <h3 class="ds-memory-panel__title" [id]="titleId">{{ t().title }}</h3>
      <span dsBadge variant="tint">{{ memories().length }}</span>
      <span class="ds-memory-panel__use">
        <span [id]="id + '-use'">{{ t().use }}</span>
        <ds-switch size="sm" aria-labelledby="{{ id }}-use" [checked]="enabled()" (checkedChange)="enabled.set($event)" />
      </span>
    </header>
    <div class="ds-memory-panel__categories">
      @if (searching()) {
        <ds-input type="search" aria-label="{{ t().search }}" [placeholder]="t().search" [value]="query()" (valueChange)="query.set($event)" (keydown)="onSearchKeyDown($event)">${riFileSearchLineLead}</ds-input>
      } @else {
        <div class="ds-memory-panel__tabs" role="group" [attr.aria-label]="t().categories">
          @for (name of tabs(); track $index) {
            <button type="button" class="ds-memory-panel__tab" [attr.aria-pressed]="category() === name" (click)="category.set(name)">{{ name ?? t().all }} <span class="ds-memory-panel__count">{{ count(name) }}</span></button>
          }
        </div>
        <button dsButton variant="ghost" size="xs" [attr.aria-label]="t().search" (click)="openSearch()">${riFileSearchLineIcon}</button>
      }
    </div>
    <div class="ds-memory-panel__memories">
      @if (search() && shown().length === 0) {
        <p class="ds-memory-panel__group-title" role="status">{{ t().noMatch(query().trim()) }}</p>
      }
      @for (group of groups(); track group.name) {
        @if (group.items.length > 0 || (editing() === NEW && group.name === newIn())) {
          <div class="ds-memory-panel__group" role="group" [attr.aria-labelledby]="id + '-group-' + group.name">
            <h4 class="ds-memory-panel__group-title" [id]="id + '-group-' + group.name">{{ group.name }}</h4>
            <ul class="ds-memory-panel__list">
              @for (memory of group.items; track memory.id) {
                @if (memory.id === editing()) {
                  <ng-container [ngTemplateOutlet]="editor" />
                } @else {
                  <li [class]="memory.paused ? 'ds-memory-panel__memory ds-memory-panel__memory--paused' : 'ds-memory-panel__memory'">
                    <span class="ds-memory-panel__text">
                      <span class="ds-memory-panel__fact">{{ memory.text }}</span>
                      @if (memory.source !== undefined || memory.paused) {
                        <span class="ds-memory-panel__source">
                          @if (icons().get(memory.id); as icon) {
                            <ng-container [ngTemplateOutlet]="icon" />
                          }
                          {{ memory.source }}
                          @if (memory.paused) {
                            <span dsBadge variant="tint" color="amber">{{ t().paused }}</span>
                          }
                        </span>
                      }
                    </span>
                    <span class="ds-memory-panel__actions">
                      <button dsButton [id]="id + '-edit-' + memory.id" variant="ghost" size="xs" [attr.aria-label]="t().edit + ': ' + memory.text" (click)="startEdit(memory)">${riPencilLineIcon}</button>
                      <button dsButton variant="ghost" size="xs" [attr.aria-label]="(memory.paused ? t().resume : t().pause) + ': ' + memory.text" (click)="togglePause(memory)">
                        @if (memory.paused) {
                          ${riPlayLineIcon}
                        } @else {
                          ${riPauseLineIcon}
                        }
                      </button>
                      <button dsButton variant="ghost" size="xs" [attr.aria-label]="t().forget + ': ' + memory.text" (click)="forget(memory)">${riDeleteBinLineIcon}</button>
                    </span>
                  </li>
                }
              }
              @if (editing() === NEW && group.name === newIn()) {
                <ng-container [ngTemplateOutlet]="editor" />
              }
            </ul>
          </div>
        }
      }
      @if (forgotten(); as gone) {
        <p class="ds-memory-panel__forgot" role="status">
          <span>{{ t().forgot(gone.memory.text) }}</span>
          <button dsButton variant="ghost" size="xs" (click)="undo()">${riArrowGoBackLineLead}{{ t().undo }}</button>
        </p>
      }
    </div>
    <button type="button" class="ds-memory-panel__new" (click)="startNew()">${riAddLineHidden}{{ t().newMemory }}</button>
    <footer class="ds-memory-panel__footer">{{ enabled() ? t().summary(memories().length, pausedCount()) : t().off }}</footer>
  `,
})
export class DsMemoryPanel {
  /** The memories, two-way with `[(memories)]`. */
  readonly memories = model<Memory[]>([]);
  /** The categories in order; by default as they first appear. */
  readonly categories = input<string[]>();
  /** Use memory at all, two-way with `[(enabled)]`. Off, it keeps what it knows but learns nothing new. */
  readonly enabled = model(true);
  /** The category shown (`null` for all), two-way with `[(category)]`. */
  readonly category = model<string | null>(null);
  /** The list scrolls past this height (a CSS length or px). */
  readonly listMaxHeight = input<number | string>();
  readonly ariaLabel = input<string | undefined>(undefined, { alias: 'aria-label' });
  /** Texts, for other languages. */
  readonly labels = input<Partial<MemoryPanelLabels>>({});

  /** The memory just forgotten (it stays undoable until the next change). */
  readonly forgotMemory = output<Memory>({ alias: 'forget' });
  /** Undo brought a forgotten memory back. */
  readonly restore = output<Memory>();

  protected readonly NEW = NEW;
  protected readonly id = uniqueId('ds-memory-panel');
  protected readonly titleId = `${this.id}-title`;
  protected readonly t = computed<MemoryPanelLabels>(() => ({ ...LABELS, ...this.labels() }));
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly iconTemplates = contentChildren(DsMemoryPanelIcon);
  protected readonly icons = computed(() => new Map(this.iconTemplates().map((icon) => [icon.memory(), icon.template])));
  protected readonly editing = signal<string | null>(null);
  protected readonly draft = signal('');
  protected readonly forgotten = signal<{ memory: Memory; index: number } | null>(null);
  protected readonly searching = signal(false);
  protected readonly query = signal('');
  /** What to focus after the next render: 'editor', 'undo', 'search', 'search-button' or a memory id (its Edit). */
  private readonly focusNext = signal<{ target: string } | null>(null);

  protected readonly maxHeight = computed(() => {
    const max = this.listMaxHeight();
    return max === undefined ? null : typeof max === 'number' ? `${max}px` : max;
  });
  private readonly allCategories = computed(() => this.categories() ?? [...new Set(this.memories().map((memory) => memory.category))]);
  protected readonly tabs = computed<(string | null)[]>(() => [null, ...this.allCategories()]);
  protected readonly search = computed(() => this.query().trim().toLowerCase());
  protected readonly shown = computed(() =>
    this.memories().filter((memory) => (this.category() === null || memory.category === this.category()) && (!this.search() || memory.text.toLowerCase().includes(this.search()))),
  );
  protected readonly groups = computed(() => (this.category() === null ? this.allCategories() : [this.category()!]).map((name) => ({ name, items: this.shown().filter((memory) => memory.category === name) })));
  protected readonly newIn = computed(() => this.category() ?? this.allCategories()[0]);
  protected readonly pausedCount = computed(() => this.memories().filter((memory) => memory.paused).length);

  constructor() {
    afterRenderEffect(() => {
      const next = this.focusNext();
      if (!next) return;
      const target = next.target;
      const el =
        target === 'editor'
          ? this.host.querySelector<HTMLTextAreaElement>('.ds-memory-panel__editor')
          : target === 'undo'
            ? this.host.querySelector<HTMLElement>('.ds-memory-panel__forgot .ds-button')
            : target === 'search'
              ? this.host.querySelector<HTMLElement>('.ds-memory-panel__categories input')
              : target === 'search-button'
                ? this.host.querySelector<HTMLElement>('.ds-memory-panel__categories > .ds-button')
                : this.host.querySelector<HTMLElement>(`[id="${this.id}-edit-${target}"]`);
      if (!el) return;
      el.focus();
      if (el instanceof HTMLTextAreaElement) el.setSelectionRange(el.value.length, el.value.length);
      this.focusNext.set(null);
    });
  }

  protected count(name: string | null) {
    return name === null ? this.memories().length : this.memories().filter((memory) => memory.category === name).length;
  }

  protected openSearch() {
    this.searching.set(true);
    this.focusNext.set({ target: 'search' });
  }

  protected onSearchKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.query.set('');
      this.searching.set(false);
      this.focusNext.set({ target: 'search-button' });
    }
  }

  protected startEdit(memory: Memory) {
    this.forgotten.set(null);
    this.draft.set(memory.text);
    this.editing.set(memory.id);
    this.focusNext.set({ target: 'editor' });
  }

  protected startNew() {
    this.forgotten.set(null);
    this.draft.set('');
    this.editing.set(NEW);
    this.focusNext.set({ target: 'editor' });
  }

  protected cancel() {
    const editing = this.editing();
    this.editing.set(null);
    if (editing !== null && editing !== NEW) this.focusNext.set({ target: editing });
  }

  protected save() {
    const text = this.draft().trim();
    const editing = this.editing();
    if (!text || editing === null) return this.cancel();
    if (editing === NEW) {
      const memory: Memory = { id: `${this.id}-${Date.now()}`, text, category: this.newIn() ?? this.t().title, source: this.t().added };
      this.memories.set([...this.memories(), memory]);
      this.focusNext.set({ target: memory.id });
    } else {
      this.memories.set(this.memories().map((memory) => (memory.id === editing ? { ...memory, text } : memory)));
      this.focusNext.set({ target: editing });
    }
    this.editing.set(null);
  }

  protected togglePause(memory: Memory) {
    this.memories.set(this.memories().map((item) => (item === memory ? { ...item, paused: !item.paused } : item)));
  }

  protected forget(memory: Memory) {
    this.forgotten.set({ memory, index: this.memories().indexOf(memory) });
    this.memories.set(this.memories().filter((item) => item !== memory));
    this.focusNext.set({ target: 'undo' });
    this.forgotMemory.emit(memory);
  }

  protected undo() {
    const gone = this.forgotten();
    if (!gone) return;
    const next = [...this.memories()];
    next.splice(Math.min(gone.index, next.length), 0, gone.memory);
    this.memories.set(next);
    this.focusNext.set({ target: gone.memory.id });
    this.restore.emit(gone.memory);
    this.forgotten.set(null);
  }

  protected onEditorKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      this.cancel();
    } else if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.save();
    }
  }
}
