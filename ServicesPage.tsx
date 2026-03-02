import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { servicesList } from './servicesList';

const THEMES = [
  { key: 'head-spa', label: 'Head spa' },
  { key: 'massage', label: 'Massage' },
  { key: 'visage', label: 'Soins visage' },
  { key: 'ongles', label: 'Ongles' },
  { key: 'maquillage', label: 'Maquillage' },
];

const getThemeFromId = (id: string): string => {
  if (id.startsWith('head-spa')) return 'head-spa';
  if (id.startsWith('massage') || id.startsWith('kobido') || id.startsWith('drainage-lymphatique-visage')) return id.startsWith('drainage') ? 'visage' : id.startsWith('kobido') ? 'visage' : 'massage';
  if (id.startsWith('soin-visage') || id.startsWith('drainage')) return 'visage';
  if (id.includes('ongles') || id.includes('gel') || id.includes('vernis') || id.includes('manucure') || id.includes('pédicure') || id.includes('pieds') || id.includes('nail') || id.includes('babyboomer') || id.includes('pose-gel') || id.includes('beaute-des-pieds') || id.includes('pedicure')) return 'ongles';
  return 'maquillage';
};

const ServicesPage: React.FC = () => {
  const byTheme = THEMES.map(({ key, label }) => ({
    key,
    label,
    items: servicesList.filter((s) => getThemeFromId(s.id) === key),
  })).filter((t) => t.items.length > 0);

  return (
    <div className="min-h-screen bg-surface">
      <Navbar onLinkClick={() => {}} />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-10 hover:gap-4 transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Retour à l&apos;accueil
          </Link>
          <h1 className="text-4xl md:text-5xl serif text-dark mb-4">Nos services</h1>
          <p className="text-gray-500 font-light mb-12 max-w-2xl">
            Retrouvez tous nos services par thème. Cliquez sur un service pour voir la fiche détaillée.
          </p>
          <div className="space-y-12">
            {byTheme.map(({ key, label, items }) => (
              <section key={key} id={key}>
                <h2 className="text-2xl serif text-dark mb-6">{label}</h2>
                <ul className="space-y-3">
                  {items.map((s) => (
                    <li key={s.id}>
                      <Link
                        to={`/services/${s.id}`}
                        className="text-dark hover:text-primary transition-colors border-b border-gray-100 hover:border-primary/30 pb-1"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicesPage;
