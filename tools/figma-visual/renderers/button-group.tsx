import { Button, ButtonGroup, ButtonGroupText } from '@helloantek/ds-react';
import type { CSSProperties } from 'react';
import type { Renderer } from './types';

// Maps the Sort UI 2.0 Button Group page to code with the sample texts of the Figma file: four Outline buttons in a
// group (a 120 px column when vertical), Button Group Text alone, and each Start / Middle / End item in a group of three.

const buttons = (count: number) => Array.from({ length: count }, (_, i) => <Button key={i} variant="outline">Button</Button>);

export const renderButtonGroup: Renderer = (p) => {
  if (p.Kind === 'Text') {
    return (
      <div id="target" style={{ display: 'flex', width: 'fit-content', padding: 8, background: 'var(--ds-background)' }}>
        <ButtonGroupText>Text</ButtonGroupText>
      </div>
    );
  }
  const vertical = p.Orientation === 'Vertical';
  return (
    <div id="target" style={{ display: 'flex', width: 'fit-content', padding: 8, background: 'var(--ds-background)' }}>
      <ButtonGroup orientation={vertical ? 'vertical' : 'horizontal'} aria-label="Group" style={vertical ? { width: 120 } : undefined}>
        {buttons(4)}
      </ButtonGroup>
    </div>
  );
};

export const renderButtonGroupItem: Renderer = (p) => {
  const vertical = p.Orientation === 'Vertical';
  const index = { Start: 1, Middle: 2, End: 3 }[p.Variant];
  if (!index) throw new Error(`Button Group item "${p.Variant}" is not implemented`);
  // The measured item is id="target"; its neighbours give it the group's corners and shared strokes.
  const style: CSSProperties = { display: 'flex', width: 'fit-content', padding: 8, background: 'var(--ds-background)' };
  return (
    <div style={style}>
      <ButtonGroup orientation={vertical ? 'vertical' : 'horizontal'} aria-label="Group" style={vertical ? { width: 62 } : undefined}>
        {[1, 2, 3].map((i) =>
          i === index ? (
            <Button key={i} id="target" variant="outline">
              Button
            </Button>
          ) : (
            <Button key={i} variant="outline">
              Button
            </Button>
          ),
        )}
      </ButtonGroup>
    </div>
  );
};
