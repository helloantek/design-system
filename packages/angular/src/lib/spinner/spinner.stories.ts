import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsSpinner } from './spinner';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=259-3';

const meta = {
  title: 'Components/Spinner',
  decorators: [moduleMetadata({ imports: [DsSpinner] })],
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Spinner** ([open in Figma](${FIGMA_URL})) for Angular: \`<span dsSpinner>\` with the same markup and \`ds-spinner\` classes as the React Spinner. \`variant\` (\`default\` · \`gradient\`), \`size\` (\`sm\` 12 · \`default\` 16 · \`lg\` 20 · \`xl\` 24 px), \`label\` (\`role="status"\`, default "Loading") or \`decorative\` when the text next to it already says what is happening.`,
      },
    },
  },
} satisfies Meta;

export default meta;

/** Figma Variant × Size. */
export const VariantsAndSizes: StoryObj = {
  render: () => ({
    props: { variants: ['default', 'gradient'], sizes: ['sm', 'default', 'lg', 'xl'] },
    template: `<div style="display: grid; grid-template-columns: repeat(4, 48px); place-items: center; gap: 24px; color: var(--ds-foreground);">
      @for (variant of variants; track variant) {
        @for (size of sizes; track size) {
          <span dsSpinner [variant]="variant" [size]="size" [label]="'Loading (' + variant + ', ' + size + ')'"></span>
        }
      }
    </div>`,
  }),
};
