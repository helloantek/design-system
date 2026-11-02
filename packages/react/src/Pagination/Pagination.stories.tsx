import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type CSSProperties, type ReactNode } from 'react';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Select } from '../Select';
import { Pagination } from './Pagination';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=251-3';

const meta = {
  title: 'Components/Pagination',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Pagination** and **Pagination Ellipsis** ([open in Figma](${FIGMA_URL})): Previous and Next (Ghost Buttons with a chevron), 32 px page links (Ghost; the current page Outline with \`aria-current="page"\`) and ellipses, 4 px apart. \`page\` / \`pageCount\` / \`onPageChange\`, \`getHref\` (links instead of buttons), \`siblingCount\` and \`boundaryCount\` (which pages show around the gaps), \`iconsOnly\` and \`showFirstLast\` ("Icons only" demo), \`labels\` for other languages. Previous / Next are disabled on the first / last page. The "Previous and next" and "Rows per page" demos are layouts built from Button and Select.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const text: CSSProperties = { fontFamily: 'var(--ds-font-sans)', fontSize: 14, lineHeight: '20px', letterSpacing: '-0.005em', margin: 0 };
const icon = (path: ReactNode) => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {path}
  </svg>
);
const chevronLeft = icon(<path d="m10 12-4-4 4-4" />);
const chevronRight = icon(<path d="m6 12 4-4-4-4" />);

export const Playground: StoryObj<{ pageCount: number; siblingCount: number; boundaryCount: number; iconsOnly: boolean; showFirstLast: boolean }> = {
  args: { pageCount: 12, siblingCount: 1, boundaryCount: 1, iconsOnly: false, showFirstLast: false },
  render: function Render(args) {
    const [page, setPage] = useState(2);
    return <Pagination {...args} page={page} onPageChange={setPage} />;
  },
};

/** Figma demo "Pagination": page 2 of 12. */
export const Default: StoryObj = {
  render: function Render() {
    const [page, setPage] = useState(2);
    return <Pagination page={page} pageCount={12} onPageChange={setPage} />;
  },
};

/** Links instead of buttons (`getHref`), for server-rendered pages. */
export const Links: StoryObj = {
  render: () => <Pagination page={5} pageCount={12} getHref={(p) => `?page=${p}`} aria-label="Search results pages" />,
};

/** Figma demo "Previous and next": Outline Buttons and a muted page count, spread across 384 px. */
export const PreviousAndNext: StoryObj = {
  render: function Render() {
    const [page, setPage] = useState(2);
    const pages = 12;
    return (
      <nav aria-label="Pagination" style={{ width: 384, maxWidth: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <Button variant="outline" leadingIcon={chevronLeft} disabled={page <= 1} onClick={() => setPage(page - 1)}>
          Previous
        </Button>
        <p style={{ ...text, color: 'var(--ds-muted-foreground)' }} aria-live="polite">
          Page {page} of {pages}
        </p>
        <Button variant="outline" trailingIcon={chevronRight} disabled={page >= pages} onClick={() => setPage(page + 1)}>
          Next
        </Button>
      </nav>
    );
  },
};

/** Figma demo "Rows per page": a table footer with a Select sm and icon buttons. */
export const RowsPerPage: StoryObj = {
  render: function Render() {
    const total = 128;
    const [size, setSize] = useState('10');
    const [page, setPage] = useState(3);
    const rows = Number(size);
    const pages = Math.ceil(total / rows);
    const first = (page - 1) * rows + 1;
    const last = Math.min(page * rows, total);
    return (
      <div style={{ width: 600, maxWidth: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span id="rows-label" style={{ ...text, color: 'var(--ds-foreground)' }}>
            Rows per page
          </span>
          <Select
            size="sm"
            aria-label="Rows per page"
            options={['10', '20', '50'].map((v) => ({ value: v, label: v }))}
            value={size}
            onValueChange={(v) => {
              setSize(v);
              setPage(1);
            }}
            style={{ width: 72 }}
          />
        </div>
        <nav aria-label="Pagination" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <p style={{ ...text, color: 'var(--ds-muted-foreground)' }} aria-live="polite">
            {first}–{last} of {total}
          </p>
          <div style={{ display: 'flex', gap: 4 }}>
            <Button variant="outline" size="sm" icon={chevronLeft} aria-label="Previous page" disabled={page <= 1} onClick={() => setPage(page - 1)} />
            <Button variant="outline" size="sm" icon={chevronRight} aria-label="Next page" disabled={page >= pages} onClick={() => setPage(page + 1)} />
          </div>
        </nav>
      </div>
    );
  },
};

/** Figma demo "Icons only": First, Previous, Next and Last as icon buttons. */
export const IconsOnly: StoryObj = {
  render: function Render() {
    const [page, setPage] = useState(3);
    return <Pagination iconsOnly page={page} pageCount={5} onPageChange={setPage} />;
  },
};

const orders = [
  { id: '#4821', date: 'Sep 24 · 3 items', status: 'Delivered', price: '$36.49' },
  { id: '#4790', date: 'Sep 18 · 1 item', status: 'Delivered', price: '$12.00' },
  { id: '#4755', date: 'Sep 11 · 2 items', status: 'Refunded', price: '$58.20' },
  { id: '#4731', date: 'Sep 4 · 4 items', status: 'Delivered', price: '$74.10' },
  { id: '#4702', date: 'Aug 29 · 1 item', status: 'Delivered', price: '$9.99' },
  { id: '#4688', date: 'Aug 22 · 2 items', status: 'Refunded', price: '$31.40' },
  { id: '#4650', date: 'Aug 15 · 3 items', status: 'Delivered', price: '$45.00' },
  { id: '#4612', date: 'Aug 8 · 1 item', status: 'Delivered', price: '$18.75' },
  { id: '#4597', date: 'Aug 1 · 2 items', status: 'Delivered', price: '$27.30' },
];

/** Figma demo "With a list": three orders a page. */
export const WithAList: StoryObj = {
  render: function Render() {
    const [page, setPage] = useState(1);
    const shown = orders.slice((page - 1) * 3, page * 3);
    return (
      <div style={{ width: 384, maxWidth: '100%', display: 'grid', gap: 24 }}>
        <ul aria-label="Orders" style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 8 }}>
          {shown.map((o) => (
            <li key={o.id} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 14px', borderRadius: 'var(--ds-radius-xl)', boxShadow: 'inset 0 0 0 1px var(--ds-border)' }}>
              <div style={{ flex: 1, display: 'grid', gap: 4 }}>
                <span style={{ ...text, color: 'var(--ds-foreground)', fontWeight: 500 }}>Order {o.id}</span>
                <span style={{ ...text, color: 'var(--ds-muted-foreground)' }}>{o.date}</span>
              </div>
              <Badge border={o.status === 'Refunded'}>{o.status}</Badge>
              <span style={{ ...text, color: 'var(--ds-foreground)', fontWeight: 500 }}>{o.price}</span>
            </li>
          ))}
        </ul>
        <Pagination page={page} pageCount={3} onPageChange={setPage} aria-label="Orders pages" />
      </div>
    );
  },
};

/** Labels in another language (Polish). */
export const Labels: StoryObj = {
  render: function Render() {
    const [page, setPage] = useState(4);
    return (
      <Pagination
        page={page}
        pageCount={20}
        onPageChange={setPage}
        aria-label="Strony"
        labels={{ previous: 'Poprzednia', next: 'Następna', page: (p) => `Strona ${p}` }}
      />
    );
  },
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'grid', gap: 16 }}>
          <Pagination page={2} pageCount={12} aria-label={`Pagination (${scheme})`} />
          <Pagination iconsOnly page={3} pageCount={5} aria-label={`Pagination, icons (${scheme})`} />
        </div>
      ))}
    </div>
  ),
};
