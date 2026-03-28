import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Breadcrumb from './components/Breadcrumb';
import { BUSINESS_INFO } from './constants';
import { usePageOverrides } from './components/usePageOverrides';

const SITE_URL = 'https://www.bianco-esthetique.fr';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: 'Massage femme enceinte à Hyères — Soins grossesse adaptés | Bianco Esthétique',
      description:
        'Vous cherchez un massage grossesse à Hyères ? Bianco propose des soins adaptés aux femmes enceintes : drainage jambes légères, soins visage doux. 3 Av. Ernest Millet Hyères.',
      url: `${SITE_URL}/massage-femme-enceinte-hyeres`,
      mainEntity: {
        '@type': 'BeautySalon',
        name: 'Bianco Esthétique',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '3 Av. Ernest Millet',
          addressLocality: 'Hyères',
          postalCode: '83400',
          addressCountry: 'FR',
        },
        telephone: '+33749967691',
        url: SITE_URL,
        priceRange: '€€',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '10:00',
            closes: '18:00',
          },
        ],
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Massage femme enceinte à Hyères',
            item: `${SITE_URL}/massage-femme-enceinte-hyeres`,
          },
        ],
      },
    },
    {
      '@type': 'Person',
      name: 'Salomé Bianco',
      jobTitle: 'Esthéticienne diplômée MAF',
      worksFor: { '@type': 'BeautySalon', name: 'Bianco Esthétique', url: SITE_URL },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hyères',
        postalCode: '83400',
        addressCountry: 'FR',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Bianco Esthétique propose-t-elle des massages prénataux ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Non, nous ne pratiquons pas le massage prénatal spécialisé. En revanche, plusieurs de nos soins (drainage lymphatique des jambes, soin visage doux, manucure) sont adaptés aux femmes enceintes à partir du 2e trimestre, avec accord médical.',
          },
        },
        {
          '@type': 'Question',
          name: 'Le drainage lymphatique est-il sans risque pendant la grossesse ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le drainage des jambes peut être pratiqué à partir du 2e trimestre avec l\'accord de votre médecin ou sage-femme. Il est déconseillé en cas de phlébite, d\'hypertension non contrôlée ou de complications obstétriques. Consultez toujours votre professionnel de santé avant.',
          },
        },
        {
          '@type': 'Question',
          name: 'Faut-il prévenir lors de la réservation qu\'on est enceinte ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui, absolument. Indiquez votre grossesse et votre terme lors de la réservation — par téléphone ou en laissant un message via Planity. Salomé adaptera le protocole et s\'assurera que le soin est approprié à votre situation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quels soins sont contre-indiqués pendant la grossesse ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Les soins utilisant de la chaleur intense, les enveloppements corps, certains actifs cosmétiques (rétinoïdes, acides forts) et les massages corps profonds sont généralement déconseillés. Salomé vous guidera lors de votre appel.',
          },
        },
      ],
    },
  ],
};

const MassageFemmeEnceintePage: React.FC = () => {
  const phoneHref = `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    const prev = document.title;
    document.title =
      'Massage femme enceinte à Hyères — Soins grossesse adaptés | Bianco Esthétique';
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute('content') ?? '';
    meta?.setAttribute(
      'content',
      'Vous cherchez un massage grossesse à Hyères ? Bianco propose des soins adaptés aux femmes enceintes : drainage jambes légères, soins visage doux. 3 Av. Ernest Millet Hyères.'
    );
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}/massage-femme-enceinte-hyeres`;

    return () => {
      document.title = prev;
      if (meta && prevDesc) meta.setAttribute('content', prevDesc);
    };
  }, []);

  const overrides = usePageOverrides('/massage-femme-enceinte-hyeres');

  return (
    <div className="min-h-screen bg-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar onLinkClick={() => {}} />

      <main className="pt-28 md:pt-32 pb-20">
        <div className="px-6">
          <div className="max-w-3xl mx-auto">

            <Breadcrumb items={[
              { label: 'Accueil', to: '/' },
              { label: 'Massage femme enceinte à Hyères' },
            ]} />

            {/* Header */}
            <header className="mb-12">
              <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">
                Hyères — Soins Grossesse & Maternité
              </span>
              <h1 className="text-4xl md:text-5xl serif text-dark mb-6 leading-tight">
                {overrides?.h1 || 'Massage pour femme enceinte à Hyères : ce que Bianco peut faire pour vous'}
              </h1>
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
                {overrides?.subtitle || "Le massage prénatal spécialisé requiert une formation spécifique que nous ne pratiquons pas chez Bianco. En revanche, plusieurs de nos soins sont parfaitement adaptés et très bénéfiques pendant la grossesse — notamment à partir du 2e trimestre. Cette page est là pour vous guider honnêtement."}
              </p>
            </header>

            {/* Citation bait */}
            <section className="mb-12 bg-primary/5 border-l-4 border-primary px-6 py-5 rounded-r-2xl">
              <p className="text-dark text-sm md:text-base font-light leading-relaxed italic">
                Bianco Esthétique à Hyères propose aux femmes enceintes (à partir du 2e trimestre,
                avec accord médical) des soins ciblés adaptés : drainage lymphatique des jambes pour
                soulager la sensation de jambes lourdes, soins visage doux pour les peaux sensibilisées
                par les hormones, et manucure pour prendre soin de soi en toute sécurité.
              </p>
            </section>

            {/* Section 1 — Où trouver un massage prénatal */}
            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-3">
                Où trouver un massage prénatal à Hyères ?
              </h2>
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
                Le massage prénatal professionnel est pratiqué par des kinésithérapeutes ou des
                praticiens en massage bien-être formés spécifiquement à la grossesse. Renseignez-vous
                auprès de votre sage-femme ou de votre maternité pour des adresses de confiance dans
                la région de Hyères. Votre suivi médical reste la meilleure source d'orientation pour
                ce type de soin.
              </p>
            </section>

            {/* Section 2 — Ce que Bianco propose */}
            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-3">
                Ce que Bianco propose pour les femmes enceintes
              </h2>
              <p className="text-gray-500 font-light text-sm md:text-base mb-8">
                Avec l'accord de votre médecin ou sage-femme, voici les soins que vous pouvez réaliser
                chez Bianco en toute sécurité :
              </p>

              <div className="space-y-6">
                {/* Card 1 */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Drainage lymphatique des jambes</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    La grossesse accentue souvent la sensation de jambes lourdes et les œdèmes des
                    chevilles. Notre drainage lymphatique des jambes (méthode brésilienne) soulage ces
                    inconforts de façon immédiate et durable. À réaliser à partir du 2e trimestre, avec
                    accord médical.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 85 € — 45min</p>
                  <Link
                    to="/drainage-lymphatique-jambes-lourdes-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Découvrir le drainage jambes →
                  </Link>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Soin visage adapté peau sensible</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Les hormones de grossesse modifient la peau : hyperpigmentation, sensibilité accrue,
                    déshydratation. Salomé adapte les protocoles avec des produits sans ingrédients à
                    éviter pendant la grossesse. Un moment de douceur rien que pour vous.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 65 € — 1h</p>
                  <Link
                    to="/soin-visage-peau-sensible-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Voir le soin visage peau sensible →
                  </Link>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Manucure & soin des ongles</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Prendre soin de ses mains pendant la grossesse, c'est possible et recommandé. La
                    manucure chez Bianco utilise des vernis sans formaldéhyde, adaptés aux femmes
                    enceintes. Un moment pour soi qui ne demande aucun compromis.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 45 € — 1h</p>
                  <Link
                    to="/manucure-ongles-gel-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Voir la manucure à Hyères →
                  </Link>
                </div>
              </div>
            </section>

            {/* Testimonial */}
            <section className="mb-14">
              <blockquote className="bg-white rounded-2xl border border-gray-100 px-6 py-6">
                <p className="text-gray-500 font-light text-sm leading-relaxed italic mb-4">
                  "J'étais enceinte de 6 mois et mes jambes étaient très lourdes. Le drainage chez
                  Bianco m'a soulagée immédiatement. Salomé a été très attentionnée et rassurante
                  tout au long du soin."
                </p>
                <footer className="text-xs text-gray-400">— Camille D., Hyères, novembre 2025</footer>
              </blockquote>
            </section>

            {/* Dark CTA box */}
            <section className="bg-dark text-white rounded-[2.5rem] px-8 py-10 mb-14">
              <h2 className="text-2xl md:text-3xl serif mb-4">
                Prendre soin de vous pendant la grossesse à Hyères
              </h2>
              <p className="text-gray-300 font-light text-sm mb-8">
                Avant votre rendez-vous, mentionnez votre grossesse et votre trimestre lors de la
                réservation. Salomé adaptera le soin et confirmera les éventuelles précautions à
                prendre.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={BUSINESS_INFO.planityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors"
                >
                  Réserver mon soin
                </a>
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/30 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-dark transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-6">Questions fréquentes</h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'Bianco Esthétique propose-t-elle des massages prénataux ?',
                    a: 'Non, nous ne pratiquons pas le massage prénatal spécialisé. En revanche, plusieurs de nos soins (drainage lymphatique des jambes, soin visage doux, manucure) sont adaptés aux femmes enceintes à partir du 2e trimestre, avec accord médical.',
                  },
                  {
                    q: 'Le drainage lymphatique est-il sans risque pendant la grossesse ?',
                    a: 'Le drainage des jambes peut être pratiqué à partir du 2e trimestre avec l\'accord de votre médecin ou sage-femme. Il est déconseillé en cas de phlébite, d\'hypertension non contrôlée ou de complications obstétriques. Consultez toujours votre professionnel de santé avant.',
                  },
                  {
                    q: 'Faut-il prévenir lors de la réservation qu\'on est enceinte ?',
                    a: 'Oui, absolument. Indiquez votre grossesse et votre terme lors de la réservation — par téléphone ou en laissant un message via Planity. Salomé adaptera le protocole et s\'assurera que le soin est approprié à votre situation.',
                  },
                  {
                    q: 'Quels soins sont contre-indiqués pendant la grossesse ?',
                    a: 'Les soins utilisant de la chaleur intense, les enveloppements corps, certains actifs cosmétiques (rétinoïdes, acides forts) et les massages corps profonds sont généralement déconseillés. Salomé vous guidera lors de votre appel.',
                  },
                ].map(({ q, a }) => (
                  <details
                    key={q}
                    className="bg-white rounded-2xl border border-gray-100 px-5 py-4"
                  >
                    <summary className="cursor-pointer font-semibold text-dark text-sm md:text-base">
                      {q}
                    </summary>
                    <p className="mt-3 text-gray-500 font-light text-sm leading-relaxed">{a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Closing */}
            <section className="text-center border-t border-gray-100 pt-10">
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-6">
                La grossesse mérite des soins doux, honnêtes et adaptés. Chez Bianco, on ne vous
                promettra pas ce qu'on ne fait pas — mais ce qu'on fait, on le fait bien et avec
                attention.{' '}
                <Link
                  to="/drainage-lymphatique-apres-accouchement-hyeres"
                  className="text-primary hover:underline"
                >
                  Découvrez aussi nos soins post-partum après l'accouchement.
                </Link>
              </p>
              <p className="text-xs text-gray-400 italic mb-8">— Salomé, Bianco Esthétique</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={BUSINESS_INFO.planityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 rounded-full bg-primary text-white text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors"
                >
                  Prendre rendez-vous
                </a>
                <a
                  href={phoneHref}
                  className="inline-block px-8 py-3 rounded-full border-2 border-primary text-primary text-sm font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MassageFemmeEnceintePage;
