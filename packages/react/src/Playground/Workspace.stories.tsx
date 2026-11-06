import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type CSSProperties } from 'react';
import {
  RiAddLine,
  RiBarChartLine,
  RiExpandUpDownLine,
  RiFileTextLine,
  RiFolderLine,
  RiHome5Line,
  RiInboxLine,
  RiSearchLine,
  RiSettings3Line,
  RiStackLine,
  RiTeamLine,
} from '@remixicon/react';
import { Avatar } from '../Avatar';
import { Badge } from '../Badge';
import { Breadcrumb, BreadcrumbItem } from '../Breadcrumb';
import { Button } from '../Button';
import { CommandDialog, CommandGroup, CommandInput, CommandItem, CommandList } from '../Command';
import { Kbd } from '../Kbd';
import { Pagination } from '../Pagination';
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarInset, SidebarLayout, SidebarMenuItem, SidebarTrigger } from '../Sidebar';
import { Toaster, toast } from '../Sonner';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../Table';
import { UsageBar, UsageBarLegend, UsageBarLegendItem, UsageBarSegment } from '../UsageBar';

const meta = {
  title: 'Playground/Workspace',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A workspace app shell made of Sidebar (collapsible to the icon rail with the panel button, a projects group with sub pages, the workspace switcher in the footer), Breadcrumb, Command (a palette of pages, from the search item or ⌘K), Table (the members, in the card layout) and Pagination, Usage Bar (storage by project on Reports, with tooltips), with Avatar, Badge, Button, Kbd and toasts, for trying the navigation components together before they are merged. Make the window narrow to see the sidebar start collapsed and open over the page. Use the toolbar to switch brand and colour scheme.',
      },
    },
  },
} satisfies Meta;

export default meta;

const people = [
  { name: 'Mira Okafor', email: 'mira@orbit.dev', role: 'Owner' },
  { name: 'Jonas Lindqvist', email: 'jonas@orbit.dev', role: 'Admin' },
  { name: 'Priya Raman', email: 'priya@orbit.dev', role: 'Member' },
  { name: 'Tomás Herrera', email: 'tomas@orbit.dev', role: 'Member' },
  { name: 'Aiko Tanaka', email: 'aiko@orbit.dev', role: 'Member' },
  { name: 'Lena Fischer', email: 'lena@orbit.dev', role: 'Member' },
  { name: 'Omar Haddad', email: 'omar@orbit.dev', role: 'Member' },
];
const pages = ['Home', 'Inbox', 'Reports', 'Members', 'Settings'];
const storage = [
  { name: 'Orbit app', gb: 38, color: 'var(--ds-chart-2)' },
  { name: 'Marketing site', gb: 17, color: 'var(--ds-chart-1)' },
  { name: 'Archive', gb: 21, color: undefined },
];

const logo: CSSProperties = { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: 8, background: 'var(--ds-sidebar-primary)', color: 'var(--ds-sidebar-primary-foreground)' };

export const App: StoryObj = {
  render: function Render() {
    const [page, setPage] = useState('Members');
    const [palette, setPalette] = useState(false);
    const [tablePage, setTablePage] = useState(1);
    const perPage = 4;
    const shown = people.slice((tablePage - 1) * perPage, tablePage * perPage);
    const go = (name: string) => {
      setPage(name);
      setPalette(false);
    };
    return (
      <div
        onKeyDown={(event) => {
          if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
            event.preventDefault();
            setPalette(true);
          }
        }}
      >
        <SidebarLayout style={{ height: 560, border: '1px solid var(--ds-border)', borderRadius: 16, overflow: 'hidden', background: 'var(--ds-background)' }}>
          <Sidebar aria-label="Orbit">
            <SidebarHeader plain>
              <SidebarGroup>
                <SidebarMenuItem label="Search" icon={<RiSearchLine />} badge={<Kbd size="sm">⌘K</Kbd>} onClick={() => setPalette(true)} />
              </SidebarGroup>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarMenuItem label="Home" icon={<RiHome5Line />} active={page === 'Home'} onClick={() => go('Home')} />
                <SidebarMenuItem label="Inbox" icon={<RiInboxLine />} badge="3" active={page === 'Inbox'} onClick={() => go('Inbox')} />
                <SidebarMenuItem label="Reports" icon={<RiBarChartLine />} active={page === 'Reports'} onClick={() => go('Reports')} />
              </SidebarGroup>
              <SidebarGroup label="Projects" labelSize="sm" action={<Button variant="ghost" size="xs" icon={<RiAddLine />} aria-label="New project" onClick={() => toast('New project', { description: 'A real product would open the project form.' })} />}>
                <SidebarMenuItem label="Orbit app" icon={<RiFolderLine />} defaultOpen>
                  <SidebarMenuItem label="Roadmap" icon={<RiFileTextLine />} onClick={() => toast('Roadmap')} />
                  <SidebarMenuItem label="Release notes" icon={<RiFileTextLine />} onClick={() => toast('Release notes')} />
                </SidebarMenuItem>
                <SidebarMenuItem label="Marketing site" icon={<RiFolderLine />} onClick={() => toast('Marketing site')} />
              </SidebarGroup>
              <SidebarGroup label="Team" labelSize="sm">
                <SidebarMenuItem label="Members" icon={<RiTeamLine />} active={page === 'Members'} onClick={() => go('Members')} />
                <SidebarMenuItem label="Settings" icon={<RiSettings3Line />} active={page === 'Settings'} onClick={() => go('Settings')} />
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
              <SidebarGroup>
                <SidebarMenuItem
                  size="lg"
                  label="Orbit"
                  description="Team plan · 7 members"
                  icon={
                    <span style={logo}>
                      <RiStackLine size={16} />
                    </span>
                  }
                  endIcon={<RiExpandUpDownLine />}
                  onClick={() => toast('Switch workspace', { description: 'A real product would list your workspaces.' })}
                />
              </SidebarGroup>
            </SidebarFooter>
          </Sidebar>
          <SidebarInset as="div">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderBottom: '1px solid var(--ds-border)' }}>
              <SidebarTrigger />
              <Breadcrumb aria-label="Location">
                <BreadcrumbItem href="#orbit">Orbit</BreadcrumbItem>
                <BreadcrumbItem current>{page}</BreadcrumbItem>
              </Breadcrumb>
            </div>
            <div style={{ padding: 16, display: 'grid', gap: 16, fontFamily: 'var(--ds-font-sans)' }}>
              {page === 'Members' ? (
                <>
                  <Table variant="card" aria-label="Members">
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Role</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {shown.map((m) => (
                        <TableRow key={m.email}>
                          <TableCell>
                            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                              <Avatar size="xs" initials={m.name[0]} />
                              <span style={{ display: 'grid' }}>
                                <span>{m.name}</span>
                                <span style={{ color: 'var(--ds-muted-foreground)', fontSize: 12, lineHeight: '16px' }}>{m.email}</span>
                              </span>
                            </span>
                          </TableCell>
                          <TableCell>
                            <Badge border={m.role !== 'Member'}>{m.role}</Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <Pagination page={tablePage} pageCount={Math.ceil(people.length / perPage)} onPageChange={setTablePage} aria-label="Members pages" />
                </>
              ) : page === 'Reports' ? (
                <div style={{ display: 'grid', gap: 12, maxWidth: 480 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, fontSize: 14, lineHeight: '20px' }}>
                    <span id="storage-title" style={{ fontWeight: 500, color: 'var(--ds-foreground)' }}>
                      Storage
                    </span>
                    <span style={{ color: 'var(--ds-muted-foreground)' }}>76 of 100 GB used · 4 GB syncing</span>
                  </div>
                  <UsageBar aria-labelledby="storage-title" axis={['0 GB', '25 GB', '50 GB', '75 GB', '100 GB']}>
                    {storage.map((s) => (
                      <UsageBarSegment key={s.name} value={s.gb} color={s.color} label={`${s.name}, ${s.gb} GB`} tooltip={`${s.name} · ${s.gb} GB`} />
                    ))}
                    <UsageBarSegment value={4} variant="striped" label="Syncing, 4 GB" tooltip="Syncing · 4 GB" />
                    <UsageBarSegment value={20} variant="primary" label="Free, 20 GB" />
                  </UsageBar>
                  <UsageBarLegend aria-label="Storage by project">
                    {storage.map((s) => (
                      <UsageBarLegendItem key={s.name} color={s.color}>
                        {s.name}
                      </UsageBarLegendItem>
                    ))}
                    <UsageBarLegendItem variant="striped">Syncing</UsageBarLegendItem>
                    <UsageBarLegendItem variant="primary">Free</UsageBarLegendItem>
                  </UsageBarLegend>
                </div>
              ) : (
                <p style={{ margin: 0, color: 'var(--ds-muted-foreground)', fontSize: 14 }}>{page} is a placeholder page in this playground; open Members or Reports to see more.</p>
              )}
            </div>
          </SidebarInset>
        </SidebarLayout>
        <CommandDialog open={palette} onOpenChange={setPalette} label="Go to">
          <CommandInput placeholder="Go to a page or a member…" />
          <CommandList>
            <CommandGroup heading="Pages">
              {pages.map((p) => (
                <CommandItem key={p} onSelect={() => go(p)}>
                  {p}
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandGroup heading="Members">
              {people.map((m) => (
                <CommandItem key={m.email} icon={<Avatar size="xs" initials={m.name[0]} />} shortcut={m.role} keywords={[m.email]} onSelect={() => go('Members')}>
                  {m.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </CommandDialog>
        <Toaster />
      </div>
    );
  },
};
