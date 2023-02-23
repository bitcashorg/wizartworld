import type { AppProps } from 'next/app'
import Head from 'next/head'

import { AuthProvider } from '~/context/auth.context'
import { GlobalContextProvider } from '~/context/global.context'
import { OpenAIProvider } from '~/context/openai.context'
import { ReplicateProvider } from '~/context/replicate.context'
import { RootLayout } from '~/layouts/root'
import '~/styles/globals.css'

import '../config/flow/config'

export default function MyApp({ Component, pageProps }: AppProps<any>) {
  return (
    <AuthProvider>
      <GlobalContextProvider>
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
    </AuthProvider>
  )
}
