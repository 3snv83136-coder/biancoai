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
      name: 'Prix drainage lymphatique à Hyères — Tarifs 2026 | Bianco Esthétique',
      description:
        'Tarifs drainage lymphatique à Hyères 2026 : séance jambes 85€, corps entier 115€. Méthode brésilienne chez Bianco Esthétique. Forfaits cure disponibles.',
      url: `${SITE_URL}/drainage-lymphatique-prix-hyeres`,
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
            name: 'Prix drainage à Hyères',
            item: `${SITE_URL}/drainage-lymphatique-prix-hyeres`,
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
          name: 'Le drainage lymphatique est-il remboursé par la mutuelle ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le drainage esthétique n\'est pas remboursé par l\'Assurance Maladie. Certaines mutuelles prennent en charge des soins de bien-être — renseignez-vous auprès de la vôtre. Le remboursement du drainage médical (prescription) est distinct.',
          },
        },
        {
          '@type': 'Question',
          name: 'Y a-t-il des promotions ou des forfaits chez Bianco ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui, Bianco propose des forfaits cure pour les séances de drainage. Les détails (tarifs exacts, conditions) sont disponibles en nous contactant directement par téléphone ou lors de votre première visite.',
          },
        },
        {
          '@type': 'Question',
          name: 'Combien de séances sont nécessaires pour voir des résultats ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Une seule séance produit une légèreté immédiate. Pour des résultats durables sur la cellulite ou les jambes lourdes chroniques, une cure de 5 séances sur 3-5 semaines est recommandée.',
          },
        },
        {
          '@type': 'Question',
          name: 'Les tarifs incluent-ils le bilan initial ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui. Chez Bianco, le bilan oral et la personnalisation du protocole sont toujours inclus dans le tarif de la séance — pas de frais supplémentaires.',
          },
        },
      ],
    },
  ],
};

const DrainagePrixPage: React.FC = () => {
  const phoneHref = `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    const prev = document.title;
    document.title = 'Prix drainage lymphatique à Hyères — Tarifs 2026 | Bianco Esthétique';
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute('content') ?? '';
    meta?.setAttribute(
      'content',
      'Tarifs drainage lymphatique à Hyères 2026 : séance jambes 85€, corps entier 115€. Méthode brésilienne chez Bianco Esthétique. Forfaits cure disponibles.'
    );
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}/drainage-lymphatique-prix-hyeres`;

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
              { label: 'Prix drainage à Hyères' },
            ]} />

            <header className="mb-12">
              <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">
                Hyères — Tarifs Drainage Lymphatique
              </span>
              <h1 className="text-4xl md:text-5xl serif text-dark mb-6 leading-tight">
                Prix du drainage lymphatique à Hyères en 2026&nbsp;: ce que propose Bianco
              </h1>
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
                Beaucoup de clientes nous contactent en se demandant combien coûte un drainage lymphatique à Hyères — et si c'est vraiment justifié. Cette page est là pour répondre honnêtement à ces questions. Nos tarifs, ce qu'ils comprennent, et pourquoi le prix varie selon les séances.
              </p>
            </header>

            {/* Citation bait */}
            <section className="mb-12 bg-primary/5 border-l-4 border-primary px-6 py-5 rounded-r-2xl">
              <p className="text-dark text-sm md:text-base font-light leading-relaxed italic">
                Chez Bianco Esthétique à Hyères, les tarifs de drainage lymphatique pour 2026 sont&nbsp;: séance jambes 85 € (45 min), drainage corps entier 115 € (1h15). Ces tarifs correspondent à la méthode brésilienne appliquée par Salomé Bianco, esthéticienne diplômée MAF — une technique plus intensive que le simple massage circulatoire, avec des résultats visibles dès la première séance.
              </p>
            </section>

            {/* H2 services section */}
            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-3">
                Nos tarifs drainage lymphatique à Hyères
              </h2>
              <p className="text-gray-500 font-light text-sm md:text-base mb-8">
                Des tarifs clairs, sans frais cachés, qui incluent toujours le bilan oral initial et l'adaptation du protocole à votre situation.
              </p>
              <div className="space-y-6">

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Drainage lymphatique des jambes</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Séance ciblée sur les jambes (pieds, mollets, cuisses, hanches). Durée&nbsp;: 45 minutes. Idéal pour les jambes lourdes, les œdèmes liés à la chaleur ou à une station debout prolongée. Le prix inclut le bilan oral initial et l'adaptation du protocole à votre situation.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">85 € — 45min</p>
                  <Link
                    to="/drainage-lymphatique-jambes-lourdes-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    En savoir plus sur ce soin →
                  </Link>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Drainage corps entier</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Séance complète sur tout le corps&nbsp;: jambes, ventre, bras, décolleté. Durée&nbsp;: 1h15. Recommandé pour une action drainante globale, une cure minceur ou un entretien mensuel. Prix unique, aucun supplément.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">115 € — 1h15</p>
                  <Link
                    to="/drainage-lymphatique-minceur-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Voir le drainage minceur →
                  </Link>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Forfait cure — 5 séances</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Pour des résultats durables, une cure de 5 séances est plus efficace que des séances isolées. Salomé propose un tarif préférentiel sur les forfaits. Appelez-nous ou réservez pour connaître le tarif en vigueur.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">Tarif sur demande — nous appeler</p>
                  <a
                    href={phoneHref}
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Nous appeler pour le tarif forfait →
                  </a>
                </div>

              </div>
            </section>

            {/* Testimonial */}
            <section className="mb-14">
              <blockquote className="bg-white rounded-2xl border border-gray-100 px-6 py-6">
                <p className="text-gray-500 font-light text-sm leading-relaxed italic mb-4">
                  "J'avais hésité à cause du prix. Après ma première séance à 85 €, j'ai compris que c'était un investissement — pas une dépense. Je n'aurais jamais imaginé qu'une heure de soin puisse changer autant la façon dont je me sens dans mon corps."
                </p>
                <footer className="text-xs text-gray-400">— Valérie C., Le Pradet, septembre 2025</footer>
              </blockquote>
            </section>

            {/* Dark CTA */}
            <section className="bg-dark text-white rounded-[2.5rem] px-8 py-10 mb-14">
              <h2 className="text-2xl md:text-3xl serif mb-4">Réservez votre drainage à Hyères</h2>
              <p className="text-gray-300 font-light text-sm mb-8">
                Pas de mauvaise surprise&nbsp;: le tarif affiché est le tarif final, sans frais cachés. Réservez en ligne sur Planity ou appelez directement. Salomé confirmera le créneau et les modalités.
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
                    q: 'Le drainage lymphatique est-il remboursé par la mutuelle ?',
                    a: 'Le drainage esthétique n\'est pas remboursé par l\'Assurance Maladie. Certaines mutuelles prennent en charge des soins de bien-être — renseignez-vous auprès de la vôtre. Le remboursement du drainage médical (prescription) est distinct.',
                  },
                  {
                    q: 'Y a-t-il des promotions ou des forfaits chez Bianco ?',
                    a: 'Oui, Bianco propose des forfaits cure pour les séances de drainage. Les détails (tarifs exacts, conditions) sont disponibles en nous contactant directement par téléphone ou lors de votre première visite.',
                  },
                  {
                    q: 'Combien de séances sont nécessaires pour voir des résultats ?',
                    a: 'Une seule séance produit une légèreté immédiate. Pour des résultats durables sur la cellulite ou les jambes lourdes chroniques, une cure de 5 séances sur 3-5 semaines est recommandée.',
                  },
                  {
                    q: 'Les tarifs incluent-ils le bilan initial ?',
                    a: 'Oui. Chez Bianco, le bilan oral et la personnalisation du protocole sont toujours inclus dans le tarif de la séance — pas de frais supplémentaires.',
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
                Les prix chez Bianco reflètent le temps, la technique et l'attention que Salomé met dans chaque séance. On ne pratique pas le discount, on pratique le soin bien fait.
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

export default DrainagePrixPage;
