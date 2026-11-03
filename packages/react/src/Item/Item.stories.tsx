import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type ReactNode } from 'react';
import { Avatar } from '../Avatar';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Radio } from '../Radio';
import { Switch } from '../Switch';
import { Item, ItemGroup, ItemMedia, ItemSeparator, type ItemSize, type ItemVariant } from './Item';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=227-45';

const meta = {
  title: 'Components/Item',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Item**, **Item Media**, **Item Group** and **Item Separator** ([open in Figma](${FIGMA_URL})): Figma Variant → \`variant\` (\`default\` · \`outline\` · \`muted\`), Size → \`size\` (\`default\` · \`sm\` · \`xs\`), the slots → \`header\`, \`media\`, \`title\` / \`description\` (content), \`actions\` and \`footer\`. State=Hover and Focus belong to rows that are one action: a link (\`href\`), a button (\`as="button"\`) or a label around a Switch, Radio or Checkbox (\`as="label"\`). \`ItemGroup\` is a list, 16 px apart, or \`joined\` into one block ("Navigation" demo); \`ItemSeparator\` draws a line between rows.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const icon = (path: ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {path}
  </svg>
);
const icons = {
  database: icon(<><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14a9 3 0 0 0 18 0V5" /><path d="M3 12a9 3 0 0 0 18 0" /></>),
  server: icon(<><rect width="20" height="8" x="2" y="2" rx="2" /><rect width="20" height="8" x="2" y="14" rx="2" /><path d="M6 6h.01M6 18h.01" /></>),
  cloud: icon(<><path d="M12 13v8m-4-4 4-4 4 4" /><path d="M4 14.9A7 7 0 1 1 15.7 8h1.8a4.5 4.5 0 0 1 2.5 8.2" /></>),
  key: icon(<><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4m2-2-9.6 9.6" /><circle cx="7.5" cy="15.5" r="5.5" /></>),
  file: icon(<><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4M10 9H8m8 4H8m8 4H8" /></>),
  image: icon(<><rect width="18" height="18" x="3" y="3" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21" /></>),
  package: icon(<><path d="M11 21.7a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7z" /><path d="M12 22V12M3.3 7 12 12l8.7-5" /></>),
  users: icon(<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></>),
  card: icon(<><rect width="20" height="14" x="2" y="5" rx="2" /><path d="M2 10h20" /></>),
  bell: icon(<><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0" /><path d="M3.3 15.3A1 1 0 0 0 4 17h16a1 1 0 0 0 .7-1.7C19.4 14 18 12.5 18 8A6 6 0 0 0 6 8c0 4.5-1.4 6-2.7 7.3" /></>),
  shield: icon(<path d="M20 13c0 5-3.5 7.5-7.7 9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" />),
  rocket: icon(<><path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1z" /><path d="m12 15-3-3a22 22 0 0 1 2-4A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2z" /><path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0m1 7v5s3-.6 4-2c1.1-1.6 0-5 0-5" /></>),
  bug: icon(<><path d="m8 2 1.9 1.9M14.1 3.9 16 2M9 7.1v-1a3 3 0 1 1 6 0v1" /><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6m0 0v-9M6.5 9C4.6 8.8 3 7.1 3 5m3 8H2m1 8c0-2.1 1.7-3.9 3.8-4M20.97 5c0 2.1-1.6 3.8-3.5 4M22 13h-4m-.8 4c2.1.1 3.8 1.9 3.8 4" /></>),
  mail: icon(<><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>),
};
const chevron = icon(<path d="m9 18 6-6-6-6" />);
const box = { width: 448, maxWidth: '100%' };

export const Playground: StoryObj<{ variant: ItemVariant; size: ItemSize; media: boolean; actions: boolean; header: boolean; footer: boolean }> = {
  args: { variant: 'outline', size: 'default', media: true, actions: true, header: false, footer: false },
  argTypes: { variant: { control: 'inline-radio', options: ['default', 'outline', 'muted'] }, size: { control: 'inline-radio', options: ['default', 'sm', 'xs'] } },
  render: ({ variant, size, media, actions, header, footer }) => (
    <div style={box}>
      <Item
        variant={variant}
        size={size}
        header={header ? 'Header' : undefined}
        footer={footer ? 'Footer' : undefined}
        media={media ? <ItemMedia>{icons.database}</ItemMedia> : undefined}
        title="Placeholder label"
        description="Lorem Ipsum is simply dummy text."
        actions={
          actions ? (
            <Button variant="outline" size="sm">
              Button
            </Button>
          ) : undefined
        }
      />
    </div>
  ),
};

/** Figma demo "Item": a header and an image, a plain row, and a muted link row. */
export const Default: StoryObj = {
  render: () => (
    <ItemGroup aria-label="Backups" style={box}>
      <Item
        variant="outline"
        header={
          <>
            <span>Backup</span>
            <span>2 hours ago</span>
          </>
        }
        media={<ItemMedia variant="image">{icons.database}</ItemMedia>}
        title="Production database"
        description="Snapshot of 14 tables, 2.4 GB, stored in Frankfurt."
        actions={
          <Button variant="outline" size="sm">
            Restore
          </Button>
        }
      />
      <Item
        variant="outline"
        title="Weekly usage report"
        description="Sent every Monday to the billing address on file."
        actions={
          <Button variant="outline" size="sm">
            Manage
          </Button>
        }
      />
      <Item variant="muted" href="#audit" title="Open the audit log" actions={chevron} />
    </ItemGroup>
  ),
};

/** Figma demo "Variants": Default, Outline and Muted. */
export const Variants: StoryObj = {
  render: () => (
    <ItemGroup aria-label="Infrastructure" style={box}>
      {(
        [
          ['default', icons.server, 'Frankfurt region', 'Three nodes, all healthy since 4 March.', 'Details'],
          ['outline', icons.cloud, 'Nightly backups', 'Runs at 02:00 UTC and keeps 30 days.', 'Configure'],
          ['muted', icons.key, 'Deploy keys', 'Two keys have access to this project.', 'Rotate'],
        ] as const
      ).map(([variant, glyph, title, description, action]) => (
        <Item
          key={variant}
          variant={variant}
          media={<ItemMedia>{glyph}</ItemMedia>}
          title={title}
          description={description}
          actions={
            <Button variant="outline" size="sm">
              {action}
            </Button>
          }
        />
      ))}
    </ItemGroup>
  ),
};

/** Figma demo "Size": default, sm and xs. */
export const Sizes: StoryObj = {
  render: () => (
    <ItemGroup aria-label="Sizes" style={box}>
      {(
        [
          ['default', 'Default row'],
          ['sm', 'Small row'],
          ['xs', 'Extra small row'],
        ] as const
      ).map(([size, title]) => (
        <Item
          key={size}
          variant="outline"
          size={size}
          title={title}
          description="Invoices, receipts and usage exports live here."
          actions={
            <Button variant="outline" size="sm">
              Open
            </Button>
          }
        />
      ))}
    </ItemGroup>
  ),
};

const files = [
  { name: 'invoice-2026-03.pdf', meta: 'Billing · 184 KB', count: '2.4k', glyph: icons.file },
  { name: 'onboarding-hero.png', meta: 'Marketing · 1.2 MB', count: '860', glyph: icons.image },
  { name: 'sdk-4.3.0.tgz', meta: 'Releases · 640 KB', count: '12k', glyph: icons.package },
];

/** Figma demo "Separated list": flush rows with Item Separators. */
export const SeparatedList: StoryObj = {
  render: () => (
    <ItemGroup aria-label="Downloads" style={box}>
      {files.flatMap((f, i) => [
        ...(i > 0 ? [<ItemSeparator key={`sep-${f.name}`} />] : []),
        <Item
          key={f.name}
          flush
          media={<ItemMedia>{f.glyph}</ItemMedia>}
          title={f.name}
          description={f.meta}
          actions={
            <span style={{ display: 'grid', justifyItems: 'end', gap: 2 }}>
              <span style={{ fontWeight: 500 }}>{f.count}</span>
              <span style={{ fontSize: 12, lineHeight: '16px', color: 'var(--ds-muted-foreground)' }}>downloads</span>
            </span>
          }
        />,
      ])}
    </ItemGroup>
  ),
};

/** Figma demo "Avatars": Avatar media and a Badge. */
export const Avatars: StoryObj = {
  render: () => (
    <ItemGroup aria-label="People" style={box}>
      {(
        [
          ['MO', 'Mira Okafor', 'Owner since 2024', 'Owner'],
          ['JL', 'Jonas Lindqvist', 'Last active 2 hours ago', 'Member'],
          ['PR', 'Priya Raman', 'Last active yesterday', 'Member'],
        ] as const
      ).map(([initials, name, description, role]) => (
        <Item
          key={name}
          variant="outline"
          media={<Avatar size="lg" initials={initials} name={name} />}
          title={name}
          description={description}
          actions={role === 'Owner' ? <Badge color="fuchsia">{role}</Badge> : <Badge>{role}</Badge>}
        />
      ))}
    </ItemGroup>
  ),
};

/** Figma demo "Navigation": muted sm link rows joined into one block. */
export const Navigation: StoryObj = {
  render: () => (
    <nav aria-label="Settings" style={box}>
      <ItemGroup variant="joined">
        {(
          [
            [icons.users, 'Members and roles'],
            [icons.card, 'Billing'],
            [icons.bell, 'Notifications'],
            [icons.shield, 'Security'],
          ] as const
        ).map(([glyph, title]) => (
          <Item key={title} variant="muted" size="sm" href={`#${title.toLowerCase().replace(/ /g, '-')}`} media={<ItemMedia>{glyph}</ItemMedia>} title={title} actions={chevron} />
        ))}
      </ItemGroup>
    </nav>
  ),
};

/** Figma demo "Switch": the whole row is the switch's label. */
export const WithSwitch: StoryObj = {
  render: function Render() {
    const [on, setOn] = useState({ deploy: true, errors: false, digest: false });
    const rows = [
      ['deploy', icons.rocket, 'Deploy notifications', 'Tell me when a build reaches production.'],
      ['errors', icons.bug, 'Error alerts', 'Page me when the error rate passes 1%.'],
      ['digest', icons.mail, 'Weekly digest', 'One email every Monday with the numbers.'],
    ] as const;
    return (
      <ItemGroup aria-label="Notifications" style={box}>
        {rows.map(([key, glyph, title, description]) => (
          <Item
            key={key}
            as="label"
            variant="outline"
            media={<ItemMedia>{glyph}</ItemMedia>}
            title={<span id={`notify-${key}`}>{title}</span>}
            description={description}
            actions={<Switch checked={on[key]} onCheckedChange={(v) => setOn({ ...on, [key]: v })} aria-labelledby={`notify-${key}`} />}
          />
        ))}
      </ItemGroup>
    );
  },
};

/** Figma demo "Radio": plans as labelled radio rows. */
export const WithRadio: StoryObj = {
  render: function Render() {
    const [plan, setPlan] = useState('pro');
    const plans = [
      ['hobby', 'Hobby', 'One project, 100 GB bandwidth, community support.'],
      ['pro', 'Pro', 'Ten projects, 1 TB bandwidth, email support.'],
      ['enterprise', 'Enterprise', 'Unlimited projects, SSO and a support channel.'],
    ] as const;
    return (
      <div role="radiogroup" aria-label="Plan" style={box}>
        <ItemGroup>
          {plans.map(([value, title, description]) => (
            <Item
              key={value}
              as="label"
              variant="outline"
              media={<Radio name="plan" value={value} checked={plan === value} onChange={() => setPlan(value)} aria-labelledby={`plan-${value}`} />}
              title={<span id={`plan-${value}`}>{title}</span>}
              description={description}
            />
          ))}
        </ItemGroup>
      </div>
    );
  },
};

/** Figma State=Hover and Focus on link rows, in every variant. */
export const States: StoryObj = {
  render: () => (
    <ItemGroup aria-label="Links" style={box}>
      {(['default', 'outline', 'muted'] as const).map((variant) => (
        <Item key={variant} variant={variant} href={`#${variant}`} media={<ItemMedia>{icons.file}</ItemMedia>} title={`${variant[0].toUpperCase()}${variant.slice(1)} link row`} description="Hover it, or Tab to it." actions={chevron} />
      ))}
    </ItemGroup>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24 }}>
          <ItemGroup aria-label={`Items (${scheme})`}>
            {(['default', 'outline', 'muted'] as const).map((variant) => (
              <Item
                key={variant}
                variant={variant}
                media={<ItemMedia variant="image">{icons.database}</ItemMedia>}
                title={`${variant} (${scheme})`}
                description="Snapshot of 14 tables."
                actions={
                  <Button variant="outline" size="sm">
                    Open
                  </Button>
                }
              />
            ))}
          </ItemGroup>
        </div>
      ))}
    </div>
  ),
};
