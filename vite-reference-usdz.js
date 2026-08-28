import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const refDir = path.join(root, 'references', 'usdz');

/** Serve and copy Blender reference USDZ files for iOS Quick Look. */
export function referenceUsdzPlugin() {
  return {
    name: 'reference-usdz-static',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const reqPath = req.url?.split('?')[0] || '';
        const match = reqPath.match(/\/references\/usdz\/([A-Za-z0-9_-]+\.usdz)$/);
        if (!match) return next();
        const file = path.join(refDir, match[1]);
        if (!fs.existsSync(file)) return next();
        res.setHeader('Content-Type', 'model/vnd.usdz+zip');
        res.setHeader('Cache-Control', 'public, max-age=3600');
        fs.createReadStream(file).pipe(res);
      });
    },
    closeBundle() {
      const outDir = path.join(root, 'docs', 'references', 'usdz');
      if (!fs.existsSync(refDir)) return;
      fs.mkdirSync(outDir, { recursive: true });
      for (const name of fs.readdirSync(refDir)) {
        if (!name.endsWith('.usdz') || name.startsWith('_')) continue;
        fs.copyFileSync(path.join(refDir, name), path.join(outDir, name));
      }
    }
  };
}
