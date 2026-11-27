import { AIChatComposer, Button, WritingAssistant } from '@helloantek/ds-react';
import { RiAddLine, RiArrowDownSLine } from '@remixicon/react';
import type { Renderer } from './types';

const SELECTION = 'Your refund has been processed and should appear within 5–10 business days.';
const SUGGESTIONS = ['Make it shorter', 'Fix the grammar', 'Sound more friendly', 'Translate to Polish'];
const plus = <Button variant="ghost" size="sm" icon={<RiAddLine />} aria-label="Add files or tools" />;
const model = (
  <Button variant="ghost" size="sm" trailingIcon={<RiArrowDownSLine />}>
    Opus 5.5 High
  </Button>
);
const composer = <AIChatComposer layout="column" placeholder="Ask about anything…" leading={plus} model={model} />;

// Maps the Sort UI 2.0 pattern "Writing Assistant" (6132:2642) to code: empty, replying, reply ready and dictating.
export const renderWritingAssistant: Renderer = (p) => {
  const common = { onClose: () => {}, style: { width: 400 } };
  let el;
  switch (p.State) {
    case 'Replying':
      el = <WritingAssistant {...common} selection={SELECTION} ask="Sound more friendly" reply="Good news – your refund is on its way and" status="streaming" onStop={() => {}} composer={composer} />;
      break;
    case 'Reply ready':
      el = (
        <WritingAssistant
          {...common}
          selection={SELECTION}
          ask="Sound more friendly"
          reply="Good news – your refund is on its way and should reach your card within 5–10 working days. Thanks for bearing with us!"
          status="ready"
          onReplace={() => {}}
          onInsertBelow={() => {}}
          onCopy={() => {}}
          composer={composer}
        />
      );
      break;
    case 'Dictating':
      el = <WritingAssistant {...common} selection={SELECTION} suggestions={SUGGESTIONS} composer={<AIChatComposer state="recording" leading={plus} model={model} />} />;
      break;
    default:
      el = <WritingAssistant {...common} selection={SELECTION} suggestions={SUGGESTIONS} composer={composer} />;
  }
  return (
    <div id="target" style={{ display: 'inline-block', padding: 8, background: 'var(--ds-background)' }}>
      {el}
    </div>
  );
};
