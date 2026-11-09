import type { Meta, StoryObj } from '@storybook/angular';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { DsTooltip, type TooltipSide } from './tooltip';
import { DsButton } from '../button/button';
import { DsIcon } from '../slots/slots';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=166-2';
const sides: TooltipSide[] = ['top', 'bottom', 'left', 'right'];

const meta = {
  title: 'Components/Tooltip',
  decorators: [moduleMetadata({ imports: [DsTooltip, DsButton, DsIcon] })],
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Tooltip** ([open in Figma](${FIGMA_URL})) for Angular: \`<ds-tooltip>\` around its trigger, with the same markup and \`ds-tooltip\` classes as the React Tooltip. \`side\` (\`top\` · \`bottom\` · \`left\` · \`right\`), a Leading slot (an icon marked \`dsIcon\`) and a Trailing slot with a Kbd Group (\`shortcut\`). It describes its trigger (\`aria-describedby\`), shows on hover after \`delay\` ms or at once on keyboard focus, stays while the pointer is over it, and Escape hides it. The trigger keeps its own name; a tooltip is help, not a label.`,
      },
    },
  },
} satisfies Meta;

export default meta;

// The tooltips pop out of their trigger's box; leave room for them.
const room = componentWrapperDecorator((story) => `<div style="display: grid; place-items: center; min-height: 160px; padding: 48px 160px;">${story}</div>`);
const caption = 'font-family: var(--ds-font-sans); font-size: 12px; color: var(--ds-muted-foreground);';

type PlaygroundArgs = { content: string; side: TooltipSide; shortcut: boolean; delay: number };

export const Playground: StoryObj<PlaygroundArgs> = {
  decorators: [room],
  args: { content: 'Refund this payment', side: 'top', shortcut: false, delay: 500 },
  argTypes: {
    content: { name: 'Label' },
    side: { name: 'Side', control: 'inline-radio', options: sides },
    shortcut: { name: 'Trailing slot (Kbd Group)' },
    delay: { name: 'Delay (ms)', control: { type: 'number', min: 0, step: 100 } },
  },
  render: (args) => ({
    props: { ...args, keys: ['⌘', 'K'] },
    template: `<ds-tooltip [content]="content" [side]="side" [shortcut]="shortcut ? keys : undefined" [delay]="delay"><button dsButton variant="outline">Refund</button></ds-tooltip>`,
  }),
};

/** Figma "Tooltip": every Side, shown open. */
export const Variants: StoryObj = {
  render: () => ({
    props: { sides },
    template: `<div style="display: grid; grid-template-columns: repeat(2, 240px); gap: 64px; padding: 48px; justify-items: center;">
      @for (side of sides; track side) {
        <div style="display: grid; gap: 48px; justify-items: center;">
          <span style="${caption}">Side={{ side }}</span>
          <ds-tooltip content="Tooltip text" [side]="side" [open]="true"><button dsButton variant="outline">Trigger</button></ds-tooltip>
        </div>
      }
    </div>`,
  }),
};

/** Figma demo "Tooltip": hover or Tab to the button. */
export const Default: StoryObj = {
  decorators: [room],
  render: () => ({ template: `<ds-tooltip content="Refund this payment"><button dsButton variant="outline">Refund</button></ds-tooltip>` }),
};

/** Figma demo "Side". */
export const Side: StoryObj = {
  decorators: [room],
  render: () => ({
    props: { sides: ['left', 'top', 'bottom', 'right'] },
    template: `<div style="display: flex; gap: 24px;">
      @for (side of sides; track side) {
        <ds-tooltip content="Copy payment link" [side]="side" [open]="true"><button dsButton variant="outline">{{ side[0].toUpperCase() + side.slice(1) }}</button></ds-tooltip>
      }
    </div>`,
  }),
};

/** Figma demo "Long label": the text wraps at 320 px. */
export const LongLabel: StoryObj = {
  decorators: [room],
  render: () => ({
    template: `<ds-tooltip content="Included at no additional charge for businesses on standard payments pricing" [open]="true"><button dsButton variant="outline">Fraud screening</button></ds-tooltip>`,
  }),
};

/** Figma demo "With keyboard shortcut": a Kbd Group in the Trailing slot. */
export const WithKeyboardShortcut: StoryObj = {
  decorators: [room],
  render: () => ({
    props: { keys: ['⌘', 'K'] },
    template: `<ds-tooltip content="Search payments" [shortcut]="keys" [open]="true"><button dsButton variant="outline" aria-keyshortcuts="Meta+K">Search</button></ds-tooltip>`,
  }),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => ({
    props: { schemes: ['light', 'dark'], keys: ['⌘', 'K'] },
    template: `<div style="display: grid; grid-template-columns: repeat(2, 1fr);">
      @for (scheme of schemes; track scheme) {
        <div data-ds-brand="theme-1" [attr.data-ds-scheme]="scheme" style="background: var(--ds-background); padding: 56px 24px; display: flex; gap: 120px; justify-content: center;">
          <ds-tooltip [content]="scheme === 'light' ? 'Refund this payment' : 'Copy payment link'" [open]="true"><button dsButton variant="outline">{{ scheme === 'light' ? 'Light' : 'Dark' }}</button></ds-tooltip>
          <ds-tooltip content="Search payments" [shortcut]="keys" side="bottom" [open]="true"><button dsButton variant="outline">Search</button></ds-tooltip>
        </div>
      }
    </div>`,
  }),
};
