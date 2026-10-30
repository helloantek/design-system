import { Marker, type MarkerVariant } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps the Sort UI 2.0 Marker to code with the Figma sample text and its arrow-right-left icon, 448 px wide, on the page
// background.
const arrows = (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.875} strokeLinecap="round" strokeLinejoin="round">
    <path d="m16 3 4 4-4 4M20 7H4M8 21l-4-4 4-4M4 17h16" />
  </svg>
);

export const renderMarker: Renderer = (p) => (
  <div id="target" style={{ width: 'fit-content', padding: 8, background: 'var(--ds-background)' }}>
    <Marker variant={String(p.Variant).toLowerCase() as MarkerVariant} icon={arrows} style={{ width: 448 }}>
      Sofia Bianchi moved Combobox to Ready for review
    </Marker>
  </div>
);
