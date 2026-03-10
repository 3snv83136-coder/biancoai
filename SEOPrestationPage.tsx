import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BUSINESS_INFO } from './constants';
import { SEO_PRESTATION_PAGES } from './seoPrestationPages';

const SITE_URL = 'https://bianco-esthetique.fr';

interface SEOPrestationPageProps {
  pageSlug: string;
}

const SEOPrestationPage: React.FC<SEOPrestationPageProps> = ({ pageSlug }) => {
  const page = SEO_PRESTATION_PAGES[pageSlug] ?? null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageSlug]);

  useEffect(() => {
    if (!page) return;

    const prevTitle = document.title;
    const prevDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '';

    document.title = `${page.title} | Bianco Esthétique`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', page.metaDescription);

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = `${SITE_URL}/${page.slug}`;

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BeautySalon',
          name: 'Bianco Esthétique',
          url: SITE_URL,
          telephone: '+33749967691',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '3 Avenue Ernest Millet',
            addressLocality: 'Hyères',
            postalCode: '83400',
            addressCountry: 'FR',
          },
          geo: { '@type': 'GeoCoordinates', latitude: 43.1175016, longitude: 6.1280558 },
          priceRange: '€€',
          aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', reviewCount: '24' },
        },
        {
          '@type': 'FAQPage',
          mainEntity: page.faq.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        },
      ],
    };

    const breadcrumb = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Prestations', item: `${SITE_URL}/prestations` },
        { '@type': 'ListItem', position: 3, name: page.title, item: `${SITE_URL}/${page.slug}` },
      ],
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify(breadcrumb);
    document.head.appendChild(breadcrumbScript);

    return () => {
      document.title = prevTitle;
      const m = document.querySelector('meta[name="description"]');
      if (m && prevDesc) m.setAttribute('content', prevDesc);
      [script, breadcrumbScript].forEach((s) => {
        if (s.parentNode) s.parentNode.removeChild(s);
      });
    };
  }, [page]);

  if (!page) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-2xl serif text-dark mb-4">Page non trouvée</h1>
          <p className="text-gray-600 mb-6">Cette page n&apos;existe pas ou le lien est incorrect.</p>
          <Link to="/prestations" className="text-primary font-semibold hover:underline">
            Voir toutes les prestations
          </Link>
        </div>
      </div>
    );
  }

  const phoneHref = `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`;

  return (
    <div className="min-h-screen bg-surface">
      <Navbar onLinkClick={() => {}} />

      <main className="pt-28 md:pt-32 pb-20">
        <section className="px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs px-5 py-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Accueil
              </Link>
              <Link
                to="/prestations"
                className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs px-5 py-3 rounded-full border border-primary/30 hover:bg-primary/10 transition-all"
              >
                Prestations
              </Link>
            </div>

            <header className="mb-14">
              <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">
                Prestation à Hyères
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl serif text-dark mb-4">{page.h1}</h1>
              <p className="text-gray-500 font-light text-sm md:text-base max-w-2xl">{page.heroSubtitle}</p>
              <a
                href={phoneHref}
                className="inline-block mt-6 px-8 py-3 rounded-full bg-primary text-white text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors"
              >
                Prendre RDV — {BUSINESS_INFO.phone}
              </a>
            </header>

            <section className="space-y-6 text-gray-600 font-light text-sm md:text-base leading-relaxed mb-16">
              <h2 className="text-2xl serif text-dark">Présentation</h2>
              {page.presentation.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>

            <section className="mb-16">
              <h2 className="text-2xl serif text-dark mb-6">Pourquoi choisir Bianco Esthétique ?</h2>
              <ul className="space-y-3 text-gray-600 font-light text-sm md:text-base">
                {page.pourquoi.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-primary shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {page.temoignages.length > 0 && (
              <section className="mb-16">
                <h2 className="text-2xl serif text-dark mb-6">Avis de clientes</h2>
                <div className="space-y-6">
                  {page.temoignages.map((t, i) => (
                    <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6">
                      <h3 className="font-semibold text-dark mb-2">{t.title}</h3>
                      <p className="text-gray-600 font-light text-sm md:text-base">&ldquo;{t.text}&rdquo;</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="mb-16">
              <h2 className="text-2xl serif text-dark mb-4">{page.zoneTitle}</h2>
              <div className="space-y-3 text-gray-600 font-light text-sm md:text-base leading-relaxed">
                {page.zoneContent.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <p className="mt-4 text-sm">
                <strong>Adresse :</strong> {BUSINESS_INFO.address} —{' '}
                <a href={phoneHref} className="text-primary hover:underline">
                  {BUSINESS_INFO.phone}
                </a>
              </p>
            </section>

            {page.internalLinks.length > 0 && (
              <section className="mb-16">
                <h2 className="text-2xl serif text-dark mb-4">Autres prestations</h2>
                <div className="flex flex-wrap gap-3">
                  {page.internalLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium hover:bg-primary/10 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <section className="mb-16">
              <h2 className="text-2xl serif text-dark mb-4">Questions fréquentes</h2>
              <div className="space-y-4">
                {page.faq.map((f, i) => (
                  <details key={i} className="bg-white rounded-2xl border border-gray-100 px-4 py-3">
                    <summary className="cursor-pointer font-semibold text-dark">{f.question}</summary>
                    <p className="mt-2 text-gray-600 font-light text-sm md:text-base">{f.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="bg-dark text-white rounded-[2.5rem] px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 space-y-3">
                <h2 className="text-2xl md:text-3xl serif">{page.ctaTitle}</h2>
                <p className="text-sm md:text-base text-gray-300 font-light">{page.ctaText}</p>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <a
                  href={BUSINESS_INFO.planityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors"
                >
                  Réserver sur Planity
                </a>
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/40 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-dark transition-colors"
                >
                  Appeler — {BUSINESS_INFO.phone}
                </a>
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SEOPrestationPage;
