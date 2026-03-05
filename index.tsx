import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MobileCta from './components/MobileCta';
import CookieBanner from './components/CookieBanner';

const App = React.lazy(() => import('./App'));
const ServicesPage = React.lazy(() => import('./ServicesPage'));
const ServiceDetailPage = React.lazy(() => import('./ServiceDetailPage'));
const AboutPage = React.lazy(() => import('./AboutPage'));
const PricingPage = React.lazy(() => import('./PricingPage'));
const BlogListPage = React.lazy(() => import('./BlogListPage'));
const BlogPostPage = React.lazy(() => import('./BlogPostPage'));
const HeadSpaPage = React.lazy(() => import('./HeadSpaPage'));
const LegalPage = React.lazy(() => import('./LegalPage'));
const PrivacyPage = React.lazy(() => import('./PrivacyPage'));
const CookiesPage = React.lazy(() => import('./CookiesPage'));

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

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center bg-surface text-sm text-gray-500">
              Chargement...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/prestations" element={<ServicesPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/tarifs" element={<PricingPage />} />
            <Route path="/head-spa-hyeres" element={<HeadSpaPage />} />
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/mentions-legales" element={<LegalPage />} />
            <Route path="/confidentialite" element={<PrivacyPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
          </Routes>
        </Suspense>
        <MobileCta />
        <CookieBanner />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
