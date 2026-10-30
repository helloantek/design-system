import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type CSSProperties } from 'react';
import { Button } from '../Button';
import { Textarea, type TextareaVariant } from './Textarea';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=99-2';

const meta = {
  title: 'Components/Textarea',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Textarea** ([open in Figma](${FIGMA_URL})) on a native \`<textarea>\`, in a **Field** for \`label\`, \`caption\` and \`error\`. The box is at least 64 px tall and grows with its text. \`showCount\` with \`maxLength\` (or a soft \`limit\`) adds the "Character limit" demo's count and Progress circle to the label. Figma Value = the value or the placeholder; State: Focus = focus, Disabled = \`disabled\`, Invalid = \`error\` or \`invalid\`.`,
      },
    },
  },
} satisfies Meta;

export default meta;

type PlaygroundArgs = { variant: TextareaVariant; state: 'Default' | 'Invalid' | 'Disabled'; label: string; caption: string; error: string; placeholder: string; showCount: boolean; maxLength: number };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: {
    variant: 'default',
    state: 'Default',
    label: 'Summary',
    caption: 'Shown at the top of the release notes and in the changelog feed.',
    error: 'Write a short summary before publishing.',
    placeholder: 'What changed in this release and why?',
    showCount: false,
    maxLength: 280,
  },
  argTypes: {
    variant: { name: 'Style', control: 'inline-radio', options: ['default', 'shadow', 'soft'], description: 'As Input and Select' },
    state: { name: 'State', control: 'inline-radio', options: ['Default', 'Invalid', 'Disabled'], description: 'Focus: click or press Tab' },
    label: { name: 'Field Label' },
    caption: { name: 'Description' },
    error: { name: 'Error', if: { arg: 'state', eq: 'Invalid' } },
    placeholder: { name: 'Placeholder' },
    showCount: { name: 'Character limit' },
    maxLength: { name: 'Max length', if: { arg: 'showCount' } },
  },
  render: ({ variant, state, label, caption, error, placeholder, showCount, maxLength }) => (
    <div style={{ width: 360 }}>
      <Textarea
        variant={variant}
        label={label}
        caption={caption}
        error={state === 'Invalid' ? error : undefined}
        disabled={state === 'Disabled'}
        placeholder={placeholder}
        showCount={showCount}
        maxLength={showCount ? maxLength : undefined}
      />
    </div>
  ),
};

const caption: CSSProperties = { fontFamily: 'var(--ds-font-sans)', fontSize: 12, color: 'var(--ds-muted-foreground)' };
const states = ['Default', 'Focus', 'Disabled', 'Invalid'] as const;
const filled = 'Adds a vertical orientation and keeps focus when the active tab is removed.';

/** Figma "Textarea": Value × State. State=Focus is focus: click or press Tab to see it. */
export const Variants: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '120px repeat(4, 280px)', gap: 24, alignItems: 'start' }}>
      <span />
      {states.map((s) => (
        <span key={s} style={caption}>
          {s}
        </span>
      ))}
      {(['Placeholder', 'Filled'] as const).map((value) => (
        <div key={value} style={{ display: 'contents' }}>
          <span style={caption}>Value={value}</span>
          {states.map((s) => (
            <Textarea
              key={s}
              aria-label={`${value}, ${s}`}
              placeholder="Placeholder"
              defaultValue={value === 'Filled' ? filled : undefined}
              disabled={s === 'Disabled'}
              invalid={s === 'Invalid'}
            />
          ))}
        </div>
      ))}
    </div>
  ),
};

/** Figma demo "Textarea": a Field with a label and a description. */
export const Field: StoryObj = {
  render: () => (
    <div style={{ width: 360 }}>
      <Textarea label="Summary" placeholder="What changed in this release and why?" caption="Shown at the top of the release notes and in the changelog feed." />
    </div>
  ),
};

/** Figma demo "Feedback form": a textarea named by the heading above it, with a button. */
export const FeedbackForm: StoryObj = {
  render: () => (
    <form style={{ display: 'grid', gap: 16, width: 360, justifyItems: 'center', fontFamily: 'var(--ds-font-sans)' }} onSubmit={(e) => e.preventDefault()}>
      <div style={{ display: 'grid', gap: 4, textAlign: 'center' }}>
        <h2 id="feedback-title" style={{ margin: 0, fontSize: 16, lineHeight: '24px', fontWeight: 500, color: 'var(--ds-foreground)' }}>
          Send feedback
        </h2>
        <p id="feedback-text" style={{ margin: 0, fontSize: 14, lineHeight: '20px', color: 'var(--ds-muted-foreground)' }}>
          Tell us what felt confusing or what is missing — every message is read by the team.
        </p>
      </div>
      <Textarea aria-labelledby="feedback-title" aria-describedby="feedback-text" placeholder="I expected the export to include my archived projects…" />
      <Button type="submit">Send feedback</Button>
    </form>
  ),
};

/** Figma demo "Invalid": `invalid` marks it; `error` also shows a message in place of the description. */
export const Invalid: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 32, width: 360 }}>
      <Textarea label="Bio" placeholder="A couple of lines teammates will see on your profile" invalid />
      <Textarea label="Bio" placeholder="A couple of lines teammates will see on your profile" error="Add a couple of lines about yourself." required />
    </div>
  ),
};

/** Figma demo "Disabled". */
export const Disabled: StoryObj = {
  render: () => (
    <div style={{ width: 360 }}>
      <Textarea label="Internal notes" placeholder="Only workspace admins can edit this field" disabled />
    </div>
  ),
};

/** Figma demo "Character limit": the characters left and a Progress circle in the label; `limit` lets typing go over. */
export const CharacterLimit: StoryObj = {
  render: function Render() {
    const [post, setPost] = useState('Just booked 24 hours in Lisbon for the autumn — real trams, real tiles, real pastries');
    return (
      <div style={{ display: 'grid', gap: 32, width: 360 }}>
        <Textarea label="Post" value={post} onChange={(e) => setPost(e.target.value)} maxLength={280} showCount />
        <Textarea label="Tagline" defaultValue="Ship small, ship often, and keep the changelog honest." limit={48} showCount caption="Keep it under 48 characters." />
      </div>
    );
  },
};

/** The box grows with its text; `resizable` adds a drag handle. */
export const Growing: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 32, width: 360 }}>
      <Textarea label="Grows with its text" defaultValue={`${filled}\n\nA second paragraph makes the box taller, and so does a third.\n\nThird.`} />
      <Textarea label="Resizable" placeholder="Drag the corner" resizable />
    </div>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'grid', gap: 24, alignContent: 'start' }}>
          <div style={caption}>{scheme === 'light' ? 'Light' : 'Dark'}</div>
          <Textarea label="Summary" placeholder="What changed in this release and why?" caption="Shown at the top of the release notes." />
          <Textarea label="Post" defaultValue="Just booked 24 hours in Lisbon for the autumn — real trams, real tiles, real pastries" maxLength={280} showCount />
          <Textarea label="Bio" placeholder="A couple of lines teammates will see on your profile" error="Add a couple of lines about yourself." />
          <Textarea label="Internal notes" placeholder="Only workspace admins can edit this field" disabled />
        </div>
      ))}
    </div>
  ),
};

/** Style, as Input and Select: default (the Sort UI 2.0 field), shadow (+ Shadow/xs) and soft (borderless, tinted). */
export const Styles: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 280px)', gap: 16 }}>
      {(['default', 'shadow', 'soft'] as const).map((variant) => (
        <Textarea key={variant} variant={variant} label={variant} caption="Caption text" placeholder="What changed in this release and why?" />
      ))}
    </div>
  ),
};
