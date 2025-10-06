import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DOMAIN = 'https://univers.run';

const routes = [
  { path: '/', priority: 0.8, changefreq: 'monthly' },
  { path: '/code-univers', priority: 0.9, changefreq: 'weekly' },
  { path: '/relativite-classique', priority: 0.8, changefreq: 'monthly' },
  { path: '/relativity', priority: 0.7, changefreq: 'monthly' },
  { path: '/relativite-generale', priority: 0.8, changefreq: 'monthly' },
  { path: '/relativite-echelles', priority: 1.0, changefreq: 'weekly' },

  { path: '/tissu-espace-temps-echelle/superposition', priority: 0.7, changefreq: 'monthly' },
  { path: '/tissu-espace-temps-echelle/tapis-roulant', priority: 0.7, changefreq: 'monthly' },

  { path: '/relativite-restreinte-echelles/budget-universel', priority: 0.7, changefreq: 'monthly' },
  { path: '/relativite-restreinte-echelles/pivot-temporel', priority: 0.7, changefreq: 'monthly' },
  { path: '/relativite-restreinte-echelles/tapis-roulant', priority: 0.7, changefreq: 'monthly' },
  { path: '/relativite-restreinte-echelles/immobile', priority: 0.7, changefreq: 'monthly' },
  { path: '/relativite-restreinte-echelles/vitesse-extreme', priority: 0.7, changefreq: 'monthly' },

  { path: '/relativite-generale-echelles/escalator-universel', priority: 0.7, changefreq: 'monthly' },
  { path: '/relativite-generale-echelles/environnements', priority: 0.7, changefreq: 'monthly' },
  { path: '/relativite-generale-echelles/effet-rayonnement', priority: 0.7, changefreq: 'monthly' },
  { path: '/relativite-generale-echelles/coefficient-multiplicateur', priority: 0.7, changefreq: 'monthly' },

  { path: '/relativite-echelles-final', priority: 0.8, changefreq: 'monthly' },

  { path: '/experiences-pensee-echelles/entree-musee', priority: 0.6, changefreq: 'monthly' },
  { path: '/experiences-pensee-echelles/premiere-piece', priority: 0.6, changefreq: 'monthly' },

  { path: '/expansion-interne/illusion-expansion', priority: 0.7, changefreq: 'monthly' },
  { path: '/expansion-interne/loi-hubble', priority: 0.7, changefreq: 'monthly' },
  { path: '/expansion-interne/energie-sombre', priority: 0.7, changefreq: 'monthly' },

  { path: '/trous-noirs-echelles/creation', priority: 0.7, changefreq: 'monthly' },
  { path: '/trous-noirs-echelles/passage', priority: 0.7, changefreq: 'monthly' },
  { path: '/trous-noirs-echelles/retour-impossible', priority: 0.7, changefreq: 'monthly' },
  { path: '/trous-noirs-echelles/taille-univers', priority: 0.7, changefreq: 'monthly' },
  { path: '/trous-noirs-echelles/univers-internes', priority: 0.7, changefreq: 'monthly' },
  { path: '/trous-noirs-echelles/harmonie', priority: 0.7, changefreq: 'monthly' },
  { path: '/trous-noirs-echelles/singularite', priority: 0.7, changefreq: 'monthly' },
  { path: '/trous-noirs-echelles/horizon', priority: 0.7, changefreq: 'monthly' },
  { path: '/trous-noirs-echelles/invisibilite', priority: 0.7, changefreq: 'monthly' },
  { path: '/trous-noirs-echelles/derriere-horizon', priority: 0.7, changefreq: 'monthly' },
];

function generateSitemap() {
  const lastmod = new Date().toISOString();

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  routes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${DOMAIN}${route.path}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';

  const distPath = join(__dirname, 'dist', 'sitemap.xml');
  writeFileSync(distPath, xml, 'utf8');

  console.log(`✓ Sitemap generated successfully at ${distPath}`);
  console.log(`✓ Total pages: ${routes.length}`);
  console.log(`✓ Last modified: ${lastmod}`);
}

try {
  generateSitemap();
} catch (error) {
  console.error('Error generating sitemap:', error);
  process.exit(1);
}
