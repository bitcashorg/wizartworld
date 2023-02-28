import React, { useEffect } from 'react'

import * as fcl from '@onflow/fcl'

import { Blockchain, Wallet } from '~/graphql/generated'
import { useFlowUser } from '~/hooks/useFlowUser'
import { usePostData } from '~/hooks/usePostData'
import { RegisterWalletProps, registerWallet } from '~/services/niftory'

import { WalletSetupBox } from './WalletSetupBox'

interface Props {
  blockchain: Blockchain | undefined
  // TODO: Better to have a context for these
  // setUpdatedWallet: React.Dispatch<React.SetStateAction<Wallet | null>>
}

export function RegisterWallet({ blockchain }: Props) {
  const flowUser = useFlowUser()
  const { post: registerWalletMutation, isLoading } = usePostData<RegisterWalletProps, any>(
    registerWallet,
  )
  const [execute, setExecute] = React.useState(false)

  // When the user logs in, register their wallet. This is because we need to register after fcl.login and it doesn't return a promise.
  useEffect(() => {
    if (blockchain !== 'FLOW' || !flowUser?.addr || isLoading) {
      return
    }
    console.log('registering wallet', { address: flowUser.addr })

    const register = async () => {
      // Register the wallet
      try {
        await registerWalletMutation({ address: flowUser.addr as string })
      } catch (error) {
        console.log('Error registering wallet', error)
      }
    }

    if (execute && flowUser?.loggedIn) {
      register()
      setExecute(false)
    }
  }, [blockchain, flowUser?.addr, flowUser?.loggedIn, execute])

  const handleRegister = async () => {
    switch (blockchain) {
      case 'FLOW': {
        fcl.logIn()
        break
      }
    }

    setExecute(true)
  }

  return <WalletSetupBox onClick={handleRegister} label="Link or create your wallet" />
}
