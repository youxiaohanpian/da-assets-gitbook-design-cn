/**
 * Remark plugin: rewrite internal links to include Astro base path.
 * Runs on the Markdown AST (before HTML conversion).
 * e.g. [text](/layout-rules/) → [text](/da-assets-gitbook-design-cn/layout-rules/)
 */
import { visit } from 'unist-util-visit';

export function remarkBaseRewrite(base) {
  const baseNorm = base.endsWith('/') ? base : base + '/';

  return (tree) => {
    if (!tree || typeof tree !== 'object') return;

    visit(tree, 'link', (node) => {
      const url = node.url;
      if (!url || !url.startsWith('/')) return;
      // Already has base prefix → skip
      const urlLower = url.toLowerCase();
      const baseLower = baseNorm.toLowerCase();
      if (urlLower.startsWith(baseLower) || urlLower.startsWith(baseLower.replace(/\/$/, ''))) return;
      // External link → skip
      if (/^https?:\/\//i.test(url)) return;
      // Prepend base prefix
      const suffix = url === '/' ? '' : url.replace(/^\//, '');
      node.url = baseNorm + suffix;
    });
  };
}
