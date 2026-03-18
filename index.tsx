import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MobileCta from './components/MobileCta';
import CookieBanner from './components/CookieBanner';

// Direct imports (no React.lazy) for hydration compatibility
import App from './App';
import ServicesPage from './ServicesPage';
import ServiceDetailPage from './ServiceDetailPage';
import AboutPage from './AboutPage';
import PricingPage from './PricingPage';
import BlogListPage from './BlogListPage';
import BlogPostPage from './BlogPostPage';
import HeadSpaPage from './HeadSpaPage';
import SEOPrestationPage from './SEOPrestationPage';
import LegalPage from './LegalPage';
import PrivacyPage from './PrivacyPage';
import CookiesPage from './CookiesPage';
import SEOGeoPage from './SEOGeoPage';
import NotFoundPage from './NotFoundPage';

// Admin reste lazy (pas prerendu, pas besoin d'hydration)
const AdminPage = React.lazy(() => import('./components/AdminPage'));

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError = () => ({ hasError: true });
  componentDidCatch(error: unknown) {
    console.error('App error:', error);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, fontFamily: 'sans-serif', textAlign: 'center', background: '#FCFBFA', color: '#121212' }}>
          <div>
            <h1 style={{ fontSize: '1.5rem', marginBottom: 8 }}>Bianco Esthétique</h1>
            <p style={{ marginBottom: 16 }}>Une erreur est survenue. Rechargez la page ou contactez-nous au 07 49 96 76 91.</p>
            <a href="/" style={{ color: '#C9A77C', fontWeight: 600 }}>Retour à l&apos;accueil</a>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const appTree = (
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
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
          <Route path="/admin" element={
            <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-surface text-sm text-gray-500">Chargement...</div>}>
              <AdminPage />
            </React.Suspense>
          } />
          {/* SEO Geo - Quartiers Hyeres */}
          <Route path="/institut-beaute-centre-ville-hyeres" element={<SEOGeoPage pageSlug="institut-beaute-centre-ville-hyeres" />} />
          <Route path="/institut-beaute-costebelle-hyeres" element={<SEOGeoPage pageSlug="institut-beaute-costebelle-hyeres" />} />
          <Route path="/institut-beaute-les-palmiers-hyeres" element={<SEOGeoPage pageSlug="institut-beaute-les-palmiers-hyeres" />} />
          <Route path="/institut-beaute-port-hyeres" element={<SEOGeoPage pageSlug="institut-beaute-port-hyeres" />} />
          <Route path="/institut-beaute-almanarre-hyeres" element={<SEOGeoPage pageSlug="institut-beaute-almanarre-hyeres" />} />
          <Route path="/institut-beaute-giens-hyeres" element={<SEOGeoPage pageSlug="institut-beaute-giens-hyeres" />} />
          {/* SEO Geo - Villes limitrophes */}
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
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <MobileCta />
        <CookieBanner />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);

// Hydrate if prerendered, CSR otherwise
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, appTree);
} else {
  ReactDOM.createRoot(rootElement).render(appTree);
}
