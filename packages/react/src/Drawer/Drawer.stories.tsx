import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type CSSProperties } from 'react';
import { Avatar } from '../Avatar';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { Field, FieldGroup } from '../Field';
import { Input } from '../Input';
import { Radio, RadioGroup } from '../Radio';
import { Separator } from '../Separator';
import { Switch } from '../Switch';
import { Textarea } from '../Textarea';
import { Drawer, DrawerClose, type DrawerDirection } from './Drawer';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=195-109';

const meta = {
  title: 'Components/Drawer',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Drawer** ([open in Figma](${FIGMA_URL})): a rounded modal panel, Figma Direction → \`direction\` (\`down\` at the bottom · \`up\` at the top · \`side\` on the end edge), with the Figma "Swipe handle" (\`swipeHandle\`; drag it towards the edge to close), the header (\`title\`, \`description\`, centred when down or up), any content and the \`footer\`, whose buttons stack full-width with the main action first. It floats 8 px from the edge: 664 px wide when down or up, 384 px wide and full-height on the side (\`width\` changes it). It behaves like Dialog and Sheet: a native modal \`<dialog>\`, focus inside, Escape or a click on the backdrop closes it and focus goes back to the trigger; \`DrawerClose\` makes a button close it. Figma's Drawer has no Close button; \`closeButton\` adds one.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const muted: CSSProperties = { margin: 0, color: 'var(--ds-muted-foreground)' };
const strong: CSSProperties = { margin: 0, fontWeight: 500 };
const row: CSSProperties = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 };
const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.";

type PlaygroundArgs = { direction: DrawerDirection; swipeHandle: boolean; title: string; description: string; footer: boolean };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { direction: 'down', swipeHandle: true, title: 'Drawer title', description: 'Drawer description — what this panel is for.', footer: true },
  argTypes: {
    direction: { name: 'Direction', control: 'inline-radio', options: ['down', 'up', 'side'] },
    swipeHandle: { name: 'Swipe handle' },
    footer: { name: 'Footer' },
  },
  render: ({ direction, swipeHandle, title, description, footer }) => (
    <Drawer
      trigger={<Button variant="outline">Open drawer</Button>}
      direction={direction}
      swipeHandle={swipeHandle}
      title={title || undefined}
      description={description || undefined}
      aria-label={title ? undefined : 'Drawer'}
      footer={
        footer ? (
          <>
            <DrawerClose>
              <Button>Continue</Button>
            </DrawerClose>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </>
        ) : undefined
      }
    >
      <p style={{ margin: 0, textAlign: direction === 'side' ? undefined : 'center' }}>{lorem}</p>
    </Drawer>
  ),
};

const week = [62, 70, 48, 81, 55, 74, 40, 66, 79, 52, 72, 58, 90];
const record: [string, string][] = [
  ['Name', 'Northwind Labs'],
  ['Owner', 'Mira Okafor'],
  ['Industry', 'Logistics software'],
  ['Headcount', '101–250'],
  ['Revenue', '$50M–$100M'],
  ['Website', 'northwind.example.com'],
  ['Last interaction', '17h ago'],
];
const updates = [
  { title: 'Mira Okafor mentioned you', text: '“Can you check the Lisbon itinerary before Friday?”', when: 'Just now', kind: 'mention' },
  { title: 'Receipt saved', text: 'cafe-receipt.jpg was added to Lisbon trip.', when: '2 hours ago', kind: 'action' },
  { title: 'Check-in is open', text: 'SFO → ATH departs Thu, Oct 15 at 16:05.', when: 'Yesterday', kind: 'action' },
  { title: 'Jonas Lindqvist shared a note', text: 'Packing list for the trailhead and the cabin.', when: 'Oct 1', kind: 'mention' },
];

/** The Figma demos: each button opens one. What a drawer did shows below. */
export const Demos: StoryObj = {
  render: function Demos() {
    const [result, setResult] = useState('');
    const [steps, setSteps] = useState(8000);
    const [filter, setFilter] = useState<'all' | 'mention' | 'action'>('all');
    const shown = updates.filter((u) => filter === 'all' || u.kind === filter);

    return (
      <div style={{ display: 'grid', gap: 16, justifyItems: 'start' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <Drawer
            trigger={<Button variant="outline">Step goal</Button>}
            width="384px"
            title="Daily step goal"
            description="Set how many steps you want to walk each day."
            footer={
              <>
                <DrawerClose>
                  <Button onClick={() => setResult(`Goal set to ${steps.toLocaleString('en-US')} steps`)}>Save goal</Button>
                </DrawerClose>
                <DrawerClose>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </>
            }
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32 }}>
              <Button variant="outline" aria-label="Fewer steps" disabled={steps <= 1000} onClick={() => setSteps((s) => s - 500)} icon={<span aria-hidden>−</span>} />
              <div style={{ display: 'grid', textAlign: 'center' }}>
                <span aria-live="polite" style={{ fontSize: 40, lineHeight: '44px', fontWeight: 600 }}>
                  {steps.toLocaleString('en-US')}
                </span>
                <span style={muted}>steps a day</span>
              </div>
              <Button variant="outline" aria-label="More steps" onClick={() => setSteps((s) => s + 500)} icon={<span aria-hidden>+</span>} />
            </div>
            <div aria-hidden style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 96 }}>
              {week.map((h, i) => (
                <span key={i} style={{ flex: 1, height: `${h}%`, borderRadius: 4, background: i === week.length - 1 ? 'var(--ds-primary)' : 'var(--ds-fill-2)' }} />
              ))}
            </div>
          </Drawer>

          <Drawer trigger={<Button variant="outline">Company record</Button>} direction="side" closeButton title="Northwind Labs">
            <dl style={{ display: 'grid', gap: 10, margin: 0 }}>
              {record.map(([k, v]) => (
                <div key={k} style={{ display: 'grid', gridTemplateColumns: '128px 1fr', gap: 12 }}>
                  <dt style={muted}>{k}</dt>
                  <dd style={{ margin: 0 }}>{k === 'Industry' ? <Badge variant="soft">{v}</Badge> : v}</dd>
                </div>
              ))}
            </dl>
            <Separator />
            <p style={muted}>Account summary</p>
            <p style={{ margin: 0 }}>Priya from Northwind Labs asked about route planning for their fleet and requested a demo. No opportunity yet — reply with a short overview and propose times for an intro call.</p>
            <p style={muted}>About the company</p>
            <p style={{ margin: 0 }}>Northwind Labs builds dispatch software for regional delivery fleets, sold per vehicle to logistics teams.</p>
            <div style={row}>
              <p style={muted}>Open tasks</p>
              <Button variant="ghost" size="sm">
                See all
              </Button>
            </div>
            <p style={{ margin: 0 }}>Reply to Priya with times for an intro call</p>
          </Drawer>

          <Drawer trigger={<Button variant="outline">Notifications</Button>} direction="side" closeButton title="Updates" description="3 new since yesterday">
            <ButtonGroup aria-label="Show">
              {(['all', 'mention', 'action'] as const).map((f) => (
                <Button key={f} size="sm" variant={filter === f ? 'secondary' : 'outline'} aria-pressed={filter === f} onClick={() => setFilter(f)}>
                  {f === 'all' ? 'All' : f === 'mention' ? 'Mentions' : 'Actions'}
                </Button>
              ))}
            </ButtonGroup>
            <ul aria-label="Recent" style={{ display: 'grid', gap: 16, margin: 0, padding: 0, listStyle: 'none' }}>
              {shown.map((u) => (
                <li key={u.title} style={{ display: 'grid', gap: 2 }}>
                  <span style={strong}>{u.title}</span>
                  <span>{u.text}</span>
                  <span style={muted}>{u.when}</span>
                </li>
              ))}
            </ul>
          </Drawer>

          <Drawer trigger={<Button variant="outline">Account</Button>} direction="side" closeButton aria-label="Account">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Avatar initials="MC" name="Maya Chen" />
              <span style={{ ...strong, fontSize: 16 }}>Maya Chen</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              <div style={{ padding: 12, borderRadius: 12, background: 'var(--ds-muted)' }}>
                <p style={muted}>Wallet balance</p>
                <p style={{ ...strong, fontSize: 20, lineHeight: '28px' }}>$12.40</p>
              </div>
              <div style={{ padding: 12, borderRadius: 12, background: 'var(--ds-muted)' }}>
                <p style={muted}>Spending limit</p>
                <p style={{ ...strong, fontSize: 20, lineHeight: '28px' }}>$3,500</p>
              </div>
            </div>
            <Separator />
            <p style={muted}>How you pay</p>
            {['Payment methods', 'Autopay', 'Payment preferences', 'Subscriptions'].map((item) => (
              <Button key={item} variant="ghost" style={{ justifyContent: 'flex-start' }} onClick={() => setResult(`${item} opened`)}>
                {item}
              </Button>
            ))}
            <Separator />
            <Switch label="Cashback on every ride" defaultChecked />
          </Drawer>

          <Drawer
            trigger={<Button variant="outline">New automation</Button>}
            direction="side"
            closeButton
            title="New automation"
            footer={
              <>
                <DrawerClose>
                  <Button onClick={() => setResult('Automation created')}>Create automation</Button>
                </DrawerClose>
                <DrawerClose>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </>
            }
          >
            <FieldGroup>
              <Field label="Name">
                <Input defaultValue="Weekly docs clarity review" />
              </Field>
              <RadioGroup label="When should it run?" defaultValue="publish">
                <Radio value="publish" label="Content update" caption="When a page is published" />
                <Radio value="schedule" label="Custom schedule" caption="On a recurring schedule" />
                <Radio value="merge" label="Code change" caption="When a pull request merges" />
              </RadioGroup>
              <Field label="Context repository" description="Cloned so the agent can read the code.">
                <Input defaultValue="northwind/docs-site" />
              </Field>
              <Field label="Additional prompt" description="Appended to our prompt on every run.">
                <Textarea defaultValue="You are a copy editor polishing product docs for clarity and tone." />
              </Field>
            </FieldGroup>
          </Drawer>

          <Drawer trigger={<Button variant="outline">From the top</Button>} direction="up" title="You're offline" description="Changes are saved on this device and sync when you reconnect." footer={<DrawerClose><Button>Got it</Button></DrawerClose>} />
        </div>
        <p role="status" style={{ margin: 0, minHeight: 20, fontFamily: 'var(--ds-font-sans)', fontSize: 14, color: 'var(--ds-muted-foreground)' }}>
          {result}
        </p>
      </div>
    );
  },
};

// The drawer's markup drawn in the page, not fixed to an edge, for comparing the Directions.
const Still = ({ direction, style }: { direction: DrawerDirection; style?: CSSProperties }) => {
  const handle = direction !== 'side' && (
    <div className="ds-drawer__handle" aria-hidden>
      <span className="ds-drawer__bar" />
    </div>
  );
  return (
    <div className={`ds-drawer ds-drawer--${direction}`} role="dialog" aria-label={`Direction ${direction}`} style={{ display: 'flex', position: 'static', animation: 'none', ...style }}>
      {direction === 'down' && handle}
      <div className="ds-drawer__header">
        <div className="ds-drawer__heading">
          <h2 className="ds-drawer__title">Direction {direction}</h2>
          <p className="ds-drawer__description">Drawer description — what this panel is for.</p>
        </div>
      </div>
      <div className="ds-drawer__body">
        <p style={{ margin: 0, textAlign: direction === 'side' ? undefined : 'center' }}>{lorem}</p>
      </div>
      <div className="ds-drawer__footer">
        <Button>Continue</Button>
        <Button variant="outline">Cancel</Button>
      </div>
      {direction === 'up' && handle}
    </div>
  );
};

/** Figma Direction, drawn in the page: down (handle on top), up (handle below) and side (here 480 px tall). */
export const Directions: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <div style={{ display: 'grid', gap: 24 }}>
        <Still direction="down" style={{ width: 'min(664px, 100%)' }} />
        <Still direction="up" style={{ width: 'min(664px, 100%)' }} />
      </div>
      <Still direction="side" style={{ height: 480 }} />
    </div>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24 }}>
          <Still direction="down" style={{ width: '100%', maxWidth: '100%' }} />
        </div>
      ))}
    </div>
  ),
};
