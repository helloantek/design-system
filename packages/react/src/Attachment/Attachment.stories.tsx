import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type CSSProperties, type ReactNode } from 'react';
import { RiAddLine, RiCloseLine, RiDownloadLine, RiResetLeftLine } from '@remixicon/react';
import { AIChatComposer } from '../AIChatComposer';
import { Button } from '../Button';
import { Card, CardContent, CardHeader } from '../Card';
import { Attachment, AttachmentGroup, type AttachmentState, type AttachmentType } from './Attachment';
import { archiveIcon as ArchiveIcon, attachmentImage, spreadsheetIcon as SpreadsheetIcon, videoIcon as VideoIcon } from './Attachment.fixtures';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=351-2';

const meta = {
  title: 'Components/Attachment',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Attachment** ([open in Figma](${FIGMA_URL})): a file added to a message or a composer. \`type\` (\`file\` · \`file-sm\` · \`card\` · \`image\`) × \`state\` (\`done\` · \`uploading\` · \`error\`; Hover comes from the pointer), with a \`title\`, a \`description\` (the size, a link's address), an \`error\`, a \`typeLabel\` (Card), an \`icon\` (File) or a picture (\`src\`, Image) and \`actions\` (ghost xs icon buttons). \`href\` makes it a link; \`AttachmentGroup\` lines several up. The file icons here are Figma's File Icons samples, until that component ships.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const download = (name: string) => <Button variant="ghost" size="xs" icon={<RiDownloadLine />} aria-label={`Download ${name}`} />;
const remove = (name: string, onClick?: () => void) => <Button variant="ghost" size="xs" icon={<RiCloseLine />} aria-label={`Remove ${name}`} onClick={onClick} />;
const retry = (name: string, onClick?: () => void) => <Button variant="ghost" size="xs" icon={<RiResetLeftLine />} aria-label={`Retry ${name}`} onClick={onClick} />;

/** The actions Figma puts in each variant's slot. */
const actionsFor = (type: AttachmentType, state: AttachmentState, name: string): ReactNode => {
  if (type === 'file' || type === 'file-sm') return state === 'uploading' ? remove(name) : state === 'error' ? retry(name) : download(name);
  if (state === 'error')
    return type === 'card' ? (
      <>
        {retry(name)}
        {remove(name)}
      </>
    ) : (
      remove(name)
    );
  return remove(name);
};

type PlaygroundArgs = { type: AttachmentType; state: AttachmentState; title: string; description: string; typeLabel: string; error: string };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { type: 'file', state: 'done', title: 'acme-audit.pdf', description: '2.1 MB', typeLabel: 'PDF', error: 'Over the 5 MB limit' },
  argTypes: {
    type: { name: 'Type', control: 'inline-radio', options: ['file', 'file-sm', 'card', 'image'] },
    state: { name: 'State', control: 'inline-radio', options: ['done', 'uploading', 'error'] },
    title: { name: 'Title' },
    description: { name: 'Size' },
    typeLabel: { name: 'Type label', description: 'Card' },
    error: { name: 'Error' },
  },
  render: (args) => <Attachment {...args} icon={<ArchiveIcon />} src={attachmentImage} actions={actionsFor(args.type, args.state, args.title)} />,
};

const fill: CSSProperties = { width: '100%' };

type Row = { id: string; name: string; size: string; icon: ReactNode; state: AttachmentState; error?: string };

/** Figma demo "Attachment": three files on a request, one downloaded, one uploading, one too large. */
export const Demo: StoryObj = {
  render: function Render() {
    const initial: Row[] = [
      { id: 'zip', name: 'acme-audit.zip', size: '2.1 MB', icon: <ArchiveIcon />, state: 'done' },
      { id: 'xlsx', name: 'pricing-model.xlsx', size: '840 KB', icon: <SpreadsheetIcon />, state: 'uploading' },
      { id: 'mov', name: 'site-visit.mov', size: '31 MB', icon: <VideoIcon />, state: 'error', error: 'Over the 25 MB limit' },
    ];
    const [rows, setRows] = useState(initial);
    const set = (id: string, patch: Partial<Row> | null) => setRows((r) => (patch ? r.map((x) => (x.id === id ? { ...x, ...patch } : x)) : r.filter((x) => x.id !== id)));
    return (
      <Card style={{ width: 'min(352px, calc(100vw - 32px))', boxSizing: 'border-box' }}>
        <CardHeader title="Vendor review" description={rows.length === 3 ? 'Three files are attached to this request.' : `${rows.length} files are attached to this request.`} />
        <CardContent>
          <AttachmentGroup direction="column" aria-label="Attachments">
            {rows.map((r) => (
              <Attachment
                key={r.id}
                style={fill}
                state={r.state}
                title={r.name}
                description={r.size}
                error={r.error}
                icon={r.icon}
                actions={r.state === 'uploading' ? remove(r.name, () => set(r.id, null)) : r.state === 'error' ? retry(r.name, () => set(r.id, { state: 'uploading' })) : download(r.name)}
              />
            ))}
          </AttachmentGroup>
        </CardContent>
      </Card>
    );
  },
};

/** Figma demo "Types": a picture, a card and a file row. */
export const Types: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 8, justifyItems: 'start' }}>
      <AttachmentGroup aria-label="Attachments">
        <Attachment type="image" title="red-forest-peak.webp" description="1.4 MB" src={attachmentImage} actions={remove('red-forest-peak.webp')} />
        <Attachment type="card" title="brand-assets.pdf" typeLabel="PDF" description="2.1 MB" actions={remove('brand-assets.pdf')} />
      </AttachmentGroup>
      <Attachment style={{ '--attachment-width': '328px' } as CSSProperties} title="acme-audit.zip" description="2.1 MB" icon={<ArchiveIcon />} actions={download('acme-audit.zip')} />
    </div>
  ),
};

/** Figma demo "States": uploading, done and failed, as cards and as rows. */
export const States: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 24, justifyItems: 'center' }}>
      <AttachmentGroup aria-label="Cards">
        {(['uploading', 'done', 'error'] as const).map((state) => (
          <Attachment key={state} type="card" state={state} title="acme-audit.docx" typeLabel="DOCX" description="2.1 MB" error="Over the 25 MB limit" actions={state === 'done' ? remove('acme-audit.docx') : actionsFor('card', state, 'acme-audit.docx')} />
        ))}
      </AttachmentGroup>
      <AttachmentGroup direction="column" aria-label="Rows">
        {(['uploading', 'done', 'error'] as const).map((state) => (
          <Attachment key={state} state={state} title="acme-audit.zip" description="2.1 MB" error="Over the 25 MB limit" icon={<ArchiveIcon />} actions={actionsFor('file', state, 'acme-audit.zip')} />
        ))}
      </AttachmentGroup>
    </div>
  ),
};

/** Figma demo "Link": a card for a shared link; `href` makes the whole card open it. */
export const Link: StoryObj = {
  render: () => (
    <Attachment
      type="card"
      style={{ '--attachment-width': '200px', '--attachment-height': '120px' } as CSSProperties}
      typeLabel="northwind.app"
      title="Northwind — Plans and pricing"
      description="https://northwind.app/pricing"
      href="https://northwind.app/pricing"
      target="_blank"
    />
  ),
};

/** Figma demo "In a composer": attachments in AI Chat Composer's header, removable before sending. */
export const InAComposer: StoryObj = {
  render: function Render() {
    const [items, setItems] = useState(['picture', 'doc']);
    const drop = (id: string) => setItems((i) => i.filter((x) => x !== id));
    const square = { '--attachment-width': '120px', '--attachment-height': '120px' } as CSSProperties;
    return (
      <AIChatComposer
        style={{ width: 'min(448px, calc(100vw - 32px))' }}
        layout="column"
        leading={<Button variant="ghost" size="sm" icon={<RiAddLine />} aria-label="Add an attachment" onClick={() => setItems(['picture', 'doc'])} />}
        header={
          items.length > 0 ? (
            <>
              {items.includes('picture') && <Attachment type="image" style={square} title="red-forest-peak.webp" description="1.4 MB" src={attachmentImage} actions={remove('red-forest-peak.webp', () => drop('picture'))} />}
              {items.includes('doc') && <Attachment type="card" style={square} title="acme-audit.docx" typeLabel="DOCX" description="2.1 MB" actions={remove('acme-audit.docx', () => drop('doc'))} />}
            </>
          ) : undefined
        }
      />
    );
  },
};

/** Figma demo "Group": cards side by side; the row scrolls sideways when it overflows. */
export const Group: StoryObj = {
  render: () => (
    <div style={{ width: 'min(448px, calc(100vw - 32px))' }}>
      <AttachmentGroup aria-label="Attachments">
        <Attachment type="card" title="acme-audit.docx" typeLabel="DOCX" description="2.1 MB" actions={remove('acme-audit.docx')} />
        <Attachment type="card" title="pricing-model.xlsx" typeLabel="XLSX" description="840 KB" actions={remove('pricing-model.xlsx')} />
        <Attachment type="card" title="brand-assets.zip" typeLabel="ZIP" description="18 MB" actions={remove('brand-assets.zip')} />
      </AttachmentGroup>
    </div>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ display: 'grid', gap: 8, justifyItems: 'start', padding: 24, background: 'var(--ds-background)' }}>
          <AttachmentGroup aria-label={`Cards, ${scheme}`}>
            <Attachment type="image" title="red-forest-peak.webp" description="1.4 MB" src={attachmentImage} />
            <Attachment type="card" state="error" title="acme-audit.docx" typeLabel="DOCX" error="Over the 25 MB limit" actions={actionsFor('card', 'error', 'acme-audit.docx')} />
          </AttachmentGroup>
          <Attachment title="acme-audit.zip" description="2.1 MB" icon={<ArchiveIcon />} actions={download('acme-audit.zip')} />
          <Attachment type="file-sm" state="uploading" title="pricing-model.xlsx" icon={<SpreadsheetIcon />} actions={remove('pricing-model.xlsx')} />
        </div>
      ))}
    </div>
  ),
};
