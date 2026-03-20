import type { VercelRequest, VercelResponse } from '@vercel/node';
import { readJson, writeJson } from './lib/storage';
import { verifyToken } from './lib/auth';

interface PageView {
  path: string;
  ts: number; // unix timestamp ms
}

interface AnalyticsData {
  views: PageView[];
}

const MAX_VIEWS = 50000;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'POST') {
    // Public endpoint — record a page view (no auth needed)
    const { path } = req.body || {};
    if (!path || typeof path !== 'string') return res.status(400).json({ error: 'path required' });

    const data: AnalyticsData = (await readJson<AnalyticsData>('analytics.json')) || { views: [] };
    data.views.push({ path: path.slice(0, 200), ts: Date.now() });

    // Keep only last MAX_VIEWS entries to avoid blob bloat
    if (data.views.length > MAX_VIEWS) {
      data.views = data.views.slice(data.views.length - MAX_VIEWS);
    }

    await writeJson('analytics.json', data);
    return res.status(200).json({ ok: true });
  }

  if (req.method === 'GET') {
    // Protected — requires auth
    const auth = req.headers.authorization;
    if (!auth) return res.status(401).json({ error: 'Non autorise' });
    const token = auth.replace('Bearer ', '');
    const payload = verifyToken(token);
    if (!payload) return res.status(401).json({ error: 'Token invalide' });

    const data: AnalyticsData = (await readJson<AnalyticsData>('analytics.json')) || { views: [] };
    const now = Date.now();
    const DAY = 86400000;

    // Aggregate: today, last 7 days, last 30 days
    const today = data.views.filter(v => v.ts > now - DAY).length;
    const week = data.views.filter(v => v.ts > now - 7 * DAY).length;
    const month = data.views.filter(v => v.ts > now - 30 * DAY).length;
    const total = data.views.length;

    // Build daily chart for last 30 days
    const dailyMap: Record<string, number> = {};
    for (let d = 0; d < 30; d++) {
      const date = new Date(now - d * DAY);
      const key = date.toISOString().slice(0, 10);
      dailyMap[key] = 0;
    }
    for (const v of data.views) {
      if (v.ts > now - 30 * DAY) {
        const key = new Date(v.ts).toISOString().slice(0, 10);
        if (key in dailyMap) dailyMap[key]++;
      }
    }
    const daily = Object.entries(dailyMap)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([date, count]) => ({ date, count }));

    // Top pages (last 30 days)
    const pageMap: Record<string, number> = {};
    for (const v of data.views) {
      if (v.ts > now - 30 * DAY) {
        pageMap[v.path] = (pageMap[v.path] || 0) + 1;
      }
    }
    const topPages = Object.entries(pageMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([path, count]) => ({ path, count }));

    return res.status(200).json({ today, week, month, total, daily, topPages });
  }

  res.status(405).json({ error: 'Method not allowed' });
}
