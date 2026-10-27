import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type CSSProperties, type ReactNode } from 'react';
import { Switch, SwitchGroup } from './Switch';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=121-4';

const meta = {
  title: 'Components/Switch',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Switch** ([open in Figma](${FIGMA_URL})) on a native checkbox with \`role="switch"\`, with **Field** Orientation=Horizontal for \`label\` and \`caption\` (the switch at the \`end\`, as in every demo) and the choice card for \`card\`. Figma Size = \`size\` (\`default\` · \`sm\`), Checked = \`checked\` / \`defaultChecked\`; State: Focus = keyboard focus, Disabled = \`disabled\`, Invalid = \`invalid\` or \`error\`. A switch acts at once; use a Checkbox for choices sent with a form.`,
      },
    },
  },
} satisfies Meta;

export default meta;

type PlaygroundArgs = { size: 'default' | 'sm'; state: 'Default' | 'Invalid' | 'Disabled'; control: 'start' | 'end'; card: boolean; label: string; caption: string; error: string };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { size: 'default', state: 'Default', control: 'end', card: false, label: 'Download over Wi-Fi only', caption: 'Cellular data is never used for downloads.', error: 'Turn it on to keep the role.' },
  argTypes: {
    size: { name: 'Size', control: 'inline-radio', options: ['default', 'sm'] },
    state: { name: 'State', control: 'inline-radio', options: ['Default', 'Invalid', 'Disabled'], description: 'Focus: press Tab' },
    control: { name: 'Control', control: 'inline-radio', options: ['start', 'end'] },
    card: { name: 'Choice Card' },
    label: { name: 'Field Label' },
    caption: { name: 'Description' },
    error: { name: 'Error', if: { arg: 'state', eq: 'Invalid' } },
  },
  render: ({ size, state, control, card, label, caption, error }) => (
    <div style={{ width: 400 }}>
      <Switch size={size} label={label} caption={caption} control={control} card={card} error={state === 'Invalid' ? error : undefined} disabled={state === 'Disabled'} defaultChecked />
    </div>
  ),
};

const caption: CSSProperties = { fontFamily: 'var(--ds-font-sans)', fontSize: 12, color: 'var(--ds-muted-foreground)' };
const states = ['Default', 'Focus', 'Disabled', 'Invalid'] as const;

/** Figma "Switch": Size × Checked × State. State=Focus is keyboard focus: press Tab to see it. */
export const Variants: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '160px repeat(4, 64px)', gap: 16, alignItems: 'center', justifyItems: 'center' }}>
      <span />
      {states.map((s) => (
        <span key={s} style={caption}>
          {s}
        </span>
      ))}
      {(['default', 'sm'] as const).map((size) =>
        (['False', 'True'] as const).map((checked) => (
          <div key={`${size}-${checked}`} style={{ display: 'contents' }}>
            <span style={{ ...caption, justifySelf: 'start' }}>
              Size={size}, Checked={checked}
            </span>
            {states.map((s) => (
              <Switch key={s} size={size} aria-label={`Size=${size}, Checked=${checked}, ${s}`} defaultChecked={checked === 'True'} disabled={s === 'Disabled'} invalid={s === 'Invalid'} />
            ))}
          </div>
        )),
      )}
    </div>
  ),
};

const panel: CSSProperties = {
  boxSizing: 'border-box',
  display: 'grid',
  gap: 20,
  width: 448,
  padding: 20,
  borderRadius: 14,
  background: 'var(--ds-card, var(--ds-background))',
  boxShadow: '0 0 0 1px var(--ds-border)',
  fontFamily: 'var(--ds-font-sans)',
};
const title: CSSProperties = { margin: 0, color: 'var(--ds-foreground)', fontSize: 16, lineHeight: '24px', fontWeight: 500 };
const text: CSSProperties = { margin: 0, color: 'var(--ds-muted-foreground)', fontSize: 14, lineHeight: '20px' };
const helper = (children: ReactNode) => <span className="ds-field__helper">{children}</span>;

/** Figma demo "Switch": a settings panel with a group of small switches (labels with a Helper). */
export const Downloads: StoryObj = {
  render: () => (
    <section style={panel} aria-labelledby="downloads-title">
      <div style={{ display: 'grid', gap: 6 }}>
        <h2 id="downloads-title" style={title}>
          Downloads
        </h2>
        <p style={text}>Keep music on this device for offline listening.</p>
      </div>
      <Switch label="Download over Wi-Fi only" caption="Cellular data is never used for downloads." defaultChecked />
      <SwitchGroup label="Collections">
        <Switch size="sm" label={<>Liked songs {helper('1,204 tracks')}</>} defaultChecked />
        <Switch size="sm" label={<>Late night focus {helper('48 tracks')}</>} defaultChecked />
        <Switch size="sm" label={<>Road trip {helper('112 tracks')}</>} />
        <Switch size="sm" label={<>Podcasts {helper('3 shows')}</>} />
      </SwitchGroup>
      <p style={text}>Downloads use 6.2 GB of the 64 GB on this phone.</p>
    </section>
  ),
};

/** Figma demo "With description", with a disabled switch. */
export const WithDescription: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 24, width: 400 }}>
      <Switch label="User onboarding emails" caption="Welcome new users with a guide to getting started" defaultChecked />
      <Switch label="Subscription renewal emails" caption="Send customers email receipts for subscription payments" />
      <Switch label="Product update notifications" caption="Inform users about the latest features and improvements" disabled />
    </div>
  ),
};

/** Figma demo "Sizes": default and sm. */
export const Sizes: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 24, width: 400 }}>
      <Switch label="Autoplay" caption="Keep playing similar tracks when your queue ends." defaultChecked />
      <Switch size="sm" label="Crossfade" caption="Blend the end of one track into the start of the next." defaultChecked />
    </div>
  ),
};

/** Figma demo "Invalid": `error` replaces the description and marks the switch. */
export const Invalid: StoryObj = {
  render: () => (
    <div style={{ width: 400 }}>
      <Switch label="Two-factor authentication" error="Required for admins — turn it on to keep the role." />
    </div>
  ),
};

/** Figma demo "Choice cards": a click anywhere on the card toggles it. */
export const ChoiceCards: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 8, width: 400 }}>
      <Switch card label="Smart shuffle" caption="Mixes in songs you might like." />
      <Switch card label="Sleep timer" caption="Stops playback after 30 minutes." defaultChecked />
    </div>
  ),
};

// Icons of the "Card controls" demo (Sort UI 2.0 / Lucide, 16 px with a 1.25 px stroke).
const icon = (children: ReactNode) => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.875} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {children}
  </svg>
);
const controls = [
  { label: 'Online payments', caption: 'Pay for goods and services on the internet.', on: true, icon: icon(<><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20" /></>) },
  { label: 'Mobile wallet', caption: 'Pay with your phone or watch in shops.', on: true, icon: icon(<><rect width="14" height="20" x="5" y="2" rx="2" /><path d="M12 18h.01" /></>) },
  { label: 'Cash withdrawals', caption: 'Take out cash at ATMs.', on: false, icon: icon(<><rect width="20" height="12" x="2" y="6" rx="2" /><circle cx="12" cy="12" r="2" /><path d="M6 12h.01M18 12h.01" /></>) },
  { label: 'Payments without 3D Secure', caption: 'Allow online payments that skip the extra check.', on: false, icon: icon(<><rect width="18" height="11" x="3" y="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>) },
  { label: 'Overseas payments', caption: 'Pay in shops outside your home country.', on: true, icon: icon(<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />) },
];

/** Figma demo "Card controls": an icon tile before each field. */
export const CardControls: StoryObj = {
  render: function Render() {
    const [on, setOn] = useState(() => controls.map((c) => c.on));
    return (
      <div style={{ display: 'grid', gap: 20, width: 400, fontFamily: 'var(--ds-font-sans)' }}>
        <div style={{ display: 'grid', gap: 6 }}>
          <h2 style={title}>Card controls</h2>
          <p style={text}>Choose where your card can be used.</p>
        </div>
        {controls.map((c, i) => (
          <div key={c.label} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <span style={{ display: 'grid', placeItems: 'center', flexShrink: 0, width: 32, height: 32, borderRadius: 8, background: 'var(--ds-fill-2)', color: 'var(--ds-muted-foreground)' }}>{c.icon}</span>
            <Switch
              className="story-flex"
              label={c.label}
              caption={c.caption}
              checked={on[i]}
              onCheckedChange={(next) => setOn((all) => all.map((v, j) => (j === i ? next : v)))}
            />
          </div>
        ))}
        <style>{'.story-flex { flex: 1; }'}</style>
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
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'grid', gap: 16, alignContent: 'start' }}>
          <div style={caption}>{scheme === 'light' ? 'Light' : 'Dark'}</div>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Switch aria-label={`Off (${scheme})`} />
            <Switch aria-label={`On (${scheme})`} defaultChecked />
            <Switch aria-label={`Invalid (${scheme})`} invalid />
            <Switch aria-label={`Disabled (${scheme})`} defaultChecked disabled />
            <Switch size="sm" aria-label={`Small off (${scheme})`} />
            <Switch size="sm" aria-label={`Small on (${scheme})`} defaultChecked />
          </div>
          <Switch label="Download over Wi-Fi only" caption="Cellular data is never used for downloads." defaultChecked />
          <Switch card label="Sleep timer" caption="Stops playback after 30 minutes." defaultChecked />
        </div>
      ))}
    </div>
  ),
};
