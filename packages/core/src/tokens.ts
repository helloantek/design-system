// Context window maths shared by the adapters' ContextWindow.

/** 136400 → "136.4K", 200000 → "200K", 1250000 → "1.3M". */
export function formatTokens(tokens: number): string {
  const short = (value: number, unit: string) => `${value.toFixed(1).replace(/\.0$/, '')}${unit}`;
  if (tokens >= 1_000_000) return short(tokens / 1_000_000, 'M');
  if (tokens >= 1_000) return short(tokens / 1_000, 'K');
  return String(Math.round(tokens));
}

/** Splits `cells` cells among the parts and what is left, in proportion, rounding by the largest remainder. */
export function contextCells(sizes: number[], total: number, cells: number): number[] {
  const free = Math.max(0, total - sizes.reduce((a, b) => a + b, 0));
  const exact = [...sizes, free].map((size) => (total > 0 ? (size / total) * cells : 0));
  const counts = exact.map(Math.floor);
  let left = cells - counts.reduce((a, b) => a + b, 0);
  const order = exact.map((value, index) => [value - Math.floor(value), index] as const).sort((a, b) => b[0] - a[0]);
  for (let k = 0; left > 0 && k < order.length; k++, left--) counts[order[k][1]]++;
  return counts;
}
