// Builds platform token files for every brand in brands.json from the Figma export in figma/.
//   dist/css/<brand>.css          :root-level variables, for apps that use one brand
//   dist/css/scoped/<brand>.css   scoped to [data-ds-brand="<brand>"], for pages that switch brands
//   dist/js/<brand>.js (+ .d.ts)  resolved values for JS/TS (charts, canvas, React Native…)
//   dist/ios/<Brand>Tokens.swift  plain Swift values, SwiftUI Color helpers when SwiftUI is available
//   dist/android/<Brand>Tokens.kt plain Kotlin values (ARGB Long, dp Float), no Compose dependency
import { mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (file) => JSON.parse(readFileSync(join(root, file), 'utf8'));

// Keeps hyphens, so Sort UI 2.0 names like `text-xs--line-height` survive as in Figma's code syntax.
export const slug = (s) => s.toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/^-+|-+$/g, '');
const camel = (s) => slug(s).replace(/-+([a-z0-9])/g, (_, c) => c.toUpperCase()).replace(/^(\d)/, '_$1');
const pascal = (s) => camel(s).replace(/^_?(.)/, (m) => m.toUpperCase());

// CSS variable prefix per Figma collection.
const PREFIX = { Themes: '', Radius: 'radius-', Spacing: 'space-', Stroke: 'stroke-', 'Font Size': 'font-', 'Icon Size': 'icon-size-', 'Font Family': 'font-family-' };

/** Resolve one brand into { color: {light, dark}, dimension, fontWeight, fontFamily, effect }. */
export function resolveBrand(variables, effects, brand) {
  const pick = (collection, mode) => {
    const col = variables[collection];
    if (!col) throw new Error(`Missing Figma collection "${collection}"`);
    if (!col.modes.includes(mode)) throw new Error(`Collection "${collection}" has no mode "${mode}" (has ${col.modes.join(', ')})`);
    return Object.fromEntries(Object.entries(col.vars).map(([name, values]) => [name, values[mode]]));
  };
  const modeOf = (collection) => brand[collection] ?? variables[collection].modes[0];
  const out = { color: { light: {}, dark: {} }, dimension: {}, fontWeight: {}, fontFamily: {}, effect: {} };

  for (const scheme of ['light', 'dark']) {
    for (const [name, value] of Object.entries(pick('Themes', brand.Themes[scheme]))) out.color[scheme][name] = value;
  }
  for (const collection of ['Radius', 'Spacing', 'Stroke', 'Font Size', 'Icon Size']) {
    for (const [name, value] of Object.entries(pick(collection, modeOf(collection)))) {
      const key = `${PREFIX[collection]}${name}`;
      if (/weight/.test(name)) out.fontWeight[key] = value;
      else out.dimension[key] = value;
    }
  }
  for (const [name, value] of Object.entries(pick('Font Family', modeOf('Font Family')))) out.fontFamily[`${PREFIX['Font Family']}${name}`] = value;
  for (const [name, value] of Object.entries(effects)) out.effect[name] = value;
  return out;
}

// ── Sort UI 2.0 ──────────────────────────────────────────────────────────────────────────────────────────────────
// Figma file 4JnqgEbdlnKgiFrfmiwEZw (figma/sort-ui-2/). Its names follow Figma's WEB code syntax (shadcn/Tailwind):
// `colors/muted-foreground` → --ds-muted-foreground, `size/xs` → --ds-text-xs, `radius/lg` → --ds-radius-lg,
// `spacing/2` → --ds-spacing-2 (Figma: calc(var(--spacing) * 2); --ds-spacing is the 4 px unit). One theme, Light and
// Dark; every brand gets the same values while the 1.3 tokens are migrated away.
const WEIGHTS = { Regular: 400, Medium: 500, 'Semi Bold': 600, Bold: 700 };

/** CSS name of a Sort UI 2.0 variable: its code syntax when Figma has one, else its path. */
export const v2Name = (path, entry) => entry.css ?? path.replace(/^colors\//, '').replace(/\//g, '-');

/** Resolve Sort UI 2.0 into the same shape as resolveBrand(). Opacity and Motion are CSS-only, like effects. */
export function resolveSortUi2(variables, effects) {
  const out = { color: { light: {}, dark: {} }, dimension: {}, fontWeight: {}, fontFamily: {}, effect: {} };
  const one = (entry) => Object.values(entry.values)[0];
  for (const [path, entry] of Object.entries(variables.Themes.vars)) {
    out.color.light[v2Name(path, entry)] = entry.values.Light;
    out.color.dark[v2Name(path, entry)] = entry.values.Dark;
  }
  for (const collection of ['Radius', 'Spacing']) {
    for (const [path, entry] of Object.entries(variables[collection].vars)) out.dimension[v2Name(path, entry)] = one(entry);
  }
  out.dimension.spacing = variables.Spacing.vars['spacing/1'].values.Value;
  for (const [path, entry] of Object.entries(variables.Typography.vars)) {
    const value = one(entry);
    if (path.startsWith('font/')) out.fontFamily[v2Name(path, entry)] = value;
    else if (path.startsWith('weight/')) out.fontWeight[v2Name(path, entry)] = WEIGHTS[value] ?? value;
    else out.dimension[v2Name(path, entry)] = value;
  }
  for (const [path, entry] of Object.entries(variables.Opacity.vars)) out.effect[v2Name(path, entry)] = `${one(entry) / 100}`;
  for (const [path, entry] of Object.entries(variables.Motion.vars)) {
    const value = one(entry);
    out.effect[v2Name(path, entry)] = typeof value === 'number' ? `${Math.round(value * 1000)}ms` : value;
  }
  for (const [name, value] of Object.entries(effects)) out.effect[slug(name)] = value;
  return out;
}

/** Adds Sort UI 2.0 tokens to a brand's 1.3 tokens. A name both define must have the same value. */
export function mergeTokens(base, extra) {
  const merge = (into, from, group) => {
    const bySlug = new Map(Object.keys(into).map((k) => [slug(k), k]));
    for (const [name, value] of Object.entries(from)) {
      const existing = bySlug.get(slug(name));
      if (existing === undefined) into[name] = value;
      else if (into[existing] !== value) throw new Error(`Token --ds-${slug(name)} (${group}) is ${into[existing]} in 1.3 and ${value} in Sort UI 2.0`);
    }
  };
  for (const scheme of ['light', 'dark']) merge(base.color[scheme], extra.color[scheme], `color ${scheme}`);
  for (const group of ['dimension', 'fontWeight', 'fontFamily', 'effect']) merge(base[group], extra[group], group);
  return base;
}

const cssVar = (name) => `--ds-${slug(name)}`;

export function toCss(t, { selector, darkSelector }) {
  const line = (name, value) => `  ${cssVar(name)}: ${value};`;
  const base = [
    ...Object.entries(t.color.light).map(([n, v]) => line(n, v)),
    ...Object.entries(t.dimension).map(([n, v]) => line(n, `${v}px`)),
    ...Object.entries(t.fontWeight).map(([n, v]) => line(n, v)),
    ...Object.entries(t.fontFamily).map(([n, v]) => line(n, `'${v}', system-ui, sans-serif`)),
    ...Object.entries(t.effect).map(([n, v]) => line(n, v)),
  ];
  const dark = Object.entries(t.color.dark).map(([n, v]) => line(n, v));
  return [
    `${selector} {\n  color-scheme: light;\n${base.join('\n')}\n}`,
    `${darkSelector} {\n  color-scheme: dark;\n${dark.join('\n')}\n}`,
    `@media (prefers-color-scheme: dark) {\n  ${darkSelector.replace(/\[data-ds-scheme="dark"\]/g, '[data-ds-scheme="system"]')} {\n    color-scheme: dark;\n${dark.map((l) => `  ${l}`).join('\n')}\n  }\n}`,
  ].join('\n\n');
}

export function toJs(t) {
  return `export default ${JSON.stringify(t, null, 2)};\n`;
}

export function toDts() {
  return `declare const tokens: {
  color: { light: Record<string, string>; dark: Record<string, string> };
  dimension: Record<string, number>;
  fontWeight: Record<string, number>;
  fontFamily: Record<string, string>;
  effect: Record<string, string>;
};
export default tokens;
`;
}

// #rrggbb or #rrggbbaa → [r, g, b, a] in 0–1.
export function rgba(hex) {
  const h = hex.replace('#', '');
  const n = (i) => parseInt(h.slice(i, i + 2), 16) / 255;
  return [n(0), n(2), n(4), h.length === 8 ? n(6) : 1];
}
const argb = (hex) => {
  const h = hex.replace('#', '');
  return `0x${(h.length === 8 ? h.slice(6, 8) : 'ff').toUpperCase()}${h.slice(0, 6).toUpperCase()}`;
};
const num = (v) => (Number.isInteger(v) ? `${v}` : `${Number(v.toFixed(4))}`);

export function toSwift(t, brandName) {
  const type = `${pascal(brandName)}Tokens`;
  const color = (hex) => {
    const [r, g, b, a] = rgba(hex).map(num);
    return `DSColor(red: ${r}, green: ${g}, blue: ${b}, alpha: ${a})`;
  };
  const scheme = (s) => Object.entries(t.color[s]).map(([n, v]) => `        public static let ${camel(n)} = ${color(v)}`).join('\n');
  const dims = Object.entries(t.dimension).map(([n, v]) => `        public static let ${camel(n)}: Double = ${num(v)}`).join('\n');
  const weights = Object.entries(t.fontWeight).map(([n, v]) => `        public static let ${camel(n)}: Int = ${v}`).join('\n');
  const fonts = Object.entries(t.fontFamily).map(([n, v]) => `        public static let ${camel(n)} = "${v}"`).join('\n');
  return `// Generated by @helloantek/ds-tokens. Do not edit by hand. Requires DSColor.swift.
// Effects (shadows) are CSS-specific and are not exported for native platforms yet.

public enum ${type} {
    public enum Light {
${scheme('light')}
    }

    public enum Dark {
${scheme('dark')}
    }

    public enum Dimension {
${dims}
    }

    public enum FontWeight {
${weights}
    }

    public enum FontFamily {
${fonts}
    }
}
`;
}

// Shared by every brand file, so several brands can live in one Swift module.
export const SWIFT_COLOR = `// Generated by @helloantek/ds-tokens. Do not edit by hand.

public struct DSColor: Equatable, Sendable {
    public let red: Double, green: Double, blue: Double, alpha: Double
    public init(red: Double, green: Double, blue: Double, alpha: Double) {
        self.red = red; self.green = green; self.blue = blue; self.alpha = alpha
    }
}

#if canImport(SwiftUI)
import SwiftUI

extension DSColor {
    public var color: Color { Color(.sRGB, red: red, green: green, blue: blue, opacity: alpha) }
}
#endif
`;

export function toKotlin(t, brandName) {
  const type = `${pascal(brandName)}Tokens`;
  const constName = (n) => slug(n).replace(/-/g, '_').toUpperCase().replace(/^(\d)/, '_$1');
  const scheme = (s) => Object.entries(t.color[s]).map(([n, v]) => `        const val ${constName(n)}: Long = ${argb(v)}`).join('\n');
  const dims = Object.entries(t.dimension).map(([n, v]) => `        const val ${constName(n)}: Float = ${num(v)}f`).join('\n');
  const weights = Object.entries(t.fontWeight).map(([n, v]) => `        const val ${constName(n)}: Int = ${v}`).join('\n');
  const fonts = Object.entries(t.fontFamily).map(([n, v]) => `        const val ${constName(n)}: String = "${v}"`).join('\n');
  return `// Generated by @helloantek/ds-tokens. Do not edit by hand.
// Colors are ARGB (use Color(value) in Compose), dimensions are dp.
package com.helloantek.ds.tokens

object ${type} {
    object Light {
${scheme('light')}
    }

    object Dark {
${scheme('dark')}
    }

    object Dimension {
${dims}
    }

    object FontWeight {
${weights}
    }

    object FontFamily {
${fonts}
    }
}
`;
}

export function build(outDir = join(root, 'dist')) {
  const variables = read('figma/variables.json');
  const { effects } = read('figma/effects.json');
  const v2 = resolveSortUi2(read('figma/sort-ui-2/variables.json'), read('figma/sort-ui-2/effects.json').effects);
  const { brands } = read('brands.json');
  rmSync(outDir, { recursive: true, force: true });
  for (const dir of ['css/scoped', 'js', 'ios', 'android']) mkdirSync(join(outDir, dir), { recursive: true });

  const header = (brand) => `/* Generated by @helloantek/ds-tokens for brand "${brand}". Do not edit by hand. */\n`;
  for (const [name, brand] of Object.entries(brands)) {
    const t = mergeTokens(resolveBrand(variables, effects, brand), v2);
    const at = `[data-ds-brand="${name}"]`;
    writeFileSync(join(outDir, 'css', `${name}.css`), header(name) + toCss(t, { selector: ':root', darkSelector: '[data-ds-scheme="dark"]' }) + '\n');
    writeFileSync(join(outDir, 'css/scoped', `${name}.css`), header(name) + toCss(t, { selector: at, darkSelector: `${at}[data-ds-scheme="dark"], ${at} [data-ds-scheme="dark"]` }) + '\n');
    writeFileSync(join(outDir, 'js', `${name}.js`), toJs(t));
    writeFileSync(join(outDir, 'js', `${name}.d.ts`), toDts());
    writeFileSync(join(outDir, 'ios', `${pascal(name)}Tokens.swift`), toSwift(t, name));
    writeFileSync(join(outDir, 'android', `${pascal(name)}Tokens.kt`), toKotlin(t, name));
  }
  writeFileSync(join(outDir, 'ios', 'DSColor.swift'), SWIFT_COLOR);
  writeFileSync(join(outDir, 'brands.json'), JSON.stringify(Object.fromEntries(Object.entries(brands).map(([k, v]) => [k, v.label])), null, 2));
  return Object.keys(brands);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  console.log(`Built tokens for: ${build().join(', ')}`);
}
