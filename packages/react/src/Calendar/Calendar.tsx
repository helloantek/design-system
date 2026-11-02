import { useEffect, useId, useRef, useState, type CSSProperties, type KeyboardEvent, type ReactNode } from 'react';
import { Button } from '../Button';

// Styles live in @helloantek/ds-css (classes ds-calendar*). A WAI-ARIA date grid: one Tab stop on the grid (the
// focused day); the arrow keys move by a day or a week, Home and End to the start and end of the week, Page Up and
// Page Down by a month (with Shift by a year); Enter or Space picks the day. Dates are local calendar days (time is
// ignored); names come from Intl in `locale`.

/** Figma Mode: one date or a range. */
export type CalendarMode = 'single' | 'range';
/** Figma Type: on a popover surface (`panel`) or bare (`flat`) for use inside another surface. */
export type CalendarVariant = 'panel' | 'flat';
/** Figma Calendar Navigation Variant. */
export type CalendarCaptionLayout = 'label' | 'dropdown' | 'dropdown-months' | 'dropdown-years';
/** A range: `to` is unset while the second day is still to be picked. */
export interface DateRange {
  from?: Date;
  to?: Date;
}

interface CalendarBaseProps {
  /** The first month shown (controlled). Defaults to the selection's month, else today's. */
  month?: Date;
  defaultMonth?: Date;
  onMonthChange?: (month: Date) => void;
  /** How many months side by side (default 1); `orientation="vertical"` stacks them. */
  numberOfMonths?: number;
  orientation?: 'horizontal' | 'vertical';
  /** Figma Calendar Navigation Variant (default `label`). */
  captionLayout?: CalendarCaptionLayout;
  /** The years the dropdown offers: from `startMonth` to `endMonth` (default 10 years either side of today). */
  startMonth?: Date;
  endMonth?: Date;
  /** Days that cannot be picked (Figma Day=disabled). */
  disabled?: (date: Date) => boolean;
  /** Earliest and latest days that can be picked. */
  min?: Date;
  max?: Date;
  /** 0 = Sunday (default, as in Figma), 1 = Monday. */
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  /** Show the days of the previous and next month (Figma Day=outside; default true). */
  showOutsideDays?: boolean;
  /** Which day is today (Figma Day=today); default the current date. */
  today?: Date;
  /** For month and weekday names (default `en-US`). */
  locale?: string;
  /** Figma Type (default `panel`). */
  variant?: CalendarVariant;
  /** Under the months (the "Presets" demo). */
  footer?: ReactNode;
  /** Beside the months (the "Range with presets" demo). */
  aside?: ReactNode;
  /** Names the calendar for screen readers (default "Calendar"). */
  'aria-label'?: string;
  className?: string;
  style?: CSSProperties;
  id?: string;
}

export interface SingleCalendarProps extends CalendarBaseProps {
  mode?: 'single';
  selected?: Date | null;
  defaultSelected?: Date | null;
  onSelect?: (date: Date) => void;
}

export interface RangeCalendarProps extends CalendarBaseProps {
  mode: 'range';
  selected?: DateRange | null;
  defaultSelected?: DateRange | null;
  onSelect?: (range: DateRange) => void;
}

export type CalendarProps = SingleCalendarProps | RangeCalendarProps;

const cx = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(' ');

// Date helpers on local calendar days.
const day = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const startOfMonth = (d: Date) => new Date(d.getFullYear(), d.getMonth(), 1);
const addDays = (d: Date, n: number) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
const addMonths = (d: Date, n: number) => {
  const target = new Date(d.getFullYear(), d.getMonth() + n, 1);
  const last = new Date(target.getFullYear(), target.getMonth() + 1, 0).getDate();
  return new Date(target.getFullYear(), target.getMonth(), Math.min(d.getDate(), last));
};
const sameDay = (a?: Date | null, b?: Date | null) => !!a && !!b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
const sameMonth = (a: Date, b: Date) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
const before = (a: Date, b: Date) => day(a).getTime() < day(b).getTime();
const monthsBetween = (a: Date, b: Date) => (b.getFullYear() - a.getFullYear()) * 12 + b.getMonth() - a.getMonth();
const iso = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

const chevron = (path: string, size = 14) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d={path} />
  </svg>
);

/** Figma "Calendar": pick a day, or a range of days, in one or more months. */
export function Calendar(props: CalendarProps) {
  const {
    month: monthProp,
    defaultMonth,
    onMonthChange,
    numberOfMonths = 1,
    orientation = 'horizontal',
    captionLayout = 'label',
    startMonth,
    endMonth,
    disabled,
    min,
    max,
    weekStartsOn = 0,
    showOutsideDays = true,
    today: todayProp,
    locale = 'en-US',
    variant = 'panel',
    footer,
    aside,
    'aria-label': ariaLabel = 'Calendar',
    className,
    style,
    id,
  } = props;
  const range = props.mode === 'range';
  const today = day(todayProp ?? new Date());

  const [uncontrolledSelected, setUncontrolledSelected] = useState<Date | DateRange | null>((props.defaultSelected as Date | DateRange | null | undefined) ?? null);
  const selected = props.selected !== undefined ? (props.selected as Date | DateRange | null) : uncontrolledSelected;
  const rangeValue: DateRange = range ? ((selected as DateRange | null) ?? {}) : {};
  const single = range ? null : (selected as Date | null);

  const anchor = single ?? rangeValue.from ?? today;
  const [uncontrolledMonth, setUncontrolledMonth] = useState(startOfMonth(defaultMonth ?? anchor));
  const month = startOfMonth(monthProp ?? uncontrolledMonth);
  const setMonth = (m: Date) => {
    const next = startOfMonth(m);
    if (monthProp === undefined) setUncontrolledMonth(next);
    onMonthChange?.(next);
  };

  const [focused, setFocused] = useState<Date | null>(null);
  const focusOnRender = useRef(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const autoId = useId();

  const isDisabled = (d: Date) => (min !== undefined && before(d, min)) || (max !== undefined && before(max, d)) || Boolean(disabled?.(d));

  // The day that takes the Tab stop: the focused one, else the selection, today or the 1st, in the first month shown.
  const visible = (d: Date) => monthsBetween(month, d) >= 0 && monthsBetween(month, d) < numberOfMonths;
  const tabDay = (() => {
    const candidates = [focused, single, rangeValue.from, today, month];
    for (const c of candidates) if (c && visible(c) && !isDisabled(c)) return c;
    return month;
  })();

  useEffect(() => {
    if (!focusOnRender.current || !focused) return;
    focusOnRender.current = false;
    gridRef.current?.querySelector<HTMLButtonElement>(`[data-day="${iso(focused)}"]:not([data-outside])`)?.focus();
  });

  const select = (d: Date) => {
    if (isDisabled(d)) return;
    let next: Date | DateRange;
    if (!range) next = d;
    else {
      const { from, to } = rangeValue;
      if (!from || to) next = { from: d, to: undefined };
      else if (before(d, from)) next = { from: d, to: undefined };
      else next = { from, to: d };
    }
    if (props.selected === undefined) setUncontrolledSelected(next);
    (props.onSelect as ((v: Date | DateRange) => void) | undefined)?.(next);
    setFocused(d);
    if (!visible(d)) setMonth(d);
  };

  const moveFocus = (d: Date) => {
    // Focus may rest on a disabled day; it just cannot be picked (as in the WAI-ARIA date picker example).
    if (monthsBetween(month, d) < 0) setMonth(d);
    else if (monthsBetween(month, d) >= numberOfMonths) setMonth(addMonths(d, -(numberOfMonths - 1)));
    focusOnRender.current = true;
    setFocused(d);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, d: Date) => {
    const dow = (d.getDay() - weekStartsOn + 7) % 7;
    const moves: Record<string, () => Date> = {
      ArrowLeft: () => addDays(d, -1),
      ArrowRight: () => addDays(d, 1),
      ArrowUp: () => addDays(d, -7),
      ArrowDown: () => addDays(d, 7),
      Home: () => addDays(d, -dow),
      End: () => addDays(d, 6 - dow),
      PageUp: () => addMonths(d, event.shiftKey ? -12 : -1),
      PageDown: () => addMonths(d, event.shiftKey ? 12 : 1),
    };
    const move = moves[event.key];
    if (!move) return;
    event.preventDefault();
    moveFocus(move());
  };

  const monthName = (m: Date, style: 'long' | 'short' = 'long') => new Intl.DateTimeFormat(locale, { month: style }).format(m);
  const caption = (m: Date) => new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(m);
  const fullDate = (d: Date) => new Intl.DateTimeFormat(locale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(d);
  const weekdays = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(2026, 1, 1 + ((weekStartsOn + i) % 7)); // 1 Feb 2026 is a Sunday
    return { short: new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(d).slice(0, 2), long: new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(d) };
  });

  const firstYear = (startMonth ?? addMonths(today, -120)).getFullYear();
  const lastYear = (endMonth ?? addMonths(today, 120)).getFullYear();
  const canPrev = !min || monthsBetween(startOfMonth(min), month) > 0;
  const lastShown = addMonths(month, numberOfMonths - 1);
  const canNext = !max || monthsBetween(lastShown, startOfMonth(max)) > 0;

  const dropdown = (label: string, value: number, options: { value: number; label: string }[], onChange: (v: number) => void, name: string) => (
    <label className="ds-calendar__dropdown">
      {label}
      {chevron('m6 9 6 6 6-6', 16)}
      <select className="ds-calendar__select" aria-label={name} value={value} onChange={(e) => onChange(Number(e.currentTarget.value))}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );

  const renderCaption = (m: Date, index: number) => {
    if (captionLayout === 'label' || index > 0) return <span aria-live="polite">{caption(m)}</span>;
    const months = Array.from({ length: 12 }, (_, i) => ({ value: i, label: monthName(new Date(2026, i, 1)) }));
    const years = Array.from({ length: lastYear - firstYear + 1 }, (_, i) => ({ value: firstYear + i, label: String(firstYear + i) }));
    const monthPart = captionLayout === 'dropdown-years' ? <span>{monthName(m)}</span> : dropdown(monthName(m), m.getMonth(), months, (v) => setMonth(new Date(m.getFullYear(), v, 1)), 'Month');
    const yearPart = captionLayout === 'dropdown-months' ? <span>{m.getFullYear()}</span> : dropdown(String(m.getFullYear()), m.getFullYear(), years, (v) => setMonth(new Date(v, m.getMonth(), 1)), 'Year');
    return (
      <>
        {monthPart}
        {yearPart}
      </>
    );
  };

  const renderMonth = (m: Date, index: number) => {
    const first = startOfMonth(m);
    const lead = (first.getDay() - weekStartsOn + 7) % 7;
    const start = addDays(first, -lead);
    const weeks = Array.from({ length: 6 }, (_, w) => Array.from({ length: 7 }, (_, i) => addDays(start, w * 7 + i)));
    // The navigation sits on the first month when stacked, on the last one when side by side (as in Figma).
    const showNav = orientation === 'vertical' ? index === 0 : index === numberOfMonths - 1;
    const captionId = `${id ?? autoId}-${iso(m)}-caption`;
    return (
      <div className="ds-calendar__month" key={iso(m)}>
        <div className="ds-calendar__nav">
          <div className="ds-calendar__caption" id={captionId}>
            {renderCaption(m, index)}
          </div>
          {showNav && (
            <>
              <Button variant="ghost" size="xs" icon={chevron('m15 18-6-6 6-6')} aria-label="Previous month" disabled={!canPrev} onClick={() => setMonth(addMonths(month, -1))} />
              <Button variant="ghost" size="xs" icon={chevron('m9 18 6-6-6-6')} aria-label="Next month" disabled={!canNext} onClick={() => setMonth(addMonths(month, 1))} />
            </>
          )}
        </div>
        <div className="ds-calendar__grid" role="grid" aria-labelledby={captionId}>
          <div className="ds-calendar__weekdays" role="row">
            {weekdays.map((w) => (
              <span key={w.long} className="ds-calendar__weekday" role="columnheader" aria-label={w.long}>
                {w.short}
              </span>
            ))}
          </div>
          {weeks.map((week) => (
            <div className="ds-calendar__week" role="row" key={iso(week[0])}>
              {week.map((d) => {
                const outside = !sameMonth(d, m);
                if (outside && !showOutsideDays) return <div key={iso(d)} className="ds-calendar__cell" role="gridcell" />;
                const { from, to } = rangeValue;
                const isStart = range && sameDay(d, from);
                const isEnd = range && sameDay(d, to ?? undefined);
                const inRange = range && from && to && before(from, d) && before(d, to);
                const isSelected = range ? isStart || isEnd : sameDay(d, single);
                const off = isDisabled(d);
                const rangeClass = range && from && to && !sameDay(from, to) ? (isStart ? 'ds-calendar__cell--range-start' : isEnd ? 'ds-calendar__cell--range-end' : inRange ? 'ds-calendar__cell--range-middle' : undefined) : undefined;
                return (
                  <div key={iso(d)} className={cx('ds-calendar__cell', rangeClass)} role="gridcell" aria-selected={isSelected || Boolean(inRange)}>
                    <button
                      type="button"
                      className={cx('ds-calendar__day', sameDay(d, today) && 'ds-calendar__day--today', outside && 'ds-calendar__day--outside')}
                      aria-pressed={isSelected}
                      aria-label={fullDate(d)}
                      aria-current={sameDay(d, today) ? 'date' : undefined}
                      disabled={off}
                      tabIndex={!outside && sameDay(d, tabDay) ? 0 : -1}
                      data-day={iso(d)}
                      data-outside={outside ? '' : undefined}
                      onClick={() => select(d)}
                      onKeyDown={(e) => onKeyDown(e, d)}
                      onFocus={() => !outside && !sameDay(d, focused) && setFocused(d)}
                    >
                      {d.getDate()}
                    </button>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div id={id} className={cx('ds-calendar', variant === 'flat' && 'ds-calendar--flat', orientation === 'vertical' && 'ds-calendar--vertical', className)} role="group" aria-label={ariaLabel} style={style}>
      {aside !== undefined && <div className="ds-calendar__aside">{aside}</div>}
      <div className="ds-calendar__body">
        <div className="ds-calendar__months" ref={gridRef}>
          {Array.from({ length: numberOfMonths }, (_, i) => renderMonth(addMonths(month, i), i))}
        </div>
        {footer !== undefined && <div className="ds-calendar__footer">{footer}</div>}
      </div>
    </div>
  );
}
