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
      name: 'Soin visage homme à Hyères — Peau masculine adaptée | Bianco Esthétique',
      description: 'Soin visage homme à Hyères chez Bianco Esthétique. Protocoles adaptés à la peau masculine : post-rasage, hydratation, anti-âge. Sur rendez-vous, discret et efficace.',
      url: `${SITE_URL}/soin-visage-homme-hyeres`,
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
          { '@type': 'ListItem', position: 2, name: 'Soin visage homme à Hyères', item: `${SITE_URL}/soin-visage-homme-hyeres` },
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
          name: 'Les soins visage chez Bianco sont-ils réservés aux femmes ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Non, Bianco accueille une clientèle masculine pour tous les soins : visage, massage, drainage, Head Spa. Salomé adapte chaque protocole aux spécificités de la peau de chaque client.",
          },
        },
        {
          '@type': 'Question',
          name: "Un soin visage homme est-il différent d'un soin femme ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "La peau masculine a des caractéristiques spécifiques (épaisseur, sébum, irritation post-rasage) qui justifient des adaptations dans les actifs utilisés et les techniques de massage. Salomé ajuste le protocole en conséquence.",
          },
        },
        {
          '@type': 'Question',
          name: 'Le Head Spa est-il disponible pour les hommes ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, le Head Spa est particulièrement apprécié des hommes. Le massage du cuir chevelu est profond et tonifiant — une expérience très différente d'un simple shampoing. Voir notre page Head Spa Hyères.",
          },
        },
        {
          '@type': 'Question',
          name: 'Faut-il se raser avant un soin visage ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Pas nécessairement. Si vous venez pour un soin post-rasage, rasez-vous le matin même. Pour un soin anti-âge ou hydratant, une barbe courte est compatible — Salomé adapte le protocole.",
          },
        },
      ],
    },
  ],
};

const SoinVisageHommePage: React.FC = () => {
  const phoneHref = `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    const prev = document.title;
    document.title = 'Soin visage homme à Hyères — Peau masculine adaptée | Bianco Esthétique';
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute('content') ?? '';
    meta?.setAttribute(
      'content',
      'Soin visage homme à Hyères chez Bianco Esthétique. Protocoles adaptés à la peau masculine : post-rasage, hydratation, anti-âge. Sur rendez-vous, discret et efficace.'
    );
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}/soin-visage-homme-hyeres`;
    return () => {
      document.title = prev;
      if (meta && prevDesc) meta.setAttribute('content', prevDesc);
    };
  }, []);

  const overrides = usePageOverrides('/soin-visage-homme-hyeres');

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
                { label: 'Soin visage homme à Hyères' },
              ]}
            />
            <header className="mb-12">
              <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">
                Hyères — Soin Visage Homme
              </span>
              <h1 className="text-4xl md:text-5xl serif text-dark mb-6 leading-tight">
                {overrides?.h1 || 'Soin visage homme à Hyères : prendre soin de sa peau sans chichis'}
              </h1>
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
                {overrides?.subtitle || "La peau des hommes est différente — plus épaisse, plus grasse, soumise aux agressions du rasage quotidien. Et pourtant, elle souffre des mêmes problèmes que la peau des femmes : déshydratation, rides, teint terne. Chez Bianco, Salomé reçoit des hommes avec la même attention et les mêmes protocoles adaptés — efficaces, directs, sans superflu."}
              </p>
            </header>

            <section className="mb-12 bg-primary/5 border-l-4 border-primary px-6 py-5 rounded-r-2xl">
              <p className="text-dark text-sm md:text-base font-light leading-relaxed italic">
                Bianco Esthétique à Hyères propose des soins visage spécifiquement adaptés à la peau masculine : protocoles post-rasage pour apaiser les irritations, soins hydratants profonds pour les peaux desséchées par le rasoir, et soins anti-âge adaptés aux rides plus marquées que développent généralement les hommes. Salomé accueille une clientèle masculine croissante dans son institut de 3 Av. Ernest Millet.
              </p>
            </section>

            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-3">Les soins visage homme chez Bianco</h2>
              <p className="text-gray-500 font-light text-sm md:text-base mb-8">
                Pas de protocole 'genré' artificiel — juste les meilleurs soins adaptés aux spécificités de la peau masculine :
              </p>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Soin post-rasage apaisant</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Le rasage quotidien irrite la peau, créée des micro-inflammations et appauvrit le film hydrolipidique. Ce soin traite les rougeurs, apaise l'irritation et pose une barrière protectrice durable. Résultat : une peau confortable qui tient toute la journée.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 65 € — 55min</p>
                  <Link to="/soin-visage-hyeres" className="text-primary text-sm font-semibold hover:underline">
                    Voir tous nos soins visage →
                  </Link>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Soin anti-âge homme</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    La peau masculine vieillit différemment — les rides sont plus profondes, le teint grisâtre plus marqué avec le stress et le tabac. Le protocole anti-âge homme travaille sur la densité cutanée, le teint et les sillons profonds.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 80 € — 1h15</p>
                  <Link to="/soin-visage-anti-age-hyeres" className="text-primary text-sm font-semibold hover:underline">
                    En savoir plus sur le soin anti-âge →
                  </Link>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Massage facial relaxant</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Le massage facial n'est pas réservé aux femmes. Il décontracte les mâchoires (souvent crispées par le stress), relâche les tensions du front et du crâne, et produit un effet détente immédiat visible sur les traits.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 70 € — 1h</p>
                </div>
              </div>
            </section>

            <section className="mb-14">
              <blockquote className="bg-white rounded-2xl border border-gray-100 px-6 py-6">
                <p className="text-gray-500 font-light text-sm leading-relaxed italic mb-4">
                  "Mon épouse m'a offert un soin visage chez Bianco pour mon anniversaire. Je suis parti sceptique. Je suis revenu la semaine suivante prendre mon propre rendez-vous. Résultat impeccable, accueil professionnel."
                </p>
                <footer className="text-xs text-gray-400">— Sébastien M., Hyères, octobre 2025</footer>
              </blockquote>
            </section>

            <section className="bg-dark text-white rounded-[2.5rem] px-8 py-10 mb-14">
              <h2 className="text-2xl md:text-3xl serif mb-4">Réservez votre soin visage à Hyères</h2>
              <p className="text-gray-300 font-light text-sm mb-8">
                Bianco accueille les hommes sans rendez-vous préalable pour une consultation — mais la réservation est recommandée pour garantir votre créneau. Discrétion et efficacité assurées.
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
                    q: 'Les soins visage chez Bianco sont-ils réservés aux femmes ?',
                    a: "Non, Bianco accueille une clientèle masculine pour tous les soins : visage, massage, drainage, Head Spa. Salomé adapte chaque protocole aux spécificités de la peau de chaque client.",
                  },
                  {
                    q: "Un soin visage homme est-il différent d'un soin femme ?",
                    a: "La peau masculine a des caractéristiques spécifiques (épaisseur, sébum, irritation post-rasage) qui justifient des adaptations dans les actifs utilisés et les techniques de massage. Salomé ajuste le protocole en conséquence.",
                  },
                  {
                    q: 'Le Head Spa est-il disponible pour les hommes ?',
                    a: (
                      <>
                        Oui, le Head Spa est particulièrement apprécié des hommes. Le massage du cuir chevelu est profond et tonifiant — une expérience très différente d'un simple shampoing. Voir notre page{' '}
                        <Link to="/head-spa-hyeres" className="text-primary hover:underline">
                          Head Spa Hyères
                        </Link>
                        .
                      </>
                    ),
                  },
                  {
                    q: 'Faut-il se raser avant un soin visage ?',
                    a: "Pas nécessairement. Si vous venez pour un soin post-rasage, rasez-vous le matin même. Pour un soin anti-âge ou hydratant, une barbe courte est compatible — Salomé adapte le protocole.",
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
                Prendre soin de sa peau n'a pas de genre. Chez Bianco, on accueille toutes les peaux, tous les types, toutes les attentes — avec la même expertise et la même discrétion.
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

export default SoinVisageHommePage;
