/**
 * Rehype plugin: rewrite internal links to include Astro base path.
 * e.g. href="/layout-rules/" → href="/da-assets-gitbook-design-cn/layout-rules/"
 */
import { visit } from 'unist-util-visit';

export function rehypeBaseRewrite(base) {
  const baseNorm = base.endsWith('/') ? base : base + '/';

  return (tree) => {
    // Guard: tree might be undefined for empty files
    if (!tree || typeof tree !== 'object') return;

    visit(tree, 'element', (node) => {
      if (node.tagName !== 'a') return;
      const href = node.properties?.href;
      if (!href || !href.startsWith('/')) return;
      // Already has base prefix → skip
      const hrefLower = href.toLowerCase();
      const baseLower = baseNorm.toLowerCase();
      if (hrefLower.startsWith(baseLower) || hrefLower.startsWith(baseLower.replace(/\/$/, ''))) return;
      // External link → skip
      if (/^https?:\/\//i.test(href)) return;
      // Prepend base prefix
      const suffix = href === '/' ? '' : href.replace(/^\//, '');
      node.properties.href = baseNorm + suffix;
    });
  };
}
