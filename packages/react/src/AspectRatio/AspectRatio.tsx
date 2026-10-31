import type { CSSProperties, HTMLAttributes, ReactNode, Ref } from 'react';

// Styles live in @helloantek/ds-css (classes ds-aspect-ratio*); this component only renders the markup.

/** Figma "ratio" values; any other `width / height` number works too. */
export type AspectRatioPreset = '1:1' | '4:3' | '3:2' | '16:9' | '21:9' | '2:3' | '3:4' | '9:16';

export interface AspectRatioProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
  /** Figma "ratio": a preset such as `"16:9"`, or a number (width / height). Default 1:1. */
  ratio?: AspectRatioPreset | number;
  /** The demos' 12 px rounded corners. */
  rounded?: boolean;
  /** The picture, video or other content; it fills the box, cropped from the middle. */
  children?: ReactNode;
}

const toCss = (ratio: AspectRatioPreset | number) => (typeof ratio === 'number' ? String(ratio) : ratio.replace(':', ' / '));

/** Figma "Aspect Ratio": a box that keeps its width-to-height ratio, filled by its picture. */
export function AspectRatio({ ratio = '1:1', rounded = false, className, style, children, ...rest }: AspectRatioProps) {
  return (
    <div {...rest} className={['ds-aspect-ratio', rounded && 'ds-aspect-ratio--rounded', className].filter(Boolean).join(' ')} style={{ '--aspect-ratio': toCss(ratio), ...style } as CSSProperties}>
      {children}
    </div>
  );
}
