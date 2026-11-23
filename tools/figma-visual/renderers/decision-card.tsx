import { useEffect } from 'react';
import { DecisionCard } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps the Sort UI 2.0 pattern "Decision Card" (6111:1606) to code with its sample content, 480 px wide (the
// composer under it in Figma is AI Chat Composer, checked on its own).
const plans = [
  { label: 'Starter', description: 'Free, up to 3 people' },
  { label: 'Team', description: '€12 per person a month, with SSO', recommended: true },
  { label: 'Enterprise', description: 'Talk to sales first' },
];

function FocusOther() {
  // Figma draws "Your own words" with the field focused (and no row active).
  useEffect(() => {
    document.querySelector<HTMLInputElement>('#target .ds-decision__other input')?.focus();
  }, []);
  return null;
}

export const renderDecisionCard: Renderer = (p) => {
  let el;
  switch (p.State) {
    case 'Approval':
      el = (
        <DecisionCard
          context="Weekly update"
          question="Send the weekly update to Northwind?"
          details={[
            ['To', 'Dana Reyes, Northwind'],
            ['Subject', 'Week 45: ingest is live, dashboard in review'],
            ['Body', 'Ingest runs on staging and took Tuesday’s spike without losing a row.'],
          ]}
          options={[{ label: 'Approve', recommended: true }, { label: 'Decline' }]}
          page={1}
          pageCount={2}
          onPageChange={() => {}}
          onLater={() => {}}
        />
      );
      break;
    case 'Pick':
      el = (
        <DecisionCard
          context="Launch post"
          question="Which header image for the launch post?"
          tiles={[{ label: 'Photo, team at work' }, { label: 'Product screenshot', recommended: true }, { label: 'Illustration' }]}
          otherPlaceholder="Describe another one…"
          onLater={() => {}}
        />
      );
      break;
    case 'Own words':
      el = (
        <>
          <DecisionCard context="Onboarding" question="Which plan should the new team start on?" options={plans} page={1} pageCount={2} onPageChange={() => {}} onLater={() => {}} defaultOtherText="Team, but billed yearly" />
          <FocusOther />
        </>
      );
      break;
    case 'Later':
      el = <DecisionCard folded question="Which plan should the new team start on?" pageCount={2} onOpen={() => {}} />;
      break;
    default:
      el = <DecisionCard context="Onboarding" question="Which plan should the new team start on?" options={plans} page={1} pageCount={2} onPageChange={() => {}} onLater={() => {}} />;
  }
  return (
    <div id="target" style={{ width: 480, padding: 8, background: 'var(--ds-background)' }}>
      {el}
    </div>
  );
};
