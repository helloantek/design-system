import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type CSSProperties } from 'react';
import { Button } from '../Button';
import { ToggleGroup, ToggleGroupItem } from '../ToggleGroup';
import { Calendar, type CalendarCaptionLayout, type DateRange } from './Calendar';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=263-9095';

const meta = {
  title: 'Components/Calendar',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Calendar**, **Calendar Navigation** and **Calendar Day** ([open in Figma](${FIGMA_URL})): Figma Mode → \`mode\` (\`single\` · \`range\`) with \`selected\` / \`defaultSelected\` / \`onSelect\` (a \`Date\`, or \`{ from, to }\`), Type → \`variant\` (\`panel\` · \`flat\`), Calendar Navigation Variant → \`captionLayout\` (\`label\` · \`dropdown\` · \`dropdown-months\` · \`dropdown-years\`). \`month\` / \`defaultMonth\` / \`onMonthChange\` choose the month, \`numberOfMonths\` and \`orientation\` show several, \`min\` / \`max\` / \`disabled\` block days (Day=disabled), \`weekStartsOn\` and \`locale\` follow the reader, \`footer\` and \`aside\` hold presets. The grid is one Tab stop: arrows move by a day or a week, Home / End to the week's ends, Page Up / Page Down by a month (Shift: a year), Enter or Space picks.`,
      },
    },
  },
} satisfies Meta;

export default meta;

// Figma's sample: March 2026, today the 17th.
const today = new Date(2026, 2, 17);
const march = new Date(2026, 2, 1);
const text: CSSProperties = { fontFamily: 'var(--ds-font-sans)', fontSize: 14, lineHeight: '20px', color: 'var(--ds-muted-foreground)', margin: 0 };
const fmt = (d?: Date) => (d ? d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '…');

type PlaygroundArgs = { mode: 'single' | 'range'; variant: 'panel' | 'flat'; captionLayout: CalendarCaptionLayout; numberOfMonths: number; weekStartsOn: 0 | 1; showOutsideDays: boolean };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { mode: 'single', variant: 'panel', captionLayout: 'label', numberOfMonths: 1, weekStartsOn: 0, showOutsideDays: true },
  argTypes: {
    mode: { name: 'Mode', control: 'inline-radio', options: ['single', 'range'] },
    variant: { name: 'Type', control: 'inline-radio', options: ['panel', 'flat'] },
    captionLayout: { name: 'Navigation', control: 'select', options: ['label', 'dropdown', 'dropdown-months', 'dropdown-years'] },
    numberOfMonths: { control: { type: 'number', min: 1, max: 3 } },
    weekStartsOn: { control: 'inline-radio', options: [0, 1] },
  },
  render: ({ mode, ...args }) =>
    mode === 'range' ? <Calendar mode="range" defaultMonth={march} today={today} {...args} /> : <Calendar defaultMonth={march} today={today} defaultSelected={new Date(2026, 2, 27)} {...args} />,
};

/** Figma demo "Calendar": one date. */
export const Single: StoryObj = {
  render: function Render() {
    const [date, setDate] = useState<Date>(new Date(2026, 2, 27));
    return (
      <div style={{ display: 'grid', gap: 12, justifyItems: 'center' }}>
        <Calendar selected={date} onSelect={setDate} defaultMonth={march} today={today} />
        <p style={text} aria-live="polite">
          Selected: {fmt(date)}
        </p>
      </div>
    );
  },
};

/** Figma demo "Month and year selector": Calendar Navigation Variant=dropdown. */
export const MonthAndYearSelector: StoryObj = {
  render: () => <Calendar captionLayout="dropdown" defaultMonth={march} today={today} defaultSelected={new Date(2026, 2, 27)} startMonth={new Date(2016, 0, 1)} endMonth={new Date(2030, 11, 1)} />,
};

/** Calendar Navigation Variant=dropdown-months and dropdown-years. */
export const NavigationVariants: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
      {(['label', 'dropdown', 'dropdown-months', 'dropdown-years'] as const).map((layout) => (
        <Calendar key={layout} aria-label={`Calendar (${layout})`} captionLayout={layout} defaultMonth={march} today={today} />
      ))}
    </div>
  ),
};

const addDays = (d: Date, n: number) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);

/** Figma demo "Presets": quick picks under the month. */
export const Presets: StoryObj = {
  render: function Render() {
    const [date, setDate] = useState<Date>(new Date(2026, 2, 27));
    const [month, setMonth] = useState(march);
    const pick = (d: Date) => {
      setDate(d);
      setMonth(new Date(d.getFullYear(), d.getMonth(), 1));
    };
    const presets: [string, Date][] = [
      ['Today', today],
      ['Tomorrow', addDays(today, 1)],
      ['In a week', addDays(today, 7)],
      ['In a month', new Date(2026, 3, 17)],
    ];
    return (
      <Calendar
        selected={date}
        onSelect={setDate}
        month={month}
        onMonthChange={setMonth}
        today={today}
        footer={
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {presets.map(([label, d]) => (
              <Button key={label} variant="outline" size="sm" onClick={() => pick(d)}>
                {label}
              </Button>
            ))}
          </div>
        }
      />
    );
  },
};

/** Figma demo "Range": two months side by side. */
export const Range: StoryObj = {
  render: function Render() {
    const [range, setRange] = useState<DateRange>({ from: new Date(2026, 2, 27), to: new Date(2026, 3, 14) });
    return (
      <div style={{ display: 'grid', gap: 12, justifyItems: 'center' }}>
        <Calendar mode="range" selected={range} onSelect={setRange} numberOfMonths={2} defaultMonth={march} today={today} />
        <p style={text} aria-live="polite">
          {fmt(range.from)} – {fmt(range.to)}
        </p>
      </div>
    );
  },
};

/** Figma demo "Range vertical": two months stacked. */
export const RangeVertical: StoryObj = {
  render: () => <Calendar mode="range" orientation="vertical" numberOfMonths={2} defaultMonth={march} today={today} defaultSelected={{ from: new Date(2026, 2, 27), to: new Date(2026, 3, 14) }} />,
};

const rangePresets: Record<string, () => DateRange> = {
  today: () => ({ from: today, to: today }),
  week: () => ({ from: addDays(today, -6), to: today }),
  month: () => ({ from: new Date(2026, 1, 17), to: today }),
  year: () => ({ from: new Date(2025, 2, 17), to: today }),
};

/** Figma demo "Range with presets": a column of presets beside two months. */
export const RangeWithPresets: StoryObj = {
  render: function Render() {
    const [preset, setPreset] = useState('month');
    const [range, setRange] = useState<DateRange>(rangePresets.month());
    const [month, setMonth] = useState(new Date(2026, 1, 1));
    return (
      <Calendar
        mode="range"
        numberOfMonths={2}
        selected={range}
        onSelect={(r) => {
          setRange(r);
          setPreset('');
        }}
        month={month}
        onMonthChange={setMonth}
        today={today}
        aside={
          <ToggleGroup
            type="single"
            orientation="vertical"
            aria-label="Presets"
            value={preset}
            onValueChange={(v) => {
              if (!v) return;
              const r = rangePresets[v]();
              setPreset(v);
              setRange(r);
              setMonth(new Date(r.from!.getFullYear(), r.from!.getMonth(), 1));
            }}
            style={{ width: '100%' }}
          >
            <ToggleGroupItem value="today">Today</ToggleGroupItem>
            <ToggleGroupItem value="week">Last week</ToggleGroupItem>
            <ToggleGroupItem value="month">Last month</ToggleGroupItem>
            <ToggleGroupItem value="year">Last year</ToggleGroupItem>
          </ToggleGroup>
        }
      />
    );
  },
};

/** Figma Day=disabled: weekends and days before today cannot be picked. */
export const DisabledDays: StoryObj = {
  render: () => <Calendar defaultMonth={march} today={today} min={today} disabled={(d) => d.getDay() === 0 || d.getDay() === 6} aria-label="Delivery date" />,
};

/** weekStartsOn={1} and another locale (Polish). */
export const Locale: StoryObj = {
  render: () => <Calendar locale="pl-PL" weekStartsOn={1} defaultMonth={march} today={today} defaultSelected={new Date(2026, 2, 27)} aria-label="Kalendarz" />,
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Calendar aria-label={`Single (${scheme})`} defaultMonth={march} today={today} defaultSelected={new Date(2026, 2, 27)} />
          <Calendar aria-label={`Range (${scheme})`} mode="range" variant="flat" defaultMonth={march} today={today} defaultSelected={{ from: new Date(2026, 2, 20), to: new Date(2026, 2, 27) }} />
        </div>
      ))}
    </div>
  ),
};
