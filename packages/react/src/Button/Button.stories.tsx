import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties } from 'react';
import { Button, type ButtonSize, type ButtonVariant } from './Button';
import { SquareDashed } from './Button.fixtures';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=40-2125';

const variants: ButtonVariant[] = ['default', 'outline', 'secondary', 'ghost', 'destructive'];
const sizes: ButtonSize[] = ['xl', 'lg', 'default', 'sm', 'xs'];

// Sort UI 2.0's placeholder icon; its colour comes from the button via currentColor.
const Icon = () => <SquareDashed />;

type PlaygroundArgs = {
  label: string;
  variant: ButtonVariant;
  size: ButtonSize;
  disabled: boolean;
  leadingIcon: boolean;
  trailingIcon: boolean;
  badge: string;
};

const meta = {
  title: 'Components/Button',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 component set **Button** ([open in Figma](${FIGMA_URL})): every Variant, Size, State and Icon only. Figma "Leading Icon" / "Trailing Icon" / "Badge" → \`leadingIcon\`, \`trailingIcon\`, \`badge\`; Icon only → \`icon\` + \`aria-label\`. Hover and Focus are real CSS states (\`:hover\`, \`:focus-visible\`), Disabled is the native \`disabled\` attribute. Styles come from \`@helloantek/ds-css\`, so the same classes work outside React.`,
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
  render: ({ label, leadingIcon, trailingIcon, badge, ...props }) => (
    <Button {...props} leadingIcon={leadingIcon ? <Icon /> : undefined} trailingIcon={trailingIcon ? <Icon /> : undefined} badge={badge || undefined}>
      {label}
    </Button>
  ),
};

type IconOnlyArgs = Pick<PlaygroundArgs, 'variant' | 'size' | 'disabled'>;

/** Figma Icon only=True: a square button; `aria-label` names it. */
export const IconOnly: StoryObj<IconOnlyArgs> = {
  args: { variant: 'default', size: 'default', disabled: false },
  argTypes: { variant: Playground.argTypes!.variant, size: Playground.argTypes!.size },
  render: (props) => <Button {...props} icon={<Icon />} aria-label="Button" />,
};

const grid = (columns: number): CSSProperties => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${columns}, max-content)`,
  gap: 16,
  alignItems: 'center',
  fontFamily: 'var(--ds-font-sans)',
  fontSize: 12,
  color: 'var(--ds-muted-foreground)',
});

/** Every Figma Variant in its static states. Hover the buttons, or Tab to them, to see Hover and Focus. */
export const AllVariants: StoryObj = {
  render: () => (
    <div style={grid(4)}>
      <span />
      <span>Default</span>
      <span>Disabled</span>
      <span>Icon only</span>
      {variants.map((variant) => (
        <div key={variant} style={{ display: 'contents' }}>
          <span>{variant}</span>
          <Button variant={variant} leadingIcon={<Icon />} trailingIcon={<Icon />} badge="2">
            Button
          </Button>
          <Button variant={variant} leadingIcon={<Icon />} trailingIcon={<Icon />} badge="2" disabled>
            Button
          </Button>
          <Button variant={variant} icon={<Icon />} aria-label="Button" />
        </div>
      ))}
    </div>
  ),
};

/** Figma Size: 40, 36, 32, 28 and 24 px tall. */
export const Sizes: StoryObj = {
  render: () => (
    <div style={grid(3)}>
      {sizes.map((size) => (
        <div key={size} style={{ display: 'contents' }}>
          <span>{size}</span>
          <Button size={size} leadingIcon={<Icon />} trailingIcon={<Icon />} badge="2">
            Button
          </Button>
          <Button size={size} icon={<Icon />} aria-label="Button" />
        </div>
      ))}
    </div>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'grid', gap: 12 }}>
          <div style={grid(1)}>{scheme === 'light' ? 'Light' : 'Dark'}</div>
          {[false, true].map((disabled) => (
            <div key={String(disabled)} style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {variants.map((variant) => (
                <Button key={variant} variant={variant} leadingIcon={<Icon />} badge="2" disabled={disabled}>
                  {variant}
                </Button>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
};
