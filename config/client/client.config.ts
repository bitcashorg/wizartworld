export const clientEnv = {
  debug: process.env.NODE_ENV !== 'production',
  services: {
    auth: process.env.NEXT_PUBLIC_SERVICE_AUTH || '',
    replicate: process.env.NEXT_PUBLIC_REPLICATE_API_KEY || '',
  },
  analytics: {
    google: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || '',
    sentry: process.env.NEXT_PUBLIC_SENTRY_DSN || '',
  },
  cloudinary: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || '',
    apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || '',
    apiSecret: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || '',
  },
  niftoryApiKey: process.env.NEXT_PUBLIC_NIFTORY_API_KEY || '',
  jwtLocalStorageKey: 'jwt-secret',
}
