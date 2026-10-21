import type { ButtonHTMLAttributes, ReactNode, Ref } from 'react';
import { RiLoader4Fill } from '@remixicon/react';

// Styles live in @helloantek/ds-css (classes ds-button*); this component only renders the markup.

/** Figma "Style" property. */
export type ButtonVariant = 'primary' | 'secondary' | 'dashed' | 'soft' | 'ghost' | 'ghost-muted' | 'destructive';
/** Figma "Size" property. */
export type ButtonSize = 'lg' | 'md' | 'sm' | 'xs' | '2xs';
/** Figma "Shape" property. */
export type ButtonShape = 'rounded' | 'pill';

interface CommonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  ref?: Ref<HTMLButtonElement>;
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  /** Figma State=Loading: shows a spinner, hides badge and tail icon, blocks activation. */
  loading?: boolean;
}

export interface LabelButtonProps extends CommonProps {
  children: ReactNode;
  /** Figma "❖ Lead Icon" slot. Icons should use `currentColor`. */
  leadIcon?: ReactNode;
  /** Figma "❖ Tail Icon" slot. */
  tailIcon?: ReactNode;
  /** Figma "Badge" text, e.g. a keyboard shortcut. */
  badge?: ReactNode;
  icon?: never;
}

/** Figma Variant=Icon only. An accessible name is required because there is no visible label. */
export interface IconButtonProps extends CommonProps {
  icon: ReactNode;
  'aria-label': string;
  children?: never;
  leadIcon?: never;
  tailIcon?: never;
  badge?: never;
}

export type ButtonProps = LabelButtonProps | IconButtonProps;

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    shape = 'rounded',
    loading = false,
    type = 'button',
    className,
    icon,
    leadIcon,
    tailIcon,
    badge,
    children,
    onClick,
    ...rest
  } = props;
  const iconOnly = icon !== undefined;
  const spinner = <RiLoader4Fill className="ds-button__spinner" aria-hidden />;

  const classes = [
    'ds-button',
    `ds-button--${variant}`,
    `ds-button--${size}`,
    `ds-button--${shape}`,
    iconOnly && 'ds-button--icon-only',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = iconOnly ? (
    <span className="ds-button__icon" aria-hidden>
      {loading ? spinner : icon}
    </span>
  ) : (
    <>
      {leadIcon && (
        <span className="ds-button__icon" aria-hidden>
          {leadIcon}
        </span>
      )}
      <span className="ds-button__label">{children}</span>
      {badge !== undefined && <span className="ds-button__badge">{badge}</span>}
      {tailIcon && (
        <span className="ds-button__icon" aria-hidden>
          {tailIcon}
        </span>
      )}
    </>
  );

  return (
    <button
      {...rest}
      type={type}
      className={classes}
      data-loading={loading || undefined}
      aria-busy={loading || undefined}
      aria-disabled={loading || rest['aria-disabled'] || undefined}
      onClick={loading ? (event) => event.preventDefault() : onClick}
    >
      {loading && !iconOnly ? (
        <>
          <span className="ds-button__sizer" aria-hidden>
            {content}
          </span>
          <span className="ds-button__loading">
            <span className="ds-button__icon" aria-hidden>
              {spinner}
            </span>
            <span className="ds-button__label">{children}</span>
          </span>
        </>
      ) : (
        content
      )}
    </button>
  );
}
