import '~/styles/globals.css'

import type { AppProps } from 'next/app'

import { GlobalLayout } from '~/layouts/global'
import { GlobalContextProvider } from '~/context/global.context'
import { ReplicateProvider } from '~/context/replicate.context'
import { OpenAIProvider } from '~/context/openai.context'

export default function MyApp({ Component, pageProps }: AppProps<any>) {
  return (
    <GlobalContextProvider user={pageProps.user || null}>
      <GlobalLayout>
        <OpenAIProvider>
          <ReplicateProvider>
            <Component {...pageProps} />
          </ReplicateProvider>
        </OpenAIProvider>
      </GlobalLayout>
    </GlobalContextProvider>
  )
}
