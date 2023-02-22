import { Main } from '~/layouts/components/main'
import { Sidebar } from '~/layouts/components/sidebar'
import { Header } from '../components/header/header.component'

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Main>{children}</Main>
        </div>
      </div>
    </>
  )
}
