import '~/styles/globals.css'

import type { AppProps } from 'next/app'

import { RootLayout } from '~/layouts/root'
import { GlobalContextProvider } from '~/context/global.context'
import { ReplicateProvider } from '~/context/replicate.context'
import { OpenAIProvider } from '~/context/openai.context'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps<any>) {
  return (
    <GlobalContextProvider user={pageProps.user || null}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <RootLayout>
        <OpenAIProvider>
          <ReplicateProvider>
            <Component {...pageProps} />
          </ReplicateProvider>
        </OpenAIProvider>
      </RootLayout>
    </GlobalContextProvider>
  )
}
