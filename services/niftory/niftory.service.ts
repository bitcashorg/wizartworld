import { faker } from '@faker-js/faker'
import { everything } from '@genql/runtime'

import { getBackendEndGraphQLClient } from '~/graphql/backend-client'
import { getFrontEndGraphQLClient } from '~/graphql/frontend-client'

export async function mintNFTModel(__args: { appId: string; id: string; quantity: string }) {
  return (await getBackendEndGraphQLClient()).mutation({
    mintNFTModel: {
      __args,
      ...everything,
    },
  })
}
export async function createNFTSet() {
  const response = getFrontEndGraphQLClient().mutation({
    createNFTSet: {
      __args: {
        data: {
          title: faker.random.words(3),
          attributes: {
            json: 'attributes',
            property: {
              bag: 'of',
              values: 1,
            },
          },
        },
      },
      ...everything,
    },
  })
  return { response }
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

export async function registerWallet({ address }: { address: string }) {
  return getFrontEndGraphQLClient().mutation({
    registerWallet: {
      __args: { address },
      ...everything,
    },
  })
}

export async function transferNft({ nftModelId, userId }: { nftModelId: string; userId: string }) {
  return getFrontEndGraphQLClient().mutation({
    transfer: {
      __args: { nftModelId, userId },
      ...everything,
    },
  })
}

export async function getSets() {
  return getFrontEndGraphQLClient().query({
    sets: { ...everything, models: everything },
  })
}
