import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  // Stories live next to the components they document.
  // The React adapter's stories; the Angular adapter's (packages/angular) belong to apps/storybook-angular.
  stories: ['../../../packages/react/src/**/*.mdx', '../../../packages/react/src/**/*.stories.@(ts|tsx)', '../../../docs/*.mdx'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  framework: '@storybook/react-vite',
  // The Angular adapter's Storybook (apps/storybook-angular), composed into this one: in a build it is copied to
  // ./angular next to this Storybook (tools/compose-storybooks.mjs); in development it runs on port 6009.
  refs: (_config, { configType }) => ({
    angular: { title: 'Angular', url: configType === 'DEVELOPMENT' ? 'http://localhost:6009' : './angular' },
  }),
  core: { disableTelemetry: true },
  // Use component sources directly, so Storybook needs no package build and reloads on edits.
  viteFinal: (vite) => ({
    ...vite,
    // Keep function names through minification, so "Show code" names the components and icons (<RiAddLine />, not <d />).
    build: { ...vite.build, rolldownOptions: { ...vite.build?.rolldownOptions, output: { ...(vite.build?.rolldownOptions?.output as object), keepNames: true } } },
    resolve: {
      ...vite.resolve,
      alias: {
        ...vite.resolve?.alias,
        '@helloantek/ds-react': fileURLToPath(new URL('../../../packages/react/src/index.ts', import.meta.url)),
        '@helloantek/ds-core': fileURLToPath(new URL('../../../packages/core/src/index.ts', import.meta.url)),
      },
    },
  }),
};

export default config;
