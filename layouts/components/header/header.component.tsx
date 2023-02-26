import React from 'react'

import { WizartLogo } from '~/components/icons'

import { Auth } from './auth.component'

export function Header() {

  // TODO: Make a Dark/light mode switcher

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-3 py-2 border-b-1 border-b-slate-700 bg-slate-100 dark:bg-slate-900 bg-opacity-25  backdrop-blur-lg backdrop-saturate-[75%]">
      <div className="flex items-center w-full max-w-screen-2xl justify-between">
        <a href="/">
          {/* TODO: ! WIZART LOGO IN LIGHT MODE */}
          <WizartLogo className="filter invert dark:invert-0" />
        </a>
        <div className="flex justify-end pt-1 h-30 lg:pr-7">
          <Auth />
        </div>
      </div>
    </header>
  )
}
