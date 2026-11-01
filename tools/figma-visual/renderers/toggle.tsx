import { Toggle, type ToggleSize, type ToggleVariant } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps Sort UI 2.0 Toggle properties to props with the Figma sample label "Toggle" and no icons (both off in the set).
// Hover and Focus come from real input in check.mjs.
export const renderToggle: Renderer = (p) => (
  <Toggle id="target" variant={String(p.Variant).toLowerCase() as ToggleVariant} size={p.Size as ToggleSize} pressed={p.Pressed === 'True'} disabled={p.State === 'Disabled'}>
    Toggle
  </Toggle>
);
