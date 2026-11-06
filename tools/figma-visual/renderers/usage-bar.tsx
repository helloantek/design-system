import { UsageBar, UsageBarLegend, UsageBarLegendItem, UsageBarSegment, UsageBarTick, type UsageBarVariant } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Sort UI 2.0 Usage Bar (1742:2) and its parts on the page background. Usage Bar Segment (1741:1121): an 80 × 28
// segment, State=Active drawn with `active` (Figma's hover look, not real input). Usage Bar Legend Item (1741:45140):
// "Label". Usage Bar Tick (1741:45150): "0", in a box as wide as Figma's (24, or 48 centred). Usage Bar: segments
// 9/4/3/3/1 (Default, Default, Muted, Primary, Dashed) over the ticks 0–200, 480 px wide.
const variant = (v: string | undefined) => (v ?? 'Default').toLowerCase() as UsageBarVariant;

export const renderUsageBar: Renderer = (p) => {
  if (p.Part === 'Segment') {
    return (
      <div id="target" style={{ display: 'flex', width: 80, height: 28, background: 'var(--ds-background)' }}>
        <UsageBarSegment value={1} variant={variant(p.Variant)} active={p.State === 'Active'} />
      </div>
    );
  }
  if (p.Part === 'Legend') {
    return (
      <div id="target" style={{ display: 'inline-flex', background: 'var(--ds-background)' }}>
        <UsageBarLegend>
          <UsageBarLegendItem variant={variant(p.Variant)}>Label</UsageBarLegendItem>
        </UsageBarLegend>
      </div>
    );
  }
  if (p.Part === 'Tick') {
    const align = p.Align === 'Start' ? 'start' : p.Align === 'End' ? 'end' : 'center';
    return (
      <div id="target" style={{ display: 'flex', justifyContent: align === 'start' ? 'flex-start' : align === 'end' ? 'flex-end' : 'center', width: align === 'center' ? 48 : 24, height: 24, background: 'var(--ds-background)' }}>
        <UsageBarTick align={align}>0</UsageBarTick>
      </div>
    );
  }
  return (
    <div id="target" style={{ width: 480, background: 'var(--ds-background)' }}>
      <UsageBar aria-label="Usage" axis={['0', '50', '100', '150', '200']}>
        <UsageBarSegment value={9} />
        <UsageBarSegment value={4} />
        <UsageBarSegment value={3} variant="muted" />
        <UsageBarSegment value={3} variant="primary" />
        <UsageBarSegment value={1} variant="dashed" />
      </UsageBar>
    </div>
  );
};
