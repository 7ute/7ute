import { PROJECTS } from "../data"
import { SITE_URL } from "../tools/envs"
import { defaultLocale, locales } from "../tools/locales"

export async function GET() {
    const sitemapEntries = []
    for (const lang in locales) {
        const langPrefix = lang != defaultLocale ? `/${lang}` : ''
        const entry = {
            loc: `${SITE_URL}${langPrefix}`,
            alternates: {},
            changefreq: 'monthly',
            priority: 0.8,
        }
        Object.entries(locales).map(([localeKey, localeLang]) => {
            const alternateLangPrefix = (localeKey != defaultLocale) ? `/${lang}` : ''
            entry.alternates[localeLang] = `${SITE_URL}${alternateLangPrefix}`
        })
        sitemapEntries.push(entry)
        for (const slug in PROJECTS) {
            const entry = {
                loc: `${SITE_URL}${langPrefix}/projects/${slug}`,
                alternates: {},
                changefreq: 'monthly',
                priority: 0.8,
            }
            Object.entries(locales).map(([localeKey, localeLang]) => {
                const alternateLangPrefix = (localeKey != defaultLocale) ? `/${lang}` : ''
                entry.alternates[localeLang] = `${SITE_URL}${alternateLangPrefix}/projects/${slug}`
            })
            sitemapEntries.push(entry)
        }
    }

    const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapEntries.map(entry => `<url>
  <loc>${entry.loc}</loc>
  ${entry.alternates && Object.entries(entry.alternates).map(([lang, href]) => `<xhtml:link rel="alternate" hreflang="${lang}" href="${href}"/>`).join("\n  ")}
  ${entry.changefreq && `<changefreq>${entry.changefreq}</changefreq>`}
  ${entry.priority && `<priority>${entry.priority}</priority>`}
</url>`).join("\n")}
</urlset>
`
    return new Response(body, {
        headers: {
            'Content-Type': 'text/xml',
        }
    })
}
