import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type CSSProperties } from 'react';
import { Checkbox, CheckboxGroup } from '../Checkbox';
import { Progress, ProgressCircle, type ProgressVariant } from './Progress';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=245-2';

const meta = {
  title: 'Components/Progress',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Progress** and **Progress circle** ([open in Figma](${FIGMA_URL})). \`Progress\`: \`value\` of \`max\`, \`variant\` (\`default\` · \`dashed\` in steps), \`label\` and \`valueLabel\` (header), \`description\` (footer); without a value it is indeterminate. \`ProgressCircle\`: \`value\`, \`size\`, \`thickness\`, \`variant="destructive"\` and a \`label\` in the middle. Both are \`role="progressbar"\` with their value read as text.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const muted: CSSProperties = { fontFamily: 'var(--ds-font-sans)', fontSize: 14, lineHeight: '20px', fontWeight: 500, color: 'var(--ds-muted-foreground)', letterSpacing: '-0.005em' };

type PlaygroundArgs = { variant: ProgressVariant; value: number; steps: number; label: string; description: string };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { variant: 'default', value: 54, steps: 10, label: 'Overall', description: '2.5GB of 5GB' },
  argTypes: {
    variant: { name: 'Variant', control: 'inline-radio', options: ['default', 'dashed'] },
    value: { name: 'Value (%)', control: { type: 'range', min: 0, max: 100 } },
    steps: { name: 'Steps (Dashed)', control: { type: 'range', min: 2, max: 20 }, description: 'Dashed draws one segment per step (max)' },
    label: { name: 'Label' },
    description: { name: 'Description' },
  },
  // Dashed counts steps: the value becomes that share of the steps (54 % of 10 → 5 of 10), as one segment per step.
  render: ({ variant, value, steps, label, description }) => (
    <div style={{ width: 'min(448px, calc(100vw - 32px))' }}>
      {variant === 'dashed' ? (
        <Progress variant="dashed" value={Math.round((value / 100) * steps)} max={steps} label={label || undefined} aria-label={label ? undefined : 'Progress'} description={description || undefined} />
      ) : (
        <Progress value={value} label={label || undefined} aria-label={label ? undefined : 'Progress'} description={description || undefined} />
      )}
    </div>
  ),
};

/** Figma demo "Progress": a percentage, a step count, a custom value and dashed steps. */
export const Demo: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 24, width: 320 }}>
      <Progress label="Copying" value={54} description="2.5GB of 5GB" />
      <Progress label="Rendering" value={10} description="Frame 60/600" />
      <Progress label="Storage" value={70} valueLabel="Used: 70GB of 100GB" />
      <Progress variant="dashed" label="Steps" value={3} max={10} valueLabel="3/10 completed" />
    </div>
  ),
};

/** Figma demo "Controlled": the bar follows a checklist. */
export const Controlled: StoryObj = {
  render: function Render() {
    const tasks = ['Connect a custom domain', 'Turn on analytics', 'Schedule nightly backups', 'Invite two teammates', 'Add a billing address'];
    const [done, setDone] = useState<string[]>(tasks.slice(0, 2));
    return (
      <div style={{ display: 'grid', gap: 24, width: 340 }}>
        <Progress label="Launch checklist" value={done.length} max={tasks.length} valueLabel={`${done.length} of ${tasks.length} done`} />
        <CheckboxGroup label="Before you go live" caption="Five things worth doing on the day you ship.">
          {tasks.map((task) => (
            <Checkbox key={task} label={task} checked={done.includes(task)} onCheckedChange={(checked) => setDone((list) => (checked ? [...list, task] : list.filter((t) => t !== task)))} />
          ))}
        </CheckboxGroup>
      </div>
    );
  },
};

/** Figma demo "Circle": 96 px rings (7.5 % thick) with the value inside; a warning in destructive. */
export const Circle: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: 32 }}>
      {[
        { name: 'Tailwind CSS', value: 75 },
        { name: 'CSS', value: 96 },
        { name: 'JavaScript', value: 25, variant: 'destructive' as const },
      ].map(({ name, value, variant }) => (
        <div key={name} style={{ display: 'grid', justifyItems: 'center', gap: 16, width: 96 }}>
          <ProgressCircle value={value} size="96px" thickness={7.5} variant={variant} label={`${value}%`} aria-label={name} />
          <span style={muted}>{name}</span>
        </div>
      ))}
    </div>
  ),
};

/** Figma Progress circle Value=Empty and Filled (25 %), 72 px, and a small one. */
export const CircleValues: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <ProgressCircle value={0} aria-label="Not started" />
      <ProgressCircle value={25} aria-label="A quarter done" />
      <ProgressCircle value={60} size="24px" thickness={16} aria-label="Uploading" />
    </div>
  ),
};

/** Not in Figma: while the amount is unknown, a third of the bar slides across (with reduced motion, a still half-tint bar). */
export const Indeterminate: StoryObj = {
  render: () => (
    <div style={{ width: 320 }}>
      <Progress label="Preparing your export" description="This can take a minute." />
    </div>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'grid', gap: 24 }}>
          <Progress label="Copying" value={54} description="2.5GB of 5GB" />
          <Progress variant="dashed" label="Steps" value={3} max={10} valueLabel="3/10 completed" />
          <div style={{ display: 'flex', gap: 16 }}>
            <ProgressCircle value={75} label="75%" aria-label={`Score (${scheme})`} />
            <ProgressCircle value={25} label="25%" variant="destructive" aria-label={`Budget (${scheme})`} />
          </div>
        </div>
      ))}
    </div>
  ),
};
