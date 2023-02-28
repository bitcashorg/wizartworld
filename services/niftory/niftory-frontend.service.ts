import { everything } from '@genql/runtime'

import { getFrontEndGraphQLClient } from '~/graphql/frontend-client'

import { VerifyWalletProps } from './niftory.service.type'

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

export async function readyWallet({ address }: { address: string }) {
  return getFrontEndGraphQLClient().mutation({
    readyWallet: {
      __args: { address },
      ...everything,
    },
  })
}

export async function verifyWallet({ address, signedVerificationCode }: VerifyWalletProps) {
  return getFrontEndGraphQLClient().mutation({
    verifyWallet: {
      __args: { address, signedVerificationCode },
      ...everything,
    },
  })
}
