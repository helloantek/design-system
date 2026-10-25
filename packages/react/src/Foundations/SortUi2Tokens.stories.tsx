import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties, ReactNode } from 'react';
import tokens from '@helloantek/ds-tokens/js/theme-1';

// Sort UI 2.0 tokens (Figma 4JnqgEbdlnKgiFrfmiwEZw). Their names have no "/" (1.3 names do), which is how they are told apart.
const isV2 = (name: string) => !name.includes('/');
const cssName = (name: string) => `--ds-${name}`;
const colors = Object.keys(tokens.color.light).filter(isV2);
const groups: [string, (n: string) => boolean][] = [
  ['Surfaces and text', (n) => !/^(alpha|palette|chart|syntax|sidebar)-/.test(n)],
  ['Palette', (n) => n.startsWith('palette-')],
  ['Alpha', (n) => n.startsWith('alpha-')],
  ['Chart', (n) => n.startsWith('chart-')],
  ['Sidebar', (n) => n.startsWith('sidebar')],
  ['Syntax', (n) => n.startsWith('syntax-')],
];
const dims = Object.entries(tokens.dimension).filter(([n]) => isV2(n));

const meta = {
  title: 'Foundations/Sort UI 2.0',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Tokens of Sort UI 2.0, generated from the Figma file into `@helloantek/ds-tokens` next to the 1.3 tokens while components migrate. Names follow Figma’s code syntax with the `--ds-` prefix: `var(--muted-foreground)` → `--ds-muted-foreground`, `calc(var(--spacing) * 2)` → `--ds-spacing-2`.',
      },
    },
  },
} satisfies Meta;

export default meta;

const label: CSSProperties = { fontFamily: 'var(--ds-font-sans)', fontSize: 12, lineHeight: '16px', color: 'var(--ds-muted-foreground)' };
const section = (title: string, children: ReactNode) => (
  <section style={{ display: 'grid', gap: 12 }}>
    <h2 style={{ margin: 0, fontFamily: 'var(--ds-font-sans)', fontSize: 'var(--ds-text-base)', lineHeight: 'var(--ds-text-base--line-height)', fontWeight: 'var(--ds-font-weight-medium)' as never, color: 'var(--ds-foreground)' }}>{title}</h2>
    {children}
  </section>
);

function Swatches({ names }: { names: string[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
      {names.map((n) => (
        <div key={n} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: 8, alignItems: 'center' }}>
          <span style={{ width: 32, height: 32, borderRadius: 'var(--ds-radius-sm)', background: `var(${cssName(n)})`, boxShadow: 'inset 0 0 0 1px var(--ds-border)' }} />
          <span style={label}>{n}</span>
        </div>
      ))}
    </div>
  );
}

/** Every colour in Light and Dark. */
export const Colors: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'grid', gap: 32, alignContent: 'start' }}>
          <div style={label}>{scheme === 'light' ? 'Light' : 'Dark'}</div>
          {groups.map(([title, test]) => section(title, <Swatches names={colors.filter(test)} />))}
        </div>
      ))}
    </div>
  ),
};

/** Text sizes with their line heights, and weights. */
export const Typography: StoryObj = {
  render: () => (
    <div style={{ padding: 24, display: 'grid', gap: 16, background: 'var(--ds-background)', color: 'var(--ds-foreground)', fontFamily: 'var(--ds-font-sans)' }}>
      {dims
        .filter(([n]) => /^text-[\w]+$/.test(n))
        .sort((a, b) => a[1] - b[1])
        .map(([n, v]) => (
          <div key={n} style={{ display: 'grid', gridTemplateColumns: '220px 1fr', alignItems: 'baseline', gap: 16 }}>
            <span style={label}>
              {n} · {v}/{tokens.dimension[`${n}--line-height`]}
            </span>
            <span style={{ fontSize: `var(${cssName(n)})`, lineHeight: `var(${cssName(n)}--line-height)` }}>The quick brown fox</span>
          </div>
        ))}
      <div style={{ display: 'flex', gap: 24 }}>
        {Object.entries(tokens.fontWeight)
          .filter(([n]) => n.startsWith('font-weight-'))
          .map(([n, w]) => (
            <span key={n} style={{ fontWeight: w }}>
              {n.replace('font-weight-', '')} {w}
            </span>
          ))}
      </div>
    </div>
  ),
};

/** Radius, spacing and shadows (effect styles). */
export const Shapes: StoryObj = {
  render: () => {
    const box: CSSProperties = { width: 64, height: 64, background: 'var(--ds-card)', boxShadow: 'inset 0 0 0 1px var(--ds-border)' };
    const shadows = Object.keys(tokens.effect).filter((n) => /^(shadow|controls|surface)-/.test(n));
    return (
      <div style={{ padding: 24, display: 'grid', gap: 32, background: 'var(--ds-background)' }}>
        {section(
          'Radius',
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            {dims
              .filter(([n]) => n.startsWith('radius-'))
              .sort((a, b) => a[1] - b[1])
              .map(([n, v]) => (
                <div key={n} style={{ display: 'grid', gap: 6, justifyItems: 'center' }}>
                  <span style={{ ...box, borderRadius: `var(${cssName(n)})` }} />
                  <span style={label}>
                    {n.replace('radius-', '')} · {v}
                  </span>
                </div>
              ))}
          </div>,
        )}
        {section(
          'Spacing',
          <div style={{ display: 'grid', gap: 4 }}>
            {dims
              .filter(([n]) => /^spacing-/.test(n))
              .map(([n, v]) => (
                <div key={n} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', alignItems: 'center', gap: 8 }}>
                  <span style={label}>
                    {n} · {v}
                  </span>
                  <span style={{ width: `var(${cssName(n)})`, height: 8, background: 'var(--ds-palette-blue-solid)', borderRadius: 2 }} />
                </div>
              ))}
          </div>,
        )}
        {section(
          'Shadows',
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
            {shadows.map((n) => (
              <div key={n} style={{ display: 'grid', gap: 8, justifyItems: 'center' }}>
                <span style={{ width: 96, height: 64, borderRadius: 'var(--ds-radius-lg)', background: 'var(--ds-card)', boxShadow: `var(${cssName(n)})` }} />
                <span style={label}>{n}</span>
              </div>
            ))}
          </div>,
        )}
      </div>
    );
  },
};
