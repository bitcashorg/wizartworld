import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/replicate.module.css'
import { useReplicateContext } from '~/context/replicate.provider'

export default function Replicate() {
  const replicate = useReplicateContext()
  const { error, prediction } = replicate

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const prompt = formData.get('prompt') as string
    replicate.fetchPrediction({ prompt })
  }

  console.log(prediction)

  return (
    <div className={styles.container}>
      <Head>
        <title>Replicate + Next.js</title>
      </Head>

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
