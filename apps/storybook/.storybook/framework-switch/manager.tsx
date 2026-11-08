/** @jsxRuntime classic */
// Classic JSX: the manager provides its own React, which this file must use (not a second copy from node_modules).
import React, { useEffect } from 'react';
import { addons, types, useStorybookApi, useStorybookState } from 'storybook/manager-api';

// One component tree for both adapters (ADR 0002): the toolbar's "React | Angular" switch shows the current story or
// Docs page from the React build or from the Angular one, composed under the ref "angular" (main.ts refs). Story ids
// are the same in both Storybooks, so the switch only changes the ref. It also swaps the tree: React shows this
// Storybook's tree, Angular the Angular Storybook's (the same titles, only the components Angular has), so clicks in
// the tree stay in the chosen framework. manager-head.html hides the other tree by the `data-ds-framework` attribute
// set here on <html>. The choice is remembered.

const ADDON_ID = 'ds/framework-switch';
const REF = 'angular';
const KEY = 'ds-framework';
type Framework = 'react' | 'angular';

const stored = (): Framework => {
  try {
    return localStorage.getItem(KEY) === 'angular' ? 'angular' : 'react';
  } catch {
    return 'react';
  }
};
const store = (framework: Framework) => {
  try {
    localStorage.setItem(KEY, framework);
  } catch {}
};

// A ref's index keys its entries with the ref's prefix ("angular_components-button--playground").
const bare = (id: string) => id.replace(new RegExp(`^${REF}_`), '');

function FrameworkSwitch() {
  const api = useStorybookApi();
  const { storyId, refId, refs, viewMode } = useStorybookState();
  const index = refs?.[REF]?.index ?? {};
  const id = storyId ? bare(storyId) : '';
  const current: Framework = refId === REF ? 'angular' : 'react';
  const inAngular = !!(index[`${REF}_${id}`] ?? index[id]);
  const inReact = !!api.getData(id);

  const select = (framework: Framework) => {
    store(framework);
    document.documentElement.dataset.dsFramework = framework;
    if (framework === current) return;
    if (framework === 'angular' && inAngular) api.selectStory(id, undefined, { ref: REF, viewMode });
    if (framework === 'react' && inReact) api.selectStory(id, undefined, { viewMode });
  };

  // The tree on show follows the framework on show (a link to either build switches it).
  useEffect(() => {
    document.documentElement.dataset.dsFramework = current;
  }, [current]);

  // Opened on a React story with Angular chosen (a link, a reload): show the Angular one when there is one.
  useEffect(() => {
    if (stored() === 'angular' && current === 'react' && inAngular) api.selectStory(id, undefined, { ref: REF, viewMode });
  }, [inAngular]);

  const button = (framework: Framework, label: string, available: boolean) => (
    <button
      key={framework}
      type="button"
      onClick={() => select(framework)}
      disabled={!available}
      aria-pressed={current === framework}
      title={available ? `Show this story in ${label}` : `Not in ${label} yet`}
      style={{
        border: 0,
        borderRadius: 4,
        padding: '4px 8px',
        font: 'inherit',
        fontSize: 12,
        fontWeight: current === framework ? 700 : 400,
        cursor: available ? 'pointer' : 'not-allowed',
        opacity: available ? 1 : 0.4,
        color: current === framework ? '#fff' : 'inherit',
        background: current === framework ? '#1e293b' : 'transparent',
      }}
    >
      {label}
    </button>
  );

  return (
    <div role="group" aria-label="Framework" style={{ display: 'flex', alignItems: 'center', gap: 2, padding: '0 6px' }}>
      {button('react', 'React', inReact)}
      {button('angular', 'Angular', inAngular)}
    </div>
  );
}

addons.register(ADDON_ID, () => {
  addons.add(`${ADDON_ID}/tool`, {
    type: types.TOOL,
    title: 'Framework',
    match: ({ viewMode }) => viewMode === 'story' || viewMode === 'docs',
    render: () => <FrameworkSwitch />,
  });
});
