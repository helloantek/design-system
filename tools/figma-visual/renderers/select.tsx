import { Select, type SelectItem, type SelectSize } from '@helloantek/ds-react';
import { useLayoutEffect, useRef } from 'react';
import type { Renderer } from './types';

// Maps Sort UI 2.0 Select, Select Item and Select Content properties to props, with the sample texts of the Figma file.
// Select entries measure the trigger (the manifest's target); Focus comes from focusing it in check.mjs.
const value = { value: 'value', label: 'Value' };

export const renderSelect: Renderer = (p) => {
  if (p.Kind !== 'Select') throw new Error(`Select kind "${p.Kind}" is not implemented`);
  return (
    <div id="target" style={{ width: 280 }}>
      <Select
        aria-label="Select"
        options={[value]}
        size={p.Size as SelectSize}
        placeholder="Select…"
        defaultValue={p.Value === 'Filled' ? 'value' : undefined}
        error={p.State === 'Invalid' ? 'Error message' : undefined}
        disabled={p.State === 'Disabled'}
      />
    </div>
  );
};

/** Highlights an option the way the mouse does (Figma State=Highlighted), so the render needs no pointer. */
function Highlight({ label, children }: { label?: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (!label) return;
    const option = [...(ref.current?.querySelectorAll('[role="option"]') ?? [])].find((o) => o.textContent === label);
    option?.dispatchEvent(new MouseEvent('mousemove', { bubbles: true }));
  }, [label]);
  return <div ref={ref}>{children}</div>;
}

// Select Item: one option in an open 280 px menu (the item is 272 px inside its 4 px padding).
// Select Content: Figma's sample menu.
export const renderSelectItem: Renderer = (p) => {
  if (p.Kind === 'Select Item') {
    return (
      <div id="target" style={{ width: 280 }}>
        <Highlight label={p.State === 'Highlighted' ? 'Item' : undefined}>
          <Select aria-label="Menu" options={[{ value: 'item', label: 'Item', disabled: p.State === 'Disabled' }]} defaultValue={p.Selected === 'True' ? 'item' : undefined} defaultOpen />
        </Highlight>
      </div>
    );
  }
  if (p.Kind === 'Select Content') {
    const options: SelectItem[] = [
      { label: 'Group', options: ['Stable', 'Beta', 'Canary'].map((label) => ({ value: label.toLowerCase(), label })) },
      { type: 'separator' },
      { value: 'nightly', label: 'Nightly (paused)', disabled: true },
    ];
    return (
      <div id="target" style={{ width: 280 }}>
        <Highlight label="Beta">
          <Select aria-label="Channel" options={options} defaultValue="stable" defaultOpen />
        </Highlight>
      </div>
    );
  }
  throw new Error(`Select item kind "${p.Kind}" is not implemented`);
};
