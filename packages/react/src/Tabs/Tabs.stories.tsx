import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type CSSProperties, type ReactNode } from 'react';
import { Button } from '../Button';
import { Card, CardContent, CardFooter, CardHeader } from '../Card';
import { Field } from '../Field';
import { Input } from '../Input';
import { Switch } from '../Switch';
import { Tabs, TabsContent, TabsList, TabsTrigger, type TabsSize, type TabsVariant } from './Tabs';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=197-2';

const meta = {
  title: 'Components/Tabs',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Tabs Trigger** and **Tabs List** ([open in Figma](${FIGMA_URL})): \`Tabs\` holds the selected \`value\` (\`defaultValue\` / \`onValueChange\`), Figma Variant (\`default\` · \`secondary\` · \`line\`; \`line\` with \`orientation="vertical"\` is Figma "Line Vertical"), \`size\` (\`default\` · \`lg\`) and \`orientation\`. \`TabsList\` is the \`role="tablist"\` (\`fullWidth\` stretches it); each \`TabsTrigger\` takes a \`value\`, a label and optional \`icon\` and \`count\`, plus \`eyebrow\` (Figma Layout=Eyebrow) or \`description\` (Layout=Icon top). \`TabsContent\` is the \`role="tabpanel"\` with the same \`value\`. The list is one Tab stop: arrow keys (Left/Right, or Up/Down when vertical), Home and End move between tabs and select them; disabled tabs are skipped.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const icon = (children: ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {children}
  </svg>
);
const icons = {
  square: icon(<path d="M5 3a2 2 0 0 0-2 2M19 3a2 2 0 0 1 2 2M21 19a2 2 0 0 1-2 2M5 21a2 2 0 0 1-2-2M9 3h1M9 21h1M14 3h1M14 21h1M3 9v1M21 9v1M3 14v1M21 14v1" />),
  eye: icon(
    <>
      <path d="M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0" />
      <circle cx="12" cy="12" r="3" />
    </>,
  ),
  code: icon(<path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />),
  history: icon(
    <>
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5M12 7v5l4 2" />
    </>,
  ),
  dollar: icon(<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />),
  bag: icon(
    <>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
    </>,
  ),
  undo: icon(<path d="M9 14 4 9l5-5M4 9h10.5a5.5 5.5 0 0 1 0 11H11" />),
};

const text: CSSProperties = { fontFamily: 'var(--ds-font-sans)', fontSize: 14, lineHeight: '20px', color: 'var(--ds-foreground)' };
const muted: CSSProperties = { ...text, margin: 0, color: 'var(--ds-muted-foreground)' };
const row: CSSProperties = { display: 'flex', justifyContent: 'space-between', gap: 12 };

type PlaygroundArgs = { variant: TabsVariant; size: TabsSize; orientation: 'horizontal' | 'vertical'; icon: boolean; count: boolean; fullWidth: boolean };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { variant: 'default', size: 'default', orientation: 'horizontal', icon: false, count: false, fullWidth: false },
  argTypes: {
    variant: { name: 'Variant', control: 'inline-radio', options: ['default', 'secondary', 'line'] },
    size: { name: 'Size', control: 'inline-radio', options: ['default', 'lg'] },
    orientation: { name: 'Orientation', control: 'inline-radio', options: ['horizontal', 'vertical'] },
    icon: { name: 'Icon' },
    count: { name: 'Count' },
  },
  render: ({ variant, size, orientation, icon: showIcon, count, fullWidth }) => (
    <Tabs defaultValue="overview" variant={variant} size={size} orientation={orientation} style={{ width: 'min(480px, 100%)' }}>
      <TabsList aria-label="Project" fullWidth={fullWidth}>
        {['Overview', 'Activity', 'Settings'].map((label, i) => (
          <TabsTrigger key={label} value={label.toLowerCase()} icon={showIcon ? icons.square : undefined} count={count ? [12, 4, undefined][i] : undefined}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      {['overview', 'activity', 'settings'].map((v) => (
        <TabsContent key={v} value={v}>
          <p style={muted}>The {v} panel.</p>
        </TabsContent>
      ))}
    </Tabs>
  ),
};

/** Figma demo "Tabs": an order with Overview, Tracking, Invoice and Address panels. */
export const Order: StoryObj = {
  render: () => (
    <Tabs defaultValue="overview" style={{ width: 'min(420px, 100%)' }}>
      <TabsList aria-label="Order">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="tracking">Tracking</TabsTrigger>
        <TabsTrigger value="invoice">Invoice</TabsTrigger>
        <TabsTrigger value="address">Address</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Card>
          <CardHeader title="Order #4821" description="Placed on 12 March · 3 items" />
          <CardContent style={{ ...text, display: 'grid', gap: 8 }}>
            <div style={row}>
              <span style={muted}>Subtotal</span>
              <span>$182.00</span>
            </div>
            <div style={row}>
              <span style={muted}>Shipping</span>
              <span>$8.00</span>
            </div>
            <div style={{ ...row, fontWeight: 500 }}>
              <span>Total</span>
              <span>$190.00</span>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="tracking">
        <Card>
          <CardHeader title="In transit" description="Arrives Friday, 15 March" />
          <CardContent>
            <p style={muted}>Left the Lisbon depot this morning.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="invoice">
        <Card>
          <CardHeader title="Invoice INV-4821" description="Paid with Visa •••• 4242" />
          <CardFooter justify="start">
            <Button size="sm" variant="outline">
              Download PDF
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="address">
        <Card>
          <CardHeader title="Shipping address" />
          <CardContent>
            <p style={{ ...text, margin: 0 }}>
              Rua Augusta 120
              <br />
              1100-053 Lisbon, Portugal
            </p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

/** Figma demos "Secondary" and "Line": the other two Variants. */
export const Variants: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 24 }}>
      {(['default', 'secondary', 'line'] as const).map((variant) => (
        <Tabs key={variant} defaultValue="all" variant={variant}>
          <TabsList aria-label={`Filter (${variant})`}>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="open">Open</TabsTrigger>
            <TabsTrigger value="closed">Closed</TabsTrigger>
          </TabsList>
        </Tabs>
      ))}
    </div>
  ),
};

/** Figma demo "Metric tabs": Layout=Eyebrow, the metric's name above its value. */
export const MetricTabs: StoryObj = {
  render: () => (
    <Tabs defaultValue="revenue" variant="secondary">
      <TabsList aria-label="Metric">
        <TabsTrigger value="revenue" eyebrow="Revenue" icon={icons.dollar}>
          $12,480
        </TabsTrigger>
        <TabsTrigger value="orders" eyebrow="Orders" icon={icons.bag}>
          342
        </TabsTrigger>
        <TabsTrigger value="refunds" eyebrow="Refunds" icon={icons.undo}>
          $310
        </TabsTrigger>
      </TabsList>
      {['revenue', 'orders', 'refunds'].map((v) => (
        <TabsContent key={v} value={v}>
          <p style={muted}>Last 30 days of {v}, by day.</p>
        </TabsContent>
      ))}
    </Tabs>
  ),
};

/** Figma demo "Stacked": a pipeline, each stage's name above its tab with a count. */
export const Stacked: StoryObj = {
  render: () => (
    <Tabs defaultValue="leads" variant="line">
      <TabsList aria-label="Pipeline stage">
        {[
          ['leads', 'Leads', 48],
          ['qualified', 'Qualified', 21],
          ['proposal', 'Proposal', 9],
          ['won', 'Won', 4],
        ].map(([v, label, n], i) => (
          <TabsTrigger key={v} value={String(v)} eyebrow={`Stage ${i + 1}`} count={n}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  ),
};

const settings = ['Profile', 'Account', 'Appearance', 'Notifications', 'Billing', 'Security'];

/** Figma demo "Vertical": settings sections in a vertical list beside the panel. */
export const Vertical: StoryObj = {
  render: () => (
    <Tabs defaultValue="notifications" orientation="vertical" variant="line" style={{ width: 'min(560px, 100%)' }}>
      <TabsList aria-label="Settings" style={{ width: 160 }}>
        {settings.map((s) => (
          <TabsTrigger key={s} value={s.toLowerCase()}>
            {s}
          </TabsTrigger>
        ))}
      </TabsList>
      {settings.map((s) => (
        <TabsContent key={s} value={s.toLowerCase()} style={{ display: 'grid', gap: 12 }}>
          <span style={{ ...text, fontWeight: 500 }}>{s}</span>
          {s === 'Notifications' ? (
            <>
              <Switch label="Email digests" caption="A summary every Monday." defaultChecked />
              <Switch label="Mentions" caption="When someone mentions you." defaultChecked />
            </>
          ) : (
            <p style={muted}>Manage your {s.toLowerCase()} settings.</p>
          )}
        </TabsContent>
      ))}
    </Tabs>
  ),
};

/** Figma demo "Sizes": Size=Default and lg. */
export const Sizes: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 16, justifyItems: 'start' }}>
      {(['default', 'lg'] as const).map((size) => (
        <Tabs key={size} defaultValue="week" size={size}>
          <TabsList aria-label={`Range (${size})`}>
            {['Day', 'Week', 'Month', 'Year'].map((r) => (
              <TabsTrigger key={r} value={r.toLowerCase()}>
                {r}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      ))}
    </div>
  ),
};

/** Figma demo "With counts": Figma "Count" after the label. */
export const WithCounts: StoryObj = {
  render: () => (
    <Tabs defaultValue="inbox">
      <TabsList aria-label="Mailbox">
        <TabsTrigger value="inbox" count={12}>
          Inbox
        </TabsTrigger>
        <TabsTrigger value="assigned" count={4}>
          Assigned
        </TabsTrigger>
        <TabsTrigger value="mentions" count={2}>
          Mentions
        </TabsTrigger>
        <TabsTrigger value="done">Done</TabsTrigger>
      </TabsList>
    </Tabs>
  ),
};

/** Figma demo "With icons": Figma "Icon" before the label. */
export const WithIcons: StoryObj = {
  render: () => (
    <Tabs defaultValue="preview" variant="secondary">
      <TabsList aria-label="View">
        <TabsTrigger value="preview" icon={icons.eye}>
          Preview
        </TabsTrigger>
        <TabsTrigger value="code" icon={icons.code}>
          Code
        </TabsTrigger>
        <TabsTrigger value="history" icon={icons.history}>
          History
        </TabsTrigger>
      </TabsList>
    </Tabs>
  ),
};

/** Figma Layout=Icon top: the icon above the label and a description. */
export const IconTop: StoryObj = {
  render: () => (
    <Tabs defaultValue="preview" variant="secondary">
      <TabsList aria-label="View">
        <TabsTrigger value="preview" icon={icons.eye} description="See the page">
          Preview
        </TabsTrigger>
        <TabsTrigger value="code" icon={icons.code} description="Edit the source">
          Code
        </TabsTrigger>
        <TabsTrigger value="history" icon={icons.history} description="Past versions">
          History
        </TabsTrigger>
      </TabsList>
    </Tabs>
  ),
};

/** Figma demo "Disabled": a tab that cannot be chosen yet; the arrow keys skip it. */
export const Disabled: StoryObj = {
  render: () => (
    <Tabs defaultValue="overview">
      <TabsList aria-label="Report">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
        <TabsTrigger value="analytics" disabled>
          Analytics
        </TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
    </Tabs>
  ),
};

/** Figma demo "Full width": a sign-in form whose tabs share the card's width. */
export const FullWidth: StoryObj = {
  render: function Render() {
    const [mode, setMode] = useState('sign-in');
    return (
      <Card style={{ width: 380, maxWidth: '100%' }}>
        <CardContent>
          <Tabs value={mode} onValueChange={setMode} style={{ width: '100%' }}>
            <TabsList aria-label="Account" fullWidth>
              <TabsTrigger value="sign-in">Sign in</TabsTrigger>
              <TabsTrigger value="create">Create account</TabsTrigger>
            </TabsList>
            <TabsContent value="sign-in" style={{ display: 'grid', gap: 12, paddingTop: 8 }}>
              <Field label="Email">
                <Input type="email" name="email" placeholder="you@example.com" />
              </Field>
              <Field label="Password">
                <Input type="password" name="password" />
              </Field>
              <Button>Sign in</Button>
            </TabsContent>
            <TabsContent value="create" style={{ display: 'grid', gap: 12, paddingTop: 8 }}>
              <Field label="Name">
                <Input name="name" />
              </Field>
              <Field label="Work email">
                <Input type="email" name="new-email" placeholder="you@example.com" />
              </Field>
              <Button>Create account</Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    );
  },
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'grid', gap: 16, justifyItems: 'start' }}>
          {(['default', 'secondary', 'line'] as const).map((variant) => (
            <Tabs key={variant} defaultValue="a" variant={variant}>
              <TabsList aria-label={`${variant} (${scheme})`}>
                <TabsTrigger value="a" count={3}>
                  Active
                </TabsTrigger>
                <TabsTrigger value="b">Other</TabsTrigger>
                <TabsTrigger value="c" disabled>
                  Disabled
                </TabsTrigger>
              </TabsList>
            </Tabs>
          ))}
        </div>
      ))}
    </div>
  ),
};
