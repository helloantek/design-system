import { Combobox, type ComboboxSize } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps the Sort UI 2.0 Combobox to props with the Figma sample text ("Select…" or "Value") in a 280 px field.
// The entries measure the field (the manifest's target); Focus comes from focusing the input in check.mjs.
export const renderCombobox: Renderer = (p) => (
  <div id="target" style={{ width: 280 }}>
    <Combobox
      aria-label="Combobox"
      options={[{ value: 'value', label: 'Value' }]}
      size={p.Size as ComboboxSize}
      placeholder="Select…"
      defaultValue={p.Value === 'Filled' ? 'value' : undefined}
      error={p.State === 'Invalid' ? 'Error message' : undefined}
      disabled={p.State === 'Disabled'}
    />
  </div>
);
