/**
 * Prerender script — generates static HTML for each route after Vite build.
 *
 * Usage: node scripts/prerender.mjs
 * Requires: vite build && vite build --ssr entry-server.tsx --outDir dist/server
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const DIST = resolve(ROOT, 'dist');

const SITE_URL = 'https://www.bianco-esthetique.fr';

// ── 1. Import SSR bundle ────────────────────────────────────────────
const { render, getRouteMeta } = await import(resolve(DIST, 'server', 'entry-server.js'));

// ── 2. Read client template ─────────────────────────────────────────
const template = readFileSync(resolve(DIST, 'index.html'), 'utf8');

// ── 3. Extract routes from sitemap ──────────────────────────────────
const sitemapPath = resolve(DIST, 'sitemap.xml');
let routes = ['/'];

if (existsSync(sitemapPath)) {
  const sitemap = readFileSync(sitemapPath, 'utf8');
  const matches = [...sitemap.matchAll(/<loc>https?:\/\/[^<]*?(\/[^<]*?)<\/loc>/g)];
  const sitemapRoutes = matches
    .map(m => m[1])
    .filter(r => r !== '/' && !r.includes('/admin'));
  routes = ['/', ...sitemapRoutes];
}

// ── 4. Prerender each route ─────────────────────────────────────────
let count = 0;
let errors = 0;

for (const route of routes) {
  try {
    const appHtml = render(route);

    let page = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    // Get route-specific meta (title + description)
    const meta = getRouteMeta(route);
    const canonicalUrl = route === '/' ? SITE_URL : `${SITE_URL}${route}`;

    if (meta) {
      // Title
      page = page.replace(
        /<title>[^<]*<\/title>/,
        `<title>${meta.title}</title>`
      );
      // Meta description
      page = page.replace(
        /<meta name="description" content="[^"]*">/,
        `<meta name="description" content="${meta.desc}">`
      );
      // OG title + description
      page = page.replace(
        /<meta property="og:title" content="[^"]*">/,
        `<meta property="og:title" content="${meta.title}">`
      );
      page = page.replace(
        /<meta property="og:description" content="[^"]*">/,
        `<meta property="og:description" content="${meta.desc}">`
      );
      // Twitter title + description
      page = page.replace(
        /<meta name="twitter:title" content="[^"]*">/,
        `<meta name="twitter:title" content="${meta.title}">`
      );
      page = page.replace(
        /<meta name="twitter:description" content="[^"]*">/,
        `<meta name="twitter:description" content="${meta.desc}">`
      );
    }

    // Canonical URL (always replace, even without meta)
    page = page.replace(
      /<link rel="canonical" href="[^"]*">/,
      `<link rel="canonical" href="${canonicalUrl}">`
    );
    // OG URL
    page = page.replace(
      /<meta property="og:url" content="[^"]*">/,
      `<meta property="og:url" content="${canonicalUrl}">`
    );

    // Write file
    const filePath = route === '/'
      ? resolve(DIST, 'index.html')
      : resolve(DIST, route.replace(/^\//, ''), 'index.html');

    mkdirSync(dirname(filePath), { recursive: true });
    writeFileSync(filePath, page, 'utf8');
    count++;
  } catch (err) {
    console.error(`  ✗ ${route}: ${err.message}`);
    errors++;
  }
}

// ── 5. Generate 404.html for Vercel ─────────────────────────────────
try {
  const notFoundHtml = render('/404-not-found');
  let page404 = template.replace(
    '<div id="root"></div>',
    `<div id="root">${notFoundHtml}</div>`
  );
  page404 = page404.replace(/<title>[^<]*<\/title>/, '<title>Page introuvable — Bianco Esthétique</title>');
  page404 = page404.replace(/<meta name="robots" content="[^"]*">/, '<meta name="robots" content="noindex,nofollow">');
  writeFileSync(resolve(DIST, '404.html'), page404, 'utf8');
  console.log('  ✓ 404.html generated');
} catch (err) {
  console.error(`  ✗ 404.html: ${err.message}`);
}

console.log(`\nPrerender complete: ${count} pages generated, ${errors} errors.`);
