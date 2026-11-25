import { ModelPicker, type ModelPickerModel } from '@helloantek/ds-react';
import { RiClaudeFill, RiGeminiFill } from '@remixicon/react';
import { useEffect, useRef, type ReactNode } from 'react';
import type { Renderer } from './types';

const MODELS: ModelPickerModel[] = [
  { value: 'haiku', label: 'Haiku 4.5', description: 'Quick answers, everyday tasks', icon: <RiClaudeFill />, speed: 5, quality: 3, cost: 1, note: 'First word in ~1 s · $1 per 1M tokens' },
  { value: 'sonnet', label: 'Sonnet 4.5', description: 'Most work: writing, code, analysis', icon: <RiClaudeFill />, speed: 3, quality: 4, cost: 3, note: 'First word in ~4 s · $3 per 1M tokens' },
  { value: 'opus', label: 'Opus 4.1', description: 'Hard problems, long documents', icon: <RiClaudeFill />, speed: 1, quality: 5, cost: 5, note: 'First word in ~2 s · $15 per 1M tokens' },
  { value: 'gemini', label: 'Gemini 2.5 Pro', description: 'Very long files and video', icon: <RiGeminiFill />, speed: 3, quality: 4, cost: 3, note: 'First word in ~3 s · $2.50 per 1M tokens' },
];

/** Points the mouse at one model once rendered (Figma "pointing at Opus"). */
function Pointing({ label, children }: { label: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const option = [...(ref.current?.querySelectorAll('[role="option"]') ?? [])].find((o) => o.textContent?.startsWith(label));
    option?.dispatchEvent(new MouseEvent('mousemove', { bubbles: true }));
  }, [label]);
  return <div ref={ref}>{children}</div>;
}

// Maps the Sort UI 2.0 pattern "Model Picker" (6128:2365) to code: the menu open, pointing at Opus, and with extended
// thinking on. The menu opens under its trigger at the trigger's start.
export const renderModelPicker: Renderer = (p) => (
  <div id="target" style={{ width: 360, height: 440, padding: 8, background: 'var(--ds-background)' }}>
    {p.State === 'Thinking' ? (
      <ModelPicker models={MODELS} defaultValue="sonnet" defaultThinking align="start" defaultOpen />
    ) : (
      <Pointing label="Opus">
        <ModelPicker models={MODELS} defaultValue="sonnet" defaultThinking={false} align="start" defaultOpen />
      </Pointing>
    )}
  </div>
);
