import { RiDriveFill, RiFileSearchLine, RiGlobalLine, RiNotionFill, RiPencilLine, RiSlackFill, RiSparkling2Fill } from '@remixicon/react';
import { ThinkingNote, ThinkingSources, ThinkingState, ThinkingStep } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps the Sort UI 2.0 pattern "Thinking State" (6127:2219) to code with its sample content, 480 px wide.
const sources = [
  { label: 'Notion – Refund policy', icon: <RiNotionFill aria-hidden /> },
  { label: 'Slack – #support', icon: <RiSlackFill aria-hidden /> },
  { label: 'Drive – orders-2026.csv', icon: <RiDriveFill aria-hidden /> },
];
const thought = <ThinkingStep icon={<RiSparkling2Fill aria-hidden />} label="Thought about the question" time="2 s" />;
const read = <ThinkingStep icon={<RiFileSearchLine aria-hidden />} label="Read the refund policy" detail="3 matches" time="3 s" />;

export const renderThinkingState: Renderer = (p) => {
  let el;
  switch (p.State) {
    case 'Reading':
      el = (
        <ThinkingState>
          {thought}
          <ThinkingStep icon={<RiGlobalLine aria-hidden />} label="Searched 6 sources" time="4 s">
            <ThinkingSources sources={sources} more={3} />
            <ThinkingNote>Couldn’t open GitHub – went on without it</ThinkingNote>
          </ThinkingStep>
          {read}
          <ThinkingStep status="running" label="Writing the answer" time="0:01" />
        </ThinkingState>
      );
      break;
    case 'Folded':
    case 'Opened':
      el = (
        <ThinkingState status="done" defaultOpen={p.State === 'Opened'} title="Thought for 14 s" summary="6 sources · 4 steps">
          {thought}
          <ThinkingStep icon={<RiGlobalLine aria-hidden />} label="Searched 6 sources" time="4 s">
            <ThinkingSources sources={sources} more={3} />
          </ThinkingStep>
          {read}
          <ThinkingStep icon={<RiPencilLine aria-hidden />} label="Wrote the answer" time="5 s" />
        </ThinkingState>
      );
      break;
    default:
      el = (
        <ThinkingState>
          {thought}
          <ThinkingStep status="running" label="Searching" time="0:04">
            <ThinkingSources sources={sources} more={3} />
          </ThinkingStep>
        </ThinkingState>
      );
  }
  return (
    <div id="target" style={{ width: 480, padding: 8, background: 'var(--ds-background)' }}>
      {el}
    </div>
  );
};
