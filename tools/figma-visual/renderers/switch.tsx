import { Switch, type SwitchSize } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps the Sort UI 2.0 Switch to props. State=Focus comes from the Tab that check.mjs presses. The off track is
// translucent, so it sits on the page background, as Figma draws it.
export const renderSwitch: Renderer = (p) => (
  <div id="target" style={{ display: 'flex', width: 'fit-content', padding: 8, background: 'var(--ds-background)' }}>
    <Switch aria-label="Switch" size={p.Size as SwitchSize} defaultChecked={p.Checked === 'True'} disabled={p.State === 'Disabled'} invalid={p.State === 'Invalid'} />
  </div>
);
