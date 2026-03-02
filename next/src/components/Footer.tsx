'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-secondary mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="/" className="text-white font-bold tracking-[0.25em] uppercase text-xs montserrat hover:text-primary transition-colors">
              Bianco
            </Link>
            <p className="mt-3 text-sm text-gray-400 max-w-xs">
              Hyères et environs. Head spa japonais, drainage lymphatique, massages, soins visage, ongles et maquillage pour vos moments d&apos;exception.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">Nos services</h3>
            <ul className="text-sm space-y-1">
              <li>
                <Link href="/services" className="hover:text-primary hover:underline">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">Liens</h3>
            <ul className="text-sm space-y-1">
              <li><Link href="/" className="hover:text-primary hover:underline">Accueil</Link></li>
              <li><Link href="/services" className="hover:text-primary hover:underline">Services</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Bianco Esthétique. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
