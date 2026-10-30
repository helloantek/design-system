import { Separator } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps the Sort UI 2.0 Separator to code at the component set's sizes: 448 px across, or upright in a 40 px row.
export const renderSeparator: Renderer = (p) =>
  p.Orientation === 'Vertical' ? (
    <div id="target" style={{ display: 'flex', height: 40, background: 'var(--ds-background)' }}>
      <Separator orientation="vertical" />
    </div>
  ) : (
    <div id="target" style={{ width: 448, background: 'var(--ds-background)' }}>
      <Separator />
    </div>
  );
