import { useState, type ButtonHTMLAttributes, type MouseEvent, type ReactNode, type Ref } from 'react';

// Styles live in @helloantek/ds-css (classes ds-toggle*); this component renders a button with aria-pressed.

/** Figma "Variant". */
export type ToggleVariant = 'default' | 'outline';
/** Figma "Size". */
export type ToggleSize = 'sm' | 'default' | 'lg';

interface ToggleBaseProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  ref?: Ref<HTMLButtonElement>;
  /** Figma Variant (default `default`). */
  variant?: ToggleVariant;
  /** Figma Size (default `default`). */
  size?: ToggleSize;
  /** Figma Pressed (controlled). */
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
}

export interface LabelToggleProps extends ToggleBaseProps {
  /** Figma "Label". */
  children: ReactNode;
  /** Figma "Leading Icon": a 16 px icon (`currentColor`) before the label. */
  leadingIcon?: ReactNode;
  /** Figma "Trailing Icon". */
  trailingIcon?: ReactNode;
  icon?: never;
}

export interface IconToggleProps extends ToggleBaseProps {
  /** Figma "Show Label" off: one 16 px icon in a square; give the toggle an `aria-label`. */
  icon: ReactNode;
  'aria-label': string;
  children?: never;
  leadingIcon?: never;
  trailingIcon?: never;
}

export type ToggleProps = LabelToggleProps | IconToggleProps;

const cx = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(' ');

/** Figma "Toggle": a button that is on or off. */
export function Toggle(props: ToggleProps) {
  const { variant = 'default', size = 'default', pressed: pressedProp, defaultPressed = false, onPressedChange, icon, leadingIcon, trailingIcon, children, className, onClick, type = 'button', ...rest } = props;
  const [uncontrolled, setUncontrolled] = useState(defaultPressed);
  const pressed = pressedProp ?? uncontrolled;

  return (
    <button
      {...rest}
      type={type}
      aria-pressed={pressed}
      className={cx('ds-toggle', variant === 'outline' && 'ds-toggle--outline', size !== 'default' && `ds-toggle--size-${size}`, icon !== undefined && 'ds-toggle--icon-only', className)}
      onClick={(event: MouseEvent<HTMLButtonElement>) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        if (pressedProp === undefined) setUncontrolled(!pressed);
        onPressedChange?.(!pressed);
      }}
    >
      {icon !== undefined ? (
        <span className="ds-toggle__icon" aria-hidden>
          {icon}
        </span>
      ) : (
        <>
          {leadingIcon && (
            <span className="ds-toggle__icon" aria-hidden>
              {leadingIcon}
            </span>
          )}
          <span className="ds-toggle__label">{children}</span>
          {trailingIcon && (
            <span className="ds-toggle__icon" aria-hidden>
              {trailingIcon}
            </span>
          )}
        </>
      )}
    </button>
  );
}
