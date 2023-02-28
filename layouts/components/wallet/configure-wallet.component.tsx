import React, { useEffect } from 'react'
import { useAsyncFn } from 'react-use'

import { useFlowAccountConfiguration } from '~/hooks/use-account-config'
import { useFlowUser } from '~/hooks/use-flow-user'
import { readyWallet } from '~/services/niftory'

import { WalletSetupBox } from './wallet-setup-box.component'

export function ConfigureWallet({ callback }: { callback: () => void }) {
  const flowUser = useFlowUser()
  const [state, execSetWalletReady] = useAsyncFn(async (address: string) => {
    const response = readyWallet({ address })
    callback()
    return response
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
      isLoading={state.loading || isFlowAccountConfigurationLoading}
      error={state.error}
      label={'Configure your wallet to receive NFTs.'}
      onClick={configure}
    />
  )
}
