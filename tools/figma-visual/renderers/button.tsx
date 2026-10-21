import { RiCheckboxCircleFill } from '@remixicon/react';
import { Button, type ButtonShape, type ButtonSize, type ButtonVariant } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps Figma Button properties to props. Hover/Press/Focus are produced by real input in check.mjs.
export const renderButton: Renderer = (props) => {
  const common = {
    id: 'target',
    variant: props.Style.toLowerCase().replace(' ', '-') as ButtonVariant,
    size: props.Size as ButtonSize,
    shape: props.Shape.toLowerCase() as ButtonShape,
    loading: props.State === 'Loading',
    disabled: props.State === 'Disabled',
  };
  return props.Variant === 'Icon only' ? (
    <Button {...common} icon={<RiCheckboxCircleFill />} aria-label="Confirm" />
  ) : (
    <Button {...common} leadIcon={<RiCheckboxCircleFill />} tailIcon={<RiCheckboxCircleFill />} badge="/">
      Button
    </Button>
  );
};
