import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type CSSProperties, type ReactNode } from 'react';
import type { ToggleSize, ToggleVariant } from '../Toggle';
import { ToggleGroup, ToggleGroupItem, type ToggleGroupOrientation, type ToggleGroupSpacing } from './ToggleGroup';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=128-1073';

const meta = {
  title: 'Components/Toggle Group',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Toggle Group** ([open in Figma](${FIGMA_URL})): Toggles in a group, \`type\` \`single\` (one on at most) or \`multiple\`, with \`value\` / \`defaultValue\` / \`onValueChange\`. Figma Variant → \`variant\`, Spacing → \`spacing\` (2 = 8 px · 1 = 4 px · 0 = joined), Orientation → \`orientation\`; \`size\` sets every item. Items are \`ToggleGroupItem\`s (\`value\`, a label or an \`icon\` with \`aria-label\`, \`disabled\`). The group is a named \`role="group"\` of \`<button aria-pressed>\`s with one Tab stop; the arrow keys, Home and End move between the items.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const icon = (children: ReactNode) => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {children}
  </svg>
);
const icons = {
  bold: icon(<path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" />),
  italic: icon(<path d="M19 4h-9M14 20H5M15 4 9 20" />),
  underline: icon(<path d="M6 4v6a6 6 0 0 0 12 0V4M4 20h16" />),
  alignLeft: icon(<path d="M15 12H3M17 18H3M21 6H3" />),
  alignCenter: icon(<path d="M17 12H7M19 18H5M21 6H3" />),
  alignRight: icon(<path d="M21 12H9M21 18H7M21 6H3" />),
  grid: icon(
    <>
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </>,
  ),
  list: icon(<path d="M3 12h.01M3 18h.01M3 6h.01M8 12h13M8 18h13M8 6h13" />),
};

const muted: CSSProperties = { fontFamily: 'var(--ds-font-sans)', fontSize: 14, lineHeight: '20px', color: 'var(--ds-muted-foreground)' };

type PlaygroundArgs = { type: 'single' | 'multiple'; variant: ToggleVariant; spacing: ToggleGroupSpacing; orientation: ToggleGroupOrientation; size: ToggleSize; disabled: boolean };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { type: 'single', variant: 'outline', spacing: 2, orientation: 'horizontal', size: 'default', disabled: false },
  argTypes: {
    type: { control: 'inline-radio', options: ['single', 'multiple'] },
    variant: { name: 'Variant', control: 'inline-radio', options: ['default', 'outline'] },
    spacing: { name: 'Spacing', control: 'inline-radio', options: [2, 1, 0] },
    orientation: { name: 'Orientation', control: 'inline-radio', options: ['horizontal', 'vertical'] },
    size: { control: 'inline-radio', options: ['sm', 'default', 'lg'] },
  },
  render: ({ type, ...args }) =>
    type === 'single' ? (
      <ToggleGroup key="single" type="single" defaultValue="ios" aria-label="Platform" {...args}>
        <ToggleGroupItem value="web">Web</ToggleGroupItem>
        <ToggleGroupItem value="ios">iOS</ToggleGroupItem>
        <ToggleGroupItem value="android">Android</ToggleGroupItem>
      </ToggleGroup>
    ) : (
      <ToggleGroup key="multiple" type="multiple" defaultValue={['ios']} aria-label="Platforms" {...args}>
        <ToggleGroupItem value="web">Web</ToggleGroupItem>
        <ToggleGroupItem value="ios">iOS</ToggleGroupItem>
        <ToggleGroupItem value="android">Android</ToggleGroupItem>
      </ToggleGroup>
    ),
};

/** Figma demo "Toggle Group": text formatting (multiple) and alignment (single), icon only. */
export const Formatting: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <ToggleGroup type="multiple" variant="outline" aria-label="Text formatting" defaultValue={['bold']}>
        <ToggleGroupItem value="bold" icon={icons.bold} aria-label="Bold" />
        <ToggleGroupItem value="italic" icon={icons.italic} aria-label="Italic" />
        <ToggleGroupItem value="underline" icon={icons.underline} aria-label="Underline" />
      </ToggleGroup>
      <ToggleGroup type="single" variant="outline" aria-label="Alignment" defaultValue="left">
        <ToggleGroupItem value="left" icon={icons.alignLeft} aria-label="Align left" />
        <ToggleGroupItem value="center" icon={icons.alignCenter} aria-label="Align center" />
        <ToggleGroupItem value="right" icon={icons.alignRight} aria-label="Align right" />
      </ToggleGroup>
    </div>
  ),
};

/** Figma demo "Variants": Default and Outline. */
export const Variants: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 12, justifyItems: 'start' }}>
      {(['default', 'outline'] as const).map((variant) => (
        <ToggleGroup key={variant} type="single" variant={variant} defaultValue="ios" aria-label={`Platform (${variant})`}>
          <ToggleGroupItem value="web">Web</ToggleGroupItem>
          <ToggleGroupItem value="ios">iOS</ToggleGroupItem>
          <ToggleGroupItem value="android">Android</ToggleGroupItem>
        </ToggleGroup>
      ))}
    </div>
  ),
};

/** Figma demo "Sizes": sm, default and lg, with labels and icons. */
export const Sizes: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 12, justifyItems: 'start' }}>
      {(['sm', 'default', 'lg'] as const).map((size) => (
        <div key={size} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <ToggleGroup type="single" variant="outline" size={size} defaultValue="week" aria-label={`Range (${size})`}>
            <ToggleGroupItem value="week">Week</ToggleGroupItem>
            <ToggleGroupItem value="month">Month</ToggleGroupItem>
            <ToggleGroupItem value="year">Year</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup type="single" variant="outline" size={size} defaultValue="grid" aria-label={`View (${size})`}>
            <ToggleGroupItem value="grid" icon={icons.grid} aria-label="Grid" />
            <ToggleGroupItem value="list" icon={icons.list} aria-label="List" />
          </ToggleGroup>
        </div>
      ))}
    </div>
  ),
};

/** Figma demo "Spacing": 2 (8 px), 1 (4 px) and 0 (joined). */
export const Spacing: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 12, justifyItems: 'start' }}>
      {([2, 1, 0] as const).map((spacing) => (
        <div key={spacing} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <span style={{ ...muted, width: 72 }}>Spacing {spacing}</span>
          <ToggleGroup type="single" variant="outline" spacing={spacing} defaultValue="month" aria-label={`Range, spacing ${spacing}`}>
            <ToggleGroupItem value="week">Week</ToggleGroupItem>
            <ToggleGroupItem value="month">Month</ToggleGroupItem>
            <ToggleGroupItem value="year">Year</ToggleGroupItem>
          </ToggleGroup>
        </div>
      ))}
    </div>
  ),
};

/** Figma demo "Disabled": the whole group, or one item. */
export const Disabled: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 12, justifyItems: 'start' }}>
      <ToggleGroup type="single" variant="outline" disabled defaultValue="css" aria-label="Format">
        <ToggleGroupItem value="css">CSS</ToggleGroupItem>
        <ToggleGroupItem value="json">JSON</ToggleGroupItem>
        <ToggleGroupItem value="swift">Swift</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" variant="outline" defaultValue="ios" aria-label="Target">
        <ToggleGroupItem value="web">Web</ToggleGroupItem>
        <ToggleGroupItem value="ios">iOS</ToggleGroupItem>
        <ToggleGroupItem value="android">Android</ToggleGroupItem>
        <ToggleGroupItem value="linux" disabled>
          Linux
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
};

/** Figma demo "Orientation": a joined vertical group. */
export const Orientation: StoryObj = {
  render: () => (
    <ToggleGroup type="single" variant="outline" spacing={0} orientation="vertical" defaultValue="tablet" aria-label="Device" style={{ width: 160 }}>
      <ToggleGroupItem value="mobile">Mobile</ToggleGroupItem>
      <ToggleGroupItem value="tablet">Tablet</ToggleGroupItem>
      <ToggleGroupItem value="desktop">Desktop</ToggleGroupItem>
    </ToggleGroup>
  ),
};

const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

/** Figma demo "Custom": font weights shown in their weight, and days of the week as a multiple choice. */
export const Custom: StoryObj = {
  render: function Render() {
    const [weight, setWeight] = useState('500');
    const [picked, setPicked] = useState(['Mo', 'We', 'Fr']);
    return (
      <div style={{ display: 'grid', gap: 16, justifyItems: 'start' }}>
        <ToggleGroup type="single" variant="outline" value={weight} onValueChange={(v) => v && setWeight(v)} aria-label="Font weight">
          {[
            ['400', 'Normal'],
            ['500', 'Medium'],
            ['700', 'Bold'],
          ].map(([value, label]) => (
            <ToggleGroupItem key={value} value={value}>
              <span aria-hidden style={{ fontWeight: Number(value) }}>
                Aa
              </span>{' '}
              <span style={{ color: 'var(--ds-muted-foreground)', fontWeight: 400 }}>{label}</span>
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        <ToggleGroup type="multiple" variant="outline" spacing={1} value={picked} onValueChange={setPicked} aria-label="Repeat on">
          {days.map((d) => (
            <ToggleGroupItem key={d} value={d}>
              {d}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        <span style={muted}>Repeats on {picked.length ? days.filter((d) => picked.includes(d)).join(', ') : 'no days'}</span>
      </div>
    );
  },
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'grid', gap: 12, justifyItems: 'start' }}>
          <ToggleGroup type="single" defaultValue="ios" aria-label={`Platform ${scheme}`}>
            <ToggleGroupItem value="web">Web</ToggleGroupItem>
            <ToggleGroupItem value="ios">iOS</ToggleGroupItem>
            <ToggleGroupItem value="android">Android</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup type="single" variant="outline" spacing={0} defaultValue="month" aria-label={`Range ${scheme}`}>
            <ToggleGroupItem value="week">Week</ToggleGroupItem>
            <ToggleGroupItem value="month">Month</ToggleGroupItem>
            <ToggleGroupItem value="year">Year</ToggleGroupItem>
          </ToggleGroup>
        </div>
      ))}
    </div>
  ),
};
