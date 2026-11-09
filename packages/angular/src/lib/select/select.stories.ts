import type { TemplateRef } from '@angular/core';
import type { Meta, StoryObj } from '@storybook/angular';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { DsSelect, type SelectIndicator, type SelectItem, type SelectOption, type SelectSize, type SelectVariant } from './select';
import { DsButton } from '../button/button';
import { DsLeadingIcon, DsTrailingIcon } from '../slots/slots';
import { avatarImage, flagUnitedStates, remix } from '../fixtures';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=104-37';
const variants: SelectVariant[] = ['default', 'shadow', 'soft'];
const sizes: SelectSize[] = ['xl', 'lg', 'default', 'sm'];
type Picture = TemplateRef<{ $implicit: SelectOption }>;

// The pictures options use (templates get the option as context), and the field's icons.
const pictures = `
  <ng-template #globe>${remix('global')}</ng-template>
  <ng-template #rocket>${remix('rocket')}</ng-template>
  <ng-template #building>${remix('building')}</ng-template>
  <ng-template #person>${remix('user3')}</ng-template>
  <ng-template #flag>${flagUnitedStates}</ng-template>
  <ng-template #avatar let-option>
    @if (option.value === 'simon-alt') {
      <span class="ds-avatar ds-avatar--xs ds-avatar--square"><span class="ds-avatar__image"><img [src]="avatarImage" alt="" /></span></span>
    } @else {
      <span class="ds-avatar ds-avatar--xs ds-avatar--square ds-avatar--fallback"><span class="ds-avatar__image"><span class="ds-avatar__initials" aria-hidden="true">{{ option.label[0] }}</span></span></span>
    }
  </ng-template>`;
const icons = remix('user3', 'dsLeadingIcon') + remix('informationFill', 'dsTrailingIcon');

// Sample data from the Figma file.
const users: SelectItem[] = ['Alex Jhonson', 'Simon Alt', 'Emma Thompson', 'Michael Davis', 'Kate Roberts', 'Ryan Parker', 'Lily Chen'].map((name) => ({
  value: name.toLowerCase().replace(' ', '-'),
  label: name,
}));
const people = [
  ['Alex Jhonson', 'Designer'],
  ['Simon Alt', 'Engineer'],
  ['Emma Thompson', 'Product manager'],
  ['Michael Davis', 'Engineer'],
  ['Kate Roberts', 'Designer'],
  ['Ryan Parker', 'Engineer'],
  ['Lily Chen', 'Researcher'],
] as const;

const rich = (globe: Picture): SelectItem[] => [
  {
    label: 'Regions',
    caption: '3',
    options: [
      { value: 'eu', label: 'Europe', icon: globe, caption: 'EU', badge: 'Default' },
      { value: 'us', label: 'North America', icon: globe, caption: 'US' },
      { value: 'apac', label: 'Asia Pacific', icon: globe, caption: 'APAC', disabled: true },
    ],
  },
  { type: 'separator' },
  { value: 'global', label: 'Global', icon: globe },
];
const plans = (rocket: Picture, person: Picture, building: Picture): SelectItem[] => [
  { type: 'caption', label: 'Billed yearly. You can change the plan at any time.' },
  { value: 'starter', label: 'Starter', description: 'For individuals', icon: rocket },
  { value: 'team', label: 'Team', description: 'Up to 20 people', icon: person, badge: 'Popular' },
  { value: 'enterprise', label: 'Enterprise', description: 'Contact sales', icon: building, disabled: true },
];
const countries = (flag: Picture): SelectItem[] => [
  { value: 'us', label: 'United States', caption: 'USD', media: flag },
  { value: 'us-east', label: 'US East region', caption: 'Virginia', media: flag },
  { value: 'us-west', label: 'US West region', caption: 'Oregon', media: flag, disabled: true },
];
const withAvatars = (avatar: Picture): SelectItem[] => users.map((u) => ({ ...(u as SelectOption), media: avatar }));

// Built once per set of templates, so the options keep their identity between change detections.
const memo = <A extends unknown[], R>(build: (...args: A) => R) => {
  let last: { args: A; result: R } | undefined;
  return (...args: A) => {
    if (!last || args.some((a, i) => a !== last!.args[i])) last = { args, result: build(...args) };
    return last.result;
  };
};

const meta = {
  title: 'Components/Select',
  decorators: [moduleMetadata({ imports: [DsSelect, DsButton, DsLeadingIcon, DsTrailingIcon] })],
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 component sets **Select**, **Select Item**, **Select Label**, **Select Separator** and **Select Content** ([open in Figma](${FIGMA_URL})) for Angular: \`<ds-select>\` renders the React Select's markup, with list navigation and type-ahead from ds-core. The options are data (\`[options]\`); their pictures (\`icon\`, \`media\`) are \`<ng-template>\`s that get the option as context. The value is \`[(value)]\` (a list with \`multiple\`); it works with Signal Forms (\`[formField]\`), Reactive Forms and \`ngModel\`. \`size\` is Figma Size (\`xl\` 40 px, \`lg\` 36 px, \`default\` 32 px, \`sm\` 28 px); the field's icons are projected with \`dsLeadingIcon\` / \`dsTrailingIcon\`. Keyboard: arrows, Home/End, PageUp/PageDown, Enter/Space, Escape, Tab and type-ahead, as in the WAI-ARIA select-only combobox.`,
      },
    },
  },
} satisfies Meta;

export default meta;

// Room below for the open menu, which overlays the page.
const single = componentWrapperDecorator((story) => `<div style="width: 320px; padding-bottom: 320px;">${story}</div>`);

type ItemType = 'Default' | 'Default Large' | 'Avatar' | 'Country Flag';
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

/** Builds the menu from the Playground's item controls (as the React story does). */
const playgroundItems = memo((args: PlaygroundArgs, person: Picture, flag: Picture, avatar: Picture): SelectItem[] => {
  const options = people.map(([name, role], i) => ({
    value: name.toLowerCase().replace(' ', '-'),
    label: name,
    icon: args.itemType === 'Default Large' || (args.itemType === 'Default' && args.itemIcon) ? person : undefined,
    media: args.itemType === 'Country Flag' ? flag : args.itemType === 'Avatar' ? avatar : undefined,
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
});

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
  decorators: [single],
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
    itemIcon: { name: 'Lead Icon', description: 'Figma "Leading icon" (plain items only)', if: { arg: 'itemType', eq: 'Default' }, table: { category: 'Menu items' } },
    itemSupporterText: { name: 'Supporter text', description: 'Muted text after the label', if: { arg: 'itemType', neq: 'Default Large' }, table: { category: 'Menu items' } },
    itemBadge: { name: 'Badge', description: 'A Badge on the second option', table: { category: 'Menu items' } },
    disabledItem: { name: 'Disabled option', description: 'Select Item State=Disabled (on the fourth option)', table: { category: 'Menu items' } },
    groups: { name: 'Group labels', description: 'Figma Select Label', table: { category: 'Menu items' } },
    divider: { name: 'Divider', description: 'Figma Select Separator', table: { category: 'Menu items' } },
    menuCaption: { name: 'Caption note', description: 'A note at the top of the menu', table: { category: 'Menu items' } },
  },
  render: (args) => ({
    props: { args, ...args, items: playgroundItems, avatarImage, value: null, values: [] },
    template: `${pictures}
      @if (multiple) {
        <ds-select [label]="label" [caption]="caption" [placeholder]="placeholder" [variant]="variant" [size]="size" [disabled]="disabled" [indicator]="indicator"
          [options]="items(args, person, flag, avatar)" [error]="error || undefined" multiple [tags]="tags" [tagsOverflow]="tagsOverflow" [(value)]="values">
          @if (leadIcon) { ${remix('user3', 'dsLeadingIcon')} } @if (tailIcon) { ${remix('informationFill', 'dsTrailingIcon')} }
        </ds-select>
      } @else {
        <ds-select [label]="label" [caption]="caption" [placeholder]="placeholder" [variant]="variant" [size]="size" [disabled]="disabled" [indicator]="indicator"
          [options]="items(args, person, flag, avatar)" [error]="error || undefined" [(value)]="value">
          @if (leadIcon) { ${remix('user3', 'dsLeadingIcon')} } @if (tailIcon) { ${remix('informationFill', 'dsTrailingIcon')} }
        </ds-select>
      }`,
  }),
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

const menuItems = memo((a: MenuItemArgs, globe: Picture, flag: Picture, avatar: Picture): SelectItem[] => {
  const item: SelectOption = {
    value: 'item',
    label: a.label,
    icon: a.type === 'Default Large' || (a.type === 'Default' && a.leadIcon) ? globe : undefined,
    media: a.type === 'Country Flag' ? flag : a.type === 'Avatar' ? avatar : undefined,
    description: a.type === 'Default Large' ? a.caption : undefined,
    caption: a.supporterText && a.type !== 'Default Large' ? a.supporterTextValue : undefined,
    badge: a.badge ? a.badgeText : undefined,
    disabled: a.state === 'Disabled',
  };
  const before = { value: 'before', label: 'Alex Jhonson' };
  const after = { value: 'after', label: 'Emma Thompson' };
  return a.type === 'Label'
    ? [{ label: a.label, caption: a.supporterText ? a.supporterTextValue : undefined, options: [before, after] }]
    : a.type === 'Caption'
      ? [{ type: 'caption', label: a.caption }, before, after]
      : a.type === 'Divider'
        ? [before, { type: 'separator' }, after]
        : [before, item, after];
});

/** One item with its properties as controls, shown in an open menu between two plain options. Hover it for Select Item State=Highlighted. */
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
  decorators: [single],
  render: (a) => ({
    props: { a, items: menuItems, avatarImage, indicator: ({ Default: 'check', Checkbox: 'checkbox', 'Radio Button': 'radio' } as const)[a.selectType] },
    template: `${pictures}<ds-select aria-label="Menu item" [options]="items(a, globe, flag, avatar)" [indicator]="indicator" [value]="a.active ? 'item' : null" [open]="true" />`,
  }),
};

const grid = (columns: number) =>
  `display: grid; grid-template-columns: repeat(${columns}, 280px); gap: 24px; font-family: var(--ds-font-sans); font-size: 12px; color: var(--ds-muted-foreground);`;

/** Every style in the static states. Focus a select to see Focus. */
export const AllStates: StoryObj = {
  render: () => ({
    props: { variants, users },
    template: `<div style="${grid(4)}">
      <span>Placeholder</span><span>Filled</span><span>Invalid</span><span>Disabled</span>
      @for (variant of variants; track variant) {
        <div style="display: contents;">
          <ds-select [options]="users" placeholder="Select a user" [variant]="variant" [label]="variant" caption="Caption text">${icons}</ds-select>
          <ds-select [options]="users" placeholder="Select a user" [variant]="variant" [label]="variant" caption="Caption text" value="simon-alt">${icons}</ds-select>
          <ds-select [options]="users" placeholder="Select a user" [variant]="variant" [label]="variant" error="Error message">${icons}</ds-select>
          <ds-select [options]="users" placeholder="Select a user" [variant]="variant" [label]="variant" caption="Caption text" disabled>${icons}</ds-select>
        </div>
      }
    </div>`,
  }),
};

/** Figma Size: 40, 36, 32 and 28 px, next to the Button of the same size. */
export const Sizes: StoryObj = {
  render: () => ({
    props: { sizes, users },
    template: `<div style="display: grid; gap: 16px;">
      @for (size of sizes; track size) {
        <div style="display: flex; gap: 8px; align-items: flex-end; width: 400px;">
          <div style="flex: 1 1 0%;"><ds-select [options]="users" placeholder="Select a user" [size]="size" [label]="size">${icons}</ds-select></div>
          <button dsButton [size]="size">Assign</button>
        </div>
      }
    </div>`,
  }),
};

/** Each indicator and item type in an open menu: Checkbox, Radio, flags, items with a description and a note. */
export const MenuItemTypes: StoryObj = {
  render: () => ({
    props: { users, countries: memo(countries), plans: memo(plans) },
    template: `${pictures}<div style="display: grid; gap: 24px; grid-template-columns: repeat(4, 280px); padding-bottom: 260px; align-items: start;">
      <ds-select [options]="users" label="Checkbox" indicator="checkbox" multiple [value]="['simon-alt', 'emma-thompson']" [open]="true" />
      <ds-select [options]="users" label="Radio Button" indicator="radio" value="simon-alt" [open]="true" />
      <ds-select [options]="countries(flag)" label="Country Flag" value="us" [open]="true" />
      <ds-select [options]="plans(rocket, person, building)" label="Default Large" value="team" [open]="true" />
    </div>`,
  }),
};

export const MultiSelect: StoryObj = {
  decorators: [single],
  render: () => ({
    props: { users },
    template: `<ds-select [options]="users" placeholder="Select a user" label="Reviewers" caption="Pick everyone who should approve" multiple [value]="['simon-alt', 'michael-davis', 'ryan-parker']">${icons}</ds-select>`,
  }),
};

/** Tags: each value is a removable badge. × removes it with the mouse; Backspace removes the last one; the menu toggles any. Tags that do not fit wrap (default) or, with `tagsOverflow="count"`, stay on one row with a "+N" badge. */
export const Tags: StoryObj = {
  render: () => ({
    props: { users, many: ['alex-jhonson', 'simon-alt', 'emma-thompson', 'michael-davis', 'kate-roberts'] },
    template: `<div style="display: grid; gap: 24px; width: 320px;">
      <ds-select [options]="users" placeholder="Select a user" label="Reviewers" caption="Pick everyone who should approve" multiple tags [value]="['simon-alt', 'michael-davis']">${icons}</ds-select>
      <ds-select [options]="users" placeholder="Select a user" label="Many reviewers · wrap" multiple tags [value]="many">${icons}</ds-select>
      <ds-select [options]="users" placeholder="Select a user" label="Many reviewers · +N" multiple tags tagsOverflow="count" [value]="many">${icons}</ds-select>
      <ds-select [options]="users" placeholder="Select a user" label="Disabled" multiple tags [value]="['simon-alt', 'michael-davis']" disabled>${icons}</ds-select>
    </div>`,
  }),
};

/** Avatars: options carry an avatar (`media`), and the field shows the selected person's avatar instead of the lead icon. */
export const WithAvatars: StoryObj = {
  name: 'Avatar',
  render: () => ({
    props: { people: memo(withAvatars), avatarImage },
    template: `${pictures}<div style="display: grid; gap: 24px; width: 320px;">
      <ds-select [options]="people(avatar)" placeholder="Select a user" label="Owner" caption="Who answers for this project" value="simon-alt">${icons}</ds-select>
      <ds-select [options]="people(avatar)" placeholder="Select a user" label="Owner (empty)">${icons}</ds-select>
      <ds-select [options]="people(avatar)" placeholder="Select a user" label="Disabled" value="emma-thompson" disabled>${icons}</ds-select>
    </div>`,
  }),
};

/** The open menu with every implemented item type: group label, options with icon, caption and badge, a disabled option, a divider. */
export const Menu: StoryObj = {
  decorators: [single],
  render: () => ({
    props: { rich: memo(rich) },
    template: `${pictures}<ds-select [options]="rich(globe)" label="Region" placeholder="Select a region" value="eu" [open]="true" />`,
  }),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => ({
    props: { variants, users, rich: memo(rich), schemes: ['light', 'dark'] },
    template: `${pictures}<div style="display: grid; grid-template-columns: repeat(2, 368px);">
      @for (scheme of schemes; track scheme) {
        <div data-ds-brand="theme-1" [attr.data-ds-scheme]="scheme" style="background: var(--ds-background); padding: 24px; display: grid; gap: 16px; align-content: start; min-height: 600px;">
          <div style="font-family: var(--ds-font-sans); font-size: 12px; color: var(--ds-muted-foreground);">{{ scheme === 'light' ? 'Light' : 'Dark' }}</div>
          @for (variant of variants; track variant) {
            <ds-select [options]="users" placeholder="Select a user" [variant]="variant" [label]="variant" value="simon-alt">${icons}</ds-select>
          }
          <ds-select [options]="users" placeholder="Select a user" label="Invalid" error="Error message">${icons}</ds-select>
          <ds-select [options]="rich(globe)" label="Open" value="eu" [open]="true" />
        </div>
      }
    </div>`,
  }),
};
