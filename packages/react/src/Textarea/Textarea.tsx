import { useId, useState, type ChangeEvent, type CSSProperties, type ReactNode, type Ref, type TextareaHTMLAttributes } from 'react';

// Styles live in @helloantek/ds-css (classes ds-field*, ds-textarea*); this component only renders the markup.

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  ref?: Ref<HTMLTextAreaElement>;
  /** Figma "Field Label". Rendered as a <label> tied to the textarea. */
  label?: ReactNode;
  /** Figma Field "Description": help text under the textarea. */
  caption?: ReactNode;
  /** Figma State=Invalid (Field "Error"): the message replaces the caption and marks the textarea invalid. */
  error?: ReactNode;
  /** Figma State=Invalid without a message. */
  invalid?: boolean;
  /**
   * Figma "Character limit" demo: the characters left and a Progress circle in the label's trail add-on.
   * Needs `maxLength` (the browser stops typing at the limit) or `limit` (typing past it is allowed and turns red).
   */
  showCount?: boolean;
  /** A soft limit for `showCount`: past it the count goes negative and red, and the textarea is marked invalid. */
  limit?: number;
  /** Lets the user drag the height (off by default: the box grows with its text, as in Figma). */
  resizable?: boolean;
  /** Class for the outer field element. */
  className?: string;
}

/** Figma "Textarea": a multi-line text field, 64 px tall at least, growing with its text. */
export function Textarea(props: TextareaProps) {
  const { label, caption, error, invalid: invalidProp = false, showCount = false, limit, resizable = false, className, id: idProp, 'aria-describedby': describedBy, onChange, ...rest } = props;
  const autoId = useId();
  const id = idProp ?? autoId;
  const captionId = `${id}-caption`;
  const countId = `${id}-count`;
  const hasError = error !== undefined && error !== null && error !== false;
  const help = hasError ? error : caption;

  // The count follows the value: controlled through `value`, otherwise tracked from typing.
  const [typed, setTyped] = useState(String(rest.defaultValue ?? ''));
  const length = [...(rest.value !== undefined ? String(rest.value) : typed)].length;
  const max = limit ?? rest.maxLength;
  const counting = showCount && max !== undefined;
  const left = counting ? max - length : 0;
  const over = counting && left < 0;
  const invalid = hasError || invalidProp || over;

  const textarea = (
    <textarea
      {...rest}
      id={id}
      className={['ds-textarea', resizable && 'ds-textarea--resize'].filter(Boolean).join(' ')}
      aria-invalid={invalid || undefined}
      aria-describedby={[help !== undefined ? captionId : null, counting ? countId : null, describedBy].filter(Boolean).join(' ') || undefined}
      onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
        setTyped(event.currentTarget.value);
        onChange?.(event);
      }}
    />
  );

  const count = counting && (
    <span id={countId} className={['ds-field__addon', 'ds-textarea__count', over && 'ds-textarea__count--over'].filter(Boolean).join(' ')}>
      <span aria-hidden>{left}</span>
      <span className="ds-textarea__count-label">{over ? `${-left} characters over the limit of ${max}` : `${left} of ${max} characters left`}</span>
      <svg className="ds-textarea__progress" viewBox="0 0 16 16" aria-hidden>
        <circle className="ds-textarea__progress-track" cx="8" cy="8" r="6.8" />
        <circle
          className="ds-textarea__progress-indicator"
          cx="8"
          cy="8"
          r="6.8"
          pathLength={100}
          style={{ '--textarea-progress': Math.min(100, (length / max) * 100) } as CSSProperties}
        />
      </svg>
    </span>
  );

  return (
    <div className={['ds-field', className].filter(Boolean).join(' ')}>
      {(label !== undefined || count) && (
        <div className="ds-field__label-row">
          {label !== undefined && (
            <label className="ds-field__label" htmlFor={id}>
              {label}
            </label>
          )}
          {count}
        </div>
      )}
      {textarea}
      {help !== undefined && (
        <p id={captionId} className={hasError ? 'ds-field__caption ds-field__caption--error' : 'ds-field__caption'}>
          {help}
        </p>
      )}
    </div>
  );
}
