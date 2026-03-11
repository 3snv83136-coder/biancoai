import type { VercelRequest, VercelResponse } from '@vercel/node';
import { requireAuth } from './lib/auth.js';
import { put } from '@vercel/blob';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Methode non autorisee' });
  }

  if (!requireAuth(req, res)) return;

  const filename = req.query.filename as string;
  if (!filename) {
    return res.status(400).json({ error: 'Nom de fichier requis' });
  }

  const blob = await put('uploads/blog/' + filename, req, {
    access: 'public',
    contentType: req.headers['content-type'] || 'image/webp',
    addRandomSuffix: false,
  });

  return res.json({ url: blob.url, file: filename });
}
