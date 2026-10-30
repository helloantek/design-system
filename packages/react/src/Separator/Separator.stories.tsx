import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties, ReactNode } from 'react';
import { Button } from '../Button';
import { Separator, type SeparatorOrientation } from './Separator';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=236-2';

const meta = {
  title: 'Components/Separator',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Separator** ([open in Figma](${FIGMA_URL})): \`orientation\` (\`horizontal\` · \`vertical\`). A 1 px \`border\` line between groups of content. It is decorative by default (hidden from screen readers); \`decorative={false}\` gives it \`role="separator"\`. A vertical separator takes the height of its row; set \`height\` for a shorter line.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const text: CSSProperties = { fontFamily: 'var(--ds-font-sans)', fontSize: 14, lineHeight: '20px', letterSpacing: '-0.005em' };
const muted: CSSProperties = { ...text, color: 'var(--ds-muted-foreground)' };
const strong: CSSProperties = { ...text, color: 'var(--ds-foreground)' };

// Icons of the Figma "Vertical" demo (Lucide, 16 px with a 1.25 px stroke).
const icon = (children: ReactNode) => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.875} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {children}
  </svg>
);
const icons = {
  heart: icon(<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />),
  message: icon(<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />),
  bookmark: icon(<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />),
  share: icon(
    <>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98" />
    </>,
  ),
};

type PlaygroundArgs = { orientation: SeparatorOrientation; decorative: boolean };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { orientation: 'horizontal', decorative: true },
  argTypes: {
    orientation: { name: 'Orientation', control: 'inline-radio', options: ['horizontal', 'vertical'] },
    decorative: { name: 'Decorative', description: 'Hidden from screen readers; off gives role="separator"' },
  },
  render: ({ orientation, decorative }) =>
    orientation === 'vertical' ? (
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, height: 40, ...muted }}>
        <span>Left</span>
        <Separator orientation="vertical" decorative={decorative} />
        <span>Right</span>
      </div>
    ) : (
      <div style={{ display: 'grid', gap: 16, width: 448, ...muted }}>
        <span>Above</span>
        <Separator decorative={decorative} />
        <span>Below</span>
      </div>
    ),
};

/** Figma Orientation: Horizontal (448 px) and Vertical (40 px), as in the component set. */
export const Orientations: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
      <Separator style={{ width: 448 }} />
      <Separator orientation="vertical" style={{ height: 40 }} />
    </div>
  ),
};

/** Figma demo "Separator": a horizontal line under the intro, vertical ones between the stats. */
export const Profile: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 16, width: 320 }}>
      <div style={{ display: 'grid', gap: 4 }}>
        <span style={{ ...strong, fontWeight: 500 }}>Maya Chen</span>
        <span style={muted}>Travel photographer based in Lisbon.</span>
      </div>
      <Separator />
      <div style={{ display: 'flex', gap: 16, ...strong }}>
        <span>248 posts</span>
        <Separator orientation="vertical" />
        <span>12.4k followers</span>
        <Separator orientation="vertical" />
        <span>186 following</span>
      </div>
    </div>
  ),
};

/** Figma demo "Vertical": between metadata (the row's height) and between icon buttons (16 px). */
export const Vertical: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 16, justifyItems: 'center' }}>
      <div style={{ display: 'flex', gap: 12, ...muted }}>
        <span>Sep 25, 2026</span>
        <Separator orientation="vertical" />
        <span>8 min read</span>
        <Separator orientation="vertical" />
        <span>Travel</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Button variant="ghost" icon={icons.heart} aria-label="Like" />
        <Button variant="ghost" icon={icons.message} aria-label="Comment" />
        <Separator orientation="vertical" style={{ height: 16 }} />
        <Button variant="ghost" icon={icons.bookmark} aria-label="Save" />
        <Button variant="ghost" icon={icons.share} aria-label="Share" />
      </div>
    </div>
  ),
};

/** Figma demo "In a list": lines between the rows of a receipt. */
export const InAList: StoryObj = {
  render: () => {
    const rows = [
      ['Margherita pizza × 2', '$24.00'],
      ['Caesar salad', '$9.50'],
      ['Delivery', '$2.99'],
    ];
    return (
      <div style={{ display: 'grid', gap: 12, width: 320 }}>
        {rows.map(([item, price]) => (
          <div key={item} style={{ display: 'contents' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={muted}>{item}</span>
              <span style={strong}>{price}</span>
            </div>
            <Separator />
          </div>
        ))}
        <div style={{ display: 'flex', justifyContent: 'space-between', ...strong, fontWeight: 600 }}>
          <span>Total</span>
          <span>$36.49</span>
        </div>
      </div>
    );
  },
};

/** Sections a screen reader should hear as separate: `decorative={false}` gives `role="separator"`. */
export const Semantic: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 16, width: 320, ...muted }}>
      <p style={{ margin: 0 }}>Shipping address: Rua Augusta 12, Lisbon.</p>
      <Separator decorative={false} />
      <p style={{ margin: 0 }}>Billing address: same as shipping.</p>
    </div>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'grid', gap: 16, alignContent: 'start' }}>
          <span style={strong}>Maya Chen</span>
          <Separator />
          <div style={{ display: 'flex', gap: 16, ...strong }}>
            <span>248 posts</span>
            <Separator orientation="vertical" />
            <span>12.4k followers</span>
          </div>
        </div>
      ))}
    </div>
  ),
};
