export const clientEnv = {
  debug: process.env.NODE_ENV !== 'production',
  services: {
    auth: process.env.NEXT_PUBLIC_SERVICE_AUTH || '',
  },
  analytics: {
    google: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || '',
    sentry: process.env.NEXT_PUBLIC_SENTRY_DSN || '',
  },
  niftoryApiKey: process.env.NEXT_PUBLIC_NIFTORY_API || '',
  jwtLocalStorageKey: 'jwt-secret',
}
