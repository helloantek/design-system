import type { ButtonHTMLAttributes, ReactNode, Ref } from 'react';

// Styles live in @helloantek/ds-css (classes ds-button*); this component only renders the markup.

/** Figma "Variant" property (Sort UI 2.0). */
export type ButtonVariant = 'default' | 'outline' | 'secondary' | 'ghost' | 'destructive';
/** Figma "Size" property (Sort UI 2.0): 40, 36, 32, 28 and 24 px tall. */
export type ButtonSize = 'xl' | 'lg' | 'default' | 'sm' | 'xs';

interface CommonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  ref?: Ref<HTMLButtonElement>;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export interface LabelButtonProps extends CommonProps {
  /** Figma "Label". */
  children: ReactNode;
  /** Figma "Leading Icon" (the "L Icon" slot). Icons should use `currentColor`. */
  leadingIcon?: ReactNode;
  /** Figma "Trailing Icon" (the "T Icon" slot). */
  trailingIcon?: ReactNode;
  /** Figma "Badge", e.g. a count. */
  badge?: ReactNode;
  icon?: never;
}

/** Figma Icon only=True. An accessible name is required because there is no visible label. */
export interface IconButtonProps extends CommonProps {
  icon: ReactNode;
  'aria-label': string;
  children?: never;
  leadingIcon?: never;
  trailingIcon?: never;
  badge?: never;
}

export type ButtonProps = LabelButtonProps | IconButtonProps;

export function Button(props: ButtonProps) {
  const { variant = 'default', size = 'default', type = 'button', className, icon, leadingIcon, trailingIcon, badge, children, ...rest } = props;
  const iconOnly = icon !== undefined;
  const classes = ['ds-button', `ds-button--${variant}`, `ds-button--size-${size}`, iconOnly && 'ds-button--icon-only', className].filter(Boolean).join(' ');

  return (
    <button {...rest} type={type} className={classes}>
      {iconOnly ? (
        <span className="ds-button__icon" aria-hidden>
          {icon}
        </span>
      ) : (
        <>
          {leadingIcon && (
            <span className="ds-button__icon" aria-hidden>
              {leadingIcon}
            </span>
          )}
          <span className="ds-button__label">{children}</span>
          {badge !== undefined && <span className="ds-button__badge">{badge}</span>}
          {trailingIcon && (
            <span className="ds-button__icon" aria-hidden>
              {trailingIcon}
            </span>
          )}
        </>
      )}
    </button>
  );
}
