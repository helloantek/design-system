import { Badge, type BadgeColor, type BadgeSize } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps Sort UI 2.0 Badge Type=Tint (and Variant=Secondary, the code's neutral tint) to Badge variant="tint". The
// library draws them as pills; Size=default is the code's sm, lg is lg.
export const renderBadgeTint: Renderer = (p) => {
  const color = (p.Variant === 'Secondary' ? 'neutral' : p.Variant.toLowerCase()) as BadgeColor;
  const size: BadgeSize = p.Size === 'lg' ? 'lg' : 'sm';
  return (
    <div id="target" style={{ display: 'inline-flex', padding: 4, background: 'var(--ds-background)' }}>
      <Badge variant="tint" color={color} size={size} shape="pill">
        Badge
      </Badge>
    </div>
  );
};
