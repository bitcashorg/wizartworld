import * as fcl from '@onflow/fcl'

import { Contract, Wallet, WalletState, enumWalletState } from '~/graphql/generated/schema'
import { useFetchData } from '~/hooks/useFetchData'
import { getContract, getWallets } from '~/services/niftory/niftory-frontend.service'

import { Loading } from '../loading'
import { RegisterWallet } from './RegisterWallet'
import { WalletSetupBox } from './WalletSetupBox'
import { useState } from 'react'
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

  console.log('wallet data ==>', wallet)

  // The wallet got an error. Show it to the user
  if (walletError && wallet?.address) return <pre className="text-red-600 text-sm font-bold">{walletError.message}</pre>

  // TODO: This is making re-render for the other states verification. Improve guard here.
  // User doesn't have a wallet yet
  if (!wallet?.address) return <RegisterWallet blockchain={contractData?.contract?.blockchain} />

  // User has a wallet but it's not verified yet
  // if (wallet.state === enumWalletState.UNVERIFIED) return <VerifyWallet blockchain={contractData?.contract?.blockchain} />
  
  // The user has verified their wallet, but hasn't configured it yet
  // if (wallet.state === enumWalletState.VERIFIED) return <ConfigureWallet />
  
  // The user has configured their wallet, now they can mint
  // if (wallet.state === enumWalletState.READY)
    return (
      <WalletSetupBox
        label={`You're wallet is set up! Your address is ${wallet?.address}`}
        error={walletError}
        isLoading={contractIsLoading || walletIsLoading}
        onClick={() => {}}
      />
    )
  
}
