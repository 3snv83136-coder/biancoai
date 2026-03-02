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
    <div className="fixed left-1/2 -translate-x-1/2 bottom-24 md:bottom-6 z-[90] max-w-xl w-[90%] bg-white text-dark shadow-2xl rounded-2xl border border-gray-200 px-5 py-4 md:px-6 md:py-5">
      <p className="text-sm md:text-base text-gray-700 font-light mb-3">
        Nous utilisons des cookies strictement nécessaires au bon fonctionnement du site et, de manière limitée, pour améliorer votre
        expérience. Vous pouvez accepter ou refuser les cookies non essentiels.
      </p>
      <p className="text-xs text-gray-500 mb-4">
        Pour en savoir plus, consultez notre{' '}
        <Link to="/cookies" className="underline text-primary hover:text-primary/80">
          page dédiée aux cookies
        </Link>{' '}
        et notre{' '}
        <Link to="/confidentialite" className="underline text-primary hover:text-primary/80">
          politique de confidentialité
        </Link>
        .
      </p>
      <div className="flex flex-col md:flex-row md:justify-end gap-2">
        <button
          type="button"
          onClick={() => handleChoice('rejected')}
          className="w-full md:w-auto px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
        >
          Refuser
        </button>
        <button
          type="button"
          onClick={() => handleChoice('accepted')}
          className="w-full md:w-auto px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest bg-primary text-white hover:bg-primary/90 transition-colors"
        >
          Accepter
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;

