import clsx from 'clsx'
import { useTheme } from 'next-themes'
import React from 'react'

import { Button } from '~/components/button'

export const ButtonThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="transparent"
      border="sm"
      className="rounded-full h-12 w-12 border-violet-600 dark:border-yellow-400"
      onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
    >
      {theme === 'light' ? (
        <i className="uil uil-moon text-[26px] text-violet-600"></i>
      ) : (
        <i className="uil uil-sun text-[26px] text-yellow-400"></i>
      )}
    </Button>
  )
}
