import '~/styles/globals.css'

import type { AppProps } from 'next/app'

import { RootLayout } from '~/layouts/root'
import { GlobalContextProvider } from '~/context/global.context'
import { ReplicateProvider } from '~/context/replicate.provider'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps<any>) {
  return (
    <GlobalContextProvider user={pageProps.user || null}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <RootLayout>
        <ReplicateProvider>
          <Component {...pageProps} />
        </ReplicateProvider>
      </RootLayout>
    </GlobalContextProvider>
  )
}
