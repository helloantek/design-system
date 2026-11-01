import { Children, createContext, isValidElement, useContext, useEffect, useId, useState, type HTMLAttributes, type KeyboardEvent, type ReactElement, type ReactNode } from 'react';

// Styles live in @helloantek/ds-css (classes ds-tabs*). WAI-ARIA tabs: a role="tablist" of role="tab" buttons, each
// controlling a role="tabpanel". One Tab stop for the list: arrow keys (and Home / End) move between the tabs and
// select them as they go (automatic activation); disabled tabs are skipped.

/** Figma Variant: `line` with `orientation="vertical"` is Figma "Line Vertical". */
export type TabsVariant = 'default' | 'secondary' | 'line';
/** Figma Size. */
export type TabsSize = 'default' | 'lg';
/** Figma Orientation. */
export type TabsOrientation = 'horizontal' | 'vertical';

interface TabsContext {
  value: string;
  select: (value: string) => void;
  variant: TabsVariant;
  size: TabsSize;
  orientation: TabsOrientation;
  idFor: (part: 'tab' | 'panel', value: string) => string;
  panels: ReadonlySet<string>;
  registerPanel: (value: string) => () => void;
}

const Context = createContext<TabsContext | null>(null);
const ListContext = createContext<string | undefined>(undefined);

const cx = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(' ');

function useTabs(component: string) {
  const tabs = useContext(Context);
  if (!tabs) throw new Error(`${component} must be inside Tabs`);
  return tabs;
}

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'onChange'> {
  /** The selected tab's value (controlled). */
  value?: string;
  /** The tab selected at first (uncontrolled). */
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  /** Figma Variant (default `default`). */
  variant?: TabsVariant;
  /** Figma Size (default `default`). */
  size?: TabsSize;
  /** Figma Orientation (default `horizontal`): a vertical list sits beside the panels; arrow keys follow it. */
  orientation?: TabsOrientation;
  children: ReactNode;
}

/** Holds a TabsList and its TabsContent panels and knows which tab is selected. */
export function Tabs({ value: valueProp, defaultValue = '', onValueChange, variant = 'default', size = 'default', orientation = 'horizontal', className, children, ...rest }: TabsProps) {
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const value = valueProp ?? uncontrolled;
  const base = useId();
  const select = (next: string) => {
    if (next === value) return;
    if (valueProp === undefined) setUncontrolled(next);
    onValueChange?.(next);
  };
  const idFor = (part: 'tab' | 'panel', v: string) => `${base}-${part}-${v.replace(/[^\w-]/g, '_')}`;
  // Tabs point at their panel (aria-controls) only when it exists: a tablist used as a filter has no panels.
  const [panels, setPanels] = useState<ReadonlySet<string>>(new Set());
  const registerPanel = (v: string) => {
    setPanels((set) => new Set(set).add(v));
    return () =>
      setPanels((set) => {
        const next = new Set(set);
        next.delete(v);
        return next;
      });
  };
  return (
    <Context.Provider value={{ value, select, variant, size, orientation, idFor, panels, registerPanel }}>
      <div {...rest} className={cx('ds-tabs', orientation === 'vertical' && 'ds-tabs--vertical', className)}>
        {children}
      </div>
    </Context.Provider>
  );
}

export interface TabsListProps extends HTMLAttributes<HTMLDivElement> {
  /** Not a Figma property ("Full width" demo): the list fills its container and the tabs share it. */
  fullWidth?: boolean;
  /** Name the list (`aria-label` or `aria-labelledby`) when the page has more than one. */
  'aria-label'?: string;
  children: ReactNode;
}

/** Figma "Tabs List": the row (or column) of TabsTriggers. */
export function TabsList({ fullWidth = false, className, children, onKeyDown, ...rest }: TabsListProps) {
  const tabs = useTabs('TabsList');
  // One Tab stop: the selected tab, or the first enabled tab when none is selected.
  const triggers = Children.toArray(children).filter((c): c is ReactElement<TabsTriggerProps> => isValidElement<TabsTriggerProps>(c) && typeof c.props.value === 'string');
  const tabValue = triggers.some((t) => t.props.value === tabs.value && !t.props.disabled) ? tabs.value : triggers.find((t) => !t.props.disabled)?.props.value;
  const vertical = tabs.orientation === 'vertical';
  return (
    <ListContext.Provider value={tabValue}>
      <div
        {...rest}
        role="tablist"
        aria-orientation={tabs.orientation}
        className={cx(
          'ds-tabs-list',
          tabs.variant !== 'default' && `ds-tabs-list--${tabs.variant}`,
          vertical && 'ds-tabs-list--vertical',
          tabs.size === 'lg' && 'ds-tabs-list--size-lg',
          fullWidth && 'ds-tabs-list--full-width',
          className,
        )}
        onKeyDown={(event: KeyboardEvent<HTMLDivElement>) => {
          onKeyDown?.(event);
          const keys = vertical ? ['ArrowUp', 'ArrowDown'] : ['ArrowLeft', 'ArrowRight'];
          if (event.defaultPrevented || ![...keys, 'Home', 'End'].includes(event.key)) return;
          const items = [...event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]:not(:disabled)')];
          const at = items.indexOf(document.activeElement as HTMLButtonElement);
          if (at < 0) return;
          event.preventDefault();
          const next = event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1 : (at + (event.key === keys[1] ? 1 : -1) + items.length) % items.length;
          items[next].focus();
          const v = items[next].dataset.value;
          if (v !== undefined) tabs.select(v);
        }}
      >
        {children}
      </div>
    </ListContext.Provider>
  );
}

export interface TabsTriggerProps {
  /** The value this tab selects; its TabsContent has the same value. */
  value: string;
  /** Figma "Label". */
  children: ReactNode;
  /** Figma "Icon": a 17 px icon (`currentColor`) before the label, or above it with `description`. */
  icon?: ReactNode;
  /** Figma "Count": a number after the label (muted). */
  count?: ReactNode;
  /** Figma Layout=Eyebrow: a small line above the label (a metric name, a step). */
  eyebrow?: ReactNode;
  /** Figma Layout=Icon top: a small line under the label, with the icon above both. */
  description?: ReactNode;
  disabled?: boolean;
  className?: string;
}

/** Figma "Tabs Trigger": one tab. */
export function TabsTrigger({ value, children, icon, count, eyebrow, description, disabled = false, className }: TabsTriggerProps) {
  const tabs = useTabs('TabsTrigger');
  const tabValue = useContext(ListContext);
  const selected = tabs.value === value;
  const iconEl = icon !== undefined && (
    <span className="ds-tabs__icon" aria-hidden>
      {icon}
    </span>
  );
  const label = <span className="ds-tabs__label">{children}</span>;
  const countEl = count !== undefined && <span className="ds-tabs__count">{count}</span>;
  const layout = description !== undefined ? 'icon-top' : eyebrow !== undefined ? 'eyebrow' : 'inline';
  return (
    <button
      type="button"
      role="tab"
      id={tabs.idFor('tab', value)}
      aria-selected={selected}
      aria-controls={tabs.panels.has(value) ? tabs.idFor('panel', value) : undefined}
      tabIndex={tabValue === value ? 0 : -1}
      disabled={disabled}
      data-value={value}
      className={cx('ds-tabs__trigger', layout !== 'inline' && `ds-tabs__trigger--${layout}`, className)}
      onClick={() => tabs.select(value)}
    >
      {layout === 'icon-top' ? (
        <>
          {iconEl}
          <span className="ds-tabs__texts">
            {label}
            <span className="ds-tabs__description">{description}</span>
          </span>
        </>
      ) : layout === 'eyebrow' ? (
        <>
          <span className="ds-tabs__eyebrow">{eyebrow}</span>
          <span className="ds-tabs__row">
            {iconEl}
            {label}
            {countEl}
          </span>
        </>
      ) : (
        <>
          {iconEl}
          {label}
          {countEl}
        </>
      )}
    </button>
  );
}

export interface TabsContentProps extends HTMLAttributes<HTMLDivElement> {
  /** The value of the TabsTrigger that shows this panel. */
  value: string;
  /** Keep the content in the page (hidden) while another tab is selected, e.g. to keep a form's state. */
  forceMount?: boolean;
  children?: ReactNode;
}

/** A panel shown while its tab is selected. It takes one Tab stop so keyboard users reach content without controls. */
export function TabsContent({ value, forceMount = false, className, children, ...rest }: TabsContentProps) {
  const tabs = useTabs('TabsContent');
  const selected = tabs.value === value;
  const { registerPanel } = tabs;
  // registerPanel only calls a state setter, so it is safe to leave out of the dependencies.
  useEffect(() => registerPanel(value), [value]);
  return (
    <div {...rest} role="tabpanel" id={tabs.idFor('panel', value)} aria-labelledby={tabs.idFor('tab', value)} tabIndex={0} hidden={!selected} className={cx('ds-tabs__content', className)}>
      {selected || forceMount ? children : null}
    </div>
  );
}
