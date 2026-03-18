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

// ── 1. Import SSR bundle ────────────────────────────────────────────
const { render } = await import(resolve(DIST, 'server', 'entry-server.js'));

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

// ── 4. Route-specific meta data ─────────────────────────────────────
// Maps route → { title, description } for <head> injection
const META = {
  '/': {
    title: 'Bianco Esthétique | Institut de Beauté & Bien-être Hyères',
    desc: "Bianco Esthétique, institut de beauté et de bien-être à Hyères. Drainage lymphatique brésilien, beauté du regard et soins sur-mesure.",
  },
  '/prestations': {
    title: 'Nos prestations | Bianco Esthétique – Hyères',
    desc: 'Aperçu de toutes les prestations Bianco Esthétique à Hyères : soins corps, visage, regard, mains, pieds, maquillage et drainage lymphatique.',
  },
  '/tarifs': {
    title: 'Tarifs et prestations | Bianco Esthétique – Hyères',
    desc: 'Tarifs des soins et prestations de Bianco Esthétique à Hyères. Soins corps, visage, mains, pieds, regard, drainage lymphatique.',
  },
  '/a-propos': {
    title: 'À propos | Bianco Esthétique – Institut de beauté Hyères',
    desc: "Bianco Esthétique : l'histoire de Salomé, esthéticienne passionnée à Hyères. Exigence MAF, formation continue.",
  },
  '/head-spa-hyeres': {
    title: 'Head Spa à Hyères | Rituel cuir chevelu & détente profonde',
    desc: 'Découvrez le head spa à Hyères chez Bianco Esthétique : massage crânien, détente profonde du cuir chevelu, rituel japonais.',
  },
  '/blog': {
    title: 'Blog | Bianco Esthétique – Conseils beauté & bien-être à Hyères',
    desc: 'Découvrez les conseils beauté et bien-être de Bianco Esthétique à Hyères.',
  },
  '/mentions-legales': { title: 'Mentions légales | Bianco Esthétique', desc: 'Mentions légales du site Bianco Esthétique.' },
  '/confidentialite': { title: 'Confidentialité | Bianco Esthétique', desc: 'Politique de confidentialité de Bianco Esthétique.' },
  '/cookies': { title: 'Cookies | Bianco Esthétique', desc: 'Politique cookies de Bianco Esthétique.' },
};

// ── 5. Prerender each route ─────────────────────────────────────────
let count = 0;
let errors = 0;

for (const route of routes) {
  try {
    const appHtml = render(route);

    let page = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    // Inject route-specific <title> and <meta description>
    const meta = META[route];
    if (meta) {
      page = page.replace(
        /<title>[^<]*<\/title>/,
        `<title>${meta.title}</title>`
      );
      page = page.replace(
        /<meta name="description" content="[^"]*">/,
        `<meta name="description" content="${meta.desc}">`
      );
    }

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

console.log(`\nPrerender complete: ${count} pages generated, ${errors} errors.`);
