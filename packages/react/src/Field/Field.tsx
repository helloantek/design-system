import { Children, cloneElement, isValidElement, useId, type FieldsetHTMLAttributes, type HTMLAttributes, type MouseEvent, type ReactElement, type ReactNode, type Ref } from 'react';
import { FieldContext, type FieldState } from './FieldContext';

// Styles live in @helloantek/ds-css (classes ds-field*, ds-fieldset*); these components only render the markup.

/** Figma "Orientation": label above the control, beside it, or (not in Figma, the "Responsive" demo) beside it until the row is too narrow. */
export type FieldOrientation = 'vertical' | 'horizontal' | 'responsive';

export interface FieldLabelProps extends Omit<HTMLAttributes<HTMLLabelElement>, 'children'> {
  /** The control's id (`<label for>`). */
  htmlFor?: string;
  /** Figma "Required": a red asterisk; screen readers learn it from the control's `required`. */
  required?: boolean;
  /** Figma "Helper": muted text after the label, e.g. "(Optional)". */
  helper?: ReactNode;
  /** Figma "label-addon" (Trail addon): content at the end of the row, e.g. a Badge. */
  addon?: ReactNode;
  children: ReactNode;
}

/** Figma "Field Label", Variant=Label: the label row of a Field. */
export function FieldLabel({ required = false, helper, addon, className, children, ...rest }: FieldLabelProps) {
  const label = (
    <label {...rest} className={['ds-field__label', className].filter(Boolean).join(' ')}>
      {children}
      {required && (
        <span className="ds-field__required" aria-hidden>
          *
        </span>
      )}
      {helper !== undefined && <span className="ds-field__helper">{helper}</span>}
    </label>
  );
  return addon === undefined ? (
    label
  ) : (
    <div className="ds-field__label-row">
      {label}
      <span className="ds-field__addon">{addon}</span>
    </div>
  );
}

export interface FieldProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  ref?: Ref<HTMLDivElement>;
  /** Figma Field Label. */
  label: ReactNode;
  /** Figma "Description". */
  description?: ReactNode;
  /** Figma "Error" (State=Invalid): shown under the description, and marks the control invalid. */
  error?: ReactNode;
  /** Figma State=Invalid without a message. */
  invalid?: boolean;
  /** Figma State=Disabled: disables the control and fades the label. */
  disabled?: boolean;
  /** Figma Field Label "Required": the asterisk, and `required` on the control. */
  required?: boolean;
  /** Figma Field Label "Helper". */
  helper?: ReactNode;
  /** Figma Field Label "label-addon". */
  labelAddon?: ReactNode;
  /** Figma Orientation. */
  orientation?: FieldOrientation;
  /** Figma "Control" (horizontal): the control before (`start`) or after (`end`) the label. */
  control?: 'start' | 'end';
  /** The control's id; generated when not given. */
  htmlFor?: string;
  /**
   * The control (Figma "control" slot). Input, Select, Combobox and Textarea, and controls using `useField()`, take the
   * ids and state from the Field; a native element (`<input>`, `<select>`…) gets them as attributes.
   */
  children: ReactNode;
}

/** Figma "Field": a label, a control and a description or error, wired for screen readers. */
export function Field({ label, description, error, invalid: invalidProp = false, disabled = false, required = false, helper, labelAddon, orientation = 'vertical', control = 'start', htmlFor, className, children, ...rest }: FieldProps) {
  const autoId = useId();
  const id = htmlFor ?? `${autoId}-control`;
  const labelId = `${autoId}-label`;
  const descriptionId = `${autoId}-description`;
  const errorId = `${autoId}-error`;
  const hasError = error !== undefined && error !== null && error !== false;
  const invalid = hasError || invalidProp;
  const describedBy = [description !== undefined ? descriptionId : null, hasError ? errorId : null].filter(Boolean).join(' ') || undefined;
  const state: FieldState = { id, labelId, describedBy, invalid, disabled, required };

  // A native element gets the wiring as attributes; components read it from the context.
  const only = Children.count(children) === 1 ? Children.only(children) : null;
  const content =
    isValidElement(only) && typeof only.type === 'string'
      ? cloneElement(only as ReactElement<Record<string, unknown>>, {
          id,
          'aria-describedby': [state.describedBy, (only.props as Record<string, unknown>)['aria-describedby']].filter(Boolean).join(' ') || undefined,
          'aria-invalid': invalid || undefined,
          disabled: disabled || undefined,
          required: required || undefined,
        })
      : children;

  // A <label for> cannot focus a role="combobox" element (Select), so a click on the label focuses the control itself.
  const focusControl = (event: MouseEvent<HTMLLabelElement>) => {
    const target = document.getElementById(id);
    if (target && !target.matches('input, select, textarea, button')) {
      event.preventDefault();
      target.focus();
    }
  };

  const labelRow = (
    <FieldLabel id={labelId} htmlFor={id} required={required} helper={helper} addon={labelAddon} onClick={focusControl}>
      {label}
    </FieldLabel>
  );
  const caption = (
    <>
      {description !== undefined && (
        <p id={descriptionId} className="ds-field__caption">
          {description}
        </p>
      )}
      {hasError && (
        <p id={errorId} className="ds-field__caption ds-field__caption--error">
          {error}
        </p>
      )}
    </>
  );
  const classes = [
    'ds-field',
    orientation === 'horizontal' && 'ds-field--horizontal',
    orientation === 'horizontal' && control === 'end' && 'ds-field--control-end',
    orientation === 'responsive' && 'ds-field--responsive',
    invalid && 'ds-field--invalid',
    disabled && 'ds-field--disabled',
    className,
  ];

  return (
    <FieldContext.Provider value={state}>
      <div {...rest} className={classes.filter(Boolean).join(' ')}>
        {orientation === 'vertical' ? (
          <>
            {labelRow}
            {content}
            {caption}
          </>
        ) : (
          <>
            <div className="ds-field__content">
              {labelRow}
              {caption}
            </div>
            <div className="ds-field__control">{content}</div>
          </>
        )}
      </div>
    </FieldContext.Provider>
  );
}

export interface FieldGroupProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
  /** Figma "fields": Fields, 20 px apart. */
  children: ReactNode;
}

/** Figma "Field Group": fields stacked 20 px apart. */
export function FieldGroup({ className, ...rest }: FieldGroupProps) {
  return <div {...rest} className={['ds-field-group', className].filter(Boolean).join(' ')} />;
}

export interface FieldSetProps extends Omit<FieldsetHTMLAttributes<HTMLFieldSetElement>, 'title'> {
  ref?: Ref<HTMLFieldSetElement>;
  /** Figma Field Label, Variant=Legend: the set's name. */
  legend: ReactNode;
  /** Figma "Description". */
  description?: ReactNode;
  /** Figma "fields". */
  children: ReactNode;
}

/** Figma "Field Set": related fields under a legend and a description (a native `<fieldset>`; `disabled` disables them all). */
export function FieldSet({ legend, description, className, children, 'aria-describedby': describedBy, ...rest }: FieldSetProps) {
  const id = useId();
  const descriptionId = `${id}-description`;
  return (
    <fieldset {...rest} aria-describedby={[description !== undefined ? descriptionId : null, describedBy].filter(Boolean).join(' ') || undefined} className={['ds-fieldset', 'ds-fieldset--set', className].filter(Boolean).join(' ')}>
      <legend className="ds-fieldset__legend">{legend}</legend>
      {description !== undefined && (
        <p id={descriptionId} className="ds-field__caption">
          {description}
        </p>
      )}
      <div className="ds-fieldset__fields">{children}</div>
    </fieldset>
  );
}

export interface FieldSeparatorProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
  /** Figma Content=Text: words in the middle of the line, e.g. "or". */
  children?: ReactNode;
}

/** Figma "Field Separator": a line between groups of fields, optionally with text ("or"); decorative. */
export function FieldSeparator({ className, children, ...rest }: FieldSeparatorProps) {
  return (
    <div role="none" {...rest} className={['ds-field-separator', className].filter(Boolean).join(' ')}>
      {children !== undefined && <span className="ds-field-separator__content">{children}</span>}
    </div>
  );
}
