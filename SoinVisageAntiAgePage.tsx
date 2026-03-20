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
      name: 'Soin visage anti-âge à Hyères — Rides, relâchement, fermeté | Bianco',
      description: 'Soin visage anti-âge à Hyères chez Bianco Esthétique. Protocoles ciblés rides, fermeté et éclat. Salomé adapte chaque soin à votre peau. Sur rendez-vous.',
      url: `${SITE_URL}/soin-visage-anti-age-hyeres`,
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
          { '@type': 'ListItem', position: 2, name: 'Soin visage anti-âge à Hyères', item: `${SITE_URL}/soin-visage-anti-age-hyeres` },
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
          name: 'À partir de quel âge est recommandé un soin visage anti-âge ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "On peut commencer à 25-30 ans à titre préventif pour retarder l'apparition des signes. L'impact anti-âge curatif (sur les rides et le relâchement existants) prend toute sa dimension à partir de 35-40 ans.",
          },
        },
        {
          '@type': 'Question',
          name: 'Combien de séances faut-il pour voir une différence sur les rides ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Un éclat immédiat est visible dès la première séance. Pour un effet anti-âge durable sur les rides et la fermeté, Salomé recommande une cure de 4 séances sur 6 semaines, puis une séance mensuelle d'entretien.",
          },
        },
        {
          '@type': 'Question',
          name: 'Le soin visage anti-âge convient-il aux peaux sensibles ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, Salomé adapte les actifs utilisés à votre type de peau. Les peaux sensibles bénéficient de formules plus douces sans perdre en efficacité. Indiquez votre type de peau lors de la réservation.",
          },
        },
        {
          '@type': 'Question',
          name: 'Peut-on combiner le soin anti-âge avec un massage corps ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, beaucoup de clientes combinent soin visage anti-âge et massage corps le même jour. C'est l'une des associations les plus appréciées de notre journée beauté.",
          },
        },
      ],
    },
  ],
};

const SoinVisageAntiAgePage: React.FC = () => {
  const phoneHref = `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    const prev = document.title;
    document.title = 'Soin visage anti-âge à Hyères — Rides, relâchement, fermeté | Bianco';
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute('content') ?? '';
    meta?.setAttribute(
      'content',
      'Soin visage anti-âge à Hyères chez Bianco Esthétique. Protocoles ciblés rides, fermeté et éclat. Salomé adapte chaque soin à votre peau. Sur rendez-vous.'
    );
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}/soin-visage-anti-age-hyeres`;
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
                { label: 'Soin visage anti-âge à Hyères' },
              ]}
            />
            <header className="mb-12">
              <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">
                Hyères — Soin Visage Anti-Âge
              </span>
              <h1 className="text-4xl md:text-5xl serif text-dark mb-6 leading-tight">
                Soin visage anti-âge à Hyères : ralentir le temps, sublimer votre peau
              </h1>
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
                À partir de 35 ans, la peau change : les premières rides s'installent, le teint se ternit, le contour se relâche légèrement. Ce n'est pas une fatalité — c'est une invitation à adapter ses soins. Chez Bianco, Salomé travaille avec des protocoles anti-âge personnalisés qui agissent sur plusieurs fronts à la fois : hydratation profonde, stimulation du collagène, drainage des poches et remodelage du contour.
              </p>
            </header>

            <section className="mb-12 bg-primary/5 border-l-4 border-primary px-6 py-5 rounded-r-2xl">
              <p className="text-dark text-sm md:text-base font-light leading-relaxed italic">
                Chez Bianco Esthétique à Hyères, le soin visage anti-âge s'appuie sur un diagnostic cutané préalable et une combinaison de techniques : massage de drainage facial, application de sérum actif à haute concentration, et modelage manuel du contour. Salomé Bianco, esthéticienne diplômée MAF, adapte chaque protocole au type de peau et aux préoccupations spécifiques de la cliente — ce qui différencie fondamentalement ce soin d'un protocole standard.
              </p>
            </section>

            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-3">Les soins visage anti-âge proposés par Bianco</h2>
              <p className="text-gray-500 font-light text-sm md:text-base mb-8">
                Salomé propose plusieurs niveaux d'intervention selon vos préoccupations et votre budget :
              </p>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Soin visage anti-âge 1h</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Le protocole anti-âge complet commence par un nettoyage en profondeur, suivi d'un gommage enzymatique doux, d'une application de sérum actif et d'un massage modelant du visage, cou et décolleté. Résultat immédiat : teint lumineux, traits décontractés, contour redéfini.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 75 € — 1h</p>
                  <Link to="/soin-visage-hyeres" className="text-primary text-sm font-semibold hover:underline">
                    Voir tous nos soins visage →
                  </Link>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Soin visage anti-âge intensif</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Pour les peaux plus matures ou les clientes qui souhaitent une action plus profonde. Ce protocole prolongé intègre un masque haute efficacité et un massage du cuir chevelu en fin de séance. Une expérience complète qui laisse la peau transformée.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 95 € — 1h30</p>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Cure anti-âge 4 séances</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Les résultats les plus spectaculaires s'obtiennent avec une cure. Salomé conçoit un programme de 4 séances sur 6 semaines, avec progression dans les actifs utilisés. Entre les séances, elle vous guide sur les soins à domicile qui maximiseront l'effet.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">Tarif sur demande — nous appeler</p>
                  <a href={phoneHref} className="text-primary text-sm font-semibold hover:underline">
                    Nous appeler pour un devis →
                  </a>
                </div>
              </div>
            </section>

            <section className="mb-14">
              <blockquote className="bg-white rounded-2xl border border-gray-100 px-6 py-6">
                <p className="text-gray-500 font-light text-sm leading-relaxed italic mb-4">
                  "J'avais des rides naissantes et un teint terne depuis ma grossesse. Après 3 séances anti-âge chez Bianco, mon mari a remarqué sans que je lui dise rien. C'est la meilleure validation possible."
                </p>
                <footer className="text-xs text-gray-400">— Nathalie B., Hyères, novembre 2025</footer>
              </blockquote>
            </section>

            <section className="bg-dark text-white rounded-[2.5rem] px-8 py-10 mb-14">
              <h2 className="text-2xl md:text-3xl serif mb-4">Commencez votre cure anti-âge à Hyères</h2>
              <p className="text-gray-300 font-light text-sm mb-8">
                Le premier rendez-vous est un diagnostic. Salomé évalue votre peau et conçoit un programme adapté — pas de protocole identique pour deux clientes.
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
                    q: 'À partir de quel âge est recommandé un soin visage anti-âge ?',
                    a: "On peut commencer à 25-30 ans à titre préventif pour retarder l'apparition des signes. L'impact anti-âge curatif (sur les rides et le relâchement existants) prend toute sa dimension à partir de 35-40 ans.",
                  },
                  {
                    q: 'Combien de séances faut-il pour voir une différence sur les rides ?',
                    a: "Un éclat immédiat est visible dès la première séance. Pour un effet anti-âge durable sur les rides et la fermeté, Salomé recommande une cure de 4 séances sur 6 semaines, puis une séance mensuelle d'entretien.",
                  },
                  {
                    q: 'Le soin visage anti-âge convient-il aux peaux sensibles ?',
                    a: "Oui, Salomé adapte les actifs utilisés à votre type de peau. Les peaux sensibles bénéficient de formules plus douces sans perdre en efficacité. Indiquez votre type de peau lors de la réservation.",
                  },
                  {
                    q: 'Peut-on combiner le soin anti-âge avec un massage corps ?',
                    a: (
                      <>
                        Oui, beaucoup de clientes combinent soin visage anti-âge et massage corps le même jour. C'est l'une des associations les plus appréciées de notre{' '}
                        <Link to="/journee-beaute-hyeres" className="text-primary hover:underline">
                          journée beauté
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
                Votre peau mérite le meilleur — et le meilleur, c'est ce qui est fait pour elle, pas pour quelqu'un d'autre. Chez Bianco, chaque soin visage anti-âge est taillé sur mesure.
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

export default SoinVisageAntiAgePage;
