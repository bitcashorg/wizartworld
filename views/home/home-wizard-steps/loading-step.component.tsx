// TODO: it is for testing only
// import { useEffect, useState } from 'react'
import { Text } from '~/components'
import { WizardStepProps } from '~/components/wizard'
import { useReplicateContext } from '~/context/replicate.context'

export function LoadingStep({ next, prev }: WizardStepProps) {
  const { loadingPercentage } = useReplicateContext()

  // const [loadingPercentage, setLoadingPercentage] = useState<string>('10%')

  // TODO: it is for testing only
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setLoadingPercentage((prev) => {
  //       const percentage = parseInt(prev.split('%')[0])
  //       return percentage < 100 ? `${percentage + 1}%` : `${percentage}%`
  //     })
  //   }, Math.random() * 1000)
  //   return () => clearInterval(interval)
  // }, [])

  return (
    <div>
      <div>
        <div className="flex justify-center py-10">
          <div className="w-[200px] h-[200px] border-4 border-indigo-500/100">
            Animation points in green
          </div>
        </div>
        <div className="w-full rounded-full bg-wz-white h-7 dark:bg-wz-white drop-shadow-wz-purple shadow-wz-purple-500">
          <div
            className="text-center rounded-full h-7 bg-wz-green"
            style={{ width: loadingPercentage }}
          ></div>
          <div className="relative text-center top-[-29px]">
            <Text variant="loading">{loadingPercentage}</Text>
          </div>
        </div>
        <div className="flex justify-center py-5">
          <Text>Generating Assets ...</Text>
        </div>
      </div>
    </div>
  )
}
