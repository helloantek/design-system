import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@helloantek/ds-react';
import type { ReactNode } from 'react';
import type { Renderer } from './types';

// Sort UI 2.0 Table (221:2) with Figma's sample content. Table Cell (221:21): one cell of a 120 px table, in the head,
// body or footer. Table Row (222:1724): a 448 px row of three cells (224 / 112 / 112, numbers aligned right); a body
// row is followed by a collapsed row so it keeps its divider, as in Figma. Table (223:46): header, three rows,
// footer and caption at 496 px. The first cell's text is marked for the spec check's "Label".
const label = (text: string) => <span data-label="">{text}</span>;
const frame = (width: number, children: ReactNode) => (
  <div style={{ padding: 24, background: 'var(--ds-background)' }}>
    <div style={{ width }}>{children}</div>
  </div>
);
const cols = (widths: number[]) => (
  <colgroup>
    {widths.map((w, i) => (
      <col key={i} style={{ width: w }} />
    ))}
  </colgroup>
);

export const renderTable: Renderer = (p) => {
  if (p.Part === 'Cell') {
    const align = p.Align === 'Right' ? 'right' : 'left';
    const cell = p.Type === 'Head' ? (
      <TableHead id="target" align={align}>
        {label('Cell')}
      </TableHead>
    ) : (
      <TableCell id="target" align={align}>
        {label('Cell')}
      </TableCell>
    );
    // Figma draws the footer's fill on the row (checked by row-footer), not on Table Cell Type=Footer.
    const row = <TableRow style={p.Type === 'Footer' ? { background: 'none' } : undefined}>{cell}</TableRow>;
    return frame(
      120,
      <Table aria-label="Cell">
        {p.Type === 'Head' ? <TableHeader>{row}</TableHeader> : p.Type === 'Footer' ? <TableFooter>{row}</TableFooter> : <TableBody>{row}</TableBody>}
      </Table>,
    );
  }
  if (p.Part === 'Row') {
    const text = p.Type === 'Head' ? ['Component', 'Instances', 'Coverage'] : p.Type === 'Footer' ? ['Total', '734', '69%'] : ['Cell', '412', '96%'];
    const Cell = p.Type === 'Head' ? TableHead : TableCell;
    const row = (
      <TableRow id="target" selected={p.State === 'Selected'}>
        <Cell>{label(text[0])}</Cell>
        <Cell align="right">{text[1]}</Cell>
        <Cell align="right">{text[2]}</Cell>
      </TableRow>
    );
    return frame(
      448,
      <Table aria-label="Row">
        {cols([224, 112, 112])}
        {p.Type === 'Head' ? (
          <TableHeader>{row}</TableHeader>
        ) : p.Type === 'Footer' ? (
          <TableFooter>{row}</TableFooter>
        ) : (
          <TableBody>
            {row}
            <TableRow style={{ visibility: 'collapse' }}>
              <TableCell colSpan={3} />
            </TableRow>
          </TableBody>
        )}
      </Table>,
    );
  }
  const rows = [
    ['Button', '412', '96%'],
    ['Dialog', '164', '78%'],
    ['Table', '97', '61%'],
  ];
  return frame(
    496,
    <Table id="target" caption="Web adoption, Aug 13 – Sep 12 · library usage vs. detached copies.">
      {cols([272, 112, 112])}
      <TableHeader>
        <TableRow>
          <TableHead>{label('Header')}</TableHead>
          <TableHead align="right">Instances</TableHead>
          <TableHead align="right">Coverage</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map(([name, n, pct]) => (
          <TableRow key={name}>
            <TableCell>{name}</TableCell>
            <TableCell align="right">{n}</TableCell>
            <TableCell align="right">{pct}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell align="right">673</TableCell>
          <TableCell align="right">78%</TableCell>
        </TableRow>
      </TableFooter>
    </Table>,
  );
};
