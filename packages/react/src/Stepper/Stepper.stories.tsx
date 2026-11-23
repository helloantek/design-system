import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Button } from '../Button';
import { Stepper, StepperItem, type StepperItemState, type StepperOrientation, type StepperVariant } from './Stepper';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6714-1290';

const meta = {
  title: 'Components/Stepper',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Stepper**, **Stepper Item** and **Stepper Indicator** ([open in Figma](${FIGMA_URL})), ported from Sort UI 1.3. \`Stepper\`: \`orientation\` (horizontal · vertical), \`variant\` (Figma "Style": \`indicator\` · \`bar\`, horizontal only), and either \`steps\` with \`current\` or \`StepperItem\` children. \`StepperItem\`: \`state\` (upcoming · current · complete · error), \`label\`, \`caption\`, \`number\` (defaults to its place). It is an ordered list; the current step has \`aria-current="step"\`, and done or failed steps say so to screen readers (\`statusLabel\`).`,
      },
    },
  },
} satisfies Meta;

export default meta;

const STEPS = [
  { label: 'Account', caption: 'Email and password' },
  { label: 'Workspace', caption: 'Name and address' },
  { label: 'Team', caption: 'Invite people' },
  { label: 'Billing', caption: 'Plan and card' },
  { label: 'Done', caption: 'Start working' },
];

type PlaygroundArgs = { orientation: StepperOrientation; variant: StepperVariant; steps: number; current: number; error: boolean; captions: boolean };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { orientation: 'horizontal', variant: 'indicator', steps: 4, current: 1, error: false, captions: true },
  argTypes: {
    orientation: { name: 'Orientation', control: 'inline-radio', options: ['horizontal', 'vertical'] },
    variant: { name: 'Style', control: 'inline-radio', options: ['indicator', 'bar'], description: 'Bar exists only horizontally' },
    steps: { name: 'Steps', control: { type: 'range', min: 3, max: 5 } },
    current: { name: 'Current step (0-based)', control: { type: 'range', min: 0, max: 5 } },
    error: { name: 'Current step failed', control: 'boolean' },
    captions: { name: 'Show caption', control: 'boolean' },
  },
  render: ({ orientation, variant, steps, current, error, captions }) => (
    <div style={{ width: orientation === 'vertical' ? 280 : `min(${steps * 150}px, calc(100vw - 32px))` }}>
      <Stepper
        aria-label="Setup"
        orientation={variant === 'bar' ? 'horizontal' : orientation}
        variant={variant}
        current={current}
        steps={STEPS.slice(0, steps).map((s, i) => ({ label: s.label, caption: captions ? s.caption : undefined, error: error && i === current }))}
      />
    </div>
  ),
};

const STATES: StepperItemState[] = ['upcoming', 'current', 'complete', 'error'];

/** Figma Stepper Item: every State in each Orientation and Style (one step on its own, with its line). */
export const States: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 32 }}>
      {(
        [
          ['horizontal', 'indicator'],
          ['vertical', 'indicator'],
          ['horizontal', 'bar'],
        ] as const
      ).map(([orientation, variant]) => (
        <div key={orientation + variant} style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {STATES.map((state) => (
            <div key={state} style={{ width: orientation === 'vertical' ? 240 : 160 }}>
              <Stepper aria-label={`${state} ${orientation} ${variant}`} orientation={orientation} variant={variant}>
                <StepperItem state={state} label="Label" caption="Caption" showLine />
              </Stepper>
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
};

/** Figma Stepper: Horizontal and Vertical with 3, 4 and 5 steps, and Style=Bar. */
export const Steps: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 40 }}>
      {[3, 4, 5].map((n) => (
        <div key={n} style={{ width: n * 150 }}>
          <Stepper aria-label={`${n} steps`} current={1} steps={STEPS.slice(0, n)} />
        </div>
      ))}
      {[3, 4, 5].map((n) => (
        <div key={`bar${n}`} style={{ width: n * 150 }}>
          <Stepper aria-label={`${n} steps, bar`} variant="bar" current={1} steps={STEPS.slice(0, n)} />
        </div>
      ))}
      <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
        {[3, 4, 5].map((n) => (
          <div key={`v${n}`} style={{ width: 280 }}>
            <Stepper aria-label={`${n} steps, vertical`} orientation="vertical" current={1} steps={STEPS.slice(0, n)} />
          </div>
        ))}
      </div>
    </div>
  ),
};

/** A step that failed: the cross, the label in destructive, and a caption that says why. */
export const WithError: StoryObj = {
  render: () => (
    <div style={{ width: 600 }}>
      <Stepper aria-label="Import">
        <StepperItem state="complete" label="Upload" caption="contacts.csv" />
        <StepperItem state="error" label="Check columns" caption="2 columns have no name" />
        <StepperItem label="Match fields" caption="Map to contacts" />
        <StepperItem label="Import" caption="Add 1,204 contacts" />
      </Stepper>
    </div>
  ),
};

/** A form that moves through the steps with Back and Next. */
export const InAForm: StoryObj = {
  render: function Render() {
    const [current, setCurrent] = useState(0);
    const steps = STEPS.slice(0, 4);
    return (
      <div style={{ display: 'grid', gap: 24, width: 600 }}>
        <Stepper aria-label="Create a workspace" current={current} steps={steps} />
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
          <Button variant="outline" disabled={current === 0} onClick={() => setCurrent((c) => Math.max(0, c - 1))}>
            Back
          </Button>
          <Button onClick={() => setCurrent((c) => Math.min(steps.length, c + 1))} disabled={current === steps.length}>
            {current >= steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </div>
    );
  },
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'grid', gap: 32 }}>
          <Stepper aria-label={`Setup (${scheme})`}>
            <StepperItem state="complete" label="Account" caption="Email" />
            <StepperItem state="current" label="Workspace" caption="Name" />
            <StepperItem state="error" label="Team" caption="Invite" />
            <StepperItem label="Billing" caption="Card" />
          </Stepper>
          <Stepper aria-label={`Setup, bar (${scheme})`} variant="bar" current={1} steps={STEPS.slice(0, 3)} />
        </div>
      ))}
    </div>
  ),
};
