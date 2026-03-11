import type { VercelRequest, VercelResponse } from '@vercel/node';
import bcrypt from 'bcryptjs';
import { signToken } from './lib/auth.js';
import { readJson, ensureDefaults } from './lib/storage.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Methode non autorisee' });
  }

  try {
    await ensureDefaults();

    const { password } = req.body || {};
    if (!password) {
      return res.status(400).json({ error: 'Mot de passe requis' });
    }

    const config = await readJson<any>('config.json');
    if (!config?.admin_password_hash) {
      return res.status(500).json({ error: 'Configuration admin manquante - verifiez Vercel Blob' });
    }

    const valid = await bcrypt.compare(password, config.admin_password_hash);
    if (!valid) {
      return res.status(401).json({ error: 'Mot de passe incorrect' });
    }

    const token = signToken('admin');
    return res.status(200).json({ token });
  } catch (err: any) {
    return res.status(500).json({ error: 'Erreur serveur : ' + (err?.message || 'inconnue') });
  }
}
