import { everything } from '@genql/runtime'
import * as fcl from '@onflow/fcl'

import { getFrontEndGraphQLClient } from '~/graphql/frontend-client'

export type RegisterWalletProps = { address: string }
export async function registerWallet({ address }: RegisterWalletProps) {
  return getFrontEndGraphQLClient().mutation({
    registerWallet: {
      __args: { address },
      ...everything,
    },
  })
}

export async function getContract() {
  return getFrontEndGraphQLClient().query({
    contract: everything,
  })
}

export async function getNiftoryApps() {
  return getFrontEndGraphQLClient().query({
    app: everything,
  })
}

export async function getAppUser() {
  return getFrontEndGraphQLClient().query({
    appUser: { ...everything, wallet: everything },
  })
}

export async function getNftModels() {
  return getFrontEndGraphQLClient().query({
    nftModels: { ...everything, items: everything },
  })
}

export async function getNfts() {
  return getFrontEndGraphQLClient().query({
    nfts: { ...everything, items: everything },
  })
}

export async function getWallets() {
  return getFrontEndGraphQLClient().query({
    wallet: everything,
  })
}

export async function getSets() {
  return getFrontEndGraphQLClient().query({
    sets: { ...everything, models: everything },
  })
}

export type ReadyWalletProps = { address: string }
export async function readyWallet({ address }: ReadyWalletProps) {
  return await getFrontEndGraphQLClient().mutation({
    readyWallet: {
      __args: { address },
      ...everything,
    },
  })
}

export type VerifyWalletProps = {
  address: string
  signedVerificationCode: fcl.CompositeSignature[]
}
export async function verifyWallet({ address, signedVerificationCode }: VerifyWalletProps) {
  return await getFrontEndGraphQLClient().mutation({
    verifyWallet: {
      __args: { address, signedVerificationCode },
      ...everything,
    },
  })
}
