import { Alert, Button } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps the Sort UI 2.0 Alert to code with the Figma sample slots: a 448 px alert with a 17.3 px Lucide circle-alert
// (1.25 px stroke), the title, the description and an sm action (Outline "View" for Default, Ghost "Retry" for
// Destructive). The page background sits behind it.
const ICON = 17.3;
const circleAlert = (
  <svg viewBox="0 0 24 24" width={ICON} height={ICON} fill="none" stroke="currentColor" strokeWidth={(1.25 * 24) / ICON} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v4M12 16h.01" />
  </svg>
);

export const renderAlert: Renderer = (p) => {
  const destructive = p.Variant === 'Destructive';
  return (
    <div id="target" style={{ width: 'fit-content', padding: 8, background: 'var(--ds-background)' }}>
      <Alert
        variant={destructive ? 'destructive' : 'default'}
        style={{ width: 448 }}
        icon={circleAlert}
        title="Booking confirmed"
        description="Your stay at Casa is booked for Sep 18 – 21."
        action={<Button variant={destructive ? 'ghost' : 'outline'} size="sm">{destructive ? 'Retry' : 'View'}</Button>}
      />
    </div>
  );
};
