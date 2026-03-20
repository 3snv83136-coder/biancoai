import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants';
import { servicesIndex as services } from '../servicesIndex';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold tracking-widest uppercase serif mb-4">Bianco Esthétique</h2>
          <p className="text-gray-400 max-w-md leading-relaxed">
            Votre destination bien-être et beauté à Hyères. Spécialiste du drainage lymphatique méthode brésilienne et de la beauté du regard.
          </p>
          <div className="mt-8 flex space-x-4">
            <a href={BUSINESS_INFO.instagram} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-primary transition-colors" aria-label="Suivez Bianco Esthétique sur Instagram">
              <span className="sr-only">Instagram</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href={BUSINESS_INFO.facebook} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-primary transition-colors" aria-label="Suivez Bianco Esthétique sur Facebook">
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6">Navigation</h3>
          <ul className="space-y-4 text-gray-400">
            <li>
              <Link to="/prestations" className="hover:text-primary transition-colors">
                Nos prestations
              </Link>
            </li>
            <li>
              <Link to="/tarifs" className="hover:text-primary transition-colors">
                Nos tarifs
              </Link>
            </li>
            <li>
              <Link to="/a-propos" className="hover:text-primary transition-colors">
                L&apos;Institut
              </Link>
            </li>
            <li>
              <Link to="/#contact" className="hover:text-primary transition-colors">
                Contact &amp; Accès
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6">Nos services</h3>
          <ul className="space-y-4 text-gray-400">
            <li>
              <Link to="/prestations" className="hover:text-primary transition-colors">
                Tous les services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6">Légal</h3>
          <ul className="space-y-4 text-gray-400">
            <li>
              <Link to="/mentions-legales" className="hover:text-primary transition-colors">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link to="/confidentialite" className="hover:text-primary transition-colors">
                Confidentialité
              </Link>
            </li>
            <li>
              <Link to="/cookies" className="hover:text-primary transition-colors">
                Cookies
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 border-t border-white/10 pt-6">
        <p className="text-xs text-gray-400 leading-relaxed">
          Bianco Esthétique accueille les clientes de <strong className="text-gray-300">Hyères</strong>, <strong className="text-gray-300">Toulon</strong>, <strong className="text-gray-300">La Garde</strong>, <strong className="text-gray-300">Carqueiranne</strong>, <strong className="text-gray-300">La Londe-les-Maures</strong>, <strong className="text-gray-300">Le Pradet</strong>, <strong className="text-gray-300">La Crau</strong>, <strong className="text-gray-300">Bormes-les-Mimosas</strong>, <strong className="text-gray-300">La Valette-du-Var</strong>, <strong className="text-gray-300">Solliès-Pont</strong>, <strong className="text-gray-300">Cuers</strong> et de toute la presqu'île de Giens. Institut situé au 3 Avenue Ernest Millet, 83400 Hyères.
        </p>
      </div>

      <SeoIndex />
      <SeoGeoIndex />

      <div className="max-w-7xl mx-auto px-6 mt-6 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Bianco Esthétique. Tous droits réservés. Créé avec passion à Hyères.</p>
      </div>
    </footer>
  );
};

const SeoIndex: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-6 mt-12 border-t border-white/10 pt-6 text-xs text-gray-400">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest hover:text-primary transition-colors"
        aria-expanded={open}
      >
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
          <span className={`transform transition-transform ${open ? 'rotate-90' : ''}`}>{'>'}</span>
        </span>
        Index SEO des soins
      </button>
      {open && (
        <p className="mt-3 leading-relaxed">
          Institut de beauté à Hyères :{' '}
          {services.map((service, index) => (
            <React.Fragment key={service.id}>
              <Link to={`/services/${service.id}`} className="hover:text-primary">
                {service.title}
              </Link>
              {index < services.length - 1 && <span> • </span>}
            </React.Fragment>
          ))}
        </p>
      )}
    </div>
  );
};

const GEO_LINKS = [
  { label: 'Centre-ville Hyères', to: '/institut-beaute-centre-ville-hyeres' },
  { label: 'Costebelle', to: '/institut-beaute-costebelle-hyeres' },
  { label: 'Les Palmiers', to: '/institut-beaute-les-palmiers-hyeres' },
  { label: 'Le Port', to: '/institut-beaute-port-hyeres' },
  { label: "L'Almanarre", to: '/institut-beaute-almanarre-hyeres' },
  { label: 'Giens', to: '/institut-beaute-giens-hyeres' },
  { label: 'Toulon', to: '/institut-beaute-toulon' },
  { label: 'La Garde', to: '/institut-beaute-la-garde' },
  { label: 'Carqueiranne', to: '/institut-beaute-carqueiranne' },
  { label: 'Le Pradet', to: '/institut-beaute-le-pradet' },
  { label: 'La Crau', to: '/institut-beaute-la-crau' },
  { label: 'La Londe-les-Maures', to: '/institut-beaute-la-londe-les-maures' },
  { label: 'Bormes-les-Mimosas', to: '/institut-beaute-bormes-les-mimosas' },
  { label: 'La Valette-du-Var', to: '/institut-beaute-la-valette-du-var' },
  { label: 'Solliès-Pont', to: '/institut-beaute-sollies-pont' },
  { label: 'Cuers', to: '/institut-beaute-cuers' },
];

const SeoGeoIndex: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-6 mt-4 text-xs text-gray-400">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest hover:text-primary transition-colors"
        aria-expanded={open}
      >
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
          <span className={`transform transition-transform ${open ? 'rotate-90' : ''}`}>{'>'}</span>
        </span>
        Zone de chalandise
      </button>
      {open && (
        <p className="mt-3 leading-relaxed">
          Institut de beauté près de :{' '}
          {GEO_LINKS.map((link, index) => (
            <React.Fragment key={link.to}>
              <Link to={link.to} className="hover:text-primary">
                {link.label}
              </Link>
              {index < GEO_LINKS.length - 1 && <span> • </span>}
            </React.Fragment>
          ))}
        </p>
      )}
    </div>
  );
};

export default Footer;
