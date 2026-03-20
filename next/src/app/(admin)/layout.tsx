import type { Metadata } from 'next';
import Sidebar from '@/components/admin/Sidebar';

export const metadata: Metadata = {
  title: 'Administration — Bianco Esthétique',
  robots: { index: false, follow: false },
};

/**
 * Layout admin — couvre l'intégralité de l'écran (fixed inset-0) pour
 * ne pas hériter du Footer du RootLayout, sans le modifier.
 *
 * ⚠️ AUTH GUARD : non implémenté (NextAuth/Supabase non installés).
 * Étape suivante : installer next-auth ou @supabase/ssr, puis ajouter
 * un guard ici ou dans middleware.ts.
 */
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 flex bg-surface overflow-hidden z-50">
      <Sidebar />

      {/* Zone principale */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="shrink-0 h-16 bg-white border-b border-gray-100 flex items-center justify-between px-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs text-gray-400 montserrat tracking-widest uppercase font-medium">
              Administration
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-400">Salomé</span>
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-primary text-xs font-bold serif">S</span>
            </div>
          </div>
        </header>

        {/* Contenu scrollable */}
        <main className="flex-1 overflow-y-auto bg-surface">
          {children}
        </main>
      </div>
    </div>
  );
}
