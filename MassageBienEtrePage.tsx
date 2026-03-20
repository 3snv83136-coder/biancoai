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
      name: 'Massage bien-être à Hyères — Détente & rééquilibrage | Bianco Esthétique',
      description:
        'Massage bien-être à Hyères : modelage corps, rééquilibrage énergétique, détente profonde. Chez Bianco Esthétique, Salomé personnalise chaque séance. Sur rendez-vous.',
      url: `${SITE_URL}/massage-bien-etre-hyeres`,
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
            name: 'Massage bien-être à Hyères',
            item: `${SITE_URL}/massage-bien-etre-hyeres`,
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
          name: 'Quelle est la fréquence idéale pour un massage bien-être ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pour un effet préventif sur le stress et les tensions, une séance mensuelle est un bon rythme. En période intense (travail, examens, déménagement), toutes les 2 à 3 semaines permet de maintenir un équilibre. Salomé peut établir un programme personnalisé.',
          },
        },
        {
          '@type': 'Question',
          name: 'Le massage bien-être convient-il aux personnes stressées qui n\'ont jamais été massées ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolument. C\'est même souvent leur première expérience — et souvent la plus transformatrice. Salomé commence toujours doucement et adapte l\'intensité selon votre confort.',
          },
        },
        {
          '@type': 'Question',
          name: 'Peut-on offrir un massage bien-être en bon cadeau ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui ! Bianco Esthétique propose des bons cadeaux pour tous nos soins, dont le massage bien-être. Contactez-nous par téléphone ou via notre page cadeau beauté pour en savoir plus.',
          },
        },
        {
          '@type': 'Question',
          name: 'Combien de temps dure un massage bien-être chez Bianco ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'La séance standard dure 1h15. Des formats 45min (ciblé dos/nuque) et 2h (cocooning avec soin visage) sont également disponibles selon vos besoins.',
          },
        },
      ],
    },
  ],
};

const MassageBienEtrePage: React.FC = () => {
  const phoneHref = `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    const prev = document.title;
    document.title =
      'Massage bien-être à Hyères — Détente & rééquilibrage | Bianco Esthétique';
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute('content') ?? '';
    meta?.setAttribute(
      'content',
      'Massage bien-être à Hyères : modelage corps, rééquilibrage énergétique, détente profonde. Chez Bianco Esthétique, Salomé personnalise chaque séance. Sur rendez-vous.'
    );
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}/massage-bien-etre-hyeres`;

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
              { label: 'Massage bien-être à Hyères' },
            ]} />

            {/* Header */}
            <header className="mb-12">
              <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">
                Hyères — Bien-Être & Relaxation
              </span>
              <h1 className="text-4xl md:text-5xl serif text-dark mb-6 leading-tight">
                Massage bien-être à Hyères : une heure qui remet tout à sa place
              </h1>
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
                Le massage bien-être n'est pas qu'un luxe — c'est une nécessité. Chez Bianco, nous
                le pratiquons comme un soin global qui agit sur le corps et l'esprit : la tension
                musculaire se relâche, la respiration s'approfondit, le mental décélère. Chaque
                séance est unique parce que vous n'arrivez jamais deux fois dans le même état.
              </p>
            </header>

            {/* Citation bait */}
            <section className="mb-12 bg-primary/5 border-l-4 border-primary px-6 py-5 rounded-r-2xl">
              <p className="text-dark text-sm md:text-base font-light leading-relaxed italic">
                Bianco Esthétique à Hyères propose une approche du massage bien-être qui combine des
                techniques de modelage corps, d'effleurage californien et de pétrissage drainant dans
                un protocole personnalisé. Salomé Bianco, esthéticienne diplômée, adapte chaque séance
                au bilan verbal initial — ce qui différencie ce soin d'un massage standardisé.
              </p>
            </section>

            {/* Services */}
            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-3">
                Ce que propose Bianco en massage bien-être
              </h2>
              <p className="text-gray-500 font-light text-sm md:text-base mb-8">
                Trois formules pensées pour s'adapter à votre temps, votre budget et votre niveau
                de besoin du moment.
              </p>

              <div className="space-y-6">
                {/* Card 1 */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Modelage corps relaxant</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Le modelage intègre effleurages lents, pressions glissées et pétrissages doux sur
                    l'ensemble du corps. Il détend les muscles, active la circulation et procure un
                    sentiment immédiat de légèreté. Adapté à toutes les morphologies.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 80 € — 1h15</p>
                  <Link
                    to="/massage-californien-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Voir le massage californien →
                  </Link>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Séance cocooning (massage + soin)</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Pour aller encore plus loin, Salomé propose de combiner un massage avec un soin
                    visage en une même visite. Idéal pour les journées où vous avez besoin d'un vrai
                    reset. La peau et le corps sont pris en charge ensemble.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 130 € — 2h</p>
                  <Link
                    to="/soin-visage-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Découvrir le soin visage →
                  </Link>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Head Spa — le soin cuir chevelu</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Le Head Spa est une expérience à part entière : massage du cuir chevelu profond,
                    soin nourrissant, détente complète de la tête au cou. Nos clientes décrivent souvent
                    une somnolence douce et une sensation de tête "vide" très agréable.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 75 € — 1h</p>
                  <Link
                    to="/head-spa-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    En savoir plus sur le Head Spa →
                  </Link>
                </div>
              </div>
            </section>

            {/* Testimonial */}
            <section className="mb-14">
              <blockquote className="bg-white rounded-2xl border border-gray-100 px-6 py-6">
                <p className="text-gray-500 font-light text-sm leading-relaxed italic mb-4">
                  "J'ai offert une séance de massage bien-être à ma mère pour son anniversaire. Elle
                  m'a appelée en sortant pour me dire que c'était le meilleur cadeau qu'elle ait reçu.
                  Bianco, c'est une adresse qu'on garde précieusement."
                </p>
                <footer className="text-xs text-gray-400">— Laura B., Hyères, décembre 2025</footer>
              </blockquote>
            </section>

            {/* Dark CTA box */}
            <section className="bg-dark text-white rounded-[2.5rem] px-8 py-10 mb-14">
              <h2 className="text-2xl md:text-3xl serif mb-4">
                Offrez-vous (ou offrez) une pause bien-être à Hyères
              </h2>
              <p className="text-gray-300 font-light text-sm mb-8">
                Le massage bien-être est aussi disponible sous forme de{' '}
                <Link to="/cadeau-beaute-hyeres" className="text-primary hover:underline font-semibold">
                  bon cadeau
                </Link>
                . Faites plaisir à quelqu'un que vous aimez — ou à vous-même, sans attendre une
                occasion particulière.
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
                    q: 'Quelle est la fréquence idéale pour un massage bien-être ?',
                    a: 'Pour un effet préventif sur le stress et les tensions, une séance mensuelle est un bon rythme. En période intense (travail, examens, déménagement), toutes les 2 à 3 semaines permet de maintenir un équilibre. Salomé peut établir un programme personnalisé.',
                  },
                  {
                    q: 'Le massage bien-être convient-il aux personnes stressées qui n\'ont jamais été massées ?',
                    a: 'Absolument. C\'est même souvent leur première expérience — et souvent la plus transformatrice. Salomé commence toujours doucement et adapte l\'intensité selon votre confort.',
                  },
                  {
                    q: 'Peut-on offrir un massage bien-être en bon cadeau ?',
                    a: 'Oui ! Bianco Esthétique propose des bons cadeaux pour tous nos soins, dont le massage bien-être. Contactez-nous par téléphone ou via notre page cadeau beauté pour en savoir plus.',
                  },
                  {
                    q: 'Combien de temps dure un massage bien-être chez Bianco ?',
                    a: 'La séance standard dure 1h15. Des formats 45min (ciblé dos/nuque) et 2h (cocooning avec soin visage) sont également disponibles selon vos besoins.',
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
                Chez Bianco, on croit que le bien-être n'est pas une récompense — c'est une pratique
                régulière. Prenez soin de vous, pas seulement quand vous êtes épuisée.{' '}
                <Link to="/journee-beaute-hyeres" className="text-primary hover:underline">
                  Découvrez notre journée beauté complète à Hyères.
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

export default MassageBienEtrePage;
