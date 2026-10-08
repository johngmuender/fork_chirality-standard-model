import tailwindcss from '@tailwindcss/postcss';
import vinext from 'vinext';
import { defineConfig } from 'vite';
import { basePath, siteOrigin } from './site-address.mjs';

export default defineConfig({
  define: {
    'process.env.NEXT_PUBLIC_BASE_PATH': JSON.stringify(basePath),
    'process.env.NEXT_PUBLIC_SITE_ORIGIN': JSON.stringify(siteOrigin),
  },
  css: { postcss: { plugins: [tailwindcss()] } },
  plugins: [vinext()],
});
