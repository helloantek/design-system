import { Toast, type ToastType } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps the Sort UI 2.0 Sonner to code with the Figma sample text: a 356 px toast with the title and description and
// the type's icon (none for Default). The page background sits behind it.
export const renderSonner: Renderer = (p) => (
  <div id="target" style={{ width: 'fit-content', padding: 8, background: 'var(--ds-background)' }}>
    <Toast type={String(p.Type).toLowerCase() as ToastType} title="Draft saved to core/semantic 2.4" description="Consumers on 2.x pick it up on their next sync." />
  </div>
);
