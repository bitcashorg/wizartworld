import '~/styles/globals.css'
import '~/styles/wizart-chat.css'
import '~/styles/home-wizard-steps.css'
import '~/styles/home-wizard-header.css'

import '../flow/config'

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
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* importing public css assets */}
        <link rel="stylesheet" href="/assets/css/icons.min.css" />
      </Head>
      <AuthProvider>
        <GlobalContextProvider>
          <RootLayout>
            <OpenAIProvider>
              <ReplicateProvider>
                <Component {...pageProps} />
              </ReplicateProvider>
            </OpenAIProvider>
          </RootLayout>
        </GlobalContextProvider>
      </AuthProvider>
    </>
  )
}
