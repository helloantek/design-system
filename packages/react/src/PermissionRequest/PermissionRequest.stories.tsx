import type { Meta, StoryObj } from '@storybook/react-vite';
import { RiDriveFill, RiSlackFill } from '@remixicon/react';
import { useState, type CSSProperties } from 'react';
import { PermissionRequest, PermissionRequestFiles, PermissionRequestScope, type PermissionDuration, type PermissionRequestState } from './PermissionRequest';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6108-1474';

const meta = {
  title: 'Patterns/Permission Request',
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Permission Request** ([open in Figma](${FIGMA_URL})): an agent asks for one specific right – who wants to do what, on which tool, and why; what it can and cannot do (\`PermissionRequestScope\`) or which files it touches (\`PermissionRequestFiles\`); and for how long (Just once, 1 hour, Always). A \`destructive\` right is allowed once at most and says so. Esc denies and Enter allows while focus is in the card. Once answered (\`state\`: \`allowed\`, \`denied\`, \`expired\`) it folds to one line with Revoke, Change or Ask again.

**When to use:** an agent needs access it does not have yet: a specific right on a specific tool, for a set time, with what it can and cannot do spelled out.
**When not to use:** the agent only needs approval for one action (use Approval Card), or you are setting how independent an agent is in general (use Autonomy Dial).`,
      },
    },
  },
} satisfies Meta;

export default meta;

const WIDTH: CSSProperties = { width: 'min(440px, calc(100vw - 32px))' };

function Billing(props: { state?: PermissionRequestState; duration?: PermissionDuration; onDurationChange?: (d: PermissionDuration) => void; onAllow?: (d: PermissionDuration) => void; onDeny?: () => void; onRevoke?: () => void }) {
  return (
    <PermissionRequest
      agent="Support agent"
      action="read #billing"
      tool="Slack · Acme workspace"
      toolIcon={<RiSlackFill aria-hidden />}
      reason="To answer Ana Silva’s question about a double charge, it needs to see what billing said last week."
      outcome={props.duration === 'always' ? 'Support agent · since 12:10 today' : 'Support agent · 52 min left'}
      {...props}
    >
      <PermissionRequestScope can={['Read messages in #billing', 'See who wrote them']} cannot={['Post, edit or delete messages', 'Open any other channel']} />
    </PermissionRequest>
  );
}

function Invoices(props: { state?: PermissionRequestState; onAllow?: (d: PermissionDuration) => void; onDeny?: () => void; onChange?: () => void }) {
  return (
    <PermissionRequest
      destructive
      agent="Ops agent"
      action="delete 14 files"
      tool="Google Drive · Finance shared drive"
      toolIcon={<RiDriveFill aria-hidden />}
      reason="They are duplicates of the 2025 invoices, made by last night’s import."
      outcome="Ops agent was told and won’t do it"
      {...props}
    >
      <PermissionRequestFiles
        total={14}
        files={[
          { name: 'invoice-2025-0412 (1).pdf', size: '84 KB' },
          { name: 'invoice-2025-0413 (1).pdf', size: '91 KB' },
          { name: 'invoice-2025-0414 (1).pdf', size: '77 KB' },
        ]}
      />
    </PermissionRequest>
  );
}

type PlaygroundArgs = { destructive: boolean; state: PermissionRequestState };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { destructive: false, state: 'pending' },
  argTypes: {
    destructive: { name: 'Destructive' },
    state: { name: 'State', control: 'inline-radio', options: ['pending', 'allowed', 'denied', 'expired'] },
  },
  render: ({ destructive, state }) => <div style={WIDTH}>{destructive ? <Invoices state={state} onChange={() => {}} /> : <Billing state={state} onRevoke={() => {}} />}</div>,
};

/** Figma "The request": who, what, why, its limits and for how long. Allow folds it to one line with Revoke. */
export const Request: StoryObj = {
  render: function Render() {
    const [state, setState] = useState<PermissionRequestState>('pending');
    const [duration, setDuration] = useState<PermissionDuration>('hour');
    return (
      <div style={WIDTH}>
        <Billing
          state={state}
          duration={duration}
          onDurationChange={setDuration}
          onAllow={(d) => {
            setDuration(d);
            setState('allowed');
          }}
          onDeny={() => setState('denied')}
          onRevoke={() => setState('pending')}
        />
      </div>
    );
  },
};

/** Figma "Destructive": allowed once at most, and the button says so. */
export const Destructive: StoryObj = {
  render: function Render() {
    const [state, setState] = useState<PermissionRequestState>('pending');
    return (
      <div style={WIDTH}>
        <Invoices state={state} onAllow={() => setState('allowed')} onDeny={() => setState('denied')} onChange={() => setState('pending')} />
      </div>
    );
  },
};

/** Figma "Answered": one line – Revoke while it lasts, Change after a denial, Ask again once it ran out. */
export const Answered: StoryObj = {
  render: () => (
    <div style={{ ...WIDTH, display: 'grid', gap: 12 }}>
      <Billing state="allowed" duration="hour" onRevoke={() => {}} />
      <Billing state="allowed" duration="always" onRevoke={() => {}} />
      <Invoices state="denied" onChange={() => {}} />
      <PermissionRequest state="expired" agent="Support agent" action="read #billing" outcome="The hour ran out at 13:10" onAskAgain={() => {}} />
    </div>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'grid', gap: 16, alignContent: 'start' }}>
          <Invoices />
          <Billing state="allowed" duration="hour" onRevoke={() => {}} />
        </div>
      ))}
    </div>
  ),
};
