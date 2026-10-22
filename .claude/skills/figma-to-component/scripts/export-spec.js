// use_figma, read-only. Exact layer values per variant, for tools/figma-visual/references/<name>/spec.json.
// IDS: variant node ids (from manifest.json). LAYERS: layer paths to read, relative to the variant:
//   'root'                 the variant itself
//   'Label'                first descendant named Label (depth-first)
//   'Suffix#1'             second descendant named Suffix
//   'Container/Container'  a Container inside a Container
//   'Label/TEXT'           first TEXT node inside Label;  'lead-icon/VECTOR' first vector inside lead-icon
// The pooled output fits ~60 variants in the 48 KB return limit; split IDS into batches and merge otherwise.
const IDS = ['REPLACE_ME'];
const LAYERS = ['root'];

const hex = (c, a = 1) =>
  '#' + [c.r, c.g, c.b].map((v) => Math.round(v * 255).toString(16).padStart(2, '0')).join('') + (a < 1 ? Math.round(a * 255).toString(16).padStart(2, '0') : '');
const solid = (paints) => {
  if (!Array.isArray(paints)) return undefined;
  const p = paints.find((x) => x.visible !== false && x.type === 'SOLID');
  return p ? hex(p.color, p.opacity ?? 1) : undefined;
};
const r1 = (v) => Math.round(v * 100) / 100;

function find(root, path) {
  if (path === 'root') return root;
  let node = root;
  for (const step of path.split('/')) {
    const [name, idx] = step.split('#');
    const isType = name === name.toUpperCase() && /^[A-Z_]+$/.test(name);
    const matches = node.findAll((n) => (isType ? n.type === name : n.name === name) && n.visible !== false);
    node = matches[Number(idx || 0)];
    if (!node) return null;
  }
  return node;
}

// Only values the style/geometry check compares: no x/y (they follow text widths, which depend on rasterisation)
// and no boxes for text or vector layers.
function describe(n) {
  const o = {};
  if (n.type !== 'TEXT' && n.type !== 'VECTOR' && n.type !== 'BOOLEAN_OPERATION') Object.assign(o, { w: r1(n.width), h: r1(n.height) });
  if ('cornerRadius' in n && typeof n.cornerRadius === 'number' && n.cornerRadius) o.r = n.cornerRadius;
  if ('layoutMode' in n && n.layoutMode !== 'NONE') {
    o.p = [n.paddingTop, n.paddingRight, n.paddingBottom, n.paddingLeft];
    o.g = n.itemSpacing;
  }
  if (n.type === 'TEXT') {
    Object.assign(o, { fs: n.fontSize, fw: n.fontWeight, color: solid(n.fills) });
    if (n.lineHeight.unit === 'PIXELS') o.lh = n.lineHeight.value;
  } else {
    const fill = solid('fills' in n ? n.fills : undefined);
    if (fill) o.fill = fill;
  }
  const stroke = solid('strokes' in n ? n.strokes : undefined);
  if (stroke) o.stroke = stroke;
  if ('opacity' in n && n.opacity < 1) o.opacity = r1(n.opacity);
  return o;
}

// Identical layer specs are pooled to stay small: { layers: [spec, ...], variants: { nodeId: { path: poolIndex } } }.
const layers = [], keys = new Map(), variants = {};
for (const id of IDS) {
  const root = await figma.getNodeByIdAsync(id);
  if (!root) throw new Error(`No node ${id}`);
  const v = {};
  for (const path of LAYERS) {
    const n = find(root, path);
    if (!n) continue;
    const key = JSON.stringify(describe(n));
    if (!keys.has(key)) { keys.set(key, layers.length); layers.push(JSON.parse(key)); }
    v[path] = keys.get(key);
  }
  variants[id] = v;
}
return { layers, variants };
