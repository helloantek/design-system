import type { Meta, StoryObj } from '@storybook/react-vite';
import { RiDatabase2Line, RiDriveFill, RiGoogleFill, RiMailLine, RiNotionFill } from '@remixicon/react';
import { useState, type CSSProperties } from 'react';
import { AutonomyDial, type AutonomyAction, type AutonomyLevel } from './AutonomyDial';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6115-1920';

const meta = {
  title: 'Patterns/Autonomy Dial',
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Autonomy Dial** ([open in Figma](${FIGMA_URL})): how much one agent may do on its own. Three stops – Always ask, If risky, Full auto – and every action it can take split between "Runs on its own" and "Asks you first", each with the tool it uses and how risky it is (\`risk\`: safe · risky · destructive). Moving the dial moves actions between the lists; \`locked\` ones always ask, and their lock says why.

**When to use:** setting how much one agent may do on its own, and showing which actions run alone and which ask first.
**When not to use:** granting one specific right for a limited time (use Permission Request), or the agent has no actions with side effects.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const WIDTH: CSSProperties = { width: 'min(420px, calc(100vw - 32px))' };

const ACTIONS: AutonomyAction[] = [
  { label: 'Read the help center', icon: <RiNotionFill aria-hidden /> },
  { label: 'Tag and sort tickets', icon: <RiDatabase2Line aria-hidden /> },
  { label: 'Draft replies', icon: <RiMailLine aria-hidden /> },
  { label: 'Send replies', icon: <RiMailLine aria-hidden />, risk: 'risky' },
  { label: 'Update customer records', icon: <RiDatabase2Line aria-hidden />, risk: 'risky' },
  { label: 'Give refunds', icon: <RiGoogleFill aria-hidden />, risk: 'destructive', locked: 'Locked by your admin: refunds always ask, whatever the dial says.' },
  { label: 'Delete customer data', icon: <RiDriveFill aria-hidden />, risk: 'destructive', locked: 'Locked by your admin: deleting data always asks, whatever the dial says.' },
];

/** Figma "If risky": everyday work runs on its own, risky actions ask. Move the dial. */
export const IfRisky: StoryObj = {
  render: function Render() {
    const [level, setLevel] = useState<AutonomyLevel>('risky');
    return (
      <div style={WIDTH}>
        <AutonomyDial agent="Support agent" actions={ACTIONS} value={level} onValueChange={setLevel} />
      </div>
    );
  },
};

/** Figma "Always ask": everything waits for you. */
export const AlwaysAsk: StoryObj = {
  render: () => (
    <div style={WIDTH}>
      <AutonomyDial agent="Support agent" actions={ACTIONS} defaultValue="ask" />
    </div>
  ),
};

/** Figma "Full auto": all but the locked actions move over; a lock says why on hover or focus. */
export const FullAuto: StoryObj = {
  render: () => (
    <div style={WIDTH}>
      <AutonomyDial agent="Support agent" actions={ACTIONS} defaultValue="auto" />
    </div>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24 }}>
          <AutonomyDial aria-label={`Support agent (${scheme})`} agent="Support agent" actions={ACTIONS} defaultValue="risky" />
        </div>
      ))}
    </div>
  ),
};
