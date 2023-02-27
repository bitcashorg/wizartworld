import { faker } from '@faker-js/faker'
import { everything } from '@genql/runtime'

import { getBackendEndGraphQLClient } from '~/graphql/backend-client'
import { CreateFileOptionsInput, NFTModelCreateInput } from '~/graphql/generated'

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

export async function registerWallet({ address }: { address: string }) {
  return (await getBackendEndGraphQLClient()).mutation({
    registerWallet: {
      __args: { address },
      ...everything,
    },
  })
}

export async function transferNft({ nftModelId, userId }: { nftModelId: string; userId: string }) {
  return (await getBackendEndGraphQLClient()).mutation({
    transfer: {
      __args: { nftModelId, userId },
      ...everything,
    },
  })
}

export async function createFileUploadUrl(__args: {
  /** A friendly name for the file. */
  name: string
  /** Description about the file. If specified, and uploadToIpfs=true, this description will be added to the IPFS file metadata. */
  description: string
  /** The app ID this file should be uploaded to. Only supported if calling with admin credentials. */
  appId: string
  /** File upload options, such as whether to upload to IPFS. */
  options?: CreateFileOptionsInput
}) {
  return (await getBackendEndGraphQLClient()).mutation({
    createFileUploadUrl: {
      __args,
      ...everything,
    },
  })
}
