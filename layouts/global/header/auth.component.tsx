import { useMemo } from 'react'
import { useAuth } from '~/context/auth.context'
import Profile from './profile.component'

export const Auth = () => {
  const { currentUser, profileExists, logOut, logIn, signUp, createProfile } = useAuth()

  const AuthedState = () => {
    return (
      <div>
        <div>Logged in as: {currentUser?.addr ?? 'No Address'}</div>
        <button onClick={logOut}>Log Out</button>

        <h2>Controls</h2>
        <button onClick={createProfile}>Create Profile</button>
      </div>
    )
  }

  const UnauthenticatedState = () => {
    return (
      <div>
        <button
          onClick={logIn}
          type="button"
          className="px-4 py-2 m-2 text-white transition duration-500 bg-indigo-500 border border-indigo-500 rounded-md select-none ease hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
        >
          Log In
        </button>
        <button
          onClick={signUp}
          type="button"
          className="px-4 py-2 m-2 text-gray-700 transition duration-500 bg-gray-200 border border-gray-200 rounded-md select-none ease hover:bg-gray-300 focus:outline-none focus:shadow-outline"
        >
          Sign Up
        </button>
      </div>
    )
  }

  return (
    <div>
      <div className="grid">
        <div>{currentUser?.loggedIn ? <AuthedState /> : <UnauthenticatedState />}</div>
      </div>
    </div>
  )
}
