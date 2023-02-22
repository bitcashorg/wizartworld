import { useAuthContext } from '~/context/auth.provider'

export const Auth = () => {
  const { currentUser, logOut, logIn, signUp } = useAuthContext()

  const AuthedState = () => {
    return (
      <div>
        {currentUser?.addr}
        <button
          onClick={logOut}
          className="px-4 py-2 m-2 text-gray-700 transition duration-500 bg-gray-200 border border-gray-200 rounded-md select-none ease hover:bg-gray-300 focus:outline-none focus:shadow-outline"
        >
          Log Out
        </button>
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
    <div className="grid">
      <div>{currentUser?.loggedIn ? <AuthedState /> : <UnauthenticatedState />}</div>
    </div>
  )
}
