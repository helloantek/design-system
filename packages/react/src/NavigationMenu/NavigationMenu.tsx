import {
  Children,
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type AnchorHTMLAttributes,
  type CSSProperties,
  type FocusEvent,
  type HTMLAttributes,
  type KeyboardEvent,
  type PointerEvent,
  type ReactNode,
} from 'react';

// Styles live in @helloantek/ds-css (classes ds-navigation-menu*). A nav landmark with a list of triggers and links.
// A trigger is a button with aria-expanded that opens its panel of links under it: on click, on Enter / Space /
// Arrow Down (focus moves to the first link), or after resting the mouse on it. One panel is open at a time; Escape,
// a click outside or focus leaving the item closes it. Arrow Left / Right move between the top-level items.

const cx = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(' ');

const chevron = (
  <svg className="ds-navigation-menu__chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.43} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="m4 6 4 4 4-4" />
  </svg>
);

const HOVER_OPEN_MS = 150;
const HOVER_CLOSE_MS = 250;

interface MenuContextValue {
  open: string | null;
  setOpen: (update: string | null | ((current: string | null) => string | null)) => void;
}
const MenuContext = createContext<MenuContextValue | null>(null);

export interface NavigationMenuProps extends HTMLAttributes<HTMLElement> {
  /** NavigationMenuItem elements. */
  children: ReactNode;
  /** Names the landmark (default "Main"). */
  'aria-label'?: string;
  /** The `value` of the item whose panel is open on first render. */
  defaultValue?: string;
}

/** Sort UI 2.0 "Navigation Menu". */
export function NavigationMenu({ children, className, 'aria-label': ariaLabel = 'Main', defaultValue, onKeyDown, ...rest }: NavigationMenuProps) {
  const [open, setOpen] = useState<string | null>(defaultValue ?? null);
  const ref = useRef<HTMLElement>(null);

  // A click outside closes the open panel.
  useEffect(() => {
    if (open === null) return;
    const outside = (event: Event) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(null);
    };
    document.addEventListener('pointerdown', outside);
    return () => document.removeEventListener('pointerdown', outside);
  }, [open]);

  // Arrow Left / Right (and Home / End) move between the top-level triggers and links.
  const keys = (event: KeyboardEvent<HTMLElement>) => {
    onKeyDown?.(event);
    if (event.defaultPrevented || !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    const tops = [...(ref.current?.querySelectorAll<HTMLElement>(':scope > .ds-navigation-menu__list > li > .ds-navigation-menu__trigger') ?? [])].filter(
      (el) => !(el as HTMLButtonElement).disabled && el.getAttribute('aria-disabled') !== 'true',
    );
    const at = tops.indexOf(document.activeElement as HTMLElement);
    if (at < 0) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? tops.length - 1 : (at + (event.key === 'ArrowRight' ? 1 : -1) + tops.length) % tops.length;
    tops[next].focus();
  };

  return (
    <MenuContext.Provider value={{ open, setOpen }}>
      <nav ref={ref} aria-label={ariaLabel} {...rest} className={cx('ds-navigation-menu', className)} onKeyDown={keys}>
        <ul className="ds-navigation-menu__list">{children}</ul>
      </nav>
    </MenuContext.Provider>
  );
}

export interface NavigationMenuItemProps extends Omit<HTMLAttributes<HTMLLIElement>, 'children'> {
  /** The trigger's label (Figma "Label"). */
  label: ReactNode;
  /** Names the item for `NavigationMenu defaultValue`. */
  value?: string;
  /** Figma Type=Link: the item is a link to this URL instead of a trigger with a panel. */
  href?: string;
  /** Figma State=Active on a link: the current page (`aria-current="page"`). */
  active?: boolean;
  /** Figma State=Disabled. */
  disabled?: boolean;
  /** The panel's links and content (Figma "Navigation Menu Content"); omit with `href`. */
  children?: ReactNode;
  /** Panel width (default 288 px), e.g. `368px`. */
  width?: string;
  /** Lines the panel up with the trigger's start (default) or end edge. */
  align?: 'start' | 'end';
  /** No padding inside the panel, for content with its own columns ("Groups" demo). */
  flush?: boolean;
  /** Class for the panel. */
  contentClassName?: string;
  /** Called when the item's panel opens or closes. */
  onOpenChange?: (open: boolean) => void;
}

/** A top-level item: Figma "Navigation Menu Trigger" with its panel, or Type=Link. */
export function NavigationMenuItem({
  label,
  value,
  href,
  active = false,
  disabled = false,
  children,
  width,
  align = 'start',
  flush = false,
  contentClassName,
  onOpenChange,
  className,
  onPointerMove,
  onPointerLeave,
  ...rest
}: NavigationMenuItemProps) {
  const menu = useContext(MenuContext);
  if (!menu) throw new Error('NavigationMenuItem must be inside a NavigationMenu.');
  const autoId = useId();
  const id = value ?? autoId;
  const contentId = `${autoId}-content`;
  const open = menu.open === id;
  const itemRef = useRef<HTMLLIElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const hoverOpenedAt = useRef(0);
  const opening = useRef(false);
  const openedByHover = useRef(false);

  const wasOpen = useRef(open);
  useEffect(() => {
    if (wasOpen.current !== open) onOpenChange?.(open);
    wasOpen.current = open;
  }, [open, onOpenChange]);
  useEffect(() => () => clearTimeout(timer.current), []);

  if (href !== undefined) {
    return (
      <li {...rest} className={cx('ds-navigation-menu__item', className)}>
        <a
          className="ds-navigation-menu__trigger"
          href={disabled ? undefined : href}
          aria-current={active ? 'page' : undefined}
          aria-disabled={disabled || undefined}
          role={disabled ? 'link' : undefined}
          onFocus={() => menu.setOpen(null)}
        >
          {label}
        </a>
      </li>
    );
  }

  // Closing only closes this item's panel, even when a timer fires after another item has opened.
  const setOpen = (next: boolean) => menu.setOpen(next ? id : (current) => (current === id ? null : current));
  const focusFirstLink = () =>
    requestAnimationFrame(() => itemRef.current?.querySelector<HTMLElement>('.ds-navigation-menu__content a, .ds-navigation-menu__content button')?.focus());

  // Resting a moving mouse on the trigger opens the panel; leaving the item closes a panel the mouse opened, after a
  // moment (touch and pen use click). It starts on pointermove, not pointerenter, so a cursor that merely rests where
  // the menu renders opens nothing, and a panel opened by the keyboard or a click stays open when the pointer leaves.
  // A click, a key or focus leaving decides over a pending hover: the timer must not reopen (or close) the panel after
  // it (a busy main thread runs input before timers, so Escape could land before a hover timer started just earlier).
  const cancelHover = () => {
    clearTimeout(timer.current);
    opening.current = false;
  };
  const move = (event: PointerEvent<HTMLLIElement>) => {
    onPointerMove?.(event);
    if (event.pointerType !== 'mouse' || disabled) return;
    if (open) {
      cancelHover();
      return;
    }
    if (opening.current) return;
    opening.current = true;
    timer.current = setTimeout(() => {
      opening.current = false;
      hoverOpenedAt.current = Date.now();
      openedByHover.current = true;
      setOpen(true);
    }, menu.open === null ? HOVER_OPEN_MS : 0);
  };
  const leave = (event: PointerEvent<HTMLLIElement>) => {
    onPointerLeave?.(event);
    if (event.pointerType !== 'mouse') return;
    clearTimeout(timer.current);
    opening.current = false;
    if (open && openedByHover.current) timer.current = setTimeout(() => setOpen(false), HOVER_CLOSE_MS);
  };
  // A click toggles, except right after the mouse opened it (the click that follows resting on the trigger).
  const click = () => {
    cancelHover();
    if (open && Date.now() - hoverOpenedAt.current < 500) {
      openedByHover.current = false;
      return;
    }
    hoverOpenedAt.current = 0;
    openedByHover.current = false;
    setOpen(!open);
  };
  const triggerKeys = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      cancelHover();
      openedByHover.current = false;
      setOpen(true);
      focusFirstLink();
    }
  };
  const itemKeys = (event: KeyboardEvent<HTMLLIElement>) => {
    if (event.key === 'Escape' && open) {
      event.stopPropagation();
      cancelHover();
      setOpen(false);
      triggerRef.current?.focus();
    }
  };
  // Focus leaving the item (Tab past the last link, or to another item) closes the panel.
  const blur = (event: FocusEvent<HTMLLIElement>) => {
    if (open && !itemRef.current?.contains(event.relatedTarget as Node | null) && event.relatedTarget !== null) {
      cancelHover();
      setOpen(false);
    }
  };

  return (
    <li ref={itemRef} {...rest} className={cx('ds-navigation-menu__item', className)} onPointerMove={move} onPointerLeave={leave} onKeyDown={itemKeys} onBlur={blur}>
      <button
        ref={triggerRef}
        type="button"
        className="ds-navigation-menu__trigger"
        aria-expanded={open}
        aria-controls={contentId}
        disabled={disabled}
        onClick={click}
        onKeyDown={triggerKeys}
      >
        {label}
        {chevron}
      </button>
      <div
        id={contentId}
        hidden={!open}
        className={cx('ds-navigation-menu__content', align === 'end' && 'ds-navigation-menu__content--end', flush && 'ds-navigation-menu__content--flush', contentClassName)}
        style={width ? ({ '--navigation-menu-width': width } as CSSProperties) : undefined}
      >
        {children}
      </div>
    </li>
  );
}

export interface NavigationMenuListProps extends HTMLAttributes<HTMLUListElement> {
  /** Equal columns ("Grid" demo); default 1. */
  columns?: number;
  /** NavigationMenuLink elements (each is wrapped in a list item). */
  children: ReactNode;
}

/** A list of links in a panel: a column, or a grid of `columns`. */
export function NavigationMenuList({ columns = 1, className, style, children, ...rest }: NavigationMenuListProps) {
  return (
    <ul {...rest} className={cx('ds-navigation-menu__links', className)} style={{ ...(columns !== 1 ? ({ '--navigation-menu-columns': columns } as CSSProperties) : {}), ...style }}>
      {Children.toArray(children).map((child, i) => (
        <li key={isValidElement(child) && child.key !== null ? child.key : i}>{child}</li>
      ))}
    </ul>
  );
}

export interface NavigationMenuLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'title'> {
  href: string;
  /** The link's title (14/20, Medium with a description). */
  title: ReactNode;
  /** A 12/16 muted line under the title. */
  description?: ReactNode;
  /** A 16 px icon ("With icons" demo). */
  icon?: ReactNode;
  /** The icon before the text (default) or above it. */
  iconPlacement?: 'start' | 'top';
  /** Figma State=Active: the current page (`aria-current="page"`). */
  active?: boolean;
}

/** Figma "Navigation Menu Link". */
export function NavigationMenuLink({ title, description, icon, iconPlacement = 'start', active = false, className, ...rest }: NavigationMenuLinkProps) {
  return (
    <a aria-current={active ? 'page' : undefined} {...rest} className={cx('ds-navigation-menu__link', icon !== undefined && iconPlacement === 'top' && 'ds-navigation-menu__link--top', className)}>
      {icon !== undefined && (
        <span className="ds-navigation-menu__link-icon" aria-hidden>
          {icon}
        </span>
      )}
      <span className="ds-navigation-menu__link-text">
        <span className="ds-navigation-menu__link-title">{title}</span>
        {description !== undefined && <span className="ds-navigation-menu__link-description">{description}</span>}
      </span>
    </a>
  );
}
