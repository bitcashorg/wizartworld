import { signIn, signOut } from 'next-auth/react'
import React from 'react'

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

// TODO: WIP global auth state
// Please complete this function
function AuthProvider({ children }: { children: React.ReactNode }): JSX.Element {
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
