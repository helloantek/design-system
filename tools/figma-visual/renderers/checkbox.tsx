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

// Choice Card frames of Figma's "Choice cards" demo (448 px wide, or 220 px in the two-column row).
export const renderCheckboxCard: Renderer = (p) => (
  <div id="target" style={{ width: p.Width === 'narrow' ? 220 : 448, background: 'var(--ds-background)' }}>
    {p.Width === 'narrow' ? (
      <Checkbox card label={p.Checked === 'True' ? 'Usage alerts' : 'Email receipts'} caption={p.Checked === 'True' ? 'A heads-up at 80% of your storage.' : 'A copy of every invoice in your inbox.'} defaultChecked={p.Checked === 'True'} />
    ) : (
      <Checkbox card label={p.Checked === 'True' ? 'Family sharing' : 'Extra storage'} caption={p.Checked === 'True' ? 'Share the plan with up to five people.' : 'Another 200 GB for photos and backups.'} defaultChecked={p.Checked === 'True'} />
    )}
  </div>
);
