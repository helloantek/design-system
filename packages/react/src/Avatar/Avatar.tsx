import { useState, type HTMLAttributes, type ReactNode, type Ref } from 'react';

// Styles live in @helloantek/ds-css (classes ds-avatar*); this component only renders the markup.

/** Figma "size" (Sort UI 2.0: xs 20, sm 24, default 32, lg 40, xl 48 px); 2xs (16), 2xl (56) and 3xl (64) are extensions. */
export type AvatarSize = '2xs' | 'xs' | 'sm' | 'default' | 'lg' | 'xl' | '2xl' | '3xl';
/** Figma "shape". */
export type AvatarShape = 'round' | 'square';

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  ref?: Ref<HTMLSpanElement>;
  /** Figma variant=image: the picture's URL. Falls back to the initials (or the icon) when it fails to load. */
  src?: string;
  /** Figma variant=fallback ("Initials"), e.g. "SH". */
  initials?: string;
  /** Figma variant=icon: the icon shown without a picture or initials (a person by default). Use `currentColor`. */
  icon?: ReactNode;
  /** Who the avatar shows; the accessible name of the picture or initials. Without it the avatar is decorative. */
  name?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
  /** A 2 px ring in the page colour, as Avatar Group draws it, e.g. for overlapping avatars. */
  ring?: boolean;
  /** A badge on the top right corner, e.g. `<StatusBadge variant="checkmark" />`. */
  topBadge?: ReactNode;
  /** A badge on the bottom right corner: Figma "badge" (`<AvatarBadge />`) or e.g. `<StatusBadge variant="online" />`. */
  bottomBadge?: ReactNode;
}

// Sort UI 2.0's user icon (24 px grid, 1.25 px stroke at 16 px).
const person = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.875} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="8" r="5" />
    <path d="M20 21a8 8 0 0 0-16 0" />
  </svg>
);

export function Avatar({
  ref,
  src,
  initials,
  icon,
  name,
  size = 'default',
  shape = 'round',
  ring = false,
  topBadge,
  bottomBadge,
  className,
  ...rest
}: AvatarProps) {
  const [failed, setFailed] = useState<string>();
  const picture = src && failed !== src;
  const classes = ['ds-avatar', `ds-avatar--${size}`, `ds-avatar--${shape}`, !picture && initials && 'ds-avatar--fallback', ring && 'ds-avatar--ring', className]
    .filter(Boolean)
    .join(' ');
  const label = !picture && name ? { role: 'img', 'aria-label': name } : {};
  return (
    <span {...label} {...rest} ref={ref} className={classes}>
      <span className="ds-avatar__image">
        {picture ? (
          <img src={src} alt={name ?? ''} onError={() => setFailed(src)} />
        ) : initials ? (
          <span className="ds-avatar__initials" aria-hidden>
            {initials}
          </span>
        ) : (
          <span className="ds-avatar__icon" aria-hidden>
            {icon ?? person}
          </span>
        )}
      </span>
      {topBadge && <span className="ds-avatar__badge ds-avatar__badge--top">{topBadge}</span>}
      {bottomBadge && <span className="ds-avatar__badge ds-avatar__badge--bottom">{bottomBadge}</span>}
    </span>
  );
}
