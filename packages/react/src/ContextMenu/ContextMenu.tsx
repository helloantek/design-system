import {
  cloneElement,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type KeyboardEvent,
  type CSSProperties,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
  type Ref,
} from 'react';
import { itemsOf, RootContext, unhover, useMenuKeys } from '../DropdownMenu/DropdownMenu';

// Styles live in @helloantek/ds-css (classes ds-context-menu, ds-dropdown*); this component renders the markup and
// the behaviour: a right-click (or Shift+F10 / the Menu key) opens a WAI-ARIA menu at the pointer, and focus moves
// onto it as in DropdownMenu. The items are the Dropdown Menu parts.

const cx = (...classes: (string | false | null | undefined)[]) => classes.filter(Boolean).join(' ') || undefined;

/** Keeps a menu of this size, opened at (x, y), inside the viewport: left of the pointer near the right edge, moved up near the bottom. */
function fit(x: number, y: number, width: number, height: number) {
  const vw = document.documentElement.clientWidth;
  const vh = document.documentElement.clientHeight;
  return {
    left: x + width > vw ? Math.max(0, x - width) : x,
    top: y + height > vh ? Math.max(0, vh - height) : y,
  };
}

export interface ContextMenuProps {
  /**
   * The area that opens the menu on a right-click, or with Shift+F10 or the Menu key while it has focus. It gets a
   * `tabIndex` of 0 (unless it sets one), `data-open` while the menu is open, and the handlers.
   */
  trigger: ReactElement<HTMLAttributes<HTMLElement> & { ref?: Ref<HTMLElement> }>;
  /** Figma "items": DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuSub, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuRow. */
  children: ReactNode;
  /** Names the menu (the area does not), e.g. "Photo actions". */
  'aria-label': string;
  /** Called when the menu opens or closes. */
  onOpenChange?: (open: boolean) => void;
  /** Leaves the browser's own menu in place. */
  disabled?: boolean;
  /** Class for the menu (Figma "Dropdown Menu Content"), e.g. to set its width. */
  className?: string;
  /** Style for the menu, e.g. its width; its position is set by the component. */
  style?: CSSProperties;
}

/** Figma "Context Menu": Dropdown Menu Content opened at the pointer. */
export function ContextMenu({ trigger, children, 'aria-label': ariaLabel, onOpenChange, disabled = false, className, style }: ContextMenuProps) {
  const id = useId();
  const menuId = `${id}-menu`;
  const [at, setAt] = useState<{ x: number; y: number } | null>(null);
  const open = at !== null;
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  // Where focus goes once the menu has opened: the first item (keyboard) or the menu itself (pointer).
  const pending = useRef<'first' | 'menu' | null>(null);
  // A keyboard opening also fires a contextmenu event on some systems; that one must not move the menu.
  const openedByKey = useRef(0);
  const onKeys = useMenuKeys();

  const show = (x: number, y: number, focus: 'first' | 'menu') => {
    pending.current = focus;
    setAt({ x, y });
    if (!open) onOpenChange?.(true);
  };
  const close = (focusTrigger: boolean) => {
    if (!open) return;
    setAt(null);
    onOpenChange?.(false);
    if (focusTrigger) triggerRef.current?.focus();
  };

  // Place the menu at the pointer, inside the viewport, before it is painted; then move focus onto it.
  useLayoutEffect(() => {
    const menu = menuRef.current;
    if (!at || !menu) return;
    const { left, top } = fit(at.x, at.y, menu.offsetWidth, menu.offsetHeight);
    menu.style.left = `${left}px`;
    menu.style.top = `${top}px`;
    if (pending.current) {
      (pending.current === 'first' ? (itemsOf(menu)[0] ?? menu) : menu).focus();
      pending.current = null;
    }
  }, [at]);

  // A click outside closes the menu, as do focus leaving it, scrolling, resizing and the window losing focus.
  useEffect(() => {
    if (!open) return;
    const outside = (event: Event) => {
      if (!rootRef.current?.contains(event.target as Node)) close(false);
    };
    const dismiss = (event: Event) => {
      if (!menuRef.current?.contains(event.target as Node)) close(false);
    };
    const blur = () => close(false);
    document.addEventListener('pointerdown', outside);
    document.addEventListener('focusin', outside);
    document.addEventListener('scroll', dismiss, true);
    window.addEventListener('resize', blur);
    window.addEventListener('blur', blur);
    return () => {
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('focusin', outside);
      document.removeEventListener('scroll', dismiss, true);
      window.removeEventListener('resize', blur);
      window.removeEventListener('blur', blur);
    };
  });

  const { ref: triggerOwnRef, onContextMenu, onKeyDown, tabIndex } = trigger.props;
  const setTriggerRef = (node: HTMLElement | null) => {
    triggerRef.current = node;
    if (typeof triggerOwnRef === 'function') triggerOwnRef(node);
    else if (triggerOwnRef) (triggerOwnRef as { current: HTMLElement | null }).current = node;
  };

  return (
    <RootContext.Provider value={{ close }}>
      <div ref={rootRef} className="ds-context-menu">
        {cloneElement(trigger, {
          ref: setTriggerRef,
          // data-open lets the app style the area while its menu is open.
          ...({ 'data-open': open || undefined } as HTMLAttributes<HTMLElement>),
          tabIndex: tabIndex ?? 0,
          'aria-controls': open ? menuId : undefined,
          onContextMenu: (event: MouseEvent<HTMLElement>) => {
            onContextMenu?.(event);
            if (event.defaultPrevented || disabled) return;
            event.preventDefault();
            if (open && Date.now() - openedByKey.current < 500) return;
            show(event.clientX, event.clientY, 'menu');
          },
          onKeyDown: (event: KeyboardEvent<HTMLElement>) => {
            onKeyDown?.(event);
            if (event.defaultPrevented || disabled || event.target !== event.currentTarget) return;
            if (event.key === 'ContextMenu' || (event.key === 'F10' && event.shiftKey)) {
              event.preventDefault();
              openedByKey.current = Date.now();
              // From the keyboard the menu opens at the area's top left corner, as browsers place their own.
              const box = event.currentTarget.getBoundingClientRect();
              show(box.left, box.top, 'first');
            }
          },
        })}
        <div
          ref={menuRef}
          id={menuId}
          role="menu"
          tabIndex={-1}
          className={cx('ds-dropdown__content', className)}
          style={style}
          aria-label={ariaLabel}
          hidden={!open}
          onContextMenu={(event) => event.preventDefault()}
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
