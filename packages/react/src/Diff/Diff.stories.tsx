import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type CSSProperties, type ReactNode } from 'react';
import { RiCodeSSlashLine, RiFileCodeLine } from '@remixicon/react';
import { Button } from '../Button';
import { Diff, DiffActions, DiffFold, DiffLine, diffLines, DiffSplit, type DiffLineType, type DiffRow } from './Diff';
import { codeWithWords, highlight, renderRows, wordRanges } from './Diff.fixtures';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=1699-2';

const meta = {
  title: 'Components/Diff',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Diff Line** and **Diff** ([open in Figma](${FIGMA_URL})): a file's changes. \`Diff\` is the card (\`title\`, \`icon\`, \`added\` and \`removed\` counts, \`numbers\` \`both\` · \`single\`); \`DiffLine\` is a line (\`type\` \`context\` · \`added\` · \`removed\` · \`empty\` · \`hunk\`, \`oldNumber\`/\`newNumber\` or \`number\`, indent guides from its leading spaces); \`DiffFold\` (Type=Folded) is a button that shows unchanged lines; \`DiffActions\` (Type=Actions) holds buttons under a change; \`DiffSplit\` shows old and new side by side. \`DiffToken\` colours syntax and \`DiffWord\` marks a changed word. \`diffLines(before, after)\` and \`diffWords(line, other)\` compute the lines and changed words from two versions. The highlighter in the stories is a small demo, not part of the library.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const width = (w = 520): CSSProperties => ({ width: `min(${w}px, calc(100vw - 32px))` });
const codeIcon = <RiCodeSSlashLine />;

type PlaygroundArgs = { type: DiffLineType; numbers: 'both' | 'single'; code: string; guides: boolean };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { type: 'added', numbers: 'both', code: '  const saved = await api.save(note)', guides: true },
  argTypes: {
    type: { name: 'Type', control: 'inline-radio', options: ['context', 'added', 'removed', 'empty', 'hunk'] },
    numbers: { name: 'Numbers', control: 'inline-radio', options: ['both', 'single'] },
    code: { name: 'Code' },
    guides: { name: 'Indent guides' },
  },
  render: ({ type, numbers, code, guides }) => (
    <Diff style={width()} title="src/notes/sync.ts" icon={codeIcon} added={1} removed={0} numbers={numbers}>
      <DiffLine oldNumber={17} newNumber={17} number={17} indent={guides ? undefined : 0}>
        {'for (const note of queue) {'}
      </DiffLine>
      <DiffLine type={type} oldNumber={type === 'added' ? undefined : 18} newNumber={type === 'removed' ? undefined : 18} number={18} indent={guides ? code.length - code.trimStart().length : 0}>
        {type === 'hunk' ? code : highlight(code)}
      </DiffLine>
    </Diff>
  ),
};

/** Builds DiffLines from compact rows: [type, number, code]. */
function lines(rows: [DiffRow['type'], number, string][]) {
  return renderRows(rows.map(([type, n, text]) => ({ type, oldNumber: n, newNumber: n, text })));
}

/** Figma demo "Diff": a change that retries a failed save, in one column of numbers. */
export const Demo: StoryObj = {
  render: () => (
    <Diff style={width()} title="src/notes/sync.ts" icon={codeIcon} added={5} removed={1} numbers="single">
      {lines([
        ['context', 18, '  for (const note of queue) {'],
        ['removed', 19, '    await api.save(note)'],
        ['added', 19, '    const saved = await api.save(note).catch(() => null)'],
        ['added', 20, '    if (!saved) {'],
        ['added', 21, '      offline.push(note)'],
        ['added', 22, '      continue'],
        ['added', 23, '    }'],
        ['context', 24, '    synced.add(note.id)'],
        ['context', 25, '  }'],
      ])}
    </Diff>
  ),
};

/** One side of the split demo: rows with a type, number and code; `empty` and `hunk` rows take no number. */
function side(rows: [DiffLineType, number | null, string][]): ReactNode {
  const asRows: DiffRow[] = rows.map(([type, n, text]) => ({ type: type === 'added' || type === 'removed' ? type : 'context', newNumber: n ?? undefined, oldNumber: n ?? undefined, text }));
  return rows.map(([type, n, text], i) => (
    <DiffLine key={i} type={type} number={type === 'hunk' ? undefined : (n ?? undefined)} indent={text.length - text.trimStart().length}>
      {type === 'hunk' ? text : codeWithWords(text, type === 'empty' ? [] : wordRanges(asRows)[i])}
    </DiffLine>
  ));
}

/** Figma demo "Split": the old file on the left, the new one on the right. */
export const Split: StoryObj = {
  render: () => (
    <Diff style={width(600)} title="src/billing/invoice.ts" icon={codeIcon} added={5} removed={4}>
      <DiffSplit
        before={side([
          ['context', 4, 'export function invoiceTotal(items: LineItem[]) {'],
          ['removed', 5, '  let total = 0'],
          ['removed', 6, '  for (const item of items) total += item.price'],
          ['removed', 7, '  return total'],
          ['empty', null, ''],
          ['context', 8, '}'],
          ['context', 9, 'export function dueDate(issued: Date) {'],
          ['hunk', null, '@@ -21,3 +22,3 @@'],
          ['context', 21, 'export function invoiceTitle(invoice: Invoice) {'],
          ['removed', 22, '  return "Invoice " + invoice.number'],
          ['context', 23, '}'],
        ])}
        after={side([
          ['context', 4, 'export function invoiceTotal(items: LineItem[]) {'],
          ['added', 5, '  return items.reduce('],
          ['added', 6, '    (total, item) => total + item.price * item.quantity,'],
          ['added', 7, '    0'],
          ['added', 8, '  )'],
          ['context', 9, '}'],
          ['context', 10, 'export function dueDate(issued: Date) {'],
          ['hunk', null, '@@ -21,3 +22,3 @@'],
          ['context', 22, 'export function invoiceTitle(invoice: Invoice) {'],
          ['added', 23, '  return `Invoice ${invoice.number} · ${invoice.customer}`'],
          ['context', 24, '}'],
        ])}
      />
    </Diff>
  ),
};

const PACKAGE_BEFORE = `{
  "name": "notes-app",
  "version": "2.3.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build"
  },
  "dependencies": {
    "next": "15.4.0",
    "react": "19.1.0"
  }
}`;

const PACKAGE_AFTER = `{
  "name": "notes-app",
  "version": "2.4.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "test": "vitest"
  },
  "dependencies": {
    "next": "16.0.0",
    "react": "19.2.0"
  }
}`;

/** Figma demo "From two versions": diffLines and diffWords compute the lines and changed words from two package.json files. */
export const FromTwoVersions: StoryObj = {
  render: () => {
    const rows = diffLines(PACKAGE_BEFORE, PACKAGE_AFTER);
    return (
      <Diff style={width(440)} title="package.json" icon={<RiFileCodeLine />} added={rows.filter((r) => r.type === 'added').length} removed={rows.filter((r) => r.type === 'removed').length}>
        {renderRows(rows)}
      </Diff>
    );
  },
};

const NOTES_FILE = [
  'import { slugify } from "./slugify"',
  '',
  'export type Note = {',
  '  id: string',
  '  createdAt: Date',
  '  title: string',
  '  body: string',
  '  updatedAt: Date',
  '}',
  '',
  'export function createNote(): Note {',
  '  return {',
  '    id: crypto.randomUUID(),',
  '    createdAt: new Date(),',
  '    title,',
  '    body: "",',
  '    updatedAt: new Date(),',
  '  }',
  '}',
];

/** Figma demo "Folded context": unchanged lines stay folded until their button shows them. */
export const FoldedContext: StoryObj = {
  render: function Render() {
    const [open, setOpen] = useState<number[]>([]);
    const fold = (id: number, count: number, hidden: [number, string][]) =>
      open.includes(id) ? (
        lines(hidden.map(([n, t]) => ['context', n, t]))
      ) : (
        <DiffFold key={`f${id}`} label={`Show ${count} unchanged lines`} onClick={() => setOpen((o) => [...o, id])} />
      );
    return (
      <Diff style={width()} title="src/notes/notes.ts" icon={codeIcon} added={3} removed={1} numbers="single">
        {fold(1, 5, NOTES_FILE.slice(0, 5).map((t, i) => [i + 1, t]))}
        {lines([
          ['context', 6, '  title: string'],
          ['context', 7, '  body: string'],
          ['added', 8, '  pinned: boolean'],
          ['context', 9, '  updatedAt: Date'],
          ['context', 10, '}'],
        ])}
        {fold(2, 4, NOTES_FILE.slice(9, 13).map((t, i) => [i + 11, t]))}
        {lines([
          ['context', 15, '    title,'],
          ['context', 16, '    body: "",'],
          ['added', 17, '    pinned: false,'],
          ['context', 18, '    updatedAt: new Date(),'],
          ['context', 19, '  }'],
        ])}
        {fold(3, 11, Array.from({ length: 11 }, (_, i) => [i + 20, i === 0 ? '}' : '']))}
        {renderRows([
          { type: 'context', newNumber: 32, text: 'export function noteUrl(note: Note) {' },
          { type: 'removed', oldNumber: 31, text: '  return "/notes/" + note.id' },
          { type: 'added', newNumber: 33, text: '  return `/notes/${slugify(note.title)}-${note.id}`' },
          { type: 'context', newNumber: 34, text: '}' },
        ])}
      </Diff>
    );
  },
};

type Hunk = { id: string; rows: DiffRow[] };

const REVIEW_HUNKS: Hunk[] = [
  {
    id: 'search',
    rows: [
      { type: 'removed', oldNumber: 2, text: '  const q = query.toLowerCase()' },
      { type: 'removed', oldNumber: 3, text: '  return notes.filter((note) => note.title.toLowerCase().includes(q))' },
      { type: 'added', newNumber: 2, text: '  const q = query.trim().toLowerCase()' },
      { type: 'added', newNumber: 3, text: '  if (!q) return notes' },
      { type: 'added', newNumber: 4, text: '  return notes.filter(' },
      { type: 'added', newNumber: 5, text: '    (note) =>' },
      { type: 'added', newNumber: 6, text: '      note.title.toLowerCase().includes(q) ||' },
      { type: 'added', newNumber: 7, text: '      note.body.toLowerCase().includes(q)' },
      { type: 'added', newNumber: 8, text: '  )' },
    ],
  },
  {
    id: 'sort',
    rows: [
      { type: 'removed', oldNumber: 7, text: '  return [...notes].sort((a, b) => b.updatedAt - a.updatedAt)' },
      { type: 'added', newNumber: 12, text: '  return [...notes].sort(' },
      { type: 'added', newNumber: 13, text: '    (a, b) => Number(b.pinned) - Number(a.pinned) || b.updatedAt - a.updatedAt' },
      { type: 'added', newNumber: 14, text: '  )' },
    ],
  },
];

/** Figma demo "Review an agent's edit": accept or reject each change; the diff keeps what you chose. */
export const ReviewAnAgentsEdit: StoryObj = {
  render: function Render() {
    const [decisions, setDecisions] = useState<Record<string, 'accepted' | 'rejected'>>({});
    const hunk = (h: Hunk) => {
      const decision = decisions[h.id];
      if (decision) {
        const kept = h.rows.filter((r) => r.type === (decision === 'accepted' ? 'added' : 'removed'));
        return renderRows(kept.map((r) => ({ ...r, type: 'context' })), { words: false });
      }
      return [
        ...renderRows(h.rows),
        <DiffActions key={`${h.id}-actions`}>
          <Button size="xs" onClick={() => setDecisions((d) => ({ ...d, [h.id]: 'accepted' }))}>
            Accept
          </Button>
          <Button size="xs" variant="outline" onClick={() => setDecisions((d) => ({ ...d, [h.id]: 'rejected' }))}>
            Reject
          </Button>
        </DiffActions>,
      ];
    };
    const pending = REVIEW_HUNKS.filter((h) => !decisions[h.id]);
    const count = (t: 'added' | 'removed') => pending.flatMap((h) => h.rows).filter((r) => r.type === t).length;
    return (
      <Diff style={width(600)} title="src/notes/search.ts" icon={codeIcon} added={count('added')} removed={count('removed')} numbers="single">
        {renderRows([{ type: 'context', newNumber: 1, text: 'export function searchNotes(notes: Note[], query: string) {' }])}
        {hunk(REVIEW_HUNKS[0])}
        {renderRows([
          { type: 'context', newNumber: 9, text: '}' },
          { type: 'context', newNumber: 10, text: '' },
          { type: 'context', newNumber: 11, text: 'export function sortNotes(notes: Note[]) {' },
        ])}
        {hunk(REVIEW_HUNKS[1])}
        {renderRows([{ type: 'context', newNumber: 15, text: '}' }])}
      </Diff>
    );
  },
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ padding: 24, background: 'var(--ds-background)' }}>
          <Diff title={`src/notes/sync.ts (${scheme})`} icon={codeIcon} added={2} removed={1} numbers="single">
            {lines([
              ['context', 18, '  for (const note of queue) {'],
              ['removed', 19, '    await api.save(note)'],
              ['added', 19, '    const saved = await api.save(note).catch(() => null)'],
              ['added', 20, '    if (!saved) continue'],
            ])}
            <DiffLine type="hunk">@@ -30,2 +31,2 @@</DiffLine>
            <DiffLine type="empty" />
            <DiffFold label="Show 6 unchanged lines" />
          </Diff>
        </div>
      ))}
    </div>
  ),
};
