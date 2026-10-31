import { Button } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps the Sort UI 2.0 Drawer to code with the Figma sample slots: the title, the description, the Lorem Ipsum body
// (centred like the heading when down or up) and the footer (Default "Continue" over Outline "Cancel"), with the swipe
// handle on top (down) or below (up). The open drawer's markup is drawn in the page, not fixed to an edge, at the
// Figma frame's size: 664 px wide for down and up, 384 × 624 for side.
const body = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.";

export const renderDrawer: Renderer = (p) => {
  const direction = String(p.Direction);
  const handle = p['Swipe handle'] !== false && direction !== 'side' && (
    <div className="ds-drawer__handle" aria-hidden>
      <span className="ds-drawer__bar" />
    </div>
  );
  return (
    <div id="target" style={{ width: 'fit-content', padding: 8, background: 'var(--ds-background)' }}>
      <div className={`ds-drawer ds-drawer--${direction}`} role="dialog" aria-labelledby="drawer-title" style={{ display: 'flex', position: 'static', maxWidth: 'none', maxHeight: 'none', animation: 'none', ...(direction === 'side' ? { height: 624 } : {}) }}>
        {direction === 'down' && handle}
        <div className="ds-drawer__header">
          <div className="ds-drawer__heading">
            <h2 id="drawer-title" className="ds-drawer__title">Drawer title</h2>
            <p className="ds-drawer__description">Drawer description — what this panel is for.</p>
          </div>
        </div>
        <div className="ds-drawer__body">
          <p style={{ margin: 0, textAlign: direction === 'side' ? undefined : 'center' }}>{body}</p>
        </div>
        <div className="ds-drawer__footer">
          <Button>Continue</Button>
          <Button variant="outline">Cancel</Button>
        </div>
        {direction === 'up' && handle}
      </div>
    </div>
  );
};
