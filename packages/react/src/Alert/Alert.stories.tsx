import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type ReactNode } from 'react';
import { Button } from '../Button';
import { Alert } from './Alert';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=219-2';

const meta = {
  title: 'Components/Alert',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Alert** ([open in Figma](${FIGMA_URL})): \`variant\` (\`default\` · \`destructive\`) with \`title\`, \`description\`, \`icon\` and an \`action\` slot. It is a live region — \`status\` by default, \`alert\` when destructive — so an alert added while the page is open is read out; \`role={undefined}\` turns that off.`,
      },
    },
  },
} satisfies Meta;

export default meta;

// Icons of the Figma demos (Sort UI 2.0 / Lucide, 17.3 px with a 1.25 px stroke, centred in the 16 × 20 icon box).
const ICON = 17.3;
const icon = (children: ReactNode) => (
  <svg viewBox="0 0 24 24" width={ICON} height={ICON} fill="none" stroke="currentColor" strokeWidth={(1.25 * 24) / ICON} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {children}
  </svg>
);
const icons = {
  circleCheck: icon(
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </>,
  ),
  circleAlert: icon(
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4M12 16h.01" />
    </>,
  ),
  info: icon(
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </>,
  ),
  wifiOff: icon(<path d="M12 20h.01M8.5 16.43a5 5 0 0 1 7 0M2 8.82a15 15 0 0 1 4.18-2.64M19 12.86a10 10 0 0 0-2-1.52M22 8.82a15 15 0 0 0-11.29-3.76M5 12.86a10 10 0 0 1 5.17-2.69M2 2l20 20" />),
};

type PlaygroundArgs = { variant: 'default' | 'destructive'; title: string; description: string; icon: boolean; action: boolean };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { variant: 'default', title: 'Booking confirmed', description: 'Your stay at Casa is booked for Sep 18 – 21.', icon: true, action: true },
  argTypes: {
    variant: { name: 'Variant', control: 'inline-radio', options: ['default', 'destructive'] },
    title: { name: 'Title' },
    description: { name: 'Description' },
    icon: { name: 'Icon' },
    action: { name: 'Action' },
  },
  render: ({ variant, title, description, icon: withIcon, action }) => (
    <Alert
      variant={variant}
      style={{ width: 448 }}
      title={title}
      description={description || undefined}
      icon={withIcon ? (variant === 'destructive' ? icons.circleAlert : icons.circleCheck) : undefined}
      action={action ? <Button variant={variant === 'destructive' ? 'ghost' : 'outline'} size="sm">{variant === 'destructive' ? 'Retry' : 'View'}</Button> : undefined}
    />
  ),
};

/** Figma "Alert": Variant Default and Destructive, as in the component set. */
export const Variants: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 40 }}>
      <Alert style={{ width: 448 }} icon={icons.circleAlert} title="Booking confirmed" description="Your stay at Casa is booked for Sep 18 – 21." action={<Button variant="outline" size="sm">View</Button>} />
      <Alert variant="destructive" style={{ width: 448 }} icon={icons.circleAlert} title="Booking confirmed" description="Your stay at Casa is booked for Sep 18 – 21." action={<Button variant="ghost" size="sm">Retry</Button>} />
    </div>
  ),
};

/** Figma demo "Alert". */
export const Basic: StoryObj = {
  render: () => <Alert style={{ width: 448 }} icon={icons.circleCheck} title="Booking confirmed" description="Your stay at Casa Azul is booked for Sep 18 – 21. We've sent the details to maya@example.com." />,
};

/** Figma demo "Destructive": with a ghost action. */
export const Destructive: StoryObj = {
  render: () => (
    <Alert
      variant="destructive"
      style={{ width: 448 }}
      icon={icons.circleAlert}
      title="Payment failed"
      description="Your card ending in 4242 was declined. Update your payment method to keep Premium."
      action={<Button variant="outline" size="sm">Retry</Button>}
    />
  ),
};

/** Figma demo "With action": a primary small button. */
export const WithAction: StoryObj = {
  render: () => (
    <Alert style={{ width: 448 }} icon={icons.info} title="Your free trial ends in 3 days" description="Upgrade to keep offline downloads and ad-free listening." action={<Button size="sm">Upgrade</Button>} />
  ),
};

/** Figma demo "Title only": 48 px tall, stacked 12 px apart. */
export const TitleOnly: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 12, width: 448 }}>
      <Alert icon={icons.circleCheck} title="Your changes have been saved." />
      <Alert icon={icons.wifiOff} title="You're offline. We'll sync when you reconnect." />
    </div>
  ),
};

/** Figma demo "With list": a list in the description. */
export const WithList: StoryObj = {
  render: () => (
    <Alert variant="destructive" style={{ width: 448 }} icon={icons.circleAlert} title="Unable to process your payment">
      <p>Please check the following and try again:</p>
      <ul>
        <li>Your card details are correct</li>
        <li>Your card has enough funds</li>
        <li>Your billing address matches</li>
      </ul>
    </Alert>
  ),
};

/** A live region: the alert appears after an action and screen readers read it out (role `status`). */
export const Live: StoryObj = {
  render: function Live() {
    const [saved, setSaved] = useState(false);
    return (
      <div style={{ display: 'grid', gap: 16, width: 448, justifyItems: 'start' }}>
        <Button onClick={() => setSaved(true)} disabled={saved}>
          Save changes
        </Button>
        {saved && <Alert style={{ width: '100%' }} icon={icons.circleCheck} title="Your changes have been saved." action={<Button variant="ghost" size="sm" onClick={() => setSaved(false)}>Dismiss</Button>} />}
      </div>
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
          <Alert style={{ width: 400 }} icon={icons.circleCheck} title={scheme === 'light' ? 'Light' : 'Dark'} description="Your stay at Casa is booked for Sep 18 – 21." action={<Button variant="outline" size="sm">View</Button>} />
          <Alert variant="destructive" style={{ width: 400 }} icon={icons.circleAlert} title="Payment failed" description="Your card ending in 4242 was declined." action={<Button variant="ghost" size="sm">Retry</Button>} />
        </div>
      ))}
    </div>
  ),
};
