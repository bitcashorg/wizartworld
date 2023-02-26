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
    const response = await mintNFTModel({
      appId: 'cleddmva00002mm0v9hs6quxd',
      id: 'bb8fc546-8bdb-40d9-a6b7-e4f371e29ef4',
      quantity: '1',
    })
    return { response }
  } catch (error) {
    console.log({ error })
    return res.send({
      error: 'Something went wrong.',
    })
  }
}
