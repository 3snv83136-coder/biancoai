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

