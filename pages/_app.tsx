import '~/styles/globals.css'
import '../flow/config'
import type { AppProps } from 'next/app'

import { GlobalLayout } from '~/layouts/global'
import { GlobalContextProvider } from '~/context/global.context'
import { ReplicateProvider } from '~/context/replicate.provider'
import TransactionProvider from '~/context/transaction.context'
import { AuthProvider } from '~/context/auth.provider'

export default function MyApp({ Component, pageProps }: AppProps<any>) {
  return (
    <GlobalContextProvider>
      <TransactionProvider>
        <AuthProvider>
          <GlobalLayout>
            <ReplicateProvider>
              <Component {...pageProps} />
            </ReplicateProvider>
          </GlobalLayout>
        </AuthProvider>
      </TransactionProvider>
    </GlobalContextProvider>
  )
}
