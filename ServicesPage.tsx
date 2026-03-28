import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Breadcrumb from './components/Breadcrumb';
import { planityPrestations } from './planityPrestations';
import { BUSINESS_INFO } from './constants';
import { usePageOverrides } from './components/usePageOverrides';

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
  const overrides = usePageOverrides('/prestation');

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
          url: 'https://www.bianco-esthetique.fr/prestation',
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.bianco-esthetique.fr' },
          { '@type': 'ListItem', position: 2, name: 'Prestations', item: 'https://www.bianco-esthetique.fr/prestation' },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-surface">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }} />
      <Navbar onLinkClick={() => {}} />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb items={[
            { label: 'Accueil', to: '/' },
            { label: 'Prestations' },
          ]} />

          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">La Maison Bianco</span>
            <h1 className="text-4xl md:text-5xl serif text-dark mb-4">{overrides?.h1 || 'Nos Prestations'}</h1>
            <p className="text-gray-500 font-light max-w-2xl mx-auto">
              {overrides?.subtitle || "Retrouvez en un coup d'œil l'ensemble des prestations proposées à Hyères. Chaque soin est personnalisé selon vos besoins."}
            </p>
            <a
              href={BUSINESS_INFO.planityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-8 py-3 rounded-full bg-primary text-white text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              Réserver sur Planity
            </a>
          </div>

          {/* Modules par catégorie — même style que la page tarifs */}
          <div className="space-y-8">
            {planityPrestations.map(({ label, items }) => {
              const summary = getCategorySummary(label);
              return (
                <section
                  key={label}
                  className="bg-white rounded-[2rem] shadow-lg shadow-black/5 border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Header section */}
                  <div className="bg-gradient-to-r from-dark to-dark/90 px-8 py-5">
                    <h2 className="text-xl md:text-2xl serif text-white">{label}</h2>
                    <p className="text-white/50 text-xs montserrat mt-1">{items.length} prestation{items.length > 1 ? 's' : ''}</p>
                  </div>

                  {/* Description */}
                  <div className="px-8 py-4 bg-surface/30 border-b border-gray-50">
                    <p className="text-sm text-gray-500 font-light">{summary}</p>
                  </div>

                  {/* Items */}
                  <div className="divide-y divide-gray-50">
                    {items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex flex-wrap items-center justify-between gap-3 px-8 py-4 hover:bg-surface/50 transition-colors"
                      >
                        <div className="flex-1 min-w-[180px]">
                          <span className="text-dark font-medium text-sm md:text-base">{item.title}</span>
                        </div>
                        <span className="text-xs text-gray-400 montserrat shrink-0">{item.duration}</span>
                        <span className="text-primary font-bold text-sm md:text-base shrink-0 min-w-[70px] text-right">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA footer */}
                  <div className="px-8 py-4 bg-surface/30 border-t border-gray-50">
                    <a
                      href={BUSINESS_INFO.planityUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold uppercase tracking-widest text-primary hover:text-dark transition-colors"
                    >
                      Réserver →
                    </a>
                  </div>
                </section>
              );
            })}
          </div>

          {/* Pages détaillées */}
          <div className="mt-12 bg-white rounded-[2rem] shadow-lg shadow-black/5 border border-gray-100 p-8">
            <h2 className="text-lg font-semibold text-dark mb-4">Pages détaillées</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <Link to="/institut-beaute-hyeres" className="text-sm text-primary hover:text-dark hover:underline transition-colors">Institut de beauté à Hyères</Link>
              <Link to="/soin-visage-hyeres" className="text-sm text-primary hover:text-dark hover:underline transition-colors">Soin du visage à Hyères</Link>
              <Link to="/manucure-ongles-gel-hyeres" className="text-sm text-primary hover:text-dark hover:underline transition-colors">Manucure &amp; ongles en gel</Link>
              <Link to="/extensions-cils-hyeres" className="text-sm text-primary hover:text-dark hover:underline transition-colors">Extensions de cils</Link>
              <Link to="/massage-californien-hyeres" className="text-sm text-primary hover:text-dark hover:underline transition-colors">Massage californien</Link>
              <Link to="/head-spa-hyeres" className="text-sm text-primary hover:text-dark hover:underline transition-colors">Head Spa</Link>
              <Link to="/callus-peeling-hyeres" className="text-sm text-primary hover:text-dark hover:underline transition-colors">Callus peeling &amp; pieds</Link>
              <Link to="/soin-visage-toulon" className="text-sm text-primary hover:text-dark hover:underline transition-colors">Soin du visage près de Toulon</Link>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <a
              href={BUSINESS_INFO.planityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-full bg-primary text-white text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              Prendre rendez-vous
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicesPage;
