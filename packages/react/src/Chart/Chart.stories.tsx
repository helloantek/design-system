import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties, ReactNode } from 'react';
import { RiDownloadLine, RiFilter3Line, RiMore2Line } from '@remixicon/react';
import { Button } from '../Button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../Tabs';
import { AreaChart, BarChart, ChartLegend, ChartSwatch, ChartTooltip, LineChart, PieChart, RadialChart, type ChartRow, type ChartSwatchVariant } from './Chart';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=3143-14350';

const meta = {
  title: 'Components/Chart',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Chart** page ([open in Figma](${FIGMA_URL})): \`BarChart\` (vertical or horizontal, default or capped, grouped or \`stacked\`, value \`labels\`), \`LineChart\` (\`monotone\`, \`linear\` or \`step\`, \`dots\`), \`AreaChart\`, \`PieChart\` (pie or donut) and \`RadialChart\` (rings, half ring, progress), built from **Chart Grid**, **Chart Axis**, **Chart Bar**, **Chart Reference Line**, **Chart Tooltip** and **Swatch**. Cartesian charts take \`data\` rows, the \`index\` field and \`series\` ({ key, label, color }); hovering, or focusing the plot and using the arrow keys, shows the values in a tooltip, and every chart carries its data as a table for screen readers. \`ChartLegend\` and \`ChartTooltip\` also work on their own.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const text: CSSProperties = { fontFamily: 'var(--ds-font-sans)', letterSpacing: '-0.005em', margin: 0 };
const title: CSSProperties = { ...text, fontSize: 16, lineHeight: '24px', fontWeight: 500, color: 'var(--ds-card-foreground)' };
const description: CSSProperties = { ...text, fontSize: 14, lineHeight: '20px', color: 'var(--ds-muted-foreground)' };
const frame: CSSProperties = { display: 'grid', gap: 32, width: 'min(600px, calc(100vw - 32px))' };
const chart = (n: number) => `var(--ds-chart-${n})`;

function Header({ id, heading, sub, children }: { id: string; heading: ReactNode; sub: ReactNode; children?: ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
      <div style={{ display: 'grid', gap: 6 }}>
        <h3 id={id} style={title}>
          {heading}
        </h3>
        <p style={description}>{sub}</p>
      </div>
      {children}
    </div>
  );
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const usd = (v: number) => `$${v.toLocaleString('en-US')}`;

// Bar heights of the Figma demo (px of 256) as dollars on an $11,000 scale.
const revenue: ChartRow[] = [72, 136, 84, 56, 113, 238, 97, 149, 29, 97, 26, 58].map((px, i) => ({ month: months[i], subscriptions: Math.round(((px / 256) * 11000) / 10) * 10, orders: Math.round((((256 - px) / 256) * 6000) / 10) * 10 }));

type PlaygroundArgs = { type: 'bar' | 'line' | 'area'; stacked: boolean; layout: 'vertical' | 'horizontal'; variant: 'default' | 'capped'; curve: 'monotone' | 'linear' | 'step'; dots: boolean; labels: boolean };
const sample: ChartRow[] = [
  { month: 'Jan', desktop: 100, mobile: 25 },
  { month: 'Feb', desktop: 200, mobile: 40 },
  { month: 'Mar', desktop: 120, mobile: 20 },
  { month: 'Apr', desktop: 305, mobile: 60 },
  { month: 'May', desktop: 40, mobile: 30 },
  { month: 'Jun', desktop: 90, mobile: 50 },
];
const desktop = [{ key: 'desktop', label: 'Desktop' }];
const both = [
  { key: 'desktop', label: 'Desktop' },
  { key: 'mobile', label: 'Mobile' },
];

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { type: 'bar', stacked: false, layout: 'vertical', variant: 'default', curve: 'monotone', dots: false, labels: false },
  argTypes: {
    type: { name: 'Chart', control: 'inline-radio', options: ['bar', 'line', 'area'] },
    stacked: { name: 'Two series, stacked (bar)', control: 'boolean' },
    layout: { name: 'Orientation (bar)', control: 'inline-radio', options: ['vertical', 'horizontal'] },
    variant: { name: 'Vaiant (bar)', control: 'inline-radio', options: ['default', 'capped'] },
    labels: { name: 'Labels (bar)', control: 'boolean' },
    curve: { name: 'Curve (line, area)', control: 'inline-radio', options: ['monotone', 'linear', 'step'] },
    dots: { name: 'Dots (line)', control: 'boolean' },
  },
  render: ({ type, stacked, layout, variant, curve, dots, labels }) => (
    <div style={{ width: 'min(480px, calc(100vw - 32px))' }}>
      {type === 'bar' ? (
        <BarChart aria-label="Visitors" data={sample} index="month" series={stacked ? both : desktop} stacked={stacked} layout={layout} variant={variant} labels={labels} height={240} />
      ) : (
        <LineChart aria-label="Visitors" data={sample} index="month" series={desktop} curve={curve} dots={dots} area={type === 'area'} height={240} />
      )}
    </div>
  ),
};

/** Figma demo "Chart" (Revenue): monthly bars under tabs and actions; July is highlighted with its tooltip, as in Figma. */
export const Revenue: StoryObj = {
  render: () => (
    <Tabs defaultValue="subscriptions" style={frame}>
      <div style={{ display: 'grid', gap: 16 }}>
        <Header id="revenue-title" heading="Revenue" sub="Subscriptions and orders, January – December" />
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
          <TabsList aria-label="Revenue source">
            <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
          </TabsList>
          <div style={{ display: 'flex', gap: 4 }}>
            <Button variant="outline" leadingIcon={<RiDownloadLine />}>
              Export
            </Button>
            <Button variant="secondary" icon={<RiFilter3Line />} aria-label="Filter" />
            <Button variant="secondary" icon={<RiMore2Line />} aria-label="More" />
          </div>
        </div>
      </div>
      {(['subscriptions', 'orders'] as const).map((key) => (
        <TabsContent key={key} value={key}>
          <BarChart
            aria-label={`Revenue from ${key}`}
            data={revenue}
            index="month"
            series={[{ key, label: key === 'subscriptions' ? 'Subscriptions' : 'Orders' }]}
            max={11000}
            formatValue={usd}
            tooltipLabel={(_, i) => monthNames[i]}
            defaultActiveIndex={key === 'subscriptions' ? 6 : null}
          />
        </TabsContent>
      ))}
    </Tabs>
  ),
};

const listening: ChartRow[] = [
  { day: 'Mo', name: 'Monday', music: 20, podcasts: 29, audiobooks: 20, other: 36 },
  { day: 'Tu', name: 'Tuesday', music: 105, podcasts: 35, audiobooks: 18, other: 10 },
  { day: 'We', name: 'Wednesday', music: 120, podcasts: 60, audiobooks: 30, other: 20 },
  { day: 'Th', name: 'Thursday', music: 60, podcasts: 25, audiobooks: 20, other: 26 },
  { day: 'Fr', name: 'Friday', music: 46, podcasts: 20, audiobooks: 10, other: 14 },
  { day: 'Sa', name: 'Saturday', music: 40, podcasts: 60, audiobooks: 40, other: 4 },
  { day: 'Su', name: 'Sunday', music: 120, podcasts: 36, audiobooks: 40, other: 18 },
];
const listeningSeries = [
  { key: 'music', label: 'Music', color: chart(7) },
  { key: 'podcasts', label: 'Podcasts', color: chart(3) },
  { key: 'audiobooks', label: 'Audiobooks', color: chart(5) },
  { key: 'other', label: 'Other', color: chart(6) },
];
const hm = (minutes: number) => `${Math.floor(minutes / 60)}h ${Math.round(minutes % 60)}min`;
const total = (key: string) => listening.reduce((sum, row) => sum + Number(row[key]), 0);

/** Figma demo "Chart" (listening time): a week of stacked bars with an average line, a right-hand axis and a totals card. */
export const ListeningTime: StoryObj = {
  render: () => (
    <div style={frame}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <div style={{ display: 'grid', gap: 6 }}>
          <p style={description}>13–19 Oct average</p>
          <p id="listening-title" style={{ ...text, fontSize: 30, lineHeight: '36px', fontWeight: 600, color: 'var(--ds-card-foreground)' }}>
            2h 35min
          </p>
        </div>
        <p style={{ ...description, display: 'flex', gap: 12 }}>
          <span style={{ fontWeight: 500, color: 'var(--ds-card-foreground)' }}>Total listening time</span>18h 2min
        </p>
      </div>
      <div style={{ display: 'grid', gap: 16 }}>
        <BarChart
          aria-label="Listening time per day, 13–19 October"
          data={listening}
          index="day"
          series={listeningSeries}
          stacked
          max={240}
          height={246}
          references={[{ value: 155, label: 'avg.' }]}
          yAxis={{ side: 'end', ticks: [0, 240], format: (v) => (v ? `${v / 60}h` : '0') }}
          formatValue={hm}
          tooltipLabel={(row) => String(row.name)}
        />
        <ChartLegend variant="totals" aria-label="Total per kind" items={listeningSeries.map((s) => ({ label: s.label, color: s.color, value: hm(total(s.key)) }))} />
      </div>
    </div>
  ),
};

const orders: ChartRow[] = [
  [13, 34],
  [57, 155],
  [30, 110],
  [45, 130],
  [20, 95],
  [25, 70],
  [35, 120],
  [65, 135],
  [30, 200],
  [18, 80],
  [15, 30],
  [10, 25],
].map(([pickup, delivery], i) => ({ month: months[i], pickup, delivery }));

/** Figma demo "Chart" (Orders): two series side by side in each month, with the legend in the header. */
export const Orders: StoryObj = {
  render: () => (
    <div style={frame}>
      <Header id="orders-title" heading="Orders" sub="Delivery and pickup, January – December">
        <ChartLegend
          aria-label="Series"
          items={[
            { label: 'Delivery', color: chart(7) },
            { label: 'Pickup', color: chart(3) },
          ]}
        />
      </Header>
      <BarChart
        aria-labelledby="orders-title"
        data={orders}
        index="month"
        series={[
          { key: 'pickup', label: 'Pickup', color: chart(3) },
          { key: 'delivery', label: 'Delivery', color: chart(7) },
        ]}
        max={220}
        tooltipLabel={(_, i) => monthNames[i]}
      />
    </div>
  ),
};

const signups: ChartRow[] = [72, 136, 84, 196, 20, 70].map((px, i) => ({ month: months[i], accounts: Math.round((px / 256) * 400) }));

/** Figma demo "Chart" (Sign-ups): capped bars. */
export const SignUps: StoryObj = {
  render: () => (
    <div style={frame}>
      <Header id="signups-title" heading="Sign-ups" sub="New accounts, January – June" />
      <BarChart aria-labelledby="signups-title" data={signups} index="month" series={[{ key: 'accounts', label: 'Accounts' }]} variant="capped" max={400} tooltipLabel={(_, i) => monthNames[i]} />
    </div>
  ),
};

const destinations: ChartRow[] = [
  { city: 'Tokyo', trips: 1380 },
  { city: 'Lisbon', trips: 1210 },
  { city: 'Paris', trips: 720 },
  { city: 'Bali', trips: 392 },
  { city: 'Rome', trips: 340 },
  { city: 'Oslo', trips: 115 },
];

/** Figma demo "Chart" (Top destinations): horizontal bars with the categories on the left. */
export const TopDestinations: StoryObj = {
  render: () => (
    <div style={frame}>
      <Header id="destinations-title" heading="Top destinations" sub="Trips booked this year" />
      <BarChart aria-labelledby="destinations-title" data={destinations} index="city" series={[{ key: 'trips', label: 'Trips' }]} layout="horizontal" max={1385} height={280} grid={4} />
    </div>
  ),
};

// 26 weeks from 5 January (index 10 is 16 March).
const weekLabel = (i: number) => new Date(Date.UTC(2026, 0, 5 + i * 7)).toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
const users = [1150, 1180, 1320, 1400, 1650, 1820, 2100, 2500, 3000, 3600, 4260, 4400, 4500, 4450, 4900, 5600, 5800, 5850, 5300, 4700, 4300, 4000, 4150, 4500, 4800, 4950];
const ios = [2000, 2600, 2550, 2500, 2550, 2450, 2600, 3500, 4600, 5600, 6580, 6900, 7050, 7100, 6900, 6600, 6200, 5800, 5500, 5300, 5450, 6300, 7300, 7700, 8100, 8400];
const web = [1500, 1750, 1900, 2000, 2500, 3300, 4300, 5500, 6400, 7200, 7880, 8300, 9100, 9400, 9500, 9200, 8100, 7800, 7600, 6800, 6500, 6600, 7000, 7300, 7500, 7700];
const weekly: ChartRow[] = users.map((u, i) => ({ week: weekLabel(i), users: u, web: web[i], ios: ios[i] }));
const half = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

/** Figma demo "Chart" (Active users): a smooth line over 26 weeks; 16 March is hovered, as in Figma. */
export const ActiveUsers: StoryObj = {
  render: () => (
    <div style={frame}>
      <Header id="users-title" heading="Active users" sub="Daily average per week, January – June" />
      <LineChart aria-labelledby="users-title" data={weekly} index="week" series={[{ key: 'users', label: 'Users' }]} max={6000} ticks={half} defaultActiveIndex={10} />
    </div>
  ),
};

/** Figma demo "Chart" (Sessions): two lines with a legend; the tooltip lists both. */
export const Sessions: StoryObj = {
  render: () => (
    <div style={frame}>
      <Header id="sessions-title" heading="Sessions" sub="Web and iOS per week, January – June">
        <ChartLegend
          aria-label="Series"
          items={[
            { label: 'Web', color: chart(7) },
            { label: 'iOS', color: chart(3) },
          ]}
        />
      </Header>
      <LineChart
        aria-labelledby="sessions-title"
        data={weekly}
        index="week"
        series={[
          { key: 'web', label: 'Web', color: chart(7) },
          { key: 'ios', label: 'iOS', color: chart(3) },
        ]}
        max={10000}
        ticks={half}
        defaultActiveIndex={10}
      />
    </div>
  ),
};

const deploys: ChartRow[] = [38, 56, 44, 6, 22, 32].map((n, i) => ({ month: half[i], name: monthNames[i], deploys: n }));

/** Figma demo "Chart" (Deploys): a step area per month; February is hovered, as in Figma. */
export const Deploys: StoryObj = {
  render: () => (
    <div style={frame}>
      <Header id="deploys-title" heading="Deploys" sub="Production releases, January – June" />
      <AreaChart aria-labelledby="deploys-title" data={deploys} index="month" series={[{ key: 'deploys', label: 'Deploys' }]} curve="step" max={60} tooltipLabel={(row) => String(row.name)} defaultActiveIndex={1} />
    </div>
  ),
};

const screenTime = [
  { label: 'Messages', value: 70, color: chart(7), time: '1h 24min' },
  { label: 'Video', value: 65, color: chart(1), time: '1h 18min' },
  { label: 'Music', value: 55, color: chart(3), time: '1h 6min' },
  { label: 'Games', value: 58, color: chart(5), time: '1h 10min' },
  { label: 'Reading', value: 35, color: chart(4), time: '0h 42min' },
  { label: 'Work', value: 79, color: chart(9), time: '1h 35min' },
];

/** Figma demo "Chart" (screen time): one ring per app beside a totals card. */
export const ScreenTime: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 24, width: 'min(600px, calc(100vw - 32px))' }}>
      <RadialChart aria-label="Screen time against each app's limit" size={190} data={screenTime} style={{ marginInline: 37 }} />
      <ChartLegend variant="totals" columns={2} aria-label="Time per app" style={{ flex: '1 1 260px' }} items={screenTime.map((d) => ({ label: d.label, color: d.color, value: d.time }))} />
    </div>
  ),
};

/** Figma demo "Chart" (Daily goal): a progress ring with the value in the middle. */
export const DailyGoal: StoryObj = {
  render: () => (
    <div style={{ ...frame, justifyItems: 'center', textAlign: 'center' }}>
      <div style={{ display: 'grid', gap: 6 }}>
        <h3 style={{ ...title, fontSize: 24, lineHeight: '32px', fontWeight: 600 }}>Daily goal</h3>
        <p style={description}>Steps walked today</p>
      </div>
      <RadialChart variant="progress" aria-label="7,240 of 10,000 steps" data={[{ label: 'Steps', value: 7240 }]} max={10000} value="7,240" caption="Steps" />
      <p style={description}>2,760 steps to go — about a 25-minute walk.</p>
    </div>
  ),
};

function Sample({ name, kind, children }: { name: string; kind: string; children: ReactNode }) {
  return (
    <section style={{ display: 'grid', gap: 24, width: 'min(480px, calc(100vw - 32px))' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h4 style={{ ...text, fontSize: 14, lineHeight: '20px', fontWeight: 500, color: 'var(--ds-foreground)' }}>{name}</h4>
        <span style={description}>{kind}</span>
      </div>
      {children}
    </section>
  );
}
const samples: CSSProperties = { display: 'grid', gap: 64 };

/** Figma "Bar Chart - Samples": Default, Capped, Stacked, Multiple, Label and Horizontal. */
export const BarSamples: StoryObj = {
  render: () => (
    <div style={samples}>
      <Sample name="Default" kind="Bar Chart">
        <BarChart aria-label="Default" data={sample} index="month" series={desktop} max={360} height={240} />
      </Sample>
      <Sample name="Capped" kind="Bar Chart">
        <BarChart aria-label="Capped" data={sample} index="month" series={desktop} variant="capped" max={360} height={240} />
      </Sample>
      <Sample name="Stacked" kind="Bar Chart">
        <BarChart aria-label="Stacked" data={sample} index="month" series={both} stacked max={420} height={240} />
      </Sample>
      <Sample name="Multiple" kind="Bar Chart">
        <BarChart aria-label="Multiple" data={sample} index="month" series={[both[1], both[0]].map((s, i) => ({ ...s, color: chart(i ? 7 : 3) }))} max={360} height={240} />
      </Sample>
      <Sample name="Label" kind="Bar Chart">
        <BarChart aria-label="Label" data={sample} index="month" series={desktop} labels max={360} height={240} />
      </Sample>
      <Sample name="Horizontal" kind="Bar Chart">
        <BarChart aria-label="Horizontal" data={[...sample].reverse()} index="month" series={desktop} layout="horizontal" max={330} height={240} />
      </Sample>
    </div>
  ),
};

const smooth = [40, 42, 48, 52, 60, 66, 78, 96, 120, 132, 145, 150, 147, 150, 172, 180, 178, 168, 152, 140, 128, 120, 122, 132, 145, 152];
const coarse: ChartRow[] = [30, 45, 50, 80, 140, 155, 190, 200, 160, 150, 120, 140, 155].map((v, i) => ({ point: String(i), desktop: v, mobile: [80, 108, 104, 104, 98, 168, 182, 188, 175, 150, 140, 190, 205][i] }));
const smoothRows: ChartRow[] = smooth.map((v, i) => ({ point: String(i), desktop: v, mobile: Math.round(v * 0.75 + 30) }));
const sleep: ChartRow[] = [6.4, 6.9, 7.3, 7.1, 6.8, 7.5, 7.7].map((v, i) => ({ point: String(i), hours: v }));

/** Figma "Line Chart - Samples": Default, Linear, Step, Multiple, Dots and Reference. */
export const LineSamples: StoryObj = {
  render: () => (
    <div style={samples}>
      <Sample name="Default" kind="Line Chart">
        <LineChart aria-label="Default" data={smoothRows} index="point" series={desktop} ticks={half} max={190} height={240} />
      </Sample>
      <Sample name="Linear" kind="Line Chart">
        <LineChart aria-label="Linear" data={coarse} index="point" series={desktop} curve="linear" ticks={half} max={230} height={240} />
      </Sample>
      <Sample name="Step" kind="Line Chart">
        <LineChart aria-label="Step" data={sample} index="month" series={desktop} curve="step" max={340} height={240} />
      </Sample>
      <Sample name="Multiple" kind="Line Chart">
        <LineChart aria-label="Multiple" data={coarse} index="point" series={both} curve="monotone" ticks={half} max={230} height={240} />
      </Sample>
      <Sample name="Dots" kind="Line Chart">
        <LineChart aria-label="Dots" data={coarse} index="point" series={desktop} dots ticks={half} max={230} height={240} />
      </Sample>
      <Sample name="Reference" kind="Line Chart">
        <LineChart aria-label="Reference" data={sleep} index="point" series={[{ key: 'hours', label: 'Sleep' }]} ticks={half} max={10} references={[{ value: 8, label: 'Goal · 8 h' }]} height={240} />
      </Sample>
    </div>
  ),
};

/** Figma "Area Chart - Samples": Default, Linear, Step and Multiple. */
export const AreaSamples: StoryObj = {
  render: () => (
    <div style={samples}>
      <Sample name="Default" kind="Area Chart">
        <AreaChart aria-label="Default" data={smoothRows} index="point" series={desktop} ticks={half} max={190} height={240} />
      </Sample>
      <Sample name="Linear" kind="Area Chart">
        <AreaChart aria-label="Linear" data={coarse} index="point" series={desktop} curve="linear" ticks={half} max={230} height={240} />
      </Sample>
      <Sample name="Step" kind="Area Chart">
        <AreaChart aria-label="Step" data={sample} index="month" series={desktop} curve="step" max={340} height={240} />
      </Sample>
      <Sample name="Multiple" kind="Area Chart">
        <AreaChart aria-label="Multiple" data={coarse} index="point" series={both} ticks={half} max={230} height={240} />
      </Sample>
    </div>
  ),
};

const slices = [
  { label: 'Chrome', color: chart(3) },
  { label: 'Safari', color: chart(5) },
  { label: 'Firefox', color: chart(1) },
  { label: 'Edge', color: chart(2) },
  { label: 'Opera', color: chart(4) },
  { label: 'Arc', color: chart(9) },
  { label: 'Other', color: chart(7) },
];
const pieSets = [
  [25, 0, 0, 75],
  [25, 37.5, 0, 37.5],
  [30, 35, 0, 35],
  [25, 25, 0, 12.5, 25],
  [16, 18, 20, 16, 22],
  [22, 12, 20, 15, 8, 8, 8],
].map((values) => values.map((value, i) => ({ ...slices[i], value })).filter((d) => d.value > 0));
const grid3: CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(3, auto)', justifyContent: 'start', gap: 40 };

/** Figma "Pie Chart - Samples": Default, Donut and Donut with Label, with two to seven slices. */
export const PieSamples: StoryObj = {
  render: () => (
    <div style={samples}>
      {(
        [
          ['Default', 'pie', false],
          ['Donut', 'donut', false],
          ['Donut with Label', 'donut', true],
        ] as const
      ).map(([name, variant, label]) => (
        <Sample key={name} name={name} kind="Pie Chart">
          <div style={grid3}>
            {pieSets.map((data, i) => (
              <PieChart key={i} aria-label={`${name}, ${data.length} slices`} variant={variant} data={data} size={140} value={label ? '925' : undefined} caption={label ? 'Visitors' : undefined} />
            ))}
          </div>
        </Sample>
      ))}
    </div>
  ),
};

const rings = [
  { label: 'Messages', value: 70, color: chart(7) },
  { label: 'Video', value: 65, color: chart(1) },
  { label: 'Music', value: 55, color: chart(3) },
  { label: 'Games', value: 45, color: chart(5) },
  { label: 'Reading', value: 70, color: chart(4) },
  { label: 'Work', value: 25, color: chart(9) },
  { label: 'Other', value: 40, color: chart(2) },
];
const halfSlices = [
  { label: 'Direct', color: chart(7) },
  { label: 'Search', color: chart(10) },
  { label: 'Social', color: chart(3) },
  { label: 'Email', color: chart(1) },
  { label: 'Ads', color: chart(5) },
  { label: 'Referral', color: chart(9) },
  { label: 'Other', color: chart(8) },
];
const halfSets = [
  [80, 20],
  [20, 25, 55],
  [20, 25, 12, 43],
  [15, 25, 12, 20, 28],
  [15, 25, 12, 20, 18, 10],
  [15, 25, 12, 15, 6, 14, 13],
].map((values) => values.map((value, i) => ({ ...halfSlices[i], value })));

/** Figma "Radial Chart - Samples": Simple (two to seven rings), Stacked (half rings) and Text. */
export const RadialSamples: StoryObj = {
  render: () => (
    <div style={samples}>
      <Sample name="Simple" kind="Radial Chart">
        <div style={grid3}>
          {[2, 3, 4, 5, 6, 7].map((n) => (
            <RadialChart key={n} aria-label={`${n} rings`} data={rings.slice(0, n)} size={140} />
          ))}
        </div>
      </Sample>
      <Sample name="Stacked" kind="Radial Chart">
        <div style={grid3}>
          {halfSets.map((data, i) => (
            <RadialChart key={i} variant="half" aria-label={`${data.length} sources`} data={data} size={140} value="925" caption="Visitors" />
          ))}
        </div>
      </Sample>
      <Sample name="Text" kind="Radial Chart">
        <RadialChart variant="progress" aria-label="72% complete" data={[{ label: 'Complete', value: 72 }]} value="72%" caption="Complete" />
      </Sample>
    </div>
  ),
};

/** The parts on their own: Chart Tooltip, the legends and every Swatch variant. */
export const Parts: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 24, justifyItems: 'start' }}>
      <ChartTooltip
        label="Input"
        style={{ width: 180 }}
        items={[
          { label: 'Library', value: '962', color: chart(2) },
          { label: 'Detached', value: '143', color: chart(5) },
          { label: 'Pending', value: '58', color: chart(3) },
          { label: 'Archived', value: '21', color: chart(4) },
          { label: 'Draft', value: '7', color: chart(1) },
        ]}
        description="Subscriptions and orders, January – December"
      />
      <ChartLegend
        aria-label="Swatches"
        items={(['default', 'line', 'line-horizontal', 'dashed', 'dashed-horizontal'] as ChartSwatchVariant[]).map((swatch) => ({ label: swatch, swatch, color: chart(2) }))}
      />
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        {(['default', 'line', 'line-horizontal', 'dashed', 'dashed-horizontal'] as const).map((variant) => (
          <ChartSwatch key={variant} variant={variant} color={chart(2)} />
        ))}
      </div>
    </div>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'grid', gap: 32 }}>
          <BarChart aria-label={`Stacked bars (${scheme})`} data={sample} index="month" series={both} stacked max={420} height={160} defaultActiveIndex={3} />
          <AreaChart aria-label={`Areas (${scheme})`} data={coarse} index="point" series={both} ticks={half} max={230} height={160} references={[{ value: 180, label: 'Target' }]} />
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <PieChart aria-label={`Donut (${scheme})`} variant="donut" data={pieSets[5]} size={120} value="925" caption="Visitors" />
            <RadialChart aria-label={`Rings (${scheme})`} data={rings.slice(0, 4)} size={120} />
          </div>
        </div>
      ))}
    </div>
  ),
};
