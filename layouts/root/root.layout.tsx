import { Main } from '~/layouts/components/main'
import { Header } from '~/layouts/components/header'

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center w-screen h-screen align-middle">
      <div className="w-screen h-screen sm:w-[450px] max-h-[800px] self-center flex flex-col   bg-green-600">
        <Header />
        <Main>{children}</Main>

        <footer className="p-2 bg-indigo-200">Footer</footer>
      </div>
    </div>
  )
}
