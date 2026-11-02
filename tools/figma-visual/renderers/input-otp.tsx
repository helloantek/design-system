import { InputOTP } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps Sort UI 2.0 Input OTP properties to props with Figma's sample values: the first two slots "4" at State=Default,
// none when Disabled, all six when Invalid. No focus, so no slot is active.
export const renderInputOTP: Renderer = (p) => {
  const groups = { 'Single group': 1, 'Two groups': 2, 'Three groups': 3 }[p.Layout] ?? 1;
  const value = p.State === 'Invalid' ? '429173' : p.State === 'Disabled' ? '' : '44';
  return (
    <div id="target" style={{ width: 'fit-content', padding: 8 }}>
      <InputOTP
        aria-label="Code"
        value={value}
        onValueChange={() => {}}
        layout={p.Layout === 'Cells' ? 'cells' : 'groups'}
        groups={groups}
        separator={p.Separator !== 'False'}
        invalid={p.State === 'Invalid'}
        disabled={p.State === 'Disabled'}
      />
    </div>
  );
};

// Sort UI 2.0 OTP Slot: the ds-css slot markup, alone (Single) or with hidden neighbours so it is the first, a middle
// or the last slot of a group. No group around it: Figma draws the slot without the group's stroke.
export const renderOTPSlot: Renderer = (p) => {
  const active = p.State === 'Active';
  const slot = (
    <div className={`ds-input-otp__slot ds-input-otp__slot--target${active ? ' ds-input-otp__slot--active' : ''}`}>
      {p.Value === 'Filled' ? '4' : active ? <span className="ds-input-otp__caret" style={{ animation: 'none' }} /> : null}
    </div>
  );
  const hidden = <div className="ds-input-otp__slot" style={{ visibility: 'hidden' }} />;
  return (
    <div id="target" className="ds-input-otp" style={{ padding: 8 }}>
      <div style={{ display: 'flex' }}>
        {(p.Position === 'Middle' || p.Position === 'Last') && hidden}
        {slot}
        {(p.Position === 'Middle' || p.Position === 'First') && hidden}
      </div>
    </div>
  );
};
