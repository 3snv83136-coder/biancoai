import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ROOT = resolve(__dirname, '..');
const PUBLIC_DIR = resolve(ROOT, 'public');
const SERVICES_DATA_PATH = resolve(ROOT, 'servicesData.ts');
const BLOG_DATA_PATH = resolve(ROOT, 'blogData.ts');

const BASE_URL = process.env.SITEMAP_BASE_URL || 'https://www.bianco-esthetique.fr';

function getStaticPaths() {
  return [
    '/',
    '/services',
    '/a-propos',
    '/tarifs',
    '/head-spa-hyeres',
    '/blog',
    '/mentions-legales',
    '/confidentialite',
    '/cookies',
    // SEO Prestation pages
    '/institut-beaute-hyeres',
    '/soin-visage-hyeres',
    '/manucure-ongles-gel-hyeres',
    '/extensions-cils-hyeres',
    '/massage-californien-hyeres',
    '/callus-peeling-hyeres',
    '/soin-visage-toulon',
    // SEO Geo - Quartiers Hyères
    '/institut-beaute-centre-ville-hyeres',
    '/institut-beaute-costebelle-hyeres',
    '/institut-beaute-les-palmiers-hyeres',
    '/institut-beaute-port-hyeres',
    '/institut-beaute-almanarre-hyeres',
    '/institut-beaute-giens-hyeres',
    // SEO Geo - Villes limitrophes
    '/institut-beaute-toulon',
    '/institut-beaute-la-garde',
    '/institut-beaute-carqueiranne',
    '/institut-beaute-le-pradet',
    '/institut-beaute-la-crau',
    '/institut-beaute-la-londe-les-maures',
    '/institut-beaute-bormes-les-mimosas',
    '/institut-beaute-la-valette-du-var',
    '/institut-beaute-sollies-pont',
    '/institut-beaute-cuers',
  ];
}

function getServiceSlugs() {
  let source;
  try {
    source = readFileSync(SERVICES_DATA_PATH, 'utf8');
  } catch {
    return [];
  }

  const ids = new Set();
  const regex = /id:\s*'([^']+)'/g;
  let match;
  while ((match = regex.exec(source)) !== null) {
    ids.add(match[1]);
  }
  return Array.from(ids).map((id) => `/services/${id}`);
}

function getBlogSlugs() {
  let source;
  try {
    source = readFileSync(BLOG_DATA_PATH, 'utf8');
  } catch {
    return [];
  }

  const slugs = new Set();
  const regex = /slug:\s*'([^']+)'/g;
  let match;
  while ((match = regex.exec(source)) !== null) {
    slugs.add(match[1]);
  }
  return Array.from(slugs).map((slug) => `/blog/${slug}`);
}

function buildSitemapXml(urls) {
  const lastmod = new Date().toISOString();
  const urlEntries = urls
    .map(
      (path) => `  <url>
    <loc>${BASE_URL.replace(/\/$/, '')}${path}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;
}

mkdirSync(PUBLIC_DIR, { recursive: true });

const staticPaths = getStaticPaths();
const servicePaths = getServiceSlugs();
const blogPaths = getBlogSlugs();
const allPaths = Array.from(new Set([...staticPaths, ...servicePaths, ...blogPaths]));

const xml = buildSitemapXml(allPaths);
const outPath = resolve(PUBLIC_DIR, 'sitemap.xml');
writeFileSync(outPath, xml, 'utf8');

console.log(`Sitemap generated at ${outPath} with ${allPaths.length} URLs.`);

