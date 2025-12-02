import express from 'express';
import { createServer as createViteServer } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function createServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  // Create Vite server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });

  // Use vite's connect instance as middleware
  app.use(vite.middlewares);

  // Serve static files from dist
  app.use(express.static('dist'));

  // Handle SPA fallback - return index.html for all routes
  app.get('*', async (req, res, next) => {
    try {
      const url = req.originalUrl;
      let template = '';
      
      // Always read fresh template in development
      template = await vite.transformIndexHtml(
        url,
        `<!DOCTYPE html>
        <html lang="es">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>ForcesGym - Tu gimnasio en Pacasmayo</title>
            <meta name="description" content="ForcesGym en Pacasmayo. Clases de funcional, musculación, fullbody y más. ¡Transforma tu cuerpo y mente con nosotros!" />
          </head>
          <body>
            <div id="app"></div>
            <script type="module" src="/src/main.ts"></script>
          </body>
        </html>`
      );
      
      res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
    } catch (e) {
      // If an error is caught, let Vite fix the stack trace so it maps back to
      // your actual source code.
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
}

createServer().catch(console.error);
