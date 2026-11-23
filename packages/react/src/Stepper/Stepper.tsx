import { RiCheckLine, RiCloseLine } from '@remixicon/react';
import { Children, createContext, useContext, type HTMLAttributes, type LiHTMLAttributes, type ReactNode, type Ref } from 'react';

// Styles live in @helloantek/ds-css (classes ds-stepper*); these components only render the markup.

/** Figma "Orientation". */
export type StepperOrientation = 'horizontal' | 'vertical';
/** Figma "Style": a round marker with a line to the next step, or a thin bar on top (horizontal only). */
export type StepperVariant = 'indicator' | 'bar';
/** Figma Stepper Item "State". */
export type StepperItemState = 'upcoming' | 'current' | 'complete' | 'error';

interface StepperContextValue {
  variant: StepperVariant;
}

const StepperContext = createContext<StepperContextValue>({ variant: 'indicator' });
const StepNumberContext = createContext<number | undefined>(undefined);

/** One step for the `steps` shorthand. */
export interface StepperStep {
  /** Figma "Label". */
  label: ReactNode;
  /** Figma "Caption" (with "Show caption"). */
  caption?: ReactNode;
  /** Marks this step as failed whatever `current` says. */
  error?: boolean;
}

export interface StepperProps extends Omit<HTMLAttributes<HTMLOListElement>, 'children'> {
  ref?: Ref<HTMLOListElement>;
  /** Figma "Orientation". Style=Bar exists only horizontally. */
  orientation?: StepperOrientation;
  /** Figma "Style". */
  variant?: StepperVariant;
  /** The steps as data; each one's state follows `current`. Or pass `StepperItem` children. */
  steps?: StepperStep[];
  /** With `steps`: the index of the current step (0-based). Steps before it are complete; `steps.length` means all done. */
  current?: number;
  /** `StepperItem`s, numbered in order. */
  children?: ReactNode;
}

const stateFor = (index: number, current: number, step: StepperStep): StepperItemState =>
  step.error ? 'error' : index < current ? 'complete' : index === current ? 'current' : 'upcoming';

/** Figma "Stepper": the steps of a flow in order, as an ordered list. Name it with `aria-label`. */
export function Stepper({ orientation = 'horizontal', variant = 'indicator', steps, current = 0, children, className, ...rest }: StepperProps) {
  const items = steps
    ? steps.map((step, i) => <StepperItem key={i} state={stateFor(i, current, step)} label={step.label} caption={step.caption} />)
    : Children.toArray(children);
  return (
    <ol
      {...rest}
      className={['ds-stepper', orientation === 'vertical' && 'ds-stepper--vertical', variant === 'bar' && 'ds-stepper--bar', className].filter(Boolean).join(' ')}
    >
      <StepperContext.Provider value={{ variant }}>
        {items.map((item, i) => (
          <StepNumberContext.Provider key={i} value={i + 1}>
            {item}
          </StepNumberContext.Provider>
        ))}
      </StepperContext.Provider>
    </ol>
  );
}

const defaultStatus: Record<StepperItemState, string | undefined> = { upcoming: undefined, current: undefined, complete: 'completed', error: 'error' };

export interface StepperItemProps extends Omit<LiHTMLAttributes<HTMLLIElement>, 'children'> {
  ref?: Ref<HTMLLIElement>;
  /** Figma "State". The current step is announced with `aria-current="step"`. */
  state?: StepperItemState;
  /** Figma "Label". */
  label: ReactNode;
  /** Figma "Caption" (with "Show caption"). */
  caption?: ReactNode;
  /** Figma "Number"; defaults to the step's place in the Stepper. */
  number?: ReactNode;
  /** Figma "Show line": the line to the next step. Defaults to every step but the last. Indicator style only. */
  showLine?: boolean;
  /**
   * Read after the label by screen readers, since the check and the cross are only pictures. Defaults to
   * "completed" and "error"; pass your own words to translate them, or `null` for none.
   */
  statusLabel?: string | null;
}

/** Figma "Stepper Item": one step, with its marker (Figma "Stepper Indicator") or bar, label and caption. */
export function StepperItem({ state = 'upcoming', label, caption, number, showLine, statusLabel, className, ...rest }: StepperItemProps) {
  const { variant } = useContext(StepperContext);
  const place = useContext(StepNumberContext);
  const mark = state === 'complete' ? <RiCheckLine aria-hidden /> : state === 'error' ? <RiCloseLine aria-hidden /> : (number ?? place);
  const status = statusLabel === undefined ? defaultStatus[state] : statusLabel;
  const text = (
    <span className="ds-stepper__text">
      <span className="ds-stepper__label">{label}</span>
      {caption !== undefined && caption !== null && <span className="ds-stepper__caption">{caption}</span>}
      {status && <span className="ds-stepper__status">, {status}</span>}
    </span>
  );
  return (
    <li {...rest} aria-current={state === 'current' ? 'step' : undefined} className={['ds-stepper__item', `ds-stepper__item--${state}`, showLine === true && 'ds-stepper__item--line', showLine === false && 'ds-stepper__item--no-line', className].filter(Boolean).join(' ')}>
      {variant === 'bar' ? (
        <>
          <span className="ds-stepper__bar" />
          <span className="ds-stepper__row">
            <span className="ds-stepper__mark" aria-hidden>
              {mark}
            </span>
            {text}
          </span>
        </>
      ) : (
        <>
          <span className="ds-stepper__track">
            <span className="ds-stepper__indicator" aria-hidden>
              {mark}
            </span>
            <span className="ds-stepper__line" />
          </span>
          {text}
        </>
      )}
    </li>
  );
}
