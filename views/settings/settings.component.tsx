import clsx from 'clsx'
import { useSession } from 'next-auth/react'
import { useTheme } from 'next-themes'

import { useGlobalContext } from '~/context/global.context'
import { useFlowUser } from '~/hooks/use-flow-user'
import { WalletSetup } from '~/layouts/components/wallet/verify-setup.component'

import { SettingsProps } from './settings.type'

export function Settings({}: SettingsProps) {
  const flowUser = useFlowUser()
  const { data: session } = useSession()
  const { showSettings } = useGlobalContext()
  const { theme, setTheme } = useTheme()

  console.log({ flowUser })

  return showSettings ? (
    <div className="fixed z-[1000] bg-white dark:bg-slate-900 top-[74px] w-full h-full flex py-10 px-6 justify-end items-start">
      <div className="flex flex-col gap-6 w-full max-w-[600px] items-end">
        {/* <ButtonThemeSwitcher /> */}

        {session && (
          <>
            <div className="min-h-[60px]">
              <WalletSetup />
            </div>

            <div className="w-full px-3 py-2 text-center border-2 rounded-lg cursor-pointer border-wz-purple-500 text-wz-purple-500 hover:bg-wz-purple-500 hover:text-purple-100">
              Create NFT
            </div>
            <div className="w-full px-3 py-2 text-center border-2 rounded-lg cursor-pointer border-wz-purple-500 text-wz-purple-500 hover:bg-wz-purple-500 hover:text-purple-100">
              Transfer NFT
            </div>

            <div
              onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
              className="w-full px-3 py-2 text-center border-2 rounded-lg cursor-pointer border-wz-purple-500 text-wz-purple-500 hover:bg-wz-purple-500 hover:text-purple-100"
            >
              Toggle Theme
            </div>
            {/* 
            <div className="w-full px-3 py-2 text-center border-2 rounded-lg cursor-pointer border-wz-purple-500 text-wz-purple-500 hover:bg-wz-purple-500 hover:text-purple-100">
              My Profile
            </div> */}

            <div className="w-full px-3 py-2 text-center border-2 rounded-lg cursor-pointer border-wz-purple-500 text-wz-purple-500 hover:bg-wz-purple-500 hover:text-purple-100">
              Add to HomeScreen
            </div>

            {/* <div className="w-full px-3 py-2 text-center border-2 rounded-lg cursor-pointer border-wz-purple-500 text-wz-purple-500 hover:bg-wz-purple-500 hover:text-purple-100">
              Buy Crypto
            </div>
            <div className="w-full px-3 py-2 text-center border-2 rounded-lg cursor-pointer border-wz-purple-500 text-wz-purple-500 hover:bg-wz-purple-500 hover:text-purple-100">
              Fantasy Top Shots
            </div> */}

            {/* https://open.spotify.com/track/3RdQfyk7BBxxIx0zSnCBIw?si=18a27aec2e1e4477 */}

            {/* <Button label="My Profile" onClick={() => {}} /> */}
          </>
        )}
      </div>
    </div>
  ) : (
    <></>
  )
}
