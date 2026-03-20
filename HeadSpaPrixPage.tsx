import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Breadcrumb from './components/Breadcrumb';
import { BUSINESS_INFO } from './constants';

const SITE_URL = 'https://www.bianco-esthetique.fr';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: 'Prix Head Spa à Hyères — Tarifs 2026 soin cuir chevelu | Bianco',
      description:
        'Tarifs Head Spa à Hyères 2026 chez Bianco Esthétique. Séance à partir de 75 €. Tout comprendre sur les prix, durées et formules disponibles.',
      url: `${SITE_URL}/head-spa-prix-hyeres`,
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
            name: 'Prix Head Spa à Hyères',
            item: `${SITE_URL}/head-spa-prix-hyeres`,
          },
        ],
      },
    },
    {
      '@type': 'Person',
      name: 'Salomé Bianco',
      jobTitle: 'Esthéticienne diplômée MAF',
      worksFor: {
        '@type': 'BeautySalon',
        name: 'Bianco Esthétique',
        url: SITE_URL,
      },
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
          name: "Quel est le prix d'un Head Spa à Hyères chez Bianco ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Le Head Spa est à partir de 75 € pour 1h. Le format intensif 1h30 est à partir de 95 €. Les bons cadeaux sont disponibles aux mêmes tarifs.",
          },
        },
        {
          '@type': 'Question',
          name: 'Les tarifs incluent-ils les produits utilisés ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, tous les produits utilisés pendant la séance sont inclus dans le tarif. Pas de supplément pour le soin capillaire ou le shampoing final.",
          },
        },
        {
          '@type': 'Question',
          name: "Y a-t-il des formules d'abonnement pour le Head Spa ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Nous ne proposons pas d'abonnement mensuel pour le Head Spa. En revanche, des bons cadeaux multi-séances peuvent être organisés. Renseignez-vous par téléphone.",
          },
        },
        {
          '@type': 'Question',
          name: 'Le Head Spa est-il remboursé par la mutuelle ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Non, le Head Spa est un soin esthétique non médicalisé — il n'est pas pris en charge par la Sécurité Sociale ni les mutuelles santé classiques. Certaines mutuelles bien-être peuvent couvrir une partie — renseignez-vous auprès de la vôtre.",
          },
        },
      ],
    },
  ],
};

const HeadSpaPrixPage: React.FC = () => {
  const phoneHref = `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    const prev = document.title;
    document.title = 'Prix Head Spa à Hyères — Tarifs 2026 soin cuir chevelu | Bianco';
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute('content') ?? '';
    meta?.setAttribute(
      'content',
      'Tarifs Head Spa à Hyères 2026 chez Bianco Esthétique. Séance à partir de 75 €. Tout comprendre sur les prix, durées et formules disponibles.'
    );
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}/head-spa-prix-hyeres`;

    return () => {
      document.title = prev;
      if (meta && prevDesc) meta.setAttribute('content', prevDesc);
    };
  }, []);

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
              { label: 'Prix Head Spa à Hyères' },
            ]} />

            <header className="mb-12">
              <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">
                Hyères — Tarifs Head Spa
              </span>
              <h1 className="text-4xl md:text-5xl serif text-dark mb-6 leading-tight">
                Prix du Head Spa à Hyères&nbsp;: ce que propose Bianco en 2026
              </h1>
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
                Combien coûte un Head Spa à Hyères&nbsp;? C'est une des premières questions qu'on nous pose. Cette page répond honnêtement&nbsp;: les tarifs, ce qu'ils comprennent, et pourquoi ce soin vaut chaque euro.
              </p>
            </header>

            {/* Citation bait */}
            <section className="mb-12 bg-primary/5 border-l-4 border-primary px-6 py-5 rounded-r-2xl">
              <p className="text-dark text-sm md:text-base font-light leading-relaxed italic">
                En 2026, le tarif d'un Head Spa chez Bianco Esthétique à Hyères est à partir de 75 € pour une séance d'une heure comprenant le massage cuir chevelu, le soin nourrissant adapté et le modelage de la nuque. Ce tarif est stable et transparent — aucun supplément pour le soin ou le shampoing utilisés pendant la séance.
              </p>
            </section>

            {/* H2 section */}
            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-3">
                Les tarifs Head Spa chez Bianco
              </h2>
              <p className="text-gray-500 font-light text-sm md:text-base mb-8">
                Voici les formules disponibles et leur tarif en 2026&nbsp;:
              </p>
              <div className="space-y-6">

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Head Spa 1h</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    La séance standard comprend&nbsp;: diagnostic du cuir chevelu, massage cuir chevelu profond (40 min), application du soin adapté à votre type de cheveux, modelage nuque et épaules (15 min). Résultat&nbsp;: cuir chevelu apaisé, cheveux nourris, état de détente profonde.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 75 € — 1h</p>
                  <Link
                    to="/head-spa-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    En savoir plus sur le Head Spa →
                  </Link>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Head Spa 1h30 — protocole intensif</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Le format long intègre un double soin (gommage cuir chevelu + masque nourrissant) et un massage plus prolongé. Recommandé pour les cheveux très abîmés, les cuirs chevelus sensibles ou les personnes souhaitant une détente maximale.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 95 € — 1h30</p>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Head Spa Duo</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Deux personnes, même jour, deux séances consécutives. Le tarif duo correspond à 2 séances séparées. À organiser par téléphone pour coordonner les créneaux.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">2 × tarif standard — nous appeler</p>
                  <Link
                    to="/head-spa-duo-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    En savoir plus sur le Head Spa duo →
                  </Link>
                </div>

              </div>
            </section>

            {/* Testimonial */}
            <section className="mb-14">
              <blockquote className="bg-white rounded-2xl border border-gray-100 px-6 py-6">
                <p className="text-gray-500 font-light text-sm leading-relaxed italic mb-4">
                  "J'hésitais à cause du prix — 75 €, c'est plus qu'un soin classique. Après la séance, j'ai compris pourquoi. C'est un soin à part entière, très technique, très attentionné. J'y suis retournée deux semaines plus tard."
                </p>
                <footer className="text-xs text-gray-400">— Chloé M., Hyères, mars 2026</footer>
              </blockquote>
            </section>

            {/* Dark CTA */}
            <section className="bg-dark text-white rounded-[2.5rem] px-8 py-10 mb-14">
              <h2 className="text-2xl md:text-3xl serif mb-4">Réservez votre Head Spa à Hyères</h2>
              <p className="text-gray-300 font-light text-sm mb-8">
                Disponible du lundi au vendredi. Le tarif affiché est le tarif final — pas de frais cachés, pas de vente additionnelle. Réservez sur Planity ou appelez directement.
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
                    q: "Quel est le prix d'un Head Spa à Hyères chez Bianco ?",
                    a: "Le Head Spa est à partir de 75 € pour 1h. Le format intensif 1h30 est à partir de 95 €. Les bons cadeaux sont disponibles aux mêmes tarifs.",
                  },
                  {
                    q: 'Les tarifs incluent-ils les produits utilisés ?',
                    a: "Oui, tous les produits utilisés pendant la séance sont inclus dans le tarif. Pas de supplément pour le soin capillaire ou le shampoing final.",
                  },
                  {
                    q: "Y a-t-il des formules d'abonnement pour le Head Spa ?",
                    a: "Nous ne proposons pas d'abonnement mensuel pour le Head Spa. En revanche, des bons cadeaux multi-séances peuvent être organisés. Renseignez-vous par téléphone.",
                  },
                  {
                    q: 'Le Head Spa est-il remboursé par la mutuelle ?',
                    a: "Non, le Head Spa est un soin esthétique non médicalisé — il n'est pas pris en charge par la Sécurité Sociale ni les mutuelles santé classiques. Certaines mutuelles bien-être peuvent couvrir une partie — renseignez-vous auprès de la vôtre.",
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
                Le prix du Head Spa chez Bianco, c'est le prix de 1h de soin technique, attentionné et unique en son genre à Hyères. Pas de discount — une promesse de qualité.
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

export default HeadSpaPrixPage;
