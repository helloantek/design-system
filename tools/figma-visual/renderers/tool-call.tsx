import { RiDatabase2Line, RiGlobalLine, RiMailLine, RiNotionFill } from '@remixicon/react';
import { ToolCall, ToolCallGroup } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps the Sort UI 2.0 pattern "Tool Call Card" (6102:1367) to code with its sample content, 460 px wide.
const ARGS = '{\n  "query": "CRM pricing 2026 small sales team",\n  "max_results": 5\n}';

export const renderToolCall: Renderer = (p) => {
  let el;
  switch (p.State) {
    case 'Running':
      el = <ToolCall icon={<RiGlobalLine />} name="search_web" summary="Searching the web for “CRM pricing…”" status="running" duration="0.9 s" args={ARGS} />;
      break;
    case 'Running open':
      el = <ToolCall defaultOpen icon={<RiGlobalLine />} name="search_web" summary="Searching the web for “CRM pricing…”" status="running" duration="1.4 s" args={ARGS} />;
      break;
    case 'Done open':
      el = <ToolCall defaultOpen icon={<RiDatabase2Line />} name="query_deals" summary="12 open deals · €184k" duration="0.6 s" args={'{ "stage": "open", "owner": "team" }'} result={'12 deals, total €184,200\nlargest: Northwind · €42,000'} />;
      break;
    case 'Failed':
      el = <ToolCall icon={<RiMailLine />} name="send_email" summary="SMTP timeout" status="error" duration="1.3 s" error={'Error: connect ETIMEDOUT\nsmtp.example.com:587'} onRetry={() => {}} />;
      break;
    default: {
      const open = p.State === 'Group';
      el = (
        <ToolCallGroup defaultOpen={open} duration="2.4 s" failed={open ? 1 : 0}>
          <ToolCall icon={<RiGlobalLine />} name="search_web" summary="5 pricing pages" duration="0.9 s" />
          <ToolCall icon={<RiDatabase2Line />} name="query_deals" summary="12 open deals · €184k" duration="0.6 s" />
          <ToolCall icon={<RiNotionFill />} name="read_page" summary="CRM shortlist" duration="0.4 s" />
          <ToolCall icon={<RiMailLine />} name="send_email" summary="SMTP timeout" status={open ? 'error' : 'done'} duration="0.5 s" defaultOpen={false} />
        </ToolCallGroup>
      );
    }
  }
  return (
    <div id="target" style={{ width: 460, padding: 8, background: 'var(--ds-background)' }}>
      {el}
    </div>
  );
};
