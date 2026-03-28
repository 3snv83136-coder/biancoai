import { useState, useEffect } from 'react';

interface PageOverride {
  h1?: string;
  subtitle?: string;
  meta_title?: string;
  description?: string;
  sections?: { heading: string; body: string }[];
  images?: { file: string; url?: string; caption?: string }[];
  faq?: { q: string; a: string }[];
}

let cachedPages: any[] | null = null;

export function usePageOverrides(url: string): PageOverride | null {
  const [override, setOverride] = useState<PageOverride | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        if (!cachedPages) {
          const res = await fetch('/api/pages');
          const data = await res.json();
          cachedPages = data?.pages || [];
        }
        const match = cachedPages!.find((p: any) => p.url === url);
        if (match && hasEdits(match)) {
          setOverride(match);
        }
      } catch {
        // silently ignore — use hardcoded content
      }
    };
    load();
  }, [url]);

  return override;
}

// Only return override if the user actually edited something beyond defaults
function hasEdits(page: any): boolean {
  return !!(
    page.h1 ||
    page.subtitle ||
    page.meta_title ||
    (page.sections && page.sections.length > 0 && page.sections.some((s: any) => s.heading || s.body)) ||
    (page.images && page.images.length > 0) ||
    (page.faq && page.faq.length > 0)
  );
}
