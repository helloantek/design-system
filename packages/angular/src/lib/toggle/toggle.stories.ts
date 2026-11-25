import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsToggle } from './toggle';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=126-1117';

const meta = {
  title: 'Components/Toggle',
  decorators: [moduleMetadata({ imports: [DsToggle] })],
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Toggle** ([open in Figma](${FIGMA_URL})) for Angular: \`<button dsToggle>\` with \`aria-pressed\` and the same markup and \`ds-toggle\` classes as the React Toggle. \`variant\` (\`default\` · \`outline\`), \`size\` (\`sm\` · \`default\` · \`lg\`), \`[(pressed)]\`; icons marked \`dsLeadingIcon\`, \`dsTrailingIcon\`, or \`dsIcon\` alone (then give it an \`aria-label\`).`,
      },
    },
  },
} satisfies Meta;

export default meta;

/** Figma Variant × Pressed, and Disabled. */
export const States: StoryObj = {
  render: () => ({
    props: { variants: ['default', 'outline'] },
    template: `<div style="display: grid; grid-template-columns: repeat(3, max-content); gap: 12px; align-items: center;">
      @for (variant of variants; track variant) {
        <div style="display: contents;">
          <button dsToggle [variant]="variant">Off</button>
          <button dsToggle [variant]="variant" [pressed]="true">On</button>
          <button dsToggle [variant]="variant" disabled>Disabled</button>
        </div>
      }
    </div>`,
  }),
};
