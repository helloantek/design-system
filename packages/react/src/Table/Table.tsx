import type { HTMLAttributes, ReactNode, TdHTMLAttributes, ThHTMLAttributes } from 'react';

// Styles live in @helloantek/ds-css (classes ds-table*). A native <table> in a scroll container: header, body and
// footer rows, cells aligned left or right, selected rows, sortable column headers and a caption.

const cx = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(' ');

const icon = (path: ReactNode) => (
  <svg className="ds-table__sort-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.43} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {path}
  </svg>
);
// Figma "chevrons-up-down" (not sorted), "arrow-down" / "arrow-up" at 14 px.
const sortIcons = {
  none: icon(<path d="m4.67 10 3.33 3.33L11.33 10M4.67 6 8 2.67 11.33 6" />),
  descending: icon(<path d="M8 3.33v9.34M12.67 8 8 12.67 3.33 8" />),
  ascending: icon(<path d="M8 12.67V3.33M3.33 8 8 3.33 12.67 8" />),
};

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  /** `default`: Figma "Table". `card` (most demos): the header on the muted fill, the body in a bordered box. */
  variant?: 'default' | 'card';
  /** Figma "caption" slot, under the table. Also names the table for assistive technology. */
  caption?: ReactNode;
  /** Class names for the scroll container. */
  containerClassName?: string;
  children: ReactNode;
}

/** Sort UI 2.0 "Table". */
export function Table({ variant = 'default', caption, containerClassName, className, children, ...rest }: TableProps) {
  return (
    <div className={cx('ds-table', variant === 'card' && 'ds-table--card', containerClassName)}>
      <table {...rest} className={cx('ds-table__table', className)}>
        {caption !== undefined && <caption className="ds-table__caption">{caption}</caption>}
        {children}
      </table>
    </div>
  );
}

/** Figma "header" slot (Table Row Type=Head). */
export function TableHeader(props: HTMLAttributes<HTMLTableSectionElement>) {
  return <thead {...props} />;
}

/** Figma "body" slot (Table Row Type=Body). */
export function TableBody(props: HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody {...props} />;
}

/** Figma "footer" slot (Table Row Type=Footer). */
export function TableFooter(props: HTMLAttributes<HTMLTableSectionElement>) {
  return <tfoot {...props} />;
}

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  /** Figma State=Selected (fill-2). Hover (fill-1) comes from the pointer. */
  selected?: boolean;
}

/** Figma "Table Row". */
export function TableRow({ selected = false, ...rest }: TableRowProps) {
  return <tr data-state={selected ? 'selected' : undefined} {...rest} />;
}

/** Sort direction of a column (`aria-sort`). */
export type TableSort = 'none' | 'ascending' | 'descending';

export interface TableHeadProps extends ThHTMLAttributes<HTMLTableCellElement> {
  /** Figma Align (default `left`). */
  align?: 'left' | 'right';
  /** As narrow as its content with no end padding: a column of checkboxes or expand chevrons. */
  fit?: boolean;
  /** Makes the header a sort button ("Sorting" demo) with this direction. */
  sort?: TableSort;
  /** Called when the sort button is pressed. */
  onSort?: () => void;
}

/** Figma "Table Cell" Type=Head: a column header (`scope="col"` by default). */
export function TableHead({ align = 'left', fit = false, sort, onSort, className, children, ...rest }: TableHeadProps) {
  return (
    <th
      scope="col"
      aria-sort={sort}
      {...rest}
      className={cx('ds-table__head', align === 'right' && 'ds-table__head--right', fit && 'ds-table__head--fit', className)}
    >
      {sort !== undefined ? (
        <button type="button" className="ds-table__sort" onClick={onSort}>
          {children}
          {sortIcons[sort]}
        </button>
      ) : (
        children
      )}
    </th>
  );
}

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  /** Figma Align (default `left`). */
  align?: 'left' | 'right';
  /** As narrow as its content with no end padding: a checkbox or an expand chevron. */
  fit?: boolean;
  /** Lets the text wrap (descriptions, expanded details). */
  wrap?: boolean;
}

/** Figma "Table Cell" Type=Cell (in the footer: Type=Footer). */
export function TableCell({ align = 'left', fit = false, wrap = false, className, ...rest }: TableCellProps) {
  return (
    <td
      {...rest}
      className={cx('ds-table__cell', align === 'right' && 'ds-table__cell--right', fit && 'ds-table__cell--fit', wrap && 'ds-table__cell--wrap', className)}
    />
  );
}
