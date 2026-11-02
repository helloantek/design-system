import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';
import { DropdownMenuItem } from '../DropdownMenu';
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, type BreadcrumbSeparatorType } from './Breadcrumb';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=259-2';

const meta = {
  title: 'Components/Breadcrumb',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Breadcrumb**, **Breadcrumb Item**, **Breadcrumb Separator** and **Breadcrumb Ellipsis** ([open in Figma](${FIGMA_URL})): Breadcrumb Item type → \`BreadcrumbItem\` with \`href\` (link), \`current\` (active) or \`menu\` (dropdown), Icon → \`icon\`; Separator Type → \`separator\` on the Breadcrumb (\`chevron\` · \`slash\` · \`dot\`); Ellipsis → \`BreadcrumbEllipsis\` with menu items for the steps left out. It is a \`nav\` landmark with an ordered list; separators are hidden from assistive technology and the current page has \`aria-current="page"\`. \`asChild\` renders your router's link.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const icon = (path: ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.73} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {path}
  </svg>
);
const house = icon(
  <>
    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </>,
);
const folder = icon(<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />);

export const Playground: StoryObj<{ separator: BreadcrumbSeparatorType; icons: boolean; collapsed: boolean; dropdown: boolean }> = {
  args: { separator: 'chevron', icons: false, collapsed: false, dropdown: false },
  argTypes: { separator: { control: 'inline-radio', options: ['chevron', 'slash', 'dot'] } },
  render: ({ separator, icons, collapsed, dropdown }) => (
    <div style={{ minHeight: 160 }}>
      <Breadcrumb separator={separator}>
        <BreadcrumbItem href="#home" icon={icons ? house : undefined}>
          Home
        </BreadcrumbItem>
        {collapsed && (
          <BreadcrumbEllipsis>
            <DropdownMenuItem>Documents</DropdownMenuItem>
            <DropdownMenuItem>Themes</DropdownMenuItem>
          </BreadcrumbEllipsis>
        )}
        {dropdown ? (
          <BreadcrumbItem icon={icons ? folder : undefined} menu={['Projects', 'Archive', 'Shared with me'].map((p) => <DropdownMenuItem key={p}>{p}</DropdownMenuItem>)}>
            Projects
          </BreadcrumbItem>
        ) : (
          <BreadcrumbItem href="#projects" icon={icons ? folder : undefined}>
            Projects
          </BreadcrumbItem>
        )}
        <BreadcrumbItem current>Onboarding flow</BreadcrumbItem>
      </Breadcrumb>
    </div>
  ),
};

/** Figma demo "Breadcrumb". */
export const Default: StoryObj = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem href="#home">Home</BreadcrumbItem>
      <BreadcrumbItem href="#projects">Projects</BreadcrumbItem>
      <BreadcrumbItem current>Onboarding flow</BreadcrumbItem>
    </Breadcrumb>
  ),
};

/** Figma demo "Collapsed": the Ellipsis opens a menu of the steps left out. */
export const Collapsed: StoryObj = {
  render: () => (
    <div style={{ minHeight: 180 }}>
      <Breadcrumb>
        <BreadcrumbItem href="#home">Home</BreadcrumbItem>
        <BreadcrumbEllipsis>
          <DropdownMenuItem>Documents</DropdownMenuItem>
          <DropdownMenuItem>Themes</DropdownMenuItem>
          <DropdownMenuItem>Repositories</DropdownMenuItem>
        </BreadcrumbEllipsis>
        <BreadcrumbItem href="#projects">Projects</BreadcrumbItem>
        <BreadcrumbItem current>Onboarding flow</BreadcrumbItem>
      </Breadcrumb>
    </div>
  ),
};

/** Figma demo "Dropdown": Breadcrumb Item type=dropdown opens the step's siblings. */
export const Dropdown: StoryObj = {
  render: () => (
    <div style={{ minHeight: 180 }}>
      <Breadcrumb>
        <BreadcrumbItem href="#home">Home</BreadcrumbItem>
        <BreadcrumbItem menuLabel="Switch section" menu={['Projects', 'Archive', 'Shared with me'].map((p) => <DropdownMenuItem key={p}>{p}</DropdownMenuItem>)}>
          Projects
        </BreadcrumbItem>
        <BreadcrumbItem current>Onboarding flow</BreadcrumbItem>
      </Breadcrumb>
    </div>
  ),
};

/** Figma demo "Separators": Breadcrumb Separator Type=Chevron, Slash and Dot. */
export const Separators: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 24 }}>
      {(['chevron', 'slash', 'dot'] as const).map((separator) => (
        <Breadcrumb key={separator} separator={separator} aria-label={`Breadcrumb (${separator})`}>
          <BreadcrumbItem href="#home">Home</BreadcrumbItem>
          <BreadcrumbItem href="#projects">Projects</BreadcrumbItem>
          <BreadcrumbItem current>Onboarding flow</BreadcrumbItem>
        </Breadcrumb>
      ))}
    </div>
  ),
};

/** Figma Breadcrumb Item Icon: an icon before the label. */
export const WithIcons: StoryObj = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem href="#home" icon={house}>
        Home
      </BreadcrumbItem>
      <BreadcrumbItem href="#projects" icon={folder}>
        Projects
      </BreadcrumbItem>
      <BreadcrumbItem current>Onboarding flow</BreadcrumbItem>
    </Breadcrumb>
  ),
};

/** Long trails wrap onto the next line instead of overflowing. */
export const LongTrail: StoryObj = {
  render: () => (
    <div style={{ width: 280 }}>
      <Breadcrumb>
        <BreadcrumbItem href="#home">Home</BreadcrumbItem>
        <BreadcrumbItem href="#workspace">Orbit workspace</BreadcrumbItem>
        <BreadcrumbItem href="#projects">Projects</BreadcrumbItem>
        <BreadcrumbItem href="#q3">Q3 launch</BreadcrumbItem>
        <BreadcrumbItem current>Onboarding flow</BreadcrumbItem>
      </Breadcrumb>
    </div>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'grid', gap: 16 }}>
          {(['chevron', 'slash', 'dot'] as const).map((separator) => (
            <Breadcrumb key={separator} separator={separator} aria-label={`Breadcrumb (${separator}, ${scheme})`}>
              <BreadcrumbItem href="#home" icon={house}>
                Home
              </BreadcrumbItem>
              <BreadcrumbItem href="#projects">Projects</BreadcrumbItem>
              <BreadcrumbItem current>Onboarding flow</BreadcrumbItem>
            </Breadcrumb>
          ))}
        </div>
      ))}
    </div>
  ),
};
