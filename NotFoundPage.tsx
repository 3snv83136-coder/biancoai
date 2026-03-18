import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const NotFoundPage: React.FC = () => (
  <div className="min-h-screen bg-surface">
    <Navbar onLinkClick={() => {}} />
    <meta name="robots" content="noindex, nofollow" />
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl serif text-dark mb-6">404</h1>
        <p className="text-xl serif text-dark mb-4">Page introuvable</p>
        <p className="text-gray-500 font-light mb-8">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-white text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
          <Link
            to="/prestations"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-primary text-primary text-sm font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors"
          >
            Nos prestations
          </Link>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default NotFoundPage;
