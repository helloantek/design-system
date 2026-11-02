import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type CSSProperties, type ReactNode } from 'react';
import { Avatar } from '../Avatar';
import { avatarImage } from '../Avatar/Avatar.fixtures';
import { Button } from '../Button';
import { Card, CardContent, CardHeader } from '../Card';
import { Input } from '../Input';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './Collapsible';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=297-90';

const meta = {
  title: 'Components/Collapsible',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Collapsible** ([open in Figma](${FIGMA_URL})): Figma State → \`open\` / \`defaultOpen\` / \`onOpenChange\`, the **trigger** slot → \`CollapsibleTrigger\` (the Figma sample: a 14/20 Medium label with a chevron; or any button with \`asChild\`), the **content** slot → \`CollapsibleContent\`, 16 px below. The trigger is a button with \`aria-expanded\` and \`aria-controls\`; Enter or Space toggles it; closed content is \`hidden\`. \`disabled\` stops the trigger.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const icon = (path: ReactNode) => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {path}
  </svg>
);
const text: CSSProperties = { fontFamily: 'var(--ds-font-sans)', fontSize: 14, lineHeight: '20px', letterSpacing: '-0.005em', margin: 0 };
const muted: CSSProperties = { ...text, color: 'var(--ds-muted-foreground)' };
const strong: CSSProperties = { ...text, color: 'var(--ds-foreground)', fontWeight: 500 };
const small: CSSProperties = { ...muted, fontSize: 12, lineHeight: '16px' };

const comments = [
  { name: 'Hana Mizuno', time: 'Yesterday', text: 'Booked the cabin with the hot tub. Check-in is after 4 PM, so let’s hike first.', src: avatarImage },
  { name: 'Pablo Reyes', time: '2 days ago', text: 'I can drive four of us from Oakland. Leaving at 7 AM to beat traffic on I-80.', initials: 'P' },
];

/** The Figma content sample: two comments, 16 px apart. */
function Replies() {
  return (
    <>
      {comments.map((c) => (
        <div key={c.name} style={{ display: 'flex', gap: 12 }}>
          <Avatar size="sm" src={c.src} initials={c.initials} name={c.name} style={c.src ? undefined : { background: 'var(--ds-palette-orange-solid)', color: 'var(--ds-primary-foreground)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={strong}>{c.name}</span>
              <span style={small}>{c.time}</span>
            </div>
            <p style={muted}>{c.text}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export const Playground: StoryObj<{ defaultOpen: boolean; disabled: boolean }> = {
  args: { defaultOpen: false, disabled: false },
  render: ({ defaultOpen, disabled }) => (
    <div style={{ width: 448, maxWidth: '100%' }}>
      <Collapsible key={String(defaultOpen)} defaultOpen={defaultOpen} disabled={disabled}>
        <CollapsibleTrigger>Replies</CollapsibleTrigger>
        <CollapsibleContent>
          <Replies />
        </CollapsibleContent>
      </Collapsible>
    </div>
  ),
};

/** Figma State=Closed and State=Open, with the trigger's label following the state. */
export const States: StoryObj = {
  render: () => (
    <div style={{ width: 448, maxWidth: '100%', display: 'grid', gap: 40 }}>
      {[false, true].map((open) => (
        <Collapsible key={String(open)} defaultOpen={open}>
          <CollapsibleTrigger>{open ? 'Hide replies' : 'Show replies'}</CollapsibleTrigger>
          <CollapsibleContent>
            <Replies />
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  ),
};

/** Figma demo "Collapsible": replies inside a Card. */
export const Default: StoryObj = {
  render: function Render() {
    const [open, setOpen] = useState(true);
    return (
      <Card style={{ width: 448, maxWidth: '100%' }}>
        <CardHeader title="Weekend at Lake Tahoe" description="Cabin for six near Tahoe City, Friday to Sunday. Split four ways, it’s $310 each." />
        <CardContent>
          <Collapsible open={open} onOpenChange={setOpen}>
            <CollapsibleTrigger>{open ? 'Hide replies' : 'Show replies'}</CollapsibleTrigger>
            <CollapsibleContent>
              <Replies />
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>
    );
  },
};

/** Figma demo "Settings panel": one radius for all corners, or an Outline icon button that opens one per corner. */
export const SettingsPanel: StoryObj = {
  render: function Render() {
    const [open, setOpen] = useState(true);
    const corners = ['Top left', 'Top right', 'Bottom left', 'Bottom right'];
    return (
      <Card style={{ width: 448, maxWidth: '100%' }}>
        <CardHeader title="Radius" description="Set the corner radius of the element." />
        <CardContent>
          <Collapsible open={open} onOpenChange={setOpen} style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 8 }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              {!open && <Input aria-label="Radius, all corners" defaultValue="0" />}
              <CollapsibleContent style={{ display: open ? 'grid' : undefined, gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {corners.map((c) => (
                  <Input key={c} aria-label={`Radius, ${c.toLowerCase()}`} defaultValue="0" />
                ))}
              </CollapsibleContent>
            </div>
            <CollapsibleTrigger asChild>
              <Button
                variant="outline"
                aria-label={open ? 'One radius for all corners' : 'A radius for each corner'}
                icon={open ? icon(<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />) : icon(<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />)}
              />
            </CollapsibleTrigger>
          </Collapsible>
        </CardContent>
      </Card>
    );
  },
};

const orderItems = [
  { name: 'Linen overshirt', detail: 'Sand · M', price: '$68.00' },
  { name: 'Merino crew socks', detail: 'Charcoal · 2 pairs', price: '$24.00' },
  { name: 'Canvas tote', detail: 'Natural', price: '$36.00' },
];

function OrderItem({ name, detail, price }: (typeof orderItems)[number]) {
  return (
    <li style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 12px', borderRadius: 'var(--ds-radius-md)', boxShadow: 'inset 0 0 0 1px var(--ds-border)' }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={strong}>{name}</div>
        <div style={small}>{detail}</div>
      </div>
      <span style={strong}>{price}</span>
    </li>
  );
}

/** Figma demo "Order summary": a Ghost icon button in the header; the first item stays visible. */
export const OrderSummary: StoryObj = {
  render: function Render() {
    const [open, setOpen] = useState(true);
    const list: CSSProperties = { listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 };
    return (
      <Collapsible open={open} onOpenChange={setOpen} style={{ width: 448, maxWidth: '100%', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <h3 style={{ ...strong, fontWeight: 500 }}>Order #4821</h3>
            <p style={{ ...muted, fontSize: 12, lineHeight: '16px' }}>Placed Sep 28 · 3 items · $128.00</p>
          </div>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              aria-label={open ? 'Show fewer items' : 'Show all items'}
              icon={open ? icon(<path d="m7 20 5-5 5 5M7 4l5 5 5-5" />) : icon(<path d="m7 15 5 5 5-5M7 9l5-5 5 5" />)}
            />
          </CollapsibleTrigger>
        </div>
        <ul style={list}>
          <OrderItem {...orderItems[0]} />
        </ul>
        <CollapsibleContent style={{ gap: 12 }}>
          <ul style={list}>
            {orderItems.slice(1).map((item) => (
              <OrderItem key={item.name} {...item} />
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};

const stops = [
  [
    { time: '16:05', date: 'Thu, Oct 15', city: 'San Francisco', code: 'SFO', dot: 'var(--ds-palette-green-solid)' },
    { time: '11:55', date: 'Fri, Oct 16', city: 'Frankfurt', code: 'FRA', dot: 'var(--ds-palette-blue-solid)' },
  ],
  [
    { time: '13:40', date: 'Fri, Oct 16', city: 'Frankfurt', code: 'FRA', dot: 'var(--ds-palette-green-solid)' },
    { time: '17:45', date: 'Fri, Oct 16', city: 'Athens', code: 'ATH', dot: 'var(--ds-palette-blue-solid)' },
  ],
];

function Leg({ legs }: { legs: (typeof stops)[number] }) {
  return (
    <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
      {legs.map((s, i) => (
        <li key={s.time} style={{ display: 'flex', gap: 8, position: 'relative' }}>
          <span aria-hidden style={{ width: 20, display: 'flex', justifyContent: 'center', paddingTop: 4 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', boxShadow: `0 0 0 2px ${s.dot}`, marginTop: 2 }} />
            {i === 0 && <span style={{ position: 'absolute', left: 9.5, top: 18, bottom: -12, width: 1, background: 'var(--ds-border)' }} />}
          </span>
          <div style={{ width: 80 }}>
            <div style={strong}>{s.time}</div>
            <div style={small}>{s.date}</div>
          </div>
          <div>
            <div style={strong}>{s.city}</div>
            <div style={small}>{s.code}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Figma demo "Flight details": an Outline sm button that says what it does. */
export const FlightDetails: StoryObj = {
  render: function Render() {
    const [open, setOpen] = useState(true);
    return (
      <Card style={{ width: 448, maxWidth: '100%' }}>
        <CardContent>
          <Collapsible open={open} onOpenChange={setOpen}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
                <h3 aria-label="SFO to ATH" style={{ ...strong, fontSize: 16, lineHeight: '24px', display: 'flex', alignItems: 'center', gap: 8 }}>
                  SFO {icon(<path d="M5 12h14m-7-7 7 7-7 7" />)} ATH
                </h3>
                <p style={muted}>Thu, Oct 15 · 1 stop · 15h 40m</p>
              </div>
              <CollapsibleTrigger asChild>
                <Button variant="outline" size="sm">
                  {open ? 'Hide details' : 'Show details'}
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent>
              <Leg legs={stops[0]} />
              <p style={{ ...muted, fontSize: 12, lineHeight: '16px', textAlign: 'center', padding: 10, borderRadius: 'var(--ds-radius-md)', background: 'var(--ds-muted)' }}>Layover in Frankfurt · 1h 45m</p>
              <Leg legs={stops[1]} />
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>
    );
  },
};

/** `disabled`: the trigger does nothing. */
export const Disabled: StoryObj = {
  render: () => (
    <Collapsible disabled style={{ width: 448, maxWidth: '100%' }}>
      <CollapsibleTrigger>Show replies</CollapsibleTrigger>
      <CollapsibleContent>
        <Replies />
      </CollapsibleContent>
    </Collapsible>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24 }}>
          <Collapsible defaultOpen>
            <CollapsibleTrigger>Hide replies ({scheme})</CollapsibleTrigger>
            <CollapsibleContent>
              <Replies />
            </CollapsibleContent>
          </Collapsible>
        </div>
      ))}
    </div>
  ),
};
