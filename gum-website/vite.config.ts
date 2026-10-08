import tailwindcss from '@tailwindcss/postcss';
import vinext from 'vinext';
import { defineConfig } from 'vite';

const staticPages = process.env.GITHUB_PAGES === 'true';
const basePath = staticPages
  ? (process.env.PAGES_BASE_PATH ?? '/fork_chirality-standard-model')
  : '';
const siteOrigin = process.env.SITE_ORIGIN ?? 'https://johngmuender.github.io';

export default defineConfig({
  define: {
    'process.env.NEXT_PUBLIC_BASE_PATH': JSON.stringify(basePath),
    'process.env.NEXT_PUBLIC_SITE_ORIGIN': JSON.stringify(siteOrigin),
  },
  css: { postcss: { plugins: [tailwindcss()] } },
  plugins: [vinext()],
});
