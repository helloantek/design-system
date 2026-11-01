import { Children, createContext, isValidElement, useContext, useState, type HTMLAttributes, type KeyboardEvent, type ReactElement, type ReactNode } from 'react';
import { Toggle, type ToggleSize, type ToggleVariant } from '../Toggle';

// Styles live in @helloantek/ds-css (classes ds-toggle-group*); the items are Toggles (`<button aria-pressed>`) in a
// role="group". One Tab stop for the whole group: arrow keys (and Home / End) move between the items.

/** Figma "Spacing": 2 = 8 px apart, 1 = 4 px apart, 0 = joined. */
export type ToggleGroupSpacing = 0 | 1 | 2;
/** Figma "Orientation". */
export type ToggleGroupOrientation = 'horizontal' | 'vertical';

interface GroupContext {
  isOn: (value: string) => boolean;
  flip: (value: string) => void;
  variant: ToggleVariant;
  size: ToggleSize;
  disabled: boolean;
  tabValue: string | undefined;
}

const Context = createContext<GroupContext | null>(null);

interface ToggleGroupBaseProps extends Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'onChange'> {
  /** Figma Variant (default `default`), for every item. */
  variant?: ToggleVariant;
  /** Toggle size (default `default`), for every item. */
  size?: ToggleSize;
  /** Figma Spacing (default 2). */
  spacing?: ToggleGroupSpacing;
  /** Figma Orientation (default `horizontal`); arrow keys follow it. */
  orientation?: ToggleGroupOrientation;
  disabled?: boolean;
  /** Name the group (`aria-label` or `aria-labelledby`). */
  'aria-label'?: string;
  children: ReactNode;
}

export interface SingleToggleGroupProps extends ToggleGroupBaseProps {
  /** `single`: at most one item is on (pressing it again turns it off). */
  type: 'single';
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

export interface MultipleToggleGroupProps extends ToggleGroupBaseProps {
  /** `multiple`: any number of items can be on. */
  type: 'multiple';
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
}

export type ToggleGroupProps = SingleToggleGroupProps | MultipleToggleGroupProps;

const cx = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(' ');

/** Figma "Toggle Group". */
export function ToggleGroup(props: ToggleGroupProps) {
  const { type, value: valueProp, defaultValue, onValueChange, variant = 'default', size = 'default', spacing = 2, orientation = 'horizontal', disabled = false, className, children, onKeyDown, ...rest } = props;
  const initial = defaultValue === undefined ? [] : Array.isArray(defaultValue) ? defaultValue : defaultValue === '' ? [] : [defaultValue];
  const [uncontrolled, setUncontrolled] = useState<string[]>(initial);
  const values = valueProp === undefined ? uncontrolled : Array.isArray(valueProp) ? valueProp : valueProp === '' ? [] : [valueProp];

  const flip = (v: string) => {
    const next = type === 'single' ? (values.includes(v) ? [] : [v]) : values.includes(v) ? values.filter((x) => x !== v) : [...values, v];
    if (valueProp === undefined) setUncontrolled(next);
    if (type === 'single') (onValueChange as ((value: string) => void) | undefined)?.(next[0] ?? '');
    else (onValueChange as ((value: string[]) => void) | undefined)?.(next);
  };

  // One Tab stop: the first pressed item, or the first enabled item when none is pressed.
  const firstEnabled = Children.toArray(children).find((c): c is ReactElement<ToggleGroupItemProps> => isValidElement<ToggleGroupItemProps>(c) && !c.props.disabled && typeof c.props.value === 'string');
  const tabValue = values[0] ?? firstEnabled?.props.value;

  return (
    <Context.Provider value={{ isOn: (v) => values.includes(v), flip, variant, size, disabled, tabValue }}>
      <div
        {...rest}
        role="group"
        data-orientation={orientation}
        className={cx('ds-toggle-group', orientation === 'vertical' && 'ds-toggle-group--vertical', spacing !== 2 && `ds-toggle-group--spacing-${spacing}`, variant === 'outline' && 'ds-toggle-group--outline', className)}
        onKeyDown={(event: KeyboardEvent<HTMLDivElement>) => {
          onKeyDown?.(event);
          const keys = orientation === 'vertical' ? ['ArrowUp', 'ArrowDown'] : ['ArrowLeft', 'ArrowRight'];
          if (![...keys, 'Home', 'End'].includes(event.key)) return;
          const items = [...event.currentTarget.querySelectorAll<HTMLButtonElement>(':scope > .ds-toggle:not(:disabled)')];
          const at = items.indexOf(document.activeElement as HTMLButtonElement);
          if (at < 0 || !items.length) return;
          event.preventDefault();
          const next = event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1 : (at + (event.key === keys[1] ? 1 : -1) + items.length) % items.length;
          items.forEach((el, i) => (el.tabIndex = i === next ? 0 : -1));
          items[next].focus();
        }}
      >
        {children}
      </div>
    </Context.Provider>
  );
}

export interface ToggleGroupItemProps {
  /** The value this item stands for. */
  value: string;
  /** The label; or use `icon` with an `aria-label`. */
  children?: ReactNode;
  /** A 16 px icon (`currentColor`): with children it leads the label, without them it is an icon-only item. */
  icon?: ReactNode;
  'aria-label'?: string;
  disabled?: boolean;
  className?: string;
}

/** One Toggle of a Toggle Group. */
export function ToggleGroupItem({ value, children, icon, 'aria-label': ariaLabel, disabled, className }: ToggleGroupItemProps) {
  const group = useContext(Context);
  if (!group) throw new Error('ToggleGroupItem must be inside a ToggleGroup');
  const pressed = group.isOn(value);
  const tabIndex = group.tabValue === undefined || group.tabValue === value ? 0 : -1;
  const common = { variant: group.variant, size: group.size, pressed, onPressedChange: () => group.flip(value), disabled: group.disabled || disabled, className, tabIndex, 'data-value': value };
  return children === undefined && icon !== undefined ? <Toggle {...common} icon={icon} aria-label={ariaLabel ?? value} /> : <Toggle {...common} leadingIcon={icon} aria-label={ariaLabel}>{children}</Toggle>;
}
