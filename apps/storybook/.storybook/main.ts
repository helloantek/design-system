import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  // Stories live next to the components they document.
  stories: ['../../../packages/*/src/**/*.mdx', '../../../packages/*/src/**/*.stories.@(ts|tsx)', '../../../docs/*.mdx'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  framework: '@storybook/react-vite',
  core: { disableTelemetry: true },
  // Use component sources directly, so Storybook needs no package build and reloads on edits.
  viteFinal: (vite) => ({
    ...vite,
    resolve: {
      ...vite.resolve,
      alias: { ...vite.resolve?.alias, '@helloantek/ds-react': fileURLToPath(new URL('../../../packages/react/src/index.ts', import.meta.url)) },
    },
  }),
};

export default config;
