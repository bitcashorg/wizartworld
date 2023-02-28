import React, { useEffect } from 'react'

import * as fcl from '@onflow/fcl'

import { Blockchain } from '~/graphql/generated'
import { useFlowUser } from '~/hooks/useFlowUser'
import { usePostData } from '~/hooks/usePostData'
import { RegisterWalletProps, registerWallet } from '~/services/niftory'

import { WalletSetupBox } from './WalletSetupBox'

interface Props {
  blockchain: Blockchain | undefined
}

export function RegisterWallet({ blockchain }: Props) {
  const flowUser = useFlowUser()
  const {
    post: registerWalletMutation,
    isLoading,
    fulfilled,
  } = usePostData<RegisterWalletProps, any>(registerWallet)

  // When the user logs in, register their wallet. This is because we need to register after fcl.login and it doesn't return a promise.
  useEffect(() => {
    if (blockchain !== 'FLOW' || !flowUser?.addr || isLoading || fulfilled) {
      return
    }
    console.log('registering wallet', { address: flowUser.addr })

    registerWalletMutation({ address: flowUser.addr })
  }, [blockchain, flowUser?.addr, flowUser?.loggedIn, isLoading])

  const handleRegister = async () => {
    console.log('blockchain', blockchain)
    switch (blockchain) {
      case 'FLOW': {
        await fcl.logIn()
        break
      }
    }
  }

  return <WalletSetupBox onClick={handleRegister} label="Link or create your wallet" />
}
