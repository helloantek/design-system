import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState, type ReactNode } from 'react';
import {
  RiAddLine,
  RiArrowDownSLine,
  RiArrowLeftLine,
  RiBankCardLine,
  RiBarChartLine,
  RiCalculatorLine,
  RiCalendarLine,
  RiComputerLine,
  RiContrastLine,
  RiDashboardLine,
  RiDownloadLine,
  RiEmotionLine,
  RiEqualizerLine,
  RiFileCopyLine,
  RiFileLine,
  RiFolderAddLine,
  RiFolderLine,
  RiInboxLine,
  RiLogoutBoxRLine,
  RiMoonLine,
  RiNotification3Line,
  RiPaletteLine,
  RiSearchLine,
  RiStackLine,
  RiSunLine,
  RiTeamLine,
  RiTranslate2,
  RiUserAddLine,
  RiUserLine,
} from '@remixicon/react';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { Empty } from '../Empty';
import { Kbd } from '../Kbd';
import { Popover } from '../Popover';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../Tabs';
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from './Command';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=208-2';

const meta = {
  title: 'Components/Command',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Command**, **Command Item**, **Command Group Heading** and **Command Separator** ([open in Figma](${FIGMA_URL})): a search field over a filtered list of commands. \`CommandInput\` keeps focus while Arrow Up / Down (Home / End) move the selected item and Enter runs it (\`onSelect\`); typing filters the items by their text, \`value\` and \`keywords\`, hiding empty groups and separators, and \`CommandEmpty\` shows when nothing matches. Items take an \`icon\`, a \`description\`, a \`shortcut\` (or any trailing note), \`checked\` and \`disabled\`. \`CommandDialog\` opens it as a modal palette; \`plain\` puts it inside a Popover.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const log = (what: string) => () => console.info(`Ran: ${what}`);

const suggestions = (
  <>
    <CommandGroup heading="Suggestions">
      <CommandItem icon={<RiCalendarLine />} onSelect={log('Calendar')}>
        Calendar
      </CommandItem>
      <CommandItem icon={<RiEmotionLine />} onSelect={log('Search Emoji')}>
        Search Emoji
      </CommandItem>
      <CommandItem icon={<RiCalculatorLine />} disabled>
        Calculator
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem icon={<RiUserLine />} shortcut="P" onSelect={log('Profile')}>
        Profile
      </CommandItem>
      <CommandItem icon={<RiBankCardLine />} shortcut="B" keywords={['invoices', 'plan']} onSelect={log('Billing')}>
        Billing
      </CommandItem>
      <CommandItem icon={<RiEqualizerLine />} shortcut="/" keywords={['preferences']} onSelect={log('Settings')}>
        Settings
      </CommandItem>
    </CommandGroup>
  </>
);

const emptyState = (
  <CommandEmpty>
    <Empty titleAs="p" icon={<RiSearchLine />} title="No results found." description="Try another word, or check the spelling." />
  </CommandEmpty>
);

export const Playground: StoryObj<{ placeholder: string; search: string; width: string }> = {
  args: { placeholder: 'Placeholder', search: '', width: '450px' },
  render: (args) => (
    <Command key={args.search} label="Commands" defaultSearch={args.search} width={args.width}>
      <CommandInput placeholder={args.placeholder} />
      <CommandList>
        {suggestions}
        {emptyState}
      </CommandList>
    </Command>
  ),
};

/** Figma demo "Command": suggestions (one disabled) and settings with shortcuts. */
export const Default: StoryObj = {
  render: () => (
    <Command label="Commands" width="450px">
      <CommandInput placeholder="Placeholder" />
      <CommandList>
        {suggestions}
        {emptyState}
      </CommandList>
    </Command>
  ),
};

/** Figma Command Item State=Default / Selected / Disabled, with the leading slot, a shortcut and Checked. */
export const ItemStates: StoryObj = {
  render: () => (
    <Command label="Item states">
      <CommandInput placeholder="Filter" />
      <CommandList>
        <CommandItem icon={<RiFileLine />}>Selected (the first item)</CommandItem>
        <CommandItem icon={<RiFileLine />}>Default</CommandItem>
        <CommandItem icon={<RiFileLine />} disabled>
          Disabled
        </CommandItem>
        <CommandItem icon={<RiFileLine />} shortcut="⌘K">
          With a shortcut
        </CommandItem>
        <CommandItem icon={<RiFileLine />} checked>
          Checked
        </CommandItem>
        <CommandItem>Without a leading icon</CommandItem>
      </CommandList>
    </Command>
  ),
};

const people = [
  { name: 'Shiryoku', role: 'Owner' },
  { name: 'Alex Derek', role: 'Designer' },
  { name: 'Mira Bloom', role: 'Designer' },
];

/** Figma demo "With tabs": tabs under the search narrow the list to one kind of result. */
export const WithTabs: StoryObj = {
  render: function Render() {
    const [tab, setTab] = useState('all');
    const show = (kind: string) => tab === 'all' || tab === kind;
    const list = (
      <CommandList maxHeight="480px">
        {show('actions') && (
          <CommandGroup heading="Actions">
            <CommandItem icon={<RiAddLine />}>Create new task</CommandItem>
            <CommandItem icon={<RiFileCopyLine />}>Duplicate page</CommandItem>
            <CommandItem icon={<RiDownloadLine />}>Export as CSV</CommandItem>
          </CommandGroup>
        )}
        {tab === 'all' && <CommandSeparator />}
        {show('files') && (
          <CommandGroup heading="Files">
            <CommandItem icon={<RiFileLine />}>src/app/page.tsx</CommandItem>
            <CommandItem icon={<RiFileLine />}>package.json</CommandItem>
            <CommandItem icon={<RiFileLine />}>next.config.js</CommandItem>
          </CommandGroup>
        )}
        {tab === 'all' && <CommandSeparator />}
        {show('people') && (
          <CommandGroup heading="People">
            {people.map((p) => (
              <CommandItem key={p.name} icon={<Avatar size="xs" initials={p.name[0]} />} shortcut={p.role} keywords={[p.role]}>
                {p.name}
              </CommandItem>
            ))}
          </CommandGroup>
        )}
        {emptyState}
      </CommandList>
    );
    return (
      <Command label="Search the workspace" width="450px">
        <CommandInput placeholder="Search across the workspace…" />
        <Tabs value={tab} onValueChange={setTab}>
          <div style={{ padding: '2px 6px 0' }}>
            <TabsList fullWidth aria-label="Result type">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="actions">Actions</TabsTrigger>
              <TabsTrigger value="files">Files</TabsTrigger>
              <TabsTrigger value="people">People</TabsTrigger>
            </TabsList>
          </div>
          {['all', 'actions', 'files', 'people'].map((t) => (
            <TabsContent key={t} value={t}>
              {tab === t && list}
            </TabsContent>
          ))}
        </Tabs>
      </Command>
    );
  },
};

const workspaces = [
  { name: 'ACME Inc.', role: 'Owner', members: 24 },
  { name: 'Lumen Studio', role: 'Admin', members: 8 },
  { name: 'Northwind Labs', role: 'Member', members: 142 },
  { name: 'Harbor Bank', role: 'Member', members: 67 },
  { name: 'Paper Kite', role: 'Member', members: 6 },
  { name: 'Juniper Health', role: 'Guest', members: 12, blocked: true },
];

/** Figma demo "Workspace switcher": two-line items with a picture, a check on the current one and a blocked one. */
export const WorkspaceSwitcher: StoryObj = {
  render: function Render() {
    const [current, setCurrent] = useState('ACME Inc.');
    return (
      <Command label="Workspaces" width="450px">
        <CommandInput placeholder="Find workspace…" />
        <CommandList maxHeight="480px">
          <CommandGroup heading="Workspaces">
            {workspaces.map((w) => (
              <CommandItem
                key={w.name}
                icon={<Avatar size="sm" shape="square" initials={w.name[0]} />}
                description={`${w.role} · ${w.members} members`}
                checked={current === w.name}
                disabled={w.blocked}
                shortcut={w.blocked ? 'Blocked' : undefined}
                onSelect={() => setCurrent(w.name)}
              >
                {w.name}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Manage">
            <CommandItem icon={<RiAddLine />}>New workspace</CommandItem>
            <CommandItem icon={<RiStackLine />}>Browse workspaces</CommandItem>
            <CommandItem icon={<RiLogoutBoxRLine />}>Leave workspace</CommandItem>
          </CommandGroup>
          {emptyState}
        </CommandList>
      </Command>
    );
  },
};

/** Figma Command Variant=Empty: nothing matches the search. */
export const EmptyResults: StoryObj = {
  render: () => (
    <Command label="Commands" defaultSearch="xyz">
      <CommandInput placeholder="Placeholder" />
      <CommandList>
        {suggestions}
        <CommandEmpty>
          <Empty titleAs="p" icon={<RiSearchLine />} title="No results found." description="You haven't created any projects yet. Get started by creating your first project." />
        </CommandEmpty>
      </CommandList>
    </Command>
  ),
};

const themes: [string, ReactNode][] = [
  ['Light', <RiSunLine key="i" />],
  ['Dark', <RiMoonLine key="i" />],
  ['System', <RiComputerLine key="i" />],
  ['High contrast', <RiContrastLine key="i" />],
];

/** Figma demo "Nested pages": "Change theme…" opens a page of themes; Back (or Backspace in an empty field) returns. */
export const NestedPages: StoryObj = {
  render: function Render() {
    const [page, setPage] = useState<'root' | 'theme'>('root');
    const [search, setSearch] = useState('');
    const [theme, setTheme] = useState('System');
    const go = (next: 'root' | 'theme') => {
      setPage(next);
      setSearch('');
    };
    return (
      <Command label={page === 'root' ? 'Commands' : 'Themes'} width="450px" search={search} onSearchChange={setSearch}>
        <CommandInput
          placeholder={page === 'root' ? 'Type a command or search…' : 'Pick a theme…'}
          onKeyDown={(event) => {
            if (event.key === 'Backspace' && search === '' && page !== 'root') go('root');
          }}
        />
        <CommandList>
          {page === 'root' ? (
            <>
              <CommandGroup heading="Navigate">
                <CommandItem icon={<RiDashboardLine />}>Dashboard</CommandItem>
                <CommandItem icon={<RiInboxLine />}>Inbox</CommandItem>
                <CommandItem icon={<RiFolderLine />}>Projects</CommandItem>
                <CommandItem icon={<RiTeamLine />}>Members</CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Preferences">
                <CommandItem icon={<RiPaletteLine />} onSelect={() => go('theme')}>
                  Change theme…
                </CommandItem>
                <CommandItem icon={<RiTranslate2 />}>Change language</CommandItem>
                <CommandItem icon={<RiNotification3Line />}>Notification settings</CommandItem>
              </CommandGroup>
            </>
          ) : (
            <>
              <CommandItem icon={<RiArrowLeftLine />} value="Back" onSelect={() => go('root')}>
                Back
              </CommandItem>
              {themes.map(([name, icon]) => (
                <CommandItem key={name} icon={icon} checked={theme === name} onSelect={() => setTheme(name)}>
                  {name}
                </CommandItem>
              ))}
            </>
          )}
          {emptyState}
        </CommandList>
      </Command>
    );
  },
};

/** Figma demo "Dialog": a button (or / and ⌘K) opens the palette in a modal window; running an item closes it. */
export const Dialog: StoryObj = {
  render: function Render() {
    const [open, setOpen] = useState(false);
    useEffect(() => {
      const key = (event: KeyboardEvent) => {
        const typing = event.target instanceof HTMLElement && event.target.closest('input, textarea, [contenteditable]');
        if ((event.key === 'k' && (event.metaKey || event.ctrlKey)) || (event.key === '/' && !typing)) {
          event.preventDefault();
          setOpen(true);
        }
      };
      document.addEventListener('keydown', key);
      return () => document.removeEventListener('keydown', key);
    }, []);
    const run = (what: string) => () => {
      console.info(`Ran: ${what}`);
      setOpen(false);
    };
    return (
      <>
        <Button variant="outline" leadingIcon={<RiSearchLine />} onClick={() => setOpen(true)} aria-keyshortcuts="/ Control+K Meta+K">
          Search workspace <Kbd>/</Kbd>
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen} label="Search workspace">
          <CommandInput />
          <CommandList>
            <CommandGroup heading="Pages">
              <CommandItem icon={<RiDashboardLine />} onSelect={run('Overview')}>
                Overview
              </CommandItem>
              <CommandItem icon={<RiBarChartLine />} onSelect={run('Analytics')}>
                Analytics
              </CommandItem>
              <CommandItem icon={<RiBankCardLine />} onSelect={run('Billing')}>
                Billing
              </CommandItem>
              <CommandItem icon={<RiTeamLine />} onSelect={run('Team')}>
                Team
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Actions">
              <CommandItem icon={<RiUserAddLine />} onSelect={run('Invite a member')}>
                Invite a member
              </CommandItem>
              <CommandItem icon={<RiFolderAddLine />} onSelect={run('Create project')}>
                Create project
              </CommandItem>
              <CommandItem icon={<RiEqualizerLine />} onSelect={run('Open settings')}>
                Open settings
              </CommandItem>
            </CommandGroup>
            {emptyState}
          </CommandList>
        </CommandDialog>
      </>
    );
  },
};

const everyone = ['Adam Miller', 'Alex Derek', 'Mira Bloom', 'Priya Raman', 'Jonas Lindqvist', 'Tomás Herrera'];

/** Figma demo "In a popover": a person picker; the Command fills the Popover without its own surface. */
export const InAPopover: StoryObj = {
  parameters: { layout: 'padded' },
  render: function Render() {
    const [person, setPerson] = useState('Adam Miller');
    const [open, setOpen] = useState(false);
    return (
      <div style={{ minHeight: 360, display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
        <Popover
          open={open}
          onOpenChange={setOpen}
          width="240px"
          aria-label="Assignee"
          trigger={
            <Button variant="outline" leadingIcon={<Avatar size="xs" initials={person[0]} />} trailingIcon={<RiArrowDownSLine />}>
              {person}
            </Button>
          }
        >
          <Command label="People" plain>
            <CommandInput placeholder="Search people…" />
            <CommandList>
              {everyone.map((name) => (
                <CommandItem
                  key={name}
                  icon={<Avatar size="xs" initials={name[0]} />}
                  checked={person === name}
                  onSelect={() => {
                    setPerson(name);
                    setOpen(false);
                  }}
                >
                  {name}
                </CommandItem>
              ))}
              <CommandEmpty>
                <p style={{ margin: 0, padding: '24px 8px', textAlign: 'center', color: 'var(--ds-muted-foreground)' }}>No one by that name.</p>
              </CommandEmpty>
            </CommandList>
          </Command>
        </Popover>
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
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24 }}>
          <Command label={`Commands (${scheme})`} width="100%">
            <CommandInput placeholder="Placeholder" />
            <CommandList>{suggestions}</CommandList>
          </Command>
        </div>
      ))}
    </div>
  ),
};
