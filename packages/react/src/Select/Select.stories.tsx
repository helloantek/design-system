import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type CSSProperties, type ReactNode } from 'react';
import { RiBuildingLine, RiGlobalLine, RiInformationFill, RiRocketLine, RiUser3Line } from '@remixicon/react';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { avatarImage } from '../Avatar/Avatar.fixtures';
import { Select, type SelectIndicator, type SelectItem, type SelectSize, type SelectVariant } from './Select';
import { FlagUnitedStates } from './Select.fixtures';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=104-37';

const variants: SelectVariant[] = ['default', 'shadow', 'soft'];
const sizes: SelectSize[] = ['xl', 'lg', 'default', 'sm'];

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
        component: `Implements the Sort UI 2.0 component sets **Select**, **Select Item**, **Select Label**, **Select Separator** and **Select Content** ([open in Figma](${FIGMA_URL})), with the **Checkbox** and **Radio** components for \`indicator\`. \`size\` is Figma Size: \`xl\` (40 px), \`lg\` (36 px), \`default\` (32 px), \`sm\` (28 px), the same heights as Button's and Input's sizes of the same name. Focus is the focused trigger, Invalid is \`error\`, Disabled is \`disabled\`. Sort UI 2.0 has a single field style: \`default\` is it, \`shadow\` adds Shadow/xs and \`soft\` is a borderless tinted field. Multi-select, tags, avatars and flags, captions, badges, notes and descriptions keep working as before, in the 2.0 look. Keyboard: arrows, Home/End, PageUp/PageDown, Enter/Space, Escape, Tab and type-ahead, as in the WAI-ARIA select-only combobox.`,
      },
    },
  },
} satisfies Meta;

// Room below for the open menu, which overlays the page.
const single = [(Story: () => ReactNode) => <div style={{ width: 320, paddingBottom: 320 }}>{Story()}</div>];

export default meta;

type ItemType = 'Default' | 'Default Large' | 'Avatar' | 'Country Flag';

// Figma Type=Avatar: Simon Alt has a picture, the others one initial (Figma shows one letter up to size md).
const personAvatar = (name: string, i: number) => <Avatar size="xs" shape="square" src={i === 1 ? avatarImage : undefined} initials={name[0]} />;

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
  multiple: boolean;
  tags: boolean;
  tagsOverflow: 'wrap' | 'count';
  indicator: SelectIndicator;
  itemType: ItemType;
  itemIcon: boolean;
  itemSupporterText: boolean;
  itemBadge: boolean;
  disabledItem: boolean;
  groups: boolean;
  divider: boolean;
  menuCaption: string;
};

const people = [
  ['Alex Jhonson', 'Designer'],
  ['Simon Alt', 'Engineer'],
  ['Emma Thompson', 'Product manager'],
  ['Michael Davis', 'Engineer'],
  ['Kate Roberts', 'Designer'],
  ['Ryan Parker', 'Engineer'],
  ['Lily Chen', 'Researcher'],
] as const;

/** Builds the menu from the Playground's item controls. */
function playgroundItems(args: PlaygroundArgs): SelectItem[] {
  const options = people.map(([name, role], i) => ({
    value: name.toLowerCase().replace(' ', '-'),
    label: name,
    icon: args.itemType === 'Default Large' || (args.itemType === 'Default' && args.itemIcon) ? <RiUser3Line /> : undefined,
    media: args.itemType === 'Country Flag' ? <FlagUnitedStates /> : args.itemType === 'Avatar' ? personAvatar(name, i) : undefined,
    description: args.itemType === 'Default Large' ? role : undefined,
    caption: args.itemSupporterText && args.itemType !== 'Default Large' ? role : undefined,
    badge: args.itemBadge && i === 1 ? 'Admin' : undefined,
    disabled: args.disabledItem && i === 3,
  }));
  const items: SelectItem[] = args.groups
    ? [
        { label: 'Design', caption: '3', options: options.slice(0, 3) },
        ...(args.divider ? [{ type: 'separator' } as const] : []),
        { label: 'Engineering', caption: '4', options: options.slice(3) },
      ]
    : args.divider
      ? [...options.slice(0, 3), { type: 'separator' }, ...options.slice(3)]
      : options;
  return args.menuCaption ? [{ type: 'caption', label: args.menuCaption }, ...items] : items;
}

export const Playground: StoryObj<PlaygroundArgs> = {
  args: {
    label: 'Label',
    caption: 'Caption text',
    error: '',
    placeholder: 'Select a user',
    variant: 'default',
    size: 'default',
    disabled: false,
    leadIcon: true,
    tailIcon: true,
    multiple: false,
    tags: false,
    tagsOverflow: 'wrap',
    indicator: 'check',
    itemType: 'Default',
    itemIcon: false,
    itemSupporterText: false,
    itemBadge: false,
    disabledItem: false,
    groups: false,
    divider: false,
    menuCaption: '',
  },
  decorators: single,
  argTypes: {
    variant: { control: 'inline-radio', options: variants, table: { category: 'Field' } },
    size: { control: 'inline-radio', options: sizes, table: { category: 'Field' } },
    label: { table: { category: 'Field' } },
    caption: { table: { category: 'Field' } },
    error: { description: 'Figma State=Invalid', table: { category: 'Field' } },
    placeholder: { table: { category: 'Field' } },
    disabled: { description: 'Figma State=Disabled', table: { category: 'Field' } },
    leadIcon: { table: { category: 'Field' } },
    tailIcon: { table: { category: 'Field' } },
    multiple: { description: 'Pick several options', table: { category: 'Field' } },
    tags: { description: 'Values as removable badges (× or Backspace)', if: { arg: 'multiple' }, table: { category: 'Field' } },
    tagsOverflow: { control: 'inline-radio', options: ['wrap', 'count'], description: 'Tags that do not fit: wrap onto more rows, or one row and "+N"', if: { arg: 'tags' }, table: { category: 'Field' } },
    indicator: { control: 'inline-radio', options: ['check', 'checkbox', 'radio'], description: 'Check mark (Select Item), Checkbox or Radio', table: { category: 'Menu items' } },
    itemType: { control: 'inline-radio', options: ['Default', 'Default Large', 'Avatar', 'Country Flag'], description: 'Item content: plain, with a description, with an avatar (also shown in the field) or a flag', table: { category: 'Menu items' } },
    // Only plain items take the icon control; items with a description always show one, flags and avatars show their picture.
    itemIcon: { name: 'Lead Icon', description: 'Figma "Leading icon" (plain items only)', if: { arg: 'itemType', eq: 'Default' }, table: { category: 'Menu items' } },
    // Items with a description show the role as their second line instead.
    itemSupporterText: { name: 'Supporter text', description: 'Muted text after the label', if: { arg: 'itemType', neq: 'Default Large' }, table: { category: 'Menu items' } },
    itemBadge: { name: 'Badge', description: 'A Badge on the second option', table: { category: 'Menu items' } },
    disabledItem: { name: 'Disabled option', description: 'Select Item State=Disabled (on the fourth option)', table: { category: 'Menu items' } },
    groups: { name: 'Group labels', description: 'Figma Select Label', table: { category: 'Menu items' } },
    divider: { name: 'Divider', description: 'Figma Select Separator', table: { category: 'Menu items' } },
    menuCaption: { name: 'Caption note', description: 'A note at the top of the menu', table: { category: 'Menu items' } },
  },
  render: function Render(args) {
    const [value, setValue] = useState<string | null>(null);
    const [values, setValues] = useState<string[]>([]);
    const common = {
      label: args.label,
      caption: args.caption,
      placeholder: args.placeholder,
      variant: args.variant,
      size: args.size,
      disabled: args.disabled,
      indicator: args.indicator,
      options: playgroundItems(args),
      error: args.error || undefined,
      leadIcon: args.leadIcon ? <RiUser3Line /> : undefined,
      tailIcon: args.tailIcon ? <RiInformationFill /> : undefined,
    };
    return args.multiple ? <Select {...common} multiple tags={args.tags} tagsOverflow={args.tagsOverflow} value={values} onValueChange={setValues} /> : <Select {...common} value={value} onValueChange={setValue} />;
  },
};

type MenuItemArgs = {
  type: 'Default' | 'Default Large' | 'Avatar' | 'Country Flag' | 'Label' | 'Caption' | 'Divider';
  selectType: 'Default' | 'Checkbox' | 'Radio Button';
  state: 'Default' | 'Disabled';
  active: boolean;
  leadIcon: boolean;
  label: string;
  supporterText: boolean;
  supporterTextValue: string;
  badge: boolean;
  badgeText: string;
  caption: string;
};

/**
 * One item with its properties as controls, shown in an open menu between two plain options. Hover it for
 * Select Item State=Highlighted.
 */
export const MenuItem: StoryObj<MenuItemArgs> = {
  args: {
    type: 'Default',
    selectType: 'Default',
    state: 'Default',
    active: false,
    leadIcon: true,
    label: 'Select item',
    supporterText: true,
    supporterTextValue: 'Caption',
    badge: true,
    badgeText: 'Label',
    caption: 'The quick brown fox jumps over a lazy dog.',
  },
  argTypes: {
    type: { name: 'Type', control: 'select', options: ['Default', 'Default Large', 'Avatar', 'Country Flag', 'Label', 'Caption', 'Divider'] },
    selectType: { name: 'Select type', control: 'inline-radio', options: ['Default', 'Checkbox', 'Radio Button'] },
    state: { name: 'State', control: 'inline-radio', options: ['Default', 'Disabled'], description: 'Hover the item for State=Highlighted' },
    active: { name: 'Active', description: 'Selected' },
    leadIcon: { name: 'Lead Icon', description: 'Type=Default only', if: { arg: 'type', eq: 'Default' } },
    label: { name: '↩ Label' },
    supporterText: { name: 'Supporter text' },
    supporterTextValue: { name: '↩ Supporter text' },
    badge: { name: 'Badge' },
    badgeText: { name: '↩ badge' },
    caption: { name: '↩ Caption', description: 'Second line of Default Large, text of Type=Caption' },
  },
  decorators: single,
  render: (a) => {
    const item = {
      value: 'item',
      label: a.label,
      icon: a.type === 'Default Large' || (a.type === 'Default' && a.leadIcon) ? <RiGlobalLine /> : undefined,
      media: a.type === 'Country Flag' ? <FlagUnitedStates /> : a.type === 'Avatar' ? <Avatar size="xs" shape="square" initials="S" /> : undefined,
      description: a.type === 'Default Large' ? a.caption : undefined,
      caption: a.supporterText && a.type !== 'Default Large' ? a.supporterTextValue : undefined,
      badge: a.badge ? a.badgeText : undefined,
      disabled: a.state === 'Disabled',
    };
    const before = { value: 'before', label: 'Alex Jhonson' };
    const after = { value: 'after', label: 'Emma Thompson' };
    const items: SelectItem[] =
      a.type === 'Label'
        ? [{ label: a.label, caption: a.supporterText ? a.supporterTextValue : undefined, options: [before, after] }]
        : a.type === 'Caption'
          ? [{ type: 'caption', label: a.caption }, before, after]
          : a.type === 'Divider'
            ? [before, { type: 'separator' }, after]
            : [before, item, after];
    const indicator = ({ Default: 'check', Checkbox: 'checkbox', 'Radio Button': 'radio' } as const)[a.selectType];
    // Remount when the selection changes so `defaultValue` applies.
    return <Select key={String(a.active)} aria-label="Menu item" options={items} indicator={indicator} defaultValue={a.active ? 'item' : null} defaultOpen />;
  },
};

const grid = (columns: number): CSSProperties => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${columns}, 280px)`,
  gap: 24,
  fontFamily: 'var(--ds-font-sans)',
  fontSize: 12,
  color: 'var(--ds-muted-foreground)',
});

const field = { options: users, placeholder: 'Select a user', leadIcon: <RiUser3Line />, tailIcon: <RiInformationFill /> };

/** Every style in the static states. Focus a select to see Focus. */
export const AllStates: StoryObj = {
  render: () => (
    <div style={grid(4)}>
      <span>Placeholder</span>
      <span>Filled</span>
      <span>Invalid</span>
      <span>Disabled</span>
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

/** Figma Size: 40, 36, 32 and 28 px, next to the Button of the same size. */
export const Sizes: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      {sizes.map((size) => (
        <div key={size} style={{ display: 'flex', gap: 8, alignItems: 'flex-end', width: 400 }}>
          <div style={{ flex: 1 }}>
            <Select {...field} size={size} label={size} />
          </div>
          <Button size={size}>Assign</Button>
        </div>
      ))}
    </div>
  ),
};

/** Multi-select: options toggle, the menu stays open and the trigger lists the selected labels. */
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

/** Each indicator and item type in an open menu: Checkbox, Radio, flags, items with a description and a note. */
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

/** Tags: each value is a removable badge. × removes it with the mouse; Backspace removes the last one; the menu toggles any. Tags that do not fit wrap (default) or, with `tagsOverflow="count"`, stay on one row with a "+N" badge (hover it for the names). */
export const Tags: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 24, width: 320 }}>
      <Select {...field} label="Reviewers" caption="Pick everyone who should approve" multiple tags defaultValue={['simon-alt', 'michael-davis']} />
      <Select {...field} label="Many reviewers · wrap" multiple tags defaultValue={['alex-jhonson', 'simon-alt', 'emma-thompson', 'michael-davis', 'kate-roberts']} />
      <Select {...field} label="Many reviewers · +N" multiple tags tagsOverflow="count" defaultValue={['alex-jhonson', 'simon-alt', 'emma-thompson', 'michael-davis', 'kate-roberts']} />
      <Select {...field} label="Disabled" multiple tags defaultValue={['simon-alt', 'michael-davis']} disabled />
    </div>
  ),
};

/** Avatars: options carry an Avatar (`media`), and the field shows the selected person's avatar instead of the lead icon. */
export const WithAvatars: StoryObj = {
  name: 'Avatar',
  render: () => {
    const people = users.map((u, i) => ('value' in u ? { ...u, media: personAvatar(u.label, i) } : u));
    return (
      <div style={{ display: 'grid', gap: 24, width: 320 }}>
        <Select {...field} options={people} label="Owner" caption="Who answers for this project" defaultValue="simon-alt" />
        <Select {...field} options={people} label="Owner (empty)" />
        <Select {...field} options={people} label="Disabled" defaultValue="emma-thompson" disabled />
      </div>
    );
  },
};

/** The open menu with every implemented item type: group label, options with icon, caption and badge, a disabled option, a divider. */
export const Menu: StoryObj = {
  decorators: single,
  render: () => <Select options={rich} label="Region" placeholder="Select a region" defaultValue="eu" defaultOpen />,
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 368px)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'grid', gap: 16, alignContent: 'start', minHeight: 600 }}>
          <div style={{ fontFamily: 'var(--ds-font-sans)', fontSize: 12, color: 'var(--ds-muted-foreground)' }}>{scheme === 'light' ? 'Light' : 'Dark'}</div>
          {variants.map((variant) => (
            <Select key={variant} {...field} variant={variant} label={variant} defaultValue="simon-alt" />
          ))}
          <Select {...field} label="Invalid" error="Error message" />
          <Select options={rich} label="Open" defaultValue="eu" defaultOpen />
        </div>
      ))}
    </div>
  ),
};
