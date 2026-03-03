import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const LegalPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const prevTitle = document.title;
    const prevDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '';
    document.title = 'Mentions légales | Bianco Esthétique';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Mentions légales du site Bianco Esthétique, institut de beauté à Hyères. Éditeur, hébergement, propriété intellectuelle.');
    return () => {
      document.title = prevTitle;
      const m = document.querySelector('meta[name="description"]');
      if (m && prevDesc) m.setAttribute('content', prevDesc);
    };
  }, []);

  return (
    <div className="min-h-screen bg-surface">
      <Navbar onLinkClick={() => {}} />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl serif text-dark mb-8">Mentions légales</h1>
          <p className="text-gray-500 font-light mb-6">
            Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique, il est
            précisé aux utilisateurs du site l&apos;identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
          </p>

          <div className="space-y-8 text-gray-600 font-light leading-relaxed">
            <section>
              <h2 className="text-2xl serif text-dark mb-3">Éditeur du site</h2>
              <p>
                <strong className="font-medium text-dark">Bianco Esthétique</strong>
                <br />
                Institut de beauté à Hyères.
              </p>
            </section>

            <section>
              <h2 className="text-2xl serif text-dark mb-3">Hébergement</h2>
              <p>
                Le site est hébergé par la société Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États‑Unis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl serif text-dark mb-3">Propriété intellectuelle</h2>
              <p>
                L&apos;ensemble des éléments graphiques, textes, visuels et photographiques composant le site constitue une œuvre
                protégée par les lois en vigueur sur la propriété intellectuelle. Toute reproduction, représentation, modification,
                adaptation, diffusion ou exploitation, totale ou partielle, du site ou de l&apos;un quelconque des éléments qui le
                composent, est interdite sans l&apos;autorisation écrite préalable de Bianco Esthétique.
              </p>
            </section>

            <section>
              <h2 className="text-2xl serif text-dark mb-3">Responsabilité</h2>
              <p>
                Les informations communiquées sur ce site sont données à titre indicatif. Bianco Esthétique s&apos;efforce de les tenir à
                jour et exactes mais ne peut en garantir l&apos;exhaustivité ni l&apos;absence d&apos;erreur. En conséquence, l&apos;utilisateur
                reconnaît utiliser ces informations sous sa responsabilité exclusive.
              </p>
            </section>

            <section>
              <h2 className="text-2xl serif text-dark mb-3">Contact</h2>
              <p>
                Pour toute question relative au site, vous pouvez contacter l&apos;institut via les coordonnées figurant sur la page
                Contact.
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LegalPage;

