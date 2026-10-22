import { RiUser3Fill } from '@remixicon/react';
import { Badge, type BadgeColor, type BadgeSize } from '@helloantek/ds-react';
import { badgeImage } from '../../../packages/react/src/Badge/Badge.fixtures';
import type { Renderer } from './types';

// Maps Figma Badge properties to props. Figma spells Style=Strong as "Srong"; the icon is Figma's user-3-fill.
export const renderBadge: Renderer = (p) => (
  <div style={{ display: 'flex' }}>
    <Badge
      id="target"
      size={p.Size as BadgeSize}
      color={p.Color.toLowerCase() as BadgeColor}
      variant={p.Style === 'Soft' ? 'soft' : 'strong'}
      shape={p.Shape === 'Pill' ? 'pill' : 'rounded'}
      border={p.Border === 'True'}
      icon={p.Variant === 'Icon' ? <RiUser3Fill /> : undefined}
      dot={p.Variant === 'Dot'}
      image={p.Variant === 'Image' ? <img src={badgeImage} alt="" /> : undefined}
    >
      Label
    </Badge>
  </div>
);
