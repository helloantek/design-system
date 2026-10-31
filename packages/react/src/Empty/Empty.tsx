import type { HTMLAttributes, ReactNode, Ref } from 'react';

// Styles live in @helloantek/ds-css (classes ds-empty*); this component only renders the markup.

export interface EmptyProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  ref?: Ref<HTMLDivElement>;
  /** Figma "Media" with an icon: a 16 px icon in a 32 px tile; decorative. */
  icon?: ReactNode;
  /** Figma "Media" with anything else, e.g. an Avatar Group (instead of `icon`). */
  media?: ReactNode;
  /** Figma "Title". */
  title: ReactNode;
  /** The title's element (default h3), to fit the page's heading levels. */
  titleAs?: 'h2' | 'h3' | 'h4' | 'p';
  /** Figma "Description". */
  description?: ReactNode;
  /** Figma "Buttons": actions side by side, 8 px apart. */
  actions?: ReactNode;
  /** Figma "Slot": anything under the actions, e.g. a search field or a link. */
  children?: ReactNode;
}

/** Figma "Empty": what a view shows when it has nothing yet, with a way forward. */
export function Empty({ icon, media, title, titleAs: Title = 'h3', description, actions, className, children, ...rest }: EmptyProps) {
  const hasContent = actions !== undefined || children !== undefined;
  return (
    <div {...rest} className={['ds-empty', className].filter(Boolean).join(' ')}>
      <div className="ds-empty__header">
        {icon !== undefined ? (
          <div className="ds-empty__media ds-empty__media--icon" aria-hidden>
            {icon}
          </div>
        ) : (
          media !== undefined && <div className="ds-empty__media">{media}</div>
        )}
        <div className="ds-empty__text">
          <Title className="ds-empty__title">{title}</Title>
          {description !== undefined && <p className="ds-empty__description">{description}</p>}
        </div>
      </div>
      {hasContent && (
        <div className="ds-empty__content">
          {actions !== undefined && <div className="ds-empty__actions">{actions}</div>}
          {children}
        </div>
      )}
    </div>
  );
}
