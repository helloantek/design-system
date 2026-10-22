import { RiInformationFill, RiUser3Line } from '@remixicon/react';
import { Select, type SelectSize, type SelectVariant } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps Figma Select Input properties to props, with the sample texts used in the Figma file.
// Active is produced by focusing the trigger in check.mjs (the manifest compares the trigger box only).
// Destructive is drawn by Figma as a disabled field. The field is 320 px wide in Figma.
const options = ['Alex Jhonson', 'Simon Alt', 'Emma Thompson'].map((label) => ({ value: label, label }));

export const renderSelect: Renderer = (p) => {
  if (p.Variant !== 'Default') throw new Error(`Select variant "${p.Variant}" is not implemented`);
  return (
    <div id="target" style={{ width: 320 }}>
      <Select
        options={options}
        label="Label"
        caption={p.State === 'Failed' ? undefined : 'Caption text'}
        error={p.State === 'Failed' ? 'Error message' : undefined}
        variant={p.Style.toLowerCase() as SelectVariant}
        size={p.Size as SelectSize}
        placeholder="Select a user"
        defaultValue={p.State === 'Filled' ? 'Simon Alt' : undefined}
        disabled={p.State === 'Destructive'}
        leadIcon={<RiUser3Line />}
        tailIcon={<RiInformationFill />}
      />
    </div>
  );
};
