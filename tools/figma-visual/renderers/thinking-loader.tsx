import { ThinkingLoader } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps the Sort UI 2.0 pattern "Thinking Loader" (6126:2130) to code with its sample content.
export const renderThinkingLoader: Renderer = (p) => {
  let el;
  switch (p.State) {
    case 'Done':
      el = <ThinkingLoader status="done">Thought for 10 s</ThinkingLoader>;
      break;
    case 'Slow':
      el = <ThinkingLoader status="slow" elapsed="0:48" onStop={() => {}} />;
      break;
    case 'Stopped':
      el = <ThinkingLoader status="stopped">Stopped after 52 s</ThinkingLoader>;
      break;
    default:
      el = <ThinkingLoader>Reading 4 files…</ThinkingLoader>;
  }
  return (
    <div id="target" style={{ display: 'inline-block', padding: 8, background: 'var(--ds-background)' }}>
      {el}
    </div>
  );
};
