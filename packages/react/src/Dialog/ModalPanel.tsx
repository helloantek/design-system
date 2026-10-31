import { cloneElement, createContext, isValidElement, useContext, useEffect, useId, useRef, useState, type CSSProperties, type DialogHTMLAttributes, type MouseEvent, type ReactElement, type ReactNode } from 'react';
import { Button } from '../Button';

// Shared by Dialog and Sheet (internal; not exported from the package). A native <dialog> opened with showModal()
// (https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/): focus moves inside and stays there, the page behind is
// inert, Escape, the Close button or a click on the backdrop closes it, and focus goes back to what opened it. The
// parts are <block>__header, __heading, __title, __description, __close, __body and __footer.

const cx = (...classes: (string | false | null | undefined)[]) => classes.filter(Boolean).join(' ') || undefined;

const CloseContext = createContext<() => void>(() => {});

// Lucide x at 16 px with the Figma 1.25 px stroke.
const closeIcon = (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.875} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export interface ModalPanelProps extends Omit<DialogHTMLAttributes<HTMLDialogElement>, 'title' | 'open'> {
  /** The element that opens it, e.g. a Button; it gets the click handler. Or control it with `open`. */
  trigger?: ReactElement<{ onClick?: (event: MouseEvent<HTMLElement>) => void }>;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Figma "Title" (16/24 medium); it names the dialog. Without it, give `aria-label`. */
  title?: ReactNode;
  /** The title's element (`h2` by default). */
  titleAs?: 'h2' | 'h3' | 'p';
  /** Figma "Description" (14/20 muted); it describes the dialog. */
  description?: ReactNode;
  /** Figma "Close button" (default `true`): a Ghost sm button with an x in the header's corner. */
  closeButton?: boolean;
  /** The Close button's accessible name. Default "Close". */
  closeLabel?: string;
  /** Figma "content": fields, a list, a preview… It scrolls when the dialog reaches the viewport. */
  children?: ReactNode;
  /** `flush` drops the content's 24 px side padding (media or a layout of its own, as in the Settings demo). */
  bodyPadding?: 'default' | 'flush';
  /** Figma "footer": the actions, e.g. an Outline Cancel (`DialogClose` / `SheetClose`) and a Default button. */
  footer?: ReactNode;
  /** `muted` puts the footer on the muted fill (the "Sticky footer" demo). */
  footerVariant?: 'default' | 'muted';
  /** Width (any CSS length; Dialog 448 px and a left or right Sheet 384 px by default, as in Figma). */
  width?: string;
}

/** The modal panel itself; `block` is the BEM block (Dialog's or Sheet's), `modifiers` its modifier classes. */
export function ModalPanel({
  block,
  modifiers = [],
  trigger,
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  title,
  titleAs: Title = 'h2',
  description,
  closeButton = true,
  closeLabel = 'Close',
  children,
  bodyPadding = 'default',
  footer,
  footerVariant = 'default',
  width,
  className,
  style,
  onClose,
  onClick,
  before,
  after,
  ...rest
}: ModalPanelProps & {
  block: string;
  modifiers?: (string | false)[];
  /** Internal: drawn inside the panel before the header and after the footer (Drawer's swipe handle). */
  before?: ReactNode;
  after?: ReactNode;
}) {
  const [uncontrolled, setUncontrolled] = useState(defaultOpen);
  const open = openProp ?? uncontrolled;
  const dialog = useRef<HTMLDialogElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const titleId = useId();
  const descriptionId = useId();

  const setOpen = (next: boolean) => {
    if (openProp === undefined) setUncontrolled(next);
    onOpenChange?.(next);
  };

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    if (open && !el.open) {
      returnFocus.current = document.activeElement as HTMLElement | null;
      // The browser focuses the first focusable element (or one with autoFocus).
      el.showModal();
    } else if (!open && el.open) {
      el.close();
    }
  }, [open]);

  const hasHeader = title !== undefined || description !== undefined || closeButton;

  return (
    <>
      {trigger &&
        cloneElement(trigger, {
          'aria-haspopup': 'dialog',
          onClick: (event: MouseEvent<HTMLElement>) => {
            trigger.props.onClick?.(event);
            if (!event.defaultPrevented) setOpen(true);
          },
        } as Partial<typeof trigger.props>)}
      <dialog
        {...rest}
        ref={dialog}
        aria-labelledby={title !== undefined ? titleId : undefined}
        aria-describedby={description !== undefined ? descriptionId : undefined}
        className={cx(block, ...modifiers, className)}
        style={width !== undefined ? ({ ...style, [`--${block.replace(/^ds-/, '')}-width`]: width } as CSSProperties) : style}
        // A click on the backdrop lands on the <dialog> itself, outside its box.
        onClick={(event) => {
          onClick?.(event);
          const el = event.currentTarget;
          if (event.target !== el || event.defaultPrevented) return;
          const r = el.getBoundingClientRect();
          const inside = event.clientX >= r.left && event.clientX <= r.right && event.clientY >= r.top && event.clientY <= r.bottom;
          if (!inside) setOpen(false);
        }}
        // Escape, a form with method="dialog" or close(): keep the state in step and give focus back.
        onClose={(event) => {
          onClose?.(event);
          if (open) setOpen(false);
          returnFocus.current?.focus();
          returnFocus.current = null;
        }}
      >
        <CloseContext.Provider value={() => setOpen(false)}>
          {before}
          {hasHeader && (
            <div className={`${block}__header`}>
              <div className={`${block}__heading`}>
                {title !== undefined && (
                  <Title id={titleId} className={`${block}__title`}>
                    {title}
                  </Title>
                )}
                {description !== undefined && (
                  <p id={descriptionId} className={`${block}__description`}>
                    {description}
                  </p>
                )}
              </div>
              {closeButton && <Button variant="ghost" size="sm" icon={closeIcon} aria-label={closeLabel} className={`${block}__close`} onClick={() => setOpen(false)} />}
            </div>
          )}
          {children !== undefined && <div className={cx(`${block}__body`, bodyPadding === 'flush' && `${block}__body--flush`)}>{children}</div>}
          {footer !== undefined && <div className={cx(`${block}__footer`, footerVariant === 'muted' && `${block}__footer--muted`)}>{footer}</div>}
          {after}
        </CloseContext.Provider>
      </dialog>
    </>
  );
}

/** Closes the panel from a part drawn inside it. */
export const useModalClose = () => useContext(CloseContext);

/** Wraps a button that closes the panel after its own click (unless it calls `event.preventDefault()`). */
export function ModalClose({ children }: { children: ReactElement<{ onClick?: (event: MouseEvent<HTMLElement>) => void }> }) {
  const close = useContext(CloseContext);
  if (!isValidElement(children)) return children;
  const { onClick } = children.props;
  return cloneElement(children, {
    onClick: (event: MouseEvent<HTMLElement>) => {
      onClick?.(event);
      if (!event.defaultPrevented) close();
    },
  });
}
