# ⚡ PROMPT CLAUDE CODE — CORRECTIONS PERFORMANCES bianco-esthetique.fr
> Score actuel : Performances **55/100** mobile | SEO 100 | Bonnes pratiques 100 | Accessibilité 96  
> Objectif : atteindre **85+** sur mobile en corrigeant les 3 causes racines identifiées par PageSpeed.

---

## CONTEXTE

Site : **bianco-esthetique.fr** — Institut de beauté, Hyères (83400)  
Stack : **Next.js 14, App Router, TypeScript, Tailwind CSS, Vercel**  
Problèmes identifiés (PageSpeed Insights mobile, 18/03/2026) :
1. Requêtes bloquant l'affichage → **−1840ms** sur le FCP/LCP
2. Temps d'exécution JS trop élevé → **2,4s** / Thread principal **3,9s**
3. Ressources JS inutilisées → **114 Kio** économisables
4. Images non optimisées → **219 Kio** économisables

---

## RÈGLES ABSOLUES (à respecter tout au long)

- **Ne jamais modifier** les schemas JSON-LD, les balises meta, ni le canonical (SEO = 100, ne pas casser)
- **Ne jamais hardcoder** le numéro de téléphone — il doit rester en source centrale
- **Ne pas modifier** les couleurs, polices ou design system existant
- **Documenter chaque modification** dans `CHANGELOG-PERF.md` avec : fichier modifié, nature du changement, gain estimé

---

## PHASE 1 — AUDIT DU BUNDLE JS

### 1a. Installer et configurer @next/bundle-analyzer

```bash
npm install --save-dev @next/bundle-analyzer
```

Dans `next.config.ts` (ou `next.config.js`), wrapper la config existante :

```ts
import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

export default withBundleAnalyzer({
  // ...config existante inchangée
})
```

Lancer l'analyse :
```bash
ANALYZE=true npm run build
```

### 1b. Identifier et corriger les imports lourds

Cherche dans tous les fichiers `.tsx` et `.ts` les patterns suivants et corrige-les :

```ts
// ❌ Import complet d'une librairie
import _ from 'lodash'
import * as icons from 'lucide-react'
import { motion } from 'framer-motion'

// ✅ Import granulaire
import debounce from 'lodash/debounce'
import { ChevronDown, Star } from 'lucide-react'
import { motion } from 'framer-motion' // OK si tree-shakeable
```

Pour chaque librairie lourde trouvée dans le bundle, évalue si elle peut être :
- Remplacée par une solution native (ex: CSS animations au lieu de framer-motion pour les transitions simples)
- Importée partiellement
- Chargée en `dynamic import` avec `next/dynamic`

---

## PHASE 2 — HERO IMAGE (cause principale du LCP)

### 2a. Diagnostiquer l'image hero

Trouve le composant qui affiche l'image hero (la grande image de fond en première section — palmiers / paysage méditerranéen). 

Vérifie si c'est :
- Un `background-image` CSS → **problème** : Next.js ne peut pas optimiser les bg-images
- Un `<img>` HTML natif → **problème** : pas d'optimisation automatique
- Un `<Image>` Next.js sans `priority` → **problème** : chargé en lazy par défaut

### 2b. Corriger selon le cas trouvé

**Cas A — `background-image` CSS :**

Remplace par un composant `<Image>` avec `fill` et `priority` :

```tsx
// Avant (CSS)
// <div style={{ backgroundImage: 'url(/hero.jpg)' }} />

// Après
import Image from 'next/image'

<div className="relative w-full h-screen">
  <Image
    src="/hero.jpg"
    alt="Institut de beauté Bianco Esthétique à Hyères"
    fill
    priority
    quality={85}
    sizes="100vw"
    className="object-cover object-center"
  />
  {/* Contenu par-dessus */}
  <div className="relative z-10">...</div>
</div>
```

**Cas B — `<img>` HTML natif :**

```tsx
// Avant
<img src="/hero.jpg" alt="..." />

// Après
import Image from 'next/image'
<Image
  src="/hero.jpg"
  alt="Institut de beauté Bianco Esthétique à Hyères"
  width={1920}
  height={1080}
  priority
  quality={85}
  sizes="100vw"
/>
```

**Cas C — `<Image>` sans `priority` :**

Ajoute simplement `priority` sur le composant hero :
```tsx
<Image src="..." alt="..." priority />
```

### 2c. Vérifier le format des images

Vérifie que `next.config.ts` autorise les formats modernes :

```ts
images: {
  formats: ['image/avif', 'image/webp'],
  // ...reste de la config existante
}
```

Si les images sont dans `/public`, vérifie qu'elles ne dépassent pas 500Ko avant optimisation. Si une image dépasse 2Mo, la compresser manuellement avant commit (outil : squoosh.app).

---

## PHASE 3 — REQUÊTES BLOQUANT L'AFFICHAGE

### 3a. Identifier les ressources bloquantes

Dans le fichier `app/layout.tsx` (ou `pages/_document.tsx`), cherche :

- Des `<link rel="stylesheet">` chargés en synchrone (hors Next.js CSS modules)
- Des `<script src="...">` sans `defer` ou `async`
- Des imports Google Fonts via `<link>` dans le head

### 3b. Corriger les Google Fonts

**Si Google Fonts est importé via `<link>` dans le HTML :**

```tsx
// ❌ Dans layout.tsx head
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display..." rel="stylesheet" />

// ✅ Remplacer par next/font (zéro requête externe, auto-hébergé)
import { Playfair_Display, DM_Sans } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

// Dans le <body> ou <html> :
<html className={`${playfair.variable} ${dmSans.variable}`}>
```

### 3c. Corriger les scripts tiers (Planity, pixels, analytics)

Cherche dans `layout.tsx` tous les `<Script>` ou `<script>` et applique la stratégie correcte :

```tsx
import Script from 'next/script'

// ❌ Script bloquant
<script src="https://widget.planity.com/..." />

// ✅ Script non-critique (booking widget, chat, pixel)
<Script
  src="https://widget.planity.com/..."
  strategy="lazyOnload"
/>

// ✅ Script analytics (Google Analytics, GTM)
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX"
  strategy="afterInteractive"
/>
```

Règle de stratégie :
- `beforeInteractive` → uniquement pour les scripts critiques au rendu (très rare)
- `afterInteractive` → analytics, tag managers
- `lazyOnload` → widgets de booking, chat, pixels sociaux, heatmaps

### 3d. Vérifier l'attribut viewport

Dans `app/layout.tsx`, vérifie que le viewport est correctement configuré via les metadata Next.js (pas manuellement) :

```tsx
// ✅ Méthode Next.js 14 App Router
export const metadata: Metadata = {
  // ...metadata existante
  viewport: 'width=device-width, initial-scale=1',
  // ou via themeColor, viewport object séparé selon Next.js 14
}
```

Si tu trouves un `<meta name="viewport">` hardcodé dans le HTML, supprime-le et utilise la config metadata Next.js.

---

## PHASE 4 — DYNAMIC IMPORTS POUR LES COMPOSANTS LOURDS

Identifie les composants qui ne sont pas visibles above the fold (sections du bas de page, galeries photos, cartes, formulaires de contact) et charge-les en dynamique :

```tsx
import dynamic from 'next/dynamic'

// ❌ Import statique d'un composant lourd non-critique
import GaleriePhotos from '@/components/GaleriePhotos'
import FormulaireContact from '@/components/FormulaireContact'
import CarteLocalisation from '@/components/CarteLocalisation'

// ✅ Dynamic import avec fallback
const GaleriePhotos = dynamic(() => import('@/components/GaleriePhotos'), {
  loading: () => <div className="animate-pulse bg-neutral-100 h-64 rounded-lg" />,
})

const FormulaireContact = dynamic(() => import('@/components/FormulaireContact'), {
  loading: () => null,
})

const CarteLocalisation = dynamic(() => import('@/components/CarteLocalisation'), {
  loading: () => <div className="h-64 bg-neutral-100 rounded-lg" />,
  ssr: false, // si la carte utilise window/navigator
})
```

**Ne pas passer en dynamic** : les composants visibles above the fold (header, hero, intro géo-ciblée).

---

## PHASE 5 — TAILWIND CSS PURGE

Vérifie que la purge Tailwind est configurée correctement pour éliminer les classes inutilisées :

Dans `tailwind.config.ts` :

```ts
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    // Ajouter tout chemin où des classes Tailwind sont utilisées
  ],
  // ...reste de la config
}
```

Si des classes sont générées dynamiquement (ex: `className={`text-${color}-500``}), elles ne seront pas purgées. Liste-les dans `safelist` :

```ts
safelist: [
  'text-rose-500',
  'bg-stone-100',
  // etc.
]
```

---

## PHASE 6 — VÉRIFICATION FINALE

Après toutes les corrections, effectue dans l'ordre :

```
1. npm run build → vérifier qu'il n'y a aucune erreur
2. npm run start → tester localement sur http://localhost:3000
3. Vérifier visuellement :
   - Hero image s'affiche correctement sur mobile (375px)
   - Fonts chargent sans FOIT (flash de texte invisible)
   - Le sticky CTA mobile est toujours visible
   - Le numéro de téléphone s'affiche correctement
4. git add . && git commit -m "perf: optimize LCP, reduce JS bundle, lazy load components"
5. Déployer sur Vercel et attendre le build
6. Relancer PageSpeed Insights → objectif 80+ mobile
7. Vérifier que le Rich Results Test retourne toujours 3 éléments valides
   (les schemas ne doivent pas avoir été touchés)
```

---

## CHANGELOG à générer

Après chaque correction, ajouter une entrée dans `CHANGELOG-PERF.md` :

```markdown
## [PERF] 18/03/2026

### Hero Image
- Fichier : `components/HeroSection.tsx`
- Changement : migration background-image CSS → next/image avec priority
- Gain estimé : LCP -800ms

### Google Fonts
- Fichier : `app/layout.tsx`
- Changement : <link> Google Fonts → next/font/google
- Gain estimé : FCP -400ms, suppression 1 requête externe bloquante

### Scripts tiers
- Fichier : `app/layout.tsx`
- Changement : Planity widget → strategy="lazyOnload"
- Gain estimé : TBT -300ms

### Dynamic imports
- Fichiers : `app/page.tsx`, composants listed above
- Changement : 3 composants below-the-fold passés en dynamic()
- Gain estimé : JS bundle -80Kio initial
```
