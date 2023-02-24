export const clientEnv = {
  debug: process.env.NODE_ENV !== 'production',
  services: {
    auth: process.env.SERVICE_AUTH || '',
    replicate: process.env.REPLICATE_API_KEY || '',
    openai: process.env.OPENAI_API_KEY || '',
  },
  analytics: {
    google: process.env.GOOGLE_ANALYTICS || '',
    sentry: process.env.SENTRY_DSN || '',
  },
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME || '',
    apiKey: process.env.CLOUDINARY_API_KEY || '',
    apiSecret: process.env.CLOUDINARY_API_KEY || '',
  },
  web3auth: {
    clientId: process.env.WEB3AUTH_CLIENT_ID || '',
    verifier: process.env.WEB3AUTH_APP_VERIFIER || '',
  },
}
