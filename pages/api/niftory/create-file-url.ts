import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth/next'

import { CreateFileOptionsInput } from '~/graphql/generated'
import { createFileUploadUrl } from '~/services/niftory'
import { CreateFileUploadUrlParams } from '~/services/niftory/niftory.service.type'

import { authOptions } from '../auth/[...nextauth]'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return res.send({
      error: 'You must be signed in to view the protected content on this page.',
    })
  }

  try {
    console.log('minting ....', req.body)
    const response = await createFileUploadUrl({
      appId: 'cleddmva00002mm0v9hs6quxd',
      ...(JSON.parse(req.body) as Omit<CreateFileUploadUrlParams, 'appId'>),
    })
    console.log('minted!', response)
    return res.send({
      data: response.createFileUploadUrl,
    })
  } catch (error) {
    console.log({ error })
    return res.send({
      error: 'Something went wrong.',
    })
  }
}
