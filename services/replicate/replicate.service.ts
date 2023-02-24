import { Prediction } from '~/context/replicate.context'

type FetchPredictionResult = {
  prediction: Prediction | null
  error: string | null
}

export async function fetchPrediction(prompt: string): Promise<FetchPredictionResult> {
  const response = await fetch('/api/predictions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: prompt,
      guidance_scale: 10,
      num_inference_steps: 200,
      num_outputs: 1,
      scheduler: 'PNDM',
    }),
  })
  const prediction = await response.json()
  if (response.status !== 200) return { prediction, error: prediction.detail }
  return { prediction, error: null }
}

export async function fetchPredictionStatus(id: string = ''): Promise<FetchPredictionResult> {
  const response = await fetch('/api/predictions/' + id)
  const prediction = await response.json()
  if (response.status !== 200) return { prediction, error: prediction.detail }
  return { prediction, error: null }
}
