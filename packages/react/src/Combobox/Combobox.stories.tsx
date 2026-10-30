import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import type { SelectItem } from '../Select';
import { Combobox, type ComboboxSize, type ComboboxVariant } from './Combobox';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=111-2';

const meta = {
  title: 'Components/Combobox',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Combobox** ([open in Figma](${FIGMA_URL})): \`size\` (\`default\` · \`lg\` · \`xl\`), \`placeholder\`, \`leadIcon\`, \`leadMedia\`, \`multiple\` (Figma Chips), \`error\` and \`disabled\`, with the Select's options, groups and separators, and \`emptyMessage\` (Figma Combobox Empty). Typing filters the list; arrows move, Enter picks, Escape closes; with \`multiple\`, Backspace removes the last chip.`,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: 320 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

export default meta;

const frameworks: SelectItem[] = ['Astro', 'SvelteKit', 'Nuxt.js', 'Next.js', 'React', 'Remix'].map((label) => ({ value: label.toLowerCase().replace(/\W/g, ''), label }));

const timezones: SelectItem[] = [
  {
    label: 'Americas',
    options: [
      ['ny', '(GMT-5) New York'],
      ['la', '(GMT-8) Los Angeles'],
      ['chi', '(GMT-6) Chicago'],
      ['tor', '(GMT-5) Toronto'],
      ['sp', '(GMT-3) São Paulo'],
    ].map(([value, label]) => ({ value, label })),
  },
  { type: 'separator' },
  {
    label: 'Europe',
    options: [
      ['lon', '(GMT+0) London'],
      ['par', '(GMT+1) Paris'],
      ['ber', '(GMT+1) Berlin'],
    ].map(([value, label]) => ({ value, label })),
  },
];

const cities: SelectItem[] = [
  {
    label: 'Americas',
    options: [
      ['ny', 'New York', 'GMT-5 United States'],
      ['la', 'Los Angeles', 'GMT-8 United States'],
      ['chi', 'Chicago', 'GMT-6 United States'],
      ['tor', 'Toronto', 'GMT-5 United States'],
      ['sp', 'São Paulo', 'GMT-3 Brazil'],
    ].map(([value, label, description]) => ({ value, label, description })),
  },
  { type: 'separator' },
  {
    label: 'Europe',
    options: [
      ['lon', 'London', 'GMT+0 United Kingdom'],
      ['par', 'Paris', 'GMT+1 France'],
      ['ber', 'Berlin', 'GMT+1 Germany'],
    ].map(([value, label, description]) => ({ value, label, description })),
  },
];

const people = ['Mira Okafor', 'Jonas Lindqvist', 'Priya Raman', 'Tomás Herrera', 'Aiko Tanaka'].map((label) => ({ value: label.split(' ')[0].toLowerCase(), label }));

const searchIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.875} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="m21 21-4.34-4.34" />
    <circle cx="11" cy="11" r="8" />
  </svg>
);

const box = (children: ReactNode) => <div style={{ width: 280 }}>{children}</div>;

type PlaygroundArgs = { variant: ComboboxVariant; size: ComboboxSize; multiple: boolean; leadIcon: boolean; invalid: boolean; disabled: boolean; placeholder: string };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { variant: 'default', size: 'default', multiple: false, leadIcon: false, invalid: false, disabled: false, placeholder: 'Select a framework' },
  argTypes: {
    variant: { name: 'Style', control: 'inline-radio', options: ['default', 'shadow', 'soft'], description: 'As Input and Select' },
    size: { name: 'Size', control: 'inline-radio', options: ['default', 'lg', 'xl'] },
    multiple: { name: 'Chips (multiple)' },
    leadIcon: { name: 'Leading icon' },
    invalid: { name: 'Invalid' },
    disabled: { name: 'Disabled' },
    placeholder: { name: 'Placeholder' },
  },
  render: ({ variant, size, multiple, leadIcon, invalid, disabled, placeholder }) =>
    box(
      multiple ? (
        <Combobox key="multiple" multiple label="Frameworks" options={frameworks} variant={variant} size={size} leadIcon={leadIcon ? searchIcon : undefined} error={invalid ? 'Pick at least one framework.' : undefined} disabled={disabled} placeholder={placeholder} />
      ) : (
        <Combobox key="single" label="Framework" options={frameworks} variant={variant} size={size} leadIcon={leadIcon ? searchIcon : undefined} error={invalid ? 'Pick a framework.' : undefined} disabled={disabled} placeholder={placeholder} />
      ),
    ),
};

/** Figma demo "Combobox": in a form, with a label and a caption. */
export const InAForm: StoryObj = {
  render: () => (
    <form style={{ display: 'grid', gap: 16, width: 360 }} onSubmit={(event) => event.preventDefault()}>
      <div style={{ display: 'grid', gap: 4 }}>
        <strong style={{ fontWeight: 500, fontSize: 16 }}>Transfer ownership</strong>
        <span style={{ color: 'var(--ds-muted-foreground)', fontSize: 14 }}>The new owner can manage billing and members.</span>
      </div>
      <Combobox label="New owner" name="owner" options={people} leadIcon={searchIcon} placeholder="Search teammates" caption="You keep editor access after the transfer." />
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
        <Button variant="outline">Cancel</Button>
        <Button type="submit">Transfer</Button>
      </div>
    </form>
  ),
};

/** Figma demo "Sizes": default, lg and xl. */
export const Sizes: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 12, width: 280 }}>
      {(['default', 'lg', 'xl'] as const).map((size, i) => (
        <Combobox key={size} aria-label={`Teammate (${size})`} size={size} options={people} defaultValue={people[i].value} />
      ))}
    </div>
  ),
};

/** Figma demo "Single selection": the list opens on click, typing or ↓; the selected option has a check mark. */
export const SingleSelection: StoryObj = {
  render: () => box(<Combobox aria-label="Framework" options={frameworks} defaultValue="nextjs" placeholder="Select a framework" />),
};

/** Figma demo "Multiple selection": values are chips; × or Backspace removes them. */
export const MultipleSelection: StoryObj = {
  render: () => box(<Combobox multiple aria-label="Frameworks" options={frameworks} defaultValue={['sveltekit', 'nextjs']} placeholder="Select frameworks" />),
};

/** Figma demo "Groups": Select Labels and a separator; empty groups go as you type. */
export const Groups: StoryObj = {
  render: () => box(<Combobox aria-label="Timezone" options={timezones} placeholder="Select a timezone" />),
};

/** Figma demo "With description": options on two lines. */
export const WithDescription: StoryObj = {
  render: () => box(<Combobox aria-label="City" options={cities} placeholder="Select a city" />),
};

/** Figma "Leading slot": the selected person's avatar before the text. */
export const LeadingSlot: StoryObj = {
  render: () => box(<Combobox aria-label="Assignee" options={people} defaultValue="mira" leadMedia={<Avatar size="xs" initials="MO" />} />),
};

/** Figma State: Default, Focus (click it), Disabled and Invalid, with Placeholder and Filled. */
export const States: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 280px)', gap: 16 }}>
      <Combobox aria-label="Placeholder" options={frameworks} placeholder="Select…" />
      <Combobox aria-label="Filled" options={frameworks} defaultValue="nextjs" />
      <Combobox aria-label="Disabled placeholder" options={frameworks} placeholder="Select…" disabled />
      <Combobox aria-label="Disabled filled" options={frameworks} defaultValue="nextjs" disabled />
      <Combobox aria-label="Invalid placeholder" options={frameworks} placeholder="Select…" error="Pick a framework." />
      <Combobox aria-label="Invalid filled" options={frameworks} defaultValue="nextjs" error="Next.js is not available on this plan." />
    </div>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'grid', gap: 12, alignContent: 'start', minHeight: 360 }}>
          <Combobox aria-label={`Framework ${scheme}`} options={frameworks} defaultValue="nextjs" />
          <Combobox multiple aria-label={`Frameworks ${scheme}`} options={frameworks} defaultValue={['sveltekit', 'nextjs']} />
          <Combobox aria-label={`Timezone ${scheme}`} options={timezones} placeholder="Select a timezone" leadIcon={searchIcon} defaultOpen />
        </div>
      ))}
    </div>
  ),
};

/** Style, as Input and Select: default (the Sort UI 2.0 field), shadow (+ Shadow/xs) and soft (borderless, tinted). */
export const Styles: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 240px)', gap: 16 }}>
      {(['default', 'shadow', 'soft'] as const).map((variant) => (
        <Combobox key={variant} variant={variant} label={variant} caption="Caption text" options={frameworks} placeholder="Select a framework" />
      ))}
    </div>
  ),
};
