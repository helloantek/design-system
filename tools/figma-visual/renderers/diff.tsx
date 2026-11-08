import { RiCodeSSlashLine } from '@remixicon/react';
import { Button, Diff, DiffActions, DiffFold, DiffLine, type DiffNumbers } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Sort UI 2.0 Diff Line (1699:107) with Figma's samples at 520 px; the variants draw no indent guides (indent 0).
const SAMPLE = {
  Context: { type: 'context', old: '18', new: '18', code: 'for (const note of queue) {' },
  Added: { type: 'added', old: '', new: '18', code: '  const saved = await api.save(note)' },
  Removed: { type: 'removed', old: '18', new: '', code: '  await api.save(note)' },
  Empty: { type: 'empty', old: '', new: '', code: '' },
  Hunk: { type: 'hunk', old: undefined, new: '', code: '@@ -21,3 +22,3 @@' },
} as const;

export const renderDiffLine: Renderer = (p) => {
  const numbers: DiffNumbers = p.Numbers === 'Single' ? 'single' : 'both';
  const s = SAMPLE[p.Type as keyof typeof SAMPLE];
  return (
    <div id="target" style={{ display: 'grid', width: 520, padding: 4, background: 'var(--ds-background)' }}>
      {p.Type === 'Folded' ? (
        <DiffFold numbers={numbers} label="Show 5 unchanged lines" />
      ) : p.Type === 'Actions' ? (
        <DiffActions numbers={numbers}>
          <Button size="xs">Accept</Button>
          <Button size="xs" variant="outline">
            Reject
          </Button>
        </DiffActions>
      ) : (
        <DiffLine type={s.type} numbers={numbers} oldNumber={s.old} newNumber={s.new} number={numbers === 'single' ? (s.type === 'removed' ? s.old : s.new) : undefined} indent={0}>
          {s.code}
        </DiffLine>
      )}
    </div>
  );
};

// Sort UI 2.0 Diff (1699:42634): its header and seven sample lines, without indent guides as in the component.
export const renderDiff: Renderer = () => (
  <div id="target" style={{ display: 'inline-flex', padding: 4, background: 'var(--ds-background)' }}>
    <Diff style={{ width: 520 }} title="src/notes/sync.ts" icon={<RiCodeSSlashLine />} added={5} removed={1}>
      <DiffLine oldNumber="18" newNumber="18" indent={0}>
        {'for (const note of queue) {'}
      </DiffLine>
      <DiffLine type="removed" oldNumber="18" indent={0}>
        {'  await api.save(note)'}
      </DiffLine>
      <DiffLine type="added" newNumber="18" indent={0}>
        {'  const saved = await api.save(note)'}
      </DiffLine>
      {[0, 1, 2, 3].map((i) => (
        <DiffLine key={i} oldNumber="18" newNumber="18" indent={0}>
          {'for (const note of queue) {'}
        </DiffLine>
      ))}
    </Diff>
  </div>
);
