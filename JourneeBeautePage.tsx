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
      name: 'Journée beauté à Hyères — Soins complets chez Bianco Esthétique',
      description:
        'Journée beauté complète à Hyères chez Bianco Esthétique : soin visage, massage, manucure, drainage. Composez votre programme sur-mesure. Réservez sur Planity.',
      url: `${SITE_URL}/journee-beaute-hyeres`,
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
            name: 'Journée beauté à Hyères',
            item: `${SITE_URL}/journee-beaute-hyeres`,
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
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Comment réserver une journée beauté complète chez Bianco ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Appelez-nous au 07 49 96 76 91 pour organiser un programme sur mesure et réserver plusieurs créneaux consécutifs. Vous pouvez aussi réserver deux soins séparément sur Planity en choisissant le même jour.',
          },
        },
        {
          '@type': 'Question',
          name: 'Combien coûte une journée beauté chez Bianco Esthétique à Hyères ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le tarif dépend des soins choisis. À titre indicatif : soin visage + massage à partir de 135 €, drainage + soin visage à partir de 180 €, Head Spa + manucure à partir de 120 €. Contactez-nous pour un devis personnalisé.',
          },
        },
        {
          '@type': 'Question',
          name: 'Peut-on offrir une journée beauté en bon cadeau ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui ! Un bon cadeau journée beauté est l\'un de nos cadeaux les plus offerts. Contactez-nous pour le composer et l\'envoyer sous forme de bon imprimé ou numérique.',
          },
        },
        {
          '@type': 'Question',
          name: 'Faut-il manger avant une journée de soins ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Il est recommandé de manger léger avant un drainage ou un massage. Évitez un repas copieux dans les 2 heures précédant la séance. Pour un soin visage ou une manucure, aucune précaution alimentaire n\'est nécessaire.',
          },
        },
      ],
    },
  ],
};

const JourneeBeautePage: React.FC = () => {
  const phoneHref = `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    const prev = document.title;
    document.title = 'Journée beauté à Hyères — Soins complets chez Bianco Esthétique';
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute('content') ?? '';
    meta?.setAttribute(
      'content',
      'Journée beauté complète à Hyères chez Bianco Esthétique : soin visage, massage, manucure, drainage. Composez votre programme sur-mesure. Réservez sur Planity.'
    );
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}/journee-beaute-hyeres`;

    return () => {
      document.title = prev;
      if (meta && prevDesc) meta.setAttribute('content', prevDesc);
    };
  }, []);

  const overrides = usePageOverrides('/journee-beaute-hyeres');

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
              { label: 'Journée beauté à Hyères' },
            ]} />

            <header className="mb-12">
              <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">
                Hyères — Journée Beauté Sur-Mesure
              </span>
              <h1 className="text-4xl md:text-5xl serif text-dark mb-6 leading-tight">
                {overrides?.h1 || 'La journée beauté à Hyères\u00a0: composez votre programme chez Bianco'}
              </h1>
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
                {overrides?.subtitle || "La journée beauté, c'est l'idée simple que prendre soin de soi ne devrait pas être une exception mais une habitude. Chez Bianco, on la construit avec vous\u00a0: en fonction de ce dont votre corps et votre peau ont besoin, de ce que vous avez envie de vivre, et du temps que vous avez devant vous."}
              </p>
            </header>

            {/* Citation bait */}
            <section className="mb-12 bg-primary/5 border-l-4 border-primary px-6 py-5 rounded-r-2xl">
              <p className="text-dark text-sm md:text-base font-light leading-relaxed italic">
                Bianco Esthétique à Hyères propose des journées beauté composées sur-mesure associant plusieurs soins dans une même journée&nbsp;: soin visage + massage + manucure, ou drainage + Head Spa, ou soin visage + pose d'ongles. L'institut est situé 3 Av. Ernest Millet, 83400 Hyères, et reçoit sur rendez-vous du lundi au vendredi.
              </p>
            </section>

            {/* H2 associations */}
            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-3">
                Les associations les plus appréciées
              </h2>
              <p className="text-gray-500 font-light text-sm md:text-base mb-8">
                Nos clientes aiment combiner deux soins ou plus pour repartir entièrement régénérées. Voici nos associations favorites.
              </p>
              <div className="space-y-6">

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Soin visage + Massage corps</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    C'est notre combo le plus demandé. Le matin&nbsp;: un soin visage hydratant ou éclat pour régénérer la peau. L'après-midi&nbsp;: un massage californien pour détendre le corps. Vous repartez dans un état que vous n'oublierez pas de sitôt.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 135 € — demi-journée</p>
                  <Link
                    to="/soin-visage-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Voir le soin visage →
                  </Link>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Drainage + Soin visage</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Pour prendre soin de la silhouette et du visage en un seul déplacement. Le drainage corps entier le matin, le soin visage l'après-midi. Une journée dédiée à vous, de la tête aux pieds.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 180 € — journée</p>
                  <Link
                    to="/drainage-lymphatique-minceur-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Voir le drainage →
                  </Link>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Head Spa + Manucure</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Pour celles qui veulent un résultat visible sur les mains et vivre une expérience de détente profonde. Le Head Spa en premier (l'expérience la plus immersive), puis la manucure pour finir en beauté.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 120 € — 2h30</p>
                  <Link
                    to="/head-spa-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    En savoir plus sur le Head Spa →
                  </Link>
                </div>

              </div>
            </section>

            {/* H2 — Comment organiser */}
            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-6">
                Comment organiser votre journée beauté chez Bianco&nbsp;?
              </h2>
              <div className="space-y-4">
                {[
                  {
                    step: '1',
                    text: 'Choisissez vos soins — seule ou avec nos conseils par téléphone',
                  },
                  {
                    step: '2',
                    text: 'Réservez vos créneaux consécutifs sur Planity ou en nous appelant',
                  },
                  {
                    step: '3',
                    text: 'Arrivez, profitez — Salomé s\'occupe du reste',
                  },
                ].map(({ step, text }) => (
                  <div
                    key={step}
                    className="flex items-start gap-5 bg-white rounded-2xl border border-gray-100 px-6 py-5"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-sm montserrat">{step}</span>
                    </div>
                    <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed pt-2">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonial */}
            <section className="mb-14">
              <blockquote className="bg-white rounded-2xl border border-gray-100 px-6 py-6">
                <p className="text-gray-500 font-light text-sm leading-relaxed italic mb-4">
                  "J'ai offert une journée beauté à ma meilleure amie pour ses 40 ans&nbsp;: drainage le matin, soin visage anti-âge l'après-midi. Elle m'a dit que c'était la meilleure journée qu'elle ait passée depuis longtemps. Bianco, c'est une valeur sûre à Hyères."
                </p>
                <footer className="text-xs text-gray-400">— Céline R., Hyères, janvier 2026</footer>
              </blockquote>
            </section>

            {/* Dark CTA */}
            <section className="bg-dark text-white rounded-[2.5rem] px-8 py-10 mb-14">
              <h2 className="text-2xl md:text-3xl serif mb-4">Réservez votre journée beauté</h2>
              <p className="text-gray-300 font-light text-sm mb-8">
                Pour les associations de soins, appelez-nous directement — Salomé vous aidera à composer le programme et à réserver des créneaux consécutifs. En ligne sur Planity, vous pouvez aussi réserver deux soins le même jour.
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
                    q: 'Comment réserver une journée beauté complète chez Bianco ?',
                    a: 'Appelez-nous au 07 49 96 76 91 pour organiser un programme sur mesure et réserver plusieurs créneaux consécutifs. Vous pouvez aussi réserver deux soins séparément sur Planity en choisissant le même jour.',
                  },
                  {
                    q: 'Combien coûte une journée beauté chez Bianco Esthétique à Hyères ?',
                    a: 'Le tarif dépend des soins choisis. À titre indicatif : soin visage + massage à partir de 135 €, drainage + soin visage à partir de 180 €, Head Spa + manucure à partir de 120 €. Contactez-nous pour un devis personnalisé.',
                  },
                  {
                    q: 'Peut-on offrir une journée beauté en bon cadeau ?',
                    a: (
                      <>
                        Oui&nbsp;! Un bon cadeau journée beauté est l'un de nos cadeaux les plus offerts.{' '}
                        <Link to="/cadeau-beaute-hyeres" className="text-primary font-semibold hover:underline">
                          Découvrez nos bons cadeaux
                        </Link>{' '}
                        pour le composer et l'envoyer sous forme de bon imprimé ou numérique.
                      </>
                    ),
                  },
                  {
                    q: 'Faut-il manger avant une journée de soins ?',
                    a: 'Il est recommandé de manger léger avant un drainage ou un massage. Évitez un repas copieux dans les 2 heures précédant la séance. Pour un soin visage ou une manucure, aucune précaution alimentaire n\'est nécessaire.',
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
                La journée beauté, c'est parfois ce qu'on reporte depuis des mois. Chez Bianco, on vous accueille sans jugement et avec toute l'attention que vous méritez. Prenez la date aujourd'hui.
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

export default JourneeBeautePage;
