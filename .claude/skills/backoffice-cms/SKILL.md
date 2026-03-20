---
name: backoffice-cms
description: >
  Skill pour créer ou étendre un Back-Office CMS Next.js 14 (App Router) de manière
  totalement sécurisée et non-régressive. À utiliser SYSTÉMATIQUEMENT dès que l'utilisateur
  mentionne : back-office, tableau de bord admin, gestion de contenu, CMS, ajout d'un onglet
  ou d'un module dans l'interface d'administration, visiteurs, newsletter, avis Google,
  pages dynamiques, slug automatique, JSON-LD, ou toute fonctionnalité administrative.
  Le skill impose un protocole strict d'auto-vérification AVANT et APRÈS chaque écriture
  de code, interdit tout code autonome non validé, et exige une auto-analyse fonctionnelle
  finale avant de marquer une tâche comme terminée.
---

# Back-Office CMS — Skill de développement sécurisé

> Stack cible : **Next.js 14 App Router · TypeScript · Prisma · Supabase · Tailwind CSS · Vercel**
> Ce skill s'applique aussi bien à la création d'un back-office from scratch qu'à l'ajout
> de modules dans un back-office existant.

---

## ⚠️ RÈGLE D'OR — PROTOCOLE OBLIGATOIRE

**Claude Code ne doit JAMAIS écrire du code de façon autonome sans avoir suivi les étapes
de vérification ci-dessous. Toute déviation de ce protocole est une erreur.**

### Avant chaque action de code → STOP & CHECK

```
1. LIRE les fichiers concernés (schema Prisma, routes existantes, composants existants)
2. CARTOGRAPHIER les dépendances (quels fichiers importent quoi)
3. IDENTIFIER les risques de régression (ce qui pourrait casser)
4. PROPOSER l'approche à l'utilisateur (jamais agir sans accord)
5. CODER SEULEMENT après validation explicite de l'utilisateur
```

### Après chaque bloc de code → AUTO-ANALYSE

```
1. Le code compile-t-il sans erreur TypeScript ? (vérifier les types)
2. Aucune import cassé ? (vérifier les chemins relatifs)
3. Aucune route en conflit ? (vérifier app/ directory)
4. La migration Prisma est-elle nécessaire ? Si oui, la proposer
5. Les variables d'env requises sont-elles documentées ?
6. Le composant est-il correctement exporté (default export / named export) ?
7. Le layout parent est-il respecté ?
```

**Si un point de l'auto-analyse échoue → corriger AVANT de livrer.**

---

## 🏗️ ARCHITECTURE DU BACK-OFFICE

```
app/
├── (admin)/                    # Route group — ne pas modifier le layout sans vérifier
│   ├── layout.tsx              # Layout admin global (sidebar, nav, auth guard)
│   ├── dashboard/
│   │   └── page.tsx            # Vue d'ensemble (visiteurs, KPIs)
│   ├── contenu/
│   │   └── page.tsx            # Éditeur de contenu du site
│   ├── pages/
│   │   ├── page.tsx            # Liste des pages dynamiques
│   │   └── [id]/
│   │       └── page.tsx        # Édition d'une page
│   ├── newsletter/
│   │   └── page.tsx            # Gestion abonnés + campagnes
│   └── avis/
│       └── page.tsx            # Envoi / gestion des avis Google

lib/
├── prisma.ts                   # Singleton Prisma Client
├── analytics.ts                # Helpers visiteurs (Vercel Analytics ou Plausible)
└── schema-ld.ts                # Générateur JSON-LD centralisé

prisma/
└── schema.prisma               # Source de vérité — toujours lire avant migration

components/
└── admin/
    ├── Sidebar.tsx
    ├── StatCard.tsx
    ├── RichEditor.tsx           # Éditeur WYSIWYG (Tiptap recommandé)
    └── SlugInput.tsx            # Champ slug auto-généré avec preview
```

---

## 📦 MODULES FONCTIONNELS

### MODULE 1 — Tableau de bord Visiteurs

**But** : afficher les stats de trafic en temps réel ou quasi-réel.

**Choix technique recommandé** : Vercel Analytics (déjà disponible sur stack Vercel) ou Plausible.

```typescript
// lib/analytics.ts — à créer si absent
// ⚠️ VÉRIFIER D'ABORD : existe-t-il déjà un fichier analytics.ts ou _app.tsx avec Analytics ?

import { unstable_noStore as noStore } from 'next/cache'

export async function getVisitorStats() {
  noStore() // désactive le cache pour données fraîches
  // Appel API Vercel Analytics ou Plausible selon config
  // NE PAS hardcoder de token — lire depuis process.env.ANALYTICS_TOKEN
}
```

**Checklist avant implémentation** :
- [ ] Vérifier si `@vercel/analytics` est dans `package.json`
- [ ] Vérifier si un provider Analytics est déjà dans `app/layout.tsx`
- [ ] Demander à l'utilisateur : Vercel Analytics, Plausible, ou autre ?

---

### MODULE 2 — Éditeur de Contenu du Site

**But** : permettre à Salomé (ou tout admin) de modifier les textes/images du site sans toucher au code.

**Architecture** : table `SiteContent` en base + éditeur WYSIWYG en back-office.

```prisma
// À AJOUTER dans schema.prisma — vérifier les conflits de noms avant
model SiteContent {
  id        String   @id @default(cuid())
  key       String   @unique  // ex: "home.hero.title", "services.soin-visage.description"
  value     String   @db.Text
  type      String   @default("text") // "text" | "html" | "image_url"
  updatedAt DateTime @updatedAt
  updatedBy String?  // email de l'admin
}
```

**⚠️ Avant toute migration** :
1. Lire `prisma/schema.prisma` en entier
2. Vérifier qu'aucun modèle `SiteContent` ou `Content` n'existe déjà
3. Proposer la migration : `npx prisma migrate dev --name add-site-content`
4. Attendre validation utilisateur

**Composant RichEditor** : utiliser **Tiptap** (léger, Next.js compatible).
```bash
# Vérifier d'abord si Tiptap est déjà installé
npm list @tiptap/react 2>/dev/null || echo "absent"
```

---

### MODULE 3 — Newsletter

**But** : collecter les abonnés depuis le site + envoyer des emails.

**Architecture recommandée** : table `NewsletterSubscriber` + **Resend** pour l'envoi.

```prisma
// À AJOUTER dans schema.prisma
model NewsletterSubscriber {
  id          String   @id @default(cuid())
  email       String   @unique
  firstName   String?
  subscribedAt DateTime @default(now())
  unsubscribedAt DateTime?
  source      String?  // "homepage", "popup", "footer"
  confirmed   Boolean  @default(false)
  token       String?  @unique // pour double opt-in
}
```

**Back-office newsletter** :
- Liste des abonnés avec compteur + export CSV
- Formulaire d'envoi de campagne (sujet + corps HTML)
- Statistiques d'envoi (si Resend le permet)

**⚠️ Variables d'env requises** :
```env
RESEND_API_KEY=re_...
NEWSLETTER_FROM_EMAIL=no-reply@bianco-esthetique.fr
```

---

### MODULE 4 — Avis Google

**But** : envoyer une demande d'avis Google au client après sa visite.

**Méthode** : lien direct vers le formulaire d'avis Google + email automatisé via Resend.

```typescript
// app/(admin)/avis/actions.ts — Server Action
'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendGoogleReviewRequest(email: string, prenom: string) {
  // ⚠️ PLACE_ID à récupérer depuis Google Maps — ne pas hardcoder en dur
  // Lire depuis process.env.GOOGLE_PLACE_ID
  const googleReviewUrl = `https://search.google.com/local/writereview?placeid=${process.env.GOOGLE_PLACE_ID}`

  await resend.emails.send({
    from: process.env.NEWSLETTER_FROM_EMAIL!,
    to: email,
    subject: `${prenom}, partagez votre expérience chez Bianco Esthétique 💫`,
    html: `<p>Bonjour ${prenom},...</p><a href="${googleReviewUrl}">Laisser un avis</a>`,
  })
}
```

**⚠️ Variables d'env requises** :
```env
GOOGLE_PLACE_ID=ChIJ...
```

---

### MODULE 5 — Pages Dynamiques avec Slug Auto-généré

**But** : créer des pages de contenu (landing SEO, pages communes Var, etc.) depuis le back-office.

**Architecture** :

```prisma
// À AJOUTER dans schema.prisma
model Page {
  id          String   @id @default(cuid())
  title       String
  slug        String   @unique  // généré automatiquement, modifiable
  description String?  @db.Text // meta description SEO
  content     String   @db.Text // HTML riche (Tiptap)
  published   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  jsonLd      String?  @db.Text // JSON-LD sérialisé, généré automatiquement
}
```

**Générateur de slug** :
```typescript
// lib/slug.ts
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // supprime les accents
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}
```

**Route dynamique dans le site public** :
```
app/(site)/[slug]/page.tsx   ← VÉRIFIER que cette route n'existe pas déjà
```

---

### MODULE 6 — JSON-LD Auto-calibré par Page

**But** : injecter un JSON-LD pertinent sur chaque page dynamique, généré automatiquement.

```typescript
// lib/schema-ld.ts — Générateur centralisé

type PageSchemaOptions = {
  type: 'WebPage' | 'Service' | 'FAQPage' | 'Article' | 'LocalBusiness'
  title: string
  description: string
  slug: string
  faqItems?: { question: string; answer: string }[]
}

export function generatePageSchema(opts: PageSchemaOptions): object {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bianco-esthetique.fr'

  const base = {
    '@context': 'https://schema.org',
    '@type': opts.type,
    'name': opts.title,
    'description': opts.description,
    'url': `${baseUrl}/${opts.slug}`,
  }

  if (opts.type === 'FAQPage' && opts.faqItems) {
    return {
      ...base,
      'mainEntity': opts.faqItems.map(item => ({
        '@type': 'Question',
        'name': item.question,
        'acceptedAnswer': { '@type': 'Answer', 'text': item.answer },
      })),
    }
  }

  if (opts.type === 'LocalBusiness') {
    return {
      ...base,
      '@type': 'BeautySalon',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '3 Av. Ernest Millet',
        'addressLocality': 'Hyères',
        'postalCode': '83400',
        'addressCountry': 'FR',
      },
      'telephone': process.env.NEXT_PUBLIC_PHONE,
    }
  }

  return base
}
```

**Injection dans la page dynamique** :
```tsx
// app/(site)/[slug]/page.tsx
import { generatePageSchema } from '@/lib/schema-ld'

export default async function DynamicPage({ params }) {
  const page = await getPageBySlug(params.slug) // fetch Prisma
  const schema = generatePageSchema({ type: 'WebPage', ...page })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* contenu de la page */}
    </>
  )
}
```

---

## 🔒 PROTOCOLE D'AUTO-CONTRÔLE FINAL

Avant de marquer une tâche comme **✅ terminée**, Claude Code doit répondre à cette checklist :

```
□ J'ai lu les fichiers existants AVANT de coder
□ Aucun modèle Prisma existant n'a été écrasé
□ Aucune route existante n'est en conflit
□ Tous les imports sont valides et les chemins corrects
□ Les types TypeScript sont corrects (pas de `any` non justifié)
□ Les variables d'environnement requises sont listées dans un .env.example
□ La migration Prisma a été proposée (pas exécutée automatiquement)
□ Le composant s'intègre dans le layout admin existant sans le casser
□ Le JSON-LD généré a été validé via schema.org/validator (mentionner l'URL)
□ L'utilisateur a été informé des étapes de déploiement nécessaires
```

**Si un point est ❌ → NE PAS livrer. Corriger d'abord.**

---

## 🚀 ORDRE D'IMPLÉMENTATION RECOMMANDÉ

Pour un back-office créé de zéro ou en extension :

1. **Layout admin** — sidebar, auth guard (NextAuth ou Supabase Auth), responsive
2. **Module Visiteurs** — le plus rapide, valide que le back-office fonctionne
3. **Module Pages + Slug + JSON-LD** — fondation du CMS
4. **Module Contenu** — édition des textes statiques du site
5. **Module Newsletter** — abonnés + campagnes
6. **Module Avis Google** — envoi de demandes d'avis post-visite

---

## 📋 VARIABLES D'ENVIRONNEMENT REQUISES

```env
# Base
DATABASE_URL=postgresql://...
NEXT_PUBLIC_SITE_URL=https://bianco-esthetique.fr
NEXT_PUBLIC_PHONE=0749967691

# Auth admin
NEXTAUTH_SECRET=...
NEXTAUTH_URL=https://bianco-esthetique.fr

# Email
RESEND_API_KEY=re_...
NEWSLETTER_FROM_EMAIL=no-reply@bianco-esthetique.fr

# Google
GOOGLE_PLACE_ID=ChIJ...

# Analytics (choisir un)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=bianco-esthetique.fr
# ou Vercel Analytics (aucune variable requise si @vercel/analytics installé)
```

---

## ⚡ RAPPELS CRITIQUES

- **Ne jamais hardcoder** téléphone, adresse ou clé API dans le code source
- **Ne jamais exécuter** `prisma migrate` sans accord explicite de l'utilisateur
- **Ne jamais modifier** `app/layout.tsx` global sans avoir vérifié tous les enfants qui en dépendent
- **Toujours tester** le JSON-LD généré avant de déclarer la fonctionnalité prête
- **Toujours proposer** les étapes de déploiement Vercel si des variables d'env sont ajoutées
