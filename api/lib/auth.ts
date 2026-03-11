import type { VercelRequest, VercelResponse } from '@vercel/node';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { readJson } from './storage.js';

const JWT_SECRET = process.env.ADMIN_JWT_SECRET || 'bianco-admin-secret-change-me';

export function signToken(username: string): string {
  return jwt.sign({ username }, JWT_SECRET, { expiresIn: '24h' });
}

export function verifyToken(token: string): { username: string } | null {
  try {
    return jwt.verify(token, JWT_SECRET) as { username: string };
  } catch {
    return null;
  }
}

export async function verifyPassword(password: string): Promise<boolean> {
  const config = await readJson<any>('config.json');
  if (!config?.admin_password_hash) return false;
  return bcrypt.compare(password, config.admin_password_hash);
}

export function requireAuth(req: VercelRequest, res: VercelResponse): boolean {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Non autorise' });
    return false;
  }
  const token = authHeader.slice(7);
  const payload = verifyToken(token);
  if (!payload) {
    res.status(401).json({ error: 'Token invalide ou expire' });
    return false;
  }
  return true;
}
