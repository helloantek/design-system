import { DecisionInbox, DecisionInboxAnswered, DecisionInboxItem } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps the Sort UI 2.0 pattern "Decision Inbox" (6114:1780) to code with its sample content, 420 px wide.
const onboarding = <DecisionInboxItem question="Roll out the new onboarding to everyone?" context="Test won with +8% activation · 2 weeks of data · Growth agent" answers={[{ label: 'Roll out' }, { label: 'Keep testing' }]} />;
const figma = <DecisionInboxItem question="Renew Figma for the design team?" context="12 seats · $1,800 a year · renews in 5 days · Finance agent" answers={[{ label: 'Renew' }, { label: 'Change seats' }]} />;

export const renderDecisionInbox: Renderer = (p) => {
  let el;
  switch (p.State) {
    case 'Just answered':
      el = (
        <DecisionInbox count={2}>
          <DecisionInboxAnswered title="Sent · €48 to Ana Silva" description="Support agent goes on with the ticket" onUndo={() => {}} />
          {onboarding}
          {figma}
        </DecisionInbox>
      );
      break;
    case 'Folded':
      el = <DecisionInbox count={3} folded meta="· oldest 2 h ago" />;
      break;
    case 'Nothing open':
      el = <DecisionInbox count={0} emptyDescription="3 decided today · the agents go on by themselves" />;
      break;
    default:
      el = (
        <DecisionInbox count={3}>
          <DecisionInboxItem question="Send the refund of €48 to Ana Silva?" context="Over the €40 limit agents may refund alone · Support agent" answers={[{ label: 'Send' }, { label: 'Hold' }]} />
          {onboarding}
          {figma}
        </DecisionInbox>
      );
  }
  return (
    <div id="target" style={{ width: 420, padding: 8, background: 'var(--ds-background)' }}>
      {el}
    </div>
  );
};
