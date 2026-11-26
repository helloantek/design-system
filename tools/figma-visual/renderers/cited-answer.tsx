import { CitedAnswer, type CitedAnswerPart, type CitedAnswerSource } from '@helloantek/ds-react';
import { RiGlobalLine, RiNotionFill, RiSlackFill } from '@remixicon/react';
import { useEffect, useRef, type ReactNode } from 'react';
import type { Renderer } from './types';

const SOURCES: CitedAnswerSource[] = [
  {
    name: 'Help center',
    icon: <RiGlobalLine />,
    title: 'Refunds and returns',
    quote: (
      <>
        Card refunds usually reach your account <strong>within 5–10 working days</strong>, depending on your bank.
      </>
    ),
  },
  { name: 'Refund policy', icon: <RiNotionFill /> },
  { name: '#support', icon: <RiSlackFill /> },
];
const PARAGRAPHS: CitedAnswerPart[][] = [
  [{ text: 'Card refunds usually reach your account within 5–10 working days,', cite: 1 }, ' depending on your bank. ', { text: 'Refunds approved before 16:00 leave the same evening.', cite: 2 }],
  [{ text: 'Gift orders come back as store credit instead.', cite: 2 }, ' ', { text: 'Some online banks add two more days.', cite: 3 }],
];

/** Points the mouse at citation 2 once rendered (Figma "Pointing at citation 2"). */
function Pointing({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current?.querySelectorAll('.ds-cited-answer__cite')[1]?.dispatchEvent(new MouseEvent('mouseover', { bubbles: true, relatedTarget: document.body }));
  }, []);
  return <div ref={ref}>{children}</div>;
}

// Maps the Sort UI 2.0 pattern "Cited Answer" (6127:2541) to code: at rest, pointing at citation 2, source 1 opened.
export const renderCitedAnswer: Renderer = (p) => {
  const el = <CitedAnswer sources={SOURCES} paragraphs={PARAGRAPHS} meta="3 sources · 12 pages read" defaultOpen={p.State === 'Clicked' ? 1 : null} onFollowUp={() => {}} style={{ width: 460 }} />;
  return (
    <div id="target" style={{ display: 'inline-block', padding: 8, background: 'var(--ds-background)' }}>
      {p.State === 'Pointing' ? <Pointing>{el}</Pointing> : el}
    </div>
  );
};
