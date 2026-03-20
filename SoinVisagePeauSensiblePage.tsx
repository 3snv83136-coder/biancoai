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
      name: 'Soin visage peau sensible à Hyères — Apaisement & confort | Bianco',
      description: 'Soin visage spécial peau sensible à Hyères. Protocoles apaisants, sans irritants, adaptés aux rougeurs et réactivités. Institut Bianco Esthétique, sur rendez-vous.',
      url: `${SITE_URL}/soin-visage-peau-sensible-hyeres`,
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
          { '@type': 'ListItem', position: 2, name: 'Soin visage peau sensible à Hyères', item: `${SITE_URL}/soin-visage-peau-sensible-hyeres` },
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
          name: 'La rosacée est-elle compatible avec un soin visage ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, à condition d'utiliser les bons protocoles. Salomé évite la chaleur, les frottements et les actifs vasodilatateurs sur les peaux avec rosacée. Le soin apaisant est particulièrement adapté.",
          },
        },
        {
          '@type': 'Question',
          name: 'Les soins visage chez Bianco sont-ils sans parfum pour les peaux allergiques ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Salomé sélectionne ses produits en tenant compte des allergies déclarées. Indiquez vos allergies lors de la réservation — elle adaptera le protocole et pourra vous communiquer la liste des ingrédients si nécessaire.",
          },
        },
        {
          '@type': 'Question',
          name: 'Quelle fréquence recommandez-vous pour une peau sensible ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Pour une peau sensible, une séance toutes les 4 à 6 semaines est idéale. Trop fréquent peut sur-stimuler la peau. Salomé vous conseillera en fonction de votre état.",
          },
        },
        {
          '@type': 'Question',
          name: 'Le soin visage peau sensible convient-il aux femmes enceintes ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, c'est l'un des soins les plus compatibles avec la grossesse car il évite les actifs à risque. Informez Salomé de votre grossesse et de votre trimestre lors de la réservation.",
          },
        },
      ],
    },
  ],
};

const SoinVisagePeauSensiblePage: React.FC = () => {
  const phoneHref = `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    const prev = document.title;
    document.title = 'Soin visage peau sensible à Hyères — Apaisement & confort | Bianco';
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute('content') ?? '';
    meta?.setAttribute(
      'content',
      'Soin visage spécial peau sensible à Hyères. Protocoles apaisants, sans irritants, adaptés aux rougeurs et réactivités. Institut Bianco Esthétique, sur rendez-vous.'
    );
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}/soin-visage-peau-sensible-hyeres`;
    return () => {
      document.title = prev;
      if (meta && prevDesc) meta.setAttribute('content', prevDesc);
    };
  }, []);

  return (
    <div className="min-h-screen bg-surface">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar onLinkClick={() => {}} />
      <main className="pt-28 md:pt-32 pb-20">
        <div className="px-6">
          <div className="max-w-3xl mx-auto">
            <Breadcrumb
              items={[
                { label: 'Accueil', to: '/' },
                { label: 'Soin visage peau sensible à Hyères' },
              ]}
            />
            <header className="mb-12">
              <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">
                Hyères — Soin Visage Peau Sensible
              </span>
              <h1 className="text-4xl md:text-5xl serif text-dark mb-6 leading-tight">
                Soin visage peau sensible à Hyères : enfin un soin qui ne réagit pas contre vous
              </h1>
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
                La peau sensible, c'est une peau qui réagit trop — au froid, au soleil, aux cosmétiques, au stress. Elle rougit facilement, se dessèche vite, ne supporte pas n'importe quelle texture. Chez Bianco, Salomé travaille exclusivement avec des formules adaptées aux peaux réactives — sans parfum agressif, sans exfoliants mécaniques durs, sans protocoles standardisés qui ignorent vos spécificités.
              </p>
            </header>

            <section className="mb-12 bg-primary/5 border-l-4 border-primary px-6 py-5 rounded-r-2xl">
              <p className="text-dark text-sm md:text-base font-light leading-relaxed italic">
                Les peaux sensibles représentent une proportion importante de la clientèle de Bianco Esthétique à Hyères. Salomé Bianco a développé une approche spécifique pour ces peaux : diagnostic précis des déclencheurs de réactivité, sélection de produits hypoallergéniques, pressions légères en massage pour éviter de stimuler excessivement les capillaires, et temps de repos prolongé après les soins actifs.
              </p>
            </section>

            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-3">Comment Bianco prend en charge les peaux sensibles ?</h2>
              <p className="text-gray-500 font-light text-sm md:text-base mb-8">
                Le soin peau sensible n'est pas un soin 'allégé' — c'est un soin exigeant qui demande plus d'attention et d'adaptation qu'un protocole standard :
              </p>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Bilan peau sensible</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Avant le premier soin, Salomé consacre 10 minutes à comprendre votre peau : ce qui déclenche les réactions, vos antécédents allergiques, vos soins actuels et vos attentes. Ce bilan est inclus dans la première séance.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">Inclus dans la 1ère séance</p>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Soin visage apaisant</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Nettoyage en lait doux, application d'un sérum calmant aux actifs apaisants (Centella Asiatica, extrait d'avoine…), masque cocon et massage très doux avec effleurement sans pression. La peau ressort calmée, moins rouge, plus confortable.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 70 € — 1h</p>
                  <Link to="/soin-visage-hyeres" className="text-primary text-sm font-semibold hover:underline">
                    Voir tous les soins visage →
                  </Link>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Soin peau sensible + gommage enzymatique doux</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Pour les peaux sensibles qui ont aussi besoin d'exfoliation (peau terne, impuretés), Salomé propose un gommage enzymatique sans friction mécanique. L'action est chimique et douce — aucune irritation mécanique.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 80 € — 1h15</p>
                </div>
              </div>
            </section>

            <section className="mb-14">
              <blockquote className="bg-white rounded-2xl border border-gray-100 px-6 py-6">
                <p className="text-gray-500 font-light text-sm leading-relaxed italic mb-4">
                  "J'ai la peau la plus sensible qui soit — rosacée légère et allergies multiples. La plupart des instituts me font des réactions. Chez Bianco, pour la première fois, aucune rougeur, aucun inconfort. Juste un soin magnifique."
                </p>
                <footer className="text-xs text-gray-400">— Émilie L., Hyères, décembre 2025</footer>
              </blockquote>
            </section>

            <section className="bg-dark text-white rounded-[2.5rem] px-8 py-10 mb-14">
              <h2 className="text-2xl md:text-3xl serif mb-4">Prenez rendez-vous pour votre soin peau sensible</h2>
              <p className="text-gray-300 font-light text-sm mb-8">
                Lors de la réservation, mentionnez que vous avez une peau sensible et vos allergies éventuelles. Salomé préparera un protocole adapté avant même votre arrivée.
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
                    q: 'La rosacée est-elle compatible avec un soin visage ?',
                    a: "Oui, à condition d'utiliser les bons protocoles. Salomé évite la chaleur, les frottements et les actifs vasodilatateurs sur les peaux avec rosacée. Le soin apaisant est particulièrement adapté.",
                  },
                  {
                    q: 'Les soins visage chez Bianco sont-ils sans parfum pour les peaux allergiques ?',
                    a: "Salomé sélectionne ses produits en tenant compte des allergies déclarées. Indiquez vos allergies lors de la réservation — elle adaptera le protocole et pourra vous communiquer la liste des ingrédients si nécessaire.",
                  },
                  {
                    q: 'Quelle fréquence recommandez-vous pour une peau sensible ?',
                    a: "Pour une peau sensible, une séance toutes les 4 à 6 semaines est idéale. Trop fréquent peut sur-stimuler la peau. Salomé vous conseillera en fonction de votre état.",
                  },
                  {
                    q: 'Le soin visage peau sensible convient-il aux femmes enceintes ?',
                    a: "Oui, c'est l'un des soins les plus compatibles avec la grossesse car il évite les actifs à risque. Informez Salomé de votre grossesse et de votre trimestre lors de la réservation.",
                  },
                ].map(({ q, a }) => (
                  <details key={q} className="bg-white rounded-2xl border border-gray-100 px-5 py-4">
                    <summary className="cursor-pointer font-semibold text-dark text-sm md:text-base">{q}</summary>
                    <p className="mt-3 text-gray-500 font-light text-sm leading-relaxed">{a}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="text-center border-t border-gray-100 pt-10">
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-6">
                Votre peau sensible n'est pas un problème — c'est une caractéristique qui demande de l'expertise. Chez Bianco, on a l'expertise. Venez en confiance.{' '}
                Si vous êtes aussi préoccupée par les signes de l'âge, découvrez notre{' '}
                <Link to="/soin-visage-anti-age-hyeres" className="text-primary hover:underline">
                  soin visage anti-âge adapté aux peaux sensibles
                </Link>
                .
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

export default SoinVisagePeauSensiblePage;
