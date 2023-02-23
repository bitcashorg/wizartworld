import { Button } from '~/components/button'
import { useAuthContext } from '~/context/auth.context'

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
      <div className="flex gap-2">
        <Button onClick={logIn} label="Log in" variant="primary" />
        <Button onClick={signUp} label="Sign Up" />
      </div>
    )
  }

  return (
    <div className="grid">
      <div>{currentUser?.loggedIn ? <AuthedState /> : <UnauthenticatedState />}</div>
    </div>
  )
}
