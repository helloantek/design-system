import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties } from 'react';
import { RiDownloadLine, RiFileCopyLine, RiPushpinLine, RiRefreshLine, RiShareForwardLine } from '@remixicon/react';
import { Attachment as FileAttachment } from '../Attachment';
import { Avatar } from '../Avatar';
import { Badge } from '../Badge';
import { Bubble } from '../Bubble';
import { Button } from '../Button';
import { Carousel, CarouselSlide } from '../Carousel';
import { Message, MessageGroup, MessageTyping, type MessageAlign } from './Message';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=348-2';

const meta = {
  title: 'Components/Message',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Message** ([open in Figma](${FIGMA_URL})): one sender's bubbles with their avatar beside the last bubble, a header (\`sender\`, \`badge\`) and a \`footer\` (time, receipts, actions). \`align\` (\`start\` · \`end\`); \`MessageGroup\` stacks a sender's messages 8 px apart with the \`avatar\` on the last one; \`MessageTyping\` is the "is typing…" line.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const column = (gap: number): CSSProperties => ({ width: 'min(448px, calc(100vw - 32px))', display: 'flex', flexDirection: 'column', gap });
// Fallback avatars in a palette solid with primary-foreground initials, as in the demos.
const person = (initials: string, name: string, hue: string) => (
  <Avatar initials={initials} name={name} style={{ '--avatar-fill': `var(--ds-palette-${hue}-solid)`, '--avatar-ink': 'var(--ds-primary-foreground)' } as CSSProperties} />
);
const jonas = person('J', 'Jonas Lindqvist', 'orange');
const mira = person('M', 'Mira Okafor', 'lime');
const olivia = person('O', 'Olivia Miller', 'orange');

type PlaygroundArgs = { align: MessageAlign; avatar: boolean; header: boolean; footer: boolean };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { align: 'start', avatar: true, header: true, footer: true },
  argTypes: {
    align: { name: 'Align', control: 'inline-radio', options: ['start', 'end'] },
    avatar: { name: 'Avatar', control: 'boolean' },
    header: { name: 'Header', control: 'boolean' },
    footer: { name: 'Footer', control: 'boolean' },
  },
  render: ({ align, avatar, header, footer }) => (
    <div style={column(0)}>
      <Message align={align} avatar={avatar ? (align === 'end' ? mira : jonas) : undefined} sender={header ? (align === 'end' ? 'Mira Okafor' : 'Jonas Lindqvist') : undefined} footer={footer ? (align === 'end' ? '9:05 AM · Seen by Jonas and Priya' : 'Today, 9:02 AM') : undefined}>
        <Bubble variant={align === 'end' ? 'default' : 'muted'}>
          {align === 'end' ? 'Great. Is Billing blocked on the sticky-header variant, or on capacity?' : 'Biggest jump was Data Table — Checkout replaced their last three local tables. Only Billing is still on the legacy grid.'}
        </Bubble>
      </Message>
    </div>
  ),
};

/** Figma demo "Message": a team thread with senders, team badges, grouped messages, receipts and a typing line. */
export const Demo: StoryObj = {
  render: () => (
    <div style={column(16)} role="log" aria-label="Payments thread">
      <MessageGroup avatar={jonas}>
        <Message sender="Jonas Lindqvist" badge={<Badge shape="pill">Payments</Badge>}>
          <Bubble variant="muted">Weekly checkout digest is in: 84% of payments now go through the new checkout, up from 79% last week.</Bubble>
        </Message>
        <Message footer="Today, 9:02 AM">
          <Bubble variant="muted">Biggest jump was the mobile app — it retired its last three legacy payment screens. Only invoices still use the old flow.</Bubble>
        </Message>
      </MessageGroup>
      <Message align="end" avatar={mira} footer="9:05 AM · Seen by Jonas and Olivia">
        <Bubble>Great. Are invoices blocked on the saved-cards feature, or on capacity?</Bubble>
      </Message>
      <Message avatar={olivia} sender="Olivia Miller" badge={<Badge shape="pill">Billing squad</Badge>} footer="9:11 AM">
        <Bubble>Capacity. Saved cards shipped in checkout 3.1 and work for us — the switch is scoped for the Oct 6 sprint.</Bubble>
      </Message>
      <MessageTyping>Olivia is typing…</MessageTyping>
    </div>
  ),
};

/** Figma demo "Actions": copy, share and pin under a message, and a send error with a retry. */
export const Actions: StoryObj = {
  render: () => (
    <div style={column(16)}>
      <Message
        footer={
          <>
            <span style={{ display: 'flex' }}>
              <Button variant="ghost" size="xs" icon={<RiFileCopyLine />} aria-label="Copy" />
              <Button variant="ghost" size="xs" icon={<RiShareForwardLine />} aria-label="Share" />
              <Button variant="ghost" size="xs" icon={<RiPushpinLine />} aria-label="Pin" />
            </span>
            <span style={{ marginInlineStart: 2 }}>Just now</span>
          </>
        }
      >
        <Bubble variant="muted">Did the new pricing page go live with this morning's deploy?</Bubble>
      </Message>
      <Message
        align="end"
        footer={
          <>
            <span role="alert" style={{ color: 'var(--ds-destructive-foreground)' }}>
              Failed to send
            </span>
            <Button variant="ghost" size="xs" icon={<RiRefreshLine />} aria-label="Retry" />
          </>
        }
      >
        <Bubble>Yes, it shipped together with the annual plans and the new FAQ.</Bubble>
      </Message>
    </div>
  ),
};

const shot = 'radial-gradient(120% 90% at 30% 40%, #9a9a9a, #1f1f1f 70%)';

/** Figma demo "Attachment": a picture in a carousel and a file (Attachment) sent with a message. */
export const Attachment: StoryObj = {
  render: () => (
    <div style={column(16)}>
      <MessageGroup align="end" avatar={mira}>
        <Message>
          <div style={{ width: 320, borderRadius: 20, overflow: 'hidden' }}>
            <Carousel aria-label="Onboarding screens" controls="overlay" indicators gap={0}>
              {[0, 1, 2, 3].map((i) => (
                <CarouselSlide key={i} role="img" aria-label={`Screen ${i + 1}`} style={{ height: 213, background: shot }} />
              ))}
            </Carousel>
          </div>
        </Message>
        <Message>
          <Bubble>Here's the new onboarding screen from today's build.</Bubble>
        </Message>
      </MessageGroup>
      <MessageGroup avatar={jonas}>
        <Message>
          <Bubble variant="muted">Looks great. I wrote up the copy for the acme audit, too.</Bubble>
        </Message>
        <Message footer="Today, 9:02 AM">
          <FileAttachment title="acme-audit.pdf" description="2.1 MB" actions={<Button variant="ghost" size="xs" icon={<RiDownloadLine />} aria-label="Download acme-audit.pdf" />} />
        </Message>
      </MessageGroup>
      <Message align="end" avatar={mira}>
        <Bubble>Thanks! I'll add it to the build before it goes out to beta testers.</Bubble>
      </Message>
    </div>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Message avatar={jonas} sender="Jonas Lindqvist" badge={<Badge shape="pill">Payments</Badge>} footer="Today, 9:02 AM">
            <Bubble variant="muted">Checkout is at 84 % this week.</Bubble>
          </Message>
          <Message align="end" avatar={mira} footer="Seen">
            <Bubble>Nice, ship the rest on Monday.</Bubble>
          </Message>
          <MessageTyping>Jonas is typing…</MessageTyping>
        </div>
      ))}
    </div>
  ),
};
