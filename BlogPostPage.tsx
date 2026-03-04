import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { blogPosts } from './blogData';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!post) return;

    const prevTitle = document.title;
    const prevDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '';
    document.title = post.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', post.metaDescription);

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.metaDescription,
      datePublished: post.date,
      image: post.coverImage,
      author: {
        '@type': 'Person',
        name: 'Bianco Esthétique',
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': window.location.href,
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.title = prevTitle;
      const m = document.querySelector('meta[name="description"]');
      if (m && prevDesc) m.setAttribute('content', prevDesc);
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [post]);

  if (!post) {
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
                <span
                  key={tag}
                  className="text-[10px] px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold uppercase tracking-widest"
                >
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

