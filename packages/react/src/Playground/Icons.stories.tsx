import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties, ReactNode } from 'react';
import { RiCheckboxBlankLine, RiCompass3Line, RiFileSearchLine, RiLoader2Line, RiSearchLine, RiSettings3Line, RiShareLine, RiUserLine } from '@remixicon/react';
import { CircleDashed, FolderSearch, Search, Settings, Share2, SquareDashed, Telescope, User } from 'lucide-react';
import { Trace, TraceLine } from '../AITrace';
import { Button } from '../Button';
import { DropdownMenu, DropdownMenuItem, DropdownMenuSeparator } from '../DropdownMenu';
import { Input } from '../Input';
import { Tabs, TabsList, TabsTrigger } from '../Tabs';

const meta = {
  title: 'Playground/Remix and lucide',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Remix icons are the main set; lucide fills in for the ones Remix does not have (docs/icons.md). Every icon slot takes either: the component sizes the icon and gives it `currentColor`, and ds-css draws every lucide icon (the `lucide` class) with the 1.25 px line Sort UI 2.0 uses, at any size. `lucide-react` is not a dependency of `@helloantek/ds-react`: install it in the product that needs it.',
      },
    },
  },
} satisfies Meta;

export default meta;

const label: CSSProperties = { color: 'var(--ds-muted-foreground)', fontSize: 'var(--ds-text-xs)', lineHeight: 'var(--ds-text-xs--line-height)' };

const Row = ({ name, remix, lucide }: { name: string; remix: ReactNode; lucide: ReactNode }) => (
  <>
    <div style={{ ...label, alignSelf: 'center' }}>{name}</div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>{remix}</div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>{lucide}</div>
  </>
);

/** The same components with a Remix icon (left) and a lucide one (right). */
export const SideBySide: StoryObj = {
  name: 'Side by side',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'max-content minmax(0, 280px) minmax(0, 280px)', gap: '16px 24px', fontFamily: 'var(--ds-font-sans)', color: 'var(--ds-foreground)' }}>
      <div />
      <div style={label}>Remix</div>
      <div style={label}>lucide</div>
      <Row
        name="Button"
        remix={
          <>
            <Button variant="outline" leadingIcon={<RiShareLine />}>Share</Button>
            <Button variant="outline" icon={<RiSettings3Line />} aria-label="Settings (Remix)" />
          </>
        }
        lucide={
          <>
            <Button variant="outline" leadingIcon={<Share2 />}>Share</Button>
            <Button variant="outline" icon={<Settings />} aria-label="Settings (lucide)" />
          </>
        }
      />
      <Row name="Small button" remix={<Button size="xs" leadingIcon={<RiCheckboxBlankLine />}>Button</Button>} lucide={<Button size="xs" leadingIcon={<SquareDashed />}>Button</Button>} />
      <Row name="Input" remix={<Input aria-label="Search (Remix)" placeholder="Search" leadIcon={<RiSearchLine />} />} lucide={<Input aria-label="Search (lucide)" placeholder="Search" leadIcon={<Search />} />} />
      <Row
        name="Tabs"
        remix={
          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="account" icon={<RiUserLine />}>Account</TabsTrigger>
              <TabsTrigger value="settings" icon={<RiSettings3Line />}>Settings</TabsTrigger>
            </TabsList>
          </Tabs>
        }
        lucide={
          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="account" icon={<User />}>Account</TabsTrigger>
              <TabsTrigger value="settings" icon={<Settings />}>Settings</TabsTrigger>
            </TabsList>
          </Tabs>
        }
      />
      <Row
        name="AI Trace"
        remix={
          <Trace>
            <TraceLine icon={<RiCompass3Line />}>Planned 5 questions</TraceLine>
            <TraceLine icon={<RiFileSearchLine />} description="12 files">Searched the notes</TraceLine>
            <TraceLine icon={<RiLoader2Line />} status="pending">Write the summary</TraceLine>
          </Trace>
        }
        lucide={
          <Trace>
            <TraceLine icon={<Telescope />}>Planned 5 questions</TraceLine>
            <TraceLine icon={<FolderSearch />} description="12 files">Searched the notes</TraceLine>
            <TraceLine icon={<CircleDashed />} status="pending">Write the summary</TraceLine>
          </Trace>
        }
      />
    </div>
  ),
};

/** Both sets in one menu: a Remix icon above each lucide one. */
export const Menu: StoryObj = {
  render: () => (
    <div style={{ minHeight: 260 }}>
      <DropdownMenu trigger={<Button variant="outline">Menu</Button>} defaultOpen>
        <DropdownMenuItem icon={<RiUserLine />}>Profile (Remix)</DropdownMenuItem>
        <DropdownMenuItem icon={<User />}>Profile (lucide)</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem icon={<RiSettings3Line />}>Settings (Remix)</DropdownMenuItem>
        <DropdownMenuItem icon={<Settings />}>Settings (lucide)</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem icon={<RiCheckboxBlankLine />}>Placeholder (Remix)</DropdownMenuItem>
        <DropdownMenuItem icon={<SquareDashed />}>Placeholder (lucide, Figma's icon)</DropdownMenuItem>
      </DropdownMenu>
    </div>
  ),
};

const sizes = [16, 20, 24, 32];

/** The line stays 1.25 px at every size; `--icon-stroke-width` changes it (here back to lucide's own 2 px). */
export const Stroke: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'max-content repeat(4, 48px)', alignItems: 'center', gap: '12px 16px', fontFamily: 'var(--ds-font-sans)', color: 'var(--ds-foreground)' }}>
      <div />
      {sizes.map((s) => (
        <div key={s} style={label}>{s} px</div>
      ))}
      <div style={label}>Remix</div>
      {sizes.map((s) => (
        <RiSettings3Line key={s} size={s} />
      ))}
      <div style={label}>lucide, 1.25 px</div>
      {sizes.map((s) => (
        <Settings key={s} size={s} />
      ))}
      <div style={label}>lucide, --icon-stroke-width: 2px</div>
      {sizes.map((s) => (
        <Settings key={s} size={s} style={{ '--icon-stroke-width': '2px' } as CSSProperties} />
      ))}
    </div>
  ),
};
