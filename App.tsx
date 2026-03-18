
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BUSINESS_INFO, SERVICES, REVIEWS, FAQ_ITEMS, FALLBACK_WELLNESS_TIPS } from './constants';
import { services as SEO_SERVICES } from './servicesData';
import type { WellnessTip } from './types';

const FAQAccordionItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void }> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`bg-white rounded-[1.5rem] md:rounded-[2rem] border transition-all duration-300 overflow-hidden ${isOpen ? 'border-primary/30 shadow-md' : 'border-gray-100 hover:border-primary/20 hover:shadow-sm'}`}>
      <button 
        onClick={onClick}
        className="w-full text-left p-5 md:p-8 flex justify-between items-center gap-4 focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-base md:text-xl serif pr-4 text-dark font-medium leading-tight">{question}</span>
        <span className={`flex-shrink-0 bg-primary/10 p-2 rounded-full text-primary transition-transform duration-300 ${isOpen ? 'rotate-180 bg-primary text-white' : ''}`}>
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-5 md:px-8 pb-6 md:pb-8 text-sm md:text-base text-gray-500 font-light leading-relaxed border-t border-gray-50 pt-4">
          {answer}
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const { hash } = useLocation();
  const [view, setView] = useState<'home' | 'services'>('home');
  const [activeCategory, setActiveCategory] = useState('Regard');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [wellnessTips] = useState<WellnessTip[]>(FALLBACK_WELLNESS_TIPS);

  useEffect(() => {
    const id = hash?.replace('#', '');
    if (id) {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [hash]);

  useEffect(() => {
    if (hash !== '#prestations') window.scrollTo(0, 0);
  }, [view]);

  // JSON-LD (computed at render for SSR visibility)
  const dayToSchema: Record<string, string> = {
    Lundi: 'Mo', Mardi: 'Tu', Mercredi: 'We', Jeudi: 'Th', Vendredi: 'Fr', Samedi: 'Sa', Dimanche: 'Su'
  };
  const openingHours = Object.entries(BUSINESS_INFO.hours)
    .filter(([, hours]) => hours !== 'Fermé')
    .map(([day, hours]) => `${dayToSchema[day]} ${hours.replace(/\s*–\s*/g, '-').replace(/\s/g, '')}`);

  const salonJsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Bianco Esthétique",
    "url": "https://www.bianco-esthetique.fr",
    "description": "Institut de beauté et bien-être à Hyères. Spécialiste du drainage lymphatique méthode brésilienne, des soins visage et de la beauté du regard.",
    "telephone": "+33749769691",
    "email": "contact@bianco-esthetique.fr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3 Avenue Ernest Millet",
      "addressLocality": "Hyères",
      "postalCode": "83400",
      "addressRegion": "Var",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.1199",
      "longitude": "6.1314"
    },
    "areaServed": {
      "@type": "City",
      "name": "Hyères"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "10:00",
        "closes": "18:00"
      }
    ],
    ...(openingHours.length ? { "openingHours": openingHours } : {}),
    "priceRange": "€€",
    "image": "https://www.bianco-esthetique.fr/og-image.jpg",
    "founder": {
      "@type": "Person",
      "name": "Salomé Bianco",
      "jobTitle": "Esthéticienne, gérante"
    },
    "sameAs": [
      BUSINESS_INFO.instagram,
      BUSINESS_INFO.facebook,
      BUSINESS_INFO.planityUrl,
    ]
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Bianco Esthétique",
    "url": "https://www.bianco-esthetique.fr",
    "publisher": {
      "@type": "BeautySalon",
      "name": "Bianco Esthétique"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.bianco-esthetique.fr/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: SEO_SERVICES.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://www.bianco-esthetique.fr/services/${service.id}`,
      name: service.metaTitle || service.title,
      description: service.metaDescription,
    })),
  };

  const categories = ['Regard', 'Drainage', 'Visage', 'Mains'];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const ServiceCard = ({ service }: { service: any }) => (
    <div className="group bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:shadow-2xl hover:border-primary/20 transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h4 className="text-2xl serif group-hover:text-primary transition-colors duration-300">{service.name}</h4>
          {service.highlighted && <span className="inline-block mt-2 text-[10px] bg-primary/10 text-primary px-3 py-1 rounded-full font-bold uppercase tracking-widest montserrat">Signature</span>}
        </div>
        <span className="text-2xl serif font-light text-primary">{service.price}€</span>
      </div>
      <p className="text-gray-500 font-light mb-6 leading-relaxed">{service.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 montserrat">{service.duration}</span>
        <a href={BUSINESS_INFO.planityUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest text-dark hover:text-primary transition-colors border-b border-dark/20 hover:border-primary">Réserver</a>
      </div>
    </div>
  );

  if (view === 'services') {
    return (
      <div className="min-h-screen bg-surface">
        <Navbar onLinkClick={() => setView('home')} />
        
        <section className="pt-40 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <button 
              onClick={() => setView('home')}
              className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-12 hover:gap-4 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Retour à l'accueil
            </button>
            
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
              <div className="max-w-2xl">
                <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">La Maison Bianco</span>
                <h1 className="text-5xl md:text-7xl serif">Nos Prestations <br /><span className="italic font-light">Sur-Mesure</span></h1>
              </div>
              <div className="flex flex-wrap gap-3 no-scrollbar overflow-x-auto pb-4">
                {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-primary text-white shadow-xl' : 'bg-white text-dark/70 hover:text-dark'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32 animate-in fade-in slide-in-from-bottom-8 duration-700">
              {SERVICES.filter(s => s.category === activeCategory).map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>

            {/* Section reassurance dans les soins */}
            <div className="bg-dark text-white rounded-[3rem] p-12 md:p-24 flex flex-col md:flex-row items-center gap-16 shadow-3xl">
              <div className="flex-1">
                <h3 className="text-4xl serif mb-6">L'Expérience Bianco</h3>
                <p className="text-gray-400 font-light leading-relaxed mb-8">Chaque soin est une invitation au voyage intérieur. Nous combinons des techniques ancestrales et des innovations esthétiques pour révéler votre beauté singulière.</p>
                <a href={BUSINESS_INFO.planityUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-white px-12 py-5 rounded-full text-lg font-bold hover:bg-white hover:text-dark transition-all">Prendre rendez-vous</a>
              </div>
              <div className="w-full md:w-1/3 aspect-square rounded-[2rem] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=70&w=500" className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700" alt="Moment de détente et relaxation à Bianco Esthétique Hyères" loading="lazy" width={500} height={500} />
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(salonJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <Navbar onLinkClick={() => setView('home')} />

      {/* Hero Section */}
      <section className="relative h-[100svh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 scale-105">
          <img 
            src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=70&w=1100" 
            alt="Ambiance institut de beauté Bianco Esthétique à Hyères, espace détente et bien-être"
            className="w-full h-full object-cover brightness-[0.65]"
            width={1100}
            height={733}
            fetchPriority="high"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl pt-16 md:pt-24">
          <div className="inline-block mb-8 py-2 px-6 border border-white/30 backdrop-blur-md rounded-full">
            <span className="text-white text-xs md:text-sm font-medium tracking-ultra-wide uppercase montserrat">
              Meilleure Apprentie de France
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white serif mb-10 leading-[1.05] md:leading-[1]">
            Votre bien‑être,<br /> <span className="italic font-light">tout simplement</span>
          </h1>
          <p className="text-white/90 text-base md:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed montserrat">
            Maison de Beauté à Hyères. L'expertise du drainage lymphatique brésilien et l'art du regard.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={BUSINESS_INFO.planityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto overflow-hidden bg-primary text-white px-12 py-5 rounded-full text-lg font-bold transition-all shadow-2xl hover:shadow-primary/20"
            >
              <span className="relative z-10">Réserver en ligne</span>
              <div className="absolute inset-0 bg-dark translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <Link 
              to="/#prestations"
              className="w-full sm:w-auto text-center text-white px-10 py-5 rounded-full text-lg font-medium border border-white/50 hover:bg-white hover:text-dark transition-all backdrop-blur-sm inline-block"
            >
              Découvrir nos soins
            </Link>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-50">
          <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* Intro géo-ciblée */}
      <section id="main-content" className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl serif mb-6">Institut de Beauté à Hyères</h2>
          <p className="text-gray-600 font-light leading-relaxed mb-4">
            Bianco Esthétique est votre institut de beauté de référence à <strong className="font-medium text-dark">Hyères (83400)</strong>, dans le département du <strong className="font-medium text-dark">Var</strong>. Salomé vous accueille dans un espace chaleureux pour des soins du visage, du drainage lymphatique méthode brésilienne, des extensions de cils, des manucures et des massages sur mesure.
          </p>
          <p className="text-gray-500 font-light leading-relaxed text-sm">
            À quelques minutes de <strong>Toulon</strong>, <strong>Carqueiranne</strong>, <strong>La Garde</strong>, <strong>Le Pradet</strong> et <strong>La Londe-les-Maures</strong>, l'institut est facilement accessible depuis toute la presqu'île de Giens et les communes voisines du Var.
          </p>
        </div>
      </section>

      {/* Why Bianco? */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl serif">Pourquoi choisir Bianco Esthétique&nbsp;?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-center">
            <div className="group">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6 md:mb-8 transition-transform group-hover:-rotate-12 group-hover:bg-primary group-hover:text-white">
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.143-7.714L1 12l7.714-2.143L11 3z" /></svg>
              </div>
              <h3 className="text-xl md:text-2xl serif mb-4">Excellence MAF</h3>
              <p className="text-gray-500 font-light leading-relaxed text-sm md:text-base">Le savoir-faire récompensé d'une Meilleure Apprentie de France pour des résultats d'exception.</p>
            </div>
            <div className="group">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6 md:mb-8 transition-transform group-hover:-rotate-12 group-hover:bg-primary group-hover:text-white">
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="text-xl md:text-2xl serif mb-4">Approche Holistique</h3>
              <p className="text-gray-500 font-light leading-relaxed text-sm md:text-base">Une vision globale de la beauté où le drainage lymphatique rencontre les soins esthétiques avancés.</p>
            </div>
            <div className="group">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6 md:mb-8 transition-transform group-hover:-rotate-12 group-hover:bg-primary group-hover:text-white">
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl md:text-2xl serif mb-4">Instant Suspendu</h3>
              <p className="text-gray-500 font-light leading-relaxed text-sm md:text-base">Une parenthèse de calme absolu au cœur de Hyères, pensée pour votre sérénité totale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section (Summary) */}
      <section id="prestations" className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">Notre Expertise</span>
              <h2 className="text-4xl md:text-6xl serif leading-tight">L'Art de magnifier <br /><span className="italic">votre éclat naturel</span></h2>
            </div>
            <Link to="/tarifs" className="text-sm font-bold tracking-widest uppercase border-b-2 border-primary pb-1 hover:text-primary transition-all">Consulter la carte complète</Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="space-y-12 md:space-y-20">
              <div className="group cursor-pointer">
                <div className="flex gap-6 md:gap-8 items-start">
                <span className="text-primary text-4xl md:text-6xl serif font-light">01</span>
                  <div>
                    <h3 className="text-2xl md:text-3xl serif mb-4 group-hover:text-primary transition-colors">Soin Visage</h3>
                    <p className="text-gray-500 leading-relaxed mb-6 text-sm md:text-base">Offrez à votre peau un soin visage sur-mesure pour lisser, réhydrater et réveiller l&apos;éclat de votre teint, saison après saison.</p>
                  </div>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="flex gap-6 md:gap-8 items-start">
                <span className="text-primary text-4xl md:text-6xl serif font-light">02</span>
                  <div>
                    <h3 className="text-2xl md:text-3xl serif mb-4 group-hover:text-primary transition-colors">Drainage Lymphatique</h3>
                    <p className="text-gray-500 leading-relaxed mb-6 text-sm md:text-base">Expertise en méthode brésilienne pour un corps plus léger, une peau raffermie et une détoxification profonde de l'organisme.</p>
                  </div>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="flex gap-6 md:gap-8 items-start">
                  <span className="text-primary text-4xl md:text-6xl serif font-light">03</span>
                  <div>
                    <h3 className="text-2xl md:text-3xl serif mb-4 group-hover:text-primary transition-colors">Head Spa</h3>
                    <p className="text-gray-500 leading-relaxed mb-6 text-sm md:text-base">
                      Rituel inspiré du Japon pour délier les tensions de la nuque et du cuir chevelu, favoriser la microcirculation et offrir une détente profonde.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl scale-95 hover:scale-100 transition-transform duration-700">
                <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=70&w=600" className="w-full h-full object-cover" alt="Soin visage et bien-être à l'institut Bianco Esthétique Hyères" loading="lazy" width={600} height={800} />
              </div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 md:w-48 md:h-48 bg-primary/10 rounded-full -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Conseils Bien-être Section */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">L'Art de Vivre</span>
            <h2 className="text-4xl md:text-5xl serif">Conseils Bien-être</h2>
            <p className="text-gray-400 mt-4 font-light text-sm md:text-base">Les secrets de Bianco pour rayonner au quotidien</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {wellnessTips.map((tip, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 bg-surface rounded-2xl flex items-center justify-center text-primary font-bold text-xl mb-6 shadow-sm serif italic">
                  {i + 1}
                </div>
                <h3 className="text-xl serif mb-4 leading-tight">{tip.title}</h3>
                <p className="text-gray-500 font-light text-sm leading-relaxed">{tip.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">Savoir-faire</span>
            <h2 className="text-4xl md:text-5xl serif">Questions Fréquentes</h2>
          </div>
          <div className="space-y-4 md:space-y-6">
            {FAQ_ITEMS.map((item, i) => (
              <FAQAccordionItem 
                key={i}
                question={item.question}
                answer={item.answer}
                isOpen={openFaqIndex === i}
                onClick={() => toggleFaq(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Avis Clients */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">Confiance</span>
            <h2 className="text-4xl md:text-5xl serif">Ce que disent nos clientes</h2>
            <p className="text-gray-400 mt-4 font-light text-sm">Note 5/5 sur Google — 24 avis vérifiés</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-white p-8 rounded-[2rem] border border-gray-50 shadow-sm">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 font-light text-sm leading-relaxed mb-4">&ldquo;{review.content}&rdquo;</p>
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span className="font-semibold text-dark">{review.author}</span>
                  <span>{review.date}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://www.google.com/maps/place/Bianco+Esth%C3%A9tique/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold uppercase tracking-widest text-primary border-b-2 border-primary pb-1 hover:text-dark hover:border-dark transition-all"
            >
              Voir tous les avis Google
            </a>
          </div>
        </div>
      </section>

      {/* Contact & Accès */}
      <section id="contact" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl serif mb-12">Nous Trouver</h2>
            
            <div className="space-y-10 md:space-y-12">
              <div className="group">
                <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-ultra-wide text-primary mb-4 montserrat">Localisation</h3>
                <p className="text-xl md:text-2xl font-light text-dark/80 serif mb-4 leading-relaxed">{BUSINESS_INFO.address}</p>
              </div>

              <div className="group">
                <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-ultra-wide text-primary mb-4 montserrat">Horaires</h3>
                <div className="grid grid-cols-2 gap-x-12 gap-y-4 max-w-sm">
                  {Object.entries(BUSINESS_INFO.hours).map(([day, hours]) => (
                    <React.Fragment key={day}>
                      <span className="text-gray-500 font-light text-sm md:text-base">{day}</span>
                      <span className={`text-right text-sm md:text-base ${hours === 'Fermé' ? 'text-gray-400 italic' : 'font-medium'}`}>{hours}</span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[350px] md:h-[500px] border-8 border-white relative bg-white">
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex items-center justify-center group"
            >
              <div className="text-center px-8">
                <div className="mx-auto mb-6 w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary flex items-center justify-center bg-surface shadow-xl">
                  <div>
                    <p className="text-[10px] tracking-ultra-wide uppercase montserrat text-primary mb-1">Maison</p>
                    <p className="text-2xl md:text-3xl serif font-bold tracking-[0.25em] text-dark">Bianco</p>
                    <p className="text-[10px] tracking-ultra-wide uppercase montserrat text-primary mt-1">Esthétique</p>
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-500 font-light mb-2">Ouvrir la carte Google Maps</p>
                <p className="text-xs font-bold uppercase tracking-widest text-primary group-hover:underline">
                  {BUSINESS_INFO.address}
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
