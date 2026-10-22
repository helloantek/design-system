import { RiGlobalLine } from '@remixicon/react';
import { Select, type SelectIndicator, type SelectItem, type SelectOption } from '@helloantek/ds-react';
import { FlagUnitedStates } from '../../../packages/react/src/Select/Select.fixtures';
import type { Renderer } from './types';

// Renders one Figma "Select Menu Items" variant inside an open Select; the manifest's `target` picks the element.
// Hover comes from the real mouse in check.mjs. The menu is 320 px wide like the Figma item. Texts as in Figma.
const indicators: Record<string, SelectIndicator> = { Default: 'check', Checkbox: 'checkbox', 'Radio Button': 'radio' };

export const renderSelectMenuItem: Renderer = (p) => {
  const base: SelectOption = { value: 'item', label: 'Select item', badge: 'Label', disabled: p.State === 'Disabled' };
  const option: SelectOption | undefined =
    p.Type === 'Default' || p.Type === 'Label' || p.Type === 'Divider'
      ? { ...base, caption: 'Caption', icon: <RiGlobalLine /> }
      : p.Type === 'Country Flag'
        ? { ...base, label: 'United States', caption: 'Caption', media: <FlagUnitedStates /> }
        : p.Type === 'Default Large'
          ? { ...base, description: 'Caption', icon: <RiGlobalLine /> }
          : p.Type === 'Caption'
            ? base
            : undefined;
  if (!option) throw new Error(`Select Menu Items type "${p.Type}" is not implemented`);
  const items: SelectItem[] =
    p.Type === 'Label'
      ? [{ label: 'Label', caption: 'Caption', options: [option] }]
      : p.Type === 'Divider'
        ? [option, { type: 'separator' }, { ...option, value: 'other' }]
        : p.Type === 'Caption'
          ? [{ type: 'caption', label: 'The quick brown fox jumps over a lazy dog.' }, option]
          : [option];
  return (
    <div id="target" style={{ width: 320 }}>
      <Select aria-label="Sample" options={items} indicator={indicators[p['Select type']]} defaultValue={p.Active === 'True' ? 'item' : undefined} defaultOpen />
    </div>
  );
};
