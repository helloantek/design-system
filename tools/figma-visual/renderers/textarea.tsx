import { Textarea } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps Sort UI 2.0 Textarea properties to props, with the sample texts of the Figma file (a 280 px box).
// Focus is produced by focusing the textarea in check.mjs.
export const renderTextarea: Renderer = (p) => (
  <div id="target" style={{ width: 280 }}>
    <Textarea
      aria-label="Textarea"
      placeholder="Placeholder"
      defaultValue={p.Value === 'Filled' ? 'Adds a vertical orientation and keeps focus when the active tab is removed.' : undefined}
      invalid={p.State === 'Invalid'}
      disabled={p.State === 'Disabled'}
    />
  </div>
);
