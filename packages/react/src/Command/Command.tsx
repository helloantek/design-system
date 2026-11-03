import {
  Children,
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type HTMLAttributes,
  type KeyboardEvent,
  type ReactNode,
} from 'react';
import { Input, type InputProps } from '../Input';

// Styles live in @helloantek/ds-css (classes ds-command*, the search field ds-input*). A command palette: the search
// field is a combobox that keeps focus while Arrow Up / Down (Home / End) move the selected option of the listbox
// below it and Enter runs it; typing filters the items (by their value and keywords), hiding empty groups and the
// separators, and the empty state shows when nothing matches. The pointer selects what it is over; a click runs it.

const cx = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(' ');

// Figma "search" and "check" (24 px grid) at 17.33 px and 16 px with a 1.25 px stroke.
const searchIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.73} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);
const checkIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.875} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

interface CommandContextValue {
  search: string;
  setSearch: (search: string) => void;
  /** Whether an item with this text and keywords is shown for the current search. */
  matches: (text: string, keywords: string[]) => boolean;
  active: string | null;
  setActive: (id: string | null) => void;
  listId: string;
  label: string;
  move: (by: 'next' | 'previous' | 'first' | 'last') => void;
  runActive: () => void;
}
const CommandContext = createContext<CommandContextValue | null>(null);

function useCommand() {
  const ctx = useContext(CommandContext);
  if (!ctx) throw new Error('Command parts must be inside a <Command>.');
  return ctx;
}

const optionsOf = (root: HTMLElement | null) =>
  root ? Array.from(root.querySelectorAll<HTMLElement>('[role="option"]:not([hidden]):not([aria-disabled="true"])')) : [];

export interface CommandProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Names the search field and the list (default "Commands"). */
  label?: string;
  /** The search text (controlled). */
  search?: string;
  defaultSearch?: string;
  onSearchChange?: (search: string) => void;
  /** Filter the items by the search (default true); turn off to filter them yourself (e.g. results from a server). */
  shouldFilter?: boolean;
  /** Arrow keys wrap from the last item to the first (default true). */
  loop?: boolean;
  /** No surface of its own (inside a Popover or a Card). */
  plain?: boolean;
  /** Width (default 384 px), e.g. `450px`. */
  width?: string;
  /** CommandInput, CommandList and anything between them (tabs, filters). */
  children: ReactNode;
}

/** Sort UI 2.0 "Command". */
export function Command({
  label = 'Commands',
  search: searchProp,
  defaultSearch = '',
  onSearchChange,
  shouldFilter = true,
  loop = true,
  plain = false,
  width,
  className,
  style,
  children,
  ...rest
}: CommandProps) {
  const [uncontrolled, setUncontrolled] = useState(defaultSearch);
  const search = searchProp ?? uncontrolled;
  const [active, setActive] = useState<string | null>(null);
  const listId = `${useId()}-list`;
  const ref = useRef<HTMLDivElement>(null);

  const setSearch = (next: string) => {
    if (searchProp === undefined) setUncontrolled(next);
    onSearchChange?.(next);
  };
  const query = search.trim().toLowerCase();
  const matches = (text: string, keywords: string[]) => !shouldFilter || query === '' || [text, ...keywords].some((t) => t.toLowerCase().includes(query));

  // The first visible item is selected at the start and after each change of the search; the selection follows the
  // list when the selected item disappears.
  useLayoutEffect(() => {
    const options = optionsOf(ref.current);
    setActive(options[0]?.id ?? null);
  }, [query]);
  useLayoutEffect(() => {
    if (active !== null && !optionsOf(ref.current).some((o) => o.id === active)) setActive(optionsOf(ref.current)[0]?.id ?? null);
  });
  useEffect(() => {
    if (active) document.getElementById(active)?.scrollIntoView?.({ block: 'nearest' });
  }, [active]);

  const move = (by: 'next' | 'previous' | 'first' | 'last') => {
    const options = optionsOf(ref.current);
    if (!options.length) return;
    const at = options.findIndex((o) => o.id === active);
    let next = by === 'first' ? 0 : by === 'last' ? options.length - 1 : at + (by === 'next' ? 1 : -1);
    if (loop) next = (next + options.length) % options.length;
    else next = Math.min(Math.max(next, 0), options.length - 1);
    setActive(options[next].id);
  };
  const runActive = () => {
    if (active) document.getElementById(active)?.click();
  };

  return (
    <CommandContext.Provider value={{ search, setSearch, matches, active, setActive, listId, label, move, runActive }}>
      <div
        ref={ref}
        {...rest}
        data-filtering={shouldFilter && query !== '' ? '' : undefined}
        className={cx('ds-command', plain && 'ds-command--plain', className)}
        style={{ ...(width ? ({ '--command-width': width } as CSSProperties) : {}), ...style }}
      >
        {children}
      </div>
    </CommandContext.Provider>
  );
}

export interface CommandInputProps extends Omit<InputProps, 'value' | 'defaultValue' | 'onChange' | 'size' | 'leadIcon' | 'label'> {
  /** Placeholder text (Figma "Placeholder"). */
  placeholder?: string;
}

/** Figma "Search": the search field, a combobox that controls the list. */
export function CommandInput({ placeholder = 'Type a command or search…', onKeyDown, ...rest }: CommandInputProps) {
  const cmd = useCommand();
  const keys = (event: KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(event);
    if (event.defaultPrevented || event.nativeEvent.isComposing) return;
    const by = { ArrowDown: 'next', ArrowUp: 'previous', Home: 'first', End: 'last' }[event.key] as 'next' | 'previous' | 'first' | 'last' | undefined;
    if (by && !((event.key === 'Home' || event.key === 'End') && cmd.search !== '')) {
      event.preventDefault();
      cmd.move(by);
    } else if (event.key === 'Enter') {
      event.preventDefault();
      cmd.runActive();
    }
  };
  return (
    <div className="ds-command__search">
      <Input
        aria-label={cmd.label}
        {...rest}
        role="combobox"
        aria-expanded
        aria-controls={cmd.listId}
        aria-autocomplete="list"
        aria-activedescendant={cmd.active ?? undefined}
        autoComplete="off"
        spellCheck={false}
        placeholder={placeholder}
        leadIcon={searchIcon}
        value={cmd.search}
        onChange={(event) => cmd.setSearch(event.target.value)}
        onKeyDown={keys}
      />
    </div>
  );
}

export interface CommandListProps extends HTMLAttributes<HTMLDivElement> {
  /** Groups, items, separators and a CommandEmpty. */
  children: ReactNode;
  /** Maximum height before it scrolls (default 360 px), e.g. `480px`. */
  maxHeight?: string;
}

/**
 * Figma "list": the scrolling list. Its items and groups form the listbox; a CommandEmpty is placed after the listbox
 * (a listbox may only hold options and groups), where it shows when no item is visible.
 */
export function CommandList({ children, maxHeight, className, style, ...rest }: CommandListProps) {
  const cmd = useCommand();
  const parts = Children.toArray(children);
  const empty = parts.filter((child) => isValidElement(child) && child.type === CommandEmpty);
  const options = parts.filter((child) => !(isValidElement(child) && child.type === CommandEmpty));
  return (
    <div {...rest} className={cx('ds-command__list', className)} style={{ ...(maxHeight ? ({ '--command-list-height': maxHeight } as CSSProperties) : {}), ...style }}>
      <div id={cmd.listId} role="listbox" aria-label={cmd.label} className="ds-command__options">
        {options}
      </div>
      {empty}
    </div>
  );
}

export interface CommandGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Figma "Command Group Heading". */
  heading?: ReactNode;
  children: ReactNode;
}

/** A labelled group of items; hidden while a search leaves it empty. */
export function CommandGroup({ heading, children, className, ...rest }: CommandGroupProps) {
  const headingId = useId();
  return (
    <div role="group" aria-labelledby={heading !== undefined ? headingId : undefined} {...rest} className={cx('ds-command__group', className)}>
      {heading !== undefined && (
        <div id={headingId} className="ds-command__heading" role="presentation">
          {heading}
        </div>
      )}
      {children}
    </div>
  );
}

/** Figma "Command Separator". */
export function CommandSeparator() {
  // Decoration only: a listbox may not hold separators, and the group headings already divide the list.
  return <div aria-hidden="true" className="ds-command__separator" />;
}

export interface CommandItemProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  /** Figma "Label". */
  children: ReactNode;
  /** The text the search matches (default: the label when it is text). */
  value?: string;
  /** More words the search matches, e.g. `['settings', 'preferences']`. */
  keywords?: string[];
  /** Figma "L slot": a 17.33 px icon, an Avatar… */
  icon?: ReactNode;
  /** A 12/16 muted second line ("Workspace switcher" demo). */
  description?: ReactNode;
  /** Figma "Keys" (Shortcut) or a trailing note: 12/16 muted at the end. */
  shortcut?: ReactNode;
  /** Figma Checked: a check at the end (the current choice). */
  checked?: boolean;
  /** Figma State=Disabled. */
  disabled?: boolean;
  /** Runs on click and on Enter while the item is selected. */
  onSelect?: (value: string) => void;
}

/** Figma "Command Item": an option; State=Selected follows the keyboard and the pointer. */
export function CommandItem({ children, value, keywords = [], icon, description, shortcut, checked, disabled = false, onSelect, className, onClick, onPointerMove, id: idProp, ...rest }: CommandItemProps) {
  const cmd = useCommand();
  const autoId = useId();
  // The id ties the item to the input's aria-activedescendant; a given id is used as is.
  const id = idProp ?? autoId;
  const text = value ?? (typeof children === 'string' ? children : '');
  const shown = cmd.matches(text, keywords);
  return (
    <div
      id={id}
      role="option"
      aria-selected={cmd.active === id}
      aria-disabled={disabled || undefined}
      aria-checked={checked}
      hidden={!shown}
      {...rest}
      className={cx('ds-command__item', className)}
      onPointerMove={(event) => {
        onPointerMove?.(event);
        if (!disabled && cmd.active !== id) cmd.setActive(id);
      }}
      onClick={(event) => {
        onClick?.(event);
        if (disabled || event.defaultPrevented) return;
        onSelect?.(text);
      }}
    >
      {icon !== undefined && (
        <span className="ds-command__icon" aria-hidden>
          {icon}
        </span>
      )}
      <span className="ds-command__text">
        <span className="ds-command__label">{children}</span>
        {description !== undefined && <span className="ds-command__description">{description}</span>}
      </span>
      {shortcut !== undefined && <span className="ds-command__meta">{shortcut}</span>}
      {checked && <span className="ds-command__check">{checkIcon}</span>}
    </div>
  );
}

export interface CommandEmptyProps extends HTMLAttributes<HTMLDivElement> {
  /** Figma Variant=Empty: shown when no item matches (e.g. an Empty). */
  children: ReactNode;
}

/** Figma Command Variant=Empty: the content shown when the search matches nothing. */
export function CommandEmpty({ children, className, ...rest }: CommandEmptyProps) {
  return (
    <div {...rest} className={cx('ds-command__empty', className)}>
      {children}
    </div>
  );
}

export interface CommandDialogProps extends Omit<CommandProps, 'plain'> {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * The command palette in a modal window (a native <dialog>): the search field takes focus; Escape, a click on the
 * backdrop and running an item (call `onOpenChange(false)` in `onSelect`) close it, and focus returns to where it was.
 */
export function CommandDialog({ open, onOpenChange, width, children, ...rest }: CommandDialogProps) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (open && !el.open) el.showModal();
    else if (!open && el.open) el.close();
  }, [open]);
  return (
    <dialog
      ref={ref}
      className="ds-command-dialog"
      aria-label={rest.label ?? 'Commands'}
      style={width ? ({ '--command-width': width } as CSSProperties) : undefined}
      onClose={() => onOpenChange(false)}
      onClick={(event) => {
        if (event.target === event.currentTarget) onOpenChange(false);
      }}
    >
      {open && <Command {...rest}>{children}</Command>}
    </dialog>
  );
}
