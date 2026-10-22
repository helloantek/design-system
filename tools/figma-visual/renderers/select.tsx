import { RiInformationFill, RiUser3Line } from '@remixicon/react';
import { Select, type SelectSize, type SelectVariant } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps Figma Select Input properties to props, with the sample texts used in the Figma file.
// Active is produced by focusing the trigger in check.mjs (the manifest compares the trigger box only).
// Destructive is drawn by Figma as a disabled field. The field is 320 px wide in Figma.
const options = ['Alex Jhonson', 'Simon Alt', 'Emma Thompson', 'Michael Davis', 'Ryan Parker'].map((label) => ({ value: label, label }));

export const renderSelect: Renderer = (p) => {
  if (p.Variant !== 'Default' && p.Variant !== 'Multi-select') throw new Error(`Select variant "${p.Variant}" is not implemented`);
  const filled = p.State === 'Filled';
  const value = p.Variant === 'Multi-select' ? { multiple: true as const, defaultValue: filled ? ['Simon Alt', 'Michael Davis', 'Ryan Parker'] : [] } : { defaultValue: filled ? 'Simon Alt' : undefined };
  return (
    <div id="target" style={{ width: 320 }}>
      <Select
        {...value}
        options={options}
        label="Label"
        caption={p.State === 'Failed' ? undefined : 'Caption text'}
        error={p.State === 'Failed' ? 'Error message' : undefined}
        variant={p.Style.toLowerCase() as SelectVariant}
        size={p.Size as SelectSize}
        placeholder="Select a user"
        disabled={p.State === 'Destructive'}
        leadIcon={<RiUser3Line />}
        tailIcon={<RiInformationFill />}
      />
    </div>
  );
};
