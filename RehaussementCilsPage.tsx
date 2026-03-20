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
      name: 'Rehaussement de cils à Hyères — Extension & soins regard | Bianco',
      description:
        'Vous cherchez le rehaussement de cils à Hyères ? Bianco propose les extensions de cils. Pose cil-à-cil ou volume russe, regard sublimé. Sur rendez-vous.',
      url: `${SITE_URL}/rehaussement-cils-hyeres`,
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
            name: 'Rehaussement cils à Hyères',
            item: `${SITE_URL}/rehaussement-cils-hyeres`,
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
          name: 'Bianco Esthétique propose-t-elle le rehaussement de cils ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Non, Bianco ne pratique pas actuellement le rehaussement. Nous proposons les extensions de cils (cil-à-cil, volume mixte, volume russe) qui offrent un résultat différent mais souvent plus durable et personnalisable.",
          },
        },
        {
          '@type': 'Question',
          name: 'Quelle est la différence entre rehaussement et extensions de cils ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Le rehaussement courbe les cils naturels avec un produit kératinisant — effet naturel, pas d'entretien, dure 6-8 semaines. Les extensions ajoutent des cils synthétiques — effet plus spectaculaire, modulable, retouche à 3-4 semaines. Les deux sont des techniques légitimes selon l'objectif.",
          },
        },
        {
          '@type': 'Question',
          name: 'Les extensions de cils abîment-elles les cils naturels ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Réalisées correctement, non. Salomé utilise une colle adaptée à la finesse du cil naturel et vérifie régulièrement l'état des cils. Un retrait correct est essentiel — jamais à la force.",
          },
        },
        {
          '@type': 'Question',
          name: "Combien de temps tient une pose d'extensions de cils ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "4 à 6 semaines avec une retouche à mi-parcours. Sans retouche, la densité diminue progressivement avec la chute naturelle des cils — environ 20% de perte par semaine.",
          },
        },
      ],
    },
  ],
};

const RehaussementCilsPage: React.FC = () => {
  const phoneHref = `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    const prev = document.title;
    document.title = 'Rehaussement de cils à Hyères — Extension & soins regard | Bianco';
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute('content') ?? '';
    meta?.setAttribute(
      'content',
      'Vous cherchez le rehaussement de cils à Hyères ? Bianco propose les extensions de cils. Pose cil-à-cil ou volume russe, regard sublimé. Sur rendez-vous.'
    );
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}/rehaussement-cils-hyeres`;
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
              { label: 'Rehaussement cils à Hyères' },
            ]} />

            <header className="mb-12">
              <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">
                Hyères — Extensions &amp; Soin du Regard
              </span>
              <h1 className="text-4xl md:text-5xl serif text-dark mb-6 leading-tight">
                Rehaussement de cils à Hyères&nbsp;: ce que Bianco propose pour votre regard
              </h1>
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
                Le rehaussement de cils (ou lift de cils) est une technique de kératinisation qui courbe les cils naturels de l'intérieur. Bianco Esthétique ne pratique pas actuellement le rehaussement. En revanche, nous proposons les extensions de cils — une technique différente mais souvent plus adaptée à celles qui veulent un regard intensément transformé. Cette page vous aide à comprendre la différence et à choisir.
              </p>
            </header>

            <section className="mb-12 bg-primary/5 border-l-4 border-primary px-6 py-5 rounded-r-2xl">
              <p className="text-dark text-sm md:text-base font-light leading-relaxed italic">
                Bianco Esthétique à Hyères propose deux techniques d'extension de cils&nbsp;: cil-à-cil (pose naturelle, extension 1:1) et volume mixte (combinaison cil-à-cil et bouquets). Ces techniques, maîtrisées par Salomé Bianco depuis plusieurs années, permettent d'intensifier le regard durablement (4 à 6 semaines avec retouche) sans mascara quotidien.
              </p>
            </section>

            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-3">
                La différence entre rehaussement et extensions de cils
              </h2>
              <p className="text-gray-500 font-light text-sm md:text-base mb-8">
                Deux approches légitimes, deux résultats très différents — voici les points essentiels pour choisir.
              </p>
              <div className="space-y-6">

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Le rehaussement de cils</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Le rehaussement de cils utilise un produit kératinisant pour courber les cils naturels depuis leur racine. L'effet est naturel et dure 6 à 8 semaines. Il ne requiert pas de colle ni d'extensions artificielles.
                  </p>
                  <p className="text-xs text-gray-400">Non proposé chez Bianco actuellement</p>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Les extensions de cils (notre spécialité)</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Les extensions de cils ajoutent des cils synthétiques ou en vison sur les cils naturels. L'effet est plus spectaculaire et modulable — de très naturel à très intense selon la technique choisie. Tenue&nbsp;: 4-6 semaines avec retouche.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 70 € — 1h30</p>
                  <Link
                    to="/extensions-cils-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Tout savoir sur les extensions de cils →
                  </Link>
                </div>

              </div>
            </section>

            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-3">
                Les extensions de cils chez Bianco
              </h2>
              <p className="text-gray-500 font-light text-sm md:text-base mb-8">
                Notre spécialité en matière de regard&nbsp;:
              </p>
              <div className="space-y-6">

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Cil-à-cil (pose naturelle)</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Une extension posée sur chaque cil naturel. Le résultat est le plus naturel possible — impossible de distinguer les extensions des vrais cils. Idéal pour une utilisation quotidienne, un look professionnel ou les peaux hypersensibles.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">70 € — 1h30</p>
                  <Link
                    to="/extensions-cils-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Tout savoir sur les extensions de cils →
                  </Link>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Volume mixte</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Combinaison de cil-à-cil et de petits bouquets pour un résultat entre naturel et intense. Plus de volume et de densité que le cil-à-cil pur, sans aller jusqu'au volume russe complet. Le format préféré de la majorité de nos clientes.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">80 € — 2h</p>
                  <Link
                    to="/extensions-cils-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Voir toutes les techniques →
                  </Link>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Retouche extensions</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Les cils naturels tombent avec le cycle naturel de repousse. Une retouche à 3-4 semaines comble les zones qui ont perdu des extensions et maintient la densité. Plus rapide et moins coûteuse qu'une pose complète.
                  </p>
                  <p className="text-xs text-gray-400">À partir de 45 € — 45min</p>
                </div>

              </div>
            </section>

            <section className="mb-14">
              <blockquote className="bg-white rounded-2xl border border-gray-100 px-6 py-6">
                <p className="text-gray-500 font-light text-sm leading-relaxed italic mb-4">
                  "Je voulais un rehaussement mais on m'a orientée vers les extensions cil-à-cil chez Bianco. Le résultat est bien au-delà de ce que j'espérais. Pas de mascara depuis 5 semaines, regard toujours parfait."
                </p>
                <footer className="text-xs text-gray-400">— Laure D., Hyères, décembre 2025</footer>
              </blockquote>
            </section>

            <section className="bg-dark text-white rounded-[2.5rem] px-8 py-10 mb-14">
              <h2 className="text-2xl md:text-3xl serif mb-4">Prenez rendez-vous pour vos cils à Hyères</h2>
              <p className="text-gray-300 font-light text-sm mb-8">
                Avant votre première pose, un bilan est effectué pour vérifier l'état de vos cils naturels et la compatibilité avec les produits. Pas de colle allergisante — Salomé utilise des colles testées dermatologiquement.
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

            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-6">Questions fréquentes</h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'Bianco Esthétique propose-t-elle le rehaussement de cils ?',
                    a: "Non, Bianco ne pratique pas actuellement le rehaussement. Nous proposons les extensions de cils (cil-à-cil, volume mixte, volume russe) qui offrent un résultat différent mais souvent plus durable et personnalisable.",
                  },
                  {
                    q: 'Quelle est la différence entre rehaussement et extensions de cils ?',
                    a: "Le rehaussement courbe les cils naturels avec un produit kératinisant — effet naturel, pas d'entretien, dure 6-8 semaines. Les extensions ajoutent des cils synthétiques — effet plus spectaculaire, modulable, retouche à 3-4 semaines. Les deux sont des techniques légitimes selon l'objectif.",
                  },
                  {
                    q: 'Les extensions de cils abîment-elles les cils naturels ?',
                    a: "Réalisées correctement, non. Salomé utilise une colle adaptée à la finesse du cil naturel et vérifie régulièrement l'état des cils. Un retrait correct est essentiel — jamais à la force.",
                  },
                  {
                    q: "Combien de temps tient une pose d'extensions de cils ?",
                    a: "4 à 6 semaines avec une retouche à mi-parcours. Sans retouche, la densité diminue progressivement avec la chute naturelle des cils — environ 20% de perte par semaine.",
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

            <section className="text-center border-t border-gray-100 pt-10">
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-6">
                Que vous cherchiez le rehaussement ou les extensions, l'objectif est le même&nbsp;: un regard qui se passe de mascara et qui parle pour vous. Chez Bianco, on sait faire ce qu'on fait — et ce qu'on fait, on le fait bien.
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

export default RehaussementCilsPage;
