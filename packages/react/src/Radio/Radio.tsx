import { createContext, useContext, useId, useState, type CSSProperties, type FieldsetHTMLAttributes, type InputHTMLAttributes, type ReactNode, type Ref } from 'react';

// Styles live in @helloantek/ds-css (classes ds-radio*, ds-field*, ds-fieldset*); these components render the markup
// around native radio inputs. Radios in a RadioGroup share a name, so the browser handles the arrow keys and forms.

interface RadioGroupContextValue {
  name: string;
  value: string | null | undefined;
  select: (value: string) => void;
  invalid: boolean;
  required?: boolean;
  describedBy?: string;
}
const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

interface RadioBaseProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'value'> {
  ref?: Ref<HTMLInputElement>;
  /** The value submitted, and the one RadioGroup's `value` refers to. */
  value: string;
  /** Figma State=Invalid; a RadioGroup with `error` or `invalid` sets it on every radio. */
  invalid?: boolean;
  /** Figma State=Disabled. */
  disabled?: boolean;
}

/** With a visible label: Figma "Field" Orientation=Horizontal, or "Choice Card" with `card`. */
interface RadioFieldProps extends RadioBaseProps {
  /** Figma "Field Label" (Choice Card "Title"). */
  label: ReactNode;
  /** Figma Field "Description". */
  caption?: ReactNode;
  /** Figma Field "Control": the radio before (`start`, default) or after (`end`) the label. */
  control?: 'start' | 'end';
  /** Figma "Choice Card": the field in a bordered card, filled when checked; a click anywhere selects it. */
  card?: boolean;
  /** Class for the field. */
  className?: string;
}

/** Without a visible label an accessible name is required. */
interface RadioOnlyProps extends RadioBaseProps {
  label?: never;
  caption?: never;
  control?: never;
  card?: never;
  'aria-label'?: string;
  'aria-labelledby'?: string;
}

export type RadioProps = RadioFieldProps | (RadioOnlyProps & ({ 'aria-label': string } | { 'aria-labelledby': string }));

/** Figma "Radio". Inside a RadioGroup, `checked` and `name` come from the group. */
export function Radio(props: RadioProps) {
  const { label, caption, control = 'start', card = false, className, invalid = false, value, id: idProp, onChange, 'aria-describedby': describedBy, ...rest } = props;
  const group = useContext(RadioGroupContext);
  const autoId = useId();
  const id = idProp ?? autoId;
  const captionId = `${id}-caption`;

  const box = (
    <span className={label === undefined ? ['ds-radio', className].filter(Boolean).join(' ') : 'ds-radio'}>
      <input
        name={group?.name}
        required={group?.required}
        checked={group && group.value !== undefined ? group.value === value : undefined}
        {...rest}
        id={id}
        type="radio"
        value={value}
        className="ds-radio__input"
        aria-invalid={invalid || group?.invalid || undefined}
        aria-describedby={[caption !== undefined ? captionId : null, describedBy, group?.describedBy].filter(Boolean).join(' ') || undefined}
        onChange={(event) => {
          onChange?.(event);
          if (event.currentTarget.checked) group?.select(value);
        }}
      />
      <span className="ds-radio__dot" aria-hidden />
    </span>
  );

  if (label === undefined) return box;
  return (
    <div className={['ds-field', 'ds-field--horizontal', control === 'end' && 'ds-field--control-end', card && 'ds-field--card', className].filter(Boolean).join(' ')}>
      <span className="ds-field__control">{box}</span>
      <div className="ds-field__content">
        <label className="ds-field__label" htmlFor={id}>
          {label}
        </label>
        {caption !== undefined && (
          <p id={captionId} className="ds-field__caption">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}

export interface RadioGroupProps extends Omit<FieldsetHTMLAttributes<HTMLFieldSetElement>, 'onChange' | 'defaultValue'> {
  ref?: Ref<HTMLFieldSetElement>;
  /** Figma "Field Label" over the group: the fieldset's legend. */
  label: ReactNode;
  /** Figma Field "Description" under the legend. */
  caption?: ReactNode;
  /** Figma State=Invalid ("Error"): the message replaces the description and marks every radio invalid. */
  error?: ReactNode;
  /** Figma State=Invalid without a message (the "Invalid" demo). */
  invalid?: boolean;
  /** The checked radio's value (controlled); `null` checks none. */
  value?: string | null;
  defaultValue?: string | null;
  onValueChange?: (value: string) => void;
  /** Form field name shared by the radios (generated when left out). */
  name?: string;
  /** Requires a choice before the form submits. */
  required?: boolean;
  /** Disables every radio (native fieldset). */
  disabled?: boolean;
  /** Lays the radios out in this many columns (Figma's "Grid" demo); one column by default. */
  columns?: number;
  /** The Radios. */
  children: ReactNode;
}

/** Figma "Radio Group": radios under a legend, 12 px apart; one of them can be checked. */
export function RadioGroup({ label, caption, error, invalid = false, value: valueProp, defaultValue = null, onValueChange, name: nameProp, required, columns, className, children, ...rest }: RadioGroupProps) {
  const id = useId();
  const [uncontrolled, setUncontrolled] = useState<string | null>(defaultValue);
  const value = valueProp === undefined ? uncontrolled : valueProp;
  const hasError = error !== undefined && error !== null && error !== false;
  const help = hasError ? error : caption;
  const select = (next: string) => {
    if (valueProp === undefined) setUncontrolled(next);
    onValueChange?.(next);
  };
  const grid = columns !== undefined && columns > 1;
  return (
    <RadioGroupContext.Provider value={{ name: nameProp ?? id, value, select, invalid: invalid || hasError, required, describedBy: hasError ? `${id}-caption` : undefined }}>
      <fieldset {...rest} className={['ds-fieldset', className].filter(Boolean).join(' ')} aria-describedby={help !== undefined ? `${id}-caption` : undefined}>
        <legend className="ds-fieldset__legend">{label}</legend>
        {help !== undefined && (
          <p id={`${id}-caption`} className={hasError ? 'ds-field__caption ds-field__caption--error' : 'ds-field__caption'}>
            {help}
          </p>
        )}
        <div
          className={grid ? 'ds-fieldset__fields ds-fieldset__fields--grid' : 'ds-fieldset__fields'}
          style={grid ? ({ '--fieldset-columns': columns } as CSSProperties) : undefined}
        >
          {children}
        </div>
      </fieldset>
    </RadioGroupContext.Provider>
  );
}
