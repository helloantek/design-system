import { useId, type InputHTMLAttributes, type ReactNode, type Ref } from 'react';
import { CheckboxGroup, type CheckboxGroupProps } from '../Checkbox';

// Styles live in @helloantek/ds-css (classes ds-switch*, ds-field*); this component only renders the markup around
// a native checkbox with role="switch".

/** Figma "Size": 32 × 20 (default) or 24 × 16 (sm). */
export type SwitchSize = 'default' | 'sm';

interface SwitchBaseProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'role'> {
  ref?: Ref<HTMLInputElement>;
  /** Figma Checked (controlled). */
  checked?: boolean;
  defaultChecked?: boolean;
  /** Native change event; `onCheckedChange` gets the new value directly. */
  onCheckedChange?: (checked: boolean) => void;
  /** Figma Size. */
  size?: SwitchSize;
  /** Figma State=Invalid without a message; `error` also sets it. */
  invalid?: boolean;
  /** Figma State=Disabled. */
  disabled?: boolean;
}

/** With a visible label: Figma "Field" Orientation=Horizontal (the demos put the switch at the end). */
interface SwitchFieldProps extends SwitchBaseProps {
  /** Figma "Field Label". */
  label: ReactNode;
  /** Figma Field "Description". */
  caption?: ReactNode;
  /** Figma Field State=Invalid ("Error"): the message replaces the description and marks the switch invalid. */
  error?: ReactNode;
  /** Figma Field "Control": the switch before (`start`) or after (`end`, default, as in every Switch demo) the label. */
  control?: 'start' | 'end';
  /** Figma's "Choice cards" demo: the field in a bordered card, filled when on; a click anywhere toggles it. */
  card?: boolean;
  /** Class for the field. */
  className?: string;
}

/** Without a visible label an accessible name is required. */
interface SwitchOnlyProps extends SwitchBaseProps {
  label?: never;
  caption?: never;
  error?: never;
  control?: never;
  card?: never;
  'aria-label'?: string;
  'aria-labelledby'?: string;
}

export type SwitchProps = SwitchFieldProps | (SwitchOnlyProps & ({ 'aria-label': string } | { 'aria-labelledby': string }));

/** Figma "Switch": turns a setting on or off at once (use a Checkbox for choices sent with a form). */
export function Switch(props: SwitchProps) {
  const { label, caption, error, control = 'end', card = false, size = 'default', className, invalid = false, onChange, onCheckedChange, id: idProp, 'aria-describedby': describedBy, ...rest } = props;
  const autoId = useId();
  const id = idProp ?? autoId;
  const captionId = `${id}-caption`;
  const hasError = error !== undefined && error !== null && error !== false;
  const help = hasError ? error : caption;

  const track = (
    <span className={['ds-switch', size === 'sm' && 'ds-switch--sm', label === undefined && className].filter(Boolean).join(' ')}>
      <input
        {...rest}
        id={id}
        type="checkbox"
        role="switch"
        className="ds-switch__input"
        aria-invalid={invalid || hasError || undefined}
        aria-describedby={[help !== undefined ? captionId : null, describedBy].filter(Boolean).join(' ') || undefined}
        onChange={(event) => {
          onChange?.(event);
          onCheckedChange?.(event.currentTarget.checked);
        }}
      />
      <span className="ds-switch__thumb" aria-hidden />
    </span>
  );

  if (label === undefined) return track;
  return (
    <div className={['ds-field', 'ds-field--horizontal', control === 'end' && 'ds-field--control-end', card && 'ds-field--card', className].filter(Boolean).join(' ')}>
      <span className="ds-field__control">{track}</span>
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

export type SwitchGroupProps = CheckboxGroupProps;

/** Figma "Field Group" of switches (the "Switch" demo's Collections): a fieldset with a legend, switches 12 px apart. */
export function SwitchGroup(props: SwitchGroupProps) {
  return <CheckboxGroup {...props} />;
}
