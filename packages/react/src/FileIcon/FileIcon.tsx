import { useId, type CSSProperties, type Ref, type SVGAttributes } from 'react';
import { FILE_ICONS } from './icons';

// Styles live in @helloantek/ds-css (classes ds-file-icon*); this component draws Figma's File Icons as inline SVG.

/** Figma "Variant". */
export type FileIconVariant = 'archive' | 'file' | 'document' | 'spreadsheet' | 'presentation' | 'pdf' | 'video' | 'music' | 'image';

const DRAW: Record<FileIconVariant, string> = {
  archive: 'Archive',
  file: 'File',
  document: 'Document',
  spreadsheet: 'Spreadsheet',
  presentation: 'Presentation',
  pdf: 'PDF',
  video: 'Video',
  music: 'Music',
  image: 'Image',
};

export interface FileIconProps extends Omit<SVGAttributes<SVGSVGElement>, 'children'> {
  ref?: Ref<SVGSVGElement>;
  /** Figma "Variant" (default `file`). */
  variant?: FileIconVariant;
  /** Width and height (default 24 px; the demos use 16, 20, 24, 32 and 40). A number is pixels. */
  size?: number | string;
  /** Names the icon for assistive technology; without it the icon is decorative. */
  title?: string;
}

/** Figma "File Icons": a file's type as a small illustration. */
export function FileIcon({ variant = 'file', size, title, className, style, ...rest }: FileIconProps) {
  const id = useId().replace(/:/g, '');
  const sizeStyle = size != null ? ({ '--file-icon-size': typeof size === 'number' ? `${size}px` : size } as CSSProperties) : undefined;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
      className={['ds-file-icon', className].filter(Boolean).join(' ')}
      style={{ ...sizeStyle, ...style }}
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {FILE_ICONS[DRAW[variant]](`file-icon-${id}`)}
    </svg>
  );
}

const EXTENSIONS: [FileIconVariant, string[]][] = [
  ['pdf', ['pdf']],
  ['archive', ['zip', 'rar', '7z', 'tar', 'gz', 'tgz', 'bz2', 'xz']],
  ['spreadsheet', ['xls', 'xlsx', 'csv', 'tsv', 'ods', 'numbers']],
  ['presentation', ['ppt', 'pptx', 'key', 'odp']],
  ['document', ['doc', 'docx', 'txt', 'md', 'rtf', 'odt', 'pages']],
  ['video', ['mp4', 'mov', 'avi', 'mkv', 'webm', 'm4v']],
  ['music', ['mp3', 'wav', 'flac', 'aac', 'ogg', 'm4a']],
  ['image', ['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg', 'heic', 'avif', 'bmp', 'tiff']],
];

/** The File Icon variant for a file name or extension (`file` when unknown), e.g. `fileIconFor('acme-audit.pdf')`. */
export function fileIconFor(name: string): FileIconVariant {
  const ext = name.toLowerCase().split('.').pop() ?? '';
  return EXTENSIONS.find(([, exts]) => exts.includes(ext))?.[0] ?? 'file';
}
