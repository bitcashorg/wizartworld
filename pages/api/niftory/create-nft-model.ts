import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth/next'

import { createNFTModel } from '~/services/niftory'
import {
  CreateFileUploadUrlParams,
  CreateNftModelParams,
} from '~/services/niftory/niftory.service.type'

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
    const body = JSON.parse(req.body) as Omit<CreateNftModelParams, 'appId' | 'setId'>
    const response = await createNFTModel({
      appId: 'cleddmva00002mm0v9hs6quxd',
      setId: 'e9dd71f3-2882-4748-aeef-e4954088f70a',
      ...body,
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
