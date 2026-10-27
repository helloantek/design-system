import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type HTMLAttributes,
  type KeyboardEvent,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
  type Ref,
} from 'react';
import { Avatar } from '../Avatar';

// Styles live in @helloantek/ds-css (classes ds-dropdown*); these components render the markup and the WAI-ARIA
// menu button behaviour (https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/): focus moves onto the items.

// Sort UI 2.0 icons (24 px grid) drawn at 72 % (17.28 px), so a 1.25 px stroke is 1.736 in the grid.
const checkMark = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.736} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
const chevronRight = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.736} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const cx = (...classes: (string | false | null | undefined)[]) => classes.filter(Boolean).join(' ') || undefined;

/** The enabled items of one menu level (not those of its submenus). */
const itemsOf = (menu: HTMLElement) =>
  Array.from(menu.querySelectorAll<HTMLElement>('[role^="menuitem"]')).filter((el) => el.closest('[role="menu"]') === menu && el.getAttribute('aria-disabled') !== 'true');

const labelOf = (item: HTMLElement) => (item.querySelector('.ds-dropdown__text, .ds-dropdown__name')?.textContent ?? '').trim().toLowerCase();

interface RootContextValue {
  /** Closes the whole menu; focus goes back to the trigger unless it moves elsewhere (Tab, a click outside). */
  close: (focusTrigger: boolean) => void;
}
const RootContext = createContext<RootContextValue | null>(null);

function useRoot() {
  const root = useContext(RootContext);
  if (!root) throw new Error('Dropdown menu parts must be used inside <DropdownMenu>');
  return root;
}

/**
 * Keyboard handling shared by the menu and its submenus: arrows (wrapping), Home/End, Enter/Space and type-ahead.
 * Keys pressed inside a submenu belong to the submenu only.
 */
function useMenuKeys() {
  const typeahead = useRef({ text: '', at: 0 });
  return (event: KeyboardEvent<HTMLDivElement>, onEscape: () => void, onLeft?: () => void) => {
    const menu = event.currentTarget;
    if (event.defaultPrevented || (event.target as Element).closest('[role="menu"]') !== menu) return;
    const items = itemsOf(menu);
    const current = items.indexOf(document.activeElement as HTMLElement);
    const focus = (i: number) => items[(i + items.length) % items.length]?.focus();
    const { key } = event;
    const printable = key.length === 1 && key !== ' ' && !event.ctrlKey && !event.metaKey && !event.altKey;
    let handled = true;
    if (key === 'ArrowDown') focus(current + 1);
    else if (key === 'ArrowUp') focus(current < 0 ? -1 : current - 1);
    else if (key === 'Home') focus(0);
    else if (key === 'End') focus(-1);
    else if ((key === 'Enter' || key === ' ') && current >= 0) items[current].click();
    else if (key === 'Escape') onEscape();
    else if (key === 'ArrowLeft' && onLeft) onLeft();
    else if (printable) {
      // Characters typed within 500 ms form one search; repeating one letter cycles through the matches.
      const now = Date.now();
      const t = typeahead.current;
      t.text = now - t.at > 500 ? key.toLowerCase() : t.text + key.toLowerCase();
      t.at = now;
      const query = t.text.split('').every((c) => c === t.text[0]) ? t.text[0] : t.text;
      const order = items.map((_, i) => items[(current + 1 + i) % items.length]);
      order.find((item) => labelOf(item).startsWith(query))?.focus();
    } else handled = false;
    if (handled) event.preventDefault();
  };
}

/** Leaving a menu with the pointer clears its highlight; an open submenu keeps its own. */
function unhover(event: MouseEvent<HTMLElement>) {
  const menu = event.currentTarget;
  if (menu.contains(document.activeElement) && document.activeElement?.closest('[role="menu"]') === menu) menu.focus();
}

/** The pointer highlights what it is over: hovering an item focuses it, a disabled item clears the highlight. */
function hover(event: MouseEvent<HTMLElement>, disabled: boolean) {
  const item = event.currentTarget;
  if (disabled) (item.closest('[role="menu"]') as HTMLElement | null)?.focus();
  else if (document.activeElement !== item) item.focus();
}

export interface DropdownMenuProps {
  /**
   * Figma "Dropdown Menu Trigger": the element that opens the menu, usually
   * `<Button variant="outline" trailingIcon={…chevron…}>`. It gets `aria-haspopup`, `aria-expanded` and the handlers.
   */
  trigger: ReactElement<HTMLAttributes<HTMLElement> & { ref?: Ref<HTMLElement> }>;
  /** Figma "items": DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuSub, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuUserProfile. */
  children: ReactNode;
  /** Open state (controlled). */
  open?: boolean;
  /** Opens the menu on first render (uncontrolled). */
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Lines the menu up with the trigger's left (`start`, default) or right (`end`) edge. */
  align?: 'start' | 'end';
  /** Class for the menu (Figma "Dropdown Menu Content"), e.g. to set its width. */
  className?: string;
  /** Accessible name of the menu; by default the trigger names it. */
  'aria-label'?: string;
}

/** Figma "Dropdown Menu Trigger" + "Dropdown Menu Content". */
export function DropdownMenu({ trigger, children, open: openProp, defaultOpen = false, onOpenChange, align = 'start', className, 'aria-label': ariaLabel }: DropdownMenuProps) {
  const id = useId();
  const triggerId = trigger.props.id ?? `${id}-trigger`;
  const menuId = `${id}-menu`;
  const [uncontrolled, setUncontrolled] = useState(defaultOpen);
  const open = openProp ?? uncontrolled;
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  // Where focus goes once the menu has opened: the first or last item (keyboard) or the menu itself (pointer).
  const pending = useRef<'first' | 'last' | 'menu' | null>(null);
  const onKeys = useMenuKeys();

  const setOpen = (next: boolean) => {
    if (openProp === undefined) setUncontrolled(next);
    onOpenChange?.(next);
  };
  const show = (focus: 'first' | 'last' | 'menu') => {
    pending.current = focus;
    setOpen(true);
  };
  const close = (focusTrigger: boolean) => {
    setOpen(false);
    if (focusTrigger) triggerRef.current?.focus();
  };

  useEffect(() => {
    const menu = menuRef.current;
    if (!open || !menu || !pending.current) return;
    const items = itemsOf(menu);
    const target = pending.current === 'first' ? items[0] : pending.current === 'last' ? items[items.length - 1] : undefined;
    (target ?? menu).focus();
    pending.current = null;
  }, [open]);

  // A click outside closes the menu, as does focus leaving it.
  useEffect(() => {
    if (!open) return;
    const outside = (event: Event) => {
      if (!rootRef.current?.contains(event.target as Node)) close(false);
    };
    document.addEventListener('pointerdown', outside);
    document.addEventListener('focusin', outside);
    return () => {
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('focusin', outside);
    };
  });

  const { ref: triggerOwnRef, onClick, onKeyDown } = trigger.props;
  const setTriggerRef = (node: HTMLElement | null) => {
    triggerRef.current = node;
    if (typeof triggerOwnRef === 'function') triggerOwnRef(node);
    else if (triggerOwnRef) (triggerOwnRef as { current: HTMLElement | null }).current = node;
  };

  return (
    <RootContext.Provider value={{ close }}>
      <div ref={rootRef} className="ds-dropdown">
        {cloneElement(trigger, {
          ref: setTriggerRef,
          id: triggerId,
          'aria-haspopup': 'menu',
          'aria-expanded': open,
          'aria-controls': open ? menuId : undefined,
          onClick: (event: MouseEvent<HTMLElement>) => {
            onClick?.(event);
            if (event.defaultPrevented) return;
            // Enter and Space click the button with detail 0: then the first item takes focus.
            if (open) close(false);
            else show(event.detail === 0 ? 'first' : 'menu');
          },
          onKeyDown: (event: KeyboardEvent<HTMLElement>) => {
            onKeyDown?.(event);
            if (event.defaultPrevented) return;
            if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
              event.preventDefault();
              show(event.key === 'ArrowDown' ? 'first' : 'last');
            }
          },
        })}
        <div
          ref={menuRef}
          id={menuId}
          role="menu"
          tabIndex={-1}
          className={cx('ds-dropdown__content', align === 'end' && 'ds-dropdown__content--end', className)}
          aria-labelledby={ariaLabel === undefined ? triggerId : undefined}
          aria-label={ariaLabel}
          hidden={!open}
          onKeyDown={(event) => {
            if (event.key === 'Tab') close(false);
            else onKeys(event, () => close(true));
          }}
          onMouseLeave={unhover}
        >
          {children}
        </div>
      </div>
    </RootContext.Provider>
  );
}

export interface DropdownMenuContentProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
  /** The menu's items. */
  children: ReactNode;
  /** Called when an item asks the menu to close (a click on an item, Escape, Tab). */
  onClose?: () => void;
}

/**
 * Figma "Dropdown Menu Content" on its own: a menu that is always shown, in the page flow (e.g. inside a panel or
 * a context menu the app positions). Name it with `aria-label` or `aria-labelledby`.
 */
export function DropdownMenuContent({ children, onClose, className, onKeyDown, onMouseLeave, ...rest }: DropdownMenuContentProps) {
  const onKeys = useMenuKeys();
  return (
    <RootContext.Provider value={{ close: () => onClose?.() }}>
      <div
        role="menu"
        tabIndex={-1}
        {...rest}
        className={cx('ds-dropdown__content', className)}
        onKeyDown={(event) => {
          onKeyDown?.(event);
          if (event.key === 'Tab') onClose?.();
          else onKeys(event, () => onClose?.());
        }}
        onMouseLeave={(event) => {
          onMouseLeave?.(event);
          unhover(event);
        }}
      >
        {children}
      </div>
    </RootContext.Provider>
  );
}

/** Figma Type: Item or Destructive. */
export type DropdownMenuItemType = 'item' | 'destructive';

interface ItemBaseProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
  /** Figma "Label". */
  children: ReactNode;
  /** Figma "L slot" (Leading slot): a 16 px icon using `currentColor`, or a 20 px picture such as `<Avatar size="xs" />`. */
  icon?: ReactNode;
  /** Figma Inset=True: lines the label up with the labels of items that have an icon. */
  inset?: boolean;
  /** Figma State=Disabled. */
  disabled?: boolean;
}

export interface DropdownMenuItemProps extends ItemBaseProps {
  /** Figma Type=Item (default) or Destructive. */
  type?: DropdownMenuItemType;
  /** Figma "Shortcut" (Keys), e.g. "⌘K". Only shown; handling the keys is up to the app. */
  shortcut?: ReactNode;
}

function ItemContent({ icon, children, shortcut }: { icon?: ReactNode; children: ReactNode; shortcut?: ReactNode }) {
  return (
    <>
      {icon && (
        <span className="ds-dropdown__icon" aria-hidden>
          {icon}
        </span>
      )}
      <span className="ds-dropdown__text">{children}</span>
      {shortcut !== undefined && <kbd className="ds-dropdown__shortcut">{shortcut}</kbd>}
    </>
  );
}

/** Figma "Dropdown Menu Item", Type=Item or Destructive. A click runs `onClick` and closes the menu unless it calls `preventDefault()`. */
export function DropdownMenuItem({ type = 'item', icon, shortcut, inset = false, disabled = false, className, children, onClick, onMouseMove, ...rest }: DropdownMenuItemProps) {
  const root = useRoot();
  return (
    <div
      role="menuitem"
      tabIndex={-1}
      aria-disabled={disabled || undefined}
      {...rest}
      className={cx('ds-dropdown__item', type === 'destructive' && 'ds-dropdown__item--destructive', inset && 'ds-dropdown__item--inset', className)}
      onMouseMove={(event) => {
        onMouseMove?.(event);
        hover(event, disabled);
      }}
      onClick={(event) => {
        if (disabled) return;
        onClick?.(event);
        if (!event.defaultPrevented) root.close(true);
      }}
    >
      <ItemContent icon={icon} shortcut={shortcut}>
        {children}
      </ItemContent>
    </div>
  );
}

/** Figma Type=Checkbox (check mark on the right) or Menubar checkbox (on the left). */
export type DropdownMenuCheckType = 'checkbox' | 'menubar';

interface CheckItemProps extends Omit<ItemBaseProps, 'role'> {
  /** Figma Type=Checkbox (default) or Menubar checkbox. */
  type?: DropdownMenuCheckType;
  /** Figma "Shortcut" (Keys). */
  shortcut?: ReactNode;
}

function CheckItem({ role, checked, onToggle, type = 'checkbox', icon, shortcut, inset = false, disabled = false, className, children, onClick, onMouseMove, ...rest }: CheckItemProps & { role: 'menuitemcheckbox' | 'menuitemradio'; checked: boolean; onToggle: () => void }) {
  return (
    <div
      tabIndex={-1}
      aria-disabled={disabled || undefined}
      {...rest}
      role={role}
      aria-checked={checked}
      className={cx('ds-dropdown__item', `ds-dropdown__item--${type}`, inset && 'ds-dropdown__item--inset', className)}
      onMouseMove={(event) => {
        onMouseMove?.(event);
        hover(event, disabled);
      }}
      // Checking keeps the menu open, so several items can be set in a row.
      onClick={(event) => {
        if (disabled) return;
        onClick?.(event);
        if (!event.defaultPrevented) onToggle();
      }}
    >
      <span className="ds-dropdown__check" aria-hidden>
        {checkMark}
      </span>
      <ItemContent icon={icon} shortcut={shortcut}>
        {children}
      </ItemContent>
    </div>
  );
}

export interface DropdownMenuCheckboxItemProps extends CheckItemProps {
  /** Figma "Checked" (controlled). */
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

/** Figma "Dropdown Menu Item", Type=Checkbox or Menubar checkbox. */
export function DropdownMenuCheckboxItem({ checked: checkedProp, defaultChecked = false, onCheckedChange, ...rest }: DropdownMenuCheckboxItemProps) {
  const [uncontrolled, setUncontrolled] = useState(defaultChecked);
  const checked = checkedProp ?? uncontrolled;
  const toggle = () => {
    if (checkedProp === undefined) setUncontrolled(!checked);
    onCheckedChange?.(!checked);
  };
  return <CheckItem {...rest} role="menuitemcheckbox" checked={checked} onToggle={toggle} />;
}

interface RadioContextValue {
  value: string | null;
  select: (value: string) => void;
}
const RadioContext = createContext<RadioContextValue | null>(null);

export interface DropdownMenuRadioGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'onChange'> {
  /** The checked item's value (controlled). */
  value?: string | null;
  defaultValue?: string | null;
  onValueChange?: (value: string) => void;
  /** A Dropdown Menu Label above the items, which names the group. */
  label?: ReactNode;
  children: ReactNode;
}

/** One choice out of several items; Figma draws them as Type=Checkbox items. */
export function DropdownMenuRadioGroup({ value: valueProp, defaultValue = null, onValueChange, label, children, ...rest }: DropdownMenuRadioGroupProps) {
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const value = valueProp === undefined ? uncontrolled : valueProp;
  const select = (next: string) => {
    if (valueProp === undefined) setUncontrolled(next);
    if (next !== value) onValueChange?.(next);
  };
  return (
    <RadioContext.Provider value={{ value, select }}>
      <DropdownMenuGroup {...rest} label={label}>
        {children}
      </DropdownMenuGroup>
    </RadioContext.Provider>
  );
}

export interface DropdownMenuRadioItemProps extends CheckItemProps {
  value: string;
}

/** An item of a DropdownMenuRadioGroup. */
export function DropdownMenuRadioItem({ value, ...rest }: DropdownMenuRadioItemProps) {
  const group = useContext(RadioContext);
  if (!group) throw new Error('<DropdownMenuRadioItem> must be used inside <DropdownMenuRadioGroup>');
  return <CheckItem {...rest} role="menuitemradio" checked={group.value === value} onToggle={() => group.select(value)} />;
}

export interface DropdownMenuSubProps extends Omit<ItemBaseProps, 'children' | 'ref'> {
  /** Figma "Label" of the sub trigger. */
  label: ReactNode;
  /** The submenu's items. */
  children: ReactNode;
  /** Class for the submenu. */
  contentClassName?: string;
}

/** Figma "Dropdown Menu Item", Type=Sub trigger, with its submenu (a Dropdown Menu Content). */
export function DropdownMenuSub({ label, icon, inset = false, disabled = false, className, contentClassName, children, onClick, onMouseMove, onKeyDown, ...rest }: DropdownMenuSubProps) {
  useRoot();
  const id = useId();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const focusFirst = useRef(false);
  const onKeys = useMenuKeys();

  const show = (focus: boolean) => {
    if (disabled) return;
    focusFirst.current = focus;
    setOpen(true);
  };
  const hide = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  useEffect(() => {
    if (!open || !focusFirst.current || !menuRef.current) return;
    itemsOf(menuRef.current)[0]?.focus();
    focusFirst.current = false;
  });

  // The submenu closes when focus (keyboard or pointer) moves to another item of the parent menu.
  useEffect(() => {
    if (!open) return;
    const leave = (event: FocusEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('focusin', leave);
    return () => document.removeEventListener('focusin', leave);
  }, [open]);

  return (
    <div ref={wrapperRef} className="ds-dropdown__sub" role="none">
      <div
        ref={triggerRef}
        role="menuitem"
        tabIndex={-1}
        aria-disabled={disabled || undefined}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? `${id}-menu` : undefined}
        id={`${id}-trigger`}
        {...rest}
        className={cx('ds-dropdown__item', inset && 'ds-dropdown__item--inset', className)}
        onMouseMove={(event) => {
          onMouseMove?.(event);
          hover(event, disabled);
          if (!open) show(false);
        }}
        onClick={(event) => {
          onClick?.(event);
          if (!event.defaultPrevented) show(false);
        }}
        onKeyDown={(event) => {
          onKeyDown?.(event);
          if (event.defaultPrevented || !['ArrowRight', 'Enter', ' '].includes(event.key)) return;
          event.preventDefault();
          show(true);
        }}
      >
        <ItemContent icon={icon}>{label}</ItemContent>
        <span className="ds-dropdown__chevron" aria-hidden>
          {chevronRight}
        </span>
      </div>
      <div
        ref={menuRef}
        id={`${id}-menu`}
        role="menu"
        tabIndex={-1}
        className={cx('ds-dropdown__content', contentClassName)}
        aria-labelledby={rest.id ?? `${id}-trigger`}
        hidden={!open}
        // Tab reaches the parent menus, which close.
        onKeyDown={(event) => onKeys(event, hide, hide)}
        onMouseLeave={unhover}
      >
        {children}
      </div>
    </div>
  );
}

/** Figma "Dropdown Menu Label" Size: xs (12 px text, default) or sm (14 px). */
export type DropdownMenuLabelSize = 'xs' | 'sm';

export interface DropdownMenuLabelProps extends HTMLAttributes<HTMLDivElement> {
  /** Figma "Label". */
  children: ReactNode;
  size?: DropdownMenuLabelSize;
  /** Figma Inset=True. */
  inset?: boolean;
}

/** Figma "Dropdown Menu Label": a heading in the menu. To name the items under it, use DropdownMenuGroup's `label`. */
export function DropdownMenuLabel({ size = 'xs', inset = false, className, children, ...rest }: DropdownMenuLabelProps) {
  return (
    <div role="presentation" {...rest} className={cx('ds-dropdown__label', size === 'sm' && 'ds-dropdown__label--sm', inset && 'ds-dropdown__label--inset', className)}>
      <span>{children}</span>
    </div>
  );
}

export interface DropdownMenuGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** A Dropdown Menu Label above the items, which names the group. */
  label?: ReactNode;
  labelSize?: DropdownMenuLabelSize;
  /** Figma Inset=True for the label. */
  labelInset?: boolean;
  children: ReactNode;
}

/** Items that belong together, optionally under a Dropdown Menu Label. */
export function DropdownMenuGroup({ label, labelSize, labelInset, children, ...rest }: DropdownMenuGroupProps) {
  const id = useId();
  return (
    <div role="group" aria-labelledby={label !== undefined ? id : undefined} {...rest}>
      {label !== undefined && (
        <DropdownMenuLabel id={id} size={labelSize} inset={labelInset}>
          {label}
        </DropdownMenuLabel>
      )}
      {children}
    </div>
  );
}

/** Figma "Dropdown Menu Separator". */
export function DropdownMenuSeparator({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div role="separator" {...rest} className={cx('ds-dropdown__separator', className)} />;
}

/** Figma "Dropdown Menu User Profile" Size: lg (32 px avatar, name and handle, default) or default (20 px avatar, name). */
export type DropdownMenuUserProfileSize = 'lg' | 'default';

export interface DropdownMenuUserProfileProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
  size?: DropdownMenuUserProfileSize;
  /** The person's name (Figma "Label"). */
  name: string;
  /** The second line in Size=lg, e.g. "@handle". */
  handle?: ReactNode;
  /** Avatar picture URL. */
  src?: string;
  /** Avatar initials when there is no picture. */
  initials?: string;
  disabled?: boolean;
}

/** Figma "Dropdown Menu User Profile": an item for the signed-in person. A click runs `onClick` and closes the menu. */
export function DropdownMenuUserProfile({ size = 'lg', name, handle, src, initials, disabled = false, className, onClick, onMouseMove, ...rest }: DropdownMenuUserProfileProps) {
  const root = useRoot();
  const lg = size === 'lg';
  return (
    <div
      role="menuitem"
      tabIndex={-1}
      aria-disabled={disabled || undefined}
      {...rest}
      className={cx('ds-dropdown__item', 'ds-dropdown__profile', className)}
      onMouseMove={(event) => {
        onMouseMove?.(event);
        hover(event, disabled);
      }}
      onClick={(event) => {
        if (disabled) return;
        onClick?.(event);
        if (!event.defaultPrevented) root.close(true);
      }}
    >
      {/* Decorative: the name is in the text next to it. */}
      <Avatar size={lg ? 'default' : 'xs'} src={src} initials={initials} />
      <span className="ds-dropdown__person">
        <span className="ds-dropdown__name">{name}</span>
        {lg && handle !== undefined && <span className="ds-dropdown__handle">{handle}</span>}
      </span>
      <span className="ds-dropdown__chevron" aria-hidden>
        {chevronRight}
      </span>
    </div>
  );
}
