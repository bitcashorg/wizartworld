export const clientEnv = {
  debug: process.env.NODE_ENV !== 'production',
  services: {
    auth: process.env.NEXT_PUBLIC_SERVICE_AUTH || '',
    replicate: process.env.NEXT_PUBLIC_REPLICATE_API_KEY || '',
    openai: process.env.NEXT_PUBLIC_OPENAI_API_KEY || '',
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
  web3auth: {
    clientId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID || '',
    verifier: process.env.NEXT_PUBLIC_WEB3AUTH_APP_VERIFIER || '',
  },
  niftory: {
    clientId: process.env.NEXT_PUBLIC_NIFTORY_CLIENT_ID || '',
  },
  features: {},
}
