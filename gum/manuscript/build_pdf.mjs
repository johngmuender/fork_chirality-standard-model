#!/usr/bin/env node
// Render a GUM manuscript (Markdown with LaTeX math) to PDF with KaTeX and Chromium.
//
//   node gum/manuscript/build_pdf.mjs <input.md> <output.pdf> [--modules <dir with node_modules>]
//
// Needs the npm packages katex and markdown-it (resolved from --modules, else from the
// current directory) and a Playwright Chromium (PLAYWRIGHT_BROWSERS_PATH or /opt/pw-browsers).
import { createRequire } from 'node:module';
import { readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync, readdirSync } from 'node:fs';
import { dirname, resolve, join, basename } from 'node:path';
import { pathToFileURL } from 'node:url';

const args = process.argv.slice(2);
const input = args[0];
const output = args[1];
if (!input || !output) {
  console.error('usage: build_pdf.mjs <input.md> <output.pdf> [--modules <dir>]');
  process.exit(2);
}
const modIdx = args.indexOf('--modules');
const modulesDir = modIdx >= 0 ? resolve(args[modIdx + 1]) : process.cwd();
const req = createRequire(join(modulesDir, 'package.json'));
const katex = req('katex');
const MarkdownIt = req('markdown-it');
const katexDist = dirname(req.resolve('katex/dist/katex.min.css'));
const playwrightPath = ['/opt/node-tools/node_modules/playwright/index.js', 'playwright']
  .find((p) => {
    try { req.resolve(p); return true; } catch { return false; }
  });
const { chromium } = req(playwrightPath);

// ---------------------------------------------------------------- read and split front matter
let md = readFileSync(input, 'utf8');
let meta = {};
if (md.startsWith('---\n')) {
  const end = md.indexOf('\n---\n', 4);
  const yaml = md.slice(4, end);
  md = md.slice(end + 5);
  for (const line of yaml.split('\n')) {
    const m = line.match(/^(title|subtitle|author|date):\s*"?(.*?)"?\s*$/);
    if (m) meta[m[1]] = m[2];
  }
}

// ---------------------------------------------------------------- protect math, render with KaTeX
const macros = { '\\mathbb{1}': '\\mathbf{1}' };
const errors = [];
const slots = [];
function render(tex, display) {
  let html;
  try {
    html = katex.renderToString(tex, {
      displayMode: display,
      throwOnError: false,
      strict: 'ignore',
      trust: false,
      macros,
      errorColor: '#b00020',
    });
  } catch (e) {
    errors.push({ tex: tex.slice(0, 80), error: String(e.message || e) });
    html = `<span class="katex-error">${tex.replace(/</g, '&lt;')}</span>`;
  }
  if (html.includes('katex-error')) errors.push({ tex: tex.slice(0, 120) });
  slots.push(html);
  return `QQMATHSLOT${slots.length - 1}ENDQQ`;
}
// display math: $$ ... $$ on their own lines (may span lines)
md = md.replace(/\$\$([\s\S]*?)\$\$/g, (_, tex) => '\n\n' + render(tex.trim(), true) + '\n\n');
// inline math: $...$ not spanning newlines, not escaped, not empty
md = md.replace(/(^|[^\\$])\$([^$\n]+?)\$(?!\d)/g, (m, pre, tex) => pre + render(tex, false));

// ---------------------------------------------------------------- Markdown to HTML
const mdit = new MarkdownIt({ html: false, typographer: false, linkify: false });
let body = mdit.render(md);
body = body.replace(/QQMATHSLOT(\d+)ENDQQ/g, (_, i) => slots[Number(i)]);
// The placeholder is alphanumeric because markdown-it replaces U+0000 by U+FFFD (CommonMark) and
// would mangle punctuation; nothing in the manuscripts puts math inside code spans.

// ---------------------------------------------------------------- page
const runningTitle = (meta.title || basename(input)).replace(/"/g, '');
const dateLine = meta.date || '';
const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${runningTitle}</title>
<link rel="stylesheet" href="katex/katex.min.css">
<style>
  @page { size: Letter; margin: 22mm 20mm 24mm 20mm; }
  html { font-size: 10.6pt; }
  body { font-family: "Liberation Serif", "DejaVu Serif", "Times New Roman", Times, serif; line-height: 1.42; color: #111; margin: 0; }
  h1 { font-size: 1.55em; line-height: 1.2; margin: 1.6em 0 0.5em; page-break-after: avoid; }
  h1:first-of-type { margin-top: 0; font-size: 1.9em; }
  h2 { font-size: 1.22em; margin: 1.3em 0 0.45em; page-break-after: avoid; }
  h3 { font-size: 1.05em; margin: 1.1em 0 0.4em; page-break-after: avoid; }
  p { margin: 0 0 0.62em; text-align: justify; hyphens: auto; orphans: 3; widows: 3; }
  blockquote { margin: 0.8em 0; padding: 0.5em 0.9em; border-left: 3px solid #999; background: #f4f4f4; font-size: 0.95em; }
  blockquote p { text-align: left; }
  hr { border: 0; border-top: 1px solid #bbb; margin: 1.2em 0; }
  code { font-family: "Liberation Mono", "DejaVu Sans Mono", monospace; font-size: 0.88em; }
  ol, ul { padding-left: 1.5em; margin: 0.3em 0 0.8em; }
  li { margin: 0.18em 0; }
  table { border-collapse: collapse; width: 100%; margin: 0.9em 0 1.1em; font-size: 0.8em; line-height: 1.3; page-break-inside: auto; }
  th, td { border: 1px solid #999; padding: 0.3em 0.45em; vertical-align: top; text-align: left; }
  th { background: #ececec; font-weight: bold; }
  tr { page-break-inside: avoid; }
  .katex-display { margin: 0.75em 0 0.9em; overflow-x: visible; page-break-inside: avoid; }
  .katex-display > .katex { font-size: 1.0em; white-space: normal; }
  .katex { font-size: 1.02em; }
  .katex-error { color: #b00020; font-family: monospace; }
  em > strong, strong > em { font-style: italic; }
  .title-block { text-align: center; margin: 0 0 1.4em; }
  .title-block .status { font-size: 0.9em; color: #444; }
</style>
</head>
<body>
${body}
</body>
</html>`;

// ---------------------------------------------------------------- stage assets next to the HTML
const outDir = dirname(resolve(output));
const stage = join(outDir, '.pdf-stage');
mkdirSync(join(stage, 'katex', 'fonts'), { recursive: true });
copyFileSync(join(katexDist, 'katex.min.css'), join(stage, 'katex', 'katex.min.css'));
for (const f of readdirSync(join(katexDist, 'fonts'))) {
  if (f.endsWith('.woff2')) copyFileSync(join(katexDist, 'fonts', f), join(stage, 'katex', 'fonts', f));
}
const htmlPath = join(stage, basename(output).replace(/\.pdf$/i, '') + '.html');
writeFileSync(htmlPath, html);

// ---------------------------------------------------------------- print
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(pathToFileURL(htmlPath).href, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
const headerTemplate = `<div style="font-family: 'Liberation Serif', serif; font-size: 7.5pt; color: #555; width: 100%; padding: 0 20mm; display: flex; justify-content: space-between;">
  <span>${runningTitle.replace(/</g, '&lt;')}</span><span>Revision 2 · ${dateLine} · DRAFT for review</span></div>`;
const footerTemplate = `<div style="font-family: 'Liberation Serif', serif; font-size: 8pt; color: #555; width: 100%; text-align: center;"><span class="pageNumber"></span> / <span class="totalPages"></span></div>`;
await page.pdf({
  path: resolve(output),
  format: 'Letter',
  printBackground: true,
  displayHeaderFooter: true,
  headerTemplate,
  footerTemplate,
  margin: { top: '22mm', bottom: '24mm', left: '20mm', right: '20mm' },
  preferCSSPageSize: false,
});
await browser.close();

const katexErrorCount = (body.match(/class="katex-error"/g) || []).length;
const leftover = (body.match(/QQMATHSLOT/g) || []).length;
if (leftover) console.log(`WARNING: ${leftover} math placeholders were not substituted`);
console.log(`wrote ${resolve(output)}; math slots ${slots.length}; KaTeX errors ${katexErrorCount}`);
for (const e of errors.slice(0, 20)) console.log('  math problem:', JSON.stringify(e));
if (errors.length > 20) console.log(`  ... ${errors.length - 20} more`);
