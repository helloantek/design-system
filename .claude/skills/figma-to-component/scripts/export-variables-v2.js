// use_figma, read-only, on Sort UI 2.0. Every local collection except Primitives, values resolved per mode (aliases
// and colour × opacity composites), plus effect styles, as text lines with a checksum. Save `text` to a file and run
//   node packages/tokens/scripts/import-sort-ui-2.mjs <file> <hash>
// which checks the hash (so nothing was mistyped on the way) and writes packages/tokens/figma/sort-ui-2/*.json.
const h2 = (v) => Math.round(v * 255).toString(16).padStart(2, '0');
const hex = (c, a) => '#' + h2(c.r) + h2(c.g) + h2(c.b) + (a < 1 ? h2(a) : '');
const cols = await figma.variables.getLocalVariableCollectionsAsync();
async function raw(val, modeName) {
  while (val && typeof val === 'object' && val.type === 'VARIABLE_ALIAS') {
    const t = await figma.variables.getVariableByIdAsync(val.id);
    const col = cols.find((c) => c.id === t.variableCollectionId);
    const m = col.modes.find((m) => m.name === modeName) || col.modes.find((m) => m.modeId === col.defaultModeId);
    val = t.valuesByMode[m.modeId];
  }
  return val;
}
async function value(val, modeName) {
  val = await raw(val, modeName);
  if (val && typeof val === 'object' && 'color' in val && 'opacity' in val) {
    const c = await raw(val.color, modeName);
    const o = await raw(val.opacity, modeName);
    return hex(c, (c.a ?? 1) * (typeof o === 'number' ? o / 100 : 1));
  }
  if (val && typeof val === 'object' && 'r' in val) return hex(val, val.a ?? 1);
  if (val && typeof val === 'object' && val.type === 'CUSTOM_CUBIC_BEZIER') { const b = val.easingFunctionCubicBezier; return `cubic-bezier(${[b.x1, b.y1, b.x2, b.y2].map((n) => +n.toFixed(3)).join(', ')})`; }
  return typeof val === 'number' ? +val.toFixed(4) : val;
}
const lines = [];
for (const c of cols) {
  if (c.name === 'Primitives') continue;
  lines.push('#' + c.name + '|' + c.modes.map((m) => m.name).join(','));
  for (const id of c.variableIds) {
    const v = await figma.variables.getVariableByIdAsync(id);
    const vals = [];
    for (const m of c.modes) vals.push(await value(v.valuesByMode[m.modeId], m.name));
    const cs = v.codeSyntax?.WEB || '';
    const css = /^var\(--[\w-]+\)$/.test(cs) ? cs.slice(6, -1) : '';
    lines.push([v.name, ...vals, css].join('|'));
  }
}
lines.push('#Effects');
for (const s of await figma.getLocalEffectStylesAsync()) {
  const parts = [];
  for (const e of s.effects) {
    if (e.visible === false) continue;
    const b = e.boundVariables && e.boundVariables.color;
    const col = b ? '{' + (await figma.variables.getVariableByIdAsync(b.id)).name + '}' : hex(e.color, e.color.a);
    parts.push(`${e.type === 'INNER_SHADOW' ? 'inset ' : ''}${e.offset.x}px ${e.offset.y}px ${e.radius}px ${e.spread || 0}px ${col}`);
  }
  lines.push(s.name + '|' + parts.join(', '));
}
const text = lines.join('\n');
let h = 5381; for (let i = 0; i < text.length; i++) h = ((h * 33) ^ text.charCodeAt(i)) >>> 0;
return { hash: h, length: text.length, lineCount: lines.length, text };
