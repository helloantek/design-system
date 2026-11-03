import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties, ReactNode } from 'react';
import {
  RiBookOpenLine,
  RiDatabase2Line,
  RiFlashlightLine,
  RiGlobalLine,
  RiHardDrive2Line,
  RiHistoryLine,
  RiLifebuoyLine,
  RiLineChartLine,
  RiNewspaperLine,
  RiPulseLine,
  RiServerLine,
  RiTeamLine,
} from '@remixicon/react';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from './NavigationMenu';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=208-3';

const meta = {
  title: 'Components/Navigation Menu',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Navigation Menu**, **Navigation Menu Trigger**, **Navigation Menu Content** and **Navigation Menu Link** ([open in Figma](${FIGMA_URL})): a nav landmark with a row of 32 px triggers and links. A trigger (\`NavigationMenuItem label\`) is a button with \`aria-expanded\` that opens its panel 8 px below: on click, Enter, Space or Arrow Down (focus moves to the first link), or after resting the mouse on it; Escape, a click outside or focus leaving it closes the panel, and Arrow Left / Right move between the items. \`NavigationMenuItem href\` is Figma Type=Link (\`active\` marks the current page). Panels hold a \`NavigationMenuList\` (a column, or \`columns\` for a grid) of \`NavigationMenuLink\` (title, \`description\`, \`icon\`), or any content (\`flush\` drops the padding).`,
      },
    },
  },
  decorators: [(Story) => <div style={{ minHeight: 420 }}>{Story()}</div>],
} satisfies Meta;

export default meta;

const text: CSSProperties = { fontFamily: 'var(--ds-font-sans)', fontSize: 14, lineHeight: '20px', letterSpacing: '-0.005em', margin: 0 };
const icon = (glyph: ReactNode) => glyph;

const product = [
  { title: 'Hosting', description: 'Deploy from Git', icon: <RiServerLine /> },
  { title: 'Databases', description: 'Postgres and Redis', icon: <RiDatabase2Line /> },
  { title: 'Edge Functions', description: 'Code at the edge', icon: <RiFlashlightLine /> },
  { title: 'Analytics', description: 'Traffic and Web Vitals', icon: <RiLineChartLine /> },
];
const more = [
  { title: 'Storage', description: 'Files on a global CDN', icon: <RiHardDrive2Line /> },
  { title: 'Domains', description: 'DNS and automatic SSL', icon: <RiGlobalLine /> },
];
const solutions = [
  { title: 'Startups', description: 'Ship the first version' },
  { title: 'Enterprise', description: 'SSO, audit logs, SLAs' },
  { title: 'Agencies', description: 'Client sites in one place' },
  { title: 'E-commerce', description: 'Storefronts that stay up' },
  { title: 'AI apps', description: 'Stream from the edge' },
  { title: 'Open source', description: 'Free for maintainers' },
];
const resources = [
  { title: 'Documentation', description: 'Guides and reference', icon: <RiBookOpenLine /> },
  { title: 'Changelog', description: 'What shipped this week', icon: <RiHistoryLine /> },
  { title: 'Blog', description: 'Engineering stories', icon: <RiNewspaperLine /> },
  { title: 'Community', description: 'Forum and Discord', icon: <RiTeamLine /> },
  { title: 'Status', description: 'Uptime and incidents', icon: <RiPulseLine /> },
  { title: 'Support', description: 'Talk to an engineer', icon: <RiLifebuoyLine /> },
];
const href = (title: string) => `#${title.toLowerCase().replace(/[^a-z]+/g, '-')}`;

export const Playground: StoryObj<{ open: boolean; columns: number; icons: boolean }> = {
  args: { open: true, columns: 1, icons: false },
  render: (args) => (
    <NavigationMenu key={String(args.open)} defaultValue={args.open ? 'product' : undefined}>
      <NavigationMenuItem value="product" label="Product" width={args.columns > 1 ? '368px' : undefined}>
        <NavigationMenuList columns={args.columns}>
          {product.map((p) => (
            <NavigationMenuLink key={p.title} href={href(p.title)} title={p.title} description={args.columns > 1 ? p.description : undefined} icon={args.icons ? icon(p.icon) : undefined} />
          ))}
        </NavigationMenuList>
      </NavigationMenuItem>
      <NavigationMenuItem label="Solutions">
        <NavigationMenuList>
          {solutions.map((s) => (
            <NavigationMenuLink key={s.title} href={href(s.title)} title={s.title} />
          ))}
        </NavigationMenuList>
      </NavigationMenuItem>
      <NavigationMenuItem href="#pricing" label="Pricing" />
      <NavigationMenuItem href="#docs" label="Docs" />
    </NavigationMenu>
  ),
};

/** Figma demo "Navigation Menu": three triggers and two links; Product is open. */
export const Default: StoryObj = {
  render: () => (
    <NavigationMenu defaultValue="product">
      <NavigationMenuItem value="product" label="Product">
        <NavigationMenuList>
          {product.map((p) => (
            <NavigationMenuLink key={p.title} href={href(p.title)} title={p.title} />
          ))}
        </NavigationMenuList>
      </NavigationMenuItem>
      <NavigationMenuItem label="Solutions">
        <NavigationMenuList>
          {solutions.map((s) => (
            <NavigationMenuLink key={s.title} href={href(s.title)} title={s.title} />
          ))}
        </NavigationMenuList>
      </NavigationMenuItem>
      <NavigationMenuItem label="Resources">
        <NavigationMenuList>
          {resources.map((r) => (
            <NavigationMenuLink key={r.title} href={href(r.title)} title={r.title} />
          ))}
        </NavigationMenuList>
      </NavigationMenuItem>
      <NavigationMenuItem href="#pricing" label="Pricing" />
      <NavigationMenuItem href="#docs" label="Docs" />
    </NavigationMenu>
  ),
};

/** Figma Navigation Menu Trigger: Type=Trigger and Type=Link; Active is the open trigger or the current page; Disabled. */
export const States: StoryObj = {
  render: () => (
    <NavigationMenu aria-label="States" defaultValue="open">
      <NavigationMenuItem label="Default">
        <NavigationMenuList>
          <NavigationMenuLink href="#a" title="Link" />
        </NavigationMenuList>
      </NavigationMenuItem>
      <NavigationMenuItem value="open" label="Active (open)">
        <NavigationMenuList>
          <NavigationMenuLink href="#b" title="Link" />
          <NavigationMenuLink href="#c" title="Current page" active />
        </NavigationMenuList>
      </NavigationMenuItem>
      <NavigationMenuItem label="Disabled" disabled />
      <NavigationMenuItem href="#link" label="Link" />
      <NavigationMenuItem href="#current" label="Current" active />
      <NavigationMenuItem href="#off" label="Disabled link" disabled />
    </NavigationMenu>
  ),
};

/** Figma demo "Grid": two columns of links with descriptions, 368 px. */
export const Grid: StoryObj = {
  render: () => (
    <NavigationMenu defaultValue="product">
      <NavigationMenuItem value="product" label="Product" width="368px">
        <NavigationMenuList columns={2}>
          {product.map((p) => (
            <NavigationMenuLink key={p.title} href={href(p.title)} title={p.title} description={p.description} />
          ))}
        </NavigationMenuList>
      </NavigationMenuItem>
      <NavigationMenuItem label="Solutions" width="368px">
        <NavigationMenuList columns={2}>
          {solutions.map((s) => (
            <NavigationMenuLink key={s.title} href={href(s.title)} title={s.title} description={s.description} />
          ))}
        </NavigationMenuList>
      </NavigationMenuItem>
    </NavigationMenu>
  ),
};

/** Figma demo "With icons": icons above the text (Product) or before it (Resources). */
export const WithIcons: StoryObj = {
  render: () => (
    <NavigationMenu defaultValue="product">
      <NavigationMenuItem value="product" label="Product" width="368px">
        <NavigationMenuList columns={2}>
          {product.map((p) => (
            <NavigationMenuLink key={p.title} href={href(p.title)} title={p.title} description={p.description} icon={p.icon} iconPlacement="top" />
          ))}
        </NavigationMenuList>
      </NavigationMenuItem>
      <NavigationMenuItem label="Resources" width="368px">
        <NavigationMenuList columns={2}>
          {resources.map((r) => (
            <NavigationMenuLink key={r.title} href={href(r.title)} title={r.title} description={r.description} icon={r.icon} />
          ))}
        </NavigationMenuList>
      </NavigationMenuItem>
    </NavigationMenu>
  ),
};

/** Figma demo "Featured": a promoted card beside a grid of links, with a footer line. */
export const Featured: StoryObj = {
  render: () => (
    <NavigationMenu defaultValue="product">
      <NavigationMenuItem value="product" label="Product" width="640px">
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 24, padding: 16, borderRadius: 'var(--ds-radius-md)', background: 'var(--ds-fill-2)', minHeight: 200 }}>
            <Badge border shape="pill" style={{ alignSelf: 'flex-start' }}>
              Beta
            </Badge>
            <div style={{ display: 'grid', gap: 12 }}>
              <div style={{ display: 'grid', gap: 2 }}>
                <p style={{ ...text, fontSize: 16, lineHeight: '24px', fontWeight: 500 }}>Fluid compute</p>
                <p style={{ ...text, fontSize: 12, lineHeight: '16px', color: 'var(--ds-muted-foreground)' }}>Compute that scales to zero</p>
              </div>
              <Button size="sm" style={{ justifySelf: 'start' }}>
                Get started
              </Button>
            </div>
          </div>
          <div style={{ flex: '1.6 1 280px', display: 'grid', gap: 8, alignContent: 'space-between' }}>
            <NavigationMenuList columns={2}>
              {[...product, ...more].map((p) => (
                <NavigationMenuLink key={p.title} href={href(p.title)} title={p.title} description={p.description} icon={p.icon} />
              ))}
            </NavigationMenuList>
            <div style={{ margin: '0 8px', padding: '16px 0 12px', borderTop: '1px solid var(--ds-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
              <p style={{ ...text, fontWeight: 500 }}>Looking for the API docs?</p>
              <Button variant="ghost" size="sm">
                Open docs
              </Button>
            </div>
          </div>
        </div>
      </NavigationMenuItem>
    </NavigationMenu>
  ),
};

const groups = [
  { label: 'Platform', links: [...product, ...more] },
  { label: 'Resources', links: resources.slice(0, 5) },
  {
    label: 'Company',
    links: [
      { title: 'About', description: 'Who builds the platform' },
      { title: 'Careers', description: 'Open roles across teams' },
      { title: 'Contact', description: 'Sales and press' },
    ],
  },
];

/** Figma demo "Groups": three labelled columns without panel padding; the last on the fill-1 tint. */
export const Groups: StoryObj = {
  render: () => (
    <NavigationMenu defaultValue="explore">
      <NavigationMenuItem value="explore" label="Explore" width="640px" flush>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
          {groups.map((g, i) => (
            <section key={g.label} aria-labelledby={`group-${g.label}`} style={{ padding: 20, display: 'grid', gap: 8, alignContent: 'start', background: i === groups.length - 1 ? 'var(--ds-fill-1)' : undefined }}>
              <h3 id={`group-${g.label}`} style={{ ...text, fontSize: 12, lineHeight: '16px', fontWeight: 500, color: 'var(--ds-muted-foreground)', paddingBottom: 4 }}>
                {g.label}
              </h3>
              <hr style={{ margin: '4px 0', border: 0, borderTop: '1px solid var(--ds-border)' }} />
              <NavigationMenuList style={{ margin: '0 -8px' }}>
                {g.links.map((l) => (
                  <NavigationMenuLink key={l.title} href={href(l.title)} title={l.title} description={l.description} />
                ))}
              </NavigationMenuList>
            </section>
          ))}
        </div>
      </NavigationMenuItem>
    </NavigationMenu>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  decorators: [(Story) => Story()],
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, minHeight: 300 }}>
          <NavigationMenu aria-label={`Main (${scheme})`} defaultValue="product">
            <NavigationMenuItem value="product" label="Product">
              <NavigationMenuList>
                {product.slice(0, 3).map((p) => (
                  <NavigationMenuLink key={p.title} href={href(p.title)} title={p.title} description={p.description} icon={p.icon} active={p.title === 'Hosting'} />
                ))}
              </NavigationMenuList>
            </NavigationMenuItem>
            <NavigationMenuItem href="#pricing" label="Pricing" active />
            <NavigationMenuItem href="#docs" label="Docs" />
          </NavigationMenu>
        </div>
      ))}
    </div>
  ),
};
