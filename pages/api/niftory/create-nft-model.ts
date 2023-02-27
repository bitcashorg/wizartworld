import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth/next'

import { NFTContentInput, Scalars, Status } from '~/graphql/generated/schema'
import { createNFTModel } from '~/services/niftory/niftory-backend.service'
import { mintNFTModel } from '~/services/niftory/niftory-frontend.service'

import { authOptions } from '../auth/[...nextauth]'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return res.send({
      error: 'You must be signed in to view the protected content on this page.',
    })
  }

  try {
    console.log('minting ....')
    const response = await createNFTModel({
      appId: 'cleddmva00002mm0v9hs6quxd',
      setId: '08080d41-e383-42bb-8bbf-364631fde023',
      data: {
        /** The user-friendly title for this model. This will be added to the blockchain metadata when an NFT is minted. */
        title: '',
        /** The user-friendly subtitle for this model. This will be added to the blockchain metadata when an NFT is minted. */
        subtitle: '',
        /** The user-friendly details about this model. This will be added to the blockchain metadata when an NFT is minted. */
        description: '',
        /** The total supply of NFTs that can be available for this model. This can be updated until the NFTModel is minted. */
        quantity: 1,

        /** The file content for this model. Either 'content' or 'contentId' must be specified. */
        content: {
          /** The ID of the [NFTFile]({{Types.NFTFile}}) content. This can be created using [createFileUploadUrl]({{Mutations.createFileUploadUrl}}). */
          fileId: '',
          /** The ID of the poster [File]({{Types.File}}). This can be created using [createFileUploadUrl]({{Mutations.createFileUploadUrl}}). */
          posterId: '',
        },

        /** Metadata that will be added to the blockchain for any NFTs minted from this model. */
        metadata: {},
        /** A mapping of attributes for this resource. These will be stored in the Niftory API but will not be added to the blockchain. */
        attributes: {},
        /** String labels to tag this [NFTModel]({{Types.NFTModel}}) with. These will be stored in the Niftory API but will not be added to the blockchain. */
        tags: [''],
      },
    })
    console.log('minted!', response)
    return res.send({
      response,
    })
  } catch (error) {
    console.log({ error })
    return res.send({
      error: 'Something went wrong.',
    })
  }
}
