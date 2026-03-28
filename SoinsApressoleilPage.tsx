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
      name: 'Soins peau après soleil à Hyères — Réparation & éclat | Bianco',
      description:
        'Soins visage et corps après exposition au soleil à Hyères. Réhydratation, réparation, unification du teint. Institut Bianco Esthétique. Sur rendez-vous.',
      url: `${SITE_URL}/soins-peau-apres-soleil-hyeres`,
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
            name: 'Soins peau après soleil à Hyères',
            item: `${SITE_URL}/soins-peau-apres-soleil-hyeres`,
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
          name: "Peut-on faire un soin visage juste après l'été ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, dès la fin des fortes expositions solaires (fin août/septembre à Hyères). Attendez 48-72h après une journée de plage intense. Les soins réparateurs sont idéalement réalisés en septembre-octobre.",
          },
        },
        {
          '@type': 'Question',
          name: "Comment atténuer les taches brunes après l'été ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Les actifs dépigmentants (AHA, niacinamide, vitamine C) sont les plus efficaces sur les taches solaires superficielles. Salomé propose un protocole peeling doux progressif sur 2 à 3 séances. La protection solaire quotidienne est indispensable en parallèle pour éviter la reformation des taches.",
          },
        },
        {
          '@type': 'Question',
          name: "La peau bronzée supporte-t-elle l'exfoliation ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, avec les bonnes formulations. L'exfoliation enzymatique est plus douce que le gommage mécanique sur une peau fraîchement bronzée. Salomé adapte la concentration selon l'intensité du bronzage.",
          },
        },
        {
          '@type': 'Question',
          name: "Faut-il continuer la protection solaire en automne à Hyères ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, même en automne dans le Var. L'indice UV reste significatif jusqu'en novembre. Pour les peaux en cure anti-taches, le SPF 50+ quotidien est non-négociable — sans ça, les taches se reforment aussi vite qu'elles s'atténuent.",
          },
        },
      ],
    },
  ],
};

const SoinsApressoleilPage: React.FC = () => {
  const phoneHref = `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    const prev = document.title;
    document.title = 'Soins peau après soleil à Hyères — Réparation & éclat | Bianco';
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute('content') ?? '';
    meta?.setAttribute(
      'content',
      'Soins visage et corps après exposition au soleil à Hyères. Réhydratation, réparation, unification du teint. Institut Bianco Esthétique. Sur rendez-vous.'
    );
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}/soins-peau-apres-soleil-hyeres`;
    return () => {
      document.title = prev;
      if (meta && prevDesc) meta.setAttribute('content', prevDesc);
    };
  }, []);

  const overrides = usePageOverrides('/soins-peau-apres-soleil-hyeres');

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
              { label: 'Soins peau après soleil à Hyères' },
            ]} />

            <header className="mb-12">
              <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">
                Hyères — Soins Après Soleil &amp; Réparation
              </span>
              <h1 className="text-4xl md:text-5xl serif text-dark mb-6 leading-tight">
                {overrides?.h1 || "Soins peau après soleil à Hyères\u00a0: réparer, hydrater, retrouver l'éclat"}
              </h1>
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
                {overrides?.subtitle || "L'été dans le Var, c'est magnifique — et brutal pour la peau. Soleil intense, eau salée, chlore, chaleur\u00a0: la peau encaisse. En septembre, beaucoup de nos clientes nous arrivent avec une peau déshydratée, le teint irrégulier, parfois des taches brunes naissantes. C'est le bon moment pour une cure de réparation intensive."}
              </p>
            </header>

            <section className="mb-12 bg-primary/5 border-l-4 border-primary px-6 py-5 rounded-r-2xl">
              <p className="text-dark text-sm md:text-base font-light leading-relaxed italic">
                À Hyères et dans le Var, la saison solaire dure 6 mois minimum avec un indice UV parmi les plus élevés de France. Bianco Esthétique observe en fin d'été un afflux de clientes présentant une déshydratation cutanée avancée, des taches de photovieillissement naissantes et un teint irrégulier. Salomé Bianco a développé un protocole post-été spécifique combinant réhydratation profonde, exfoliation enzymatique douce et sérum unificateur pour restaurer l'éclat en 1 à 2 séances.
              </p>
            </section>

            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-3">
                Les soins post-soleil chez Bianco
              </h2>
              <p className="text-gray-500 font-light text-sm md:text-base mb-8">
                Selon l'état de votre peau en fin de saison, Salomé recommande&nbsp;:
              </p>
              <div className="space-y-6">

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Soin visage réhydratation intensive</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Le soleil déshydrate les couches profondes de l'épiderme. Ce soin commence par un nettoyage pour retirer les résidus (crème solaire, sel, sébum accumulé), suivi d'un masque hyaluronique haute concentration et d'un massage drainant pour activer la microcirculation. Résultat&nbsp;: peau repulpée, teint régénéré.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 70 € — 1h</p>
                  <Link
                    to="/soin-visage-eclat-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Voir le soin éclat →
                  </Link>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Peeling doux anti-taches</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Les taches brunes apparaissent après l'été — les AHA (acide glycolique, acide lactique) accélèrent le renouvellement cellulaire et atténuent progressivement les taches de photovieillissement. À réaliser en septembre-octobre, quand les expositions solaires diminuent.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 80 € — 1h15</p>
                  <Link
                    to="/soin-visage-anti-age-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Voir le soin anti-âge →
                  </Link>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Drainage corps après l'été</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    L'été fatigue aussi le corps&nbsp;: rétention d'eau, jambes lourdes, cellulite exacerbée par la chaleur. Un drainage lymphatique en septembre remet tout à sa place et prépare la peau à l'automne.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">85-115 € selon la formule</p>
                  <Link
                    to="/drainage-lymphatique-jambes-lourdes-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Voir le drainage →
                  </Link>
                </div>

              </div>
            </section>

            <section className="mb-14">
              <blockquote className="bg-white rounded-2xl border border-gray-100 px-6 py-6">
                <p className="text-gray-500 font-light text-sm leading-relaxed italic mb-4">
                  "Après l'été à Hyères, ma peau était méconnaissable. Une cure de 2 soins visage chez Bianco en septembre-octobre et je suis repartie de zéro. Le teint unifié, les taches estompées, la peau repulpée. Bianco, c'est mon rituel de rentrée."
                </p>
                <footer className="text-xs text-gray-400">— Madeleine B., Hyères, octobre 2025</footer>
              </blockquote>
            </section>

            <section className="bg-dark text-white rounded-[2.5rem] px-8 py-10 mb-14">
              <h2 className="text-2xl md:text-3xl serif mb-4">Offrez à votre peau le soin de rentrée qu'elle mérite</h2>
              <p className="text-gray-300 font-light text-sm mb-8">
                Septembre et octobre sont les mois idéaux pour les soins réparateurs après soleil — l'exposition diminue, la peau peut se régénérer sans stress UV supplémentaire. Réservez maintenant votre cure de rentrée.
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
                    q: "Peut-on faire un soin visage juste après l'été ?",
                    a: "Oui, dès la fin des fortes expositions solaires (fin août/septembre à Hyères). Attendez 48-72h après une journée de plage intense. Les soins réparateurs sont idéalement réalisés en septembre-octobre.",
                  },
                  {
                    q: "Comment atténuer les taches brunes après l'été ?",
                    a: "Les actifs dépigmentants (AHA, niacinamide, vitamine C) sont les plus efficaces sur les taches solaires superficielles. Salomé propose un protocole peeling doux progressif sur 2 à 3 séances. La protection solaire quotidienne est indispensable en parallèle pour éviter la reformation des taches.",
                  },
                  {
                    q: "La peau bronzée supporte-t-elle l'exfoliation ?",
                    a: "Oui, avec les bonnes formulations. L'exfoliation enzymatique est plus douce que le gommage mécanique sur une peau fraîchement bronzée. Salomé adapte la concentration selon l'intensité du bronzage.",
                  },
                  {
                    q: "Faut-il continuer la protection solaire en automne à Hyères ?",
                    a: "Oui, même en automne dans le Var. L'indice UV reste significatif jusqu'en novembre. Pour les peaux en cure anti-taches, le SPF 50+ quotidien est non-négociable — sans ça, les taches se reforment aussi vite qu'elles s'atténuent.",
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
                L'été mérite d'être profité sans culpabilité. Ce qui suit mérite d'être réparé avec soin. Chez Bianco, on s'occupe de l'après pour que votre peau reste belle toute l'année.
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

export default SoinsApressoleilPage;
