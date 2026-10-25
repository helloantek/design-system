import { createContext, useContext, useId, useRef, type ButtonHTMLAttributes, type InputHTMLAttributes, type MouseEvent, type ReactNode, type Ref } from 'react';

// Styles live in @helloantek/ds-css (classes ds-field*, ds-input*); this component only renders the markup.

/** Sort UI 2.0 has one input style (`default`); `shadow` adds Shadow/xs, `soft` is a borderless tinted field. */
export type InputVariant = 'default' | 'shadow' | 'soft';
/** Figma "Size": 40, 36 and 32 px tall, like Button's sizes of the same name. */
export type InputSize = 'xl' | 'lg' | 'default';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  ref?: Ref<HTMLInputElement>;
  /** Figma "Field Label". Rendered as a <label> tied to the input. */
  label?: ReactNode;
  /** Figma Field "Description": help text under the input. */
  caption?: ReactNode;
  /** Figma State=Invalid (Field "Error"): the message replaces the caption and marks the input invalid. */
  error?: ReactNode;
  variant?: InputVariant;
  size?: InputSize;
  /** Figma "Leading icon". Icons should use `currentColor`. */
  leadIcon?: ReactNode;
  /** Figma "Trailing icon". Turns red when the input is invalid. */
  tailIcon?: ReactNode;
  /** Figma "Kbd" in the T slot: keyboard hint shown inside the input, also exposed as aria-keyshortcuts. */
  shortcut?: string;
  /** Figma Input Group "L slot" / "T slot" text: inside the input before / after the value. */
  prefix?: ReactNode;
  suffix?: ReactNode;
  /** Segments joined to the input before / after it, split off by a line. */
  addonBefore?: ReactNode;
  addonAfter?: ReactNode;
  /** Figma Input Group button in the T slot: usually an <InputAction>. */
  action?: ReactNode;
  /** Class for the outer field element. */
  className?: string;
}

const DisabledContext = createContext(false);

export function Input(props: InputProps) {
  const {
    ref,
    label,
    caption,
    error,
    variant = 'default',
    size = 'default',
    leadIcon,
    tailIcon,
    shortcut,
    prefix,
    suffix,
    addonBefore,
    addonAfter,
    action,
    className,
    id: idProp,
    disabled = false,
    'aria-describedby': describedBy,
    ...rest
  } = props;
  const autoId = useId();
  const id = idProp ?? autoId;
  const captionId = `${id}-caption`;
  const invalid = error !== undefined && error !== null && error !== false;
  const help = invalid ? error : caption;
  const localRef = useRef<HTMLInputElement | null>(null);

  const setRef = (node: HTMLInputElement | null) => {
    localRef.current = node;
    if (typeof ref === 'function') ref(node);
    else if (ref) ref.current = node;
  };

  // Clicking padding, icons or affixes focuses the input, as the whole box looks like one field.
  const focusInput = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (disabled || target === localRef.current || target.closest('button, a, input')) return;
    event.preventDefault();
    localRef.current?.focus();
  };

  const boxClasses = ['ds-input', `ds-input--${variant}`, invalid && 'ds-input--invalid', disabled && 'ds-input--disabled']
    .filter(Boolean)
    .join(' ');

  return (
    <div className={['ds-field', `ds-field--${size}`, className].filter(Boolean).join(' ')}>
      {label !== undefined && (
        <label className="ds-field__label" htmlFor={id}>
          {label}
        </label>
      )}
      <div className={boxClasses} onMouseDown={focusInput}>
        {addonBefore !== undefined && <span className="ds-input__addon">{addonBefore}</span>}
        <div className="ds-input__control">
          {prefix !== undefined && <span className="ds-input__affix">{prefix}</span>}
          <div className="ds-input__main">
            {leadIcon && (
              <span className="ds-input__icon" aria-hidden>
                {leadIcon}
              </span>
            )}
            <input
              {...rest}
              ref={setRef}
              id={id}
              className="ds-input__native"
              disabled={disabled}
              aria-invalid={invalid || undefined}
              aria-describedby={[help !== undefined ? captionId : null, describedBy].filter(Boolean).join(' ') || undefined}
              aria-keyshortcuts={shortcut ?? rest['aria-keyshortcuts']}
            />
          </div>
          {suffix !== undefined && <span className="ds-input__affix ds-input__affix--end">{suffix}</span>}
          {tailIcon && (
            <span className="ds-input__icon ds-input__icon--tail" aria-hidden>
              {tailIcon}
            </span>
          )}
          {shortcut !== undefined && (
            <kbd className="ds-input__shortcut" aria-hidden>
              {shortcut}
            </kbd>
          )}
        </div>
        {addonAfter !== undefined && <span className="ds-input__addon ds-input__addon--end">{addonAfter}</span>}
        <DisabledContext.Provider value={disabled}>{action}</DisabledContext.Provider>
      </div>
      {help !== undefined && (
        <p id={captionId} className={invalid ? 'ds-field__caption ds-field__caption--error' : 'ds-field__caption'}>
          {help}
        </p>
      )}
    </div>
  );
}

export interface InputActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ref?: Ref<HTMLButtonElement>;
}

/** The button inside an Input (Figma Input Group T slot, Button Outline xs). Disabled together with its Input. */
export function InputAction({ type = 'button', className, disabled, ...rest }: InputActionProps) {
  const inputDisabled = useContext(DisabledContext);
  return <button {...rest} type={type} disabled={disabled ?? inputDisabled} className={['ds-input__action', className].filter(Boolean).join(' ')} />;
}
