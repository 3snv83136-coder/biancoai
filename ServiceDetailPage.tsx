import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { services } from './servicesData';
import { BUSINESS_INFO } from './constants';
import type { Service } from './servicesData';

const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.id === slug) ?? null;

  useEffect(() => {
    if (service) {
      document.title = `${service.metaTitle} | Bianco Esthétique`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', service.metaDescription);
      return () => {
        document.title = 'Bianco Esthétique | Institut de Beauté & Bien-être Hyères';
        if (metaDesc) metaDesc.setAttribute('content', 'Institut de beauté et bien-être à Hyères. Spécialiste du drainage lymphatique méthode brésilienne et de la beauté du regard.');
      };
    }
  }, [service]);

  return (
    <div className="min-h-screen bg-surface">
      <Navbar onLinkClick={() => {}} />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-10 hover:gap-4 transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Retour aux services
          </Link>

          {service ? (
            <ServiceContent service={service} />
          ) : (
            <>
              <h1 className="text-4xl md:text-5xl serif text-dark mb-6">Service non trouvé</h1>
              <p className="text-gray-600 font-light mb-8">
                Ce service n&apos;existe pas ou le lien est incorrect. Retournez à la liste des services.
              </p>
            </>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

const ServiceContent: React.FC<{ service: Service }> = ({ service }) => (
  <article>
    <header className="mb-10">
      <p className="text-primary font-semibold uppercase tracking-widest text-xs mb-2">{service.city}</p>
      <h1 className="text-4xl md:text-5xl serif text-dark mb-6">{service.title}</h1>
      <p className="text-gray-600 font-light leading-relaxed max-w-3xl">{service.intro}</p>
    </header>

    {service.sections.length > 0 && (
      <div className="space-y-10 mb-12">
        {service.sections.map((section, i) => (
          <div key={i}>
            <h2 className="text-xl serif text-dark mb-3">{section.title}</h2>
            <p className="text-gray-600 font-light leading-relaxed">{section.content}</p>
          </div>
        ))}
      </div>
    )}

    {service.faq.length > 0 && (
      <div className="mb-12">
        <h2 className="text-2xl serif text-dark mb-6">Questions fréquentes</h2>
        <ul className="space-y-6">
          {service.faq.map((item, i) => (
            <li key={i} className="border-b border-gray-100 pb-6 last:border-0">
              <h3 className="text-base font-semibold text-dark mb-2">{item.question}</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">{item.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    )}

    <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center">
      <p className="text-gray-600 font-light mb-6">{service.cta.text}</p>
      <a
        href={BUSINESS_INFO.planityUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-primary text-white font-semibold uppercase tracking-widest text-sm px-8 py-4 rounded-full hover:bg-primary/90 transition-colors"
      >
        {service.cta.button}
      </a>
    </div>
  </article>
);

export default ServiceDetailPage;
