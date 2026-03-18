import React from 'react';
import { BUSINESS_INFO } from '../constants';

const telHref = `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`;

const MobileCta: React.FC = () => (
  <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex bg-white shadow-[0_-2px_12px_rgba(0,0,0,0.12)] border-t border-gray-100">
    <a
      href={telHref}
      className="flex-1 flex items-center justify-center gap-2 py-4 text-dark font-semibold border-r border-gray-100 active:bg-gray-50"
      aria-label="Appeler Bianco Esthétique"
    >
      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      <span className="text-sm">Appelez-nous</span>
    </a>
    <a
      href={BUSINESS_INFO.planityUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex items-center justify-center gap-2 py-4 bg-primary text-white font-semibold active:bg-primary/90"
      aria-label="Prendre rendez-vous sur Planity"
    >
      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <span className="text-sm">Prendre RDV</span>
    </a>
  </div>
);

export default MobileCta;
