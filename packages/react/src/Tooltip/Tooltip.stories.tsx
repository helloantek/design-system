import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties } from 'react';
import { Button } from '../Button';
import { Tooltip, type TooltipSide } from './Tooltip';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=166-2';

const meta = {
  title: 'Components/Tooltip',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Tooltip** ([open in Figma](${FIGMA_URL})): \`side\` (\`top\` · \`bottom\` · \`left\` · \`right\`), a Leading slot (\`icon\`) and a Trailing slot with a Kbd Group (\`shortcut\`). It describes its trigger (\`aria-describedby\`), shows on hover after \`delay\` ms or at once on keyboard focus, stays while the pointer is over it, and Escape hides it. The trigger keeps its own name; a tooltip is help, not a label.`,
      },
    },
  },
} satisfies Meta;

export default meta;

// The tooltips pop out of their trigger's box; leave room for them.
const room: Decorator = (Story) => (
  <div style={{ display: 'grid', placeItems: 'center', minHeight: 160, padding: '48px 160px' }}>
    <Story />
  </div>
);

type PlaygroundArgs = { content: string; side: TooltipSide; shortcut: boolean; delay: number };

export const Playground: StoryObj<PlaygroundArgs> = {
  decorators: [room],
  args: { content: 'Refund this payment', side: 'top', shortcut: false, delay: 500 },
  argTypes: {
    content: { name: 'Label' },
    side: { name: 'Side', control: 'inline-radio', options: ['top', 'bottom', 'left', 'right'] },
    shortcut: { name: 'Trailing slot (Kbd Group)' },
    delay: { name: 'Delay (ms)', control: { type: 'number', min: 0, step: 100 } },
  },
  render: ({ content, side, shortcut, delay }) => (
    <Tooltip content={content} side={side} shortcut={shortcut ? ['⌘', 'K'] : undefined} delay={delay}>
      <Button variant="outline">Refund</Button>
    </Tooltip>
  ),
};

const caption: CSSProperties = { fontFamily: 'var(--ds-font-sans)', fontSize: 12, color: 'var(--ds-muted-foreground)' };

/** Figma "Tooltip": every Side, shown open. */
export const Variants: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 240px)', gap: 64, padding: 48, justifyItems: 'center' }}>
      {(['top', 'bottom', 'left', 'right'] as const).map((side) => (
        <div key={side} style={{ display: 'grid', gap: 48, justifyItems: 'center' }}>
          <span style={caption}>Side={side}</span>
          <Tooltip content="Tooltip text" side={side} open>
            <Button variant="outline">Trigger</Button>
          </Tooltip>
        </div>
      ))}
    </div>
  ),
};

/** Figma demo "Tooltip": hover or Tab to the button. */
export const Default: StoryObj = {
  decorators: [room],
  render: () => (
    <Tooltip content="Refund this payment">
      <Button variant="outline">Refund</Button>
    </Tooltip>
  ),
};

/** Figma demo "Side". */
export const Side: StoryObj = {
  decorators: [room],
  render: () => (
    <div style={{ display: 'flex', gap: 24 }}>
      {(['left', 'top', 'bottom', 'right'] as const).map((side) => (
        <Tooltip key={side} content="Copy payment link" side={side} open>
          <Button variant="outline">{side[0].toUpperCase() + side.slice(1)}</Button>
        </Tooltip>
      ))}
    </div>
  ),
};

/** Figma demo "Long label": the text wraps at 320 px. */
export const LongLabel: StoryObj = {
  decorators: [room],
  render: () => (
    <Tooltip content="Included at no additional charge for businesses on standard payments pricing" open>
      <Button variant="outline">Fraud screening</Button>
    </Tooltip>
  ),
};

/** Figma demo "With keyboard shortcut": a Kbd Group in the Trailing slot. */
export const WithKeyboardShortcut: StoryObj = {
  decorators: [room],
  render: () => (
    <Tooltip content="Search payments" shortcut={['⌘', 'K']} open>
      <Button variant="outline" aria-keyshortcuts="Meta+K">
        Search
      </Button>
    </Tooltip>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: '56px 24px', display: 'flex', gap: 120, justifyContent: 'center' }}>
          <Tooltip content={scheme === 'light' ? 'Refund this payment' : 'Copy payment link'} open>
            <Button variant="outline">{scheme === 'light' ? 'Light' : 'Dark'}</Button>
          </Tooltip>
          <Tooltip content="Search payments" shortcut={['⌘', 'K']} side="bottom" open>
            <Button variant="outline">Search</Button>
          </Tooltip>
        </div>
      ))}
    </div>
  ),
};
