import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type CSSProperties, type ReactNode } from 'react';
import { Avatar } from '../Avatar';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { Checkbox } from '../Checkbox';
import { Field, FieldGroup } from '../Field';
import { Input } from '../Input';
import { Kbd, KbdGroup } from '../Kbd';
import { Separator } from '../Separator';
import { Textarea } from '../Textarea';
import { Sheet, SheetClose, type SheetSide } from './Sheet';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=188-115';

const meta = {
  title: 'Components/Sheet',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Sheet** ([open in Figma](${FIGMA_URL})): a modal panel along an edge of the screen, Figma Side → \`side\` (\`right\` · \`left\` · \`top\` · \`bottom\`), with the header (\`title\`, \`description\`, Figma "Close button" → \`closeButton\`), any content (children) and the \`footer\`, whose buttons stack full-width with the main action first. Left and right sheets are full-height and 384 px wide (\`width\`); top and bottom are full-width and as tall as their content. The content scrolls, the header and the footer stay. It behaves like Dialog: a native modal \`<dialog>\`, focus inside, Escape, Close or a click on the backdrop closes it and focus goes back to the trigger; \`SheetClose\` makes a button close it.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const muted: CSSProperties = { margin: 0, color: 'var(--ds-muted-foreground)' };
const strong: CSSProperties = { margin: 0, fontWeight: 500 };
const row: CSSProperties = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 };
// A footer row of two buttons sharing the width (the 80 px footers of the demos).
const pair: CSSProperties = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 };

const x = (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

type PlaygroundArgs = { side: SheetSide; title: string; description: string; closeButton: boolean; footer: boolean };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { side: 'right', title: 'Sheet title', description: 'Sheet description — what this panel is for.', closeButton: true, footer: true },
  argTypes: {
    side: { name: 'Side', control: 'inline-radio', options: ['right', 'left', 'top', 'bottom'] },
    closeButton: { name: 'Close button' },
    footer: { name: 'Footer' },
  },
  render: ({ side, title, description, closeButton, footer }) => (
    <Sheet
      trigger={<Button variant="outline">Open sheet</Button>}
      side={side}
      title={title || undefined}
      description={description || undefined}
      aria-label={title ? undefined : 'Sheet'}
      closeButton={closeButton}
      footer={
        footer ? (
          <>
            <SheetClose>
              <Button>Save changes</Button>
            </SheetClose>
            <SheetClose>
              <Button variant="outline">Cancel</Button>
            </SheetClose>
          </>
        ) : undefined
      }
    >
      <p style={{ margin: 0 }}>Sheet content — a form, settings, a list; it scrolls when taller than the panel.</p>
    </Sheet>
  ),
};

const slots = ['12–1 PM', '1–2 PM', '5–6 PM', '6–7 PM', '7–8 PM'];

const shortcuts: [string, [string, ReactNode][]][] = [
  ['General', [['Open command menu', <KbdGroup key="k"><Kbd label="Command">⌘</Kbd><Kbd>K</Kbd></KbdGroup>], ['Search mail', <Kbd key="s">/</Kbd>], ['Show shortcuts', <Kbd key="q">?</Kbd>]]],
  ['Navigation', [['Go to inbox', <KbdGroup key="gi"><Kbd>G</Kbd><span style={muted}>then</span><Kbd>I</Kbd></KbdGroup>], ['Go to sent', <KbdGroup key="gs"><Kbd>G</Kbd><span style={muted}>then</span><Kbd>S</Kbd></KbdGroup>], ['Next conversation', <Kbd key="j">J</Kbd>], ['Previous conversation', <Kbd key="kk">K</Kbd>]]],
  ['Actions', [['Compose', <Kbd key="c">C</Kbd>], ['Reply', <Kbd key="r">R</Kbd>], ['Archive', <Kbd key="e">E</Kbd>], ['Snooze', <Kbd key="h">H</Kbd>]]],
];

const comments = [
  { who: 'Maya Chen', when: '2h', where: 'Day 3 · Cooking class', text: 'Can we move the cooking class to Thursday? Friday is the only free evening for the fado show.', replies: 2 },
  { who: 'Leo Park', when: '5h', where: 'Day 2 · Belém', text: 'Booked the 10:00 slot for the tower. Tickets are in the shared folder.', replies: 0 },
  { who: 'Ana Ruiz', when: 'Yesterday', where: 'Hotel', text: 'Is breakfast included, or should we plan a café each morning?', replies: 1 },
];
const initials = (name: string) => name.split(' ').map((p) => p[0]).join('');

/** The Figma demos: each button opens one. What a sheet did shows below. */
export const Demos: StoryObj = {
  render: function Demos() {
    const [result, setResult] = useState('');
    const [slot, setSlot] = useState('5–6 PM');
    const [query, setQuery] = useState('');
    const [tab, setTab] = useState<'open' | 'resolved'>('open');
    const groups = shortcuts.map(([group, items]) => [group, items.filter(([label]) => label.toLowerCase().includes(query.toLowerCase()))] as const).filter(([, items]) => items.length);

    return (
      <div style={{ display: 'grid', gap: 16, justifyItems: 'start' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <Sheet
            trigger={<Button variant="outline">Edit profile</Button>}
            title="Edit profile"
            description="Make changes to your profile here. Click save when you're done."
            footer={
              <>
                <SheetClose>
                  <Button onClick={() => setResult('Profile saved')}>Save changes</Button>
                </SheetClose>
                <SheetClose>
                  <Button variant="outline">Cancel</Button>
                </SheetClose>
              </>
            }
          >
            <FieldGroup>
              <Field label="Name">
                <Input defaultValue="Maya Chen" />
              </Field>
              <Field label="Username">
                <Input defaultValue="@maya.travels" />
              </Field>
              <Field label="Email" description="We never share your email with anyone.">
                <Input type="email" defaultValue="maya@example.com" />
              </Field>
            </FieldGroup>
          </Sheet>

          <Sheet
            trigger={<Button variant="outline">Payment details</Button>}
            title="Payment"
            description="Oct 2, 2026 at 2:32 PM"
            footer={
              <div style={pair}>
                <Button variant="outline" onClick={() => setResult('Refund started')}>
                  Refund
                </Button>
                <Button onClick={() => setResult('Receipt downloaded')}>Download receipt</Button>
              </div>
            }
          >
            <div style={{ display: 'grid', gap: 4 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span style={{ fontSize: 30, lineHeight: '36px', fontWeight: 600 }}>$249.00</span>
                <span style={muted}>USD</span>
                <Badge color="green">Succeeded</Badge>
              </div>
              <p style={muted}>Soundwave Premium · Yearly plan</p>
            </div>
            <Separator />
            <p style={strong}>Timeline</p>
            <ol style={{ display: 'grid', gap: 8, margin: 0, paddingLeft: 20 }}>
              <li>Payment started</li>
              <li>Payment succeeded</li>
              <li>Receipt sent to maya.chen@example.com</li>
            </ol>
            <Separator />
            <p style={strong}>Details</p>
            <dl style={{ display: 'grid', gap: 8, margin: 0 }}>
              {[
                ['Payment method', 'Visa 4242'],
                ['Customer', 'Maya Chen'],
                ['Email', 'maya.chen@example.com'],
                ['Statement descriptor', 'SOUNDWAVE PREMIUM'],
                ['Risk evaluation', 'Normal'],
              ].map(([k, v]) => (
                <div key={k} style={row}>
                  <dt style={muted}>{k}</dt>
                  <dd style={{ margin: 0 }}>{v}</dd>
                </div>
              ))}
            </dl>
          </Sheet>

          <Sheet
            trigger={<Button variant="outline">Delivery time</Button>}
            side="bottom"
            title="Delivery time"
            description="Today, Friday, October 2"
            footer={
              <>
                <SheetClose>
                  <Button onClick={() => setResult(`Delivery at ${slot}`)}>Confirm {slot}</Button>
                </SheetClose>
                <SheetClose>
                  <Button variant="outline">Cancel</Button>
                </SheetClose>
              </>
            }
          >
            <ButtonGroup aria-label="Delivery slot">
              {slots.map((s) => (
                <Button key={s} variant={s === slot ? 'secondary' : 'outline'} aria-pressed={s === slot} onClick={() => setSlot(s)}>
                  {s}
                </Button>
              ))}
            </ButtonGroup>
          </Sheet>

          <Sheet trigger={<Button variant="outline">Keyboard shortcuts</Button>} title="Keyboard shortcuts" description="Work through your inbox without the mouse.">
            <Input aria-label="Search shortcuts" placeholder="Search shortcuts" value={query} onChange={(event) => setQuery(event.currentTarget.value)} />
            {groups.map(([group, items]) => (
              <section key={group} style={{ display: 'grid', gap: 8 }}>
                <p style={{ ...muted, fontWeight: 500 }}>{group}</p>
                {items.map(([label, keys]) => (
                  <div key={label} style={row}>
                    <span>{label}</span>
                    {keys}
                  </div>
                ))}
              </section>
            ))}
            {!groups.length && <p style={muted}>No shortcuts match “{query}”.</p>}
          </Sheet>

          <Sheet
            trigger={<Button variant="outline">Edit event</Button>}
            title="Edit event"
            description="Guests get an update when you save."
            footer={
              <div style={pair}>
                <SheetClose>
                  <Button variant="outline">Cancel</Button>
                </SheetClose>
                <SheetClose>
                  <Button onClick={() => setResult('Event saved')}>Save</Button>
                </SheetClose>
              </div>
            }
          >
            <FieldGroup>
              <Field label="Title">
                <Input defaultValue="Morning run with Leo" />
              </Field>
              <div style={pair}>
                <Field label="Date">
                  <Input defaultValue="Sat, Oct 10" />
                </Field>
                <Field label="Time">
                  <Input defaultValue="7:00 AM" />
                </Field>
              </div>
              <Checkbox label="All day" />
              <Field label="Location">
                <Input defaultValue="Riverside Park, north gate" />
              </Field>
            </FieldGroup>
            <Separator />
            <div style={row}>
              <p style={strong}>Guests</p>
              <span style={muted}>3 going</span>
            </div>
            {[
              ['Maya Chen', 'Organizer'],
              ['Leo Park', 'Going'],
              ['Ana Ruiz', 'Going'],
            ].map(([name, status]) => (
              <div key={name} style={{ ...row, justifyContent: 'flex-start' }}>
                <Avatar size="sm" initials={initials(name)} name={name} />
                <span style={{ flex: 1 }}>{name}</span>
                <span style={muted}>{status}</span>
              </div>
            ))}
          </Sheet>

          <Sheet
            trigger={<Button variant="outline">Comments</Button>}
            side="left"
            title="Comments"
            description="Lisbon trip itinerary"
            footer={
              <>
                <Textarea aria-label="Add a comment" placeholder="Add a comment…" />
                <Button onClick={() => setResult('Comment posted')}>Comment</Button>
              </>
            }
          >
            <ButtonGroup aria-label="Show">
              {(['open', 'resolved'] as const).map((t) => (
                <Button key={t} size="sm" variant={tab === t ? 'secondary' : 'outline'} aria-pressed={tab === t} onClick={() => setTab(t)}>
                  {t === 'open' ? 'Open' : 'Resolved'}
                </Button>
              ))}
            </ButtonGroup>
            {tab === 'open' ? (
              comments.map((c) => (
                <article key={c.who} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '4px 12px' }}>
                  <Avatar size="sm" initials={initials(c.who)} name={c.who} />
                  <div style={{ display: 'flex', gap: 8, alignItems: 'baseline' }}>
                    <span style={strong}>{c.who}</span>
                    <span style={muted}>{c.when}</span>
                  </div>
                  <div style={{ gridColumn: 2, display: 'grid', gap: 4 }}>
                    <span style={muted}>{c.where}</span>
                    <p style={{ margin: 0 }}>{c.text}</p>
                    {c.replies > 0 && <span style={muted}>{c.replies === 1 ? '1 reply' : `${c.replies} replies`}</span>}
                  </div>
                </article>
              ))
            ) : (
              <p style={muted}>No resolved comments yet.</p>
            )}
          </Sheet>
        </div>
        <p role="status" style={{ margin: 0, minHeight: 20, fontFamily: 'var(--ds-font-sans)', fontSize: 14, color: 'var(--ds-muted-foreground)' }}>
          {result}
        </p>
      </div>
    );
  },
};

// The sheet's markup drawn in the page, not fixed to an edge, for comparing the Sides.
const Still = ({ side, style }: { side: SheetSide; style?: CSSProperties }) => (
  <div className={`ds-sheet ds-sheet--${side}`} role="dialog" aria-label={`Side ${side}`} style={{ display: 'flex', position: 'static', animation: 'none', ...style }}>
    <div className="ds-sheet__header">
      <div className="ds-sheet__heading">
        <h2 className="ds-sheet__title">Side {side}</h2>
        <p className="ds-sheet__description">Sheet description — what this panel is for.</p>
      </div>
      <Button variant="ghost" size="sm" icon={x} aria-label="Close" className="ds-sheet__close" />
    </div>
    <div className="ds-sheet__body">
      <p style={{ margin: 0 }}>Sheet content — a form, settings, a list; it scrolls when taller than the panel.</p>
    </div>
    <div className="ds-sheet__footer">
      <Button>Save changes</Button>
      <Button variant="outline">Cancel</Button>
    </div>
  </div>
);

/** Figma Side, drawn in the page: left and right 384 px wide (here 480 px tall), top and bottom full-width. */
export const Sides: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 24 }}>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        <Still side="right" style={{ height: 480 }} />
        <Still side="left" style={{ height: 480 }} />
      </div>
      <Still side="top" style={{ width: 'auto' }} />
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
          <Still side="right" style={{ height: 420, maxWidth: '100%' }} />
        </div>
      ))}
    </div>
  ),
};
