import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties, ReactNode } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Switch } from '../Switch';
import { Card, CardContent, CardFooter, CardHeader, CardMedia } from './Card';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=180-2';

const meta = {
  title: 'Components/Card',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Card** ([open in Figma](${FIGMA_URL})): \`size\` (\`default\` 20 px · \`sm\` 16 px) and its slots as parts: \`CardMedia\`, \`CardHeader\` (\`title\`, \`description\`, \`icon\`, \`action\`), \`CardContent\` and \`CardFooter\` (\`justify\`, \`muted\`). Every part is optional; content takes the space above or below when it starts or ends the card.`,
      },
    },
  },
} satisfies Meta;

export default meta;

// Icons of the Figma demos (Sort UI 2.0 / Lucide, 16 px with a 1.25 px stroke).
const icon = (children: ReactNode, size = 16) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={(1.25 * 24) / size} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {children}
  </svg>
);
const icons = {
  heart: icon(<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />),
  zap: icon(<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />),
  wifi: icon(<path d="M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.86a10 10 0 0 1 14 0M8.5 16.43a5 5 0 0 1 7 0" />),
  music: icon(
    <>
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </>,
  ),
  chevronLeft: icon(<path d="m15 18-6-6 6-6" />),
  chevronRight: icon(<path d="m9 18 6-6-6-6" />),
  more: icon(
    <>
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="19" r="1" />
    </>,
  ),
  trendingUp: icon(<path d="M22 7 13.5 15.5 8.5 10.5 2 17M16 7h6v6" />, 12),
  trendingDown: icon(<path d="M22 17 13.5 8.5 8.5 13.5 2 7M16 17h6v-6" />, 12),
};

// The "With image" demo's dusk sky, drawn so the story needs no image file.
const dusk =
  'data:image/svg+xml,' +
  encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 9" preserveAspectRatio="none"><defs><linearGradient id="g" x2="0" y2="1"><stop offset="0" stop-color="#9fb2c3"/><stop offset=".55" stop-color="#e7c9a3"/><stop offset="1" stop-color="#ffb347"/></linearGradient></defs><rect width="16" height="9" fill="url(#g)"/></svg>');

const muted: CSSProperties = { color: 'var(--ds-muted-foreground)' };

type PlaygroundArgs = { size: 'default' | 'sm'; media: boolean; title: string; description: string; muted: boolean };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { size: 'default', media: false, title: 'Card title', description: 'Card description', muted: false },
  argTypes: {
    size: { name: 'Size', control: 'inline-radio', options: ['default', 'sm'] },
    media: { name: 'Media' },
    title: { name: 'Title' },
    description: { name: 'Description' },
    muted: { name: 'Muted footer' },
  },
  render: ({ size, media, title, description, muted: mutedFooter }) => (
    <Card size={size} style={{ width: 448 }}>
      {media && (
        <CardMedia>
          <img src={dusk} alt="" />
        </CardMedia>
      )}
      <CardHeader title={title} description={description} action={<Button variant="outline" size="sm">Action</Button>} />
      <CardContent>Card content — put anything here: text, fields, lists, media</CardContent>
      <CardFooter muted={mutedFooter}>
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  ),
};

/** Figma "Card": Size default and sm. */
export const Sizes: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 32 }}>
      {(['default', 'sm'] as const).map((size) => (
        <Card key={size} size={size} style={{ width: 448 }}>
          <CardHeader title="Card title" description="Card description" action={<Button variant="outline" size="sm">Action</Button>} />
          <CardContent>Card content — put anything here: text, fields, lists, media</CardContent>
          <CardFooter>
            <Button variant="outline">Cancel</Button>
            <Button>Save</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  ),
};

/** Figma demo "Card": a sign-in form. */
export const SignIn: StoryObj = {
  render: () => (
    <Card as="section" style={{ width: 384 }} aria-label="Sign in">
      <CardHeader title="Sign in to your account" description="Enter your email below to continue." action={<Button variant="ghost" size="sm">Sign up</Button>} />
      <CardContent>
        <div style={{ display: 'grid', gap: 16 }}>
          <Input label="Email" type="email" placeholder="maya@example.com" />
          <Input label="Password" type="password" defaultValue="correct-horse" />
        </div>
      </CardContent>
      <CardFooter>
        <div style={{ display: 'grid', gap: 8, width: '100%' }}>
          <Button>Sign in</Button>
          <Button variant="outline">Continue with Google</Button>
        </div>
      </CardFooter>
    </Card>
  ),
};

/** Figma demo "With image": media over the header; the footer spreads price and actions. */
export const WithImage: StoryObj = {
  render: () => (
    <Card as="article" style={{ width: 384 }}>
      <CardMedia>
        <img src={dusk} alt="Lake at dusk under an orange sky" />
      </CardMedia>
      <CardHeader title="Lakeside cabin in Hallstatt" description="Entire cabin · 2 guests · 1 bedroom" action={<span>9.4/10</span>} />
      <CardContent>
        <p style={{ margin: 0, ...muted }}>A timber cabin on the shore of the lake with a wood stove, a private jetty and mountain views from the deck. The village is a ten-minute walk away.</p>
      </CardContent>
      <CardFooter justify="between">
        <span>
          <strong style={{ fontWeight: 600 }}>$180</strong> <span style={muted}>night</span>
        </span>
        <span style={{ display: 'flex', gap: 8 }}>
          <Button>Reserve</Button>
          <Button variant="outline" icon={icons.heart} aria-label="Save to wishlist" />
        </span>
      </CardFooter>
    </Card>
  ),
};

const stats = [
  { label: 'Steps', value: '8,432', change: '+12%', up: true, foot: 'Goal: 10,000 steps' },
  { label: 'Calories', value: '1,920', change: '+4%', up: true, foot: 'Burned today' },
  { label: 'Sleep', value: '7h 20m', change: '−6%', up: false, foot: 'Last night' },
];

/** Figma demo "Stats": small cards with a value and a trend. */
export const Stats: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 192px)', gap: 12 }}>
      {stats.map((s) => (
        <Card key={s.label} size="sm">
          <CardHeader
            titleAs="p"
            title={<span style={{ fontSize: 14, lineHeight: '20px', fontWeight: 400, color: 'var(--ds-muted-foreground)' }}>{s.label}</span>}
            action={
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 2, fontSize: 12, lineHeight: '16px', color: s.up ? 'var(--ds-foreground)' : 'var(--ds-destructive-foreground)' }}>
                {s.up ? icons.trendingUp : icons.trendingDown}
                {s.change}
              </span>
            }
          >
            <span style={{ fontSize: 24, lineHeight: '32px', fontWeight: 600 }}>{s.value}</span>
          </CardHeader>
          <CardFooter justify="start">
            <span style={muted}>{s.foot}</span>
          </CardFooter>
        </Card>
      ))}
    </div>
  ),
};

const bills = [
  { name: 'Electricity', due: 'Due Sep 28', amount: '$64.20', icon: icons.zap },
  { name: 'Home internet', due: 'Due Oct 1', amount: '$45.00', icon: icons.wifi },
  { name: 'Music Premium', due: 'Due Oct 5', amount: '$10.99', icon: icons.music },
];

/** Figma demo "With action": an action in the header and a muted footer with the total. */
export const WithAction: StoryObj = {
  render: () => (
    <Card style={{ width: 448 }}>
      <CardHeader title="Upcoming bills" description="3 payments due in the next 14 days" action={<Button variant="outline" size="sm">Pay all</Button>} />
      <CardContent>
        <ul style={{ display: 'grid', gap: 16, margin: 0, padding: 0, listStyle: 'none' }}>
          {bills.map((b) => (
            <li key={b.name} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ display: 'grid', placeItems: 'center', width: 36, height: 36, borderRadius: 10, background: 'var(--ds-fill-2)' }}>{b.icon}</span>
              <span style={{ display: 'grid', flex: 1 }}>
                <span style={{ fontWeight: 500 }}>{b.name}</span>
                <span style={muted}>{b.due}</span>
              </span>
              <span style={{ fontWeight: 500 }}>{b.amount}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter justify="start" muted>
        <span style={muted}>Total due</span>
        <strong style={{ fontWeight: 600 }}>$120.19</strong>
      </CardFooter>
    </Card>
  ),
};

/** Figma demo "Settings": switches as the content. */
export const Settings: StoryObj = {
  render: () => (
    <Card style={{ width: 448 }}>
      <CardHeader title="Email notifications" description="Choose what we send to your inbox." />
      <CardContent style={{ gap: 16, paddingBottom: 20 }}>
        <Switch label="Order updates" caption="Shipping and delivery status." defaultChecked />
        <Switch label="Price drops" caption="When items on your wishlist go on sale." defaultChecked />
        <Switch label="Weekly picks" caption="A short list of new arrivals we love." />
      </CardContent>
    </Card>
  ),
};

const payments = [
  { date: 'Oct 2', name: 'Northwind Studio', amount: '+$1,200.00', income: true },
  { date: 'Oct 1', name: 'Lumen Labs', amount: '+$860.00', income: true },
  { date: 'Sep 30', name: 'Cloud hosting', amount: '$24.00', income: false },
  { date: 'Sep 29', name: 'Paperleaf', amount: '+$340.00', income: true },
];

/** Figma demo "Payments grid": tiles on fill-1 in the content, paging in the header, a full-width footer button. */
export const PaymentsGrid: StoryObj = {
  render: () => (
    <Card style={{ width: 448 }}>
      <CardHeader
        title="Payments"
        description="Received and paid in the last 30 days"
        action={
          <>
            <Button variant="ghost" size="sm" icon={icons.chevronLeft} aria-label="Newer" disabled />
            <Button variant="ghost" size="sm" icon={icons.chevronRight} aria-label="Older" />
          </>
        }
      />
      <CardContent>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
          {payments.map((p) => (
            <div key={p.name} style={{ display: 'grid', gap: 12, padding: 12, borderRadius: 10, background: 'var(--ds-fill-1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={muted}>{p.date}</span>
                <Button variant="ghost" size="xs" icon={icons.more} aria-label={`More for ${p.name}`} />
              </div>
              <div style={{ display: 'grid', gap: 2 }}>
                <span style={{ fontWeight: 500 }}>{p.name}</span>
                <span style={{ fontSize: 16, lineHeight: '24px', fontWeight: 600, color: p.income ? 'var(--ds-palette-green-text)' : undefined }}>{p.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="secondary" style={{ width: '100%' }}>
          See all payments
        </Button>
      </CardFooter>
    </Card>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'grid', gap: 24, justifyItems: 'start' }}>
          <Card style={{ width: 360 }}>
            <CardMedia>
              <img src={dusk} alt="" />
            </CardMedia>
            <CardHeader title={scheme === 'light' ? 'Light' : 'Dark'} description="Card description" action={<Button variant="outline" size="sm">Action</Button>} />
            <CardContent>Card content — put anything here.</CardContent>
            <CardFooter muted>
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  ),
};
