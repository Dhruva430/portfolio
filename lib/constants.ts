// On Vercel, VERCEL_PROJECT_PRODUCTION_URL is the production domain
// (e.g. "portfolio-xxx.vercel.app") without a protocol. Falls back to
// localhost for local development.
export const BASE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";