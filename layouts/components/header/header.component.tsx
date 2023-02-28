import Link from 'next/link'
import React from 'react'

import { WizartLogo } from '~/components/icons'
import { ButtonSettings } from '~/views/settings/button-settings.component'

import { NiftoryAuth } from './niftory-auth.component'

export function Header() {
  // Create a function that controls the prefered theme and keep the selection on the local storage
  const [theme, setTheme] = React.useState('dark')
  const docRef = React.useRef<Document | null>(null)

  React.useEffect(() => {
    if (document) {
      docRef.current = document
    }
    const localTheme = localStorage.getItem('theme')
    localTheme && setTheme(localTheme)
  }, [])

  React.useEffect(() => {
    localStorage.setItem('theme', theme)
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-3 py-2 border-b-1 border-b-slate-700 bg-opacity-25 dark:bg-opacity-25 bg-slate-100 dark:bg-slate-900 backdrop-blur-lg backdrop-saturate-[75%]">
      <div className="flex items-center justify-between w-full mx-auto max-w-screen-2xl">
        <Link href="/" passHref>
          {/* TODO: ! WIZART LOGO IN LIGHT MODE */}
          <WizartLogo className="filter invert dark:invert-0" />
        </Link>

        <div className="flex justify-end pt-1 gap-x-4 h-30">
          <NiftoryAuth />
          <ButtonSettings />
        </div>
      </div>
    </header>
  )
}
