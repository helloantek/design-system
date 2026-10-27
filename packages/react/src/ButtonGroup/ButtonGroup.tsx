import type { HTMLAttributes, ReactNode, Ref } from 'react';

// Styles live in @helloantek/ds-css (classes ds-button-group*); these components only render the markup.

/** Figma "Orientation". */
export type ButtonGroupOrientation = 'horizontal' | 'vertical';

interface ButtonGroupBaseProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
  /** Figma "Orientation": a row (default) or a column. */
  orientation?: ButtonGroupOrientation;
  /**
   * Figma "items": Buttons, ButtonGroupText, an Input or a Select. They touch, and only the outer corners are rounded.
   * A ButtonGroup of ButtonGroups spaces them 8 px apart instead (Figma's "Button Group" demo).
   */
  children: ReactNode;
}

/** A group is announced with its name, so one is required. */
export type ButtonGroupProps = ButtonGroupBaseProps & ({ 'aria-label': string } | { 'aria-labelledby': string });

/** Figma "Button Group". */
export function ButtonGroup({ orientation = 'horizontal', className, children, ...rest }: ButtonGroupProps) {
  return (
    <div
      role="group"
      {...rest}
      className={['ds-button-group', orientation === 'vertical' && 'ds-button-group--vertical', className].filter(Boolean).join(' ')}
    >
      {children}
    </div>
  );
}

export interface ButtonGroupTextProps extends HTMLAttributes<HTMLSpanElement> {
  ref?: Ref<HTMLSpanElement>;
  /** Figma "Label". */
  children: ReactNode;
  /** Figma "Icon" (Icon swap): a 16 px icon before the label, using `currentColor`. */
  icon?: ReactNode;
}

/** Figma "Button Group Text": a label segment in a group, e.g. a unit or a prefix next to an Input. */
export function ButtonGroupText({ icon, className, children, ...rest }: ButtonGroupTextProps) {
  return (
    <span {...rest} className={['ds-button-group__text', className].filter(Boolean).join(' ')}>
      {icon}
      <span>{children}</span>
    </span>
  );
}
