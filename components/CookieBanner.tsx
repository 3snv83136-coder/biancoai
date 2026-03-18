import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const STORAGE_KEY = 'cookie-consent';

const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const handleChoice = (value: 'accepted' | 'rejected') => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  return (
    <div className="fixed left-0 right-0 bottom-[56px] md:bottom-0 z-[90] bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-4 py-3 md:px-6 md:py-3">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-xs md:text-sm text-gray-600 font-light">
          Nous utilisons des cookies pour le bon fonctionnement du site.{' '}
          <Link to="/cookies" className="underline text-primary hover:text-primary/80">En savoir plus</Link>
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            type="button"
            onClick={() => handleChoice('rejected')}
            className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Refuser
          </button>
          <button
            type="button"
            onClick={() => handleChoice('accepted')}
            className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

