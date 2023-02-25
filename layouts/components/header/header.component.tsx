import React from 'react'

import { WizartLogo } from '~/components/icons'

import { Auth } from './auth.component'

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full px-3 py-2 border-b-1 border-b-slate-700 bg-slate-900 bg-opacity-25  backdrop-blur-lg backdrop-saturate-[75%]">
      <div className="flex items-center w-full max-w-screen-2xl justify-between">
        <a href="/">
          <WizartLogo />
        </a>
        <div className="flex justify-end pt-1 h-30 lg:pr-7">
          <Auth />
        </div>
      </div>
    </header>
  )
}
