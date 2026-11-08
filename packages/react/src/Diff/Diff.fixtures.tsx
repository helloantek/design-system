import type { ReactNode } from 'react';
import { DiffLine, DiffToken, DiffWord, diffWords, type DiffRow, type DiffTokenKind } from './Diff';

// Story helpers: a small TypeScript/JSON highlighter for the demos (not a parser) and a renderer that turns diffLines
// rows into DiffLines, with the changed words of paired removed and added lines marked.

const KEYWORDS = new Set(['const', 'let', 'var', 'for', 'of', 'in', 'if', 'else', 'return', 'export', 'function', 'new', 'await', 'async', 'import', 'from', 'continue', 'break', 'typeof']);
const CONSTANTS = new Set(['null', 'undefined', 'true', 'false', 'string', 'number', 'boolean']);
const TOKEN = /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|(\b\d+(?:\.\d+)*\b)|([A-Za-z_$][\w$]*)|(=>|\|\||&&|[=!+*<>-])|(\s+|.)/g;

/** Splits a line of code into DiffToken spans (keywords, strings, numbers and types, calls, keys). */
export function highlight(code: string): ReactNode[] {
  const out: ReactNode[] = [];
  let prev = '';
  let m: RegExpExecArray | null;
  TOKEN.lastIndex = 0;
  while ((m = TOKEN.exec(code))) {
    const [text, str, num, word, op] = m;
    const rest = code.slice(TOKEN.lastIndex);
    let kind: DiffTokenKind | undefined;
    if (str) kind = /^\s*:/.test(rest) ? 'constant' : 'string';
    else if (num) kind = 'constant';
    else if (op) kind = 'keyword';
    else if (word) {
      if (KEYWORDS.has(word)) kind = 'keyword';
      else if (CONSTANTS.has(word) || /^[A-Z]/.test(word) || prev === 'const' || prev === 'let') kind = 'constant';
      else if (/^\(/.test(rest)) kind = 'function';
      else if (/^\??:/.test(rest)) kind = 'variable';
    }
    out.push(kind ? (
      <DiffToken key={m.index} kind={kind}>
        {text}
      </DiffToken>
    ) : (
      text
    ));
    if (text.trim()) prev = text;
  }
  return out;
}

/** A line's code, highlighted, with the given ranges wrapped in DiffWord. */
export function codeWithWords(code: string, ranges: [number, number][] = []): ReactNode[] {
  const out: ReactNode[] = [];
  let pos = 0;
  for (const [start, end] of ranges) {
    if (start > pos) out.push(...highlight(code.slice(pos, start)).map((n, i) => <span key={`${pos}-${i}`}>{n}</span>));
    out.push(<DiffWord key={`w${start}`}>{highlight(code.slice(start, end))}</DiffWord>);
    pos = end;
  }
  if (pos < code.length) out.push(...highlight(code.slice(pos)).map((n, i) => <span key={`${pos}-${i}`}>{n}</span>));
  return out;
}

/** Changed-word ranges for each row: the n-th removed line of a change is paired with its n-th added line. */
export function wordRanges(rows: DiffRow[]): [number, number][][] {
  const ranges: [number, number][][] = rows.map(() => []);
  for (let k = 0; k < rows.length; k++) {
    if (rows[k].type === 'context') continue;
    let end = k;
    while (end < rows.length && rows[end].type !== 'context') end++;
    const removed = rows.slice(k, end).map((r, i) => ({ r, i: k + i })).filter((x) => x.r.type === 'removed');
    const added = rows.slice(k, end).map((r, i) => ({ r, i: k + i })).filter((x) => x.r.type === 'added');
    for (let p = 0; p < Math.min(removed.length, added.length); p++) {
      const before = diffWords(removed[p].r.text, added[p].r.text);
      const after = diffWords(added[p].r.text, removed[p].r.text);
      // Pairs where both lines changed more than half their text were rewritten, not edited: no words are marked.
      const changed = (rs: [number, number][], text: string) => rs.reduce((n, [a, b]) => n + b - a, 0) / Math.max(1, text.trim().length);
      if (Math.min(changed(before, removed[p].r.text), changed(after, added[p].r.text)) > 0.5) continue;
      ranges[removed[p].i] = before;
      ranges[added[p].i] = after;
    }
    k = end - 1;
  }
  return ranges;
}

/** DiffLines for diffLines rows, highlighted, with changed words marked. */
export function renderRows(rows: DiffRow[], { words = true }: { words?: boolean } = {}) {
  const ranges = words ? wordRanges(rows) : rows.map(() => []);
  return rows.map((r, i) => (
    <DiffLine key={i} type={r.type} oldNumber={r.oldNumber} newNumber={r.newNumber} number={r.type === 'removed' ? r.oldNumber : r.newNumber} indent={r.text.length - r.text.trimStart().length}>
      {codeWithWords(r.text, ranges[i])}
    </DiffLine>
  ));
}
