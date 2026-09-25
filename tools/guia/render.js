// Prints the three guides to PDF (private/guias) and saves each cover as the
// preview image used on the website (public/guia). Run after build.py.
const path = require("path");
const { chromium } = require("playwright");

const ROOT = __dirname;
const REPO = path.join(ROOT, "..", "..");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 794, height: 1123 }, deviceScaleFactor: 909 / 794 });
  for (const lang of ["es", "en", "fr"]) {
    await page.goto("file://" + path.join(ROOT, "out", `guia-${lang}.html`), { waitUntil: "load" });
    await page.evaluate(() => document.fonts.ready);
    const overflow = await page.evaluate(() =>
      [...document.querySelectorAll(".page")].map((pg, i) => {
        const r = pg.getBoundingClientRect(); let m = 0;
        pg.querySelectorAll(".pad > *, .body > *").forEach((el) => { m = Math.max(m, el.getBoundingClientRect().bottom - r.top); });
        return [i + 1, Math.round(m / 3.78)];
      }).filter((x) => x[1] > 283));
    if (overflow.length) throw new Error(`${lang}: content overflows pages ${JSON.stringify(overflow)}`);
    await page.pdf({ path: path.join(REPO, "private", "guias", `guia-2026-${lang}.pdf`), format: "A4", printBackground: true, preferCSSPageSize: true });
    const cover = await page.$(".page");
    await cover.screenshot({ path: path.join(REPO, "public", "guia", `portada-${lang}.jpg`), type: "jpeg", quality: 86 });
    console.log("ok", lang);
  }
  await browser.close();
})();
