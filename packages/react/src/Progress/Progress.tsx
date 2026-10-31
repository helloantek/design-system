import { useId, type CSSProperties, type HTMLAttributes, type ReactNode, type Ref } from 'react';

// Styles live in @helloantek/ds-css (classes ds-progress*); these components only render the markup.

/** Figma "Variant": one bar, or one segment per step. */
export type ProgressVariant = 'default' | 'dashed';

export interface ProgressProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  ref?: Ref<HTMLDivElement>;
  /** How far it has got, from 0 to `max`; leave it out while unknown (an indeterminate bar). */
  value?: number | null;
  /** The value when done (default 100); with `variant="dashed"`, the number of steps. */
  max?: number;
  /** Figma Variant. */
  variant?: ProgressVariant;
  /** Figma header "Label": names the bar. Without it, give `aria-label`. */
  label?: ReactNode;
  /**
   * Figma header "Value": shown at the end of the header and read as the bar's value. Defaults to the percentage
   * ("54%"), or "3/10" for dashed steps; `false` hides it.
   */
  valueLabel?: ReactNode | false;
  /** Figma footer "Description". */
  description?: ReactNode;
}

const clamp = (value: number, max: number) => Math.min(max, Math.max(0, value));

/** Figma "Progress": how far a task has got, as a bar with an optional header and footer. */
export function Progress({ value, max = 100, variant = 'default', label, valueLabel, description, className, 'aria-label': ariaLabel, ...rest }: ProgressProps) {
  const id = useId();
  const known = value !== undefined && value !== null;
  const current = known ? clamp(value, max) : 0;
  const percent = max > 0 ? (current / max) * 100 : 0;
  const shownValue = valueLabel === false ? undefined : (valueLabel ?? (known ? (variant === 'dashed' ? `${current}/${max}` : `${Math.round(percent)}%`) : undefined));
  const steps = variant === 'dashed' ? Math.max(1, Math.round(max)) : 0;

  return (
    <div {...rest} className={['ds-progress', className].filter(Boolean).join(' ')}>
      {(label !== undefined || shownValue !== undefined) && (
        <div className="ds-progress__header">
          {label !== undefined && (
            <span id={`${id}-label`} className="ds-progress__label">
              {label}
            </span>
          )}
          {shownValue !== undefined && (
            <span className="ds-progress__value" aria-hidden>
              {shownValue}
            </span>
          )}
        </div>
      )}
      <div
        role="progressbar"
        aria-labelledby={label !== undefined ? `${id}-label` : undefined}
        aria-label={label === undefined ? ariaLabel : undefined}
        aria-describedby={description !== undefined ? `${id}-description` : undefined}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={known ? current : undefined}
        aria-valuetext={known && typeof shownValue === 'string' ? shownValue : undefined}
        className={['ds-progress__track', variant === 'dashed' && 'ds-progress__track--dashed', !known && 'ds-progress__track--indeterminate'].filter(Boolean).join(' ')}
      >
        {variant === 'dashed' ? (
          Array.from({ length: steps }, (_, i) => <span key={i} className={i < current ? 'ds-progress__step ds-progress__step--done' : 'ds-progress__step'} />)
        ) : (
          <div className="ds-progress__indicator" style={known ? ({ '--progress': percent } as CSSProperties) : undefined} />
        )}
      </div>
      {description !== undefined && (
        <p id={`${id}-description`} className="ds-progress__description">
          {description}
        </p>
      )}
    </div>
  );
}

export interface ProgressCircleProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  ref?: Ref<HTMLDivElement>;
  /** From 0 to `max`. */
  value: number;
  /** Default 100. */
  max?: number;
  /** The "Circle" demo's warning: a destructive ring and label. */
  variant?: 'default' | 'destructive';
  /** Diameter, any CSS length (default 72 px). */
  size?: string;
  /** Ring width in % of the size (default 10, Figma's 80 % inner radius; the "Circle" demo uses 7.5). */
  thickness?: number;
  /** Text in the middle, e.g. "75%"; read as the value when it is text. */
  label?: ReactNode;
}

/** Figma "Progress circle": a ring filling clockwise from 12 o'clock. Name it with `aria-label` or `aria-labelledby`. */
export function ProgressCircle({ value, max = 100, variant = 'default', size, thickness, label, className, style, ...rest }: ProgressCircleProps) {
  const current = clamp(value, max);
  const percent = max > 0 ? (current / max) * 100 : 0;
  const vars = { '--progress': percent, ...(size !== undefined && { '--progress-circle-size': size }), ...(thickness !== undefined && { '--progress-circle-thickness': thickness }) } as CSSProperties;
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={current}
      aria-valuetext={typeof label === 'string' ? label : undefined}
      {...rest}
      className={['ds-progress-circle', variant === 'destructive' && 'ds-progress-circle--destructive', className].filter(Boolean).join(' ')}
      style={{ ...vars, ...style }}
    >
      <svg viewBox="0 0 100 100" aria-hidden>
        <circle className="ds-progress-circle__track" cx="50" cy="50" r="45" />
        <circle className="ds-progress-circle__indicator" cx="50" cy="50" r="45" pathLength={100} />
      </svg>
      {label !== undefined && (
        <span className="ds-progress-circle__label" aria-hidden>
          {label}
        </span>
      )}
    </div>
  );
}
