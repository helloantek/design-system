import {
  cloneElement,
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type HTMLAttributes,
  type KeyboardEvent,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
  type Ref,
} from 'react';

// Styles live in @helloantek/ds-css (classes ds-popover*); these components only render the markup.

/** Where the panel opens, 4 px from the trigger. */
export type PopoverSide = 'bottom' | 'top' | 'left' | 'right';
/** How the panel lines up with the trigger along that side. */
export type PopoverAlign = 'center' | 'start' | 'end';

const CloseContext = createContext<(() => void) | null>(null);

const FOCUSABLE = 'button:not([disabled]), [href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export interface PopoverProps {
  /** The element that opens and closes the panel (a Button); it gets `aria-expanded` and `aria-controls`. */
  trigger: ReactElement<HTMLAttributes<HTMLElement> & { ref?: Ref<HTMLElement> }>;
  /** Figma "header" Title: names the panel. Without it, give `aria-label`. */
  title?: ReactNode;
  /** Figma "header" Description. */
  description?: ReactNode;
  /** Figma "content": fields, a list, actions… */
  children?: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Default `bottom`. */
  side?: PopoverSide;
  /** Default `center`. */
  align?: PopoverAlign;
  /** Panel width (any CSS length; default 288 px, as in Figma). */
  width?: string;
  /** The panel's name when there is no `title`. */
  'aria-label'?: string;
  className?: string;
}

/**
 * Figma "Popover": a non-modal panel (`role="dialog"`) that opens from its trigger. Focus moves into it; Escape closes
 * it and returns focus to the trigger; a click outside or focus leaving it closes it too.
 */
export function Popover({ trigger, title, description, children, open: openProp, defaultOpen = false, onOpenChange, side = 'bottom', align = 'center', width, 'aria-label': ariaLabel, className }: PopoverProps) {
  const id = useId();
  const panelId = `${id}-panel`;
  const titleId = `${id}-title`;
  const descriptionId = `${id}-description`;
  const [uncontrolled, setUncontrolled] = useState(defaultOpen);
  const open = openProp ?? uncontrolled;
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const opened = useRef(false);

  const setOpen = (next: boolean) => {
    if (openProp === undefined) setUncontrolled(next);
    onOpenChange?.(next);
  };
  const close = (focusTrigger: boolean) => {
    setOpen(false);
    if (focusTrigger) triggerRef.current?.focus();
  };

  // Focus moves into the panel when it opens (not when it starts open).
  useEffect(() => {
    const panel = panelRef.current;
    if (open && opened.current && panel) (panel.querySelector<HTMLElement>(FOCUSABLE) ?? panel).focus();
    opened.current = true;
  }, [open]);

  // A click outside or focus leaving the trigger and the panel closes it.
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

  const { ref: triggerOwnRef, onClick } = trigger.props;
  const setTriggerRef = (node: HTMLElement | null) => {
    triggerRef.current = node;
    if (typeof triggerOwnRef === 'function') triggerOwnRef(node);
    else if (triggerOwnRef) (triggerOwnRef as { current: HTMLElement | null }).current = node;
  };
  const hasHeader = title !== undefined || description !== undefined;

  return (
    <CloseContext.Provider value={() => close(true)}>
      <div ref={rootRef} className="ds-popover">
        {cloneElement(trigger, {
          ref: setTriggerRef,
          'aria-haspopup': 'dialog',
          'aria-expanded': open,
          'aria-controls': open ? panelId : undefined,
          onClick: (event: MouseEvent<HTMLElement>) => {
            onClick?.(event);
            if (!event.defaultPrevented) setOpen(!open);
          },
        })}
        <div
          ref={panelRef}
          id={panelId}
          role="dialog"
          tabIndex={-1}
          aria-labelledby={title !== undefined ? titleId : undefined}
          aria-label={title === undefined ? ariaLabel : undefined}
          aria-describedby={description !== undefined ? descriptionId : undefined}
          hidden={!open}
          className={['ds-popover__content', side !== 'bottom' && `ds-popover__content--${side}`, align !== 'center' && `ds-popover__content--${align}`, className].filter(Boolean).join(' ')}
          style={width !== undefined ? ({ '--popover-width': width } as CSSProperties) : undefined}
          onKeyDown={(event: KeyboardEvent<HTMLDivElement>) => {
            if (event.key === 'Escape') {
              event.stopPropagation();
              close(true);
            }
          }}
        >
          {hasHeader && (
            <div className="ds-popover__header">
              {title !== undefined && (
                <h2 id={titleId} className="ds-popover__title">
                  {title}
                </h2>
              )}
              {description !== undefined && (
                <p id={descriptionId} className="ds-popover__description">
                  {description}
                </p>
              )}
            </div>
          )}
          {children !== undefined && <div className="ds-popover__body">{children}</div>}
        </div>
      </div>
    </CloseContext.Provider>
  );
}

/** Figma "Actions": buttons side by side, 8 px apart, at the end of the content. */
export function PopoverActions({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div {...rest} className={['ds-popover__actions', className].filter(Boolean).join(' ')} />;
}

/** Wraps a button that closes the popover (and returns focus to the trigger) after its own click. */
export function PopoverClose({ children }: { children: ReactElement<HTMLAttributes<HTMLElement>> }) {
  const close = useContext(CloseContext);
  if (!isValidElement(children)) return children;
  const { onClick } = children.props;
  return cloneElement(children, {
    onClick: (event: MouseEvent<HTMLElement>) => {
      onClick?.(event);
      if (!event.defaultPrevented) close?.();
    },
  });
}
