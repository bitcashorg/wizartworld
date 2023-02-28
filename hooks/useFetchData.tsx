import { useEffect, useState } from 'react'
import { getWallets } from '~/services/niftory'

type DependencyArray = readonly unknown[]
interface ResponseType<OutputType> {
  data: OutputType | null
  isLoading: boolean
  error: Error | null
  fulfilled: boolean
}

export function useFetchData<OutputType>(
  fetchService: () => Promise<OutputType>,
  dependencies: DependencyArray = [],
): ResponseType<OutputType> {
  const [data, setData] = useState<OutputType | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [fulfilled, setFulfilled] = useState(false)
  const [executed, setExecuted] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setError(null)
      setFulfilled(false)
      try {
        const response = await fetchService()
        setData(response)
        setIsLoading(false)
        setFulfilled(true)
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error)
        } else {
          // handle non-Error objects, if necessary
          setError(new Error('An unknown error occurred'))
        }
      } finally {
        setIsLoading(false)
        setExecuted(true)
      }
    }

    fetchData()
  }, dependencies)

  return { data, isLoading, error, fulfilled }
}
