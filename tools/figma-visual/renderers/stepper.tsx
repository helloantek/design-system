import { Stepper, StepperItem, type StepperItemState } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Stepper parts have no fill of their own, so Figma renders them on its canvas colour; the harness draws the same
// colour behind them (it is not a design token, only the reference's backdrop).
const CANVAS = '#f5f5f5';

// Maps Sort UI 2.0 "Stepper Item" (State × Orientation × Style, with "Show line" on) and "Stepper" (Steps ×
// Orientation × Style: step 1 complete, step 2 current, the rest upcoming) to code with their sample texts.
export const renderStepper: Renderer = (p) => {
  const vertical = p.Orientation === 'Vertical';
  const variant = p.Style === 'Bar' ? 'bar' : 'indicator';
  const orientation = vertical ? 'vertical' : 'horizontal';
  if (p.Steps) {
    const n = Number(p.Steps);
    return (
      <div id="target" style={{ width: vertical ? 280 : n * 150, background: CANVAS }}>
        <Stepper aria-label="Steps" orientation={orientation} variant={variant} current={1} steps={Array.from({ length: n }, (_, i) => ({ label: `Step ${i + 1}`, caption: 'Caption' }))} />
      </div>
    );
  }
  return (
    <div id="target" style={{ width: vertical ? 240 : 160, background: CANVAS }}>
      <Stepper aria-label="Step" orientation={orientation} variant={variant}>
        <StepperItem state={p.State.toLowerCase() as StepperItemState} label="Label" caption="Caption" number={1} showLine />
      </Stepper>
    </div>
  );
};
