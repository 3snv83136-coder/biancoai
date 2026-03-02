import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="h-full w-full bg-gradient-to-br from-secondary via-background to-surface" />
      </div>
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <span className="text-primary font-bold tracking-ultra-wide uppercase text-xs montserrat block mb-4">
          Maison de beauté à Hyères
        </span>
        <h1 className="text-4xl md:text-5xl serif mb-6 text-dark">
          Institut de beauté Hyères et environs
        </h1>
        <p className="text-gray-600 mb-10 text-sm md:text-base leading-relaxed">
          Head spa japonais, drainage, massages relaxants, soins visage, ongles et maquillage.
          Découvrez nos 50 pages services optimisées pour Hyères et les villes voisines.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/services"
            className="group relative w-full sm:w-auto overflow-hidden bg-primary text-white px-10 py-3 rounded-full text-sm md:text-base font-semibold montserrat tracking-widest uppercase shadow-lg hover:shadow-primary/40 transition-all"
          >
            <span className="relative z-10">Voir tous nos services</span>
            <div className="absolute inset-0 bg-dark translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
          <Link
            href="/services/head-spa-japonais-hyeres-reservation-en-ligne"
            className="w-full sm:w-auto border border-dark/15 text-dark px-8 py-3 rounded-full text-sm md:text-base font-medium montserrat hover:bg-dark hover:text-white transition-all"
          >
            Découvrir le head spa
          </Link>
        </div>
      </div>
    </div>
  );
}
