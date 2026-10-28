import { Button, Tooltip, type TooltipSide } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps the Sort UI 2.0 Tooltip to props, with the Figma sample label: the tooltip is shown open next to an outline
// Button, with room around it; the entry measures the tooltip itself.
export const renderTooltip: Renderer = (p) => (
  <div id="target" style={{ display: 'grid', placeItems: 'center', width: 360, height: 160, background: 'var(--ds-background)' }}>
    <Tooltip content="Tooltip text" side={p.Side as TooltipSide} open>
      <Button variant="outline">Trigger</Button>
    </Tooltip>
  </div>
);
