import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type CSSProperties } from 'react';
import { Checkbox, CheckboxGroup } from './Checkbox';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=121-2';

const meta = {
  title: 'Components/Checkbox',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Checkbox** ([open in Figma](${FIGMA_URL})) on a native \`<input type="checkbox">\`, with **Field** Orientation=Horizontal for \`label\`, \`caption\` and \`error\` (\`control\`: \`start\` · \`end\`; \`card\` for Figma's choice cards) and **Field Group** for \`CheckboxGroup\`. Figma Checked = \`checked\` / \`defaultChecked\`; State: Focus = keyboard focus, Disabled = \`disabled\`, Invalid = \`invalid\` or \`error\`. \`indeterminate\` draws the minus of Figma's demos. Without \`label\`, \`aria-label\` is required.`,
      },
    },
  },
} satisfies Meta;

export default meta;

type PlaygroundArgs = {
  checked: boolean;
  indeterminate: boolean;
  state: 'Default' | 'Invalid' | 'Disabled';
  label: string;
  caption: string;
  error: string;
  control: 'start' | 'end';
};

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { checked: true, indeterminate: false, state: 'Default', label: 'Subscription renewal emails', caption: 'Send customers email receipts for subscription payments', error: 'This field is required.', control: 'start' },
  argTypes: {
    checked: { name: 'Checked' },
    indeterminate: { description: 'Not a Figma variant: the minus of the demos' },
    state: { name: 'State', control: 'inline-radio', options: ['Default', 'Invalid', 'Disabled'], description: 'Focus: press Tab' },
    label: { name: 'Field Label', description: 'Empty: a bare checkbox (aria-label)' },
    caption: { name: 'Description' },
    error: { name: 'Error', if: { arg: 'state', eq: 'Invalid' } },
    control: { name: 'Control', control: 'inline-radio', options: ['start', 'end'] },
  },
  render: function Render({ checked, indeterminate, state, label, caption, error, control }) {
    const [value, setValue] = useState(checked);
    const [mixed, setMixed] = useState(indeterminate);
    const [prev, setPrev] = useState({ checked, indeterminate });
    if (prev.checked !== checked || prev.indeterminate !== indeterminate) {
      setPrev({ checked, indeterminate });
      setValue(checked);
      setMixed(indeterminate);
    }
    const common = {
      checked: value,
      indeterminate: mixed,
      onCheckedChange: (next: boolean) => {
        setValue(next);
        setMixed(false);
      },
      disabled: state === 'Disabled',
    };
    return label ? (
      <div style={{ width: 360 }}>
        <Checkbox {...common} label={label} caption={caption || undefined} error={state === 'Invalid' ? error : undefined} control={control} />
      </div>
    ) : (
      <Checkbox {...common} invalid={state === 'Invalid'} aria-label="Checkbox" />
    );
  },
};

const caption: CSSProperties = { fontFamily: 'var(--ds-font-sans)', fontSize: 12, color: 'var(--ds-muted-foreground)' };
const states = ['Default', 'Focus', 'Disabled', 'Invalid'] as const;

/** Figma "Checkbox": Checked × State, plus indeterminate. State=Focus is keyboard focus: press Tab to see it. */
export const Variants: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '120px repeat(4, 64px)', gap: 16, alignItems: 'center', justifyItems: 'center' }}>
      <span />
      {states.map((s) => (
        <span key={s} style={caption}>
          {s}
        </span>
      ))}
      {(['Checked=False', 'Checked=True', 'indeterminate'] as const).map((row) => (
        <div key={row} style={{ display: 'contents' }}>
          <span style={{ ...caption, justifySelf: 'start' }}>{row}</span>
          {states.map((s) => (
            <Checkbox
              key={s}
              aria-label={`${row}, ${s}`}
              defaultChecked={row === 'Checked=True'}
              indeterminate={row === 'indeterminate'}
              disabled={s === 'Disabled'}
              invalid={s === 'Invalid'}
            />
          ))}
        </div>
      ))}
    </div>
  ),
};

/** Figma "Field" Orientation=Horizontal: Control (start, end) × State (Default, Invalid, Disabled). */
export const Field: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 320px)', gap: 32 }}>
      {(['start', 'end'] as const).map((control) => (
        <div key={control} style={{ display: 'grid', gap: 24, alignContent: 'start' }}>
          <span style={caption}>Control={control === 'start' ? 'Start' : 'End'}</span>
          <Checkbox control={control} label="Label" caption="Description" />
          <Checkbox control={control} label="Label" caption="Description" error="This field is required." />
          <Checkbox control={control} label="Label" caption="Description" disabled />
        </div>
      ))}
    </div>
  ),
};

/** Figma demo "Checkbox": fields with descriptions, 20 px apart. */
export const WithDescriptions: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 20, width: 440 }}>
      <Checkbox label="User onboarding emails" caption="Welcome new users with a guide to getting started" />
      <Checkbox label="Subscription renewal emails" caption="Send customers email receipts for subscription payments" defaultChecked />
      <Checkbox label="Product update notifications" caption="Inform users about the latest features and improvements" disabled />
    </div>
  ),
};

/** Figma demo "Checkbox group": a fieldset with a legend and description. */
export const Group: StoryObj = {
  render: () => (
    <div style={{ width: 440 }}>
      <CheckboxGroup label="Import from Tunely" caption="Choose what to bring over to your new library.">
        <Checkbox label="Playlists" />
        <Checkbox label="Liked songs" defaultChecked />
        <Checkbox label="Followed artists" />
        <Checkbox label="Podcast subscriptions" />
        <Checkbox label="Listening history" />
      </CheckboxGroup>
    </div>
  ),
};

const channels = ['Direct messages', 'Mentions', 'Comments on your posts'];

/** Figma demo "Nested": the parent is indeterminate while some children are checked; clicking it sets them all. */
export const Nested: StoryObj = {
  render: function Render() {
    const [on, setOn] = useState<string[]>(['Mentions']);
    const all = on.length === channels.length;
    return (
      <div style={{ width: 408 }}>
        <CheckboxGroup label="Deliver to">
          <Checkbox
            label="Push notifications"
            caption="Alerts on your phone and desktop."
            checked={all}
            indeterminate={on.length > 0 && !all}
            onCheckedChange={() => setOn(all ? [] : channels)}
            aria-controls="push-channels"
          />
          <div id="push-channels" style={{ display: 'grid', gap: 12, paddingLeft: 24 }}>
            {channels.map((c) => (
              <Checkbox key={c} label={c} checked={on.includes(c)} onCheckedChange={(v) => setOn(v ? [...on, c] : on.filter((x) => x !== c))} />
            ))}
          </div>
          <Checkbox label="SMS alerts" caption="Available once a phone number is verified." disabled />
        </CheckboxGroup>
      </div>
    );
  },
};

/** Figma demo "Choice cards": `card` puts the field in a bordered card, filled when checked; the whole card is clickable. */
export const ChoiceCards: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 8, width: 448 }}>
      <Checkbox card label="Extra storage" caption="Another 200 GB for photos and backups." />
      <Checkbox card label="Family sharing" caption="Share the plan with up to five people." defaultChecked />
      <Checkbox card label="Priority support" caption="Answers within an hour, day or night." />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 16 }}>
        <Checkbox card label="Email receipts" caption="A copy of every invoice in your inbox." />
        <Checkbox card label="Usage alerts" caption="A heads-up at 80% of your storage." defaultChecked />
      </div>
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
            <Checkbox aria-label={`Unchecked (${scheme})`} />
            <Checkbox aria-label={`Checked (${scheme})`} defaultChecked />
            <Checkbox aria-label={`Indeterminate (${scheme})`} indeterminate />
            <Checkbox aria-label={`Invalid (${scheme})`} invalid />
            <Checkbox aria-label={`Disabled (${scheme})`} defaultChecked disabled />
          </div>
          <Checkbox label="Subscription renewal emails" caption="Send customers email receipts for subscription payments" defaultChecked />
          <Checkbox label="Accept the terms" error="This field is required." />
          <Checkbox card label="Family sharing" caption="Share the plan with up to five people." defaultChecked />
        </div>
      ))}
    </div>
  ),
};
