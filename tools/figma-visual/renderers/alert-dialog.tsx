import { Button } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps the Sort UI 2.0 Alert Dialog to code with the Figma sample slots: media (a 20 px Lucide trash-2 on the tile),
// title, description, an Outline Cancel and a Destructive "Delete account". The open dialog's markup is drawn in the
// page (a modal <dialog> sits in the top layer), on the page background.
const trash = (
  <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6" />
  </svg>
);

export const renderAlertDialog: Renderer = (p) => (
  <div id="target" style={{ width: 'fit-content', padding: 8, background: 'var(--ds-background)' }}>
    <div className={p.Size === 'sm' ? 'ds-alert-dialog ds-alert-dialog--sm' : 'ds-alert-dialog'}>
      <div className="ds-alert-dialog__header">
        <span className="ds-alert-dialog__media">{trash}</span>
        <div className="ds-alert-dialog__heading">
          <h2 className="ds-alert-dialog__title">Delete your account?</h2>
          <p className="ds-alert-dialog__description">This permanently deletes your profile, playlists and listening history. You can't undo this.</p>
        </div>
      </div>
      <div className="ds-alert-dialog__footer">
        <Button variant="outline">Cancel</Button>
        <Button variant="destructive">Delete account</Button>
      </div>
    </div>
  </div>
);
