import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import MobileCta from './components/MobileCta';
import CookieBanner from './components/CookieBanner';

function PageViewTracker() {
  const location = useLocation();
  useEffect(() => {
    // Fire-and-forget, no auth needed
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path: location.pathname }),
    }).catch(() => {});
  }, [location.pathname]);
  return null;
}

// Homepage : import direct (LCP, toujours visitée en premier)
import App from './App';

// Lazy-load pour toutes les autres routes (code-splitting)
const ServicesPage = React.lazy(() => import('./ServicesPage'));
const ServiceDetailPage = React.lazy(() => import('./ServiceDetailPage'));
const AboutPage = React.lazy(() => import('./AboutPage'));
const PricingPage = React.lazy(() => import('./PricingPage'));
const BlogListPage = React.lazy(() => import('./BlogListPage'));
const BlogPostPage = React.lazy(() => import('./BlogPostPage'));
const HeadSpaPage = React.lazy(() => import('./HeadSpaPage'));
const SEOPrestationPage = React.lazy(() => import('./SEOPrestationPage'));
const LegalPage = React.lazy(() => import('./LegalPage'));
const PrivacyPage = React.lazy(() => import('./PrivacyPage'));
const CookiesPage = React.lazy(() => import('./CookiesPage'));
const SEOGeoPage = React.lazy(() => import('./SEOGeoPage'));
const EpilationPasserellePage = React.lazy(() => import('./EpilationPasserellePage'));
const NotFoundPage = React.lazy(() => import('./NotFoundPage'));
const AdminPage = React.lazy(() => import('./components/AdminPage'));
const DynamicPage = React.lazy(() => import('./DynamicPage'));
// Passerelles Massages
const MassageRelaxantPage = React.lazy(() => import('./MassageRelaxantPage'));
const MassageDosNuquePage = React.lazy(() => import('./MassageDosNuquePage'));
const MassageBienEtrePage = React.lazy(() => import('./MassageBienEtrePage'));
const MassageKobidoPage = React.lazy(() => import('./MassageKobidoPage'));
const MassageFemmeEnceintePage = React.lazy(() => import('./MassageFemmeEnceintePage'));
// Passerelles Drainage
const DrainageJambesLourdesPage = React.lazy(() => import('./DrainageJambesLourdesPage'));
const DrainageMinceurPage = React.lazy(() => import('./DrainageMinceurPage'));
const DrainageApresAccouchementPage = React.lazy(() => import('./DrainageApresAccouchementPage'));
const DrainagePrixPage = React.lazy(() => import('./DrainagePrixPage'));
const JourneeBeautePage = React.lazy(() => import('./JourneeBeautePage'));
// Passerelles Soins Visage
const SoinVisageAntiAgePage = React.lazy(() => import('./SoinVisageAntiAgePage'));
const SoinVisageEclatPage = React.lazy(() => import('./SoinVisageEclatPage'));
const SoinVisagePeauSensiblePage = React.lazy(() => import('./SoinVisagePeauSensiblePage'));
const SoinVisageHommePage = React.lazy(() => import('./SoinVisageHommePage'));
const MicrodermabrasionPage = React.lazy(() => import('./MicrodermabrasionPage'));
// Passerelles Head Spa
const HeadSpaCadeauPage = React.lazy(() => import('./HeadSpaCadeauPage'));
const HeadSpaDuoPage = React.lazy(() => import('./HeadSpaDuoPage'));
const HeadSpaPrixPage = React.lazy(() => import('./HeadSpaPrixPage'));
// Passerelles Ongles & Regard
const PoseOnglesGelPage = React.lazy(() => import('./PoseOnglesGelPage'));
const NailArtPage = React.lazy(() => import('./NailArtPage'));
const RehaussementCilsPage = React.lazy(() => import('./RehaussementCilsPage'));
// Passerelles Occasions
const CadeauBeautePage = React.lazy(() => import('./CadeauBeautePage'));
const BeauteMariagePage = React.lazy(() => import('./BeauteMariagePage'));
const SoinsApressoleilPage = React.lazy(() => import('./SoinsApressoleilPage'));
const PreparerPeauEtePage = React.lazy(() => import('./PreparerPeauEtePage'));

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
        <PageViewTracker />
        <React.Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/prestations" element={<Navigate to="/prestation" replace />} />
          <Route path="/services" element={<Navigate to="/prestation" replace />} />
          <Route path="/prestation" element={<ServicesPage />} />
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
          <Route path="/apres-epilation-soins-hyeres" element={<EpilationPasserellePage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/mentions-legales" element={<LegalPage />} />
          <Route path="/confidentialite" element={<PrivacyPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/admin" element={<AdminPage />} />
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
          {/* Passerelles Massages */}
          <Route path="/massage-relaxant-hyeres" element={<MassageRelaxantPage />} />
          <Route path="/massage-dos-nuque-hyeres" element={<MassageDosNuquePage />} />
          <Route path="/massage-bien-etre-hyeres" element={<MassageBienEtrePage />} />
          <Route path="/massage-kobido-hyeres" element={<MassageKobidoPage />} />
          <Route path="/massage-femme-enceinte-hyeres" element={<MassageFemmeEnceintePage />} />
          {/* Passerelles Drainage */}
          <Route path="/drainage-lymphatique-jambes-lourdes-hyeres" element={<DrainageJambesLourdesPage />} />
          <Route path="/drainage-lymphatique-minceur-hyeres" element={<DrainageMinceurPage />} />
          <Route path="/drainage-lymphatique-apres-accouchement-hyeres" element={<DrainageApresAccouchementPage />} />
          <Route path="/drainage-lymphatique-prix-hyeres" element={<DrainagePrixPage />} />
          <Route path="/journee-beaute-hyeres" element={<JourneeBeautePage />} />
          {/* Passerelles Soins Visage */}
          <Route path="/soin-visage-anti-age-hyeres" element={<SoinVisageAntiAgePage />} />
          <Route path="/soin-visage-eclat-hyeres" element={<SoinVisageEclatPage />} />
          <Route path="/soin-visage-peau-sensible-hyeres" element={<SoinVisagePeauSensiblePage />} />
          <Route path="/soin-visage-homme-hyeres" element={<SoinVisageHommePage />} />
          <Route path="/microdermabrasion-hyeres" element={<MicrodermabrasionPage />} />
          {/* Passerelles Head Spa */}
          <Route path="/head-spa-cadeau-hyeres" element={<HeadSpaCadeauPage />} />
          <Route path="/head-spa-duo-hyeres" element={<HeadSpaDuoPage />} />
          <Route path="/head-spa-prix-hyeres" element={<HeadSpaPrixPage />} />
          {/* Passerelles Ongles & Regard */}
          <Route path="/pose-ongles-gel-hyeres" element={<PoseOnglesGelPage />} />
          <Route path="/nail-art-hyeres" element={<NailArtPage />} />
          <Route path="/rehaussement-cils-hyeres" element={<RehaussementCilsPage />} />
          {/* Passerelles Occasions */}
          <Route path="/cadeau-beaute-hyeres" element={<CadeauBeautePage />} />
          <Route path="/beaute-mariage-hyeres" element={<BeauteMariagePage />} />
          <Route path="/soins-peau-apres-soleil-hyeres" element={<SoinsApressoleilPage />} />
          <Route path="/preparer-peau-ete-hyeres" element={<PreparerPeauEtePage />} />
          {/* Pages dynamiques creees depuis le back-office */}
          <Route path="/p/:slug" element={<DynamicPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </React.Suspense>
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
