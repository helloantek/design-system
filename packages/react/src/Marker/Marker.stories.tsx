import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';
import { Avatar } from '../Avatar';
import { Card, CardContent, CardHeader } from '../Card';
import { Marker, type MarkerVariant } from './Marker';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=357-2';

const meta = {
  title: 'Components/Marker',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Marker** ([open in Figma](${FIGMA_URL})): \`variant\` (\`default\` · \`separator\` · \`border\`), \`icon\`, \`trailingIcon\` and \`loading\`. A quiet line in a feed or a chat: an event, a date between messages, a step.`,
      },
    },
  },
} satisfies Meta;

export default meta;

// Icons of the Figma demos (Sort UI 2.0 / Lucide, 16 px with a 1.25 px stroke).
const icon = (children: ReactNode) => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.875} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {children}
  </svg>
);
const icons = {
  arrows: icon(<path d="m16 3 4 4-4 4M20 7H4M8 21l-4-4 4-4M4 17h16" />),
  userPlus: icon(
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M19 8v6M22 11h-6" />
      <circle cx="9" cy="7" r="4" />
    </>,
  ),
  truck: icon(
    <>
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2M15 18H9M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </>,
  ),
  check: icon(<path d="M20 6 9 17l-5-5" />),
  pin: icon(<path d="M12 17v5M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" />),
  plane: icon(<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />),
  circleDashed: icon(<path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7M21.82 10.1a9.93 9.93 0 0 1 0 3.8M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69M13.9 21.82a9.94 9.94 0 0 1-3.8 0M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7M2.18 13.9a9.93 9.93 0 0 1 0-3.8M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" />),
  chevronDown: icon(<path d="m6 9 6 6 6-6" />),
};

type PlaygroundArgs = { variant: MarkerVariant; text: string; icon: boolean; trailingIcon: boolean; loading: boolean };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { variant: 'default', text: 'Sofia Bianchi moved Combobox to Ready for review', icon: true, trailingIcon: false, loading: false },
  argTypes: {
    variant: { name: 'Variant', control: 'inline-radio', options: ['default', 'separator', 'border'] },
    text: { name: 'Text' },
    icon: { name: 'Icon' },
    trailingIcon: { name: 'Trailing icon' },
    loading: { name: 'Loading' },
  },
  render: ({ variant, text, icon: withIcon, trailingIcon, loading }) => (
    <div style={{ width: 448 }}>
      <Marker variant={variant} icon={withIcon ? icons.arrows : undefined} trailingIcon={trailingIcon ? icons.chevronDown : undefined} loading={loading}>
        {text}
      </Marker>
    </div>
  ),
};

/** Figma demo "Variants": Default, Separator (a date) and Border. */
export const Variants: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 24, width: 384 }}>
      <Marker icon={icons.pin}>Maya pinned a message</Marker>
      <Marker variant="separator">Yesterday</Marker>
      <Marker variant="border" icon={icons.plane}>
        Weekend in Porto
      </Marker>
    </div>
  ),
};

const bubble = (text: string, mine = false) => (
  <div
    style={{
      justifySelf: mine ? 'end' : 'start',
      maxWidth: 320,
      padding: '8px 12px',
      borderRadius: 12,
      background: mine ? 'var(--ds-card)' : 'var(--ds-fill-2)',
      boxShadow: mine ? '0 0 0 1px var(--ds-border), var(--ds-shadow-xs)' : undefined,
      fontSize: 14,
      lineHeight: '20px',
    }}
  >
    {text}
  </div>
);

/** Figma demo "Marker": events, a date and a receipt link in a support chat. */
export const Chat: StoryObj = {
  render: () => (
    <Card style={{ width: 448 }}>
      <CardHeader title="Order #4821" description="Chat with support · Late delivery" />
      <CardContent style={{ display: 'grid', gap: 16, paddingBottom: 20 }}>
        <Marker icon={icons.userPlus}>Alex from Support joined the chat</Marker>
        <Marker variant="separator">Today</Marker>
        <div style={{ display: 'grid', gap: 4, gridTemplateColumns: 'auto 1fr', alignItems: 'end', columnGap: 8 }}>
          <span />
          <span style={{ fontSize: 12, lineHeight: '16px', color: 'var(--ds-muted-foreground)' }}>Alex</span>
          <Avatar size="sm" initials="AL" />
          {bubble('Hi Maya, sorry your order is running late. I’m checking with the courier right now.')}
        </div>
        {bubble('Thanks! It was due at 7 PM.', true)}
        <Marker icon={icons.truck}>Your courier is 5 minutes away</Marker>
        <Marker icon={icons.check}>
          Refund of $4.99 issued for the delay · <a href="#receipt">View receipt</a>
        </Marker>
      </CardContent>
    </Card>
  ),
};

/** Figma demo "Loading": done steps, the step in progress (a spinner) and the next one. */
export const Loading: StoryObj = {
  render: () => (
    <div role="list" style={{ display: 'grid', gap: 12, width: 384 }}>
      <Marker role="listitem" icon={icons.check}>
        Searched 48 hotels in Lisbon
      </Marker>
      <Marker role="listitem" icon={icons.check}>
        Filtered by your dates and budget
      </Marker>
      <Marker role="listitem" loading aria-current="step">
        Comparing guest reviews…
      </Marker>
      <Marker role="listitem" icon={icons.circleDashed}>
        Pick the best three for you
      </Marker>
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
          <Marker icon={icons.userPlus}>Alex from Support joined the chat</Marker>
          <Marker variant="separator">{scheme === 'light' ? 'Light' : 'Dark'}</Marker>
          <Marker variant="border" icon={icons.plane} trailingIcon={icons.chevronDown}>
            Weekend in Porto
          </Marker>
          <Marker loading>Comparing guest reviews…</Marker>
        </div>
      ))}
    </div>
  ),
};
