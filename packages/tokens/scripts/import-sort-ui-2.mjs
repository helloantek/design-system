// Turns the text from .claude/skills/figma-to-component/scripts/export-variables-v2.js into figma/sort-ui-2/*.json.
//   node scripts/import-sort-ui-2.mjs <export.txt> <hash>
// The hash (printed by the export) proves the text arrived unchanged.
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const [file, expected] = process.argv.slice(2);
if (!file || !expected) throw new Error('Usage: node scripts/import-sort-ui-2.mjs <export.txt> <hash>');
const text = readFileSync(file, 'utf8').replace(/\n$/, '');
let h = 5381;
for (let i = 0; i < text.length; i++) h = ((h * 33) ^ text.charCodeAt(i)) >>> 0;
if (String(h) !== String(expected)) throw new Error(`Checksum ${h} ≠ ${expected}: the export was changed on the way`);

const dir = join(dirname(fileURLToPath(import.meta.url)), '../figma/sort-ui-2');
const number = (s) => (s !== '' && !Number.isNaN(Number(s)) ? Number(s) : s);
const collections = {};
const effects = {};
let current;
for (const line of text.split('\n')) {
  if (line.startsWith('#')) {
    const [name, modes] = line.slice(1).split('|');
    current = name;
    if (name !== 'Effects') collections[name] = { modes: modes.split(','), vars: {} };
  } else if (current === 'Effects') {
    const [name, value] = [line.slice(0, line.indexOf('|')), line.slice(line.indexOf('|') + 1)];
    effects[name] = value;
  } else {
    const parts = line.split('|');
    const { modes, vars } = collections[current];
    const entry = { values: Object.fromEntries(modes.map((m, i) => [m, number(parts[i + 1])])) };
    if (parts.at(-1)) entry.css = parts.at(-1);
    vars[parts[0]] = entry;
  }
}

const c = (o) => JSON.stringify(o, null, 0).replace(/":/g, '": ').replace(/,"/g, ', "');
const source = JSON.parse(readFileSync(join(dir, 'variables.json'), 'utf8')).$source;
const out = ['{', ` "$source": ${c(source)},`];
Object.entries(collections).forEach(([name, { modes, vars }], i, all) => {
  out.push(` ${JSON.stringify(name)}: {`, `  "modes": ${c(modes)},`, '  "vars": {');
  Object.entries(vars).forEach(([n, e], j, list) => out.push(`   ${JSON.stringify(n)}: ${c(e)}${j < list.length - 1 ? ',' : ''}`));
  out.push('  }', ` }${i < all.length - 1 ? ',' : ''}`);
});
out.push('}');
writeFileSync(join(dir, 'variables.json'), out.join('\n') + '\n');
const effectsSource = JSON.parse(readFileSync(join(dir, 'effects.json'), 'utf8')).$source;
writeFileSync(join(dir, 'effects.json'), JSON.stringify({ $source: effectsSource, effects }, null, 1) + '\n');
console.log(`Imported ${Object.values(collections).reduce((s, c) => s + Object.keys(c.vars).length, 0)} variables and ${Object.keys(effects).length} effects.`);
