import { useSession } from 'next-auth/react'

import { Button } from '~/components/button'
import { useFlowUser } from '~/hooks/use-flow-user'
import { ButtonThemeSwitcher } from '~/layouts/components/header/button-theme-switcher.component'
import { WalletSetup } from '~/layouts/components/wallet/verify-setup.component'

import { SettingsProps } from './settings.type'
import { useGlobalContext } from '~/context/global.context'
import clsx from 'clsx'

export function Settings({}: SettingsProps) {
  const flowUser = useFlowUser()
  const { data: session } = useSession()
  const { showSettings } = useGlobalContext()

  console.log({ flowUser })

  return showSettings ? (
    <div className="fixed z-[1000] bg-white dark:bg-slate-900 top-[74px] w-full h-full flex py-10 px-6 justify-end items-start">
      <div className="flex flex-col gap-6 w-full max-w-[600px] items-end">
        <ButtonThemeSwitcher />
        {session && (
          <>
            <WalletSetup />
            <Button label="My Profile" onClick={() => {}} />
          </>
        )}
      </div>
    </div>
  ) : <></>
}
