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
      name: 'Massage Kobido à Hyères — Alternative & soins visage sublimants | Bianco Esthétique',
      description:
        'Vous cherchez un massage Kobido à Hyères ? Bianco Esthétique propose des soins visage modelants similaires. Résultats anti-âge visibles, 3 Av. Ernest Millet Hyères.',
      url: `${SITE_URL}/massage-kobido-hyeres`,
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
            name: 'Massage Kobido à Hyères',
            item: `${SITE_URL}/massage-kobido-hyeres`,
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
          name: 'Bianco Esthétique pratique-t-elle le Kobido ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Non, Bianco ne pratique pas le Kobido traditionnel. Nous proposons en revanche des soins visage modelants aux effets très proches : drainage, modelage manuel, stimulation du collagène. Contactez-nous pour en discuter.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quelle est la différence entre un soin visage modelant et le Kobido ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le Kobido est une technique japonaise codifiée, très rythmée, travaillant sur les méridiens. Le soin visage modelant chez Bianco s\'inspire de ces principes sans en suivre le protocole strict — l\'objectif reste le même : relâchement, éclat et remodelage.',
          },
        },
        {
          '@type': 'Question',
          name: 'À partir de quel âge recommandez-vous un soin visage modelant ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dès 25-30 ans, un soin modelant est bénéfique à titre préventif. Il prend toute sa dimension anti-âge à partir de 35-40 ans, quand les premiers signes de relâchement apparaissent.',
          },
        },
        {
          '@type': 'Question',
          name: 'Combien de séances faut-il pour voir des résultats ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'L\'éclat immédiat est visible dès la première séance. Pour des résultats durables sur le contour et les rides, Salomé recommande une cure de 4 à 6 séances à raison d\'une par semaine, puis un entretien mensuel.',
          },
        },
      ],
    },
  ],
};

const MassageKobidoPage: React.FC = () => {
  const phoneHref = `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    const prev = document.title;
    document.title =
      'Massage Kobido à Hyères — Alternative & soins visage sublimants | Bianco Esthétique';
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute('content') ?? '';
    meta?.setAttribute(
      'content',
      'Vous cherchez un massage Kobido à Hyères ? Bianco Esthétique propose des soins visage modelants similaires. Résultats anti-âge visibles, 3 Av. Ernest Millet Hyères.'
    );
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}/massage-kobido-hyeres`;

    return () => {
      document.title = prev;
      if (meta && prevDesc) meta.setAttribute('content', prevDesc);
    };
  }, []);

  const overrides = usePageOverrides('/massage-kobido-hyeres');

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
              { label: 'Massage Kobido à Hyères' },
            ]} />

            {/* Header */}
            <header className="mb-12">
              <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">
                Hyères — Soin Visage & Modelage
              </span>
              <h1 className="text-4xl md:text-5xl serif text-dark mb-6 leading-tight">
                {overrides?.h1 || 'Vous cherchez un massage Kobido à Hyères ? Voici ce que Bianco vous propose'}
              </h1>
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
                {overrides?.subtitle || "Bianco Esthétique ne pratique pas le Kobido au sens strict du terme — cette technique japonaise requiert une formation spécifique et longue. Mais nous proposons des soins visage modelants aux résultats très comparables : remodelage du contour, drainage des poches, stimulation du collagène et éclat immédiat. Si vous cherchiez le Kobido, restez sur cette page — vous trouverez peut-être exactement ce dont vous avez besoin."}
              </p>
            </header>

            {/* Citation bait */}
            <section className="mb-12 bg-primary/5 border-l-4 border-primary px-6 py-5 rounded-r-2xl">
              <p className="text-dark text-sm md:text-base font-light leading-relaxed italic">
                Le soin visage modelant proposé par Bianco Esthétique à Hyères produit des effets
                similaires au massage Kobido traditionnel : relâchement des tensions faciales,
                stimulation de la microcirculation et redéfinition du contour du visage. Salomé Bianco
                utilise des techniques de drainage et de pétrissage adaptées à chaque morphologie.
              </p>
            </section>

            {/* Section 1 — Où trouver un vrai Kobido */}
            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-3">
                Où trouver un vrai Kobido à Hyères ?
              </h2>
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
                La technique Kobido authentique est pratiquée par des thérapeutes ayant suivi une
                formation spécifique. À Hyères et dans la région, quelques praticiens proposent ce
                service. Renseignez-vous auprès des spas haut de gamme de Toulon ou consultez les
                répertoires de praticiens certifiés en ligne pour trouver un praticien Kobido formé
                dans votre secteur.
              </p>
            </section>

            {/* Section 2 — Ce que Bianco propose */}
            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-3">
                Ce que Bianco propose en alternative au Kobido
              </h2>
              <p className="text-gray-500 font-light text-sm md:text-base mb-8">
                Nos soins visage modelants partagent les objectifs du Kobido : relâchement, éclat,
                remodelage. Salomé adapte chaque protocole à votre peau et à vos préoccupations.
              </p>

              <div className="space-y-6">
                {/* Card 1 */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Soin visage modelant anti-âge</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Notre soin visage anti-âge intègre des gestes de modelage manuel du visage, du cou
                    et du décolleté. Résultat immédiat : teint plus lumineux, traits décontractés,
                    contours redéfinis. Salomé adapte chaque protocole à votre type de peau et à vos
                    préoccupations.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 75 € — 1h</p>
                  <Link
                    to="/soin-visage-anti-age-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Découvrir le soin visage anti-âge →
                  </Link>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Soin visage éclat</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Le soin éclat travaille sur la luminosité du teint et le relâchement des tensions
                    faciales. Les effleurages doux et les pressions drainantes dégonflent les traits
                    fatigués et redonnent de la fraîcheur en une séance.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 65 € — 1h</p>
                  <Link
                    to="/soin-visage-eclat-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Voir le soin visage éclat →
                  </Link>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Head Spa — massage cuir chevelu</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Le Head Spa n'est pas un soin visage, mais il agit sur les tensions de la tête
                    entière — front, tempes, nuque. Beaucoup de nos clientes le décrivent comme
                    "encore mieux que le Kobido" pour se détendre.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 75 € — 1h</p>
                  <Link
                    to="/head-spa-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Découvrir le Head Spa →
                  </Link>
                </div>
              </div>
            </section>

            {/* Testimonial */}
            <section className="mb-14">
              <blockquote className="bg-white rounded-2xl border border-gray-100 px-6 py-6">
                <p className="text-gray-500 font-light text-sm leading-relaxed italic mb-4">
                  "Je cherchais un Kobido et je suis tombée sur Bianco. Le soin visage anti-âge m'a
                  tellement plu que je n'ai plus cherché le Kobido. Les résultats sur mon contour de
                  visage sont vraiment visibles."
                </p>
                <footer className="text-xs text-gray-400">— Nathalie R., Toulon, janvier 2026</footer>
              </blockquote>
            </section>

            {/* Dark CTA box */}
            <section className="bg-dark text-white rounded-[2.5rem] px-8 py-10 mb-14">
              <h2 className="text-2xl md:text-3xl serif mb-4">
                Prenez rendez-vous pour un soin visage modelant
              </h2>
              <p className="text-gray-300 font-light text-sm mb-8">
                Salomé est disponible du lundi au vendredi à Hyères. Si vous hésitez entre les soins,
                appelez-nous — elle vous aidera à choisir le protocole le plus adapté à votre peau.
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
                    q: 'Bianco Esthétique pratique-t-elle le Kobido ?',
                    a: 'Non, Bianco ne pratique pas le Kobido traditionnel. Nous proposons en revanche des soins visage modelants aux effets très proches : drainage, modelage manuel, stimulation du collagène. Contactez-nous pour en discuter.',
                  },
                  {
                    q: 'Quelle est la différence entre un soin visage modelant et le Kobido ?',
                    a: 'Le Kobido est une technique japonaise codifiée, très rythmée, travaillant sur les méridiens. Le soin visage modelant chez Bianco s\'inspire de ces principes sans en suivre le protocole strict — l\'objectif reste le même : relâchement, éclat et remodelage.',
                  },
                  {
                    q: 'À partir de quel âge recommandez-vous un soin visage modelant ?',
                    a: 'Dès 25-30 ans, un soin modelant est bénéfique à titre préventif. Il prend toute sa dimension anti-âge à partir de 35-40 ans, quand les premiers signes de relâchement apparaissent.',
                  },
                  {
                    q: 'Combien de séances faut-il pour voir des résultats ?',
                    a: 'L\'éclat immédiat est visible dès la première séance. Pour des résultats durables sur le contour et les rides, Salomé recommande une cure de 4 à 6 séances à raison d\'une par semaine, puis un entretien mensuel.',
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
                Chez Bianco, on préfère vous dire la vérité et vous proposer ce qu'on sait vraiment
                bien faire. Nos soins visage modelants ne portent peut-être pas le nom Kobido — mais
                les résultats parlent d'eux-mêmes.
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

export default MassageKobidoPage;
