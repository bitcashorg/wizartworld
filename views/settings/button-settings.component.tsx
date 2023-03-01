import React from 'react'

import { Button } from '~/components/button'
import { useGlobalContext } from '~/context/global.context'

export const ButtonSettings = () => {
  const { toggleSettings } = useGlobalContext()

  return (
    <svg
      fill="currentcolor"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="flex self-center w-12 h-12"
      onClick={toggleSettings}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  )
}
