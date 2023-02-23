import Image from 'next/image'
import { useReplicateContext } from '~/context/replicate.context'
import { useOpenAI } from '~/context/openai.context'
import React from 'react'
import { wizartDescriptionHeader } from '~/lib/openai'
import clsx from 'clsx'
import { OpenAIWizartChatType } from '~/types'
import { useEffectOnce } from 'react-use'
import { OpenAIWizartChatProps } from './wizart-chat.types'
import { SendPromptIcon } from '~/components/icons'

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
  // @eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wizartChat])

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

      <form className="form w-full" onSubmit={sendPromptToWizart}>
        <div className="flex">
          <div className="relative z-50 flex w-full items-center justify-center mx-auto">
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
