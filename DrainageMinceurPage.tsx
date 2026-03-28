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
      name: 'Drainage lymphatique minceur à Hyères — Remodelage corps | Bianco Esthétique',
      description:
        'Drainage lymphatique minceur à Hyères : remodelage corps, élimination des toxines, réduction cellulite. Méthode brésilienne chez Bianco Esthétique. Sur rendez-vous.',
      url: `${SITE_URL}/drainage-lymphatique-minceur-hyeres`,
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
            name: 'Drainage minceur à Hyères',
            item: `${SITE_URL}/drainage-lymphatique-minceur-hyeres`,
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
          name: 'Le drainage lymphatique fait-il vraiment maigrir ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le drainage ne brûle pas de graisses — il n\'est pas un substitut au sport ou à l\'alimentation. En revanche, il élimine la rétention d\'eau (souvent responsable de 1 à 3 kg) et améliore la texture de la peau sur les zones de cellulite. L\'effet est réel et mesurable.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quelle est la différence entre drainage esthétique et drainage médical ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le drainage médical (kinésithérapie ou lymphodrainage médical) est prescrit et remboursé pour des pathologies spécifiques. Notre drainage esthétique est une technique de bien-être et de remodelage sans prescription nécessaire.',
          },
        },
        {
          '@type': 'Question',
          name: 'Faut-il suivre un régime alimentaire en parallèle ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Non, aucun régime n\'est obligatoire. Boire suffisamment d\'eau (1,5 L/jour minimum) et limiter le sel et l\'alcool la semaine de la séance optimise les résultats. Salomé peut vous donner des conseils personnalisés.',
          },
        },
        {
          '@type': 'Question',
          name: 'Peut-on faire un drainage minceur si on est enceinte ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un drainage léger des jambes est possible à partir du 2e trimestre avec accord médical. Le drainage minceur corps entier est généralement déconseillé pendant la grossesse. Consultez votre médecin.',
          },
        },
      ],
    },
  ],
};

const DrainageMinceurPage: React.FC = () => {
  const phoneHref = `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    const prev = document.title;
    document.title = 'Drainage lymphatique minceur à Hyères — Remodelage corps | Bianco Esthétique';
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute('content') ?? '';
    meta?.setAttribute(
      'content',
      'Drainage lymphatique minceur à Hyères : remodelage corps, élimination des toxines, réduction cellulite. Méthode brésilienne chez Bianco Esthétique. Sur rendez-vous.'
    );
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}/drainage-lymphatique-minceur-hyeres`;

    return () => {
      document.title = prev;
      if (meta && prevDesc) meta.setAttribute('content', prevDesc);
    };
  }, []);

  const overrides = usePageOverrides('/drainage-lymphatique-minceur-hyeres');

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
              { label: 'Drainage minceur à Hyères' },
            ]} />

            <header className="mb-12">
              <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">
                Hyères — Drainage Minceur & Remodelage
              </span>
              <h1 className="text-4xl md:text-5xl serif text-dark mb-6 leading-tight">
                {overrides?.h1 || 'Drainage lymphatique minceur à Hyères\u00a0: remodelage et légèreté en une séance'}
              </h1>
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
                {overrides?.subtitle || "Le drainage lymphatique minceur va plus loin que le simple soulagement des jambes lourdes\u00a0: il agit sur l'ensemble de la silhouette, élimine les toxines stockées, réduit la rétention d'eau et affine le contour. Chez Bianco, c'est la méthode brésilienne — reconnue pour son efficacité sur la cellulite dite aqueuse — qui est utilisée."}
              </p>
            </header>

            {/* Citation bait */}
            <section className="mb-12 bg-primary/5 border-l-4 border-primary px-6 py-5 rounded-r-2xl">
              <p className="text-dark text-sm md:text-base font-light leading-relaxed italic">
                La méthode brésilienne de drainage lymphatique utilisée chez Bianco Esthétique à Hyères combine des mouvements de pression progressive sur les voies lymphatiques avec des gestes de pétrisage modélant sur les zones graisseuses. Sur la cellulite aqueuse (jambes, ventre, cuisses), une cure de 5 séances produit en moyenne une réduction visible de la circonférence et une amélioration de la texture cutanée — selon les observations de Salomé Bianco, praticienne à Hyères depuis plusieurs années.
              </p>
            </section>

            {/* H2 services section */}
            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-3">
                Le drainage lymphatique minceur chez Bianco
              </h2>
              <p className="text-gray-500 font-light text-sm md:text-base mb-8">
                Chaque protocole est adapté à vos zones prioritaires et à votre objectif — légèreté, remodelage ou entretien régulier.
              </p>
              <div className="space-y-6">

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Drainage corps entier — minceur</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Une séance complète qui part des pieds et remonte jusqu'au décolleté, avec insistance sur les zones de rétention préférentielles&nbsp;: ventre, cuisses, bras. La technique brésilienne inclut des mouvements de sculpture pour travailler le contour en même temps que le drainage.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">115 € — 1h15</p>
                  <Link
                    to="/drainage-lymphatique-jambes-lourdes-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Voir le drainage jambes ciblé →
                  </Link>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Cure minceur 5 séances</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Pour des résultats significatifs et durables, Salomé recommande une cure de 5 séances sur 3 à 5 semaines. Chaque séance progresse dans l'intensité et la profondeur du travail. À la fin de la cure, la différence est visible et palpable.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">Contactez-nous pour le tarif forfait</p>
                  <a
                    href={phoneHref}
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Nous appeler pour le forfait cure →
                  </a>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Association drainage + soin visage</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Certaines de nos clientes combinent un drainage corps avec un soin visage le même jour — repartir du corps et du visage pris en charge en une seule visite. C'est l'une de nos associations les plus appréciées.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 165 € — demi-journée</p>
                  <Link
                    to="/soin-visage-eclat-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Découvrir le soin visage éclat →
                  </Link>
                </div>

              </div>
            </section>

            {/* Testimonial */}
            <section className="mb-14">
              <blockquote className="bg-white rounded-2xl border border-gray-100 px-6 py-6">
                <p className="text-gray-500 font-light text-sm leading-relaxed italic mb-4">
                  "J'avais un événement important et je voulais affiner ma silhouette en quelques semaines. 4 séances de drainage minceur chez Bianco ont fait la différence — surtout sur le ventre et les cuisses. Je n'aurais pas cru que ça pouvait marcher aussi vite."
                </p>
                <footer className="text-xs text-gray-400">— Aurélie P., Toulon, octobre 2025</footer>
              </blockquote>
            </section>

            {/* Dark CTA */}
            <section className="bg-dark text-white rounded-[2.5rem] px-8 py-10 mb-14">
              <h2 className="text-2xl md:text-3xl serif mb-4">Votre cure minceur à Hyères</h2>
              <p className="text-gray-300 font-light text-sm mb-8">
                Avant de commencer une cure, Salomé prend 10 minutes pour évaluer vos zones prioritaires et définir le programme le plus efficace pour vous. Appelez-nous pour prendre rendez-vous pour ce bilan.
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
                    q: 'Le drainage lymphatique fait-il vraiment maigrir ?',
                    a: 'Le drainage ne brûle pas de graisses — il n\'est pas un substitut au sport ou à l\'alimentation. En revanche, il élimine la rétention d\'eau (souvent responsable de 1 à 3 kg) et améliore la texture de la peau sur les zones de cellulite. L\'effet est réel et mesurable.',
                  },
                  {
                    q: 'Quelle est la différence entre drainage esthétique et drainage médical ?',
                    a: 'Le drainage médical (kinésithérapie ou lymphodrainage médical) est prescrit et remboursé pour des pathologies spécifiques. Notre drainage esthétique est une technique de bien-être et de remodelage sans prescription nécessaire.',
                  },
                  {
                    q: 'Faut-il suivre un régime alimentaire en parallèle ?',
                    a: 'Non, aucun régime n\'est obligatoire. Boire suffisamment d\'eau (1,5 L/jour minimum) et limiter le sel et l\'alcool la semaine de la séance optimise les résultats. Salomé peut vous donner des conseils personnalisés.',
                  },
                  {
                    q: 'Peut-on faire un drainage minceur si on est enceinte ?',
                    a: 'Un drainage léger des jambes est possible à partir du 2e trimestre avec accord médical. Le drainage minceur corps entier est généralement déconseillé pendant la grossesse. Consultez votre médecin.',
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
                Le drainage minceur n'est pas une promesse miracle — c'est un soin technique qui produit des résultats réels quand il est bien fait et bien suivi. Chez Bianco, on vous dit ce qu'on peut faire et on le fait bien.
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

export default DrainageMinceurPage;
