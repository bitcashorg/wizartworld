import { Provider } from 'next-auth/providers'

export const niftoryAuthProvider: Provider = {
  id: 'niftory',
  name: 'Niftory',
  type: 'oauth',
  wellKnown: `
    ${process.env.NIFTORY_AUTH_ISSUER}/.well-known/openid-configuration`,
  // We request offline_access and consent prompt because we need to get a refresh token
  authorization: {
    params: { scope: 'openid email profile offline_access', prompt: 'consent' },
  },

  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  checks: ['pkce', 'state'],
  idToken: true,
  profile(profile) {
    return {
      id: profile.sub,
      name: profile.name,
      email: profile.email,
      image: profile.picture,
    }
  },
  httpOptions: {
    timeout: 10000,
  },
}
