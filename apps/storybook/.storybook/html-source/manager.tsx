/** @jsxRuntime classic */
// Classic JSX: the manager provides its own React, which this file must use (not a second copy from node_modules).
import React, { useEffect, useState } from 'react';
import { addons, types, useChannel, useStorybookState } from 'storybook/manager-api';
import { AddonPanel, SyntaxHighlighter } from 'storybook/internal/components';
import { ADDON_ID, HTML_EVENT, PANEL_ID, REQUEST_EVENT, type HtmlPayload } from './constants';

// The "HTML" panel: the markup the current story renders, with the ds-* classes, for Vue, Svelte, Angular or plain
// HTML. SVG contents are folded unless "SVG in full" is ticked; the copy button copies what is shown.
function HtmlPanel() {
  const [html, setHtml] = useState<HtmlPayload | null>(null);
  const [fullSvg, setFullSvg] = useState(false);
  const emit = useChannel({ [HTML_EVENT]: (payload: HtmlPayload) => setHtml(payload) });
  const { refId } = useStorybookState();
  useEffect(() => emit(REQUEST_EVENT), [emit]);
  // An Angular story (the framework switch) renders in the composed Storybook, which this panel cannot read.
  if (refId) return <p style={{ margin: 16 }}>This is the Angular build of the story: its markup is the same as React's (tools/adapter-parity.mjs checks it in CI). Switch the toolbar to React to see it here.</p>;
  if (!html) return <p style={{ margin: 16 }}>Open a story to see its HTML.</p>;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', fontSize: 12, borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
        <input type="checkbox" checked={fullSvg} onChange={(event) => setFullSvg(event.currentTarget.checked)} />
        SVG in full
      </label>
      <div style={{ flex: 1, minHeight: 0, overflow: 'auto' }}>
        <SyntaxHighlighter language="html" copyable padded format={false}>
          {fullSvg ? html.full : html.short}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'HTML',
    render: ({ active }) => (
      <AddonPanel active={!!active}>
        <HtmlPanel />
      </AddonPanel>
    ),
  });
});
