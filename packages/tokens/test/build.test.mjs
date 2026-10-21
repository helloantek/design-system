import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, readdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { build, resolveBrand, rgba, toCss, toKotlin } from '../scripts/build.mjs';

const variables = JSON.parse(readFileSync(new URL('../figma/variables.json', import.meta.url)));
const { effects } = JSON.parse(readFileSync(new URL('../figma/effects.json', import.meta.url)));
const brand = { Themes: { light: 'Theme-1-Light', dark: 'Theme-1-Dark' } };

test('resolves the light and dark Themes modes of a brand', () => {
  const t = resolveBrand(variables, effects, brand);
  assert.equal(t.color.light['bg/state/primary'], '#111115');
  assert.equal(t.color.dark['bg/state/primary'], '#ffffff');
});

test('uses the first mode of a collection unless the brand picks one', () => {
  assert.equal(resolveBrand(variables, effects, brand).dimension['radius-xs'], 4);
  assert.equal(resolveBrand(variables, effects, { ...brand, Radius: 'Rounded' }).dimension['radius-xs'], 6);
  assert.equal(resolveBrand(variables, effects, { ...brand, 'Font Family': 'Font B' }).fontFamily['font-family-body'], 'Work Sans');
});

test('fails loudly on a mode that does not exist in Figma', () => {
  assert.throws(() => resolveBrand(variables, effects, { ...brand, Radius: 'Square' }), /no mode "Square"/);
});

test('emits light, dark and system-dark CSS blocks', () => {
  const css = toCss(resolveBrand(variables, effects, brand), { selector: ':root', darkSelector: '[data-ds-scheme="dark"]' });
  assert.match(css, /:root \{[^}]*--ds-bg-state-primary: #111115;/);
  assert.match(css, /\[data-ds-scheme="dark"\] \{[^}]*--ds-bg-state-primary: #ffffff;/);
  assert.match(css, /prefers-color-scheme: dark[\s\S]*\[data-ds-scheme="system"\]/);
  assert.match(css, /--ds-space-12: 12px;/);
  assert.match(css, /--ds-font-weight-medium: 500;/);
  assert.match(css, /--ds-shadow-components-default: /);
});

test('converts colours for native platforms', () => {
  assert.deepEqual(rgba('#ff000080').map((v) => Number(v.toFixed(3))), [1, 0, 0, 0.502]);
  assert.match(toKotlin(resolveBrand(variables, effects, brand), 'theme-1'), /TEXT_HINT: Long = 0x4D27272A/);
});

test('builds every platform for every brand', () => {
  const out = mkdtempSync(join(tmpdir(), 'ds-tokens-'));
  const brands = build(out);
  assert.deepEqual(brands, ['theme-1', 'theme-2']);
  assert.deepEqual(readdirSync(join(out, 'css')).sort(), ['scoped', 'theme-1.css', 'theme-2.css']);
  assert.deepEqual(readdirSync(join(out, 'ios')).sort(), ['DSColor.swift', 'Theme1Tokens.swift', 'Theme2Tokens.swift']);
  assert.deepEqual(readdirSync(join(out, 'android')).sort(), ['Theme1Tokens.kt', 'Theme2Tokens.kt']);
  assert.match(readFileSync(join(out, 'css/scoped/theme-2.css'), 'utf8'), /\[data-ds-brand="theme-2"\] \{/);
});
