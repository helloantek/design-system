import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState, type CSSProperties, type ReactNode } from 'react';
import {
  RiArrowRightUpLine,
  RiBookOpenLine,
  RiBrainLine,
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleLine,
  RiErrorWarningLine,
  RiFileCodeLine,
  RiFileExcel2Line,
  RiFileLine,
  RiFilePdf2Line,
  RiFolderOpenLine,
  RiGitBranchLine,
  RiGlobalLine,
  RiImageLine,
  RiListCheck2,
  RiPencilLine,
  RiQuillPenLine,
  RiResetLeftLine,
  RiRobot2Line,
  RiSearchEyeLine,
  RiSearchLine,
  RiTerminalLine,
} from '@remixicon/react';
import { Button } from '../Button';
import { Trace, TraceCode, TraceCollapsible, TraceLine, type TraceStatus } from './AITrace';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=3030-2';

const meta = {
  title: 'Components/AI Trace',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Trace Line**, **Trace Content** and **Trace** ([open in Figma](${FIGMA_URL})): the steps an AI agent took, one line each. \`TraceLine\` is a step (\`status\` \`done\` · \`running\` · \`error\` · \`pending\`, an \`icon\`, a \`description\` and a \`trailingIcon\`; \`href\` makes it a link, \`onClick\` a button). \`TraceCollapsible\` is Type=Trigger: a button that opens its **Trace Content** (\`open\`, \`defaultOpen\`, \`onOpenChange\`). \`Trace\` stacks them 8 px apart; \`TraceCode\` shows command output. Running, failed and pending steps say so to assistive technology (\`statusLabel\`). The icons here are Remix icons; Figma draws lucide ones.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const width: CSSProperties = { width: 'min(480px, calc(100vw - 32px))' };
const prose: CSSProperties = { margin: 0, color: 'var(--ds-foreground)', fontFamily: 'var(--ds-font-sans)', fontSize: 14, lineHeight: '20px' };

type PlaygroundArgs = { title: string; status: TraceStatus; type: 'line' | 'trigger' | 'link'; description: string; icon: boolean };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { title: 'Searched for minimumReleaseAge', status: 'done', type: 'line', description: '8 results', icon: true },
  argTypes: {
    title: { name: 'Title' },
    status: { name: 'Status', control: 'inline-radio', options: ['done', 'running', 'error', 'pending'] },
    type: { name: 'Type', control: 'inline-radio', options: ['line', 'trigger', 'link'] },
    description: { name: 'Description text', description: 'Empty hides it' },
    icon: { name: 'Icon' },
  },
  render: ({ title, status, type, description, icon }) => {
    const common = { status, description: description || undefined, icon: icon ? <RiSearchLine /> : undefined };
    return (
      <div style={width}>
        {type === 'trigger' ? (
          <TraceCollapsible {...common} title={title} defaultOpen>
            <p>Found 2 matches in packages/web/package.json and pnpm-workspace.yaml.</p>
          </TraceCollapsible>
        ) : (
          <TraceLine {...common} href={type === 'link' ? 'https://pnpm.io/settings' : undefined} target="_blank" trailingIcon={type === 'link' ? <RiArrowRightUpLine /> : undefined}>
            {title}
          </TraceLine>
        )}
      </div>
    );
  },
};

/** Figma demo "Demo": three steps and an open command with its output. */
export const Demo: StoryObj = {
  render: () => (
    <Trace style={width}>
      <TraceLine icon={<RiBrainLine />}>Thought for 8s</TraceLine>
      <TraceLine icon={<RiGlobalLine />} description="8 results">
        Searched the web
      </TraceLine>
      <TraceLine icon={<RiFileLine />}>Read 3 pages</TraceLine>
      <TraceCollapsible icon={<RiTerminalLine />} title="Ran pnpm test" description="14s" defaultOpen>
        <TraceCode>{'Packages: +412\nProgress: resolved 412, reused 398, downloaded 14\nDone in 8.7s'}</TraceCode>
      </TraceCollapsible>
    </Trace>
  ),
};

/** Figma demo "Line": one step. */
export const Line: StoryObj = {
  render: () => <TraceLine icon={<RiGitBranchLine />}>Created branch fix/frozen-lockfile</TraceLine>,
};

/** Figma demo "Status": done, failed, running and pending. */
export const Status: StoryObj = {
  render: () => (
    <Trace style={width}>
      <TraceLine icon={<RiTerminalLine />}>Ran pnpm install</TraceLine>
      <TraceLine status="error" icon={<RiErrorWarningLine />}>
        Failed to start the dev server
      </TraceLine>
      <TraceLine status="running" icon={<RiTerminalLine />}>
        Running the test suite
      </TraceLine>
      <TraceLine status="pending" icon={<RiCheckboxBlankCircleLine />}>
        Deploy a preview
      </TraceLine>
    </Trace>
  ),
};

/** Figma demo "Description": a diff count, a duration, a result count. */
export const Description: StoryObj = {
  render: () => (
    <Trace style={width}>
      <TraceLine icon={<RiPencilLine />} description="+48 −12">
        Edited package.json
      </TraceLine>
      <TraceLine icon={<RiTerminalLine />} description="14s">
        Ran pnpm test
      </TraceLine>
      <TraceLine icon={<RiGlobalLine />} description="8 results">
        Searched the web
      </TraceLine>
    </Trace>
  ),
};

/** Figma demo "Collapsible": a command that opens to show its output. */
export const Collapsible: StoryObj = {
  render: () => (
    <div style={width}>
      <TraceCollapsible icon={<RiTerminalLine />} title="Ran node --version" defaultOpen>
        <TraceCode>v22.11.0</TraceCode>
      </TraceCollapsible>
    </div>
  ),
};

/** Figma demo "Link": a step that opens what it read. */
export const Link: StoryObj = {
  render: () => (
    <TraceLine icon={<RiBookOpenLine />} trailingIcon={<RiArrowRightUpLine />} href="https://base-ui.com/react/overview/quick-start" target="_blank">
      Read the Base UI install guide
    </TraceLine>
  ),
};

/** Figma demo "Web search": a search, then the sources it read, each a link. */
export const WebSearch: StoryObj = {
  render: () => (
    <Trace style={width}>
      <TraceLine icon={<RiSearchLine />}>Searched for pnpm minimumReleaseAge</TraceLine>
      <TraceCollapsible icon={<RiGlobalLine />} title="Read 3 sources" defaultOpen>
        {[
          ['Settings (.npmrc)', 'pnpm.io', 'https://pnpm.io/settings'],
          ['Previous releases', 'nodejs.org', 'https://nodejs.org/en/about/previous-releases'],
          ['Releases', 'github.com', 'https://github.com/pnpm/pnpm/releases'],
        ].map(([title, site, href]) => (
          <TraceLine key={href} description={site} trailingIcon={<RiArrowRightUpLine />} href={href} target="_blank">
            {title}
          </TraceLine>
        ))}
      </TraceCollapsible>
    </Trace>
  ),
};

/** Steps that appear over time, for the demos with a Replay button. */
function useTimeline(steps: number, interval: number) {
  const [step, setStep] = useState(0);
  const [run, setRun] = useState(0);
  useEffect(() => {
    setStep(0);
    const id = window.setInterval(() => setStep((s) => (s >= steps ? s : s + 1)), interval);
    return () => window.clearInterval(id);
  }, [run, steps, interval]);
  return { step, replay: () => setRun((r) => r + 1) };
}

const replayButton = (onClick: () => void, label = 'Replay', icon?: ReactNode) => (
  <Button variant="outline" size="sm" leadingIcon={icon} onClick={onClick} style={{ justifySelf: 'start' }}>
    {label}
  </Button>
);

const REASONING =
  'The bug only shows on a fresh install, so the lockfile is the first suspect. The CI log says the frozen lockfile no longer matches package.json. Someone bumped a dependency without running install, so the fix is to regenerate the lockfile and commit it with the bump.';

/** Figma demo "Streaming reasoning": the thought streams in while the title sweeps, then settles as "Thought for 6s". */
export const StreamingReasoning: StoryObj = {
  render: function Render() {
    const words = REASONING.split(' ');
    const { step, replay } = useTimeline(words.length, 60);
    const done = step >= words.length;
    return (
      <div style={{ display: 'grid', gap: 24, ...width }}>
        <TraceCollapsible icon={<RiBrainLine />} status={done ? 'done' : 'running'} title={done ? 'Thought for 6s' : 'Thinking'} defaultOpen>
          <p style={{ color: 'var(--ds-foreground)' }} aria-live="off">
            {words.slice(0, step).join(' ')}
          </p>
        </TraceCollapsible>
        {replayButton(replay)}
      </div>
    );
  },
};

const TOOL_CALLS: { icon: ReactNode; running: string; done: string; description: string }[] = [
  { icon: <RiFileLine />, running: 'Reading src/cart.ts', done: 'Read src/cart.ts', description: '214 lines' },
  { icon: <RiPencilLine />, running: 'Editing src/cart.ts', done: 'Edited src/cart.ts', description: '+12 −3' },
  { icon: <RiTerminalLine />, running: 'Running pnpm test', done: 'Ran pnpm test', description: '38 passed · 11s' },
];

/** Figma demo "Tool calls": each call runs, then shows what it did. */
export const ToolCalls: StoryObj = {
  render: function Render() {
    const { step, replay } = useTimeline(TOOL_CALLS.length * 2, 700);
    return (
      <div style={{ display: 'grid', gap: 24, ...width }}>
        <Trace aria-busy={step < TOOL_CALLS.length * 2}>
          {TOOL_CALLS.slice(0, Math.ceil(step / 2)).map((c, i) => {
            const done = step >= (i + 1) * 2;
            return (
              <TraceLine key={c.done} icon={c.icon} status={done ? 'done' : 'running'} description={done ? c.description : undefined}>
                {done ? c.done : c.running}
              </TraceLine>
            );
          })}
        </Trace>
        {replayButton(replay)}
      </div>
    );
  },
};

const PLAN = ['Find where the discount is applied', 'Round the total after the discount', 'Add a test for a 15% coupon', 'Run the test suite'];

/** Figma demo "Plan": a checklist that fills in as the agent works through it. */
export const Plan: StoryObj = {
  render: function Render() {
    const { step, replay } = useTimeline(PLAN.length + 1, 900);
    const doneCount = Math.max(0, Math.min(PLAN.length, step - 1));
    return (
      <div style={{ display: 'grid', gap: 24, ...width }}>
        <TraceCollapsible icon={<RiListCheck2 />} title="Plan" description={`${doneCount} of ${PLAN.length} done`} defaultOpen>
          {PLAN.map((item, i) => {
            const status: TraceStatus = i < doneCount ? 'done' : i === doneCount && step > 0 ? 'running' : 'pending';
            return (
              <TraceLine key={item} status={status} icon={status === 'done' ? <RiCheckboxCircleLine /> : <RiCheckboxBlankCircleLine />}>
                {item}
              </TraceLine>
            );
          })}
        </TraceCollapsible>
        {replayButton(replay)}
      </div>
    );
  },
};

/** Figma demo "Deep research": planned, searching, then reading and writing, step by step. */
export const DeepResearch: StoryObj = {
  render: function Render() {
    const { step, replay } = useTimeline(4, 1200);
    const status = (i: number): TraceStatus => (i < step ? 'done' : i === step ? 'running' : 'pending');
    const steps: [ReactNode, string, string?][] = [
      [<RiSearchEyeLine key="i" />, 'Planned 5 questions'],
      [<RiGlobalLine key="i" />, step > 1 ? 'Searched the web' : 'Searching the web', '21 sources'],
      [<RiBookOpenLine key="i" />, step > 2 ? 'Read sources' : 'Reading sources'],
      [<RiQuillPenLine key="i" />, step > 3 ? 'Wrote the report' : 'Writing the report'],
    ];
    return (
      <div style={{ display: 'grid', gap: 24, ...width }}>
        <Trace>
          {steps.map(([icon, title, description], i) => (
            <TraceLine key={i} icon={icon} status={status(i)} description={description}>
              {title}
            </TraceLine>
          ))}
        </Trace>
        {replayButton(replay, 'Reset', <RiResetLeftLine />)}
      </div>
    );
  },
};

/** Figma demo "Code interpreter": the code, its output and the answer it led to. */
export const CodeInterpreter: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 12, ...width }}>
      <TraceCollapsible icon={<RiTerminalLine />} title="Analyzed signups.csv" description="14s" defaultOpen>
        <TraceCode>{'df = pd.read_csv("signups.csv")\nweekly = df.resample("W", on="date").size()\nweekly.pct_change().tail(4).round(3)'}</TraceCode>
        <TraceCode>{'2026-09-21    0.041\n2026-09-28    0.112\n2026-10-05   -0.018\n2026-10-12    0.236'}</TraceCode>
      </TraceCollapsible>
      <p style={prose}>Signups grew 24% last week, the biggest jump this quarter — right after the pricing page went live.</p>
    </div>
  ),
};

/** Figma demo "Files": files the agent read, and one it could not. */
export const Files: StoryObj = {
  render: () => (
    <Trace style={width}>
      <TraceLine icon={<RiFilePdf2Line />} description="18 pages">
        Read quarterly-report.pdf
      </TraceLine>
      <TraceLine icon={<RiFileExcel2Line />} description="2,400 rows">
        Read signups.csv
      </TraceLine>
      <TraceLine status="error" icon={<RiImageLine />} description="no text found">
        Couldn&apos;t read whiteboard.png
      </TraceLine>
    </Trace>
  ),
};

/** Figma demo "Subagents": agents that ran in parallel, each with its own steps. */
export const Subagents: StoryObj = {
  render: () => (
    <div style={width}>
      <TraceCollapsible icon={<RiRobot2Line />} title="Ran 2 agents" defaultOpen>
        <TraceCollapsible title="Explored the checkout flow" description="41s" defaultOpen>
          <TraceLine icon={<RiFolderOpenLine />} description="12 files">
            Listed src/checkout
          </TraceLine>
          <TraceLine icon={<RiFileCodeLine />} description="88 lines">
            Read src/checkout/total.ts
          </TraceLine>
        </TraceCollapsible>
        <TraceCollapsible title="Looked for rounding bug" description="1m 3s" defaultOpen>
          <TraceLine icon={<RiSearchLine />} description="9 matches">
            Searched for Math.round
          </TraceLine>
          <TraceLine icon={<RiFileCodeLine />} description="54 lines">
            Read src/lib/money.ts
          </TraceLine>
        </TraceCollapsible>
      </TraceCollapsible>
    </div>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ padding: 24, background: 'var(--ds-background)' }}>
          <Trace>
            <TraceLine icon={<RiTerminalLine />} description="14s">
              Ran pnpm install
            </TraceLine>
            <TraceLine status="error" icon={<RiErrorWarningLine />}>
              Failed to start the dev server
            </TraceLine>
            <TraceLine status="running" icon={<RiTerminalLine />}>
              Running the test suite
            </TraceLine>
            <TraceLine status="pending" icon={<RiCheckboxBlankCircleLine />}>
              Deploy a preview
            </TraceLine>
            <TraceCollapsible icon={<RiTerminalLine />} title="Ran node --version" defaultOpen>
              <TraceCode>v22.11.0</TraceCode>
            </TraceCollapsible>
          </Trace>
        </div>
      ))}
    </div>
  ),
};
