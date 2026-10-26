// Compares computed styles and boxes in the browser with exact Figma layer values (references/<name>/spec.json),
// through references/<name>/layer-map.json: size, padding, gap, radius, fill, stroke, opacity and text style.
// Deterministic, unlike pixels: catches 1 px and colour changes on any machine.

/** Runs in the page. Returns a list of human-readable mismatches. */
export function compareInPage({ map, layers, target: targetSelector = '#target' }) {
  const target = document.querySelector(targetSelector);
  const px = (v) => parseFloat(v) || 0;
  const parseColor = (s) => {
    const m = s.match(/rgba?\(([^)]+)\)/);
    if (!m) return s === 'transparent' ? [0, 0, 0, 0] : null;
    const parts = m[1].split(/[ ,/]+/).filter(Boolean).map(Number);
    return [parts[0], parts[1], parts[2], parts.length > 3 ? parts[3] : 1];
  };
  const hexColor = (h) => {
    const x = h.replace('#', '');
    const n = (i) => parseInt(x.slice(i, i + 2), 16);
    return [n(0), n(2), n(4), x.length === 8 ? n(6) / 255 : 1];
  };
  const sameColor = (css, hex) => {
    const a = parseColor(css), b = hexColor(hex);
    if (!a) return false;
    if (a[3] < 0.005 && b[3] < 0.005) return true;
    return Math.abs(a[3] - b[3]) <= 0.01 && [0, 1, 2].every((i) => Math.abs(a[i] - b[i]) <= 2);
  };
  // Splits a box-shadow list on top-level commas and returns the colour of the first inset shadow.
  const insetShadowColor = (value) => {
    const parts = [];
    let depth = 0, cur = '';
    for (const ch of value) {
      if (ch === '(') depth++;
      if (ch === ')') depth--;
      if (ch === ',' && depth === 0) { parts.push(cur); cur = ''; } else cur += ch;
    }
    parts.push(cur);
    const inset = parts.find((p) => /\binset\b/.test(p));
    return inset ? (inset.match(/rgba?\([^)]+\)/) || ['transparent'])[0] : null;
  };

  const out = [];
  for (const [path, expected] of Object.entries(layers)) {
    const cfg = map[path];
    if (!cfg) { out.push(`${path}: no layer-map entry`); continue; }
    const el = cfg.selector ? target.querySelector(cfg.selector) : target;
    if (!el) { out.push(`${path}: ${cfg.selector} not rendered`); continue; }
    const cs = getComputedStyle(el);
    const box = el.getBoundingClientRect();
    const skip = new Set(cfg.skip || []);
    if (cfg.skipWidthIfHas && el.querySelector(cfg.skipWidthIfHas)) skip.add('w');
    const fail = (key, got, want) => out.push(`${path} ${key}: ${got} ≠ Figma ${want}`);
    const num = (key, got, want, tol) => { if (!skip.has(key) && want !== undefined && Math.abs(got - want) > tol) fail(key, +got.toFixed(2), want); };

    num('w', box.width, expected.w, 0.5);
    num('h', box.height, expected.h, 0.5);
    num('r', px(cs.borderTopLeftRadius), expected.r, 0.01);
    if (!skip.has('p') && expected.p) {
      const got = [cs.paddingTop, cs.paddingRight, cs.paddingBottom, cs.paddingLeft].map(px);
      if (got.some((v, i) => Math.abs(v - expected.p[i]) > 0.01)) fail('padding', got.join(' '), expected.p.join(' '));
    }
    // A gap only matters between two children; Figma keeps one on single-child frames (e.g. a divider line).
    if (!skip.has('g') && expected.g !== undefined && expected.p && el.children.length > 1) {
      const gap = px(cs.flexDirection.startsWith('column') ? cs.rowGap : cs.columnGap);
      if (Math.abs(gap - expected.g) > 0.01) fail('gap', gap, expected.g);
    }
    if (!skip.has('fill') && expected.fill) {
      const got = cfg.fill === 'color' ? cs.color : cfg.fill === 'svg' ? cs.fill : cs.backgroundColor;
      if (!sameColor(got, expected.fill)) fail('fill', got, expected.fill);
    }
    if (!skip.has('stroke') && expected.stroke) {
      const got = cfg.stroke === 'before-border' ? getComputedStyle(el, '::before').borderTopColor
        : cfg.stroke === 'inset-shadow' ? insetShadowColor(cs.boxShadow)
        : cfg.stroke === 'after-inset-shadow' ? insetShadowColor(getComputedStyle(el, '::after').boxShadow)
        : cfg.stroke === 'outer-shadow' ? (cs.boxShadow.match(/rgba?\([^)]+\)/) || [null])[0]
        : cfg.stroke === 'svg' ? cs.stroke : cs.borderTopColor;
      if (!got || !sameColor(got, expected.stroke)) fail('stroke', got, expected.stroke);
    }
    // Only layers exported with an opacity below 1 carry the key (specs exported before it existed have none).
    if (!skip.has('opacity') && expected.opacity !== undefined && Math.abs(parseFloat(cs.opacity) - expected.opacity) > 0.01) fail('opacity', cs.opacity, expected.opacity);
    if (expected.fs !== undefined) {
      num('fs', px(cs.fontSize), expected.fs, 0.01);
      if (!skip.has('fw') && Number(cs.fontWeight) !== expected.fw) fail('weight', cs.fontWeight, expected.fw);
      num('lh', px(cs.lineHeight), expected.lh, 0.01);
      const textColor = cfg.text === 'placeholder-if-empty' && el.value === '' ? getComputedStyle(el, '::placeholder').color : cs.color;
      if (!skip.has('color') && expected.color && !sameColor(textColor, expected.color)) fail('color', textColor, expected.color);
    }
  }
  return out;
}

/** Spec layers for one variant, resolved from the pooled spec.json. */
export function layersFor(spec, nodeId) {
  const v = spec.variants[nodeId];
  if (!v) return null;
  return Object.fromEntries(Object.entries(v).map(([path, i]) => [path, spec.layers[i]]));
}
