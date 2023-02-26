import { SessionProvider, useSession } from 'next-auth/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'

import { clientEnv } from '~/config/client'
import { AuthProvider } from '~/context/auth.context'
import { GlobalContextProvider } from '~/context/global.context'
import { OpenAIProvider } from '~/context/openai.context'
import { ReplicateProvider } from '~/context/replicate.context'
import { RootLayout } from '~/layouts/root'
import '~/public/assets/css/icons.min.css'
import '~/public/assets/css/tailwind.css'
import '~/styles/globals.css'
import '~/styles/home-wizard-header.css'
import '~/styles/home-wizard-steps.css'
import '~/styles/line.css'
import '~/styles/wizart-chat.css'

import '../config/flow/config'

export default function MyApp({ Component, pageProps }: AppProps<any>) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>WizartWorld</title>
      </Head>
      <SessionProvider session={pageProps.session}>
        <SessionSync />
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
      </SessionProvider>
    </>
  )
}

function SessionSync() {
  const session = useSession()
  // keep jwt in sync with next session
  useEffect(() => {
    if (session?.data?.user?.jwt)
      localStorage.setItem(clientEnv.jwtLocalStorageKey, session.data?.user?.jwt || '')
  }, [session])

  return <></>
}
