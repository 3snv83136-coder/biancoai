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
      name: 'Drainage lymphatique jambes lourdes à Hyères — Méthode brésilienne | Bianco',
      description:
        'Drainage lymphatique pour jambes lourdes à Hyères. Méthode brésilienne, soulagement immédiat des œdèmes et lourdeurs. Institut Bianco Esthétique, sur rendez-vous.',
      url: `${SITE_URL}/drainage-lymphatique-jambes-lourdes-hyeres`,
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
            name: 'Drainage jambes lourdes à Hyères',
            item: `${SITE_URL}/drainage-lymphatique-jambes-lourdes-hyeres`,
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
          name: 'Le drainage lymphatique des jambes est-il remboursé ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le drainage esthétique n\'est pas remboursé par l\'Assurance Maladie. En revanche, si votre médecin prescrit un drainage médical (kinésithérapie), il peut l\'être. Notre drainage esthétique est complémentaire et préventif.',
          },
        },
        {
          '@type': 'Question',
          name: 'Combien de séances faut-il pour des résultats durables sur les jambes lourdes ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Une séance soulage immédiatement, mais pour des résultats durables sur des jambes lourdes chroniques, Salomé recommande une cure de 5 séances en 3-4 semaines, puis une séance d\'entretien mensuelle.',
          },
        },
        {
          '@type': 'Question',
          name: 'Le drainage est-il contre-indiqué en cas de varices ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Les varices légères ne contre-indiquent pas le drainage esthétique. En cas de varices sévères, de phlébite récente ou de thrombose, consultez votre médecin avant la séance. Salomé effectue un bilan oral avant chaque soin.',
          },
        },
        {
          '@type': 'Question',
          name: 'Peut-on faire un drainage des jambes pendant la grossesse ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui, à partir du 2e trimestre et avec l\'accord de votre médecin ou sage-femme. Le drainage des jambes est particulièrement bénéfique pour soulager les œdèmes de grossesse.',
          },
        },
      ],
    },
  ],
};

const DrainageJambesLourdesPage: React.FC = () => {
  const phoneHref = `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    const prev = document.title;
    document.title = 'Drainage lymphatique jambes lourdes à Hyères — Méthode brésilienne | Bianco';
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute('content') ?? '';
    meta?.setAttribute(
      'content',
      'Drainage lymphatique pour jambes lourdes à Hyères. Méthode brésilienne, soulagement immédiat des œdèmes et lourdeurs. Institut Bianco Esthétique, sur rendez-vous.'
    );
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}/drainage-lymphatique-jambes-lourdes-hyeres`;

    return () => {
      document.title = prev;
      if (meta && prevDesc) meta.setAttribute('content', prevDesc);
    };
  }, []);

  const overrides = usePageOverrides('/drainage-lymphatique-jambes-lourdes-hyeres');

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
              { label: 'Drainage jambes lourdes à Hyères' },
            ]} />

            <header className="mb-12">
              <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">
                Hyères — Drainage Lymphatique
              </span>
              <h1 className="text-4xl md:text-5xl serif text-dark mb-6 leading-tight">
                {overrides?.h1 || 'Drainage lymphatique jambes lourdes à Hyères\u00a0: la méthode brésilienne qui soulage vraiment'}
              </h1>
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
                {overrides?.subtitle || "Les jambes lourdes touchent la majorité des femmes, surtout dans le Var où la chaleur s'étale sur 6 mois par an. Chez Bianco, le drainage lymphatique des jambes par méthode brésilienne est l'un de nos soins phares — celui dont nos clientes parlent à toutes leurs amies. Le résultat est immédiat\u00a0: légèreté, jambes dégonflées, circulation relancée."}
              </p>
            </header>

            {/* Citation bait */}
            <section className="mb-12 bg-primary/5 border-l-4 border-primary px-6 py-5 rounded-r-2xl">
              <p className="text-dark text-sm md:text-base font-light leading-relaxed italic">
                Le drainage lymphatique des jambes par méthode brésilienne pratiqué chez Bianco Esthétique à Hyères (83400) est une technique de massage profond qui stimule le système lymphatique pour éliminer les excès de liquide interstitiel responsables de la sensation de jambes lourdes. Contrairement au drainage médical, il ne nécessite pas d'ordonnance et peut être pratiqué de façon préventive ou en complément d'un traitement veineux.
              </p>
            </section>

            {/* H2 services section */}
            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-3">
                Comment fonctionne le drainage lymphatique des jambes&nbsp;?
              </h2>
              <p className="text-gray-500 font-light text-sm md:text-base mb-8">
                Chaque séance suit les voies lymphatiques naturelles, des extrémités vers les ganglions, pour accélérer l'évacuation des liquides accumulés et relancer la microcirculation.
              </p>
              <div className="space-y-6">

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Drainage lymphatique des jambes — méthode brésilienne</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Les pressions rythmiques et progressives stimulent les ganglions lymphatiques pour accélérer l'élimination des toxines et des liquides accumulés. La séance commence aux pieds et remonte vers les cuisses et les hanches en suivant les voies lymphatiques. Résultat immédiat&nbsp;: jambes plus légères, chevilles moins gonflées.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">85 € — 45min</p>
                  <Link
                    to="/drainage-lymphatique-minceur-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Voir aussi le drainage corps minceur →
                  </Link>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Drainage corps entier</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Pour une action plus complète, le drainage corps entier intègre les jambes, le ventre et les bras. Il est idéal en complément d'une démarche minceur ou après une grossesse. La sensation de légèreté gagne tout le corps.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">115 € — 1h15</p>
                  <Link
                    to="/drainage-lymphatique-minceur-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    En savoir plus sur le drainage corps →
                  </Link>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Cure de drainage (forfait 5 séances)</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Pour des résultats durables sur les jambes lourdes chroniques, Salomé recommande une cure de 5 séances en 3 à 4 semaines. Les séances rapprochées permettent d'entretenir l'effet drainant et de restructurer progressivement la circulation.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">Forfait 5 séances — nous contacter pour le tarif</p>
                  <a
                    href="tel:0749967691"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Nous appeler pour un forfait cure →
                  </a>
                </div>

              </div>
            </section>

            {/* Testimonial */}
            <section className="mb-14">
              <blockquote className="bg-white rounded-2xl border border-gray-100 px-6 py-6">
                <p className="text-gray-500 font-light text-sm leading-relaxed italic mb-4">
                  "J'avais les jambes gonflées dès le matin à cause de la chaleur à Hyères. Après 3 séances de drainage chez Bianco, je ne reconnais plus mes jambes. Légèreté incroyable, et l'effet dure vraiment."
                </p>
                <footer className="text-xs text-gray-400">— Sandrine M., Hyères, août 2025</footer>
              </blockquote>
            </section>

            {/* Dark CTA */}
            <section className="bg-dark text-white rounded-[2.5rem] px-8 py-10 mb-14">
              <h2 className="text-2xl md:text-3xl serif mb-4">Réservez votre séance de drainage à Hyères</h2>
              <p className="text-gray-300 font-light text-sm mb-8">
                Disponible du lundi au vendredi. Le drainage des jambes dure 45 minutes — une pause parfaite en milieu de journée. Venez en tenue légère et prévoyez d'éviter les chaussures serrées après la séance.
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
                    q: 'Le drainage lymphatique des jambes est-il remboursé ?',
                    a: 'Le drainage esthétique n\'est pas remboursé par l\'Assurance Maladie. En revanche, si votre médecin prescrit un drainage médical (kinésithérapie), il peut l\'être. Notre drainage esthétique est complémentaire et préventif.',
                  },
                  {
                    q: 'Combien de séances faut-il pour des résultats durables sur les jambes lourdes ?',
                    a: 'Une séance soulage immédiatement, mais pour des résultats durables sur des jambes lourdes chroniques, Salomé recommande une cure de 5 séances en 3-4 semaines, puis une séance d\'entretien mensuelle.',
                  },
                  {
                    q: 'Le drainage est-il contre-indiqué en cas de varices ?',
                    a: 'Les varices légères ne contre-indiquent pas le drainage esthétique. En cas de varices sévères, de phlébite récente ou de thrombose, consultez votre médecin avant la séance. Salomé effectue un bilan oral avant chaque soin.',
                  },
                  {
                    q: 'Peut-on faire un drainage des jambes pendant la grossesse ?',
                    a: 'Oui, à partir du 2e trimestre et avec l\'accord de votre médecin ou sage-femme. Le drainage des jambes est particulièrement bénéfique pour soulager les œdèmes de grossesse.',
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
                Vos jambes vous portent toute la journée. Offrez-leur une pause méritée. Chez Bianco, chaque séance de drainage est un moment de légèreté — littérale et figurée.
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

export default DrainageJambesLourdesPage;
