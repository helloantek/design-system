import type React from 'react';
import { Calendar, type CalendarCaptionLayout } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Figma's sample month: March 2026, today the 17th; the 27th selected, or the 20th to the 27th as a range.
const march = new Date(2026, 2, 1);
const today = new Date(2026, 2, 17);

export const renderCalendar: Renderer = (p) => (
  <div id="target" style={{ width: 'fit-content', padding: 16, background: 'var(--ds-background)' }}>
    {p.Mode === 'range' ? (
      <Calendar mode="range" variant={p.Type === 'flat' ? 'flat' : 'panel'} month={march} today={today} defaultSelected={{ from: new Date(2026, 2, 20), to: new Date(2026, 2, 27) }} />
    ) : (
      <Calendar variant={p.Type === 'flat' ? 'flat' : 'panel'} month={march} today={today} defaultSelected={new Date(2026, 2, 27)} />
    )}
  </div>
);

// Sort UI 2.0 Calendar Navigation: a flat Calendar whose month is 220 + 24 px wide, so its navigation row is 220 px.
export const renderCalendarNavigation: Renderer = (p) => (
  <div id="target" style={{ width: 'fit-content', padding: 16, background: 'var(--ds-background)' }}>
    <Calendar variant="flat" month={march} today={today} captionLayout={p.Variant as CalendarCaptionLayout} style={{ '--calendar-month-width': '244px' } as React.CSSProperties} />
  </div>
);

// Sort UI 2.0 Calendar Day: one 28 px day cell with the ds-css markup, between hidden neighbours.
export const renderCalendarDay: Renderer = (p) => {
  const range = { 'range-start': 'ds-calendar__cell--range-start', 'range-middle': 'ds-calendar__cell--range-middle', 'range-end': 'ds-calendar__cell--range-end' }[p.Selection] ?? '';
  const pressed = p.Selection === 'selected' || p.Selection === 'range-start' || p.Selection === 'range-end';
  const dayClass = ['ds-calendar__day', p.Day === 'today' && 'ds-calendar__day--today', p.Day === 'outside' && 'ds-calendar__day--outside'].filter(Boolean).join(' ');
  const hidden = <div className="ds-calendar__cell" style={{ width: 28, visibility: 'hidden' }} />;
  return (
    <div id="target" className="ds-calendar ds-calendar--flat" style={{ padding: 16, background: 'var(--ds-background)' }}>
      <div style={{ display: 'flex' }}>
        {hidden}
        <div className={`ds-calendar__cell ds-calendar__cell--target ${range}`} style={{ width: 28 }}>
          <button type="button" className={dayClass} aria-pressed={pressed} disabled={p.Day === 'disabled'}>
            17
          </button>
        </div>
        {hidden}
      </div>
    </div>
  );
};
