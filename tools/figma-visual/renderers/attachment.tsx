import { RiCloseLine, RiDownloadLine, RiResetLeftLine } from '@remixicon/react';
import { Attachment, Button, FileIcon, type AttachmentState, type AttachmentType } from '@helloantek/ds-react';
import { attachmentImage } from '../../../packages/react/src/Attachment/Attachment.fixtures';
import type { Renderer } from './types';

// Sort UI 2.0 Attachment (1683:628) with Figma's samples: 'acme-audit.pdf', '2.1 MB', 'Over the 5 MB limit', the
// File Icons Archive icon (File, File sm), the 'PDF' type label (Card) and the sample picture (Image). The actions slot
// holds ghost xs icon buttons as in Figma: download (File done or hovered), remove (File uploading; Card and Image on
// hover), retry (File failed) and retry + remove (Card failed). Hover comes from the pointer.
const types: Record<string, AttachmentType> = { File: 'file', 'File sm': 'file-sm', Card: 'card', Image: 'image' };

const button = (icon: 'download' | 'remove' | 'retry') => (
  <Button
    key={icon}
    variant="ghost"
    size="xs"
    icon={icon === 'download' ? <RiDownloadLine /> : icon === 'remove' ? <RiCloseLine /> : <RiResetLeftLine />}
    aria-label={icon === 'download' ? 'Download' : icon === 'remove' ? 'Remove' : 'Retry'}
  />
);

export const renderAttachment: Renderer = (p) => {
  const type = types[p.Type];
  const state: AttachmentState = p.State === 'Uploading' ? 'uploading' : p.State === 'Error' ? 'error' : 'done';
  const row = type === 'file' || type === 'file-sm';
  const actions = row
    ? state === 'uploading'
      ? button('remove')
      : state === 'error'
        ? button('retry')
        : button('download')
    : state === 'error'
      ? type === 'card'
        ? [button('retry'), button('remove')]
        : button('remove')
      : p.State === 'Hover'
        ? button('remove')
        : undefined;
  return (
    <div id="target" style={{ display: 'inline-flex', padding: 4, background: 'var(--ds-background)' }}>
      <Attachment
        type={type}
        state={state}
        title="acme-audit.pdf"
        description="2.1 MB"
        error="Over the 5 MB limit"
        uploadingLabel="Uploading..."
        typeLabel="PDF"
        icon={<FileIcon variant="archive" />}
        src={attachmentImage}
        actions={actions}
      />
    </div>
  );
};
