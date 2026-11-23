import { RiDriveFill, RiSlackFill } from '@remixicon/react';
import { PermissionRequest, PermissionRequestFiles, PermissionRequestScope } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps the Sort UI 2.0 pattern "Permission Request" (6108:1474) to code with its sample content, 440 px wide.
export const renderPermissionRequest: Renderer = (p) => {
  let el;
  switch (p.State) {
    case 'Destructive':
      el = (
        <PermissionRequest destructive agent="Ops agent" action="delete 14 files" tool="Google Drive · Finance shared drive" toolIcon={<RiDriveFill aria-hidden />} reason="They are duplicates of the 2025 invoices, made by last night’s import." onAllow={() => {}} onDeny={() => {}}>
          <PermissionRequestFiles total={14} files={[{ name: 'invoice-2025-0412 (1).pdf', size: '84 KB' }, { name: 'invoice-2025-0413 (1).pdf', size: '91 KB' }, { name: 'invoice-2025-0414 (1).pdf', size: '77 KB' }]} />
        </PermissionRequest>
      );
      break;
    case 'Allowed':
      el = <PermissionRequest state="allowed" duration="hour" agent="Support agent" action="read #billing" outcome="Support agent · 52 min left" onRevoke={() => {}} />;
      break;
    case 'Denied':
      el = <PermissionRequest state="denied" agent="Ops agent" action="delete 14 files" outcome="Ops agent was told and won’t do it" onChange={() => {}} />;
      break;
    case 'Expired':
      el = <PermissionRequest state="expired" agent="Support agent" action="read #billing" outcome="The hour ran out at 13:10" onAskAgain={() => {}} />;
      break;
    default:
      el = (
        <PermissionRequest agent="Support agent" action="read #billing" tool="Slack · Acme workspace" toolIcon={<RiSlackFill aria-hidden />} reason="To answer Ana Silva’s question about a double charge, it needs to see what billing said last week." onAllow={() => {}} onDeny={() => {}}>
          <PermissionRequestScope can={['Read messages in #billing', 'See who wrote them']} cannot={['Post, edit or delete messages', 'Open any other channel']} />
        </PermissionRequest>
      );
  }
  return (
    <div id="target" style={{ width: 440, padding: 8, background: 'var(--ds-background)' }}>
      {el}
    </div>
  );
};
