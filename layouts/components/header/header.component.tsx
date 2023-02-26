import React from 'react'

import { WizartLogo } from '~/components/icons'

import { Auth } from './auth.component'
import { Button } from '~/components/button'

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

    const htmlTag = docRef?.current!.getElementsByTagName("html")[0]
    
    if (htmlTag.className.includes("dark")) {
        htmlTag.className = 'light'
    } else {
        htmlTag.className = 'dark'
    }
  }

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-3 py-2 border-b-1 border-b-slate-700 bg-slate-100 dark:bg-slate-900 bg-opacity-25  backdrop-blur-lg backdrop-saturate-[75%]">
      <div className="flex items-center w-full max-w-screen-2xl justify-between mx-auto">
        <a href="/">
          {/* TODO: ! WIZART LOGO IN LIGHT MODE */}
          <WizartLogo className="filter invert dark:invert-0" />
        </a>
        {/* TODO: TOGGLE NOT WORKING */}
        {/* <div className="fixed top-1/4 -left-2 z-50 hidden sm:block">
          <span className="relative inline-block rotate-90">
            <input type="checkbox" className="checkbox opacity-0 absolute" id="chk" onClick={changeTheme} />
            <label className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8" for="chk">
              <i className="uil uil-moon text-[20px] text-yellow-500"></i>
              <i className="uil uil-sun text-[20px] text-yellow-500"></i>
              <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7"></span>
            </label>
          </span>
        </div> */}
        <div className="flex justify-end pt-1 h-30 lg:pr-7">
          <Auth />
        </div>
      </div>
    </header>
  )
}
