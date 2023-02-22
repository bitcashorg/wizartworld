import React from 'react'

export type PromptOptions = {
  prompt: string
}

type ProviderType = {
  prediction: Prediction | null
  error: string | null
  fetchPrediction: (options: PromptOptions) => Promise<void>
}

const defaultReplicate: ProviderType = {
  prediction: null,
  error: null,
  fetchPrediction: async () => {},
}

export const ReplicateContext = React.createContext(defaultReplicate)

function ReplicateProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [prediction, setPrediction] = React.useState<Prediction | null>(null)
  const [error, setError] = React.useState<string | null>(null)

  const fetchPrediction = async (options: PromptOptions) => {
    const response = await fetch('/api/predictions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: options.prompt,
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
      await sleep(1000)
      const response = await fetch('/api/predictions/' + prediction.id)
      prediction = await response.json()
      if (response.status !== 200) {
        setError(prediction.detail)
        return
      }
      console.log({ prediction })
      setPrediction(prediction)
    }
  }

  const providerValue: ProviderType = {
    prediction,
    error,
    fetchPrediction,
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

export { ReplicateProvider, useReplicateContext }

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
