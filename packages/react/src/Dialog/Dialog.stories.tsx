import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type CSSProperties, type FormEvent, type ReactNode } from 'react';
import { Button } from '../Button';
import { Field, FieldGroup } from '../Field';
import { Input, InputAction } from '../Input';
import { Select, type SelectItem } from '../Select';
import { Separator } from '../Separator';
import { Switch } from '../Switch';
import { Dialog, DialogClose } from './Dialog';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=182-2';

const meta = {
  title: 'Components/Dialog',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Dialog** ([open in Figma](${FIGMA_URL})): a modal window with the header (\`title\`, \`description\`, Figma "Close button" → \`closeButton\`), any content (children) and the \`footer\`. A native modal \`<dialog>\`: focus moves inside and stays there, the page behind is inert and does not scroll, Escape, the Close button or a click on the backdrop closes it, and focus goes back to the trigger. \`DialogClose\` makes a footer button close it. It is 448 px wide (\`width\` changes it) and never taller than the viewport: the content scrolls, the header and footer stay; \`footerVariant="muted"\` gives the "Sticky footer" demo's fill.`,
      },
    },
  },
} satisfies Meta;

export default meta;

// Icons of the Figma demos (Sort UI 2.0 / Lucide, 16 px with a 1.5 px stroke).
const icon = (children: ReactNode, size = 16) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {children}
  </svg>
);
const icons = {
  copy: icon(
    <>
      <rect width="14" height="14" x="8" y="8" rx="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </>,
  ),
  check: icon(<path d="M20 6 9 17l-5-5" />),
  x: icon(<path d="M18 6 6 18M6 6l12 12" />),
  activity: icon(<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />, 32),
};

const muted: CSSProperties = { margin: 0, color: 'var(--ds-muted-foreground)' };
const strong: CSSProperties = { margin: 0, fontWeight: 500 };

type PlaygroundArgs = { title: string; description: string; closeButton: boolean; footer: boolean; footerVariant: 'default' | 'muted'; width: string };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { title: 'Dialog title', description: 'Dialog description — what this dialog does and what happens next.', closeButton: true, footer: true, footerVariant: 'default', width: '448px' },
  argTypes: {
    closeButton: { name: 'Close button' },
    footer: { name: 'Footer' },
    footerVariant: { control: 'inline-radio', options: ['default', 'muted'] },
  },
  render: ({ title, description, closeButton, footer, footerVariant, width }) => (
    <Dialog
      trigger={<Button variant="outline">Open dialog</Button>}
      title={title || undefined}
      description={description || undefined}
      aria-label={title ? undefined : 'Dialog'}
      closeButton={closeButton}
      footerVariant={footerVariant}
      width={width}
      footer={
        footer ? (
          <>
            <DialogClose>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <DialogClose>
              <Button>Continue</Button>
            </DialogClose>
          </>
        ) : undefined
      }
    >
      <p style={{ margin: 0 }}>Dialog content — fields, a list, a preview; the popup grows with it and scrolls past the viewport.</p>
    </Dialog>
  ),
};

const terms = [
  ['1. Your account', "You're responsible for keeping your password safe and for everything that happens under your account."],
  ['2. Bookings and payments', "Prices include taxes unless stated otherwise. You'll always see the total before you confirm a booking."],
  ['3. Cancellations', 'Free cancellation applies up to 48 hours before check-in. After that, the first night is non-refundable.'],
  ['4. Reviews', 'Reviews must describe a real stay. We may remove content that is abusive, fake or off-topic.'],
  ['5. Changes to these terms', "We'll email you at least 30 days before any change takes effect."],
];
const Terms = () => (
  <>
    {terms.map(([heading, text]) => (
      <div key={heading} style={{ display: 'grid', gap: 4 }}>
        <p style={strong}>{heading}</p>
        <p style={muted}>{text}</p>
      </div>
    ))}
  </>
);

const settingsNav = ['General', 'Notifications', 'Personalization', 'Data controls', 'Connected apps', 'Security', 'Subscription'];
const themes: SelectItem[] = ['System', 'Light', 'Dark'].map((label) => ({ value: label.toLowerCase(), label }));
const languages: SelectItem[] = ['Auto-detect', 'English', 'Polski', 'Español'].map((label) => ({ value: label.toLowerCase(), label }));

const cookies = [
  ['Essential', 'Keep you signed in and remember your cart.', true],
  ['Analytics', 'Help us improve by sharing anonymous usage data.', false],
  ['Personalized offers', 'Show deals based on the trips you browse.', false],
] as const;

/** The Figma demos: each button opens one. What a dialog did shows below. */
export const Demos: StoryObj = {
  render: function Demos() {
    const [result, setResult] = useState('');
    const [copied, setCopied] = useState(false);
    const [section, setSection] = useState('General');
    const [cardError, setCardError] = useState<string>();
    const [cardOpen, setCardOpen] = useState(false);

    const addCard = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const number = String(new FormData(event.currentTarget).get('card') ?? '').replace(/\s/g, '');
      if (!/^\d{16}$/.test(number)) return setCardError('Enter the 16 digits on the front of the card.');
      setCardError(undefined);
      setCardOpen(false);
      setResult(`Card ending ${number.slice(-4)} added`);
    };

    return (
      <div style={{ display: 'grid', gap: 16, justifyItems: 'start' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <Dialog
            trigger={<Button variant="outline">Edit profile</Button>}
            title="Edit profile"
            description="Make changes to your profile here. Click save when you're done."
            footer={
              <>
                <DialogClose>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <DialogClose>
                  <Button onClick={() => setResult('Profile saved')}>Save changes</Button>
                </DialogClose>
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
            </FieldGroup>
          </Dialog>

          <Dialog trigger={<Button variant="outline">Share link</Button>} title="Share link" description="Anyone who has this link will be able to view this album.">
            <Input
              aria-label="Album link"
              readOnly
              defaultValue="photos.app/a/porto-weekend"
              action={
                <InputAction aria-label={copied ? 'Copied' : 'Copy link'} onClick={() => setCopied(true)}>
                  {copied ? icons.check : icons.copy}
                </InputAction>
              }
            />
          </Dialog>

          <Dialog trigger={<Button variant="outline">Settings</Button>} title="Settings" width="600px" bodyPadding="flush">
            <div style={{ display: 'grid', gridTemplateColumns: '176px 1fr', minHeight: 360 }}>
              <nav aria-label="Settings sections" style={{ display: 'grid', alignContent: 'start', gap: 2, padding: '0 12px 24px 24px' }}>
                {settingsNav.map((item) => (
                  <Button key={item} variant={item === section ? 'secondary' : 'ghost'} size="sm" aria-current={item === section ? 'page' : undefined} onClick={() => setSection(item)} style={{ justifyContent: 'flex-start' }}>
                    {item}
                  </Button>
                ))}
              </nav>
              <div style={{ display: 'grid', alignContent: 'start', gap: 16, padding: '0 24px 24px 12px' }}>
                <p style={strong}>{section}</p>
                <Field label="Theme" orientation="horizontal">
                  <Select options={themes} defaultValue="system" />
                </Field>
                <Separator />
                <Switch label="Show word count" defaultChecked />
                <Switch label="Spell check" defaultChecked />
                <Separator />
                <Field label="Language" orientation="horizontal">
                  <Select options={languages} defaultValue="auto-detect" />
                </Field>
              </div>
            </div>
          </Dialog>

          <Dialog
            trigger={<Button variant="outline">Welcome</Button>}
            aria-label="Welcome to Beacon"
            closeButton={false}
            bodyPadding="flush"
            footer={
              <>
                <DialogClose>
                  <Button variant="outline">Learn more</Button>
                </DialogClose>
                <DialogClose>
                  <Button onClick={() => setResult('Onboarding started')}>Get started</Button>
                </DialogClose>
              </>
            }
          >
            <div style={{ display: 'grid', placeItems: 'center', height: 160, background: 'var(--ds-muted)', color: 'var(--ds-foreground)' }}>{icons.activity}</div>
            <div style={{ display: 'grid', gap: 12, padding: '24px 24px 0' }}>
              <h2 style={{ margin: 0, fontSize: 20, lineHeight: '28px', fontWeight: 600 }}>Welcome to Beacon</h2>
              <p style={muted}>Get notified about your sites with calmer, smarter monitoring.</p>
              <ul style={{ display: 'grid', gap: 8, margin: 0, paddingLeft: 20 }}>
                <li>Uptime checks every 30 seconds</li>
                <li>Incident alerts and on-call schedules</li>
                <li>A public status page</li>
              </ul>
            </div>
          </Dialog>

          <Dialog
            trigger={<Button variant="outline">Sticky footer</Button>}
            title="Terms of service"
            description="Please read and accept to continue booking."
            footerVariant="muted"
            style={{ maxHeight: 420 }}
            footer={
              <>
                <DialogClose>
                  <Button variant="outline" onClick={() => setResult('Terms declined')}>
                    Decline
                  </Button>
                </DialogClose>
                <DialogClose>
                  <Button onClick={() => setResult('Terms accepted')}>Accept</Button>
                </DialogClose>
              </>
            }
          >
            <Terms />
          </Dialog>

          <Dialog trigger={<Button variant="outline">Scrollable content</Button>} title="Terms of service" description="Please read these before you continue booking." style={{ maxHeight: 340 }}>
            <Terms />
          </Dialog>

          <Dialog
            trigger={<Button variant="outline">In a form</Button>}
            open={cardOpen}
            onOpenChange={(open) => {
              setCardOpen(open);
              if (!open) setCardError(undefined);
            }}
            title="Add a payment card"
            description="Your card details are encrypted and stored securely."
            footer={
              <>
                <DialogClose>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit" form="add-card">
                  Add card
                </Button>
              </>
            }
          >
            <form id="add-card" onSubmit={addCard} noValidate>
              <FieldGroup>
                <Field label="Name on card">
                  <Input name="name" defaultValue="Maya Chen" autoComplete="cc-name" />
                </Field>
                <Field label="Card number" error={cardError}>
                  <Input name="card" placeholder="4242 4242 4242 4242" inputMode="numeric" autoComplete="cc-number" />
                </Field>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <Field label="Expiry date">
                    <Input name="expiry" placeholder="MM / YY" autoComplete="cc-exp" />
                  </Field>
                  <Field label="CVC">
                    <Input name="cvc" placeholder="123" inputMode="numeric" autoComplete="cc-csc" />
                  </Field>
                </div>
              </FieldGroup>
            </form>
          </Dialog>

          <Dialog
            trigger={<Button variant="outline">No close button</Button>}
            title="We value your privacy"
            description="Choose which cookies we can use. You can change this anytime in Settings."
            closeButton={false}
            footer={
              <>
                <DialogClose>
                  <Button variant="outline" onClick={() => setResult('Cookie choices saved')}>
                    Save choices
                  </Button>
                </DialogClose>
                <DialogClose>
                  <Button onClick={() => setResult('All cookies accepted')}>Accept all</Button>
                </DialogClose>
              </>
            }
          >
            {cookies.map(([label, caption, locked]) => (
              <Switch key={label} label={label} caption={caption} defaultChecked={locked} disabled={locked} />
            ))}
          </Dialog>
        </div>
        <p role="status" style={{ margin: 0, minHeight: 20, fontFamily: 'var(--ds-font-sans)', fontSize: 14, color: 'var(--ds-muted-foreground)' }}>
          {result}
        </p>
      </div>
    );
  },
};

// The dialog's markup drawn in the page, without opening a modal, for comparing the parts.
const Still = ({ closeButton = true, muted: mutedFooter = false }: { closeButton?: boolean; muted?: boolean }) => (
  <div className="ds-dialog" role="dialog" aria-label="Dialog title" style={{ display: 'flex' }}>
    <div className="ds-dialog__header">
      <div className="ds-dialog__heading">
        <h2 className="ds-dialog__title">Dialog title</h2>
        <p className="ds-dialog__description">Dialog description — what this dialog does and what happens next.</p>
      </div>
      {closeButton && <Button variant="ghost" size="sm" icon={icons.x} aria-label="Close" className="ds-dialog__close" />}
    </div>
    <div className="ds-dialog__body">
      <p style={{ margin: 0 }}>Dialog content — fields, a list, a preview; the popup grows with it and scrolls past the viewport.</p>
    </div>
    <div className={mutedFooter ? 'ds-dialog__footer ds-dialog__footer--muted' : 'ds-dialog__footer'}>
      <Button variant="outline">Cancel</Button>
      <Button>Continue</Button>
    </div>
  </div>
);

/** Figma "Close button" on and off, and the muted footer, drawn in the page. */
export const Anatomy: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 24, justifyItems: 'start' }}>
      <Still />
      <Still closeButton={false} />
      <Still muted />
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
          <Still muted />
        </div>
      ))}
    </div>
  ),
};
