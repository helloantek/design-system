import type { AriaRole, HTMLAttributes, ReactNode, Ref } from 'react';

// Styles live in @helloantek/ds-css (classes ds-alert*); this component only renders the markup.

const cx = (...classes: (string | false | null | undefined)[]) => classes.filter(Boolean).join(' ') || undefined;

/** Figma "Variant". */
export type AlertVariant = 'default' | 'destructive';

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  ref?: Ref<HTMLDivElement>;
  /** Figma Variant: `destructive` draws the title, icon and description red. */
  variant?: AlertVariant;
  /** Figma "Title" (14/20 medium). */
  title: ReactNode;
  /** Figma "Description" (14/20 muted); text, or `<p>`s and a `<ul>`. `children` works too. */
  description?: ReactNode;
  /** Figma "icon": a 16 px icon using `currentColor`; it is decorative, so the title must carry the meaning. */
  icon?: ReactNode;
  /** Figma "action" slot: small buttons at the end, e.g. `<Button size="sm" variant="outline">`. */
  action?: ReactNode;
  /**
   * Live region role, so an alert added while the page is open is read out: `status` (polite) by default and
   * `alert` (assertive) for `destructive`. Pass another role to change it, or `role={undefined}` for none (an alert
   * that is part of the page from the start needs no live region).
   */
  role?: AriaRole;
}

/** Figma "Alert": a callout with an icon, a title, a description and an optional action. */
export function Alert({ variant = 'default', title, description, icon, action, className, children, ...rest }: AlertProps) {
  const role = 'role' in rest ? rest.role : variant === 'destructive' ? 'alert' : 'status';
  return (
    <div {...rest} role={role} className={cx('ds-alert', variant === 'destructive' && 'ds-alert--destructive', className)}>
      {icon && (
        <span className="ds-alert__icon" aria-hidden>
          {icon}
        </span>
      )}
      <div className="ds-alert__body">
        <div className="ds-alert__title">{title}</div>
        {(description !== undefined || children !== undefined) && (
          <div className="ds-alert__description">
            {description}
            {children}
          </div>
        )}
      </div>
      {action && <div className="ds-alert__action">{action}</div>}
    </div>
  );
}
