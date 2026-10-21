import type { Preview } from '@storybook/react-vite';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@helloantek/ds-tokens/css/scoped/theme-1.css';
import '@helloantek/ds-tokens/css/scoped/theme-2.css';
import '@helloantek/ds-css';
import brands from '@helloantek/ds-tokens/brands.json';

const preview: Preview = {
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
    (Story, { globals }) => {
      const html = document.documentElement;
      html.setAttribute('data-ds-brand', globals.brand ?? 'theme-1');
      html.setAttribute('data-ds-scheme', globals.scheme ?? 'light');
      document.body.style.background = 'var(--ds-bg-default)';
      return <Story />;
    },
  ],
  parameters: {
    layout: 'centered',
    a11y: { test: 'error' },
    controls: { expanded: true },
  },
};

export default preview;
