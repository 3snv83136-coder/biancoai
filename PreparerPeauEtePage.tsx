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
      name: "Préparer sa peau pour l'été à Hyères — Soins avant saison | Bianco",
      description:
        "Préparez votre peau pour l'été à Hyères : gommage, hydratation, pose ongles, extensions cils. Institut Bianco Esthétique. Protocoles avant-saison sur rendez-vous.",
      url: `${SITE_URL}/preparer-peau-ete-hyeres`,
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
            name: "Préparer sa peau pour l'été à Hyères",
            item: `${SITE_URL}/preparer-peau-ete-hyeres`,
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
          name: "Quand faut-il commencer la préparation peau avant l'été ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "À Hyères, idéalement en mars-avril. Cela laisse 2 à 3 séances possibles avant les premières chaleurs. Commencer en mai est encore utile — mieux vaut tard que jamais.",
          },
        },
        {
          '@type': 'Question',
          name: "Peut-on faire une pose ongles gel avant des vacances à la mer ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, la pose gel est hydrofuge et résiste au sel, à l'eau et au sable. Évitez simplement de gratter les ongles dans le sable ou de les utiliser comme outils — c'est la seule précaution à avoir.",
          },
        },
        {
          '@type': 'Question',
          name: "Le peeling est-il conseillé avant l'été ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Un gommage enzymatique doux en mars-avril est excellent pour préparer la peau. En revanche, évitez les peelings acides forts (glycolique concentré) à partir de mai-juin — la peau sera plus sensible au soleil et les taches risquent de s'aggraver.",
          },
        },
        {
          '@type': 'Question',
          name: "Quels soins éviter pendant l'été ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Évitez les peelings chimiques forts, les soins à base de rétinol et les lasers pendant les fortes expositions solaires. En été, concentrez-vous sur l'hydratation, la protection et la douceur — les soins réparateurs attendent septembre.",
          },
        },
      ],
    },
  ],
};

const PreparerPeauEtePage: React.FC = () => {
  const phoneHref = `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    const prev = document.title;
    document.title = "Préparer sa peau pour l'été à Hyères — Soins avant saison | Bianco";
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute('content') ?? '';
    meta?.setAttribute(
      'content',
      "Préparez votre peau pour l'été à Hyères : gommage, hydratation, pose ongles, extensions cils. Institut Bianco Esthétique. Protocoles avant-saison sur rendez-vous."
    );
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}/preparer-peau-ete-hyeres`;
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
              { label: "Préparer sa peau pour l'été à Hyères" },
            ]} />

            <header className="mb-12">
              <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">
                Hyères — Beauté Avant l'Été
              </span>
              <h1 className="text-4xl md:text-5xl serif text-dark mb-6 leading-tight">
                Préparer sa peau pour l'été à Hyères&nbsp;: tout ce que fait Bianco avant la saison
              </h1>
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
                À Hyères, l'été commence dès avril. La saison balnéaire, les terrasses, les week-ends à Porquerolles — tout invite à se montrer sous son meilleur jour. Chez Bianco, le mois de mars-avril est notre période de préparation intensive&nbsp;: on prépare les peaux pour les mois à venir, et nos clientes repartent prêtes pour l'été.
              </p>
            </header>

            <section className="mb-12 bg-primary/5 border-l-4 border-primary px-6 py-5 rounded-r-2xl">
              <p className="text-dark text-sm md:text-base font-light leading-relaxed italic">
                Bianco Esthétique à Hyères recommande une préparation cutanée en 2 à 3 séances avant le début de la saison estivale (mars-avril dans le Var)&nbsp;: gommage enzymatique pour éliminer les cellules mortes accumulées en hiver, soin hydratant en profondeur pour restaurer la barrière cutanée, et pose d'ongles gel pour des mains et pieds parfaits dès la première sortie. Salomé Bianco insiste sur l'importance de la protection solaire SPF 50+ dès le début de la saison pour prévenir les taches et le photovieillissement précoce.
              </p>
            </section>

            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-3">
                Le programme pré-été de Bianco
              </h2>
              <p className="text-gray-500 font-light text-sm md:text-base mb-8">
                De mars à mai, voici les soins que Salomé recommande pour arriver dans l'été dans les meilleures conditions&nbsp;:
              </p>
              <div className="space-y-6">

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Soin visage préparation pré-été</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Un soin en deux étapes&nbsp;: exfoliation pour retirer les cellules mortes de l'hiver, puis hydratation intensive pour renforcer la barrière cutanée. La peau ainsi préparée bronzera plus uniformément et résistera mieux aux agressions estivales. Résultat immédiat&nbsp;: teint unifié, peau douce.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 75 € — 1h</p>
                  <Link
                    to="/soin-visage-eclat-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Voir le soin visage éclat →
                  </Link>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Pose ongles gel — pieds et mains</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Ongles des mains et des pieds parfaits dès la première sortie en sandales. Salomé propose des couleurs estivales, des effets chrome pour les soirées, et des finitions naturelles pour le quotidien. La pose gel tient tout l'été sans retouche hebdomadaire.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">Mains à partir de 52 € + pieds sur demande</p>
                  <Link
                    to="/pose-ongles-gel-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Voir la pose ongles gel →
                  </Link>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Extensions de cils avant l'été</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Un regard parfait sans mascara qui coule à la plage. Les extensions de cils sont particulièrement utiles en été — plus besoin de se maquiller les yeux, le regard reste intensif même après une baignade.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">70-80 € — 1h30 à 2h</p>
                  <Link
                    to="/extensions-cils-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Voir les extensions de cils →
                  </Link>
                </div>

              </div>
            </section>

            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-6">
                Les conseils de Salomé pour l'été à Hyères
              </h2>
              <div className="space-y-4">
                {[
                  "SPF 50+ quotidien dès avril — même nuageux, même en ville",
                  "Hydrater intensément les soirs d'après-soleil pour compenser la déshydratation",
                  "Éviter les soins exfoliants pendant les fortes chaleurs — attendez septembre",
                ].map((tip) => (
                  <div
                    key={tip}
                    className="bg-primary/5 border-l-2 border-primary rounded-xl px-4 py-3"
                  >
                    <p className="text-dark text-sm font-light leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-14">
              <blockquote className="bg-white rounded-2xl border border-gray-100 px-6 py-6">
                <p className="text-gray-500 font-light text-sm leading-relaxed italic mb-4">
                  "Je fais ma préparation été chez Bianco chaque année depuis 3 ans. Soin visage, pose ongles gel, extensions cils. Je pars en vacances la peau nette, les ongles parfaits et les yeux sublimés. C'est devenu mon rituel de saison."
                </p>
                <footer className="text-xs text-gray-400">— Aurélie M., Hyères, mai 2025</footer>
              </blockquote>
            </section>

            <section className="bg-dark text-white rounded-[2.5rem] px-8 py-10 mb-14">
              <h2 className="text-2xl md:text-3xl serif mb-4">Prenez votre rendez-vous préparation été</h2>
              <p className="text-gray-300 font-light text-sm mb-8">
                Mars-avril, les créneaux se remplissent vite avant la saison. Réservez maintenant pour garantir vos dates et arriver dans l'été parfaitement préparée.
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
                    q: "Quand faut-il commencer la préparation peau avant l'été ?",
                    a: "À Hyères, idéalement en mars-avril. Cela laisse 2 à 3 séances possibles avant les premières chaleurs. Commencer en mai est encore utile — mieux vaut tard que jamais.",
                  },
                  {
                    q: "Peut-on faire une pose ongles gel avant des vacances à la mer ?",
                    a: "Oui, la pose gel est hydrofuge et résiste au sel, à l'eau et au sable. Évitez simplement de gratter les ongles dans le sable ou de les utiliser comme outils — c'est la seule précaution à avoir.",
                  },
                  {
                    q: "Le peeling est-il conseillé avant l'été ?",
                    a: "Un gommage enzymatique doux en mars-avril est excellent pour préparer la peau. En revanche, évitez les peelings acides forts (glycolique concentré) à partir de mai-juin — la peau sera plus sensible au soleil et les taches risquent de s'aggraver.",
                  },
                  {
                    q: "Quels soins éviter pendant l'été ?",
                    a: "Évitez les peelings chimiques forts, les soins à base de rétinol et les lasers pendant les fortes expositions solaires. En été, concentrez-vous sur l'hydratation, la protection et la douceur — les soins réparateurs attendent septembre.",
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
                L'été à Hyères, c'est trop beau pour ne pas arriver prête. Chez Bianco, on prépare votre peau pour qu'elle soit à la hauteur de l'endroit où vous vivez.{' '}
                Et pour les soins de rentrée après l'été,{' '}
                <Link to="/soins-peau-apres-soleil-hyeres" className="text-primary font-semibold hover:underline">
                  découvrez notre programme post-soleil
                </Link>.
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

export default PreparerPeauEtePage;
