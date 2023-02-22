import '~/styles/globals.css'
import '../flow/config'
import type { AppProps } from 'next/app'

import { RootLayout } from '~/layouts/root'
import { GlobalContextProvider } from '~/context/global.context'
import { ReplicateProvider } from '~/context/replicate.context'
import { OpenAIProvider } from '~/context/openai.context'
import Head from 'next/head'
import { AuthProvider } from '~/context/auth.context'

export default function MyApp({ Component, pageProps }: AppProps<any>) {
  return (
    <AuthProvider>
      <GlobalContextProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* importing public css assets */}
          <link rel="stylesheet" href="/assets/css/icons.min.css" />
          <link rel="stylesheet" href="/assets/css/tailwind.min.css" />
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
