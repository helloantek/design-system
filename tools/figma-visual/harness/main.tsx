import { createRoot } from 'react-dom/client';
import '@fontsource/inter/500.css';
import '@helloantek/ds-tokens/css/scoped/theme-1.css';
import '@helloantek/ds-tokens/css/scoped/theme-2.css';
import '@helloantek/ds-css';
import { renderers } from '../renderers';

// ?component=button&brand=theme-1&scheme=light&props=<JSON of Figma properties>
const q = new URLSearchParams(location.search);
const render = renderers[q.get('component') ?? ''];
if (!render) throw new Error(`No renderer for component "${q.get('component')}"`);
document.documentElement.setAttribute('data-ds-brand', q.get('brand') ?? 'theme-1');
document.documentElement.setAttribute('data-ds-scheme', q.get('scheme') ?? 'light');

createRoot(document.getElementById('root')!).render(render(JSON.parse(q.get('props') ?? '{}')));
document.fonts.ready.then(() => document.body.setAttribute('data-ready', ''));
