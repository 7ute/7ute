import type { AstroGlobal } from "astro"

export const defaultLocale = 'en'
export const locales = ["en", "fr"]

export const localizedTrimmedUrl = (context: AstroGlobal, locale, path = null, hash = null) => {
    const baseUrl = `${context.url.protocol}//${context.url.host}${locale != defaultLocale ? `/${locale}` : ''}`
    const localizedPath = (path ?? context.url.pathname).replace(/^\/(en|fr)(\/)?/, '')
    return `${baseUrl}${localizedPath ? `/${localizedPath}` : ''}${hash && hash.indexOf('#') != 0 ? `#${hash}` : (hash ?? '')}`
}

export const getAlternates = (context: AstroGlobal) => {
    return locales.map(locale => {
        const baseUrl = `${context.url.protocol}//${context.url.host}`
        const localizedPath = context.url.pathname.replace(/^\/(en|fr)(\/)?/, '')
        const url = (locale == defaultLocale)
            ? `${baseUrl}${localizedPath ? `/${localizedPath}` : ''}`
            : `${baseUrl}/${locale}${localizedPath != '' ? `/${localizedPath}` : ''}`
        return {
            locale,
            url,
        }
    })
}
