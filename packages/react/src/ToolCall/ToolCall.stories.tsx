import type { Meta, StoryObj } from '@storybook/react-vite';
import { RiDatabase2Line, RiGlobalLine, RiMailLine, RiNotionFill } from '@remixicon/react';
import { useEffect, useState, type CSSProperties } from 'react';
import { Bubble } from '../Bubble';
import { ToolCall, ToolCallGroup, type ToolCallStatus } from './ToolCall';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6102-1367';

const meta = {
  title: 'Patterns/Tool Call Card',
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Tool Call Card** ([open in Figma](${FIGMA_URL})): an agent's tool call in one line – the tool, what it does, its status and time. \`ToolCall\` opens to the arguments and the result, each with Copy; a failed call opens by itself with the error, Retry and Copy error. \`ToolCallGroup\` holds the calls of one turn: while running a plain "Using tools…" line over the calls as cards, then a card that sums them up ("4 tool calls · 2.4 s · 1 failed") and folds to one line ("Used 4 tools").

**When to use:** showing a single tool call inside an agent's reply or log, so people can see what ran, with which arguments, and what came back.
**When not to use:** many calls in a row tell the story better as steps (use Agent Trail), or timing and cost matter more than the arguments (use Trace Waterfall).`,
      },
    },
  },
} satisfies Meta;

export default meta;

const WIDTH: CSSProperties = { width: 'min(460px, calc(100vw - 32px))' };
const ARGS = '{\n  "query": "CRM pricing 2026 small sales team",\n  "max_results": 5\n}';

type PlaygroundArgs = { status: ToolCallStatus; open: boolean };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { status: 'done', open: true },
  argTypes: {
    status: { name: 'Status', control: 'inline-radio', options: ['running', 'done', 'error'] },
    open: { name: 'Open' },
  },
  render: ({ status, open }) => (
    <div style={WIDTH}>
      <ToolCall
        key={`${status}${open}`}
        defaultOpen={open}
        icon={status === 'error' ? <RiMailLine /> : <RiGlobalLine />}
        name={status === 'error' ? 'send_email' : 'search_web'}
        summary={status === 'running' ? 'Searching the web for “CRM pricing…”' : status === 'error' ? 'SMTP timeout' : '5 pricing pages'}
        status={status}
        duration={status === 'running' ? '1.4 s' : status === 'error' ? '1.3 s' : '0.9 s'}
        args={status === 'error' ? undefined : ARGS}
        result={status === 'done' ? 'HubSpot, Pipedrive, Close, Attio, Folk\n5 pages, 2026 prices' : undefined}
        error={status === 'error' ? 'Error: connect ETIMEDOUT\nsmtp.example.com:587' : undefined}
        onRetry={() => {}}
      />
    </div>
  ),
};

/** Figma "In chat": the call the agent is making right now, under a running group line with a live timer. */
export const InChat: StoryObj = {
  render: function Render() {
    const [tenths, setTenths] = useState(9);
    useEffect(() => {
      const t = setInterval(() => setTenths((n) => (n >= 99 ? 9 : n + 1)), 100);
      return () => clearInterval(t);
    }, []);
    const time = `${(tenths / 10).toFixed(1)} s`;
    return (
      <div style={{ ...WIDTH, display: 'grid', gap: 10 }}>
        <Bubble variant="muted" style={{ justifySelf: 'end', maxWidth: 324 }}>
          Compare CRM pricing for our 10-person team and check open deals.
        </Bubble>
        <ToolCallGroup status="running" icon={<RiGlobalLine />} duration={time}>
          <ToolCall icon={<RiGlobalLine />} name="search_web" summary="Searching the web for “CRM pricing…”" status="running" duration={time} args={ARGS} />
        </ToolCallGroup>
      </div>
    );
  },
};

/** Figma "Running, open": the arguments, the result still to come. */
export const RunningOpen: StoryObj = {
  render: () => (
    <div style={WIDTH}>
      <ToolCall defaultOpen icon={<RiGlobalLine />} name="search_web" summary="Searching the web for “CRM pricing…”" status="running" duration="1.4 s" args={ARGS} />
    </div>
  ),
};

/** Figma "Done, open": arguments and result, each with Copy. */
export const DoneOpen: StoryObj = {
  render: () => (
    <div style={WIDTH}>
      <ToolCall defaultOpen icon={<RiDatabase2Line />} name="query_deals" summary="12 open deals · €184k" duration="0.6 s" args={'{ "stage": "open", "owner": "team" }'} result={'12 deals, total €184,200\nlargest: Northwind · €42,000'} />
    </div>
  ),
};

/** Figma "Failed": opens by itself with the error, Retry and Copy error. */
export const Failed: StoryObj = {
  render: () => (
    <div style={WIDTH}>
      <ToolCall icon={<RiMailLine />} name="send_email" summary="SMTP timeout" status="error" duration="1.3 s" error={'Error: connect ETIMEDOUT\nsmtp.example.com:587'} onRetry={() => {}} />
    </div>
  ),
};

function Calls() {
  return (
    <>
      <ToolCall icon={<RiGlobalLine />} name="search_web" summary="5 pricing pages" duration="0.9 s" args={ARGS} result="5 pages" />
      <ToolCall icon={<RiDatabase2Line />} name="query_deals" summary="12 open deals · €184k" duration="0.6 s" args={'{ "stage": "open" }'} result="12 deals, total €184,200" />
      <ToolCall icon={<RiNotionFill />} name="read_page" summary="CRM shortlist" duration="0.4 s" args={'{ "page": "CRM shortlist" }'} result="5 tools, 3 notes" />
      <ToolCall icon={<RiMailLine />} name="send_email" summary="SMTP timeout" status="error" duration="0.5 s" defaultOpen={false} error={'Error: connect ETIMEDOUT\nsmtp.example.com:587'} onRetry={() => {}} />
    </>
  );
}

/** Figma "A group": one turn's calls, summed up in the header; each row opens under itself. */
export const Group: StoryObj = {
  render: () => (
    <div style={WIDTH}>
      <ToolCallGroup defaultOpen duration="2.4 s" failed={1}>
        <Calls />
      </ToolCallGroup>
    </div>
  ),
};

/** Figma "Folded": one line once the answer is written; it opens to the group. */
export const Folded: StoryObj = {
  render: () => (
    <div style={WIDTH}>
      <ToolCallGroup duration="2.4 s">
        <ToolCall icon={<RiGlobalLine />} name="search_web" summary="5 pricing pages" duration="0.9 s" />
        <ToolCall icon={<RiDatabase2Line />} name="query_deals" summary="12 open deals · €184k" duration="0.6 s" />
        <ToolCall icon={<RiNotionFill />} name="read_page" summary="CRM shortlist" duration="0.4 s" />
        <ToolCall icon={<RiMailLine />} name="send_email" summary="Sent to 3 people" duration="0.5 s" />
      </ToolCallGroup>
    </div>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'grid', gap: 16, alignContent: 'start' }}>
          <ToolCall defaultOpen icon={<RiDatabase2Line />} name="query_deals" summary="12 open deals · €184k" duration="0.6 s" args={'{ "stage": "open" }'} result="12 deals, total €184,200" />
          <ToolCall icon={<RiMailLine />} name="send_email" summary="SMTP timeout" status="error" duration="1.3 s" error="Error: connect ETIMEDOUT" onRetry={() => {}} />
          <ToolCallGroup defaultOpen duration="2.4 s" failed={1}>
            <Calls />
          </ToolCallGroup>
        </div>
      ))}
    </div>
  ),
};
