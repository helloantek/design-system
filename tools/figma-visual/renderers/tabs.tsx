import { Tabs, TabsList, TabsTrigger, type TabsVariant } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Lucide "square-dashed", the icon Figma's triggers show.
const icon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 3a2 2 0 0 0-2 2M19 3a2 2 0 0 1 2 2M21 19a2 2 0 0 1-2 2M5 21a2 2 0 0 1-2-2M9 3h1M9 21h1M14 3h1M14 21h1M3 9v1M21 9v1M3 14v1M21 14v1" />
  </svg>
);

const variantOf = (v: string): { variant: TabsVariant; vertical: boolean } => ({
  variant: v === 'Secondary' ? 'secondary' : v.startsWith('Line') ? 'line' : 'default',
  vertical: v === 'Line Vertical',
});

// Maps Sort UI 2.0 Tabs Trigger properties to one trigger with Figma's sample content (icon, "Label", count "12";
// Eyebrow adds "Eyebrow", Icon top swaps the count for "Description"). State=Active selects it; Focus leaves nothing
// selected so Tab lands on it (check.mjs presses Tab); Hover comes from real input. The list around it is stripped of
// its track and padding, since Figma draws the trigger alone.
export const renderTabsTrigger: Renderer = (p) => {
  const { variant, vertical } = variantOf(String(p.Variant));
  return (
    <div id="target" style={{ width: 'fit-content', padding: 8 }}>
      <Tabs value={p.State === 'Active' ? 'a' : ''} variant={variant} size={p.Size === 'lg' ? 'lg' : 'default'} orientation={vertical ? 'vertical' : 'horizontal'}>
        <TabsList aria-label="Sample" style={{ padding: 0, background: 'none' }}>
          {p.Layout === 'Icon top' ? (
            <TabsTrigger value="a" icon={icon} description="Description" disabled={p.State === 'Disabled'}>
              Label
            </TabsTrigger>
          ) : (
            <TabsTrigger value="a" icon={icon} count="12" eyebrow={p.Layout === 'Eyebrow' ? 'Eyebrow' : undefined} disabled={p.State === 'Disabled'}>
              Label
            </TabsTrigger>
          )}
        </TabsList>
      </Tabs>
    </div>
  );
};

// Maps Sort UI 2.0 Tabs List properties to Figma's sample: four triggers labelled "Label" (no icon or count), the
// first active. Vertical lists are 125 px wide, as in Figma.
export const renderTabsList: Renderer = (p) => {
  const { variant } = variantOf(String(p.Variant));
  const vertical = p.Orientation === 'Vertical';
  return (
    <div id="target" style={{ width: 'fit-content', padding: 8 }}>
      <Tabs defaultValue="a" variant={variant} size={p.Size === 'lg' ? 'lg' : 'default'} orientation={vertical ? 'vertical' : 'horizontal'}>
        <TabsList aria-label="Sample" style={vertical ? { width: 125 } : undefined}>
          {['a', 'b', 'c', 'd'].map((v) => (
            <TabsTrigger key={v} value={v}>
              Label
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};
