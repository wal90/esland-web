import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()],
    i18n: {
        defaultLocale: 'es',
        locales: ['es', 'ca'],
        routing: {
            prefixDefaultLocale: false
        }
    }
});
