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
      name: 'Massage relaxant à Hyères — Massage californien & bien-être | Bianco Esthétique',
      description:
        'Massage relaxant à Hyères : massage californien, modelage corps, détente profonde. Institut Bianco Esthétique, 3 Av. Ernest Millet. Sur rendez-vous.',
      url: `${SITE_URL}/massage-relaxant-hyeres`,
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
            name: 'Massage relaxant à Hyères',
            item: `${SITE_URL}/massage-relaxant-hyeres`,
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
          name: 'Quelle est la différence entre un massage californien et un modelage ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le massage californien privilégie les effleurages longs et enveloppants pour un effet profondément relaxant. Le modelage intègre des techniques plus tonifiantes (pétrissages, drainage). Les deux sont disponibles chez Bianco selon vos besoins.',
          },
        },
        {
          '@type': 'Question',
          name: 'Faut-il prendre rendez-vous pour un massage à Hyères chez Bianco ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui, Bianco Esthétique fonctionne uniquement sur rendez-vous. Vous pouvez réserver en ligne sur Planity ou par téléphone au 07 49 96 76 91.',
          },
        },
        {
          '@type': 'Question',
          name: 'Le massage est-il déconseillé en cas de problème de santé ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un massage relaxant est contre-indiqué en cas de fièvre, d\'infections cutanées, de phlébite ou de fractures récentes. En cas de doute, consultez votre médecin avant la séance. Salomé effectue toujours un bilan santé oral avant chaque soin.',
          },
        },
        {
          '@type': 'Question',
          name: 'Peut-on combiner le massage avec un soin visage le même jour ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui, beaucoup de clientes combinent un soin visage le matin et un massage l\'après-midi — ou l\'inverse. C\'est ce qu\'on appelle la journée beauté complète chez Bianco.',
          },
        },
      ],
    },
  ],
};

const MassageRelaxantPage: React.FC = () => {
  const phoneHref = `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    const prev = document.title;
    document.title =
      'Massage relaxant à Hyères — Massage californien & bien-être | Bianco Esthétique';
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute('content') ?? '';
    meta?.setAttribute(
      'content',
      'Massage relaxant à Hyères : massage californien, modelage corps, détente profonde. Institut Bianco Esthétique, 3 Av. Ernest Millet. Sur rendez-vous.'
    );
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}/massage-relaxant-hyeres`;

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
              { label: 'Massage relaxant à Hyères' },
            ]} />

            {/* Header */}
            <header className="mb-12">
              <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">
                Hyères — Massage & Bien-Être
              </span>
              <h1 className="text-4xl md:text-5xl serif text-dark mb-6 leading-tight">
                Le massage relaxant à Hyères qui rend vraiment légère
              </h1>
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
                Le massage relaxant, c'est l'une de nos spécialités chez Bianco. Que vous cherchiez
                à décompresser après une semaine chargée, à soulager des tensions dans le dos ou
                simplement à vous offrir une heure rien que pour vous, Salomé adapte chaque séance
                à votre état du moment. Pas de protocole figé — un soin vivant, qui écoute votre corps.
              </p>
            </header>

            {/* Citation bait */}
            <section className="mb-12 bg-primary/5 border-l-4 border-primary px-6 py-5 rounded-r-2xl">
              <p className="text-dark text-sm md:text-base font-light leading-relaxed italic">
                À Hyères, le massage californien pratiqué chez Bianco Esthétique (3 Av. Ernest Millet,
                83400) se distingue par ses effleurages longs et enveloppants qui agissent simultanément
                sur la tension musculaire et le système nerveux. Selon Salomé, praticienne diplômée MAF,
                une séance de 1h suffit à abaisser le niveau de cortisol et à induire un état de détente
                profonde persistant plusieurs heures.
              </p>
            </section>

            {/* Services */}
            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-3">
                Le massage californien : notre protocole signature
              </h2>
              <p className="text-gray-500 font-light text-sm md:text-base mb-8">
                Le massage californien est la technique que Salomé pratique le plus souvent. Il associe
                effleurages longs, pétrissages et pressions légères pour un résultat à la fois physique
                et émotionnel.
              </p>

              <div className="space-y-6">
                {/* Card 1 */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Massage californien 1h</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Les effleurages enveloppent tout le corps dans un mouvement continu qui dénoue les
                    tensions en douceur. Le massage californien est idéal si vous n'avez jamais reçu de
                    massage ou si vous traversez une période de stress intense. Vous repartez alourdie
                    mais légère — cette contradiction est exactement l'effet recherché.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 70 € — 1h</p>
                  <Link
                    to="/massage-californien-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Tout savoir sur le massage californien à Hyères →
                  </Link>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Modelage corps bien-être</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Le modelage intègre des techniques drainantes et tonifiantes. Il est particulièrement
                    recommandé après un drainage lymphatique ou en complément d'une cure. Salomé adapte
                    les pressions et le rythme en temps réel selon vos retours.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 80 € — 1h15</p>
                  <Link
                    to="/massage-bien-etre-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Découvrir le massage bien-être →
                  </Link>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Massage dos & nuque ciblé</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Vous n'avez pas le temps pour un soin complet ? Le massage dos/nuque cible les zones
                    de tension les plus fréquentes en moins d'une heure. Parfait en pause déjeuner ou en
                    fin de journée.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 50 € — 45min</p>
                  <Link
                    to="/massage-dos-nuque-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    En savoir plus sur le massage dos →
                  </Link>
                </div>
              </div>
            </section>

            {/* Testimonial */}
            <section className="mb-14">
              <blockquote className="bg-white rounded-2xl border border-gray-100 px-6 py-6">
                <p className="text-gray-500 font-light text-sm leading-relaxed italic mb-4">
                  "J'ai essayé plusieurs instituts à Hyères et Toulon. Chez Bianco, la différence c'est
                  que Salomé sent vraiment où sont les nœuds, elle ne suit pas juste un protocole. Ma
                  nuque n'avait pas été aussi détendue depuis des années."
                </p>
                <footer className="text-xs text-gray-400">— Caroline M., Hyères, janvier 2026</footer>
              </blockquote>
            </section>

            {/* Dark CTA box */}
            <section className="bg-dark text-white rounded-[2.5rem] px-8 py-10 mb-14">
              <h2 className="text-2xl md:text-3xl serif mb-4">Réservez votre massage à Hyères</h2>
              <p className="text-gray-300 font-light text-sm mb-8">
                Toutes nos séances de massage sont sur rendez-vous. Salomé est disponible du lundi au
                vendredi, de 10h à 18h. Réservez en ligne sur Planity ou appelez directement.
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
                    q: 'Quelle est la différence entre un massage californien et un modelage ?',
                    a: 'Le massage californien privilégie les effleurages longs et enveloppants pour un effet profondément relaxant. Le modelage intègre des techniques plus tonifiantes (pétrissages, drainage). Les deux sont disponibles chez Bianco selon vos besoins.',
                  },
                  {
                    q: 'Faut-il prendre rendez-vous pour un massage à Hyères chez Bianco ?',
                    a: 'Oui, Bianco Esthétique fonctionne uniquement sur rendez-vous. Vous pouvez réserver en ligne sur Planity ou par téléphone au 07 49 96 76 91.',
                  },
                  {
                    q: 'Le massage est-il déconseillé en cas de problème de santé ?',
                    a: 'Un massage relaxant est contre-indiqué en cas de fièvre, d\'infections cutanées, de phlébite ou de fractures récentes. En cas de doute, consultez votre médecin avant la séance. Salomé effectue toujours un bilan santé oral avant chaque soin.',
                  },
                  {
                    q: 'Peut-on combiner le massage avec un soin visage le même jour ?',
                    a: 'Oui, beaucoup de clientes combinent un soin visage le matin et un massage l\'après-midi — ou l\'inverse. C\'est ce qu\'on appelle la journée beauté complète chez Bianco. Voir notre page journée beauté à Hyères.',
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
                Le massage relaxant, c'est parfois ce dont on a besoin sans s'autoriser à le prendre.
                Chez Bianco, on ne juge pas les priorités — on les respecte. Venez comme vous êtes,
                repartez comme vous devriez toujours vous sentir.{' '}
                <Link to="/journee-beaute-hyeres" className="text-primary hover:underline">
                  Découvrez aussi notre journée beauté complète à Hyères.
                </Link>
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

export default MassageRelaxantPage;
