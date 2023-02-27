import { everything } from '@genql/runtime'

import { getFrontEndGraphQLClient } from '~/graphql/frontend-client'

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
