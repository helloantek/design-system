import { ToggleGroup, ToggleGroupItem, type ToggleGroupSpacing } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps Sort UI 2.0 Toggle Group properties to props with Figma's three visible sample items labelled "Label", the
// second pressed. Vertical groups are 120 px wide, as in Figma.
export const renderToggleGroup: Renderer = (p) => {
  const vertical = p.Orientation === 'Vertical';
  return (
    <div id="target" style={{ width: 'fit-content', padding: 8, background: 'var(--ds-background)' }}>
      <ToggleGroup
        type="single"
        defaultValue="b"
        aria-label="Sample"
        variant={p.Variant === 'Outline' ? 'outline' : 'default'}
        spacing={Number(p.Spacing) as ToggleGroupSpacing}
        orientation={vertical ? 'vertical' : 'horizontal'}
        style={vertical ? { width: 120 } : undefined}
      >
        <ToggleGroupItem value="a">Label</ToggleGroupItem>
        <ToggleGroupItem value="b">Label</ToggleGroupItem>
        <ToggleGroupItem value="c">Label</ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};
