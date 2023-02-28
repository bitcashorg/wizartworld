import React, { useEffect } from 'react'
import { useAsyncFn } from 'react-use'

import { useFlowAccountConfiguration } from '~/hooks/use-account-config/use-account-config.hook'
import { useFlowUser } from '~/hooks/use-flow-user/use-flow-user.hook'
import { readyWallet } from '~/services/niftory'

import { WalletSetupBox } from './wallet-setup-box.component'

export function ConfigureWallet() {
  const flowUser = useFlowUser()
  const [state, execSetWalletReady] = useAsyncFn(async (address: string) => {
    readyWallet({ address })
  })

  const {
    configured,
    configure,
    isLoading: isFlowAccountConfigurationLoading,
  } = useFlowAccountConfiguration()

  // Once the wallet is configured, call the ready mutation to tell Niftory it's ready to receive NFTs
  useEffect(() => {
    if (
      state.value ||
      isFlowAccountConfigurationLoading ||
      state.loading ||
      !flowUser?.addr ||
      !configured
    )
      return

    execSetWalletReady(flowUser.addr)
  }, [flowUser?.addr, configured, state, isFlowAccountConfigurationLoading])

  return (
    <WalletSetupBox
      label={'Now we need to configure your wallet to receive NFTs.'}
      onClick={configure}
      isLoading={state.loading}
      error={state.error}
    />
  )
}
