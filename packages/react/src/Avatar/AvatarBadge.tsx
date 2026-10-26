import type { HTMLAttributes, ReactNode, Ref } from 'react';

// Styles live in @helloantek/ds-css (classes ds-avatar-badge*); this component only renders the markup.

export interface AvatarBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  ref?: Ref<HTMLSpanElement>;
  /** Figma variant=icon: a small icon in the dot, e.g. a plus. Use `currentColor`. */
  icon?: ReactNode;
  /** What the badge means, read by screen readers; without it the badge is decorative. */
  label?: string;
}

/**
 * Figma "Avatar Badge": a primary dot, put in an Avatar's `bottomBadge` (Figma "badge"). Its size follows the avatar:
 * 8 px up to sm, 10 px in default, 12 px from lg.
 */
export function AvatarBadge({ ref, icon, label, className, ...rest }: AvatarBadgeProps) {
  return (
    <span
      {...rest}
      ref={ref}
      className={['ds-avatar-badge', icon !== undefined && 'ds-avatar-badge--icon', className].filter(Boolean).join(' ')}
      {...(label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true })}
    >
      {icon}
    </span>
  );
}
