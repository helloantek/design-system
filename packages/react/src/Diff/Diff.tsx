import { createContext, useContext, type ButtonHTMLAttributes, type CSSProperties, type HTMLAttributes, type ReactNode, type Ref } from 'react';
import { RiExpandVerticalLine } from '@remixicon/react';

// Styles live in @helloantek/ds-css (classes ds-diff*); these components render the markup of a file's changes:
// a card with the file's header, then lines with their numbers, signs and code. `diffLines` turns two versions of a
// text into those lines.

const cx = (...names: (string | false | undefined)[]) => names.filter(Boolean).join(' ');

/** Figma "Type" of a line with code (Folded and Actions are DiffFold and DiffActions). */
export type DiffLineType = 'context' | 'added' | 'removed' | 'empty' | 'hunk';
/** Figma "Numbers": an old and a new number, or one. */
export type DiffNumbers = 'both' | 'single';

const NumbersContext = createContext<DiffNumbers>('both');

export interface DiffProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  ref?: Ref<HTMLElement>;
  /** Figma "Title": the file's path. */
  title: ReactNode;
  /** Figma "Icon": the file's icon, 16 px, `currentColor`. */
  icon?: ReactNode;
  /** Figma "Added" and "Removed": the counts in the header. */
  added?: number;
  removed?: number;
  /** Figma "Numbers" of its lines (default `both`; DiffSplit's sides are always `single`). */
  numbers?: DiffNumbers;
  /** Figma "content": DiffLine, DiffFold, DiffActions, or one DiffSplit. */
  children: ReactNode;
}

/** Figma "Diff": a file's changes in a card. */
export function Diff({ title, icon, added, removed, numbers = 'both', children, className, ...rest }: DiffProps) {
  const split = Array.isArray(children) ? false : (children as { type?: unknown } | null)?.type === DiffSplit;
  return (
    <figure {...rest} className={cx('ds-diff', className)}>
      <figcaption className="ds-diff__header">
        {icon != null && (
          <span className="ds-diff__icon" aria-hidden>
            {icon}
          </span>
        )}
        <span className="ds-diff__title">{title}</span>
        {(added != null || removed != null) && (
          <span className="ds-diff__stats">
            {added != null && (
              <span className="ds-diff__added" aria-label={`${added} added`}>
                +{added}
              </span>
            )}
            {removed != null && (
              <span className="ds-diff__removed" aria-label={`${removed} removed`}>
                −{removed}
              </span>
            )}
          </span>
        )}
      </figcaption>
      <NumbersContext.Provider value={numbers}>
        {split ? (
          children
        ) : (
          // Focusable so the keyboard can scroll long lines sideways.
          <div className="ds-diff__content" tabIndex={0}>
            <div className="ds-diff__lines">{children}</div>
          </div>
        )}
      </NumbersContext.Provider>
    </figure>
  );
}

export interface DiffSplitProps extends HTMLAttributes<HTMLDivElement> {
  /** The old file's lines (left). */
  before: ReactNode;
  /** The new file's lines (right). */
  after: ReactNode;
}

/** The split view: old lines and new lines side by side, each with one number. */
export function DiffSplit({ before, after, className, ...rest }: DiffSplitProps) {
  return (
    <div {...rest} className={cx('ds-diff__content', 'ds-diff__split', className)}>
      <NumbersContext.Provider value="single">
        <div className="ds-diff__side" tabIndex={0}>
          <div className="ds-diff__lines">{before}</div>
        </div>
        <div className="ds-diff__side" tabIndex={0}>
          <div className="ds-diff__lines">{after}</div>
        </div>
      </NumbersContext.Provider>
    </div>
  );
}

function Gutter({ numbers, oldNumber, newNumber, number, rule }: { numbers: DiffNumbers; oldNumber?: ReactNode; newNumber?: ReactNode; number?: ReactNode; rule?: boolean }) {
  return (
    <span className="ds-diff-line__gutter">
      {numbers === 'both' ? (
        <>
          <span className="ds-diff-line__number ds-diff-line__number--old">{oldNumber}</span>
          <span className="ds-diff-line__number ds-diff-line__number--new">{newNumber}</span>
        </>
      ) : (
        <span className="ds-diff-line__number">{number ?? newNumber ?? oldNumber}</span>
      )}
      {rule && <span className="ds-diff-line__rule" aria-hidden />}
    </span>
  );
}

const SIGNS: Partial<Record<DiffLineType, string>> = { context: ' ', added: '+', removed: '-' };
const STATUS: Partial<Record<DiffLineType, string>> = { added: 'Added: ', removed: 'Removed: ' };

export interface DiffLineProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
  /** Figma "Type" (default `context`). */
  type?: DiffLineType;
  /** Figma "Old" and "New": the line's numbers (Numbers=Both). A hunk's old number defaults to "⋯". */
  oldNumber?: ReactNode;
  newNumber?: ReactNode;
  /** Figma "Number" (Numbers=Single). */
  number?: ReactNode;
  /** Overrides the Diff's `numbers`. */
  numbers?: DiffNumbers;
  /** Leading spaces that get indent guides; by default counted from a string `children`. 0 draws none. */
  indent?: number;
  /** Figma "content": the code, plain or with DiffToken and DiffWord inside. */
  children?: ReactNode;
}

/** Figma "Diff Line": one line of a diff. */
export function DiffLine({ type = 'context', oldNumber, newNumber, number, numbers: numbersProp, indent, children, className, style, ...rest }: DiffLineProps) {
  const inherited = useContext(NumbersContext);
  const numbers = numbersProp ?? inherited;
  const spaces = indent ?? (typeof children === 'string' ? children.length - children.trimStart().length : 0);
  const sign = SIGNS[type];
  return (
    <div {...rest} className={cx('ds-diff-line', `ds-diff-line--${type}`, className)} style={style}>
      <Gutter numbers={numbers} oldNumber={type === 'hunk' ? (oldNumber ?? '⋯') : oldNumber} newNumber={newNumber} number={type === 'hunk' ? (number ?? '⋯') : number} rule={type === 'added' || type === 'removed'} />
      <span className="ds-diff-line__body">
        {sign != null && (
          <span className="ds-diff-line__sign" aria-hidden>
            {sign}
          </span>
        )}
        <code className="ds-diff-line__code" style={spaces ? ({ '--diff-indent': spaces } as CSSProperties) : undefined}>
          {STATUS[type] && <span className="ds-diff-line__status">{STATUS[type]}</span>}
          {type !== 'empty' && children}
        </code>
      </span>
    </div>
  );
}

export interface DiffFoldProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  ref?: Ref<HTMLButtonElement>;
  /** Figma "Label" (e.g. "Show 5 unchanged lines"). */
  label: ReactNode;
  numbers?: DiffNumbers;
  /** The unfold icon (default Remix's expand-vertical). */
  icon?: ReactNode;
}

/** Figma "Diff Line" Type=Folded: unchanged lines, folded; a button that shows them. */
export function DiffFold({ label, numbers: numbersProp, icon, className, ...rest }: DiffFoldProps) {
  const inherited = useContext(NumbersContext);
  const numbers = numbersProp ?? inherited;
  const iconEl = (
    <span className="ds-diff-line__icon" aria-hidden>
      {icon ?? <RiExpandVerticalLine />}
    </span>
  );
  return (
    <button type="button" {...rest} className={cx('ds-diff-line', 'ds-diff-line--folded', className)}>
      <Gutter numbers={numbers} oldNumber={iconEl} number={iconEl} />
      <span className="ds-diff-line__body">
        <span className="ds-diff-line__label">{label}</span>
      </span>
    </button>
  );
}

export interface DiffActionsProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
  numbers?: DiffNumbers;
  /** Figma "actions": xs buttons, e.g. Accept (Default) and Reject (Outline). */
  children: ReactNode;
}

/** Figma "Diff Line" Type=Actions: buttons under a change. */
export function DiffActions({ numbers: numbersProp, children, className, ...rest }: DiffActionsProps) {
  const inherited = useContext(NumbersContext);
  const numbers = numbersProp ?? inherited;
  return (
    <div {...rest} className={cx('ds-diff-line', 'ds-diff-line--actions', className)}>
      <Gutter numbers={numbers} />
      <span className="ds-diff-line__body">
        <span className="ds-diff-line__actions">{children}</span>
      </span>
    </div>
  );
}

/** A changed word inside a line (tinted again, in the line's colour). */
export function DiffWord({ className, ...rest }: HTMLAttributes<HTMLElement>) {
  return <mark {...rest} className={cx('ds-diff-word', className)} />;
}

/** Figma "syntax" colours. */
export type DiffTokenKind = 'keyword' | 'string' | 'constant' | 'function' | 'variable' | 'tag' | 'comment';

/** A highlighted piece of code. */
export function DiffToken({ kind, className, ...rest }: HTMLAttributes<HTMLSpanElement> & { kind: DiffTokenKind }) {
  return <span {...rest} className={cx('ds-diff-token', `ds-diff-token--${kind}`, className)} />;
}

/** One line of `diffLines`: its type, its numbers in the old and new text, and its text. */
export interface DiffRow {
  type: 'context' | 'added' | 'removed';
  oldNumber?: number;
  newNumber?: number;
  text: string;
}

/** Compares two texts line by line (longest common subsequence) and returns the unified rows. */
export function diffLines(before: string, after: string): DiffRow[] {
  const a = before.split('\n');
  const b = after.split('\n');
  const n = a.length;
  const m = b.length;
  // lcs[i][j]: length of the longest common subsequence of a[i..] and b[j..].
  const lcs: number[][] = Array.from({ length: n + 1 }, () => new Array<number>(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) lcs[i][j] = a[i] === b[j] ? lcs[i + 1][j + 1] + 1 : Math.max(lcs[i + 1][j], lcs[i][j + 1]);
  const rows: DiffRow[] = [];
  let i = 0;
  let j = 0;
  while (i < n || j < m) {
    if (i < n && j < m && a[i] === b[j]) {
      rows.push({ type: 'context', oldNumber: i + 1, newNumber: j + 1, text: a[i] });
      i++;
      j++;
    } else if (j < m && (i === n || lcs[i][j + 1] >= lcs[i + 1][j])) {
      rows.push({ type: 'added', newNumber: j + 1, text: b[j] });
      j++;
    } else {
      rows.push({ type: 'removed', oldNumber: i + 1, text: a[i] });
      i++;
    }
  }
  // Removed lines first within each change, as diffs show them.
  for (let k = 0; k < rows.length; k++) {
    if (rows[k].type === 'context') continue;
    let end = k;
    while (end < rows.length && rows[end].type !== 'context') end++;
    const change = rows.slice(k, end);
    rows.splice(k, change.length, ...change.filter((r) => r.type === 'removed'), ...change.filter((r) => r.type === 'added'));
    k = end - 1;
  }
  return rows;
}

/** The words of `line` that are not in `other` (longest common subsequence of words, spaces and symbols), as [start, end) ranges for DiffWord. */
export function diffWords(line: string, other: string): [number, number][] {
  const split = (t: string) => t.match(/\w+|\s+|[^\w\s]/g) ?? [];
  const a = split(line);
  const b = split(other);
  const lcs: number[][] = Array.from({ length: a.length + 1 }, () => new Array<number>(b.length + 1).fill(0));
  for (let i = a.length - 1; i >= 0; i--) for (let j = b.length - 1; j >= 0; j--) lcs[i][j] = a[i] === b[j] ? lcs[i + 1][j + 1] + 1 : Math.max(lcs[i + 1][j], lcs[i][j + 1]);
  const ranges: [number, number][] = [];
  let pos = 0;
  let i = 0;
  let j = 0;
  while (i < a.length) {
    if (j < b.length && a[i] === b[j]) {
      pos += a[i].length;
      i++;
      j++;
    } else if (j < b.length && lcs[i][j + 1] >= lcs[i + 1][j]) {
      j++;
    } else {
      const last = ranges[ranges.length - 1];
      if (last && last[1] === pos) last[1] += a[i].length;
      else ranges.push([pos, pos + a[i].length]);
      pos += a[i].length;
      i++;
    }
  }
  return ranges;
}
