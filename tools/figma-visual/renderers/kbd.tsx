import { Kbd, KbdGroup, type KbdSize, type KbdVariant } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps the Sort UI 2.0 Kbd to code with the default key (⌘) on the page background, as Figma renders it.
export const renderKbd: Renderer = (p) => (
  <div id="target" style={{ display: 'inline-flex', background: 'var(--ds-background)' }}>
    <Kbd variant={p.Variant.toLowerCase() as KbdVariant} size={p.Size as KbdSize}>
      ⌘
    </Kbd>
  </div>
);

// Kbd Group with its default keys, ⌘ and K.
export const renderKbdGroup: Renderer = () => (
  <div id="target" style={{ display: 'inline-flex', background: 'var(--ds-background)' }}>
    <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  </div>
);
