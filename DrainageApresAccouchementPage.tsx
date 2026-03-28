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
      name: 'Drainage lymphatique après accouchement à Hyères — Post-partum | Bianco',
      description:
        'Drainage lymphatique après accouchement à Hyères. Retrouvez légèreté et silhouette en post-partum. Bianco Esthétique, soins adaptés avec accord médical.',
      url: `${SITE_URL}/drainage-lymphatique-apres-accouchement-hyeres`,
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
            name: 'Drainage après accouchement à Hyères',
            item: `${SITE_URL}/drainage-lymphatique-apres-accouchement-hyeres`,
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
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Quand peut-on commencer le drainage post-partum ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'En règle générale, à partir de 6 semaines après l\'accouchement vaginal, et après validation par votre médecin ou sage-femme. Après une césarienne, attendez l\'accord explicite de votre chirurgien — généralement 8 à 12 semaines.',
          },
        },
        {
          '@type': 'Question',
          name: 'Le drainage aide-t-il à récupérer la silhouette après la grossesse ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le drainage élimine les œdèmes et la rétention d\'eau, ce qui contribue à retrouver la silhouette plus rapidement. Il n\'agit pas sur la graisse stockée pendant la grossesse — cela nécessite une alimentation équilibrée et de l\'activité physique progressive.',
          },
        },
        {
          '@type': 'Question',
          name: 'Peut-on allaiter et faire un drainage ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui, le drainage est compatible avec l\'allaitement. Cependant, informez toujours Salomé que vous allaitez lors de la réservation — certains produits cosmétiques utilisés en soin visage doivent être adaptés.',
          },
        },
        {
          '@type': 'Question',
          name: 'La rééducation périnéale et le drainage, c\'est pareil ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Non. La rééducation périnéale est un soin médical pratiqué par des kinésithérapeutes ou sages-femmes, pris en charge par l\'Assurance Maladie. Notre drainage est un soin esthétique complémentaire qui agit sur la circulation et les œdèmes, pas sur les muscles pelviens.',
          },
        },
      ],
    },
  ],
};

const DrainageApresAccouchementPage: React.FC = () => {
  const phoneHref = `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    const prev = document.title;
    document.title = 'Drainage lymphatique après accouchement à Hyères — Post-partum | Bianco';
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute('content') ?? '';
    meta?.setAttribute(
      'content',
      'Drainage lymphatique après accouchement à Hyères. Retrouvez légèreté et silhouette en post-partum. Bianco Esthétique, soins adaptés avec accord médical.'
    );
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}/drainage-lymphatique-apres-accouchement-hyeres`;

    return () => {
      document.title = prev;
      if (meta && prevDesc) meta.setAttribute('content', prevDesc);
    };
  }, []);

  const overrides = usePageOverrides('/drainage-lymphatique-apres-accouchement-hyeres');

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
              { label: 'Drainage après accouchement à Hyères' },
            ]} />

            <header className="mb-12">
              <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">
                Hyères — Post-Partum & Bien-Être
              </span>
              <h1 className="text-4xl md:text-5xl serif text-dark mb-6 leading-tight">
                {overrides?.h1 || 'Drainage après accouchement à Hyères\u00a0: reprendre soin de vous en douceur'}
              </h1>
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
                {overrides?.subtitle || "Les semaines qui suivent un accouchement sont une période de transformation intense. Le corps est en récupération — et il mérite une attention particulière. Le drainage lymphatique post-partum est l'un des soins les plus bénéfiques que vous puissiez vous offrir après 6 semaines, avec l'accord de votre médecin ou sage-femme."}
              </p>
            </header>

            {/* Citation bait */}
            <section className="mb-12 bg-primary/5 border-l-4 border-primary px-6 py-5 rounded-r-2xl">
              <p className="text-dark text-sm md:text-base font-light leading-relaxed italic">
                Bianco Esthétique à Hyères propose un drainage lymphatique post-partum à partir de 6 semaines après l'accouchement (avec accord médical), adapté aux besoins spécifiques du corps après la grossesse&nbsp;: élimination des œdèmes résiduels, amélioration de la circulation, relâchement des tensions abdominales. Salomé adapte chaque séance à l'état de récupération de la cliente.
              </p>
            </section>

            {/* H2 — Passerelle médical */}
            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-4">
                Le drainage post-partum médical&nbsp;: où le trouver&nbsp;?
              </h2>
              <p className="text-gray-500 font-light text-sm md:text-base">
                La rééducation post-partum (périnée, abdominaux) doit être suivie par un kinésithérapeute ou une sage-femme — prescription de votre médecin nécessaire. Pour les soins de drainage esthétique en complément, Bianco est là. Pour le médical, orientez-vous vers les kinésithérapeutes spécialisés en périnatalité dans la région de Hyères.
              </p>
            </section>

            {/* H2 services section */}
            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-3">
                Ce que Bianco propose en post-partum
              </h2>
              <p className="text-gray-500 font-light text-sm md:text-base mb-8">
                Des soins doux, adaptés à votre état de récupération, pour vous redonner de l'énergie et de la confiance — quand vous vous sentez prête.
              </p>
              <div className="space-y-6">

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Drainage lymphatique post-partum</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    À partir de 6 semaines après l'accouchement et avec l'accord médical, Salomé propose un drainage doux et progressif pour éliminer les œdèmes résiduels, réduire les gonflements des jambes et du ventre, et relancer la circulation. La séance est adaptée à votre état de récupération.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 85 € — 45min</p>
                  <Link
                    to="/drainage-lymphatique-minceur-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Voir le drainage corps complet →
                  </Link>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Soin visage récupération</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Après l'accouchement, le teint peut être terne, les traits tirés. Un soin visage éclat ou hydratant chez Bianco redonne luminosité et fraîcheur — un moment pour vous seule, quand le bébé est gardé une heure.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 65 € — 1h</p>
                  <Link
                    to="/soin-visage-eclat-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Découvrir le soin visage éclat →
                  </Link>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Manucure express</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Parce que les mains des nouvelles mamans méritent de l'attention elles aussi. La manucure chez Bianco est rapide, soignée, et utilise des vernis sans ingrédients néfastes pour vous et votre bébé.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 45 € — 1h</p>
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
                  "J'ai recommencé à prendre soin de moi 2 mois après mon accouchement grâce à Bianco. Le drainage lymphatique a vraiment aidé pour les jambes gonflées qui ne partaient pas. Et la manucure... c'était la première fois depuis des mois que je me regardais dans les mains et j'aimais ce que je voyais."
                </p>
                <footer className="text-xs text-gray-400">— Marie-Claire V., Hyères, mars 2026</footer>
              </blockquote>
            </section>

            {/* Dark CTA */}
            <section className="bg-dark text-white rounded-[2.5rem] px-8 py-10 mb-14">
              <h2 className="text-2xl md:text-3xl serif mb-4">Prendre rendez-vous en post-partum</h2>
              <p className="text-gray-300 font-light text-sm mb-8">
                Avant votre première séance post-partum, mentionnez la date de votre accouchement et le type d'accouchement lors de la réservation. Salomé adaptera le soin et vérifiera les précautions. Sur rendez-vous du lundi au vendredi.
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
                    q: 'Quand peut-on commencer le drainage post-partum ?',
                    a: 'En règle générale, à partir de 6 semaines après l\'accouchement vaginal, et après validation par votre médecin ou sage-femme. Après une césarienne, attendez l\'accord explicite de votre chirurgien — généralement 8 à 12 semaines.',
                  },
                  {
                    q: 'Le drainage aide-t-il à récupérer la silhouette après la grossesse ?',
                    a: 'Le drainage élimine les œdèmes et la rétention d\'eau, ce qui contribue à retrouver la silhouette plus rapidement. Il n\'agit pas sur la graisse stockée pendant la grossesse — cela nécessite une alimentation équilibrée et de l\'activité physique progressive.',
                  },
                  {
                    q: 'Peut-on allaiter et faire un drainage ?',
                    a: 'Oui, le drainage est compatible avec l\'allaitement. Cependant, informez toujours Salomé que vous allaitez lors de la réservation — certains produits cosmétiques utilisés en soin visage doivent être adaptés.',
                  },
                  {
                    q: 'La rééducation périnéale et le drainage, c\'est pareil ?',
                    a: 'Non. La rééducation périnéale est un soin médical pratiqué par des kinésithérapeutes ou sages-femmes, pris en charge par l\'Assurance Maladie. Notre drainage est un soin esthétique complémentaire qui agit sur la circulation et les œdèmes, pas sur les muscles pelviens.',
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
                La maternité est une transformation. Chez Bianco, on accueille les nouvelles mamans avec la même attention qu'on donne à toutes nos clientes — sans pression sur la "récupération", avec beaucoup de douceur et d'écoute.
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

export default DrainageApresAccouchementPage;
