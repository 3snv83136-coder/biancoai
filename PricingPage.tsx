import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { planityPrestations } from './planityPrestations';
import { BUSINESS_INFO } from './constants';

const PricingPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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

  return (
    <div className="min-h-screen bg-surface">
      <Navbar onLinkClick={() => {}} />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-10 px-5 py-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Retour à l&apos;accueil
          </Link>
          <h1 className="text-4xl md:text-5xl serif text-dark mb-4">Nos prestations</h1>
          <p className="text-gray-500 font-light mb-8 max-w-2xl">
            Retrouvez l&apos;ensemble de nos prestations et leurs tarifs. Réservez en ligne selon vos disponibilités.
          </p>
          <div className="mb-10 rounded-2xl bg-white/80 shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-dark mb-3">Pages détaillées par prestation</h2>
            <p className="text-sm text-gray-500 mb-4">
              Consultez nos pages complètes pour découvrir chaque soin en détail avant de réserver.
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
          <a
            href={BUSINESS_INFO.planityUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-12 px-8 py-3 rounded-full bg-primary text-white text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors"
          >
            Réserver sur Planity
          </a>
          <div className="space-y-12">
            {planityPrestations.map(({ label, items }) => (
              <section key={label}>
                <h2 className="text-2xl serif text-dark mb-6">{label}</h2>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li
                      key={item.title}
                      className="flex flex-wrap items-baseline justify-between gap-2 py-2 border-b border-gray-100 last:border-0"
                    >
                      <span className="text-dark font-light">{item.title}</span>
                      <span className="text-sm text-gray-500 shrink-0">
                        {item.duration}
                        <span className="mx-2">·</span>
                        <span className="text-primary font-medium">{item.price}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <div className="mt-16 pt-8 border-t border-gray-200">
            <a
              href={BUSINESS_INFO.planityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-full bg-primary text-white text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors"
            >
              Réserver sur Planity
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PricingPage;

