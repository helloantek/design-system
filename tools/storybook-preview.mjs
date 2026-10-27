// Publishes or removes one branch's Storybook on the gh-pages branch, which GitHub Pages serves:
//   https://<owner>.github.io/<repo>/<branch-slug>/   (index of all previews at the root)
//
//   node tools/storybook-preview.mjs publish <branch> <storybook-static dir>
//   node tools/storybook-preview.mjs remove <branch>
//
// Needs GITHUB_TOKEN (contents: write) and GITHUB_REPOSITORY, as in GitHub Actions; PREVIEW_REMOTE overrides the
// remote URL (used for local tests). Every deploy replaces gh-pages with one commit, so the branch does not grow with
// each build; --force-with-lease plus retries keeps concurrent deploys of other branches from overwriting each other.
// A publish keeps the previous build's assets/ next to the new ones (one generation): a browser that still has the old
// iframe.html cached (GitHub Pages lets it keep files for 10 minutes) then loads the old version instead of failing on
// "Failed to fetch dynamically imported module". preview.json lists the build's own assets, so older ones are dropped.
import { execFileSync } from 'node:child_process';
import { cpSync, existsSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const [action, branch, buildDir] = process.argv.slice(2);
if (!['publish', 'remove'].includes(action) || !branch || (action === 'publish' && !buildDir)) {
  console.error('Usage: storybook-preview.mjs publish <branch> <dir> | remove <branch>');
  process.exit(2);
}
const repository = process.env.GITHUB_REPOSITORY ?? '';
const remote = process.env.PREVIEW_REMOTE ?? `https://x-access-token:${process.env.GITHUB_TOKEN}@github.com/${repository}.git`;
const [owner, repo] = repository.split('/');
const siteUrl = process.env.PREVIEW_SITE_URL ?? `https://${owner}.github.io/${repo}/`;

/** Folder name for a branch: claude/select-component -> claude-select-component. */
const slugOf = (name) => name.toLowerCase().replace(/[^a-z0-9._-]+/g, '-').replace(/^-+|-+$/g, '') || 'branch';
const slug = slugOf(branch);

// Keep the token out of logs: git errors can echo the remote URL.
const git = (cwd, ...args) => {
  try {
    return execFileSync('git', args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
  } catch (error) {
    throw new Error(`git ${args[0]} failed: ${String(error.stderr).replaceAll(remote, '<remote>').trim()}`);
  }
};

const escape = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

function writeIndex(dir) {
  const previews = readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && existsSync(join(dir, d.name, 'preview.json')))
    .map((d) => ({ slug: d.name, ...JSON.parse(readFileSync(join(dir, d.name, 'preview.json'), 'utf8')) }))
    .sort((a, b) => (a.branch === 'main' ? -1 : b.branch === 'main' ? 1 : b.updated.localeCompare(a.updated)));
  // Grouped by the kind in the branch name (docs/branches.md): [claude/]<kind>/<topic>.
  const kindOf = (name) => (name === 'main' ? 'main' : (name.replace(/^claude\//, '').match(/^([a-z]+)\//) ?? [])[1]);
  const groups = [
    ['main', 'Stable'],
    ['component', 'New components'],
    ['fix', 'Fixes'],
    ['tokens', 'Tokens and brands'],
    ['tooling', 'Tooling'],
    ['docs', 'Docs'],
  ];
  const known = new Set(groups.map(([kind]) => kind));
  const item = (p) => `<li><a href="${escape(p.slug)}/">${escape(p.branch)}</a><span>${escape(p.updated.slice(0, 16).replace('T', ' '))} UTC · ${escape(p.sha.slice(0, 7))}</span></li>`;
  const rows = [...groups, [undefined, 'Other branches']]
    .map(([kind, title]) => [title, previews.filter((p) => (kind ? kindOf(p.branch) === kind : !known.has(kindOf(p.branch))))])
    .filter(([, list]) => list.length)
    .map(([title, list]) => `<h2>${title}</h2>\n<ul>\n${list.map(item).join('\n')}\n</ul>`)
    .join('\n');
  writeFileSync(
    join(dir, 'index.html'),
    `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Design system previews</title>
<style>body{font:15px/1.5 system-ui,sans-serif;max-width:720px;margin:40px auto;padding:0 16px;color:#111}h2{font-size:15px;margin:28px 0 4px;color:#555}ul{padding:0;margin:0}li{margin:8px 0;list-style:none}span{color:#777;margin-left:12px;font-size:13px}</style>
<h1>Design system previews</h1>
<p>One Storybook per branch. <b>main</b> is what the design system ships; every other entry is work in review and can change or disappear. Branch names: <code>[claude/]&lt;kind&gt;/&lt;topic&gt;</code>.</p>
${rows}`,
  );
}

for (let attempt = 1; ; attempt++) {
  const dir = mkdtempSync(join(tmpdir(), 'gh-pages-'));
  try {
    const head = git(dir, 'ls-remote', '--heads', remote, 'gh-pages').split(/\s/)[0];
    if (head) git(tmpdir(), 'clone', '--quiet', '--depth', '1', '--branch', 'gh-pages', remote, dir);
    else {
      git(dir, 'init', '--quiet', '-b', 'gh-pages');
      git(dir, 'remote', 'add', 'origin', remote);
    }
    const target = join(dir, slug);
    // The previous build's own assets (all of assets/ for builds published before preview.json listed them).
    const previous = mkdtempSync(join(tmpdir(), 'previous-assets-'));
    if (action === 'publish' && existsSync(join(target, 'assets'))) {
      const meta = existsSync(join(target, 'preview.json')) ? JSON.parse(readFileSync(join(target, 'preview.json'), 'utf8')) : {};
      for (const name of meta.assets ?? readdirSync(join(target, 'assets'))) {
        if (existsSync(join(target, 'assets', name))) cpSync(join(target, 'assets', name), join(previous, name));
      }
    }
    rmSync(target, { recursive: true, force: true });
    if (action === 'publish') {
      cpSync(resolve(buildDir), target, { recursive: true });
      const assets = existsSync(join(target, 'assets')) ? readdirSync(join(target, 'assets')) : [];
      for (const name of readdirSync(previous)) {
        if (!assets.includes(name)) cpSync(join(previous, name), join(target, 'assets', name));
      }
      const sha = process.env.GITHUB_SHA ?? git(process.cwd(), 'rev-parse', 'HEAD');
      writeFileSync(join(target, 'preview.json'), JSON.stringify({ branch, sha, updated: new Date().toISOString(), assets }) + '\n');
    }
    rmSync(previous, { recursive: true, force: true });
    writeIndex(dir);
    writeFileSync(join(dir, '.nojekyll'), ''); // serve folders starting with "_" too
    git(dir, 'add', '-A');
    // One parentless commit with the whole site: no history to grow.
    git(dir, 'checkout', '--quiet', '--orphan', 'next');
    git(dir, '-c', 'user.name=github-actions[bot]', '-c', 'user.email=41898282+github-actions[bot]@users.noreply.github.com', 'commit', '--quiet', '-m', `${action} ${branch}`);
    git(dir, 'push', '--quiet', head ? `--force-with-lease=gh-pages:${head}` : '--force-with-lease=gh-pages:', 'origin', 'next:gh-pages');
    console.log(action === 'publish' ? `Published ${branch}: ${siteUrl}${slug}/` : `Removed ${branch} (${slug}/)`);
    break;
  } catch (error) {
    // Another branch deployed in between (lease failed) or the network hiccuped: start again from the new gh-pages.
    if (attempt === 5) throw error;
    console.warn(`Attempt ${attempt} failed (${error.message.split('\n')[0]}); retrying`);
    execFileSync('sleep', [String(attempt * 2)]);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}
