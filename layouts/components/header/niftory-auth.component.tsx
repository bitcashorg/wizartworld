import { useSession } from 'next-auth/react'

import { Button } from '~/components/button'
import { WalletSetup } from '~/components/wallet/verify-setup.component'
import { useAuthContext } from '~/context/auth.context'

export function NiftoryAuth() {
  const { data: session } = useSession()
  const { signIn, signOut } = useAuthContext()
  console.log('session', session)
  if (session) {
    return (
      <div className="flex justify-end gap-4 pt-1 h-30 lg:pr-7">
        <WalletSetup />
        <Button onClick={() => signOut()} label=" Sign out" />
      </div>
    )
  }
  return (
    <div className="flex justify-end gap-4 pt-1 h-30 lg:pr-7">
      <Button onClick={() => signIn()} label="Sign in" variant="primary" />
    </div>
  )
}
