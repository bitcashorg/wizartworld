import Image from 'next/image'
import React from 'react'

import { ImageAsset } from '~/components/image/image.component'
import { useReplicateContext } from '~/context/replicate.context'

export function NFTPreview() {
  const replicate = useReplicateContext()
  const { prediction } = replicate

  return (
    <>
      {prediction && (
        <div className="w-full">
          {prediction.output && (
            <div className="w-full">
              <ImageAsset
                width={400}
                height={400}
                src={prediction.output[prediction.output.length - 1]}
                alt="output"
              />
            </div>
          )}
        </div>
      )}
    </>
  )
}
