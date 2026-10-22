import { RiMoonFill } from '@remixicon/react';
import { Avatar, StatusBadge, type AvatarSize, type StatusBadgeVariant } from '@helloantek/ds-react';
import { avatarImage } from '../../../packages/react/src/Avatar/Avatar.fixtures';
import type { Renderer } from './types';

// Maps Figma Avatar properties to props. Figma's sample initials are "S" up to size md and "SR" from lg.
export const renderAvatar: Renderer = (p) => (
  <Avatar
    id="target"
    size={p.Size as AvatarSize}
    shape={p.Shape === 'Rounded' ? 'rounded' : 'circular'}
    src={p.Variant === 'Userpic' ? avatarImage : undefined}
    initials={p.Variant === 'Initials' ? (['2xs', 'xs', 'sm', 'md'].includes(p.Size) ? 'S' : 'SR') : undefined}
  />
);

// Figma Status Badge (24 px, size xl). The Icon variant's default icon is Figma's moon-fill.
export const renderStatusBadge: Renderer = (p) => (
  <StatusBadge id="target" variant={p.Variant.toLowerCase() as StatusBadgeVariant} icon={p.Variant === 'Icon' ? <RiMoonFill /> : undefined} />
);
