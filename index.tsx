import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ServicesPage from './ServicesPage';
import ServiceDetailPage from './ServiceDetailPage';
import MobileCta from './components/MobileCta';

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
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
        </Routes>
        <MobileCta />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
