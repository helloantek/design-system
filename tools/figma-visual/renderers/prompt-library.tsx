import { PromptLibrary, type PromptLibraryProps, type PromptTemplate } from '@helloantek/ds-react';
import type { Renderer } from './types';

const TEMPLATES: PromptTemplate[] = [
  { id: 'complaint', name: 'Reply to a complaint', category: 'Support', categoryColor: 'violet', text: 'Write a {tone} reply to {customer} who is upset about {problem}. Keep it under 120 words.' },
  { id: 'call', name: 'Summarise a call', category: 'Notes', categoryColor: 'teal', text: 'Summarise the call with {who}.' },
  { id: 'release', name: 'Write release notes', category: 'Product', categoryColor: 'pink', text: 'Write release notes for {version}.' },
  { id: 'cold', name: 'Draft a cold email', category: 'Sales', categoryColor: 'cyan', text: 'Draft a cold email to {company}.' },
];

// Figma's counts (~33 while two gaps are open, ~38 filled) come from its own tokenizer, not from the 4-characters rule.
const common: PromptLibraryProps = {
  templates: TEMPLATES,
  defaultValues: { tone: 'friendly' },
  countTokens: (prompt) => (prompt.includes('{') ? 33 : 38),
  onCopy: () => {},
  onUse: () => {},
  onNew: () => {},
  style: { width: 760 },
};

// Figma draws the gap being typed into ("customer") with the input stroke: focus it, except when all are filled.
const focusCustomer = (el: HTMLDivElement | null) => el?.querySelector<HTMLInputElement>('input[aria-label="customer"]')?.focus();

// Maps the Sort UI 2.0 pattern "Prompt Library" (6132:2927) to code: filling in, ready, one match and nothing matches.
export const renderPromptLibrary: Renderer = (p) => {
  let el;
  switch (p.State) {
    case 'Ready':
      el = <PromptLibrary {...common} defaultValues={{ tone: 'friendly', customer: 'Ana Silva', problem: 'a late refund' }} />;
      break;
    case 'Search':
      el = <PromptLibrary {...common} defaultQuery="reply" />;
      break;
    case 'No match':
      el = <PromptLibrary {...common} defaultQuery="xyz" />;
      break;
    default:
      el = <PromptLibrary {...common} />;
  }
  return (
    <div id="target" ref={p.State === 'Ready' ? undefined : focusCustomer} style={{ display: 'inline-block', padding: 8, background: 'var(--ds-background)' }}>
      {el}
    </div>
  );
};
