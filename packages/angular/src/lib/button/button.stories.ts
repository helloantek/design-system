import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsButton, type ButtonSize, type ButtonVariant } from './button';
import { DsIcon, DsLeadingIcon, DsTrailingIcon } from '../slots/slots';
import { squareDashed } from '../fixtures';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=40-2125';
const variants: ButtonVariant[] = ['default', 'outline', 'secondary', 'ghost', 'destructive'];
const sizes: ButtonSize[] = ['xl', 'lg', 'default', 'sm', 'xs'];
const grid = (columns: number) =>
  `display: grid; grid-template-columns: repeat(${columns}, max-content); gap: 16px; align-items: center; font-family: var(--ds-font-sans); font-size: 12px; color: var(--ds-muted-foreground)`;
const lead = squareDashed('dsLeadingIcon');
const trail = squareDashed('dsTrailingIcon');
const only = squareDashed('dsIcon');

type PlaygroundArgs = { label: string; variant: ButtonVariant; size: ButtonSize; disabled: boolean; leadingIcon: boolean; trailingIcon: boolean; badge: string };

const meta = {
  title: 'Components/Button',
  decorators: [moduleMetadata({ imports: [DsButton, DsIcon, DsLeadingIcon, DsTrailingIcon] })],
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 component set **Button** ([open in Figma](${FIGMA_URL})) for Angular: \`<button dsButton>\` (or \`<a dsButton>\`) with the same markup and \`ds-button\` classes as the React Button. Figma "Variant" / "Size" / "Badge" → \`variant\`, \`size\`, \`badge\`; "Leading Icon" / "Trailing Icon" → an icon marked \`dsLeadingIcon\` / \`dsTrailingIcon\`; Icon only → an icon marked \`dsIcon\` and an \`aria-label\`. Disabled is the native \`disabled\` attribute.`,
      },
    },
  },
} satisfies Meta;

export default meta;

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { label: 'Button', variant: 'default', size: 'default', disabled: false, leadingIcon: true, trailingIcon: true, badge: '2' },
  argTypes: {
    label: { name: 'Label' },
    variant: { name: 'Variant', control: 'select', options: variants },
    size: { name: 'Size', control: 'inline-radio', options: sizes },
    disabled: { description: 'Figma State=Disabled' },
    leadingIcon: { name: 'Leading Icon' },
    trailingIcon: { name: 'Trailing Icon' },
    badge: { name: 'Badge', description: 'Empty hides it' },
  },
  render: (args) => ({
    props: { ...args, badgeValue: args.badge || undefined },
    template: `<button dsButton [variant]="variant" [size]="size" [disabled]="disabled" [badge]="badgeValue">${''}
      @if (leadingIcon) { ${lead} }{{ label }}@if (trailingIcon) { ${trail} }</button>`,
  }),
};

type IconOnlyArgs = Pick<PlaygroundArgs, 'variant' | 'size' | 'disabled'>;

/** Figma Icon only=True: a square button; `aria-label` names it. */
export const IconOnly: StoryObj<IconOnlyArgs> = {
  args: { variant: 'default', size: 'default', disabled: false },
  argTypes: { variant: { name: 'Variant', control: 'select', options: variants }, size: { name: 'Size', control: 'inline-radio', options: sizes } },
  render: (args) => ({ props: args, template: `<button dsButton [variant]="variant" [size]="size" [disabled]="disabled" aria-label="Button">${only}</button>` }),
};

/** Every Figma Variant in its static states. Hover the buttons, or Tab to them, to see Hover and Focus. */
export const AllVariants: StoryObj = {
  render: () => ({
    props: { variants },
    template: `<div style="${grid(4)}">
      <span></span><span>Default</span><span>Disabled</span><span>Icon only</span>
      @for (variant of variants; track variant) {
        <div style="display: contents">
          <span>{{ variant }}</span>
          <button dsButton [variant]="variant" badge="2">${lead}Button${trail}</button>
          <button dsButton [variant]="variant" badge="2" disabled>${lead}Button${trail}</button>
          <button dsButton [variant]="variant" aria-label="Button">${only}</button>
        </div>
      }
    </div>`,
  }),
};

/** Figma Size: 40, 36, 32, 28 and 24 px tall. */
export const Sizes: StoryObj = {
  render: () => ({
    props: { sizes },
    template: `<div style="${grid(3)}">
      @for (size of sizes; track size) {
        <div style="display: contents">
          <span>{{ size }}</span>
          <button dsButton [size]="size" badge="2">${lead}Button${trail}</button>
          <button dsButton [size]="size" aria-label="Button">${only}</button>
        </div>
      }
    </div>`,
  }),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => ({
    props: { variants, schemes: ['light', 'dark'], states: [false, true] },
    template: `<div style="display: grid; grid-template-columns: repeat(2, 1fr)">
      @for (scheme of schemes; track scheme) {
        <div data-ds-brand="theme-1" [attr.data-ds-scheme]="scheme" style="background: var(--ds-background); padding: 24px; display: grid; gap: 12px">
          <div style="${grid(1)}">{{ scheme === 'light' ? 'Light' : 'Dark' }}</div>
          @for (disabled of states; track disabled) {
            <div style="display: flex; flex-wrap: wrap; gap: 8px">
              @for (variant of variants; track variant) {
                <button dsButton [variant]="variant" badge="2" [disabled]="disabled">${lead}{{ variant }}</button>
              }
            </div>
          }
        </div>
      }
    </div>`,
  }),
};
