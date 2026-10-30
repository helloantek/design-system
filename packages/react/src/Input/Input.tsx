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
  /** Figma Input Group "L slot" / "T slot": text inside the input before / after the value, or an <InputAction>. */
  prefix?: ReactNode;
  suffix?: ReactNode;
  /** Segments joined to the input before / after it, split off by a line. */
  addonBefore?: ReactNode;
  addonAfter?: ReactNode;
  /** Figma Input Group button in the T slot: an <InputAction>, or an <InputDropdown> (in a DropdownMenu). */
  action?: ReactNode;
  /**
   * Figma Input Group "Block start": a row above the input, in the same box (13/20 medium muted), e.g. "Client". It
   * names the input when there is no `label`.
   */
  blockStart?: ReactNode;
  /** Figma Input Group "Block end": a row under the input, in the same box, e.g. a hint; it describes the input. */
  blockEnd?: ReactNode;
  /** The "Dividers" demo: a line between the blocks and the input. */
  blockDivider?: boolean;
  /**
   * The "Loading" demo: a spinner in place of the leading icon (`true` / `'start'`) or of the trailing one (`'end'`,
   * after the suffix); the input is marked `aria-busy`.
   */
  loading?: boolean | 'start' | 'end';
  /** Class for the outer field element. */
  className?: string;
}

const DisabledContext = createContext(false);

// Lucide loader-circle at 16 px with the 1.25 px stroke; it turns (not with reduced motion).
const spinner = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.875} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M21 12a9 9 0 1 1-6.22-8.56" />
  </svg>
);

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
    blockStart,
    blockEnd,
    blockDivider = false,
    loading = false,
    className,
    id: idProp,
    disabled = false,
    'aria-describedby': describedBy,
    ...rest
  } = props;
  const autoId = useId();
  const id = idProp ?? autoId;
  const captionId = `${id}-caption`;
  const blockStartId = `${id}-block-start`;
  const blockEndId = `${id}-block-end`;
  const hasBlock = blockStart !== undefined || blockEnd !== undefined;
  const loadingAt = loading === true ? 'start' : loading || null;
  const lead = loadingAt === 'start' ? spinner : leadIcon;
  const tail = loadingAt === 'end' ? spinner : tailIcon;
  const invalid = error !== undefined && error !== null && error !== false;
  const help = invalid ? error : caption;
  const localRef = useRef<HTMLInputElement | null>(null);

  const setRef = (node: HTMLInputElement | null) => {
    localRef.current = node;
    if (typeof ref === 'function') ref(node);
    else if (ref) ref.current = node;
  };

  // Clicking padding, icons, affixes or blocks focuses the input, as the whole box looks like one field.
  const focusInput = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    // Buttons, links and an open menu (an InputDropdown's) keep their own clicks.
    if (disabled || target === localRef.current || target.closest('button, a, input, .ds-dropdown')) return;
    event.preventDefault();
    localRef.current?.focus();
  };

  const boxClasses = ['ds-input', `ds-input--${variant}`, hasBlock && 'ds-input--block', invalid && 'ds-input--invalid', disabled && 'ds-input--disabled']
    .filter(Boolean)
    .join(' ');

  const row = (
    <>
      {addonBefore !== undefined && <span className="ds-input__addon">{addonBefore}</span>}
      <div className="ds-input__control">
        {prefix !== undefined && <span className="ds-input__affix">{prefix}</span>}
        <div className="ds-input__main">
          {lead && (
            <span className={loadingAt === 'start' ? 'ds-input__icon ds-input__icon--spin' : 'ds-input__icon'} aria-hidden>
              {lead}
            </span>
          )}
          <input
            {...rest}
            ref={setRef}
            id={id}
            className="ds-input__native"
            disabled={disabled}
            aria-invalid={invalid || undefined}
            aria-busy={loadingAt ? true : rest['aria-busy']}
            aria-labelledby={label === undefined && blockStart !== undefined && rest['aria-label'] === undefined ? (rest['aria-labelledby'] ?? blockStartId) : rest['aria-labelledby']}
            aria-describedby={[blockEnd !== undefined ? blockEndId : null, help !== undefined ? captionId : null, describedBy].filter(Boolean).join(' ') || undefined}
            aria-keyshortcuts={shortcut ?? rest['aria-keyshortcuts']}
          />
        </div>
        {suffix !== undefined && <span className="ds-input__affix ds-input__affix--end">{suffix}</span>}
        {tail && (
          <span className={loadingAt === 'end' ? 'ds-input__icon ds-input__icon--tail ds-input__icon--spin' : 'ds-input__icon ds-input__icon--tail'} aria-hidden>
            {tail}
          </span>
        )}
        {shortcut !== undefined && (
          <kbd className="ds-input__shortcut" aria-hidden>
            {shortcut}
          </kbd>
        )}
      </div>
      {addonAfter !== undefined && <span className="ds-input__addon ds-input__addon--end">{addonAfter}</span>}
      {action}
    </>
  );

  return (
    <div className={['ds-field', `ds-field--${size}`, className].filter(Boolean).join(' ')}>
      {label !== undefined && (
        <label className="ds-field__label" htmlFor={id}>
          {label}
        </label>
      )}
      <div className={boxClasses} onMouseDown={focusInput}>
        {blockStart !== undefined && (
          <div id={blockStartId} className={blockDivider ? 'ds-input__block ds-input__block--divider' : 'ds-input__block'}>
            {blockStart}
          </div>
        )}
        <DisabledContext.Provider value={disabled}>{hasBlock ? <div className="ds-input__row">{row}</div> : row}</DisabledContext.Provider>
        {blockEnd !== undefined && (
          <div id={blockEndId} className={blockDivider ? 'ds-input__block ds-input__block--end ds-input__block--divider' : 'ds-input__block ds-input__block--end'}>
            {blockEnd}
          </div>
        )}
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
  /** Button Outline xs (default) or Ghost xs (the demos' copy, clear, − and + buttons). An icon alone makes it 24 px square; give it an `aria-label`. */
  variant?: 'outline' | 'ghost';
}

/** The button inside an Input (Figma Input Group T slot, Button Outline or Ghost xs). Disabled together with its Input. */
export function InputAction({ type = 'button', variant = 'outline', className, disabled, ...rest }: InputActionProps) {
  const inputDisabled = useContext(DisabledContext);
  return <button {...rest} type={type} disabled={disabled ?? inputDisabled} className={['ds-input__action', variant === 'ghost' && 'ds-input__action--ghost', className].filter(Boolean).join(' ')} />;
}

export interface InputDropdownProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ref?: Ref<HTMLButtonElement>;
  /** Figma "Leading Icon": a 14 px icon before the label. */
  icon?: ReactNode;
  /** Figma "Label". */
  children: ReactNode;
}

// Lucide chevron-down at 14 px with the 1.25 px stroke.
const chevronDown = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.14} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

/**
 * Figma "Input Group Dropdown": a menu button in the T slot, e.g. a currency or a scope. Use it as a DropdownMenu's
 * `trigger` and pass the menu as the Input's `action`. Disabled together with its Input.
 */
export function InputDropdown({ type = 'button', icon, className, disabled, children, ...rest }: InputDropdownProps) {
  const inputDisabled = useContext(DisabledContext);
  return (
    <button {...rest} type={type} disabled={disabled ?? inputDisabled} className={['ds-input__dropdown', className].filter(Boolean).join(' ')}>
      {icon}
      {children}
      {chevronDown}
    </button>
  );
}
