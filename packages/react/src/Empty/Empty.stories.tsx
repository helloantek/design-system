import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type ReactNode } from 'react';
import { RiSearchLine, RiUserAddLine } from '@remixicon/react';
import { Avatar, AvatarGroup } from '../Avatar';
import { avatarImage } from '../Avatar/Avatar.fixtures';
import { Button } from '../Button';
import { Card } from '../Card';
import { Input } from '../Input';
import { Empty } from './Empty';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=227-46';

const meta = {
  title: 'Components/Empty',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Empty** ([open in Figma](${FIGMA_URL})): \`icon\` (a 32 px tile) or \`media\` (e.g. an Avatar Group), \`title\` (\`titleAs\` picks the heading level), \`description\`, \`actions\` (buttons side by side) and children under them (a search field, a link). What a view shows when it has nothing yet, with a way forward.`,
      },
    },
  },
} satisfies Meta;

export default meta;

// Lucide icons, 16 px with a 1.25 px stroke.
const icon = (children: ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.875} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {children}
  </svg>
);
const icons = {
  clipboardCheck: icon(
    <>
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M9 14l2 2 4-4" />
    </>,
  ),
  search: icon(
    <>
      <path d="m21 21-4.34-4.34" />
      <circle cx="11" cy="11" r="8" />
    </>,
  ),
};

type PlaygroundArgs = { media: 'icon' | 'avatars' | 'none'; title: string; description: string; actions: number };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { media: 'icon', title: 'No deployments yet', description: 'Connect a repository and every push to main will ship a preview automatically.', actions: 1 },
  argTypes: {
    media: { name: 'Media', control: 'inline-radio', options: ['icon', 'avatars', 'none'] },
    title: { name: 'Title' },
    description: { name: 'Description' },
    actions: { name: 'Buttons', control: { type: 'range', min: 0, max: 2 } },
  },
  render: ({ media, title, description, actions }) => (
    <div style={{ width: 384 }}>
      <Empty
        icon={media === 'icon' ? icons.clipboardCheck : undefined}
        media={
          media === 'avatars' ? (
            <AvatarGroup size="sm">
              <Avatar src={avatarImage} name="Mira Okafor" />
              <Avatar initials="JL" name="Jonas Lindqvist" />
              <Avatar initials="PR" name="Priya Raman" />
            </AvatarGroup>
          ) : undefined
        }
        title={title}
        description={description || undefined}
        actions={
          actions > 0 ? (
            <>
              <Button>Connect repository</Button>
              {actions > 1 && <Button variant="outline">Read the docs</Button>}
            </>
          ) : undefined
        }
      />
    </div>
  ),
};

/** Figma demo "Empty": two actions. */
export const Trips: StoryObj = {
  render: () => (
    <div style={{ width: 384 }}>
      <Empty
        icon={icons.search}
        title="No trips yet"
        description="Your upcoming stays and flights will show up here once you book them."
        actions={
          <>
            <Button>Explore stays</Button>
            <Button variant="outline">Import booking</Button>
          </>
        }
      />
    </div>
  ),
};

/** Figma demo "With avatars": an Avatar Group as the media. */
export const WithAvatars: StoryObj = {
  render: () => (
    <div style={{ width: 384 }}>
      <Empty
        media={
          <AvatarGroup size="sm">
            <Avatar src={avatarImage} name="Mira Okafor" />
            <Avatar initials="JL" name="Jonas Lindqvist" />
            <Avatar initials="PR" name="Priya Raman" />
          </AvatarGroup>
        }
        title="Listen together"
        description="Invite friends to add songs to Late night focus and see what they are playing."
        actions={<Button leadingIcon={<RiUserAddLine />}>Invite friends</Button>}
      />
    </div>
  ),
};

/** Figma demo "No results": a search field and a way to clear the filters. */
export const NoResults: StoryObj = {
  render: function Render() {
    const [query, setQuery] = useState('sushi');
    return (
      <div style={{ width: 384 }}>
        <Empty
          icon={icons.search}
          title="No restaurants found"
          description={`Nothing matches “${query}” near you. Try another search or clear your filters.`}
        >
          <Input aria-label="Search restaurants" value={query} onChange={(event) => setQuery(event.currentTarget.value)} leadIcon={<RiSearchLine />} />
          <Button variant="ghost" size="sm" onClick={() => setQuery('')}>
            Clear filters
          </Button>
        </Empty>
      </div>
    );
  },
};

/** In a Card: Empty fills the card's content area. */
export const InACard: StoryObj = {
  render: () => (
    <Card style={{ width: 420 }}>
      <Empty icon={icons.clipboardCheck} title="No deployments yet" titleAs="h2" description="Connect a repository and every push to main will ship a preview automatically." actions={<Button>Connect repository</Button>} />
    </Card>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)' }}>
          <Empty icon={icons.search} title="No trips yet" description="Your upcoming stays will show up here." actions={<Button variant="outline">Explore stays</Button>} />
        </div>
      ))}
    </div>
  ),
};
