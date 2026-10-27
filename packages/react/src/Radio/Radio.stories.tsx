import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type CSSProperties } from 'react';
import { Radio, RadioGroup } from './Radio';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=121-3';

const meta = {
  title: 'Components/Radio',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Radio** and **Radio Group** ([open in Figma](${FIGMA_URL})) on native \`<input type="radio">\`s, with **Field** Orientation=Horizontal for \`label\` and \`caption\` (\`control\`: \`start\` · \`end\`) and **Choice Card** for \`card\`. \`RadioGroup\` is a fieldset that shares a name, the value and Invalid with its radios; the arrow keys move between them. Figma Checked = the group's \`value\`; State: Focus = keyboard focus, Disabled = \`disabled\`, Invalid = the group's \`invalid\` or \`error\`.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const qualities = ['Automatic', 'Low · 96 kbps', 'Normal · 160 kbps', 'High · 320 kbps'];

type PlaygroundArgs = { state: 'Default' | 'Invalid' | 'Disabled'; control: 'start' | 'end'; card: boolean; error: string };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { state: 'Default', control: 'start', card: false, error: 'Pick one to continue.' },
  argTypes: {
    state: { name: 'State', control: 'inline-radio', options: ['Default', 'Invalid', 'Disabled'], description: 'Focus: press Tab' },
    control: { name: 'Control', control: 'inline-radio', options: ['start', 'end'] },
    card: { name: 'Choice Card' },
    error: { name: 'Error', if: { arg: 'state', eq: 'Invalid' } },
  },
  render: function Render({ state, control, card, error }) {
    const [value, setValue] = useState<string | null>('Normal · 160 kbps');
    return (
      <div style={{ width: 360 }}>
        <RadioGroup label="Streaming quality" caption="Higher quality uses more data." value={value} onValueChange={setValue} error={state === 'Invalid' ? error : undefined} disabled={state === 'Disabled'}>
          {qualities.map((q) => (
            <Radio key={q} value={q} label={q} control={control} card={card} />
          ))}
        </RadioGroup>
      </div>
    );
  },
};

const caption: CSSProperties = { fontFamily: 'var(--ds-font-sans)', fontSize: 12, color: 'var(--ds-muted-foreground)' };
const states = ['Default', 'Focus', 'Disabled', 'Invalid'] as const;

/** Figma "Radio": Checked × State. State=Focus is keyboard focus: press Tab to see it. */
export const Variants: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '120px repeat(4, 64px)', gap: 16, alignItems: 'center', justifyItems: 'center' }}>
      <span />
      {states.map((s) => (
        <span key={s} style={caption}>
          {s}
        </span>
      ))}
      {(['False', 'True'] as const).map((checked) => (
        <div key={checked} style={{ display: 'contents' }}>
          <span style={{ ...caption, justifySelf: 'start' }}>Checked={checked}</span>
          {states.map((s) => (
            <Radio key={s} name={`${checked}-${s}`} value="x" aria-label={`Checked=${checked}, ${s}`} defaultChecked={checked === 'True'} disabled={s === 'Disabled'} invalid={s === 'Invalid'} />
          ))}
        </div>
      ))}
    </div>
  ),
};

/** Figma "Field" Orientation=Horizontal with a Radio: Control (start, end) × State. */
export const Field: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 320px)', gap: 32 }}>
      {(['start', 'end'] as const).map((control) => (
        <div key={control} style={{ display: 'grid', gap: 24, alignContent: 'start' }}>
          <span style={caption}>Control={control === 'start' ? 'Start' : 'End'}</span>
          <Radio name={`field-${control}-1`} value="a" control={control} label="Label" caption="Description" />
          <Radio name={`field-${control}-2`} value="a" control={control} label="Label" caption="Description" invalid />
          <Radio name={`field-${control}-3`} value="a" control={control} label="Label" caption="Description" disabled />
        </div>
      ))}
    </div>
  ),
};

const plans = [
  { value: 'monthly', label: 'Monthly', caption: '$12 a month, cancel any time.' },
  { value: 'yearly', label: 'Yearly', caption: '$120 a year — two months free.' },
  { value: 'lifetime', label: 'Lifetime', caption: '$299 once, updates included.' },
];

/** Figma demo "Radio Group": Choice Cards (the radio at the end), 8 px apart. */
export const ChoiceCards: StoryObj = {
  render: () => (
    <div style={{ width: 408 }}>
      <RadioGroup label="Billing period" caption="Change how often the plan renews." defaultValue="yearly">
        {plans.map((p) => (
          <Radio key={p.value} card control="end" {...p} />
        ))}
      </RadioGroup>
    </div>
  ),
};

/** Figma demo "List", with a disabled option. */
export const List: StoryObj = {
  render: () => (
    <div style={{ width: 440 }}>
      <RadioGroup label="Streaming quality" caption="Higher quality uses more data." defaultValue="Normal · 160 kbps">
        {qualities.map((q) => (
          <Radio key={q} value={q} label={q} />
        ))}
        <Radio value="Lossless" label="Lossless" disabled />
      </RadioGroup>
    </div>
  ),
};

/** Figma demo "Grid": `columns={2}`. */
export const Grid: StoryObj = {
  render: () => (
    <div style={{ width: 440 }}>
      <RadioGroup label="Default landing page" caption="Where the app opens after you sign in." defaultValue="search" columns={2}>
        {['Home', 'Search', 'Library', 'Downloads', 'Podcasts', 'Settings'].map((page) => (
          <Radio key={page} value={page.toLowerCase()} label={page} />
        ))}
      </RadioGroup>
    </div>
  ),
};

/** Figma demo "Invalid": `invalid` marks every radio; `error` also shows a message in place of the description. */
export const Invalid: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 32, width: 440 }}>
      <RadioGroup label="Who can see your playlists" caption="Pick one to finish setting up your profile." invalid>
        {['Everyone', 'Followers only', 'Only me'].map((o) => (
          <Radio key={o} value={o} label={o} />
        ))}
      </RadioGroup>
      <RadioGroup label="Who can see your playlists" error="Pick one to finish setting up your profile." required>
        {['Everyone', 'Followers only', 'Only me'].map((o) => (
          <Radio key={o} value={o} label={o} />
        ))}
      </RadioGroup>
    </div>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'grid', gap: 16, alignContent: 'start' }}>
          <div style={caption}>{scheme === 'light' ? 'Light' : 'Dark'}</div>
          <div style={{ display: 'flex', gap: 16 }}>
            <Radio name={`t-${scheme}-1`} value="a" aria-label={`Unchecked (${scheme})`} />
            <Radio name={`t-${scheme}-2`} value="a" aria-label={`Checked (${scheme})`} defaultChecked />
            <Radio name={`t-${scheme}-3`} value="a" aria-label={`Invalid (${scheme})`} invalid />
            <Radio name={`t-${scheme}-4`} value="a" aria-label={`Disabled (${scheme})`} defaultChecked disabled />
          </div>
          <RadioGroup label="Billing period" defaultValue="yearly">
            {plans.slice(0, 2).map((p) => (
              <Radio key={p.value} card control="end" {...p} />
            ))}
          </RadioGroup>
        </div>
      ))}
    </div>
  ),
};
