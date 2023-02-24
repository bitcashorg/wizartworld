import React from 'react'

import { defaultPercentage, getPercentage, sleep } from '~/lib/utils'
import * as replicateService from '~/services/replicate'

export type PromptOptions = {
  prompt: string
}

type ReplicateContextType = {
  prediction: Prediction | null
  error: string | null
  replicateAssetRequested: boolean
  fetchPrediction: (promptOptions: PromptOptions) => Promise<void>
  loadingPercentage: string
}

const defaultReplicate: ReplicateContextType = {
  prediction: null,
  error: null,
  replicateAssetRequested: false,
  fetchPrediction: async (promptOptions: PromptOptions) => {},
  loadingPercentage: defaultPercentage,
}

export const ReplicateContext = React.createContext<ReplicateContextType>(defaultReplicate)

function ReplicateProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [prediction, setPrediction] = React.useState<Prediction | null>(null)
  const [error, setError] = React.useState<string | null>(null)
  const [loadingPercentage, setLoadingPercentage] = React.useState<string>('0%')
  const [replicateAssetRequested, setReplicateAssetRequested] = React.useState<boolean>(false)

  const fetchPrediction = async (promptOptions: PromptOptions) => {
    if (!promptOptions || replicateAssetRequested) return
    try {
      setReplicateAssetRequested(true)
      let { prediction, error } = await replicateService.fetchPrediction(promptOptions.prompt)
      if (error) {
        setError(error)
        return
      }
      console.log(prediction)
      setPrediction(prediction)
      while (prediction?.status !== 'succeeded' && prediction?.status !== 'failed') {
        await sleep(500)
        const response = await replicateService.fetchPredictionStatus(prediction?.id)
        if (response.error) {
          setError(response.error)
          return
        }
        prediction = response.prediction!
        console.log({ prediction })
        setPrediction({ ...prediction })
        const newPercentage = getPercentage(prediction?.logs || '')
        setLoadingPercentage(newPercentage)
      }
    } finally {
      setReplicateAssetRequested(false)
    }
  }

  const providerValue: ReplicateContextType = {
    prediction,
    error,
    fetchPrediction,
    loadingPercentage,
    replicateAssetRequested,
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
