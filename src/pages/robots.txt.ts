import type { APIRoute } from "astro"
import { SITE_URL } from "../tools/envs"

export async function GET() {
    const sitemapURL = new URL("sitemap.xml", SITE_URL)
    const body = `User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`
    return new Response(body)
}
