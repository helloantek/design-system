// Formats a story's rendered DOM as indented HTML: one element per line, short text kept on its element's line,
// empty `style` and `class` attributes dropped. With `foldSvg`, an <svg> keeps its attributes and its contents
// become "…", so the classes and structure stay readable next to long path data.

const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr']);
const INDENT = '  ';
const escapeText = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/ /g, '&nbsp;');
const escapeAttr = (value: string) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;');

function attributes(el: Element): string {
  return [...el.attributes]
    .filter((a) => !((a.name === 'style' || a.name === 'class') && a.value.trim() === ''))
    .map((a) => (a.value === '' ? ` ${a.name}` : ` ${a.name}="${escapeAttr(a.value)}"`))
    .join('');
}

function lines(node: Node, depth: number, foldSvg: boolean, out: string[]): void {
  const pad = INDENT.repeat(depth);
  if (node.nodeType === Node.TEXT_NODE) {
    const text = node.textContent?.replace(/\s+/g, ' ').trim();
    if (text) out.push(pad + escapeText(text));
    return;
  }
  if (node.nodeType !== Node.ELEMENT_NODE) return;
  const el = node as Element;
  // localName: lower case for HTML, as written for SVG (linearGradient).
  const tag = el.localName;
  const open = `<${tag}${attributes(el)}>`;
  if (VOID.has(tag)) {
    out.push(pad + open);
    return;
  }
  const close = `</${tag}>`;
  if (tag === 'svg' && foldSvg && el.childNodes.length) {
    out.push(`${pad}${open}…${close}`);
    return;
  }
  const children = [...el.childNodes].filter((c) => c.nodeType === Node.ELEMENT_NODE || (c.nodeType === Node.TEXT_NODE && c.textContent?.trim()));
  if (children.length === 0) {
    out.push(pad + open + close);
    return;
  }
  // A single short text child stays on the element's line: <span class="ds-badge">New</span>.
  if (children.length === 1 && children[0].nodeType === Node.TEXT_NODE) {
    const text = escapeText(children[0].textContent!.replace(/\s+/g, ' ').trim());
    if (pad.length + open.length + text.length + close.length <= 120) {
      out.push(pad + open + text + close);
      return;
    }
  }
  out.push(pad + open);
  for (const child of children) lines(child, depth + 1, foldSvg, out);
  out.push(pad + close);
}

export function formatHtml(root: Element, foldSvg: boolean): string {
  const out: string[] = [];
  for (const child of root.childNodes) lines(child, 0, foldSvg, out);
  return out.join('\n');
}
