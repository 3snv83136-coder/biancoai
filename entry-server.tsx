import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Routes, Route } from 'react-router-dom';

import App from './App';
import ServicesPage from './ServicesPage';
import ServiceDetailPage from './ServiceDetailPage';
import AboutPage from './AboutPage';
import PricingPage from './PricingPage';
import BlogListPage from './BlogListPage';
import BlogPostPage from './BlogPostPage';
import HeadSpaPage from './HeadSpaPage';
import SEOPrestationPage from './SEOPrestationPage';
import SEOGeoPage from './SEOGeoPage';
import LegalPage from './LegalPage';
import PrivacyPage from './PrivacyPage';
import CookiesPage from './CookiesPage';
import NotFoundPage from './NotFoundPage';
import MobileCta from './components/MobileCta';

import { SEO_GEO_PAGES } from './seoGeoPages';
import { SEO_PRESTATION_PAGES } from './seoPrestationPages';
import { services } from './servicesData';
import { blogPosts } from './blogData';

const STATIC_META: Record<string, { title: string; desc: string }> = {
  '/': {
    title: 'Bianco Esthétique | Institut de Beauté & Bien-être Hyères',
    desc: 'Bianco Esthétique, institut de beauté et de bien-être à Hyères. Drainage lymphatique brésilien, beauté du regard et soins sur-mesure.',
  },
  '/prestations': {
    title: 'Nos prestations | Bianco Esthétique – Hyères',
    desc: 'Aperçu de toutes les prestations Bianco Esthétique à Hyères : soins corps, visage, regard, mains, pieds, maquillage et drainage lymphatique.',
  },
  '/services': {
    title: 'Nos prestations | Bianco Esthétique – Hyères',
    desc: 'Aperçu de toutes les prestations Bianco Esthétique à Hyères : soins corps, visage, regard, mains, pieds, maquillage et drainage lymphatique.',
  },
  '/tarifs': {
    title: 'Tarifs et prestations | Bianco Esthétique – Hyères',
    desc: 'Tarifs des soins et prestations de Bianco Esthétique à Hyères. Soins corps, visage, mains, pieds, regard, drainage lymphatique.',
  },
  '/a-propos': {
    title: 'À propos | Bianco Esthétique – Institut de beauté Hyères',
    desc: "Bianco Esthétique : l'histoire de Salomé, esthéticienne passionnée à Hyères. Exigence MAF, formation continue.",
  },
  '/head-spa-hyeres': {
    title: 'Head Spa à Hyères | Rituel cuir chevelu & détente profonde',
    desc: 'Découvrez le head spa à Hyères chez Bianco Esthétique : massage crânien, détente profonde du cuir chevelu, rituel japonais.',
  },
  '/blog': {
    title: 'Blog | Bianco Esthétique – Conseils beauté & bien-être à Hyères',
    desc: 'Découvrez les conseils beauté et bien-être de Bianco Esthétique à Hyères.',
  },
  '/mentions-legales': { title: 'Mentions légales | Bianco Esthétique', desc: 'Mentions légales du site Bianco Esthétique.' },
  '/confidentialite': { title: 'Confidentialité | Bianco Esthétique', desc: 'Politique de confidentialité de Bianco Esthétique.' },
  '/cookies': { title: 'Cookies | Bianco Esthétique', desc: 'Politique cookies de Bianco Esthétique.' },
};

export function getRouteMeta(route: string): { title: string; desc: string } | null {
  // Static pages
  if (STATIC_META[route]) return STATIC_META[route];

  const slug = route.replace(/^\//, '');

  // SEO Geo pages
  if (SEO_GEO_PAGES[slug]) {
    const p = SEO_GEO_PAGES[slug];
    return { title: p.title, desc: p.metaDescription };
  }

  // SEO Prestation pages
  if (SEO_PRESTATION_PAGES[slug]) {
    const p = SEO_PRESTATION_PAGES[slug];
    return { title: p.title, desc: p.metaDescription };
  }

  // Service detail pages (/services/:slug)
  if (route.startsWith('/services/')) {
    const serviceSlug = route.replace('/services/', '');
    const service = services.find(s => s.id === serviceSlug);
    if (service) return { title: `${service.metaTitle} | Bianco Esthétique`, desc: service.metaDescription };
  }

  // Blog posts (/blog/:slug)
  if (route.startsWith('/blog/')) {
    const blogSlug = route.replace('/blog/', '');
    const post = blogPosts.find(p => p.slug === blogSlug);
    if (post) return { title: post.metaTitle, desc: post.metaDescription };
  }

  return null;
}

export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/prestations" element={<ServicesPage />} />
        <Route path="/services" element={<ServicesPage />} />
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
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/mentions-legales" element={<LegalPage />} />
        <Route path="/confidentialite" element={<PrivacyPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
        {/* SEO Geo */}
        <Route path="/institut-beaute-centre-ville-hyeres" element={<SEOGeoPage pageSlug="institut-beaute-centre-ville-hyeres" />} />
        <Route path="/institut-beaute-costebelle-hyeres" element={<SEOGeoPage pageSlug="institut-beaute-costebelle-hyeres" />} />
        <Route path="/institut-beaute-les-palmiers-hyeres" element={<SEOGeoPage pageSlug="institut-beaute-les-palmiers-hyeres" />} />
        <Route path="/institut-beaute-port-hyeres" element={<SEOGeoPage pageSlug="institut-beaute-port-hyeres" />} />
        <Route path="/institut-beaute-almanarre-hyeres" element={<SEOGeoPage pageSlug="institut-beaute-almanarre-hyeres" />} />
        <Route path="/institut-beaute-giens-hyeres" element={<SEOGeoPage pageSlug="institut-beaute-giens-hyeres" />} />
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
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <MobileCta />
    </StaticRouter>
  );
}
