import type { VercelRequest, VercelResponse } from '@vercel/node';
import bcrypt from 'bcryptjs';
import { requireAuth } from './lib/auth.js';
import { readJson, writeJson } from './lib/storage.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!requireAuth(req, res)) return;

  if (req.method === 'GET') {
    const config = await readJson<any>('config.json');
    if (!config) return res.json({});
    const { admin_password_hash, ...safe } = config;
    return res.json(safe);
  }

  if (req.method === 'PUT') {
    const config = await readJson<any>('config.json') || {};
    const body = req.body;

    if (body.site_url !== undefined) config.site_url = body.site_url.replace(/\/$/, '');
    if (body.site_name !== undefined) config.site_name = body.site_name;
    if (body.site_description !== undefined) config.site_description = body.site_description;
    if (body.new_password) {
      config.admin_password_hash = await bcrypt.hash(body.new_password, 10);
    }

    await writeJson('config.json', config);
    const { admin_password_hash, ...safe } = config;
    return res.json(safe);
  }

  return res.status(405).json({ error: 'Methode non autorisee' });
}
