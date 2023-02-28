import { useAsync, useAsyncFn, useEffectOnce } from 'react-use'

import * as fcl from '@onflow/fcl'

import { Wallet, enumWalletState } from '~/graphql/generated/schema'
import { useFlowUser } from '~/hooks/use-flow-user'
import { getContract, getWallets } from '~/services/niftory/niftory-frontend.service'

import { ConfigureWallet } from './configure-wallet.component'
import { RegisterWallet } from './register-wallet.component'
import { VerifyWallet } from './verify-wallet.component'
import { WalletSetupBox } from './wallet-setup-box.component'

export function WalletSetup() {
  const [getWalletsState, execGetWallets] = useAsyncFn(getWallets)
  const getContractState = useAsync(getContract)
  const isLoading = getWalletsState.loading || getContractState.loading
  const error = getWalletsState.error || getContractState.error
  const wallet = getWalletsState.value?.wallet
  console.log('💰 wallet', wallet)

  useEffectOnce(() => {
    execGetWallets()
  })

  // User doesn't have a wallet yet
  if (!wallet?.address && !isLoading) return <RegisterWallet callback={execGetWallets} />

  // User has a wallet but it's not verified yet
  if (wallet?.state === enumWalletState.UNVERIFIED)
    return <VerifyWallet callback={execGetWallets} />

  // The user has verified their wallet, but hasn't configured it yet
  if (wallet?.state === enumWalletState.VERIFIED)
    return (
      <ConfigureWallet
        callback={() => {
          // Keep this log for a while
          console.log('[[[[[[[VERIFIED]]]]]]]]]')
          setTimeout(() => {
            execGetWallets()
          }, 1000)
        }}
      />
    )

  // The user has configured their wallet, now they can mint
  return (
    <WalletSetupBox
      label={`You're are set up! Address is ${wallet?.address}`}
      error={error}
      isLoading={isLoading}
      onClick={execGetWallets}
    />
  )
}

export type WalletSetupStepProps = {
  setIsLoading: (isLoading: boolean) => void
  setError: (error: Error | null) => void
}

export type WalletSetupProps = WalletSetupStepProps & {
  wallet: Wallet
  flowUser: fcl.CurrentUserObject
  error: Error
}
