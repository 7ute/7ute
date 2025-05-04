import { defineMiddleware, sequence } from "astro:middleware";
import { paraglideMiddleware } from "./paraglide/server.js";
import { AsyncLocalStorage } from "node:async_hooks";
import { getLocale, locales, overwriteGetLocale, setLocale } from './paraglide/runtime.js';
import { localizedTrimmedUrl, defaultLocale } from "./tools/locales.js";

const localeStorage = new AsyncLocalStorage();
overwriteGetLocale(() => {
    return localeStorage.getStore() ?? defaultLocale;
});

const readLocale = defineMiddleware((context, next) => {
    let locale = context.params.lang ?? null;
    if (locales.indexOf(locale) < 0) {
        locale = defaultLocale
    }
    return localeStorage.run(locale, async () => await next());
})

const redirectDefaultLocaleToRoot = defineMiddleware((context, next) => {
    const lang = context.params.lang ?? defaultLocale;
    if (lang && locales.indexOf(lang) < 0) {
        return new Response(null, { status: 404 })
    }
    
    if (context.routePattern.indexOf('[lang]') === 1
        && (context.url.pathname == context.originPathname)
        && context.params.lang
        && (getLocale() === defaultLocale)
    ) {
        return context.redirect(localizedTrimmedUrl(context))
    }
    return next();
});


const paraglideRequestMiddleware = defineMiddleware((context, next) => {
    return paraglideMiddleware(context.request, () => next());
});


export const onRequest = sequence(
    readLocale,
    paraglideRequestMiddleware,
    redirectDefaultLocaleToRoot
);
