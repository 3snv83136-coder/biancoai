import type { VercelRequest, VercelResponse } from '@vercel/node';
import { readJson } from './lib/storage.js';

const SITE_URL = 'https://www.bianco-esthetique.fr';

// Static pages with their priorities
const STATIC_PAGES = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/services', priority: '0.8', changefreq: 'monthly' },
  { url: '/tarifs', priority: '0.8', changefreq: 'monthly' },
  { url: '/a-propos', priority: '0.6', changefreq: 'monthly' },
  { url: '/blog', priority: '0.8', changefreq: 'weekly' },
  { url: '/head-spa-hyeres', priority: '0.7', changefreq: 'monthly' },
  { url: '/institut-beaute-hyeres', priority: '0.7', changefreq: 'monthly' },
  { url: '/soin-visage-hyeres', priority: '0.7', changefreq: 'monthly' },
  { url: '/manucure-ongles-gel-hyeres', priority: '0.7', changefreq: 'monthly' },
  { url: '/extensions-cils-hyeres', priority: '0.7', changefreq: 'monthly' },
  { url: '/massage-californien-hyeres', priority: '0.7', changefreq: 'monthly' },
  { url: '/callus-peeling-hyeres', priority: '0.7', changefreq: 'monthly' },
  { url: '/soin-visage-toulon', priority: '0.7', changefreq: 'monthly' },
  { url: '/apres-epilation-soins-hyeres', priority: '0.6', changefreq: 'monthly' },
  { url: '/massage-relaxant-hyeres', priority: '0.6', changefreq: 'monthly' },
  { url: '/massage-dos-nuque-hyeres', priority: '0.6', changefreq: 'monthly' },
  { url: '/massage-bien-etre-hyeres', priority: '0.6', changefreq: 'monthly' },
  { url: '/massage-kobido-hyeres', priority: '0.6', changefreq: 'monthly' },
  { url: '/massage-femme-enceinte-hyeres', priority: '0.6', changefreq: 'monthly' },
  { url: '/drainage-lymphatique-jambes-lourdes-hyeres', priority: '0.6', changefreq: 'monthly' },
  { url: '/drainage-lymphatique-minceur-hyeres', priority: '0.6', changefreq: 'monthly' },
  { url: '/drainage-lymphatique-apres-accouchement-hyeres', priority: '0.6', changefreq: 'monthly' },
  { url: '/drainage-lymphatique-prix-hyeres', priority: '0.6', changefreq: 'monthly' },
  { url: '/journee-beaute-hyeres', priority: '0.6', changefreq: 'monthly' },
  { url: '/soin-visage-anti-age-hyeres', priority: '0.6', changefreq: 'monthly' },
  { url: '/soin-visage-eclat-hyeres', priority: '0.6', changefreq: 'monthly' },
  { url: '/soin-visage-peau-sensible-hyeres', priority: '0.6', changefreq: 'monthly' },
  { url: '/soin-visage-homme-hyeres', priority: '0.6', changefreq: 'monthly' },
  { url: '/microdermabrasion-hyeres', priority: '0.6', changefreq: 'monthly' },
  { url: '/head-spa-cadeau-hyeres', priority: '0.6', changefreq: 'monthly' },
  { url: '/head-spa-duo-hyeres', priority: '0.6', changefreq: 'monthly' },
  { url: '/head-spa-prix-hyeres', priority: '0.6', changefreq: 'monthly' },
  { url: '/pose-ongles-gel-hyeres', priority: '0.6', changefreq: 'monthly' },
  { url: '/nail-art-hyeres', priority: '0.6', changefreq: 'monthly' },
  { url: '/rehaussement-cils-hyeres', priority: '0.6', changefreq: 'monthly' },
  { url: '/cadeau-beaute-hyeres', priority: '0.6', changefreq: 'monthly' },
  { url: '/beaute-mariage-hyeres', priority: '0.6', changefreq: 'monthly' },
  { url: '/soins-peau-apres-soleil-hyeres', priority: '0.6', changefreq: 'monthly' },
  { url: '/preparer-peau-ete-hyeres', priority: '0.6', changefreq: 'monthly' },
  { url: '/mentions-legales', priority: '0.3', changefreq: 'yearly' },
  { url: '/confidentialite', priority: '0.3', changefreq: 'yearly' },
];

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  const today = new Date().toISOString().slice(0, 10);

  // Load dynamic pages
  const pagesData = await readJson<any>('pages.json');
  const dynamicPages: { url: string; priority: string; changefreq: string }[] = [];
  if (pagesData?.pages) {
    for (const p of pagesData.pages) {
      if (p.published === false) continue;
      const url = p.url.startsWith('/p/') ? p.url : (p.url.startsWith('/') ? '/p' + p.url : '/p/' + p.url);
      // Skip if already in static
      if (STATIC_PAGES.some(s => s.url === p.url)) continue;
      dynamicPages.push({ url, priority: '0.6', changefreq: 'weekly' });
    }
  }

  // Load blog posts
  const postsData = await readJson<any>('posts.json');
  const blogEntries: { url: string; lastmod: string }[] = [];
  if (postsData?.posts) {
    for (const post of postsData.posts) {
      blogEntries.push({ url: `/blog/${post.slug || post.id}`, lastmod: post.date || today });
    }
  }

  // Build XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const page of STATIC_PAGES) {
    xml += `  <url>\n    <loc>${SITE_URL}${page.url}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${page.changefreq}</changefreq>\n    <priority>${page.priority}</priority>\n  </url>\n`;
  }

  for (const page of dynamicPages) {
    xml += `  <url>\n    <loc>${SITE_URL}${page.url}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${page.changefreq}</changefreq>\n    <priority>${page.priority}</priority>\n  </url>\n`;
  }

  for (const post of blogEntries) {
    xml += `  <url>\n    <loc>${SITE_URL}${post.url}</loc>\n    <lastmod>${post.lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
  }

  xml += '</urlset>';

  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');
  return res.status(200).send(xml);
}
