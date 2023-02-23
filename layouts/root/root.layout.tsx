import { Header } from '../components/header'
import { Main } from '../components/main'

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center w-screen h-screen align-middle">
      <div className="w-screen h-screen sm:w-[450px] max-h-[800px] self-center flex flex-col">
        <Header />
        <Main>{children}</Main>

        {/* <footer className="p-2 bg-indigo-200">Footer</footer> */}
      </div>
    </div>
  )
}
