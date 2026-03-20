import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tableau de bord — Admin Bianco Esthétique',
};

interface StatCardProps {
  label: string;
  value: string;
  sub: string;
  icon: React.ReactNode;
  accent?: boolean;
}

function StatCard({ label, value, sub, icon, accent }: StatCardProps) {
  return (
    <div className={`bg-white rounded-2xl border p-6 flex flex-col gap-3 ${accent ? 'border-primary/30' : 'border-gray-100'}`}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold montserrat tracking-widest uppercase text-gray-400">{label}</span>
        <span className={`w-9 h-9 rounded-xl flex items-center justify-center ${accent ? 'bg-primary/10 text-primary' : 'bg-surface text-gray-400'}`}>
          {icon}
        </span>
      </div>
      <p className="text-3xl font-bold text-dark serif">{value}</p>
      <p className="text-xs text-gray-400">{sub}</p>
    </div>
  );
}

const MODULES = [
  {
    href: '/contenu',
    title: 'Contenu du site',
    desc: 'Modifier les textes et images des pages du site sans toucher au code.',
    status: 'À configurer',
    statusColor: 'text-amber-500 bg-amber-50',
  },
  {
    href: '/pages',
    title: 'Pages dynamiques',
    desc: 'Créer des landing pages SEO avec slug auto-généré et JSON-LD.',
    status: 'À configurer',
    statusColor: 'text-amber-500 bg-amber-50',
  },
  {
    href: '/newsletter',
    title: 'Newsletter',
    desc: 'Gérer les abonnés et envoyer des campagnes email via Resend.',
    status: 'À configurer',
    statusColor: 'text-amber-500 bg-amber-50',
  },
  {
    href: '/avis',
    title: 'Avis Google',
    desc: 'Envoyer une demande d\'avis automatique après chaque visite.',
    status: 'À configurer',
    statusColor: 'text-amber-500 bg-amber-50',
  },
];

export default function DashboardPage() {
  return (
    <div className="px-8 py-10 max-w-6xl mx-auto space-y-10">

      {/* En-tête */}
      <div>
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary montserrat mb-2">
          Bienvenue
        </p>
        <h1 className="text-3xl serif text-dark">Tableau de bord</h1>
        <p className="text-sm text-gray-400 mt-1">Institut Bianco Esthétique — Hyères</p>
      </div>

      {/* Stat cards */}
      <section>
        <h2 className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 montserrat mb-4">
          Aperçu
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            label="Visiteurs"
            value="—"
            sub="Connecter Vercel Analytics"
            accent
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
          />
          <StatCard
            label="Pages indexées"
            value="37"
            sub="URLs dans le sitemap"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
          />
          <StatCard
            label="Abonnés"
            value="—"
            sub="Connecter Resend"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
          />
          <StatCard
            label="Avis Google"
            value="—"
            sub="Configurer GOOGLE_PLACE_ID"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            }
          />
        </div>
      </section>

      {/* Modules */}
      <section>
        <h2 className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 montserrat mb-4">
          Modules disponibles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {MODULES.map(({ href, title, desc, status, statusColor }) => (
            <a
              key={href}
              href={href}
              className="group bg-white rounded-2xl border border-gray-100 p-6 hover:border-primary/30 hover:shadow-md transition-all flex flex-col gap-3"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold text-dark group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <span className={`shrink-0 text-[10px] font-bold px-2 py-1 rounded-full montserrat tracking-wider uppercase ${statusColor}`}>
                  {status}
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              <div className="flex items-center gap-1 text-xs text-primary font-semibold mt-1">
                Configurer
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Checklist dépendances */}
      <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
        <h2 className="text-sm font-bold text-amber-800 mb-3 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          Dépendances à installer avant d&apos;activer les modules
        </h2>
        <ul className="space-y-2 text-sm text-amber-700">
          {[
            { done: false, text: 'next-auth ou @supabase/ssr — Auth guard admin' },
            { done: false, text: 'prisma + @prisma/client — Base de données' },
            { done: false, text: 'resend — Envoi email (newsletter + avis Google)' },
            { done: false, text: '@tiptap/react — Éditeur de contenu WYSIWYG' },
            { done: false, text: '@vercel/analytics — Stats visiteurs' },
          ].map(({ done, text }) => (
            <li key={text} className="flex items-center gap-2">
              <span className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ${done ? 'bg-green-500' : 'border-2 border-amber-400'}`}>
                {done && (
                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 12 12">
                    <path d="M3.72 9.75L.97 7l1.06-1.06 1.69 1.69 4.25-4.25L9.03 4.44 3.72 9.75z" />
                  </svg>
                )}
              </span>
              <code className="text-xs bg-amber-100 px-1.5 py-0.5 rounded">{text}</code>
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
}
