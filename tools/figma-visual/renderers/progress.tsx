import { Progress, ProgressCircle } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps the Sort UI 2.0 Progress and Progress circle to code with their sample values, on the page background.
export const renderProgress: Renderer = (p) => (
  <div id="target" style={{ width: 448, background: 'var(--ds-background)' }}>
    {p.Variant === 'Dashed' ? (
      <Progress variant="dashed" label="Overall" value={3} max={10} valueLabel="3/10 completed" description="2.5GB of 5GB" />
    ) : (
      <Progress label="Overall" value={54} description="2.5GB of 5GB" />
    )}
  </div>
);

export const renderProgressCircle: Renderer = (p) => (
  <div id="target" style={{ display: 'inline-flex', background: 'var(--ds-background)' }}>
    <ProgressCircle value={p.Value === 'Filled' ? 25 : 0} aria-label="Progress" />
  </div>
);
