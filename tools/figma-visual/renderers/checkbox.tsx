import { Checkbox } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps the Sort UI 2.0 Checkbox and the horizontal Field around it to props, with the sample texts of the Figma file.
// State=Focus comes from the Tab that check.mjs presses. The checkbox's fill is translucent, so it sits on the page
// background, as Figma draws it.

export const renderCheckbox: Renderer = (p) => (
  <div id="target" style={{ display: 'flex', width: 'fit-content', padding: 8, background: 'var(--ds-background)' }}>
    <Checkbox aria-label="Checkbox" defaultChecked={p.Checked === 'True'} disabled={p.State === 'Disabled'} invalid={p.State === 'Invalid'} />
  </div>
);

export const renderCheckboxField: Renderer = (p) => {
  if (p.Orientation !== 'Horizontal') throw new Error(`Field orientation "${p.Orientation}" is not implemented here`);
  return (
    <div id="target" style={{ width: 320 }}>
      <Checkbox label="Label" caption="Description" control={p.Control === 'End' ? 'end' : 'start'} disabled={p.State === 'Disabled'} />
    </div>
  );
};
