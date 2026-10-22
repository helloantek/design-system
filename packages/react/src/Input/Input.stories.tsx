import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties } from 'react';
import { RiAtLine, RiInformationFill } from '@remixicon/react';
import brands from '@helloantek/ds-tokens/brands.json';
import { Input, InputAction, type InputSize, type InputVariant } from './Input';

const FIGMA_URL = 'https://www.figma.com/design/4tiBR2hKd4yvQehtKhM9OY?node-id=3780-4518';

const variants: InputVariant[] = ['default', 'shadow', 'soft'];
const sizes: InputSize[] = ['lg', 'sm'];

const meta = {
  title: 'Components/Input',
  parameters: {
    docs: {
      description: {
        component: `Implements the Figma component set **Input** ([open in Figma](${FIGMA_URL})) for Figma Variant = Default, Shortcut, Add-on, Inline add-on and Tail button. Figma "Style" → \`variant\`, "Size" → \`size\`; Active is \`:focus-within\`, Failed is \`error\`, Disabled is \`disabled\`. Styles come from \`@helloantek/ds-css\`, so the same classes work outside React. Dropdown, Tags, Quantity and Lead button (file) variants are separate components (see the README).`,
      },
    },
  },
  decorators: [(Story) => <div style={{ width: 320 }}>{Story()}</div>],
} satisfies Meta;

export default meta;

type PlaygroundArgs = {
  label: string;
  caption: string;
  error: string;
  placeholder: string;
  variant: InputVariant;
  size: InputSize;
  disabled: boolean;
  leadIcon: boolean;
  tailIcon: boolean;
  shortcut: string;
  prefix: string;
  suffix: string;
  addons: boolean;
  action: string;
};

export const Playground: StoryObj<PlaygroundArgs> = {
  args: {
    label: 'Label',
    caption: 'Caption text',
    error: '',
    placeholder: 'mail@domain.com',
    variant: 'default',
    size: 'lg',
    disabled: false,
    leadIcon: true,
    tailIcon: true,
    shortcut: '',
    prefix: '',
    suffix: '',
    addons: false,
    action: '',
  },
  argTypes: {
    variant: { control: 'inline-radio', options: variants },
    size: { control: 'inline-radio', options: sizes },
    addons: { description: 'Show prefix/suffix as joined segments (Add-on) instead of inline (Inline add-on)' },
  },
  render: ({ leadIcon, tailIcon, error, shortcut, prefix, suffix, addons, action, ...props }) => (
    <Input
      {...props}
      error={error || undefined}
      leadIcon={leadIcon ? <RiAtLine /> : undefined}
      tailIcon={tailIcon ? <RiInformationFill /> : undefined}
      shortcut={shortcut || undefined}
      prefix={!addons && prefix ? prefix : undefined}
      suffix={!addons && suffix ? suffix : undefined}
      addonBefore={addons && prefix ? prefix : undefined}
      addonAfter={addons && suffix ? suffix : undefined}
      action={action ? <InputAction>{action}</InputAction> : undefined}
    />
  ),
};

const kinds = {
  Default: { placeholder: 'mail@domain.com', leadIcon: <RiAtLine />, tailIcon: <RiInformationFill /> },
  Shortcut: { placeholder: 'Search', leadIcon: <RiAtLine />, shortcut: '/' },
  'Add-on': { placeholder: 'domain', tailIcon: <RiInformationFill />, addonBefore: 'https://', addonAfter: '.com' },
  'Inline add-on': { placeholder: 'domain', tailIcon: <RiInformationFill />, prefix: 'https://', suffix: '.com' },
  'Tail button': { placeholder: 'mail@domain.com', leadIcon: <RiAtLine />, tailIcon: <RiInformationFill />, action: <InputAction>Send</InputAction> },
};

const grid = (columns: number): CSSProperties => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${columns}, 280px)`,
  gap: 24,
  fontFamily: 'var(--ds-font-family-body)',
  fontSize: 12,
  color: 'var(--ds-text-muted)',
});

/** Every supported Figma Variant in its static states. Focus an input to see Active. */
export const AllVariants: StoryObj = {
  decorators: [(Story) => <div style={{ width: 'auto' }}>{Story()}</div>],
  render: () => (
    <div style={grid(4)}>
      <span>Placeholder</span>
      <span>Filled</span>
      <span>Failed</span>
      <span>Disabled</span>
      {Object.entries(kinds).map(([name, props]) => (
        <div key={name} style={{ display: 'contents' }}>
          <Input {...props} label={name} caption="Caption text" />
          <Input {...props} label={name} caption="Caption text" defaultValue={name === 'Shortcut' ? 'design system' : 'apple'} />
          <Input {...props} label={name} error="Error message" />
          <Input {...props} label={name} caption="Caption text" disabled />
        </div>
      ))}
    </div>
  ),
};

export const Styles: StoryObj = {
  decorators: [(Story) => <div style={{ width: 'auto' }}>{Story()}</div>],
  render: () => (
    <div style={grid(3)}>
      {variants.map((variant) => (
        <Input key={variant} variant={variant} label={variant} caption="Caption text" {...kinds.Default} />
      ))}
    </div>
  ),
};

export const Sizes: StoryObj = {
  decorators: [(Story) => <div style={{ width: 'auto' }}>{Story()}</div>],
  render: () => (
    <div style={grid(2)}>
      {sizes.map((size) => (
        <Input key={size} size={size} label={size} caption="Caption text" {...kinds['Tail button']} />
      ))}
    </div>
  ),
};

/** The same inputs under every brand and colour scheme, driven only by tokens. */
export const Brands: StoryObj = {
  parameters: { layout: 'fullscreen' },
  decorators: [(Story) => <div style={{ width: 'auto' }}>{Story()}</div>],
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {Object.keys(brands).flatMap((brand) =>
        (['light', 'dark'] as const).map((scheme) => (
          <div key={`${brand}-${scheme}`} data-ds-brand={brand} data-ds-scheme={scheme} style={{ background: 'var(--ds-bg-default)', padding: 24, display: 'grid', gap: 16 }}>
            <div style={{ fontFamily: 'var(--ds-font-family-body)', fontSize: 12, color: 'var(--ds-text-muted)' }}>
              {brand} · {scheme}
            </div>
            {variants.map((variant) => (
              <Input key={variant} variant={variant} label={variant} caption="Caption text" {...kinds.Default} />
            ))}
            <Input label="Failed" error="Error message" {...kinds['Tail button']} />
          </div>
        )),
      )}
    </div>
  ),
};
