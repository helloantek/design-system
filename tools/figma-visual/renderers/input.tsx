import { Input, type InputSize } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps Sort UI 2.0 Input, Input Group and Field properties to props, with the sample texts of the Figma file.
// Figma Size is size. Focus is produced by focusing the input in check.mjs.
// Input and Input Group entries measure .ds-input (the manifest's target), so the error text under it is not compared.
const widths: Record<string, number> = { Input: 240, 'Input Group': 280, Field: 320 };

export const renderInput: Renderer = (p) => {
  const width = widths[p.Kind];
  if (!width) throw new Error(`Input kind "${p.Kind}" is not implemented`);
  const disabled = p.State === 'Disabled';
  if (p.Kind === 'Field') {
    return (
      <div id="target" style={{ width }}>
        <Input label="Label" caption="Description" size="default" placeholder="Placeholder" disabled={disabled} />
      </div>
    );
  }
  return (
    <div id="target" style={{ width }}>
      <Input
        size={p.Size as InputSize}
        placeholder="Placeholder"
        defaultValue={p.Value === 'Filled' ? 'Value' : undefined}
        error={p.State === 'Invalid' ? 'Error message' : undefined}
        disabled={disabled}
        prefix={p.Kind === 'Input Group' ? 'https://' : undefined}
        suffix={p.Kind === 'Input Group' ? '.dev' : undefined}
      />
    </div>
  );
};
