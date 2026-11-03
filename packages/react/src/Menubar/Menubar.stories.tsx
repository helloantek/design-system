import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { RiDownloadLine, RiFileLine, RiFolderLine } from '@remixicon/react';
import {
  DropdownMenuCheckboxItem,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
} from '../DropdownMenu';
import { Menubar, MenubarMenu } from './Menubar';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=161-1175';

const meta = {
  title: 'Components/Menubar',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Menubar** and **Menubar Trigger** ([open in Figma](${FIGMA_URL})): a 32 px bordered bar of 26 px pill triggers (Hover fill-1, Open fill-2), each opening a Dropdown Menu 8 px below it. \`MenubarMenu\` takes the menu's items: DropdownMenuItem (with \`shortcut\` and \`icon\`), DropdownMenuCheckboxItem and DropdownMenuRadioItem (with \`type="menubar"\`: the check on the left), DropdownMenuRadioGroup, DropdownMenuSub and DropdownMenuSeparator. It follows the WAI-ARIA menubar pattern: one Tab stop, Arrow Left / Right between the triggers, Enter / Space / Arrow Down open a menu on its first item; with a menu open, Arrow Left / Right and the pointer switch menus; Escape closes it.`,
      },
    },
  },
  decorators: [(Story) => <div style={{ minHeight: 320 }}>{Story()}</div>],
} satisfies Meta;

export default meta;

const fileMenu = (
  <>
    <DropdownMenuItem shortcut="⌘N">New Tab</DropdownMenuItem>
    <DropdownMenuItem shortcut="⌘T">New Window</DropdownMenuItem>
    <DropdownMenuItem disabled>New Incognito Window</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuSub label="Share">
      <DropdownMenuItem>Email link</DropdownMenuItem>
      <DropdownMenuItem>Messages</DropdownMenuItem>
      <DropdownMenuItem>Notes</DropdownMenuItem>
    </DropdownMenuSub>
    <DropdownMenuItem shortcut="⌘P">Print…</DropdownMenuItem>
  </>
);
const editMenu = (
  <>
    <DropdownMenuItem shortcut="⌘Z">Undo</DropdownMenuItem>
    <DropdownMenuItem shortcut="⇧⌘Z">Redo</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem shortcut="⌘X">Cut</DropdownMenuItem>
    <DropdownMenuItem shortcut="⌘C">Copy</DropdownMenuItem>
    <DropdownMenuItem shortcut="⌘V">Paste</DropdownMenuItem>
  </>
);

function ViewMenu() {
  const [bookmarks, setBookmarks] = useState(false);
  const [urls, setUrls] = useState(true);
  return (
    <>
      <DropdownMenuCheckboxItem type="menubar" checked={bookmarks} onCheckedChange={setBookmarks}>
        Always Show Bookmarks Bar
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem type="menubar" checked={urls} onCheckedChange={setUrls}>
        Always Show Full URLs
      </DropdownMenuCheckboxItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem inset shortcut="⌘R">
        Reload
      </DropdownMenuItem>
      <DropdownMenuItem inset shortcut="⇧⌘R" disabled>
        Force Reload
      </DropdownMenuItem>
    </>
  );
}

function ProfilesMenu() {
  const [profile, setProfile] = useState<string | null>('benoit');
  return (
    <DropdownMenuRadioGroup label="Profiles" value={profile} onValueChange={setProfile}>
      <DropdownMenuRadioItem type="menubar" value="andy">Andy</DropdownMenuRadioItem>
      <DropdownMenuRadioItem type="menubar" value="benoit">Benoit</DropdownMenuRadioItem>
      <DropdownMenuRadioItem type="menubar" value="luis">Luis</DropdownMenuRadioItem>
    </DropdownMenuRadioGroup>
  );
}

export const Playground: StoryObj<{ open: boolean }> = {
  args: { open: false },
  render: (args) => (
    <Menubar key={String(args.open)} aria-label="Browser" defaultValue={args.open ? 'file' : undefined}>
      <MenubarMenu value="file" label="File">
        {fileMenu}
      </MenubarMenu>
      <MenubarMenu label="Edit">{editMenu}</MenubarMenu>
      <MenubarMenu label="View">
        <ViewMenu />
      </MenubarMenu>
      <MenubarMenu label="Profiles">
        <ProfilesMenu />
      </MenubarMenu>
    </Menubar>
  ),
};

/** Figma demo "Menubar": File is open, with shortcuts, a disabled item and a Share submenu. */
export const Default: StoryObj = {
  render: () => (
    <Menubar aria-label="Browser" defaultValue="file" style={{ width: 320 }}>
      <MenubarMenu value="file" label="File">
        {fileMenu}
      </MenubarMenu>
      <MenubarMenu label="Edit">{editMenu}</MenubarMenu>
      <MenubarMenu label="View">
        <ViewMenu />
      </MenubarMenu>
      <MenubarMenu label="Profiles">
        <ProfilesMenu />
      </MenubarMenu>
    </Menubar>
  ),
};

/** Figma demo "Checkbox": checkbox items, then inset items with shortcuts. */
export const Checkbox: StoryObj = {
  render: () => (
    <Menubar aria-label="Browser view" defaultValue="view" style={{ width: 320 }}>
      <MenubarMenu value="view" label="View">
        <ViewMenu />
      </MenubarMenu>
      <MenubarMenu label="Format">
        <DropdownMenuItem>Bold</DropdownMenuItem>
        <DropdownMenuItem>Italic</DropdownMenuItem>
        <DropdownMenuItem>Underline</DropdownMenuItem>
      </MenubarMenu>
    </Menubar>
  ),
};

/** Figma demo "Radio": a radio group picks one option. */
export const Radio: StoryObj = {
  render: function Render() {
    const [theme, setTheme] = useState<string | null>('system');
    return (
      <Menubar aria-label="Editor" defaultValue="theme" style={{ width: 320 }}>
        <MenubarMenu label="File">{fileMenu}</MenubarMenu>
        <MenubarMenu label="Edit">{editMenu}</MenubarMenu>
        <MenubarMenu value="theme" label="Theme">
          <DropdownMenuRadioGroup label="Theme" value={theme} onValueChange={setTheme}>
            <DropdownMenuRadioItem type="menubar" value="light">Light</DropdownMenuRadioItem>
            <DropdownMenuRadioItem type="menubar" value="dark">Dark</DropdownMenuRadioItem>
            <DropdownMenuRadioItem type="menubar" value="system">System</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </MenubarMenu>
      </Menubar>
    );
  },
};

/** Figma demo "With icons": items with a 16 px icon. */
export const WithIcons: StoryObj = {
  render: () => (
    <Menubar aria-label="Editor" defaultValue="file" style={{ width: 320 }}>
      <MenubarMenu value="file" label="File">
        <DropdownMenuItem icon={<RiFileLine />} shortcut="⌘N">
          New File
        </DropdownMenuItem>
        <DropdownMenuItem icon={<RiFolderLine />}>Open Folder</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem icon={<RiDownloadLine />} shortcut="⌘S">
          Save local copy
        </DropdownMenuItem>
      </MenubarMenu>
      <MenubarMenu label="Edit">{editMenu}</MenubarMenu>
      <MenubarMenu label="View">
        <ViewMenu />
      </MenubarMenu>
      <MenubarMenu label="Profiles">
        <ProfilesMenu />
      </MenubarMenu>
    </Menubar>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, minHeight: 280 }}>
          <Menubar aria-label={`Editor (${scheme})`} defaultValue="file">
            <MenubarMenu value="file" label="File">
              <DropdownMenuItem icon={<RiFileLine />} shortcut="⌘N">
                New File
              </DropdownMenuItem>
              <DropdownMenuItem icon={<RiFolderLine />}>Open Folder</DropdownMenuItem>
            </MenubarMenu>
            <MenubarMenu label="Edit">{editMenu}</MenubarMenu>
            <MenubarMenu label="View">
              <ViewMenu />
            </MenubarMenu>
          </Menubar>
        </div>
      ))}
    </div>
  ),
};
