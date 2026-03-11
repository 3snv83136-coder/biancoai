import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { blogPosts } from './blogData';

interface ApiPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  meta_desc: string;
  images: { file: string; url?: string; caption?: string }[];
}

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const staticPost = blogPosts.find((p) => p.slug === slug);
  const [apiPost, setApiPost] = useState<ApiPost | null>(null);
  const [loading, setLoading] = useState(!staticPost);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Si pas d'article statique, chercher dans l'API
  useEffect(() => {
    if (staticPost) return;
    setLoading(true);
    fetch(`/api/posts?id=${encodeURIComponent(slug || '')}`)
      .then(r => r.json())
      .then(d => {
        if (d && !d.error) setApiPost(d);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug, staticPost]);

  useEffect(() => {
    if (!staticPost) return;
    const prevTitle = document.title;
    const prevDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '';
    document.title = staticPost.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', staticPost.metaDescription);

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: staticPost.title,
      description: staticPost.metaDescription,
      datePublished: staticPost.date,
      image: staticPost.coverImage,
      author: { '@type': 'Person', name: 'Bianco Esthétique' },
      mainEntityOfPage: { '@type': 'WebPage', '@id': window.location.href },
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.title = prevTitle;
      const m = document.querySelector('meta[name="description"]');
      if (m && prevDesc) m.setAttribute('content', prevDesc);
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, [staticPost]);

  // Meta tags pour articles API
  useEffect(() => {
    if (!apiPost) return;
    const prevTitle = document.title;
    const prevDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '';
    document.title = apiPost.title + ' | Bianco Esthétique';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', apiPost.meta_desc || apiPost.excerpt);

    return () => {
      document.title = prevTitle;
      const m = document.querySelector('meta[name="description"]');
      if (m && prevDesc) m.setAttribute('content', prevDesc);
    };
  }, [apiPost]);

  if (loading) {
    return (
      <div className="min-h-screen bg-surface">
        <Navbar onLinkClick={() => {}} />
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-3xl mx-auto text-center text-gray-500">Chargement...</div>
        </section>
        <Footer />
      </div>
    );
  }

  // Article pas trouve
  if (!staticPost && !apiPost) {
    return (
      <div className="min-h-screen bg-surface">
        <Navbar onLinkClick={() => {}} />
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl serif mb-4">Article introuvable</h1>
            <p className="text-gray-500 mb-8">L&apos;article que vous cherchez n&apos;existe plus ou a changé d&apos;adresse.</p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs px-5 py-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all"
            >
              Retour au blog
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  // === Rendu article API ===
  if (apiPost) {
    const coverUrl = apiPost.images?.[0]?.url || '';
    return (
      <div className="min-h-screen bg-surface">
        <Navbar onLinkClick={() => {}} />
        <article className="pt-28 md:pt-32 pb-20">
          <div className="max-w-5xl mx-auto px-6">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-8 px-5 py-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour au blog
            </Link>

            <div className="mb-10">
              <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
                {new Date(apiPost.date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })}
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl serif text-dark mb-4">{apiPost.title}</h1>
              <div className="flex flex-wrap gap-2">
                {(apiPost.tags || []).map((tag) => (
                  <span key={tag} className="text-[10px] px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {coverUrl && (
              <div className="rounded-[2rem] overflow-hidden mb-10 shadow-2xl border border-white">
                <img src={coverUrl} alt={apiPost.title} className="w-full h-72 md:h-96 object-cover" loading="lazy" />
              </div>
            )}

            {/* Images supplementaires */}
            {apiPost.images?.slice(1).map((img, i) => (
              <figure key={i} className="my-8 text-center">
                <img src={img.url || ''} alt={img.caption || ''} className="max-w-full h-auto rounded-2xl mx-auto" loading="lazy" />
                {img.caption && <figcaption className="text-gray-400 text-sm mt-2">{img.caption}</figcaption>}
              </figure>
            ))}

            <div
              className="space-y-6 text-gray-600 font-light leading-relaxed text-sm md:text-base prose max-w-none"
              dangerouslySetInnerHTML={{ __html: apiPost.content }}
            />
          </div>
        </article>
        <Footer />
      </div>
    );
  }

  // === Rendu article statique ===
  const post = staticPost!;
  return (
    <div className="min-h-screen bg-surface">
      <Navbar onLinkClick={() => {}} />
      <article className="pt-28 md:pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-8 px-5 py-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour au blog
          </Link>

          <div className="mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
              {new Date(post.date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })} ·{' '}
              {post.readingTime}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl serif text-dark mb-4">{post.title}</h1>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="text-[10px] px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] overflow-hidden mb-10 shadow-2xl border border-white">
            <img src={post.coverImage} alt={post.title} className="w-full h-72 md:h-96 object-cover" loading="lazy" />
          </div>

          <div className="space-y-8 text-gray-600 font-light leading-relaxed text-sm md:text-base">
            {post.content.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl md:text-2xl serif text-dark mb-3">{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
