import React from 'react'
import { Auth } from './auth.component'

export function Header() {
  return (
    <header className="p-2 bg-indigo-200">
      <Auth />
    </header>
  )
}
