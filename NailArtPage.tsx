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
      name: 'Nail art à Hyères — Décorations ongles sur gel & résine | Bianco',
      description:
        'Nail art à Hyères chez Bianco Esthétique. Dégradé, chrome, stamping, french revisitée. Sur pose gel ou ongles naturels. Salomé, technicienne ongulaire à Hyères.',
      url: `${SITE_URL}/nail-art-hyeres`,
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
            name: 'Nail art à Hyères',
            item: `${SITE_URL}/nail-art-hyeres`,
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
          name: 'Peut-on apporter sa propre photo de nail art chez Bianco ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, c'est même recommandé. Partagez votre inspiration via les coordonnées de l'institut (téléphone, réseaux sociaux) avant la séance. Salomé pourra vous dire si la technique est réalisable et préparer les matériaux.",
          },
        },
        {
          '@type': 'Question',
          name: "Le nail art dure-t-il autant qu'une pose gel classique ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, quand il est réalisé sur une base gel UV ou résine correctement préparée. Les décorations peintes protégées par une couche de finition tiennent aussi longtemps que la pose — 3 à 4 semaines.",
          },
        },
        {
          '@type': 'Question',
          name: 'Le nail art est-il disponible sur ongles naturels sans pose gel ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, Salomé peut réaliser des décorations sur ongles naturels avec du vernis semi-permanent. La tenue est plus courte (10-14 jours) mais l'effet immédiat est identique.",
          },
        },
        {
          '@type': 'Question',
          name: 'Combien coûte le nail art à Hyères chez Bianco ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Le nail art est facturé en supplément de la pose, selon la complexité : french revisitée dès 65 €, chrome +15-20 €, motifs élaborés sur devis. Contactez-nous pour une estimation personnalisée.",
          },
        },
      ],
    },
  ],
};

const NailArtPage: React.FC = () => {
  const phoneHref = `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    const prev = document.title;
    document.title = 'Nail art à Hyères — Décorations ongles sur gel & résine | Bianco';
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute('content') ?? '';
    meta?.setAttribute(
      'content',
      'Nail art à Hyères chez Bianco Esthétique. Dégradé, chrome, stamping, french revisitée. Sur pose gel ou ongles naturels. Salomé, technicienne ongulaire à Hyères.'
    );
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}/nail-art-hyeres`;

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
              { label: 'Nail art à Hyères' },
            ]} />

            <header className="mb-12">
              <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">
                Hyères — Nail Art &amp; Décoration
              </span>
              <h1 className="text-4xl md:text-5xl serif text-dark mb-6 leading-tight">
                Nail art à Hyères&nbsp;: des ongles qui racontent quelque chose
              </h1>
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
                Le nail art, ce n'est pas qu'une tendance — c'est une façon d'exprimer quelque chose sur soi sans un mot. Une french revisitée, un dégradé chromé, un motif floral discret ou des ongles monochromes ultra-nets&nbsp;: chaque choix dit quelque chose. Chez Bianco, Salomé transforme les idées en ongles.{' '}
                <Link to="/manucure-ongles-gel-hyeres" className="text-primary font-semibold hover:underline">
                  Découvrez aussi notre manucure →
                </Link>
              </p>
            </header>

            {/* Citation bait */}
            <section className="mb-12 bg-primary/5 border-l-4 border-primary px-6 py-5 rounded-r-2xl">
              <p className="text-dark text-sm md:text-base font-light leading-relaxed italic">
                Bianco Esthétique à Hyères propose du nail art sur pose gel ou ongles naturels&nbsp;: dégradé baby boomer et french revisitée (les techniques les plus demandées sur la Côte d'Azur), effets chrome miroir, stamping géométrique et décorations florales. Salomé adapte chaque design à la morphologie de la main et à l'occasion — quotidien, mariage, soirée.
              </p>
            </section>

            {/* H2 section */}
            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-3">
                Les techniques de nail art chez Bianco
              </h2>
              <p className="text-gray-500 font-light text-sm md:text-base mb-8">
                Les techniques proposées, du plus classique au plus audacieux&nbsp;:
              </p>
              <div className="space-y-6">

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">French revisitée &amp; baby boomer</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    La french classique ne plaît plus à tout le monde — la version revisitée (pointe colorée, asymétrique, ultra-fine) est maintenant plus demandée. Le baby boomer (dégradé blanc-rose) reste la valeur sûre pour un résultat naturel et soigné.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">Inclus dans la pose à partir de 65 €</p>
                  <Link
                    to="/pose-ongles-gel-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Voir la pose ongles gel →
                  </Link>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Chrome miroir &amp; effets métalliques</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Le chrome donne un effet miroir spectaculaire sur n'importe quelle couleur. Appliqué en poudre sur la pose gel, il est ultra-résistant. Doré, argenté, holographique ou bicolore — les possibilités sont infinies.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">Supplément 15-20 € sur la pose</p>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Motifs peints &amp; stamping</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Pour les occasions spéciales (mariage, soirée, été), Salomé réalise des motifs peints à la main ou par stamping. Fleurs délicates, géométrie graphique, abstrait — elle s'adapte à votre univers et à votre style.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">Supplément selon complexité — nous demander</p>
                  <Link
                    to="/beaute-mariage-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Voir aussi les soins mariage →
                  </Link>
                </div>

              </div>
            </section>

            {/* Testimonial */}
            <section className="mb-14">
              <blockquote className="bg-white rounded-2xl border border-gray-100 px-6 py-6">
                <p className="text-gray-500 font-light text-sm leading-relaxed italic mb-4">
                  "Je suis venue avec une photo d'une french très technique que j'avais vue sur Instagram. Salomé l'a reproduite parfaitement — en mieux. Mes collègues m'ont demandé l'adresse toute la semaine."
                </p>
                <footer className="text-xs text-gray-400">— Inès M., Hyères, octobre 2025</footer>
              </blockquote>
            </section>

            {/* Dark CTA */}
            <section className="bg-dark text-white rounded-[2.5rem] px-8 py-10 mb-14">
              <h2 className="text-2xl md:text-3xl serif mb-4">Réservez votre séance nail art à Hyères</h2>
              <p className="text-gray-300 font-light text-sm mb-8">
                Pour les designs complexes, partagez votre inspiration à l'avance (WhatsApp ou message) pour que Salomé prépare les éléments nécessaires. Prévoyez 2h à 2h30 pour une pose avec nail art élaboré.
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
                    q: 'Peut-on apporter sa propre photo de nail art chez Bianco ?',
                    a: "Oui, c'est même recommandé. Partagez votre inspiration via les coordonnées de l'institut (téléphone, réseaux sociaux) avant la séance. Salomé pourra vous dire si la technique est réalisable et préparer les matériaux.",
                  },
                  {
                    q: "Le nail art dure-t-il autant qu'une pose gel classique ?",
                    a: "Oui, quand il est réalisé sur une base gel UV ou résine correctement préparée. Les décorations peintes protégées par une couche de finition tiennent aussi longtemps que la pose — 3 à 4 semaines.",
                  },
                  {
                    q: 'Le nail art est-il disponible sur ongles naturels sans pose gel ?',
                    a: "Oui, Salomé peut réaliser des décorations sur ongles naturels avec du vernis semi-permanent. La tenue est plus courte (10-14 jours) mais l'effet immédiat est identique.",
                  },
                  {
                    q: 'Combien coûte le nail art à Hyères chez Bianco ?',
                    a: "Le nail art est facturé en supplément de la pose, selon la complexité : french revisitée dès 65 €, chrome +15-20 €, motifs élaborés sur devis. Contactez-nous pour une estimation personnalisée.",
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
                Vos ongles sont le dernier détail que les autres remarquent — et souvent le premier dont ils se souviennent. Chez Bianco, on soigne les détails avec le même sérieux que le reste.
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

export default NailArtPage;
