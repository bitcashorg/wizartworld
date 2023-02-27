import { faker } from '@faker-js/faker'
import { everything } from '@genql/runtime'

import { getBackendEndGraphQLClient } from '~/graphql/backend-client'
import { getFrontEndGraphQLClient } from '~/graphql/frontend-client'
import { NFTModelCreateInput } from '~/graphql/generated'

export async function mintNFTModel(__args: { appId: string; id: string; quantity: string }) {
  return (await getBackendEndGraphQLClient()).mutation({
    mintNFTModel: {
      __args,
      ...everything,
    },
  })
}

export async function createNFTModel(__args: {
  appId: string
  setId: string
  data: NFTModelCreateInput
}) {
  return (await getBackendEndGraphQLClient()).mutation({
    createNFTModel: {
      __args,
      ...everything,
      content: everything,
      nftListings: everything,
      nfts: everything,
      set: everything,
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
