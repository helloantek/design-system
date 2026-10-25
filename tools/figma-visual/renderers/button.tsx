import { Button, type ButtonSize, type ButtonVariant } from '@helloantek/ds-react';
import { SquareDashed } from '../../../packages/react/src/Button/Button.fixtures';
import type { Renderer } from './types';

// Maps Sort UI 2.0 Button properties to props; Figma's defaults show both icons and the badge "2".
// Hover and Focus come from real input in check.mjs.
export const renderButton: Renderer = (p) => {
  const common = { id: 'target', variant: p.Variant.toLowerCase() as ButtonVariant, size: p.Size as ButtonSize, disabled: p.State === 'Disabled' };
  return p['Icon only'] === 'True' ? (
    <Button {...common} icon={<SquareDashed />} aria-label="Button" />
  ) : (
    <Button {...common} leadingIcon={<SquareDashed />} trailingIcon={<SquareDashed />} badge="2">
      Button
    </Button>
  );
};
