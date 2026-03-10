import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Bianco Esthétique | Institut de Beauté & Bien-être Hyères',
  description:
    'Institut de beauté et bien-être à Hyères et environs : head spa, massage, drainage, soins visage, ongles et maquillage.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-dark antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebSite',
                  '@id': 'https://www.bianco-esthetique.fr/#website',
                  name: 'Bianco Esthétique',
                  url: 'https://www.bianco-esthetique.fr',
                  publisher: { '@id': 'https://www.bianco-esthetique.fr/#business' },
                  inLanguage: 'fr-FR',
                },
                {
                  '@type': 'BeautySalon',
                  '@id': 'https://www.bianco-esthetique.fr/#business',
                  name: 'Bianco Esthétique',
                  url: 'https://www.bianco-esthetique.fr',
                  logo: 'https://www.bianco-esthetique.fr/favicon.png',
                  description:
                    'Institut de beauté et bien-être à Hyères. Head spa, drainage lymphatique, soins visage, ongles et maquillage.',
                  telephone: '+33749769691',
                  priceRange: '€€',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: '3 Avenue Ernest Millet',
                    addressLocality: 'Hyères',
                    postalCode: '83400',
                    addressRegion: 'Provence-Alpes-Côte d\'Azur',
                    addressCountry: 'FR',
                  },
                  geo: { '@type': 'GeoCoordinates', latitude: 43.1199, longitude: 6.1314 },
                  areaServed: [
                    { '@type': 'City', name: 'Hyères' },
                    { '@type': 'City', name: 'Toulon' },
                    { '@type': 'City', name: 'Carqueiranne' },
                    { '@type': 'City', name: 'La Crau' },
                    { '@type': 'City', name: 'La Londe-les-Maures' },
                  ],
                  openingHoursSpecification: [
                    {
                      '@type': 'OpeningHoursSpecification',
                      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                      opens: '10:00',
                      closes: '18:00',
                    },
                  ],
                  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', reviewCount: '24', bestRating: '5' },
                  sameAs: [
                    'https://www.instagram.com/bianco_esthetique',
                    'https://www.facebook.com/p/Bianco-Esthétique-61557009986241/',
                    'https://www.planity.com/bianco-esthetique-83400-hyeres',
                  ],
                },
              ],
            }),
          }}
        />
        <main className="flex-1 bg-surface">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
