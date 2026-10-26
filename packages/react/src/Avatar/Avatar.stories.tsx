import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties } from 'react';
import { RiMoonFill } from '@remixicon/react';
import { Avatar, type AvatarShape, type AvatarSize } from './Avatar';
import { AvatarBadge } from './AvatarBadge';
import { AvatarGroup } from './AvatarGroup';
import { StatusBadge, type StatusBadgeVariant } from './StatusBadge';
import { avatarImage } from './Avatar.fixtures';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=174-6534';

const sizes: AvatarSize[] = ['2xs', 'xs', 'sm', 'default', 'lg', 'xl', '2xl', '3xl'];
const figmaSizes: AvatarSize[] = ['xs', 'sm', 'default', 'lg', 'xl'];
const shapes: AvatarShape[] = ['round', 'square'];
const badgeVariants: StatusBadgeVariant[] = ['checkmark', 'online', 'offline', 'notification', 'icon'];

// Sort UI 2.0's plus icon (24 px grid), as in the Figma icon variant and Avatar Badge variant=icon.
const Plus = ({ stroke = 1.875 }: { stroke?: number }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" aria-hidden>
    <path d="M5 12h14M12 5v14" />
  </svg>
);

const meta = {
  title: 'Components/Avatar',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 component sets **Avatar**, **Avatar Badge** and **Avatar Group** ([open in Figma](${FIGMA_URL})). Figma "variant" follows the content: \`src\` → image, \`initials\` → fallback, neither → icon (a person, or \`icon\`); a picture that fails to load falls back. \`size\`: \`xs\` · \`sm\` · \`default\` · \`lg\` · \`xl\` as in Figma, plus the \`2xs\`, \`2xl\` and \`3xl\` extensions; \`shape\`: \`round\` · \`square\`. Figma "badge" is \`bottomBadge={<AvatarBadge />}\`; the Sort UI 1.3 **Status Badge** (checkmark, online, offline, notification, icon, logo) stays available in \`topBadge\` and \`bottomBadge\`. \`name\` is the accessible name.`,
      },
    },
  },
} satisfies Meta;

export default meta;

type PlaygroundArgs = {
  variant: 'image' | 'fallback' | 'icon';
  size: AvatarSize;
  shape: AvatarShape;
  ring: boolean;
  badge: 'none' | 'avatar' | 'avatar-icon' | 'status';
  bottomBadgeVariant: StatusBadgeVariant;
  topBadge: boolean;
  topBadgeVariant: StatusBadgeVariant;
  initials: string;
  name: string;
};

const statusBadge = (variant: StatusBadgeVariant) => <StatusBadge variant={variant} icon={variant === 'icon' ? <RiMoonFill /> : undefined} />;

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { variant: 'image', size: 'xl', shape: 'round', ring: false, badge: 'none', bottomBadgeVariant: 'online', topBadge: false, topBadgeVariant: 'checkmark', initials: 'SH', name: 'Sam Rivera' },
  argTypes: {
    variant: { name: 'variant', control: 'inline-radio', options: ['image', 'fallback', 'icon'], description: 'Set by the content: `src`, `initials` or neither' },
    size: { name: 'size', control: 'select', options: sizes },
    shape: { name: 'shape', control: 'inline-radio', options: shapes },
    ring: { description: '2 px ring in the page colour (Avatar Group)' },
    badge: { name: 'badge', control: { type: 'inline-radio', labels: { none: 'none', avatar: 'Avatar Badge', 'avatar-icon': 'Avatar Badge (icon)', status: 'Status Badge' } }, options: ['none', 'avatar', 'avatar-icon', 'status'], description: 'Bottom badge: Figma "badge" (Avatar Badge) or a Status Badge' },
    bottomBadgeVariant: { name: 'Status Badge (bottom)', control: 'select', options: badgeVariants, if: { arg: 'badge', eq: 'status' } },
    topBadge: { name: 'Top badge', description: 'A Status Badge on the top right' },
    topBadgeVariant: { name: 'Status Badge (top)', control: 'select', options: badgeVariants, if: { arg: 'topBadge' } },
    initials: { if: { arg: 'variant', eq: 'fallback' } },
    name: { description: 'Accessible name' },
  },
  render: ({ variant, badge, bottomBadgeVariant, topBadge, topBadgeVariant, initials, ...props }) => (
    <Avatar
      {...props}
      src={variant === 'image' ? avatarImage : undefined}
      initials={variant === 'fallback' ? initials : undefined}
      topBadge={topBadge ? statusBadge(topBadgeVariant) : undefined}
      bottomBadge={
        badge === 'avatar' ? <AvatarBadge label="Online" /> : badge === 'avatar-icon' ? <AvatarBadge label="Add" icon={<Plus stroke={3} />} /> : badge === 'status' ? statusBadge(bottomBadgeVariant) : undefined
      }
    />
  ),
};

const grid = (columns: number): CSSProperties => ({
  display: 'grid',
  gridTemplateColumns: `140px repeat(${columns}, auto)`,
  gap: 16,
  alignItems: 'center',
  justifyItems: 'center',
  fontFamily: 'var(--ds-font-sans)',
  fontSize: 12,
  color: 'var(--ds-muted-foreground)',
});

/** Every Figma variant, size and shape (2xs, 2xl and 3xl are extensions). */
export const Variants: StoryObj = {
  render: () => (
    <div style={grid(sizes.length)}>
      <span />
      {sizes.map((s) => (
        <span key={s}>{s}</span>
      ))}
      {shapes.flatMap((shape) =>
        (['image', 'fallback', 'icon'] as const).map((variant) => (
          <div key={shape + variant} style={{ display: 'contents' }}>
            <span style={{ justifySelf: 'start' }}>
              {variant} · {shape}
            </span>
            {sizes.map((size) => (
              <Avatar key={size} size={size} shape={shape} src={variant === 'image' ? avatarImage : undefined} initials={variant === 'fallback' ? 'SH' : undefined} icon={variant === 'icon' ? <Plus /> : undefined} />
            ))}
          </div>
        )),
      )}
    </div>
  ),
};

/** Figma "badge" (Avatar Badge, plain and with an icon) at every Figma size, and the Status Badges in both slots. */
export const Badges: StoryObj = {
  render: () => (
    <div style={grid(sizes.length)}>
      <span />
      {sizes.map((s) => (
        <span key={s}>{s}</span>
      ))}
      <span style={{ justifySelf: 'start' }}>Avatar Badge</span>
      {sizes.map((size) => (
        <Avatar key={size} size={size} src={avatarImage} name="Sam Rivera" bottomBadge={<AvatarBadge label="Online" />} />
      ))}
      <span style={{ justifySelf: 'start' }}>Avatar Badge · icon</span>
      {sizes.map((size) => (
        <Avatar key={size} size={size} initials="SH" name="Sam Rivera" bottomBadge={<AvatarBadge label="Add" icon={<Plus stroke={3} />} />} />
      ))}
      {shapes.map((shape) => (
        <div key={shape} style={{ display: 'contents' }}>
          <span style={{ justifySelf: 'start' }}>Status Badges · {shape}</span>
          {sizes.map((size) => (
            <Avatar key={size} size={size} shape={shape} src={avatarImage} name="Sam Rivera" topBadge={<StatusBadge variant="checkmark" />} bottomBadge={<StatusBadge variant="online" />} />
          ))}
        </div>
      ))}
    </div>
  ),
};

/** The Sort UI 1.3 Status Badge: every variant, alone (24 px) and on an xl avatar. */
export const StatusBadges: StoryObj = {
  render: () => (
    <div style={grid(badgeVariants.length)}>
      <span />
      {badgeVariants.map((v) => (
        <span key={v}>{v}</span>
      ))}
      <span style={{ justifySelf: 'start' }}>Status Badge</span>
      {badgeVariants.map((v) => (
        <span key={v}>{statusBadge(v)}</span>
      ))}
      <span style={{ justifySelf: 'start' }}>On an xl avatar</span>
      {badgeVariants.map((v) => (
        <Avatar key={v} size="xl" src={avatarImage} name="Sam Rivera" bottomBadge={statusBadge(v)} />
      ))}
    </div>
  ),
};

const people = [
  { src: avatarImage, name: 'Sam Rivera' },
  { initials: 'AJ', name: 'Alex Jhonson' },
  { name: 'Unknown user' },
  { initials: 'EC', name: 'Emma Chen' },
  { initials: 'RP', name: 'Ryan Parker' },
  { initials: 'LC', name: 'Lily Chen' },
];

/** Figma "Avatar Group": avatars overlap by 8 px with the ring, and `max` turns the rest into the "+N" count. */
export const Group: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 16, justifyItems: 'start' }}>
      {figmaSizes.map((size) => (
        <AvatarGroup key={size} size={size} max={3} aria-label="Reviewers">
          {people.map((p) => (
            <Avatar key={p.name} {...p} />
          ))}
        </AvatarGroup>
      ))}
    </div>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'grid', gap: 16 }}>
          <div style={{ fontFamily: 'var(--ds-font-sans)', fontSize: 12, color: 'var(--ds-muted-foreground)' }}>{scheme === 'light' ? 'Light' : 'Dark'}</div>
          {shapes.map((shape) => (
            <div key={shape} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <Avatar size="xl" shape={shape} src={avatarImage} name="Sam Rivera" bottomBadge={<AvatarBadge label="Online" />} />
              <Avatar size="xl" shape={shape} initials="SR" name="Sam Rivera" topBadge={<StatusBadge variant="checkmark" />} />
              <Avatar size="xl" shape={shape} name="Unknown user" />
              <Avatar size="xl" shape={shape} icon={<Plus />} name="Add a person" />
            </div>
          ))}
          <AvatarGroup size="lg" max={3} aria-label="Reviewers">
            {people.map((p) => (
              <Avatar key={p.name} {...p} />
            ))}
          </AvatarGroup>
        </div>
      ))}
    </div>
  ),
};
