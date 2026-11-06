import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type CSSProperties, type ReactNode } from 'react';
import {
  RiAddLine,
  RiArrowDownSLine,
  RiBarChartLine,
  RiBrushLine,
  RiCalendarLine,
  RiChat1Line,
  RiDeleteBinLine,
  RiEqualizerLine,
  RiExpandUpDownLine,
  RiFileTextLine,
  RiFolderChartLine,
  RiFolderLine,
  RiGlobalLine,
  RiHome5Line,
  RiInboxLine,
  RiKeyboardLine,
  RiLinkM,
  RiLockLine,
  RiMenuLine,
  RiMoreLine,
  RiNotification3Line,
  RiPencilLine,
  RiSearchLine,
  RiSettings3Line,
  RiShareLine,
  RiStackLine,
  RiTeamLine,
  RiVideoLine,
} from '@remixicon/react';
import { Avatar } from '../Avatar';
import { Breadcrumb, BreadcrumbItem } from '../Breadcrumb';
import { Button } from '../Button';
import { Dialog } from '../Dialog';
import { DropdownMenu, DropdownMenuItem, DropdownMenuSeparator } from '../DropdownMenu';
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarInset, SidebarLayout, SidebarMenuItem, SidebarTrigger } from './Sidebar';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=265-3';

const meta = {
  title: 'Components/Sidebar',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Sidebar** (Type=Default / Floating), **Sidebar Group**, **Sidebar Group Label**, **Sidebar Menu Item**, **Sidebar Menu Button** (Size=Default / sm / lg; State=hover / active / focus; Collapsed) and **Sidebar Menu Sub Item** ([open in Figma](${FIGMA_URL})). \`SidebarLayout\` holds a \`Sidebar\` and a \`SidebarInset\`; \`SidebarTrigger\` collapses the sidebar to a 48 px icon rail (labels stay for assistive technology and show as tooltips). \`SidebarGroup\` takes a \`label\` (\`collapsible\` makes it a button that opens and closes the group) and an \`action\`; \`SidebarMenuItem\` takes \`icon\`, \`href\`, \`active\` (\`aria-current="page"\`), \`size\`, \`badge\`, \`action\` and sub items as children (a button with \`aria-expanded\` that opens them, animated). Narrow screens start with the rail; the open sidebar lies over the dimmed content there.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const frame: CSSProperties = { height: 480, maxWidth: 720, border: '1px solid var(--ds-border)', borderRadius: 16, overflow: 'hidden', background: 'var(--ds-background)' };
const header: CSSProperties = { display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderBottom: '1px solid var(--ds-border)' };
const tiles = (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8, padding: 12 }}>
    {[140, 140, 200, 140, 140].map((h, i) => (
      <div key={i} style={{ height: h, borderRadius: 12, background: 'var(--ds-fill-1)', gridColumn: i === 2 ? '1 / -1' : undefined }} />
    ))}
  </div>
);
const logo = (
  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: 8, background: 'var(--ds-sidebar-primary)', color: 'var(--ds-sidebar-primary-foreground)' }}>
    <RiStackLine size={16} />
  </span>
);
const inset = (crumbs: [string, string], label = 'Breadcrumb') => (
  <SidebarInset as="div">
    <div style={header}>
      <SidebarTrigger />
      <Breadcrumb aria-label={label}>
        <BreadcrumbItem href="#">{crumbs[0]}</BreadcrumbItem>
        <BreadcrumbItem current>{crumbs[1]}</BreadcrumbItem>
      </Breadcrumb>
    </div>
    {tiles}
  </SidebarInset>
);

const userItem = (
  <SidebarGroup>
    <SidebarMenuItem label="Shiryoku" icon={<Avatar size="xs" shape="square" initials="S" />} endIcon={<RiArrowDownSLine />} />
  </SidebarGroup>
);
const mainItems = (active = 'Home') => (
  <SidebarGroup>
    {(
      [
        ['Search', <RiSearchLine key="i" />],
        ['Home', <RiHome5Line key="i" />],
        ['Inbox', <RiInboxLine key="i" />],
        ['Calendar', <RiCalendarLine key="i" />],
      ] as const
    ).map(([label, icon]) => (
      <SidebarMenuItem key={label} label={label} icon={icon} href={`#${label.toLowerCase()}`} active={label === active} badge={label === 'Inbox' ? '16' : undefined} />
    ))}
  </SidebarGroup>
);
const workspace = (
  <SidebarGroup label="Workspace" labelSize="sm">
    <SidebarMenuItem label="Projects" icon={<RiFolderChartLine />} href="#projects" />
    <SidebarMenuItem label="Documents" icon={<RiFileTextLine />} href="#documents" />
    <SidebarMenuItem label="Reports" icon={<RiBarChartLine />} href="#reports" />
    <SidebarMenuItem label="Team" icon={<RiTeamLine />} href="#team" />
  </SidebarGroup>
);
const favorites = (
  <SidebarGroup label="Favorites" labelSize="sm">
    {['Website redesign', 'Mobile app', 'Q3 campaign'].map((p) => (
      <SidebarMenuItem key={p} label={p} icon={<RiFolderLine />} href={`#${p}`} />
    ))}
  </SidebarGroup>
);
const company = (
  <SidebarGroup>
    <SidebarMenuItem size="lg" label="ACME Inc." description="@acmeinc" icon={logo} endIcon={<RiExpandUpDownLine />} />
  </SidebarGroup>
);

export const Playground: StoryObj<{ variant: 'default' | 'floating'; collapsed: boolean }> = {
  args: { variant: 'default', collapsed: false },
  render: (args) => (
    <SidebarLayout key={String(args.collapsed)} defaultCollapsed={args.collapsed} style={frame}>
      <Sidebar variant={args.variant} aria-label="Workspace">
        <SidebarHeader plain>{userItem}</SidebarHeader>
        <SidebarContent>
          {mainItems()}
          {workspace}
          {favorites}
        </SidebarContent>
        <SidebarFooter>{company}</SidebarFooter>
      </Sidebar>
      {inset(['Workspace', 'Projects'])}
    </SidebarLayout>
  ),
};

/** Figma demo "Sidebar": expanded, and collapsed to the icon rail (press the panel button to switch). */
export const Default: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 24 }}>
      {[false, true].map((collapsed) => (
        <SidebarLayout key={String(collapsed)} defaultCollapsed={collapsed} style={frame}>
          <Sidebar aria-label={collapsed ? 'Workspace (collapsed)' : 'Workspace'}>
            <SidebarHeader plain>{userItem}</SidebarHeader>
            <SidebarContent>
              {mainItems()}
              {workspace}
              {favorites}
            </SidebarContent>
            <SidebarFooter>{company}</SidebarFooter>
          </Sidebar>
          {inset(['Workspace', 'Projects'], collapsed ? 'Breadcrumb (collapsed)' : 'Breadcrumb')}
        </SidebarLayout>
      ))}
    </div>
  ),
};

/** Figma demo "Floating": Type=Floating, a rounded card 8 px in. */
export const Floating: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 24 }}>
      {[false, true].map((collapsed) => (
        <SidebarLayout key={String(collapsed)} defaultCollapsed={collapsed} style={frame}>
          <Sidebar variant="floating" aria-label={collapsed ? 'Workspace (collapsed)' : 'Workspace'}>
            <SidebarHeader plain>{company}</SidebarHeader>
            <SidebarContent>
              {mainItems()}
              {workspace}
              {favorites}
            </SidebarContent>
          </Sidebar>
          {inset(['Workspace', 'Projects'], collapsed ? 'Breadcrumb (collapsed)' : 'Breadcrumb')}
        </SidebarLayout>
      ))}
    </div>
  ),
};

const projectActions = (name: string) => (
  <DropdownMenu align="end" trigger={<Button variant="ghost" size="xs" icon={<RiMoreLine />} aria-label={`Actions for ${name}`} />}>
    <DropdownMenuItem icon={<RiPencilLine />}>Rename</DropdownMenuItem>
    <DropdownMenuItem icon={<RiShareLine />}>Share</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem type="destructive" icon={<RiDeleteBinLine />}>
      Delete
    </DropdownMenuItem>
  </DropdownMenu>
);

/** Figma demo "Menu actions": each project has a menu of actions; the footer holds plain items. */
export const MenuActions: StoryObj = {
  render: () => (
    <SidebarLayout style={frame}>
      <Sidebar aria-label="Projects">
        <SidebarHeader plain>{userItem}</SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenuItem label="Search" icon={<RiSearchLine />} href="#search" />
            <SidebarMenuItem label="Home" icon={<RiHome5Line />} href="#home" />
            <SidebarMenuItem label="Inbox" icon={<RiInboxLine />} href="#inbox" />
          </SidebarGroup>
          <SidebarGroup label="Projects" labelSize="sm" action={<Button variant="ghost" size="xs" icon={<RiAddLine />} aria-label="New project" />}>
            {['Website redesign', 'Mobile app', 'Q3 campaign', 'Onboarding flow'].map((p, i) => (
              <SidebarMenuItem key={p} label={p} icon={<RiFolderLine />} href={`#${i}`} active={i === 0} action={projectActions(p)} />
            ))}
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter plain>
          <SidebarGroup>
            <SidebarMenuItem label="New project" icon={<RiAddLine />} />
            <SidebarMenuItem label="Settings" icon={<RiEqualizerLine />} href="#settings" />
          </SidebarGroup>
        </SidebarFooter>
      </Sidebar>
      {inset(['Projects', 'Website redesign'])}
    </SidebarLayout>
  ),
};

/** Figma Sidebar component: groups with nested sub menus (two levels) and a collapsible group. */
export const SubMenus: StoryObj = {
  render: () => (
    <SidebarLayout style={{ ...frame, height: 640 }}>
      <Sidebar aria-label="Library">
        <SidebarHeader>
          <SidebarGroup>
            <SidebarMenuItem size="lg" label="Shiryoku" description="Personal workspace" icon={logo} endIcon={<RiExpandUpDownLine />} />
          </SidebarGroup>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup label="Library">
            <SidebarMenuItem label="Getting started" icon={<RiFolderLine />} href="#start" />
            <SidebarMenuItem label="Components" icon={<RiFolderLine />} defaultOpen>
              <SidebarMenuItem label="Forms" icon={<RiFolderLine />} defaultOpen>
                <SidebarMenuItem label="Input" href="#input" active />
                <SidebarMenuItem label="Select" href="#select" />
              </SidebarMenuItem>
              <SidebarMenuItem label="Overlays" icon={<RiFolderLine />} href="#overlays" />
              <SidebarMenuItem label="Navigation" icon={<RiFolderLine />} href="#navigation" />
            </SidebarMenuItem>
            <SidebarMenuItem label="Tokens" icon={<RiFolderLine />} href="#tokens" />
          </SidebarGroup>
          <SidebarGroup label="Archive" collapsible defaultOpen={false}>
            <SidebarMenuItem label="2025" icon={<RiFolderLine />} href="#2025" />
            <SidebarMenuItem label="2024" icon={<RiFolderLine />} href="#2024" />
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarGroup>
            <SidebarMenuItem size="lg" label="Shiryoku" description="shiryoku@acme.dev" icon={<Avatar size="sm" initials="S" />} endIcon={<RiExpandUpDownLine />} />
          </SidebarGroup>
        </SidebarFooter>
      </Sidebar>
      {inset(['Library', 'Input'])}
    </SidebarLayout>
  ),
};

/** Figma Sidebar Menu Button: Size=Default / sm / lg, State=active, with a badge, and disabled. */
export const Items: StoryObj = {
  render: () => (
    <div style={{ width: 260, background: 'var(--ds-sidebar)', padding: 8, borderRadius: 12 }}>
      <SidebarGroup label="Group label" action={<Button variant="ghost" size="xs" icon={<RiAddLine />} aria-label="Add" />}>
        <SidebarMenuItem label="Default" icon={<RiFolderLine />} href="#a" badge="16" />
        <SidebarMenuItem label="Active (current page)" icon={<RiFolderLine />} href="#b" active badge="16" />
        <SidebarMenuItem label="Small" size="sm" icon={<RiFolderLine />} href="#c" />
        <SidebarMenuItem label="Large" size="lg" description="Item description" icon={logo} endIcon={<RiExpandUpDownLine />} />
        <SidebarMenuItem label="Disabled" icon={<RiFolderLine />} disabled />
      </SidebarGroup>
    </div>
  ),
};

const settings: [string, ReactNode][] = [
  ['Notifications', <RiNotification3Line key="i" />],
  ['Navigation', <RiMenuLine key="i" />],
  ['Appearance', <RiBrushLine key="i" />],
  ['Messages & media', <RiChat1Line key="i" />],
  ['Language & region', <RiGlobalLine key="i" />],
  ['Accessibility', <RiKeyboardLine key="i" />],
  ['Audio & video', <RiVideoLine key="i" />],
  ['Connected accounts', <RiLinkM key="i" />],
  ['Privacy & visibility', <RiLockLine key="i" />],
  ['Advanced', <RiSettings3Line key="i" />],
];

/** Figma demo "In a dialog": a settings window with its sections in a sidebar. */
export const InADialog: StoryObj = {
  render: function Render() {
    const [section, setSection] = useState('Notifications');
    return (
      <Dialog trigger={<Button variant="outline">Settings</Button>} title="Settings" width="720px">
        <SidebarLayout defaultCollapsed={false} style={{ height: 420, margin: '0 -16px -16px', borderTop: '1px solid var(--ds-border)' }}>
          <Sidebar aria-label="Settings sections">
            <SidebarContent>
              <SidebarGroup>
                {settings.map(([name, icon]) => (
                  <SidebarMenuItem key={name} label={name} icon={icon} active={section === name} onClick={() => setSection(name)} />
                ))}
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <SidebarInset as="div">
            <div style={{ ...header, borderBottom: 0 }}>
              <Breadcrumb>
                <BreadcrumbItem href="#">Settings</BreadcrumbItem>
                <BreadcrumbItem current>{section}</BreadcrumbItem>
              </Breadcrumb>
            </div>
            <div style={{ display: 'grid', gap: 8, padding: '0 12px 12px' }}>
              <div style={{ height: 140, borderRadius: 12, background: 'var(--ds-fill-1)' }} />
              <div style={{ height: 140, borderRadius: 12, background: 'var(--ds-fill-1)' }} />
            </div>
          </SidebarInset>
        </SidebarLayout>
      </Dialog>
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
          <SidebarLayout defaultCollapsed={false} style={{ ...frame, height: 420 }}>
            <Sidebar aria-label={`Workspace (${scheme})`}>
              <SidebarHeader plain>{userItem}</SidebarHeader>
              <SidebarContent>
                {mainItems()}
                {workspace}
              </SidebarContent>
              <SidebarFooter>{company}</SidebarFooter>
            </Sidebar>
            <SidebarInset as="div">{tiles}</SidebarInset>
          </SidebarLayout>
        </div>
      ))}
    </div>
  ),
};
