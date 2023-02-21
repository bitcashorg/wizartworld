import '~/styles/globals.css'

import type { AppProps } from 'next/app'

import { GlobalLayout } from '~/layouts/global'
import { GlobalContextProvider } from '~/context/global.context'
import { ReplicateProvider } from '~/context/replicate.provider'

export default function MyApp({ Component, pageProps }: AppProps<any>) {
  return (
    <GlobalContextProvider user={pageProps.user || null}>
      <GlobalLayout>
        <ReplicateProvider>
          <Component {...pageProps} />
        </ReplicateProvider>
      </GlobalLayout>
    </GlobalContextProvider>
  )
}
