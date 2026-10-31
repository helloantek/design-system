import { Button } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps the Sort UI 2.0 Dialog to code with the Figma sample slots: the title, the description, the Close button
// (Ghost sm with a 16 px Lucide x), the body text and the footer (Outline Cancel, Default Continue). The open
// dialog's markup is drawn in the page (a modal <dialog> sits in the top layer), on the page background.
const x = (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.875} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const renderDialog: Renderer = (p) => (
  <div id="target" style={{ width: 'fit-content', padding: 8, background: 'var(--ds-background)' }}>
    <div className="ds-dialog" role="dialog" aria-labelledby="dialog-title" style={{ display: 'flex' }}>
      <div className="ds-dialog__header">
        <div className="ds-dialog__heading">
          <h2 id="dialog-title" className="ds-dialog__title">Dialog title</h2>
          <p className="ds-dialog__description">Dialog description — what this dialog does and what happens next.</p>
        </div>
        {p['Close button'] !== false && <Button variant="ghost" size="sm" icon={x} aria-label="Close" className="ds-dialog__close" />}
      </div>
      <div className="ds-dialog__body">
        <p style={{ margin: 0 }}>Dialog content — fields, a list, a preview; the popup grows with it and scrolls past the viewport.</p>
      </div>
      <div className="ds-dialog__footer">
        <Button variant="outline">Cancel</Button>
        <Button>Continue</Button>
      </div>
    </div>
  </div>
);
