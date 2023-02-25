import NextAuth from 'next-auth'
import { NextAuthOptions } from 'next-auth'

import { niftoryAuthProvider } from './niftory-auth.provider'

export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [niftoryAuthProvider],
  theme: {
    colorScheme: 'light',
  },
  callbacks: {
    async jwt({ token, user, account }) {
      console.log('jwt callback', { account, user, token })
      return {
        ...token,
        authToken: account?.id_token,
        authTokenExpiresAt: account?.expires_at ? account?.expires_at * 1000 : 0,
        refreshToken: account?.refresh_token,
      }
    },
    session: async ({ session, token }) => {
      console.log('session callback', { session, token })
      session.user = {
        userId: token.sub || '',
        clientId: token.aud?.toString() || '',
        jwt: token.authToken?.toString() || '',
        error: token.error?.toString() || '',
      }

      return session
    },
  },
}

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth(authOptions)
