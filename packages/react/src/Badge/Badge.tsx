import type { HTMLAttributes, ReactNode, Ref } from 'react';
import { RiCloseFill } from '@remixicon/react';

// Styles live in @helloantek/ds-css (classes ds-badge*); this component only renders the markup.

/** Figma "Style" property (Figma spells it "Srong"). */
export type BadgeVariant = 'soft' | 'strong';
/** Figma "Size" property. */
export type BadgeSize = 'sm' | 'lg';
/** Figma "Color" property. */
export type BadgeColor = 'neutral' | 'red' | 'orange' | 'lime' | 'green' | 'cyan' | 'blue' | 'violet' | 'fuchsia' | 'pink';
/** Figma "Shape" property. */
export type BadgeShape = 'rounded' | 'pill';

export interface BadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
  ref?: Ref<HTMLSpanElement>;
  /** Figma "↩ Label". */
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  color?: BadgeColor;
  shape?: BadgeShape;
  /** Figma "Border": a stroke on Soft badges. */
  border?: boolean;
  /** Figma Variant=Icon ("❖ Icon"). Icons should use `currentColor`. */
  icon?: ReactNode;
  /** Figma Variant=Image: a picture, e.g. an `<img>` (decorative; give it `alt=""`). */
  image?: ReactNode;
  /** Figma Variant=Dot. */
  dot?: boolean;
  /** Figma "Close Icon": shows a remove button that calls this. */
  onRemove?: () => void;
  /** Accessible name of the remove button. Defaults to "Remove <label>" for a text label. */
  removeLabel?: string;
}

export function Badge({
  ref,
  children,
  variant = 'soft',
  size = 'sm',
  color = 'neutral',
  shape = 'rounded',
  border = false,
  icon,
  image,
  dot = false,
  onRemove,
  removeLabel,
  className,
  ...rest
}: BadgeProps) {
  const classes = ['ds-badge', `ds-badge--${size}`, `ds-badge--${color}`, `ds-badge--${variant}`, border && 'ds-badge--border', shape === 'pill' && 'ds-badge--pill', className]
    .filter(Boolean)
    .join(' ');
  return (
    <span {...rest} ref={ref} className={classes}>
      {icon ? (
        <span className="ds-badge__lead" aria-hidden>
          {icon}
        </span>
      ) : dot ? (
        <span className="ds-badge__lead" aria-hidden>
          <span className="ds-badge__dot" />
        </span>
      ) : image ? (
        <span className="ds-badge__lead ds-badge__lead--image">
          <span className="ds-badge__image">{image}</span>
        </span>
      ) : null}
      <span className="ds-badge__label">{children}</span>
      {onRemove && (
        <button type="button" className="ds-badge__remove" aria-label={removeLabel ?? (typeof children === 'string' ? `Remove ${children}` : 'Remove')} onClick={onRemove}>
          <RiCloseFill aria-hidden />
        </button>
      )}
    </span>
  );
}
