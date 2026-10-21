// use_figma, read-only. Resolved values for every mode, in the shape of packages/tokens/figma/variables.json.
// WANT lists collections and the variable names to export (keep it to what components use; 48 KB limit).
const WANT = { Themes: ['text/default'], Spacing: ['4', '8'] };

const hex = (c) => '#' + [c.r, c.g, c.b].map((v) => Math.round(v * 255).toString(16).padStart(2, '0')).join('') + (c.a !== undefined && c.a < 1 ? Math.round(c.a * 255).toString(16).padStart(2, '0') : '');
async function resolve(val) {
  while (val && typeof val === 'object' && val.type === 'VARIABLE_ALIAS') {
    const t = await figma.variables.getVariableByIdAsync(val.id);
    const col = await figma.variables.getVariableCollectionByIdAsync(t.variableCollectionId);
    val = t.valuesByMode[col.defaultModeId];
  }
  return val && typeof val === 'object' && 'r' in val ? hex(val) : val;
}
const out = {};
for (const c of await figma.variables.getLocalVariableCollectionsAsync()) {
  if (!WANT[c.name]) continue;
  out[c.name] = { modes: c.modes.map((m) => m.name), vars: {} };
  for (const id of c.variableIds) {
    const v = await figma.variables.getVariableByIdAsync(id);
    if (!WANT[c.name].includes(v.name)) continue;
    out[c.name].vars[v.name] = {};
    for (const m of c.modes) out[c.name].vars[v.name][m.name] = await resolve(v.valuesByMode[m.modeId]);
  }
}
return out;
