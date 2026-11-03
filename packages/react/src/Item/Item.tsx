import { Children, isValidElement, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type HTMLAttributes, type LabelHTMLAttributes, type ReactNode } from 'react';

// Styles live in @helloantek/ds-css (classes ds-item*). A row with optional header, media, title and description,
// actions and footer. Rows with their own buttons stay a <div>; a whole-row action makes the row a link (href), a
// button (as="button") or a label (as="label", around a Switch, Radio or Checkbox).

const cx = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(' ');

/** Figma Variant. */
export type ItemVariant = 'default' | 'outline' | 'muted';
/** Figma Size. */
export type ItemSize = 'default' | 'sm' | 'xs';

interface ItemOwnProps {
  /** Figma Variant (default `default`). */
  variant?: ItemVariant;
  /** Figma Size (default `default`). */
  size?: ItemSize;
  /** Figma "header" slot: 12/16 muted captions, spread across the row. */
  header?: ReactNode;
  /** Figma "media" slot: an ItemMedia, an Avatar, a Radio… */
  media?: ReactNode;
  /** The title (14/20 Medium). */
  title?: ReactNode;
  /** The description (14/20 muted). */
  description?: ReactNode;
  /** Figma "actions" slot: buttons, a Badge, a Switch, a chevron… */
  actions?: ReactNode;
  /** Figma "footer" slot. */
  footer?: ReactNode;
  /** No padding ("Separated list" demo). */
  flush?: boolean;
  /** More content under the title and description. */
  children?: ReactNode;
  className?: string;
}

type DivItemProps = ItemOwnProps & Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'children' | 'media'> & { as?: 'div'; href?: never };
type LinkItemProps = ItemOwnProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'title' | 'children' | 'media'> & { as?: 'a'; href: string };
type ButtonItemProps = ItemOwnProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'title' | 'children' | 'media'> & { as: 'button'; href?: never };
type LabelItemProps = ItemOwnProps & Omit<LabelHTMLAttributes<HTMLLabelElement>, 'title' | 'children' | 'media'> & { as: 'label'; href?: never };

export type ItemProps = DivItemProps | LinkItemProps | ButtonItemProps | LabelItemProps;

/** One row: Sort UI 2.0 "Item". */
export function Item(props: ItemProps) {
  const { variant = 'default', size = 'default', header, media, title, description, actions, footer, flush = false, children, className, as, ...rest } = props;
  const Root = (as ?? ('href' in props && props.href !== undefined ? 'a' : 'div')) as 'div';
  const interactive = Root !== ('div' as string);
  const classes = cx(
    'ds-item',
    variant !== 'default' && `ds-item--${variant}`,
    size !== 'default' && `ds-item--${size}`,
    flush && 'ds-item--flush',
    interactive && 'ds-item--interactive',
    className,
  );
  const extra = Root === ('button' as string) ? { type: 'button' } : {};
  return (
    <Root {...extra} {...(rest as HTMLAttributes<HTMLDivElement>)} className={classes}>
      {header !== undefined && <div className="ds-item__header">{header}</div>}
      <div className="ds-item__row">
        {media !== undefined && <div className="ds-item__media">{media}</div>}
        <div className="ds-item__content">
          {title !== undefined && <div className="ds-item__title">{title}</div>}
          {description !== undefined && <div className="ds-item__description">{description}</div>}
          {children}
        </div>
        {actions !== undefined && <div className="ds-item__actions">{actions}</div>}
      </div>
      {footer !== undefined && <div className="ds-item__footer">{footer}</div>}
    </Root>
  );
}

export interface ItemMediaProps extends HTMLAttributes<HTMLSpanElement> {
  /** Figma Variant: a 16 px icon, or a 40 px tinted square (with an icon or an <img>). */
  variant?: 'icon' | 'image';
  children: ReactNode;
}

/** Figma "Item Media". Decorative: it is hidden from assistive technology unless it is a picture with alt text. */
export function ItemMedia({ variant = 'icon', className, children, ...rest }: ItemMediaProps) {
  return (
    <span aria-hidden={variant === 'icon' || undefined} {...rest} className={cx('ds-item-media', variant === 'image' && 'ds-item-media--image', className)}>
      {children}
    </span>
  );
}

/** Figma "Item Separator": a line between rows of an ItemGroup. */
export function ItemSeparator() {
  return <div role="none" className="ds-item-separator" />;
}

export interface ItemGroupProps extends HTMLAttributes<HTMLUListElement> {
  /** `stack` (default): items 16 px apart. `joined` ("Navigation" demo): one block, rows separated by lines. */
  variant?: 'stack' | 'joined';
  /** Items and ItemSeparators. */
  children: ReactNode;
}

/** A list of Items: Figma "Item Group". */
export function ItemGroup({ variant = 'stack', className, children, ...rest }: ItemGroupProps) {
  return (
    <ul role="list" {...rest} className={cx('ds-item-group', variant === 'joined' && 'ds-item-group--joined', className)}>
      {Children.toArray(children).map((child, i) =>
        isValidElement(child) && child.type === ItemSeparator ? (
          <li key={child.key ?? i} className="ds-item-group__separator" aria-hidden="true" />
        ) : (
          <li key={isValidElement(child) ? (child.key ?? i) : i} className="ds-item-group__entry">
            {child}
          </li>
        ),
      )}
    </ul>
  );
}
