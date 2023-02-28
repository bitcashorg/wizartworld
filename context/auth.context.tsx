import { signIn as nextAuthSignIn, signOut as nextAuthSignOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'

import * as fcl from '@onflow/fcl'

import { useFlowUser } from '~/hooks/use-flow-user'

export type User = { loggedIn: false; addr: string | undefined }

type Profile = {
  name: string
  color: string
  info: string
  address?: string
}

export type UserProfile = Profile | null

export type AuthContextType = {
  signOut: () => void
  signIn: () => void
}

// TODO: keep for later
// const defaultUser: User = { loggedIn: false, addr: undefined }
export const defaultProfile: Profile = { name: '', color: '', info: '' }

const defaultAuthContext: AuthContextType = {
  signOut: () => {},
  signIn: () => {},
}

type AuthComponentProps = {
  children: React.ReactNode
  requireAuth: boolean | undefined
}

// TODO: WIP global auth state
// Please complete this function
function AuthProvider({ children, requireAuth }: AuthComponentProps): JSX.Element {
  useFlowUser()
  const router = useRouter()

  const { data: session, status } = useSession()
  const sessionLoading = status === 'loading'

  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const isLoading = sessionLoading || isAuthenticating

  const signIn = useCallback(async () => {
    setIsAuthenticating(true)
    await nextAuthSignIn('niftory')
    setIsAuthenticating(false)
  }, [])

  const signOut = useCallback(async () => {
    setIsAuthenticating(true)
    fcl.unauthenticate()
    const { url } = await nextAuthSignOut({ redirect: false })
    await router.push(url)
    setIsAuthenticating(false)
  }, [router])

  useEffect(() => {
    if (!requireAuth || isLoading) {
      return
    }

    if (session?.user.error) {
      console.error(session?.user.error)
      signOut()
      return
    }

    if (!session) {
      router.push('/')
      return
    }
  }, [requireAuth, session, router, isLoading, signOut])

  const providerValue = {
    signIn,
    signOut,
  }

  return <AuthContext.Provider value={providerValue}>{children}</AuthContext.Provider>
}

// TODO: fix types because onflow doesn't have types
export const AuthContext = React.createContext<AuthContextType>(defaultAuthContext)

function useAuthContext() {
  const auth = React.useContext(AuthContext)
  if (!auth) {
    throw new Error('useAuthContext must be used within AuthProvider')
  }
  return auth
}

export { AuthProvider, useAuthContext }
