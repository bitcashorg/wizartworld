import React from 'react'

import { WizartLogo } from '~/components/icons'

import { Auth } from './auth.component'

export function Header() {
  return (
    <header className="flex justify-between px-3 py-2">
      <WizartLogo />
      <div className="flex justify-end pt-1 h-30 lg:pr-7">
        <Auth />
      </div>
    </header>
  )
}
