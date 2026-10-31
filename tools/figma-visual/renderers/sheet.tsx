import { Button } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps the Sort UI 2.0 Sheet to code with the Figma sample slots: the title, the description, the Close button (Ghost
// sm with a 16 px Lucide x), the body text and the footer (Default "Save changes" over Outline "Cancel"). The open
// sheet's markup is drawn in the page, not fixed to an edge, at the Figma frame's size: 384 × 640 for left and right,
// 800 px wide for top and bottom (and not capped by the harness's small viewport).
const x = (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.875} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const renderSheet: Renderer = (p) => {
  const side = String(p.Side);
  const vertical = side === 'left' || side === 'right';
  return (
    <div id="target" style={{ width: 'fit-content', padding: 8, background: 'var(--ds-background)' }}>
      <div className={`ds-sheet ds-sheet--${side}`} role="dialog" aria-labelledby="sheet-title" style={{ display: 'flex', position: 'static', maxWidth: 'none', maxHeight: 'none', animation: 'none', ...(vertical ? { height: 640 } : { width: 800 }) }}>
        <div className="ds-sheet__header">
          <div className="ds-sheet__heading">
            <h2 id="sheet-title" className="ds-sheet__title">Sheet title</h2>
            <p className="ds-sheet__description">Sheet description — what this panel is for.</p>
          </div>
          <Button variant="ghost" size="sm" icon={x} aria-label="Close" className="ds-sheet__close" />
        </div>
        <div className="ds-sheet__body">
          <p style={{ margin: 0 }}>Sheet content — a form, settings, a list; it scrolls when taller than the panel.</p>
        </div>
        <div className="ds-sheet__footer">
          <Button>Save changes</Button>
          <Button variant="outline">Cancel</Button>
        </div>
      </div>
    </div>
  );
};
