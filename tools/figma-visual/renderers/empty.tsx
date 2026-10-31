import { Button, Empty } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps the Sort UI 2.0 Empty to code with its sample content (the Lucide clipboard-check icon), 384 px wide.
const clipboardCheck = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.875} strokeLinecap="round" strokeLinejoin="round">
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M9 14l2 2 4-4" />
  </svg>
);

export const renderEmpty: Renderer = () => (
  <div id="target" style={{ width: 384, background: 'var(--ds-background)' }}>
    <Empty icon={clipboardCheck} title="No deployments yet" description="Connect a repository and every push to main will ship a preview automatically." actions={<Button>Connect repository</Button>} />
  </div>
);
