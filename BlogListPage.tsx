import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Breadcrumb from './components/Breadcrumb';
import { blogPosts } from './blogData';

interface ApiPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  tags: string[];
  images: { file: string; url?: string; caption?: string }[];
}

const BlogListPage: React.FC = () => {
  const [apiPosts, setApiPosts] = useState<ApiPost[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch('/api/posts')
      .then(r => r.json())
      .then(d => setApiPosts(d?.posts || []))
      .catch(() => {});
  }, []);

  useEffect(() => {
    const prevTitle = document.title;
    const prevDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '';
    document.title = 'Blog | Bianco Esthétique – Conseils beauté & bien-être à Hyères';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Découvrez les conseils beauté et bien-être de Bianco Esthétique à Hyères : head spa, drainage lymphatique, extensions de cils, soins visage et beauté des pieds.'
      );
    }

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Blog',
          name: 'Blog — Bianco Esthétique',
          url: 'https://www.bianco-esthetique.fr/blog',
          publisher: { '@type': 'Organization', name: 'Bianco Esthétique', url: 'https://www.bianco-esthetique.fr' },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.bianco-esthetique.fr' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.bianco-esthetique.fr/blog' },
          ],
        },
      ],
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
  }, []);

  return (
    <div className="min-h-screen bg-surface">
      <Navbar onLinkClick={() => {}} />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb items={[
            { label: 'Accueil', to: '/' },
            { label: 'Blog' },
          ]} />

          <h1 className="text-4xl md:text-5xl serif text-dark mb-4">Le journal Bianco</h1>
          <p className="text-gray-500 font-light mb-12 max-w-2xl">
            Articles courts, concrets et inspirés de la cabine pour mieux comprendre nos soins à Hyères et prolonger leurs bienfaits au
            quotidien.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Articles depuis l'API (admin) */}
            {apiPosts.map((post) => {
              const coverUrl = post.images?.[0]?.url || '';
              return (
                <article
                  key={post.id}
                  className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
                >
                  {coverUrl && (
                    <Link to={`/blog/${post.slug || post.id}`} className="block overflow-hidden">
                      <img
                        src={coverUrl}
                        alt={post.title}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        width={400}
                        height={192}
                      />
                    </Link>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
                      {new Date(post.date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </p>
                    <Link to={`/blog/${post.slug || post.id}`} className="block mb-3">
                      <h2 className="text-xl serif text-dark leading-snug hover:text-primary transition-colors">{post.title}</h2>
                    </Link>
                    <p className="text-sm text-gray-500 font-light mb-4 flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {(post.tags || []).slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-2 py-1 rounded-full bg-primary/5 text-primary font-semibold uppercase tracking-widest"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={`/blog/${post.slug || post.id}`}
                        className="text-xs font-bold uppercase tracking-widest text-dark hover:text-primary border-b border-dark/20 hover:border-primary transition-colors"
                      >
                        Lire
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}

            {/* Articles statiques (blogData.ts) */}
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <Link to={`/blog/${post.slug}`} className="block overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={400}
                    height={192}
                  />
                </Link>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
                    {new Date(post.date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })} ·{' '}
                    {post.readingTime}
                  </p>
                  <Link to={`/blog/${post.slug}`} className="block mb-3">
                    <h2 className="text-xl serif text-dark leading-snug hover:text-primary transition-colors">{post.title}</h2>
                  </Link>
                  <p className="text-sm text-gray-500 font-light mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-1 rounded-full bg-primary/5 text-primary font-semibold uppercase tracking-widest"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-xs font-bold uppercase tracking-widest text-dark hover:text-primary border-b border-dark/20 hover:border-primary transition-colors"
                    >
                      Lire
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogListPage;
