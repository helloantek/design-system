import { useEffect, useId, useRef, type FieldsetHTMLAttributes, type InputHTMLAttributes, type ReactNode, type Ref } from 'react';

// Styles live in @helloantek/ds-css (classes ds-checkbox*, ds-field*, ds-fieldset*); this component only renders the
// markup around a native checkbox.

// Sort UI 2.0 check and minus (24 px grid) drawn at 14 px, so a 1.25 px stroke is 2.14 in the grid.
const check = (
  <svg className="ds-checkbox__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.14} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
const minus = (
  <svg className="ds-checkbox__minus" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.14} strokeLinecap="round" aria-hidden>
    <path d="M5 12h14" />
  </svg>
);

interface CheckboxBaseProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'onChange'> {
  ref?: Ref<HTMLInputElement>;
  /** Figma Checked (controlled). */
  checked?: boolean;
  defaultChecked?: boolean;
  /** Neither checked nor unchecked, e.g. a "select all" over some rows; drawn with a minus. Clicking clears it. */
  indeterminate?: boolean;
  /** Native change event; `onCheckedChange` gets the new value directly. */
  onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'];
  onCheckedChange?: (checked: boolean) => void;
  /** Figma State=Invalid without a message; `error` also sets it. */
  invalid?: boolean;
  /** Figma State=Disabled. */
  disabled?: boolean;
}

/** With a visible label: Figma "Field" Orientation=Horizontal. */
interface CheckboxFieldProps extends CheckboxBaseProps {
  /** Figma "Field Label". */
  label: ReactNode;
  /** Figma Field "Description". */
  caption?: ReactNode;
  /** Figma Field State=Invalid ("Error"): the message replaces the description and marks the checkbox invalid. */
  error?: ReactNode;
  /** Figma Field "Control": the checkbox before (`start`, default) or after (`end`) the label. */
  control?: 'start' | 'end';
  /** Class for the field. */
  className?: string;
}

/** Without a visible label an accessible name is required. */
interface CheckboxOnlyProps extends CheckboxBaseProps {
  label?: never;
  caption?: never;
  error?: never;
  control?: never;
  'aria-label'?: string;
  'aria-labelledby'?: string;
}

export type CheckboxProps = CheckboxFieldProps | (CheckboxOnlyProps & ({ 'aria-label': string } | { 'aria-labelledby': string }));

export function Checkbox(props: CheckboxProps) {
  const { ref, label, caption, error, control = 'start', className, indeterminate = false, invalid = false, onChange, onCheckedChange, id: idProp, 'aria-describedby': describedBy, ...rest } = props;
  const autoId = useId();
  const id = idProp ?? autoId;
  const captionId = `${id}-caption`;
  const inputRef = useRef<HTMLInputElement | null>(null);
  const hasError = error !== undefined && error !== null && error !== false;
  const help = hasError ? error : caption;

  // `indeterminate` is a property only, not an attribute.
  useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  const setRef = (node: HTMLInputElement | null) => {
    inputRef.current = node;
    if (typeof ref === 'function') ref(node);
    else if (ref) ref.current = node;
  };

  const box = (
    <span className={label === undefined ? ['ds-checkbox', className].filter(Boolean).join(' ') : 'ds-checkbox'}>
      <input
        {...rest}
        ref={setRef}
        id={id}
        type="checkbox"
        className="ds-checkbox__input"
        aria-invalid={invalid || hasError || undefined}
        aria-describedby={[help !== undefined ? captionId : null, describedBy].filter(Boolean).join(' ') || undefined}
        onChange={(event) => {
          onChange?.(event);
          onCheckedChange?.(event.currentTarget.checked);
        }}
      />
      {check}
      {minus}
    </span>
  );

  if (label === undefined) return box;
  return (
    <div className={['ds-field', 'ds-field--horizontal', control === 'end' && 'ds-field--control-end', className].filter(Boolean).join(' ')}>
      <span className="ds-field__control">{box}</span>
      <div className="ds-field__content">
        <label className="ds-field__label" htmlFor={id}>
          {label}
        </label>
        {help !== undefined && (
          <p id={captionId} className={hasError ? 'ds-field__caption ds-field__caption--error' : 'ds-field__caption'}>
            {help}
          </p>
        )}
      </div>
    </div>
  );
}

export interface CheckboxGroupProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  ref?: Ref<HTMLFieldSetElement>;
  /** Figma "Field Label" over the group: the fieldset's legend. */
  label: ReactNode;
  /** Figma Field "Description" under the legend. */
  caption?: ReactNode;
  /** A message for the whole group (e.g. "Pick at least one"); replaces the description. */
  error?: ReactNode;
  /** Disables every checkbox in the group (native fieldset). */
  disabled?: boolean;
  /** The Checkboxes. */
  children: ReactNode;
}

/** Figma "Field Group": related checkboxes under a legend, 12 px apart. */
export function CheckboxGroup({ label, caption, error, className, children, ...rest }: CheckboxGroupProps) {
  const id = useId();
  const hasError = error !== undefined && error !== null && error !== false;
  const help = hasError ? error : caption;
  return (
    <fieldset {...rest} className={['ds-fieldset', className].filter(Boolean).join(' ')} aria-describedby={help !== undefined ? `${id}-caption` : undefined}>
      <legend className="ds-fieldset__legend">{label}</legend>
      {help !== undefined && (
        <p id={`${id}-caption`} className={hasError ? 'ds-field__caption ds-field__caption--error' : 'ds-field__caption'}>
          {help}
        </p>
      )}
      <div className="ds-fieldset__fields">{children}</div>
    </fieldset>
  );
}
