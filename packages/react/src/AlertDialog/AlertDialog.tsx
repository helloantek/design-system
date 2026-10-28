import { cloneElement, createContext, useContext, useEffect, useId, useRef, useState, type DialogHTMLAttributes, type MouseEvent, type ReactElement, type ReactNode } from 'react';
import { Button, type LabelButtonProps } from '../Button';

// Styles live in @helloantek/ds-css (classes ds-alert-dialog*). The dialog is a native <dialog> opened with
// showModal() (https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/): focus stays inside and starts on Cancel, the
// page behind is inert, Escape closes it and focus goes back to what opened it. A click on the backdrop does not
// close it, as it asks for an answer.

const cx = (...classes: (string | false | null | undefined)[]) => classes.filter(Boolean).join(' ') || undefined;

const CloseContext = createContext<() => void>(() => {});

/** Figma "Size": 448 px with the media beside the text, or 320 px centred with the buttons sharing the width. */
export type AlertDialogSize = 'default' | 'sm';

export interface AlertDialogProps extends Omit<DialogHTMLAttributes<HTMLDialogElement>, 'title' | 'open'> {
  /** The element that opens it, e.g. a Button; it gets the click handler. Or control it with `open`. */
  trigger?: ReactElement<{ onClick?: (event: MouseEvent<HTMLElement>) => void }>;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Figma Size. */
  size?: AlertDialogSize;
  /** `destructive` tints the media red (the "Destructive" demo); pair it with a destructive action. */
  variant?: 'default' | 'destructive';
  /** Figma "Media": a 20 px icon (`currentColor`) shown on a 48 px tile; decorative. */
  media?: ReactNode;
  /** Figma "Title" (16/24 medium); it names the dialog. */
  title: ReactNode;
  /** The title's element (`h2` by default). */
  titleAs?: 'h2' | 'h3' | 'p';
  /** Figma "Description" (14/20 muted); it describes the dialog. */
  description?: ReactNode;
  /** Figma "footer": an `AlertDialogCancel` and an `AlertDialogAction`, in that order. */
  children?: ReactNode;
}

/** Figma "Alert Dialog": a modal that asks to confirm an action. */
export function AlertDialog({ trigger, open: openProp, defaultOpen = false, onOpenChange, size = 'default', variant = 'default', media, title, titleAs: Title = 'h2', description, children, className, onClose, ...rest }: AlertDialogProps) {
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
      el.showModal();
      // The least destructive answer first (APG); the browser would otherwise pick the first focusable element.
      el.querySelector<HTMLElement>('[data-alert-dialog-cancel]')?.focus();
    } else if (!open && el.open) {
      el.close();
    }
  }, [open]);

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
        role="alertdialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={description !== undefined ? descriptionId : undefined}
        className={cx('ds-alert-dialog', size === 'sm' && 'ds-alert-dialog--sm', variant === 'destructive' && 'ds-alert-dialog--destructive', className)}
        // Escape, a form with method="dialog" or close(): keep the state in step and give focus back.
        onClose={(event) => {
          onClose?.(event);
          if (open) setOpen(false);
          returnFocus.current?.focus();
          returnFocus.current = null;
        }}
      >
        <CloseContext.Provider value={() => setOpen(false)}>
          <div className="ds-alert-dialog__header">
            {media && (
              <span className="ds-alert-dialog__media" aria-hidden>
                {media}
              </span>
            )}
            <div className="ds-alert-dialog__heading">
              <Title id={titleId} className="ds-alert-dialog__title">
                {title}
              </Title>
              {description !== undefined && (
                <p id={descriptionId} className="ds-alert-dialog__description">
                  {description}
                </p>
              )}
            </div>
          </div>
          {children && <div className="ds-alert-dialog__footer">{children}</div>}
        </CloseContext.Provider>
      </dialog>
    </>
  );
}

export type AlertDialogButtonProps = Omit<LabelButtonProps, 'size'>;

/** The safe answer: an Outline button that closes the dialog; it has focus when the dialog opens. */
export function AlertDialogCancel({ variant = 'outline', onClick, ...rest }: AlertDialogButtonProps) {
  const close = useContext(CloseContext);
  return (
    <Button
      {...rest}
      variant={variant}
      data-alert-dialog-cancel=""
      onClick={(event) => {
        onClick?.(event);
        close();
      }}
    />
  );
}

/** The action: a Default button (or `variant="destructive"`); it closes the dialog unless `onClick` calls `event.preventDefault()`. */
export function AlertDialogAction({ variant = 'default', onClick, ...rest }: AlertDialogButtonProps) {
  const close = useContext(CloseContext);
  return (
    <Button
      {...rest}
      variant={variant}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) close();
      }}
    />
  );
}
