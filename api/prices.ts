import type { VercelRequest, VercelResponse } from '@vercel/node';
import { requireAuth } from './lib/auth.js';
import { readJson, writeJson } from './lib/storage.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    const data = await readJson<any>('prices.json');
    return res.json(data || { updated_at: '', sections: [] });
  }

  if (req.method !== 'PUT') {
    return res.status(405).json({ error: 'Methode non autorisee' });
  }

  if (!requireAuth(req, res)) return;

  const { sections } = req.body;
  if (!Array.isArray(sections)) {
    return res.status(400).json({ error: 'Sections requises' });
  }

  const prices = {
    updated_at: new Date().toISOString(),
    sections,
  };

  await writeJson('prices.json', prices);
  return res.json(prices);
}
