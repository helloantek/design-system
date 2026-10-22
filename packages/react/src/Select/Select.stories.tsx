import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type CSSProperties, type ReactNode } from 'react';
import { RiBuildingLine, RiGlobalLine, RiInformationFill, RiRocketLine, RiUser3Line } from '@remixicon/react';
import brands from '@helloantek/ds-tokens/brands.json';
import { Select, type SelectIndicator, type SelectItem, type SelectSize, type SelectVariant } from './Select';
import { FlagUnitedStates } from './Select.fixtures';

const FIGMA_URL = 'https://www.figma.com/design/4tiBR2hKd4yvQehtKhM9OY?node-id=3817-74026';

const variants: SelectVariant[] = ['default', 'shadow', 'soft'];
const sizes: SelectSize[] = ['lg', 'sm'];

// Sample data from the Figma file.
const users: SelectItem[] = ['Alex Jhonson', 'Simon Alt', 'Emma Thompson', 'Michael Davis', 'Kate Roberts', 'Ryan Parker', 'Lily Chen'].map((name) => ({
  value: name.toLowerCase().replace(' ', '-'),
  label: name,
}));

const rich: SelectItem[] = [
  {
    label: 'Regions',
    caption: '3',
    options: [
      { value: 'eu', label: 'Europe', icon: <RiGlobalLine />, caption: 'EU', badge: 'Default' },
      { value: 'us', label: 'North America', icon: <RiGlobalLine />, caption: 'US' },
      { value: 'apac', label: 'Asia Pacific', icon: <RiGlobalLine />, caption: 'APAC', disabled: true },
    ],
  },
  { type: 'separator' },
  { value: 'global', label: 'Global', icon: <RiGlobalLine /> },
];

const meta = {
  title: 'Components/Select',
  parameters: {
    docs: {
      description: {
        component: `Implements the Figma component sets **Select Input**, **Select Menu** and **Select Menu Items** ([open in Figma](${FIGMA_URL})) for Select Input Variant = Default and menu items of Type = Default, Label and Divider. Figma "Style" → \`variant\`, "Size" → \`size\`; Active is the focused trigger, Failed is \`error\`, Destructive (drawn as a disabled field in Figma) is \`disabled\`. Keyboard: arrows, Home/End, PageUp/PageDown, Enter/Space, Escape, Tab and type-ahead, as in the WAI-ARIA select-only combobox. Multi-select, Tags, Avatar and Country Flag variants, the menu search and the menu footer button are in the backlog.`,
      },
    },
  },
} satisfies Meta;

// Room below for the open menu, which overlays the page.
const single = [(Story: () => ReactNode) => <div style={{ width: 320, paddingBottom: 320 }}>{Story()}</div>];

export default meta;

type PlaygroundArgs = {
  label: string;
  caption: string;
  error: string;
  placeholder: string;
  variant: SelectVariant;
  size: SelectSize;
  disabled: boolean;
  leadIcon: boolean;
  tailIcon: boolean;
  groups: boolean;
  multiple: boolean;
  indicator: SelectIndicator;
};

export const Playground: StoryObj<PlaygroundArgs> = {
  args: {
    label: 'Label',
    caption: 'Caption text',
    error: '',
    placeholder: 'Select a user',
    variant: 'default',
    size: 'lg',
    disabled: false,
    leadIcon: true,
    tailIcon: true,
    groups: false,
    multiple: false,
    indicator: 'check',
  },
  decorators: single,
  argTypes: {
    variant: { control: 'inline-radio', options: variants },
    size: { control: 'inline-radio', options: sizes },
    groups: { description: 'Show a group label, captions, a badge, a disabled option and a divider' },
    multiple: { description: 'Figma Variant=Multi-select: pick several options' },
    indicator: { control: 'inline-radio', options: ['check', 'checkbox', 'radio'], description: 'Figma Select type: Default, Checkbox, Radio Button' },
  },
  render: function Render({ leadIcon, tailIcon, error, groups, multiple, ...props }) {
    const [value, setValue] = useState<string | null>(null);
    const [values, setValues] = useState<string[]>([]);
    const common = {
      ...props,
      options: groups ? rich : users,
      error: error || undefined,
      leadIcon: leadIcon ? <RiUser3Line /> : undefined,
      tailIcon: tailIcon ? <RiInformationFill /> : undefined,
    };
    return multiple ? <Select {...common} multiple value={values} onValueChange={setValues} /> : <Select {...common} value={value} onValueChange={setValue} />;
  },
};

const grid = (columns: number): CSSProperties => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${columns}, 280px)`,
  gap: 24,
  fontFamily: 'var(--ds-font-family-body)',
  fontSize: 12,
  color: 'var(--ds-text-muted)',
});

const field = { options: users, placeholder: 'Select a user', leadIcon: <RiUser3Line />, tailIcon: <RiInformationFill /> };

/** Every Figma Style in the static states. Focus a select to see Active. */
export const AllStates: StoryObj = {
  render: () => (
    <div style={grid(4)}>
      <span>Placeholder</span>
      <span>Filled</span>
      <span>Failed</span>
      <span>Destructive (disabled)</span>
      {variants.map((variant) => (
        <div key={variant} style={{ display: 'contents' }}>
          <Select {...field} variant={variant} label={variant} caption="Caption text" />
          <Select {...field} variant={variant} label={variant} caption="Caption text" defaultValue="simon-alt" />
          <Select {...field} variant={variant} label={variant} error="Error message" />
          <Select {...field} variant={variant} label={variant} caption="Caption text" disabled />
        </div>
      ))}
    </div>
  ),
};

export const Sizes: StoryObj = {
  render: () => (
    <div style={grid(2)}>
      {sizes.map((size) => (
        <Select key={size} {...field} size={size} label={size} caption="Caption text" />
      ))}
    </div>
  ),
};

/** Figma Variant=Multi-select: options toggle, the menu stays open and the trigger lists the selected labels. */
const plans: SelectItem[] = [
  { type: 'caption', label: 'Billed yearly. You can change the plan at any time.' },
  { value: 'starter', label: 'Starter', description: 'For individuals', icon: <RiRocketLine /> },
  { value: 'team', label: 'Team', description: 'Up to 20 people', icon: <RiUser3Line />, badge: 'Popular' },
  { value: 'enterprise', label: 'Enterprise', description: 'Contact sales', icon: <RiBuildingLine />, disabled: true },
];

const countries: SelectItem[] = [
  { value: 'us', label: 'United States', caption: 'USD', media: <FlagUnitedStates /> },
  { value: 'us-east', label: 'US East region', caption: 'Virginia', media: <FlagUnitedStates /> },
  { value: 'us-west', label: 'US West region', caption: 'Oregon', media: <FlagUnitedStates />, disabled: true },
];

const column = { display: 'grid', gap: 24, gridTemplateColumns: 'repeat(4, 280px)', paddingBottom: 260, alignItems: 'start' } satisfies CSSProperties;

/** Every Figma "Select Menu Items" type and Select type, each in an open menu: Checkbox, Radio Button, Country Flag, Default Large with a Caption. */
export const MenuItemTypes: StoryObj = {
  render: () => (
    <div style={column}>
      <Select options={users} label="Checkbox" indicator="checkbox" multiple defaultValue={['simon-alt', 'emma-thompson']} defaultOpen />
      <Select options={users} label="Radio Button" indicator="radio" defaultValue="simon-alt" defaultOpen />
      <Select options={countries} label="Country Flag" defaultValue="us" defaultOpen />
      <Select options={plans} label="Default Large" defaultValue="team" defaultOpen />
    </div>
  ),
};

export const MultiSelect: StoryObj = {
  decorators: single,
  render: () => (
    <Select {...field} label="Reviewers" caption="Pick everyone who should approve" multiple defaultValue={['simon-alt', 'michael-davis', 'ryan-parker']} />
  ),
};

/** The open menu with every implemented item type: group label, options with icon, caption and badge, a disabled option, a divider. */
export const Menu: StoryObj = {
  decorators: single,
  render: () => <Select options={rich} label="Region" placeholder="Select a region" defaultValue="eu" defaultOpen />,
};

/** The same selects under every brand and colour scheme, driven only by tokens. */
export const Brands: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 368px)' }}>
      {Object.keys(brands).flatMap((brand) =>
        (['light', 'dark'] as const).map((scheme) => (
          <div key={`${brand}-${scheme}`} data-ds-brand={brand} data-ds-scheme={scheme} style={{ background: 'var(--ds-bg-default)', padding: 24, display: 'grid', gap: 16, alignContent: 'start', minHeight: 600 }}>
            <div style={{ fontFamily: 'var(--ds-font-family-body)', fontSize: 12, color: 'var(--ds-text-muted)' }}>
              {brand} · {scheme}
            </div>
            {variants.map((variant) => (
              <Select key={variant} {...field} variant={variant} label={variant} defaultValue="simon-alt" />
            ))}
            <Select options={rich} label="Open" defaultValue="eu" defaultOpen />
          </div>
        )),
      )}
    </div>
  ),
};
