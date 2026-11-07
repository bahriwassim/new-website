import { readFile } from 'node:fs/promises';
import path from 'node:path';

const mime = {'.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.avif':'image/avif','.svg':'image/svg+xml','.pdf':'application/pdf','.mp4':'video/mp4'};

export async function GET(request, { params }) {
  const { path: parts } = await params;
  const root = process.cwd();
  const target = path.resolve(root, ...parts);
  if (!target.startsWith(root + path.sep)) return new Response('Not found', { status: 404 });

  try {
    const body = await readFile(target);
    const type = mime[path.extname(target).toLowerCase()] || 'application/octet-stream';
    const headers = {
      'Content-Type': type,
      'Accept-Ranges': 'bytes',
      'Content-Disposition': `inline; filename*=UTF-8''${encodeURIComponent(path.basename(target))}`,
      'Cache-Control': 'public, max-age=31536000, immutable'
    };
    const range = request.headers.get('range');
    if (range && /^bytes=\d*-\d*$/.test(range)) {
      const [rawStart, rawEnd] = range.slice(6).split('-');
      const start = rawStart ? Number(rawStart) : Math.max(0, body.length - Number(rawEnd));
      const end = rawEnd && rawStart ? Math.min(Number(rawEnd), body.length - 1) : body.length - 1;
      if (start >= body.length || start > end) return new Response(null, { status: 416, headers: {'Content-Range': `bytes */${body.length}`} });
      const chunk = body.subarray(start, end + 1);
      headers['Content-Length'] = String(chunk.length);
      headers['Content-Range'] = `bytes ${start}-${end}/${body.length}`;
      return new Response(chunk, { status: 206, headers });
    }
    headers['Content-Length'] = String(body.length);
    return new Response(body, { headers });
  } catch {
    return new Response('Not found', { status: 404 });
  }
}
