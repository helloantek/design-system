import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, readdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { build, mergeTokens, resolveKept, resolveSortUi2, rgba, toCss, toKotlin } from '../scripts/build.mjs';

const read = (file) => JSON.parse(readFileSync(new URL(`../figma/${file}`, import.meta.url)));
const v2vars = read('sort-ui-2/variables.json');
const v2effects = read('sort-ui-2/effects.json').effects;
const kept = read('sort-ui-1.3-kept.json');
const tokens = () => mergeTokens(resolveSortUi2(v2vars, v2effects), resolveKept(kept));

test('Sort UI 2.0: names follow Figma code syntax, composites are resolved', () => {
  const v2 = resolveSortUi2(v2vars, v2effects);
  assert.equal(v2.color.light['muted-foreground'], '#626262');
  assert.equal(v2.color.dark['muted-foreground'], '#a1a1a1');
  assert.equal(v2.color.light['alpha-foreground-10'], '#0a0a0a1a', 'colour × opacity');
  assert.equal(v2.color.dark['palette-blue-tint'], '#2b7fff40');
  assert.equal(v2.dimension['text-xs'], 13);
  assert.equal(v2.dimension['text-xs--line-height'], 20);
  assert.equal(v2.dimension['spacing-0-5'], 2);
  assert.equal(v2.dimension.spacing, 4, 'the unit of calc(var(--spacing) * n)');
  assert.equal(v2.fontWeight['font-weight-semibold'], 600);
  assert.equal(v2.effect['ease-out'], 'cubic-bezier(0, 0, 0.2, 1)');
  assert.equal(v2.effect['duration-150'], '150ms');
  assert.equal(v2.effect['opacity-5'], '0.05');
  assert.match(v2.effect['surface-dialog'], /^0px 20px 25px -5px #00000012/);
});

test('the kept Sort UI 1.3 colours join 2.0; a shared name must keep its value', () => {
  const t = tokens();
  assert.equal(t.color.light['bg/badge/blue'], kept.colors['bg/badge/blue'].light);
  assert.equal(t.color.dark['bg/badge/blue'], kept.colors['bg/badge/blue'].dark);
  const clash = { color: { light: { background: '#ffffff' }, dark: {} }, dimension: {}, fontWeight: {}, fontFamily: {}, effect: {} };
  assert.throws(() => mergeTokens(resolveSortUi2(v2vars, v2effects), clash), /--ds-background \(color light\) is #fcfcfc and #ffffff/);
});

test('emits light, dark and system-dark CSS blocks', () => {
  const css = toCss(tokens(), { selector: ':root', darkSelector: '[data-ds-scheme="dark"]' });
  assert.match(css, /:root \{[^}]*--ds-background: #fcfcfc;[^}]*--ds-text-xs--line-height: 20px;/);
  assert.match(css, /\[data-ds-scheme="dark"\] \{[^}]*--ds-background: #0a0a0a;/);
  assert.match(css, /prefers-color-scheme: dark[\s\S]*\[data-ds-scheme="system"\]/);
  assert.match(css, /--ds-bg-badge-blue: #/, 'kept 1.3 colours');
  assert.match(css, /--ds-font-weight-medium: 500;/);
  assert.match(css, /--ds-surface-popover: /);
  assert.doesNotMatch(css, /--ds-bg-state-primary:/, 'other 1.3 tokens are gone');
});

test('converts colours for native platforms', () => {
  assert.deepEqual(rgba('#ff000080').map((v) => Number(v.toFixed(3))), [1, 0, 0, 0.502]);
  assert.match(toKotlin(tokens(), 'theme-1'), /MUTED_FOREGROUND: Long = 0xFF626262/);
});

test('builds every platform for every brand', () => {
  const out = mkdtempSync(join(tmpdir(), 'ds-tokens-'));
  assert.deepEqual(build(out), ['theme-1']);
  assert.deepEqual(readdirSync(join(out, 'css')).sort(), ['scoped', 'theme-1.css']);
  assert.deepEqual(readdirSync(join(out, 'ios')).sort(), ['DSColor.swift', 'Theme1Tokens.swift']);
  assert.deepEqual(readdirSync(join(out, 'android')).sort(), ['Theme1Tokens.kt']);
  assert.match(readFileSync(join(out, 'css/scoped/theme-1.css'), 'utf8'), /\[data-ds-brand="theme-1"\] \{/);
});
