import { Avatar, Bubble, Message } from '@helloantek/ds-react';
import type { CSSProperties } from 'react';
import type { Renderer } from './types';

// Sort UI 2.0 Message (348:64) with Figma's samples, 448 px wide on the page background. Align=Start: Jonas Lindqvist,
// "JL" on palette orange, a Muted bubble, "Today, 9:02 AM". Align=End: Mira Okafor, "M" on palette lime, a Default
// bubble, "9:05 AM · Seen by Jonas and Priya". Footer=False drops the footer.
const avatar = (initials: string, hue: string) => (
  <Avatar initials={initials} style={{ '--avatar-fill': `var(--ds-palette-${hue}-solid)`, '--avatar-ink': 'var(--ds-primary-foreground)' } as CSSProperties} />
);

export const renderMessage: Renderer = (p) => {
  const end = p.Align === 'End';
  const footer = p.Footer === 'True';
  return (
    <div id="target" style={{ width: 448, background: 'var(--ds-background)' }}>
      {end ? (
        <Message align="end" avatar={avatar('M', 'lime')} sender="Mira Okafor" footer={footer ? '9:05 AM · Seen by Jonas and Priya' : undefined}>
          <Bubble>Great. Is Billing blocked on the sticky-header variant, or on capacity?</Bubble>
        </Message>
      ) : (
        <Message avatar={avatar('JL', 'orange')} sender="Jonas Lindqvist" footer={footer ? 'Today, 9:02 AM' : undefined}>
          <Bubble variant="muted">Biggest jump was Data Table — Checkout replaced their last three local tables. Only Billing is still on the legacy grid.</Bubble>
        </Message>
      )}
    </div>
  );
};
