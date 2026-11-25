import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsToggle } from '../toggle/toggle';
import { DsToggleGroup } from './toggle-group';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=128-1073';

const meta = {
  title: 'Components/Toggle Group',
  decorators: [moduleMetadata({ imports: [DsToggleGroup, DsToggle] })],
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Toggle Group** ([open in Figma](${FIGMA_URL})) for Angular: \`<div dsToggleGroup>\` with \`<button dsToggle value="…">\` items, the same markup and classes as the React Toggle Group. \`type\` (\`single\` · \`multiple\`), \`[(value)]\`, \`variant\`, \`size\`, \`spacing\` (2 · 1 · 0), \`orientation\`, \`disabled\`. One Tab stop; the arrow keys, Home and End move between the items.`,
      },
    },
  },
} satisfies Meta;

export default meta;

/** Figma demo "Variants": Default and Outline. */
export const Variants: StoryObj = {
  render: () => ({
    props: { variants: ['default', 'outline'] },
    template: `<div style="display: grid; gap: 12px; justify-items: start;">
      @for (variant of variants; track variant) {
        <div dsToggleGroup type="single" [variant]="variant" value="ios" [attr.aria-label]="'Platform (' + variant + ')'">
          <button dsToggle value="web">Web</button>
          <button dsToggle value="ios">iOS</button>
          <button dsToggle value="android">Android</button>
        </div>
      }
    </div>`,
  }),
};

/** Figma demo "Disabled": the whole group, or one item. */
export const Disabled: StoryObj = {
  render: () => ({
    template: `<div style="display: grid; gap: 12px; justify-items: start;">
      <div dsToggleGroup type="single" variant="outline" disabled value="css" aria-label="Format">
        <button dsToggle value="css">CSS</button>
        <button dsToggle value="json">JSON</button>
        <button dsToggle value="swift">Swift</button>
      </div>
      <div dsToggleGroup type="single" variant="outline" value="ios" aria-label="Target">
        <button dsToggle value="web">Web</button>
        <button dsToggle value="ios">iOS</button>
        <button dsToggle value="android">Android</button>
        <button dsToggle value="linux" disabled>Linux</button>
      </div>
    </div>`,
  }),
};
