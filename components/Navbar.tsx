import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants';

interface NavbarProps {
  onLinkClick?: () => void;
}

const PRESTATION_LINKS = [
  { label: 'Institut de beauté à Hyères', to: '/institut-beaute-hyeres' },
  { label: 'Soin du visage à Hyères', to: '/soin-visage-hyeres' },
  { label: 'Manucure & ongles en gel', to: '/manucure-ongles-gel-hyeres' },
  { label: 'Extensions de cils', to: '/extensions-cils-hyeres' },
  { label: 'Massage californien', to: '/massage-californien-hyeres' },
  { label: 'Callus peeling & soin des pieds', to: '/callus-peeling-hyeres' },
  { label: 'Soin du visage près de Toulon', to: '/soin-visage-toulon' },
];

const Navbar: React.FC<NavbarProps> = ({ onLinkClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prestationsOpen, setPrestationsOpen] = useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  useLocation();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setPrestationsOpen(false);
      }
    };
    if (prestationsOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [prestationsOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', to: '/' },
    { label: 'Prestations', to: '/prestations' },
    { label: 'Tarifs', to: '/tarifs' },
    { label: 'Blog', to: '/blog' },
    { label: "L'Institut", to: '/a-propos' },
    { label: 'Contact', to: '/#contact' },
  ];

  return (
    <>
      <nav aria-label="Navigation principale" className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-100 py-4 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link
            to="/"
            className="group flex flex-col items-center"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
              setMobileMenuOpen(false);
              onLinkClick?.();
            }}
          >
            <span className="text-2xl md:text-3xl font-bold tracking-[0.2em] uppercase transition-colors duration-300 serif text-dark">
              Bianco
            </span>
            <span className="text-[10px] tracking-ultra-wide uppercase transition-colors duration-300 montserrat font-bold -mt-1 text-primary">
              Esthétique
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => {
              if (link.label === 'Prestations') {
                return (
                  <div key={link.label} ref={dropdownRef} className="relative">
                    <button
                      type="button"
                      onClick={() => setPrestationsOpen((v) => !v)}
                      className="text-[11px] font-bold uppercase tracking-widest transition-all montserrat hover:text-primary text-dark/70 flex items-center gap-1.5"
                      aria-expanded={prestationsOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <svg
                        className={`w-3 h-3 transition-transform duration-200 ${prestationsOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {prestationsOpen && (
                      <div className="absolute left-0 top-full mt-2 w-80 rounded-xl bg-white shadow-xl border border-gray-100 py-3 z-[110]">
                        <div className="px-4 pb-2 border-b border-gray-100 mb-2">
                          <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest">
                            Nos prestations
                          </span>
                        </div>
                        <div className="max-h-[70vh] overflow-y-auto">
                          {PRESTATION_LINKS.map((item) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              className="block px-4 py-2.5 text-sm text-dark/90 hover:bg-primary/5 hover:text-primary transition-colors"
                              onClick={() => { setPrestationsOpen(false); onLinkClick?.(); }}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                        <div className="border-t border-gray-100 mt-2 pt-2 px-4">
                          <Link
                            to="/prestations"
                            className="block py-2 text-sm font-medium text-primary hover:underline"
                            onClick={() => { setPrestationsOpen(false); onLinkClick?.(); }}
                          >
                            Voir toutes les prestations →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-[11px] font-bold uppercase tracking-widest transition-all montserrat hover:text-primary relative group text-dark/70"
                >
                  {link.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              );
            })}
            <a
              href={BUSINESS_INFO.planityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all montserrat shadow-xl shadow-primary/20 bg-primary text-white hover:bg-dark"
            >
              Réserver
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl transition-colors text-dark bg-gray-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[90] bg-white transition-all duration-500 lg:hidden flex flex-col justify-center items-center text-center px-12 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="space-y-10">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              to={link.to}
              className={`block text-4xl serif hover:text-primary transition-all transform ${
                mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => {
                setMobileMenuOpen(false);
                onLinkClick?.();
              }}
            >
              {link.label}
            </Link>
          ))}
          <div className={`pt-10 transition-all duration-700 delay-500 transform ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a 
              href={BUSINESS_INFO.planityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-12 py-5 rounded-full text-lg font-bold shadow-2xl"
            >
              Réserver sur Planity
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
