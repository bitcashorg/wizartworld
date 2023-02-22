import React from 'react'
import { Auth } from '~/layouts/components/header/auth.component'

export function Header() {
  return (
    <div className="flex justify-end pt-1 h-30 sm:border-b sm:border-gray-400 sm:border-opacity-25 lg:pr-7">
      <Auth />
    </div>
  )
}
