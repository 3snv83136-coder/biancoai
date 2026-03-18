import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Routes, Route } from 'react-router-dom';

import App from './App';
import ServicesPage from './ServicesPage';
import ServiceDetailPage from './ServiceDetailPage';
import AboutPage from './AboutPage';
import PricingPage from './PricingPage';
import BlogListPage from './BlogListPage';
import BlogPostPage from './BlogPostPage';
import HeadSpaPage from './HeadSpaPage';
import SEOPrestationPage from './SEOPrestationPage';
import SEOGeoPage from './SEOGeoPage';
import LegalPage from './LegalPage';
import PrivacyPage from './PrivacyPage';
import CookiesPage from './CookiesPage';
import MobileCta from './components/MobileCta';

export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/prestations" element={<ServicesPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/tarifs" element={<PricingPage />} />
        <Route path="/head-spa-hyeres" element={<HeadSpaPage />} />
        <Route path="/institut-beaute-hyeres" element={<SEOPrestationPage pageSlug="institut-beaute-hyeres" />} />
        <Route path="/soin-visage-hyeres" element={<SEOPrestationPage pageSlug="soin-visage-hyeres" />} />
        <Route path="/manucure-ongles-gel-hyeres" element={<SEOPrestationPage pageSlug="manucure-ongles-gel-hyeres" />} />
        <Route path="/extensions-cils-hyeres" element={<SEOPrestationPage pageSlug="extensions-cils-hyeres" />} />
        <Route path="/massage-californien-hyeres" element={<SEOPrestationPage pageSlug="massage-californien-hyeres" />} />
        <Route path="/callus-peeling-hyeres" element={<SEOPrestationPage pageSlug="callus-peeling-hyeres" />} />
        <Route path="/soin-visage-toulon" element={<SEOPrestationPage pageSlug="soin-visage-toulon" />} />
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/mentions-legales" element={<LegalPage />} />
        <Route path="/confidentialite" element={<PrivacyPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
        {/* SEO Geo */}
        <Route path="/institut-beaute-centre-ville-hyeres" element={<SEOGeoPage pageSlug="institut-beaute-centre-ville-hyeres" />} />
        <Route path="/institut-beaute-costebelle-hyeres" element={<SEOGeoPage pageSlug="institut-beaute-costebelle-hyeres" />} />
        <Route path="/institut-beaute-les-palmiers-hyeres" element={<SEOGeoPage pageSlug="institut-beaute-les-palmiers-hyeres" />} />
        <Route path="/institut-beaute-port-hyeres" element={<SEOGeoPage pageSlug="institut-beaute-port-hyeres" />} />
        <Route path="/institut-beaute-almanarre-hyeres" element={<SEOGeoPage pageSlug="institut-beaute-almanarre-hyeres" />} />
        <Route path="/institut-beaute-giens-hyeres" element={<SEOGeoPage pageSlug="institut-beaute-giens-hyeres" />} />
        <Route path="/institut-beaute-toulon" element={<SEOGeoPage pageSlug="institut-beaute-toulon" />} />
        <Route path="/institut-beaute-la-garde" element={<SEOGeoPage pageSlug="institut-beaute-la-garde" />} />
        <Route path="/institut-beaute-carqueiranne" element={<SEOGeoPage pageSlug="institut-beaute-carqueiranne" />} />
        <Route path="/institut-beaute-le-pradet" element={<SEOGeoPage pageSlug="institut-beaute-le-pradet" />} />
        <Route path="/institut-beaute-la-crau" element={<SEOGeoPage pageSlug="institut-beaute-la-crau" />} />
        <Route path="/institut-beaute-la-londe-les-maures" element={<SEOGeoPage pageSlug="institut-beaute-la-londe-les-maures" />} />
        <Route path="/institut-beaute-bormes-les-mimosas" element={<SEOGeoPage pageSlug="institut-beaute-bormes-les-mimosas" />} />
        <Route path="/institut-beaute-la-valette-du-var" element={<SEOGeoPage pageSlug="institut-beaute-la-valette-du-var" />} />
        <Route path="/institut-beaute-sollies-pont" element={<SEOGeoPage pageSlug="institut-beaute-sollies-pont" />} />
        <Route path="/institut-beaute-cuers" element={<SEOGeoPage pageSlug="institut-beaute-cuers" />} />
      </Routes>
      <MobileCta />
    </StaticRouter>
  );
}
