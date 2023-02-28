import { useSession } from 'next-auth/react'

import { Button } from '~/components/button'
import { useAuthContext } from '~/context/auth.context'
import { WalletSetup } from '~/layouts/components/wallet/verify-setup.component'

export function NiftoryAuth() {
  const { data: session } = useSession()
  const { signIn, signOut } = useAuthContext()

  if (session) {
    return (
      <div className="flex justify-end gap-4 pt-1 h-30 lg:pr-7">
        <div className="hidden md:block">
          <WalletSetup />
        </div>
        <Button onClick={() => signOut()} label=" Sign Out" />
      </div>
    )
  }
  return (
    <div className="flex justify-end gap-4 pt-1 h-30 lg:pr-7">
      <Button onClick={() => signIn()} label="Sign In" variant="primary" />
    </div>
  )
}
