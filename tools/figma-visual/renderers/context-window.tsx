import { ContextWindow, type ContextWindowItem, type ContextWindowPart } from '@helloantek/ds-react';
import { RiClaudeFill } from '@remixicon/react';
import { useEffect, useRef, type ReactNode } from 'react';
import type { Renderer } from './types';

const FILES: ContextWindowItem[] = [
  { id: 'refund', label: 'refund-policy.md', tokens: 18_200 },
  { id: 'orders', label: 'orders-2026.csv', tokens: 41_600 },
  { id: 'guide', label: 'support-guide.pdf', tokens: 9_100 },
];
const ONE_FILE: ContextWindowItem[] = [{ id: 'orders', label: 'orders-2026.csv', tokens: 46_100 }];

const parts = (files: ContextWindowItem[], conversation: number, compacting = false): ContextWindowPart[] => [
  { id: 'system', label: 'System prompt', tokens: 4_200 },
  { id: 'tools', label: 'Tools', tokens: 12_800 },
  { id: 'files', label: 'Files', tokens: files.reduce((s, f) => s + f.tokens, 0), items: files },
  { id: 'conversation', label: 'Conversation', tokens: conversation, onCompact: () => {}, compacting },
  { id: 'memory', label: 'Memory', tokens: 3_900 },
];

/** Opens Files once rendered (Figma "Files opened"), then takes focus away as Figma draws none. */
function Opened({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current?.querySelector<HTMLButtonElement>('.ds-context-window__toggle')?.click();
    requestAnimationFrame(() => (document.activeElement as HTMLElement | null)?.blur());
  }, []);
  return <div ref={ref}>{children}</div>;
}

// Maps the Sort UI 2.0 pattern "Context Window" (6128:2518) to code: in use, files opened, nearly full, compacting.
export const renderContextWindow: Renderer = (p) => {
  const common = { total: 200_000, model: 'sonnet-4-5', modelIcon: <RiClaudeFill />, onNewChat: () => {}, onRemoveItem: () => {}, style: { width: 380 } };
  let el;
  switch (p.State) {
    case 'Files open':
      el = <ContextWindow {...common} parts={parts(FILES, 46_600)} />;
      break;
    case 'Nearly full':
      el = <ContextWindow {...common} parts={parts(ONE_FILE, 108_600)} />;
      break;
    case 'Compacting':
      el = <ContextWindow {...common} parts={parts(ONE_FILE, 22_100, true)} />;
      break;
    default:
      el = <ContextWindow {...common} parts={parts(FILES, 46_600)} />;
  }
  return (
    <div id="target" style={{ display: 'inline-block', padding: 8, background: 'var(--ds-background)' }}>
      {p.State === 'Files open' ? <Opened>{el}</Opened> : el}
    </div>
  );
};
