import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services, type Service } from '@/data/services';

const THEME_LABELS: Record<Service['theme'], string> = {
  'head-spa': 'Head spa',
  massage: 'Massage',
  visage: 'Soins visage',
  ongles: 'Ongles',
  maquillage: 'Maquillage',
};

function getRelatedServices(service: Service): { byTheme: Service[]; byCity: Service[] } {
  const others = services.filter((s) => s.id !== service.id);
  const byTheme = others.filter((s) => s.theme === service.theme);
  const byCity = others.filter((s) => s.city === service.city);
  const idx = services.findIndex((s) => s.id === service.id);
  const take3 = (arr: Service[]) => {
    if (arr.length <= 3) return arr;
    const start = idx % arr.length;
    return [
      arr[start % arr.length],
      arr[(start + 1) % arr.length],
      arr[(start + 2) % arr.length],
    ].filter((s) => s.id !== service.id);
  };
  return {
    byTheme: take3(byTheme).slice(0, 3),
    byCity: take3(byCity).slice(0, 3),
  };
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) notFound();

  const { byTheme, byCity } = getRelatedServices(service);

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.metaDescription,
    url: `https://www.bianco-esthetique.fr/services/${service.id}`,
    areaServed: {
      '@type': 'City',
      name: service.city,
    },
    provider: {
      '@type': 'BeautySalon',
      '@id': 'https://www.bianco-esthetique.fr/#business',
      name: 'Bianco Esthétique',
      url: 'https://www.bianco-esthetique.fr',
      telephone: '+33749769691',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '3 Avenue Ernest Millet',
        addressLocality: 'Hyères',
        postalCode: '83400',
        addressCountry: 'FR',
      },
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.bianco-esthetique.fr' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.bianco-esthetique.fr/services' },
      { '@type': 'ListItem', position: 3, name: service.title, item: `https://www.bianco-esthetique.fr/services/${service.id}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="bg-surface/60">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <nav aria-label="Fil d'Ariane" className="text-xs md:text-sm text-gray-500 mb-6">
            <ol className="flex flex-wrap gap-x-2 gap-y-1 items-center">
              <li>
                <Link href="/" className="hover:text-dark">
                  Accueil
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/services" className="hover:text-dark">
                  Services
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-dark" aria-current="page">
                {service.title}
              </li>
            </ol>
          </nav>

          <article className="bg-white border border-gray-100 rounded-3xl px-6 md:px-10 py-8 md:py-10 shadow-sm">
            <div className="mb-8">
              <p className="text-[11px] font-bold tracking-ultra-wide uppercase text-primary montserrat mb-3">
                {THEME_LABELS[service.theme]} · {service.city}
              </p>
              <h1 className="text-3xl md:text-4xl serif text-dark mb-4">{service.title}</h1>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">{service.intro}</p>
            </div>

            <div className="space-y-8 md:space-y-10 mb-10">
              {service.sections.map((section, i) => (
                <section key={i}>
                  <h2 className="text-xl md:text-2xl serif mb-3 text-dark">{section.title}</h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base whitespace-pre-line">
                    {section.content}
                  </p>
                </section>
              ))}
            </div>

            <section className="mb-10">
              <h2 className="text-xl md:text-2xl serif mb-4 text-dark">
                Questions fréquentes
              </h2>
              <ul className="space-y-4">
                {service.faq.map((item, i) => (
                  <li
                    key={i}
                    className="border border-gray-100 rounded-2xl p-4 md:p-5 bg-surface"
                  >
                    <h3 className="font-semibold text-dark mb-1 text-sm md:text-base">
                      {item.question}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-sm md:text-base text-dark/80 md:max-w-xl">
                {service.cta.text}
              </p>
              <a
                href="https://www.planity.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center overflow-hidden bg-primary text-white px-6 py-3 rounded-full text-xs md:text-sm font-semibold montserrat tracking-widest uppercase shadow-md hover:shadow-primary/40 transition-all"
              >
                <span className="relative z-10">{service.cta.button}</span>
                <div className="absolute inset-0 bg-dark translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
            </div>
          </article>

          <section className="mt-10 border-t border-gray-200 pt-8">
            <h2 className="text-xl md:text-2xl serif mb-6 text-dark">Services liés</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xs font-bold tracking-ultra-wide uppercase montserrat text-gray-500 mb-3">
                  Même thème : {THEME_LABELS[service.theme]}
                </h3>
                <ul className="space-y-2 text-sm">
                  {byTheme.map((s) => (
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
              <div>
                <h3 className="text-xs font-bold tracking-ultra-wide uppercase montserrat text-gray-500 mb-3">
                  Même ville : {service.city}
                </h3>
                <ul className="space-y-2 text-sm">
                  {byCity.map((s) => (
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
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
