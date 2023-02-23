import NextAuth, { NextAuthOptions } from 'next-auth'

import { niftoryAuthProvider } from '~/pages/api/auth/niftory-auth.provider'

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [niftoryAuthProvider],
  theme: {
    colorScheme: 'light',
  },
  callbacks: {
    async jwt({ token }) {
      console.log('token callback', { token })
      token.userRole = 'admin'
      return token
    },
    session: async ({ session, token }) => {
      console.log('session callback', { session, token })
      // session.userId = token.sub
      // session.clientId = token.aud
      // session.authToken = token.authToken
      // session.error = token.error

      return session
    },
  },
}

export default NextAuth(authOptions)
