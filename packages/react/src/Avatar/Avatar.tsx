import { useState, type HTMLAttributes, type ReactNode, type Ref } from 'react';

// Styles live in @helloantek/ds-css (classes ds-avatar*); this component only renders the markup.

/** Figma "Size" property. */
export type AvatarSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
/** Figma "Shape" property. */
export type AvatarShape = 'circular' | 'rounded';

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  ref?: Ref<HTMLSpanElement>;
  /** Figma Variant=Userpic: the picture's URL. Falls back to the initials (or Empty) when it fails to load. */
  src?: string;
  /** Figma Variant=Initials, e.g. "SR". Figma shows one letter up to size md and two from lg. */
  initials?: string;
  /** Who the avatar shows; the accessible name of the picture or initials. Without it the avatar is decorative. */
  name?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
  /** Figma "Ring": a 2 px ring in the page colour, e.g. for overlapping avatars. */
  ring?: boolean;
  /** Figma "Top badge", e.g. `<StatusBadge variant="checkmark" />`. */
  topBadge?: ReactNode;
  /** Figma "Bottom badge", e.g. `<StatusBadge variant="online" />`. */
  bottomBadge?: ReactNode;
}

// Figma's Variant=Empty picture on a 64 px grid: head and shoulders.
const placeholder = (
  <svg className="ds-avatar__placeholder" viewBox="0 0 64 64" aria-hidden>
    <ellipse cx="32" cy="24" rx="12" ry="14" />
    <ellipse cx="32" cy="72" rx="33" ry="32" />
  </svg>
);

export function Avatar({
  ref,
  src,
  initials,
  name,
  size = 'md',
  shape = 'circular',
  ring = false,
  topBadge,
  bottomBadge,
  className,
  ...rest
}: AvatarProps) {
  const [failed, setFailed] = useState<string>();
  const picture = src && failed !== src;
  const variant = picture ? 'userpic' : initials ? 'initials' : 'empty';
  const classes = ['ds-avatar', `ds-avatar--${size}`, `ds-avatar--${shape}`, variant === 'initials' && 'ds-avatar--initials', ring && 'ds-avatar--ring', className]
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
          placeholder
        )}
      </span>
      {topBadge && <span className="ds-avatar__badge ds-avatar__badge--top">{topBadge}</span>}
      {bottomBadge && <span className="ds-avatar__badge ds-avatar__badge--bottom">{bottomBadge}</span>}
    </span>
  );
}
