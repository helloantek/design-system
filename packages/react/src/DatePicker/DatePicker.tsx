import { useEffect, useId, useRef, useState, type CSSProperties, type KeyboardEvent, type ReactNode } from 'react';
import { usePlacement } from '../internal/usePlacement';
import { Button } from '../Button';
import { Calendar, type CalendarCaptionLayout, type DateRange } from '../Calendar';
import { useField } from '../Field';
import { Input, InputAction } from '../Input';

// Styles live in @helloantek/ds-css (classes ds-date-picker*). A button (or a text input) that opens a Calendar in a
// non-modal dialog 4 px below. Opening moves focus to the calendar's day; picking a date (or the second date of a
// range), Escape or a click outside closes it, and Escape returns focus to the trigger.

const cx = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(' ');
const iso = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

const icon = (path: ReactNode) => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {path}
  </svg>
);
const calendarIcon = icon(
  <>
    <rect width="18" height="18" x="3" y="4" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </>,
);
const chevronDown = icon(<path d="m6 9 6 6 6-6" />);

interface DatePickerBaseProps {
  /** Shown while nothing is picked (default "Pick a date" / "Pick a range"). */
  placeholder?: string;
  /** How a date is written (default: `Intl` medium, e.g. "Mar 27, 2026"; long in the input, "March 27, 2026"). */
  format?: (date: Date) => string;
  /** A calendar icon before the date on the trigger (the "Range picker" and "Date of birth" demos). */
  showIcon?: boolean;
  /** The calendar opens under the trigger's start (default) or end. */
  align?: 'start' | 'end';
  /** The trigger fills its container (default true inside a Field). */
  fullWidth?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  /** Names the trigger when there is no Field label. */
  'aria-label'?: string;
  /** Submits the date as YYYY-MM-DD (a range submits two fields with this name). */
  name?: string;
  // Passed to the Calendar.
  min?: Date;
  max?: Date;
  isDateDisabled?: (date: Date) => boolean;
  captionLayout?: CalendarCaptionLayout;
  startMonth?: Date;
  endMonth?: Date;
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  locale?: string;
  today?: Date;
  /** Months shown side by side (default 1, 2 for a range). */
  numberOfMonths?: number;
  /** The calendar's month width, e.g. "240px" to match a 240 px field (default 256 px). */
  calendarWidth?: string;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  id?: string;
  className?: string;
  style?: CSSProperties;
}

export interface SingleDatePickerProps extends DatePickerBaseProps {
  mode?: 'single';
  value?: Date | null;
  defaultValue?: Date | null;
  onValueChange?: (date: Date | null) => void;
  /** The "Input" demo: type the date, or open the calendar from the button at the end. */
  input?: boolean;
  /** Reads a typed date (default: `Date.parse`, which takes "September 20, 2026", "2026-09-20", "9/20/2026"…). */
  parse?: (text: string) => Date | null;
}

export interface RangeDatePickerProps extends DatePickerBaseProps {
  mode: 'range';
  value?: DateRange | null;
  defaultValue?: DateRange | null;
  onValueChange?: (range: DateRange) => void;
  input?: never;
  parse?: never;
}

export type DatePickerProps = SingleDatePickerProps | RangeDatePickerProps;

const defaultParse = (text: string) => {
  // YYYY-MM-DD is a local day (Date.parse would read it as UTC midnight, a day early west of Greenwich).
  const isoDay = /^(\d{4})-(\d{2})-(\d{2})$/.exec(text.trim());
  if (isoDay) {
    const d = new Date(Number(isoDay[1]), Number(isoDay[2]) - 1, Number(isoDay[3]));
    return d.getMonth() === Number(isoDay[2]) - 1 ? d : null;
  }
  const t = Date.parse(text.trim());
  if (Number.isNaN(t)) return null;
  const d = new Date(t);
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
};

/** A date (or range) field that opens a Calendar: Sort UI 2.0 "Date Picker" demos. */
export function DatePicker(props: DatePickerProps) {
  const {
    placeholder,
    showIcon = false,
    align = 'start',
    disabled: disabledProp = false,
    invalid: invalidProp = false,
    'aria-label': ariaLabel,
    name,
    min,
    max,
    isDateDisabled,
    captionLayout,
    startMonth,
    endMonth,
    weekStartsOn,
    locale = 'en-US',
    today,
    calendarWidth,
    open: openProp,
    defaultOpen = false,
    onOpenChange,
    id,
    className,
    style,
  } = props;
  const range = props.mode === 'range';
  const field = useField();
  const fullWidth = props.fullWidth ?? Boolean(field);
  const disabled = disabledProp || Boolean(field?.disabled);
  const invalid = invalidProp || Boolean(field?.invalid);
  const autoId = useId();
  const triggerId = id ?? field?.id ?? `${autoId}-trigger`;
  const panelId = `${autoId}-panel`;

  const [uncontrolled, setUncontrolled] = useState<Date | DateRange | null>((props.defaultValue as Date | DateRange | null | undefined) ?? null);
  const value = props.value !== undefined ? (props.value as Date | DateRange | null) : uncontrolled;
  const single = range ? null : (value as Date | null);
  const rangeValue: DateRange = range ? ((value as DateRange | null) ?? {}) : {};

  const [openState, setOpenState] = useState(defaultOpen);
  const open = openProp ?? openState;
  const [session, setSession] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const placed = usePlacement(panelRef, open, 'bottom');
  const focusOnOpen = useRef(false);

  const setOpen = (next: boolean, focusTrigger = false) => {
    if (next) {
      setSession((s) => s + 1);
      focusOnOpen.current = true;
    }
    if (openProp === undefined) setOpenState(next);
    onOpenChange?.(next);
    if (!next && focusTrigger) triggerRef.current?.focus();
  };

  const formatDate = props.format ?? ((d: Date) => new Intl.DateTimeFormat(locale, { dateStyle: props.input ? 'long' : 'medium' }).format(d));
  const setValue = (next: Date | DateRange | null) => {
    if (props.value === undefined) setUncontrolled(next);
    (props.onValueChange as ((v: Date | DateRange | null) => void) | undefined)?.(next);
  };

  // Focus the calendar's day when it opens.
  useEffect(() => {
    if (!open || !focusOnOpen.current) return;
    focusOnOpen.current = false;
    panelRef.current?.querySelector<HTMLElement>('.ds-calendar__day[tabindex="0"]')?.focus();
  }, [open, session]);

  // A click or focus outside closes it.
  useEffect(() => {
    if (!open) return;
    const outside = (event: Event) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', outside);
    document.addEventListener('focusin', outside);
    return () => {
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('focusin', outside);
    };
  });

  const label = range
    ? rangeValue.from
      ? `${formatDate(rangeValue.from)} - ${rangeValue.to ? formatDate(rangeValue.to) : '…'}`
      : undefined
    : single
      ? formatDate(single)
      : undefined;

  // The typed text (input mode) follows the value until the user edits it.
  const [text, setText] = useState<string | null>(null);
  const parse = props.parse ?? defaultParse;
  const commitText = () => {
    if (text === null) return;
    const t = text.trim();
    if (t === '') setValue(null);
    else {
      const d = parse(t);
      if (d && !(min && d < min) && !(max && d > max) && !isDateDisabled?.(d)) setValue(d);
    }
    setText(null);
  };

  const calendarProps = {
    min,
    max,
    disabled: isDateDisabled,
    captionLayout,
    startMonth,
    endMonth,
    weekStartsOn,
    locale,
    today,
    numberOfMonths: props.numberOfMonths ?? (range ? 2 : 1),
    style: calendarWidth ? ({ '--calendar-month-width': calendarWidth } as CSSProperties) : undefined,
    'aria-label': range ? 'Choose dates' : 'Choose a date',
  };

  // The visible text is part of the name (WCAG 2.5.3), placeholder included.
  const triggerText = label ?? placeholder ?? (range ? 'Pick a range' : 'Pick a date');
  const nameLabelled = ariaLabel === undefined && field ? `${field.labelId} ${triggerId}` : undefined;
  const sharedTrigger = {
    'aria-haspopup': 'dialog' as const,
    'aria-expanded': open,
    'aria-controls': open ? panelId : undefined,
  };

  return (
    <div ref={rootRef} className={cx('ds-date-picker', fullWidth && 'ds-date-picker--full-width', className)} style={style}>
      {props.input ? (
        <Input
          ref={(node) => {
            triggerRef.current = node;
          }}
          id={triggerId}
          value={text ?? (single ? formatDate(single) : '')}
          placeholder={placeholder ?? formatDate(today ?? new Date())}
          onChange={(e) => setText(e.currentTarget.value)}
          onBlur={commitText}
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') commitText();
            if (e.key === 'ArrowDown' && e.altKey) setOpen(true);
          }}
          disabled={disabled}
          aria-invalid={invalid || undefined}
          aria-label={ariaLabel}
          aria-describedby={field?.describedBy}
          action={
            <InputAction variant="ghost" aria-label={single ? `Choose a date, ${formatDate(single)}` : 'Choose a date'} {...sharedTrigger} onClick={() => setOpen(!open)}>
              {calendarIcon}
            </InputAction>
          }
        />
      ) : (
        <Button
          ref={(node: HTMLButtonElement | null) => {
            triggerRef.current = node;
          }}
          id={triggerId}
          variant="outline"
          className={cx('ds-date-picker__trigger', label === undefined && 'ds-date-picker__trigger--placeholder')}
          leadingIcon={showIcon ? calendarIcon : undefined}
          trailingIcon={chevronDown}
          disabled={disabled}
          aria-invalid={invalid || undefined}
          aria-label={ariaLabel !== undefined ? `${ariaLabel}, ${triggerText}` : undefined}
          aria-labelledby={nameLabelled}
          aria-describedby={field?.describedBy}
          {...sharedTrigger}
          onClick={() => setOpen(!open)}
        >
          {triggerText}
        </Button>
      )}
      <div
        ref={panelRef}
        id={panelId}
        role="dialog"
        aria-label={calendarProps['aria-label']}
        hidden={!open}
        className={cx('ds-date-picker__panel', align === 'end' && 'ds-date-picker__panel--end', placed === 'top' && 'ds-date-picker__panel--top')}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            event.stopPropagation();
            setOpen(false, true);
          }
        }}
      >
        {open &&
          (range ? (
            <Calendar
              key={session}
              mode="range"
              {...calendarProps}
              selected={rangeValue}
              onSelect={(r) => {
                setValue(r);
                if (r.from && r.to) setOpen(false, true);
              }}
            />
          ) : (
            <Calendar
              key={session}
              {...calendarProps}
              selected={single}
              onSelect={(d) => {
                setValue(d);
                setText(null);
                setOpen(false, true);
              }}
            />
          ))}
      </div>
      {name !== undefined &&
        (range ? (
          <>
            <input type="hidden" name={name} value={rangeValue.from ? iso(rangeValue.from) : ''} disabled={disabled} />
            <input type="hidden" name={name} value={rangeValue.to ? iso(rangeValue.to) : ''} disabled={disabled} />
          </>
        ) : (
          <input type="hidden" name={name} value={single ? iso(single) : ''} disabled={disabled} />
        ))}
    </div>
  );
}
