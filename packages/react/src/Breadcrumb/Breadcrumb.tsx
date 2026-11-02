import { Children, cloneElement, createContext, Fragment, isValidElement, useContext, type AnchorHTMLAttributes, type HTMLAttributes, type ReactElement, type ReactNode } from 'react';
import { Button } from '../Button';
import { DropdownMenu } from '../DropdownMenu';

// Styles live in @helloantek/ds-css (classes ds-breadcrumb*). A nav landmark holding an ordered list; separators are
// drawn between the items and hidden from assistive technology; the current page has aria-current="page".

const cx = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(' ');

/** Figma "Breadcrumb Separator" Type. */
export type BreadcrumbSeparatorType = 'chevron' | 'slash' | 'dot';

const icon = (path: ReactNode, viewBox = '0 0 16 16') => (
  <svg viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth={1.154} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {path}
  </svg>
);
// Figma "chevron-right" and "dot" at 17.33 px (the 16 px icons scaled 13/12, their 1.25 px stroke kept).
const separators: Record<BreadcrumbSeparatorType, ReactNode> = {
  chevron: icon(<path d="m6 12 4-4-4-4" />),
  slash: '/',
  dot: icon(<circle cx="8" cy="8" r=".67" />),
};
const chevronDown = (
  <svg className="ds-breadcrumb__chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M4 6l4 4 4-4" />
  </svg>
);
const ellipsis = (
  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="7" cy="7" r=".58" />
    <circle cx="11.08" cy="7" r=".58" />
    <circle cx="2.92" cy="7" r=".58" />
  </svg>
);

const SeparatorContext = createContext<BreadcrumbSeparatorType>('chevron');

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  /** Figma "Breadcrumb Separator" Type, drawn between the items (default `chevron`). */
  separator?: BreadcrumbSeparatorType;
  /** Names the landmark (default "Breadcrumb"). */
  'aria-label'?: string;
  /** BreadcrumbItem and BreadcrumbEllipsis elements, in order. */
  children: ReactNode;
}

/** A trail of links to the current page: Sort UI 2.0 "Breadcrumb". */
export function Breadcrumb({ separator = 'chevron', 'aria-label': ariaLabel = 'Breadcrumb', className, children, ...rest }: BreadcrumbProps) {
  const items = Children.toArray(children).filter(isValidElement);
  return (
    <SeparatorContext.Provider value={separator}>
      <nav {...rest} aria-label={ariaLabel} className={cx('ds-breadcrumb', className)}>
        <ol className="ds-breadcrumb__list">
          {items.map((item, i) => (
            <Fragment key={item.key ?? i}>
              {i > 0 && <BreadcrumbSeparator />}
              {item}
            </Fragment>
          ))}
        </ol>
      </nav>
    </SeparatorContext.Provider>
  );
}

/** Figma "Breadcrumb Separator": drawn by Breadcrumb between the items; use it directly only to build a list by hand. */
export function BreadcrumbSeparator({ type }: { type?: BreadcrumbSeparatorType }) {
  const fromList = useContext(SeparatorContext);
  const kind = type ?? fromList;
  return (
    <li role="presentation" aria-hidden="true" className={cx('ds-breadcrumb__separator', kind !== 'chevron' && `ds-breadcrumb__separator--${kind}`)}>
      {separators[kind]}
    </li>
  );
}

interface BreadcrumbItemBaseProps {
  /** Figma "Icon": an icon before the label. */
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
}

export interface BreadcrumbItemProps extends BreadcrumbItemBaseProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className'> {
  /** Figma type=active: the current page, drawn as text with aria-current="page". */
  current?: boolean;
  /** Figma type=dropdown: the label opens a menu of these DropdownMenuItems (e.g. sibling pages). */
  menu?: ReactNode;
  /** Names the menu (type=dropdown). */
  menuLabel?: string;
  /** Renders your own link element (e.g. a router Link) with the breadcrumb's classes; `children` is that element. */
  asChild?: boolean;
}

/** One step of the trail: Figma "Breadcrumb Item" (type=link, active or dropdown). */
export function BreadcrumbItem({ current = false, menu, menuLabel, asChild = false, icon: iconNode, className, children, ...rest }: BreadcrumbItemProps) {
  let content: ReactNode;
  if (current) {
    content = (
      <span className="ds-breadcrumb__page" aria-current="page">
        {iconNode}
        {children}
      </span>
    );
  } else if (menu !== undefined) {
    content = (
      <DropdownMenu
        aria-label={menuLabel}
        trigger={
          <button type="button" className="ds-breadcrumb__link ds-breadcrumb__link--menu">
            <span className="ds-breadcrumb__label">
              {iconNode}
              {children}
            </span>
            {chevronDown}
          </button>
        }
      >
        {menu}
      </DropdownMenu>
    );
  } else if (asChild && isValidElement(children)) {
    const child = children as ReactElement<{ className?: string; children?: ReactNode }>;
    content = cloneElement(child, {
      className: cx('ds-breadcrumb__link', child.props.className),
      children: (
        <>
          {iconNode}
          {child.props.children}
        </>
      ),
    });
  } else {
    content = (
      <a {...rest} className="ds-breadcrumb__link">
        {iconNode}
        {children}
      </a>
    );
  }
  return <li className={cx('ds-breadcrumb__item', className)}>{content}</li>;
}

export interface BreadcrumbEllipsisProps {
  /** DropdownMenuItems for the hidden steps. */
  children: ReactNode;
  /** Names the button (default "Show more pages"). */
  'aria-label'?: string;
  className?: string;
}

/** Figma "Breadcrumb Ellipsis": a Ghost xs icon button that opens a menu of the steps left out of the trail. */
export function BreadcrumbEllipsis({ children, 'aria-label': ariaLabel = 'Show more pages', className }: BreadcrumbEllipsisProps) {
  return (
    <li className={cx('ds-breadcrumb__item', className)}>
      <DropdownMenu trigger={<Button variant="ghost" size="xs" aria-label={ariaLabel} className="ds-breadcrumb__ellipsis" icon={ellipsis} />}>{children}</DropdownMenu>
    </li>
  );
}
