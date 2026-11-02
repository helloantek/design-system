import { Fragment, useState, type ChangeEvent, type CSSProperties } from 'react';
import { useField } from '../Field';

// Styles live in @helloantek/ds-css (classes ds-input-otp*). One real <input autocomplete="one-time-code"> lies,
// invisible, over the slots: it takes typing, paste, Backspace and the phone's code autofill, and screen readers meet
// one text field. The slots only draw its value and where the next character goes.

/** Figma Layout: the slots joined in groups (Single / Two / Three groups) or each in its own box (Cells). */
export type InputOTPLayout = 'groups' | 'cells';
/** Which characters a slot takes: digits (default), letters and digits, or any character matching a RegExp. */
export type InputOTPPattern = 'digits' | 'alphanumeric' | RegExp;

export interface InputOTPProps {
  /** How many characters (default 6). */
  length?: number;
  /** The code (controlled). */
  value?: string;
  /** The code at first (uncontrolled). */
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  /** Called once every slot is filled, e.g. to submit. */
  onComplete?: (value: string) => void;
  /** Figma Layout (default `groups`). */
  layout?: InputOTPLayout;
  /** Figma Single / Two / Three groups: how many groups the slots split into (default 1); ignored for `cells`. */
  groups?: number;
  /** Figma "Separator": a minus between groups (default true). */
  separator?: boolean;
  /** Which characters are accepted (default `digits`); others are dropped as you type or paste. */
  pattern?: InputOTPPattern;
  /** Figma State=Invalid. A surrounding Field's error sets it too. */
  invalid?: boolean;
  /** Figma State=Disabled. */
  disabled?: boolean;
  /** Not a Figma property ("Input OTP" demo): the slots share the container's width. */
  fullWidth?: boolean;
  /** Submits the code with a form. */
  name?: string;
  /** Names the field when there is no Field label, e.g. "Verification code". */
  'aria-label'?: string;
  autoFocus?: boolean;
  id?: string;
  className?: string;
  style?: CSSProperties;
}

const cx = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(' ');

const minus = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.875} strokeLinecap="round" aria-hidden>
    <path d="M5 12h14" />
  </svg>
);

const accepts = (pattern: InputOTPPattern, ch: string) =>
  pattern === 'digits' ? /^[0-9]$/.test(ch) : pattern === 'alphanumeric' ? /^[a-zA-Z0-9]$/.test(ch) : pattern.test(ch);

/** Figma "Input OTP": a one-time code in a row of slots. */
export function InputOTP({
  length = 6,
  value: valueProp,
  defaultValue = '',
  onValueChange,
  onComplete,
  layout = 'groups',
  groups = 1,
  separator = true,
  pattern = 'digits',
  invalid: invalidProp = false,
  disabled: disabledProp = false,
  fullWidth = false,
  name,
  'aria-label': ariaLabel,
  autoFocus,
  id,
  className,
  style,
}: InputOTPProps) {
  const field = useField();
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const [focused, setFocused] = useState(false);
  const value = (valueProp ?? uncontrolled).slice(0, length);
  const invalid = invalidProp || Boolean(field?.invalid);
  const disabled = disabledProp || Boolean(field?.disabled);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const next = [...event.currentTarget.value].filter((ch) => accepts(pattern, ch)).join('').slice(0, length);
    if (next === value) {
      // A rejected character: put the input back to the code so the caret does not drift.
      event.currentTarget.value = value;
      return;
    }
    if (valueProp === undefined) setUncontrolled(next);
    onValueChange?.(next);
    if (next.length === length && value.length < length) onComplete?.(next);
  };

  // Split the slots: one group per slot for Cells, otherwise `groups` groups as even as possible (6 in 2 → 3 + 3).
  const count = layout === 'cells' ? length : Math.max(1, Math.min(groups, length));
  const sizes = Array.from({ length: count }, (_, i) => Math.floor(length / count) + (i < length % count ? 1 : 0));
  const active = focused ? Math.min(value.length, length - 1) : -1;
  let index = 0;

  return (
    <div
      className={cx('ds-input-otp', layout === 'cells' && 'ds-input-otp--cells', invalid && 'ds-input-otp--invalid', disabled && 'ds-input-otp--disabled', fullWidth && 'ds-input-otp--full-width', className)}
      style={style}
    >
      {sizes.map((size, g) => (
        <Fragment key={g}>
          {g > 0 && separator && layout !== 'cells' && <div className="ds-input-otp__separator">{minus}</div>}
          <div className="ds-input-otp__group" aria-hidden>
            {Array.from({ length: size }, () => {
              const i = index++;
              const ch = value[i];
              return (
                <div key={i} className={cx('ds-input-otp__slot', i === active && 'ds-input-otp__slot--active')} data-index={i}>
                  {ch ?? (i === active ? <span className="ds-input-otp__caret" /> : null)}
                </div>
              );
            })}
          </div>
        </Fragment>
      ))}
      <input
        id={id ?? field?.id}
        className="ds-input-otp__input"
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        onFocus={(event) => {
          setFocused(true);
          // Typing continues after the last character, whichever slot was clicked.
          const end = event.currentTarget.value.length;
          event.currentTarget.setSelectionRange(end, end);
        }}
        onBlur={() => setFocused(false)}
        onSelect={(event) => {
          const el = event.currentTarget;
          if (el.selectionStart !== el.value.length || el.selectionEnd !== el.value.length) el.setSelectionRange(el.value.length, el.value.length);
        }}
        minLength={length}
        autoComplete="one-time-code"
        inputMode={pattern === 'digits' ? 'numeric' : 'text'}
        pattern={pattern === 'digits' ? `[0-9]{${length}}` : pattern === 'alphanumeric' ? `[a-zA-Z0-9]{${length}}` : undefined}
        spellCheck={false}
        autoFocus={autoFocus}
        disabled={disabled}
        required={field?.required}
        aria-label={ariaLabel}
        aria-describedby={field?.describedBy}
        aria-invalid={invalid || undefined}
      />
    </div>
  );
}
