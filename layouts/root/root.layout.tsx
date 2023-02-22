import { Main } from '~/layouts/components/main'
import { Sidebar } from '~/layouts/components/sidebar'

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Main>{children}</Main>
      </div>
    </div>
  )
}
