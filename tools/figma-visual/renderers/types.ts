import type { ReactNode } from 'react';

/** Renders one Figma variant (its component properties) as code. The element to measure must have id="target". */
export type Renderer = (props: Record<string, string>) => ReactNode;
