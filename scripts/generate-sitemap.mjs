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

// Date of last meaningful content update per page type
const SITE_LAUNCH_DATE = '2026-03-01';
const today = new Date().toISOString().split('T')[0];

function getStaticPaths() {
  return [
    { path: '/', lastmod: today },
    { path: '/services', lastmod: '2026-03-15' },
    { path: '/a-propos', lastmod: '2026-02-01' },
    { path: '/tarifs', lastmod: '2026-03-15' },
    { path: '/head-spa-hyeres', lastmod: '2026-03-01' },
    { path: '/blog', lastmod: today },
    { path: '/mentions-legales', lastmod: '2026-01-15' },
    { path: '/confidentialite', lastmod: '2026-01-15' },
    { path: '/cookies', lastmod: '2026-01-15' },
    // Page passerelle
    { path: '/apres-epilation-soins-hyeres', lastmod: today },
    // SEO Prestation pages
    { path: '/institut-beaute-hyeres', lastmod: SITE_LAUNCH_DATE },
    { path: '/soin-visage-hyeres', lastmod: SITE_LAUNCH_DATE },
    { path: '/manucure-ongles-gel-hyeres', lastmod: SITE_LAUNCH_DATE },
    { path: '/extensions-cils-hyeres', lastmod: SITE_LAUNCH_DATE },
    { path: '/massage-californien-hyeres', lastmod: SITE_LAUNCH_DATE },
    { path: '/callus-peeling-hyeres', lastmod: SITE_LAUNCH_DATE },
    { path: '/soin-visage-toulon', lastmod: SITE_LAUNCH_DATE },
    // SEO Geo - Quartiers Hyeres
    { path: '/institut-beaute-centre-ville-hyeres', lastmod: '2026-03-10' },
    { path: '/institut-beaute-costebelle-hyeres', lastmod: '2026-03-10' },
    { path: '/institut-beaute-les-palmiers-hyeres', lastmod: '2026-03-10' },
    { path: '/institut-beaute-port-hyeres', lastmod: '2026-03-10' },
    { path: '/institut-beaute-almanarre-hyeres', lastmod: '2026-03-10' },
    { path: '/institut-beaute-giens-hyeres', lastmod: '2026-03-10' },
    // Passerelles Massages
    { path: '/massage-relaxant-hyeres', lastmod: today },
    { path: '/massage-dos-nuque-hyeres', lastmod: today },
    { path: '/massage-bien-etre-hyeres', lastmod: today },
    { path: '/massage-kobido-hyeres', lastmod: today },
    { path: '/massage-femme-enceinte-hyeres', lastmod: today },
    // Passerelles Drainage
    { path: '/drainage-lymphatique-jambes-lourdes-hyeres', lastmod: today },
    { path: '/drainage-lymphatique-minceur-hyeres', lastmod: today },
    { path: '/drainage-lymphatique-apres-accouchement-hyeres', lastmod: today },
    { path: '/drainage-lymphatique-prix-hyeres', lastmod: today },
    { path: '/journee-beaute-hyeres', lastmod: today },
    // Passerelles Soins Visage
    { path: '/soin-visage-anti-age-hyeres', lastmod: today },
    { path: '/soin-visage-eclat-hyeres', lastmod: today },
    { path: '/soin-visage-peau-sensible-hyeres', lastmod: today },
    { path: '/soin-visage-homme-hyeres', lastmod: today },
    { path: '/microdermabrasion-hyeres', lastmod: today },
    // Passerelles Head Spa
    { path: '/head-spa-cadeau-hyeres', lastmod: today },
    { path: '/head-spa-duo-hyeres', lastmod: today },
    { path: '/head-spa-prix-hyeres', lastmod: today },
    // Passerelles Ongles & Regard
    { path: '/pose-ongles-gel-hyeres', lastmod: today },
    { path: '/nail-art-hyeres', lastmod: today },
    { path: '/rehaussement-cils-hyeres', lastmod: today },
    // Passerelles Occasions
    { path: '/cadeau-beaute-hyeres', lastmod: today },
    { path: '/beaute-mariage-hyeres', lastmod: today },
    { path: '/soins-peau-apres-soleil-hyeres', lastmod: today },
    { path: '/preparer-peau-ete-hyeres', lastmod: today },
    // SEO Geo - Villes limitrophes
    { path: '/institut-beaute-toulon', lastmod: '2026-03-10' },
    { path: '/institut-beaute-la-garde', lastmod: '2026-03-10' },
    { path: '/institut-beaute-carqueiranne', lastmod: '2026-03-10' },
    { path: '/institut-beaute-le-pradet', lastmod: '2026-03-10' },
    { path: '/institut-beaute-la-crau', lastmod: '2026-03-10' },
    { path: '/institut-beaute-la-londe-les-maures', lastmod: '2026-03-10' },
    { path: '/institut-beaute-bormes-les-mimosas', lastmod: '2026-03-10' },
    { path: '/institut-beaute-la-valette-du-var', lastmod: '2026-03-10' },
    { path: '/institut-beaute-sollies-pont', lastmod: '2026-03-10' },
    { path: '/institut-beaute-cuers', lastmod: '2026-03-10' },
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
  return Array.from(ids).map((id) => ({ path: `/services/${id}`, lastmod: SITE_LAUNCH_DATE }));
}

function getBlogEntries() {
  let source;
  try {
    source = readFileSync(BLOG_DATA_PATH, 'utf8');
  } catch {
    return [];
  }

  const entries = [];
  const slugRegex = /slug:\s*'([^']+)'/g;
  const dateRegex = /date:\s*'([^']+)'/g;
  const slugs = [];
  const dates = [];
  let match;
  while ((match = slugRegex.exec(source)) !== null) slugs.push(match[1]);
  while ((match = dateRegex.exec(source)) !== null) dates.push(match[1]);

  for (let i = 0; i < slugs.length; i++) {
    entries.push({ path: `/blog/${slugs[i]}`, lastmod: dates[i] || SITE_LAUNCH_DATE });
  }
  return entries;
}

function buildSitemapXml(entries) {
  const urlEntries = entries
    .map(
      ({ path, lastmod }) => `  <url>
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

const staticEntries = getStaticPaths();
const serviceEntries = getServiceSlugs();
const blogEntries = getBlogEntries();

// Deduplicate by path
const seen = new Set();
const allEntries = [...staticEntries, ...serviceEntries, ...blogEntries].filter(e => {
  if (seen.has(e.path)) return false;
  seen.add(e.path);
  return true;
});

const xml = buildSitemapXml(allEntries);
const outPath = resolve(PUBLIC_DIR, 'sitemap.xml');
writeFileSync(outPath, xml, 'utf8');

console.log(`Sitemap generated at ${outPath} with ${allEntries.length} URLs.`);
