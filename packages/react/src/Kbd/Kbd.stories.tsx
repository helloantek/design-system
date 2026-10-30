import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties, ReactNode } from 'react';
import { RiSearchLine } from '@remixicon/react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Tooltip } from '../Tooltip';
import { Kbd, KbdGroup, type KbdSize, type KbdVariant } from './Kbd';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=251-2';

const meta = {
  title: 'Components/Kbd',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Kbd** and **Kbd Group** ([open in Figma](${FIGMA_URL})): \`variant\` (\`default\` · \`inverted\` for dark surfaces), \`size\` (\`default\` 20 · \`sm\` 16 px), \`icon\` and the key text. \`KbdGroup\` puts the keys of one shortcut 2 px apart. A symbol can carry a spoken \`label\` ("Command" for ⌘). Input's \`shortcut\` and Tooltip's \`shortcut\` draw the same keys.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const text: CSSProperties = { fontFamily: 'var(--ds-font-sans)', fontSize: 14, lineHeight: '20px', letterSpacing: '-0.005em' };
const muted: CSSProperties = { ...text, color: 'var(--ds-muted-foreground)' };

// Lucide icons at 24 px, 1.25 px stroke (Figma "Icon swap").
const icon = (children: ReactNode, size = 12) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {children}
  </svg>
);
const icons = {
  enter: icon(<path d="M9 10 4 15l5 5M20 4v7a4 4 0 0 1-4 4H4" />),
  arrowUp: icon(<path d="m5 12 7-7 7 7M12 19V5" />),
  shuffle: icon(<path d="m18 14 4 4-4 4M18 2l4 4-4 4M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22M2 6h1.972a4 4 0 0 1 3.6 2.2M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45" />, 16),
  previous: icon(<path d="M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432zM3 20V4" />, 16),
  pause: icon(
    <>
      <rect x="14" y="3" width="5" height="18" rx="1" />
      <rect x="5" y="3" width="5" height="18" rx="1" />
    </>,
    16,
  ),
  next: icon(<path d="M21 4v16M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" />, 16),
  repeat: icon(<path d="m17 2 4 4-4 4M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4 4-4M21 13v1a4 4 0 0 1-4 4H3" />, 16),
};

type PlaygroundArgs = { variant: KbdVariant; size: KbdSize; keyText: string; icon: boolean };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { variant: 'default', size: 'default', keyText: '⌘', icon: false },
  argTypes: {
    variant: { name: 'Variant', control: 'inline-radio', options: ['default', 'inverted'] },
    size: { name: 'Size', control: 'inline-radio', options: ['default', 'sm'] },
    keyText: { name: 'Key' },
    icon: { name: 'Icon' },
  },
  render: ({ variant, size, keyText, icon: withIcon }) => (
    <div style={{ display: 'inline-flex', padding: 12, borderRadius: 8, background: variant === 'inverted' ? 'var(--ds-foreground)' : undefined }}>
      <Kbd variant={variant} size={size} icon={withIcon ? icons.enter : undefined}>
        {keyText}
      </Kbd>
    </div>
  ),
};

/** Figma Variant × Size; Inverted on the Tooltip's dark surface, where it is used. */
export const VariantsAndSizes: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <Kbd>⌘</Kbd>
        <Kbd size="sm">⌘</Kbd>
      </div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', padding: 8, borderRadius: 8, background: 'var(--ds-foreground)' }}>
        <Kbd variant="inverted">⌘</Kbd>
        <Kbd variant="inverted" size="sm">
          ⌘
        </Kbd>
      </div>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
      <Kbd icon={icons.enter} label="Enter" />
      <KbdGroup>
        <Kbd icon={icons.arrowUp} label="Shift" />
        <Kbd>Tab</Kbd>
      </KbdGroup>
    </div>
  ),
};

/** Figma demo "Kbd": a list of shortcuts; symbols carry spoken names. */
export const Shortcuts: StoryObj = {
  render: () => {
    const rows: [string, ReactNode][] = [
      ['Play or pause', <Kbd key="space">Space</Kbd>],
      [
        'Next track',
        <KbdGroup key="next">
          <Kbd label="Command">⌘</Kbd>
          <Kbd label="Right arrow">→</Kbd>
        </KbdGroup>,
      ],
      [
        'Previous track',
        <KbdGroup key="previous">
          <Kbd label="Command">⌘</Kbd>
          <Kbd label="Left arrow">←</Kbd>
        </KbdGroup>,
      ],
      ['Like the song', <Kbd key="like">L</Kbd>],
      [
        'Search',
        <KbdGroup key="search">
          <Kbd label="Command">⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>,
      ],
    ];
    return (
      <div style={{ display: 'grid', gap: 12, width: 320 }}>
        <span style={{ ...text, color: 'var(--ds-foreground)', fontWeight: 500 }}>Keyboard shortcuts</span>
        <dl style={{ display: 'grid', gap: 12, margin: 0 }}>
          {rows.map(([action, keys]) => (
            <div key={action} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <dt style={muted}>{action}</dt>
              <dd style={{ margin: 0, display: 'flex' }}>{keys}</dd>
            </div>
          ))}
        </dl>
      </div>
    );
  },
};

/** Figma demo "In an input": Input's `shortcut` draws a key and sets `aria-keyshortcuts`; a Kbd Group goes in `suffix`. */
export const InAnInput: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 16, width: 320 }}>
      <Input
        aria-label="Search"
        placeholder="Search songs, artists, podcasts"
        leadIcon={<RiSearchLine />}
        aria-keyshortcuts="Meta+K"
        suffix={
          <KbdGroup aria-hidden>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
        }
      />
      <Input aria-label="Message" placeholder="Write a message" shortcut="↵" />
    </div>
  ),
};

/** Figma demo "In a tooltip": Tooltip's `shortcut` draws Inverted sm keys. */
export const InATooltip: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingTop: 48 }}>
      <Button variant="ghost" icon={icons.shuffle} aria-label="Shuffle" />
      <Button variant="ghost" icon={icons.previous} aria-label="Previous" />
      <Tooltip content="Pause" shortcut={['Space']} open>
        <Button icon={icons.pause} aria-label="Pause" />
      </Tooltip>
      <Button variant="ghost" icon={icons.next} aria-label="Next" />
      <Button variant="ghost" icon={icons.repeat} aria-label="Repeat" />
    </div>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'flex', gap: 16, alignItems: 'center' }}>
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
          <Kbd size="sm">Esc</Kbd>
          <span style={{ display: 'inline-flex', gap: 2, padding: 6, borderRadius: 6, background: 'var(--ds-foreground)' }}>
            <Kbd variant="inverted" size="sm">
              Space
            </Kbd>
          </span>
        </div>
      ))}
    </div>
  ),
};
