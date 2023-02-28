import { useMemo } from 'react'

import { Button } from '../button'
import { Loading } from '../loading'
import { Text } from '../text/text'

type WalletSetupBoxProps = {
  label: string
  isLoading?: boolean
  error?: Error | null
  onClick: () => void
}
export const WalletSetupBox = ({ label, isLoading, error, onClick }: WalletSetupBoxProps) => {
  useMemo(() => error && console.error(error), [error])

  if (isLoading) {
    return (
      <div className="flex items-center content-between justify-center px-4">
        <Loading />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex text-center">
        <Text variant="info">Something went wrong. Please try again later!</Text>
      </div>
    )
  }

  return (
    <>
      <div className="flex text-center">
        <Button onClick={onClick} variant="primary" label={label}></Button>
      </div>
    </>
  )
}
