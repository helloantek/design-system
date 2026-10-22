import { useEffect, useId, useMemo, useRef, useState, type FocusEvent, type HTMLAttributes, type KeyboardEvent, type MouseEvent, type ReactNode, type Ref } from 'react';
import { RiCheckFill, RiExpandUpDownFill } from '@remixicon/react';
import { Badge } from '../Badge';

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
  /** Figma "Badge": rendered as `<Badge border>` (Size=sm, Color=Neutral, Style=Soft, Border=True). */
  badge?: ReactNode;
  /** Figma Type=Country Flag (or Avatar): a 20 px picture before the label, e.g. a flag `<svg>` or an `<img>`. */
  media?: ReactNode;
  /** Figma Type=Default Large: a second line under the label; the icon sits in a 36 px circle. */
  description?: ReactNode;
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

/** Figma "Select Menu Items" Type=Caption: a note in the menu, read out as the menu's description. */
export interface SelectCaption {
  type: 'caption';
  label: ReactNode;
}

export type SelectItem = SelectOption | SelectGroup | SelectSeparator | SelectCaption;

/** Figma "Select type": the mark of selected options. */
export type SelectIndicator = 'check' | 'checkbox' | 'radio';

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
  /** Figma Select Menu Items "Select type": check mark (Default), Checkbox or Radio Button. */
  indicator?: SelectIndicator;
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
  tags?: never;
  /** Selected value (controlled). `null` shows the placeholder. */
  value?: string | null;
  /** Initially selected value (uncontrolled). */
  defaultValue?: string | null;
  onValueChange?: (value: string) => void;
}

/** Several values (Figma Variant=Multi-select): options toggle and the menu stays open; the trigger lists the labels. */
interface SelectMultipleProps {
  multiple: true;
  /**
   * Figma Variant=Tags: the trigger shows each value as a removable badge (× with the mouse, Backspace removes the
   * last one). Tags wrap onto more rows when they do not fit.
   */
  tags?: boolean;
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
}

export type SelectProps = SelectBaseProps & (SelectSingleProps | SelectMultipleProps);

const isSeparator = (item: SelectItem): item is SelectSeparator => 'type' in item && item.type === 'separator';
const isGroup = (item: SelectItem): item is SelectGroup => 'options' in item;
const isCaption = (item: SelectItem): item is SelectCaption => 'type' in item && item.type === 'caption';
const isOption = (item: SelectItem): item is SelectOption => 'value' in item;

// The check of the Figma Checkbox component (8 px glyph).
const checkboxGlyph = (
  <svg viewBox="0 0 8 8" fill="currentColor" aria-hidden>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.64368 0.141519C8.0113 0.399497 8.11064 0.922328 7.86556 1.3093L3.8656 7.62501C3.73265 7.83493 3.5173 7.97104 3.2788 7.9959C3.04029 8.02076 2.80376 7.93174 2.63429 7.75335L0.234312 5.22707C-0.078104 4.89821 -0.078104 4.36502 0.234312 4.03616C0.546728 3.7073 1.05325 3.7073 1.36567 4.03616L3.07563 5.83611L6.53429 0.375074C6.77937 -0.0118926 7.27606 -0.116459 7.64368 0.141519Z"
    />
  </svg>
);
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
    tags = false,
    placeholder,
    label,
    'aria-label': ariaLabel,
    caption,
    error,
    variant = 'default',
    size = 'lg',
    leadIcon,
    tailIcon,
    indicator = 'check',
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
  // Tags: what was removed, announced through a live region (the combobox's own text changes silently).
  const [status, setStatus] = useState('');

  const flat = useMemo(() => options.flatMap((item) => (isGroup(item) ? item.options : isOption(item) ? [item] : [])), [options]);
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
  const remove = (option: SelectOption) => {
    update(values.filter((v) => v !== option.value));
    setStatus(`${option.label} removed`);
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
    if (tags && (key === 'Backspace' || key === 'Delete') && selected.length) remove(selected[selected.length - 1]);
    else if (!open) {
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
    const large = option.description !== undefined;
    const mark =
      indicator === 'check' ? (
        isSelected && <RiCheckFill />
      ) : (
        <span className={`ds-select__box ds-select__box--${indicator}`}>{indicator === 'checkbox' ? checkboxGlyph : <span className="ds-select__dot" />}</span>
      );
    return (
      <div
        key={option.value}
        id={optionId(i)}
        role="option"
        className={large ? 'ds-select__option ds-select__option--large' : 'ds-select__option'}
        aria-selected={isSelected}
        aria-disabled={option.disabled || undefined}
        data-highlighted={i === highlighted || undefined}
        onMouseMove={() => i !== highlighted && setHighlighted(enabled(i) ? i : -1)}
        onClick={() => choose(i)}
      >
        {!large && (
          <span className="ds-select__check" aria-hidden>
            {mark}
          </span>
        )}
        <span className="ds-select__content">
          {option.icon && (
            <span className="ds-select__icon" aria-hidden>
              {option.icon}
            </span>
          )}
          {option.media && (
            <span className="ds-select__media" aria-hidden>
              {option.media}
            </span>
          )}
          {large ? (
            <span className="ds-select__text">
              <span className="ds-select__label">{option.label}</span>
              <span className="ds-select__description">{option.description}</span>
            </span>
          ) : (
            <span className="ds-select__label">{option.label}</span>
          )}
          {option.caption !== undefined && <span className="ds-select__caption">{option.caption}</span>}
          {/* Default Large shows the mark on the right, before the badge. */}
          {large && (isSelected || indicator !== 'check') && (
            <span className="ds-select__check" aria-hidden>
              {mark}
            </span>
          )}
          {option.badge !== undefined && <Badge border>{option.badge}</Badge>}
        </span>
      </div>
    );
  };

  // Figma Type=Caption notes describe the menu.
  const noteIds = options.map((item, i) => (isCaption(item) ? `${id}-note-${i}` : null)).filter(Boolean).join(' ');

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
            {tags && selected.length ? (
              <span className="ds-select__tags">
                {selected.map((o) => (
                  <Badge key={o.value} border removeButton={false} onRemove={disabled ? undefined : () => remove(o)}>
                    {o.label}
                  </Badge>
                ))}
              </span>
            ) : (
              <span className={selected.length ? 'ds-select__value' : 'ds-select__value ds-select__value--placeholder'}>
                {selected.length ? selected.map((o) => o.label).join(', ') : placeholder}
              </span>
            )}
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
          aria-describedby={noteIds || undefined}
          tabIndex={-1}
          hidden={!open}
          // Keep focus on the combobox while clicking options or the scrollbar.
          onMouseDown={(event) => event.preventDefault()}
          onMouseLeave={() => setHighlighted(-1)}
        >
          {options.map((item, i) => {
            // A listbox may only own options and groups, so the divider is decoration hidden from assistive technology.
            if (isSeparator(item)) return <div key={`separator-${i}`} className="ds-select__separator" aria-hidden />;
            // Same for a caption; the listbox's aria-describedby still reads it (hidden content counts for descriptions).
            if (isCaption(item))
              return (
                <div key={`note-${i}`} id={`${id}-note-${i}`} className="ds-select__note" aria-hidden>
                  <span>{item.label}</span>
                </div>
              );
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
      {tags && (
        <span className="ds-select__status" aria-live="polite">
          {status}
        </span>
      )}
      {help !== undefined && (
        <p id={captionId} className={invalid ? 'ds-field__caption ds-field__caption--error' : 'ds-field__caption'}>
          {help}
        </p>
      )}
    </div>
  );
}
