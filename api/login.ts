import type { VercelRequest, VercelResponse } from '@vercel/node';
import { verifyPassword, signToken } from './lib/auth.js';
import { ensureDefaults } from './lib/storage.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Methode non autorisee' });
  }

  await ensureDefaults();

  const { password } = req.body || {};
  if (!password) {
    return res.status(400).json({ error: 'Mot de passe requis' });
  }

  const valid = await verifyPassword(password);
  if (!valid) {
    return res.status(401).json({ error: 'Mot de passe incorrect' });
  }

  const token = signToken('admin');
  return res.status(200).json({ token });
}
