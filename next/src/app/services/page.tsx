import Link from 'next/link';
import { services, type ServiceTheme } from '@/data/services';

const THEME_ORDER: ServiceTheme[] = ['head-spa', 'massage', 'visage', 'ongles', 'maquillage'];
const THEME_LABELS: Record<ServiceTheme, string> = {
  'head-spa': 'Head spa',
  massage: 'Massage',
  visage: 'Soins visage',
  ongles: 'Ongles',
  maquillage: 'Maquillage',
};

function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

export const metadata = {
  title: 'Nos services | Institut de beauté Hyères et environs',
  description:
    'Tous nos services par thème et par ville : head spa, massage, soins visage, ongles, maquillage. Institut de beauté à Hyères, Toulon, Carqueiranne, La Londe, La Crau, Le Pradet, Pierrefeu, La Valette, Solliès-Pont.',
};

export default function ServicesIndexPage() {
  const byTheme = THEME_ORDER.map((theme) => {
    const items = services.filter((s) => s.theme === theme);
    const cities = Array.from(new Set(items.map((s) => s.city))).sort();
    return {
      theme,
      label: THEME_LABELS[theme],
      anchor: slugify(THEME_LABELS[theme]),
      cities,
      items,
    };
  });

  const cityToAnchor = (city: string, themeAnchor: string) =>
    `${themeAnchor}-${slugify(city)}`;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.bianco-esthetique.fr' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.bianco-esthetique.fr/services' },
    ],
  };

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
    />
    <div className="max-w-5xl mx-auto px-6 py-10">
      <nav aria-label="Fil d'Ariane" className="text-xs md:text-sm text-gray-500 mb-6">
        <ol className="flex flex-wrap gap-x-2 gap-y-1">
          <li><Link href="/" className="hover:text-gray-700">Accueil</Link></li>
          <li aria-hidden>/</li>
          <li className="text-gray-900" aria-current="page">Services</li>
        </ol>
      </nav>

      <h1 className="text-3xl md:text-4xl serif text-dark mb-4">Nos services</h1>
      <p className="text-gray-600 mb-10 text-sm md:text-base leading-relaxed max-w-2xl">
        Retrouvez tous nos services regroupés par thème et par ville. Cliquez sur un service pour voir la fiche détaillée.
      </p>

      <nav className="mb-10 flex flex-wrap gap-3">
        {byTheme.map(({ theme, label, anchor }) => (
          <a
            key={theme}
            href={`#${anchor}`}
            className="text-xs md:text-sm font-semibold montserrat tracking-widest uppercase px-3 py-1.5 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all"
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="space-y-16">
        {byTheme.map(({ theme, label, anchor, cities, items }) => (
            <section key={theme} id={anchor} className="scroll-mt-8">
              <h2 className="text-2xl serif text-dark mb-6">{label}</h2>
              <div className="space-y-8">
                {cities.map((city) => (
                  <div key={city}>
                    <h3
                      id={cityToAnchor(city, anchor)}
                      className="text-lg font-semibold text-gray-700 mb-3 scroll-mt-8"
                    >
                      {city}
                    </h3>
                    <ul className="space-y-2">
                      {items
                        .filter((s) => s.city === city)
                        .map((s) => (
                          <li key={s.id}>
                            <Link
                              href={`/services/${s.id}`}
                              className="text-primary hover:text-dark hover:underline"
                            >
                              {s.title}
                            </Link>
                          </li>
                ))}
              </ul>
                  </div>
                ))}
              </div>
            </section>
        ))}
      </div>
    </div>
    </>
  );
}
