import { createContext, useContext, useId, useLayoutEffect, useRef, useState, type HTMLAttributes, type KeyboardEvent, type ReactNode } from 'react';
import { DropdownMenu } from '../DropdownMenu';
import { itemsOf } from '../DropdownMenu/DropdownMenu';

// Styles live in @helloantek/ds-css (classes ds-menubar*, menus ds-dropdown*). The WAI-ARIA menubar pattern
// (https://www.w3.org/WAI/ARIA/apg/patterns/menubar/): one Tab stop; Arrow Left / Right (Home / End) move between
// the triggers; Enter, Space or Arrow Down opens a menu on its first item, Arrow Up on its last. While a menu is open,
// Arrow Left / Right in it (and the pointer over another trigger) switch to the neighbouring menu. Each menu is a
// DropdownMenu, so items, checkbox and radio items, submenus, Escape and type-ahead work as there.

const cx = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(' ');

interface MenubarContextValue {
  open: string | null;
  setOpen: (update: string | null | ((current: string | null) => string | null)) => void;
}
const MenubarContext = createContext<MenubarContextValue | null>(null);

export interface MenubarProps extends HTMLAttributes<HTMLDivElement> {
  /** MenubarMenu elements (Figma "triggers"). */
  children: ReactNode;
  /** Names the menubar, e.g. "Editor". */
  'aria-label'?: string;
  /** The `value` of the menu that is open on first render. */
  defaultValue?: string;
}

const triggersOf = (bar: HTMLElement) =>
  Array.from(bar.querySelectorAll<HTMLButtonElement>(':scope > .ds-dropdown > .ds-menubar__trigger')).filter((el) => !el.disabled);

/** Sort UI 2.0 "Menubar". */
export function Menubar({ children, className, defaultValue, onKeyDown, ...rest }: MenubarProps) {
  const [open, setOpen] = useState<string | null>(defaultValue ?? null);
  const ref = useRef<HTMLDivElement>(null);
  // The trigger that holds the Tab stop (roving tabindex): the last one focused, the first one at the start.
  const current = useRef<HTMLElement | null>(null);

  const syncTabStop = () => {
    const bar = ref.current;
    if (!bar) return;
    const triggers = triggersOf(bar);
    if (!current.current || !triggers.includes(current.current as HTMLButtonElement)) current.current = triggers[0] ?? null;
    for (const t of bar.querySelectorAll<HTMLElement>(':scope > .ds-dropdown > .ds-menubar__trigger')) t.tabIndex = t === current.current ? 0 : -1;
  };
  useLayoutEffect(syncTabStop);

  const keys = (event: KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(event);
    const bar = ref.current;
    if (event.defaultPrevented || !bar) return;
    const triggers = triggersOf(bar);
    const target = event.target as HTMLElement;
    const onTrigger = triggers.indexOf(target as HTMLButtonElement);
    // A key in an open top-level menu: Left / Right switch menus, unless the item opens a submenu (Right) or the key
    // came from inside a submenu (the submenu handled it).
    const menu = target.closest('[role="menu"]');
    const inTopMenu = menu !== null && menu.parentElement?.parentElement === bar;
    const from = onTrigger >= 0 ? onTrigger : inTopMenu ? triggers.indexOf(menu.parentElement!.querySelector('.ds-menubar__trigger') as HTMLButtonElement) : -1;
    if (from < 0) return;
    let next = -1;
    if (event.key === 'ArrowRight' && !(inTopMenu && target.getAttribute('aria-haspopup') === 'menu')) next = (from + 1) % triggers.length;
    else if (event.key === 'ArrowLeft') next = (from - 1 + triggers.length) % triggers.length;
    else if (onTrigger >= 0 && event.key === 'Home') next = 0;
    else if (onTrigger >= 0 && event.key === 'End') next = triggers.length - 1;
    if (next < 0) return;
    event.preventDefault();
    const nextTrigger = triggers[next];
    current.current = nextTrigger;
    nextTrigger.focus();
    if (inTopMenu || open !== null) {
      // Keep a menu open while moving: open the neighbour on its first item.
      setOpen(nextTrigger.dataset.value ?? null);
      requestAnimationFrame(() => {
        const nextMenu = nextTrigger.parentElement?.querySelector<HTMLElement>(':scope > [role="menu"]');
        if (nextMenu) (itemsOf(nextMenu)[0] ?? nextMenu).focus();
      });
    }
  };

  return (
    <MenubarContext.Provider value={{ open, setOpen }}>
      <div
        ref={ref}
        role="menubar"
        {...rest}
        className={cx('ds-menubar', className)}
        onKeyDown={keys}
        onFocus={(event) => {
          if (!(event.target as HTMLElement).classList.contains('ds-menubar__trigger')) return;
          current.current = event.target as HTMLElement;
          syncTabStop();
        }}
      >
        {children}
      </div>
    </MenubarContext.Provider>
  );
}

export interface MenubarMenuProps {
  /** The trigger's label (Figma "Label"). */
  label: ReactNode;
  /** Names the menu for `Menubar defaultValue`. */
  value?: string;
  /** The menu's items: DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuSub, DropdownMenuSeparator… */
  children: ReactNode;
  /** Lines the menu up with the trigger's start (default) or end edge. */
  align?: 'start' | 'end';
  disabled?: boolean;
  /** Class for the menu, e.g. to set its width. */
  className?: string;
}

/** One menu of the bar: Figma "Menubar Trigger" (State=Default / Hover / Open) with its Dropdown Menu. */
export function MenubarMenu({ label, value, children, align = 'start', disabled = false, className }: MenubarMenuProps) {
  const bar = useContext(MenubarContext);
  if (!bar) throw new Error('MenubarMenu must be inside a Menubar.');
  const autoId = useId();
  const id = value ?? autoId;
  const open = bar.open === id;
  return (
    <DropdownMenu
      open={open}
      onOpenChange={(next) => bar.setOpen(next ? id : (cur) => (cur === id ? null : cur))}
      align={align}
      className={className}
      trigger={
        <button
          type="button"
          role="menuitem"
          className="ds-menubar__trigger"
          data-value={id}
          disabled={disabled}
          onPointerMove={(event) => {
            // While another menu is open, moving the pointer onto this trigger switches to its menu (a move, not
            // pointerenter, so a cursor resting where the bar renders does not switch menus by itself).
            if (event.pointerType === 'mouse' && bar.open !== null && !open && !disabled) {
              event.currentTarget.focus();
              bar.setOpen(id);
            }
          }}
        >
          {label}
        </button>
      }
    >
      {children}
    </DropdownMenu>
  );
}
