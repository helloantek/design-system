import { RiAtLine, RiInformationFill } from '@remixicon/react';
import { Input, InputAction, type InputSize, type InputVariant } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps Figma Input properties to props, with the sample texts used in the Figma file.
// Active is produced by focusing the input in check.mjs. The field is 320 px wide in Figma.
const kinds: Record<string, { placeholder: string; filled: string; props: Record<string, unknown> }> = {
  Default: { placeholder: 'mail@domain.com', filled: 'hey@sortui.company', props: { leadIcon: <RiAtLine />, tailIcon: <RiInformationFill /> } },
  Shortcut: { placeholder: 'Search', filled: 'design system', props: { leadIcon: <RiAtLine />, shortcut: '/' } },
  'Add-on': { placeholder: 'domain', filled: 'apple', props: { tailIcon: <RiInformationFill />, addonBefore: 'https://', addonAfter: '.com' } },
  'Inline add-on': { placeholder: 'domain', filled: 'apple', props: { tailIcon: <RiInformationFill />, prefix: 'https://', suffix: '.com' } },
  'Tail button': { placeholder: 'mail@domain.com', filled: 'hey@sortui.company', props: { leadIcon: <RiAtLine />, tailIcon: <RiInformationFill />, action: <InputAction>Send</InputAction> } },
};

export const renderInput: Renderer = (p) => {
  const kind = kinds[p.Variant];
  if (!kind) throw new Error(`Input variant "${p.Variant}" is not implemented`);
  return (
    <div id="target" style={{ width: 320 }}>
      <Input
        {...kind.props}
        label="Label"
        caption={p.State === 'Failed' ? undefined : 'Caption text'}
        error={p.State === 'Failed' ? 'Error message' : undefined}
        variant={p.Style.toLowerCase() as InputVariant}
        size={p.Size as InputSize}
        placeholder={kind.placeholder}
        defaultValue={p.State === 'Filled' ? kind.filled : undefined}
        disabled={p.State === 'Disabled'}
      />
    </div>
  );
};
