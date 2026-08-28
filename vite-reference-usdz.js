import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const refDir = path.join(root, 'references', 'usdz');

/** Dev server only — reference USDZ files are not deployed for Quick Look. */
export function referenceUsdzDevPlugin() {
  return {
    name: 'reference-usdz-dev-only',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const reqPath = req.url?.split('?')[0] || '';
        const match = reqPath.match(/\/references\/usdz\/([A-Za-z0-9_-]+\.usdz)$/);
        if (!match) return next();
        const file = path.join(refDir, match[1]);
        if (!fs.existsSync(file)) return next();
        res.setHeader('Content-Type', 'model/vnd.usdz+zip');
        fs.createReadStream(file).pipe(res);
      });
    }
  };
}
