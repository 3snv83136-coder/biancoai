import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants';

interface NavbarProps {
  onLinkClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLinkClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', to: '/' },
    { label: 'Prestations', to: '/#prestations' },
    { label: 'Tarifs', to: '/tarifs' },
    { label: "L'Institut", to: '/a-propos' },
    { label: 'Contact', to: '/#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-100 py-4' : 'bg-transparent py-8'}`}>
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
            <span className={`text-2xl md:text-3xl font-bold tracking-[0.2em] uppercase transition-colors duration-300 serif ${isScrolled ? 'text-dark' : 'text-white'}`}>Bianco</span>
            <span className={`text-[10px] tracking-ultra-wide uppercase transition-colors duration-300 montserrat font-bold -mt-1 ${isScrolled ? 'text-primary' : 'text-primary'}`}>Esthétique</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                to={link.to}
                className={`text-[11px] font-bold uppercase tracking-widest transition-all montserrat hover:text-primary relative group ${isScrolled ? 'text-dark/70' : 'text-white/80'}`}
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <a 
              href={BUSINESS_INFO.planityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all montserrat shadow-xl shadow-primary/20 ${isScrolled ? 'bg-primary text-white hover:bg-dark' : 'bg-white text-dark hover:bg-primary hover:text-white'}`}
            >
              Réserver
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden p-2 rounded-xl transition-colors ${isScrolled ? 'text-dark bg-gray-50' : 'text-white bg-white/10 backdrop-blur-md'}`}
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
              className={`block text-4xl serif hover:text-primary transition-all transform ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => { setMobileMenuOpen(false); onLinkClick?.(); }}
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
