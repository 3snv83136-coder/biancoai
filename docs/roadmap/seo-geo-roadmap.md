# 🚀 Roadmap SEO & Géo-SEO — bianco-esthetique.fr
> Institut de beauté & bien-être – 3 Av. Ernest Millet, 83400 Hyères (Var)
> Objectif : monter dans les SERP locaux (Google Maps Pack + résultats organiques)

---

## 1. 🏗️ FONDATIONS TECHNIQUES (priorité immédiate)

- [ ] **Balise `<title>` unique par page** — modèle : `[Soin] à Hyères | Bianco Esthétique – Institut beauté Var`
- [ ] **Balise `<meta description>` unique** (155 car max) avec ville + appel à l'action sur chaque page
- [ ] **URL slugs propres et descriptifs** — ex. `/soins-visage-hyeres/` plutôt que `/page-3/`
- [ ] **Balise `<h1>` unique par page** contenant le mot-clé principal + géo
- [ ] **Structure Hn cohérente** (H1 → H2 → H3) vérifiée sur toutes les pages
- [ ] **Sitemap XML** généré et soumis à Google Search Console (`/sitemap.xml`)
- [ ] **robots.txt** présent et correctement configuré (ne pas bloquer les pages importantes)
- [ ] **HTTPS actif** sur tout le domaine + redirections HTTP → HTTPS
- [ ] **Redirections 301** configurées pour les URL en double (avec/sans www, avec/sans slash final)
- [ ] **Core Web Vitals** : LCP < 2,5 s / CLS < 0,1 / INP < 200 ms — tester via PageSpeed Insights
- [ ] **Images compressées** en WebP + attributs `alt` descriptifs sur chaque image (ex. `alt="soin visage anti-âge Hyères"`)
- [ ] **Lazy loading** activé sur les images hors viewport
- [ ] **Police Google Fonts** chargée en `preload` ou remplacée par police système pour éviter le FOUT
- [ ] **Pas de JS bloquant** au-dessus de la ligne de flottaison

---

## 2. 📍 GÉO-SEO — Données structurées & signaux locaux

- [ ] **Schema.org `LocalBusiness`** (type : `BeautySalon`) injecté en JSON-LD sur la page d'accueil et toutes les pages de services :
  ```json
  {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Bianco Esthétique",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3 Av. Ernest Millet",
      "addressLocality": "Hyères",
      "postalCode": "83400",
      "addressCountry": "FR"
    },
    "telephone": "+33749967691",
    "url": "https://bianco-esthetique.fr",
    "openingHoursSpecification": [...],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.1196,
      "longitude": 6.1286
    },
    "priceRange": "€€",
    "sameAs": ["https://www.google.com/maps/...", "https://www.facebook.com/..."]
  }
  ```
- [ ] **Schema `Service`** pour chaque prestation (épilation, soin visage, manucure…) avec `areaServed: "Hyères, Var"`
- [ ] **Schema `FAQPage`** sur les pages à forte intention locale (ex. "Quels soins visage à Hyères ?")
- [ ] **Schema `BreadcrumbList`** sur toutes les pages internes
- [ ] **Balise `hreflang`** si version multilingue envisagée (non prioritaire pour l'instant)

---

## 3. 📝 CONTENU SEO LOCAL (pages à créer ou optimiser)

### Pages prioritaires à créer / enrichir

- [ ] `/soins-visage-hyeres/` — 800+ mots, cibler "soin visage Hyères", "soin anti-âge Hyères 83"
- [ ] `/epilation-hyeres/` — cibler "épilation cire Hyères", "épilation définitive Var"
- [ ] `/manucure-pedicure-hyeres/` — cibler "manucure Hyères", "pose ongles gel Hyères"
- [ ] `/massage-bien-etre-hyeres/` — cibler "massage relaxant Hyères", "modelage corps Var"
- [ ] `/institut-beaute-hyeres/` (ou page d'accueil enrichie) — page pilier géo principale
- [ ] `/tarifs/` — liste complète des soins avec prix (signal de confiance + featured snippet possible)
- [ ] `/contact/` — adresse, téléphone, carte Google Maps intégrée, formulaire de contact RGPD

### Blog / Articles SEO longue traîne

- [ ] `"Comment choisir son institut de beauté à Hyères"` — article comparatif
- [ ] `"Quels soins visage choisir selon son type de peau"` — éducatif + géo en conclusion
- [ ] `"Épilation à la cire vs laser : que choisir à Hyères"` — article transactionnel
- [ ] `"Soins du corps minceur à Hyères : nos conseils"` — cibler "amincissement Hyères"
- [ ] `"Cadeau beauté Hyères"` — pour cibler les recherches de bons cadeaux locaux

---

## 4. 🗺️ GOOGLE BUSINESS PROFILE (GBP)

- [ ] **Vérifier que la fiche GBP est revendiquée** et à jour (adresse exacte, tel, horaires)
- [ ] **Catégorie principale** : "Institut de beauté" — catégories secondaires : "Salon de manucure", "Centre de bien-être", "Spa"
- [ ] **Photos** : minimum 15 photos récentes (intérieur, soins, produits, équipe) + nouvelles chaque mois
- [ ] **Description GBP** (750 car) avec mots-clés naturels : Hyères, Var, soins visage, épilation, bien-être
- [ ] **Posts GBP** publiés toutes les 1 à 2 semaines (promo, soin du mois, conseil beauté)
- [ ] **Réponses aux avis** : répondre à TOUS les avis (positifs et négatifs) sous 48 h
- [ ] **Lien de réservation** dans GBP (Planity ou autre outil RDV en ligne)
- [ ] **Numéro de téléphone cohérent** avec le site (NAP consistency — Name, Address, Phone)
- [ ] **Questions/Réponses GBP** : pré-remplir les 5–10 questions fréquentes

---

## 5. 🔗 NETLINKING LOCAL & CITATIONS

- [ ] **NAP identique** sur tous les annuaires (Pagesjaunes, Bottin, Alentoor, Unib-France, Planity…)
- [ ] **Inscription/mise à jour** sur : PagesJaunes · Planity · Treatwell · Doctolib Beauté · Bottin.fr · Mappy · Yelp France
- [ ] **Lien depuis l'OT de Hyères** (Office de Tourisme du Var / Hyères Tourisme)
- [ ] **Partenariat local** : lien depuis coiffeur, spa, pharmacie partenaire à Hyères
- [ ] **Presse locale** : communiqué ou mention dans Var Matin, La Provence (édition Var)

---

## 6. 📱 MOBILE & UX

- [ ] **Design 100% responsive** — test sur Chrome DevTools (iPhone SE, Galaxy S21)
- [ ] **Bouton "Appeler" `tel:` en sticky** sur mobile (tap-to-call)
- [ ] **Bouton "Réserver" CTA** visible above the fold sur mobile
- [ ] **Google Maps intégré** sur la page contact (iframe + lien "Itinéraire")
- [ ] **Touch targets** : minimum 44×44 px sur tous les boutons/liens mobile
- [ ] **Police lisible** : minimum 16 px corps de texte sur mobile

---

## 7. ⚙️ OUTILS & SUIVI

- [ ] **Google Search Console** connecté + sitemap soumis
- [ ] **Google Analytics 4** configuré avec événements : clics tel, clics réservation, soumissions formulaire
- [ ] **Google Tag Manager** pour faciliter l'ajout de balises sans toucher au code
- [ ] **PageSpeed Insights** : score mobile ≥ 80 (cibler ≥ 90)
- [ ] **Ahrefs / Ubersuggest / SEMrush** : audit mensuel des mots-clés positionnés

---

## 8. 🎯 MOTS-CLÉS CIBLES (par ordre de priorité)

| Mot-clé | Volume est. | Intention |
|---|---|---|
| institut beauté Hyères | ⭐⭐⭐ | Transactionnelle |
| soin visage Hyères | ⭐⭐⭐ | Transactionnelle |
| épilation Hyères | ⭐⭐⭐ | Transactionnelle |
| manucure Hyères | ⭐⭐ | Transactionnelle |
| massage relaxant Hyères | ⭐⭐ | Transactionnelle |
| esthéticienne Hyères 83 | ⭐⭐ | Navigationnelle |
| institut beauté Var | ⭐⭐ | Transactionnelle |
| soin anti-âge Hyères | ⭐ | Transactionnelle |
| cadeau beauté Hyères | ⭐ | Transactionnelle |
| épilation cire Hyères | ⭐ | Transactionnelle |
| meilleur institut Hyères | ⭐ | Commerciale |

---

## 9. 🏁 ORDRE D'EXÉCUTION RECOMMANDÉ POUR CLAUDE CODE

1. **Sprint 1 (semaine 1)** : Techniques de base — balises title/meta, H1, sitemap, robots.txt, schema LocalBusiness
2. **Sprint 2 (semaine 2)** : Performances — WebP, lazy load, Core Web Vitals, mobile CTA
3. **Sprint 3 (semaine 3)** : Contenu — pages de services géo-optimisées (soins visage, épilation, manucure)
4. **Sprint 4 (semaine 4)** : GBP + Citations — NAP cohérent, inscriptions annuaires, posts GBP
5. **Sprint 5+ (continu)** : Blog SEO, netlinking local, suivi GSC + GA4

---

*Généré pour bianco-esthetique.fr — Hyères (83400) — Mars 2026*
