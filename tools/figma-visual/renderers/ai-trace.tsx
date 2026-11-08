import { RiSearchLine } from '@remixicon/react';
import { TraceCollapsible, TraceContent, TraceLine, type TraceStatus } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Sort UI 2.0 Trace Line (3030:157) with Figma's sample, 'Searched for minimumReleaseAge' and a search icon (Remix
// here, lucide in Figma): Type=Line is a TraceLine, Trigger and Trigger open a closed and an open TraceCollapsible.
// Hover and Focus come from the pointer and the keyboard.
export const renderAITrace: Renderer = (p) => {
  const status = p.Status.toLowerCase() as TraceStatus;
  const title = 'Searched for minimumReleaseAge';
  return (
    <div id="target" style={{ display: 'inline-flex', padding: 4, background: 'var(--ds-background)' }}>
      {p.Type === 'Line' ? (
        <TraceLine status={status} icon={<RiSearchLine />}>
          {title}
        </TraceLine>
      ) : (
        <TraceCollapsible status={status} icon={<RiSearchLine />} title={title} defaultOpen={p.Type === 'Trigger open'} />
      )}
    </div>
  );
};

// Sort UI 2.0 Trace Content (3031:26) with Figma's sample text, 480 px wide.
export const renderAITraceContent: Renderer = () => (
  <div id="target" style={{ display: 'inline-flex', padding: 4, background: 'var(--ds-background)' }}>
    <TraceContent style={{ width: 480 }}>
      <p>Found 2 matches in packages/web/package.json and pnpm-workspace.yaml.</p>
    </TraceContent>
  </div>
);
