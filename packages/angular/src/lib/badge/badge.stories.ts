import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsBadge, type BadgeColor, type BadgeShape, type BadgeSize, type BadgeVariant } from './badge';
import { DsIcon, DsImage } from '../slots/slots';
import { badgeImage, userIcon } from '../fixtures';

const FIGMA_URL = 'https://www.figma.com/design/4tiBR2hKd4yvQehtKhM9OY?node-id=3994-37188';
const colors: BadgeColor[] = ['neutral', 'red', 'orange', 'lime', 'green', 'cyan', 'blue', 'violet', 'fuchsia', 'pink'];
const variants: BadgeVariant[] = ['soft', 'strong'];
const grid = (columns: number) =>
  `display: grid; grid-template-columns: 140px repeat(${columns}, auto); gap: 12px; place-items: center start; font-family: var(--ds-font-sans); font-size: 12px; color: var(--ds-muted-foreground)`;
const icon = userIcon('dsIcon');
const image = `<img dsImage [src]="badgeImage" alt="" />`;

type PlaygroundArgs = { label: string; variant: BadgeVariant; size: BadgeSize; color: BadgeColor; shape: BadgeShape; border: boolean; lead: 'none' | 'icon' | 'dot' | 'image'; closeIcon: boolean };

const meta = {
  title: 'Components/Badge',
  decorators: [moduleMetadata({ imports: [DsBadge, DsIcon, DsImage] })],
  parameters: {
    docs: {
      description: {
        component: `Implements the Figma component set **Badge** ([open in Figma](${FIGMA_URL})) for Angular: \`<span dsBadge>\` with the same markup and \`ds-badge\` classes as the React Badge. Figma "Style" → \`variant\`, "Size", "Color", "Shape", "Border" → \`size\`, \`color\`, \`shape\`, \`border\`; Variant=Icon / Image → an icon marked \`dsIcon\` / an \`<img dsImage>\`, Variant=Dot → \`dot\`; "Close Icon" → \`removable\` and the \`(remove)\` output (a button named "Remove <label>").`,
      },
    },
  },
} satisfies Meta;

export default meta;

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { label: 'Label', variant: 'soft', size: 'sm', color: 'neutral', shape: 'rounded', border: true, lead: 'none', closeIcon: false },
  argTypes: {
    label: { name: '↩ Label' },
    variant: { name: 'Style', control: 'inline-radio', options: variants },
    size: { name: 'Size', control: 'inline-radio', options: ['sm', 'lg'] },
    color: { name: 'Color', control: 'select', options: colors },
    shape: { name: 'Shape', control: 'inline-radio', options: ['rounded', 'pill'] },
    border: { name: 'Border', description: 'Soft badges only' },
    lead: { name: 'Variant', control: 'inline-radio', options: ['none', 'icon', 'dot', 'image'], description: 'Figma Variant: Default (none), Icon, Dot, Image' },
    closeIcon: { name: 'Close Icon' },
  },
  render: (args) => ({
    props: { ...args, badgeImage, removed: false },
    template: `@if (removed) { <button (click)="removed = false">Show the badge again</button> } @else {
      <span dsBadge [variant]="variant" [size]="size" [color]="color" [shape]="shape" [border]="border" [dot]="lead === 'dot'" [removable]="closeIcon" (remove)="removed = true">
        @if (lead === 'icon') { ${icon} } @if (lead === 'image') { ${image} }{{ label }}
      </span>
    }`,
  }),
};

/** Every Figma Color in Soft (with and without Border) and Strong, with and without the Close Icon. */
export const Colors: StoryObj = {
  render: () => ({
    props: {
      colors,
      rows: [
        { title: 'Soft', variant: 'soft', border: false, shape: 'rounded', removable: false },
        { title: 'Soft + Border', variant: 'soft', border: true, shape: 'rounded', removable: false },
        { title: 'Strong', variant: 'strong', border: false, shape: 'rounded', removable: false },
        { title: 'Soft + Close Icon', variant: 'soft', border: false, shape: 'rounded', removable: true },
        { title: 'Strong + Close Icon', variant: 'strong', border: false, shape: 'rounded', removable: true },
        { title: 'Pill + Close Icon', variant: 'soft', border: false, shape: 'pill', removable: true },
      ],
    },
    template: `<div style="${grid(10)}">
      <span></span>
      @for (c of colors; track c) { <span>{{ c }}</span> }
      @for (row of rows; track row.title) {
        <div style="display: contents">
          <span>{{ row.title }}</span>
          @for (c of colors; track c) {
            <span dsBadge [color]="c" [variant]="row.variant" [border]="row.border" [shape]="row.shape" [removable]="row.removable">Label</span>
          }
        </div>
      }
    </div>`,
  }),
};

/** Figma Variant (Default, Icon, Dot, Image) and Close Icon, in both sizes and shapes. */
export const Variants: StoryObj = {
  render: () => ({
    props: { badgeImage, titles: ['Default', 'Icon', 'Dot', 'Image', 'Close Icon'], rows: ['sm', 'lg'].flatMap((size) => ['rounded', 'pill'].map((shape) => ({ size, shape }))) },
    template: `<div style="${grid(5)}">
      <span></span>
      @for (t of titles; track t) { <span>{{ t }}</span> }
      @for (row of rows; track row.size + row.shape) {
        <div style="display: contents">
        <span>{{ row.size }} · {{ row.shape }}</span>
        <span dsBadge [size]="row.size" [shape]="row.shape" color="blue">Label</span>
        <span dsBadge [size]="row.size" [shape]="row.shape" color="blue">${icon}Label</span>
        <span dsBadge [size]="row.size" [shape]="row.shape" color="blue" dot>Label</span>
        <span dsBadge [size]="row.size" [shape]="row.shape" border>${image}Label</span>
        <span dsBadge [size]="row.size" [shape]="row.shape" border removable>Label</span>
        </div>
      }
    </div>`,
  }),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => ({
    props: { colors, variants, schemes: ['light', 'dark'] },
    template: `<div style="display: grid; grid-template-columns: repeat(2, 1fr)">
      @for (scheme of schemes; track scheme) {
        <div data-ds-brand="theme-1" [attr.data-ds-scheme]="scheme" style="background: var(--ds-background); padding: 24px; display: grid; gap: 12px">
          <div style="font-family: var(--ds-font-sans); font-size: 12px; color: var(--ds-muted-foreground)">{{ scheme === 'light' ? 'Light' : 'Dark' }}</div>
          @for (variant of variants; track variant) {
            <div style="display: flex; flex-wrap: wrap; gap: 8px">
              @for (c of colors; track c) { <span dsBadge [color]="c" [variant]="variant" dot>{{ c }}</span> }
              <span dsBadge [variant]="variant" border removable>Removable</span>
            </div>
          }
        </div>
      }
    </div>`,
  }),
};
