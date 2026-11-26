import { AIAnswer, AIAnswerCaret, AIAnswerCitation, AIAnswerPoint, AIAnswerPoints, MessageActions, type AIAnswerSource } from '@helloantek/ds-react';
import { RiGlobalLine, RiNotionFill, RiSlackFill } from '@remixicon/react';
import type { Renderer } from './types';

const SOURCES: AIAnswerSource[] = [
  { name: 'Notion', title: 'Refund policy – timelines', icon: <RiNotionFill /> },
  { name: 'Help center', title: 'Refunds and returns', icon: <RiGlobalLine /> },
  { name: 'Slack', title: '#support – bank delays', icon: <RiSlackFill /> },
];
const QUESTION = 'How long does a refund to a card take?';
const actions = <MessageActions copyText="" onRegenerate={() => {}} />;

// Maps the Sort UI 2.0 pattern "AI Answer" (6127:2351) to code: answered, streaming and stopped early.
export const renderAIAnswer: Renderer = (p) => {
  let el;
  switch (p.State) {
    case 'Streaming':
      el = (
        <AIAnswer question={QUESTION} searching={3} status="streaming" actions={actions} onStop={() => {}} style={{ width: 560 }}>
          <p>
            <strong>5–10 working days</strong> after we send it, depending
            <AIAnswerCaret />
          </p>
        </AIAnswer>
      );
      break;
    case 'Stopped':
      el = (
        <AIAnswer question={QUESTION} sources={SOURCES} moreSources={3} status="stopped" actions={actions} onContinue={() => {}} style={{ width: 560 }}>
          <p>
            <strong>5–10 working days</strong> after we send it, depending on the bank. <AIAnswerCitation>Notion +1</AIAnswerCitation>
          </p>
          <AIAnswerPoints>
            <AIAnswerPoint lead="Sent the same day:">refunds approved before</AIAnswerPoint>
          </AIAnswerPoints>
        </AIAnswer>
      );
      break;
    default:
      el = (
        <AIAnswer question={QUESTION} sources={SOURCES} moreSources={3} related={['What if the card has expired?', 'Can I get store credit instead?']} actions={actions} meta="Answered in 3.4 s" style={{ width: 560 }}>
          <p>
            <strong>5–10 working days</strong> after we send it, depending on the bank. <AIAnswerCitation>Notion +1</AIAnswerCitation>
          </p>
          <AIAnswerPoints>
            <AIAnswerPoint lead="Sent the same day:" cite="Help center">
              refunds approved before 16:00 leave that evening.
            </AIAnswerPoint>
            <AIAnswerPoint lead="Gift orders:" cite="Notion">
              the money comes back as store credit, not to the card.
            </AIAnswerPoint>
            <AIAnswerPoint lead="Slow banks:" cite="Slack">
              some online banks take two more days.
            </AIAnswerPoint>
          </AIAnswerPoints>
        </AIAnswer>
      );
  }
  return (
    <div id="target" style={{ display: 'inline-block', padding: 8, background: 'var(--ds-background)' }}>
      {el}
    </div>
  );
};
