import { RiLockLine, RiRobotLine } from '@remixicon/react';
import { useId, useState, type HTMLAttributes, type ReactNode, type Ref } from 'react';
import { Badge } from '../Badge';
import { ToggleGroup, ToggleGroupItem } from '../ToggleGroup';
import { Tooltip } from '../Tooltip';

// Styles live in @helloantek/ds-css (classes ds-autonomy*); this component only renders the markup.

/** The dial's three stops. */
export type AutonomyLevel = 'ask' | 'risky' | 'auto';
/** How risky an action is: `safe` runs on its own from If risky, `risky` and `destructive` only at Full auto. */
export type AutonomyRisk = 'safe' | 'risky' | 'destructive';

/** One action the agent can take. */
export interface AutonomyAction {
  /** What it does: "Send replies". */
  label: ReactNode;
  /** The tool it uses (a 16 px icon). */
  icon?: ReactNode;
  risk?: AutonomyRisk;
  /** Always asks, whatever the dial says; the lock's tooltip gives this reason. */
  locked?: ReactNode;
}

/** Whether an action runs on its own at a stop of the dial. */
export function runsOnItsOwn(action: AutonomyAction, level: AutonomyLevel): boolean {
  if (action.locked !== undefined && action.locked !== false) return false;
  if (level === 'auto') return true;
  if (level === 'risky') return (action.risk ?? 'safe') === 'safe';
  return false;
}

export interface AutonomyDialProps extends Omit<HTMLAttributes<HTMLElement>, 'title' | 'defaultValue'> {
  ref?: Ref<HTMLElement>;
  /** The agent: "Support agent", and its mark (default a robot). */
  agent: ReactNode;
  agentIcon?: ReactNode;
  /** Under the agent (default "What it may do without asking you"). */
  description?: ReactNode;
  /** The stop: controlled (`value`, `onValueChange`) or not (`defaultValue`, default `risky`). */
  value?: AutonomyLevel;
  defaultValue?: AutonomyLevel;
  onValueChange?: (value: AutonomyLevel) => void;
  /** Every action it can take, in order; the dial splits them between the two lists. */
  actions: AutonomyAction[];
  /** Texts, for other languages. */
  labels?: Partial<{
    description: string;
    dial: string;
    ask: string;
    risky: string;
    auto: string;
    runs: string;
    asks: string;
    nothing: string;
    riskyBadge: string;
    destructiveBadge: string;
    locked: string;
  }>;
}

/** How much one agent may do on its own: a three-stop dial, and its actions split between "Runs on its own" and "Asks you first". */
export function AutonomyDial({ agent, agentIcon, description, value, defaultValue = 'risky', onValueChange, actions, labels = {}, className, ...rest }: AutonomyDialProps) {
  const id = useId();
  const t = {
    description: 'What it may do without asking you',
    dial: 'Autonomy',
    ask: 'Always ask',
    risky: 'If risky',
    auto: 'Full auto',
    runs: 'Runs on its own',
    asks: 'Asks you first',
    nothing: 'Nothing – it asks before every action.',
    riskyBadge: 'Risky',
    destructiveBadge: 'Destructive',
    locked: 'Locked',
    ...labels,
  };
  const [uncontrolled, setUncontrolled] = useState<AutonomyLevel>(defaultValue);
  const level = value ?? uncontrolled;
  const change = (next: string) => {
    // A dial always has a stop: pressing the current one keeps it.
    if (next !== 'ask' && next !== 'risky' && next !== 'auto') return;
    if (value === undefined) setUncontrolled(next);
    onValueChange?.(next);
  };

  const alone = actions.filter((a) => runsOnItsOwn(a, level));
  const asks = actions.filter((a) => !runsOnItsOwn(a, level));

  const row = (action: AutonomyAction, i: number) => {
    const locked = action.locked !== undefined && action.locked !== false;
    return (
      <li key={i} className={['ds-autonomy__action', locked && 'ds-autonomy__action--locked'].filter(Boolean).join(' ')}>
        {action.icon}
        <span className="ds-autonomy__label">{action.label}</span>
        {action.risk === 'risky' && (
          <Badge variant="tint" color="amber">
            {t.riskyBadge}
          </Badge>
        )}
        {action.risk === 'destructive' && (
          <Badge variant="tint" color="red">
            {t.destructiveBadge}
          </Badge>
        )}
        {locked && (
          <Tooltip content={action.locked} side="left">
            <button type="button" className="ds-autonomy__lock" aria-label={t.locked}>
              <RiLockLine aria-hidden />
            </button>
          </Tooltip>
        )}
      </li>
    );
  };

  return (
    <section {...rest} aria-labelledby={rest['aria-label'] ? undefined : `${id}-agent`} className={['ds-autonomy', className].filter(Boolean).join(' ')}>
      <div className="ds-autonomy__header">
        <div className="ds-autonomy__agent">
          <span className="ds-autonomy__mark" aria-hidden>
            {agentIcon ?? <RiRobotLine />}
          </span>
          <div>
            <p className="ds-autonomy__name" id={`${id}-agent`}>
              {agent}
            </p>
            <p className="ds-autonomy__description">{description ?? t.description}</p>
          </div>
        </div>
        <ToggleGroup type="single" value={level} onValueChange={change} aria-label={t.dial}>
          <ToggleGroupItem value="ask">{t.ask}</ToggleGroupItem>
          <ToggleGroupItem value="risky">{t.risky}</ToggleGroupItem>
          <ToggleGroupItem value="auto">{t.auto}</ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="ds-autonomy__lists">
        <div className="ds-autonomy__group">
          <h4 className="ds-autonomy__title" id={`${id}-runs`}>
            {t.runs}
            <Badge variant="tint" color="neutral">
              {alone.length}
            </Badge>
          </h4>
          {alone.length > 0 ? (
            <ul className="ds-autonomy__actions" aria-labelledby={`${id}-runs`}>
              {alone.map(row)}
            </ul>
          ) : (
            <p className="ds-autonomy__empty">{t.nothing}</p>
          )}
        </div>
        {asks.length > 0 && (
          <div className="ds-autonomy__group">
            <h4 className="ds-autonomy__title" id={`${id}-asks`}>
              {t.asks}
              <Badge variant="tint" color="neutral">
                {asks.length}
              </Badge>
            </h4>
            <ul className="ds-autonomy__actions" aria-labelledby={`${id}-asks`}>
              {asks.map(row)}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
