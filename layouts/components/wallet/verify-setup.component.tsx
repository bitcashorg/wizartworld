import { useAsync, useAsyncFn } from 'react-use'

import * as fcl from '@onflow/fcl'

import { Contract, Wallet } from '~/graphql/generated/schema'
import { getContract, getWallets } from '~/services/niftory/niftory-frontend.service'

import { Loading } from '../../../components/loading'
import { RegisterWallet } from './register-wallet.component'
import { WalletSetupBox } from './wallet-setup-box.component'

// import { ConfigureWallet } from './ConfigureWallet'
// import { VerifyWallet } from './VerifyWallet'

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

  if (getWalletsState.loading || getContractState.loading) {
    return (
      <div className="flex items-center content-between justify-center px-4">
        <Loading />
      </div>
    )
  }

  const wallet = getWalletsState.value?.wallet

  console.log('wallet data ==>', wallet)

  // The wallet got an error. Show it to the user
  if (getWalletsState.error && wallet?.address)
    return <pre className="text-sm font-bold text-red-600">{getWalletsState.error.message}</pre>

  // User doesn't have a wallet yet
  if (!wallet?.address) return <RegisterWallet />

  // User has a wallet but it's not verified yet
  // if (wallet.state === enumWalletState.UNVERIFIED) return <VerifyWallet blockchain={contractData?.contract?.blockchain} />

  // The user has verified their wallet, but hasn't configured it yet
  // if (wallet.state === enumWalletState.VERIFIED) return <ConfigureWallet />

  // The user has configured their wallet, now they can mint
  // if (wallet.state === enumWalletState.READY)
  return (
    <WalletSetupBox
      label={`You're are set up! Address is ${wallet?.address}`}
      error={getWalletsState.error}
      isLoading={getWalletsState.loading || getContractState.loading}
      onClick={() => {}}
    />
  )
}
