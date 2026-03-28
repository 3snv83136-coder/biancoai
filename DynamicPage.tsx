import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Breadcrumb from './components/Breadcrumb';
import { BUSINESS_INFO } from './constants';

const SITE_URL = 'https://www.bianco-esthetique.fr';

interface PageData {
  url: string;
  title: string;
  meta_title?: string;
  description?: string;
  h1?: string;
  subtitle?: string;
  sections?: { heading: string; body: string }[];
  images?: { file: string; url?: string; caption?: string }[];
  faq?: { q: string; a: string }[];
  published?: boolean;
}

const DynamicPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [page, setPage] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    fetch('/api/pages')
      .then(r => r.json())
      .then(data => {
        const pages: PageData[] = data?.pages || [];
        // Match by slug: try /p/slug, /slug, or exact url
        const found = pages.find(p =>
          p.url === `/p/${slug}` ||
          p.url === `/${slug}` ||
          p.url === slug
        );
        if (found && found.published !== false) {
          setPage(found);
        } else {
          navigate('/404', { replace: true });
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        navigate('/404', { replace: true });
      });
  }, [slug, navigate]);

  // Set meta tags
  useEffect(() => {
    if (!page) return;
    const prevTitle = document.title;
    const prevDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '';
    document.title = page.meta_title || page.title + ' | Bianco Esthétique';
    const meta = document.querySelector('meta[name="description"]');
    if (meta && page.description) meta.setAttribute('content', page.description);

    return () => {
      document.title = prevTitle;
      const m = document.querySelector('meta[name="description"]');
      if (m && prevDesc) m.setAttribute('content', prevDesc);
    };
  }, [page]);

  if (loading) {
    return (
      <div className="min-h-screen bg-surface">
        <Navbar onLinkClick={() => {}} />
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-3xl mx-auto text-center text-gray-400">Chargement...</div>
        </section>
        <Footer />
      </div>
    );
  }

  if (!page) return null;

  const faqItems = (page.faq || []).filter(f => f.q && f.a);
  const coverImage = page.images?.[0];

  // JSON-LD
  const jsonLd: any = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: page.meta_title || page.title,
        description: page.description || '',
        url: SITE_URL + page.url,
        mainEntity: { '@type': 'BeautySalon', name: 'Bianco Esthétique', url: SITE_URL },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: page.title, item: SITE_URL + page.url },
          ],
        },
      },
    ],
  };
  if (faqItems.length > 0) {
    jsonLd['@graph'].push({
      '@type': 'FAQPage',
      mainEntity: faqItems.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  return (
    <div className="min-h-screen bg-surface">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar onLinkClick={() => {}} />

      <main className="pt-28 md:pt-32 pb-20">
        <div className="px-6">
          <div className="max-w-3xl mx-auto">

            <Breadcrumb items={[
              { label: 'Accueil', to: '/' },
              { label: page.title },
            ]} />

            {/* Header */}
            <header className="mb-10">
              <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">
                Bianco Esthétique — Hyères
              </span>
              <h1 className="text-4xl md:text-5xl serif text-dark mb-6 leading-tight">
                {page.h1 || page.title}
              </h1>
              {page.subtitle && (
                <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
                  {page.subtitle}
                </p>
              )}
            </header>

            {/* Cover image */}
            {coverImage?.url && (
              <div className="rounded-[2rem] overflow-hidden mb-10 shadow-2xl border border-white">
                <img src={coverImage.url} alt={coverImage.caption || page.title} className="w-full h-64 md:h-96 object-cover" loading="eager" width={900} height={384} />
                {coverImage.caption && (
                  <p className="text-center text-gray-400 text-sm py-3 bg-white">{coverImage.caption}</p>
                )}
              </div>
            )}

            {/* Content sections */}
            {(page.sections || []).map((sec, i) => (
              <section key={i} className="mb-10">
                {sec.heading && (
                  <h2 className="text-2xl serif text-dark mb-4">{sec.heading}</h2>
                )}
                {sec.body.includes('<') ? (
                  <div
                    className="text-gray-500 font-light text-sm md:text-base leading-relaxed prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: sec.body }}
                  />
                ) : (
                  <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed whitespace-pre-line">
                    {sec.body}
                  </p>
                )}
              </section>
            ))}

            {/* Additional images */}
            {(page.images || []).slice(1).map((img, i) => (
              <figure key={i} className="my-8">
                <img src={img.url || ''} alt={img.caption || page.title} className="w-full rounded-2xl shadow-lg" loading="lazy" width={800} height={500} />
                {img.caption && <figcaption className="text-gray-400 text-sm mt-3 text-center">{img.caption}</figcaption>}
              </figure>
            ))}

            {/* CTA */}
            <section className="bg-dark text-white rounded-[2.5rem] px-8 py-10 mb-12">
              <h2 className="text-2xl md:text-3xl serif mb-4">Prendre rendez-vous</h2>
              <p className="text-gray-300 font-light text-sm mb-8">
                Réservez votre créneau en ligne ou appelez-nous directement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={BUSINESS_INFO.planityUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors">
                  Réserver sur Planity
                </a>
                <a href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/30 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-dark transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </section>

            {/* FAQ */}
            {faqItems.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl serif text-dark mb-6">Questions fréquentes</h2>
                <div className="space-y-4">
                  {faqItems.map((fq, i) => (
                    <details key={i} className="bg-white rounded-2xl border border-gray-100 px-5 py-4 shadow-sm">
                      <summary className="cursor-pointer font-semibold text-dark text-sm md:text-base">{fq.q}</summary>
                      <p className="mt-3 text-gray-500 font-light text-sm leading-relaxed">{fq.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* Closing */}
            <section className="text-center border-t border-gray-100 pt-10">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/" className="inline-block px-8 py-3 rounded-full border-2 border-primary text-primary text-sm font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors">
                  Retour à l'accueil
                </Link>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DynamicPage;
