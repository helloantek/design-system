import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type CSSProperties, type ReactNode } from 'react';
import { Button } from '../Button';
import { Toggle, type ToggleSize, type ToggleVariant } from './Toggle';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=126-1117';

const meta = {
  title: 'Components/Toggle',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Toggle** ([open in Figma](${FIGMA_URL})): a button that is on or off — \`variant\` (\`default\` · \`outline\`), \`size\` (\`sm\` · \`default\` · \`lg\`), Figma Pressed → \`pressed\` / \`defaultPressed\` / \`onPressedChange\`, \`leadingIcon\`, \`trailingIcon\`, and \`icon\` for a square icon-only toggle (Figma "Show Label" off; give it an \`aria-label\`). It is a \`<button aria-pressed>\`: Space and Enter flip it, and screen readers say "pressed" or "not pressed". Use Switch for a setting that takes effect at once, Toggle Group for a set of options.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const icon = (children: ReactNode) => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {children}
  </svg>
);
const icons = {
  monitor: icon(
    <>
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </>,
  ),
  phone: icon(
    <>
      <rect width="14" height="20" x="5" y="2" rx="2" />
      <path d="M12 18h.01" />
    </>,
  ),
  ban: icon(
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m4.9 4.9 14.2 14.2" />
    </>,
  ),
  loader: icon(<path d="M21 12a9 9 0 1 1-6.219-8.56" />),
  bookmark: icon(<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />),
  bold: icon(<path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" />),
};

const text: CSSProperties = { fontFamily: 'var(--ds-font-sans)', fontSize: 14, lineHeight: '20px', color: 'var(--ds-foreground)' };
const muted: CSSProperties = { ...text, color: 'var(--ds-muted-foreground)' };

type PlaygroundArgs = { variant: ToggleVariant; size: ToggleSize; label: string; showLabel: boolean; leadingIcon: boolean; disabled: boolean };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { variant: 'default', size: 'default', label: 'Toggle', showLabel: true, leadingIcon: false, disabled: false },
  argTypes: {
    variant: { name: 'Variant', control: 'inline-radio', options: ['default', 'outline'] },
    size: { name: 'Size', control: 'inline-radio', options: ['sm', 'default', 'lg'] },
    label: { name: 'Label' },
    showLabel: { name: 'Show Label' },
    leadingIcon: { name: 'Leading Icon' },
  },
  render: ({ variant, size, label, showLabel, leadingIcon, disabled }) =>
    showLabel ? (
      <Toggle variant={variant} size={size} disabled={disabled} leadingIcon={leadingIcon ? icons.bookmark : undefined}>
        {label}
      </Toggle>
    ) : (
      <Toggle variant={variant} size={size} disabled={disabled} icon={icons.bookmark} aria-label={label || 'Toggle'} />
    ),
};

/** Figma Variant × Pressed, and Disabled. */
export const States: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, max-content)', gap: 12, alignItems: 'center' }}>
      {(['default', 'outline'] as const).map((variant) => (
        <div key={variant} style={{ display: 'contents' }}>
          <Toggle variant={variant}>Off</Toggle>
          <Toggle variant={variant} defaultPressed>
            On
          </Toggle>
          <Toggle variant={variant} disabled>
            Disabled
          </Toggle>
        </div>
      ))}
    </div>
  ),
};

/** Figma demo "Toggle": a store preview with a view switch (icon only) and preview states with icons. */
export const ProductPage: StoryObj = {
  render: function Render() {
    const [view, setView] = useState<'desktop' | 'mobile'>('desktop');
    const [soldOut, setSoldOut] = useState(false);
    const [loading, setLoading] = useState(false);
    return (
      <div style={{ display: 'grid', gap: 16, width: 'min(420px, 100%)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
          <div>
            <div style={{ ...text, fontWeight: 500 }}>Product page</div>
            <div style={muted}>Store preview · Autumn collection</div>
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            <Toggle icon={icons.monitor} aria-label="Desktop preview" pressed={view === 'desktop'} onPressedChange={() => setView('desktop')} />
            <Toggle icon={icons.phone} aria-label="Mobile preview" pressed={view === 'mobile'} onPressedChange={() => setView('mobile')} />
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <Toggle leadingIcon={icons.ban} pressed={soldOut} onPressedChange={setSoldOut}>
            Sold out
          </Toggle>
          <Toggle leadingIcon={icons.loader} pressed={loading} onPressedChange={setLoading}>
            Loading
          </Toggle>
        </div>
        <div style={{ display: 'grid', placeItems: 'center', gap: 8, padding: 24, borderRadius: 12, background: 'var(--ds-muted)', width: view === 'mobile' ? 220 : 'auto', justifySelf: 'center' }}>
          <Button disabled={soldOut || loading}>{loading ? 'Adding…' : soldOut ? 'Sold out' : 'Add to cart'}</Button>
          <span style={muted}>Buy button · {soldOut ? 'Sold out' : 'In stock'}</span>
        </div>
      </div>
    );
  },
};

const tags = ['Art', 'Work', 'Drawings', 'Shopping', 'Tech', 'Creative Writing'];
const clusters = ['Eyeshadow', 'Soft Life', 'WorkMade', 'Spectrum', 'Connecting', 'Motion'];

/** Figma demo "Variants": tag filters as Default toggles and clusters as Outline toggles. */
export const Variants: StoryObj = {
  render: function Render() {
    const [on, setOn] = useState(new Set(['Art', 'Drawings', 'Shopping', 'Soft Life', 'WorkMade']));
    const flip = (tag: string) => setOn((s) => new Set(s.has(tag) ? [...s].filter((t) => t !== tag) : [...s, tag]));
    const row = (title: string, list: string[], variant: ToggleVariant) => (
      <div style={{ display: 'grid', gap: 8 }}>
        <span style={muted}>{title}</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {list.map((t) => (
            <Toggle key={t} variant={variant} pressed={on.has(t)} onPressedChange={() => flip(t)}>
              {t}
            </Toggle>
          ))}
        </div>
      </div>
    );
    return (
      <div style={{ display: 'grid', gap: 20, maxWidth: 480 }}>
        {row('Filter by Tags', tags, 'default')}
        {row('Clusters', clusters, 'outline')}
      </div>
    );
  },
};

/** Figma demo "Sizes": sm, default and lg, icon only and with a label. */
export const Sizes: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 12 }}>
      {([
        ['sm', 'Small'],
        ['default', 'Default'],
        ['lg', 'Large'],
      ] as const).map(([size, label]) => (
        <div key={size} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Toggle variant="outline" size={size} icon={icons.bold} aria-label={`Bold, ${label.toLowerCase()}`} />
          <Toggle variant="outline" size={size}>
            {label}
          </Toggle>
        </div>
      ))}
    </div>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Toggle>Off</Toggle>
          <Toggle defaultPressed>On</Toggle>
          <Toggle variant="outline">Off</Toggle>
          <Toggle variant="outline" defaultPressed>
            On
          </Toggle>
          <Toggle icon={icons.bold} aria-label="Bold" defaultPressed />
        </div>
      ))}
    </div>
  ),
};
