import Image from 'next/image'
import { useReplicateContext } from '~/context/replicate.context'
import { useOpenAI } from '~/context/openai.context'
import React from 'react'
import { wizartDescriptionHeader } from '~/lib/openai'
import clsx from 'clsx'
import { OpenAIWizartChatType } from '~/types'
import { useEffectOnce } from 'react-use'

// ? Can be other colors
const chatCardClass = (item: OpenAIWizartChatType) =>
  clsx('flex gap-3', item.from === 'wizart' ? 'bg-slate-800' : 'bg-slate-600')

export function NFTPreview() {
  const replicate = useReplicateContext()
  const { prediction } = replicate


  return (
    <div className="container">
      {prediction && (
        <div>
          {prediction.output && (
            <div className="imageWrapper">
              <Image
                src={prediction.output[prediction.output.length - 1]}
                alt="output"
                sizes="100vw"
                width={768}
                height={768}
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
