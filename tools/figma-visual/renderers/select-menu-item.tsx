import { RiGlobalLine } from '@remixicon/react';
import { Select, type SelectItem } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Renders one Figma "Select Menu Items" variant inside an open Select; the manifest's `target` picks the element.
// Hover comes from the real mouse in check.mjs. The menu is 320 px wide like the Figma item.
export const renderSelectMenuItem: Renderer = (p) => {
  const option = { value: 'item', label: 'Select item', caption: 'Caption', icon: <RiGlobalLine />, badge: 'Label', disabled: p.State === 'Disabled' };
  const items: SelectItem[] =
    p.Type === 'Default' ? [option] : p.Type === 'Label' ? [{ label: 'Label', caption: 'Caption', options: [option] }] : p.Type === 'Divider' ? [option, { type: 'separator' }, { ...option, value: 'other' }] : [];
  if (!items.length) throw new Error(`Select Menu Items type "${p.Type}" is not implemented`);
  return (
    <div id="target" style={{ width: 320 }}>
      <Select aria-label="Sample" options={items} defaultValue={p.Active === 'True' ? 'item' : undefined} defaultOpen />
    </div>
  );
};
