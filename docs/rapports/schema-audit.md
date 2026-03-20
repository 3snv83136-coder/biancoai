# Schema.org Structured Data Audit -- Bianco Esthetique
**Date:** 2026-03-18
**Site:** https://www.bianco-esthetique.fr
**Codebase:** React SSG (Vite + React Router + pre-rendering)

---

## 1. Detection Summary

### Format used
- **JSON-LD** exclusively (correct best practice)
- No Microdata or RDFa detected
- `@context` is `"https://schema.org"` on all blocks (correct, uses HTTPS)

### Where schema lives
There are two layers of schema in this codebase:

| Layer | Location | Visible to crawlers? |
|-------|----------|---------------------|
| **Static** (in `index.html` template) | `<head>` of every pre-rendered page | YES |
| **Dynamic** (via `useEffect` in TSX components) | Injected into `document.head` at runtime | NO -- `useEffect` does not run during `renderToString()` SSG |

### Static schema (present on ALL 80+ pages)

| Block | @type | Lines in template |
|-------|-------|-------------------|
| 1 | `BeautySalon` | 63-106 |
| 2 | `FAQPage` | 107-146 |

### Dynamic schema (client-side only, NOT in pre-rendered HTML)

| Component | @type(s) injected | Pages affected |
|-----------|-------------------|----------------|
| `App.tsx` | `BeautySalon` (duplicate), `FAQPage` (duplicate), `ItemList` | Homepage |
| `HeadSpaPage.tsx` | `BeautySalon` + `Service` + `BreadcrumbList` + `FAQPage` | `/head-spa-hyeres` |
| `SEOGeoPage.tsx` | `BeautySalon` + `BreadcrumbList` + `FAQPage` | 16 geo pages |
| `SEOPrestationPage.tsx` | `BeautySalon` + `Service` + `BreadcrumbList` + `FAQPage` | 7 prestation pages |
| `ServiceDetailPage.tsx` | `Service` + `BreadcrumbList` + `FAQPage` | ~50 service detail pages |
| `ServicesPage.tsx` | `ItemList` + `BreadcrumbList` | `/prestations`, `/services` |
| `PricingPage.tsx` | `WebPage` (with Offers) + `BreadcrumbList` | `/tarifs` |
| `BlogListPage.tsx` | `Blog` + `BreadcrumbList` | `/blog` |
| `BlogPostPage.tsx` | `BlogPosting` + `BreadcrumbList` | 5 blog posts |
| `AboutPage.tsx` | `BreadcrumbList` | `/a-propos` |

---

## 2. CRITICAL Issues

### CRITICAL-1: All page-specific schema is invisible to search engines

**Severity: CRITICAL**

Every page-specific schema (Service, BreadcrumbList, BlogPosting, Blog, WebPage+Offers, ItemList) is injected via `useEffect()` in React components. Since the SSG process uses `renderToString()` (see `entry-server.tsx`), `useEffect` hooks never execute during pre-rendering.

**Result:** The pre-rendered HTML files in `/dist/` only contain the 2 static JSON-LD blocks from `index.html`. Google, Bing, and other crawlers see none of the page-specific structured data.

**Impact:**
- No BreadcrumbList rich results on any page
- No BlogPosting Article rich results for blog posts
- No Service schema visible for service pages
- No WebPage+Offer schema visible for the pricing page
- The ItemList for services is invisible

**Fix:** Move all JSON-LD generation to a server-side compatible approach. Options:
1. Generate the JSON-LD as static `<script>` tags in the JSX return (not in `useEffect`), so `renderToString()` includes them
2. Inject page-specific JSON-LD in the SSG build script (similar to how `index.html` has static blocks)
3. Use a Helmet-like library that supports SSR (e.g., `react-helmet-async` with server-side extraction)

### CRITICAL-2: Identical BeautySalon + FAQPage on EVERY page

**Severity: CRITICAL**

The same BeautySalon and FAQPage blocks from `index.html` are duplicated identically across all 80+ pre-rendered pages (homepage, blog posts, service details, legal pages, cookies page, etc.).

**Problems:**
- The `FAQPage` schema on pages that have no FAQ content (e.g., `/mentions-legales`, `/cookies`, `/confidentialite`) is **misleading markup**. Google may issue a manual action for misrepresenting content.
- Having the exact same `BeautySalon` block on every page is harmless but unnecessary -- it should ideally be on the homepage and contact page only, or use `@id` references elsewhere.
- When client-side JS runs, `App.tsx` injects a THIRD duplicate of the BeautySalon and a THIRD duplicate of FAQPage on the homepage, resulting in triple-counted schema.

### CRITICAL-3: AggregateRating without individual Reviews

**Severity: HIGH**

The static BeautySalon block includes:
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "5",
  "reviewCount": "24"
}
```

Google requires that `AggregateRating` on a `LocalBusiness`/`BeautySalon` be based on reviews that are directly collected/hosted on the site. If these ratings come from Google Maps reviews (which the page text suggests -- "Note 5/5 sur Google -- 24 avis verifies"), this is a **rich result policy violation**. Google may issue a manual action or ignore the rating.

**Fix:** Either:
- Remove `aggregateRating` from the schema entirely (safest)
- Implement a first-party review collection system on the site and mark up only those reviews
- Add `"bestRating": "5"` and ensure the reviews displayed on the site are first-party

---

## 3. Validation of Existing Static Schema

### Block 1: BeautySalon

| Check | Status | Notes |
|-------|--------|-------|
| `@context` = `"https://schema.org"` | PASS | |
| `@type` = `"BeautySalon"` | PASS | Valid subtype of LocalBusiness/HealthAndBeautyBusiness |
| `name` | PASS | "Bianco Esthetique" |
| `url` | PASS | Absolute URL |
| `description` | PASS | |
| `telephone` | PASS | E.164 format |
| `email` | PASS | Present in static block only (missing from App.tsx dynamic version) |
| `address` | PASS | Complete PostalAddress |
| `geo` | PASS | Coordinates present |
| `openingHoursSpecification` | PASS | Mon-Fri 10:00-18:00 |
| `priceRange` | INFO | "priceRange" is deprecated in favor of no property (Google ignores it) |
| `image` | WARN | Points to `/og-image.jpg` in static, but to an Unsplash stock photo in the dynamic version -- inconsistency |
| `aggregateRating` | FAIL | Policy violation risk (see CRITICAL-3) |
| `sameAs` | PASS | Instagram, Facebook, Planity |
| Missing: `@id` | WARN | No `@id` defined, making it impossible to reference this entity from other blocks |
| Missing: `areaServed` | WARN | Present in dynamic version but absent from static (visible) version |
| Missing: `hasOfferCatalog` | INFO | Recommended for LocalBusiness with services |
| Missing: `logo` | WARN | Recommended property for Google Knowledge Panel |
| Missing: `paymentAccepted` | INFO | Recommended for LocalBusiness |
| Missing: `currenciesAccepted` | INFO | |

### Block 2: FAQPage

| Check | Status | Notes |
|-------|--------|-------|
| `@context` = `"https://schema.org"` | PASS | |
| `@type` = `"FAQPage"` | INFO | FAQPage no longer generates Google rich results for commercial sites (August 2023). However, the markup is still valid for AI/LLM citation purposes. |
| `mainEntity` array | PASS | 4 Question/Answer pairs, properly structured |
| Question `@type` | PASS | |
| AcceptedAnswer `@type` | PASS | |
| Missing: `mainEntityOfPage` / page URL | WARN | No URL linking the FAQ to the specific page |

**FAQPage policy note:** Since Bianco Esthetique is a commercial site, FAQPage will NOT generate Google FAQ rich results. The schema is acceptable for GEO (Generative Engine Optimization) and AI citation, but having the same FAQ on all 80+ pages (including legal/cookie pages) is problematic regardless.

---

## 4. Discrepancies Between Static and Dynamic Schema

The static block (visible to crawlers) and the dynamic App.tsx block (client-side only) have differences:

| Property | Static (SSR) | Dynamic (App.tsx) |
|----------|-------------|-------------------|
| `email` | `"contact@bianco-esthetique.fr"` | MISSING |
| `addressRegion` | `"Var"` | MISSING |
| `areaServed` | MISSING | `{"@type":"City","name":"Hyeres"}` |
| `image` | `og-image.jpg` | Unsplash stock URL |
| `openingHours` format | `openingHoursSpecification` array | `openingHours` shorthand format |
| `aggregateRating` | Present | MISSING |
| `sameAs` | 3 entries | 4 entries (extra Facebook URL) |

This inconsistency means even if the dynamic schema were visible, it would conflict with the static one.

---

## 5. Missing Schema Opportunities

### 5A. WebSite with SearchAction (PRIORITY: HIGH)

Missing from homepage. Enables sitelinks searchbox in Google results.

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Bianco Esthetique",
  "url": "https://www.bianco-esthetique.fr",
  "publisher": {
    "@type": "BeautySalon",
    "@id": "https://www.bianco-esthetique.fr/#organization"
  }
}
```

### 5B. BreadcrumbList on all pages (PRIORITY: HIGH)

The code generates BreadcrumbList in `useEffect` for most pages, but it never appears in the pre-rendered HTML. This must be made server-renderable.

Example for a service page:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
      "item": "https://www.bianco-esthetique.fr"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://www.bianco-esthetique.fr/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Head Spa Hyeres",
      "item": "https://www.bianco-esthetique.fr/services/head-spa-hyeres-prix-rituel-1h"
    }
  ]
}
```

### 5C. Service schema on service detail pages (PRIORITY: HIGH)

Should be in the static HTML, not just client-side. Each of the ~50 service pages should have:

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Head Spa - Rituel 1h",
  "description": "Rituel head spa d'une heure...",
  "url": "https://www.bianco-esthetique.fr/services/head-spa-hyeres-prix-rituel-1h",
  "provider": {
    "@type": "BeautySalon",
    "@id": "https://www.bianco-esthetique.fr/#organization"
  },
  "areaServed": {
    "@type": "City",
    "name": "Hyeres"
  }
}
```

### 5D. BlogPosting on blog articles (PRIORITY: HIGH)

Must be server-rendered. Each blog post needs:

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Head Spa Hyeres : rituel bien-etre cuir chevelu",
  "description": "...",
  "datePublished": "2025-03-01",
  "dateModified": "2025-03-01",
  "author": {
    "@type": "Organization",
    "name": "Bianco Esthetique",
    "url": "https://www.bianco-esthetique.fr"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Bianco Esthetique",
    "url": "https://www.bianco-esthetique.fr",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.bianco-esthetique.fr/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.bianco-esthetique.fr/blog/head-spa-hyeres-rituel-bien-etre-cuir-chevelu"
  },
  "image": "https://www.bianco-esthetique.fr/..."
}
```

### 5E. Organization with logo (PRIORITY: MEDIUM)

A dedicated Organization block with `@id` enables cross-referencing and Google Knowledge Panel:

```json
{
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "@id": "https://www.bianco-esthetique.fr/#organization",
  "name": "Bianco Esthetique",
  "url": "https://www.bianco-esthetique.fr",
  "logo": "https://www.bianco-esthetique.fr/logo.png",
  "description": "Institut de beaute et bien-etre a Hyeres...",
  "telephone": "+33749769691",
  "email": "contact@bianco-esthetique.fr",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3 Avenue Ernest Millet",
    "addressLocality": "Hyeres",
    "postalCode": "83400",
    "addressRegion": "Var",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.1199,
    "longitude": 6.1314
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "10:00",
      "closes": "18:00"
    }
  ],
  "areaServed": [
    { "@type": "City", "name": "Hyeres" },
    { "@type": "City", "name": "Toulon" },
    { "@type": "City", "name": "Carqueiranne" },
    { "@type": "City", "name": "La Garde" },
    { "@type": "City", "name": "Le Pradet" },
    { "@type": "City", "name": "La Crau" },
    { "@type": "City", "name": "La Londe-les-Maures" }
  ],
  "sameAs": [
    "https://www.instagram.com/bianco_esthetique",
    "https://www.facebook.com/p/Bianco-Esthetique-61557009986241/",
    "https://www.planity.com/bianco-esthetique-83400-hyeres"
  ],
  "image": "https://www.bianco-esthetique.fr/og-image.jpg"
}
```

### 5F. OfferCatalog on pricing page (PRIORITY: MEDIUM)

The PricingPage.tsx already generates `WebPage` with `Offer` items client-side, but these are invisible. When fixed for SSR, the Offers should use proper structure with `priceCurrency: "EUR"`.

---

## 6. Rich Result Eligibility Assessment

| Rich Result Type | Eligible? | Current Status |
|-----------------|-----------|----------------|
| **Local Business** (Google Maps/Knowledge Panel) | YES | BeautySalon schema present but has AggregateRating policy risk |
| **Breadcrumb** | YES | Code exists but invisible to crawlers (useEffect) |
| **Article** (BlogPosting) | YES | Code exists but invisible to crawlers (useEffect) |
| **FAQ** | NO (commercial site) | Present but will not trigger rich results; acceptable for GEO |
| **Sitelinks Searchbox** | YES | Missing WebSite schema entirely |
| **Product/Service** | Partial | Service schema exists client-side only |
| **Review/Rating** | AT RISK | AggregateRating present but may violate Google policy |

---

## 7. Action Plan (Priority Order)

### P0 -- Fix immediately

1. **Make all `useEffect`-based JSON-LD server-renderable.** This is the single most impactful fix. Move JSON-LD generation out of `useEffect` and into the component's JSX return so `renderToString()` includes it. Example approach:

```tsx
// Instead of useEffect + document.createElement:
return (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    {/* rest of component */}
  </>
);
```

2. **Remove the static BeautySalon + FAQPage blocks from `index.html` template.** Once the components generate their own schema server-side, the template blocks become duplicates. Keep the BeautySalon schema only on the homepage and contact section. Remove FAQPage from pages that have no FAQ content.

3. **Remove or fix `aggregateRating`.** Either remove it entirely, or implement a genuine first-party review system.

### P1 -- High priority

4. **Add `@id` to the main BeautySalon entity** (`"@id": "https://www.bianco-esthetique.fr/#organization"`) so other pages can reference it without duplicating the full block.

5. **Add WebSite schema** to the homepage.

6. **Add `logo` property** to the Organization/BeautySalon.

7. **Ensure BreadcrumbList is unique per page** and server-rendered.

### P2 -- Medium priority

8. **Add `areaServed` to the main static BeautySalon** with all served cities.

9. **Add `publisher.logo` to BlogPosting** schema (required for Article rich results).

10. **Reconcile static vs. dynamic schema** -- eliminate all discrepancies listed in Section 4.

---

## 8. Files Requiring Changes

| File | Change needed |
|------|--------------|
| `/index.html` | Remove static JSON-LD blocks (or make them homepage-specific via SSG script) |
| `/App.tsx` | Move JSON-LD from `useEffect` to JSX return; add WebSite schema; add `@id` |
| `/HeadSpaPage.tsx` | Move JSON-LD from `useEffect` to JSX return |
| `/SEOGeoPage.tsx` | Move JSON-LD from `useEffect` to JSX return |
| `/SEOPrestationPage.tsx` | Move JSON-LD from `useEffect` to JSX return |
| `/ServiceDetailPage.tsx` | Move JSON-LD from `useEffect` to JSX return |
| `/ServicesPage.tsx` | Move JSON-LD from `useEffect` to JSX return |
| `/PricingPage.tsx` | Move JSON-LD from `useEffect` to JSX return |
| `/BlogListPage.tsx` | Move JSON-LD from `useEffect` to JSX return |
| `/BlogPostPage.tsx` | Move JSON-LD from `useEffect` to JSX return |
| `/AboutPage.tsx` | Move JSON-LD from `useEffect` to JSX return |
| `/scripts/prerender.ts` (or equivalent) | May need update to extract head content if using Helmet approach |

---

## 9. Summary

**Current state:** The site has well-structured JSON-LD code in every React component, but none of it reaches crawlers because `useEffect` does not execute during SSG pre-rendering. The only schema visible to Google is a duplicated BeautySalon + FAQPage pair from the `index.html` template, which appears identically on all 80+ pages including legal and cookie pages.

**Key metrics:**
- Pages with correct visible schema: **0 out of ~80**
- Distinct schema types visible to crawlers: **2** (BeautySalon, FAQPage)
- Distinct schema types that should be visible: **8+** (BeautySalon, WebSite, BreadcrumbList, Service, BlogPosting, Blog, WebPage, ItemList)
- Rich result types currently achievable: **1** (Local Business, with caveats)
- Rich result types achievable after fix: **4** (Local Business, Breadcrumb, Article, Sitelinks)

The fix is straightforward: replace `useEffect` + `document.createElement` pattern with `dangerouslySetInnerHTML` in JSX return, and remove the static template blocks.
