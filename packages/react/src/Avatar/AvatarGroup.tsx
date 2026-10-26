import { Children, cloneElement, isValidElement, type HTMLAttributes, type ReactElement, type Ref } from 'react';
import type { AvatarProps, AvatarSize } from './Avatar';

// Styles live in @helloantek/ds-css (classes ds-avatar-group*); this component only renders the markup.

export interface AvatarGroupProps extends HTMLAttributes<HTMLSpanElement> {
  ref?: Ref<HTMLSpanElement>;
  /** Figma "avatars": `<Avatar>` elements. Each gets the group's size and the ring. */
  children: ReactElement<AvatarProps> | ReactElement<AvatarProps>[];
  /** Figma "Size". */
  size?: AvatarSize;
  /** Shows at most this many avatars; the rest become the Figma "Count" ("+N"). */
  max?: number;
  /** Total number of people when there are more than the avatars given; the count shows the difference. */
  total?: number;
}

/** Figma "Avatar Group": overlapping avatars and an optional "+N" count. */
export function AvatarGroup({ ref, children, size = 'default', max, total, className, ...rest }: AvatarGroupProps) {
  const avatars = Children.toArray(children).filter(isValidElement) as ReactElement<AvatarProps>[];
  const shown = max === undefined ? avatars : avatars.slice(0, max);
  const hidden = (total ?? avatars.length) - shown.length;
  return (
    <span role="group" {...rest} ref={ref} className={['ds-avatar-group', className].filter(Boolean).join(' ')}>
      {shown.map((avatar) => cloneElement(avatar, { size, ring: true }))}
      {hidden > 0 && (
        <span className={`ds-avatar-group__count ds-avatar--${size}`} role="img" aria-label={`and ${hidden} more`}>
          <span aria-hidden>+{hidden}</span>
        </span>
      )}
    </span>
  );
}
