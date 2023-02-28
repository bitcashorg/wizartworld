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
  // const [executed, setExecuted] = useState(false)

  useEffect(() => {
    setIsLoading(false)
    setFulfilled(false)
    fetchService()
      .then((response: OutputType) => {
        setData(response)
        setIsLoading(false)
        setFulfilled(true)
      })
      .catch((error) => {
        if (error instanceof Error) {
          setError(error)
        } else {
          // handle non-Error objects, if necessary
          setError(new Error('An unknown error occurred'))
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [fetchService, ...dependencies])

  // useEffect(() => {
  //   if (!executed) return

  //   // ? Can we refetch the data
  //   const refetchWalletAfterMutationService = async () => {
  //     setIsLoading(true)

  //     try {
  //       // Getting wallets to reFetch the wallet data
  //       const response = await getWallets()

  //       if (!response?.wallet) throw new Error('No wallet found.')

  //       // @ts-ignore
  //       setData(response.wallet)
  //       setIsLoading(false)
  //       setFulfilled(true)
  //     } catch (error: unknown) {
  //       if (error instanceof Error) {
  //         setError(error)
  //       } else {
  //         // handle non-Error objects, if necessary
  //         setError(new Error('An unknown error occurred'))
  //       }
  //     } finally {
  //       setIsLoading(false)
  //       setExecuted(true)
  //     }
  //   }

  //   refetchWalletAfterMutationService()
  // }, [executed])

  return { data, isLoading, error, fulfilled }
}
