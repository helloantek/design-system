import type { Meta, StoryObj } from '@storybook/react-vite';
import { RiDownloadLine } from '@remixicon/react';
import { Attachment, AttachmentGroup } from '../Attachment';
import { Button } from '../Button';
import { FileIcon, fileIconFor, type FileIconVariant } from './FileIcon';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=1759-163672';

const meta = {
  title: 'Components/File Icon',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **File Icons** ([open in Figma](${FIGMA_URL})): a file's type as a small illustration. \`variant\` (\`archive\` · \`file\` · \`document\` · \`spreadsheet\` · \`presentation\` · \`pdf\` · \`video\` · \`music\` · \`image\`), \`size\` (default 24 px) and \`title\` (without it the icon is decorative). \`fileIconFor(name)\` picks the variant for a file name; Attachment uses it when it has no \`icon\`. The outline follows the control-border token; the fills are Figma's illustration colours in both schemes.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const VARIANTS: FileIconVariant[] = ['archive', 'file', 'document', 'spreadsheet', 'presentation', 'pdf', 'video', 'music', 'image'];

type PlaygroundArgs = { variant: FileIconVariant; size: number };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { variant: 'pdf', size: 24 },
  argTypes: {
    variant: { name: 'Variant', control: 'select', options: VARIANTS },
    size: { name: 'Size', control: 'inline-radio', options: [16, 20, 24, 32, 40, 48, 64], description: 'Pixels; 16–40 are the Figma demo sizes' },
  },
  render: ({ variant, size }) => <FileIcon variant={variant} size={size} title={`${variant} file`} />,
};

/** Figma demo "File Icon": files on a request, each with the icon for its type. */
export const Demo: StoryObj = {
  render: () => (
    <AttachmentGroup direction="column" aria-label="Files" style={{ width: 'min(320px, calc(100vw - 32px))' }}>
      {['acme-audit.pdf', 'acme-audit.pptx', 'acme-audit.zip', 'acme-audit.xlsx'].map((name) => (
        <Attachment
          key={name}
          style={{ width: '100%' }}
          title={name}
          description="2.1 MB"
          icon={<FileIcon variant={fileIconFor(name)} />}
          actions={<Button variant="ghost" size="xs" icon={<RiDownloadLine />} aria-label={`Download ${name}`} />}
        />
      ))}
    </AttachmentGroup>
  ),
};

/** Figma demo "Types": every variant. */
export const Types: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
      {VARIANTS.map((v) => (
        <FileIcon key={v} variant={v} title={v} />
      ))}
    </div>
  ),
};

/** Figma demo "Sizes": 40, 32, 24, 20 and 16 px. */
export const Sizes: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
      {[40, 32, 24, 20, 16].map((s) => (
        <FileIcon key={s} variant="archive" size={s} title={`Archive, ${s} px`} />
      ))}
    </div>
  ),
};

/** fileIconFor: the variant for a file name's extension (`file` when it is unknown). */
export const FromAFileName: StoryObj = {
  render: () => (
    <table style={{ borderCollapse: 'collapse', color: 'var(--ds-foreground)', fontFamily: 'var(--ds-font-sans)', fontSize: 13 }}>
      <tbody>
        {['quarterly-report.pdf', 'signups.csv', 'launch.key', 'notes.md', 'site-visit.mov', 'interview.m4a', 'whiteboard.png', 'backup.tar.gz', 'LICENSE'].map((name) => (
          <tr key={name}>
            <td style={{ padding: '4px 12px 4px 0' }}>
              <FileIcon variant={fileIconFor(name)} />
            </td>
            <td style={{ padding: '4px 12px 4px 0', fontFamily: 'var(--ds-font-mono)' }}>{name}</td>
            <td style={{ padding: 4, color: 'var(--ds-muted-foreground)' }}>{fileIconFor(name)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ),
};

/** Light and Dark: the outline follows control-border; the illustration colours stay. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ display: 'flex', flexWrap: 'wrap', gap: 24, padding: 24, background: 'var(--ds-background)' }}>
          {VARIANTS.map((v) => (
            <FileIcon key={v} variant={v} size={32} />
          ))}
        </div>
      ))}
    </div>
  ),
};
