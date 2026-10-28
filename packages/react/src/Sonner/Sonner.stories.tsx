import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button';
import { Toast, Toaster, toast, type ToasterPosition, type ToastType } from './Sonner';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=325-2';

const meta = {
  title: 'Components/Sonner',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Sonner** ([open in Figma](${FIGMA_URL})): toasts, short notifications that close on their own. Mount \`<Toaster />\` once and call \`toast('Title', { description, action, cancel })\`, \`toast.success\` · \`info\` · \`warning\` · \`error\` · \`loading\`, \`toast.promise\` or \`toast.dismiss\`. Toasts are read out by screen readers (a polite live region), wait while the pointer is over them or focus is inside, and Alt+T moves focus to them. \`Toast\` draws one toast on its own (Figma Type, Title, Description, actions, Close).`,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '100vh', padding: 24, boxSizing: 'border-box', background: 'var(--ds-background)' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

export default meta;

type PlaygroundArgs = { type: ToastType; title: string; description: string; action: boolean; cancel: boolean; closeButton: boolean; stacked: boolean; position: ToasterPosition; duration: number };

/** Press the button to show a toast with these settings. */
export const Playground: StoryObj<PlaygroundArgs> = {
  args: { type: 'default', title: 'Table booked for 4', description: 'Friday, Oct 3 at 7:30 PM · Café Lumière', action: true, cancel: false, closeButton: false, stacked: false, position: 'bottom-right', duration: 4000 },
  argTypes: {
    type: { name: 'Type', control: 'select', options: ['default', 'success', 'info', 'warning', 'error', 'loading'] },
    title: { name: 'Title' },
    description: { name: 'Description' },
    action: { name: 'Action' },
    cancel: { name: 'Cancel' },
    closeButton: { name: 'Close' },
    stacked: { name: 'Stacked (not in Figma)' },
    position: { control: 'select', options: ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'] },
    duration: { control: { type: 'number', step: 1000 } },
  },
  render: ({ type, title, description, action, cancel, closeButton, stacked, position, duration }) => (
    <>
      <Button
        variant="outline"
        onClick={() =>
          toast(title, {
            type,
            description: description || undefined,
            action: action ? { label: 'Undo' } : undefined,
            cancel: cancel ? { label: 'Decline' } : undefined,
          })
        }
      >
        Show toast
      </Button>
      <Toaster position={position} duration={duration} closeButton={closeButton} stacked={stacked} />
    </>
  ),
};

/** Figma "Sonner": every Type, drawn with `Toast` (no timing). */
export const Types: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 24, justifyItems: 'start' }}>
      <Toast title="Draft saved to core/semantic 2.4" description="Consumers on 2.x pick it up on their next sync." />
      {(['success', 'info', 'warning', 'error', 'loading'] as const).map((type) => (
        <Toast key={type} type={type} title="Draft saved to core/semantic 2.4" description="Consumers on 2.x pick it up on their next sync." />
      ))}
    </div>
  ),
};

/** Figma demos, drawn with `Toast`: an action; types stacked 14 px apart; action and cancel; loading then success; Close. */
export const Demos: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 48, justifyItems: 'start' }}>
      <Toast title="Table booked for 4" description="Friday, Oct 3 at 7:30 PM · Café Lumière" actions={<Button size="xs">Undo</Button>} />
      <div style={{ display: 'grid', gap: 14 }}>
        <Toast type="success" title="Your order is on its way" />
        <Toast type="info" title="Your driver is 3 minutes away" />
        <Toast type="warning" title="Your storage is almost full" />
        <Toast type="error" title="We couldn't send your message" />
      </div>
      <Toast
        title="Maya invited you to a trip"
        description="Weekend in Porto"
        actions={
          <>
            <Button size="xs" variant="secondary">
              Decline
            </Button>
            <Button size="xs">Join</Button>
          </>
        }
      />
      <div style={{ display: 'grid', gap: 14 }}>
        <Toast type="loading" title="Uploading 12 photos…" description="This will only take a moment." />
        <Toast type="success" title="12 photos uploaded" description="Added to your album Porto weekend." />
      </div>
      <Toast type="info" title="Your driver is 3 minutes away" onClose={() => {}} />
    </div>
  ),
};

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/** The Toaster at work: each button calls `toast` like an app would. */
export const Toasts: StoryObj = {
  render: () => (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        <Button variant="outline" onClick={() => toast('Table booked for 4', { description: 'Friday, Oct 3 at 7:30 PM · Café Lumière', action: { label: 'Undo', onClick: () => toast('Booking cancelled') } })}>
          Default
        </Button>
        <Button variant="outline" onClick={() => toast.success('Your order is on its way')}>
          Success
        </Button>
        <Button variant="outline" onClick={() => toast.info('Your driver is 3 minutes away')}>
          Info
        </Button>
        <Button variant="outline" onClick={() => toast.warning('Your storage is almost full')}>
          Warning
        </Button>
        <Button variant="outline" onClick={() => toast.error("We couldn't send your message", { action: { label: 'Retry' } })}>
          Error
        </Button>
        <Button
          variant="outline"
          onClick={() => toast('Maya invited you to a trip', { description: 'Weekend in Porto', cancel: { label: 'Decline' }, action: { label: 'Join', onClick: () => toast.success("You've joined Weekend in Porto") } })}
        >
          Action and cancel
        </Button>
        <Button variant="outline" onClick={() => toast.promise(wait(2000), { loading: 'Uploading 12 photos…', success: '12 photos uploaded', error: 'Upload failed' })}>
          Promise
        </Button>
        <Button variant="ghost" onClick={() => toast.dismiss()}>
          Dismiss all
        </Button>
      </div>
      <Toaster />
    </>
  ),
};

/**
 * Not in Figma: `stacked` piles the toasts up, the newest in front and the older ones peeking out behind it. Hover or
 * focus (Alt+T, Tab) spreads them into the list.
 */
export const Stacked: StoryObj = {
  render: () => (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        <Button variant="outline" onClick={() => toast.success('Your order is on its way', { description: 'Arriving Friday between 9 and 11 AM.' })}>
          Success
        </Button>
        <Button variant="outline" onClick={() => toast.info('Your driver is 3 minutes away')}>
          Info
        </Button>
        <Button variant="outline" onClick={() => toast('Maya invited you to a trip', { description: 'Weekend in Porto', cancel: { label: 'Decline' }, action: { label: 'Join' } })}>
          Action and cancel
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            toast.success('Your order is on its way', { description: 'Arriving Friday between 9 and 11 AM.', duration: 20000 });
            toast.warning('Your storage is almost full', { duration: 20000 });
            toast('Maya invited you to a trip', { description: 'Weekend in Porto', cancel: { label: 'Decline' }, action: { label: 'Join' }, duration: 20000 });
          }}
        >
          Show three
        </Button>
      </div>
      <Toaster stacked />
    </>
  ),
};

/** `closeButton` on the Toaster puts the Figma "Close" button on every toast. */
export const WithCloseButton: StoryObj = {
  render: () => (
    <>
      <Button variant="outline" onClick={() => toast.info('Your driver is 3 minutes away', { description: 'Look for a blue Škoda Octavia.' })}>
        Show toast
      </Button>
      <Toaster closeButton position="top-center" />
    </>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  decorators: [(Story) => <Story />],
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'grid', gap: 14, justifyItems: 'start' }}>
          <Toast title={scheme === 'light' ? 'Light' : 'Dark'} description="Friday, Oct 3 at 7:30 PM · Café Lumière" actions={<Button size="xs">Undo</Button>} />
          <Toast type="success" title="Your order is on its way" onClose={() => {}} />
          <Toast type="warning" title="Your storage is almost full" />
          <Toast type="error" title="We couldn't send your message" />
          <Toast type="loading" title="Uploading 12 photos…" description="This will only take a moment." />
        </div>
      ))}
    </div>
  ),
};
