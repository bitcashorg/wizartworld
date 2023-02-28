import { useCallback } from 'react'
import { useAsync, useAsyncFn } from 'react-use'

import * as fcl from '@onflow/fcl'

import { useFlowUser } from '~/hooks/use-flow-user/use-flow-user.hook'
import { VerifyWalletProps, getWallets, verifyWallet } from '~/services/niftory'

import { WalletSetupBox } from './wallet-setup-box.component'

export function VerifyWallet({ callback }: { callback: () => void }) {
  useFlowUser()
  const getWalletsState = useAsync(getWallets)
  const [verifyWalletState, execVerifyWallet] = useAsyncFn(async (params: VerifyWalletProps) => {
    const response = await verifyWallet(params)
    callback()
    return response
  })

  // On click, prompt the user to sign the verification message
  const onClick = useCallback(async () => {
    const wallet = getWalletsState.value?.wallet
    if (!wallet?.address) return

    let signature = await fcl.currentUser.signUserMessage(wallet.verificationCode || '')
    if (!signature) return

    // Send the signature to the API
    execVerifyWallet({
      address: wallet?.address,
      signedVerificationCode: signature,
    })
  }, [getWalletsState.value])

  return (
    <WalletSetupBox
      label={'Step 2 is proving that the wallet is yours.'}
      onClick={onClick}
      isLoading={verifyWalletState.loading}
      error={verifyWalletState.error}
    />
  )
}
