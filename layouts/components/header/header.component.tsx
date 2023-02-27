import Link from 'next/link'
import React from 'react'

import { WizartLogo } from '~/components/icons'
import { NiftoryAuth } from '~/layouts/components/header/niftory-auth.component'

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

  // ! Toggle not working...
  const changeTheme = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault()

    const htmlTag = docRef?.current!.getElementsByTagName('html')[0]

    if (htmlTag.className.includes('dark')) {
      htmlTag.className = 'light'
    } else {
      htmlTag.className = 'dark'
    }
  }

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-3 py-2 border-b-1 border-b-slate-700 bg-slate-100 dark:bg-slate-900 bg-opacity-25  backdrop-blur-lg backdrop-saturate-[75%]">
      <div className="flex items-center justify-between w-full mx-auto max-w-screen-2xl">
        <Link href="/" passHref>
          {/* TODO: ! WIZART LOGO IN LIGHT MODE */}
          <WizartLogo className="filter invert dark:invert-0" />
        </Link>
        {/* TODO: TOGGLE NOT WORKING */}
        {/* <div className="fixed z-50 hidden top-1/4 -left-2 sm:block">
          <span className="relative inline-block rotate-90">
            <input type="checkbox" className="absolute opacity-0 checkbox" id="chk" onClick={changeTheme} />
            <label className="flex items-center justify-between h-8 p-1 rounded-full shadow cursor-pointer label bg-slate-900 dark:bg-white dark:shadow-gray-800 w-14" for="chk">
              <i className="uil uil-moon text-[20px] text-yellow-500"></i>
              <i className="uil uil-sun text-[20px] text-yellow-500"></i>
              <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7"></span>
            </label>
          </span>
        </div> */}
        <div className="flex justify-end pt-1 h-30 lg:pr-7">
          <NiftoryAuth />
        </div>
      </div>
    </header>
  )
}
