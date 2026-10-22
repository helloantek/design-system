import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

// Branch previews (.github/workflows/preview.yml) set STORYBOOK_PREVIEW_LABEL, so the sidebar says which build this is.
const label = process.env.STORYBOOK_PREVIEW_LABEL;

addons.setConfig({
  theme: create({ base: 'light', brandTitle: label ? `helloantek DS · ${label}` : 'helloantek DS' }),
});
