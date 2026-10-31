import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type CSSProperties, type ReactNode } from 'react';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { Field, FieldGroup } from '../Field';
import { Input, InputAction } from '../Input';
import { Select, type SelectItem } from '../Select';
import { Separator } from '../Separator';
import { Switch } from '../Switch';
import { Popover, PopoverActions, PopoverClose, type PopoverAlign, type PopoverSide } from './Popover';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=151-2';

const meta = {
  title: 'Components/Popover',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Popover** ([open in Figma](${FIGMA_URL})): a 288 px non-modal panel with the header (\`title\`, \`description\`) and any content (fields, lists, \`PopoverActions\`). It opens from its \`trigger\` (\`aria-expanded\`, \`aria-controls\`) on \`side\` (\`bottom\` · \`top\` · \`left\` · \`right\`) with \`align\` (\`center\` · \`start\` · \`end\`). The panel is a \`role="dialog"\` named by its title; focus moves into it, Escape closes it and focus goes back to the trigger, a click outside or focus leaving it closes it. \`PopoverClose\` makes a button inside close it.`,
      },
    },
  },
} satisfies Meta;

export default meta;

// Room for the open panel under (or over) the trigger.
const stage = (children: ReactNode, style?: CSSProperties) => <div style={{ minHeight: 320, ...style }}>{children}</div>;

// Icons of the Figma demos (Sort UI 2.0 / Lucide, 16 px with a 1.5 px stroke).
const icon = (children: ReactNode) => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {children}
  </svg>
);
const icons = {
  share: icon(<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13" />),
  copy: icon(
    <>
      <rect width="14" height="14" x="8" y="8" rx="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </>,
  ),
  bell: icon(<path d="M10.268 21a2 2 0 0 0 3.464 0M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />),
  filter: icon(<path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />),
  trendingDown: icon(<path d="M16 17h6v-6M22 17l-8.5-8.5-5 5L2 7" />),
};

type PlaygroundArgs = { title: string; description: string; side: PopoverSide; align: PopoverAlign; actions: boolean };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { title: 'Title', description: 'Description', side: 'bottom', align: 'center', actions: true },
  argTypes: {
    side: { control: 'inline-radio', options: ['bottom', 'top', 'left', 'right'] },
    align: { control: 'inline-radio', options: ['center', 'start', 'end'] },
    actions: { name: 'Actions' },
  },
  render: ({ title, description, side, align, actions }) =>
    stage(
      <Popover trigger={<Button variant="outline">Open popover</Button>} title={title || undefined} description={description || undefined} side={side} align={align} defaultOpen>
        <p style={{ margin: 0 }}>Popover body — any content goes here: fields, lists, actions.</p>
        {actions && (
          <PopoverActions>
            <Button variant="outline" size="sm">
              Copy variable
            </Button>
            <Button variant="ghost" size="sm">
              View usages
            </Button>
          </PopoverActions>
        )}
      </Popover>,
      { display: 'grid', placeItems: 'center', minHeight: 480 },
    ),
};

/** Figma demo "Popover": share a playlist by link. */
export const SharePlaylist: StoryObj = {
  render: function Render() {
    const [copied, setCopied] = useState(false);
    return stage(
      <Popover trigger={<Button variant="outline" leadingIcon={icons.share}>Share</Button>} title="Share this playlist" description="Anyone with the link can listen along." align="start">
        <Input
          aria-label="Playlist link"
          readOnly
          defaultValue="https://sort.fm/p/late-night-focus"
          action={
            <InputAction onClick={() => setCopied(true)} aria-label="Copy link">
              {copied ? 'Copied' : icons.copy}
            </InputAction>
          }
        />
        <Switch label="Let listeners add songs" />
      </Popover>,
    );
  },
};

const conditions: SelectItem[] = [
  { value: 'below', label: 'Drops below' },
  { value: 'above', label: 'Rises above' },
];

/** Figma demo "With form": a price alert set up in the panel; Save closes it with `PopoverClose`. */
export const WithForm: StoryObj = {
  render: () =>
    stage(
      <Popover trigger={<Button variant="outline" leadingIcon={icons.trendingDown}>Price alert</Button>} title="Price alert" description="We email you when the fare changes." align="start">
        <FieldGroup>
          <Field label="When the price">
            <Select options={conditions} defaultValue="below" />
          </Field>
          <Field label="Amount">
            <Input defaultValue="240" prefix="€" inputMode="numeric" />
          </Field>
        </FieldGroup>
        <PopoverActions>
          <PopoverClose>
            <Button size="sm">Save alert</Button>
          </PopoverClose>
          <PopoverClose>
            <Button variant="ghost" size="sm">
              Cancel
            </Button>
          </PopoverClose>
        </PopoverActions>
      </Popover>,
    ),
};

const notifications = [
  { who: 'Maya', what: 'added 3 songs to Late night focus', when: '2 min ago', unread: true },
  { who: 'Theo', what: 'started following you', when: '1 h ago', unread: true },
  { who: 'Sort', what: 'Your weekly mix is ready', when: 'Yesterday', unread: false },
];

/** Figma demo "Notifications": a list in the panel, opened from an icon button, aligned to its end. */
export const Notifications: StoryObj = {
  render: () =>
    stage(
      <div style={{ display: 'flex', justifyContent: 'flex-end', width: 360 }}>
        <Popover trigger={<Button variant="ghost" icon={icons.bell} aria-label="Notifications" />} title="Notifications" align="end" width="320px">
          <ul style={{ display: 'grid', gap: 12, margin: 0, padding: 0, listStyle: 'none' }}>
            {notifications.map((n) => (
              <li key={n.who} style={{ display: 'grid', gap: 2 }}>
                <span>
                  <strong style={{ fontWeight: 500 }}>{n.who}</strong> {n.what}
                </span>
                <span style={{ display: 'flex', gap: 8, alignItems: 'center', color: 'var(--ds-muted-foreground)' }}>
                  {n.when} {n.unread && <Badge variant="soft">New</Badge>}
                </span>
              </li>
            ))}
          </ul>
          <Separator />
          <PopoverActions>
            <Button variant="ghost" size="sm">
              Mark all as read
            </Button>
          </PopoverActions>
        </Popover>
      </div>,
    ),
};

/** Figma demo "Filters": checkboxes and a switch; Reset and the results button. */
export const Filters: StoryObj = {
  render: () =>
    stage(
      <Popover trigger={<Button variant="outline" leadingIcon={icons.filter}>Filters</Button>} title="Filters" align="start">
        <div style={{ display: 'grid', gap: 12 }}>
          <Checkbox label="Free cancellation" defaultChecked />
          <Checkbox label="Breakfast included" />
          <Checkbox label="Pets allowed" />
        </div>
        <Separator />
        <Switch label="Only superhosts" defaultChecked />
        <PopoverActions style={{ justifyContent: 'space-between' }}>
          <Button variant="ghost" size="sm">
            Reset
          </Button>
          <PopoverClose>
            <Button size="sm">Show 128 stays</Button>
          </PopoverClose>
        </PopoverActions>
      </Popover>,
    ),
};

/** Figma demo "Placement": the four `side`s, centred on the trigger (`align` lines the panel up with its start or end). */
export const Placement: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, max-content)', gap: '200px 320px', padding: '200px 320px', width: 'max-content' }}>
      {(['top', 'bottom', 'left', 'right'] as const).map((side) => (
        <Popover key={side} trigger={<Button variant="outline">{side}</Button>} title={`Side ${side}`} description="4 px from the trigger." side={side} width="200px" defaultOpen />
      ))}
    </div>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, minHeight: 240 }}>
          <Popover trigger={<Button variant="outline">Share</Button>} title="Share this playlist" description="Anyone with the link can listen along." align="start" defaultOpen>
            <PopoverActions>
              <Button variant="outline" size="sm">
                Copy link
              </Button>
              <Button variant="ghost" size="sm">
                Invite
              </Button>
            </PopoverActions>
          </Popover>
        </div>
      ))}
    </div>
  ),
};
