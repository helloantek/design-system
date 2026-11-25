import { RiArrowDownSLine, RiCheckLine } from '@remixicon/react';
import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { Button } from '../Button';
import { Popover } from '../Popover';
import { Switch } from '../Switch';
import { ToggleGroup, ToggleGroupItem } from '../ToggleGroup';

// Styles live in @helloantek/ds-css (classes ds-model-picker*); this component only renders the markup.

/** One model in the menu. */
export interface ModelPickerModel {
  value: string;
  /** "Opus 4.1". Also shown on the trigger when chosen. */
  label: string;
  /** What it is for: "Hard problems, long documents". */
  description?: ReactNode;
  /** Its logo, 16 px, in `currentColor`. */
  icon?: ReactNode;
  /** Shown when pointed at: 1–5 each. */
  speed?: number;
  quality?: number;
  cost?: number;
  /** What the choice means, at the bottom: "First word in ~2 s · $15 per 1M tokens". */
  note?: ReactNode;
}

/** One level of extended thinking's effort. */
export interface ModelPickerEffort {
  value: string;
  label: string;
}

export interface ModelPickerLabels {
  /** The menu's name. */
  menu: string;
  /** The listbox's name. */
  models: string;
  /** After the model on the trigger when extended thinking is on. */
  thinkingMark: string;
  thinking: string;
  thinkingDescription: string;
  effort: string;
  speed: string;
  quality: string;
  cost: string;
  /** After the note when extended thinking is on. */
  thinkingNote: string;
  /** Read after a bar: "1 of 5". */
  outOf: (value: number, max: number) => string;
}

const LABELS: ModelPickerLabels = {
  menu: 'Model',
  models: 'Models',
  thinkingMark: 'Thinking',
  thinking: 'Extended thinking',
  thinkingDescription: 'Thinks longer before it answers',
  effort: 'Effort',
  speed: 'Speed',
  quality: 'Quality',
  cost: 'Cost',
  thinkingNote: '+ thinking',
  outOf: (value, max) => `${value} of ${max}`,
};

const EFFORTS: ModelPickerEffort[] = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
];

export interface ModelPickerProps {
  models: ModelPickerModel[];
  /** The chosen model's `value`; leave out for uncontrolled. */
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  /** Extended thinking. Without `onThinkingChange` (or `defaultThinking`) there is no switch. */
  thinking?: boolean;
  defaultThinking?: boolean;
  onThinkingChange?: (thinking: boolean) => void;
  /** The effort, shown while thinking is on. */
  effort?: string;
  defaultEffort?: string;
  onEffortChange?: (effort: string) => void;
  /** The effort levels; `[]` shows none. Default Low, Medium, High. */
  efforts?: ModelPickerEffort[];
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Where the menu lines up with the trigger. Default `end`. */
  align?: 'start' | 'center' | 'end';
  /** Texts, for other languages. */
  labels?: Partial<ModelPickerLabels>;
  className?: string;
}

const MAX = 5;

function Bar({ label, value, t }: { label: string; value: number; t: ModelPickerLabels }) {
  const v = Math.max(0, Math.min(MAX, Math.round(value)));
  return (
    <div className="ds-model-picker__bar">
      <dt>{label}</dt>
      <dd>
        <span className="ds-model-picker__dashes" aria-hidden>
          {Array.from({ length: MAX }, (_, i) => (
            <span key={i} className={i < v ? 'ds-model-picker__dash ds-model-picker__dash--on' : 'ds-model-picker__dash'} />
          ))}
        </span>
        <span className="ds-model-picker__hidden">{t.outOf(v, MAX)}</span>
      </dd>
    </div>
  );
}

/**
 * The model menu of an AI chat, opened from the composer: each model with its logo and what it is for; pointing at
 * one shows its speed, quality and cost; extended thinking with its effort; and what the choice means at the bottom.
 * The trigger is a Ghost sm Button for AIChatComposer's `model` slot.
 */
export function ModelPicker({
  models,
  value: valueProp,
  defaultValue,
  onValueChange,
  thinking: thinkingProp,
  defaultThinking,
  onThinkingChange,
  effort: effortProp,
  defaultEffort,
  onEffortChange,
  efforts = EFFORTS,
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  align = 'end',
  labels = {},
  className,
}: ModelPickerProps) {
  const t = { ...LABELS, ...labels };
  const id = useId();
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue ?? models[0]?.value);
  const value = valueProp ?? uncontrolledValue;
  const [uncontrolledThinking, setUncontrolledThinking] = useState(defaultThinking ?? false);
  const thinking = thinkingProp ?? uncontrolledThinking;
  const [uncontrolledEffort, setUncontrolledEffort] = useState(defaultEffort ?? efforts[Math.floor(efforts.length / 2)]?.value);
  const effort = effortProp ?? uncontrolledEffort;
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const open = openProp ?? uncontrolledOpen;
  // The model pointed at (mouse or arrow keys): its bars show, and the note at the bottom follows it.
  const [pointed, setPointed] = useState<string | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const chosen = models.find((m) => m.value === value) ?? models[0];
  const current = models.find((m) => m.value === pointed) ?? chosen;
  const hasThinking = thinkingProp !== undefined || defaultThinking !== undefined || onThinkingChange !== undefined;
  const optionId = (v: string) => `${id}-option-${v}`;

  const setOpen = (next: boolean) => {
    if (openProp === undefined) setUncontrolledOpen(next);
    onOpenChange?.(next);
    if (!next) setPointed(null);
  };
  const choose = (next: string) => {
    if (valueProp === undefined) setUncontrolledValue(next);
    onValueChange?.(next);
    setOpen(false);
    triggerRef.current?.focus();
  };
  const setThinking = (next: boolean) => {
    if (thinkingProp === undefined) setUncontrolledThinking(next);
    onThinkingChange?.(next);
  };
  const setEffort = (next: string) => {
    if (!next) return;
    if (effortProp === undefined) setUncontrolledEffort(next);
    onEffortChange?.(next);
  };

  const onListKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const at = models.findIndex((m) => m.value === (pointed ?? value));
    const move = (to: number) => {
      event.preventDefault();
      const next = models[(to + models.length) % models.length];
      setPointed(next.value);
      document.getElementById(optionId(next.value))?.scrollIntoView?.({ block: 'nearest' });
    };
    if (event.key === 'ArrowDown') move(pointed === null ? at : at + 1);
    else if (event.key === 'ArrowUp') move(pointed === null ? at : at - 1);
    else if (event.key === 'Home') move(0);
    else if (event.key === 'End') move(models.length - 1);
    else if ((event.key === 'Enter' || event.key === ' ') && pointed !== null) {
      event.preventDefault();
      choose(pointed);
    }
  };

  const trigger = (
    <Button ref={triggerRef} variant="ghost" size="sm" leadingIcon={chosen?.icon} trailingIcon={<RiArrowDownSLine />}>
      {chosen?.label}
      {thinking ? ` · ${t.thinkingMark}` : ''}
    </Button>
  );

  return (
    <Popover trigger={trigger} aria-label={t.menu} align={align} width="320px" className={['ds-model-picker', className].filter(Boolean).join(' ')} open={open} onOpenChange={setOpen}>
      <div
        className="ds-model-picker__models"
        role="listbox"
        tabIndex={0}
        aria-label={t.models}
        aria-activedescendant={pointed !== null ? optionId(pointed) : undefined}
        onKeyDown={onListKeyDown}
        onMouseLeave={() => setPointed(null)}
      >
        {models.map((model) => {
          const isPointed = model.value === pointed;
          const hasBars = model.speed !== undefined || model.quality !== undefined || model.cost !== undefined;
          return (
            <div
              key={model.value}
              id={optionId(model.value)}
              role="option"
              aria-selected={model.value === value}
              className={['ds-model-picker__model', isPointed && hasBars && 'ds-model-picker__model--open'].filter(Boolean).join(' ')}
              data-highlighted={isPointed || undefined}
              onMouseMove={() => pointed !== model.value && setPointed(model.value)}
              onClick={() => choose(model.value)}
            >
              <div className="ds-model-picker__item">
                {model.icon !== undefined && (
                  <span className="ds-model-picker__icon" aria-hidden>
                    {model.icon}
                  </span>
                )}
                <span className="ds-model-picker__text">
                  <span className="ds-model-picker__label">
                    {model.label}
                  </span>
                  {model.description !== undefined && (
                    <span className="ds-model-picker__description">
                      {model.description}
                    </span>
                  )}
                </span>
                <span className="ds-model-picker__check" aria-hidden>
                  {model.value === value && <RiCheckLine />}
                </span>
              </div>
              {isPointed && hasBars && (
                <dl className="ds-model-picker__bars">
                  {model.speed !== undefined && <Bar label={t.speed} value={model.speed} t={t} />}
                  {model.quality !== undefined && <Bar label={t.quality} value={model.quality} t={t} />}
                  {model.cost !== undefined && <Bar label={t.cost} value={model.cost} t={t} />}
                </dl>
              )}
            </div>
          );
        })}
      </div>
      {hasThinking && (
        <>
          <div className="ds-model-picker__separator" aria-hidden />
          <div className="ds-model-picker__thinking">
            <Switch size="sm" label={t.thinking} caption={t.thinkingDescription} checked={thinking} onCheckedChange={setThinking} />
            {thinking && efforts.length > 0 && (
              <ToggleGroup type="single" spacing={2} aria-label={t.effort} value={effort} onValueChange={setEffort}>
                {efforts.map((level) => (
                  <ToggleGroupItem key={level.value} value={level.value}>
                    {level.label}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            )}
          </div>
        </>
      )}
      {current?.note !== undefined && (
        <p className="ds-model-picker__note">
          {current.note}
          {thinking ? ` ${t.thinkingNote}` : ''}
        </p>
      )}
    </Popover>
  );
}
