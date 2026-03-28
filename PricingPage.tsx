import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Breadcrumb from './components/Breadcrumb';
import { planityPrestations } from './planityPrestations';
import { BUSINESS_INFO } from './constants';

interface PriceItem {
  id: string;
  label: string;
  price: string;
  duration?: string;
  unit?: string;
  description?: string;
}

interface PriceSection {
  id: string;
  title: string;
  items: PriceItem[];
}

const PricingPage: React.FC = () => {
  const [apiSections, setApiSections] = useState<PriceSection[] | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch('/api/prices')
      .then(r => r.json())
      .then(d => {
        if (d?.sections?.length > 0) setApiSections(d.sections);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const prevTitle = document.title;
    const prevDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '';
    document.title = 'Tarifs et prestations | Bianco Esthétique – Hyères';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Tarifs des soins et prestations de Bianco Esthétique à Hyères. Soins corps, visage, mains, pieds, regard, drainage lymphatique. Réservez en ligne.');

    return () => {
      document.title = prevTitle;
      const m = document.querySelector('meta[name="description"]');
      if (m && prevDesc) m.setAttribute('content', prevDesc);
    };
  }, []);

  // Merge: always show planityPrestations + append any admin-added sections
  const baseSections = planityPrestations.map(cat => ({ label: cat.label, items: [...cat.items] }));
  if (apiSections) {
    for (const apiSec of apiSections) {
      const normalized = { label: apiSec.title, items: apiSec.items.map(it => ({ title: it.label, duration: it.duration || '', price: it.price })) };
      const existing = baseSections.find(s => s.label.toLowerCase() === normalized.label.toLowerCase());
      if (existing) {
        // Add API items that don't already exist in the static list
        for (const item of normalized.items) {
          if (!existing.items.some(e => e.title.toLowerCase() === item.title.toLowerCase())) {
            existing.items.push(item);
          }
        }
      } else {
        // New section from admin — append
        baseSections.push(normalized);
      }
    }
  }
  const sections = baseSections;

  const offers = sections.flatMap(cat =>
    cat.items
      .filter(item => /^\d/.test(item.price))
      .map(item => ({
        '@type': 'Offer' as const,
        name: item.title,
        price: item.price.replace(/[^\d]/g, ''),
        priceCurrency: 'EUR',
      }))
  );

  const pricingJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: 'Tarifs — Bianco Esthétique',
        url: 'https://www.bianco-esthetique.fr/tarifs',
        ...(offers.length > 0 ? { offers } : {}),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.bianco-esthetique.fr' },
          { '@type': 'ListItem', position: 2, name: 'Tarifs', item: 'https://www.bianco-esthetique.fr/tarifs' },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-surface">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }} />
      <Navbar onLinkClick={() => {}} />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb items={[
            { label: 'Accueil', to: '/' },
            { label: 'Tarifs' },
          ]} />

          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">La Maison Bianco</span>
            <h1 className="text-4xl md:text-5xl serif text-dark mb-4">Nos Tarifs</h1>
            <a
              href={BUSINESS_INFO.planityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-8 py-3 rounded-full bg-primary text-white text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              Réserver sur Planity
            </a>
          </div>

          {/* Modules par prestation */}
          <div className="space-y-8">
            {sections.map(({ label, items }) => (
              <section
                key={label}
                className="bg-white rounded-[2rem] shadow-lg shadow-black/5 border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Header section */}
                <div className="bg-gradient-to-r from-dark to-dark/90 px-8 py-5">
                  <h2 className="text-xl md:text-2xl serif text-white">{label}</h2>
                  <p className="text-white/50 text-xs montserrat mt-1">{items.length} prestation{items.length > 1 ? 's' : ''}</p>
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
                      {item.duration && (
                        <span className="text-xs text-gray-400 montserrat shrink-0">{item.duration}</span>
                      )}
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
                    Réserver un soin {label.toLowerCase()} →
                  </a>
                </div>
              </section>
            ))}
          </div>

          {/* Links */}
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

export default PricingPage;
