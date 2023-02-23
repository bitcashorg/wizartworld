import { useSession } from 'next-auth/react'
import { signIn as nextAuthSignIn, signOut as nextAuthSignOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { createContext, useCallback, useContext, useEffect, useState } from 'react'

import * as fcl from '@onflow/fcl'

type AuthComponentProps = {
  children: React.ReactNode
  requireAuth: boolean | undefined
}

type AuthContextType = {
  session: any
  isLoading: boolean
  signIn: (callbackUrl?: string) => Promise<void>
  signOut: () => Promise<void>
}

export const FlowAuthContext = createContext<AuthContextType>({
  session: {},
  isLoading: false,
  signIn: async (callbackUrl?: string) => {},
  signOut: async () => {},
})

export function FlowAuthProvider({ children, requireAuth }: AuthComponentProps) {
  const router = useRouter()

  const { data: session, status } = useSession()
  const sessionLoading = status === 'loading'

  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const isLoading = sessionLoading || isAuthenticating

  const signIn = useCallback(async (callbackUrl?: string) => {
    setIsAuthenticating(true)
    await nextAuthSignIn('niftory', { callbackUrl })
    setIsAuthenticating(false)
  }, [])

  const signOut = useCallback(async (callbackUrl: string = '/') => {
    setIsAuthenticating(true)
    fcl.unauthenticate()
    await nextAuthSignOut({ redirect: false, callbackUrl })
    setIsAuthenticating(false)
  }, [])

  return (
    <FlowAuthContext.Provider value={{ session, isLoading, signIn, signOut }}>
      {children}
    </FlowAuthContext.Provider>
  )
}

export const useFlowAuthContext = () => useContext(FlowAuthContext)
