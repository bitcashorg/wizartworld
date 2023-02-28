import { faker } from '@faker-js/faker'
import { everything } from '@genql/runtime'

import { getBackendEndGraphQLClient } from '~/graphql/backend-client'
import { CreateFileUploadUrlParams, CreateNftModelParams } from '~/services/niftory'

export async function mintNFTModel(__args: { appId: string; id: string; quantity: string }) {
  console.log('mintNFTModel', __args)
  return (await getBackendEndGraphQLClient()).mutation({
    mintNFTModel: {
      __args,
      ...everything,
    },
  })
}

export async function createNFTModel(__args: CreateNftModelParams) {
  return (await getBackendEndGraphQLClient()).mutation({
    createNFTModel: {
      __args,
      ...everything,
      content: everything,
      nftListings: everything,
      nfts: everything,
      // set: everything,
    },
  })
}

export async function createNFTSet() {
  const response = (await getBackendEndGraphQLClient()).mutation({
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

export async function transferNft({ nftModelId, userId }: { nftModelId: string; userId: string }) {
  return (await getBackendEndGraphQLClient()).mutation({
    transfer: {
      __args: { nftModelId, userId },
      ...everything,
    },
  })
}

export async function createFileUploadUrl(__args: CreateFileUploadUrlParams) {
  return (await getBackendEndGraphQLClient()).mutation({
    createFileUploadUrl: {
      __args,
      ...everything,
    },
  })
}
