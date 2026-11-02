import { cloneElement, createContext, isValidElement, useContext, useId, useState, type ButtonHTMLAttributes, type HTMLAttributes, type MouseEvent, type ReactElement, type ReactNode } from 'react';

// Styles live in @helloantek/ds-css (classes ds-collapsible*). A disclosure: the trigger is a button with
// aria-expanded and aria-controls pointing at the content, which is hidden while closed.

const cx = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(' ');

interface CollapsibleContext {
  open: boolean;
  toggle: () => void;
  disabled: boolean;
  contentId: string;
}

const Context = createContext<CollapsibleContext | null>(null);

function useCollapsible(component: string) {
  const ctx = useContext(Context);
  if (!ctx) throw new Error(`${component} must be inside Collapsible`);
  return ctx;
}

export interface CollapsibleProps extends HTMLAttributes<HTMLDivElement> {
  /** Figma State=Open (controlled). */
  open?: boolean;
  /** Open at first (uncontrolled). */
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** The trigger does nothing. */
  disabled?: boolean;
  children: ReactNode;
}

/** Shows or hides its CollapsibleContent from a CollapsibleTrigger: Sort UI 2.0 "Collapsible". */
export function Collapsible({ open: openProp, defaultOpen = false, onOpenChange, disabled = false, className, children, ...rest }: CollapsibleProps) {
  const [uncontrolled, setUncontrolled] = useState(defaultOpen);
  const open = openProp ?? uncontrolled;
  const contentId = `${useId()}-content`;
  const toggle = () => {
    if (disabled) return;
    if (openProp === undefined) setUncontrolled(!open);
    onOpenChange?.(!open);
  };
  return (
    <Context.Provider value={{ open, toggle, disabled, contentId }}>
      <div {...rest} className={cx('ds-collapsible', className)} data-state={open ? 'open' : 'closed'}>
        {children}
      </div>
    </Context.Provider>
  );
}

// Figma "chevron-down" / "chevron-up": 16 px, 1.25 px stroke.
const chevron = (up: boolean) => (
  <svg className="ds-collapsible__chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d={up ? 'M12 10 8 6l-4 4' : 'M4 6l4 4 4-4'} />
  </svg>
);

export interface CollapsibleTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Puts the behaviour on the one child element (e.g. a Button) instead of the Figma text trigger. */
  asChild?: boolean;
  /** The chevron after the label (default true; down when closed, up when open). Ignored with `asChild`. */
  showChevron?: boolean;
  children: ReactNode;
}

/** The button that opens and closes the Collapsible: the Figma sample's text and chevron, or any button with `asChild`. */
export function CollapsibleTrigger({ asChild = false, showChevron = true, className, onClick, children, ...rest }: CollapsibleTriggerProps) {
  const { open, toggle, disabled, contentId } = useCollapsible('CollapsibleTrigger');
  const behaviour = {
    'aria-expanded': open,
    'aria-controls': contentId,
    disabled: disabled || rest.disabled || undefined,
  };
  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<ButtonHTMLAttributes<HTMLButtonElement>>;
    return cloneElement(child, {
      ...behaviour,
      onClick: (event: MouseEvent<HTMLButtonElement>) => {
        child.props.onClick?.(event);
        onClick?.(event);
        if (!event.defaultPrevented) toggle();
      },
    });
  }
  return (
    <button
      type="button"
      {...rest}
      {...behaviour}
      className={cx('ds-collapsible__trigger', className)}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) toggle();
      }}
    >
      <span className="ds-collapsible__label">{children}</span>
      {showChevron && chevron(open)}
    </button>
  );
}

export interface CollapsibleContentProps extends HTMLAttributes<HTMLDivElement> {
  /** Keep the content in the DOM while closed (default true; hidden with the `hidden` attribute). */
  keepMounted?: boolean;
}

/** What the trigger shows and hides (16 px below it). */
export function CollapsibleContent({ keepMounted = true, className, children, ...rest }: CollapsibleContentProps) {
  const { open, contentId } = useCollapsible('CollapsibleContent');
  return (
    <div {...rest} id={contentId} hidden={!open} className={cx('ds-collapsible__content', className)}>
      {open || keepMounted ? children : null}
    </div>
  );
}
