import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/replicate.module.css'
import { useReplicateContext } from '~/context/replicate.context'
import { useOpenAI } from '~/context/openai.context'
import React from 'react'

export default function Replicate() {
  const replicate = useReplicateContext()
  const { error, prediction } = replicate
  const { history, prompt, error: openAIError, wizartChat, onChangeInput, updateChat, generateChatCompletion, initiateChat } = useOpenAI()

  React.useEffect(() => {
    initiateChat()
  }, [])

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
      <Head>
        <title>Replicate + Next.js</title>
      </Head>


      <h2>Wizart ChatBot</h2>

      <div className="p-4 w-100 flex gap-6 flex-col">
        {wizartChat.map((item, index) => (
          <div key={`${item.from}__${index}`} className="flex gap-3 bg-slate-100">
            {item.message}
          </div>
        ))}

        <form className={styles.form} onSubmit={sendPromptToWizart}>
          <input type="text" name="chatbot-wizart" onChange={onChangeInput} placeholder="Enter a prompt to chat with Wizart" />
          <button type="submit">Send</button>
        </form>
      </div>

      <p>Prompt something:</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" name="prompt" placeholder="Enter a prompt to display an image" />
        <button type="submit">Go!</button>
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
