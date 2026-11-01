import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties, ReactNode } from 'react';
import { AspectRatio } from '../AspectRatio';
import { aspectRatioPhoto } from '../AspectRatio/AspectRatio.fixtures';
import { Avatar, AvatarGroup } from '../Avatar';
import { Button } from '../Button';
import { Separator } from '../Separator';
import { HoverCard, type HoverCardAlign, type HoverCardSide } from './HoverCard';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=167-2';

const meta = {
  title: 'Components/Hover Card',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Hover Card** ([open in Figma](${FIGMA_URL})): a 288 px card that previews what is behind a link — a person, a page, an event — while the pointer rests on it (after \`openDelay\`, 700 ms) or the link has keyboard focus. It stays while the pointer or focus is on the link or the card, closes \`closeDelay\` (300 ms) after the pointer leaves, and Escape closes it. \`side\` and \`align\` place it 4 px from the trigger; \`width\` changes it. The link must make sense on its own: the card is a convenience for sighted users and is not announced.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const text: CSSProperties = { fontFamily: 'var(--ds-font-sans)', fontSize: 14, lineHeight: '20px', color: 'var(--ds-foreground)' };
const muted: CSSProperties = { margin: 0, color: 'var(--ds-muted-foreground)' };
const link: CSSProperties = { color: 'var(--ds-foreground)', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: 3 };
const stage = (children: ReactNode) => <div style={{ ...text, minHeight: 300, padding: '16px 0' }}>{children}</div>;

const Person = ({ initials, name, role }: { initials: string; name: string; role: string }) => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <Avatar size="lg" initials={initials} />
    <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <span style={{ fontWeight: 500 }}>{name}</span>
      <span style={muted}>{role}</span>
    </div>
  </div>
);

const icon = (children: ReactNode) => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {children}
  </svg>
);
const icons = {
  calendar: icon(
    <>
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </>,
  ),
  pin: icon(
    <>
      <path d="M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </>,
  ),
};

type PlaygroundArgs = { side: HoverCardSide; align: HoverCardAlign; openDelay: number; closeDelay: number };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { side: 'bottom', align: 'center', openDelay: 700, closeDelay: 300 },
  argTypes: {
    side: { control: 'inline-radio', options: ['bottom', 'top', 'left', 'right'] },
    align: { control: 'inline-radio', options: ['center', 'start', 'end'] },
  },
  render: (args) => (
    <div style={{ ...text, display: 'grid', placeItems: 'center', minHeight: 520 }}>
      <p style={{ margin: 0 }}>
        Tokens are owned by{' '}
        <HoverCard
          {...args}
          trigger={
            <a href="#priya" style={link}>
              Priya Raman
            </a>
          }
        >
          <Person initials="PR" name="Priya Raman" role="Staff designer · Foundations" />
          <p style={muted}>Owns the token pipeline: spacing, radius and type scales across web and iOS.</p>
          <Separator />
          <p style={{ ...muted, fontSize: 12, lineHeight: '16px' }}>9 components · 34 reviews this quarter · replies within a day</p>
        </HoverCard>
        .
      </p>
    </div>
  ),
};

/** Figma demo "Hover Card": a handle in a sentence previews the profile. */
export const Profile: StoryObj = {
  render: () =>
    stage(
      <p style={{ margin: 0 }}>
        Photos by{' '}
        <HoverCard
          align="start"
          trigger={
            <a href="#maya" style={link}>
              @maya.travels
            </a>
          }
        >
          <Person initials="MC" name="Maya Chen" role="@maya.travels" />
          <p style={{ margin: 0 }}>Travel photographer chasing golden hour.</p>
          <p style={muted}>Joined March 2021</p>
        </HoverCard>
        , edited in Lisbon.
      </p>,
    ),
};

/** Figma demo "Avatar trigger": an avatar link opens a card with counts and actions. */
export const AvatarTrigger: StoryObj = {
  render: () =>
    stage(
      <HoverCard
        align="start"
        trigger={
          <a href="#leo" style={{ display: 'inline-flex', borderRadius: 9999 }}>
            <Avatar initials="LP" name="Leo Park" />
          </a>
        }
      >
        <Person initials="LP" name="Leo Park" role="Street photographer · Seoul" />
        <div style={{ display: 'flex', gap: 16 }}>
          <span>
            <strong style={{ fontWeight: 500 }}>12.4k</strong> <span style={muted}>followers</span>
          </span>
          <span>
            <strong style={{ fontWeight: 500 }}>186</strong> <span style={muted}>following</span>
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          <Button size="sm">Follow</Button>
          <Button size="sm" variant="outline">
            Message
          </Button>
        </div>
      </HoverCard>,
    ),
};

/** Figma demo "Link preview": a link previews the page with a picture. */
export const LinkPreview: StoryObj = {
  render: () =>
    stage(
      <p style={{ margin: 0 }}>
        Read our{' '}
        <HoverCard
          trigger={
            <a href="#guide" style={link}>
              guide to Lisbon's best cafés
            </a>
          }
          width="320px"
        >
          <AspectRatio ratio="16:9" rounded>
            <img src={aspectRatioPhoto} alt="" />
          </AspectRatio>
          <div style={{ display: 'grid', gap: 4 }}>
            <span style={{ fontWeight: 500 }}>12 cafés worth the trip in Lisbon</span>
            <span style={muted}>From tiny espresso bars to garden terraces, where to sit down for a bica.</span>
          </div>
          <span style={{ ...muted, fontSize: 12, lineHeight: '16px' }}>citylife.com · 6 min read</span>
        </HoverCard>
        .
      </p>,
    ),
};

/** Figma demo "Event": an event name previews the time, place and who is going. */
export const Event: StoryObj = {
  render: () =>
    stage(
      <p style={{ margin: 0 }}>
        Join us for{' '}
        <HoverCard
          trigger={
            <a href="#yoga" style={link}>
              Sunset yoga
            </a>
          }
        >
          <span style={{ fontWeight: 500, fontSize: 16, lineHeight: '24px' }}>Sunset yoga in the park</span>
          <div style={{ display: 'grid', gap: 6 }}>
            <span style={{ ...muted, display: 'flex', gap: 8, alignItems: 'center' }}>
              {icons.calendar} Saturday · 7:00 PM
            </span>
            <span style={{ ...muted, display: 'flex', gap: 8, alignItems: 'center' }}>
              {icons.pin} Parque Eduardo VII, Lisbon
            </span>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <AvatarGroup size="sm" max={3} total={18}>
              {['MC', 'LP', 'AR'].map((i) => (
                <Avatar key={i} initials={i} />
              ))}
            </AvatarGroup>
            <span style={muted}>Maya, Leo and 16 others</span>
          </div>
          <Button size="sm" variant="outline">
            Add to calendar
          </Button>
        </HoverCard>{' '}
        on Saturday.
      </p>,
    ),
};

/** Light and Dark, driven only by tokens (cards drawn open). */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ ...text, background: 'var(--ds-background)', padding: 24, minHeight: 280 }}>
          <HoverCard
            defaultOpen
            align="start"
            trigger={
              <a href={`#priya-${scheme}`} style={link}>
                Priya Raman
              </a>
            }
          >
            <Person initials="PR" name="Priya Raman" role="Staff designer · Foundations" />
            <p style={muted}>Owns the token pipeline: spacing, radius and type scales across web and iOS.</p>
          </HoverCard>
        </div>
      ))}
    </div>
  ),
};
