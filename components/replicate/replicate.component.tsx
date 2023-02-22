import Image from 'next/image'
import styles from '../styles/replicate.module.css'
import { useReplicateContext } from '~/context/replicate.context'
import { useOpenAI } from '~/context/openai.context'
import React from 'react'
import { wizartDescriptionHeader } from '~/lib/openai'
import clsx from 'clsx'
import { OpenAIWizartChatType } from '~/types'

// ? Can be other colors
const chatCardClass = (item: OpenAIWizartChatType) => clsx(
  'flex gap-3',
  item.from === 'wizart' ? 'bg-slate-300' : 'bg-slate-100'
)

export function Replicate() {
  const replicate = useReplicateContext()
  const { error, prediction } = replicate
  const { history, prompt, error: openAIError, wizartChat, onChangeInput, updateChat, generateChatCompletion, initiateChat } = useOpenAI()

  // React.useEffect(() => {
  //   initiateChat()
  // }, [])

  // Verifying if wizartChat has a message from wizart with a specific regex pattern on a React.useEffect to execute a function
  // React.useEffect(() => {
  //   const wizartMessage = wizartChat.find((item) => item.from === 'wizart' && item.message.includes(wizartDescriptionHeader))

  //   if (wizartMessage) {
  //     const message = wizartMessage.message
  //     const timeout = setTimeout(() => {
  //       replicate.fetchPrediction({ prompt: message.substring(message.indexOf('"'), message.lastIndexOf("")).replace(/"/g, '') })

  //       clearTimeout(timeout)
  //     }, 6000)
  //   }
  // }, [wizartChat])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const prompt = formData.get('prompt') as string

    replicate.fetchPrediction({ prompt })
  }

  const sendPromptToWizart = async (e: React.FormEvent<HTMLFormElement>) => {
    updateChat({
      from: 'user',
      message: prompt
    })
    generateChatCompletion(e)
  }

  return (
    
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className="flex">
          <div className="relative z-50 flex items-center justify-center max-w-screen-sm mx-auto ">
            <div className="p-4 w-100 flex gap-6 flex-col">
              {wizartChat.map((item, index) => (
                <div key={`${item.from}__${index}`} className={chatCardClass(item)}>
                  {item.message.split(item.from === 'wizart' ? 'Wizart:' : 'USER:')[1]}
                </div>
              ))}

              <form className={styles.form} onSubmit={sendPromptToWizart}>
                <input type="text" name="chatbot-wizart" onChange={onChangeInput} placeholder="Enter a prompt to chat with Wizart" />
                <button type="submit">Send</button>
              </form>
            </div>

            <div className="w-full p-1 rounded-md md:min-w-[500px] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              <div className="flex items-center justify-center w-full h-full bg-gray-800 back">
                <input
                  className="relative bg-transparent border-none outline-none z-4"
                  type="text"
                  name="prompt"
                  placeholder="What's on your mind ?"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="ml-3 font-bold bg-gradient-to-r from-violet-600 to-red-600"
            >
            Go!
          </button>
        </div>
      </form>

      {error && <div>{error}</div>}
      {prediction && (
        <div>
          <p>status: {prediction.status}</p>
          {prediction.output && (
            <div className={styles.imageWrapper}>
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
