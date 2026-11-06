import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type CSSProperties } from 'react';
import { Card, CardContent, CardHeader } from '../Card';
import { Item, ItemGroup } from '../Item';
import { Separator } from '../Separator';
import { Slider } from '../Slider';
import { Switch } from '../Switch';
import { UsageBar, UsageBarLegend, UsageBarLegendItem, UsageBarSegment, UsageBarTick, type UsageBarVariant } from './UsageBar';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=1741-1112';

const meta = {
  title: 'Components/Usage Bar',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Usage Bar**, **Usage Bar Segment**, **Usage Bar Legend Item** and **Usage Bar Tick** ([open in Figma](${FIGMA_URL})): how a whole splits into parts. \`UsageBar\` holds \`UsageBarSegment\`s, which share the bar in proportion to their \`value\`; \`axis\` adds evenly spread tick values under it. A segment takes a \`variant\` (\`default\` · \`muted\` · \`primary\` · \`dashed\` · \`striped\`), a \`color\` for Default (the chart colours), \`active\` (Figma State=Active, also on hover and focus of a focusable segment), a \`label\` read by screen readers and an optional \`tooltip\`. \`UsageBarLegend\` lists \`UsageBarLegendItem\`s with the same variants and colours, in a row or in \`columns\`, with an optional \`value\`. Name the bar with \`aria-label\`.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const text: CSSProperties = { fontFamily: 'var(--ds-font-sans)', fontSize: 14, lineHeight: '20px', letterSpacing: '-0.005em', margin: 0 };
const muted: CSSProperties = { ...text, color: 'var(--ds-muted-foreground)' };
const title: CSSProperties = { ...text, color: 'var(--ds-foreground)', fontWeight: 500 };
const header: CSSProperties = { display: 'flex', justifyContent: 'space-between', gap: 12 };
const chart = (n: number) => `var(--ds-chart-${n})`;

type PlaygroundArgs = { used: number; variant: UsageBarVariant; active: boolean; axis: boolean; legend: boolean };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { used: 72, variant: 'primary', active: false, axis: true, legend: true },
  argTypes: {
    used: { name: 'Used (GB)', control: { type: 'range', min: 0, max: 100 } },
    variant: { name: 'Variant (free part)', control: 'inline-radio', options: ['default', 'muted', 'primary', 'dashed', 'striped'] },
    active: { name: 'State=Active (used part)', control: 'boolean' },
    axis: { name: 'Axis', control: 'boolean' },
    legend: { name: 'Legend', control: 'boolean' },
  },
  render: ({ used, variant, active, axis, legend }) => (
    <div style={{ display: 'grid', gap: 12, width: 'min(480px, calc(100vw - 32px))' }}>
      <UsageBar aria-label="Disk" axis={axis ? ['0', '25', '50', '75', '100 GB'] : undefined}>
        <UsageBarSegment value={used} active={active} label={`Used, ${used} GB`} />
        <UsageBarSegment value={100 - used} variant={variant} label={`Free, ${100 - used} GB`} />
      </UsageBar>
      {legend && (
        <UsageBarLegend>
          <UsageBarLegendItem>Used</UsageBarLegendItem>
          <UsageBarLegendItem variant={variant}>Free</UsageBarLegendItem>
        </UsageBarLegend>
      )}
    </div>
  ),
};

const budget = [
  { name: 'Rent', value: 1200, color: chart(4) },
  { name: 'Groceries', value: 520, color: chart(1) },
  { name: 'Eating out', value: 360, color: chart(5) },
  { name: 'Transport', value: 260, color: chart(3) },
  { name: 'Subscriptions', value: 140, color: chart(7) },
];
const usd = (n: number) => `$${n.toLocaleString('en-US')}`;

/** Figma demo "Usage Bar": a month's budget in the chart colours, the rest muted, with the amounts in a two-column legend. */
export const Demo: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 16, width: 'min(448px, calc(100vw - 32px))' }}>
      <div style={{ display: 'grid', gap: 4 }}>
        <p id="budget-label" style={muted}>
          Spent in October
        </p>
        <p style={{ ...text, display: 'flex', alignItems: 'baseline', gap: 6 }}>
          <span style={{ fontSize: 24, lineHeight: '32px', fontWeight: 600, color: 'var(--ds-foreground)' }}>$2,480</span>
          <span style={{ ...muted, fontSize: 16, lineHeight: '24px' }}>of $3,200</span>
        </p>
      </div>
      <UsageBar aria-labelledby="budget-label">
        {budget.map((b) => (
          <UsageBarSegment key={b.name} value={b.value} color={b.color} label={`${b.name}, ${usd(b.value)}`} />
        ))}
        <UsageBarSegment value={720} variant="muted" label="Left, $720" />
      </UsageBar>
      <UsageBarLegend columns={2} aria-label="Spending">
        {budget.map((b) => (
          <UsageBarLegendItem key={b.name} color={b.color} value={usd(b.value)}>
            {b.name}
          </UsageBarLegendItem>
        ))}
        <UsageBarLegendItem variant="muted" value="$720">
          Left
        </UsageBarLegendItem>
      </UsageBarLegend>
    </div>
  ),
};

const apps = [
  { name: 'Streaming', description: 'Video and music, mostly on the go', gb: 6.2 },
  { name: 'Social', description: 'Feeds, stories and short video', gb: 3.8 },
  { name: 'App updates', description: 'Downloaded over cellular', gb: 2.4 },
  { name: 'Maps', description: 'Navigation and offline areas', gb: 1.1 },
  { name: 'Messaging', description: 'Photos and voice notes', gb: 0.9 },
];

/** Figma demo "With a list": a data plan whose segments match the rows under it; hovering a row highlights its segment and back. */
export const WithAList: StoryObj = {
  render: function Render() {
    const [hovered, setHovered] = useState<string | null>('Social');
    return (
      <div style={{ display: 'grid', gap: 12, width: 'min(448px, calc(100vw - 32px))', padding: '20px 10px 10px', boxSizing: 'border-box', background: 'var(--ds-card)', border: '1px solid var(--ds-border)', borderRadius: 14 }}>
        <div style={{ display: 'grid', gap: 12, padding: '0 12px' }}>
          <div style={header}>
            <UsageBarLegend>
              <UsageBarLegendItem>Used</UsageBarLegendItem>
              <UsageBarLegendItem variant="primary">Left</UsageBarLegendItem>
            </UsageBarLegend>
            <span style={{ ...text, color: 'var(--ds-foreground)' }}>5.6 GB left of 20 GB</span>
          </div>
          <UsageBar aria-label="Data plan">
            {apps.map((a) => (
              <UsageBarSegment
                key={a.name}
                value={a.gb}
                active={hovered === a.name}
                label={`${a.name}, ${a.gb} GB`}
                tabIndex={0}
                onPointerEnter={() => setHovered(a.name)}
                onPointerLeave={() => setHovered(null)}
                onFocus={() => setHovered(a.name)}
                onBlur={() => setHovered(null)}
              />
            ))}
            <UsageBarSegment value={5.6} variant="primary" label="Left, 5.6 GB" />
          </UsageBar>
        </div>
        <ItemGroup aria-label="Data by app" style={{ gap: 0 }}>
          {apps.map((a) => (
            <Item
              key={a.name}
              size="xs"
              variant={hovered === a.name ? 'muted' : 'default'}
              title={a.name}
              description={a.description}
              actions={<span style={muted}>{a.gb} GB</span>}
              onPointerEnter={() => setHovered(a.name)}
              onPointerLeave={() => setHovered(null)}
            />
          ))}
        </ItemGroup>
      </div>
    );
  },
};

const storage = [
  { name: 'Tables', gb: 18, variant: 'default' },
  { name: 'Indexes', gb: 7, variant: 'default' },
  { name: 'Logs', gb: 9, variant: 'muted' },
  { name: 'Free', gb: 11, variant: 'primary' },
  { name: 'Restore point', gb: 5, variant: 'dashed' },
] as const;

/** Figma demo "Variants and an axis": every variant on one bar over a 0–50 GB axis; hovering or focusing a segment names it. */
export const VariantsAndAnAxis: StoryObj = {
  render: function Render() {
    const [hovered, setHovered] = useState<(typeof storage)[number] | null>(null);
    return (
      <div style={{ display: 'grid', gap: 12, width: 'min(512px, calc(100vw - 32px))' }}>
        <div style={header}>
          <span id="storage-label" style={title}>
            Database storage
          </span>
          <span style={muted} aria-live="polite">
            {hovered ? `${hovered.name} · ${hovered.gb} GB` : 'Hover a segment'}
          </span>
        </div>
        <UsageBar aria-labelledby="storage-label" axis={['0 GB', '10 GB', '20 GB', '30 GB', '40 GB', '50 GB']}>
          {storage.map((s) => (
            <UsageBarSegment
              key={s.name}
              value={s.gb}
              variant={s.variant}
              label={`${s.name}, ${s.gb} GB`}
              tabIndex={0}
              onPointerEnter={() => setHovered(s)}
              onPointerLeave={() => setHovered(null)}
              onFocus={() => setHovered(s)}
              onBlur={() => setHovered(null)}
            />
          ))}
        </UsageBar>
        <UsageBarLegend>
          <UsageBarLegendItem>Data</UsageBarLegendItem>
          <UsageBarLegendItem variant="muted">Can be pruned</UsageBarLegendItem>
          <UsageBarLegendItem variant="primary">Free</UsageBarLegendItem>
          <UsageBarLegendItem variant="dashed">Reserved</UsageBarLegendItem>
        </UsageBarLegend>
      </div>
    );
  },
};

/** Figma demo "Striped": a backup with the part still uploading striped. */
export const Striped: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 12, width: 'min(448px, calc(100vw - 32px))' }}>
      <div style={header}>
        <span id="backup-label" style={title}>
          Photo backup
        </span>
        <span style={muted}>46 GB uploading · about 2 h left</span>
      </div>
      <UsageBar aria-labelledby="backup-label">
        <UsageBarSegment value={210} label="Backed up, 210 GB" />
        <UsageBarSegment value={46} variant="striped" label="Uploading, 46 GB" />
        <UsageBarSegment value={80} variant="muted" label="In queue, 80 GB" />
        <UsageBarSegment value={164} variant="primary" label="Free, 164 GB" />
      </UsageBar>
      <UsageBarLegend>
        <UsageBarLegendItem>Backed up</UsageBarLegendItem>
        <UsageBarLegendItem variant="striped">Uploading</UsageBarLegendItem>
        <UsageBarLegendItem variant="muted">In queue</UsageBarLegendItem>
        <UsageBarLegendItem variant="primary">Free</UsageBarLegendItem>
      </UsageBarLegend>
    </div>
  ),
};

const phone = [
  { name: 'Photos', gb: 42, color: chart(2) },
  { name: 'Apps', gb: 31, color: chart(1) },
  { name: 'Messages', gb: 12, color: chart(3) },
  { name: 'System', gb: 18, color: undefined },
];

/** Figma demo "With tooltips": hover or Tab to a segment to see what it holds (Photos starts open, as in Figma). */
export const WithTooltips: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 12, width: 'min(448px, calc(100vw - 32px))', paddingTop: 40 }}>
      <UsageBar aria-labelledby="phone-label">
        {phone.map((p, i) => (
          <UsageBarSegment key={p.name} value={p.gb} color={p.color} label={`${p.name}, ${p.gb} GB`} tooltip={`${p.name} · ${p.gb} GB`} tooltipProps={i === 0 ? { defaultOpen: true, delay: 200 } : { delay: 200 }} />
        ))}
        <UsageBarSegment value={25} variant="muted" label="Free, 25 GB" tooltip="Free · 25 GB" tooltipProps={{ delay: 200 }} />
      </UsageBar>
      <div style={header}>
        <span id="phone-label" style={title}>
          Phone storage
        </span>
        <span style={muted}>103 of 128 GB used</span>
      </div>
    </div>
  ),
};

const stages = { Light: chart(8), Deep: chart(2), REM: chart(4), Awake: chart(7) } as const;
type Stage = keyof typeof stages;
// The night as Figma draws it: each stage's share of the bar.
const night: [Stage, number][] = [
  ['Light', 8.8],
  ['Deep', 28.8],
  ['Light', 19.2],
  ['REM', 9.6],
  ['Awake', 2.7],
  ['Light', 24.7],
  ['Deep', 32.9],
  ['Light', 15.1],
  ['REM', 17.8],
  ['Light', 23.3],
  ['Deep', 19.2],
  ['Awake', 2.9],
  ['Light', 14.7],
  ['REM', 21.9],
  ['Light', 16.4],
  ['Deep', 11],
  ['REM', 26],
  ['Awake', 3.4],
  ['Light', 17.1],
];
const strong: CSSProperties = { fontWeight: 500, color: 'var(--ds-card-foreground)' };

/** Figma demo "Sleep": a night's sleep stages as many segments over a time axis, in a card with a switch and a slider. */
export const Sleep: StoryObj = {
  render: function Render() {
    const [wake, setWake] = useState(30);
    return (
      <Card style={{ width: 'min(384px, calc(100vw - 32px))' }}>
        <CardHeader
          title="Sleep"
          description="Last night, 11:12 PM to 7:08 AM"
          action={
            <span style={{ ...text, display: 'flex', alignItems: 'baseline', gap: 2, color: 'var(--ds-muted-foreground)' }}>
              <span style={{ ...strong, fontSize: 24, lineHeight: '28px' }}>7</span>h<span style={{ ...strong, fontSize: 24, lineHeight: '28px' }}>41</span>m
            </span>
          }
        />
        <CardContent style={{ display: 'grid', gap: 16 }}>
          <UsageBar aria-label="Sleep stages, 11:12 PM to 7:08 AM" axis={['11 PM', '1 AM', '3 AM', '5 AM', '7 AM']}>
            {night.map(([stage, share], i) => (
              <UsageBarSegment key={i} value={share} color={stages[stage]} />
            ))}
          </UsageBar>
          <UsageBarLegend columns={2} style={{ columnGap: 24 }} aria-label="Time in each stage">
            <UsageBarLegendItem color={stages.Deep} value={<span style={strong}>2h 14m</span>}>
              Deep
            </UsageBarLegendItem>
            <UsageBarLegendItem color={stages.REM} value={<span style={strong}>1h 50m</span>}>
              REM
            </UsageBarLegendItem>
            <UsageBarLegendItem color={stages.Light} value={<span style={strong}>3h 37m</span>}>
              Light
            </UsageBarLegendItem>
            <UsageBarLegendItem color={stages.Awake} value={<span style={strong}>15m</span>}>
              Awake
            </UsageBarLegendItem>
          </UsageBarLegend>
          <Separator />
          <Switch label="Smart alarm" caption="Wakes you in a light stage before 7:30 AM" />
          <Slider variant="scrubber" label="Wake window" valueText={`${wake} min`} value={wake} onValueChange={setWake} min={10} max={50} step={5} getAriaValueText={(v) => `${v} minutes`} />
        </CardContent>
      </Card>
    );
  },
};

/** Every part as in the Figma component sets: segments in each variant and state, legend items and ticks. */
export const Parts: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 24 }}>
      {([false, true] as const).map((active) => (
        <div key={String(active)} style={{ display: 'flex', gap: 16 }} role="group" aria-label={active ? 'Active segments' : 'Segments'}>
          {(['default', 'muted', 'primary', 'dashed', 'striped'] as const).map((variant) => (
            <div key={variant} style={{ display: 'flex', width: 80, height: 28 }}>
              <UsageBarSegment value={1} variant={variant} active={active} label={`${variant}${active ? ', active' : ''}`} />
            </div>
          ))}
        </div>
      ))}
      <UsageBarLegend aria-label="Legend items">
        {(['default', 'muted', 'primary', 'dashed', 'striped'] as const).map((variant) => (
          <UsageBarLegendItem key={variant} variant={variant}>
            {variant[0].toUpperCase() + variant.slice(1)}
          </UsageBarLegendItem>
        ))}
      </UsageBarLegend>
      <div style={{ display: 'flex', gap: 48, paddingInline: 24 }} aria-label="Ticks" role="group">
        <UsageBarTick align="start">0</UsageBarTick>
        <UsageBarTick>50</UsageBarTick>
        <UsageBarTick align="end">100</UsageBarTick>
      </div>
    </div>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'grid', gap: 12 }}>
          <UsageBar aria-label={`Database storage (${scheme})`} axis={['0 GB', '25 GB', '50 GB']}>
            {storage.map((s) => (
              <UsageBarSegment key={s.name} value={s.gb} variant={s.variant} label={`${s.name}, ${s.gb} GB`} />
            ))}
            <UsageBarSegment value={6} variant="striped" label="Uploading, 6 GB" />
          </UsageBar>
          <UsageBarLegend aria-label={`Legend (${scheme})`}>
            <UsageBarLegendItem>Data</UsageBarLegendItem>
            <UsageBarLegendItem variant="muted">Can be pruned</UsageBarLegendItem>
            <UsageBarLegendItem variant="primary">Free</UsageBarLegendItem>
            <UsageBarLegendItem variant="dashed">Reserved</UsageBarLegendItem>
            <UsageBarLegendItem variant="striped">Uploading</UsageBarLegendItem>
          </UsageBarLegend>
        </div>
      ))}
    </div>
  ),
};
