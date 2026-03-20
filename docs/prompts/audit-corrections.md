# 🔍 PROMPT CLAUDE CODE — AUDIT & CORRECTIONS bianco-esthetique.fr
> À coller directement dans Claude Code. Travailler dans l'ordre des phases.

---

## CONTEXTE

Tu travailles sur le site **bianco-esthetique.fr**, un institut de beauté situé à **Hyères (83400), Var**, géré par **Saloméé**.  
Stack actuelle : inconnu (probablement CMS ou HTML statique). L'objectif est d'auditer le site existant et de corriger tous les points faibles identifiés ci-dessous, en priorité **SEO local**, **Schema.org**, **performance**, **contenu GEO/LLM**, et **UX**.

---

## PHASE 1 — AUDIT TECHNIQUE INITIAL

Commence par lire et analyser l'ensemble des fichiers du projet :

```
1. Liste tous les fichiers HTML, JS, CSS, et de config présents
2. Identifie le CMS ou la stack utilisée
3. Repère les balises <head> de chaque page (title, meta description, canonical, og:tags)
4. Vérifie la présence ou l'absence de fichiers : sitemap.xml, robots.txt, manifest.json
5. Repère les scripts JSON-LD déjà présents (ou leur absence totale)
6. Identifie le numéro de téléphone : est-il hardcodé ou centralisé ?
7. Vérifie la présence d'un appel à l'action (bouton RDV / téléphone) above the fold sur mobile
```

Génère un rapport d'audit sous forme de tableau Markdown avec les colonnes : **Point audité | Statut (✅/⚠️/❌) | Détail**

---

## PHASE 2 — CORRECTIONS SEO ON-PAGE

### 2a. Balises meta — Page d'accueil

Remplace ou crée les balises suivantes dans le `<head>` de la page d'accueil :

```html
<title>Institut de Beauté Hyères | Bianco Esthétique — Soins Visage, Épilation, Bien-être</title>
<meta name="description" content="Bianco Esthétique, votre institut de beauté à Hyères (83). Soins du visage, épilation, manucure, soins corps. Prenez rendez-vous dès aujourd'hui." />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://bianco-esthetique.fr/" />

<!-- Open Graph -->
<meta property="og:title" content="Institut de Beauté à Hyères — Bianco Esthétique" />
<meta property="og:description" content="Institut de beauté à Hyères. Soins visage, épilation, bien-être. Prenez rendez-vous en ligne." />
<meta property="og:url" content="https://bianco-esthetique.fr/" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="fr_FR" />
<meta property="og:image" content="https://bianco-esthetique.fr/og-image.jpg" />
```

### 2b. Balises meta — Pages secondaires

Pour chaque page de prestation (soins visage, épilation, manucure, etc.), applique le même pattern avec des balises uniques et géo-ciblées :

- Inclure "Hyères" ou "Var" dans chaque `<title>`
- `<meta name="description">` unique par page, 150-160 caractères
- Balise `<link rel="canonical">` pointant vers l'URL propre de la page

---

## PHASE 3 — SCHEMA.ORG JSON-LD

### 3a. Schema BeautySalon — Page d'accueil

Injecte ce bloc JSON-LD dans le `<head>` de la page d'accueil (adapter les données manquantes avec des placeholders commentés) :

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Bianco Esthétique",
  "url": "https://bianco-esthetique.fr",
  "telephone": "<!-- NUMÉRO_TEL_ICI -->",
  "email": "<!-- EMAIL_ICI -->",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "<!-- ADRESSE_ICI -->",
    "addressLocality": "Hyères",
    "postalCode": "83400",
    "addressRegion": "Var",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "43.1197",
    "longitude": "6.1286"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "priceRange": "€€",
  "servesCuisine": null,
  "description": "Institut de beauté à Hyères dans le Var. Soins du visage, épilation, manucure, soins corps et bien-être personnalisés.",
  "image": "https://bianco-esthetique.fr/og-image.jpg",
  "sameAs": [
    "<!-- URL_GOOGLE_MAPS_ICI -->",
    "<!-- URL_FACEBOOK_ICI -->",
    "<!-- URL_INSTAGRAM_ICI -->"
  ]
}
</script>
```

### 3b. Schema FAQPage

Ajoute un bloc FAQPage sur la page d'accueil ou sur une page dédiée FAQ :

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Où se trouve l'institut Bianco Esthétique ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bianco Esthétique est situé à Hyères (83400) dans le Var. <!-- ADRESSE_COMPLÈTE -->"
      }
    },
    {
      "@type": "Question",
      "name": "Quelles prestations propose Bianco Esthétique à Hyères ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L'institut propose des soins du visage, l'épilation (cire, lumière pulsée), la manucure, les soins corps, les massages relaxants et les soins anti-âge à Hyères."
      }
    },
    {
      "@type": "Question",
      "name": "Comment prendre rendez-vous à l'institut Bianco Esthétique ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vous pouvez réserver en ligne via notre site ou nous appeler directement au <!-- NUMÉRO_TEL -->. Nous répondons également par message sur Instagram."
      }
    },
    {
      "@type": "Question",
      "name": "L'institut Bianco Esthétique accepte-t-il les nouveaux clients ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, Bianco Esthétique accueille de nouveaux clients à Hyères. Prenez rendez-vous en ligne ou par téléphone pour votre premier soin."
      }
    }
  ]
}
</script>
```

### 3c. Schema Service — Pour chaque prestation principale

Exemple pour la page Épilation :

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Épilation à Hyères",
  "description": "Épilation à la cire et à la lumière pulsée pour femmes et hommes à Hyères (83). Résultats durables, peau douce, esthéticienne certifiée.",
  "provider": {
    "@type": "BeautySalon",
    "name": "Bianco Esthétique",
    "url": "https://bianco-esthetique.fr"
  },
  "areaServed": {
    "@type": "City",
    "name": "Hyères"
  },
  "serviceType": "Épilation"
}
</script>
```

Reproduis ce pattern pour : Soins visage / Manucure / Soins corps / Massages / Soins anti-âge

---

## PHASE 4 — CONTENU GEO & LLM OPTIMIZATION

### 4a. Paragraphe d'introduction géo-ciblé (page d'accueil)

Remplace ou complète l'intro existante par ce bloc optimisé pour les LLM et la recherche locale :

```html
<section class="intro-geo">
  <h1>Institut de Beauté à Hyères — Bianco Esthétique</h1>
  <p>
    Bianco Esthétique est votre institut de beauté de référence à <strong>Hyères (83400)</strong>, 
    dans le département du <strong>Var</strong>. Saloméé et son équipe vous accueillent dans un 
    espace chaleureux pour des soins du visage, de l'épilation, des manucures et des soins corps 
    sur mesure. À quelques minutes de <strong>Toulon</strong>, de <strong>La Londe-les-Maures</strong> 
    et de <strong>Carqueiranne</strong>, l'institut est facilement accessible depuis toute la 
    presqu'île de Giens et les communes voisines du Var.
  </p>
  <p>
    Notre philosophie : des soins personnalisés, des produits de qualité, et une attention portée 
    à chaque cliente. Que vous cherchiez un soin du visage anti-âge, une épilation durable ou 
    simplement un moment de détente, Bianco Esthétique est votre adresse beauté à Hyères.
  </p>
</section>
```

### 4b. Section "Zone de chalandise" (footer ou bas de page)

```html
<section class="zone-chalandise">
  <p>
    Bianco Esthétique accueille les clients de <strong>Hyères</strong>, 
    <strong>Toulon</strong>, <strong>La Garde</strong>, <strong>Carqueiranne</strong>, 
    <strong>La Londe-les-Maures</strong>, <strong>Le Pradet</strong>, 
    <strong>Ollioules</strong> et de toute la presqu'île de Giens.
  </p>
</section>
```

### 4c. Contenu long-tail bas de page (optimisation LLM)

Ajoute en bas de chaque page de prestation un bloc de questions/réponses naturelles :

```html
<!-- Exemple pour la page Soins Visage -->
<section class="faq-soin-visage">
  <h2>Questions fréquentes — Soins du visage à Hyères</h2>
  
  <details>
    <summary>Quel soin du visage est fait pour ma peau ?</summary>
    <p>Lors de votre premier rendez-vous à l'institut Bianco Esthétique, Saloméé réalise un diagnostic personnalisé de votre peau. Elle adapte le soin en fonction de votre type cutané : peau sèche, mixte, grasse, sensible ou mature.</p>
  </details>
  
  <details>
    <summary>Combien coûte un soin du visage à Hyères ?</summary>
    <p>Les soins du visage à Bianco Esthétique débutent à partir de <!-- PRIX --> €. Consultez notre menu de soins complet ou contactez-nous pour un devis personnalisé.</p>
  </details>
  
  <details>
    <summary>À quelle fréquence faire un soin du visage professionnel ?</summary>
    <p>Un soin du visage en institut est recommandé toutes les 4 à 6 semaines pour maintenir l'éclat et l'hydratation de la peau. Saloméé vous conseillera la fréquence adaptée à votre peau lors de votre consultation.</p>
  </details>
</section>
```

---

## PHASE 5 — PERFORMANCE & CORE WEB VITALS

Audit et corrections à effectuer :

```
1. IMAGES
   - Convertir toutes les images en format WebP
   - Ajouter l'attribut loading="lazy" sur les images hors viewport
   - Ajouter width et height sur toutes les balises <img> pour éviter le CLS
   - Ajouter un attribut alt descriptif et géo-ciblé sur chaque image
     Exemple : alt="soin du visage hydratant à l'institut Bianco Esthétique Hyères"

2. FONTS
   - Ajouter <link rel="preconnect"> pour Google Fonts si utilisé
   - Utiliser font-display: swap pour éviter le FOIT

3. CSS/JS
   - Minifier les fichiers CSS et JS
   - Déplacer les scripts non critiques en defer ou async
   - Supprimer les CSS inutilisés (purge si Tailwind)

4. CACHE & COMPRESSION
   - Vérifier que gzip/brotli est activé côté serveur
   - Vérifier les en-têtes Cache-Control pour les assets statiques
```

---

## PHASE 6 — UX & CONVERSION

### 6a. CTA mobile sticky

Ajoute en bas de page sur mobile un bandeau de prise de contact :

```html
<!-- Mobile sticky CTA — à afficher uniquement sur mobile -->
<div class="sticky-cta-mobile">
  <a href="tel:<!-- NUMÉRO_TEL -->" class="btn-tel">📞 Appeler</a>
  <a href="<!-- LIEN_RDV -->" class="btn-rdv">Prendre RDV</a>
</div>
```

CSS :
```css
.sticky-cta-mobile {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: #fff;
  padding: 12px 16px;
  box-shadow: 0 -2px 12px rgba(0,0,0,0.12);
  gap: 12px;
}

@media (max-width: 768px) {
  .sticky-cta-mobile {
    display: flex;
    justify-content: space-between;
  }
}

.btn-tel, .btn-rdv {
  flex: 1;
  text-align: center;
  padding: 14px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
}

.btn-tel {
  background: #f5f0eb;
  color: #333;
  border: 1px solid #ddd;
}

.btn-rdv {
  background: <!-- COULEUR_BRAND -->;
  color: #fff;
}
```

### 6b. Fil d'Ariane (Breadcrumb)

Sur les pages secondaires, ajouter un breadcrumb visible + balisé Schema :

```html
<nav aria-label="Fil d'Ariane">
  <ol class="breadcrumb">
    <li><a href="/">Accueil</a></li>
    <li><a href="/soins-visage/">Soins Visage</a></li>
    <li aria-current="page">Soin Hydratant</li>
  </ol>
</nav>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
      "item": "https://bianco-esthetique.fr/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Soins Visage",
      "item": "https://bianco-esthetique.fr/soins-visage/"
    }
  ]
}
</script>
```

---

## PHASE 7 — SITEMAP & ROBOTS

### 7a. sitemap.xml

Crée ou vérifie `/sitemap.xml`. Structure minimale :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://bianco-esthetique.fr/</loc>
    <lastmod>2026-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://bianco-esthetique.fr/soins-visage/</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://bianco-esthetique.fr/epilation/</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://bianco-esthetique.fr/manucure/</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://bianco-esthetique.fr/soins-corps/</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://bianco-esthetique.fr/contact/</loc>
    <priority>0.6</priority>
  </url>
</urlset>
```

### 7b. robots.txt

Vérifie ou crée `/robots.txt` :

```
User-agent: *
Allow: /

Sitemap: https://bianco-esthetique.fr/sitemap.xml
```

---

## PHASE 8 — GOOGLE MY BUSINESS & SIGNAUX LOCAUX

Ces points ne sont pas dans le code mais doivent être documentés comme liste de tâches dans un fichier `GMB-TODO.md` :

```markdown
# TODO — Google My Business Bianco Esthétique

- [ ] Vérifier que la fiche GMB est revendiquée et vérifiée
- [ ] Nom exact sur GMB = "Bianco Esthétique" (cohérence NAP)
- [ ] Adresse exacte identique sur site + GMB + annuaires
- [ ] Téléphone identique sur site + GMB + annuaires
- [ ] Ajouter toutes les catégories pertinentes (Institut de beauté, Épilation, Soins du visage)
- [ ] Uploader 10+ photos : vitrine, cabine, avant/après (floutés si visages), produits utilisés
- [ ] Activer la prise de RDV directement depuis GMB (lien Planity ou autre)
- [ ] Paramétrer les horaires d'ouverture + horaires spéciaux (jours fériés)
- [ ] Publier 1 post GMB par semaine (promotion, soin du mois, conseil beauté)
- [ ] Répondre à TOUS les avis Google sous 48h
- [ ] Mettre en place une relance post-soin pour demander un avis Google (SMS ou email)
- [ ] Vérifier les citations NAP sur : Pages Jaunes, Yelp, Tripadvisor, Houzz, Planity
```

---

## PHASE 9 — VÉRIFICATION FINALE

Après toutes les corrections :

```
1. Valider le HTML sur validator.w3.org
2. Tester le JSON-LD sur search.google.com/test/rich-results
3. Vérifier la vitesse mobile sur pagespeed.web.dev
4. Vérifier l'indexation de l'URL dans Google Search Console
5. Soumettre le sitemap dans Google Search Console
6. Vérifier que le canonical pointe bien vers la bonne URL
7. Tester l'affichage mobile sur 3 tailles : 375px, 414px, 768px
8. S'assurer que le numéro de téléphone n'est JAMAIS hardcodé dans le code 
   (doit être dans une variable, un fichier de config, ou une base de données)
```

---

## RÈGLES ABSOLUES

- **Ne jamais hardcoder le numéro de téléphone** dans le HTML ou le JS. Il doit venir d'une source centrale (variable d'environnement, fichier de config, ou CMS).
- **Chaque page doit avoir un title unique** — aucune duplication.
- **Les balises alt des images doivent être descriptives et géo-ciblées**, pas vides et pas génériques ("image1.jpg").
- **Respecter le design system existant** — ne pas modifier les couleurs ou polices sans validation.
- **Documenter chaque modification** dans un fichier `CHANGELOG.md` avec la date, la page concernée, et la nature du changement.
