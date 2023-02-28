import React, { useEffect } from 'react'

import { useFlowAccountConfiguration } from '~/hooks/useFlowAccountConfiguration'
import { useFlowUser } from '~/hooks/useFlowUser'
import { usePostData } from '~/hooks/usePostData'
import { ReadyWalletProps, readyWallet } from '~/services/niftory'

import { WalletSetupBox } from './WalletSetupBox'

export function ConfigureWallet() {
  const flowUser = useFlowUser()
  const [executed, setExecuted] = React.useState(false)

  const {
    post: readyWalletMutation,
    fulfilled,
    isLoading: isReadyWalletLoading,
    error,
  } = usePostData<ReadyWalletProps, any>(readyWallet)

  const {
    configured,
    configure,
    isLoading: isFlowAccountConfigurationLoading,
  } = useFlowAccountConfiguration()

  // Once the wallet is configured, call the ready mutation to tell Niftory it's ready to receive NFTs
  useEffect(() => {
    if (fulfilled || isFlowAccountConfigurationLoading || isReadyWalletLoading) return

    if (!configured) {
      return
    }

    readyWalletMutation({ address: flowUser?.addr || '' })
  }, [
    flowUser?.addr,
    configured,
    fulfilled,
    isFlowAccountConfigurationLoading,
    isReadyWalletLoading,
  ])

  

  const isLoading = isFlowAccountConfigurationLoading || isReadyWalletLoading

  return (
    <WalletSetupBox
      label={'Now we need to configure your wallet to receive NFTs.'}
      onClick={configure}
      isLoading={isLoading}
      error={error}
    />
  )
}
