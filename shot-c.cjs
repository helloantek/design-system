const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  const p = await b.newPage({ viewport: { width: 760, height: 480 } });
  for (const s of process.argv.slice(2)) {
    await p.goto(`http://localhost:6011/iframe.html?id=components-carousel--${s}&viewMode=story`);
    await p.waitForTimeout(500);
    await p.screenshot({ path: `/tmp/claude-0/-home-user/5a418cfe-4d9d-5b94-9378-bd5572550e34/scratchpad/ca-${s}.png` });
  }
  await b.close();
})();
