import { useState } from 'react'

interface ResponseType<InputType, OutputType> {
  data: OutputType | null
  isLoading: boolean
  error: Error | null
  fulfilled: boolean
  post: (postData: InputType) => Promise<void>
}

export function usePostData<InputType, OutputType>(
  postService: (data: InputType) => Promise<OutputType>,
): ResponseType<InputType, OutputType> {
  const [data, setData] = useState<OutputType | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [fulfilled, setFulfilled] = useState(false)

  const post = async (postData: InputType) => {
    setIsLoading(true)
    setError(null)
    setFulfilled(false)

    try {
      const response = await postService(postData)
      setData(response)
      setIsLoading(false)
      setFulfilled(true)
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error)
      } else {
        setError(new Error('An unknown error occurred'))
      }
      setIsLoading(false)
      setFulfilled(false)
    }
  }

  return { data, isLoading, error, fulfilled, post }
}
