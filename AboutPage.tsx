import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Breadcrumb from './components/Breadcrumb';
import { BUSINESS_INFO } from './constants';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const defaultTitle = document.title;
    const defaultDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '';
    document.title = 'À propos | Bianco Esthétique – Institut de beauté Hyères';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Bianco Esthétique : l\'histoire de Salomé, une esthéticienne passionnée à Hyères. Exigence MAF, formation continue, Head Spa à venir. Rigueur et proximité au service de votre beauté.');

    return () => {
      document.title = defaultTitle;
      const m = document.querySelector('meta[name="description"]');
      if (m && defaultDesc) m.setAttribute('content', defaultDesc);
    };
  }, []);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.bianco-esthetique.fr' },
      { '@type': 'ListItem', position: 2, name: 'À propos', item: 'https://www.bianco-esthetique.fr/a-propos' },
    ],
  };

  return (
    <div className="min-h-screen bg-surface">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Navbar onLinkClick={() => {}} />
      <section className="pt-32 pb-20 md:pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <Breadcrumb items={[
            { label: 'Accueil', to: '/' },
            { label: 'À propos' },
          ]} />

          <h1 className="text-4xl md:text-5xl serif text-dark mb-12">À propos – Bianco Esthétique</h1>

          <div className="prose prose-lg max-w-none space-y-16 text-dark">
            <section>
              <h2 className="text-2xl md:text-3xl serif text-dark mb-6">Bianco Esthétique, une histoire de passion et de détermination</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                Bianco Esthétique est né il y a plus de deux ans d&apos;une volonté simple : créer un lieu où la beauté rime avec exigence, savoir-faire et authenticité.
              </p>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                À l&apos;origine du projet, <strong className="text-dark font-medium">Salomé</strong>, passionnée par son métier depuis toujours. Formée avec rigueur et reconnue pour son excellence, elle s&apos;inscrit dans une démarche de qualité inspirée des standards des <strong className="text-dark font-medium">Meilleurs Apprentis de France</strong> : précision du geste, respect des protocoles, et recherche constante de perfection.
              </p>
              <p className="text-gray-600 font-light leading-relaxed">
                Ici, rien n&apos;est laissé au hasard. Chaque soin est pensé, maîtrisé et exécuté avec une attention particulière portée aux détails.
              </p>
            </section>

            <hr className="border-gray-200" />

            <section>
              <h2 className="text-2xl md:text-3xl serif text-dark mb-6">Un institut créé à la force du travail</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Salomé a fait le choix de l&apos;indépendance pour garantir :
              </p>
              <ul className="list-none space-y-3 text-gray-600 font-light">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Une sélection exigeante des produits</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Des protocoles maîtrisés</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Un accompagnement personnalisé</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Une relation humaine sincère avec chaque cliente</span>
                </li>
              </ul>
              <p className="text-gray-600 font-light leading-relaxed mt-6">
                Le résultat ? Un institut à taille humaine où l&apos;on vient autant pour la qualité des soins que pour la confiance.
              </p>
            </section>

            <hr className="border-gray-200" />

            <section>
              <h2 className="text-2xl md:text-3xl serif text-dark mb-6">Une expertise en évolution permanente</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                Le secteur de l&apos;esthétique évolue vite.<br />
                Les techniques changent. Les attentes aussi.
              </p>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                C&apos;est pour cette raison que Bianco Esthétique est en <strong className="text-dark font-medium">formation continue</strong>. Salomé se perfectionne régulièrement afin d&apos;intégrer les méthodes les plus performantes et les plus sûres.
              </p>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                Cette exigence permet de proposer :
              </p>
              <ul className="list-none space-y-3 text-gray-600 font-light">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Des soins visage adaptés aux besoins réels de la peau</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Des protocoles personnalisés</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Des prestations esthétiques modernes et maîtrisées</span>
                </li>
              </ul>
              <p className="text-gray-600 font-light leading-relaxed mt-6">
                Et bientôt, une nouvelle expérience : <strong className="text-dark font-medium">le Head Spa</strong>.
              </p>
            </section>

            <hr className="border-gray-200" />

            <section>
              <h2 className="text-2xl md:text-3xl serif text-dark mb-6">Prochainement : le Head Spa</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Le Head Spa est un rituel inspiré des techniques asiatiques, centré sur le cuir chevelu, la détente profonde et la stimulation capillaire.
              </p>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Chez Bianco Esthétique, il ne s&apos;agira pas d&apos;un simple soin tendance, mais d&apos;un protocole réfléchi, structuré et adapté à chaque cliente.
              </p>
              <p className="text-gray-600 font-light leading-relaxed mb-4">Objectifs :</p>
              <ul className="list-none space-y-3 text-gray-600 font-light">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Détendre profondément</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Stimuler la microcirculation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Apaiser le cuir chevelu</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Offrir un véritable moment de lâcher-prise</span>
                </li>
              </ul>
              <p className="text-gray-600 font-light leading-relaxed mt-6">
                Comme toujours, le soin sera intégré uniquement après validation technique et formation complète.
              </p>
            </section>

            <hr className="border-gray-200" />

            <section>
              <h2 className="text-2xl md:text-3xl serif text-dark mb-6">Notre vision de la beauté</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Pour Salomé, la beauté ne se résume pas à l&apos;apparence.<br />
                C&apos;est un équilibre entre technique, confiance et bien-être.
              </p>
              <p className="text-gray-600 font-light leading-relaxed mb-4">Bianco Esthétique défend :</p>
              <ul className="list-none space-y-3 text-gray-600 font-light">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Le respect de la peau</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Le respect du rythme naturel du corps</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>La transparence sur les prestations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Une approche professionnelle sans sur-promesse</span>
                </li>
              </ul>
              <p className="text-gray-600 font-light leading-relaxed mt-6">
                Chaque cliente est accompagnée avec sérieux, mais toujours avec une touche humaine. On parle vrai, on conseille honnêtement, on travaille avec précision.
              </p>
            </section>

            <hr className="border-gray-200" />

            <section>
              <h2 className="text-2xl md:text-3xl serif text-dark mb-6">Pourquoi choisir Bianco Esthétique ?</h2>
              <ul className="space-y-3 text-gray-600 font-light">
                <li className="flex items-center gap-3">
                  <span className="text-primary font-bold">✔</span>
                  <span>Une esthéticienne passionnée et investie</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary font-bold">✔</span>
                  <span>Une formation continue</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary font-bold">✔</span>
                  <span>Des protocoles évolutifs</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary font-bold">✔</span>
                  <span>Une approche personnalisée</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary font-bold">✔</span>
                  <span>Un institut indépendant et engagé</span>
                </li>
              </ul>
              <p className="text-gray-600 font-light leading-relaxed mt-8">
                Bianco Esthétique, c&apos;est l&apos;alliance entre rigueur technique et proximité.
              </p>
            </section>

            <hr className="border-gray-200" />

            <section>
              <h2 className="text-2xl md:text-3xl serif text-dark mb-6">Bianco Esthétique – L&apos;exigence au service de votre beauté</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                Plus qu&apos;un institut, c&apos;est un projet porté par la passion et le travail.<br />
                Un lieu où l&apos;on prend soin de vous sérieusement, sans prétention, mais avec un vrai savoir-faire.
              </p>
              <p className="text-gray-600 font-light leading-relaxed text-lg serif">
                Bienvenue chez Bianco Esthétique.
              </p>
            </section>
          </div>

          <div className="mt-16 pt-12 border-t border-gray-200 flex flex-wrap gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs px-5 py-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Accueil
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs px-5 py-3 rounded-full border-2 border-primary hover:bg-primary hover:text-white transition-all"
            >
              Nos services
            </Link>
            <a
              href={BUSINESS_INFO.planityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs px-5 py-3 rounded-full bg-primary hover:bg-primary/90 transition-all"
            >
              Réserver
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
