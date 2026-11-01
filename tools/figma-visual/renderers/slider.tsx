import type React from 'react';
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

// Sort UI 2.0 Slider demos that use a look rather than a property (variant="block" and "scrubber"), rebuilt at Figma's
// size with values that put the thumbs where Figma draws them.
const hue = 'linear-gradient(to right, #ff0000 2.5%, #ffff00 18.3%, #00ff00 34.2%, #00ffff 50%, #0000ff 65.8%, #ff00ff 81.7%, #ff0000 97.5%)';

export const renderSliderVariants: Renderer = (p) => {
  const demo = p.Demo;
  let slider;
  if (demo === 'Autoscaling range') slider = <Slider variant="block" marks aria-label={['From', 'To']} defaultValue={[0, 2]} max={6} style={{ width: 408 }} />;
  else if (demo === 'Claude Effort Slider')
    slider = <Slider variant="block" marks={[0, { value: 1, emphasis: true }, 2, 3, 4, 5]} aria-label="Effort" defaultValue={2} max={5} style={{ width: 248 }} />;
  else if (demo === 'Color picker')
    slider = (
      <Slider
        variant="block"
        thumbDot="#00ff26"
        aria-label="Hue"
        defaultValue={139}
        max={388}
        style={{ width: 408, '--slider-thickness': '16px', '--slider-track': hue, '--slider-fill': 'transparent' } as React.CSSProperties}
      />
    );
  else slider = <Slider variant="scrubber" label="Brightness" valueText="50%" defaultValue={130} max={274} style={{ width: 288 }} />;
  return (
    <div id="target" style={{ width: 'fit-content', padding: 16 }}>
      {slider}
    </div>
  );
};
