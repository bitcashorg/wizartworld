import { useSession } from 'next-auth/react'

import { Button } from '~/components/button'
import { useFlowUser } from '~/hooks/use-flow-user'
import { ButtonThemeSwitcher } from '~/layouts/components/header/button-theme-switcher.component'
import { WalletSetup } from '~/layouts/components/wallet/verify-setup.component'

import { SettingsProps } from './settings.type'

export function Settings({}: SettingsProps) {
  const flowUser = useFlowUser()
  const { data: session } = useSession()
  console.log({ flowUser })
  return (
    <div className="flex pt-40 px-6">
      <div className="flex justify-center w-full flex-col gap-6">
        <div className="flex justify-center w-full">
          <ButtonThemeSwitcher />
        </div>
        {session && (
          <>
            <div className="flex justify-center w-full">
              <WalletSetup />
            </div>
            <div className="flex justify-center w-full">
              <Button label="My Profile" onClick={() => {}} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}
