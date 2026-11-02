import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Sort UI 2.0 Accordion (200:27) and Accordion Item (200:26), 448 px wide. Items are drawn alone (State=Closed / Open
// / Disabled, Divider=true, so a hidden sibling keeps the line), the component as a card, and the "Accordion" (flush)
// and "Separated items" demos.
const body = 'Yes. It adheres to the WAI-ARIA design pattern: the trigger is a button, the panel is a region, and the keyboard moves between items.';
const demos: Record<string, [string, string][]> = {
  card: [
    ['Is it accessible?', body],
    ['Is it styled?', ''],
    ['Why did a song disappear from my library?', ''],
  ],
  flush: [
    ['What’s included in the free plan?', 'Unlimited notes on two devices, 5 GB of cloud storage and full-text search. Upgrade to Pro whenever you need more devices or version history.'],
    ['Can I cancel anytime?', ''],
    ['How do I export my notes?', ''],
  ],
  separated: [
    ['How do offline downloads work?', 'Tap the download arrow on any playlist or album. Tracks save over Wi-Fi by default and stay available for 30 days without a connection.'],
    ['Can I share a playlist with friends?', ''],
    ['Why did a song disappear from my library?', ''],
  ],
};

export const renderAccordion: Renderer = (p) => {
  if (p.Demo === 'item') {
    return (
      <div style={{ padding: 24, background: 'var(--ds-background)' }}>
        <Accordion id="target" defaultValue={p.State === 'Open' ? 'a' : ''} style={{ width: 448, borderRadius: 0, background: 'transparent', boxShadow: 'none' }}>
          <AccordionItem value="a" disabled={p.State === 'Disabled'}>
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              <p>{body}</p>
            </AccordionContent>
          </AccordionItem>
          <div hidden />
        </Accordion>
      </div>
    );
  }
  const variant = p.Demo === 'card' ? 'card' : (p.Demo as 'flush' | 'separated');
  return (
    <div style={{ padding: 24 }}>
      <Accordion id="target" variant={variant} defaultValue="0" style={{ width: 448 }}>
        {demos[p.Demo].map(([title, text], i) => (
          <AccordionItem key={i} value={String(i)}>
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionContent>
              <p>{text}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
