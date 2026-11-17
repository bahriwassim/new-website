import { access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicMedia = path.join(projectRoot, 'public', 'media');

// Media is versioned in public/media; builds should use the checked-in files
// directly instead of copying large assets from local source folders.
await access(publicMedia);
