import type { VercelRequest, VercelResponse } from '@vercel/node';
import { readJson, writeJson } from './lib/storage';
import { requireAuth } from './lib/auth';

export interface Subscriber {
  id: string;
  email: string;
  name?: string;
  createdAt: string;
  active: boolean;
}

interface NewsletterData {
  subscribers: Subscriber[];
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const authErr = requireAuth(req);
  if (authErr) return res.status(401).json({ error: authErr });

  const getData = async (): Promise<NewsletterData> =>
    (await readJson<NewsletterData>('newsletter.json')) || { subscribers: [] };

  if (req.method === 'GET') {
    const data = await getData();
    return res.status(200).json(data);
  }

  if (req.method === 'POST') {
    const { email, name } = req.body || {};
    if (!email || !/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
      return res.status(400).json({ error: 'Email invalide' });
    }
    const data = await getData();
    if (data.subscribers.find(s => s.email.toLowerCase() === email.toLowerCase())) {
      return res.status(409).json({ error: 'Email deja inscrit' });
    }
    const subscriber: Subscriber = {
      id: Date.now().toString(),
      email: email.toLowerCase().trim(),
      name: name ? String(name).trim() : undefined,
      createdAt: new Date().toISOString(),
      active: true,
    };
    data.subscribers.push(subscriber);
    await writeJson('newsletter.json', data);
    return res.status(201).json({ ok: true, subscriber });
  }

  if (req.method === 'DELETE') {
    const id = req.query.id as string;
    if (!id) return res.status(400).json({ error: 'id required' });
    const data = await getData();
    data.subscribers = data.subscribers.filter(s => s.id !== id);
    await writeJson('newsletter.json', data);
    return res.status(200).json({ ok: true });
  }

  res.status(405).json({ error: 'Method not allowed' });
}
