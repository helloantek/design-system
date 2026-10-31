import { Button, Popover, PopoverActions } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps the Sort UI 2.0 Popover to code with the Figma sample slots: Title, Description, the body text and the Actions
// (Outline sm "Copy variable", Ghost sm "View usages"). The panel is drawn open, on its own (outside .ds-popover, so it
// stays in the flow), on the page background.
export const renderPopover: Renderer = () => (
  <div id="target" style={{ width: 'fit-content', padding: 8, background: 'var(--ds-background)' }}>
    <div className="ds-popover__content" role="dialog" aria-labelledby="popover-title">
      <div className="ds-popover__header">
        <h2 id="popover-title" className="ds-popover__title">Title</h2>
        <p className="ds-popover__description">Description</p>
      </div>
      <div className="ds-popover__body">
        <p style={{ margin: 0 }}>Popover body — any content goes here: fields, lists, actions.</p>
        <PopoverActions>
          <Button variant="outline" size="sm">Copy variable</Button>
          <Button variant="ghost" size="sm">View usages</Button>
        </PopoverActions>
      </div>
    </div>
  </div>
);
