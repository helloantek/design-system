import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties } from 'react';
import { RiMoonFill } from '@remixicon/react';
import brands from '@helloantek/ds-tokens/brands.json';
import { Avatar, type AvatarShape, type AvatarSize } from './Avatar';
import { StatusBadge, type StatusBadgeVariant } from './StatusBadge';
import { avatarImage } from './Avatar.fixtures';

const FIGMA_URL = 'https://www.figma.com/design/4tiBR2hKd4yvQehtKhM9OY?node-id=2725-4557';

const sizes: AvatarSize[] = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'];
const shapes: AvatarShape[] = ['circular', 'rounded'];
const badgeVariants: StatusBadgeVariant[] = ['checkmark', 'online', 'offline', 'notification', 'icon'];
// Figma's sample initials: one letter up to md, two from lg.
const initialsFor = (size: AvatarSize) => (['2xs', 'xs', 'sm', 'md'].includes(size) ? 'S' : 'SR');

const meta = {
  title: 'Components/Avatar',
  parameters: {
    docs: {
      description: {
        component: `Implements the Figma component set **Avatar** ([open in Figma](${FIGMA_URL})) and the **Status Badge** it shows. Figma "Variant" follows the content: \`src\` → Userpic, \`initials\` → Initials, neither → Empty (a picture that fails to load falls back to the initials or Empty). "Ring", "Top badge" and "Bottom badge" → \`ring\`, \`topBadge\`, \`bottomBadge\` (Figma's defaults: a Checkmark on top, Online at the bottom). \`name\` is the accessible name.`,
      },
    },
  },
} satisfies Meta;

export default meta;

type PlaygroundArgs = {
  variant: 'Userpic' | 'Initials' | 'Empty';
  size: AvatarSize;
  shape: AvatarShape;
  ring: boolean;
  topBadge: boolean;
  topBadgeVariant: StatusBadgeVariant;
  bottomBadge: boolean;
  bottomBadgeVariant: StatusBadgeVariant;
  initials: string;
  name: string;
};

const badge = (variant: StatusBadgeVariant) => <StatusBadge variant={variant} icon={variant === 'icon' ? <RiMoonFill /> : undefined} />;

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { variant: 'Userpic', size: '3xl', shape: 'circular', ring: false, topBadge: false, topBadgeVariant: 'checkmark', bottomBadge: false, bottomBadgeVariant: 'online', initials: 'SR', name: 'Sam Rivera' },
  argTypes: {
    variant: { name: 'Variant', control: 'inline-radio', options: ['Userpic', 'Initials', 'Empty'], description: 'Set by the content: `src`, `initials` or neither' },
    size: { name: 'Size', control: 'select', options: sizes },
    shape: { name: 'Shape', control: 'inline-radio', options: shapes },
    ring: { name: 'Ring' },
    topBadge: { name: 'Top badge' },
    topBadgeVariant: { name: 'Top badge variant', control: 'select', options: badgeVariants, if: { arg: 'topBadge' } },
    bottomBadge: { name: 'Bottom badge' },
    bottomBadgeVariant: { name: 'Bottom badge variant', control: 'select', options: badgeVariants, if: { arg: 'bottomBadge' } },
    initials: { if: { arg: 'variant', eq: 'Initials' } },
    name: { description: 'Accessible name' },
  },
  render: ({ variant, topBadge, topBadgeVariant, bottomBadge, bottomBadgeVariant, initials, ...props }) => (
    <Avatar
      {...props}
      src={variant === 'Userpic' ? avatarImage : undefined}
      initials={variant === 'Initials' ? initials : undefined}
      topBadge={topBadge ? badge(topBadgeVariant) : undefined}
      bottomBadge={bottomBadge ? badge(bottomBadgeVariant) : undefined}
    />
  ),
};

const grid = (columns: number): CSSProperties => ({
  display: 'grid',
  gridTemplateColumns: `120px repeat(${columns}, auto)`,
  gap: 16,
  alignItems: 'center',
  justifyItems: 'center',
  fontFamily: 'var(--ds-font-family-body)',
  fontSize: 12,
  color: 'var(--ds-text-muted)',
});

/** Every Figma Variant, Size and Shape, as in the Figma component set. */
export const Variants: StoryObj = {
  render: () => (
    <div style={grid(sizes.length)}>
      <span />
      {sizes.map((s) => (
        <span key={s}>{s}</span>
      ))}
      {shapes.flatMap((shape) =>
        (['Userpic', 'Empty', 'Initials'] as const).map((variant) => (
          <div key={shape + variant} style={{ display: 'contents' }}>
            <span style={{ justifySelf: 'start' }}>
              {variant} · {shape}
            </span>
            {sizes.map((size) => (
              <Avatar key={size} size={size} shape={shape} src={variant === 'Userpic' ? avatarImage : undefined} initials={variant === 'Initials' ? initialsFor(size) : undefined} />
            ))}
          </div>
        )),
      )}
    </div>
  ),
};

/** "Top badge" and "Bottom badge" at every size and in both shapes, plus "Ring". */
export const Badges: StoryObj = {
  render: () => (
    <div style={grid(sizes.length)}>
      <span />
      {sizes.map((s) => (
        <span key={s}>{s}</span>
      ))}
      {shapes.map((shape) => (
        <div key={shape} style={{ display: 'contents' }}>
          <span style={{ justifySelf: 'start' }}>Top + Bottom · {shape}</span>
          {sizes.map((size) => (
            <Avatar key={size} size={size} shape={shape} src={avatarImage} name="Sam Rivera" topBadge={<StatusBadge variant="checkmark" />} bottomBadge={<StatusBadge variant="online" />} />
          ))}
        </div>
      ))}
      <span style={{ justifySelf: 'start' }}>Ring (on a tint)</span>
      {sizes.map((size) => (
        <span key={size} style={{ padding: 6, background: 'var(--ds-bg-basic-gray-subtle)', borderRadius: 8, display: 'flex' }}>
          <Avatar size={size} ring initials={initialsFor(size)} />
        </span>
      ))}
    </div>
  ),
};

/** Figma Status Badge: every Variant, alone (24 px) and on an avatar. */
export const StatusBadges: StoryObj = {
  render: () => (
    <div style={grid(badgeVariants.length)}>
      <span />
      {badgeVariants.map((v) => (
        <span key={v}>{v}</span>
      ))}
      <span style={{ justifySelf: 'start' }}>Status Badge</span>
      {badgeVariants.map((v) => (
        <span key={v}>{badge(v)}</span>
      ))}
      <span style={{ justifySelf: 'start' }}>On a 3xl avatar</span>
      {badgeVariants.map((v) => (
        <Avatar key={v} size="3xl" src={avatarImage} name="Sam Rivera" bottomBadge={badge(v)} />
      ))}
    </div>
  ),
};

/** Overlapping avatars: the ring separates each from the one beneath. */
export const Group: StoryObj = {
  render: () => (
    <div style={{ display: 'flex' }}>
      {[
        { src: avatarImage, name: 'Sam Rivera' },
        { initials: 'AJ', name: 'Alex Jhonson' },
        { name: 'Unknown user' },
        { initials: 'EC', name: 'Emma Chen' },
      ].map((p, i) => (
        <Avatar key={p.name} {...p} size="lg" ring style={{ marginLeft: i ? -8 : 0 }} />
      ))}
    </div>
  ),
};

/** The same avatars under every brand and colour scheme, driven only by tokens. */
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
            {shapes.map((shape) => (
              <div key={shape} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <Avatar size="xl" shape={shape} src={avatarImage} name="Sam Rivera" topBadge={<StatusBadge variant="checkmark" />} />
                <Avatar size="xl" shape={shape} initials="SR" name="Sam Rivera" bottomBadge={<StatusBadge variant="online" />} />
                <Avatar size="xl" shape={shape} name="Unknown user" bottomBadge={<StatusBadge variant="offline" />} />
                <Avatar size="xl" shape={shape} initials="EC" ring name="Emma Chen" bottomBadge={<StatusBadge variant="notification" />} />
              </div>
            ))}
          </div>
        )),
      )}
    </div>
  ),
};
