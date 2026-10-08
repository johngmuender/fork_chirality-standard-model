/**
 * Where the static export will be served, read from the build environment.
 *
 * BASE_PATH is the URL prefix: "/<repository>" for a GitHub project page, empty
 * at the root of a domain (Vercel, Cloudflare Workers, a custom domain).
 * SITE_ORIGIN is the scheme and host the canonical link names; on Vercel it
 * defaults to the project's production domain. Without an origin the page
 * carries no canonical link rather than a guessed one.
 */
const prefix = (process.env.BASE_PATH ?? '').replace(/^\/+|\/+$/g, '');
export const basePath = prefix && '/' + prefix;

const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const origin = process.env.SITE_ORIGIN || (vercel && 'https://' + vercel);
export const siteOrigin = origin ? new URL(origin).origin : '';
