import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties } from 'react';
import { RiAtLine, RiInformationFill } from '@remixicon/react';
import { Button } from '../Button';
import { Input, InputAction, type InputSize, type InputVariant } from './Input';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=82-50';

const variants: InputVariant[] = ['default', 'shadow', 'soft'];
const sizes: InputSize[] = ['xl', 'lg', 'default'];

const meta = {
  title: 'Components/Input',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 component sets **Input** ([open in Figma](${FIGMA_URL})), **Input Group** (icons, inline text, Kbd and the button slot) and **Field** (label, description, error). \`size\` is Figma Size: \`xl\` (40 px), \`lg\` (36 px), \`default\` (32 px), the same heights as Button's sizes of the same name. Focus is \`:focus-within\`, Invalid is \`error\`, Disabled is \`disabled\`. Sort UI 2.0 has a single input style: \`default\` is it, \`shadow\` adds Shadow/xs and \`soft\` is a borderless tinted field. Styles come from \`@helloantek/ds-css\`, so the same classes work outside React.`,
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
    size: 'default',
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
  fontFamily: 'var(--ds-font-sans)',
  fontSize: 12,
  color: 'var(--ds-muted-foreground)',
});

/** Every slot combination in the static states. Focus an input to see Focus. */
export const AllVariants: StoryObj = {
  decorators: [(Story) => <div style={{ width: 'auto' }}>{Story()}</div>],
  render: () => (
    <div style={grid(4)}>
      <span>Placeholder</span>
      <span>Filled</span>
      <span>Invalid</span>
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

/** Figma Size: 40, 36 and 32 px, next to the Button of the same size. */
export const Sizes: StoryObj = {
  decorators: [(Story) => <div style={{ width: 'auto' }}>{Story()}</div>],
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      {sizes.map((size) => (
        <div key={size} style={{ display: 'flex', gap: 8, alignItems: 'flex-end', width: 400 }}>
          <Input size={size} label={size} placeholder="mail@domain.com" leadIcon={<RiAtLine />} />
          <Button size={size}>Subscribe</Button>
        </div>
      ))}
    </div>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  decorators: [(Story) => <div style={{ width: 'auto' }}>{Story()}</div>],
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'grid', gap: 16 }}>
          <div style={{ fontFamily: 'var(--ds-font-sans)', fontSize: 12, color: 'var(--ds-muted-foreground)' }}>{scheme === 'light' ? 'Light' : 'Dark'}</div>
          {variants.map((variant) => (
            <Input key={variant} variant={variant} label={variant} caption="Caption text" {...kinds.Default} />
          ))}
          <Input label="Invalid" error="Error message" defaultValue="hey@sortui" {...kinds['Tail button']} />
          <Input label="Disabled" caption="Caption text" disabled {...kinds.Shortcut} />
        </div>
      ))}
    </div>
  ),
};
