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
      name: 'Microdermabrasion à Hyères — Alternative & soins exfoliants | Bianco',
      description: "Vous cherchez la microdermabrasion à Hyères ? Bianco propose des alternatives efficaces : gommage enzymatique, peeling doux, soins exfoliants. Sur rendez-vous.",
      url: `${SITE_URL}/microdermabrasion-hyeres`,
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
          { '@type': 'ListItem', position: 2, name: 'Microdermabrasion à Hyères', item: `${SITE_URL}/microdermabrasion-hyeres` },
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
          name: 'Bianco Esthétique propose-t-elle la microdermabrasion ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Non, Bianco ne dispose pas de l'équipement de microdermabrasion médical. Nous proposons des alternatives esthétiques efficaces : gommage enzymatique, peeling AHA et soins exfoliants intensifs.",
          },
        },
        {
          '@type': 'Question',
          name: 'Le peeling esthétique donne-t-il les mêmes résultats que la microdermabrasion ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Les résultats sont comparables sur l'éclat du teint, le lissage de surface et la réduction légère des taches. La microdermabrasion médicale agit plus en profondeur sur les cicatrices marquées. Pour les améliorations esthétiques courantes, nos soins sont très efficaces.",
          },
        },
        {
          '@type': 'Question',
          name: 'Les peelings sont-ils compatibles avec une peau sensible ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, avec les bonnes concentrations et un protocole adapté. Salomé commence toujours par les concentrations les plus basses et augmente progressivement selon la tolérance. Les peaux très sensibles bénéficient de l'exfoliation enzymatique plutôt que des acides.",
          },
        },
        {
          '@type': 'Question',
          name: 'Faut-il éviter le soleil après un peeling ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, une protection solaire SPF 50+ est indispensable pendant les 10 jours suivant un soin exfoliant. Salomé vous fournira toutes les recommandations post-soins avant votre départ.",
          },
        },
      ],
    },
  ],
};

const MicrodermabrasionPage: React.FC = () => {
  const phoneHref = `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    const prev = document.title;
    document.title = 'Microdermabrasion à Hyères — Alternative & soins exfoliants | Bianco';
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute('content') ?? '';
    meta?.setAttribute(
      'content',
      "Vous cherchez la microdermabrasion à Hyères ? Bianco propose des alternatives efficaces : gommage enzymatique, peeling doux, soins exfoliants. Sur rendez-vous."
    );
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}/microdermabrasion-hyeres`;
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
                { label: 'Microdermabrasion à Hyères' },
              ]}
            />
            <header className="mb-12">
              <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">
                Hyères — Exfoliation & Renouvellement Cutané
              </span>
              <h1 className="text-4xl md:text-5xl serif text-dark mb-6 leading-tight">
                Microdermabrasion à Hyères : ce que Bianco propose en alternative
              </h1>
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
                La microdermabrasion est une technique médicale ou para-médicale qui utilise des micro-cristaux ou un disque diamanté pour abraser mécaniquement la surface de la peau. Bianco Esthétique ne dispose pas de cet équipement médical. En revanche, nous proposons des alternatives esthétiques très efficaces pour obtenir des résultats similaires : exfoliation profonde, renouvellement cellulaire accéléré et teint revitalisé.
              </p>
            </header>

            <section className="mb-12 bg-primary/5 border-l-4 border-primary px-6 py-5 rounded-r-2xl">
              <p className="text-dark text-sm md:text-base font-light leading-relaxed italic">
                Bianco Esthétique à Hyères propose en alternative à la microdermabrasion des soins d'exfoliation enzymatique et d'acide glycolique à usage esthétique (concentrations adaptées à l'usage non médical) qui produisent des effets comparables sur le renouvellement cellulaire, l'éclat du teint et l'atténuation des taches superficielles. Salomé Bianco adapte la concentration et le temps de pose selon la tolérance cutanée de chaque cliente.
              </p>
            </section>

            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-3">Où trouver la microdermabrasion à Hyères ?</h2>
              <p className="text-gray-500 font-light text-sm md:text-base">
                La microdermabrasion est pratiquée par des dermatologues et certains centres esthétiques médicalisés. Dans la région de Hyères et Toulon, orientez-vous vers des cabinets de dermatologie ou des centres de médecine esthétique. Cette technique nécessite un équipement spécifique et une formation médicale.
              </p>
            </section>

            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-3">Ce que Bianco propose à la place</h2>
              <p className="text-gray-500 font-light text-sm md:text-base mb-8">
                Nos alternatives esthétiques donnent des résultats réels et progressifs, sans les contraintes post-traitement de la microdermabrasion (éviction solaire stricte, rougeurs) :
              </p>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Gommage enzymatique profond</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    L'exfoliation enzymatique utilise des enzymes (papaïne, bromélaïne) pour dissoudre les cellules mortes sans friction mécanique. Résultat : peau lissée, teint unifié, pores moins visibles. Idéal pour les peaux sensibles ou réactives aux gommages mécaniques.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">Inclus dans les soins visage à partir de 75 €</p>
                  <Link to="/soin-visage-eclat-hyeres" className="text-primary text-sm font-semibold hover:underline">
                    Voir le soin éclat →
                  </Link>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Peeling doux aux acides de fruits</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Les acides AHA (glycolique, lactique) accélèrent le renouvellement cellulaire et atténuent les taches brunes superficielles. Salomé utilise des concentrations adaptées à l'usage esthétique, progressivement selon votre tolérance.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 80 € — 1h15</p>
                  <Link to="/soin-visage-anti-age-hyeres" className="text-primary text-sm font-semibold hover:underline">
                    Voir le soin anti-âge →
                  </Link>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Soin unificateur taches et irrégularités</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Pour les taches solaires, les cicatrices superficielles ou le teint inégal, Salomé compose un protocole spécifique combinant actifs dépigmentants doux, exfoliation et hydratation intensive.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 85 € — 1h15</p>
                  <Link to="/soin-visage-peau-sensible-hyeres" className="text-primary text-sm font-semibold hover:underline">
                    Voir le soin peau sensible →
                  </Link>
                </div>
              </div>
            </section>

            <section className="mb-14">
              <blockquote className="bg-white rounded-2xl border border-gray-100 px-6 py-6">
                <p className="text-gray-500 font-light text-sm leading-relaxed italic mb-4">
                  "Je cherchais la microdermabrasion pour mes cicatrices d'acné légères. Bianco m'a proposé un peeling aux acides. Après 3 séances, le résultat est vraiment comparable à ce qu'on me décrivait pour la micro. Et sans les effets secondaires."
                </p>
                <footer className="text-xs text-gray-400">— Amélie R., Toulon, septembre 2025</footer>
              </blockquote>
            </section>

            <section className="bg-dark text-white rounded-[2.5rem] px-8 py-10 mb-14">
              <h2 className="text-2xl md:text-3xl serif mb-4">Prenez rendez-vous pour votre bilan peau</h2>
              <p className="text-gray-300 font-light text-sm mb-8">
                Avant de choisir votre protocole exfoliant, Salomé fait un diagnostic précis de votre peau. Ce bilan vous permet de comprendre ce dont votre peau a besoin — et ce qui vous donnera les meilleurs résultats.
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
                    q: 'Bianco Esthétique propose-t-elle la microdermabrasion ?',
                    a: "Non, Bianco ne dispose pas de l'équipement de microdermabrasion médical. Nous proposons des alternatives esthétiques efficaces : gommage enzymatique, peeling AHA et soins exfoliants intensifs.",
                  },
                  {
                    q: 'Le peeling esthétique donne-t-il les mêmes résultats que la microdermabrasion ?',
                    a: "Les résultats sont comparables sur l'éclat du teint, le lissage de surface et la réduction légère des taches. La microdermabrasion médicale agit plus en profondeur sur les cicatrices marquées. Pour les améliorations esthétiques courantes, nos soins sont très efficaces.",
                  },
                  {
                    q: 'Les peelings sont-ils compatibles avec une peau sensible ?',
                    a: (
                      <>
                        Oui, avec les bonnes concentrations et un protocole adapté. Salomé commence toujours par les concentrations les plus basses et augmente progressivement selon la tolérance. Les peaux très sensibles bénéficient de l'exfoliation enzymatique plutôt que des acides. Voir notre{' '}
                        <Link to="/soin-visage-peau-sensible-hyeres" className="text-primary hover:underline">
                          soin visage peau sensible
                        </Link>
                        .
                      </>
                    ),
                  },
                  {
                    q: 'Faut-il éviter le soleil après un peeling ?',
                    a: "Oui, une protection solaire SPF 50+ est indispensable pendant les 10 jours suivant un soin exfoliant. Salomé vous fournira toutes les recommandations post-soins avant votre départ.",
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
                La microdermabrasion a ses avantages — mais elle n'est pas la seule voie vers une peau renouvelée. Chez Bianco, on vous propose ce qu'on sait faire avec excellence. Et parfois, c'est mieux que ce qu'on pensait chercher.
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

export default MicrodermabrasionPage;
