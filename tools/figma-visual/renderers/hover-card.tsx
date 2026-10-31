import { Avatar, Separator } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps the Sort UI 2.0 Hover Card to code with the Figma sample content: a person (an lg Avatar with the initials PR,
// the name 14/20 medium and the role muted, 12 px apart), the muted body, a separator and a 12/16 muted footer. The
// open card is drawn on its own (outside .ds-hover-card, so it stays in the flow), on the page background.
export const renderHoverCard: Renderer = () => (
  <div id="target" style={{ width: 'fit-content', padding: 8, background: 'var(--ds-background)' }}>
    <div className="ds-hover-card__content">
      <div className="hc-person" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Avatar size="lg" initials="PR" />
        <div className="hc-names" style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
          <span className="hc-name" style={{ fontWeight: 500 }}>Priya Raman</span>
          <span className="hc-role" style={{ color: 'var(--ds-muted-foreground)' }}>Staff designer · Foundations</span>
        </div>
      </div>
      <p className="hc-body" style={{ margin: 0, color: 'var(--ds-muted-foreground)' }}>Owns the token pipeline: spacing, radius and type scales across web and iOS.</p>
      <Separator />
      <p className="hc-footer" style={{ margin: 0, color: 'var(--ds-muted-foreground)', fontSize: 12, lineHeight: '16px' }}>9 components · 34 reviews this quarter · replies within a day</p>
    </div>
  </div>
);
