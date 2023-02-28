import { useAsync, useAsyncFn } from 'react-use'

import * as fcl from '@onflow/fcl'

import { Wallet, enumWalletState } from '~/graphql/generated/schema'
import { getContract, getWallets } from '~/services/niftory/niftory-frontend.service'

import { ConfigureWallet } from './configure-wallet.component'
import { RegisterWallet } from './register-wallet.component'
import { VerifyWallet } from './veirify-wallet.component'
import { WalletSetupBox } from './wallet-setup-box.component'

export type WalletSetupStepProps = {
  setIsLoading: (isLoading: boolean) => void
  setError: (error: Error | null) => void
}

export type WalletSetupProps = WalletSetupStepProps & {
  wallet: Wallet
  flowUser: fcl.CurrentUserObject
  error: Error
}

export function WalletSetup() {
  const getWalletsState = useAsync(getWallets)
  const getContractState = useAsync(getContract)
  const isLoading = getWalletsState.loading || getContractState.loading

  const wallet = getWalletsState.value?.wallet

  console.log('💰 wallet', wallet)

  // User doesn't have a wallet yet
  if (!wallet?.address) return <RegisterWallet />

  // User has a wallet but it's not verified yet
  if (wallet.state === enumWalletState.UNVERIFIED) return <VerifyWallet />

  // The user has verified their wallet, but hasn't configured it yet
  if (wallet.state === enumWalletState.VERIFIED) return <ConfigureWallet />

  // The user has configured their wallet, now they can mint
  if (wallet.state === enumWalletState.READY)
    return (
      <WalletSetupBox
        label={`You're are set up! Address is ${wallet?.address}`}
        error={getWalletsState.error}
        isLoading={isLoading}
        onClick={() => {}}
      />
    )
}
