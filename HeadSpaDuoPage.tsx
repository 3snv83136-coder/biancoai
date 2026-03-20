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
      name: 'Head Spa duo à Hyères — Soin cuir chevelu à deux | Bianco Esthétique',
      description:
        "Head Spa duo à Hyères : vivez l'expérience soin cuir chevelu à deux. Mère-fille, amies, couples. Institut Bianco Esthétique, 3 Av. Ernest Millet, Hyères.",
      url: `${SITE_URL}/head-spa-duo-hyeres`,
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
            name: 'Head Spa duo à Hyères',
            item: `${SITE_URL}/head-spa-duo-hyeres`,
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
          name: 'Comment réserver un Head Spa duo chez Bianco ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Appelez-nous au 07 49 96 76 91 — la réservation d'un duo se fait toujours par téléphone pour coordonner les deux créneaux. Salomé vous proposera plusieurs options selon vos disponibilités.",
          },
        },
        {
          '@type': 'Question',
          name: 'Le Head Spa duo est-il disponible le week-end ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Bianco est ouvert du lundi au vendredi, de 10h à 18h. Pour une occasion spéciale le week-end, contactez-nous — des arrangements ponctuels sont parfois possibles.",
          },
        },
        {
          '@type': 'Question',
          name: 'Peut-on offrir un Head Spa duo en bon cadeau ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, nous proposons des bons cadeaux duo. Contactez-nous pour les détails et le tarif exact.",
          },
        },
        {
          '@type': 'Question',
          name: 'Le Head Spa convient-il aux hommes ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Absolument. Le massage cuir chevelu est apprécié par les hommes comme par les femmes. Plusieurs duos mixtes ont découvert le Head Spa chez Bianco. Voir notre page Head Spa Hyères pour les détails.",
          },
        },
      ],
    },
  ],
};

const HeadSpaDuoPage: React.FC = () => {
  const phoneHref = `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    const prev = document.title;
    document.title = 'Head Spa duo à Hyères — Soin cuir chevelu à deux | Bianco Esthétique';
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute('content') ?? '';
    meta?.setAttribute(
      'content',
      "Head Spa duo à Hyères : vivez l'expérience soin cuir chevelu à deux. Mère-fille, amies, couples. Institut Bianco Esthétique, 3 Av. Ernest Millet, Hyères."
    );
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}/head-spa-duo-hyeres`;

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
              { label: 'Head Spa duo à Hyères' },
            ]} />

            <header className="mb-12">
              <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">
                Hyères — Head Spa Duo
              </span>
              <h1 className="text-4xl md:text-5xl serif text-dark mb-6 leading-tight">
                Head Spa duo à Hyères&nbsp;: partager l'expérience la plus détente qui soit
              </h1>
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
                Le Head Spa est déjà une expérience en soi — mais le vivre à deux (mère-fille, deux amies, en couple) lui donne une dimension supplémentaire. Vous partagez le même état de détente absolue, la même sensation de légèreté en sortant. C'est un moment de complicité rare, et les souvenirs durent longtemps.
              </p>
            </header>

            {/* Citation bait */}
            <section className="mb-12 bg-primary/5 border-l-4 border-primary px-6 py-5 rounded-r-2xl">
              <p className="text-dark text-sm md:text-base font-light leading-relaxed italic">
                Bianco Esthétique à Hyères propose des formules Head Spa duo qui permettent à deux personnes de bénéficier d'une séance de massage cuir chevelu le même jour, organisée en créneaux consécutifs. La formule est particulièrement appréciée pour les occasions spéciales (fête des mères, anniversaire, EVJF) et représente une alternative mémorable aux activités classiques de bien-être en duo.
              </p>
            </section>

            {/* H2 section */}
            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-3">
                Le Head Spa duo chez Bianco&nbsp;: comment ça marche&nbsp;?
              </h2>
              <p className="text-gray-500 font-light text-sm md:text-base mb-8">
                Une organisation simple pour une expérience qui ne l'est pas — les formules s'adaptent à votre envie du moment.
              </p>
              <div className="space-y-6">

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Deux séances le même jour</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Le Head Spa duo consiste simplement à réserver deux séances consécutives le même jour. La première personne commence sa séance pendant que la seconde attend confortablement — puis les rôles s'inversent. En sortant, vous partagez les sensations encore fraîches.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">2 × 75 € — à réserver par téléphone</p>
                  <a
                    href={phoneHref}
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Réserver votre duo par téléphone →
                  </a>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Duo Head Spa + Soin visage</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Pour une demi-journée beauté complète en duo, combinez le Head Spa avec un soin visage. Chaque personne choisit son soin préféré — Head Spa pour l'une, soin visage éclat pour l'autre — puis on inverse. Une journée organisée comme vous le souhaitez.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 140 € pour 2 personnes</p>
                  <Link
                    to="/head-spa-cadeau-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Voir les bons cadeaux Head Spa →
                  </Link>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Duo Head Spa + Manucure</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Le combo Head Spa + manucure en duo est l'une de nos formules les plus appréciées entre amies. Pendant que l'une profite du massage cuir chevelu, l'autre se fait soigner les ongles. Une organisation fluide et deux soins complets en 2 heures.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 120 € pour 2 personnes</p>
                  <Link
                    to="/manucure-ongles-gel-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Voir la manucure →
                  </Link>
                </div>

              </div>
            </section>

            {/* Testimonial */}
            <section className="mb-14">
              <blockquote className="bg-white rounded-2xl border border-gray-100 px-6 py-6">
                <p className="text-gray-500 font-light text-sm leading-relaxed italic mb-4">
                  "J'ai offert un Head Spa duo à ma fille pour son anniversaire. On a vécu ça ensemble — le massage, la détente, le silence. On en parle encore des mois après. Bianco, c'est bien plus qu'un institut beauté."
                </p>
                <footer className="text-xs text-gray-400">— Martine V., Hyères, février 2026</footer>
              </blockquote>
            </section>

            {/* Dark CTA */}
            <section className="bg-dark text-white rounded-[2.5rem] px-8 py-10 mb-14">
              <h2 className="text-2xl md:text-3xl serif mb-4">Réservez votre Head Spa duo à Hyères</h2>
              <p className="text-gray-300 font-light text-sm mb-8">
                Pour un duo, appelez-nous directement — Salomé organisera les créneaux consécutifs selon vos disponibilités. Précisez l'occasion si vous le souhaitez&nbsp;: elle adore créer des moments mémorables.
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
                    q: 'Comment réserver un Head Spa duo chez Bianco ?',
                    a: "Appelez-nous au 07 49 96 76 91 — la réservation d'un duo se fait toujours par téléphone pour coordonner les deux créneaux. Salomé vous proposera plusieurs options selon vos disponibilités.",
                  },
                  {
                    q: 'Le Head Spa duo est-il disponible le week-end ?',
                    a: "Bianco est ouvert du lundi au vendredi, de 10h à 18h. Pour une occasion spéciale le week-end, contactez-nous — des arrangements ponctuels sont parfois possibles.",
                  },
                  {
                    q: 'Peut-on offrir un Head Spa duo en bon cadeau ?',
                    a: "Oui, nous proposons des bons cadeaux duo. Contactez-nous pour les détails et le tarif exact.",
                  },
                  {
                    q: 'Le Head Spa convient-il aux hommes ?',
                    a: "Absolument. Le massage cuir chevelu est apprécié par les hommes comme par les femmes. Plusieurs duos mixtes ont découvert le Head Spa chez Bianco. Voir notre page Head Spa Hyères pour les détails.",
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
                Certains moments se vivent mieux à deux. Le Head Spa duo chez Bianco fait partie de ces expériences qu'on n'oublie pas — parce qu'on les a partagées avec quelqu'un qu'on aime.{' '}
                <Link to="/head-spa-hyeres" className="text-primary font-semibold hover:underline">
                  Découvrez le Head Spa à Hyères →
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

export default HeadSpaDuoPage;
