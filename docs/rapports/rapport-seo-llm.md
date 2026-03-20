# Rapport d'Analyse SEO & LLM : Bianco Esthétique

Ce rapport présente une analyse détaillée du site web **bianco-esthetique.fr**, en évaluant ses performances pour le référencement naturel (SEO) traditionnel sur les moteurs de recherche comme Google, ainsi que sa visibilité au sein des grands modèles de langage (LLM) et des moteurs de recherche basés sur l'IA (comme ChatGPT, Perplexity, ou Google AI Overviews).

L'objectif est d'identifier les points forts sur lesquels capitaliser et les axes d'amélioration pour dominer les résultats de recherche locaux à Hyères et ses environs.

---

## 1. Analyse Technique et Structurelle (SEO On-Page)

L'audit technique du site révèle une base moderne et performante, construite sur une architecture de type Single Page Application (SPA) propulsée par React et hébergée sur Vercel.

### Points Positifs

*   **Vitesse de chargement et performances** : Le site bénéficie d'excellents temps de réponse. Le premier octet (TTFB) est reçu en moins de 0.3 seconde. La navigation est fluide, ce qui constitue un excellent signal pour l'expérience utilisateur (Core Web Vitals) et pour Google.
*   **Sécurité et redirections** : Le site force correctement la navigation en HTTPS via des redirections 308 permanentes. Les en-têtes de sécurité (HSTS, x-frame-options) sont correctement configurés.
*   **Données structurées (Schema.org)** : C'est l'un des points forts majeurs du site. Des balises JSON-LD riches sont présentes, déclarant explicitement le type `@BeautySalon` (Institut de beauté), les coordonnées géographiques précises, les horaires d'ouverture, les prix, et même des sections FAQ (`@FAQPage`) et des fils d'Ariane (`@BreadcrumbList`). Ces éléments aident considérablement les moteurs de recherche à comprendre le contexte local du site.
*   **Balises Meta et Open Graph** : Les balises de titre (Title) et les méta-descriptions sont présentes et optimisées. Les balises Open Graph pour le partage sur les réseaux sociaux sont également bien configurées avec des images dédiées.
*   **Architecture des URLs et Sitemap** : Le sitemap XML est bien structuré et exhaustif, listant non seulement les pages principales mais aussi une multitude de pages locales dédiées (ex: `/institut-beaute-toulon`, `/institut-beaute-carqueiranne`) et de pages de services spécifiques (ex: `/services/head-spa-hyeres-prix-rituel-1h`).

### Points Négatifs

*   **Structure des titres (Hn)** : L'analyse de la page d'accueil révèle que la balise `<h1>` est "Votre bien‑être, tout simplement". Bien que poétique, ce titre manque de mots-clés stratégiques forts comme "Institut de beauté" ou "Hyères". Les mots-clés importants sont relégués en `<h2>`. Une optimisation de la hiérarchie sémantique est recommandée.
*   **Rendu JavaScript (SPA)** : Étant une application React, le contenu est généré dynamiquement. Bien que Google sache généralement lire le JavaScript, cela peut parfois ralentir l'indexation ou poser des problèmes à des robots d'exploration moins sophistiqués ou à certains LLM qui ne rendent pas le JS lors de leur passage. Il est crucial de s'assurer que le rendu côté serveur (SSR) ou le pré-rendu (SSG) est correctement configuré.

---

## 2. Analyse du Contenu et Stratégie Locale

Le contenu est le pilier du SEO. La stratégie éditoriale de Bianco Esthétique montre une volonté claire de se positionner localement.

### Points Positifs

*   **Pages de "Zone de chalandise"** : Le site a déployé une stratégie de pages satellites pour cibler les villes environnantes (Toulon, La Garde, Carqueiranne, etc.). Ces pages incluent des informations pratiques comme le temps de trajet, ce qui répond à une intention de recherche locale précise.
*   **Foire Aux Questions (FAQ)** : L'intégration de sections FAQ sur les pages de services et les pages locales est une excellente pratique. Elle permet de cibler les requêtes de longue traîne et les questions conversationnelles, particulièrement utiles pour la recherche vocale et les IA.
*   **Expertise et E-E-A-T** : La page "À propos" met en avant l'expertise de Salomé, son titre de "Meilleure Apprentie de France" et son approche. Cela renforce les signaux d'Expertise, d'Expérience, d'Autorité et de Fiabilité (E-E-A-T), cruciaux pour Google, particulièrement dans le domaine du bien-être.
*   **Intégration de Planity** : La réservation en ligne via Planity est un standard attendu par les utilisateurs. De plus, la page Planity de l'institut bénéficie d'excellents avis (5/5), ce qui rassure les prospects.

### Points Négatifs

*   **Risque de contenu dupliqué (Duplicate Content)** : L'analyse des pages locales (ex: `/institut-beaute-toulon` vs `/institut-beaute-carqueiranne`) montre une structure et un texte très similaires, où seul le nom de la ville et le temps de trajet changent. Google pourrait considérer ces pages comme du contenu dupliqué de faible valeur (doorway pages). Il serait préférable d'enrichir ces pages avec du contenu véritablement unique (ex: témoignages spécifiques de clientes de cette ville, itinéraires détaillés avec repères locaux).
*   **Profondeur des articles de blog** : Les articles de blog analysés sont relativement courts (environ 300 mots). Pour se positionner comme une véritable autorité thématique sur des sujets concurrentiels (comme le drainage lymphatique), des articles de fond (1000+ mots) détaillant la science derrière la méthode, des études de cas ou des guides complets seraient plus efficaces.

---

## 3. Visibilité LLM et Generative Engine Optimization (GEO)

L'optimisation pour les moteurs génératifs (GEO) diffère du SEO classique. Les LLM (ChatGPT, Perplexity, Gemini) synthétisent l'information à partir de multiples sources pour formuler une réponse directe.

### Points Positifs

*   **Présence des données structurées** : Les LLM s'appuient fortement sur le JSON-LD pour extraire des faits indiscutables (adresse, téléphone, services proposés). La bonne configuration de Bianco Esthétique sur ce point est un atout majeur pour la GEO.
*   **Réputation en ligne (Avis)** : Les moteurs d'IA intègrent souvent l'analyse des sentiments et les avis dans leurs recommandations. Les excellentes notes sur Google et Planity sont des signaux positifs que les LLM capteront lorsqu'on leur demandera "quel est le meilleur institut à Hyères".
*   **Citations externes** : L'institut est mentionné sur des plateformes tierces (Planity, Facebook, Instagram), ce qui contribue à construire une "entité" reconnaissable pour l'IA.

### Points Négatifs

*   **Manque de citations de haute autorité** : Pour qu'un LLM recommande Bianco Esthétique comme la référence absolue (notamment pour le drainage lymphatique), il faut que le site soit cité par des sources d'autorité (presse locale, blogs beauté reconnus, annuaires spécialisés). Actuellement, la présence externe semble limitée aux réseaux sociaux et à Planity.
*   **Visibilité actuelle sur Perplexity** : Lors de tests de requêtes conversationnelles sur Perplexity (ex: "meilleur institut de beaute hyeres drainage lymphatique"), Bianco Esthétique n'apparaît pas toujours dans le top 5 des recommandations générées par l'IA, devancé par des instituts ayant potentiellement une empreinte numérique plus ancienne ou plus diversifiée. Le site apparaît bien sur des requêtes de marque, mais peine encore sur les requêtes génériques d'intention.
*   **Contenu de marque (Brand Content) limité** : La GEO nécessite que l'IA puisse associer des concepts forts à la marque. Le site doit publier davantage de contenu "d'opinion" ou d'expertise unique qui ne se trouve nulle part ailleurs, afin que l'IA soit obligée de citer Bianco Esthétique comme source originelle de l'information.

---

## Synthèse et Recommandations

Bianco Esthétique possède un site web techniquement sain et une base SEO locale solide, notamment grâce à une excellente utilisation des données structurées.

**Plan d'action prioritaire :**

1.  **Optimiser la sémantique Hn** : Modifier le `<h1>` de la page d'accueil pour inclure "Institut de beauté à Hyères".
2.  **Densifier le contenu local** : Réécrire les pages ciblant les villes voisines pour les rendre uniques et éviter les pénalités pour contenu dupliqué.
3.  **Stratégie de contenu d'autorité (Pour le SEO et la GEO)** : Publier des articles de blog longs et experts (ex: "Le guide ultime du drainage lymphatique brésilien", "Comparatif des techniques d'extensions de cils").
4.  **Campagne de relations publiques locales** : Obtenir des liens (backlinks) et des mentions depuis des sites d'actualités varois ou des blogs lifestyle locaux pour forcer les IA à considérer l'institut comme une entité incontournable de la région.
