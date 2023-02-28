import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth/next'

import { mintNFTModel } from '~/services/niftory'
import { CreateNftModelParams } from '~/services/niftory/niftory.service.type'

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
    const body: { id: string } = JSON.parse(req.body)
    const response = await mintNFTModel({
      appId: 'cleddmva00002mm0v9hs6quxd',
      id: body.id,
      quantity: '1',
    })
    console.log('minted!', response)
    return res.send({
      data: response.mintNFTModel,
    })
  } catch (error) {
    console.log({ error })
    return res.send({
      error: 'Something went wrong.',
    })
  }
}
