# Optimisation Performance Mobile — bianco-esthetique.fr
> Prompt Claude Code — Score cible : 90+ mobile (actuel : 73)

---

## CONTEXTE

- **Framework** : Next.js 14 App Router
- **Stack** : TypeScript, Tailwind CSS
- **Score actuel** : Performance mobile 73 / SEO 100 / Bonnes pratiques 100 / Accessibilité 96
- **Fonts** : Playfair Display, DM Sans, Cormorant Garamond

---

## STOP GATE 1 — AUDIT

> Ne touche à rien. Liste uniquement les problèmes détectés.

Parcours tous les fichiers du projet et liste :

1. Toutes les balises `<img>` non remplacées par `next/image`
2. Tous les imports Google Fonts (balises `<link>` dans layout ou `_document`)
3. Tous les composants Client (`"use client"`) qui pourraient être Server Components
4. Tous les imports de librairies lourdes sans `dynamic()` — cherche notamment :
   `gsap`, `framer-motion`, `swiper`, `aos`, `animate.css`, `lightbox`, `lodash`
5. Les images hero/above-the-fold sans l'attribut `priority`
6. Les `background-image` CSS sur le fold (non optimisables par `next/image`)
7. Présence ou absence de `next.config.js` avec optimisation images configurée
8. Présence ou absence de `sharp` dans les dépendances

Affiche un rapport structuré. **Attends ma validation avant de passer à l'étape suivante.**

---

## STOP GATE 2 — FONTS

> Remplace tous les imports Google Fonts par `next/font/google`.

Pattern cible dans `app/layout.tsx` :

```ts
import { Playfair_Display, DM_Sans, Cormorant_Garamond } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  display: 'swap',
  variable: '--font-cormorant',
})
```

- Ajoute les variables CSS sur le `<html>` ou `<body>`
- Mets à jour `tailwind.config` pour référencer ces variables
- Supprime tous les `<link>` Google Fonts existants

**Attends ma validation avant de continuer.**

---

## STOP GATE 3 — IMAGES

> Optimise toutes les images du projet.

1. Remplace chaque `<img>` par `next/image` avec `width`/`height` explicites ou `fill` + `sizes` adapté
2. Pour l'image hero (première image above-the-fold) : ajoute `priority` et supprime `loading="lazy"`
3. Pour toutes les autres images : ajoute `loading="lazy"` si absent
4. Si des `background-image` CSS sont utilisés sur le fold, propose de les convertir en `next/image` avec `position: absolute` + `z-index`
5. Dans `next.config.js`, vérifie/ajoute :

```js
images: {
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [640, 750, 828, 1080, 1200],
},
```

6. Installe `sharp` si absent :

```bash
npm install sharp
```

**Attends ma validation avant de continuer.**

---

## STOP GATE 4 — CODE SPLITTING

> Réduis le JavaScript bloquant le rendu initial.

1. Identifie les composants `"use client"` non nécessaires au premier rendu
   (modales, galeries, sliders, formulaires de contact, widgets tiers)
2. Pour chacun, applique le dynamic import :

```ts
import dynamic from 'next/dynamic'

const Modal = dynamic(() => import('@/components/Modal'), { ssr: false })
const Galerie = dynamic(() => import('@/components/Galerie'), { ssr: false })
```

3. Si `framer-motion` est utilisé :
   - Remplace les animations above-the-fold par classes Tailwind `animate-*`
   - Lazy-load le reste avec `dynamic()`
4. Vérifie que le composant de réservation/booking est bien en `dynamic` avec `ssr: false`

**Attends ma validation avant de continuer.**

---

## STOP GATE 5 — SCRIPTS TIERS

> Élimine les scripts bloquant le thread principal.

1. Trouve tous les scripts tiers (Google Analytics, Meta Pixel, Crisp, Calendly, etc.)
2. Remplace les `<script>` manuels par le composant `next/script` avec la bonne stratégie :
   - Analytiques → `strategy="afterInteractive"`
   - Widgets non critiques → `strategy="lazyOnload"`
3. Regroupe ces scripts dans un composant `<Analytics />` chargé en `dynamic`

---

## RÉSUMÉ FINAL

À la fin de chaque gate, affiche :
- Les fichiers modifiés
- L'impact estimé sur les métriques (LCP, TBT, CLS)
- Les points restants éventuels

---

## NOTES D'UTILISATION

- Lancer Claude Code depuis la **racine du projet** `bianco-esthetique.fr`
- Faire un `git commit` après chaque STOP GATE validé
- En cas de doute sur une modification, proposer les options sans appliquer
