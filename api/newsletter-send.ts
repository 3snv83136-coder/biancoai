import type { VercelRequest, VercelResponse } from '@vercel/node';
import { readJson } from './lib/storage';
import { requireAuth } from './lib/auth';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const authErr = requireAuth(req);
  if (authErr) return res.status(401).json({ error: authErr });

  const { subject, html } = req.body || {};
  if (!subject || !html) return res.status(400).json({ error: 'subject et html requis' });

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const FROM_EMAIL = process.env.NEWSLETTER_FROM || 'Bianco Esthétique <newsletter@bianco-esthetique.fr>';

  if (!RESEND_API_KEY) {
    return res.status(500).json({ error: 'RESEND_API_KEY non configure' });
  }

  const data = (await readJson<{ subscribers: any[] }>('newsletter.json')) || { subscribers: [] };
  const active = data.subscribers.filter((s: any) => s.active);

  if (active.length === 0) {
    return res.status(400).json({ error: 'Aucun abonne actif' });
  }

  const results = { sent: 0, failed: 0, errors: [] as string[] };

  // Send in batches of 50 (Resend rate limit)
  const batchSize = 50;
  for (let i = 0; i < active.length; i += batchSize) {
    const batch = active.slice(i, i + batchSize);
    const to = batch.map((s: any) => s.email);

    try {
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({ from: FROM_EMAIL, to, subject, html }),
      });
      const resData = await r.json();
      if (r.ok) {
        results.sent += batch.length;
      } else {
        results.failed += batch.length;
        results.errors.push((resData as any).message || 'Erreur Resend');
      }
    } catch (err: any) {
      results.failed += batch.length;
      results.errors.push(err.message || 'Erreur reseau');
    }
  }

  return res.status(200).json({ ok: true, ...results });
}
