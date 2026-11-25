import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsToolCall, DsToolCallGroup, DsToolCallIcon } from './tool-call';
import { riDatabase2Line, riGlobalLine, riMailLine, riNotionFill } from '../internal/remix';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6102-1367';

const meta = {
  title: 'Patterns/Tool Call Card',
  decorators: [moduleMetadata({ imports: [DsToolCall, DsToolCallGroup, DsToolCallIcon] })],
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Tool Call Card** ([open in Figma](${FIGMA_URL})) for Angular: \`<div dsToolCall>\` and \`<div dsToolCallGroup>\` with the same markup and \`ds-tool-call\` classes as the React ToolCall. A call is one line – the tool (an icon marked \`dsToolCallIcon\`, \`name\`), \`summary\`, \`status\` and \`duration\` – that opens (\`[(open)]\`) to \`args\` and \`result\`, each with Copy; a failed call opens by itself with the \`error\`, Retry (\`retryable\`, \`(retry)\`) and Copy error. The group sums up one turn's calls and folds to one line.`,
      },
    },
  },
} satisfies Meta;

export default meta;

// min(460px, calc(100vw - 32px)), written as the CSSOM serialises React's inline style.
const WIDTH = 'style="width: min(460px, -32px + 100vw);"';
const icon = (svg: string) => svg.replace('<svg ', '<svg dsToolCallIcon ');
const ARGS = '{\n  "query": "CRM pricing 2026 small sales team",\n  "max_results": 5\n}';
const ERROR = 'Error: connect ETIMEDOUT\nsmtp.example.com:587';
const calls = `
  <div dsToolCall name="search_web" summary="5 pricing pages" duration="0.9 s" [args]="ARGS" result="5 pages">${icon(riGlobalLine)}</div>
  <div dsToolCall name="query_deals" summary="12 open deals · €184k" duration="0.6 s" args='{ "stage": "open" }' result="12 deals, total €184,200">${icon(riDatabase2Line)}</div>
  <div dsToolCall name="read_page" summary="CRM shortlist" duration="0.4 s" args='{ "page": "CRM shortlist" }' result="5 tools, 3 notes">${icon(riNotionFill)}</div>
  <div dsToolCall name="send_email" summary="SMTP timeout" status="error" duration="0.5 s" [open]="false" [error]="ERROR" retryable>${icon(riMailLine)}</div>`;

/** Figma "Running, open": the arguments, the result still to come. */
export const RunningOpen: StoryObj = {
  render: () => ({
    props: { ARGS },
    template: `<div ${WIDTH}><div dsToolCall [open]="true" name="search_web" summary="Searching the web for “CRM pricing…”" status="running" duration="1.4 s" [args]="ARGS">${icon(riGlobalLine)}</div></div>`,
  }),
};

/** Figma "Done, open": arguments and result, each with Copy. */
export const DoneOpen: StoryObj = {
  render: () => ({
    props: { result: '12 deals, total €184,200\nlargest: Northwind · €42,000' },
    template: `<div ${WIDTH}><div dsToolCall [open]="true" name="query_deals" summary="12 open deals · €184k" duration="0.6 s" args='{ "stage": "open", "owner": "team" }' [result]="result">${icon(riDatabase2Line)}</div></div>`,
  }),
};

/** Figma "Failed": opens by itself with the error, Retry and Copy error. */
export const Failed: StoryObj = {
  render: () => ({
    props: { ERROR },
    template: `<div ${WIDTH}><div dsToolCall name="send_email" summary="SMTP timeout" status="error" duration="1.3 s" [error]="ERROR" retryable>${icon(riMailLine)}</div></div>`,
  }),
};

/** Figma "A group": one turn's calls, summed up in the header; each row opens under itself. */
export const Group: StoryObj = {
  render: () => ({
    props: { ARGS, ERROR },
    template: `<div ${WIDTH}><div dsToolCallGroup [open]="true" duration="2.4 s" [failed]="1">${calls}</div></div>`,
  }),
};

/** Figma "Folded": one line once the answer is written; it opens to the group. */
export const Folded: StoryObj = {
  render: () => ({
    template: `<div ${WIDTH}><div dsToolCallGroup duration="2.4 s">
      <div dsToolCall name="search_web" summary="5 pricing pages" duration="0.9 s">${icon(riGlobalLine)}</div>
      <div dsToolCall name="query_deals" summary="12 open deals · €184k" duration="0.6 s">${icon(riDatabase2Line)}</div>
      <div dsToolCall name="read_page" summary="CRM shortlist" duration="0.4 s">${icon(riNotionFill)}</div>
      <div dsToolCall name="send_email" summary="Sent to 3 people" duration="0.5 s">${icon(riMailLine)}</div>
    </div></div>`,
  }),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => ({
    props: { schemes: ['light', 'dark'], ARGS, ERROR },
    template: `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));">
      @for (scheme of schemes; track scheme) {
        <div data-ds-brand="theme-1" [attr.data-ds-scheme]="scheme" style="background: var(--ds-background); padding: 24px; display: grid; gap: 16px; align-content: start;">
          <div dsToolCall [open]="true" name="query_deals" summary="12 open deals · €184k" duration="0.6 s" args='{ "stage": "open" }' result="12 deals, total €184,200">${icon(riDatabase2Line)}</div>
          <div dsToolCall name="send_email" summary="SMTP timeout" status="error" duration="1.3 s" error="Error: connect ETIMEDOUT" retryable>${icon(riMailLine)}</div>
          <div dsToolCallGroup [open]="true" duration="2.4 s" [failed]="1">${calls}</div>
        </div>
      }
    </div>`,
  }),
};
