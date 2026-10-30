import { useEffect, useId, useMemo, useRef, useState, type InputHTMLAttributes, type KeyboardEvent, type ReactNode, type Ref } from 'react';
import type { SelectCaption, SelectGroup, SelectItem, SelectOption, SelectSeparator } from '../Select';

// Styles live in @helloantek/ds-css (classes ds-field*, ds-combobox*, and ds-select* for the menu and its options);
// this component renders the markup and the WAI-ARIA combobox with list autocomplete
// (https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-list/): typing filters the
// options, arrows move through them, Enter picks one, Escape closes the list (and clears the text when closed).

/** Figma "Size": 32, 36 and 40 px tall. */
export type ComboboxSize = 'default' | 'lg' | 'xl';
/** As Input and Select: Sort UI 2.0 has one field style (`default`); `shadow` adds Shadow/xs, `soft` is a borderless tinted field. */
export type ComboboxVariant = 'default' | 'shadow' | 'soft';

/** Other props (`aria-*`, `data-*`, `autoComplete`…) go to the input. */
interface ComboboxBaseProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'value' | 'defaultValue' | 'onChange' | 'role' | 'type' | 'placeholder'> {
  ref?: Ref<HTMLInputElement>;
  /** Options, Figma "Select Label" groups and separators (the Select's item types). */
  options: SelectItem[];
  /** Figma "Placeholder". */
  placeholder?: string;
  /** Figma Field "Label". */
  label?: ReactNode;
  /** Figma Field "Description": help text under the field. */
  caption?: ReactNode;
  /** Figma State=Invalid (Field "Error"): the message replaces the caption and marks the field invalid. */
  error?: ReactNode;
  /** Figma Size. */
  size?: ComboboxSize;
  /** Field style, as Input and Select. */
  variant?: ComboboxVariant;
  /** Figma "Leading icon", e.g. a search icon (16 px, `currentColor`). */
  leadIcon?: ReactNode;
  /** Figma "Leading slot": a 20 px picture before the text, e.g. the selected person's `<Avatar size="xs">`. */
  leadMedia?: ReactNode;
  /** Figma State=Disabled. */
  disabled?: boolean;
  /** Figma "Combobox Empty": shown when nothing matches the text. */
  emptyMessage?: ReactNode;
  /** Which options match the typed text; by default the label contains it, ignoring case and accents. */
  filter?: (option: SelectOption, query: string) => boolean;
  /** Called as the text changes. */
  onInputChange?: (text: string) => void;
  /** Opens the list on first render. */
  defaultOpen?: boolean;
  /** Form field name: the value is submitted through a hidden input (one per value with `multiple`). */
  name?: string;
  /** Class for the outer field element. */
  className?: string;
}

interface ComboboxSingleProps {
  multiple?: false;
  /** Selected value (controlled). `null` clears it. */
  value?: string | null;
  defaultValue?: string | null;
  onValueChange?: (value: string | null) => void;
}

/** Figma "Chips": several values, shown as removable chips before the text; the list stays open as you pick. */
interface ComboboxMultipleProps {
  multiple: true;
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
}

export type ComboboxProps = ComboboxBaseProps & (ComboboxSingleProps | ComboboxMultipleProps);

const isSeparator = (item: SelectItem): item is SelectSeparator => 'type' in item && item.type === 'separator';
const isCaption = (item: SelectItem): item is SelectCaption => 'type' in item && item.type === 'caption';
const isGroup = (item: SelectItem): item is SelectGroup => 'options' in item;
const isOption = (item: SelectItem): item is SelectOption => 'value' in item;

const fold = (text: string) => text.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();
const contains = (option: SelectOption, query: string) => fold(option.label).includes(fold(query));
const toList = (value: string | string[] | null | undefined) => (value === undefined ? undefined : value === null ? [] : Array.isArray(value) ? value : [value]);

// Sort UI 2.0 icons (24 px grid, 1.25 px stroke at 16 px). Figma draws the chevron and check at 72 % of a 16 px slot.
const chevronDown = (
  <svg viewBox="0.9 0.9 22.2 22.2" fill="none" stroke="currentColor" strokeWidth={1.736} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="m6 9 6 6 6-6" />
  </svg>
);
const checkMark = (
  <svg viewBox="0.9 0.9 22.2 22.2" fill="none" stroke="currentColor" strokeWidth={1.736} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
const removeIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

/** Figma "Combobox": a text field that filters a list of options. */
export function Combobox(props: ComboboxProps) {
  const {
    ref,
    options,
    multiple = false,
    value: _value,
    defaultValue: _defaultValue,
    onValueChange: _onValueChange,
    placeholder,
    label,
    caption,
    error,
    size = 'default',
    variant = 'default',
    leadIcon,
    leadMedia,
    disabled = false,
    emptyMessage = 'No results.',
    filter = contains,
    onInputChange,
    defaultOpen = false,
    name,
    required,
    id: idProp,
    className,
    onKeyDown: onKeyDownProp,
    onBlur,
    'aria-describedby': describedBy,
    ...rest
  } = props;
  const autoId = useId();
  const id = idProp ?? autoId;
  const menuId = `${id}-menu`;
  const captionId = `${id}-caption`;

  const [uncontrolled, setUncontrolled] = useState(() => toList(props.defaultValue) ?? []);
  const values = toList(props.value) ?? uncontrolled;
  const [open, setOpen] = useState(defaultOpen && !disabled);
  // The typed text, or null while the field shows the selection (single) or nothing (multiple): then every option shows.
  const [query, setQuery] = useState<string | null>(null);
  const [highlighted, setHighlighted] = useState<string | null>(null);
  const [status, setStatus] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const all = useMemo(() => options.flatMap((item) => (isGroup(item) ? item.options : isOption(item) ? [item] : [])), [options]);
  // Values can hold any text, so option ids use the position in the full list.
  const optionId = (value: string) => `${id}-option-${all.findIndex((o) => o.value === value)}`;
  const labelId = `${id}-label`;
  const selected = values.map((v) => all.find((o) => o.value === v)).filter((o): o is SelectOption => o !== undefined);
  const invalid = error !== undefined && error !== null && error !== false;
  const help = invalid ? error : caption;

  // The list after filtering: empty groups go, and separators only stay between what is left.
  const visible = useMemo(() => {
    if (!query) return options;
    const kept: SelectItem[] = [];
    for (const item of options) {
      if (isGroup(item)) {
        const matches = item.options.filter((o) => filter(o, query));
        if (matches.length) kept.push({ ...item, options: matches });
      } else if (isOption(item)) {
        if (filter(item, query)) kept.push(item);
      } else if (isSeparator(item)) {
        if (kept.length && !isSeparator(kept[kept.length - 1])) kept.push(item);
      }
    }
    while (kept.length && isSeparator(kept[kept.length - 1])) kept.pop();
    return kept;
  }, [options, query, filter]);
  const flat = visible.flatMap((item) => (isGroup(item) ? item.options : isOption(item) ? [item] : [])).filter((o) => !o.disabled);

  const text = query ?? (!multiple ? (selected[0]?.label ?? '') : '');

  useEffect(() => {
    if (open && highlighted) document.getElementById(optionId(highlighted))?.scrollIntoView({ block: 'nearest' });
  }, [open, highlighted]);

  // Results are read out after typing (the list itself changes silently).
  useEffect(() => {
    if (!open || query === null) return;
    setStatus(flat.length ? `${flat.length} ${flat.length === 1 ? 'result' : 'results'}` : typeof emptyMessage === 'string' ? emptyMessage : 'No results');
  }, [open, query, flat.length]);

  // Like a native field, an uncontrolled Combobox goes back to defaultValue when its form is reset; typed text goes.
  const defaultsKey = (toList(props.defaultValue) ?? []).join('\n');
  useEffect(() => {
    const form = inputRef.current?.form;
    if (!form) return;
    const reset = () => {
      setUncontrolled(toList(props.defaultValue) ?? []);
      setQuery(null);
      setOpen(false);
      setHighlighted(null);
    };
    form.addEventListener('reset', reset);
    return () => form.removeEventListener('reset', reset);
  }, [defaultsKey]);

  const setRef = (node: HTMLInputElement | null) => {
    inputRef.current = node;
    if (typeof ref === 'function') ref(node);
    else if (ref) ref.current = node;
  };

  const update = (next: string[]) => {
    if (props.value === undefined) setUncontrolled(next);
    if (props.multiple) props.onValueChange?.(next);
    else if (next[0] !== values[0]) props.onValueChange?.(next[0] ?? null);
  };
  const setText = (next: string | null) => {
    setQuery(next);
    onInputChange?.(next ?? '');
  };
  const close = () => {
    setOpen(false);
    setHighlighted(null);
  };
  const choose = (option: SelectOption) => {
    if (option.disabled) return;
    if (!multiple) {
      update([option.value]);
      setText(null);
      close();
      return;
    }
    const on = values.includes(option.value);
    update(on ? values.filter((v) => v !== option.value) : [...values, option.value]);
    setStatus(`${option.label} ${on ? 'removed' : 'added'}`);
    setText(null);
    setHighlighted(option.value);
  };
  const remove = (option: SelectOption) => {
    update(values.filter((v) => v !== option.value));
    setStatus(`${option.label} removed`);
  };
  const step = (by: number) => {
    if (!flat.length) return;
    const at = flat.findIndex((o) => o.value === highlighted);
    const next = at < 0 ? (by > 0 ? 0 : flat.length - 1) : Math.min(flat.length - 1, Math.max(0, at + by));
    setHighlighted(flat[next].value);
  };
  const openList = (highlight?: 'first' | 'last' | 'selected') => {
    setOpen(true);
    if (highlight === 'first') setHighlighted(flat[0]?.value ?? null);
    else if (highlight === 'last') setHighlighted(flat[flat.length - 1]?.value ?? null);
    else if (highlight === 'selected') setHighlighted(flat.find((o) => values.includes(o.value))?.value ?? flat[0]?.value ?? null);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    onKeyDownProp?.(event);
    if (disabled || event.defaultPrevented) return;
    const { key, altKey } = event;
    let handled = true;
    if (key === 'ArrowDown') {
      if (!open) openList(altKey ? undefined : 'selected');
      else step(1);
    } else if (key === 'ArrowUp') {
      if (!open) openList('last');
      else if (altKey) close();
      else step(-1);
    } else if (key === 'Enter' && open && highlighted) {
      const option = flat.find((o) => o.value === highlighted);
      if (option) choose(option);
    } else if (key === 'Escape') {
      if (open) close();
      // A closed list: Escape clears the text (and a single value), as in the APG example.
      else if (text) {
        setText(null);
        if (!multiple) update([]);
      } else handled = false;
    } else if (key === 'Backspace' && multiple && !query && selected.length) {
      remove(selected[selected.length - 1]);
    } else if (key === 'Home' || key === 'End') {
      // Move the caret, and leave the highlight alone.
      setHighlighted(null);
      handled = false;
    } else handled = false;
    if (handled) event.preventDefault();
  };

  let index = -1;
  const renderOption = (option: SelectOption) => {
    index++;
    const isSelected = values.includes(option.value);
    const large = option.description !== undefined;
    return (
      <div
        key={option.value}
        id={optionId(option.value)}
        role="option"
        className={large ? 'ds-select__option ds-select__option--large' : 'ds-select__option'}
        aria-selected={isSelected}
        aria-disabled={option.disabled || undefined}
        data-highlighted={option.value === highlighted || undefined}
        onMouseMove={() => option.value !== highlighted && setHighlighted(option.disabled ? null : option.value)}
        onClick={() => choose(option)}
      >
        {!large && (
          <span className="ds-select__check" aria-hidden>
            {isSelected && checkMark}
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
          {large && isSelected && (
            <span className="ds-select__check" aria-hidden>
              {checkMark}
            </span>
          )}
        </span>
      </div>
    );
  };

  const fieldClasses = ['ds-combobox__field', variant !== 'default' && `ds-combobox__field--${variant}`, invalid && 'ds-combobox__field--invalid', disabled && 'ds-combobox__field--disabled'].filter(Boolean).join(' ');

  return (
    <div className={['ds-field', `ds-field--${size}`, 'ds-combobox', className].filter(Boolean).join(' ')}>
      {label !== undefined && (
        <label className="ds-field__label" id={labelId} htmlFor={id}>
          {label}
        </label>
      )}
      <div className="ds-select__anchor">
        {/* A click anywhere in the field focuses the text, as on a native input. */}
        <div className={fieldClasses} onMouseDown={(event) => event.target !== inputRef.current && !disabled && (event.preventDefault(), inputRef.current?.focus())}>
          {leadMedia && (
            <span className="ds-combobox__media" aria-hidden>
              {leadMedia}
            </span>
          )}
          <div className="ds-combobox__body">
            {leadIcon && (
              <span className="ds-combobox__icon" aria-hidden>
                {leadIcon}
              </span>
            )}
            {multiple &&
              selected.map((o) => (
                <span key={o.value} className="ds-combobox__chip">
                  <span className="ds-combobox__chip-label">{o.label}</span>
                  {!disabled && (
                    // Out of the Tab order: Backspace in the field removes the last chip.
                    <button type="button" tabIndex={-1} className="ds-combobox__chip-remove" aria-label={`Remove ${o.label}`} onClick={() => remove(o)}>
                      {removeIcon}
                    </button>
                  )}
                </span>
              ))}
            <input
              {...rest}
              ref={setRef}
              id={id}
              type="text"
              role="combobox"
              className="ds-combobox__input"
              value={text}
              placeholder={multiple && selected.length ? undefined : placeholder}
              disabled={disabled}
              required={required && !values.length}
              autoComplete="off"
              aria-autocomplete="list"
              aria-expanded={open}
              aria-controls={menuId}
              aria-activedescendant={open && highlighted ? optionId(highlighted) : undefined}
              aria-describedby={[help !== undefined ? captionId : null, describedBy].filter(Boolean).join(' ') || undefined}
              aria-invalid={invalid || undefined}
              onChange={(event) => {
                setText(event.target.value);
                setOpen(true);
                setHighlighted(null);
              }}
              onClick={() => !open && openList()}
              onKeyDown={onKeyDown}
              onBlur={(event) => {
                onBlur?.(event);
                // An emptied single field clears its value; any other text goes back to the selection.
                if (!multiple && query === '') update([]);
                setText(null);
                close();
              }}
            />
          </div>
          <button
            type="button"
            tabIndex={-1}
            className="ds-combobox__toggle"
            aria-label={open ? 'Hide options' : 'Show options'}
            aria-controls={menuId}
            aria-expanded={open}
            disabled={disabled}
            onClick={() => {
              inputRef.current?.focus();
              if (open) close();
              else openList();
            }}
          >
            {chevronDown}
          </button>
        </div>
        <div
          id={menuId}
          role="listbox"
          className="ds-select__menu"
          aria-labelledby={label !== undefined ? labelId : undefined}
          aria-label={label === undefined ? rest['aria-label'] : undefined}
          aria-multiselectable={multiple || undefined}
          tabIndex={-1}
          hidden={!open}
          // Keep focus in the field while clicking options or the scrollbar.
          onMouseDown={(event) => event.preventDefault()}
          onMouseLeave={() => setHighlighted(null)}
        >
          {visible.map((item, i) => {
            if (isSeparator(item)) return <div key={`separator-${i}`} className="ds-select__separator" aria-hidden />;
            if (isCaption(item))
              return (
                <div key={`note-${i}`} className="ds-select__note" aria-hidden>
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
          {index < 0 && <div className="ds-combobox__empty">{emptyMessage}</div>}
        </div>
      </div>
      {name !== undefined && (multiple ? values.map((v) => <input key={v} type="hidden" name={name} value={v} disabled={disabled} />) : <input type="hidden" name={name} value={values[0] ?? ''} disabled={disabled} />)}
      <span className="ds-combobox__status" aria-live="polite">
        {status}
      </span>
      {help !== undefined && (
        <p id={captionId} className={invalid ? 'ds-field__caption ds-field__caption--error' : 'ds-field__caption'}>
          {help}
        </p>
      )}
    </div>
  );
}
