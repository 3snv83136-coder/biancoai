import type { VercelRequest, VercelResponse } from '@vercel/node';
import { requireAuth } from './lib/auth.js';
import { readJson, writeJson } from './lib/storage.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    const data = await readJson<any>('pages.json');
    return res.json(data || { pages: [] });
  }

  if (req.method !== 'PUT') {
    return res.status(405).json({ error: 'Methode non autorisee' });
  }

  if (!requireAuth(req, res)) return;

  const { pages } = req.body;
  if (!Array.isArray(pages)) {
    return res.status(400).json({ error: 'Pages requises' });
  }

  await writeJson('pages.json', { pages });
  return res.json({ pages });
}
