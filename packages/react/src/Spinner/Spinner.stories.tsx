import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties } from 'react';
import { Button } from '../Button';
import { Spinner, type SpinnerSize, type SpinnerVariant } from './Spinner';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=259-3';

const meta = {
  title: 'Components/Spinner',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Spinner** ([open in Figma](${FIGMA_URL})): \`variant\` (\`default\` · \`gradient\`) and \`size\` (\`sm\` 12 · \`default\` 16 · \`lg\` 20 · \`xl\` 24 px). Default draws the arc in the current text colour, so it follows buttons and muted text. It is a \`role="status"\` named "Loading" (\`label\` changes it); \`decorative\` hides it when the text next to it already says what is happening. With reduced motion it turns slowly.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const text: CSSProperties = { fontFamily: 'var(--ds-font-sans)', fontSize: 14, lineHeight: '20px', letterSpacing: '-0.005em' };
const muted: CSSProperties = { ...text, color: 'var(--ds-muted-foreground)' };
const strong: CSSProperties = { ...text, color: 'var(--ds-foreground)' };

type PlaygroundArgs = { variant: SpinnerVariant; size: SpinnerSize; label: string; decorative: boolean };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { variant: 'default', size: 'default', label: 'Loading', decorative: false },
  argTypes: {
    variant: { name: 'Variant', control: 'inline-radio', options: ['default', 'gradient'] },
    size: { name: 'Size', control: 'inline-radio', options: ['sm', 'default', 'lg', 'xl'] },
    label: { name: 'Label', description: 'What screen readers hear' },
    decorative: { name: 'Decorative', description: 'Hidden from screen readers' },
  },
  render: (args) => (
    <span style={{ color: 'var(--ds-foreground)' }}>
      <Spinner {...args} />
    </span>
  ),
};

/** Figma Variant × Size. */
export const VariantsAndSizes: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 48px)', alignItems: 'center', justifyItems: 'center', gap: 24, color: 'var(--ds-foreground)' }}>
      {(['default', 'gradient'] as const).flatMap((variant) =>
        (['sm', 'default', 'lg', 'xl'] as const).map((size) => <Spinner key={`${variant}-${size}`} variant={variant} size={size} label={`Loading (${variant}, ${size})`} />),
      )}
    </div>
  ),
};

/** Figma demo "Spinner": a payment in progress; the row's text says what is happening, so the spinner is decorative. */
export const InARow: StoryObj = {
  render: () => (
    <div role="status" style={{ display: 'flex', alignItems: 'flex-start', gap: 14, boxSizing: 'border-box', width: 384, padding: '12px 14px', borderRadius: 16, background: 'var(--ds-fill-1)' }}>
      <span style={{ display: 'flex', paddingTop: 2, color: 'var(--ds-foreground)' }}>
        <Spinner decorative />
      </span>
      <div style={{ flex: 1, display: 'grid', gap: 4 }}>
        <span style={{ ...strong, fontWeight: 500 }}>Processing payment…</span>
        <span style={muted}>Visa ending in 4242</span>
      </div>
      <span style={{ ...strong, fontWeight: 500, alignSelf: 'center' }}>$129.00</span>
    </div>
  ),
};

/** Figma demo "In buttons": a disabled button shows the spinner in its label colour while it works. */
export const InButtons: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <Button disabled leadingIcon={<Spinner decorative />}>
        Please wait
      </Button>
      <Button variant="outline" disabled leadingIcon={<Spinner decorative />}>
        Saving…
      </Button>
      <Button variant="secondary" disabled leadingIcon={<Spinner decorative />}>
        Uploading 3 photos
      </Button>
    </div>
  ),
};

/** Figma demo "Empty state": a sync in progress, with a way out. */
export const EmptyState: StoryObj = {
  render: () => (
    <div role="status" style={{ display: 'grid', justifyItems: 'center', gap: 16, boxSizing: 'border-box', width: 384, padding: 24, textAlign: 'center' }}>
      <span style={{ display: 'grid', placeItems: 'center', width: 32, height: 32, borderRadius: 8, background: 'var(--ds-fill-2)', color: 'var(--ds-foreground)' }}>
        <Spinner decorative />
      </span>
      <div style={{ display: 'grid', gap: 4 }}>
        <span style={{ ...strong, fontSize: 16, lineHeight: '24px', fontWeight: 500 }}>Syncing your library</span>
        <span style={muted}>This can take a minute. Keep listening while we bring your playlists up to date.</span>
      </div>
      <Button variant="outline" size="sm">
        Cancel
      </Button>
    </div>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', color: 'var(--ds-foreground)', padding: 24, display: 'flex', gap: 24, alignItems: 'center' }}>
          <Spinner size="lg" label={`Loading (${scheme})`} />
          <Spinner variant="gradient" size="lg" label={`Loading (${scheme}, gradient)`} />
          <Button disabled leadingIcon={<Spinner decorative />}>
            Please wait
          </Button>
        </div>
      ))}
    </div>
  ),
};
