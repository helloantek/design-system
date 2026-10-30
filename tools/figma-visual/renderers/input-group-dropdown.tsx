import { InputDropdown } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps the Sort UI 2.0 Input Group Dropdown to code with the Figma sample: a 14 px Lucide square-dashed (1 px stroke),
// "Dropdown" and the chevron, on the page background. Hover and Focus come from check.mjs (hover, Tab).
const squareDashed = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.71} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 3a2 2 0 0 0-2 2M19 3a2 2 0 0 1 2 2M21 19a2 2 0 0 1-2 2M5 21a2 2 0 0 1-2-2M9 3h1M9 21h1M14 3h1M14 21h1M3 9v1M21 9v1M3 14v1M21 14v1" />
  </svg>
);

export const renderInputGroupDropdown: Renderer = (p) => (
  <div id="target" style={{ width: 'fit-content', padding: 8, background: 'var(--ds-background)', fontFamily: 'var(--ds-font-sans)', fontSize: 'var(--ds-text-xs)', lineHeight: 'var(--ds-text-xs--line-height)', letterSpacing: '-0.005em' }}>
    <InputDropdown icon={squareDashed} disabled={p.State === 'Disabled'} style={{ margin: 0 }}>
      Dropdown
    </InputDropdown>
  </div>
);
