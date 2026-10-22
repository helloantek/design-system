// Publishes or removes one branch's Storybook on the gh-pages branch, which GitHub Pages serves:
//   https://<owner>.github.io/<repo>/<branch-slug>/   (index of all previews at the root)
//
//   node tools/storybook-preview.mjs publish <branch> <storybook-static dir>
//   node tools/storybook-preview.mjs remove <branch>
//
// Needs GITHUB_TOKEN (contents: write) and GITHUB_REPOSITORY, as in GitHub Actions; PREVIEW_REMOTE overrides the
// remote URL (used for local tests). Every deploy replaces gh-pages with one commit, so the branch does not grow with
// each build; --force-with-lease plus retries keeps concurrent deploys of other branches from overwriting each other.
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
  const rows = previews
    .map((p) => `<li><a href="${escape(p.slug)}/">${escape(p.branch)}</a>${p.branch === 'main' ? ' <b>stable</b>' : ''}<span>${escape(p.updated.slice(0, 16).replace('T', ' '))} UTC · ${escape(p.sha.slice(0, 7))}</span></li>`)
    .join('\n');
  writeFileSync(
    join(dir, 'index.html'),
    `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Design system previews</title>
<style>body{font:15px/1.5 system-ui,sans-serif;max-width:720px;margin:40px auto;padding:0 16px;color:#111}li{margin:8px 0;list-style:none}span{color:#777;margin-left:12px;font-size:13px}b{font-size:12px;background:#e7f6ec;color:#17663a;padding:1px 6px;border-radius:4px}</style>
<h1>Design system previews</h1>
<p>One Storybook per branch. <b>main</b> is what the design system ships; every other entry is work in review and can change or disappear.</p>
<ul>
${rows}
</ul>`,
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
    rmSync(join(dir, slug), { recursive: true, force: true });
    if (action === 'publish') {
      cpSync(resolve(buildDir), join(dir, slug), { recursive: true });
      const sha = process.env.GITHUB_SHA ?? git(process.cwd(), 'rev-parse', 'HEAD');
      writeFileSync(join(dir, slug, 'preview.json'), JSON.stringify({ branch, sha, updated: new Date().toISOString() }) + '\n');
    }
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
