import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type ReactNode } from 'react';
import { Button } from '../Button';
import { AlertDialog, AlertDialogAction, AlertDialogCancel } from './AlertDialog';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=187-2';

const meta = {
  title: 'Components/Alert Dialog',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Alert Dialog** ([open in Figma](${FIGMA_URL})): \`size\` (\`default\` · \`sm\`), \`media\`, \`title\`, \`description\` and the footer (\`AlertDialogCancel\`, \`AlertDialogAction\`). A native modal \`<dialog>\` with \`role="alertdialog"\`: focus starts on Cancel and stays inside, the page behind is inert and does not scroll, Escape closes it and focus goes back to the trigger. A click on the backdrop does not close it.`,
      },
    },
  },
} satisfies Meta;

export default meta;

// Icons of the Figma demos (Sort UI 2.0 / Lucide, 20 px with a 1.5 px stroke).
const icon = (children: ReactNode) => (
  <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {children}
  </svg>
);
const icons = {
  trash: icon(<path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6" />),
  mapPin: icon(
    <>
      <path d="M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </>,
  ),
  scanFace: icon(<path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />),
};

type PlaygroundArgs = { size: 'default' | 'sm'; destructive: boolean; media: boolean; title: string; description: string };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { size: 'default', destructive: true, media: true, title: 'Delete your account?', description: "This permanently deletes your profile, playlists and listening history. You can't undo this." },
  argTypes: {
    size: { name: 'Size', control: 'inline-radio', options: ['default', 'sm'] },
    destructive: { name: 'Destructive' },
    media: { name: 'Media' },
    title: { name: 'Title' },
    description: { name: 'Description' },
  },
  render: ({ size, destructive, media, title, description }) => (
    <AlertDialog
      trigger={<Button variant="outline">Open dialog</Button>}
      size={size}
      variant={destructive ? 'destructive' : 'default'}
      media={media ? icons.trash : undefined}
      title={title}
      description={description || undefined}
    >
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction variant={destructive ? 'destructive' : 'default'}>{destructive ? 'Delete account' : 'Continue'}</AlertDialogAction>
    </AlertDialog>
  ),
};

/** The Figma demos: each button opens one. The action says what it did below. */
export const Demos: StoryObj = {
  render: function Demos() {
    const [result, setResult] = useState('');
    return (
      <div style={{ display: 'grid', gap: 16, justifyItems: 'start' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <AlertDialog trigger={<Button variant="outline">Log out</Button>} title="Log out of all devices?" description="You'll need to sign in again on your phone, tablet and TV.">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => setResult('Logged out')}>Log out</AlertDialogAction>
          </AlertDialog>
          <AlertDialog trigger={<Button variant="outline">Small</Button>} size="sm" title="Allow notifications?" description="Get notified when your order ships or your driver arrives.">
            <AlertDialogCancel>Don't allow</AlertDialogCancel>
            <AlertDialogAction onClick={() => setResult('Notifications allowed')}>Allow</AlertDialogAction>
          </AlertDialog>
          <AlertDialog trigger={<Button variant="outline">Media</Button>} media={icons.mapPin} title="Share your location?" description="Couriers use it to find you faster. You can turn this off anytime in Settings.">
            <AlertDialogCancel>Not now</AlertDialogCancel>
            <AlertDialogAction onClick={() => setResult('Location shared')}>Share location</AlertDialogAction>
          </AlertDialog>
          <AlertDialog trigger={<Button variant="outline">Small with media</Button>} size="sm" media={icons.scanFace} title="Turn on Face ID?" description="Sign in and pay with just a glance.">
            <AlertDialogCancel>Not now</AlertDialogCancel>
            <AlertDialogAction onClick={() => setResult('Face ID on')}>Turn on</AlertDialogAction>
          </AlertDialog>
          <AlertDialog
            trigger={<Button variant="destructive">Delete account</Button>}
            variant="destructive"
            media={icons.trash}
            title="Delete your account?"
            description="This permanently deletes your profile, playlists and listening history. You can't undo this."
          >
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction variant="destructive" onClick={() => setResult('Account deleted')}>
              Delete account
            </AlertDialogAction>
          </AlertDialog>
        </div>
        <p role="status" style={{ margin: 0, color: 'var(--ds-muted-foreground)' }}>
          {result}
        </p>
      </div>
    );
  },
};

/** The action keeps the dialog open while it works (`event.preventDefault()`), then closes it. */
export const Async: StoryObj = {
  render: function Async() {
    const [open, setOpen] = useState(false);
    const [busy, setBusy] = useState(false);
    return (
      <AlertDialog
        trigger={<Button variant="outline">Archive project</Button>}
        open={open}
        onOpenChange={setOpen}
        title="Archive Porto weekend?"
        description="Everyone loses access until you restore it."
      >
        <AlertDialogCancel disabled={busy}>Cancel</AlertDialogCancel>
        <AlertDialogAction
          disabled={busy}
          onClick={(event) => {
            event.preventDefault();
            setBusy(true);
            setTimeout(() => {
              setBusy(false);
              setOpen(false);
            }, 1000);
          }}
        >
          {busy ? 'Archiving…' : 'Archive'}
        </AlertDialogAction>
      </AlertDialog>
    );
  },
};

// The open dialog's markup, drawn in the page for comparison (a modal one covers everything).
const Panel = ({ size = 'default', destructive, media, title, description, cancel, action }: { size?: 'default' | 'sm'; destructive?: boolean; media?: ReactNode; title: string; description: string; cancel: string; action: ReactNode }) => (
  <div className={['ds-alert-dialog', size === 'sm' && 'ds-alert-dialog--sm', destructive && 'ds-alert-dialog--destructive'].filter(Boolean).join(' ')}>
    <div className="ds-alert-dialog__header">
      {media && <span className="ds-alert-dialog__media">{media}</span>}
      <div className="ds-alert-dialog__heading">
        <p className="ds-alert-dialog__title">{title}</p>
        <p className="ds-alert-dialog__description">{description}</p>
      </div>
    </div>
    <div className="ds-alert-dialog__footer">
      <Button variant="outline">{cancel}</Button>
      {action}
    </div>
  </div>
);

/** Figma "Alert Dialog": Size default and sm, as open dialogs, with Light and Dark. */
export const Sizes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 32, display: 'grid', gap: 32, justifyItems: 'start' }}>
          <Panel destructive media={icons.trash} title="Delete your account?" description="This permanently deletes your profile, playlists and listening history. You can't undo this." cancel="Cancel" action={<Button variant="destructive">Delete account</Button>} />
          <Panel size="sm" media={icons.scanFace} title="Turn on Face ID?" description="Sign in and pay with just a glance." cancel="Not now" action={<Button>Turn on</Button>} />
        </div>
      ))}
    </div>
  ),
};
