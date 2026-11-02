import type { HTMLAttributes, MouseEvent, ReactNode } from 'react';

// Styles live in @helloantek/ds-css (classes ds-pagination*, and ds-button for the items). A nav landmark with a list
// of page links (or buttons): the current page has aria-current="page"; Previous / Next (and First / Last) are
// disabled at the ends.

const cx = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(' ');

const icon = (path: ReactNode) => (
  <svg viewBox="0 0 16 16" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {path}
  </svg>
);
const icons = {
  first: icon(<path d="m7.33 11.33-3.33-3.33 3.33-3.33M12 11.33 8.67 8 12 4.67" />),
  previous: icon(<path d="m10 12-4-4 4-4" />),
  next: icon(<path d="m6 12 4-4-4-4" />),
  last: icon(<path d="m4 11.33 3.33-3.33L4 4.67m4.67 6.66L12 8 8.67 4.67" />),
};
// Figma "ellipsis" at 17.33 px (the 16 px icon scaled 13/12, its 1.25 px stroke kept).
const ellipsis = (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.154} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="8" cy="8" r=".67" />
    <circle cx="12.67" cy="8" r=".67" />
    <circle cx="3.33" cy="8" r=".67" />
  </svg>
);

/** The pages to show: the first and last `boundaryCount`, `siblingCount` on each side of the current one, and an
 * 'ellipsis' for each gap (a gap of a single page shows that page instead). Figma's sample: page 2 of 12 → 1 2 3 … 12. */
export function paginationRange(page: number, pageCount: number, siblingCount = 1, boundaryCount = 1): (number | 'ellipsis')[] {
  const shown = new Set<number>();
  const add = (from: number, to: number) => {
    for (let p = Math.max(1, from); p <= Math.min(pageCount, to); p++) shown.add(p);
  };
  add(1, boundaryCount);
  add(page - siblingCount, page + siblingCount);
  add(pageCount - boundaryCount + 1, pageCount);
  const pages = [...shown].sort((x, y) => x - y);
  const out: (number | 'ellipsis')[] = [];
  pages.forEach((p, i) => {
    const prev = pages[i - 1];
    if (prev !== undefined && p - prev === 2) out.push(prev + 1);
    else if (prev !== undefined && p - prev > 2) out.push('ellipsis');
    out.push(p);
  });
  return out;
}

export interface PaginationLabels {
  previous?: string;
  next?: string;
  first?: string;
  last?: string;
  /** The page link's accessible name (default "Page 3"). */
  page?: (page: number) => string;
}

export interface PaginationProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  /** The current page, from 1. */
  page: number;
  pageCount: number;
  onPageChange?: (page: number) => void;
  /** Renders the items as links to these URLs (otherwise buttons). */
  getHref?: (page: number) => string;
  /** Pages shown on each side of the current one (default 1). */
  siblingCount?: number;
  /** Pages always shown at each end (default 1). */
  boundaryCount?: number;
  /** "Icons only" demo: Previous and Next as icon buttons, with First and Last. */
  iconsOnly?: boolean;
  /** First and Last buttons (default: with `iconsOnly`). */
  showFirstLast?: boolean;
  /** The list sits in the middle (default) or at the start. */
  align?: 'center' | 'start';
  labels?: PaginationLabels;
  /** Names the landmark (default "Pagination"). */
  'aria-label'?: string;
}

/** Page links with Previous and Next: Sort UI 2.0 "Pagination". */
export function Pagination({
  page,
  pageCount,
  onPageChange,
  getHref,
  siblingCount = 1,
  boundaryCount = 1,
  iconsOnly = false,
  showFirstLast = iconsOnly,
  align = 'center',
  labels = {},
  'aria-label': ariaLabel = 'Pagination',
  className,
  ...rest
}: PaginationProps) {
  const current = Math.min(Math.max(1, page), Math.max(1, pageCount));
  const text = { previous: 'Previous', next: 'Next', first: 'First', last: 'Last', page: (p: number) => `Page ${p}`, ...labels };

  const item = (target: number, content: ReactNode, opts: { key: string; className?: string; label?: string; disabled?: boolean; current?: boolean; iconOnly?: boolean }) => {
    const classes = cx('ds-button', opts.current ? 'ds-button--outline' : 'ds-button--ghost', 'ds-button--size-default', opts.iconOnly && 'ds-button--icon-only', opts.className);
    const go = (event: MouseEvent) => {
      if (opts.disabled) return event.preventDefault();
      onPageChange?.(target);
    };
    const common = { className: classes, 'aria-label': opts.label, 'aria-current': opts.current ? ('page' as const) : undefined, onClick: go };
    return (
      <li key={opts.key}>
        {getHref ? (
          <a {...common} href={opts.disabled ? undefined : getHref(target)} aria-disabled={opts.disabled || undefined} role={opts.disabled ? 'link' : undefined}>
            {content}
          </a>
        ) : (
          <button {...common} type="button" disabled={opts.disabled}>
            {content}
          </button>
        )}
      </li>
    );
  };
  const iconSpan = (node: ReactNode) => (
    <span className="ds-button__icon" aria-hidden>
      {node}
    </span>
  );
  const atStart = current <= 1;
  const atEnd = current >= pageCount;

  return (
    <nav {...rest} aria-label={ariaLabel} className={cx('ds-pagination', align === 'start' && 'ds-pagination--start', className)}>
      <ul className="ds-pagination__list">
        {showFirstLast && item(1, iconSpan(icons.first), { key: 'first', label: text.first, disabled: atStart, iconOnly: true })}
        {iconsOnly
          ? item(current - 1, iconSpan(icons.previous), { key: 'previous', label: text.previous, disabled: atStart, iconOnly: true })
          : item(
              current - 1,
              <>
                {iconSpan(icons.previous)}
                <span className="ds-button__label">{text.previous}</span>
              </>,
              { key: 'previous', className: 'ds-pagination__edge', disabled: atStart },
            )}
        {paginationRange(current, pageCount, siblingCount, boundaryCount).map((p, i) =>
          p === 'ellipsis' ? (
            <li key={`ellipsis-${i}`}>
              <span className="ds-pagination__ellipsis" aria-hidden="true">
                {ellipsis}
              </span>
            </li>
          ) : (
            item(p, <span className="ds-button__label">{p}</span>, { key: `page-${p}`, className: 'ds-pagination__page', label: text.page(p), current: p === current })
          ),
        )}
        {iconsOnly
          ? item(current + 1, iconSpan(icons.next), { key: 'next', label: text.next, disabled: atEnd, iconOnly: true })
          : item(
              current + 1,
              <>
                <span className="ds-button__label">{text.next}</span>
                {iconSpan(icons.next)}
              </>,
              { key: 'next', className: 'ds-pagination__edge', disabled: atEnd },
            )}
        {showFirstLast && item(pageCount, iconSpan(icons.last), { key: 'last', label: text.last, disabled: atEnd, iconOnly: true })}
      </ul>
    </nav>
  );
}
