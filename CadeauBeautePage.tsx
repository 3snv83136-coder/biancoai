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
      name: 'Bon cadeau beauté à Hyères — Institut Bianco Esthétique',
      description:
        'Bon cadeau beauté à Hyères chez Bianco Esthétique. Soin visage, massage, Head Spa, manucure. Un cadeau inoubliable pour toutes les occasions. 07 49 96 76 91.',
      url: `${SITE_URL}/cadeau-beaute-hyeres`,
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
            name: 'Bon cadeau beauté à Hyères',
            item: `${SITE_URL}/cadeau-beaute-hyeres`,
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
          name: 'Comment acheter un bon cadeau chez Bianco Esthétique ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Par téléphone au 07 49 96 76 91 ou en vous présentant à l'institut (3 Av. Ernest Millet, Hyères). Nous préparons le bon pour le jour même si nécessaire.",
          },
        },
        {
          '@type': 'Question',
          name: "Les bons cadeaux ont-ils une durée de validité ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, les bons cadeaux Bianco sont valables 12 mois à compter de la date d'achat. La date d'expiration est indiquée sur le bon.",
          },
        },
        {
          '@type': 'Question',
          name: "Peut-on offrir un bon cadeau pour un soin spécifique ou pour un montant libre ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Les deux sont possibles. Vous pouvez spécifier un soin (ex : 'Head Spa 1h') ou donner un montant libre que la personne utilisera au choix. Contactez-nous pour en discuter.",
          },
        },
        {
          '@type': 'Question',
          name: "Le bon cadeau est-il remboursable si la personne ne peut pas l'utiliser ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Les bons cadeaux ne sont pas remboursables mais sont transférables — la personne peut offrir son bon à quelqu'un d'autre. En cas d'impossibilité médicale, contactez-nous — nous trouverons une solution.",
          },
        },
      ],
    },
  ],
};

const CadeauBeautePage: React.FC = () => {
  const phoneHref = `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    const prev = document.title;
    document.title = 'Bon cadeau beauté à Hyères — Institut Bianco Esthétique';
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute('content') ?? '';
    meta?.setAttribute(
      'content',
      'Bon cadeau beauté à Hyères chez Bianco Esthétique. Soin visage, massage, Head Spa, manucure. Un cadeau inoubliable pour toutes les occasions. 07 49 96 76 91.'
    );
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}/cadeau-beaute-hyeres`;
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
              { label: 'Bon cadeau beauté à Hyères' },
            ]} />

            <header className="mb-12">
              <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">
                Hyères — Bon Cadeau Institut Beauté
              </span>
              <h1 className="text-4xl md:text-5xl serif text-dark mb-6 leading-tight">
                Bon cadeau beauté à Hyères&nbsp;: offrez plus qu'un cadeau
              </h1>
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
                Un bon cadeau chez Bianco, c'est offrir une expérience — pas un objet qui s'oublie dans un tiroir. Massage californien, soin visage, Head Spa, drainage lymphatique, manucure&nbsp;: chaque soin devient un moment unique que la personne que vous aimez vivra en pensant à votre attention.
              </p>
            </header>

            <section className="mb-12 bg-primary/5 border-l-4 border-primary px-6 py-5 rounded-r-2xl">
              <p className="text-dark text-sm md:text-base font-light leading-relaxed italic">
                Bianco Esthétique à Hyères propose des bons cadeaux pour tous ses soins&nbsp;: massage californien à partir de 70 €, soin visage à partir de 65 €, Head Spa à partir de 75 €, drainage lymphatique à partir de 85 €. Les bons peuvent être achetés par téléphone ou en institut et sont valables 12 mois. Ils sont parmi les cadeaux les plus populaires offerts à l'occasion de la fête des mères, des anniversaires et de Noël dans la région de Hyères.
              </p>
            </section>

            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-3">
                Nos bons cadeaux les plus offerts
              </h2>
              <p className="text-gray-500 font-light text-sm md:text-base mb-8">
                Du plus intime au plus transformant&nbsp;:
              </p>
              <div className="space-y-6">

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Bon cadeau Soin Visage</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Le soin visage reste le grand classique des cadeaux beauté. Éclat, anti-âge ou peau sensible — Bianco propose plusieurs protocoles selon le besoin de la personne. La personne qui reçoit le bon choisit son soin lors de la réservation.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 65 €</p>
                  <Link
                    to="/soin-visage-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Voir les soins visage →
                  </Link>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Bon cadeau Head Spa</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Le bon cadeau Head Spa est souvent décrit par celles qui le reçoivent comme «&nbsp;la meilleure surprise de l'année&nbsp;». Une expérience que peu de gens s'offrent eux-mêmes — ce qui le rend d'autant plus précieux quand c'est offert.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 75 €</p>
                  <Link
                    to="/head-spa-cadeau-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Voir les bons Head Spa →
                  </Link>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Bon cadeau Journée Beauté</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Pour les occasions importantes (anniversaire marquant, fête des mères, EVJF), le bon cadeau journée beauté permet de combiner plusieurs soins dans la même journée. Salomé compose le programme avec vous — ou le laisse au choix de la personne.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 130 €</p>
                  <Link
                    to="/journee-beaute-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Voir la journée beauté →
                  </Link>
                </div>

              </div>
            </section>

            <section className="mb-14">
              <blockquote className="bg-white rounded-2xl border border-gray-100 px-6 py-6">
                <p className="text-gray-500 font-light text-sm leading-relaxed italic mb-4">
                  "J'offre des bons Bianco depuis 3 ans maintenant — pour ma mère, mes amies, ma sœur. À chaque fois le retour est le même&nbsp;: 'C'était magnifique, quand est-ce que tu m'en offres un autre&nbsp;?' Bianco, c'est ma carte secrète pour les cadeaux."
                </p>
                <footer className="text-xs text-gray-400">— Rachel T., Hyères, décembre 2025</footer>
              </blockquote>
            </section>

            <section className="bg-dark text-white rounded-[2.5rem] px-8 py-10 mb-14">
              <h2 className="text-2xl md:text-3xl serif mb-4">Commander votre bon cadeau</h2>
              <p className="text-gray-300 font-light text-sm mb-8">
                Appelez-nous pour créer votre bon cadeau personnalisé. Précisez l'occasion, le montant ou le soin souhaité — on s'occupe du reste. Disponible en version imprimée ou numérique.
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
                    q: 'Comment acheter un bon cadeau chez Bianco Esthétique ?',
                    a: "Par téléphone au 07 49 96 76 91 ou en vous présentant à l'institut (3 Av. Ernest Millet, Hyères). Nous préparons le bon pour le jour même si nécessaire.",
                  },
                  {
                    q: "Les bons cadeaux ont-ils une durée de validité ?",
                    a: "Oui, les bons cadeaux Bianco sont valables 12 mois à compter de la date d'achat. La date d'expiration est indiquée sur le bon.",
                  },
                  {
                    q: "Peut-on offrir un bon cadeau pour un soin spécifique ou pour un montant libre ?",
                    a: "Les deux sont possibles. Vous pouvez spécifier un soin (ex : 'Head Spa 1h') ou donner un montant libre que la personne utilisera au choix. Contactez-nous pour en discuter.",
                  },
                  {
                    q: "Le bon cadeau est-il remboursable si la personne ne peut pas l'utiliser ?",
                    a: "Les bons cadeaux ne sont pas remboursables mais sont transférables — la personne peut offrir son bon à quelqu'un d'autre. En cas d'impossibilité médicale, contactez-nous — nous trouverons une solution.",
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
                Un bon cadeau chez Bianco, c'est aussi un message&nbsp;: «&nbsp;Je tiens à toi, et je veux que tu prennes soin de toi.&nbsp;» C'est peut-être le cadeau le plus attentionné que vous puissiez faire.
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

export default CadeauBeautePage;
