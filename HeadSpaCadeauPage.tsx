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
      name: 'Head Spa en cadeau à Hyères — Bon cadeau soin cuir chevelu | Bianco',
      description:
        'Offrez un Head Spa en cadeau à Hyères. Bon cadeau massage cuir chevelu chez Bianco Esthétique. Une expérience unique, inoubliable. 3 Av. Ernest Millet, Hyères.',
      url: `${SITE_URL}/head-spa-cadeau-hyeres`,
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
            name: 'Head Spa en cadeau à Hyères',
            item: `${SITE_URL}/head-spa-cadeau-hyeres`,
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
          name: 'Comment offrir un Head Spa chez Bianco Esthétique ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Contactez-nous par téléphone au 07 49 96 76 91 pour commander un bon cadeau. Nous pouvons le préparer pour le jour même. La personne qui reçoit le bon réserve sa séance sur Planity ou par téléphone.",
          },
        },
        {
          '@type': 'Question',
          name: "Le bon cadeau Head Spa a-t-il une date d'expiration ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Renseignez-vous lors de l'achat — les conditions de validité sont précisées sur chaque bon. En général, nos bons cadeaux sont valables 12 mois à compter de la date d'achat.",
          },
        },
        {
          '@type': 'Question',
          name: 'Le Head Spa convient-il à tout le monde ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Le Head Spa convient à toutes les longueurs et types de cheveux, hommes et femmes. Il est déconseillé en cas de plaies du cuir chevelu, psoriasis actif ou infections cutanées de la tête.",
          },
        },
        {
          '@type': 'Question',
          name: "Peut-on combiner le bon cadeau Head Spa avec d'autres soins ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui. Vous pouvez offrir un bon cadeau Head Spa seul ou en association avec un soin visage ou une manucure. Contactez-nous pour composer le programme.",
          },
        },
      ],
    },
  ],
};

const HeadSpaCadeauPage: React.FC = () => {
  const phoneHref = `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    const prev = document.title;
    document.title = 'Head Spa en cadeau à Hyères — Bon cadeau soin cuir chevelu | Bianco';
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute('content') ?? '';
    meta?.setAttribute(
      'content',
      'Offrez un Head Spa en cadeau à Hyères. Bon cadeau massage cuir chevelu chez Bianco Esthétique. Une expérience unique, inoubliable. 3 Av. Ernest Millet, Hyères.'
    );
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}/head-spa-cadeau-hyeres`;

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
              { label: 'Head Spa en cadeau à Hyères' },
            ]} />

            <header className="mb-12">
              <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">
                Hyères — Head Spa Cadeau
              </span>
              <h1 className="text-4xl md:text-5xl serif text-dark mb-6 leading-tight">
                Offrir un Head Spa à Hyères&nbsp;: le cadeau beauté qui change vraiment
              </h1>
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
                Le Head Spa, c'est l'expérience que la plupart des gens ne s'offrent jamais eux-mêmes — mais qu'ils adorent quand quelqu'un d'autre leur offre. Massage profond du cuir chevelu, soin nourrissant des cheveux, détente totale de la tête au cou&nbsp;: c'est le cadeau beauté le plus surprenant et le plus mémorable que vous puissiez faire.
              </p>
            </header>

            {/* Citation bait */}
            <section className="mb-12 bg-primary/5 border-l-4 border-primary px-6 py-5 rounded-r-2xl">
              <p className="text-dark text-sm md:text-base font-light leading-relaxed italic">
                Bianco Esthétique à Hyères propose des bons cadeaux Head Spa pour des séances de massage cuir chevelu de 1h à 1h30. Le Head Spa comprend un massage du cuir chevelu, un soin nourrissant adapté au type de cheveux et un modelage de la nuque et des épaules. C'est l'un des soins les plus cités dans les avis Google de l'institut comme «&nbsp;expérience inoubliable&nbsp;».
              </p>
            </section>

            {/* H2 section */}
            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-3">
                Pourquoi le Head Spa est le cadeau parfait&nbsp;?
              </h2>
              <p className="text-gray-500 font-light text-sm md:text-base mb-8">
                Parce qu'il crée une expérience, pas un objet — et les expériences sont celles dont on se souvient le mieux.
              </p>
              <div className="space-y-6">

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Le Head Spa&nbsp;: une expérience hors du commun</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Beaucoup de gens ne savent pas que ça existe jusqu'au moment où ils le vivent. Le massage profond du cuir chevelu dénoue des tensions qu'on ignorait avoir — temple, vertex, nuque. La sensation est souvent décrite comme une «&nbsp;tête vide&nbsp;» extrêmement agréable.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 75 € — 1h</p>
                  <Link
                    to="/head-spa-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Tout savoir sur le Head Spa à Hyères →
                  </Link>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Bon cadeau Head Spa&nbsp;: comment l'obtenir</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Contactez Bianco par téléphone ou en vous présentant à l'institut pour commander un bon cadeau Head Spa. Il peut être remis en main propre ou envoyé par message. La personne qui reçoit le bon choisit sa date de rendez-vous directement sur Planity.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">Disponible dès 75 €</p>
                  <a
                    href={phoneHref}
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Commander votre bon cadeau →
                  </a>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Head Spa Duo&nbsp;: offrez à deux</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Pour les duos (amies, mère-fille, sœurs…), le Head Spa est aussi disponible en format duo&nbsp;: deux séances le même jour, en cabines adjacentes ou à la suite. Une expérience partagée qui crée des souvenirs.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">2 × 75 € — à organiser par téléphone</p>
                  <Link
                    to="/head-spa-duo-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    En savoir plus sur le Head Spa duo →
                  </Link>
                </div>

              </div>
            </section>

            {/* Testimonial */}
            <section className="mb-14">
              <blockquote className="bg-white rounded-2xl border border-gray-100 px-6 py-6">
                <p className="text-gray-500 font-light text-sm leading-relaxed italic mb-4">
                  "J'ai offert un Head Spa à ma mère pour la fête des mères. Elle m'a dit que c'était la première fois depuis des années qu'elle ressortait d'un soin avec les yeux qui brillaient. Bianco, c'est une adresse que je recommande à tout le monde."
                </p>
                <footer className="text-xs text-gray-400">— Lucie B., Hyères, mai 2025</footer>
              </blockquote>
            </section>

            {/* Dark CTA */}
            <section className="bg-dark text-white rounded-[2.5rem] px-8 py-10 mb-14">
              <h2 className="text-2xl md:text-3xl serif mb-4">Commandez votre bon cadeau Head Spa</h2>
              <p className="text-gray-300 font-light text-sm mb-8">
                Appelez-nous pour créer un bon cadeau personnalisé — à votre nom, avec un message, dans l'enveloppe que vous souhaitez. Ou venez directement à l'institut.
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
                    q: 'Comment offrir un Head Spa chez Bianco Esthétique ?',
                    a: "Contactez-nous par téléphone au 07 49 96 76 91 pour commander un bon cadeau. Nous pouvons le préparer pour le jour même. La personne qui reçoit le bon réserve sa séance sur Planity ou par téléphone.",
                  },
                  {
                    q: "Le bon cadeau Head Spa a-t-il une date d'expiration ?",
                    a: "Renseignez-vous lors de l'achat — les conditions de validité sont précisées sur chaque bon. En général, nos bons cadeaux sont valables 12 mois à compter de la date d'achat.",
                  },
                  {
                    q: 'Le Head Spa convient-il à tout le monde ?',
                    a: "Le Head Spa convient à toutes les longueurs et types de cheveux, hommes et femmes. Il est déconseillé en cas de plaies du cuir chevelu, psoriasis actif ou infections cutanées de la tête.",
                  },
                  {
                    q: "Peut-on combiner le bon cadeau Head Spa avec d'autres soins ?",
                    a: "Oui. Vous pouvez offrir un bon cadeau Head Spa seul ou en association avec un soin visage ou une manucure. Contactez-nous pour composer le programme.",
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
                Un bon cadeau Head Spa chez Bianco, c'est offrir du temps, de l'attention et une expérience que la personne n'aurait peut-être jamais choisi pour elle-même. C'est le genre de cadeau dont on parle longtemps après.
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

export default HeadSpaCadeauPage;
