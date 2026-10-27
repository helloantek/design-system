import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { useState, type CSSProperties } from 'react';
import {
  DropdownMenuCheckboxItem,
  DropdownMenuIconItem,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuRow,
  DropdownMenuSeparator,
  DropdownMenuSub,
} from '../DropdownMenu';
import { ContextMenu } from './ContextMenu';
import { icons, photoItems } from './ContextMenu.fixtures';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=161-1174';

const meta = {
  title: 'Components/Context Menu',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 page **Context Menu** ([open in Figma](${FIGMA_URL})). Figma has no component set for it: its demos are **Dropdown Menu Content**, **Item**, **Label** and **Separator** opened at the pointer, so \`ContextMenu\` takes the Dropdown Menu parts as children. Right-click the area (or focus it and press Shift+F10 or the Menu key); the keys then work as in Dropdown Menu. \`DropdownMenuRow\` with \`DropdownMenuIconItem\`s draws the "Chat message" demo's reactions.`,
      },
    },
  },
} satisfies Meta;

export default meta;

// Figma: the menus are 224 px wide.
const menuWidth: CSSProperties = { width: 224 };

const area: CSSProperties = {
  display: 'grid',
  placeItems: 'center',
  boxSizing: 'border-box',
  width: 360,
  height: 200,
  border: '1px dashed var(--ds-border)',
  borderRadius: 8,
  color: 'var(--ds-muted-foreground)',
  fontFamily: 'var(--ds-font-sans)',
  fontSize: 14,
  userSelect: 'none',
  outlineOffset: 2,
};

// The menu opens where the pointer is; leave room for it under the area.
const room: Decorator = (Story) => (
  <div style={{ minHeight: 480 }}>
    <Story />
  </div>
);

/** Figma demo "Context Menu": shortcuts, a submenu with a menubar check item. */
export const Default: StoryObj = {
  decorators: [room],
  render: function Render() {
    const [hotReload, setHotReload] = useState(true);
    return (
      <ContextMenu aria-label="Canvas" trigger={<div style={area}>Right-click here</div>} style={menuWidth}>
        <DropdownMenuItem>Paste here</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem shortcut="⌘/">Show/Hide UI</DropdownMenuItem>
        <DropdownMenuItem shortcut="⇧C">Show/Hide comments</DropdownMenuItem>
        <DropdownMenuSub label="Development">
          <DropdownMenuItem>New plugin</DropdownMenuItem>
          <DropdownMenuItem>Import plugin</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>View API documentation</DropdownMenuItem>
          <DropdownMenuItem>Show/Hide console</DropdownMenuItem>
          <DropdownMenuItem>Use developer VM</DropdownMenuItem>
          <DropdownMenuCheckboxItem type="menubar" checked={hotReload} onCheckedChange={setHotReload}>
            Hot reload plugin
          </DropdownMenuCheckboxItem>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem shortcut="/">Cursor chat</DropdownMenuItem>
        <DropdownMenuItem shortcut="⌘K">Actions…</DropdownMenuItem>
        <DropdownMenuSub label="Plugins">
          <DropdownMenuItem>Manage plugins…</DropdownMenuItem>
        </DropdownMenuSub>
      </ContextMenu>
    );
  },
};

const statuses = [
  { value: 'backlog', label: 'Backlog', icon: icons.circleDashed() },
  { value: 'todo', label: 'Todo', icon: icons.circle },
  { value: 'in-progress', label: 'In Progress', icon: icons.circleDot('var(--ds-palette-orange-solid)') },
  { value: 'in-review', label: 'In Review', icon: icons.circleDashed('var(--ds-palette-green-solid)') },
  { value: 'done', label: 'Done', icon: icons.circleCheck('var(--ds-palette-blue-solid)') },
  { value: 'canceled', label: 'Canceled', icon: icons.circleX },
];

/** Figma demo "Issue": icons, a status submenu with one choice, and a destructive item. */
export const Issue: StoryObj = {
  decorators: [room],
  render: function Render() {
    const [status, setStatus] = useState('in-progress');
    const current = statuses.find((s) => s.value === status)!;
    return (
      <ContextMenu aria-label="Issue" trigger={<div style={area}>Right-click the issue</div>}>
        <DropdownMenuSub label="Status" icon={current.icon}>
          <DropdownMenuRadioGroup aria-label="Status" value={status} onValueChange={setStatus}>
            {statuses.map((s) => (
              <DropdownMenuRadioItem key={s.value} value={s.value} icon={s.icon}>
                {s.label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuSub>
        <DropdownMenuSub label="Assignee" icon={icons.user}>
          <DropdownMenuItem>Assign to me</DropdownMenuItem>
        </DropdownMenuSub>
        <DropdownMenuSub label="Priority" icon={icons.signal}>
          <DropdownMenuItem>Urgent</DropdownMenuItem>
        </DropdownMenuSub>
        <DropdownMenuSub label="Labels" icon={icons.tag}>
          <DropdownMenuItem>Bug</DropdownMenuItem>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem icon={icons.link} shortcut="⇧⌘C">
          Copy link
        </DropdownMenuItem>
        <DropdownMenuItem icon={icons.hash} shortcut="⌘.">
          Copy ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem type="destructive" icon={icons.trash} shortcut="⌘⌫">
          Delete
        </DropdownMenuItem>
      </ContextMenu>
    );
  },
};

/** Figma demo "Photo": a label naming the file over the actions. */
export const Photo: StoryObj = {
  decorators: [room],
  render: () => (
    <ContextMenu aria-label="Photo" style={menuWidth} trigger={<div style={area}>Right-click the photo</div>}>
      {photoItems}
    </ContextMenu>
  ),
};

const reactions = [
  { emoji: '🙂', label: 'Smile' },
  { emoji: '😴', label: 'Sleepy' },
  { emoji: '🫢', label: 'Surprised' },
  { emoji: '😮‍💨', label: 'Phew' },
  { emoji: '🫠', label: 'Melting' },
];

/** Figma demo "Chat message": a row of reactions over the actions. */
export const ChatMessage: StoryObj = {
  decorators: [room],
  render: function Render() {
    const [reaction, setReaction] = useState<string | null>(null);
    return (
      <div style={{ display: 'grid', gap: 12 }}>
        <ContextMenu aria-label="Message" style={menuWidth} trigger={<div style={area}>Right-click the message</div>}>
          <DropdownMenuRow aria-label="Reactions">
            {reactions.map((r) => (
              <DropdownMenuIconItem key={r.label} aria-label={r.label} onClick={() => setReaction(r.emoji)}>
                {r.emoji}
              </DropdownMenuIconItem>
            ))}
            <DropdownMenuIconItem aria-label="Add reaction">{icons.smilePlus}</DropdownMenuIconItem>
          </DropdownMenuRow>
          <DropdownMenuSeparator />
          <DropdownMenuItem icon={icons.reply} shortcut="R">
            Reply
          </DropdownMenuItem>
          <DropdownMenuItem icon={icons.forward}>Forward</DropdownMenuItem>
          <DropdownMenuItem icon={icons.copy} shortcut="⌘C">
            Copy text
          </DropdownMenuItem>
          <DropdownMenuItem icon={icons.pin}>Pin to chat</DropdownMenuItem>
          <DropdownMenuItem icon={icons.mail} shortcut="U">
            Mark as unread
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem icon={icons.pencil} shortcut="E">
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem type="destructive" icon={icons.trash} shortcut="⌫">
            Delete message
          </DropdownMenuItem>
        </ContextMenu>
        <span style={{ fontFamily: 'var(--ds-font-sans)', fontSize: 12, color: 'var(--ds-muted-foreground)' }}>Reaction: {reaction ?? 'none'}</span>
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
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, minHeight: 520 }}>
          <ContextMenu aria-label={`Photo (${scheme})`} style={menuWidth} trigger={<div style={{ ...area, width: '100%' }}>{scheme === 'light' ? 'Light' : 'Dark'}: right-click here</div>}>
            {photoItems}
          </ContextMenu>
        </div>
      ))}
    </div>
  ),
};
