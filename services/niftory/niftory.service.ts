import { faker } from '@faker-js/faker'
import { everything } from '@genql/runtime'

import { getClientGraphQLSdk } from '~/graphql'

export async function mintNFTModel(__args: { appId: string; id: string; quantity: string }) {
  return getClientGraphQLSdk().mutation({
    mintNFTModel: {
      __args,
    },
    ...everything,
  })
}
export async function createNFTSet() {
  const response = getClientGraphQLSdk().mutation({
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
  return getClientGraphQLSdk().query({
    app: everything,
  })
}

export async function getAppUser() {
  return getClientGraphQLSdk().query({
    appUser: { ...everything, wallet: everything },
  })
}

export async function getNftModels() {
  return getClientGraphQLSdk().query({
    nftModels: { ...everything, items: everything },
  })
}

export async function getNfts() {
  return getClientGraphQLSdk().query({
    nfts: { ...everything, items: everything },
  })
}

export async function getWallets() {
  return getClientGraphQLSdk().query({
    wallet: everything,
  })
}

export async function registerWallet({ address }: { address: string }) {
  return getClientGraphQLSdk().mutation({
    registerWallet: {
      __args: { address },
    },
    ...everything,
  })
}

export async function transferNft({ nftModelId, userId }: { nftModelId: string; userId: string }) {
  return getClientGraphQLSdk().mutation({
    transfer: {
      __args: { nftModelId, userId },
    },
    ...everything,
  })
}

export async function getSets() {
  return getClientGraphQLSdk().query({
    sets: { ...everything, models: everything },
  })
}
