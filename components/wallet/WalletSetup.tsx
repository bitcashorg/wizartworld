import * as fcl from '@onflow/fcl'

import { Contract, Wallet, WalletState } from '~/graphql/generated/schema'
import { useFetchData } from '~/hooks/useFetchData'
import { getContract, getWallets } from '~/services/niftory/niftory-frontend.service'

import { Loading } from '../loading'
import { ConfigureWallet } from './ConfigureWallet'
import { RegisterWallet } from './RegisterWallet'
import { VerifyWallet } from './VerifyWallet'
import { WalletSetupBox } from './WalletSetupBox'

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
  const {
    data: walletData,
    isLoading: walletIsLoading,
    error: walletError,
  } = useFetchData<{
    wallet?: Wallet
  }>(getWallets)
  const { data: contractData, isLoading: contractIsLoading } = useFetchData<{
    contract?: Contract
  }>(getContract)

  console.log('walletData', walletData)
  console.log('contractData', contractData)

  if (contractIsLoading || walletIsLoading) {
    return (
      <div className="flex items-center content-between justify-center px-4">
        <Loading />
      </div>
    )
  }

  const wallet = walletData?.wallet

  if (!walletError && !walletIsLoading) {
    console.log('wallet.state', wallet?.state)
    // User doesn't have a wallet yet
    if (!wallet?.address) {
      return <RegisterWallet blockchain={contractData?.contract?.blockchain} />
    }

    switch (wallet.state as WalletState) {
      case 'UNVERIFIED':
        // User has a wallet but it's not verified yet
        return <VerifyWallet blockchain={contractData?.contract?.blockchain} />
      case 'VERIFIED':
        // The user has verified their wallet, but hasn't configured it yet
        return <ConfigureWallet />
      case 'READY':
        // The user has verified their wallet, but hasn't configured it yet
        return <>You wallet is ready!</>
      default:
        return <>{`Invalid wallet configuration: ${wallet.state}`}</>
    }
  }

  return (
    <WalletSetupBox
      label={`You're all set up! Your wallet address is ${wallet?.address}`}
      error={walletError}
      isLoading={contractIsLoading || walletIsLoading}
      onClick={() => {}}
    />
  )
}
