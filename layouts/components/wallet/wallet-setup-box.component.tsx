import { useMemo } from 'react'

import { Button } from '../../../components/button'
import { Loading } from '../../../components/loading'
import { Text } from '../../../components/text/text'

type WalletSetupBoxProps = {
  label: string
  isLoading?: boolean
  error?: Error | null
  onClick: () => void
}
export const WalletSetupBox = ({ label, isLoading, error, onClick }: WalletSetupBoxProps) => {
  if (isLoading)
    return (
      <div className="flex items-center content-between justify-center px-4">
        <Loading />
      </div>
    )

  return (
    <div className="flex text-center">
      {error ? (
        <Text variant="info">Something went wrong. Please try again later!</Text>
      ) : (
        <Button onClick={onClick} variant="primary" label={label} />
      )}
    </div>
  )
}
