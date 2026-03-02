import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ROOT = resolve(__dirname, '..');
const PUBLIC_DIR = resolve(ROOT, 'public');
const SERVICES_DATA_PATH = resolve(ROOT, 'servicesData.ts');

const BASE_URL = process.env.SITEMAP_BASE_URL || 'https://biancoai.vercel.app';

function getStaticPaths() {
  return [
    '/',
    '/services',
    '/a-propos',
    '/tarifs',
    '/mentions-legales',
    '/confidentialite',
    '/cookies',
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
const allPaths = Array.from(new Set([...staticPaths, ...servicePaths]));

const xml = buildSitemapXml(allPaths);
const outPath = resolve(PUBLIC_DIR, 'sitemap.xml');
writeFileSync(outPath, xml, 'utf8');

console.log(`Sitemap generated at ${outPath} with ${allPaths.length} URLs.`);

