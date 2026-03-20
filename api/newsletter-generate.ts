import type { VercelRequest, VercelResponse } from '@vercel/node';
import { requireAuth } from './lib/auth';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const authErr = requireAuth(req);
  if (authErr) return res.status(401).json({ error: authErr });

  const { topic, tone } = req.body || {};
  if (!topic) return res.status(400).json({ error: 'topic requis' });

  const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
  if (!ANTHROPIC_API_KEY) {
    return res.status(500).json({ error: 'ANTHROPIC_API_KEY non configure' });
  }

  const prompt = `Tu es Salomé Bianco, esthéticienne à Hyères (Var). Tu écris une newsletter pour tes clientes.

Sujet demandé : ${topic}
Ton souhaité : ${tone || 'chaleureux et professionnel'}

Génère une newsletter complète en HTML (pas de balises html/head/body — juste le contenu intérieur). La newsletter doit :
- Commencer par un titre accrocheur en <h2>
- Avoir 2-3 paragraphes de contenu pertinent avec le sujet, personnalisé pour un institut de beauté à Hyères
- Inclure un appel à l'action (RDV sur Planity ou appel au 07 49 96 76 91)
- Terminer par une signature de Salomé
- Être en français, ton naturel et humain
- Utiliser des balises <p>, <strong>, <a href="..."> appropriées
- Lien Planity : https://www.planity.com/bianco-esthetique-83400-hyeres

Génère uniquement le HTML, sans commentaires ni explications.`;

  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1500,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    const data = await r.json() as any;
    if (!r.ok) {
      return res.status(500).json({ error: data.error?.message || 'Erreur Claude API' });
    }

    const html = data.content?.[0]?.text || '';
    const subject = `Newsletter Bianco — ${topic}`;

    return res.status(200).json({ ok: true, html, subject });
  } catch (err: any) {
    return res.status(500).json({ error: err.message || 'Erreur interne' });
  }
}
