import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Breadcrumb from './components/Breadcrumb';
import { planityPrestations } from './planityPrestations';

const getCategorySummary = (label: string): string => {
  switch (label) {
    case 'Soins corps':
      return 'Soin du corps relaxant ou ciblé, adapté à vos besoins et à votre niveau de fatigue.';
    case 'Soins visage':
      return 'Protocole visage sur-mesure pour réhydrater, lisser et illuminer votre teint.';
    case 'Beauté des mains':
      return 'Mains soignées, ongles nets et vernis impeccable avec ou sans semi-permanent.';
    case 'Maquillage':
      return 'Maquillage personnalisé pour le jour J, un événement ou simplement se sentir plus sûre de soi.';
    case 'Beauté des pieds':
      return 'Soin complet des pieds pour une peau douce, des ongles propres et un vernis qui tient.';
    case 'Beauté du regard':
      return 'Prestations pour structurer et intensifier le regard en douceur et en respectant votre morphologie.';
    case 'Extensions de cils':
      return 'Extensions sur-mesure pour ouvrir le regard, du naturel au plus sophistiqué.';
    case 'Drainage lymphatique méthode brésilienne':
      return 'Drainage manuel tonique pour alléger les jambes, lisser la peau et affiner visuellement la silhouette.';
    case 'Cure drainage lymphatique (5 séances + 1 offerte)':
      return 'Forfaits de séances pour un travail en profondeur et des résultats plus durables sur la silhouette.';
    default:
      return 'Prestation réalisée sur-mesure après un échange avec votre esthéticienne à Hyères.';
  }
};

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const prevTitle = document.title;
    const prevDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '';
    document.title = 'Nos prestations | Bianco Esthétique – Hyères';
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        'content',
        'Aperçu de toutes les prestations Bianco Esthétique à Hyères : soins corps, visage, regard, mains, pieds, maquillage et drainage lymphatique.'
      );

    return () => {
      document.title = prevTitle;
      const m = document.querySelector('meta[name="description"]');
      if (m && prevDesc) m.setAttribute('content', prevDesc);
    };
  }, []);

  const servicesJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        name: 'Prestations Bianco Esthétique',
        itemListElement: planityPrestations.map((cat, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: cat.label,
          url: 'https://www.bianco-esthetique.fr/prestations',
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.bianco-esthetique.fr' },
          { '@type': 'ListItem', position: 2, name: 'Prestations', item: 'https://www.bianco-esthetique.fr/prestations' },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-surface">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }} />
      <Navbar onLinkClick={() => {}} />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { label: 'Accueil', to: '/' },
            { label: 'Prestations' },
          ]} />
          <h1 className="text-4xl md:text-5xl serif text-dark mb-4">Nos prestations</h1>
          <p className="text-gray-500 font-light mb-12 max-w-2xl">
            Retrouvez en un coup d&apos;œil l&apos;ensemble des prestations proposées à Hyères. Les tarifs détaillés sont disponibles dans la
            rubrique dédiée.
          </p>
          <div className="mb-12 rounded-2xl bg-white/80 shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-dark mb-3">Pages détaillées par prestation</h2>
            <p className="text-sm text-gray-500 mb-4">
              Avant de réserver, découvrez nos pages complètes pour chaque soin, avec détails, bienfaits et FAQ.
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              <Link to="/institut-beaute-hyeres" className="text-sm text-primary hover:text-dark hover:underline">
                Institut de beauté à Hyères
              </Link>
              <Link to="/soin-visage-hyeres" className="text-sm text-primary hover:text-dark hover:underline">
                Soin du visage à Hyères
              </Link>
              <Link to="/manucure-ongles-gel-hyeres" className="text-sm text-primary hover:text-dark hover:underline">
                Manucure &amp; ongles en gel à Hyères
              </Link>
              <Link to="/extensions-cils-hyeres" className="text-sm text-primary hover:text-dark hover:underline">
                Extensions de cils à Hyères
              </Link>
              <Link to="/massage-californien-hyeres" className="text-sm text-primary hover:text-dark hover:underline">
                Massage californien à Hyères
              </Link>
              <Link to="/callus-peeling-hyeres" className="text-sm text-primary hover:text-dark hover:underline">
                Callus peeling &amp; soin des pieds à Hyères
              </Link>
              <Link to="/soin-visage-toulon" className="text-sm text-primary hover:text-dark hover:underline">
                Soin du visage près de Toulon
              </Link>
            </div>
          </div>
          <div className="space-y-12">
            {planityPrestations.map(({ label, items }) => {
              const summary = getCategorySummary(label);
              return (
                <section key={label}>
                  <h2 className="text-2xl serif text-dark mb-2">{label}</h2>
                  <p className="text-sm text-gray-500 font-light mb-4">{summary}</p>
                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li
                        key={item.title}
                        className="border-b border-gray-100 last:border-0 pb-3"
                      >
                        <p className="text-dark font-medium">{item.title}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          Durée indicative&nbsp;: {item.duration}. Un échange préalable permet d&apos;adapter le protocole à vos besoins.
                        </p>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicesPage;
