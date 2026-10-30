import { Spinner, type SpinnerSize, type SpinnerVariant } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps the Sort UI 2.0 Spinner to code on the page background, in the foreground colour (Figma binds the arc to it).
// Still, like Figma: a turning spinner's bounding box grows with the angle, which the size check would measure.
export const renderSpinner: Renderer = (p) => (
  <div id="target" style={{ display: 'inline-flex', color: 'var(--ds-foreground)', background: 'var(--ds-background)' }}>
    <Spinner variant={p.Variant.toLowerCase() as SpinnerVariant} size={p.Size as SpinnerSize} style={{ animation: 'none' }} />
  </div>
);
