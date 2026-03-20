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
      name: 'Soin visage éclat à Hyères — Teint lumineux & fraîcheur | Bianco Esthétique',
      description: 'Soin visage éclat à Hyères : teint lumineux, revitalisation cutanée, fraîcheur immédiate. Institut Bianco Esthétique, 3 Av. Ernest Millet. Salomé, esthéticienne diplômée.',
      url: `${SITE_URL}/soin-visage-eclat-hyeres`,
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
          { '@type': 'ListItem', position: 2, name: 'Soin visage éclat à Hyères', item: `${SITE_URL}/soin-visage-eclat-hyeres` },
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
          name: 'À quelle fréquence faire un soin visage éclat ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Pour maintenir un teint lumineux toute l'année, une séance mensuelle est idéale. En été, la chaleur et le soleil à Hyères fatiguent davantage la peau — une séance toutes les 3 semaines peut être bénéfique.",
          },
        },
        {
          '@type': 'Question',
          name: 'Le soin visage éclat est-il adapté aux peaux mixtes ou grasses ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui. Salomé adapte les actifs utilisés selon votre type de peau. Pour les peaux mixtes à grasses, le protocole intègre des ingrédients régulateurs de sébum sans dessécher les zones sèches.",
          },
        },
        {
          '@type': 'Question',
          name: "Peut-on faire un soin éclat après une exposition au soleil ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Il est préférable d'attendre 48 à 72 heures après une exposition solaire intense avant un soin visage. Si la peau est simplement bronzée et non brûlée, une séance douce est possible — Salomé adaptera le protocole.",
          },
        },
        {
          '@type': 'Question',
          name: 'Quel est le tarif du soin visage éclat chez Bianco Esthétique à Hyères ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Le soin éclat express est à 65 € (55 min). Le protocole complet est à partir de 80 € (1h15). Les tarifs détaillés sont disponibles sur notre page Tarifs.",
          },
        },
      ],
    },
  ],
};

const SoinVisageEclatPage: React.FC = () => {
  const phoneHref = `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    const prev = document.title;
    document.title = 'Soin visage éclat à Hyères — Teint lumineux & fraîcheur | Bianco Esthétique';
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute('content') ?? '';
    meta?.setAttribute(
      'content',
      'Soin visage éclat à Hyères : teint lumineux, revitalisation cutanée, fraîcheur immédiate. Institut Bianco Esthétique, 3 Av. Ernest Millet. Salomé, esthéticienne diplômée.'
    );
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}/soin-visage-eclat-hyeres`;
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
                { label: 'Soin visage éclat à Hyères' },
              ]}
            />
            <header className="mb-12">
              <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">
                Hyères — Soin Visage Éclat
              </span>
              <h1 className="text-4xl md:text-5xl serif text-dark mb-6 leading-tight">
                Soin visage éclat à Hyères : retrouvez la luminosité que vous avez perdue
              </h1>
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
                Le teint terne, c'est l'ennemi n°1. Fatigue, stress, manque d'hydratation, exposition au soleil — la peau accumule et perd de sa luminosité naturelle. Le soin visage éclat chez Bianco travaille sur toutes ces causes à la fois : nettoyage en profondeur, exfoliation douce, hydratation intensive et massage drainant pour un résultat qui parle de lui-même.
              </p>
            </header>

            <section className="mb-12 bg-primary/5 border-l-4 border-primary px-6 py-5 rounded-r-2xl">
              <p className="text-dark text-sm md:text-base font-light leading-relaxed italic">
                Le soin visage éclat proposé par Bianco Esthétique à Hyères agit sur la luminosité du teint par une combinaison d'exfoliation enzymatique, d'application de sérum vitamine C et d'effleurages drainants qui activent la microcirculation. Salomé Bianco observe en séance que la grande majorité des clientes présentant un teint terne souffrent d'une déshydratation cutanée sous-jacente — corrigée en une seule séance intensive.
              </p>
            </section>

            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-3">Les soins visage éclat chez Bianco</h2>
              <p className="text-gray-500 font-light text-sm md:text-base mb-8">
                Selon l'état de votre peau et votre objectif, Salomé propose différentes approches :
              </p>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Soin éclat express</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Un soin efficace en moins d'une heure. Nettoyage, gommage doux, masque éclat et massage drainant. Idéal avant un événement, un mariage ou simplement pour retrouver bonne mine après une semaine chargée.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">65 € — 55min</p>
                  <Link to="/soin-visage-hyeres" className="text-primary text-sm font-semibold hover:underline">
                    Voir tous les soins visage →
                  </Link>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Soin éclat complet avec masque haute dose</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Le protocole complet intègre une double exfoliation (mécanique + enzymatique), un masque éclat à haute concentration et un massage du décolleté. Résultat : peau lissée, teint unifié, luminosité retrouvée.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 80 € — 1h15</p>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Association éclat + drainage corps</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Pour les occasions importantes, combinez un soin éclat visage avec un drainage lymphatique corps. Teint lumineux et silhouette légère en une demi-journée — notre combo 'événement' le plus demandé.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 165 € — demi-journée</p>
                  <Link to="/drainage-lymphatique-minceur-hyeres" className="text-primary text-sm font-semibold hover:underline">
                    En savoir plus sur le drainage →
                  </Link>
                </div>
              </div>
            </section>

            <section className="mb-14">
              <blockquote className="bg-white rounded-2xl border border-gray-100 px-6 py-6">
                <p className="text-gray-500 font-light text-sm leading-relaxed italic mb-4">
                  "J'avais un mariage dans 4 jours et le teint grisâtre. Une séance de soin éclat chez Bianco et le lendemain matin, mes collègues m'ont demandé si j'avais changé quelque chose. La réponse était : oui, Bianco."
                </p>
                <footer className="text-xs text-gray-400">— Sophie F., La Londe-les-Maures, mai 2025</footer>
              </blockquote>
            </section>

            <section className="bg-dark text-white rounded-[2.5rem] px-8 py-10 mb-14">
              <h2 className="text-2xl md:text-3xl serif mb-4">Réservez votre soin visage éclat</h2>
              <p className="text-gray-300 font-light text-sm mb-8">
                Disponible du lundi au vendredi à Hyères. Pour une préparation à un événement, réservez idéalement 3 à 5 jours avant — le soin nécessite un léger délai pour que la peau exprime son plein éclat.
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
                    q: 'À quelle fréquence faire un soin visage éclat ?',
                    a: "Pour maintenir un teint lumineux toute l'année, une séance mensuelle est idéale. En été, la chaleur et le soleil à Hyères fatiguent davantage la peau — une séance toutes les 3 semaines peut être bénéfique.",
                  },
                  {
                    q: 'Le soin visage éclat est-il adapté aux peaux mixtes ou grasses ?',
                    a: "Oui. Salomé adapte les actifs utilisés selon votre type de peau. Pour les peaux mixtes à grasses, le protocole intègre des ingrédients régulateurs de sébum sans dessécher les zones sèches.",
                  },
                  {
                    q: "Peut-on faire un soin éclat après une exposition au soleil ?",
                    a: "Il est préférable d'attendre 48 à 72 heures après une exposition solaire intense avant un soin visage. Si la peau est simplement bronzée et non brûlée, une séance douce est possible — Salomé adaptera le protocole.",
                  },
                  {
                    q: 'Quel est le tarif du soin visage éclat chez Bianco Esthétique à Hyères ?',
                    a: (
                      <>
                        Le soin éclat express est à 65 € (55 min). Le protocole complet est à partir de 80 € (1h15). Les tarifs détaillés sont disponibles sur notre{' '}
                        <Link to="/tarifs" className="text-primary hover:underline">
                          page Tarifs
                        </Link>
                        .
                      </>
                    ),
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
                Votre éclat naturel est là, sous la fatigue accumulée. Chez Bianco, on sait le retrouver. Une séance suffit pour vous le rappeler. Si vous préparez un événement, découvrez aussi notre{' '}
                <Link to="/beaute-mariage-hyeres" className="text-primary hover:underline">
                  forfait beauté mariage
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

export default SoinVisageEclatPage;
