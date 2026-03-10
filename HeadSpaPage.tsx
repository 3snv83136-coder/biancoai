import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BUSINESS_INFO } from './constants';

const HeadSpaPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const prevTitle = document.title;
    const prevDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '';

    document.title = 'Head Spa à Hyères | Rituel cuir chevelu & détente profonde';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        "Découvrez le head spa à Hyères chez Bianco Esthétique : massage crânien, détente profonde de la nuque et du cuir chevelu, rituel inspiré du Japon."
      );
    }

    let canonicalLink = document.querySelector('link[rel=\"canonical\"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://www.bianco-esthetique.fr/head-spa-hyeres';

    const faqJsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BeautySalon',
          name: 'Bianco Esthétique',
          url: 'https://www.bianco-esthetique.fr/head-spa-hyeres',
          telephone: '+33749769691',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '3 Avenue Ernest Millet',
            addressLocality: 'Hyères',
            postalCode: '83400',
            addressCountry: 'FR',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: '43.1199',
            longitude: '6.1314',
          },
          areaServed: [
            { '@type': 'City', name: 'Hyères' },
            { '@type': 'City', name: 'Carqueiranne' },
            { '@type': 'City', name: 'La Crau' },
            { '@type': 'City', name: 'La Londe-les-Maures' },
          ],
          priceRange: '€€',
          sameAs: [BUSINESS_INFO.instagram, BUSINESS_INFO.facebook, BUSINESS_INFO.planityUrl],
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Qu’est-ce qu’un head spa à Hyères ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  "Le head spa est un rituel dédié au cuir chevelu et à la nuque, inspiré des techniques japonaises. Il associe massage crânien, manœuvres ciblées et détente profonde pour relâcher les tensions accumulées.",
              },
            },
            {
              '@type': 'Question',
              name: 'À qui s’adresse le head spa ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  "Le head spa convient aux femmes et aux hommes qui souhaitent soulager les tensions au niveau de la tête, de la nuque et des épaules, ou simplement s’offrir un moment de relaxation profonde.",
              },
            },
            {
              '@type': 'Question',
              name: 'Combien de temps dure une séance de head spa ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  'Selon la formule choisie, une séance de head spa dure en moyenne entre 45 minutes et 1h15. Le temps inclut un court échange, l’installation et le rituel de massage.',
              },
            },
            {
              '@type': 'Question',
              name: 'Comment se préparer à un head spa ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  'Il est conseillé d’arriver quelques minutes en avance, d’éviter les coiffures trop serrées et les repas trop lourds avant la séance. Après le soin, privilégiez le calme et l’hydratation.',
              },
            },
          ],
        },
      ],
    };

    const breadcrumb = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.bianco-esthetique.fr' },
        { '@type': 'ListItem', position: 2, name: 'Head Spa à Hyères', item: 'https://www.bianco-esthetique.fr/head-spa-hyeres' },
      ],
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqJsonLd);
    document.head.appendChild(script);

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify(breadcrumb);
    document.head.appendChild(breadcrumbScript);

    return () => {
      document.title = prevTitle;
      const m = document.querySelector('meta[name="description"]');
      if (m && prevDesc) m.setAttribute('content', prevDesc);
      [script, breadcrumbScript].forEach((s) => {
        if (s.parentNode) s.parentNode.removeChild(s);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-surface">
      <Navbar onLinkClick={() => {}} />

      <main className="pt-28 md:pt-32 pb-20">
        <section className="px-6">
          <div className="max-w-5xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-10 px-5 py-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour à l&apos;accueil
            </Link>

            <header className="mb-14">
              <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">
                Rituel bien-être à Hyères
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl serif text-dark mb-4">
                Head Spa à Hyères
              </h1>
              <p className="text-gray-500 font-light text-sm md:text-base max-w-2xl">
                Un soin dédié au cuir chevelu et à la nuque, inspiré des rituels japonais, pour relâcher les tensions et retrouver une
                sensation de légèreté profonde.
              </p>
            </header>

            <section className="grid md:grid-cols-2 gap-10 md:gap-16 mb-16">
              <div className="space-y-6 text-gray-600 font-light text-sm md:text-base leading-relaxed">
                <h2 className="text-2xl serif text-dark">Un soin centré sur le cuir chevelu</h2>
                <p>
                  Lors d’un head spa, le travail se concentre sur le cuir chevelu, la nuque et le haut des épaules. Les manœuvres sont
                  lentes, enveloppantes et ciblées pour délier les tensions accumulées par le stress, les écrans ou la posture.
                </p>
                <p>
                  À Hyères, le rituel est pensé comme une véritable parenthèse : lumière douce, ambiance calme et gestes précis pour vous
                  aider à déconnecter vraiment.
                </p>
                <p>
                  Le head spa peut être envisagé en solo pour un moment pour soi ou offert en bon cadeau à un proche qui a besoin de
                  souffler.
                </p>
              </div>

              <div className="space-y-6 text-gray-600 font-light text-sm md:text-base leading-relaxed">
                <h2 className="text-2xl serif text-dark">Les bienfaits du head spa</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Diminution des tensions au niveau de la tête, de la nuque et des trapèzes.</li>
                  <li>Stimulation de la microcirculation du cuir chevelu.</li>
                  <li>Impression de légèreté, meilleure qualité de sommeil chez certaines personnes.</li>
                  <li>Moment de lâcher-prise profond, sans sollicitations extérieures.</li>
                </ul>
                <p>
                  Ce soin ne se substitue pas à un suivi médical, mais il complète parfaitement une démarche de bien-être globale.
                </p>
              </div>
            </section>

            <section className="grid md:grid-cols-2 gap-10 md:gap-16 mb-16">
              <div className="space-y-4 text-gray-600 font-light text-sm md:text-base leading-relaxed">
                <h2 className="text-2xl serif text-dark">Comment se déroule une séance ?</h2>
                <p>
                  La séance commence par un court échange pour comprendre vos besoins : fatigue, charge mentale, tensions localisées…
                  Ensuite, vous prenez place confortablement pendant que le rituel s’enchaîne sur le cuir chevelu, la nuque et les épaules.
                </p>
                <p>
                  La pression est ajustée en fonction de votre ressenti. Le but est de trouver l’équilibre entre efficacité et confort pour
                  que le corps puisse vraiment relâcher.
                </p>
              </div>
              <div className="space-y-4 text-gray-600 font-light text-sm md:text-base leading-relaxed">
                <h2 className="text-2xl serif text-dark">Avant et après votre head spa</h2>
                <p>
                  Avant la séance, évitez simplement les coiffures trop serrées et les repas très lourds. Après le soin, prévoyez si
                  possible un moment calme pour prolonger la détente et hydratez-vous bien.
                </p>
                <p>
                  Si vous avez des sensibilités particulières (migraine, tensions cervicales, cuir chevelu sensible), pensez à le signaler
                  dès le début pour adapter les gestes.
                </p>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl serif text-dark mb-4">Questions fréquentes</h2>
              <div className="space-y-4 text-gray-600 font-light text-sm md:text-base leading-relaxed">
                <details className="bg-white rounded-2xl border border-gray-100 px-4 py-3">
                  <summary className="cursor-pointer font-semibold text-dark">Le head spa graisse-t-il les cheveux&nbsp;?</summary>
                  <p className="mt-2">
                    Non, le rituel peut être réalisé avec très peu de produit ou avec des textures adaptées à votre type de cuir chevelu.
                    Vous pouvez repartir sans shampoing si vous le souhaitez, ou planifier votre séance un jour de repos.
                  </p>
                </details>
                <details className="bg-white rounded-2xl border border-gray-100 px-4 py-3">
                  <summary className="cursor-pointer font-semibold text-dark">
                    Puis-je faire un head spa si j’ai des extensions ou une coloration&nbsp;?
                  </summary>
                  <p className="mt-2">
                    Oui, sous réserve d&apos;en parler au préalable. Les manœuvres sont adaptées pour ne pas fragiliser vos cheveux ou vos
                    extensions. Informez toujours votre esthéticienne des prestations techniques récentes.
                  </p>
                </details>
                <details className="bg-white rounded-2xl border border-gray-100 px-4 py-3">
                  <summary className="cursor-pointer font-semibold text-dark">
                    Quelle fréquence est conseillée pour un head spa&nbsp;?
                  </summary>
                  <p className="mt-2">
                    Tout dépend de vos besoins : ponctuellement pour un lâcher-prise, ou en cure (par exemple une fois par mois) pour
                    accompagner une période de stress plus intense.
                  </p>
                </details>
              </div>
            </section>

            <section className="bg-dark text-white rounded-[2.5rem] px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 space-y-3">
                <h2 className="text-2xl md:text-3xl serif">Réserver votre head spa à Hyères</h2>
                <p className="text-sm md:text-base text-gray-300 font-light">
                  Les créneaux dédiés au head spa sont limités pour préserver la qualité du rituel. Réservez en ligne ou contactez le
                  salon pour trouver le moment qui vous convient le mieux.
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <a
                  href={BUSINESS_INFO.planityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors"
                >
                  Réserver sur Planity
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/40 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-dark transition-colors"
                >
                  Un conseil, appelez-nous
                </a>
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HeadSpaPage;

