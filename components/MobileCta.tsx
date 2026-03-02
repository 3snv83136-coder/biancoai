import React from 'react';
import { BUSINESS_INFO } from '../constants';

const telHref = `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`;

const MobileCta: React.FC = () => (
  <a
    href={telHref}
    className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-2 bg-primary text-white font-semibold py-4 px-6 shadow-lg active:bg-primary/90"
    aria-label="Appeler pour des conseils personnalisés"
  >
    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
    <span>Conseils Personnalisés</span>
  </a>
);

export default MobileCta;
