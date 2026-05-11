/**
 * Post-build script: rewrite internal links in dist HTML files.
 * Replaces href="/foo/" with href="/da-assets-gitbook-design-cn/foo/"
 * Run via: node src/plugins/postbuild-rewrite-links.js
 */
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', '..', 'dist');
const base = '/da-assets-gitbook-design-cn';

function rewriteHtmlFile(filePath) {
  let content = readFileSync(filePath, 'utf-8');
  let changed = false;

  // Replace href="/..."  with href="/base/..." (but not already-prefixed, and not external)
  const hrefRewritten = content.replace(
    /href="(\/)(?![^"]*da-assets-gitbook-design-cn)([^"]*)"/g,
    `href="${base}/$2"`
  );
  if (content !== hrefRewritten) changed = true;
  content = hrefRewritten;

  // Replace src="/files/..." with src="/base/files/..." (but not already-prefixed)
  const srcRewritten = content.replace(
    /src="(\/)(files\/)(?![^"]*da-assets-gitbook-design-cn)([^"]*)"/g,
    `src="${base}/files/$3"`
  );
  if (content !== srcRewritten) changed = true;
  content = srcRewritten;

  if (changed) {
    writeFileSync(filePath, content, 'utf-8');
    console.log(`Rewrote links in: ${filePath.replace(distDir, '')}`);
  }
}

function walkDir(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walkDir(full);
    else if (entry.name.endsWith('.html')) rewriteHtmlFile(full);
  }
}

console.log(`Rewriting links in ${distDir}...`);
walkDir(distDir);
console.log('Done.');
