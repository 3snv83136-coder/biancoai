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
      name: "Pose d'ongles gel à Hyères — Ongles résine & gel UV | Bianco Esthétique",
      description:
        "Pose d'ongles gel à Hyères chez Bianco Esthétique. Extensions résine, gel UV, capsules. Tenue longue durée, finition naturelle. Salomé, technicienne ongulaire.",
      url: `${SITE_URL}/pose-ongles-gel-hyeres`,
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
            name: 'Pose ongles gel à Hyères',
            item: `${SITE_URL}/pose-ongles-gel-hyeres`,
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
          name: 'Quelle est la différence entre gel UV et résine pour les ongles ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Le gel UV est plus souple et donne un résultat plus naturel. La résine (acrilique) est plus rigide et permet des extensions plus longues et structurées. Salomé vous recommandera la technique la plus adaptée à votre ongle naturel.",
          },
        },
        {
          '@type': 'Question',
          name: "La pose de gel abîme-t-elle les ongles naturels ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Une pose correctement réalisée et retirée ne doit pas endommager l'ongle naturel. L'agressivité vient souvent du retrait forcé — chez Bianco, le retrait se fait en respectant le temps de trempage nécessaire, jamais à la force.",
          },
        },
        {
          '@type': 'Question',
          name: "Combien de temps tient une pose d'ongles gel ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "3 à 4 semaines selon votre croissance unguéale et vos activités. Un remplissage à 3 semaines permet de prolonger la pose sans tout déposer.",
          },
        },
        {
          '@type': 'Question',
          name: 'Peut-on faire du nail art sur une pose gel ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, Salomé propose des décorations nail art sur la pose gel : dégradé, chrome, stamping. Voir notre page nail art à Hyères pour les possibilités.",
          },
        },
      ],
    },
  ],
};

const PoseOnglesGelPage: React.FC = () => {
  const phoneHref = `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    const prev = document.title;
    document.title = "Pose d'ongles gel à Hyères — Ongles résine & gel UV | Bianco Esthétique";
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute('content') ?? '';
    meta?.setAttribute(
      'content',
      "Pose d'ongles gel à Hyères chez Bianco Esthétique. Extensions résine, gel UV, capsules. Tenue longue durée, finition naturelle. Salomé, technicienne ongulaire."
    );
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}/pose-ongles-gel-hyeres`;

    return () => {
      document.title = prev;
      if (meta && prevDesc) meta.setAttribute('content', prevDesc);
    };
  }, []);

  const overrides = usePageOverrides('/pose-ongles-gel-hyeres');

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
              { label: 'Pose ongles gel à Hyères' },
            ]} />

            <header className="mb-12">
              <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">
                Hyères — Ongles Gel &amp; Résine
              </span>
              <h1 className="text-4xl md:text-5xl serif text-dark mb-6 leading-tight">
                {overrides?.h1 || "Pose d'ongles gel à Hyères\u00a0: des ongles parfaits qui tiennent vraiment"}
              </h1>
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
                {overrides?.subtitle || "La pose d'ongles gel, c'est l'art de construire des ongles beaux et résistants — qu'ils soient naturels ou en extension. Chez Bianco, Salomé maîtrise les techniques de gel UV, de résine et de capsules avec une précision qui se voit dans chaque finition. Des ongles qui tiennent 3 à 4 semaines sans se casser, sans se lever, sans laisser de traces."}
              </p>
            </header>

            {/* Citation bait */}
            <section className="mb-12 bg-primary/5 border-l-4 border-primary px-6 py-5 rounded-r-2xl">
              <p className="text-dark text-sm md:text-base font-light leading-relaxed italic">
                Bianco Esthétique à Hyères propose la pose d'ongles gel avec trois techniques selon le résultat souhaité&nbsp;: gel UV sur ongles naturels pour renforcer et allonger légèrement, résine pour construire des ongles plus structurés, et capsules pour des extensions longues immédiates. Salomé adapte la technique à la morphologie de la main, à l'état de l'ongle naturel et au style de la cliente.
              </p>
            </section>

            {/* H2 section */}
            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-3">
                Les poses d'ongles gel proposées par Bianco
              </h2>
              <p className="text-gray-500 font-light text-sm md:text-base mb-8">
                Chaque technique a ses avantages — Salomé vous guidera vers celle qui correspond à votre ongle naturel et vos attentes&nbsp;:
              </p>
              <div className="space-y-6">

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Gel UV sur ongles naturels</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Le gel UV renforce l'ongle naturel tout en lui donnant de la brillance et de la résistance. Idéal pour les ongles qui cassent facilement. La finition est naturelle, légère, pas «&nbsp;artificielle&nbsp;». Tenue&nbsp;: 3-4 semaines.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 52 € — 1h45</p>
                  <Link
                    to="/manucure-ongles-gel-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Voir la manucure complète →
                  </Link>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Extensions capsules</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Les capsules permettent d'obtenir immédiatement des ongles plus longs. Salomé coupe, lime et pose les capsules avec une précision millimétrique pour un résultat qui ressemble à de vrais ongles. Tenue&nbsp;: 3-4 semaines avec maintenance.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 70 € — 2h</p>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Remplissage gel 3-4 semaines</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Après une pose complète, le remplissage entretient la longueur et la brillance sans déposer la totalité. C'est une séance plus rapide et moins coûteuse que la pose initiale. Salomé vérifie également l'état de l'ongle naturel.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 45 € — 1h</p>
                </div>

              </div>
            </section>

            {/* Testimonial */}
            <section className="mb-14">
              <blockquote className="bg-white rounded-2xl border border-gray-100 px-6 py-6">
                <p className="text-gray-500 font-light text-sm leading-relaxed italic mb-4">
                  "Mes ongles ont toujours été fragiles et cassants. Après la première pose gel chez Bianco, je ne reconnais plus mes mains. Salomé est une artiste — la finition est impeccable et la tenue est là depuis 4 semaines."
                </p>
                <footer className="text-xs text-gray-400">— Julie T., Hyères, janvier 2026</footer>
              </blockquote>
            </section>

            {/* Dark CTA */}
            <section className="bg-dark text-white rounded-[2.5rem] px-8 py-10 mb-14">
              <h2 className="text-2xl md:text-3xl serif mb-4">Prenez rendez-vous pour votre pose ongles gel</h2>
              <p className="text-gray-300 font-light text-sm mb-8">
                Prévoyez 2h pour une première pose complète. Le remplissage prend 1h. Salomé peut aussi combiner la pose avec une manucure soin pour prendre soin de vos cuticules et de vos mains en même temps.
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
                    q: 'Quelle est la différence entre gel UV et résine pour les ongles ?',
                    a: "Le gel UV est plus souple et donne un résultat plus naturel. La résine (acrilique) est plus rigide et permet des extensions plus longues et structurées. Salomé vous recommandera la technique la plus adaptée à votre ongle naturel.",
                  },
                  {
                    q: "La pose de gel abîme-t-elle les ongles naturels ?",
                    a: "Une pose correctement réalisée et retirée ne doit pas endommager l'ongle naturel. L'agressivité vient souvent du retrait forcé — chez Bianco, le retrait se fait en respectant le temps de trempage nécessaire, jamais à la force.",
                  },
                  {
                    q: "Combien de temps tient une pose d'ongles gel ?",
                    a: "3 à 4 semaines selon votre croissance unguéale et vos activités. Un remplissage à 3 semaines permet de prolonger la pose sans tout déposer.",
                  },
                  {
                    q: 'Peut-on faire du nail art sur une pose gel ?',
                    a: (
                      <>
                        Oui, Salomé propose des décorations nail art sur la pose gel&nbsp;: dégradé, chrome, stamping. Voir notre{' '}
                        <Link to="/nail-art-hyeres" className="text-primary font-semibold hover:underline">
                          page nail art à Hyères
                        </Link>{' '}
                        pour les possibilités.
                      </>
                    ),
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
                Des ongles bien faits, c'est un détail qui change tout. Chez Bianco, la pose gel est une prestation de précision, pas une prestation rapide. Prenez le temps — les résultats le méritent.
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

export default PoseOnglesGelPage;
