import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties, ReactNode } from 'react';
import { Button } from '../Button';
import { DropdownMenu, DropdownMenuItem, DropdownMenuSeparator } from '../DropdownMenu';
import { Input } from '../Input';
import { ButtonGroup, ButtonGroupText, type ButtonGroupOrientation } from './ButtonGroup';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=302-14707';

// Icons of the Figma demos (Sort UI 2.0 / Lucide, 24 px grid drawn at 16 px with a 1.25 px stroke).
const icon = (children: ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.875} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {children}
  </svg>
);
const icons = {
  plus: icon(<path d="M5 12h14M12 5v14" />),
  minus: icon(<path d="M5 12h14" />),
  globe: icon(
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20" />
    </>,
  ),
  chevronDown: icon(<path d="m6 9 6 6 6-6" />),
  chevronUp: icon(<path d="m18 15-6-6-6 6" />),
  search: icon(
    <>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </>,
  ),
  arrowRight: icon(<path d="M5 12h14M12 5l7 7-7 7" />),
  at: icon(
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
    </>,
  ),
  branch: icon(
    <>
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M6 3v12M18 9a9 9 0 0 1-9 9" />
    </>,
  ),
  download: icon(<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />),
  copy: icon(
    <>
      <rect width="14" height="14" x="8" y="8" rx="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </>,
  ),
  trash: icon(<path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />),
};

const meta = {
  title: 'Components/Button Group',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 page **Button Group** ([open in Figma](${FIGMA_URL})): **Button Group** (\`orientation\`: \`horizontal\` · \`vertical\`), its Start / Middle / End buttons (any \`Button\`; the group rounds only the outer corners and drops the shared stroke) and **Button Group Text** (\`ButtonGroupText\`). An \`Input\` or a \`Select\` can join a group, and a group of groups spaces them 8 px apart. Name a group with \`aria-label\`.`,
      },
    },
  },
} satisfies Meta;

export default meta;

type PlaygroundArgs = { orientation: ButtonGroupOrientation; variant: 'outline' | 'default' | 'secondary' | 'ghost'; count: number; text: boolean };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { orientation: 'horizontal', variant: 'outline', count: 4, text: false },
  argTypes: {
    orientation: { name: 'Orientation', control: 'inline-radio', options: ['horizontal', 'vertical'] },
    variant: { name: 'Button Variant', control: 'inline-radio', options: ['outline', 'default', 'secondary', 'ghost'] },
    count: { name: 'Buttons', control: { type: 'range', min: 2, max: 6 } },
    text: { name: 'Button Group Text first' },
  },
  render: ({ orientation, variant, count, text }) => (
    <ButtonGroup orientation={orientation} aria-label="Actions">
      {text && <ButtonGroupText>Text</ButtonGroupText>}
      {Array.from({ length: count }, (_, i) => (
        <Button key={i} variant={variant}>
          Button
        </Button>
      ))}
    </ButtonGroup>
  ),
};

const caption: CSSProperties = { fontFamily: 'var(--ds-font-sans)', fontSize: 12, color: 'var(--ds-muted-foreground)' };

/** Figma "Button Group" (Orientation) and its Button set: Start, Middle, End in a row and in a column. */
export const Orientation: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: 48, alignItems: 'flex-start' }}>
      <div style={{ display: 'grid', gap: 8 }}>
        <span style={caption}>Horizontal</span>
        <ButtonGroup aria-label="Horizontal">
          {['Button', 'Button', 'Button', 'Button'].map((label, i) => (
            <Button key={i} variant="outline">
              {label}
            </Button>
          ))}
        </ButtonGroup>
      </div>
      <div style={{ display: 'grid', gap: 8 }}>
        <span style={caption}>Vertical</span>
        <ButtonGroup orientation="vertical" aria-label="Vertical" style={{ width: 120 }}>
          {['Button', 'Button', 'Button', 'Button'].map((label, i) => (
            <Button key={i} variant="outline">
              {label}
            </Button>
          ))}
        </ButtonGroup>
      </div>
      <div style={{ display: 'grid', gap: 8 }}>
        <span style={caption}>Button Group Text</span>
        <ButtonGroup aria-label="With text">
          <ButtonGroupText>Text</ButtonGroupText>
          <ButtonGroupText icon={icons.globe}>Icon</ButtonGroupText>
        </ButtonGroup>
      </div>
    </div>
  ),
};

/** Figma demo "Button Group": a group of groups, 8 px apart. */
export const Toolbar: StoryObj = {
  render: () => (
    <ButtonGroup aria-label="Toolbar">
      <Button variant="outline" icon={icons.plus} aria-label="Add" />
      <ButtonGroup aria-label="Review">
        <Button variant="outline">Preview</Button>
        <Button variant="outline">Share</Button>
      </ButtonGroup>
      <Button leadingIcon={icons.globe}>Deploy</Button>
    </ButtonGroup>
  ),
};

/** Figma demo "Split button": Default, Outline and Secondary. */
export const SplitButton: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 16, justifyItems: 'center' }}>
      {(['default', 'outline', 'secondary'] as const).map((variant) => (
        <ButtonGroup key={variant} aria-label={`Approve (${variant})`}>
          <Button variant={variant}>Approve</Button>
          <Button variant={variant} icon={icons.chevronDown} aria-label="More approve options" />
        </ButtonGroup>
      ))}
    </div>
  ),
};

/** Figma demo "Vertical". */
export const Vertical: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 16, justifyItems: 'center' }}>
      <ButtonGroup orientation="vertical" aria-label="Create" style={{ width: 160 }}>
        <Button variant="outline" leadingIcon={icons.at}>
          Email invite
        </Button>
        <Button variant="outline" leadingIcon={icons.branch}>
          New branch
        </Button>
        <Button variant="outline" leadingIcon={icons.download}>
          Download CSV
        </Button>
      </ButtonGroup>
      <ButtonGroup orientation="vertical" aria-label="Zoom">
        <Button variant="outline" icon={icons.plus} aria-label="Zoom in" />
        <Button variant="outline" icon={icons.minus} aria-label="Zoom out" />
      </ButtonGroup>
    </div>
  ),
};

/** Figma demo "Nested": an Input between buttons, 8 px apart. */
export const Nested: StoryObj = {
  render: () => (
    <ButtonGroup aria-label="Message" style={{ width: 360 }}>
      <Button variant="outline" icon={icons.plus} aria-label="Attach" />
      <ButtonGroup aria-label="Compose" style={{ flex: 1 }}>
        <Input aria-label="Message" placeholder="Send a message" />
      </ButtonGroup>
      <Button icon={icons.arrowRight} aria-label="Send" />
    </ButtonGroup>
  ),
};

/** Figma demo "With input": an Input joined to an icon button; ButtonGroupText as a prefix. */
export const WithInput: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 16, width: 272 }}>
      <ButtonGroup aria-label="Search">
        <Input aria-label="Search" placeholder="Search..." />
        <Button variant="outline" icon={icons.search} aria-label="Search" />
      </ButtonGroup>
      <ButtonGroup aria-label="Website">
        <ButtonGroupText>https://</ButtonGroupText>
        <Input aria-label="Website" placeholder="example.com" />
      </ButtonGroup>
    </div>
  ),
};

// Open menus pop out of the story's box; leave room for them.
const room: Decorator = (Story) => (
  <div style={{ minHeight: 160 }}>
    <Story />
  </div>
);

/** Figma demo "With dropdown menu": the second button opens a Dropdown Menu. */
export const WithDropdownMenu: StoryObj = {
  decorators: [room],
  render: () => (
    <ButtonGroup aria-label="Follow">
      <Button variant="outline">Follow</Button>
      <DropdownMenu trigger={<Button variant="outline" icon={icons.chevronDown} aria-label="More follow options" />} align="end">
        <DropdownMenuItem icon={icons.copy}>Copy link</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem type="destructive" icon={icons.trash}>
          Delete conversation
        </DropdownMenuItem>
      </DropdownMenu>
    </ButtonGroup>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'grid', gap: 16, justifyItems: 'start' }}>
          <div style={caption}>{scheme === 'light' ? 'Light' : 'Dark'}</div>
          <ButtonGroup aria-label={`Review (${scheme})`}>
            <Button variant="outline">Preview</Button>
            <Button variant="outline">Share</Button>
            <Button variant="outline">Export</Button>
          </ButtonGroup>
          {(['default', 'secondary'] as const).map((variant) => (
            <ButtonGroup key={variant} aria-label={`Approve ${variant} (${scheme})`}>
              <Button variant={variant}>Approve</Button>
              <Button variant={variant} icon={icons.chevronDown} aria-label="More" />
            </ButtonGroup>
          ))}
          <ButtonGroup aria-label={`Website (${scheme})`} style={{ width: 272 }}>
            <ButtonGroupText>https://</ButtonGroupText>
            <Input aria-label="Website" placeholder="example.com" />
          </ButtonGroup>
        </div>
      ))}
    </div>
  ),
};
