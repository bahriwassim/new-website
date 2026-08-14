import { readFile } from 'node:fs/promises';
import path from 'node:path';

const mime = {'.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.avif':'image/avif','.svg':'image/svg+xml','.pdf':'application/pdf'};
export async function GET(_, { params }) {
  const { path: parts } = await params;
  const root = process.cwd();
  const target = path.resolve(root, ...parts);
  if (!target.startsWith(root + path.sep)) return new Response('Not found', { status: 404 });
  try { const body = await readFile(target); return new Response(body, { headers: {'Content-Type': mime[path.extname(target).toLowerCase()] || 'application/octet-stream','Cache-Control':'public, max-age=31536000, immutable'} }); }
  catch { return new Response('Not found', { status: 404 }); }
}
