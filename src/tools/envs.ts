import { loadEnv } from "vite";
const env = loadEnv(process.env.NODE_ENV, process.cwd(), "");

export const SITE_URL = env.SITE_URL ?? 'https://example.org'
export const ROBOTS = env.ROBOTS ?? null
export const GOOGLE_SITE_VERIFICATION_CODE = env.GOOGLE_SITE_VERIFICATION_CODE ?? null
