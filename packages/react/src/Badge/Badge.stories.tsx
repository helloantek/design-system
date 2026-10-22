import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type CSSProperties } from 'react';
import { RiUser3Fill } from '@remixicon/react';
import brands from '@helloantek/ds-tokens/brands.json';
import { Badge, type BadgeColor, type BadgeShape, type BadgeSize, type BadgeVariant } from './Badge';
import { badgeImage } from './Badge.fixtures';

const FIGMA_URL = 'https://www.figma.com/design/4tiBR2hKd4yvQehtKhM9OY?node-id=3994-37188';

const colors: BadgeColor[] = ['neutral', 'red', 'orange', 'lime', 'green', 'cyan', 'blue', 'violet', 'fuchsia', 'pink'];
const variants: BadgeVariant[] = ['soft', 'strong'];

const meta = {
  title: 'Components/Badge',
  parameters: {
    docs: {
      description: {
        component: `Implements the Figma component set **Badge** ([open in Figma](${FIGMA_URL})): every Variant (Default, Icon, Image, Dot), Size, Color, Shape, Border and Style, and the Close Icon. Figma "Style" → \`variant\` (Soft, Strong), "Variant" → \`icon\` · \`image\` · \`dot\`, "Close Icon" → \`onRemove\` (a button named "Remove <label>"). Border only changes Soft badges.`,
      },
    },
  },
} satisfies Meta;

export default meta;

type PlaygroundArgs = {
  label: string;
  variant: BadgeVariant;
  size: BadgeSize;
  color: BadgeColor;
  shape: BadgeShape;
  border: boolean;
  lead: 'none' | 'icon' | 'dot' | 'image';
  closeIcon: boolean;
};

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
  render: function Render({ label, lead, closeIcon, ...props }) {
    const [removed, setRemoved] = useState(false);
    if (removed) return <button onClick={() => setRemoved(false)}>Show the badge again</button>;
    return (
      <Badge
        {...props}
        icon={lead === 'icon' ? <RiUser3Fill /> : undefined}
        dot={lead === 'dot'}
        image={lead === 'image' ? <img src={badgeImage} alt="" /> : undefined}
        onRemove={closeIcon ? () => setRemoved(true) : undefined}
      >
        {label}
      </Badge>
    );
  },
};

const grid = (columns: number): CSSProperties => ({
  display: 'grid',
  gridTemplateColumns: `100px repeat(${columns}, auto)`,
  gap: 12,
  alignItems: 'center',
  justifyItems: 'start',
  fontFamily: 'var(--ds-font-family-body)',
  fontSize: 12,
  color: 'var(--ds-text-muted)',
});

/** Every Figma Color in Soft (with and without Border) and Strong. */
export const Colors: StoryObj = {
  render: () => (
    <div style={grid(10)}>
      <span />
      {colors.map((c) => (
        <span key={c}>{c}</span>
      ))}
      {(
        [
          ['Soft', { variant: 'soft' }],
          ['Soft + Border', { variant: 'soft', border: true }],
          ['Strong', { variant: 'strong' }],
        ] as const
      ).map(([title, props]) => (
        <div key={title} style={{ display: 'contents' }}>
          <span>{title}</span>
          {colors.map((c) => (
            <Badge key={c} color={c} {...props}>
              Label
            </Badge>
          ))}
        </div>
      ))}
    </div>
  ),
};

/** Figma Variant (Default, Icon, Dot, Image) and Close Icon, in both sizes and shapes. */
export const Variants: StoryObj = {
  render: () => (
    <div style={grid(5)}>
      <span />
      {['Default', 'Icon', 'Dot', 'Image', 'Close Icon'].map((t) => (
        <span key={t}>{t}</span>
      ))}
      {(['sm', 'lg'] as const).flatMap((size) =>
        (['rounded', 'pill'] as const).map((shape) => (
          <div key={size + shape} style={{ display: 'contents' }}>
            <span>
              {size} · {shape}
            </span>
            <Badge size={size} shape={shape} color="blue">
              Label
            </Badge>
            <Badge size={size} shape={shape} color="blue" icon={<RiUser3Fill />}>
              Label
            </Badge>
            <Badge size={size} shape={shape} color="blue" dot>
              Label
            </Badge>
            <Badge size={size} shape={shape} border image={<img src={badgeImage} alt="" />}>
              Label
            </Badge>
            <Badge size={size} shape={shape} border onRemove={() => {}}>
              Label
            </Badge>
          </div>
        )),
      )}
    </div>
  ),
};

/** The same badges under every brand and colour scheme, driven only by tokens. */
export const Brands: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {Object.keys(brands).flatMap((brand) =>
        (['light', 'dark'] as const).map((scheme) => (
          <div key={`${brand}-${scheme}`} data-ds-brand={brand} data-ds-scheme={scheme} style={{ background: 'var(--ds-bg-default)', padding: 24, display: 'grid', gap: 12 }}>
            <div style={{ fontFamily: 'var(--ds-font-family-body)', fontSize: 12, color: 'var(--ds-text-muted)' }}>
              {brand} · {scheme}
            </div>
            {variants.map((variant) => (
              <div key={variant} style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {colors.map((c) => (
                  <Badge key={c} color={c} variant={variant} dot>
                    {c}
                  </Badge>
                ))}
                <Badge variant={variant} border onRemove={() => {}}>
                  Removable
                </Badge>
              </div>
            ))}
          </div>
        )),
      )}
    </div>
  ),
};
