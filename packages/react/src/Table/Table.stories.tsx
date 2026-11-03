import type { Meta, StoryObj } from '@storybook/react-vite';
import { Fragment, useState, type CSSProperties } from 'react';
import { RiArrowDownSLine, RiArrowRightSLine, RiMoreLine, RiSearchLine } from '@remixicon/react';
import { Avatar } from '../Avatar';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { DropdownMenu, DropdownMenuItem, DropdownMenuSeparator } from '../DropdownMenu';
import { Empty } from '../Empty';
import { Input } from '../Input';
import { Select } from '../Select';
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow, type TableSort } from './Table';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=221-2';

const meta = {
  title: 'Components/Table',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Table**, **Table Row** and **Table Cell** ([open in Figma](${FIGMA_URL})): a native \`<table>\` with header (\`TableHeader\` / \`TableHead\`, 40 px, Medium), body (\`TableBody\` / \`TableRow\` / \`TableCell\`, 36 px) and footer rows (\`TableFooter\`, the fill-1 band), 1 px lines between rows, a muted \`caption\`. Cells take \`align="right"\` for numbers and \`fit\` for a column of checkboxes or chevrons. Rows show Hover (fill-1) under the pointer and \`selected\` (fill-2). \`TableHead sort\` makes the header a sort button with \`aria-sort\`. \`variant="card"\` is the layout most demos use: the header on the muted fill and the body in a bordered box. The table scrolls sideways when it is wider than its container.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const width: CSSProperties = { width: 560, maxWidth: '100%' };
const text: CSSProperties = { fontFamily: 'var(--ds-font-sans)', fontSize: 14, lineHeight: '20px', letterSpacing: '-0.005em', margin: 0 };
const muted: CSSProperties = { color: 'var(--ds-muted-foreground)' };
// Visually hidden, read by assistive technology (an actions column has no visible header).
const srOnly: CSSProperties = { position: 'absolute', width: 1, height: 1, overflow: 'hidden', clipPath: 'inset(50%)', whiteSpace: 'nowrap' };
const row: CSSProperties = { display: 'flex', alignItems: 'center', gap: 8 };

const usage = [
  { name: 'Button', instances: 412, coverage: '96%' },
  { name: 'Dialog', instances: 164, coverage: '78%' },
  { name: 'Table', instances: 97, coverage: '61%' },
];

const more = (label: string, outline = false) => (
  <DropdownMenu align="end" trigger={<Button variant={outline ? 'outline' : 'ghost'} size={outline ? 'default' : 'xs'} icon={<RiMoreLine />} aria-label={label} />}>
    <DropdownMenuItem>Edit</DropdownMenuItem>
    <DropdownMenuItem>Duplicate</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem type="destructive">Delete</DropdownMenuItem>
  </DropdownMenu>
);

export const Playground: StoryObj<{ variant: 'default' | 'card'; caption: string; footer: boolean; selected: boolean }> = {
  args: { variant: 'default', caption: 'Web adoption, Aug 13 – Sep 12 · library usage vs. detached copies.', footer: true, selected: false },
  render: (args) => (
    <div style={{ width: 496, maxWidth: '100%' }}>
      <Table variant={args.variant} caption={args.caption || undefined}>
        <TableHeader>
          <TableRow>
            <TableHead>Component</TableHead>
            <TableHead align="right">Instances</TableHead>
            <TableHead align="right">Coverage</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {usage.map((u, i) => (
            <TableRow key={u.name} selected={args.selected && i === 1}>
              <TableCell>{u.name}</TableCell>
              <TableCell align="right">{u.instances}</TableCell>
              <TableCell align="right">{u.coverage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {args.footer && (
          <TableFooter>
            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell align="right">673</TableCell>
              <TableCell align="right">78%</TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </div>
  ),
};

/** Figma component "Table": header, three rows, footer and caption. */
export const Default: StoryObj = {
  render: () => (
    <div style={{ width: 496, maxWidth: '100%' }}>
      <Table caption="Web adoption, Aug 13 – Sep 12 · library usage vs. detached copies.">
        <TableHeader>
          <TableRow>
            <TableHead>Header</TableHead>
            <TableHead align="right">Instances</TableHead>
            <TableHead align="right">Coverage</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {usage.map((u) => (
            <TableRow key={u.name}>
              <TableCell>{u.name}</TableCell>
              <TableCell align="right">{u.instances}</TableCell>
              <TableCell align="right">{u.coverage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell align="right">673</TableCell>
            <TableCell align="right">78%</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  ),
};

/** Figma Table Row Type=Body, State=Default / Hover / Selected (hover shown by the pointer). */
export const States: StoryObj = {
  render: () => (
    <div style={{ width: 448, maxWidth: '100%' }}>
      <Table aria-label="Row states">
        <TableHeader>
          <TableRow>
            <TableHead>State</TableHead>
            <TableHead align="right">Instances</TableHead>
            <TableHead align="right">Coverage</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Default</TableCell>
            <TableCell align="right">412</TableCell>
            <TableCell align="right">96%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Hover (point at a row)</TableCell>
            <TableCell align="right">164</TableCell>
            <TableCell align="right">78%</TableCell>
          </TableRow>
          <TableRow selected>
            <TableCell>Selected</TableCell>
            <TableCell align="right">97</TableCell>
            <TableCell align="right">61%</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
};

const people = [
  { name: 'Ada Lovelace', email: 'ada@example.com', role: 'Owner' },
  { name: 'Jonas Lindqvist', email: 'jonas@example.com', role: 'Admin' },
  { name: 'Mira Okafor', email: 'mira@example.com', role: 'Editor' },
  { name: 'Priya Raman', email: 'priya@example.com', role: 'Editor' },
  { name: 'Tomás Herrera', email: 'tomas@example.com', role: 'Viewer' },
  { name: 'Aiko Tanaka', email: 'aiko@example.com', role: 'Viewer' },
];

/** Figma demo "Table": the card layout with a checkbox column; checked rows are selected. */
export const Selection: StoryObj = {
  render: function Render() {
    const [picked, setPicked] = useState<string[]>(['Mira Okafor']);
    const all = picked.length === people.length;
    const toggle = (name: string, on: boolean) => setPicked((list) => (on ? [...list, name] : list.filter((n) => n !== name)));
    return (
      <div style={width}>
        <Table variant="card" aria-label="Members">
          <TableHeader>
            <TableRow>
              <TableHead fit>
                <Checkbox aria-label="Select all" checked={all} indeterminate={picked.length > 0 && !all} onCheckedChange={(on) => setPicked(on ? people.map((p) => p.name) : [])} />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>
                <span style={srOnly}>Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {people.map((p) => (
              <TableRow key={p.name} selected={picked.includes(p.name)}>
                <TableCell fit>
                  <Checkbox aria-label={`Select ${p.name}`} checked={picked.includes(p.name)} onCheckedChange={(on) => toggle(p.name, on)} />
                </TableCell>
                <TableCell>
                  <span style={row}>
                    <Avatar size="xs" initials={p.name[0]} />
                    {p.name}
                  </span>
                </TableCell>
                <TableCell>{p.email}</TableCell>
                <TableCell>{p.role}</TableCell>
                <TableCell align="right">{more(`More for ${p.name}`)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  },
};

const deployments = [
  { project: 'marketing-site', env: 'Production', when: '2 min ago' },
  { project: 'api-gateway', env: 'Preview', when: '18 min ago', title: 'Retry rate-limited requests with backoff', body: 'Requests that hit a 429 now back off exponentially and respect Retry-After, so bursts from the mobile app stop tripping the limiter.', branch: 'feat/retry-backoff', duration: '1m 42s', region: 'Frankfurt' },
  { project: 'dashboard', env: 'Production', when: '1 h ago' },
  { project: 'docs', env: 'Preview', when: '3 h ago' },
  { project: 'billing-worker', env: 'Production', when: 'Yesterday' },
  { project: 'image-cdn', env: 'Production', when: 'Sep 20' },
];

/** Figma demo "Expandable rows": a chevron button opens a details row (fill-2) under its row. */
export const ExpandableRows: StoryObj = {
  render: function Render() {
    const [open, setOpen] = useState<string | null>('api-gateway');
    const small: CSSProperties = { ...text, fontSize: 12, lineHeight: '16px', ...muted };
    return (
      <div style={width}>
        <Table variant="card" aria-label="Deployments">
          <TableBody>
            {deployments.map((d) => {
              const expanded = open === d.project;
              return (
                <Fragment key={d.project}>
                  <TableRow>
                    <TableCell fit style={{ paddingBlock: 6 }}>
                      <Button
                        variant="ghost"
                        size="xs"
                        icon={expanded ? <RiArrowDownSLine /> : <RiArrowRightSLine />}
                        aria-label={`Details of ${d.project}`}
                        aria-expanded={expanded}
                        aria-controls={`details-${d.project}`}
                        onClick={() => setOpen(expanded ? null : d.project)}
                      />
                    </TableCell>
                    <TableCell>{d.project}</TableCell>
                    <TableCell>{d.env}</TableCell>
                    <TableCell>{d.when}</TableCell>
                  </TableRow>
                  {expanded && (
                    <TableRow id={`details-${d.project}`} selected>
                      <TableCell />
                      <TableCell colSpan={3} wrap style={{ padding: 12 }}>
                        <div style={{ display: 'grid', gap: 12 }}>
                          <div style={{ display: 'grid', gap: 4 }}>
                            <p style={{ ...text, fontWeight: 500 }}>{d.title ?? `${d.project} deployed`}</p>
                            <p style={small}>{d.body ?? 'No release notes for this deployment.'}</p>
                          </div>
                          <hr style={{ margin: 0, border: 0, borderTop: '1px solid var(--ds-border)' }} />
                          <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, margin: 0 }}>
                            {[
                              ['Branch', d.branch ?? 'main'],
                              ['Duration', d.duration ?? '58s'],
                              ['Region', d.region ?? 'Frankfurt'],
                            ].map(([k, v]) => (
                              <div key={k} style={{ display: 'grid', gap: 4 }}>
                                <dt style={{ ...text, fontWeight: 500 }}>{k}</dt>
                                <dd style={{ ...small, margin: 0 }}>{v}</dd>
                              </div>
                            ))}
                          </dl>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </Fragment>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  },
};

const customers = [
  { initials: 'RY', name: 'Reiko Yamada', email: 'reiko@yamada.studio', plan: 'Pro', price: '$29.00' },
  { initials: 'SH', name: 'Samuel Hart', email: 'sam@hart.io', plan: 'Team', price: '$96.00' },
  { initials: 'LF', name: 'Lena Fischer', email: 'lena@fischer.dev', plan: 'Free', price: '$0.00' },
  { initials: 'OH', name: 'Omar Haddad', email: 'omar@haddad.co', plan: 'Pro', price: '$29.00' },
  { initials: 'ID', name: 'Inês Duarte', email: 'ines@duarte.design', plan: 'Team', price: '$144.00' },
];

/** Figma demo "Avatars and badges": a two-line person cell, a plan Badge, a price aligned right and a menu. */
export const AvatarsAndBadges: StoryObj = {
  render: () => (
    <div style={width}>
      <Table variant="card" aria-label="Customers">
        <TableBody>
          {customers.map((c) => (
            <TableRow key={c.email}>
              <TableCell>
                <span style={{ ...row, gap: 10 }}>
                  <Avatar size="sm" initials={c.initials} />
                  <span style={{ display: 'grid' }}>
                    <span>{c.name}</span>
                    <span style={{ ...muted, fontSize: 12, lineHeight: '16px' }}>{c.email}</span>
                  </span>
                </span>
              </TableCell>
              <TableCell>
                <Badge>{c.plan}</Badge>
              </TableCell>
              <TableCell align="right">{c.price}</TableCell>
              <TableCell align="right">{more(`More for ${c.name}`)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
};

/** Figma demo "Editable cells": an Input in each Seats cell. */
export const EditableCells: StoryObj = {
  render: function Render() {
    const [seats, setSeats] = useState<Record<string, string>>({ Design: '8', Engineering: '24', Marketing: '6', Support: '12', Sales: '10', Finance: '4' });
    const admins: Record<string, string> = { Design: 'Mira Okafor', Engineering: 'Jonas Lindqvist', Marketing: 'Priya Raman', Support: 'Tomás Herrera', Sales: 'Aiko Tanaka', Finance: 'Ada Lovelace' };
    return (
      <div style={width}>
        <Table variant="card" aria-label="Teams">
          <TableHeader>
            <TableRow>
              <TableHead>Team</TableHead>
              <TableHead>Admin</TableHead>
              <TableHead>Seats</TableHead>
              <TableHead>
                <span style={srOnly}>Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.keys(seats).map((team) => (
              <TableRow key={team}>
                <TableCell>{team}</TableCell>
                <TableCell>{admins[team]}</TableCell>
                <TableCell style={{ width: 104 }}>
                  <Input aria-label={`Seats for ${team}`} inputMode="numeric" value={seats[team]} onChange={(e) => setSeats({ ...seats, [team]: e.target.value })} />
                </TableCell>
                <TableCell align="right">{more(`More for ${team}`)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  },
};

const invoices = [
  { id: 'INV-2041', status: 'Paid', method: 'Card ·· 4242', amount: '$48.00' },
  { id: 'INV-2042', status: 'Paid', method: 'Wallet', amount: '$48.00' },
  { id: 'INV-2043', status: 'Pending', method: 'Bank transfer', amount: '$120.00' },
  { id: 'INV-2044', status: 'Paid', method: 'Card ·· 4242', amount: '$48.00' },
  { id: 'INV-2045', status: 'Overdue', method: 'Bank transfer', amount: '$96.00' },
];

/** Figma demo "Footer and caption": the default layout with a total row and a caption. */
export const FooterAndCaption: StoryObj = {
  render: () => (
    <div style={width}>
      <Table caption="Invoices for the Team plan, January – May 2026.">
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead align="right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((inv) => (
            <TableRow key={inv.id}>
              <TableCell style={{ fontWeight: 500 }}>{inv.id}</TableCell>
              <TableCell>{inv.status}</TableCell>
              <TableCell>{inv.method}</TableCell>
              <TableCell align="right">{inv.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell align="right">$360.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  ),
};

const files = [
  { name: 'Q4 roadmap.pdf', owner: 'Mira Okafor', size: 2.4e6, sizeLabel: '2.4 MB', modified: 5, modifiedLabel: 'Today, 09:12' },
  { name: 'Brand guidelines.fig', owner: 'Jonas Lindqvist', size: 18.1e6, sizeLabel: '18.1 MB', modified: 4, modifiedLabel: 'Yesterday' },
  { name: 'Onboarding flow.mp4', owner: 'Priya Raman', size: 146e6, sizeLabel: '146 MB', modified: 3, modifiedLabel: 'Oct 1' },
  { name: 'Pricing research.xlsx', owner: 'Tomás Herrera', size: 640e3, sizeLabel: '640 KB', modified: 2, modifiedLabel: 'Sep 28' },
  { name: 'Release notes.md', owner: 'Aiko Tanaka', size: 12e3, sizeLabel: '12 KB', modified: 1, modifiedLabel: 'Sep 24' },
];
type SortKey = 'name' | 'size' | 'modified';

/** Figma demo "Sorting": headers as sort buttons; the sorted column shows an arrow and `aria-sort`. */
export const Sorting: StoryObj = {
  render: function Render() {
    const [sort, setSort] = useState<{ key: SortKey; dir: Exclude<TableSort, 'none'> }>({ key: 'modified', dir: 'descending' });
    const sortOf = (key: SortKey): TableSort => (sort.key === key ? sort.dir : 'none');
    const press = (key: SortKey) => setSort((s) => ({ key, dir: s.key === key && s.dir === 'ascending' ? 'descending' : 'ascending' }));
    const shown = [...files].sort((a, b) => {
      const by = sort.key === 'name' ? a.name.localeCompare(b.name) : a[sort.key] - b[sort.key];
      return sort.dir === 'ascending' ? by : -by;
    });
    return (
      <div style={width}>
        <Table variant="card" aria-label="Files">
          <TableHeader>
            <TableRow>
              <TableHead sort={sortOf('name')} onSort={() => press('name')}>
                Name
              </TableHead>
              <TableHead>Owner</TableHead>
              <TableHead align="right" sort={sortOf('size')} onSort={() => press('size')}>
                Size
              </TableHead>
              <TableHead sort={sortOf('modified')} onSort={() => press('modified')}>
                Modified
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {shown.map((f) => (
              <TableRow key={f.name}>
                <TableCell>{f.name}</TableCell>
                <TableCell>{f.owner}</TableCell>
                <TableCell align="right">{f.sizeLabel}</TableCell>
                <TableCell>{f.modifiedLabel}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  },
};

/** Figma demo "Empty state": a search with no matches; an Empty spans the body. */
export const EmptyState: StoryObj = {
  render: function Render() {
    const [query, setQuery] = useState('checkout-v3');
    return (
      <div style={{ ...width, display: 'grid', gap: 16 }}>
        <div style={{ width: 280, maxWidth: '100%' }}>
          <Input aria-label="Search deployments" leadIcon={<RiSearchLine />} value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
        <Table variant="card" aria-label="Deployments">
          <TableHeader>
            <TableRow>
              <TableHead>Deployment</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Branch</TableHead>
              <TableHead align="right">Updated</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell colSpan={4} wrap>
                <Empty
                  titleAs="p"
                  title={query ? `No results for “${query}”` : 'No deployments yet'}
                  description={query ? 'Try another branch name or clear the search.' : 'Deployments show here after the first push.'}
                  actions={
                    query ? (
                      <Button variant="outline" size="sm" onClick={() => setQuery('')}>
                        Clear search
                      </Button>
                    ) : undefined
                  }
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  },
};

const orders = [
  { id: '#3012', customer: 'Mira Okafor', status: 'Paid', total: '$129.00' },
  { id: '#3011', customer: 'Jonas Lindqvist', status: 'Refunded', total: '$48.00' },
  { id: '#3010', customer: 'Priya Raman', status: 'Paid', total: '$312.50' },
  { id: '#3009', customer: 'Tomás Herrera', status: 'Pending', total: '$76.00' },
  { id: '#3008', customer: 'Aiko Tanaka', status: 'Paid', total: '$54.90' },
];

/** Figma demo "Toolbar and pagination": search, a status filter and a menu above; the selection count and paging under. */
export const ToolbarAndPagination: StoryObj = {
  render: function Render() {
    const [picked, setPicked] = useState<string[]>(['#3012', '#3010']);
    const [status, setStatus] = useState('all');
    const [page, setPage] = useState(1);
    const shown = orders.filter((o) => status === 'all' || o.status.toLowerCase() === status);
    const all = shown.length > 0 && shown.every((o) => picked.includes(o.id));
    const some = shown.some((o) => picked.includes(o.id));
    return (
      <div style={{ ...width, display: 'grid', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ flex: '0 1 240px' }}>
            <Input aria-label="Search orders" placeholder="Search orders…" leadIcon={<RiSearchLine />} />
          </div>
          <span style={{ flex: 1 }} />
          <Select
            aria-label="Status"
            style={{ width: 120 }}
            value={status}
            onValueChange={setStatus}
            options={[
              { value: 'all', label: 'Status' },
              { value: 'paid', label: 'Paid' },
              { value: 'pending', label: 'Pending' },
              { value: 'refunded', label: 'Refunded' },
            ]}
          />
          {more('More order actions', true)}
        </div>
        <Table variant="card" aria-label="Orders">
          <TableHeader>
            <TableRow>
              <TableHead fit>
                <Checkbox
                  aria-label="Select all orders"
                  checked={all}
                  indeterminate={some && !all}
                  onCheckedChange={(on) => setPicked(on ? shown.map((o) => o.id) : [])}
                />
              </TableHead>
              <TableHead>Order</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Status</TableHead>
              <TableHead align="right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {shown.map((o) => (
              <TableRow key={o.id} selected={picked.includes(o.id)}>
                <TableCell fit>
                  <Checkbox
                    aria-label={`Select order ${o.id}`}
                    checked={picked.includes(o.id)}
                    onCheckedChange={(on) => setPicked((list) => (on ? [...list, o.id] : list.filter((id) => id !== o.id)))}
                  />
                </TableCell>
                <TableCell style={{ fontWeight: 500 }}>{o.id}</TableCell>
                <TableCell>{o.customer}</TableCell>
                <TableCell>{o.status}</TableCell>
                <TableCell align="right">{o.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <nav aria-label="Orders pages" style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          <p style={{ ...text, ...muted, flex: 1 }} aria-live="polite">
            {picked.length} of 48 orders selected.
          </p>
          <p style={{ ...text, ...muted }}>Page {page} of 10</p>
          <Button variant="outline" size="sm" disabled={page <= 1} onClick={() => setPage(page - 1)}>
            Previous
          </Button>
          <Button variant="outline" size="sm" disabled={page >= 10} onClick={() => setPage(page + 1)}>
            Next
          </Button>
        </nav>
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
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'grid', gap: 24 }}>
          {(['default', 'card'] as const).map((variant) => (
            <Table key={variant} variant={variant} aria-label={`Usage, ${variant} (${scheme})`}>
              <TableHeader>
                <TableRow>
                  <TableHead>Component</TableHead>
                  <TableHead align="right">Instances</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {usage.map((u, i) => (
                  <TableRow key={u.name} selected={i === 1}>
                    <TableCell>{u.name}</TableCell>
                    <TableCell align="right">{u.instances}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              {variant === 'default' && (
                <TableFooter>
                  <TableRow>
                    <TableCell>Total</TableCell>
                    <TableCell align="right">673</TableCell>
                  </TableRow>
                </TableFooter>
              )}
            </Table>
          ))}
        </div>
      ))}
    </div>
  ),
};
