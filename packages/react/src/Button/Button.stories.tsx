import type { Meta, StoryObj } from '@storybook/react-vite';
import { RiCheckboxCircleFill } from '@remixicon/react';
import type { CSSProperties } from 'react';
import brands from '@helloantek/ds-tokens/brands.json';
import { Button, type ButtonShape, type ButtonSize, type ButtonVariant } from './Button';

const FIGMA_URL = 'https://www.figma.com/design/4tiBR2hKd4yvQehtKhM9OY?node-id=28-22033';

const variants: ButtonVariant[] = ['primary', 'secondary', 'dashed', 'soft', 'ghost', 'ghost-muted', 'destructive'];
const sizes: ButtonSize[] = ['lg', 'md', 'sm', 'xs', '2xs'];
const shapes: ButtonShape[] = ['rounded', 'pill'];

// Figma's placeholder icon (Remix Icon "checkbox-circle-fill"); colour comes from the button via currentColor.
const Icon = () => <RiCheckboxCircleFill />;

type PlaygroundArgs = {
  label: string;
  variant: ButtonVariant;
  size: ButtonSize;
  shape: ButtonShape;
  loading: boolean;
  disabled: boolean;
  leadIcon: boolean;
  tailIcon: boolean;
  badge: string;
};

const meta = {
  title: 'Components/Button',
  parameters: {
    docs: {
      description: {
        component: `Implements the Figma component set **Button** ([open in Figma](${FIGMA_URL})). Figma "Style" → \`variant\`, "Size" → \`size\`, "Shape" → \`shape\`, "Variant=Icon only" → \`icon\` + \`aria-label\`. Styles come from \`@helloantek/ds-css\`, so the same classes work outside React. Hover, Press and Focus are real CSS states (\`:hover\`, \`:active\`, \`:focus-visible\`), Disabled is the native \`disabled\` attribute and Loading is the \`loading\` prop.`,
      },
    },
  },
} satisfies Meta;

export default meta;

export const Playground: StoryObj<PlaygroundArgs> = {
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'md',
    shape: 'rounded',
    loading: false,
    disabled: false,
    leadIcon: true,
    tailIcon: true,
    badge: '/',
  },
  argTypes: {
    variant: { control: 'select', options: variants },
    size: { control: 'inline-radio', options: sizes },
    shape: { control: 'inline-radio', options: shapes },
  },
  render: ({ label, leadIcon, tailIcon, badge, ...props }) => (
    <Button
      {...props}
      leadIcon={leadIcon ? <Icon /> : undefined}
      tailIcon={tailIcon ? <Icon /> : undefined}
      badge={badge || undefined}
    >
      {label}
    </Button>
  ),
};

type IconOnlyArgs = Omit<PlaygroundArgs, 'label' | 'leadIcon' | 'tailIcon' | 'badge'>;

export const IconOnly: StoryObj<IconOnlyArgs> = {
  args: { variant: 'primary', size: 'md', shape: 'rounded', loading: false, disabled: false },
  argTypes: Playground.argTypes,
  render: (props) => <Button {...props} icon={<Icon />} aria-label="Confirm" />,
};

const grid = (columns: number): CSSProperties => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${columns}, max-content)`,
  gap: 16,
  alignItems: 'center',
  fontFamily: 'var(--ds-font-family-body)',
  fontSize: 12,
  color: 'var(--ds-text-muted)',
});

/** Every Figma Style in its static states. Hover and press the buttons to see the interactive states. */
export const AllVariants: StoryObj = {
  render: () => (
    <div style={grid(5)}>
      <span />
      <span>Default</span>
      <span>Loading</span>
      <span>Disabled</span>
      <span>Icon only</span>
      {variants.map((variant) => (
        <div key={variant} style={{ display: 'contents' }}>
          <span>{variant}</span>
          <Button variant={variant} leadIcon={<Icon />} tailIcon={<Icon />} badge="/">
            Button
          </Button>
          <Button variant={variant} leadIcon={<Icon />} tailIcon={<Icon />} badge="/" loading>
            Button
          </Button>
          <Button variant={variant} leadIcon={<Icon />} tailIcon={<Icon />} badge="/" disabled>
            Button
          </Button>
          <Button variant={variant} icon={<Icon />} aria-label="Confirm" />
        </div>
      ))}
    </div>
  ),
};

export const Sizes: StoryObj = {
  render: () => (
    <div style={grid(3)}>
      {sizes.map((size) => (
        <div key={size} style={{ display: 'contents' }}>
          <span>{size}</span>
          <Button size={size} leadIcon={<Icon />} tailIcon={<Icon />} badge="/">
            Button
          </Button>
          <Button size={size} icon={<Icon />} aria-label="Confirm" />
        </div>
      ))}
    </div>
  ),
};

export const Shapes: StoryObj = {
  render: () => (
    <div style={grid(2)}>
      {shapes.map((shape) => (
        <Button key={shape} shape={shape} variant="secondary" leadIcon={<Icon />} badge="/">
          {shape}
        </Button>
      ))}
    </div>
  ),
};

/** The same buttons under every brand and colour scheme, driven only by tokens. */
export const Brands: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {Object.keys(brands).flatMap((brand) =>
        (['light', 'dark'] as const).map((scheme) => (
          <div key={`${brand}-${scheme}`} data-ds-brand={brand} data-ds-scheme={scheme} style={{ background: 'var(--ds-bg-default)', padding: 24 }}>
            <div style={{ ...grid(4), marginBottom: 12 }}>
              {brand} · {scheme}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {variants.map((variant) => (
                <Button key={variant} variant={variant} leadIcon={<Icon />}>
                  {variant}
                </Button>
              ))}
            </div>
          </div>
        )),
      )}
    </div>
  ),
};
