import { Radio, RadioGroup } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps the Sort UI 2.0 Radio and the Choice Card around it to props, with the sample texts of the Figma file.
// State=Focus comes from the Tab that check.mjs presses. The radio's fill is translucent, so it sits on the page
// background, as Figma draws it.

export const renderRadio: Renderer = (p) => (
  <div id="target" style={{ display: 'flex', width: 'fit-content', padding: 8, background: 'var(--ds-background)' }}>
    <Radio name="radio" value="a" aria-label="Radio" defaultChecked={p.Checked === 'True'} disabled={p.State === 'Disabled'} invalid={p.State === 'Invalid'} />
  </div>
);

export const renderRadioCard: Renderer = (p) => (
  <div id="target" style={{ width: 320, background: 'var(--ds-background)' }}>
    <RadioGroup label="Choice" defaultValue={p.Checked === 'True' ? 'a' : null}>
      <Radio card control="end" value="a" label="Title" caption="Description" />
    </RadioGroup>
  </div>
);
