import { NextApiRequest, NextApiResponse } from 'next'
import { serverEnv } from '~/config/server'

export default async function createPrediction(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch('https://api.replicate.com/v1/predictions', {
    method: 'POST',
    headers: {
      Authorization: `Token ${serverEnv.replicate}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // Pinned to a specific version of Stable Diffusion
      // See https://replicate.com/stability-ai/stable-diffussion/versions
      version: 'db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf',

      // This is the text prompt that will be submitted by a form on the frontend
      input: { prompt: req.body.prompt },
    }),
  })

  if (response.status !== 201) {
    const error = await response.json()
    res.statusCode = 500
    res.end(JSON.stringify({ detail: error.detail }))
    return
  }
  const prediction = await response.json()
  console.log(prediction)
  res.statusCode = 201
  res.end(JSON.stringify(prediction))
}
