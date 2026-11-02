import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type CSSProperties } from 'react';
import { Button } from '../Button';
import type { DateRange } from '../Calendar';
import { Field } from '../Field';
import { DatePicker } from './DatePicker';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=340-2';

const meta = {
  title: 'Components/Date Picker',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Date Picker** demos ([open in Figma](${FIGMA_URL})): an Outline Button (or, with \`input\`, an Input with a calendar button) that opens a Calendar 4 px below. \`mode\` (\`single\` · \`range\`) with \`value\` / \`defaultValue\` / \`onValueChange\`, \`placeholder\`, \`format\`, \`showIcon\`, \`align\`, \`fullWidth\`, \`name\` (submits YYYY-MM-DD), and the Calendar's \`min\`, \`max\`, \`isDateDisabled\`, \`captionLayout\`, \`startMonth\` / \`endMonth\`, \`weekStartsOn\`, \`locale\`, \`numberOfMonths\`. Opening moves focus to the calendar's day; picking a date (or a range's second date), Escape or a click outside closes it, and Escape returns focus to the trigger. Inside a Field it takes the label, description and error.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const today = new Date(2026, 2, 17);
const box: CSSProperties = { width: 240, minHeight: 400 };
const muted: CSSProperties = { fontFamily: 'var(--ds-font-sans)', fontSize: 14, lineHeight: '20px', color: 'var(--ds-muted-foreground)', margin: 0 };

export const Playground: StoryObj<{ mode: 'single' | 'range'; showIcon: boolean; input: boolean; disabled: boolean }> = {
  args: { mode: 'single', showIcon: false, input: false, disabled: false },
  argTypes: { mode: { control: 'inline-radio', options: ['single', 'range'] } },
  render: ({ mode, showIcon, input, disabled }) => (
    <div style={{ minHeight: 400 }}>
      {mode === 'range' ? (
        <DatePicker mode="range" aria-label="Dates" showIcon={showIcon} disabled={disabled} today={today} />
      ) : (
        <DatePicker aria-label="Date" showIcon={showIcon} input={input} disabled={disabled} today={today} />
      )}
    </div>
  ),
};

/** Figma demo "Date Picker": a Field with an Outline Button trigger. */
export const Default: StoryObj = {
  render: function Render() {
    const [due, setDue] = useState<Date | null>(new Date(2026, 2, 27));
    return (
      <div style={box}>
        <Field label="Review due" description="Jonas Lindqvist is notified on the morning of the due date.">
          <DatePicker value={due} onValueChange={setDue} today={today} calendarWidth="240px" />
        </Field>
      </div>
    );
  },
};

/** Figma demo "Range picker": a range in two months, with a calendar icon on the trigger. */
export const RangePicker: StoryObj = {
  render: function Render() {
    const [range, setRange] = useState<DateRange>({ from: new Date(2026, 2, 27), to: new Date(2026, 3, 14) });
    return (
      <div style={{ minHeight: 400 }}>
        <DatePicker mode="range" aria-label="Trip dates" showIcon value={range} onValueChange={setRange} today={today} />
      </div>
    );
  },
};

/** Figma demo "Date of birth": month and year dropdowns, a numeric format, no dates after today. */
export const DateOfBirth: StoryObj = {
  render: () => (
    <div style={box}>
      <Field label="Date of birth">
        <DatePicker
          showIcon
          defaultValue={new Date(1990, 8, 9)}
          format={(d) => d.toLocaleDateString('en-GB')}
          captionLayout="dropdown"
          startMonth={new Date(1900, 0, 1)}
          endMonth={today}
          max={today}
          today={today}
          calendarWidth="240px"
        />
      </Field>
    </div>
  ),
};

/** Figma demo "Input": type the date, or open the calendar from the button at the end. */
export const Input: StoryObj = {
  render: function Render() {
    const [date, setDate] = useState<Date | null>(new Date(2026, 8, 20));
    return (
      <div style={{ ...box, display: 'grid', gap: 12, alignContent: 'start' }}>
        <Field label="Subscription date" description="Type a date like September 20, 2026, or pick one.">
          <DatePicker input value={date} onValueChange={setDate} today={today} calendarWidth="240px" />
        </Field>
        <p style={muted} aria-live="polite">
          Value: {date ? date.toDateString() : 'none'}
        </p>
      </div>
    );
  },
};

/** Field error, disabled, and a placeholder before anything is picked. */
export const States: StoryObj = {
  render: () => (
    <div style={{ width: 240, display: 'grid', gap: 16 }}>
      <Field label="Start date">
        <DatePicker placeholder="Pick a start date" today={today} />
      </Field>
      <Field label="Deadline" error="Pick a date after the start date.">
        <DatePicker defaultValue={new Date(2026, 2, 2)} today={today} />
      </Field>
      <Field label="Locked" disabled>
        <DatePicker defaultValue={new Date(2026, 2, 27)} today={today} />
      </Field>
    </div>
  ),
};

/** In a form: the date is submitted as YYYY-MM-DD (a range as two fields). */
export const InAForm: StoryObj = {
  render: function Render() {
    const [sent, setSent] = useState('');
    return (
      <form
        style={{ width: 280, display: 'grid', gap: 12, minHeight: 420, alignContent: 'start' }}
        onSubmit={(event) => {
          event.preventDefault();
          setSent(new URLSearchParams(new FormData(event.currentTarget) as unknown as Record<string, string>).toString());
        }}
      >
        <Field label="Check-in and check-out">
          <DatePicker mode="range" name="stay" defaultValue={{ from: new Date(2026, 2, 20), to: new Date(2026, 2, 23) }} today={today} />
        </Field>
        <Button type="submit" style={{ justifySelf: 'start' }}>
          Book
        </Button>
        <output style={muted}>{sent}</output>
      </form>
    );
  },
};

/** Light and Dark, driven only by tokens (pickers drawn open). */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, minHeight: 420 }}>
          <div style={{ width: 240 }}>
            <Field label={`Review due (${scheme})`}>
              <DatePicker defaultOpen defaultValue={new Date(2026, 2, 27)} today={today} calendarWidth="240px" />
            </Field>
          </div>
        </div>
      ))}
    </div>
  ),
};
