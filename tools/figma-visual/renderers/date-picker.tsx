import { DatePicker, Field } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Sort UI 2.0 Date Picker demos: a 240 px Field with the picker open, in the 240 × 368 box Figma's demo frame has.
export const renderDatePicker: Renderer = (p) => (
  <div style={{ padding: 24 }}>
    <div id="target" style={{ width: 240, height: 368 }}>
      {p.Demo === 'Input' ? (
        <Field label="Subscription date">
          <DatePicker input defaultOpen defaultValue={new Date(2026, 8, 20)} today={new Date(2026, 2, 17)} calendarWidth="240px" />
        </Field>
      ) : (
        <Field label="Review due">
          <DatePicker defaultOpen defaultValue={new Date(2026, 2, 27)} today={new Date(2026, 2, 17)} calendarWidth="240px" />
        </Field>
      )}
    </div>
  </div>
);
