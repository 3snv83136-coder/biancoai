import { put, list, del } from '@vercel/blob';

const PREFIX = 'data/';

export async function readJson<T = any>(filename: string): Promise<T | null> {
  try {
    const { blobs } = await list({ prefix: PREFIX + filename });
    if (blobs.length === 0) return null;
    const res = await fetch(blobs[0].url);
    return await res.json();
  } catch {
    return null;
  }
}

export async function writeJson(filename: string, data: any): Promise<void> {
  // Delete existing blob first
  const { blobs } = await list({ prefix: PREFIX + filename });
  for (const blob of blobs) {
    await del(blob.url);
  }
  // Write new blob
  await put(PREFIX + filename, JSON.stringify(data, null, 2), {
    access: 'public',
    contentType: 'application/json',
    addRandomSuffix: false,
  });
}

export async function uploadImage(file: Buffer, filename: string): Promise<string> {
  const blob = await put('uploads/blog/' + filename, file, {
    access: 'public',
    contentType: 'image/webp',
    addRandomSuffix: false,
  });
  return blob.url;
}

export async function deleteImage(filename: string): Promise<void> {
  const { blobs } = await list({ prefix: 'uploads/blog/' + filename });
  for (const blob of blobs) {
    await del(blob.url);
  }
}

// Initialize default data if not present
export async function ensureDefaults(): Promise<void> {
  const config = await readJson('config.json');
  if (!config) {
    await writeJson('config.json', {
      site_url: 'https://www.bianco-esthetique.fr',
      site_name: 'Bianco Esthetique',
      site_description: 'Institut de beaute a Hyeres',
      admin_username: 'admin',
      admin_password_hash: '$2b$10$lkVGz0vprgGuUhyEoJbDTOdgVay5rQwAoD3fxpVlSmZUBDivg3Q7i',
    });
  }
  const posts = await readJson('posts.json');
  if (!posts) await writeJson('posts.json', { posts: [] });
  const prices = await readJson('prices.json');
  if (!prices) await writeJson('prices.json', { updated_at: new Date().toISOString(), sections: [] });
  const pages = await readJson('pages.json');
  if (!pages) await writeJson('pages.json', { pages: [] });
}
