import clsx from 'clsx'
import React from 'react'
import { useEffectOnce } from 'react-use'

import { SendPromptIcon } from '~/components/icons'
import { useOpenAI } from '~/context/openai.context'
import { useReplicateContext } from '~/context/replicate.context'
import { wizartDescriptionHeader } from '~/lib/openai'

import { OpenAIWizartChatProps } from './wizart-chat.types'

let replicateAssetRequested = false

// ? Can be other colors
const chatCardClass = (item: string) =>
  clsx('flex gap-3 relative', item === 'wizart' ? 'wizart-chat-globe-bg' : 'wizart-user-globe-bg')

export function WizartChat({ next }: OpenAIWizartChatProps) {
  const replicate = useReplicateContext()
  const [loading, setLoading] = React.useState(true)
  const { prediction } = replicate
  const {
    prompt,
    wizartChat,
    onChangeInput,
    updateChat,
    generateChatCompletion,
    initiateChat,
  } = useOpenAI()

  const initializeWizart = async () => {
    if (prediction) {
      setLoading(false)

      return
    }

    try {
      const results = await initiateChat()

       if (results?.initiated) setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  useEffectOnce(() => {
    initializeWizart()
  })

  // Verifying if wizartChat has a message from wizart with a specific regex pattern on a React.useEffect to execute a function
  React.useEffect(() => {
    const message = wizartChat.wizart
    const wizartMessage = message.includes(wizartDescriptionHeader)

    if (wizartMessage) {
      const nextPhaseTimeout = setTimeout(async () => {
        try {
          if (replicateAssetRequested) return

          await replicate.fetchPrediction({
            prompt: message
              .substring(message.indexOf('"'), message.lastIndexOf('"'))
              .replace(/"/g, ''),
          })

          // ? This is a global variable to prevent multiple requests
          replicateAssetRequested = true

          next()
        } catch (error) {
          throw error
        } finally {
          clearTimeout(nextPhaseTimeout)
        }
      }, 4000)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wizartChat.wizart])

  const sendPromptToWizart = async (e: React.FormEvent<HTMLFormElement>) => {
    e.currentTarget.reset()
    setLoading(true)

    try {
      updateChat({
        from: 'user',
        message: prompt,
      })
      await generateChatCompletion(e)
    } catch (error) {
      return error
    } finally {
      setLoading(false)
    }
  }

  const retryPromptToWizart = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setLoading(true)

    try {
      await generateChatCompletion(e as React.MouseEvent<HTMLDivElement, MouseEvent>)
    } catch (error) {
      return error
    } finally {
      setLoading(false)
    }
  }

  const wizartMessage = wizartChat.wizart ? wizartChat.wizart.split('Wizart:')[1] : ''
  const userPrompt = wizartChat.user ? wizartChat.user.split('USER:')[1] : ''

  // TODO: Add Loader Component Here
  if (prediction) return (
    <div className="wizart-chat-wrapper">
      <div className="wizard-step__content-wrapper wizard-step__content-wrapper--chat">
        <div className={chatCardClass('wizart')}>
          Processing New Asset. Estimated time: {prediction?.metrics.predict_time || ''}sec
        </div>
        <pre className="flex gap-3">
          {prediction?.logs || ''}
        </pre>
      </div>
    </div>
  )

  const filterWizartPrompt = wizartMessage && wizartMessage.includes(wizartDescriptionHeader) ? wizartDescriptionHeader : wizartMessage
  const wizartThinkingResponse = loading ? 'Thinking...' : wizartDescriptionHeader
  const wizardResponse = wizartMessage && (!wizartMessage.includes(wizartDescriptionHeader) || !loading)
    ? filterWizartPrompt
    : wizartThinkingResponse

  return (
    <div className="wizart-chat-wrapper">
      <div className="wizard-step__content-wrapper wizard-step__content-wrapper--chat">
        <div className={chatCardClass('wizart')} onClick={(e) => !loading && !wizartMessage ? retryPromptToWizart(e) : undefined}>
          {!loading && !wizartMessage ? 'Retry' : wizardResponse}
          {loading ? (
            <span className="wizart-chat-loader-wrapper">
              <span className="dot-flashing" />
            </span>
          ) : null}
        </div>
        {userPrompt ? (
          <div className={chatCardClass('user')}>
            {userPrompt}
          </div>
        ) : null}
      </div>

      <form className="w-full form" onSubmit={sendPromptToWizart}>
        <div className="flex">
          <div className="relative z-50 flex items-center justify-center w-full mx-auto">
            <div className="wizart-chat-user-prompt">
              <div className="wizart-chat-user-prompt__actions">
                <input
                  type="text"
                  name="prompt"
                  placeholder="What's on your mind ?"
                  onChange={onChangeInput}
                />
                <button type="submit" aria-label="click to send a prompt to Wizart">
                  <SendPromptIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
