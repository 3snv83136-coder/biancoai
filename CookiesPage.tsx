import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const CookiesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-surface">
      <Navbar onLinkClick={() => {}} />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl serif text-dark mb-8">Gestion des cookies</h1>
          <p className="text-gray-500 font-light mb-6">
            Cette page explique le fonctionnement des cookies sur le site de Bianco Esthétique.
          </p>

          <div className="space-y-8 text-gray-600 font-light leading-relaxed">
            <section>
              <h2 className="text-2xl serif text-dark mb-3">Qu&apos;est‑ce qu&apos;un cookie ?</h2>
              <p>
                Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la consultation
                d&apos;un site internet. Il permet notamment de mémoriser certaines informations pour faciliter votre navigation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl serif text-dark mb-3">Cookies utilisés sur ce site</h2>
              <p>
                Le site de Bianco Esthétique utilise uniquement des cookies strictement nécessaires à son bon fonctionnement (par exemple,
                votre choix de consentement aux cookies). Aucun cookie publicitaire ou de mesure d&apos;audience intrusive n&apos;est déposé sans
                votre accord.
              </p>
            </section>

            <section>
              <h2 className="text-2xl serif text-dark mb-3">Votre choix</h2>
              <p>
                Lors de votre première visite, une bannière vous permet d&apos;accepter ou de refuser les cookies non essentiels. Vous pouvez
                modifier ce choix à tout moment en vidant les cookies de votre navigateur et en revenant sur le site.
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CookiesPage;

