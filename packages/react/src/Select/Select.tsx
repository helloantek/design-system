import { useEffect, useId, useMemo, useRef, useState, type FocusEvent, type HTMLAttributes, type KeyboardEvent, type MouseEvent, type ReactNode, type Ref } from 'react';
import { RiCheckFill, RiExpandUpDownFill } from '@remixicon/react';

// Styles live in @helloantek/ds-css (classes ds-field*, ds-select*); this component renders the markup and the
// WAI-ARIA select-only combobox behaviour (https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/).

/** Figma "Style" property. */
export type SelectVariant = 'default' | 'shadow' | 'soft';
/** Figma "Size" property. */
export type SelectSize = 'lg' | 'sm';

/** Figma "Select Menu Items" Type=Default. */
export interface SelectOption {
  value: string;
  /** Figma "↩ Label". Also shown in the trigger when selected and used for type-ahead. */
  label: string;
  /** Figma "Supporter text": muted text after the label. */
  caption?: ReactNode;
  /** Figma "❖ Lead Icon". Icons should use `currentColor`. */
  icon?: ReactNode;
  /** Figma "Badge". */
  badge?: ReactNode;
  disabled?: boolean;
}

/** Figma "Select Menu Items" Type=Label, followed by its options. */
export interface SelectGroup {
  label: ReactNode;
  /** Muted text on the right of the group label. */
  caption?: ReactNode;
  options: SelectOption[];
}

/** Figma "Select Menu Items" Type=Divider. */
export interface SelectSeparator {
  type: 'separator';
}

export type SelectItem = SelectOption | SelectGroup | SelectSeparator;

/** Other props (`aria-*`, `data-*`, event handlers…) go to the combobox element. */
interface SelectBaseProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'defaultValue' | 'onChange' | 'role' | 'placeholder'> {
  ref?: Ref<HTMLDivElement>;
  options: SelectItem[];
  /** Figma "↩ Placeholder". */
  placeholder?: string;
  /** Figma "Label". Names the combobox and the listbox. */
  label?: ReactNode;
  /** Accessible name when there is no visible label. */
  'aria-label'?: string;
  /** Figma "Caption": help text under the field. */
  caption?: ReactNode;
  /** Figma State=Failed: the message replaces the caption and marks the select invalid. */
  error?: ReactNode;
  variant?: SelectVariant;
  size?: SelectSize;
  /** Figma "❖ Lead Icon" slot. */
  leadIcon?: ReactNode;
  /** Figma "❖ Tail Icon" slot. Turns red when the select is invalid. */
  tailIcon?: ReactNode;
  /** Figma State=Destructive, drawn by Figma as a disabled field. */
  disabled?: boolean;
  /** Opens the menu on first render (Figma State=Active with the menu shown). */
  defaultOpen?: boolean;
  /** Form field name: the value is submitted through a hidden input (one per value with `multiple`). */
  name?: string;
  required?: boolean;
  id?: string;
  /** Class for the outer field element. */
  className?: string;
}

/** One value (Figma Variant=Default). */
interface SelectSingleProps {
  multiple?: false;
  /** Selected value (controlled). `null` shows the placeholder. */
  value?: string | null;
  /** Initially selected value (uncontrolled). */
  defaultValue?: string | null;
  onValueChange?: (value: string) => void;
}

/** Several values (Figma Variant=Multi-select): options toggle and the menu stays open; the trigger lists the labels. */
interface SelectMultipleProps {
  multiple: true;
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
}

export type SelectProps = SelectBaseProps & (SelectSingleProps | SelectMultipleProps);

const isSeparator = (item: SelectItem): item is SelectSeparator => 'type' in item && item.type === 'separator';
const isGroup = (item: SelectItem): item is SelectGroup => 'options' in item;
const PAGE = 10;
const toList = (value: string | string[] | null | undefined) => (value === undefined ? undefined : value === null ? [] : Array.isArray(value) ? value : [value]);

export function Select(props: SelectProps) {
  const {
    ref,
    options,
    multiple = false,
    // Kept out of `rest`; read through `props`, where `multiple` narrows their types.
    value: _value,
    defaultValue: _defaultValue,
    onValueChange: _onValueChange,
    placeholder,
    label,
    'aria-label': ariaLabel,
    caption,
    error,
    variant = 'default',
    size = 'lg',
    leadIcon,
    tailIcon,
    disabled = false,
    defaultOpen = false,
    name,
    required,
    id: idProp,
    className,
    onClick,
    onKeyDown: onKeyDownProp,
    onBlur,
    'aria-describedby': describedBy,
    ...rest
  } = props;
  const autoId = useId();
  const id = idProp ?? autoId;
  const labelId = `${id}-label`;
  const menuId = `${id}-menu`;
  const captionId = `${id}-caption`;
  const optionId = (index: number) => `${id}-option-${index}`;

  // Values are kept as a list in both modes.
  const defaults = toList(props.defaultValue) ?? [];
  const [uncontrolled, setUncontrolled] = useState(defaults);
  const values = toList(props.value) ?? uncontrolled;
  const [open, setOpen] = useState(defaultOpen && !disabled);
  // Index into `flat` of the option with visual focus, or -1. Opening with the mouse highlights nothing,
  // so the selected option is not drawn as hovered (Figma Active=True, State=Default).
  const [highlighted, setHighlighted] = useState(-1);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const hiddenRef = useRef<HTMLInputElement | null>(null);
  const typeahead = useRef({ text: '', at: 0 });

  const flat = useMemo(() => options.flatMap((item) => (isSeparator(item) ? [] : isGroup(item) ? item.options : [item])), [options]);
  const selected = flat.filter((o) => values.includes(o.value));
  // First selected option: where keyboard navigation and type-ahead start.
  const selectedIndex = flat.findIndex((o) => values.includes(o.value));
  const invalid = error !== undefined && error !== null && error !== false;
  const help = invalid ? error : caption;

  const setRef = (node: HTMLDivElement | null) => {
    triggerRef.current = node;
    if (typeof ref === 'function') ref(node);
    else if (ref) ref.current = node;
  };

  // Like a native <select>, an uncontrolled Select goes back to defaultValue when its form is reset.
  const defaultsKey = defaults.join('\n'); // `defaults` is a new array on every render
  useEffect(() => {
    const form = hiddenRef.current?.form;
    if (!form) return;
    const reset = () => setUncontrolled(defaults);
    form.addEventListener('reset', reset);
    return () => form.removeEventListener('reset', reset);
  }, [defaultsKey]);

  useEffect(() => {
    if (!open || highlighted < 0) return;
    document.getElementById(`${id}-option-${highlighted}`)?.scrollIntoView({ block: 'nearest' });
  }, [open, highlighted, id]);

  const enabled = (i: number) => i >= 0 && i < flat.length && !flat[i].disabled;
  // Next enabled index from `from` in direction `step`, or `from` itself when there is none.
  const move = (from: number, step: number) => {
    for (let i = from + step; i >= 0 && i < flat.length; i += step) if (enabled(i)) return i;
    return enabled(from) ? from : -1;
  };
  const first = () => move(-1, 1);
  const last = () => move(flat.length, -1);

  const openMenu = (index: number) => {
    setOpen(true);
    setHighlighted(index);
  };
  const close = () => {
    setOpen(false);
    setHighlighted(-1);
  };
  const update = (next: string[]) => {
    if (props.value === undefined) setUncontrolled(next);
    if (props.multiple) props.onValueChange?.(next);
    else if (next[0] !== values[0]) props.onValueChange?.(next[0]);
  };
  // Single: select and close. Multiple: toggle and keep the menu open.
  const choose = (index: number) => {
    if (!enabled(index)) return;
    const value = flat[index].value;
    if (!multiple) {
      update([value]);
      close();
      return;
    }
    update(values.includes(value) ? values.filter((v) => v !== value) : flat.filter((o) => o.value === value || values.includes(o.value)).map((o) => o.value));
    setHighlighted(index);
  };

  // Type-ahead: characters typed within 500 ms form one search (any other key starts a new one);
  // repeating one letter cycles through matches.
  const search = (char: string) => {
    const now = Date.now();
    const t = typeahead.current;
    t.text = now - t.at > 500 ? char : t.text + char;
    t.at = now;
    const query = t.text.toLowerCase();
    const cycling = query.split('').every((c) => c === query[0]);
    const start = open ? highlighted : selectedIndex;
    const order = flat.map((_, i) => (start + 1 + i) % flat.length);
    const match = order.find((i) => enabled(i) && flat[i].label.toLowerCase().startsWith(cycling ? query[0] : query));
    if (match !== undefined) openMenu(match);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    onKeyDownProp?.(event);
    if (disabled || event.defaultPrevented) return;
    const { key, altKey } = event;
    const current = highlighted >= 0 ? highlighted : selectedIndex;
    const printable = key.length === 1 && !event.ctrlKey && !event.metaKey && !altKey;
    if (!printable) typeahead.current.text = '';
    let handled = true;
    if (!open) {
      if (key === 'ArrowDown' || key === 'ArrowUp' || key === 'Enter' || key === ' ') openMenu(enabled(selectedIndex) ? selectedIndex : first());
      else if (key === 'Home') openMenu(first());
      else if (key === 'End') openMenu(last());
      else if (printable) search(key);
      else handled = false;
    } else if (altKey && key === 'ArrowUp') (multiple ? close() : choose(current));
    else if (key === 'ArrowDown') setHighlighted(current < 0 ? first() : move(current, 1));
    else if (key === 'ArrowUp') setHighlighted(current < 0 ? last() : move(current, -1));
    else if (key === 'Home') setHighlighted(first());
    else if (key === 'End') setHighlighted(last());
    else if (key === 'PageDown') setHighlighted(move(Math.min(current + PAGE, flat.length), -1));
    else if (key === 'PageUp') setHighlighted(move(Math.max(current - PAGE, -1), 1));
    else if (key === 'Enter' || key === ' ') (highlighted >= 0 ? choose(highlighted) : close());
    else if (key === 'Escape') close();
    // Tab picks the highlighted option of a single select (as the APG example does); a multiple select just closes.
    else if (key === 'Tab') {
      if (highlighted >= 0 && !multiple) choose(highlighted);
      else close();
      handled = false;
    } else if (printable) search(key);
    else handled = false;
    if (handled) event.preventDefault();
  };

  let index = -1;
  const renderOption = (option: SelectOption) => {
    const i = ++index;
    const isSelected = values.includes(option.value);
    return (
      <div
        key={option.value}
        id={optionId(i)}
        role="option"
        className="ds-select__option"
        aria-selected={isSelected}
        aria-disabled={option.disabled || undefined}
        data-highlighted={i === highlighted || undefined}
        onMouseMove={() => i !== highlighted && setHighlighted(enabled(i) ? i : -1)}
        onClick={() => choose(i)}
      >
        <span className="ds-select__check" aria-hidden>
          {isSelected && <RiCheckFill />}
        </span>
        <span className="ds-select__content">
          {option.icon && (
            <span className="ds-select__icon" aria-hidden>
              {option.icon}
            </span>
          )}
          <span className="ds-select__label">{option.label}</span>
          {option.caption !== undefined && <span className="ds-select__caption">{option.caption}</span>}
          {option.badge !== undefined && (
            <span className="ds-select__badge">
              <span>{option.badge}</span>
            </span>
          )}
        </span>
      </div>
    );
  };

  const triggerClasses = [
    'ds-select__trigger',
    `ds-select__trigger--${variant}`,
    invalid && 'ds-select__trigger--invalid',
    disabled && 'ds-select__trigger--disabled',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={['ds-field', `ds-field--${size}`, 'ds-select', className].filter(Boolean).join(' ')}>
      {label !== undefined && (
        // A <label> cannot point at a non-form element, so it names the combobox through aria-labelledby and focuses it on click.
        <label className="ds-field__label" id={labelId} onClick={() => triggerRef.current?.focus()}>
          {label}
        </label>
      )}
      <div className="ds-select__anchor">
        <div
          {...rest}
          ref={setRef}
          id={id}
          role="combobox"
          tabIndex={disabled ? undefined : 0}
          className={triggerClasses}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={menuId}
          aria-labelledby={label !== undefined ? labelId : undefined}
          aria-label={label === undefined ? ariaLabel : undefined}
          aria-describedby={[help !== undefined ? captionId : null, describedBy].filter(Boolean).join(' ') || undefined}
          aria-activedescendant={open && highlighted >= 0 ? optionId(highlighted) : undefined}
          aria-invalid={invalid || undefined}
          aria-disabled={disabled || undefined}
          aria-required={required || undefined}
          onClick={(event: MouseEvent<HTMLDivElement>) => {
            onClick?.(event);
            if (disabled || event.defaultPrevented) return;
            if (open) close();
            else openMenu(-1);
          }}
          onKeyDown={onKeyDown}
          onBlur={(event: FocusEvent<HTMLDivElement>) => {
            onBlur?.(event);
            close();
          }}
        >
          <span className="ds-select__main">
            {leadIcon && (
              <span className="ds-select__icon" aria-hidden>
                {leadIcon}
              </span>
            )}
            <span className={selected.length ? 'ds-select__value' : 'ds-select__value ds-select__value--placeholder'}>
              {selected.length ? selected.map((o) => o.label).join(', ') : placeholder}
            </span>
          </span>
          {tailIcon && (
            <span className="ds-select__icon ds-select__icon--tail" aria-hidden>
              {tailIcon}
            </span>
          )}
          <span className="ds-select__icon" aria-hidden>
            <RiExpandUpDownFill />
          </span>
        </div>
        <div
          id={menuId}
          role="listbox"
          className="ds-select__menu"
          aria-labelledby={label !== undefined ? labelId : undefined}
          aria-label={label === undefined ? ariaLabel : undefined}
          aria-multiselectable={multiple || undefined}
          tabIndex={-1}
          hidden={!open}
          // Keep focus on the combobox while clicking options or the scrollbar.
          onMouseDown={(event) => event.preventDefault()}
          onMouseLeave={() => setHighlighted(-1)}
        >
          {options.map((item, i) => {
            // A listbox may only own options and groups, so the divider is decoration hidden from assistive technology.
            if (isSeparator(item)) return <div key={`separator-${i}`} className="ds-select__separator" aria-hidden />;
            if (!isGroup(item)) return renderOption(item);
            const groupLabelId = `${id}-group-${i}`;
            return (
              <div key={`group-${i}`} role="group" aria-labelledby={groupLabelId}>
                <div className="ds-select__group-label" id={groupLabelId} role="presentation">
                  <span>{item.label}</span>
                  {item.caption !== undefined && <span className="ds-select__group-caption">{item.caption}</span>}
                </div>
                {item.options.map(renderOption)}
              </div>
            );
          })}
        </div>
      </div>
      {name !== undefined && (
        // One input carries the form reset listener even with nothing selected; a multiple select adds one per value.
        <>
          <input ref={hiddenRef} type="hidden" name={multiple ? undefined : name} value={values[0] ?? ''} disabled={disabled} />
          {multiple && values.map((v) => <input key={v} type="hidden" name={name} value={v} disabled={disabled} />)}
        </>
      )}
      {help !== undefined && (
        <p id={captionId} className={invalid ? 'ds-field__caption ds-field__caption--error' : 'ds-field__caption'}>
          {help}
        </p>
      )}
    </div>
  );
}
