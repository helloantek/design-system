import { useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore, type CSSProperties, type HTMLAttributes, type MouseEvent, type ReactNode, type Ref, type RefObject } from 'react';
import { Button } from '../Button';

// Styles live in @helloantek/ds-css (classes ds-toaster*, ds-toast*). `toast()` adds a notification to a shared
// store and every mounted <Toaster> shows it: in a polite live region, so screen readers read it out; it closes after
// `duration` but waits while the pointer is over the toaster, focus is inside it or the page is hidden (WCAG 2.2.1);
// Alt+T moves focus to the toaster and Escape brings it back.

/** Figma "Type". */
export type ToastType = 'default' | 'success' | 'info' | 'warning' | 'error' | 'loading';

// Figma's Lucide icons, 16 px with a 1.25 px stroke.
const icon = (children: ReactNode, size = 16) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={(1.25 * 24) / size} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {children}
  </svg>
);
const typeIcons: Record<Exclude<ToastType, 'default'>, ReactNode> = {
  success: icon(
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </>,
  ),
  info: icon(
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </>,
  ),
  warning: icon(<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3ZM12 9v4M12 17h.01" />),
  error: icon(<path d="M2.59 16.73A2 2 0 0 1 2 15.31V8.69a2 2 0 0 1 .59-1.42l4.68-4.68A2 2 0 0 1 8.69 2h6.62a2 2 0 0 1 1.42.59l4.68 4.68A2 2 0 0 1 22 8.69v6.62a2 2 0 0 1-.59 1.42l-4.68 4.68a2 2 0 0 1-1.42.59H8.69a2 2 0 0 1-1.42-.59zM15 9l-6 6M9 9l6 6" />),
  loading: icon(<path d="M21 12a9 9 0 1 1-6.22-8.56" />),
};
const closeIcon = icon(<path d="M18 6 6 18M6 6l12 12" />, 12);

const cx = (...classes: (string | false | null | undefined)[]) => classes.filter(Boolean).join(' ') || undefined;

export interface ToastProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  ref?: Ref<HTMLElement>;
  /** Figma Type: the icon and its colour. `default` has no icon. */
  type?: ToastType;
  /** Figma "Title" (14/20 medium). */
  title: ReactNode;
  /** Figma "Description" (14/20 muted). */
  description?: ReactNode;
  /** Replaces the type's icon (16 px, `currentColor`); `null` hides it. */
  icon?: ReactNode;
  /** Figma "actions" slot: xs buttons, e.g. a Secondary cancel and a Default action. */
  actions?: ReactNode;
  /** Figma "Close": shows the round close button on the top-left corner, which calls this. */
  onClose?: () => void;
  /** The close button's accessible name. */
  closeLabel?: string;
  /** `li` inside a Toaster's list; `div` on its own. */
  as?: 'div' | 'li';
}

/** Figma "Sonner": one toast, without timing. Use `toast()` and `<Toaster>` to show notifications. */
export function Toast({ type = 'default', title, description, icon: iconProp, actions, onClose, closeLabel = 'Close notification', as: Element = 'div', className, ...rest }: ToastProps) {
  const shownIcon = iconProp === undefined ? (type === 'default' ? null : typeIcons[type]) : iconProp;
  return (
    <Element {...(rest as HTMLAttributes<HTMLElement>)} className={cx('ds-toast', type !== 'default' && `ds-toast--${type}`, className)}>
      {onClose && (
        <button type="button" className="ds-toast__close" aria-label={closeLabel} onClick={onClose}>
          {closeIcon}
        </button>
      )}
      {shownIcon && (
        <span className="ds-toast__icon" aria-hidden>
          {shownIcon}
        </span>
      )}
      <div className="ds-toast__content">
        <div className="ds-toast__title">{title}</div>
        {description !== undefined && <div className="ds-toast__description">{description}</div>}
      </div>
      {actions && <div className="ds-toast__actions">{actions}</div>}
    </Element>
  );
}

export type ToastId = string | number;

export interface ToastButton {
  label: ReactNode;
  /** Runs before the toast closes; call `event.preventDefault()` to keep it open. */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface ToastOptions {
  /** Pass an existing id to update that toast in place, e.g. turn a loading toast into a success. */
  id?: ToastId;
  type?: ToastType;
  description?: ReactNode;
  icon?: ReactNode;
  /** A Default xs button at the end. */
  action?: ToastButton;
  /** A Secondary xs button before the action. */
  cancel?: ToastButton;
  /** Milliseconds before it closes; `Infinity` keeps it open. Loading toasts stay open by default. */
  duration?: number;
  /** Shows the close button (default: the Toaster's `closeButton`). */
  closeButton?: boolean;
  /** Called when it is closed by a button or `toast.dismiss`. */
  onDismiss?: (id: ToastId) => void;
  /** Called when its time runs out. */
  onAutoClose?: (id: ToastId) => void;
}

interface ToastRecord extends ToastOptions {
  id: ToastId;
  title: ReactNode;
  closing: boolean;
  /** Changes on every update, which restarts the timer. */
  version: number;
}

// The shared store: a list replaced on every change, so useSyncExternalStore sees a new snapshot.
let records: ToastRecord[] = [];
let lastId = 0;
let version = 0;
const listeners = new Set<() => void>();
const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};
const getSnapshot = () => records;
const commit = (next: ToastRecord[]) => {
  records = next;
  listeners.forEach((listener) => listener());
};

// Matches the CSS exit animation (duration-200).
const EXIT_MS = 200;

function show(title: ReactNode, options: ToastOptions = {}): ToastId {
  const id = options.id ?? ++lastId;
  const existing = records.find((r) => r.id === id);
  const record: ToastRecord = { ...options, id, title, type: options.type ?? 'default', closing: false, version: ++version };
  commit(existing ? records.map((r) => (r.id === id ? record : r)) : [...records, record]);
  return id;
}

function close(id: ToastId, reason: 'dismiss' | 'auto') {
  const record = records.find((r) => r.id === id);
  if (!record || record.closing) return;
  (reason === 'auto' ? record.onAutoClose : record.onDismiss)?.(id);
  commit(records.map((r) => (r.id === id ? { ...r, closing: true } : r)));
  setTimeout(() => commit(records.filter((r) => !(r.id === id && r.closing))), EXIT_MS);
}

type Message<T> = ReactNode | ((value: T) => ReactNode);

/**
 * Shows a toast and returns its id: `toast('Saved')`, `toast.success(…)`, `toast.info(…)`, `toast.warning(…)`,
 * `toast.error(…)`, `toast.loading(…)`, `toast.promise(…)` and `toast.dismiss(id?)`.
 */
export const toast = Object.assign((title: ReactNode, options?: ToastOptions) => show(title, options), {
  success: (title: ReactNode, options?: ToastOptions) => show(title, { ...options, type: 'success' }),
  info: (title: ReactNode, options?: ToastOptions) => show(title, { ...options, type: 'info' }),
  warning: (title: ReactNode, options?: ToastOptions) => show(title, { ...options, type: 'warning' }),
  error: (title: ReactNode, options?: ToastOptions) => show(title, { ...options, type: 'error' }),
  loading: (title: ReactNode, options?: ToastOptions) => show(title, { ...options, type: 'loading' }),
  /** A loading toast that turns into a success or an error when the promise settles. */
  promise<T>(promise: Promise<T> | (() => Promise<T>), messages: { loading: ReactNode; success: Message<T>; error: Message<unknown> }, options?: Omit<ToastOptions, 'type'>) {
    const id = show(messages.loading, { ...options, type: 'loading' });
    const text = <V,>(message: Message<V>, value: V) => (typeof message === 'function' ? message(value) : message);
    (typeof promise === 'function' ? promise() : promise).then(
      (value) => show(text(messages.success, value), { ...options, id, type: 'success' }),
      (error: unknown) => show(text(messages.error, error), { ...options, id, type: 'error' }),
    );
    return id;
  },
  /** Closes one toast, or all of them without an id. */
  dismiss(id?: ToastId) {
    for (const record of records) if (id === undefined || record.id === id) close(record.id, 'dismiss');
  },
});

export type ToasterPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

export interface ToasterProps {
  /** The viewport corner (default `bottom-right`); the newest toast is nearest the edge. */
  position?: ToasterPosition;
  /** Milliseconds a toast stays (default 4000). */
  duration?: number;
  /** Shows the close button on every toast. */
  closeButton?: boolean;
  /** How many toasts show at once (default 3); the others wait their turn. */
  visibleToasts?: number;
  /**
   * Not in Figma: piles the toasts up, the newest in front and the older ones peeking 14 px out behind it, smaller.
   * Hovering or focusing the pile spreads it into the list.
   */
  stacked?: boolean;
  /** The region's accessible name. */
  label?: string;
  className?: string;
}

/** The fixed region that shows `toast()` notifications. Mount it once, near the root of the app. */
export function Toaster({ position = 'bottom-right', duration = 4000, closeButton = false, visibleToasts = 3, stacked = false, label = 'Notifications', className }: ToasterProps) {
  const all = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  const shown = all.slice(-visibleToasts);
  const region = useRef<HTMLElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [pageHidden, setPageHidden] = useState(false);
  // Stacked: each toast's own height, measured, to place the pile and the spread-out list.
  const [heights, setHeights] = useState<Record<string, number>>({});
  const onHeight = (id: ToastId, height: number) => setHeights((h) => (h[id] === height ? h : { ...h, [id]: height }));
  const heightOf = (id: ToastId) => heights[id] ?? 0;
  const newestFirst = [...shown].reverse();

  useEffect(() => {
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.altKey && event.code === 'KeyT' && region.current) {
        event.preventDefault();
        if (!region.current.contains(document.activeElement)) returnFocus.current = document.activeElement as HTMLElement | null;
        region.current.focus();
      }
    };
    const onVisibility = () => setPageHidden(document.hidden);
    document.addEventListener('keydown', onKey);
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <section
      ref={region}
      className={cx('ds-toaster', `ds-toaster--${position}`, stacked && 'ds-toaster--stacked', className)}
      data-expanded={stacked && (hovered || focused) ? '' : undefined}
      aria-label={label}
      aria-keyshortcuts="Alt+T"
      tabIndex={-1}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && returnFocus.current) {
          returnFocus.current.focus();
          returnFocus.current = null;
        }
      }}
    >
      <ol
        className="ds-toaster__list"
        aria-live="polite"
        style={
          stacked && shown.length > 0
            ? ({ '--toaster-front': `${heightOf(newestFirst[0].id)}px`, '--toaster-sum': `${shown.reduce((sum, r) => sum + heightOf(r.id), 0)}px`, '--toaster-count': shown.length } as CSSProperties)
            : undefined
        }
      >
        {shown.map((record) => {
          const index = newestFirst.indexOf(record);
          const offset = newestFirst.slice(0, index).reduce((sum, r) => sum + heightOf(r.id), 0);
          return (
            <ToasterItem
              key={record.id}
              record={record}
              duration={duration}
              closeButton={closeButton}
              paused={hovered || focused || pageHidden}
              region={region}
              stack={stacked ? { index, offset, onHeight } : undefined}
            />
          );
        })}
      </ol>
    </section>
  );
}

interface ToasterItemProps {
  record: ToastRecord;
  duration: number;
  closeButton: boolean;
  paused: boolean;
  region: RefObject<HTMLElement | null>;
  /** Stacked: 0 for the newest; the height of the newer toasts above it in the spread-out list. */
  stack?: { index: number; offset: number; onHeight: (id: ToastId, height: number) => void };
}

function ToasterItem({ record, duration, closeButton, paused, region, stack }: ToasterItemProps) {
  const element = useRef<HTMLElement>(null);
  const remaining = useRef(0);

  // Its natural height: the pile squeezes the toasts behind to the front one's height, so measure with that undone.
  useLayoutEffect(() => {
    const el = element.current;
    if (!stack || !el) return;
    el.style.height = 'auto';
    const height = el.offsetHeight;
    el.style.height = '';
    stack.onHeight(record.id, height);
  });

  // A new version (an update) starts the time again.
  useEffect(() => {
    remaining.current = record.duration ?? (record.type === 'loading' ? Infinity : duration);
  }, [record.version, record.duration, record.type, duration]);

  useEffect(() => {
    if (paused || record.closing || !Number.isFinite(remaining.current)) return;
    const start = Date.now();
    const timer = setTimeout(() => close(record.id, 'auto'), remaining.current);
    return () => {
      clearTimeout(timer);
      remaining.current -= Date.now() - start;
    };
  }, [paused, record.closing, record.version, record.id]);

  // Focus inside a closing toast goes to the region, not to the page's start.
  useEffect(() => {
    if (record.closing && element.current?.contains(document.activeElement)) region.current?.focus();
  }, [record.closing, region]);

  const button = (spec: ToastButton | undefined, variant: 'default' | 'secondary') =>
    spec && (
      <Button
        size="xs"
        variant={variant}
        onClick={(event) => {
          spec.onClick?.(event);
          if (!event.defaultPrevented) close(record.id, 'dismiss');
        }}
      >
        {spec.label}
      </Button>
    );
  const actions = (record.cancel || record.action) && (
    <>
      {button(record.cancel, 'secondary')}
      {button(record.action, 'default')}
    </>
  );

  return (
    <Toast
      ref={element}
      as="li"
      type={record.type}
      title={record.title}
      description={record.description}
      icon={record.icon}
      actions={actions}
      onClose={(record.closeButton ?? closeButton) ? () => close(record.id, 'dismiss') : undefined}
      data-state={record.closing ? 'closed' : 'open'}
      data-front={stack?.index === 0 ? '' : undefined}
      style={stack && ({ '--toast-index': stack.index, '--toast-offset': `${stack.offset}px` } as CSSProperties)}
    />
  );
}
