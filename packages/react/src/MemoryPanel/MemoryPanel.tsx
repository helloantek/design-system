import { RiAddLine, RiArrowGoBackLine, RiCornerDownLeftLine, RiDeleteBinLine, RiFileSearchLine, RiPauseLine, RiPencilLine, RiPlayLine } from '@remixicon/react';
import { Fragment, useEffect, useId, useRef, useState, type CSSProperties, type HTMLAttributes, type KeyboardEvent, type ReactNode, type Ref } from 'react';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Input } from '../Input';
import { Kbd } from '../Kbd';
import { Switch } from '../Switch';

// Styles live in @helloantek/ds-css (classes ds-memory-panel*); this component renders the markup.

/** One thing the assistant remembers. */
export interface Memory {
  id: string;
  text: string;
  /** Its category, e.g. "Preferences"; memories are grouped by it. */
  category: string;
  /** Where it came from and when: "From chat · Oct 12". */
  source?: ReactNode;
  /** A 12 px mark before the source, e.g. the app it came from. */
  sourceIcon?: ReactNode;
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
  /** The source of a memory you add: "You added". */
  added: string;
  off: string;
  /** "Forgot “Prefers metric units”". */
  forgot: (text: string) => string;
  /** "8 memories · 1 paused". */
  summary: (count: number, paused: number) => string;
  /** "Nothing matches “xyz”". */
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

export interface MemoryPanelProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  ref?: Ref<HTMLElement>;
  /** The memories; leave out for uncontrolled. */
  memories?: Memory[];
  defaultMemories?: Memory[];
  onMemoriesChange?: (memories: Memory[]) => void;
  /** The categories in order; by default as they first appear. */
  categories?: string[];
  /** Use memory at all; leave out for uncontrolled. Off, it keeps what it knows but learns nothing new. */
  enabled?: boolean;
  defaultEnabled?: boolean;
  onEnabledChange?: (enabled: boolean) => void;
  /** The category shown (`null` for all); leave out for uncontrolled. */
  category?: string | null;
  defaultCategory?: string | null;
  onCategoryChange?: (category: string | null) => void;
  /** Called with the memory just forgotten (it stays undoable until the next change). */
  onForget?: (memory: Memory) => void;
  /** Undo brought a forgotten memory back. */
  onRestore?: (memory: Memory) => void;
  /** The memory a new one starts as (its source); the text and category are filled in. */
  newMemory?: (text: string, category: string) => Memory;
  /** The memory being edited when it first shows (its id). */
  defaultEditing?: string;
  /** The list scrolls past this height (a CSS length or px). */
  listMaxHeight?: number | string;
  labels?: Partial<MemoryPanelLabels>;
}

function useControllable<T>(value: T | undefined, initial: T, onChange?: (value: T) => void) {
  const [own, setOwn] = useState(initial);
  const current = value === undefined ? own : value;
  const set = (next: T) => {
    if (value === undefined) setOwn(next);
    onChange?.(next);
  };
  return [current, set] as const;
}

const NEW = '\u0000new';

/**
 * What the assistant remembers about you: a switch to use memory at all, categories with counts, every memory with where
 * it came from and when. Point at one to edit, pause or forget it (forgetting with Undo); add one yourself. Off, it
 * keeps what it knows but learns nothing new.
 */
export function MemoryPanel({
  memories: memoriesProp,
  defaultMemories = [],
  onMemoriesChange,
  categories: categoriesProp,
  enabled: enabledProp,
  defaultEnabled = true,
  onEnabledChange,
  category: categoryProp,
  defaultCategory = null,
  onCategoryChange,
  onForget,
  onRestore,
  newMemory,
  defaultEditing,
  listMaxHeight,
  labels = {},
  className,
  style,
  ...rest
}: MemoryPanelProps) {
  const t = { ...LABELS, ...labels };
  const id = useId();
  const titleId = `${id}-title`;
  const [memories, setMemories] = useControllable(memoriesProp, defaultMemories, onMemoriesChange);
  const [enabled, setEnabled] = useControllable(enabledProp, defaultEnabled, onEnabledChange);
  const [category, setCategory] = useControllable<string | null>(categoryProp, defaultCategory, onCategoryChange);
  const [editing, setEditing] = useState<string | null>(defaultEditing ?? null);
  const [draft, setDraft] = useState(() => (defaultMemories.find((memory) => memory.id === defaultEditing) ?? memoriesProp?.find((memory) => memory.id === defaultEditing))?.text ?? '');
  const [forgotten, setForgotten] = useState<{ memory: Memory; index: number } | null>(null);
  const [searching, setSearching] = useState(false);
  const [query, setQuery] = useState('');
  const editorRef = useRef<HTMLTextAreaElement>(null);
  const undoRef = useRef<HTMLButtonElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const focusAfter = useRef<string | null>(null);

  const categories = categoriesProp ?? [...new Set(memories.map((memory) => memory.category))];
  const search = query.trim().toLowerCase();
  const shown = memories.filter((memory) => (category === null || memory.category === category) && (!search || memory.text.toLowerCase().includes(search)));
  const paused = memories.filter((memory) => memory.paused).length;

  useEffect(() => {
    if (editing !== null) {
      const editor = editorRef.current;
      editor?.focus();
      editor?.setSelectionRange(editor.value.length, editor.value.length);
    }
  }, [editing]);

  // After a forget, focus goes to Undo; after Undo or a save, back to the memory's Edit button.
  useEffect(() => {
    const target = focusAfter.current;
    if (target === null) return;
    focusAfter.current = null;
    if (target === 'undo') undoRef.current?.focus();
    else document.getElementById(`${id}-edit-${target}`)?.focus();
  });

  const update = (next: Memory[]) => setMemories(next);
  const startEdit = (memory: Memory) => {
    setForgotten(null);
    setDraft(memory.text);
    setEditing(memory.id);
  };
  const cancel = () => {
    focusAfter.current = editing === NEW ? null : editing;
    setEditing(null);
  };
  const save = () => {
    const text = draft.trim();
    if (!text) return cancel();
    if (editing === NEW) {
      const inCategory = category ?? categories[0] ?? t.title;
      const memory = newMemory ? { ...newMemory(text, inCategory), text, category: inCategory } : { id: `${id}-${Date.now()}`, text, category: inCategory, source: t.added };
      update([...memories, memory]);
      focusAfter.current = memory.id;
    } else {
      update(memories.map((memory) => (memory.id === editing ? { ...memory, text } : memory)));
      focusAfter.current = editing;
    }
    setEditing(null);
  };
  const forget = (memory: Memory) => {
    setForgotten({ memory, index: memories.indexOf(memory) });
    update(memories.filter((item) => item !== memory));
    focusAfter.current = 'undo';
    onForget?.(memory);
  };
  const undo = () => {
    if (!forgotten) return;
    const next = [...memories];
    next.splice(Math.min(forgotten.index, next.length), 0, forgotten.memory);
    update(next);
    focusAfter.current = forgotten.memory.id;
    onRestore?.(forgotten.memory);
    setForgotten(null);
  };

  const onEditorKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      cancel();
    } else if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      save();
    }
  };

  const editor = (
    <li className="ds-memory-panel__editing">
      <textarea ref={editorRef} className="ds-memory-panel__editor" aria-label={t.edit} rows={1} value={draft} onChange={(event) => setDraft(event.target.value)} onKeyDown={onEditorKeyDown} />
      <span className="ds-memory-panel__edit-actions">
        <Button variant="ghost" size="xs" trailingIcon={<Kbd size="sm">Esc</Kbd>} aria-keyshortcuts="Escape" onClick={cancel}>
          {t.cancel}
        </Button>
        <Button size="xs" trailingIcon={<Kbd size="sm" variant="inverted" icon={<RiCornerDownLeftLine />} label="Enter" />} aria-keyshortcuts="Enter" onClick={save}>
          {t.save}
        </Button>
      </span>
    </li>
  );

  const groups = (category === null ? categories : [category]).map((name) => ({ name, items: shown.filter((memory) => memory.category === name) }));
  const newIn = category ?? categories[0];

  return (
    <section
      {...rest}
      className={['ds-memory-panel', !enabled && 'ds-memory-panel--off', className].filter(Boolean).join(' ')}
      aria-labelledby={rest['aria-label'] === undefined ? titleId : undefined}
      style={listMaxHeight === undefined ? style : ({ ...style, '--memory-panel-list-max-height': typeof listMaxHeight === 'number' ? `${listMaxHeight}px` : listMaxHeight } as CSSProperties)}
    >
      <header className="ds-memory-panel__header">
        <h3 className="ds-memory-panel__title" id={titleId}>
          {t.title}
        </h3>
        <Badge variant="tint">{memories.length}</Badge>
        <span className="ds-memory-panel__use">
          <span id={`${id}-use`}>{t.use}</span>
          <Switch size="sm" aria-labelledby={`${id}-use`} checked={enabled} onCheckedChange={setEnabled} />
        </span>
      </header>
      <div className="ds-memory-panel__categories">
        {searching ? (
          <Input
            type="search"
            leadIcon={<RiFileSearchLine />}
            aria-label={t.search}
            placeholder={t.search}
            value={query}
            autoFocus
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                event.preventDefault();
                setQuery('');
                setSearching(false);
                requestAnimationFrame(() => searchButtonRef.current?.focus());
              }
            }}
          />
        ) : (
          <>
            <div className="ds-memory-panel__tabs" role="group" aria-label={t.categories}>
              {[null, ...categories].map((name) => (
                <button key={name ?? ''} type="button" className="ds-memory-panel__tab" aria-pressed={category === name} onClick={() => setCategory(name)}>
                  {name ?? t.all} <span className="ds-memory-panel__count">{name === null ? memories.length : memories.filter((memory) => memory.category === name).length}</span>
                </button>
              ))}
            </div>
            <Button ref={searchButtonRef} variant="ghost" size="xs" icon={<RiFileSearchLine />} aria-label={t.search} onClick={() => setSearching(true)} />
          </>
        )}
      </div>
      <div className="ds-memory-panel__memories">
        {search && shown.length === 0 && <p className="ds-memory-panel__group-title" role="status">{t.noMatch(query.trim())}</p>}
        {groups.map(
          ({ name, items }) =>
            (items.length > 0 || (editing === NEW && name === newIn)) && (
              <div key={name} className="ds-memory-panel__group" role="group" aria-labelledby={`${id}-group-${name}`}>
                <h4 className="ds-memory-panel__group-title" id={`${id}-group-${name}`}>
                  {name}
                </h4>
                <ul className="ds-memory-panel__list">
                  {items.map((memory) =>
                    memory.id === editing ? (
                      <Fragment key={memory.id}>{editor}</Fragment>
                    ) : (
                      <li key={memory.id} className={memory.paused ? 'ds-memory-panel__memory ds-memory-panel__memory--paused' : 'ds-memory-panel__memory'}>
                        <span className="ds-memory-panel__text">
                          <span className="ds-memory-panel__fact">{memory.text}</span>
                          {(memory.source !== undefined || memory.paused) && (
                            <span className="ds-memory-panel__source">
                              {memory.sourceIcon}
                              {memory.source}
                              {memory.paused && (
                                <Badge variant="tint" color="amber">
                                  {t.paused}
                                </Badge>
                              )}
                            </span>
                          )}
                        </span>
                        <span className="ds-memory-panel__actions">
                          <Button id={`${id}-edit-${memory.id}`} variant="ghost" size="xs" icon={<RiPencilLine />} aria-label={`${t.edit}: ${memory.text}`} onClick={() => startEdit(memory)} />
                          <Button
                            variant="ghost"
                            size="xs"
                            icon={memory.paused ? <RiPlayLine /> : <RiPauseLine />}
                            aria-label={`${memory.paused ? t.resume : t.pause}: ${memory.text}`}
                            onClick={() => update(memories.map((item) => (item === memory ? { ...item, paused: !item.paused } : item)))}
                          />
                          <Button variant="ghost" size="xs" icon={<RiDeleteBinLine />} aria-label={`${t.forget}: ${memory.text}`} onClick={() => forget(memory)} />
                        </span>
                      </li>
                    ),
                  )}
                  {editing === NEW && name === newIn && editor}
                </ul>
              </div>
            ),
        )}
        {forgotten && (
          <p className="ds-memory-panel__forgot" role="status">
            <span>{t.forgot(forgotten.memory.text)}</span>
            <Button ref={undoRef} variant="ghost" size="xs" leadingIcon={<RiArrowGoBackLine />} onClick={undo}>
              {t.undo}
            </Button>
          </p>
        )}
      </div>
      <button
        type="button"
        className="ds-memory-panel__new"
        onClick={() => {
          setForgotten(null);
          setDraft('');
          setEditing(NEW);
        }}
      >
        <RiAddLine aria-hidden />
        {t.newMemory}
      </button>
      <footer className="ds-memory-panel__footer">{enabled ? t.summary(memories.length, paused) : t.off}</footer>
    </section>
  );
}
