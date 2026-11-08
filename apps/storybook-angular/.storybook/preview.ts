import type { Preview } from '@storybook/angular';
import brands from '@helloantek/ds-tokens/brands.json';

// Brand and colour scheme as in the React Storybook: the same toolbar, the same attributes on <html>.
const preview: Preview = {
  tags: ['autodocs'],
  globalTypes: {
    brand: {
      description: 'Brand (token set from brands.json)',
      toolbar: { title: 'Brand', icon: 'paintbrush', items: Object.entries(brands).map(([value, title]) => ({ value, title })), dynamicTitle: true },
    },
    scheme: {
      description: 'Colour scheme',
      toolbar: { title: 'Scheme', icon: 'mirror', items: ['light', 'dark'], dynamicTitle: true },
    },
  },
  initialGlobals: { brand: 'theme-1', scheme: 'light' },
  decorators: [
    (story, { globals }) => {
      const html = document.documentElement;
      html.setAttribute('data-ds-brand', globals['brand'] ?? 'theme-1');
      html.setAttribute('data-ds-scheme', globals['scheme'] ?? 'light');
      document.body.style.background = 'var(--ds-background)';
      return story();
    },
  ],
  parameters: {
    layout: 'centered',
    a11y: { test: 'error' },
    controls: { expanded: true },
  },
};

export default preview;
