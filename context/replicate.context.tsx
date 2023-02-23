import React from 'react'

export type PromptOptions = {
  prompt: string
}

type ReplicateContextType = {
  prediction: Prediction | null
  error: string | null
  fetchPrediction: (options: PromptOptions) => Promise<void>
  loadingPercentage: string
}

const defaultPercentage = '0%'

const defaultReplicate: ReplicateContextType = {
  prediction: null,
  error: null,
  fetchPrediction: async () => {},
  loadingPercentage: defaultPercentage,
}

const getPercentage = (logs: string) => {
  try {
    return logs.split('\n').slice(2).slice(-1).join('').split('|')[0].trim()
  } catch (e) {
    return defaultPercentage
  }
}

export const ReplicateContext = React.createContext<ReplicateContextType>(defaultReplicate)

function ReplicateProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [prediction, setPrediction] = React.useState<Prediction | null>()
  const [error, setError] = React.useState<string | null>(null)
  const [loadingPercentage, setLoadingPercentage] = React.useState<string>(defaultPercentage)

  const fetchPrediction = async (options: PromptOptions) => {
    const response = await fetch('/api/predictions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: options.prompt,
        guidance_scale: 10,
        num_inference_steps: 200,
        num_outputs: 1,
        scheduler: 'PNDM',
      }),
    })
    let prediction = await response.json()
    if (response.status !== 201) {
      setError(prediction.detail)
      return
    }
    console.log(prediction)
    setPrediction(prediction)

    while (prediction.status !== 'succeeded' && prediction.status !== 'failed') {
      await sleep(800)
      const response = await fetch('/api/predictions/' + prediction.id)
      prediction = await response.json()
      if (response.status !== 200) {
        setError(prediction.detail)
        return
      }
      console.log({ prediction })
      setPrediction(prediction)
      setLoadingPercentage(getPercentage(prediction.logs))
    }
  }

  const providerValue: ReplicateContextType = {
    prediction,
    error,
    fetchPrediction,
    loadingPercentage,
  }

  return <ReplicateContext.Provider value={providerValue}>{children}</ReplicateContext.Provider>
}

function useReplicateContext() {
  const replicate = React.useContext(ReplicateContext)
  if (!replicate) {
    throw new Error('useReplicateContext must be used within ReplicateProvider')
  }
  return replicate
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))
export interface Prediction {
  completed_at: string
  created_at: string
  error: null
  id: string
  input: Input
  logs: string
  metrics: Metrics
  output: string[]
  started_at: string
  status: string
  urls: Urls
  version: string
  webhook_completed: null
}

export interface Input {
  prompt: string
}

export interface Metrics {
  predict_time: number
}

export interface Urls {
  get: string
  cancel: string
}

export { ReplicateProvider, useReplicateContext }
