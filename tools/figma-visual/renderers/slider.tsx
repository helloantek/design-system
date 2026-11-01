import { Slider } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps Sort UI 2.0 Slider properties to a slider at Figma's size. min is 0 and max the track length minus the 16 px
// thumb, so one step is one pixel and the values below put the thumbs exactly where Figma draws them.
const samples = {
  Horizontal: { length: 448, single: 208, range: [111, 319] },
  Vertical: { length: 160, single: 64, range: [40, 104] },
  VerticalDisabled: { length: 180, single: 74, range: [45, 119] },
} as const;

export const renderSlider: Renderer = (p) => {
  const vertical = p.Orientation === 'Vertical';
  const disabled = p.State === 'Disabled';
  const s = vertical ? (disabled ? samples.VerticalDisabled : samples.Vertical) : samples.Horizontal;
  const value = p.Range === 'True' ? ([...s.range] as [number, number]) : s.single;
  return (
    <div id="target" style={{ width: 'fit-content', padding: 12 }}>
      <Slider
        aria-label={p.Range === 'True' ? ['Minimum', 'Maximum'] : 'Sample'}
        defaultValue={value}
        min={0}
        max={s.length - 16}
        orientation={vertical ? 'vertical' : 'horizontal'}
        disabled={disabled}
        style={vertical ? { height: s.length } : { width: s.length }}
      />
    </div>
  );
};

// Sort UI 2.0 Slider Thumb: the thumb of a horizontal slider (Hover and Focus come from real input in check.mjs).
export const renderSliderThumb: Renderer = () => (
  <div id="target" style={{ width: 'fit-content', padding: 16 }}>
    <Slider aria-label="Sample" defaultValue={208} min={0} max={432} style={{ width: 448 }} />
  </div>
);
