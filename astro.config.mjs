// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import { paraglideVitePlugin } from "@inlang/paraglide-js";

import node from "@astrojs/node";
import alpinejs from '@astrojs/alpinejs';
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";
import { defaultLocale, locales } from './src/tools/locales';
import { SITE_URL } from './src/tools/envs';


export default defineConfig({
    site: SITE_URL,
    trailingSlash: 'never',
    i18n: {
        locales: Object.keys(locales),
        defaultLocale,
    },

    image: {
        service: passthroughImageService(),
    },

    vite: {
        plugins: [
            paraglideVitePlugin({
                project: "./project.inlang",
                outdir: "./src/paraglide",
            }),
            tailwindcss(),
        ],
        optimizeDeps: {
            exclude: ["fsevents"],
        },
    },

    output: "server",
    adapter: node({ mode: "standalone" }),
    integrations: [
        icon(),
        alpinejs({
            entrypoint: '/src/alpine.entrypoint.ts',
        }),
    ],
});
