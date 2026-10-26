import { RiMoonFill } from '@remixicon/react';
import { Avatar, AvatarGroup, StatusBadge, type AvatarShape, type AvatarSize, type StatusBadgeVariant } from '@helloantek/ds-react';
import { avatarImage } from '../../../packages/react/src/Avatar/Avatar.fixtures';
import type { Renderer } from './types';

// Sort UI 2.0's plus icon (24 px grid). Figma draws it 12 px in xs, 16 px in sm and default, 24 px from lg, always with
// a 1.25 px stroke, so the viewBox stroke follows the icon size.
const iconSize: Record<string, number> = { xs: 12, sm: 16, default: 16, lg: 24, xl: 24 };
const plus = (size: string) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={(1.25 * 24) / iconSize[size]} strokeLinecap="round" aria-hidden>
    <path d="M5 12h14M12 5v14" />
  </svg>
);

// Maps Sort UI 2.0 Avatar properties to props, with Figma's sample initials "SH".
export const renderAvatar: Renderer = (p) => (
  <Avatar
    id="target"
    size={p.size as AvatarSize}
    shape={p.shape as AvatarShape}
    src={p.variant === 'image' ? avatarImage : undefined}
    initials={p.variant === 'fallback' ? 'SH' : undefined}
    icon={p.variant === 'icon' ? plus(p.size) : undefined}
  />
);

// Avatar Group: three avatars and "+3", as in Figma.
export const renderAvatarGroup: Renderer = (p) => (
  <AvatarGroup id="target" size={p.Size as AvatarSize} max={3}>
    {['a', 'b', 'c', 'd', 'e', 'f'].map((key) => (
      <Avatar key={key} src={avatarImage} />
    ))}
  </AvatarGroup>
);

// Sort UI 1.3 Status Badge (24 px, size xl). The Icon variant's default icon is Figma's moon-fill.
export const renderStatusBadge: Renderer = (p) => (
  <StatusBadge id="target" variant={p.Variant.toLowerCase() as StatusBadgeVariant} icon={p.Variant === 'Icon' ? <RiMoonFill /> : undefined} />
);
