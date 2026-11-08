// Puts the Angular Storybook's build inside the React one (apps/storybook/storybook-static/angular), where the React
// Storybook's `refs` find it: one site, one sidebar, both adapters (ADR 0002).
import { cpSync, existsSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const angular = join(import.meta.dirname, '../apps/storybook-angular/storybook-static');
const target = join(import.meta.dirname, '../apps/storybook/storybook-static/angular');
if (!existsSync(angular)) throw new Error(`No Angular Storybook build at ${angular}: run npm run build -w @helloantek/ds-storybook-angular first.`);
rmSync(target, { recursive: true, force: true });
cpSync(angular, target, { recursive: true });
console.log(`Composed the Angular Storybook into ${target}`);
