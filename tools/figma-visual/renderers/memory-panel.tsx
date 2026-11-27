import { MemoryPanel, type Memory } from '@helloantek/ds-react';
import { RiFigmaFill, RiSlackFill } from '@remixicon/react';
import type { Renderer } from './types';

// The memories drawn in Figma, then those its counts include below the fold (the list scrolls).
const MEMORIES: Memory[] = [
  { id: 'ts', category: 'Preferences', text: 'Prefers TypeScript examples over plain JavaScript', source: 'From chat · Oct 12' },
  { id: 'short', category: 'Preferences', text: 'Likes short answers first, details only when asked', source: 'You added · Oct 2', paused: true },
  { id: 'inter', category: 'Preferences', text: 'Designs with Inter and a 4 px spacing grid', source: 'From Figma · Oct 7', sourceIcon: <RiFigmaFill aria-hidden /> },
  { id: 'role', category: 'Work', text: 'Product designer and front-end developer at a small studio', source: 'From chat · Sep 28' },
  { id: 'ships', category: 'Work', text: 'Ships every second Thursday', source: 'From Slack · Sep 30', sourceIcon: <RiSlackFill aria-hidden /> },
  { id: 'hours', category: 'Work', text: 'Works 9–5 Berlin time', source: 'From chat · Sep 12' },
  { id: 'ds', category: 'Projects', text: 'Builds a multi-brand design system', source: 'From chat · Oct 1' },
  { id: 'app', category: 'Projects', text: 'Is shipping a visual memory app', source: 'From chat · Oct 9' },
];

const pointAtFirst = (el: HTMLDivElement | null) => el?.querySelector<HTMLButtonElement>('.ds-memory-panel__actions .ds-button')?.focus({ focusVisible: false } as FocusOptions);
const forgetMetric = (el: HTMLDivElement | null) => {
  const button = el?.querySelector<HTMLButtonElement>('button[aria-label="Forget: Prefers metric units"]');
  if (button) queueMicrotask(() => button.click());
};

// Maps the Sort UI 2.0 pattern "Memory Panel" (6132:3066) to code: the list, editing, forgotten and off.
export const renderMemoryPanel: Renderer = (p) => {
  const style = { width: 430 };
  let el;
  let ref: ((el: HTMLDivElement | null) => void) | undefined;
  switch (p.State) {
    case 'Editing':
      el = (
        <MemoryPanel
          defaultMemories={MEMORIES.map((memory) => (memory.id === 'ts' ? { ...memory, text: 'Prefers TypeScript examples, with strict types' } : memory))}
          defaultEditing="ts"
          listMaxHeight={372}
          style={style}
        />
      );
      break;
    case 'Forgotten':
      el = <MemoryPanel defaultMemories={[...MEMORIES, { id: 'metric', category: 'Preferences', text: 'Prefers metric units', source: 'From chat · Oct 3' }]} listMaxHeight={402} style={style} />;
      ref = forgetMetric;
      break;
    case 'Off':
      el = <MemoryPanel defaultMemories={MEMORIES} defaultEnabled={false} listMaxHeight={358} style={style} />;
      break;
    default:
      el = <MemoryPanel defaultMemories={MEMORIES} listMaxHeight={378} style={style} />;
      ref = pointAtFirst;
  }
  return (
    <div id="target" ref={ref} style={{ display: 'inline-block', padding: 8, background: 'var(--ds-background)' }}>
      {el}
    </div>
  );
};
