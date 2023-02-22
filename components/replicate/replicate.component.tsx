import Image from 'next/image'

import styles from './replicate.module.css'
import { useReplicateContext } from '~/context/replicate.provider'

export function Replicate() {
  const replicate = useReplicateContext()
  const { error, prediction } = replicate

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const prompt = formData.get('prompt') as string

    replicate.fetchPrediction({ prompt })
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className="flex">
          <div className="relative z-50 flex items-center justify-center max-w-screen-sm mx-auto ">
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
