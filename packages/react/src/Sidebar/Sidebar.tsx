import {
  createContext,
  useContext,
  useEffect,
  useId,
  useState,
  type AnchorHTMLAttributes,
  type HTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from 'react';

// Styles live in @helloantek/ds-css (classes ds-sidebar*). A page layout with a sidebar that collapses to an icon rail
// (SidebarTrigger), groups of links with optional collapsible sections, and nested sub menus. Narrow screens start
// collapsed; opening the sidebar there lays it over the content, and a click on the dimmed content or Escape closes it.

const cx = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(' ');

const svg = (path: ReactNode) => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {path}
  </svg>
);
// Figma "Sidebar Collapse Icon" Variant=Default (chevron-right) and the toggle's panel icon.
const chevronRight = svg(<path d="m6 12 4-4-4-4" />);
const panelIcon = svg(
  <>
    <rect x="2" y="2.67" width="12" height="10.67" rx="1.33" />
    <path d="M6 2.67v10.66" />
  </>,
);

const NARROW = '(max-width: 40rem)';

interface LayoutContextValue {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  sidebarId: string;
}
const LayoutContext = createContext<LayoutContextValue | null>(null);

/** The layout's collapsed state, for parts of the page that follow it. */
export function useSidebar() {
  const ctx = useContext(LayoutContext);
  return { collapsed: ctx?.collapsed ?? false, setCollapsed: ctx?.setCollapsed ?? (() => {}), toggle: () => ctx?.setCollapsed(!ctx.collapsed) };
}

export interface SidebarLayoutProps extends HTMLAttributes<HTMLDivElement> {
  /** Collapsed to the icon rail (controlled). */
  collapsed?: boolean;
  /** Starts collapsed (default: on narrow screens only). */
  defaultCollapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  /** A Sidebar and a SidebarInset. */
  children: ReactNode;
}

/** The page: a Sidebar beside a SidebarInset, sharing the collapsed state. */
export function SidebarLayout({ collapsed: collapsedProp, defaultCollapsed, onCollapsedChange, className, children, onClick, onKeyDown, ...rest }: SidebarLayoutProps) {
  const [uncontrolled, setUncontrolled] = useState(defaultCollapsed ?? false);
  const collapsed = collapsedProp ?? uncontrolled;
  const sidebarId = `${useId()}-sidebar`;
  const setCollapsed = (next: boolean) => {
    if (collapsedProp === undefined) setUncontrolled(next);
    onCollapsedChange?.(next);
  };
  // Narrow screens start with the rail, unless the app chose.
  useEffect(() => {
    if (collapsedProp === undefined && defaultCollapsed === undefined && typeof window !== 'undefined' && window.matchMedia?.(NARROW).matches) setUncontrolled(true);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <LayoutContext.Provider value={{ collapsed, setCollapsed, sidebarId }}>
      <div
        {...rest}
        data-state={collapsed ? 'collapsed' : 'expanded'}
        className={cx('ds-sidebar-layout', className)}
        onClick={onClick}
        onKeyDown={(event) => {
          onKeyDown?.(event);
          // Escape closes the sidebar where it lies over the content (narrow screens).
          if (event.key === 'Escape' && !event.defaultPrevented && !collapsed && window.matchMedia?.(NARROW).matches) setCollapsed(true);
        }}
      >
        {children}
        {/* On narrow screens the open sidebar lies over the content; this scrim dims it, and a click on it closes the sidebar. */}
        <div className="ds-sidebar-scrim" aria-hidden="true" onClick={() => setCollapsed(true)} />
      </div>
    </LayoutContext.Provider>
  );
}

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  /** Figma Type: `default` (full height, a line on its end edge) or `floating` (a rounded card 8 px in). */
  variant?: 'default' | 'floating';
  /** Names the sidebar landmark, e.g. "Workspace". */
  'aria-label'?: string;
  /** SidebarHeader, SidebarContent, SidebarFooter. */
  children: ReactNode;
}

/** Sort UI 2.0 "Sidebar". */
export function Sidebar({ variant = 'default', className, children, ...rest }: SidebarProps) {
  const layout = useContext(LayoutContext);
  return (
    <aside id={layout?.sidebarId} {...rest} className={cx('ds-sidebar', variant === 'floating' && 'ds-sidebar--floating', className)}>
      <div className="ds-sidebar__panel">{children}</div>
    </aside>
  );
}

export interface SidebarSectionProps extends HTMLAttributes<HTMLDivElement> {
  /** No line toward the content. */
  plain?: boolean;
}

/** Figma "Header": 8 px padding, a line under it. */
export function SidebarHeader({ plain = false, className, ...rest }: SidebarSectionProps) {
  return <div {...rest} className={cx('ds-sidebar__header', plain && 'ds-sidebar__header--plain', className)} />;
}

/** Figma "Content": the scrolling groups. */
export function SidebarContent({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div {...rest} className={cx('ds-sidebar__content', className)} />;
}

/** Figma "Footer": 8 px padding, a line over it. */
export function SidebarFooter({ plain = false, className, ...rest }: SidebarSectionProps) {
  return <div {...rest} className={cx('ds-sidebar__footer', plain && 'ds-sidebar__footer--plain', className)} />;
}

export interface SidebarGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Figma "Sidebar Group Label". Without it the group is a plain list. */
  label?: ReactNode;
  /** Figma Size: `default` (14/20) or `sm` (12/16, as the demos use). */
  labelSize?: 'default' | 'sm';
  /** Figma "action": an icon button at the end of the label (e.g. "New project"). */
  action?: ReactNode;
  /** Figma Collapsible: the label is a button that opens and closes the group. */
  collapsible?: boolean;
  /** A collapsible group starts open (default true). */
  defaultOpen?: boolean;
  /** SidebarMenuItem elements. */
  children: ReactNode;
}

/** Figma "Sidebar Group": a labelled list of items. */
export function SidebarGroup({ label, labelSize = 'default', action, collapsible = false, defaultOpen = true, className, children, ...rest }: SidebarGroupProps) {
  const id = useId();
  const [open, setOpen] = useState(defaultOpen);
  const labelClass = cx('ds-sidebar__group-label', labelSize === 'sm' && 'ds-sidebar__group-label--sm');
  const menu = <ul className="ds-sidebar__menu">{children}</ul>;
  return (
    <div role="group" aria-labelledby={label !== undefined ? `${id}-label` : undefined} {...rest} className={cx('ds-sidebar__group', className)}>
      {label !== undefined && (
        <div className="ds-sidebar__group-head">
          {collapsible ? (
            <button type="button" id={`${id}-label`} className={labelClass} aria-expanded={open} aria-controls={`${id}-items`} onClick={() => setOpen(!open)}>
              <span className="ds-sidebar__group-text">{label}</span>
              <span className="ds-sidebar__chevron">{chevronRight}</span>
            </button>
          ) : (
            <div id={`${id}-label`} className={labelClass}>
              <span className="ds-sidebar__group-text">{label}</span>
            </div>
          )}
          {action !== undefined && <span className="ds-sidebar__action">{action}</span>}
        </div>
      )}
      {collapsible ? (
        <div id={`${id}-items`} className="ds-sidebar__sub" data-state={open ? 'open' : 'closed'}>
          <div className="ds-sidebar__sub-clip">{menu}</div>
        </div>
      ) : (
        menu
      )}
    </div>
  );
}

export interface SidebarMenuItemProps extends Omit<AnchorHTMLAttributes<HTMLElement>, 'title' | 'children'> {
  /** The item's name (Figma "Menu Item"). */
  label: ReactNode;
  /** Figma "leading-icon": a 16 px icon (the only thing the collapsed rail shows); with `size="lg"` a 32 px picture. */
  icon?: ReactNode;
  /** A link to this URL; without it the item is a button (or opens its sub menu). */
  href?: string;
  /** Figma State=active: the current page (`aria-current="page"`). */
  active?: boolean;
  /** Figma Size: `default` (32 px), `sm` (28 px) or `lg` (48 px, with `description`). */
  size?: 'default' | 'sm' | 'lg';
  /** Size=lg: a 12/16 muted line under the name (a handle, a plan). */
  description?: ReactNode;
  /** Figma "Badge": a count or short note at the end. */
  badge?: ReactNode;
  /** Figma "dropdown": an icon button at the end of the row (e.g. a DropdownMenu of actions). */
  action?: ReactNode;
  /** An icon at the end instead of the chevron (Figma Collapse Icon Up Down / Vertical, e.g. a switcher). */
  endIcon?: ReactNode;
  /** Sub items (Figma "Sidebar Menu Sub Item"): the item becomes a button that opens them. */
  children?: ReactNode;
  /** The sub menu starts open. */
  defaultOpen?: boolean;
  disabled?: boolean;
}

/** Figma "Sidebar Menu Item" with its "Sidebar Menu Button" (and "Sidebar Menu Sub Item"s when it has children). */
export function SidebarMenuItem({ label, icon, href, active = false, size = 'default', description, badge, action, endIcon, children, defaultOpen = false, disabled = false, className, onClick, ...rest }: SidebarMenuItemProps) {
  const layout = useContext(LayoutContext);
  const id = useId();
  const [open, setOpen] = useState(defaultOpen);
  const hasSub = children !== undefined && children !== null && children !== false;
  const classes = cx('ds-sidebar__button', size !== 'default' && `ds-sidebar__button--${size}`, className);
  // The collapsed rail shows icons only; a text label also names the item in a native tooltip there.
  const tip = layout?.collapsed && typeof label === 'string' ? label : undefined;
  const content = (
    <>
      {icon !== undefined && (
        <span className="ds-sidebar__icon" aria-hidden>
          {icon}
        </span>
      )}
      {size === 'lg' ? (
        <span className="ds-sidebar__text">
          <span className="ds-sidebar__label">{label}</span>
          {description !== undefined && <span className="ds-sidebar__description">{description}</span>}
        </span>
      ) : (
        <span className="ds-sidebar__label">{label}</span>
      )}
      {badge !== undefined && <span className="ds-sidebar__badge">{badge}</span>}
      {hasSub ? (
        <span className="ds-sidebar__chevron" aria-hidden>
          {chevronRight}
        </span>
      ) : endIcon !== undefined ? (
        <span className="ds-sidebar__chevron ds-sidebar__chevron--static" aria-hidden>
          {endIcon}
        </span>
      ) : null}
    </>
  );
  const click = (event: MouseEvent<HTMLElement>) => {
    onClick?.(event as MouseEvent<HTMLAnchorElement>);
    if (event.defaultPrevented || disabled) return;
    if (hasSub && href === undefined) setOpen(!open);
  };
  return (
    <li className="ds-sidebar__item">
      {href !== undefined && !hasSub ? (
        <a
          {...rest}
          href={disabled ? undefined : href}
          aria-current={active ? 'page' : undefined}
          aria-disabled={disabled || undefined}
          title={tip}
          className={classes}
          onClick={click}
        >
          {content}
        </a>
      ) : (
        <button
          {...(rest as HTMLAttributes<HTMLButtonElement>)}
          type="button"
          disabled={disabled}
          data-active={active ? '' : undefined}
          aria-expanded={hasSub ? open : undefined}
          aria-controls={hasSub ? `${id}-sub` : undefined}
          title={tip}
          className={classes}
          onClick={click}
        >
          {content}
        </button>
      )}
      {action !== undefined && <span className="ds-sidebar__action">{action}</span>}
      {hasSub && (
        <div id={`${id}-sub`} className="ds-sidebar__sub" data-state={open ? 'open' : 'closed'}>
          <div className="ds-sidebar__sub-clip">
            <ul className="ds-sidebar__menu ds-sidebar__menu--sub">{children}</ul>
          </div>
        </div>
      )}
    </li>
  );
}

export interface SidebarTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  /** The button's name (default "Toggle sidebar"). */
  'aria-label'?: string;
}

/** The panel-icon button that collapses and expands the sidebar. */
export function SidebarTrigger({ className, onClick, 'aria-label': ariaLabel = 'Toggle sidebar', ...rest }: SidebarTriggerProps) {
  const layout = useContext(LayoutContext);
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      aria-expanded={layout ? !layout.collapsed : undefined}
      aria-controls={layout?.sidebarId}
      {...rest}
      className={cx('ds-sidebar-trigger', className)}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) layout?.setCollapsed(!layout.collapsed);
      }}
    >
      {panelIcon}
    </button>
  );
}

export interface SidebarInsetProps extends HTMLAttributes<HTMLElement> {
  /** `main` (default) for the page's content, `div` when the layout sits inside a page that has its main. */
  as?: 'main' | 'div';
}

/** The page content beside the sidebar. */
export function SidebarInset({ as: Root = 'main', className, ...rest }: SidebarInsetProps) {
  return <Root {...rest} className={cx('ds-sidebar-inset', className)} />;
}
