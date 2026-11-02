import { Pagination } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Sort UI 2.0 Pagination (253:5) demos: "Pagination" (page 2 of 12 in 448 px), "Icons only" (page 3 of 5 in 448 px),
// "With a list" (page 1 of 3 in 384 px), and the Pagination Ellipsis (253:2) on its own.
export const renderPagination: Renderer = (p) => {
  const width = p.Demo === 'list' ? 384 : 448;
  return (
    <div style={{ padding: 24, background: 'var(--ds-background)' }}>
      {p.Demo === 'ellipsis' ? (
        <div id="target" style={{ display: 'inline-block' }}>
          <Pagination page={6} pageCount={12} />
        </div>
      ) : (
        <div id="target" style={{ width }}>
          {p.Demo === 'icons' ? <Pagination iconsOnly page={3} pageCount={5} /> : p.Demo === 'list' ? <Pagination page={1} pageCount={3} /> : <Pagination page={2} pageCount={12} />}
        </div>
      )}
    </div>
  );
};
