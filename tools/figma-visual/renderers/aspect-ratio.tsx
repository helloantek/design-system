import { AspectRatio, type AspectRatioPreset } from '@helloantek/ds-react';
import { aspectRatioPhoto } from '../../../packages/react/src/AspectRatio/AspectRatio.fixtures';
import type { Renderer } from './types';

// Maps the Sort UI 2.0 Aspect Ratio to code: 120 px wide, filled with the sample photo (Figma ratio "16-9" → "16:9").
export const renderAspectRatio: Renderer = (p) => (
  <div id="target" style={{ width: 120 }}>
    <AspectRatio ratio={p.ratio.replace('-', ':') as AspectRatioPreset}>
      <img src={aspectRatioPhoto} alt="" />
    </AspectRatio>
  </div>
);
