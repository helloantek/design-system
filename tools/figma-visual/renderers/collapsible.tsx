import { Avatar, Collapsible, CollapsibleContent, CollapsibleTrigger } from '@helloantek/ds-react';
import type { CSSProperties } from 'react';
import { avatarImage } from '../../../packages/react/src/Avatar/Avatar.fixtures';
import type { Renderer } from './types';

// Sort UI 2.0 Collapsible (297:90): State=Closed / Open, 448 px wide, with Figma's sample trigger and two comments.
const text: CSSProperties = { fontFamily: 'var(--ds-font-sans)', fontSize: 14, lineHeight: '20px', letterSpacing: '-0.005em', margin: 0 };
const comments = [
  { name: 'Hana Mizuno', time: 'Yesterday', text: 'Booked the cabin with the hot tub. Check-in is after 4 PM, so let’s hike first.', src: avatarImage },
  { name: 'Pablo Reyes', time: '2 days ago', text: 'I can drive four of us from Oakland. Leaving at 7 AM to beat traffic on I-80.', initials: 'P' },
];

export const renderCollapsible: Renderer = (p) => {
  const open = p.State === 'Open';
  return (
    <div style={{ padding: 24, background: 'var(--ds-background)' }}>
      <Collapsible id="target" defaultOpen={open} style={{ width: 448 }}>
        <CollapsibleTrigger>{open ? 'Hide replies' : 'Show replies'}</CollapsibleTrigger>
        <CollapsibleContent>
          {comments.map((c) => (
            <div key={c.name} style={{ display: 'flex', gap: 12 }}>
              <Avatar size="sm" src={c.src} initials={c.initials} name={c.name} style={c.src ? undefined : { background: 'var(--ds-palette-orange-solid)', color: 'var(--ds-primary-foreground)' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ ...text, color: 'var(--ds-foreground)', fontWeight: 500 }}>{c.name}</span>
                  <span style={{ ...text, color: 'var(--ds-muted-foreground)', fontSize: 12, lineHeight: '16px' }}>{c.time}</span>
                </div>
                <p style={{ ...text, color: 'var(--ds-muted-foreground)' }}>{c.text}</p>
              </div>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
