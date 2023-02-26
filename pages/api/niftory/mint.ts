import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth/next'

import { mintNFTModel } from '~/services/niftory/niftory.service'

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
    const response = await mintNFTModel({
      appId: 'cleddmva00002mm0v9hs6quxd',
      id: '08080d41-e383-42bb-8bbf-364631fde023',
      quantity: '1',
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
