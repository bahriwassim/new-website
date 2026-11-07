import { cp, mkdir, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const destination = path.join(root, 'public', 'media');
const directories = [
  'COUTEAUX',
  'DRY EYE',
  'EXPLORATION',
  'IMPLANTS',
  'microscope leica',
  'produits',
  'PRODUITS TAMPONEMENTS',
  'logo-fabricant',
  'site-media'
];
const extensions = new Set(['.avif', '.jpeg', '.jpg', '.mp4', '.pdf', '.png', '.svg', '.webm', '.webp']);

async function copyMedia(source, relative = '') {
  for (const entry of await readdir(source, { withFileTypes: true })) {
    const sourcePath = path.join(source, entry.name);
    const childRelative = path.join(relative, entry.name);
    if (entry.isDirectory()) {
      await copyMedia(sourcePath, childRelative);
    } else if (entry.isFile() && extensions.has(path.extname(entry.name).toLowerCase())) {
      const targetPath = path.join(destination, childRelative);
      await mkdir(path.dirname(targetPath), { recursive: true });
      await cp(sourcePath, targetPath);
    }
  }
}

await mkdir(destination, { recursive: true });
for (const directory of directories) {
  const source = path.join(root, directory);
  try {
    if ((await stat(source)).isDirectory()) await copyMedia(source, directory);
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
}

const logo = 'cropped-logo-retina-final-freedom-medical-ophtalmologies (1).png';
await cp(path.join(root, logo), path.join(destination, logo));
