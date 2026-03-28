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
      name: 'Massage dos et nuque à Hyères — Soulagement des tensions | Bianco Esthétique',
      description:
        'Massage dos et nuque ciblé à Hyères. Soulage les contractures, tensions cervicales et douleurs dorsales. Institut Bianco Esthétique, sur rendez-vous du lundi au vendredi.',
      url: `${SITE_URL}/massage-dos-nuque-hyeres`,
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
            name: 'Massage dos & nuque à Hyères',
            item: `${SITE_URL}/massage-dos-nuque-hyeres`,
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
          name: 'Le massage dos est-il efficace contre les contractures chroniques ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui, mais une seule séance ne suffit pas toujours pour des contractures anciennes. Salomé recommande 2 à 3 séances rapprochées (toutes les 10-15 jours) pour un résultat durable. Elle vous conseillera également sur les postures à éviter.',
          },
        },
        {
          '@type': 'Question',
          name: 'Peut-on faire un massage dos si on souffre de hernie discale ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'En cas de hernie discale diagnostiquée, il est impératif d\'avoir l\'accord de votre médecin ou kinésithérapeute avant une séance de massage. Salomé travaille avec des pressions légères adaptées mais ne peut se substituer à un avis médical.',
          },
        },
        {
          '@type': 'Question',
          name: 'Combien coûte un massage dos et nuque à Hyères ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Chez Bianco Esthétique, le massage dos et nuque est à partir de 50 € pour une séance de 45 minutes. Les tarifs complets sont disponibles sur notre page Tarifs.',
          },
        },
        {
          '@type': 'Question',
          name: 'Où se trouve l\'institut Bianco à Hyères ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bianco Esthétique est situé au 3 Avenue Ernest Millet, 83400 Hyères — à deux pas du centre-ville, avec stationnement possible à proximité.',
          },
        },
      ],
    },
  ],
};

const MassageDosNuquePage: React.FC = () => {
  const phoneHref = `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    const prev = document.title;
    document.title =
      'Massage dos et nuque à Hyères — Soulagement des tensions | Bianco Esthétique';
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute('content') ?? '';
    meta?.setAttribute(
      'content',
      'Massage dos et nuque ciblé à Hyères. Soulage les contractures, tensions cervicales et douleurs dorsales. Institut Bianco Esthétique, sur rendez-vous du lundi au vendredi.'
    );
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}/massage-dos-nuque-hyeres`;

    return () => {
      document.title = prev;
      if (meta && prevDesc) meta.setAttribute('content', prevDesc);
    };
  }, []);

  const overrides = usePageOverrides('/massage-dos-nuque-hyeres');

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
              { label: 'Massage dos & nuque à Hyères' },
            ]} />

            {/* Header */}
            <header className="mb-12">
              <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">
                Hyères — Massage Ciblé
              </span>
              <h1 className="text-4xl md:text-5xl serif text-dark mb-6 leading-tight">
                {overrides?.h1 || "Massage dos et nuque à Hyères : enfin libérer les tensions qui s'accumulent"}
              </h1>
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
                {overrides?.subtitle || "La nuque et le dos concentrent la majorité des tensions que le corps accumule au quotidien — écrans, stress, postures assises prolongées. Chez Bianco, le massage dos/nuque est un soin ciblé et efficace, pensé pour aller chercher exactement là où ça bloque."}
              </p>
            </header>

            {/* Citation bait */}
            <section className="mb-12 bg-primary/5 border-l-4 border-primary px-6 py-5 rounded-r-2xl">
              <p className="text-dark text-sm md:text-base font-light leading-relaxed italic">
                Selon Salomé, esthéticienne chez Bianco Esthétique à Hyères, les zones les plus
                contracturées chez les clientes de la région sont systématiquement les trapèzes et
                la jonction cervico-dorsale — des tensions directement liées au travail sur écran et
                à la conduite fréquente dans la zone Hyères-Toulon. Un massage ciblé de 45 minutes
                sur ces zones produit un relâchement immédiat et mesurable.
              </p>
            </section>

            {/* Services */}
            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-3">
                Comment se déroule le massage dos & nuque chez Bianco ?
              </h2>
              <p className="text-gray-500 font-light text-sm md:text-base mb-8">
                Chaque séance est construite autour de vos zones de tension spécifiques. Rien n'est
                standardisé — Salomé commence par localiser précisément ce qui bloque avant d'agir.
              </p>

              <div className="space-y-6">
                {/* Card 1 */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Bilan des zones de tension</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Avant chaque séance, Salomé prend 5 minutes pour localiser vos zones de tension
                    par simple palpation. Ce bilan oral et manuel garantit que chaque pression est
                    placée au bon endroit. Rien n'est mécanique ici.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">Inclus dans la séance — 0 €</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Massage dos & nuque 45min</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Pétrissages profonds sur les trapèzes, effleurages sur la colonne, frictions sur
                    les insertions musculaires et pression douce sur les points de tension cervicaux.
                    Salomé adapte l'intensité à votre tolérance — le massage est confortable, jamais
                    douloureux.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 50 € — 45min</p>
                  <Link
                    to="/massage-relaxant-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Voir aussi le massage corps complet →
                  </Link>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Extension : massage corps complet</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Si les tensions descendent plus bas que le dos, Salomé peut prolonger la séance sur
                    l'ensemble du corps. C'est souvent le cas après une longue période de stress ou un
                    déménagement récent.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 70 € — 1h</p>
                  <Link
                    to="/massage-californien-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Découvrir le massage californien →
                  </Link>
                </div>
              </div>
            </section>

            {/* Testimonial */}
            <section className="mb-14">
              <blockquote className="bg-white rounded-2xl border border-gray-100 px-6 py-6">
                <p className="text-gray-500 font-light text-sm leading-relaxed italic mb-4">
                  "J'ai des contractures chroniques depuis que je travaille à domicile. La séance de
                  massage dos/nuque chez Bianco m'a soulagée en moins de 45 minutes. Je reviens
                  toutes les 3 semaines maintenant."
                </p>
                <footer className="text-xs text-gray-400">— Isabelle T., La Garde, février 2026</footer>
              </blockquote>
            </section>

            {/* Dark CTA box */}
            <section className="bg-dark text-white rounded-[2.5rem] px-8 py-10 mb-14">
              <h2 className="text-2xl md:text-3xl serif mb-4">Prendre soin de votre dos à Hyères</h2>
              <p className="text-gray-300 font-light text-sm mb-8">
                Le massage dos/nuque est disponible du lundi au vendredi. Idéal en pause déjeuner ou
                en fin de journée. Réservez votre créneau en quelques secondes sur Planity.
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
                    q: 'Le massage dos est-il efficace contre les contractures chroniques ?',
                    a: 'Oui, mais une seule séance ne suffit pas toujours pour des contractures anciennes. Salomé recommande 2 à 3 séances rapprochées (toutes les 10-15 jours) pour un résultat durable. Elle vous conseillera également sur les postures à éviter.',
                  },
                  {
                    q: 'Peut-on faire un massage dos si on souffre de hernie discale ?',
                    a: 'En cas de hernie discale diagnostiquée, il est impératif d\'avoir l\'accord de votre médecin ou kinésithérapeute avant une séance de massage. Salomé travaille avec des pressions légères adaptées mais ne peut se substituer à un avis médical.',
                  },
                  {
                    q: 'Combien coûte un massage dos et nuque à Hyères ?',
                    a: 'Chez Bianco Esthétique, le massage dos et nuque est à partir de 50 € pour une séance de 45 minutes. Les tarifs complets sont disponibles sur notre page Tarifs.',
                  },
                  {
                    q: 'Où se trouve l\'institut Bianco à Hyères ?',
                    a: 'Bianco Esthétique est situé au 3 Avenue Ernest Millet, 83400 Hyères — à deux pas du centre-ville, avec stationnement possible à proximité.',
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
                Votre dos porte tout — votre journée, votre stress, vos enfants, vos projets. Il
                mérite au moins 45 minutes d'attention dédiée. Salomé sera là pour s'en occuper.
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

export default MassageDosNuquePage;
