import { useCallback, useEffect, useState } from 'react'

interface ResponseType<OutputType> {
  data: OutputType | null
  isLoading: boolean
  error: Error | null
  fulfilled: boolean
  refetch: () => Promise<void>
}

export function useFetchData<OutputType>(
  fetchService: () => Promise<OutputType>,
): ResponseType<OutputType> {
  const [data, setData] = useState<OutputType | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [fulfilled, setFulfilled] = useState(false)

  const fetch = useCallback(async () => {
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
    }
  }, [fetchService])

  const refetch = useCallback(async () => {
    await fetch()
  }, [fetch])

  useEffect(() => {
    fetch()
  }, [fetch])

  return { data, isLoading, error, fulfilled, refetch }
}
