import clsx from 'clsx'
import React from 'react'
import { useEffectOnce } from 'react-use'

import { SendPromptIcon } from '~/components/icons'
import { useOpenAI } from '~/context/openai.context'
import { useReplicateContext } from '~/context/replicate.context'
import { wizartDescriptionHeader } from '~/lib/openai'
import { OpenAIWizartChatType } from '~/types'

import { OpenAIWizartChatProps } from './wizart-chat.types'

// ? Can be other colors
const chatCardClass = (item: OpenAIWizartChatType) =>
  clsx('flex gap-3', item.from === 'wizart' ? 'wizart-chat-globe-bg' : 'wizart-user-globe-bg')

export function WizartChat({ next }: OpenAIWizartChatProps) {
  const replicate = useReplicateContext()
  const { error, prediction } = replicate
  const {
    history,
    prompt,
    error: openAIError,
    wizartChat,
    onChangeInput,
    updateChat,
    generateChatCompletion,
    initiateChat,
  } = useOpenAI()

  useEffectOnce(() => {
    initiateChat()
  })

  // Verifying if wizartChat has a message from wizart with a specific regex pattern on a React.useEffect to execute a function
  React.useEffect(() => {
    const wizartMessage = wizartChat.find(
      (item) => item.from === 'wizart' && item.message.includes(wizartDescriptionHeader),
    )

    if (wizartMessage) {
      const message = wizartMessage.message
      const nextPhaseTimeout = setTimeout(async () => {
        try {
          await replicate.fetchPrediction({
            prompt: message
              .substring(message.indexOf('"'), message.lastIndexOf(''))
              .replace(/"/g, ''),
          })

          next()
        } catch (error) {
          throw error
        } finally {
          clearTimeout(nextPhaseTimeout)
        }
      }, 6000)
    }
  }, [wizartChat, replicate, next])

  const sendPromptToWizart = async (e: React.FormEvent<HTMLFormElement>) => {
    updateChat({
      from: 'user',
      message: prompt,
    })
    generateChatCompletion(e)
  }

  return (
    <div className="wizart-chat-wrapper">
      <div className="wizard-step__content-wrapper wizard-step__content-wrapper--chat">
        {wizartChat.map((item, index) => (
          <div key={`${item.from}__${index}`} className={chatCardClass(item)}>
            {item.message.split(item.from === 'wizart' ? 'Wizart:' : 'USER:')[1]}
          </div>
        ))}
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

      {error && <div>{error}</div>}
      {prediction && (
        <div>
          <p>status: {prediction.status}</p>
          <pre>status: {prediction.logs}</pre>
        </div>
      )}
    </div>
  )
}
