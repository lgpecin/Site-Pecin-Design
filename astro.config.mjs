
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://leonardopecin.com.br',
  integrations: [tailwind()]
});
