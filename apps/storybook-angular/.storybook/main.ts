import type { StorybookConfig } from '@storybook/angular';

// The Angular adapter's stories, next to its components. The React Storybook (apps/storybook) composes this one,
// so both show in one sidebar (ADR 0002).
const config: StorybookConfig = {
  stories: ['../../../packages/angular/src/**/*.stories.ts'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  framework: { name: '@storybook/angular', options: {} },
  core: { disableTelemetry: true },
};

export default config;
