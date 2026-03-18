import type { VercelRequest, VercelResponse } from '@vercel/node';
import { requireAuth } from './lib/auth.js';
import { readJson, writeJson, deleteImage } from './lib/storage.js';

function slugify(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // GET: public (for blog display) or admin
  if (req.method === 'GET') {
    const data = await readJson<any>('posts.json');
    const posts = data?.posts || [];
    const { id, slug } = req.query;
    if (id) {
      const post = posts.find((p: any) => p.id === id);
      return post ? res.json(post) : res.status(404).json({ error: 'Article introuvable' });
    }
    if (slug) {
      const post = posts.find((p: any) => p.slug === slug);
      return post ? res.json(post) : res.status(404).json({ error: 'Article introuvable' });
    }
    return res.json({ posts });
  }

  if (!requireAuth(req, res)) return;

  if (req.method === 'POST') {
    const data = await readJson<any>('posts.json') || { posts: [] };
    const posts = data.posts || [];
    const body = req.body;
    const slug = slugify(body.title);

    const newPost = {
      id: slug + '-' + Date.now(),
      title: body.title,
      slug,
      excerpt: body.excerpt || '',
      content: body.content || '',
      tags: Array.isArray(body.tags) ? body.tags : (body.tags || '').split(',').map((t: string) => t.trim()).filter(Boolean),
      images: body.images || [],
      meta_desc: body.meta_desc || '',
      date: body.date || new Date().toISOString().slice(0, 10),
    };

    posts.push(newPost);
    await writeJson('posts.json', { posts });
    return res.status(201).json(newPost);
  }

  if (req.method === 'PUT') {
    const { id } = req.query;
    if (!id) return res.status(400).json({ error: 'ID requis' });

    const data = await readJson<any>('posts.json') || { posts: [] };
    const posts = data.posts || [];
    const index = posts.findIndex((p: any) => p.id === id);
    if (index === -1) return res.status(404).json({ error: 'Article introuvable' });

    const body = req.body;
    posts[index] = {
      ...posts[index],
      title: body.title ?? posts[index].title,
      slug: body.title ? slugify(body.title) : posts[index].slug,
      excerpt: body.excerpt ?? posts[index].excerpt,
      content: body.content ?? posts[index].content,
      tags: body.tags !== undefined
        ? (Array.isArray(body.tags) ? body.tags : (body.tags || '').split(',').map((t: string) => t.trim()).filter(Boolean))
        : posts[index].tags,
      images: body.images ?? posts[index].images,
      meta_desc: body.meta_desc ?? posts[index].meta_desc,
      date: body.date ?? posts[index].date,
    };

    await writeJson('posts.json', { posts });
    return res.json(posts[index]);
  }

  if (req.method === 'DELETE') {
    const { id } = req.query;
    if (!id) return res.status(400).json({ error: 'ID requis' });

    const data = await readJson<any>('posts.json') || { posts: [] };
    const post = data.posts.find((p: any) => p.id === id);
    if (post?.images) {
      for (const img of post.images) {
        await deleteImage(img.file);
      }
    }
    data.posts = data.posts.filter((p: any) => p.id !== id);
    await writeJson('posts.json', data);
    return res.json({ success: true });
  }

  return res.status(405).json({ error: 'Methode non autorisee' });
}
