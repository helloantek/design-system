import { FileIcon, type FileIconVariant } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Sort UI 2.0 File Icons (1676:149282) at 24 px.
export const renderFileIcon: Renderer = (p) => (
  <div id="target" style={{ display: 'inline-flex', padding: 4, background: 'var(--ds-background)' }}>
    <FileIcon variant={p.Variant.toLowerCase() as FileIconVariant} />
  </div>
);
