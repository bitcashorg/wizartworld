import React from 'react'
import { useCallback, useEffect, useState } from 'react'

import * as fcl from '@onflow/fcl'

import { useTransaction } from './transaction.context'

export type User = { loggedIn: false; addr: string | undefined }

type Profile = {
  name: string
  color: string
  info: string
  address?: string
}

export type UserProfile = Profile | null

export type AuthContextType = {
  currentUser: User
  userProfile: UserProfile
  profileExists: boolean
  logOut: () => void
  logIn: () => void
  signUp: () => void
  loadProfile: () => Promise<UserProfile>
  createProfile: () => void
  updateProfile: (profile: Profile) => void
}

const defaultUser: User = { loggedIn: false, addr: undefined }
export const defaultProfile: Profile = { name: '', color: '', info: '' }

const defaultAuthContext: AuthContextType = {
  currentUser: defaultUser,
  userProfile: null,
  profileExists: false,
  logOut: () => {},
  logIn: () => {
    console.log('default login')
  },
  signUp: () => {},
  loadProfile: async () => null,
  createProfile: () => {},
  updateProfile: (profile: Profile) => {},
}

function AuthProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const { initTransactionState, setTxId, setTransactionStatus } = useTransaction()
  const [currentUser, setUser] = useState<User>(defaultUser)
  const [userProfile, setProfile] = useState<UserProfile>(null)
  const [profileExists, setProfileExists] = useState<boolean>(false)

  useEffect(() => fcl.currentUser.subscribe(setUser), [])

  const loadProfile = useCallback(async () => {
    const profile = await fcl.query({
      cadence: `
        import Profile from 0xProfile
        pub fun main(address: Address): Profile.ReadOnly? {
          return Profile.read(address)
        }
      `,
      args: (arg: any, t: any) => [arg(currentUser.addr, t.Address)],
    })
    setProfile(profile ?? null)
    setProfileExists(profile !== null)
    return profile
  }, [currentUser, setProfile, setProfileExists])

  useEffect(() => {
    // Upon login check if a userProfile exists
    if (currentUser.loggedIn && userProfile === null) {
      loadProfile()
    }
  }, [currentUser, userProfile, loadProfile])

  const logOut = async () => {
    await fcl.unauthenticate()
    setUser({ addr: undefined, loggedIn: false })
    setProfile(null)
    setProfileExists(false)
  }

  const logIn = () => {
    console.log('logIn')
    fcl.logIn()
  }

  const signUp = () => {
    console.log('signUp')
    fcl.signUp()
  }

  const createProfile = async () => {
    initTransactionState()

    const transactionId = await fcl.mutate({
      cadence: `
        import Profile from 0xProfile
        transaction {
          prepare(account: AuthAccount) {
            // Only initialize the account if it hasn't already been initialized
            if (!Profile.check(account.address)) {
              // This creates and stores the profile in the user's account
              account.save(<- Profile.new(), to: Profile.privatePath)
              // This creates the public capability that lets applications read the profile's info
              account.link<&Profile.Base{Profile.Public}>(Profile.publicPath, target: Profile.privatePath)
            }
          }
        }
      `,
      payer: fcl.authz,
      proposer: fcl.authz,
      authorizations: [fcl.authz],
      limit: 50,
    })
    setTxId(transactionId)
    fcl.tx(transactionId).subscribe((res: any) => {
      setTransactionStatus(res.status)
      if (res.status === 4) {
        loadProfile()
      }
    })
  }

  const updateProfile = async ({ name, color, info }: Profile) => {
    console.log('Updating profile', { name, color, info })
    initTransactionState()

    const transactionId = await fcl.mutate({
      cadence: `
        import Profile from 0xProfile
        transaction(name: String, color: String, info: String) {
          prepare(account: AuthAccount) {
            account
              .borrow<&Profile.Base{Profile.Owner}>(from: Profile.privatePath)!
              .setName(name)
            account
              .borrow<&Profile.Base{Profile.Owner}>(from: Profile.privatePath)!
              .setInfo(info)
            account
              .borrow<&Profile.Base{Profile.Owner}>(from: Profile.privatePath)!
              .setColor(color)
          }
        }
      `,
      args: (arg: any, t: any) => [arg(name, t.String), arg(color, t.String), arg(info, t.String)],
      payer: fcl.authz,
      proposer: fcl.authz,
      authorizations: [fcl.authz],
      limit: 50,
    })
    setTxId(transactionId)
    fcl.tx(transactionId).subscribe((res: any) => {
      setTransactionStatus(res.status)
      if (res.status === 4) {
        loadProfile()
      }
    })
  }

  const providerValue = {
    currentUser,
    userProfile,
    profileExists,
    logOut,
    logIn,
    signUp,
    loadProfile,
    createProfile,
    updateProfile,
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
