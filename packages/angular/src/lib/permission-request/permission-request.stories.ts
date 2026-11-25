import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsPermissionFiles, DsPermissionIcon, DsPermissionRequest, DsPermissionScope, DsPermissionToolIcon } from './permission-request';
import { riDriveFillHidden, riSlackFillHidden } from '../internal/remix';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6108-1474';

const meta = {
  title: 'Patterns/Permission Request',
  decorators: [moduleMetadata({ imports: [DsPermissionRequest, DsPermissionScope, DsPermissionFiles, DsPermissionIcon, DsPermissionToolIcon] })],
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Permission Request** ([open in Figma](${FIGMA_URL})) for Angular: \`<article dsPermissionRequest>\` with the same markup and \`ds-permission\` classes as the React PermissionRequest. Who asks (\`agent\`, an icon marked \`dsPermissionIcon\`), the right (\`action\`), the tool (\`tool\`, a logo marked \`dsPermissionToolIcon\`), why (\`reason\`), its limits (\`dsPermissionScope\`, \`dsPermissionFiles\`) and for how long (\`[(duration)]\`); \`(allow)\` with the duration and \`(deny)\`, also Enter and Esc in the card. \`destructive\` allows once at most. Answered (\`state\`), it folds to one line with Revoke, Change or Ask again (\`revocable\`, \`changeable\`, \`reaskable\`).`,
      },
    },
  },
} satisfies Meta;

export default meta;

// min(440px, calc(100vw - 32px)), written as the CSSOM serialises React's inline style.
const WIDTH = 'width: min(440px, -32px + 100vw);';
const slack = riSlackFillHidden.replace('<svg ', '<svg dsPermissionToolIcon ');
const drive = riDriveFillHidden.replace('<svg ', '<svg dsPermissionToolIcon ');
const billing = (attrs: string) => `<article dsPermissionRequest agent="Support agent" action="read #billing" tool="Slack · Acme workspace"
    reason="To answer Ana Silva’s question about a double charge, it needs to see what billing said last week." ${attrs}>
    ${slack}<div dsPermissionScope [can]="['Read messages in #billing', 'See who wrote them']" [cannot]="['Post, edit or delete messages', 'Open any other channel']"></div>
  </article>`;
const invoices = (attrs: string) => `<article dsPermissionRequest destructive agent="Ops agent" action="delete 14 files" tool="Google Drive · Finance shared drive"
    reason="They are duplicates of the 2025 invoices, made by last night’s import." outcome="Ops agent was told and won’t do it" ${attrs}>
    ${drive}<div dsPermissionFiles [total]="14" [files]="[{ name: 'invoice-2025-0412 (1).pdf', size: '84 KB' }, { name: 'invoice-2025-0413 (1).pdf', size: '91 KB' }, { name: 'invoice-2025-0414 (1).pdf', size: '77 KB' }]"></div>
  </article>`;

/** Figma "The request": who, what, why, its limits and for how long. Allow folds it to one line with Revoke. */
export const Request: StoryObj = {
  render: () => ({
    props: { state: 'pending', duration: 'hour' },
    template: `<div style="${WIDTH}">${billing(
      `[state]="state" [(duration)]="duration" [outcome]="duration === 'always' ? 'Support agent · since 12:10 today' : 'Support agent · 52 min left'" revocable (allow)="duration = $event; state = 'allowed'" (deny)="state = 'denied'" (revoke)="state = 'pending'"`,
    )}</div>`,
  }),
};

/** Figma "Destructive": allowed once at most, and the button says so. */
export const Destructive: StoryObj = {
  render: () => ({
    props: { state: 'pending' },
    template: `<div style="${WIDTH}">${invoices(`[state]="state" changeable (allow)="state = 'allowed'" (deny)="state = 'denied'" (change)="state = 'pending'"`)}</div>`,
  }),
};

/** Figma "Answered": one line – Revoke while it lasts, Change after a denial, Ask again once it ran out. */
export const Answered: StoryObj = {
  render: () => ({
    template: `<div style="${WIDTH} display: grid; gap: 12px;">
      ${billing(`state="allowed" duration="hour" outcome="Support agent · 52 min left" revocable`)}
      ${billing(`state="allowed" duration="always" outcome="Support agent · since 12:10 today" revocable`)}
      ${invoices(`state="denied" changeable`)}
      <article dsPermissionRequest state="expired" agent="Support agent" action="read #billing" outcome="The hour ran out at 13:10" reaskable></article>
    </div>`,
  }),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => ({
    props: { schemes: ['light', 'dark'] },
    template: `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));">
      @for (scheme of schemes; track scheme) {
        <div data-ds-brand="theme-1" [attr.data-ds-scheme]="scheme" style="background: var(--ds-background); padding: 24px; display: grid; gap: 16px; align-content: start;">
          ${invoices('')}
          ${billing(`state="allowed" duration="hour" outcome="Support agent · 52 min left" revocable`)}
        </div>
      }
    </div>`,
  }),
};
