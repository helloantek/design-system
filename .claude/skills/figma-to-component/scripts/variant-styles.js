// use_figma, read-only. Resolved styles per variant, as Figma variable names where bound.
// Set SET_ID and FILTER (keeps the result under the 48 KB limit, e.g. one size at a time).
const SET_ID = 'REPLACE_ME';
const FILTER = (props) => props.Size === undefined || props.Size === 'md';

const set = await figma.getNodeByIdAsync(SET_ID);
const hex = (c, o = 1) => '#' + [c.r, c.g, c.b].map((v) => Math.round(v * 255).toString(16).padStart(2, '0')).join('') + (o < 1 ? Math.round(o * 255).toString(16).padStart(2, '0') : '');
async function varName(b) { if (!b) return null; const v = await figma.variables.getVariableByIdAsync(b.id); return v ? v.name : null; }
async function paints(ps) {
  if (!Array.isArray(ps)) return null;
  const out = [];
  for (const p of ps) {
    if (p.visible === false) continue;
    out.push(p.type === 'SOLID' ? (await varName(p.boundVariables && p.boundVariables.color)) || hex(p.color, p.opacity ?? 1) : p.type);
  }
  return out.join(',') || null;
}
async function effects(es) {
  const out = [];
  for (const e of es || []) {
    if (e.visible === false) continue;
    const col = (await varName(e.boundVariables && e.boundVariables.color)) || hex(e.color, e.color.a);
    out.push(`${e.type === 'INNER_SHADOW' ? 'inset ' : ''}${e.offset.x} ${e.offset.y} ${e.radius} ${e.spread || 0} ${col}`);
  }
  return out;
}
const res = {};
for (const c of set.children) {
  if (c.type !== 'COMPONENT') continue;
  const props = Object.fromEntries(c.name.split(', ').map((kv) => kv.split('=')));
  if (!FILTER(props)) continue;
  const texts = [];
  for (const t of c.findAll((n) => n.type === 'TEXT')) texts.push({ layer: t.parent.name, fill: await paints(t.fills), effects: await effects(t.effects), visible: t.visible });
  const icons = [];
  for (const i of c.findAll((n) => n.type === 'INSTANCE')) {
    const v = i.findOne((n) => n.type === 'VECTOR' || n.type === 'BOOLEAN_OPERATION');
    const main = await i.getMainComponentAsync();
    icons.push({ layer: i.name, main: main && main.name, size: [i.width, i.height], fill: v ? await paints(v.fills) : null, visible: i.visible });
  }
  res[c.name] = {
    id: c.id, w: c.width, h: c.height,
    fill: await paints(c.fills), stroke: await paints(c.strokes), strokeAlign: c.strokeAlign, dash: (c.dashPattern || []).join(' ') || null,
    effectStyle: c.effectStyleId ? (await figma.getStyleByIdAsync(c.effectStyleId))?.name : null,
    effects: await effects(c.effects), texts, icons,
  };
}
return res;
