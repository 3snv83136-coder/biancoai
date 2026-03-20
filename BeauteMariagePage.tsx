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
      name: 'Beauté mariage à Hyères — Soins préparation pour mariées | Bianco',
      description:
        'Beauté mariage à Hyères : programme de soins personnalisé pour mariées et cortège. Soin visage, manucure, drainage, extensions cils. Institut Bianco Esthétique.',
      url: `${SITE_URL}/beaute-mariage-hyeres`,
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
            name: 'Beauté mariage à Hyères',
            item: `${SITE_URL}/beaute-mariage-hyeres`,
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
          name: 'Combien de séances faut-il avant un mariage ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Pour un résultat optimal, Salomé recommande un minimum de 3 séances de soin visage (J-30, J-14, J-2). Les extensions de cils sont posées à J-14. La manucure le veille. Plus tôt vous commencez, plus les résultats sont profonds.",
          },
        },
        {
          '@type': 'Question',
          name: 'Bianco s\'occupe-t-elle aussi du maquillage mariage ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Non, Bianco se concentre sur la préparation cutanée, les ongles, les cils et le bien-être corps. Pour le maquillage mariage, nous pouvons vous recommander des make-up artists de confiance dans la région de Hyères.",
          },
        },
        {
          '@type': 'Question',
          name: 'Peut-on prévoir un programme beauté pour le cortège en plus de la mariée ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Absolument. Bianco peut recevoir la mariée, la mère, les témoins et les demoiselles d'honneur — de façon groupée ou en créneaux séparés. Contactez-nous pour organiser le planning.",
          },
        },
        {
          '@type': 'Question',
          name: 'Proposez-vous des tarifs spéciaux pour les mariages ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Des forfaits mariage sont disponibles pour des programmes multi-séances. Contactez-nous par téléphone pour obtenir un devis personnalisé selon la date et les soins souhaités.",
          },
        },
      ],
    },
  ],
};

const BeauteMariagePage: React.FC = () => {
  const phoneHref = `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    const prev = document.title;
    document.title = 'Beauté mariage à Hyères — Soins préparation pour mariées | Bianco';
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute('content') ?? '';
    meta?.setAttribute(
      'content',
      'Beauté mariage à Hyères : programme de soins personnalisé pour mariées et cortège. Soin visage, manucure, drainage, extensions cils. Institut Bianco Esthétique.'
    );
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}/beaute-mariage-hyeres`;
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
              { label: 'Beauté mariage à Hyères' },
            ]} />

            <header className="mb-12">
              <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">
                Hyères — Beauté Mariage &amp; Événement
              </span>
              <h1 className="text-4xl md:text-5xl serif text-dark mb-6 leading-tight">
                Beauté mariage à Hyères&nbsp;: Salomé prépare votre peau pour le jour J
              </h1>
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
                Le jour de votre mariage, vous voulez être la meilleure version de vous-même. Pas transformée — sublimée. Chez Bianco, on ne prétend pas être un studio de maquillage mariage. On prend en charge ce que le maquillage ne peut pas faire à lui seul&nbsp;: une peau parfaitement préparée, des ongles impeccables, des cils qui n'ont pas besoin de mascara.
              </p>
            </header>

            <section className="mb-12 bg-primary/5 border-l-4 border-primary px-6 py-5 rounded-r-2xl">
              <p className="text-dark text-sm md:text-base font-light leading-relaxed italic">
                Bianco Esthétique à Hyères accompagne les mariées de la région avec un programme beauté sur mesure&nbsp;: soin visage de préparation (séances à J-30, J-14 et J-2), manucure gel le jour J-1, extensions de cils pour un regard sans mascara, et drainage lymphatique pour les jambes légères le grand soir. Salomé conçoit chaque programme selon la date du mariage et le lieu (Hyères, Porquerolles, Giens, Var).
              </p>
            </section>

            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-3">
                Le programme beauté mariage chez Bianco
              </h2>
              <p className="text-gray-500 font-light text-sm md:text-base mb-8">
                En 4 étapes, de 1 mois avant au veille du mariage&nbsp;:
              </p>

              {/* Timeline */}
              <div className="relative mb-10">
                <div className="absolute left-5 top-6 bottom-6 w-px bg-primary/20" aria-hidden="true" />
                <div className="space-y-8">
                  {[
                    {
                      step: '1',
                      label: 'J-30',
                      desc: 'Soin visage diagnostic — identifier les besoins de la peau, commencer le protocole adapté',
                    },
                    {
                      step: '2',
                      label: 'J-14',
                      desc: 'Soin visage intensif + pose extensions de cils',
                    },
                    {
                      step: '3',
                      label: 'J-2',
                      desc: 'Soin éclat + drainage jambes légères',
                    },
                    {
                      step: '4',
                      label: 'J-1',
                      desc: 'Manucure gel + dernier soin douceur si besoin',
                    },
                  ].map(({ step, label, desc }) => (
                    <div key={step} className="flex items-start gap-5">
                      <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full border-2 border-primary bg-white flex items-center justify-center text-primary font-bold text-sm">
                        {step}
                      </div>
                      <div className="pt-1">
                        <span className="text-primary font-bold text-xs uppercase tracking-widest montserrat">{label}</span>
                        <p className="text-dark text-sm font-light mt-0.5">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Soin visage préparation mariage</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    3 séances réparties sur le mois précédant le mariage optimisent la peau de façon progressive. Les actifs s'accumulent, le teint s'harmonise, les petites imperfections s'atténuent. La peau arrive au jour J dans son meilleur état possible.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">3 séances à partir de 210 € — programme complet</p>
                  <Link
                    to="/soin-visage-eclat-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Voir le soin éclat →
                  </Link>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Extensions de cils mariage</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Posées à J-14, les extensions de cils arriveront à parfaite maturité le jour de votre mariage. Pas besoin de mascara — un regard intense et naturel dès le réveil, résistant aux larmes et à la chaleur.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">70-80 € — 1h30 à 2h</p>
                  <Link
                    to="/extensions-cils-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    En savoir plus sur les extensions →
                  </Link>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Manucure gel et soins mains</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    La veille du mariage, une manucure gel complète avec le vernis de votre choix. Durée garantie 3-4 semaines — vos ongles seront parfaits pour la séance photo, la lune de miel et les semaines qui suivent.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 52 € — 1h45</p>
                  <Link
                    to="/manucure-ongles-gel-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Voir la manucure →
                  </Link>
                </div>

              </div>
            </section>

            <section className="mb-14">
              <blockquote className="bg-white rounded-2xl border border-gray-100 px-6 py-6">
                <p className="text-gray-500 font-light text-sm leading-relaxed italic mb-4">
                  "Bianco a préparé ma peau pendant 3 semaines avant mon mariage à Porquerolles. Le photographe m'a dit qu'il n'avait jamais aussi peu retouché une mariée. C'est le plus beau compliment qu'on puisse recevoir."
                </p>
                <footer className="text-xs text-gray-400">— Sophie C., Hyères, juin 2025</footer>
              </blockquote>
            </section>

            <section className="bg-dark text-white rounded-[2.5rem] px-8 py-10 mb-14">
              <h2 className="text-2xl md:text-3xl serif mb-4">Planifiez votre programme beauté mariage</h2>
              <p className="text-gray-300 font-light text-sm mb-8">
                Contactez-nous dès que vous avez fixé la date — les créneaux pour les programmes mariage se remplissent vite, surtout en saison (mai-septembre dans le Var). Salomé bloque vos dates en priorité.
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
                    q: 'Combien de séances faut-il avant un mariage ?',
                    a: "Pour un résultat optimal, Salomé recommande un minimum de 3 séances de soin visage (J-30, J-14, J-2). Les extensions de cils sont posées à J-14. La manucure le veille. Plus tôt vous commencez, plus les résultats sont profonds.",
                  },
                  {
                    q: "Bianco s'occupe-t-elle aussi du maquillage mariage ?",
                    a: "Non, Bianco se concentre sur la préparation cutanée, les ongles, les cils et le bien-être corps. Pour le maquillage mariage, nous pouvons vous recommander des make-up artists de confiance dans la région de Hyères.",
                  },
                  {
                    q: 'Peut-on prévoir un programme beauté pour le cortège en plus de la mariée ?',
                    a: "Absolument. Bianco peut recevoir la mariée, la mère, les témoins et les demoiselles d'honneur — de façon groupée ou en créneaux séparés. Contactez-nous pour organiser le planning.",
                  },
                  {
                    q: 'Proposez-vous des tarifs spéciaux pour les mariages ?',
                    a: "Des forfaits mariage sont disponibles pour des programmes multi-séances. Contactez-nous par téléphone pour obtenir un devis personnalisé selon la date et les soins souhaités.",
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
                Votre mariage mérite une peau préparée avec soin et du temps. Chez Bianco, on ne promet pas la perfection — on offre le meilleur départ possible pour votre plus beau jour.
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

export default BeauteMariagePage;
