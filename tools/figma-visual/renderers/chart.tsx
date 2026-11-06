import { ChartAxis, ChartGrid, ChartSwatch, ChartTooltip, type ChartSwatchVariant } from '@helloantek/ds-react';
import type { CSSProperties } from 'react';
import type { Renderer } from './types';

// Sort UI 2.0 Chart parts (page 3143:14350) with Figma's sample content, on the page background. Chart Tooltip
// (3143:14352): "Input", five rows and the description, 180 px wide. Chart Axis (3143:14440): Jan–Jun 416 px wide, or
// 320–0 176 px tall. Chart Reference Line (3143:14487): "Target" over the dashed line, 480 px. Chart Grid (3143:18349):
// 480 × 240 with 4 × 4 intervals. Chart Bar (3143:17607) and Swatch (3143:17629) in chart/7 and chart/2, as in Figma.
const page: CSSProperties = { background: 'var(--ds-background)' };

export const renderChart: Renderer = (p) => {
  if (p.Part === 'Tooltip') {
    return (
      <div id="target" style={{ display: 'inline-flex', ...page }}>
        <ChartTooltip
          label="Input"
          style={{ width: 180 }}
          items={[
            { label: 'Library', value: '962', color: 'var(--ds-chart-2)' },
            { label: 'Detached', value: '143', color: 'var(--ds-chart-5)' },
            { label: 'Pending', value: '58', color: 'var(--ds-chart-3)' },
            { label: 'Archived', value: '21', color: 'var(--ds-chart-4)' },
            { label: 'Draft', value: '7', color: 'var(--ds-chart-1)' },
          ]}
          description="Subscriptions and orders, January – December"
        />
      </div>
    );
  }
  if (p.Part === 'Axis') {
    return p.Axis === 'Y' ? (
      <div id="target" style={{ display: 'inline-flex', '--chart-height': '176px', ...page } as CSSProperties}>
        <ChartAxis axis="y" ticks={['320', '240', '160', '80', '0']} style={{ minWidth: 31, boxSizing: 'border-box' }} />
      </div>
    ) : (
      <div id="target" style={{ width: 416, ...page }}>
        <ChartAxis ticks={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']} />
      </div>
    );
  }
  if (p.Part === 'Reference') {
    return (
      <div id="target" className="ds-chart" style={{ position: 'relative', width: 480, height: 20, ...page }}>
        <div className="ds-chart__reference" style={{ top: 19 }}>
          <span className="ds-chart__reference-label">Target</span>
        </div>
      </div>
    );
  }
  if (p.Part === 'Grid') {
    return (
      <div id="target" style={{ position: 'relative', width: 480, height: 240, ...page }}>
        <ChartGrid lines={4} />
        <ChartGrid lines={4} vertical />
      </div>
    );
  }
  if (p.Part === 'Bar') {
    const horizontal = p.Orientation === 'Horizontal';
    return (
      <div id="target" className={horizontal ? 'ds-chart ds-chart--horizontal' : 'ds-chart'} style={{ display: 'flex', flexDirection: horizontal ? 'column' : 'row', alignItems: horizontal ? 'flex-start' : 'flex-end', width: horizontal ? 120 : 40, height: horizontal ? 40 : 120, ...page }}>
        <span className={p.Vaiant === 'Capped' ? 'ds-chart__bar ds-chart__bar--capped' : 'ds-chart__bar'} style={{ '--chart-value': 100, '--chart-color': 'var(--ds-chart-7)', flex: horizontal ? 1 : undefined } as CSSProperties} />
      </div>
    );
  }
  const variant = (p.Variant ?? 'Default').toLowerCase().replace(' ', '-') as ChartSwatchVariant;
  return (
    <div id="target" style={{ display: 'inline-flex', padding: 4, ...page }}>
      <ChartSwatch variant={variant} color="var(--ds-chart-2)" />
    </div>
  );
};
