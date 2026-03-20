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
      name: 'Après votre épilation à Hyères : soins complémentaires chez Bianco Esthétique',
      description:
        'Bianco Esthétique à Hyères propose les soins complémentaires idéaux après une épilation : soin visage, massage, manucure. Institut beauté 3 Av. Ernest Millet 83400 Hyères.',
      url: `${SITE_URL}/apres-epilation-soins-hyeres`,
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
            name: 'Après votre épilation à Hyères',
            item: `${SITE_URL}/apres-epilation-soins-hyeres`,
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Bianco Esthétique fait-elle l\'épilation ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Non, Bianco Esthétique ne propose pas l\'épilation. Notre spécialité ce sont les soins visage, les massages et la beauté des ongles à Hyères.',
          },
        },
        {
          '@type': 'Question',
          name: 'Peut-on faire un soin visage juste après une épilation du visage ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Il est conseillé d\'attendre quelques heures après une épilation du visage avant un soin. En revanche, un massage corps ou une manucure peuvent se faire le même jour sans aucun problème.',
          },
        },
        {
          '@type': 'Question',
          name: 'Où se trouve Bianco Esthétique à Hyères ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '3 Avenue Ernest Millet, 83400 Hyères. À deux pas du centre-ville, avec stationnement possible à proximité.',
          },
        },
        {
          '@type': 'Question',
          name: 'Faut-il prendre rendez-vous chez Bianco ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui, Bianco Esthétique fonctionne sur rendez-vous. Vous pouvez réserver en ligne sur Planity ou par téléphone au 07 49 96 76 91.',
          },
        },
      ],
    },
  ],
};

const EpilationPasserellePage: React.FC = () => {
  const phoneHref = `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    const prev = document.title;
    document.title =
      'Après votre épilation à Hyères : soin visage, ongles & massage chez Bianco Esthétique';
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute('content') ?? '';
    meta?.setAttribute(
      'content',
      'Bianco Esthétique ne pratique pas l\'épilation mais complète parfaitement votre journée beauté à Hyères : soin visage, massage relaxant, pose d\'ongles. Réservez en ligne.'
    );
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}/apres-epilation-soins-hyeres`;

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
              { label: 'Après votre épilation à Hyères' },
            ]} />

            {/* H1 */}
            <header className="mb-12">
              <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">
                Hyères — Journée Beauté
              </span>
              <h1 className="text-4xl md:text-5xl serif text-dark mb-6 leading-tight">
                Vous cherchez une épilation à Hyères&nbsp;? Découvrez ce que Bianco fait de votre journée beauté
              </h1>
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
                Bianco Esthétique ne propose pas l'épilation. Nous avons fait le choix de nous
                concentrer sur ce que nous faisons de mieux&nbsp;: les soins visage, le massage,
                les ongles et le bien-être global. Mais nous savons que beaucoup de nos clientes
                combinent leur séance d'épilation chez une consœur avec un passage chez nous.
                Cette page est là pour vous aider à organiser votre journée beauté à Hyères.
              </p>
            </header>

            {/* H2 — Où faire l'épilation */}
            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-4">
                Où faire votre épilation à Hyères&nbsp;?
              </h2>
              <p className="text-gray-500 font-light text-sm md:text-base mb-6">
                Voici quelques adresses qui proposent l'épilation à Hyères, que nos clientes nous mentionnent régulièrement&nbsp;:
              </p>
              <div className="space-y-3 mb-6">
                {[
                  {
                    name: 'Bodyminute',
                    detail: 'Centre Commercial Centr\'Azur, Hyères — sans rendez-vous',
                  },
                  {
                    name: 'Qipao Hyères',
                    detail: 'Épilation & bar à sourcils — sur rendez-vous',
                  },
                  {
                    name: 'Institut Haru',
                    detail: 'Zone Saint-Martin, Hyères — sur rendez-vous',
                  },
                ].map(({ name, detail }) => (
                  <div
                    key={name}
                    className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 px-5 py-4"
                  >
                    <span className="text-primary shrink-0 mt-0.5">&#9679;</span>
                    <div>
                      <span className="font-semibold text-dark text-sm">{name}</span>
                      <span className="text-gray-400 text-sm"> — {detail}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 font-light text-sm md:text-base italic">
                Ces adresses font l'épilation très bien. Une fois votre séance terminée,
                voici ce que vous pouvez ajouter à votre journée.
              </p>
            </section>

            {/* H2 — Ce que Bianco propose */}
            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-3">
                Ce que Bianco Esthétique vous propose après votre épilation
              </h2>
              <p className="text-gray-500 font-light text-sm md:text-base mb-8">
                Après une épilation, la peau est sensible et réactive. C'est le moment idéal
                pour un soin doux et régénérant qui va apaiser, nourrir et sublimer.
              </p>

              <div className="space-y-6">
                {/* H3 — Soin visage */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Soin visage hydratant ou anti-âge</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Après une épilation du visage (sourcils, lèvre supérieure…), la peau mérite
                    une attention particulière. En laissant quelques heures de délai, un soin
                    visage chez Bianco apaise les rougeurs, restaure l'hydratation et redonne
                    de l'éclat. Salomé adapte chaque protocole à votre type de peau.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 63 € — 55 min</p>
                  <Link
                    to="/soin-visage-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    En savoir plus sur le soin visage à Hyères →
                  </Link>
                </div>

                {/* H3 — Massage */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Massage relaxant corps</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    La peau vient d'être travaillée&nbsp;: un massage californien détend les muscles,
                    relance la circulation et laisse une sensation de légèreté immédiate.
                    C'est le complément parfait d'une épilation corps, sans aucune contre-indication
                    le même jour.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 70 € — 1h</p>
                  <Link
                    to="/massage-californien-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    En savoir plus sur le massage californien à Hyères →
                  </Link>
                </div>

                {/* H3 — Manucure */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg serif text-dark mb-2">Manucure & pose d'ongles</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">
                    Pendant qu'on prend soin de votre corps, soignez aussi vos mains. Une pose
                    de vernis semi-permanent ou une manucure complète se combine parfaitement
                    avec une journée épilation. Résultat&nbsp;: vous repartez de la tête aux pieds.
                  </p>
                  <p className="text-xs text-gray-400 mb-4">À partir de 52 € — 1h45</p>
                  <Link
                    to="/manucure-ongles-gel-hyeres"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    En savoir plus sur la manucure à Hyères →
                  </Link>
                </div>
              </div>
            </section>

            {/* H2 — Journée beauté complète */}
            <section className="bg-dark text-white rounded-[2.5rem] px-8 py-10 mb-14">
              <h2 className="text-2xl md:text-3xl serif mb-6">La Journée Beauté Complète à Hyères</h2>
              <div className="space-y-3 mb-8">
                {[
                  { time: 'Matin', text: 'Épilation chez l\'une de nos consœurs à Hyères.' },
                  {
                    time: 'Après-midi',
                    text: 'Soin visage + massage ou manucure chez Bianco.',
                  },
                  {
                    time: 'Résultat',
                    text: 'Vous repartez entièrement régénérée, de la tête aux pieds.',
                  },
                ].map(({ time, text }) => (
                  <div key={time} className="flex items-start gap-4">
                    <span className="shrink-0 text-primary font-bold text-sm montserrat tracking-widest uppercase pt-0.5 w-24">
                      {time}
                    </span>
                    <p className="text-gray-300 font-light text-sm md:text-base">{text}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 font-light text-sm mb-8">
                Une seule organisation, un seul déplacement dans le centre de Hyères,
                une journée entièrement pensée pour vous.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={BUSINESS_INFO.planityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors"
                >
                  Réserver mon soin chez Bianco
                </a>
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/30 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-dark transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </section>

            {/* H2 — FAQ */}
            <section className="mb-14">
              <h2 className="text-2xl serif text-dark mb-6">Questions fréquentes</h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'Bianco Esthétique fait-elle l\'épilation ?',
                    a: 'Non, Bianco Esthétique ne propose pas l\'épilation. Notre spécialité ce sont les soins visage, les massages et la beauté des ongles à Hyères.',
                  },
                  {
                    q: 'Peut-on faire un soin visage juste après une épilation du visage ?',
                    a: 'Il est conseillé d\'attendre quelques heures après une épilation du visage avant un soin. En revanche, un massage corps ou une manucure peuvent se faire le même jour sans aucun problème.',
                  },
                  {
                    q: 'Où se trouve Bianco Esthétique à Hyères ?',
                    a: '3 Avenue Ernest Millet, 83400 Hyères. À deux pas du centre-ville, avec stationnement possible à proximité.',
                  },
                  {
                    q: 'Faut-il prendre rendez-vous chez Bianco ?',
                    a: 'Oui, Bianco Esthétique fonctionne sur rendez-vous. Vous pouvez réserver en ligne sur Planity ou par téléphone au 07 49 96 76 91.',
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

            {/* Clôture */}
            <section className="text-center border-t border-gray-100 pt-10">
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-6">
                Chez Bianco, on ne fait pas tout. On fait bien ce qu'on fait.
                Si vous avez des questions sur nos soins ou si vous souhaitez composer
                votre propre journée beauté à Hyères, appelez-nous ou réservez directement en ligne.
                Salomé sera ravie de vous accueillir.
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

export default EpilationPasserellePage;
