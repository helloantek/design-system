import type { HTMLAttributes, ReactNode, Ref } from 'react';

// Styles live in @helloantek/ds-css (classes ds-status-badge*); this component only renders the markup.

/** Figma "Variant" property of the Status Badge component. */
export type StatusBadgeVariant = 'checkmark' | 'online' | 'offline' | 'notification' | 'icon' | 'logo';

export interface StatusBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  ref?: Ref<HTMLSpanElement>;
  variant?: StatusBadgeVariant;
  /** Variant=Icon: Figma "❖ Icon". Icons should use `currentColor`. */
  icon?: ReactNode;
  /** Variant=Logo: a picture, e.g. an `<img>` (give it `alt=""`; the badge carries the label). */
  image?: ReactNode;
  /** What the badge means, read by screen readers (defaults per variant; `""` makes it decorative). */
  label?: string;
}

const defaultLabels: Record<StatusBadgeVariant, string> = {
  checkmark: 'Verified',
  online: 'Online',
  offline: 'Offline',
  notification: 'New notification',
  icon: '',
  logo: '',
};

// Figma's shapes on its 24 px grid.
const checkmarkRing =
  'M0.243 13.369L0.686 12L0.243 10.632C-0.511 8.302 0.538 5.769 2.719 4.654L4 4L4.654 2.719C5.769 0.538 8.302 -0.511 10.632 0.243L12 0.686L13.369 0.243C15.699 -0.511 18.232 0.538 19.346 2.719L20.001 4L21.282 4.654C23.463 5.769 24.512 8.302 23.758 10.632L23.314 12L23.757 13.369C24.512 15.699 23.463 18.232 21.282 19.346L20.001 20.001L19.346 21.282C18.232 23.462 15.699 24.512 13.369 23.758L12 23.314L10.632 23.757C8.302 24.512 5.769 23.463 4.654 21.282L4 20.001L2.719 19.346C0.538 18.232 -0.511 15.699 0.243 13.369Z';
const checkmark =
  'M10.016 2.146C8.62 1.694 7.103 2.323 6.435 3.629L5.633 5.199C5.538 5.386 5.386 5.538 5.199 5.633L3.629 6.435C2.323 7.103 1.694 8.62 2.146 10.016L2.689 11.694C2.754 11.893 2.754 12.108 2.689 12.307L2.146 13.985C1.694 15.381 2.323 16.898 3.629 17.565L5.199 18.367C5.386 18.463 5.538 18.615 5.633 18.801L6.435 20.372C7.103 21.678 8.62 22.306 10.016 21.855L11.694 21.312C11.893 21.247 12.108 21.247 12.307 21.312L13.985 21.855C15.381 22.306 16.898 21.678 17.565 20.372L18.367 18.801C18.463 18.615 18.615 18.463 18.801 18.367L20.372 17.565C21.678 16.898 22.307 15.381 21.855 13.985L21.312 12.307C21.247 12.108 21.247 11.893 21.312 11.694L21.855 10.016C22.307 8.62 21.678 7.103 20.372 6.435L18.801 5.633C18.615 5.538 18.463 5.386 18.367 5.199L17.565 3.629C16.898 2.323 15.381 1.694 13.985 2.146L12.307 2.689C12.108 2.754 11.893 2.754 11.694 2.689L10.016 2.146ZM6.782 11.759L8.19 10.35L11.007 13.167L16.64 7.534L18.048 8.942L11.007 15.983L6.782 11.759Z';

export function StatusBadge({ ref, variant = 'checkmark', icon, image, label, className, ...rest }: StatusBadgeProps) {
  const name = label ?? defaultLabels[variant];
  const content = variant === 'icon' ? icon : variant === 'logo' ? image : null;
  return (
    <span
      {...rest}
      ref={ref}
      className={['ds-status-badge', `ds-status-badge--${variant}`, className].filter(Boolean).join(' ')}
      {...(name ? { role: 'img', 'aria-label': name } : { 'aria-hidden': true })}
    >
      <svg viewBox="0 0 24 24" aria-hidden>
        {variant === 'checkmark' ? (
          <>
            <path className="ds-status-badge__ring" fillRule="evenodd" d={checkmarkRing} />
            <path className="ds-status-badge__mark" d={checkmark} />
          </>
        ) : content ? (
          <circle className="ds-status-badge__ring" cx="12" cy="12" r="12" />
        ) : (
          <>
            <circle className="ds-status-badge__ring" cx="12" cy="12" r="9" />
            <circle className="ds-status-badge__mark" cx="12" cy="12" r="7" />
          </>
        )}
      </svg>
      {content && <span className="ds-status-badge__content">{content}</span>}
    </span>
  );
}
