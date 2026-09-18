import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

if (fs.existsSync(distDir)) {
  const indexHtmlPath = path.join(distDir, 'index.html');
  
  if (fs.existsSync(indexHtmlPath)) {
    const indexHtmlContent = fs.readFileSync(indexHtmlPath, 'utf8');

    // 1. Create static fallback files for static hosting (Vercel, Netlify, Cloudflare, GitHub Pages)
    const routes = ['direito-previdenciario', 'direito-publico'];

    routes.forEach((route) => {
      // Create /route/index.html
      const subDir = path.join(distDir, route);
      if (!fs.existsSync(subDir)) {
        fs.mkdirSync(subDir, { recursive: true });
      }
      fs.writeFileSync(path.join(subDir, 'index.html'), indexHtmlContent);

      // Create /route.html
      fs.writeFileSync(path.join(distDir, `${route}.html`), indexHtmlContent);
    });

    // 2. 404.html fallback for SPAs on static web hosts
    fs.writeFileSync(path.join(distDir, '404.html'), indexHtmlContent);

    // 3. Netlify _redirects rule
    fs.writeFileSync(path.join(distDir, '_redirects'), '/* /index.html 200\n');

    // 4. Ensure vercel.json is in dist as well as root
    const vercelConfig = JSON.stringify(
      {
        rewrites: [
          {
            source: '/(.*)',
            destination: '/index.html',
          },
        ],
      },
      null,
      2
    );
    fs.writeFileSync(path.join(distDir, 'vercel.json'), vercelConfig);

    console.log('✅ Post-build: generated multi-route static fallbacks and vercel.json successfully.');
  }
}
