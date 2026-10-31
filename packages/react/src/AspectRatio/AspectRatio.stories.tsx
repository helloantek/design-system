import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties } from 'react';
import { AspectRatio, type AspectRatioPreset } from './AspectRatio';
import { aspectRatioPhoto } from './AspectRatio.fixtures';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=336-14955';

const meta = {
  title: 'Components/Aspect Ratio',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Aspect Ratio** ([open in Figma](${FIGMA_URL})): \`ratio\` (\`1:1\` · \`4:3\` · \`3:2\` · \`16:9\` · \`21:9\` · \`2:3\` · \`3:4\` · \`9:16\`, or any number) and \`rounded\` (the demos' 12 px corners). The box takes its container's width and keeps the ratio; a picture, video or iframe inside fills it, cropped from the middle. Give pictures their own \`alt\`.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const presets: AspectRatioPreset[] = ['1:1', '4:3', '3:2', '16:9', '21:9', '2:3', '3:4', '9:16'];
const caption: CSSProperties = { fontFamily: 'var(--ds-font-sans)', fontSize: 14, lineHeight: '20px', color: 'var(--ds-muted-foreground)', letterSpacing: '-0.005em' };

type PlaygroundArgs = { ratio: AspectRatioPreset; rounded: boolean; width: number };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { ratio: '16:9', rounded: true, width: 320 },
  argTypes: {
    ratio: { name: 'ratio', control: 'select', options: presets },
    rounded: { name: 'Rounded' },
    width: { name: 'Width (px)', control: { type: 'range', min: 80, max: 480, step: 8 } },
  },
  render: ({ ratio, rounded, width }) => (
    <div style={{ width: `min(${width}px, calc(100vw - 32px))` }}>
      <AspectRatio ratio={ratio} rounded={rounded}>
        <img src={aspectRatioPhoto} alt="Sample photo" />
      </AspectRatio>
    </div>
  ),
};

/** Figma ratio: every preset, 120 px wide, as in the component set. */
export const Ratios: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'flex-start' }}>
      {presets.map((ratio) => (
        <figure key={ratio} style={{ display: 'grid', gap: 8, width: 120, margin: 0 }}>
          <AspectRatio ratio={ratio}>
            <img src={aspectRatioPhoto} alt="" />
          </AspectRatio>
          <figcaption style={caption}>{ratio}</figcaption>
        </figure>
      ))}
    </div>
  ),
};

/** Figma demos: a 320 px box with rounded corners, here at 16:9. */
export const Demo: StoryObj = {
  render: () => (
    <div style={{ width: 320 }}>
      <AspectRatio ratio="16:9" rounded>
        <img src={aspectRatioPhoto} alt="Sample photo" />
      </AspectRatio>
    </div>
  ),
};

/** Any content keeps the ratio: a placeholder while a video loads. */
export const Placeholder: StoryObj = {
  render: () => (
    <div style={{ width: 320 }}>
      <AspectRatio ratio="16:9" rounded style={{ display: 'grid', placeItems: 'center', background: 'var(--ds-fill-2)' }}>
        <span style={caption}>Video loading…</span>
      </AspectRatio>
    </div>
  ),
};

/** Light and Dark: the box itself draws nothing, so it looks the same in both. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24 }}>
          <div style={{ width: 240 }}>
            <AspectRatio ratio="4:3" rounded>
              <img src={aspectRatioPhoto} alt="" />
            </AspectRatio>
          </div>
        </div>
      ))}
    </div>
  ),
};
