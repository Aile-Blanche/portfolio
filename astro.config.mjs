import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://aile-blanche.github.io',
    base: '/portfolio/',
    redirects: {
        'professionnal_projects/[slug...]': 'portfolio/professionnalProjects/[slug...]',
        'personnal_projects/[slug...]': 'portfolio/professionnalProjects/[slug...]',
    }
});
