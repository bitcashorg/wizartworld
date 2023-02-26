import { useCallback } from 'react'

import * as fcl from '@onflow/fcl'

import { Blockchain, Wallet } from '~/graphql/generated'
import { useFetchData } from '~/hooks/useFetchData'
import { useFlowUser } from '~/hooks/useFlowUser'
import { usePostData } from '~/hooks/usePostData'
import { VerifyWalletProps, getWallets, verifyWallet } from '~/services/niftory'

import { WalletSetupBox } from './WalletSetupBox'

interface Props {
  blockchain?: Blockchain
}

export function VerifyWallet({ blockchain }: Props) {
  useFlowUser()

  const { data: walletData } = useFetchData<{
    wallet?: Wallet
  }>(getWallets)

  const {
    post: verifyWalletMutation,
    isLoading,
    error,
  } = usePostData<VerifyWalletProps, any>(verifyWallet)

  const wallet = walletData?.wallet

  // On click, prompt the user to sign the verification message
  const onClick = useCallback(async () => {
    if (!wallet) return
    let signature: fcl.CompositeSignature[] | null = null

    switch (blockchain) {
      case 'FLOW':
        // Use FCL to sign the verification message
        signature = await fcl.currentUser.signUserMessage(wallet?.verificationCode || '')
        break
      case 'POLYGON': {
        // TODO: implement
        break
      }
    }

    if (!signature) {
      return
    }

    // Send the signature to the API
    verifyWalletMutation({
      address: wallet?.address,
      signedVerificationCode: signature,
    })
  }, [blockchain, wallet, verifyWalletMutation])

  return (
    <WalletSetupBox
      label={'Step 2 is proving that the wallet is yours.'}
      onClick={onClick}
      isLoading={isLoading}
      error={error}
    />
  )
}
