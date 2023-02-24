import React from 'react'
import { Header } from '../components/header'
import { Main } from '../components/main'
import { clientEnv } from '~/config/client'
import { useSession } from 'next-auth/react'

export function RootLayout({ children }: { children: React.ReactNode }) {
  const session = useSession()

  // keep jwt in sync with next session
  React.useEffect(() => {
    localStorage.setItem(clientEnv.services.auth, session.data?.user?.jwt || '')
  }, [session.data?.user.jwt])

  return (
    <div className="flex justify-center w-screen h-screen align-middle">
      <div className="w-screen h-screen sm:max-w-screen-lg max-h-[800px] content-center sm:content-start flex flex-col">
        <Header />
        <Main>{children}</Main>

        {/* <footer className="p-2 bg-indigo-200">Footer</footer> */}
      </div>
    </div>
  )
}
