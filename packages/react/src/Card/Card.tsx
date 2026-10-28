import type { CSSProperties, HTMLAttributes, ReactNode, Ref } from 'react';

// Styles live in @helloantek/ds-css (classes ds-card*); these components only render the markup.

const cx = (...classes: (string | false | null | undefined)[]) => classes.filter(Boolean).join(' ') || undefined;

/** Figma "Size": 20 px (default) or 16 px around the parts. */
export type CardSize = 'default' | 'sm';

export interface CardProps extends HTMLAttributes<HTMLElement> {
  ref?: Ref<HTMLElement>;
  /** Figma Size. */
  size?: CardSize;
  /** The element: `div` (default), or `article` / `section` when the card stands on its own. */
  as?: 'div' | 'article' | 'section' | 'li';
  /** CardMedia, CardHeader, CardContent and CardFooter, in that order; each is optional. */
  children: ReactNode;
}

/** Figma "Card": a surface (20 px radius, outside border, Surface/Card) for related content and actions. */
export function Card({ size = 'default', as: Element = 'div', className, children, ...rest }: CardProps) {
  return (
    <Element {...(rest as HTMLAttributes<HTMLElement>)} className={cx('ds-card', size === 'sm' && 'ds-card--sm', className)}>
      {children}
    </Element>
  );
}

export interface CardMediaProps extends HTMLAttributes<HTMLDivElement> {
  /** Width ÷ height (Figma: 16 / 9). */
  ratio?: number;
  /** An `<img>` (with `alt`), `<video>` or `<svg>`; it covers the area. */
  children: ReactNode;
}

/** Figma "Media": a picture over the card's full width, above the header. */
export function CardMedia({ ratio, className, style, children, ...rest }: CardMediaProps) {
  return (
    <div {...rest} className={cx('ds-card__media', className)} style={ratio ? ({ '--card-media-ratio': ratio, ...style } as CSSProperties) : style}>
      {children}
    </div>
  );
}

export interface CardHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Figma "Title" (16/24 medium). */
  title: ReactNode;
  /** The title's element; `h3` by default, so set it to fit the page's headings. */
  titleAs?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div';
  /** Figma "Description" (14/20 muted). */
  description?: ReactNode;
  /** A leading icon or picture, e.g. a file icon. */
  icon?: ReactNode;
  /** Figma "action": buttons at the end of the header. */
  action?: ReactNode;
}

/** Figma "header" slot: title, description and an action. */
export function CardHeader({ title, titleAs: Title = 'h3', description, icon, action, className, children, ...rest }: CardHeaderProps) {
  return (
    <div {...rest} className={cx('ds-card__header', className)}>
      {icon && <span className="ds-card__icon">{icon}</span>}
      <div className="ds-card__heading">
        <Title className="ds-card__title">{title}</Title>
        {description !== undefined && <p className="ds-card__description">{description}</p>}
        {children}
      </div>
      {action && <div className="ds-card__action">{action}</div>}
    </div>
  );
}

/** Figma "content" slot: anything, along the card's sides. */
export function CardContent({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div {...rest} className={cx('ds-card__content', className)} />;
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  /** Where the footer's items go: `end` (default, Figma), `start` or `between` (spread to both ends). */
  justify?: 'end' | 'start' | 'between';
  /** The "With action" demo: the footer on a fill-1 band, e.g. for a total. */
  muted?: boolean;
}

/** Figma "footer" slot: actions, 8 px apart. */
export function CardFooter({ justify = 'end', muted = false, className, ...rest }: CardFooterProps) {
  return <div {...rest} className={cx('ds-card__footer', justify !== 'end' && `ds-card__footer--${justify}`, muted && 'ds-card__footer--muted', className)} />;
}
