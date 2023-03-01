import { useSession } from 'next-auth/react'

import { Button } from '~/components/button'
import { useAuthContext } from '~/context/auth.context'

export function NiftoryAuth() {
  const { data: session } = useSession()
  const { signIn, signOut } = useAuthContext()

  return (
    <div className="flex justify-end h-10 gap-4 pt-2 lg:pr-7">
      <Button
        onClick={() => (session ? signOut() : signIn())}
        label={session ? 'Sign Out' : 'Sign In'}
        variant={session ? 'secondary' : 'primary'}
        className="p-2"
      />
    </div>
  )
}
