import { InlineDiff, type InlineDiffDecision, type InlineDiffSegment } from '@helloantek/ds-react';
import type { Renderer } from './types';

const SEGMENTS: InlineDiffSegment[] = [
  'Hi everyone, ',
  { id: 'intro', removed: 'we are very excited to announce that' },
  ' the new dashboard is live. It loads ',
  { id: 'speed', removed: 'a lot faster than before', added: 'twice as fast' },
  ' and you can export any report to CSV ',
  { id: 'csv', removed: 'with just a single', added: 'in one' },
  ' click.',
];

const DECISIONS: Record<string, Record<string, InlineDiffDecision>> = {
  Reviewing: {},
  'One accepted': { intro: 'accepted' },
  'All decided': { intro: 'accepted', speed: 'accepted', csv: 'accepted' },
};

// Maps the Sort UI 2.0 pattern "Inline Diff" (6130:2467) to code: reviewing, one accepted, all decided.
export const renderInlineDiff: Renderer = (p) => (
  <div id="target" style={{ display: 'inline-block', padding: 8, background: 'var(--ds-background)' }}>
    <InlineDiff segments={SEGMENTS} label="Suggested by AI · Make it shorter" defaultDecisions={DECISIONS[p.State] ?? {}} style={{ width: 520 }} />
  </div>
);
