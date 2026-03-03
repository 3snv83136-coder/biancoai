import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const PrivacyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const prevTitle = document.title;
    const prevDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '';
    document.title = 'Politique de confidentialité | Bianco Esthétique';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Politique de confidentialité et protection des données personnelles. Bianco Esthétique, institut de beauté Hyères.');
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
          <h1 className="text-4xl md:text-5xl serif text-dark mb-8">Politique de confidentialité</h1>
          <p className="text-gray-500 font-light mb-6">
            La présente politique de confidentialité explique comment Bianco Esthétique collecte et traite vos données personnelles dans le
            cadre de l&apos;utilisation du site.
          </p>

          <div className="space-y-8 text-gray-600 font-light leading-relaxed">
            <section>
              <h2 className="text-2xl serif text-dark mb-3">Données collectées</h2>
              <p>
                Le site ne collecte pas de données personnelles sans votre accord explicite. Les seules informations susceptibles d&apos;être
                traitées sont celles que vous communiquez volontairement (par exemple via la prise de rendez‑vous sur Planity, qui dispose
                de sa propre politique de confidentialité).
              </p>
            </section>

            <section>
              <h2 className="text-2xl serif text-dark mb-3">Utilisation des données</h2>
              <p>
                Les données que vous confiez à l&apos;institut sont utilisées uniquement pour la gestion des rendez‑vous, le suivi de la
                relation client et le respect des obligations légales et comptables.
              </p>
            </section>

            <section>
              <h2 className="text-2xl serif text-dark mb-3">Partage des données</h2>
              <p>
                Vos données ne sont ni vendues ni cédées à des tiers. Elles peuvent être transmises uniquement aux prestataires techniques
                nécessaires au bon fonctionnement des services (par exemple : Planity pour la réservation en ligne), dans le respect du
                RGPD.
              </p>
            </section>

            <section>
              <h2 className="text-2xl serif text-dark mb-3">Durée de conservation</h2>
              <p>
                Vos données sont conservées pendant une durée strictement nécessaire à la gestion de la relation client et conforme aux
                obligations légales applicables.
              </p>
            </section>

            <section>
              <h2 className="text-2xl serif text-dark mb-3">Vos droits</h2>
              <p>
                Conformément à la réglementation en vigueur, vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement et
                d&apos;opposition concernant vos données personnelles. Pour exercer ces droits, vous pouvez contacter l&apos;institut via les
                coordonnées indiquées sur la page Contact.
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PrivacyPage;

