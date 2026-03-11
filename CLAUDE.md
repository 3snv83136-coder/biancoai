# Back-Office — Instructions pour Claude Code

## Contexte du projet

Site web HTML/CSS/JS statique avec un back-office PHP. Le back-office permet de gérer les articles de blog, les tarifs, le sitemap et le maillage interne. Les données sont stockées en fichiers JSON.

---

## Structure du projet

```
racine/
├── admin/
│   ├── index.php             ← Back-office principal (auth + toutes les pages)
│   ├── setup.php             ← Script unique de configuration du mot de passe
│   ├── .htaccess             ← Sécurité : bloque accès direct aux JSON
│   └── uploads/
│       └── blog/             ← Photos des articles en WebP (généré auto)
├── data/
│   ├── .htaccess             ← Bloque tout accès direct depuis le web
│   ├── config.json           ← URL site, nom, description, hash mot de passe admin
│   ├── posts.json            ← Tableau de tous les articles de blog
│   ├── prices.json           ← Sections et items tarifaires
│   └── pages.json            ← Pages du site indexées pour le maillage interne
├── blog/
│   ├── index.html            ← Index blog (généré automatiquement)
│   └── [slug-id].html        ← Pages articles (générées automatiquement)
├── tarifs.html               ← Page tarifs (régénérée par l'admin)
└── sitemap.xml               ← Sitemap XML (régénéré automatiquement)
```

---

## Fonctionnement général

### Authentification
- Session PHP (`$_SESSION['admin_logged']`)
- Mot de passe hashé en **bcrypt** (`password_hash` / `password_verify`)
- Lien discret dans le footer : `<a href="/admin/">admin</a>`
- Déconnexion via `?action=logout`

### Stockage des données (JSON)
Toutes les fonctions de lecture/écriture sont dans `admin/index.php` :

```php
loadJson(string $file): array   // lit DATA_DIR . $file
saveJson(string $file, array $data): void  // écrit avec JSON_PRETTY_PRINT
```

Constantes de chemin :
```php
define('DATA_DIR',    __DIR__ . '/../data/');
define('UPLOADS_DIR', __DIR__ . '/uploads/blog/');
define('BLOG_DIR',    __DIR__ . '/../blog/');
define('ROOT_DIR',    __DIR__ . '/../');
```

---

## Schémas des données JSON

### `data/config.json`
```json
{
  "site_url": "https://www.monsite.fr",
  "site_name": "Nom du site",
  "site_description": "Description",
  "admin_username": "admin",
  "admin_password_hash": "$2y$10$..."
}
```

### `data/posts.json`
```json
{
  "posts": [
    {
      "id": "slug-du-titre-1700000000",
      "title": "Titre de l'article",
      "slug": "slug-du-titre",
      "excerpt": "Résumé court",
      "content": "<p>Contenu HTML...</p>",
      "tags": ["tag1", "tag2"],
      "images": [
        { "file": "img-1700000000-0.webp", "caption": "Titre de la photo" }
      ],
      "meta_desc": "Description SEO 160 caractères max",
      "date": "2024-01-15"
    }
  ]
}
```

### `data/prices.json`
```json
{
  "updated_at": "2024-01-15T10:30:00+01:00",
  "sections": [
    {
      "id": "section_1",
      "title": "Nom de la section",
      "items": [
        {
          "id": "item_1",
          "label": "Nom de la prestation",
          "price": "99",
          "unit": "€ / mois",
          "description": "Description courte"
        }
      ]
    }
  ]
}
```

### `data/pages.json`
```json
{
  "pages": [
    {
      "url": "/index.html",
      "title": "Accueil",
      "keywords": ["accueil", "service", "agence"],
      "description": "Page d'accueil"
    }
  ]
}
```

---

## Fonctions PHP clés

### `slugify(string $str): string`
Transforme un titre en slug URL (accents → ASCII, espaces → tirets, minuscules).

### `convertToWebP(string $src, string $dest, int $maxW=1200, int $maxH=800): void`
- Utilise l'extension PHP **GD**
- Redimensionne en préservant le ratio
- Centre l'image sur un canvas 1200×800 avec fond gris clair (#f5f5f5)
- Encode en WebP qualité 85
- Formats source supportés : JPEG, PNG, WebP

### `computeMaillage(array $post, array $pages): array`
- Analyse le texte du post (titre + extrait + contenu)
- Compte la fréquence des mots-clés de chaque page
- Retourne les 5 pages les plus pertinentes avec un score
- Exclut automatiquement les pages `/blog/`

### `generateBlogPage(array $post): void`
Génère `blog/{post-id}.html` avec :
- Meta tags (description, OG, canonical)
- **JSON-LD BlogPosting** (Schema.org)
- Images avec `<figure>` et `<figcaption>`
- Bloc de maillage interne "À lire aussi"
- Breadcrumb
- Style CSS inline complet

### `generateBlogIndex(): void`
Génère `blog/index.html` avec :
- Grille de cards pour tous les articles
- JSON-LD Blog Schema.org
- Tri anti-chronologique

### `generatePricesPage(array $prices): void`
Génère `tarifs.html` avec :
- Sections et grille de cards par prestation
- **JSON-LD WebPage + Offer** (uniquement pour les prix numériques)

### `generateSitemap(): void`
Génère `sitemap.xml` avec toutes les URLs :
- `/` → priority 1.0, changefreq weekly
- `/tarifs.html` → priority 0.8, changefreq monthly
- `/blog/` → priority 0.8, changefreq weekly
- `/contact.html` → priority 0.5, changefreq yearly
- Chaque article → priority 0.7, changefreq monthly, lastmod = date article

---

## Pages du back-office (`?page=`)

| Page | Description | Actions déclenchées |
|------|-------------|---------------------|
| `dashboard` | Statistiques + derniers articles | — |
| `posts` | Liste tous les articles | Suppression → régénère sitemap |
| `post_new` | Formulaire nouvel article | Save → génère HTML + sitemap + index blog |
| `post_edit&id=X` | Formulaire édition | Save → régénère HTML + sitemap + index blog |
| `prices` | Gestion des tarifs | Save → régénère tarifs.html + sitemap |
| `sitemap` | Aperçu + bouton regen | Régénère sitemap.xml |
| `settings` | Config site + mot de passe | Save → met à jour config.json |

---

## Upload et traitement des images

Dans le formulaire d'article :
- Input `name="new_images[]"` (multiple)
- Captions : `name="img_captions[]"` (même index)
- Images existantes conservées dans `name="images_json"` (JSON encodé)
- Suppression d'une image existante : retire de `images_json` côté JS

Traitement PHP à la sauvegarde :
```php
// Pour chaque fichier uploadé :
$fname = 'img-' . time() . '-' . $i . '.webp';
$dest  = UPLOADS_DIR . $fname;
convertToWebP($tmp, $dest, 1200, 800);
$images[] = ['file' => $fname, 'caption' => $caption];
```

---

## JSON-LD par type de page

### Article de blog (`BlogPosting`)
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Titre",
  "description": "Meta desc ou excerpt",
  "datePublished": "2024-01-15",
  "dateModified": "2024-01-15",
  "author": { "@type": "Organization", "name": "Site", "url": "https://..." },
  "publisher": { "@type": "Organization", "name": "Site", "url": "https://..." },
  "url": "https://.../blog/slug-id.html",
  "keywords": "tag1, tag2",
  "image": "https://.../admin/uploads/blog/img-xxx.webp",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://.../blog/slug-id.html" }
}
```

### Page tarifs (`WebPage` + `Offer`)
```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Tarifs — Site",
  "url": "https://.../tarifs.html",
  "offers": [
    { "@type": "Offer", "name": "Prestation", "price": "99", "priceCurrency": "EUR" }
  ]
}
```

### Index blog (`Blog`)
```json
{
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Site — Blog",
  "url": "https://.../blog/",
  "publisher": { "@type": "Organization", "name": "Site" }
}
```

---

## Maillage interne — algorithme

```php
function computeMaillage(array $post, array $pages): array {
    // 1. Extraire tous les mots du contenu du post
    $text  = strtolower($post['title'] . ' ' . $post['excerpt'] . ' ' . strip_tags($post['content']));
    $words = preg_split('/\W+/', $text, -1, PREG_SPLIT_NO_EMPTY);
    $freq  = array_count_values($words);

    // 2. Pour chaque page, sommer les fréquences de ses mots-clés dans le texte
    foreach ($pages as $page) {
        if (strpos($page['url'], '/blog/') !== false) continue; // Exclure le blog lui-même
        $score = 0;
        foreach ($page['keywords'] as $kw) {
            if (isset($freq[strtolower($kw)])) $score += $freq[strtolower($kw)];
        }
        if ($score > 0) $results[] = [...$page, 'score' => $score];
    }

    // 3. Trier par score décroissant, retourner les 5 premiers
    usort($results, fn($a, $b) => $b['score'] <=> $a['score']);
    return array_slice($results, 0, 5);
}
```

Pour améliorer la pertinence, ajouter des mots-clés dans `data/pages.json`.

---

## Sécurité

- `data/.htaccess` : `Require all denied` → bloque tout accès HTTP direct aux JSON
- `admin/.htaccess` : `Options -Indexes` + interdit `.json` direct
- Mot de passe hashé bcrypt, jamais stocké en clair
- Toutes les sorties HTML passent par `htmlspecialchars()`
- Sessions PHP standard

---

## Prérequis serveur

- PHP **7.4+**
- Extension PHP **GD** (pour conversion WebP)
- Serveur **Apache** avec mod_rewrite et support `.htaccess`
- Écriture autorisée sur `data/` et `admin/uploads/blog/`

---

## Installation

1. Uploader `admin/` et `data/` à la racine du site via FTP
2. Ouvrir `https://votresite.fr/admin/setup.php?password=MonMotDePasse`
3. **Supprimer** `setup.php` immédiatement après
4. Configurer dans Admin → Paramètres (URL, nom, description)
5. Ajouter dans le footer HTML :
```html
<a href="/admin/" style="color:#999;font-size:.72rem;opacity:.4;text-decoration:none">admin</a>
```
6. Éditer `data/pages.json` pour référencer les pages existantes du site

---

## Points d'extension courants

- **Nouvelle page type** : créer une fonction `generateXxxPage()` sur le modèle de `generateBlogPage()`
- **Nouveau schema JSON-LD** : l'ajouter dans la fonction de génération correspondante
- **Nouveau champ article** : ajouter dans le formulaire POST, dans le schéma `$newPost`, et dans `generateBlogPage()`
- **Catégories** : ajouter un champ `category` dans `posts.json` et filtrer dans `generateBlogIndex()`
- **Pagination blog** : découper le tableau `$posts` par tranches dans `generateBlogIndex()`
