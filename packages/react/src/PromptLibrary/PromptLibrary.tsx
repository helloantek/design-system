import { RiAddLine, RiCommandLine, RiCornerDownLeftLine, RiFileCopyLine, RiFileSearchLine } from '@remixicon/react';
import { Fragment, useId, useState, type HTMLAttributes, type KeyboardEvent, type Ref } from 'react';
import { Badge, type BadgeColor } from '../Badge';
import { Button } from '../Button';
import { Input } from '../Input';
import { Kbd, KbdGroup } from '../Kbd';

// Styles live in @helloantek/ds-css (classes ds-prompt-library*); this component renders the markup.

/** A saved prompt. Its `text` marks the gaps with braces: "Write a {tone} reply to {customer}." */
export interface PromptTemplate {
  id: string;
  name: string;
  text: string;
  /** Shown as a tint Badge after the name. */
  category?: string;
  categoryColor?: BadgeColor;
}

export type PromptValues = Record<string, string>;

export interface PromptLibraryLabels {
  heading: string;
  search: string;
  preview: string;
  copy: string;
  use: string;
  newPrompt: string;
  /** "No prompts match “xyz”". */
  noMatch: (query: string) => string;
  /** "1 of 3 filled". */
  filled: (filled: number, total: number) => string;
  /** "~33 tokens". */
  tokens: (count: number) => string;
  /** "2 left to fill". */
  left: (count: number) => string;
  ready: string;
}

const LABELS: PromptLibraryLabels = {
  heading: 'Prompts',
  search: 'Search templates',
  preview: 'Preview',
  copy: 'Copy',
  use: 'Use prompt',
  newPrompt: 'New prompt',
  noMatch: (query) => `No prompts match “${query}”`,
  filled: (filled, total) => `${filled} of ${total} filled`,
  tokens: (count) => `~${count} tokens`,
  left: (count) => `${count} left to fill`,
  ready: 'ready',
};

type Part = string | { name: string };

/** Splits a template's text into words and gaps; a gap is a name in braces. */
export function promptParts(text: string): Part[] {
  return text.split(/(\{[^{}]+\})/).filter(Boolean).map((part) => (/^\{[^{}]+\}$/.test(part) ? { name: part.slice(1, -1) } : part));
}

/** The names of a template's gaps, each once, in order. */
export function promptGaps(text: string): string[] {
  return [...new Set(promptParts(text).flatMap((part) => (typeof part === 'string' ? [] : [part.name])))];
}

/** The prompt with its filled gaps put in; gaps not yet filled stay as {name}. */
export function fillPrompt(text: string, values: PromptValues): string {
  return promptParts(text)
    .map((part) => (typeof part === 'string' ? part : values[part.name]?.trim() || `{${part.name}}`))
    .join('');
}

/** A rough token count: about four characters to a token. */
export const estimateTokens = (text: string) => Math.max(1, Math.round(text.length / 4));

export interface PromptLibraryProps extends Omit<HTMLAttributes<HTMLElement>, 'children' | 'onCopy'> {
  ref?: Ref<HTMLElement>;
  templates: PromptTemplate[];
  /** The chosen template's id; leave out for uncontrolled. */
  selected?: string;
  defaultSelected?: string;
  onSelectedChange?: (id: string) => void;
  /** What is typed into the gaps, by gap name; leave out for uncontrolled (it clears when another template is chosen). */
  values?: PromptValues;
  defaultValues?: PromptValues;
  onValuesChange?: (values: PromptValues) => void;
  /** The search text; leave out for uncontrolled. */
  query?: string;
  defaultQuery?: string;
  onQueryChange?: (query: string) => void;
  /** Copy the prompt as it stands. */
  onCopy?: (prompt: string) => void;
  /** Use the prompt, once every gap is filled (also ⌘↵ / Ctrl+↵). */
  onUse?: (prompt: string, template: PromptTemplate) => void;
  /** New prompt, offered when nothing matches the search. */
  onNew?: (query: string) => void;
  /** Counts the prompt's tokens; about four characters to a token by default. */
  countTokens?: (prompt: string) => number;
  labels?: Partial<PromptLibraryLabels>;
}

function useControllable<T>(value: T | undefined, initial: T, onChange?: (value: T) => void) {
  const [own, setOwn] = useState(initial);
  const current = value === undefined ? own : value;
  const set = (next: T) => {
    if (value === undefined) setOwn(next);
    onChange?.(next);
  };
  return [current, set] as const;
}

/**
 * Saved prompt templates with variables: pick one from the list (search, categories), type straight into the gaps in
 * its sentence, and watch the prompt assemble below with its token count. Use prompt turns on once every gap is filled.
 */
export function PromptLibrary({
  templates,
  selected: selectedProp,
  defaultSelected,
  onSelectedChange,
  values: valuesProp,
  defaultValues = {},
  onValuesChange,
  query: queryProp,
  defaultQuery = '',
  onQueryChange,
  onCopy,
  onUse,
  onNew,
  countTokens = estimateTokens,
  labels = {},
  className,
  onKeyDown,
  ...rest
}: PromptLibraryProps) {
  const t = { ...LABELS, ...labels };
  const id = useId();
  const headingId = `${id}-heading`;
  const nameId = `${id}-name`;
  const [selected, setSelected] = useControllable(selectedProp, defaultSelected ?? templates[0]?.id ?? '', onSelectedChange);
  const [values, setValues] = useControllable(valuesProp, defaultValues, onValuesChange);
  const [query, setQuery] = useControllable(queryProp, defaultQuery, onQueryChange);
  const template = templates.find((item) => item.id === selected) ?? templates[0];
  const search = query.trim().toLowerCase();
  const shown = search ? templates.filter((item) => item.name.toLowerCase().includes(search) || item.category?.toLowerCase().includes(search)) : templates;

  const parts = template ? promptParts(template.text) : [];
  const gaps = template ? promptGaps(template.text) : [];
  const isFilled = (name: string) => (values[name] ?? '').trim() !== '';
  const filled = gaps.filter(isFilled).length;
  const left = gaps.length - filled;
  const prompt = template ? fillPrompt(template.text, values) : '';
  const ready = template !== undefined && left === 0;

  const choose = (next: PromptTemplate) => {
    if (next.id === template?.id) return;
    setSelected(next.id);
    if (valuesProp === undefined) setValues({});
  };
  const use = () => {
    if (ready && template) onUse?.(prompt, template);
  };

  const onCardKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    onKeyDown?.(event);
    if (event.defaultPrevented) return;
    if (event.key === 'Enter' && (event.metaKey || event.ctrlKey) && !event.altKey && !event.shiftKey) {
      event.preventDefault();
      use();
    }
  };

  return (
    <section {...rest} className={['ds-prompt-library', className].filter(Boolean).join(' ')} aria-labelledby={rest['aria-label'] === undefined ? headingId : undefined} onKeyDown={onCardKeyDown}>
      <div className="ds-prompt-library__main">
        <div className="ds-prompt-library__templates">
          <h3 className="ds-prompt-library__heading" id={headingId}>
            {t.heading}
            <span className="ds-prompt-library__count">{templates.length}</span>
          </h3>
          <Input type="search" leadIcon={<RiFileSearchLine />} placeholder={t.search} aria-label={t.search} value={query} onChange={(event) => setQuery(event.target.value)} />
          {shown.length > 0 ? (
            <ul className="ds-prompt-library__list" aria-labelledby={headingId}>
              {shown.map((item) => (
                <li key={item.id}>
                  <button type="button" className="ds-prompt-library__item" aria-current={item.id === template?.id || undefined} onClick={() => choose(item)}>
                    <span>{item.name}</span>
                    {item.category !== undefined && (
                      <Badge variant="tint" color={item.categoryColor ?? 'neutral'}>
                        {item.category}
                      </Badge>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="ds-prompt-library__empty" role="status">
              <p>{t.noMatch(query.trim())}</p>
              {onNew && (
                <Button variant="outline" size="sm" leadingIcon={<RiAddLine />} onClick={() => onNew(query.trim())}>
                  {t.newPrompt}
                </Button>
              )}
            </div>
          )}
        </div>
        {template && (
          <div className="ds-prompt-library__template" role="group" aria-labelledby={nameId}>
            <div className="ds-prompt-library__title">
              <h4 className="ds-prompt-library__name" id={nameId}>
                {template.name}
              </h4>
              {template.category !== undefined && (
                <Badge variant="tint" color={template.categoryColor ?? 'neutral'}>
                  {template.category}
                </Badge>
              )}
              {gaps.length > 0 && (
                <span className="ds-prompt-library__progress">
                  <span className="ds-prompt-library__dots" aria-hidden>
                    {gaps.map((name) => (
                      <i key={name} className={isFilled(name) ? 'ds-prompt-library__dot--filled' : undefined} />
                    ))}
                  </span>
                  {t.filled(filled, gaps.length)}
                </span>
              )}
            </div>
            <p className="ds-prompt-library__sentence">
              {parts.map((part, i) =>
                typeof part === 'string' ? (
                  <Fragment key={i}>{part}</Fragment>
                ) : (
                  <input
                    key={i}
                    className={isFilled(part.name) ? 'ds-prompt-library__gap ds-prompt-library__gap--filled' : 'ds-prompt-library__gap'}
                    aria-label={part.name}
                    placeholder={part.name}
                    value={values[part.name] ?? ''}
                    onChange={(event) => setValues({ ...values, [part.name]: event.target.value })}
                  />
                ),
              )}
            </p>
            <div className="ds-prompt-library__preview">
              <p className="ds-prompt-library__preview-label">{t.preview}</p>
              <p className="ds-prompt-library__prompt">
                {promptParts(template.text).map((part, i) =>
                  typeof part === 'string' ? (
                    <Fragment key={i}>{part}</Fragment>
                  ) : isFilled(part.name) ? (
                    <Fragment key={i}>{values[part.name].trim()}</Fragment>
                  ) : (
                    <span key={i} className="ds-prompt-library__missing">{`{${part.name}}`}</span>
                  ),
                )}
              </p>
            </div>
          </div>
        )}
      </div>
      <footer className="ds-prompt-library__footer">
        <span className="ds-prompt-library__tokens" aria-live="polite">
          {template && `${t.tokens(countTokens(prompt))} · ${left > 0 ? t.left(left) : t.ready}`}
        </span>
        <Button variant="outline" size="sm" leadingIcon={<RiFileCopyLine />} disabled={!template} onClick={() => onCopy?.(prompt)}>
          {t.copy}
        </Button>
        <Button
          size="sm"
          disabled={!ready}
          aria-keyshortcuts="Meta+Enter Control+Enter"
          trailingIcon={
            <KbdGroup>
              <Kbd size="sm" variant="inverted" icon={<RiCommandLine />} label="Command" />
              <Kbd size="sm" variant="inverted" icon={<RiCornerDownLeftLine />} label="Enter" />
            </KbdGroup>
          }
          onClick={use}
        >
          {t.use}
        </Button>
      </footer>
    </section>
  );
}
