import { RiDatabase2Line, RiDriveFill, RiGoogleFill, RiMailLine, RiNotionFill } from '@remixicon/react';
import { AutonomyDial, type AutonomyAction, type AutonomyLevel } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps the Sort UI 2.0 pattern "Autonomy Dial" (6115:1920) to code with its sample content, 420 px wide.
const ACTIONS: AutonomyAction[] = [
  { label: 'Read the help center', icon: <RiNotionFill aria-hidden /> },
  { label: 'Tag and sort tickets', icon: <RiDatabase2Line aria-hidden /> },
  { label: 'Draft replies', icon: <RiMailLine aria-hidden /> },
  { label: 'Send replies', icon: <RiMailLine aria-hidden />, risk: 'risky' },
  { label: 'Update customer records', icon: <RiDatabase2Line aria-hidden />, risk: 'risky' },
  { label: 'Give refunds', icon: <RiGoogleFill aria-hidden />, risk: 'destructive', locked: 'Locked by your admin: refunds always ask, whatever the dial says.' },
  { label: 'Delete customer data', icon: <RiDriveFill aria-hidden />, risk: 'destructive', locked: 'Locked by your admin.' },
];

const LEVEL: Record<string, AutonomyLevel> = { 'Always ask': 'ask', 'If risky': 'risky', 'Full auto': 'auto' };

export const renderAutonomyDial: Renderer = (p) => (
  <div id="target" style={{ width: 420, padding: 8, background: 'var(--ds-background)' }}>
    <AutonomyDial agent="Support agent" actions={ACTIONS} value={LEVEL[p.State] ?? 'risky'} />
  </div>
);
