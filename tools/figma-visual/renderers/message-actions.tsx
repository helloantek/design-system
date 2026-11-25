import { MessageActions } from '@helloantek/ds-react';
import { useEffect, useRef, type ReactNode } from 'react';
import type { Renderer } from './types';

/** Presses one of the bar's buttons once rendered (Copied, the Popover), then takes focus away as Figma draws none. */
function Pressed({ label, children }: { label: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current?.querySelector<HTMLButtonElement>(`[aria-label="${label}"]`)?.click();
    requestAnimationFrame(() => (document.activeElement as HTMLElement | null)?.blur());
  }, [label]);
  return <div ref={ref}>{children}</div>;
}

// Maps the Sort UI 2.0 pattern "Message Actions" (6126:2162) to code: the bar at rest, with versions, copied, rated up,
// reading aloud, and the "What was wrong?" Popover thumbs down opens.
export const renderMessageActions: Renderer = (p) => {
  const bar = { copyText: 'Answer', onRegenerate: () => {}, onReadAloudChange: () => {} };
  let el;
  switch (p.State) {
    case 'Versions':
      el = <MessageActions {...bar} version={2} versions={3} />;
      break;
    case 'Copied':
      el = (
        <Pressed label="Copy">
          <MessageActions {...bar} />
        </Pressed>
      );
      break;
    case 'Rated up':
      el = <MessageActions {...bar} defaultRating="up" />;
      break;
    case 'Reading':
      // Figma draws the wave at rest; the spec check measures the bars, so they stop moving (as with reduced motion).
      el = (
        <>
          <style>{'.ds-message-actions__wave > span { animation: none; }'}</style>
          <MessageActions {...bar} reading readTime="0:07" />
        </>
      );
      break;
    case 'What was wrong':
      el = (
        <Pressed label="Bad response">
          <MessageActions {...bar} />
        </Pressed>
      );
      break;
    default:
      el = <MessageActions {...bar} />;
  }
  return (
    <div id="target" style={{ display: 'inline-block', padding: 8, paddingBottom: p.State === 'What was wrong' ? 160 : 8, background: 'var(--ds-background)' }}>
      {el}
    </div>
  );
};
