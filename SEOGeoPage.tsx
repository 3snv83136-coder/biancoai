import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Breadcrumb from './components/Breadcrumb';
import { BUSINESS_INFO } from './constants';
import { SEO_GEO_PAGES } from './seoGeoPages';

const SITE_URL = 'https://www.bianco-esthetique.fr';

interface SEOGeoPageProps {
  pageSlug: string;
}

const SEOGeoPage: React.FC<SEOGeoPageProps> = ({ pageSlug }) => {
  const page = SEO_GEO_PAGES[pageSlug] ?? null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageSlug]);

  useEffect(() => {
    if (!page) return;

    const prevTitle = document.title;
    const prevDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '';

    // Title + meta description (for SPA navigation)
    document.title = page.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', page.metaDescription);

    // Canonical (for SPA navigation)
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = `${SITE_URL}/${page.slug}`;

    return () => {
      document.title = prevTitle;
      const m = document.querySelector('meta[name="description"]');
      if (m && prevDesc) m.setAttribute('content', prevDesc);
    };
  }, [page]);

  // JSON-LD (inline for SSR visibility)
  const jsonLd = page ? {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BeautySalon',
        name: 'Bianco Esthetique',
        url: SITE_URL,
        telephone: '+33749967691',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '3 Avenue Ernest Millet',
          addressLocality: 'Hyeres',
          postalCode: '83400',
          addressRegion: 'Provence-Alpes-Cote d\'Azur',
          addressCountry: 'FR',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 43.1175016,
          longitude: 6.1280558,
        },
        areaServed: {
          '@type': 'Place',
          name: page.geoName,
          geo: {
            '@type': 'GeoCoordinates',
            latitude: page.geoLat,
            longitude: page.geoLng,
          },
        },
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '10:00', closes: '18:00' },
        ],
        priceRange: '€€',
        image: `${SITE_URL}/logo.webp`,
        sameAs: [
          BUSINESS_INFO.instagram,
          BUSINESS_INFO.facebook,
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Prestations', item: `${SITE_URL}/prestations` },
          { '@type': 'ListItem', position: 3, name: `Institut de beauté ${page.geoName}`, item: `${SITE_URL}/${page.slug}` },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: page.faq.map(f => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer,
          },
        })),
      },
    ],
  } : null;

  if (!page) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-2xl serif text-dark mb-4">Page non trouvee</h1>
          <Link to="/" className="text-primary font-semibold hover:underline">Retour a l&apos;accueil</Link>
        </div>
      </div>
    );
  }

  const phoneHref = `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`;

  return (
    <div className="min-h-screen bg-surface">
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
      <Navbar onLinkClick={() => {}} />

      <main className="pt-28 md:pt-32 pb-20">
        <section className="px-6">
          <div className="max-w-5xl mx-auto">

            <Breadcrumb items={[
              { label: 'Accueil', to: '/' },
              { label: 'Prestations', to: '/prestations' },
              { label: `Institut de beauté ${page.geoName}` },
            ]} />

            {/* Hero */}
            <header className="mb-14">
              <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">
                Institut de beaute — {page.geoName}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl serif text-dark mb-4">{page.h1}</h1>
              <p className="text-gray-500 font-light text-sm md:text-base max-w-2xl">{page.heroSubtitle}</p>
              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  href={BUSINESS_INFO.planityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 rounded-full bg-primary text-white text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors"
                >
                  Reserver sur Planity
                </a>
                <a
                  href={phoneHref}
                  className="inline-block px-8 py-3 rounded-full border-2 border-primary text-primary text-sm font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors"
                >
                  Appeler — {BUSINESS_INFO.phone}
                </a>
              </div>
            </header>

            {/* Distance badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-3 rounded-full text-sm font-semibold mb-10">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              A {page.distanceFromInstitut} de {page.geoName}
            </div>

            {/* Presentation */}
            <section className="space-y-6 text-gray-600 font-light text-sm md:text-base leading-relaxed mb-16">
              <h2 className="text-2xl serif text-dark">Votre institut de beaute pres de {page.geoName}</h2>
              {page.presentation.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>

            {/* Services */}
            <section className="mb-16">
              <h2 className="text-2xl serif text-dark mb-6">Nos soins disponibles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {page.servicesHighlight.map((service, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 px-5 py-4">
                    <span className="text-primary text-lg">&#10003;</span>
                    <span className="text-dark text-sm md:text-base">{service}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Pourquoi nous */}
            <section className="mb-16">
              <h2 className="text-2xl serif text-dark mb-6">Pourquoi choisir Bianco Esthetique ?</h2>
              <ul className="space-y-3 text-gray-600 font-light text-sm md:text-base">
                {page.whyUs.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-primary shrink-0">&#8226;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Acces */}
            <section className="mb-16">
              <h2 className="text-2xl serif text-dark mb-4">Comment venir depuis {page.geoName}</h2>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-3">
                {page.accessInfo.map((info, i) => (
                  <p key={i} className="text-gray-600 font-light text-sm md:text-base flex gap-3">
                    <span className="text-primary shrink-0">&#9679;</span>
                    <span>{info}</span>
                  </p>
                ))}
              </div>
              <p className="mt-4 text-sm">
                <strong>Adresse :</strong> {BUSINESS_INFO.address} —{' '}
                <a href={phoneHref} className="text-primary hover:underline">{BUSINESS_INFO.phone}</a>
              </p>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <h2 className="text-2xl serif text-dark mb-4">Questions frequentes — {page.geoName}</h2>
              <div className="space-y-4">
                {page.faq.map((f, i) => (
                  <details key={i} className="bg-white rounded-2xl border border-gray-100 px-4 py-3">
                    <summary className="cursor-pointer font-semibold text-dark">{f.question}</summary>
                    <p className="mt-2 text-gray-600 font-light text-sm md:text-base">{f.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Pages geo voisines */}
            {page.nearbyPages.length > 0 && (
              <section className="mb-10">
                <h2 className="text-2xl serif text-dark mb-4">Institut de beaute pres d&apos;autres villes</h2>
                <div className="flex flex-wrap gap-3">
                  {page.nearbyPages.map((link) => (
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

            {/* Prestations disponibles */}
            {page.prestationLinks.length > 0 && (
              <section className="mb-16">
                <h2 className="text-2xl serif text-dark mb-4">Nos prestations beaute</h2>
                <div className="flex flex-wrap gap-3">
                  {page.prestationLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="px-4 py-2 rounded-full bg-primary/5 border border-primary/20 text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* CTA */}
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
                  Reserver sur Planity
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

export default SEOGeoPage;
