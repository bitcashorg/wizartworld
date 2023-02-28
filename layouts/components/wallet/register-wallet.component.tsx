import React, { useEffect } from 'react'
import { useAsyncFn } from 'react-use'

import * as fcl from '@onflow/fcl'

import { useFlowUser } from '~/hooks/use-flow-user/use-flow-user.hook'
import { registerWallet } from '~/services/niftory'

import { WalletSetupBox } from './wallet-setup-box.component'

export function RegisterWallet({ callback }: { callback: () => void }) {
  const flowUser = useFlowUser()

  const [state, execRegisterWallet] = useAsyncFn(async (address: string) => {
    try {
      const response = await registerWallet({ address })
      callback()
      return response
    } catch (error) {
      console.log('Error registering wallet', error)
    }
  })

  // When the user logs in, register their wallet.
  //  This is because we need to register after fcl.login and it doesn't return a promise.
  useEffect(() => {
    flowUser?.addr && execRegisterWallet(flowUser?.addr)
  }, [flowUser?.addr])

  return (
    <WalletSetupBox isLoading={state.loading} onClick={() => fcl.logIn()} label="Link Wallet" />
  )
}
